﻿using System.Web;
using System.Web.Optimization;

namespace todo_app
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/bootstrap-datepicker.css",
                      "~/Content/animate.min.css",
                      "~/Content/alertify.css"));

            bundles.Add(new StyleBundle("~/bundles/ui-bootstrap")
                .Include(
                    "~/Scripts/ui-bootstrap-tpls-1.3.3.min.js"
                ));

            bundles.Add(new StyleBundle("~/bundles/bootstrap-datepicker")
               .Include(
                   "~/Scripts/bootstrap-datepicker.js"
               ));
            bundles.Add(new StyleBundle("~/bundles/alertify")
               .Include(
                   "~/Scripts/alertify.js"
   ));
        }
    }
}
