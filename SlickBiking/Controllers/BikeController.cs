using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SlickBiking.DAO;
using SlickBiking.Model;
using SlickBiking.Models;

namespace SlickBiking.Controllers
{
  [Produces("application/json")]
  [Route("api/Bike/[action]")]
  public class BikeController : Controller
  {
    private readonly slickbikesContext _context;

    public BikeController(slickbikesContext context)
    {
      _context = context;
    }

    [HttpPost]
    [ActionName("SaveBike")]
    public IActionResult SaveBike(int id, [FromBody] Bikes bike)
    {
      try
      {
        if (id <= 0)
        {
          _context.Bikes.Add(bike);
          _context.SaveChangesAsync();
        }
        else
        {
          Bikes bikeToUpdate = _context.Bikes.Single(s => s.Id == id);
          bikeToUpdate.Description = bike.Description;
          bikeToUpdate.Model = bike.Model;
          bikeToUpdate.Price = bike.Price;
          bikeToUpdate.QuantityOnHand = bike.QuantityOnHand;
          bikeToUpdate.BikeType = bike.BikeType;

          _context.Bikes.Update(bikeToUpdate);
          _context.SaveChangesAsync(); 
        }
      }
      catch (Exception e)
      {
        return BadRequest("Failed to save bike.");
      }
      return Ok(bike);
    }

    [HttpPost]
    [ActionName("DeleteBike")]
    public IActionResult DeleteBike([FromBody] int? id)
    {
      try
      {
        Bikes bikeToDelete = _context.Bikes.Single(s => s.Id == id);
        _context.Bikes.Remove(bikeToDelete);
        _context.SaveChangesAsync();
      }
      catch (Exception e)
      {
        return BadRequest("Failed to remove bike.");
      }
      return Ok("Delete Success");
    }

    [HttpGet]
    [ActionName("GetBike")]
    public IActionResult GetBike(int? id)
    {
      try
      {
        var bike = _context.Bikes.Single(s => s.Id == id);
        return Json(bike);
      }
      catch (Exception e)
      {
        return BadRequest("Failed to retrieve bike in data.");
      }
    }



  }
}
