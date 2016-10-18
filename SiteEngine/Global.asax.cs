using System.Web.Mvc;
using System.Web.Routing;
using SiteEngine.Models;

namespace SiteEngine
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            Navigation.Load(Server.MapPath("~/navigation.json"));

            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
