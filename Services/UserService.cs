using System;
using DotNetCoreFans.Models;
using DotNetCoreFans.Models.RequestModel;
using DotNetCoreFans.Repositories;

namespace DotNetCoreFans.Services
{
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User CreateUser(SignupUserRequest signupUserRequest)
        {
            var user = new User{
                NickName = signupUserRequest.NickName,
                Password = signupUserRequest.Password,
                Email = signupUserRequest.Email
            };
            var result = _userRepository.AddUser(user);

            return result;
        }

        public User GetUserById(int id)
        {
            var user = _userRepository.GetUserById(id);

            return user;
        }
    }
}