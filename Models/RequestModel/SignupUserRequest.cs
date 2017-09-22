using System.ComponentModel.DataAnnotations;

namespace DotNetCoreFans.Models.RequestModel
{
    public class SignupUserRequest
    {
        [Required]
        public string NickName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$", ErrorMessage = "Invalid Mail")]
        public string Email { get; set; }
    }
}