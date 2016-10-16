using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SiteEngine.Controllers
{
    public class InfoController : BaseController
    {
        // GET: Info
        public ActionResult Index(string path)
        {
            return SitePage(new {block = "md", content = path});
        }
    }
}