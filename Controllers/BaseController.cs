using System.Collections.Generic;
using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFans.Controllers
{
    public class BaseController : Controller
    {
        private readonly string _okMessage = "Ok";
        private readonly string _notOkMessage = "NotOk";
        private readonly int _notOkCode = -1;
        private readonly string _code = "code";
        private readonly string _message = "message";

        protected JsonResult BaseJson(int code, object result)
        {
            Dictionary<string, object> response = new Dictionary<string, object>
            {
                { _code, HttpStatusCode.OK },
                { _message, result }
            };
            return Json(response);
        }

        protected JsonResult BaseJson(HttpStatusCode code, object result)
        {
            Dictionary<string, object> response = new Dictionary<string, object>
            {
                { _code, code },
                { _message, result }
            };
            return Json(response);
        }

        protected JsonResult OkJson()
        {
            return BaseJson(HttpStatusCode.OK, _okMessage);
        }

        protected JsonResult OkJson(object result)
        {
            return BaseJson(HttpStatusCode.OK, result);
        }

        protected JsonResult NotOkJson()
        {
            return BaseJson(_notOkCode, _notOkMessage);
        }

        protected JsonResult NoPermissionJson(object result)
        {
            return BaseJson(HttpStatusCode.Forbidden, result);
        }

        protected JsonResult NotOkJson(object result)
        {
            return BaseJson(_notOkCode, result);
        }

        protected JsonResult BadRequestJson(object result)
        {
            return BaseJson(HttpStatusCode.BadRequest, result);
        }

        protected JsonResult NotFoundJson(object result)
        {
            return BaseJson(HttpStatusCode.NotFound, result);
        }
    }
}