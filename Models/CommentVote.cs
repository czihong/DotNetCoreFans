using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class CommentVote
    {
        public long UserId { get; set; }
        public long CommentId { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
