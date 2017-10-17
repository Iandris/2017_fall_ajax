using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HelloWorld.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult runAjax()
        {
            return View();
        }

        // GET: Home
        public ActionResult Index(string name)
        {
            return Content("Hello " + name);
        }
    }
}