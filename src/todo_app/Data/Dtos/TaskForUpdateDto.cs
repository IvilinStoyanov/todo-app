using System;

namespace todo_app.Data.Dtos
{
    public class TaskForUpdateDto
    {
        public string Description { get; set; }

        public string Status { get; set; }

        public DateTime DeadlineUpdate { get; set; }
    }
}