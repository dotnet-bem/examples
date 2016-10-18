using System.Linq;
using System.Web.Bem;
using System.Web.Mvc;
using SiteEngine.Models;

namespace SiteEngine.Controllers
{
    public abstract class BaseController : Controller
    {
        protected bool IsCurrentUrl(string url)
        {
            return Request.RawUrl.Trim('/').Equals(url.Trim('/'));
        }

        private object GetNavigation()
        {
            return Navigation.Items
                .Select(item => new { item.content, item.url, selected = IsCurrentUrl(item.url) })
                .ToArray();
        }

        public ActionResult SitePage(object bemjson)
        {
            var obj = new
            {
                block = "layout",
                navigation = GetNavigation(),
                content = bemjson
            };

            return AppSettings.ApplyTemplates
                ? (ActionResult)new BemhtmlResult(obj)
                : Json(obj, JsonRequestBehavior.AllowGet);
        }
    }
}