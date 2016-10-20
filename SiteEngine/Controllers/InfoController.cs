using System;
using System.Collections.Generic;
using System.IO;
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
            var serverPath = Server.MapPath("~/Content/" + path);
            var ext = Path.GetExtension(serverPath);

            if (ext == ".md")
            {
                var content = GetMdContent(serverPath);
                return SitePage(new { block = "md", content = content });
            }

            return File(serverPath, MimeMapping.GetMimeMapping(serverPath));
        }

        private string GetMdContent(string serverPath)
        {
            var content = System.IO.File.ReadAllText(serverPath);
            return CommonMark.CommonMarkConverter.Convert(content);
        }
    }
}