using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class Topic
    {
        public long Id { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public long CreateUserId { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? UpdateTime { get; set; }
        public bool IsLock { get; set; }
        public bool IsRecommand { get; set; }
        public bool IsTop { get; set; }
        public bool IsDelete { get; set; }
        public DateTime? LastReplyDate { get; set; }
        public long? LastReplyUserId { get; set; }
    }
}
