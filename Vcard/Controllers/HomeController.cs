using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Bem;
using System.Web.Mvc;

namespace Vcard.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return new BemhtmlResult { Bemjson = new { block = "p-form" } };
        }


        // GET: Vcard
        public ActionResult Vcard()
        {
            return new BemhtmlResult { Bemjson = new { block = "p-vcard", data = new { a = "1" } } };
        }
    }
}