using System.Collections.Generic;
using System.Diagnostics;
using DotNetCoreFans.Models;
using DotNetCoreFans.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPut]
        public User Signup([FromBody] RequestSignupUser requestSignUpUser)
        {
            var topicList = _userService.CreateUser(requestSignUpUser);
            return topicList;
        }
    }
}