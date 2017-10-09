using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public class Recommend
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
        public bool IsDelete { get; set; }
    }
}