using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Bem;
using System.Web.Mvc;
using Todo.Models;

namespace Todo.Controllers
{
    public class HomeController : Controller
    {
        private HttpApplicationStateBase Application
        {
            get { return ControllerContext.HttpContext.Application; }
        }

        private List<TodoItem> TodoItems
        {
            get
            {
                if (!(Application["TodoItems"] is List<TodoItem>))
                {
                    Application["TodoItems"] = new List<TodoItem> {
                        new TodoItem { Text = "Создать бэкенд", Done = true },
                        new TodoItem { Text = "Написать шаблоны" },
                        new TodoItem { Text = "Написать CSS" },
                        new TodoItem { Text = "Написать JavaScript" }
                    };
                }

                return Application["TodoItems"] as List<TodoItem>;
            }
        }

        private object GetItemModel(TodoItem item)
        {
            return new {
                id = item.Id,
                text = item.Text,
                done = item.Done,
                urlDelete = Url.Action("Delete", new { id = item.Id }),
                urlSetState = Url.Action("SetState", new { id = item.Id })
            };
        }

        public ActionResult Index()
        {
            var bemjson = new
            {
                block = "root",
                bundleBasePath = Url.Content("~/Bem/desktop.bundles/default/"),
                urlAdd = Url.Action("Add"),
                items = TodoItems.Select(GetItemModel).ToArray()
            };

            return new BemhtmlResult(bemjson);
        }

        public ActionResult Add(string text)
        {
            var item = new TodoItem { Text = text, Done = false };
            TodoItems.Add(item);
            return Json(GetItemModel(item), JsonRequestBehavior.AllowGet);
        }

        public ActionResult SetState(Guid id, bool done = false)
        {
            foreach (var item in TodoItems.Where(item => item.Id == id))
            {
                item.Done = done;
            }

            return new EmptyResult();
        }

        public ActionResult Delete(Guid id)
        {
            TodoItems.RemoveAll(item => item.Id == id);
            return new EmptyResult();
        }
    }
}