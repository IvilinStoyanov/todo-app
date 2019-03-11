using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using todo_app.Data;
using todo_app.Data.Dtos;
using todo_app.Models;

namespace todo_app.Controllers
{
    public class SystemController : Controller
    {
        private DataConfig data;

        public SystemController()
        {
            this.data = new DataConfig();
        }

        [HttpPost]
        public JsonResult Add(TodoTask task)
        {
            try
            {
                data.AddTask(task);
            }
            catch (Exception e)
            {
                throw new ArgumentException(e.ToString());
            }

            return Json(task);
        }

        [HttpPost]
        public JsonResult DeleteTaskById(int id)
        {
            try
            {
                data.DeleteTaskById(id);
            }
            catch (Exception e)
            {

                throw new ArgumentException(e.ToString());
            }
            return Json("Deleted");
        }

        public JsonResult UpdateTaskById(int id, TaskForUpdateDto task)
        {
            try
            {
                data.UpdateTaskById(id, task);
            }
            catch (Exception e)
            {

                throw new ArgumentException(e.ToString());
            }
            return Json(task);
        }

        public JsonResult Get()
        {
            DataSet dataSet = data.GetTask();

            List<TodoTask> tasks = new List<TodoTask>();

            foreach (DataRow row in dataSet.Tables[0].Rows)
            {

                tasks.Add(new TodoTask
                {
                    Id = Convert.ToInt32(row["Id"]),

                    Description = row["Description"].ToString(),

                    Status = row["Status"].ToString(),

                    CreatedOn = Convert.ToDateTime(row["CreatedOn"].ToString()),

                    Deadline = Convert.ToDateTime(row["Deadline"].ToString())
                });
            }
            return Json(tasks, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTaskById(int id)
        {
            DataSet dataSet = data.GetTaskById(id);

            List<TodoTask> task = new List<TodoTask>();

            foreach (DataRow row in dataSet.Tables[0].Rows)
            {

                task.Add(new TodoTask
                {
                    Id = Convert.ToInt32(row["Id"]),

                    Description = row["Description"].ToString(),

                    Status = row["Status"].ToString(),

                    CreatedOn = Convert.ToDateTime(row["CreatedOn"].ToString()),

                    Deadline = Convert.ToDateTime(row["Deadline"].ToString()),

                    DeadlineUpdate = Convert.ToDateTime(row["Deadline"]).ToString("dd/MM/yyyy")
                });
            }
            return Json(task, JsonRequestBehavior.AllowGet);
        }
    }
}