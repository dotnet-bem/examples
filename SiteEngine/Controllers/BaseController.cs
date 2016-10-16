using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Bem;
using System.Web.Mvc;

namespace SiteEngine.Controllers
{
    public abstract class BaseController : Controller
    {
        public ActionResult SitePage(object bemjson)
        {
            var obj = new
            {
                block = "layout",
                content = bemjson
            };

            return Json(obj, JsonRequestBehavior.AllowGet);
            //return new BemhtmlResult(obj);
        }
    }
}