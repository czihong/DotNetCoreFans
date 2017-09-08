using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class Comment
    {
        public long Id { get; set; }
        public long TopicId { get; set; }
        public long? ReplyId { get; set; }
        public string Content { get; set; }
        public bool IsDelete { get; set; }
        public long CreateuserId { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}
