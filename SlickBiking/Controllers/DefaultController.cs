using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SlickBiking.Models;

namespace SlickBiking.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class DefaultController : Controller
    {
      // POST api/values
      [HttpPost]
      public IActionResult AddBike([FromBody] Bike bike)
      {
        var x = Json(bike);
        return x;
      }

      [HttpGet]
      public String Get()
      {
        return "Test";
      }
  }
}
