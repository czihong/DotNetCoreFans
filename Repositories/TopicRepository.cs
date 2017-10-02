using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCoreFans.Models;

namespace DotNetCoreFans.Repositories
{
    public class TopicRepository
    {
        private readonly DotNetCoreFansContext _dotNetCoreFansContext;

        public TopicRepository(DotNetCoreFansContext dotNetCoreFansContext)
        {
            _dotNetCoreFansContext = dotNetCoreFansContext;
        }

        public List<Topic> GetTopic(int pageNumber, int pageSize)
        {
            return _dotNetCoreFansContext.Topic.Where(item => item.IsDelete != false)
                .OrderByDescending(item => item.CreateTime).Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
        }

        public IEnumerable<Topic> GetAllTopic(int pageNumber, int pageSize)
        {
            return _dotNetCoreFansContext.Topic.OrderByDescending(item => item.CreateTime).Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }

        internal IEnumerable<Topic> GetTopicByUserId(int userId, int size)
        {
            var result = _dotNetCoreFansContext.TopicCollect
                .Where(item => item.UserId == userId)
                .Join(_dotNetCoreFansContext.Topic,
                    topicCollect => topicCollect.TopicId,
                    topic => topic.Id,
                    (topicCollect, topic) => topic)
                .OrderBy(item => item.CreateTime)
                .Take(size);

            return result;
        }
    }
}
