using System.Collections.Generic;
using System.Linq;
using DotNetCoreFans.Models;

namespace DotNetCoreFans.Repositories
{
    public class RecommendRepository
    {
        private readonly DotNetCoreFansContext _dotNetCoreFansContext;

        public RecommendRepository(DotNetCoreFansContext dotNetCoreFansContext)
        {
            _dotNetCoreFansContext = dotNetCoreFansContext;
        }

        public IEnumerable<Recommend> GetAllRecommend(int size)
        {
            return _dotNetCoreFansContext.Recommend.OrderByDescending(item => item.CreateTime).Take(size);
        }
    }
}