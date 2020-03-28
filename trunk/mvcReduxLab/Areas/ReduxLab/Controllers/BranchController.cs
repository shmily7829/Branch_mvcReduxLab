using System;
using System.Collections.Generic;
using System.IO;
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

        public ActionResult UploadOneFile()
        {
            try
            {
                //if (!ModelState.IsValid)
                //if (Request.Files.Count <= 0)
                //{
                //    string message = "資料格式不合法！";
                //    Response.StatusCode = (int)HttpStatusCode.BadRequest;
                //    return Content(message, "text/plain", Encoding.UTF8);
                //}

                // 建立目的地目錄 --- uploadDir\<YYYY>\<MM>\
                //DirectoryInfo dir = new DirectoryInfo(string.Format("C:\\UploadFiles\\{0:yyyyMM}", DateTime.Now));
                DirectoryInfo dir = new DirectoryInfo("C:\\UploadFiles");
                if (!dir.Exists) dir.Create();

                // 取得上傳檔案
                var uploadFile = Request.Files[0];

                // 限制大小<10mb
                //var fileSize = uploadFile.ContentLength;
                //if ((fileSize / 1048576.0) > 10)
                //{
                //    return Json(LastErrMsg.Error("檔案大小不可大於10MB。"));
                //}

                // 取其它參數
                string note = Request.Form["note"];

                // target filepath
                string uploadFilename = Path.GetFileName(uploadFile.FileName); // 注意：Chrome與IE11上傳檔名不同格式，需用此函式取檔名以統一格式
                FileInfo targetFile = new FileInfo(dir.FullName + "\\" + uploadFilename);
                uploadFile.SaveAs(targetFile.FullName);

                ///
                /// 正式版使用 Guid 操作檔案下載與刪除
                /// 並存入 File Table
                /// 

                // success
                var result = new
                {
                    fileInfo = targetFile.Name
                };

                return Json(result); // result
            }
            catch (Exception ex)
            {
                //Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                //return Content(ex.Message, "text/plain", Encoding.UTF8);
                return Content(ex.Message);
            }
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

                using (var ctx = new ReactPracticeEntities()) //context
                using (var txn = ctx.Database.BeginTransaction()) //啟動交易 txn == Transaction
                {
                    //## 若已存在則更新，不存在則新增
                    //依照P KEY找資料
                    var info = ctx.Branch.Find("1000", formData.Branch_ID);
                    if (info != null)
                    {
                        //# 已存在則更新
                        info.Branch_Name = formData.Branch_Name;
                        info.Address = formData.Address;

                        ctx.SaveChanges();
                        txn.Commit();
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
                            Email = "123@gmail.com",
                            //ModifiedDate = formData.ModifiedDate
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

        [HttpPost]
        public ActionResult DelFormData(BranchFormDataVM formData)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    Response.StatusCode = 400;
                    return Json(ErrorMessageVM.CHECK_DATA_FAIL);
                }

                using (var ctx = new ReactPracticeEntities()) //context
                using (var txn = ctx.Database.BeginTransaction()) //啟動交易 txn == Transaction
                {
                    //## 若已存在則刪除，不存在則顯示無該筆資料訊息
                    //依照P KEY找資料
                    var info = ctx.Branch.Find("1000", formData.Branch_ID);
                    if (info != null)
                    {
                        //# 已存在則刪除
                        info.Branch_Name = formData.Branch_Name;
                        info.Address = formData.Address;

                        ctx.Branch.Remove(info);
                        ctx.SaveChanges();
                        txn.Commit();
                    }
                    else
                    {
                        //# 不存在則顯示無資料訊息
                        Branch newInfo = new Branch()
                        {
    
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