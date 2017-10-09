using System.Collections.Generic;
using DotNetCoreFans.Models;
using DotNetCoreFans.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    [Route("api/[controller]")]
    public class RecommendController : Controller
    {
        private RecommendService _recommendService;
        
        public RecommendController(RecommendService recommendService)
        {
            _recommendService = recommendService;
        }

        [HttpGet]
        public IEnumerable<Recommend> GetAllRecommend([FromQuery] int size)
        {
            var topicList = _recommendService.GetAllRecommend(size);
            return topicList;
        }
    }
}