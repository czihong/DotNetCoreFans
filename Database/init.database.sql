/************************************ User ************************************/
IF OBJECT_ID('[User]') IS NOT NULL DROP TABLE [User];
CREATE TABLE [User]
(
	Id bigint identity primary key,
	Email nvarchar(100) not null unique,
	Password nvarchar(256) not null,
	NickName nvarchar(20) not null unique,
	Location nvarchar(100),
	Signature nvarchar(200),
	CreateTime datetime not null DEFAULT GETDATE(),
    UpdateTime datetime not null DEFAULT GETDATE(),
	Status tinyint not null default 0
);

INSERT INTO [User] 
(Email, Password, NickName, Location, Signature) 
VALUES 
('dotnet@fans.com', '8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92', '见字如面', '上海', '见字如面的签名'),
('beijing@fans.com', '8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92', 'Beijing Fans', 'Beijing', 'Beijing Fans的签名');

SELECT * FROM [User];

/************************************ Topic ************************************/
IF OBJECT_ID('Topic') IS NOT NULL DROP TABLE Topic;
CREATE TABLE Topic
(
	Id bigint identity primary key,
	Category nvarchar(50) not null,
	Title nvarchar(100) not null,
	Content nvarchar(max) not null,
	CreateTime datetime not null,
	UpdateTime datetime,	
	IsLock bit not null,
	IsRecommand bit not null,
	IsTop bit not null,
	IsDelete bit not null,
	LastReplyDate datetime,
	LastReplyUserID bigint
);

INSERT INTO TOPIC
(Category, Title, Content, CreateTime, UpdateTime, IsLock, IsRecommand, IsTop, IsDelete, LastReplyDate, LastReplyUserID) 
VALUES 
('DotNet Core', '在 Elastic Search 在 DotNet Core 中的使用心得', 'RT', '2007-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('ReactJs', '怎么使用dotnet命令行创建ReactJs项目？', 'RT', '2007-01-04 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('DotNetCore', 'DotNet Core 2.0的优势是什么？', 'RT', '2007-01-05 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', '快速在Azure中部署一个NodeJs应用', 'RT', '2007-02-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', 'Azure虚拟机的价格如何？', 'RT', '2007-01-03 14:33:34', '2007-11-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Redis', '在.Net Core中使用Azure Redis分布式缓存', 'RT', '2007-01-23 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Elastic', 'Azure Blog上的数据如何同步到Elastic Search', 'RT', '2006-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure Blob', '在什么情况下使用Azure Blob？', 'RT', '2009-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('DotNetCore', 'DotNet Core Web API的版本控制', 'RT', '2016-10-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', '目前的中国Azure有多少个服务中心？', 'RT', '2017-09-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1);

/************************************ Topic ************************************/
IF OBJECT_ID('Comment') IS NOT NULL DROP TABLE Comment;
CREATE TABLE Comment
(
	Id bigint identity primary key,
	TopicId bigint not null,
	ReplyId bigint,
	Content nvarchar(max) not null,
	IsDelete bit not null,
	CreateuserId bigint not null,
	CreateTime datetime not null,
    UpdateTime datetime not null
);

/************************************ UserTopic ************************************/
IF OBJECT_ID('TopicCollect') IS NOT NULL DROP TABLE TopicCollect;
CREATE TABLE TopicCollect
(
	UserId bigint not null,
	TopicId bigint not null,
	CreateTime datetime not null DEFAULT GETDATE()
	primary key(UserId, TopicId)
);

INSERT INTO TopicCollect 
(UserId, TopicId)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

SELECT * FROM TopicCollect;

/************************************ CommentVote ************************************/
IF OBJECT_ID('CommentVote') IS NOT NULL DROP TABLE CommentVote;
CREATE TABLE CommentVote
(
	UserId bigint not null,
	CommentId bigint not null,
	CreateTime datetime not null DEFAULT GETDATE()
	primary key(UserId, CommentId)
);

/************************************ Message ************************************/
IF OBJECT_ID('Message') IS NOT NULL DROP TABLE Message;
CREATE TABLE Message
(
	Id bigint identity primary key,
	Type tinyint not null,
	TopicId bigint,
	CommentId bigint,
	FromUserId bigint,
	ToUserId bigint not null,
	CreateTime datetime not null,
    UpdateTime datetime not null,
	IsRead bit not null
);