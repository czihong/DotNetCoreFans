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

        /// <summary>
        /// Get user's other topic
        /// </summary>
        public IEnumerable<Topic> GetTopicByUserId(int userId, int topicId, int size)
        {
            return _topicRepository.GetTopicByUserId(userId, topicId, size);
        }

        public Topic GetTopicById(int topicId)
        {
            return _topicRepository.GetTopicById(topicId);
        }

        public Topic AddTopic(Topic topic)
        {
            return _topicRepository.AddTopic(topic);
        }

        public Topic UpdateTopic(int topicId, Topic topic)
        {
            return _topicRepository.UpdateTopic(topicId, topic);
        }

        public Topic DeleteTopic(int topicId)
        {
            return _topicRepository.DeleteTopic(topicId);
        }
    }
}
