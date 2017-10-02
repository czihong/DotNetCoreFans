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

        public IEnumerable<Topic> GetTopicByUserId(int userId, int topicId, int size)
        {
            var result = _dotNetCoreFansContext.TopicCollect
                .Where(item => item.UserId == userId)
                .Join(_dotNetCoreFansContext.Topic,
                    topicCollect => topicCollect.TopicId,
                    topic => topic.Id,
                    (topicCollect, topic) => topic)
                .Where(item => item.Id != topicId)
                .OrderBy(item => item.CreateTime)
                .Take(size);

            return result;
        }

        public Topic GetTopicById(int topicId)
        {
            var result = _dotNetCoreFansContext.Topic
                .Where(item => item.Id == topicId)
                .OrderBy(item => item.CreateTime)
                .FirstOrDefault();
            
            return result;
        }
    }
}
