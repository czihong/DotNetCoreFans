using DotNetCoreFans.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace DotNetCoreFans.Repositories
{
    public class CommentRepository
    {
        private readonly DotNetCoreFansContext _dotNetCoreFansContext;

        public CommentRepository(DotNetCoreFansContext dotNetCoreFansContext)
        {
            _dotNetCoreFansContext = dotNetCoreFansContext;
        }

        public IEnumerable<Comment> GetCommentsByTopicId(int topicId, int size)
        {
            var result = _dotNetCoreFansContext.Comment
                .Where(item => item.TopicId == topicId)
                .OrderBy(item => item.CreateTime)
                .Take(size);

            return result;
        }

        public Comment AddComment(Comment comment)
        {
            comment.CreateTime = DateTime.Now;
            comment.UpdateTime = DateTime.Now;
            _dotNetCoreFansContext.Comment.Add(comment);
            _dotNetCoreFansContext.SaveChanges();

            return comment;
        }

        public Comment UpdateComment(int commentId, Comment comment)
        {
            var oldComment = _dotNetCoreFansContext.Comment.FirstOrDefault(item => item.Id == commentId);
            _dotNetCoreFansContext.Entry(oldComment).CurrentValues.SetValues(comment);
            _dotNetCoreFansContext.SaveChanges();

            return comment;
        }

        public Comment DeleteComment(int commendId)
        {
            var comment = _dotNetCoreFansContext.Comment.FirstOrDefault(item => item.Id == commendId);
            comment.IsDelete = true;
            _dotNetCoreFansContext.Comment.Update(comment);
            _dotNetCoreFansContext.SaveChanges();

            return comment;
        }
    }
}