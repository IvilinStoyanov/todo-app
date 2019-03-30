using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace todo_app.Controllers
{
    public class TemplateController : Controller
    {
        public ActionResult AddTask()
        {
            return View();
        }

        public ActionResult Panel()
        {
            return PartialView("~/Views/Home/Panel.cshtml");
        }

        public ActionResult Tasks()
        {
            return PartialView("~/Views/Home/Tasks.cshtml");
        }

        public ActionResult Default()
        {
            return PartialView("~/Views/Home/Default.cshtml");
        }

        [HttpGet]
        public ActionResult Add()
        {
            return PartialView("~/Views/Home/AddTask.cshtml");
        }

        public ActionResult Update()
        {
            return PartialView("~/Views/Home/Update.cshtml");
        }

    }
}