using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using todo_app.Controllers;

namespace todo_app
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            Exception ex = Server.GetLastError();
            Application["TheException"] = ex;
            Server.ClearError();
            HttpContext.Current.ClearError();
            //IController error_controller = new ErrorController();
            //error_controller.Execute(new RequestContext(new HttpContextWrapper(Context), );
            //Server.Transfer("~/_Error.cshtml");
            //Response.Redirect("http://localhost:51443/Error/Index");
        }
    }
}
