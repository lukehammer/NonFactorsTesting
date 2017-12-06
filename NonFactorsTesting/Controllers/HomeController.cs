using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NonFactorsTesting.Models;

namespace NonFactorsTesting.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult TestGrid()
        {
            ViewBag.Message = "Test Page";
           return View(Rows.CreateTestList(30));
        }



        public ActionResult TestGrid2()
        {
            ViewBag.Message = "Test Page";
            
            
            return View(Rows2.CreateTestList(10));
        }
    }
}