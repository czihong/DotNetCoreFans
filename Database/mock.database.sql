IF OBJECT_ID('[User]') IS NOT NULL DROP TABLE [User];
CREATE TABLE [User]
(
	Id bigint identity primary key,
	UserName nvarchar(20) not null unique,
	Password nvarchar(32) not null,
	Email nvarchar(100) not null unique,
	Location nvarchar(100),
	Signature nvarchar(200),
	CreateTime datetime not null,
    UpdateTime datetime not null,
	Status tinyint not null
);
INSERT INTO TOPIC (Category, Title, Content, CreateUserId, CreateTime, UpdateTime, IsLock, IsRecommand, IsTop, IsDelete, LastReplyDate, LastReplyUserID) VALUES 
('DotNet Core', '在 Elastic Search 在 DotNet Core 中的使用心得', 'RT', 1, '2007-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('ReactJs', '怎么使用dotnet命令行创建ReactJs项目？', 'RT', 1, '2007-01-04 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('DotNetCore', 'DotNet Core 2.0的优势是什么？', 'RT', 1, '2007-01-05 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', '快速在Azure中部署一个NodeJs应用', 'RT', 1, '2007-02-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', 'Azure虚拟机的价格如何？', 'RT', 1, '2007-01-03 14:33:34', '2007-11-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Redis', '在.Net Core中使用Azure Redis分布式缓存', 'RT', 1, '2007-01-23 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Elastic', 'Azure Blog上的数据如何同步到Elastic Search', 'RT', 1, '2006-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure Blob', '在什么情况下使用Azure Blob？', 'RT', 1, '2009-01-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('DotNetCore', 'DotNet Core Web API的版本控制', 'RT', 1, '2016-10-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1),
('Azure', '目前的中国Azure有多少个服务中心？', 'RT', 1, '2017-09-03 14:33:34', '2007-01-03 14:33:34', 0, 0, 0, 0, '2007-01-03 14:33:34', 1);

SELECT * FROM TOPIC;