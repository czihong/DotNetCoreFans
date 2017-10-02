using System.Collections.Generic;
using System.Diagnostics;
using DotNetCoreFans.Models;
using DotNetCoreFans.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    [Route("api/[controller]")]
    public class PageController : Controller
    {
        private readonly TopicService _topicService;
        
        public PageController(TopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet]
        public JsonResult TopicList([FromQuery] int page)
        {
            page = page <= 0 ? 1 : page;

            var topicList = _topicService.GetAllTopic(page);
            var userTopic = _topicService.GetTopicByUserId(1, 5);
            
            return Json(new {
                topicList = topicList,
                userTopic = userTopic
            });
        }
        
    }
}