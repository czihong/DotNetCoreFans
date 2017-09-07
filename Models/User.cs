using System;
using System.Collections.Generic;

namespace DotNetCoreFans.Models
{
    public partial class User
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public string Signature { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public byte Status { get; set; }
    }
}
