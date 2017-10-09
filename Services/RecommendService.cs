using System.Collections.Generic;
using DotNetCoreFans.Models;
using DotNetCoreFans.Repositories;

namespace DotNetCoreFans.Services
{
    public class RecommendService
    {
        private RecommendRepository _recommendRepository;
        
        public RecommendService(RecommendRepository recommendRepository)
        {
            _recommendRepository = recommendRepository;
        }

        public IEnumerable<Recommend> GetAllRecommend(int size)
        {
            return _recommendRepository.GetAllRecommend(size);
        }
    }
}