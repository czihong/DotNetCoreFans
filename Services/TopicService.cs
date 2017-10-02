using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCoreFans.Repositories;
using DotNetCoreFans.Models;

namespace DotNetCoreFans.Services
{
    public class TopicService
    {
        private readonly int _defaultPageSize = 20;
        private readonly TopicRepository _topicRepository;

        public TopicService(TopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public List<Topic> GetTopic()
        {
            return _topicRepository.GetTopic(1,20);
        }

        public IEnumerable<Topic> GetAllTopic(int pageNumber)
        {
            return _topicRepository.GetAllTopic(pageNumber, _defaultPageSize);
        }

        public IEnumerable<Topic> GetTopicByUserId(int userId, int size)
        {
            return _topicRepository.GetTopicByUserId(userId, size);
        }
    }
}
