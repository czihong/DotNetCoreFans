using System.Collections.Generic;
using System.Diagnostics;
using DotNetCoreFans.Models;
using DotNetCoreFans.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    [Route("api/[controller]")]
    public class TopicController : Controller
    {
        private readonly TopicService _topicService;

        public TopicController(TopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet("[action]")]
        public IEnumerable<Topic> Topic([FromQuery] int page)
        {
            page = page <= 0 ? 1 : page;

            var topicList = _topicService.GetAllTopic(page);
            return topicList;
        }

        [HttpGet("{id}")]
        public Topic GetTopicById([FromRoute] int id)
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return new Topic();
        }
    }
}