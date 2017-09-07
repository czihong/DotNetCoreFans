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
        private readonly TopicRepository _topicRepository;

        public TopicService(TopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public List<Topic> GetTopic()
        {
            return _topicRepository.GetTopic(1,20);
        }
    }
}
