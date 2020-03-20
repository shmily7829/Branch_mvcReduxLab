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

        [HttpPost]
        public JsonResult QryDataList(string title, bool isDone)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json("Data Check Falsed!");
                }

                //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["Branch"].ConnectionString;

                using (ReactPracticeEntities ctx = new ReactPracticeEntities())
                {
    
                    var dataList = ctx.Database.SqlQuery<Branch>("select Top 10 * from Branch").ToList();

                    return Json(dataList);
                }

                    //## Biz Go
                    // 模擬查詢結果
                    //改成SQL寫法
                //    var dataList = new[]
                //    {
                //    new {title = title, isDone = isDone },
                //    new {title = "我來自雲端１", isDone = false },
                //    new {title = "我來自雲端２", isDone = false },
                //    new {title = "我來自雲端３", isDone = true },
                //    new {title = "我來自雲端４", isDone = false },
                //    new {title = "我來自雲端５", isDone = false }
                //};

                //return Json(dataList);
            }
            catch (Exception ex)
            {             
                return Json(ex.Message);
            }
        }

    }
}