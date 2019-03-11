using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace todo_app.Models
{
    public class TodoTask
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime Deadline { get; set; }
        
        public string DeadlineUpdate { get; set; }
    }
}
