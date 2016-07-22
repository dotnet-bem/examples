using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Bem;
using System.Web.Mvc;
using Vcard.Models;

namespace Vcard.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return new BemhtmlResult(new
            {
                block = "b-page",
                title = "Виртуальная визитка",
                content = new { block = "b-form" }
            });
        }

        [HttpPost]
        public ActionResult Index(Card model)
        {
            Guid id = Guid.NewGuid();
            Session[id.ToString()] = model;

            return RedirectToAction("Vcard", new { id });
        }


        // GET: Vcard
        public ActionResult Vcard(Guid? id)
        {
            return new BemhtmlResult (new { block = "p-vcard", data = Session[id.GetValueOrDefault().ToString()] });
        }
    }
}
