using DotNetCoreFans.Models;
using DotNetCoreFans.Common;
using System;
using System.Linq;

namespace DotNetCoreFans.Repositories
{
    public class UserRepository
    {
        private readonly DotNetCoreFansContext _dotNetCoreFansContext;

        public UserRepository(DotNetCoreFansContext dotNetCoreFansContext)
        {
            _dotNetCoreFansContext = dotNetCoreFansContext;
        }

        public User AddUser(User user)
        {
            user.Password = SecurityHelper.Sha256Hash(user.Password);
            user.CreateTime = DateTime.Now;
            user.UpdateTime = DateTime.Now;
            _dotNetCoreFansContext.User.Add(user);
            _dotNetCoreFansContext.SaveChanges();

            return user;
        }

        public User GetUserById(int id)
        {
            var user = _dotNetCoreFansContext.User.FirstOrDefault(item => item.Id == id);
            
            return user;
        }
    }
}