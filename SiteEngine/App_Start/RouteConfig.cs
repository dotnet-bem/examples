using System.Web.Mvc;
using System.Web.Routing;

namespace SiteEngine
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.RouteExistingFiles = true;

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            
            routes.MapRoute(
               name: "home",
               url: "",
               defaults: new { controller = "Home", action = "Index" }
           );
            routes.MapRoute(
               name: "info",
               url: "info/{*path}",
               defaults: new { controller = "Info", action = "Index", path = UrlParameter.Optional }
           );

            routes.MapRoute(
               name: "topic_list",
               url: "forum",
               defaults: new { controller = "Forum", action = "TopicList" }
           );

            routes.MapRoute(
               name: "topic",
               url: "forum/{id}",
               defaults: new { controller = "Forum", action = "Topic" }
           );
        }
    }
}
