using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class Message
    {
        public long Id { get; set; }
        public byte Type { get; set; }
        public long? TopicId { get; set; }
        public long? CommentId { get; set; }
        public long? FromUserId { get; set; }
        public long ToUserId { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
        public bool IsRead { get; set; }
    }
}
