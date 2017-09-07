using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class TopicCollect
    {
        public long UserId { get; set; }
        public long TopicId { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
