using System.Collections.Generic;
using System.Diagnostics;
using DotNetCoreFans.Models;
using DotNetCoreFans.Models.RequestModel;
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
        public User Signup([FromBody] SignupUserRequest signupUserRequest)
        {
            var result = _userService.CreateUser(signupUserRequest);
            
            return result;
        }

        [HttpGet("{id}")]
        public User Get([FromRoute] int id)
        {
            var result = _userService.GetUserById(id);

            return result;
        }
    }
}