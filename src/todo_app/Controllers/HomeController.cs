using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Mvc;
using todo_app.Data;
using todo_app.Models;


namespace todo_app.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }   
    }
}