CREATE TABLE [dbo].[Task] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Description] NVARCHAR (255) NOT NULL,
    [Status]      NVARCHAR (50)  NULL,
    [CreatedOn]   DATETIME       NULL,
    [Deadline]    DATETIME       NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

GO
Create proc add_task
   @Description NVARCHAR (255),
   @Status NVARCHAR(50),
   @CreatedOn DATETIME,
   @Deadline DATETIME
     as
     begin
     insert into dbo.Task values(@Description, @Status, @CreatedOn, @Deadline)
     end

GO
 Create proc delete_task
         @Id Int
    As
    Begin   
Delete from Task Where Id=@Id
    End

GO
Create proc get_task
as
begin
Select * from dbo.Task
End

GO
Create proc get_taskById
	@Id Int
as
begin
Select * from dbo.Task
WHERE @Id = Id
End

GO
CREATE PROCEDURE update_task
   @Id Int,
   @Description NVARCHAR (255),
   @Status NVARCHAR(50),
   @Deadline DATETIME
  AS
BEGIN
UPDATE dbo.Task 
  Set [Description] = @Description,
  [Status] = @Status,
  [Deadline] = @Deadline
  WHERE Id = @Id
END