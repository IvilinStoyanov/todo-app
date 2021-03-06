﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace todo_app
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
             name: "System",
             url: "System/{action}/{id}",
             defaults: new { controller = "System", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
             name: "Template",
             url: "Template/{action}/{id}",
             defaults: new { controller = "Template", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
              name: "Error",
              url: "Error/{action}/{id}",
              defaults: new { controller = "Error", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
            name: "App",
            url: "{*.}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
