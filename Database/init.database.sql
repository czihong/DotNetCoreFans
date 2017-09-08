ALTER DATABASE [DotNetCoreFans] COLLATE Chinese_PRC_CI_AS;

IF OBJECT_ID('[User]') IS NOT NULL DROP TABLE [User];
CREATE TABLE [User]
(
	ID bigint identity primary key,
	UserName nvarchar(20) not null unique,
	Password nvarchar(32) not null,
	Email nvarchar(100) not null unique,
	Location nvarchar(100),
	Signature nvarchar(200),
	CreateTime datetime not null,
    UpdateTime datetime not null,
	Status tinyint not null
);

IF OBJECT_ID('Topic') IS NOT NULL DROP TABLE Topic;
CREATE TABLE Topic
(
	ID bigint identity primary key,
	Category nvarchar(50) not null,
	Title nvarchar(100) not null,
	Content nvarchar(max) not null,
	CreateUserId bigint not null,
	CreateTime datetime not null,
	UpdateTime datetime,	
	IsLock bit not null,
	IsRecommand bit not null,
	IsTop bit not null,
	IsDelete bit not null,
	LastReplyDate datetime,
	LastReplyUserID bigint
);

IF OBJECT_ID('Comment') IS NOT NULL DROP TABLE Comment;
CREATE TABLE Comment
(
	ID bigint identity primary key,
	TopicID bigint not null,
	ReplyID bigint,
	Content nvarchar(max) not null,
	IsDelete bit not null,
	CreateuserId bigint not null,
	CreateTime datetime not null,
    UpdateTime datetime not null
);

IF OBJECT_ID('TopicCollect') IS NOT NULL DROP TABLE TopicCollect;
CREATE TABLE TopicCollect
(
	UserID bigint not null,
	TopicID bigint not null,
	CreateTime datetime not null
	primary key(UserID, TopicID)
);

IF OBJECT_ID('CommentVote') IS NOT NULL DROP TABLE CommentVote;
CREATE TABLE CommentVote
(
	UserID bigint not null,
	CommentID bigint not null,
	CreateTime datetime not null
	primary key(UserID, CommentID)
);

IF OBJECT_ID('Message') IS NOT NULL DROP TABLE Message;
CREATE TABLE Message
(
	ID bigint identity primary key,
	Type tinyint not null,
	TopicID bigint,
	CommentID bigint,
	FromUserID bigint,
	ToUserID bigint not null,
	CreateTime datetime not null,
    UpdateTime datetime not null,
	IsRead bit not null
);