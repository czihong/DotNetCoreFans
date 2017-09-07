using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DotNetCoreFans.Models
{
    public partial class DotNetCoreFansContext : DbContext
    {
        public virtual DbSet<Comment> Comment { get; set; }
        public virtual DbSet<CommentVote> CommentVote { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<Topic> Topic { get; set; }
        public virtual DbSet<TopicCollect> TopicCollect { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=DotNetCoreFans;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.ReplyId).HasColumnName("ReplyID");

                entity.Property(e => e.TopicId).HasColumnName("TopicID");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<CommentVote>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.CommentId });

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.CommentId).HasColumnName("CommentID");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Message>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CommentId).HasColumnName("CommentID");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.FromUserId).HasColumnName("FromUserID");

                entity.Property(e => e.ToUserId).HasColumnName("ToUserID");

                entity.Property(e => e.TopicId).HasColumnName("TopicID");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Topic>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.LastReplyDate).HasColumnType("datetime");

                entity.Property(e => e.LastReplyUserId).HasColumnName("LastReplyUserID");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TopicCollect>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.TopicId });

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.TopicId).HasColumnName("TopicID");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__User__A9D10534DDFC4AB8")
                    .IsUnique();

                entity.HasIndex(e => e.UserName)
                    .HasName("UQ__User__C9F28456BEF8251A")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Location).HasMaxLength(100);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(32);

                entity.Property(e => e.Signature).HasMaxLength(200);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(20);
            });
        }
    }
}
