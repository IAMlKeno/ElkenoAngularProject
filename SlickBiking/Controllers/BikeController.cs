using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SlickBiking.DAO;
using SlickBiking.Models;

namespace SlickBiking.Controllers
{
    [Produces("application/json")]
    [Route("api/Bike")]
    public class BikeController : Controller
    {

      [HttpPost]
      public IActionResult AddBike([FromBody] Bike bike)
      {
        BikeDao bikeDao = new BikeDao();
      try
      {
        bikeDao.saveBike(bike);
      }
      catch (Exception e)
      {
        return BadRequest("Failed to add new bike.");
      }
        return Ok(bike);
    }
  }
}
