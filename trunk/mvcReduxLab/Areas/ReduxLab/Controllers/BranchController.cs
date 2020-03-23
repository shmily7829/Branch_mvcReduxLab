using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using mvcReduxLab.ViewModels;

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

                ReactPracticeEntities ctx = new ReactPracticeEntities();
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

        [HttpPost]
        public ActionResult SaveFormData(BranchFormDataVM formData)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    Response.StatusCode = 400;
                    return Json(ErrorMessageVM.CHECK_DATA_FAIL);
                }

                using (var ctx = new ReactPracticeEntities())
                using (var txn = ctx.Database.BeginTransaction())
                {
                    //## 若已存在則更新，不存在則新增
                    var info = ctx.Branch.Find("1000", formData.Branch_ID);
                    if (info != null)
                    {
                        //# 已存在則更新
                        //info.name = formData.accountInfo.name; // PK
                        //info.email = formData.accountInfo.email ?? "";
                        //info.mobilePhone = formData.accountInfo.mobilePhone ?? "";
                        //info.birthday = formData.userInfo.birthday;
                        //info.contactTime = formData.userInfo.contactTime;
                        //info.remark = formData.userInfo.remark;

                        //ctx.SaveChanges();
                        //txn.Commit();
                    }
                    else
                    {
                        //# 不存在則新增
                        Branch newInfo = new Branch()
                        {
                            Channel_ID = "1000",
                            Branch_Type = "1",
                            Branch_ID = formData.Branch_ID,
                            Branch_Name = formData.Branch_Name,
                            Supervisor ="ABC",
                            Contact = "QQQ",
                            Phone = "0987654321",
                            Address_City ="台北市" ,
                            Address_Dist = "信義區",
                            Address_ZIP_code = "123",
                            Address = formData.Address,
                            Email = "123@gmail.com"
                        };

                        ctx.Branch.Add(newInfo);
                        ctx.SaveChanges();
                        txn.Commit();
                    }
                }

                return Json(ErrorMessageVM.SUCCESS);
            }
            catch (Exception ex)
            {
                Response.StatusCode = 500;
                return Json(new ErrorMessageVM(ex.Message));
            }
        }
    }
}