using System.Diagnostics;
using DotNetCoreFans.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    [Route("[controller]")]
    public class TopicController : Controller
    {
        private readonly TopicService _topicService;

        public TopicController(TopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet]
        public IActionResult Index([FromQuery] int page = 1)
        {
            ViewData["TopicList"] = _topicService.GetAllTopic(page);
            return View();
        }

        [HttpGet("{id}")]
        public IActionResult Topic([FromRoute] int id)
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}