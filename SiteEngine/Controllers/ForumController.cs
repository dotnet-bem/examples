using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SiteEngine.Controllers
{
    public class ForumController : BaseController
    {
        // GET: Forum
        public ActionResult TopicList()
        {
            return SitePage("topic list");
        }

        public ActionResult Topic(int id)
        {
            return SitePage(string.Format("topic: ", id));
        }
    }
}