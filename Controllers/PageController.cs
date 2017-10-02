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
            var topicList = _topicService.GetAllTopic(page);
            return Json(topicList);
        }
        
    }
}