using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReduxLab.Controllers
{
    public class BranchController : Controller
    {
        // GET: ReduxLab/Branch
        public ActionResult Default()
        {
            return View();
        }
    }
}