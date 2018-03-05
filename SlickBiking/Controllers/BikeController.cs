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
    [Route("api/Bike/[action]")]
    public class BikeController : Controller
    {

      [HttpPost]
      [ActionName("AddBike")]
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

      [HttpPost]
      [ActionName("DeleteBike")]
      public IActionResult DeleteBike([FromBody] int? id)
      {

        BikeDao bikeDao = new BikeDao();
        try
        {
          bikeDao.deleteBike(id);
        }
        catch (Exception e)
        {
          return BadRequest("Failed to remove bike.");
        }
        return Ok();
      }

      [HttpGet]
      [ActionName("GetBike")]
      public IActionResult GetBike([FromBody] int? id)
      {

        BikeDao bikeDao = new BikeDao();
        try
        {
          //bikeDao.getBikeById(bike);
        }
        catch (Exception e)
        {
          return BadRequest("Failed to retrieve bike in data.");
        }

      return Ok();
      }


      [HttpPost]
      [ActionName("UpdateBike")]
      public IActionResult UpdateBike([FromBody] Bike bike)
      {
        BikeDao bikeDao = new BikeDao();
        try
        {
          bikeDao.updateBike(bike);
        }
        catch (Exception e)
        {
          return BadRequest("Failed to update bike.");
        }
        return Ok();
      }


      
    }
}
