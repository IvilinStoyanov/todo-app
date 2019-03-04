using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using todo_app.Data;
using todo_app.Models;

namespace todo_app.Controllers
{
    public class HomeController : Controller
    {
        private DataConfig data;

        public HomeController()
        {
            this.data = new DataConfig();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Tasks()
        {
            return View();
        }

        public ActionResult Add(TodoTask task)
        {
            try
            {
                data.AddTask(task);
            }
            catch (Exception e)
            {
                throw new ArgumentException(e.ToString());
            }
            return View("Tasks");   
        }

        public JsonResult Get()
        {
            DataSet dataSet = data.GetTask();

            List<TodoTask> tasks = new List<TodoTask>();

            foreach (DataRow row in dataSet.Tables[0].Rows)
            {

                tasks.Add(new TodoTask
                {
                    Description = row["Description"].ToString(),

                    Status = row["Status"].ToString()
                });
            }
            return Json(tasks, JsonRequestBehavior.AllowGet);
        }
    }
}