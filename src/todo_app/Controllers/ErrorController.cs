using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace todo_app.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Shared/_Error.cshtml");
        }
    }
}