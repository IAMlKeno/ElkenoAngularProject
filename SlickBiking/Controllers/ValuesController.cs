using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SlickBiking.DAO;
using SlickBiking.Model;
using SlickBiking.Models;

namespace SlickBiking.Controllers
{
  [Route("api/[controller]/[action]")]
  public class ValuesController : Controller
  {
    private readonly slickbikesContext _context;

    public ValuesController(slickbikesContext context)
    {
      _context = context;
    }

    // GET api/values
    [HttpGet]
    [ActionName("GetBikes")]
    public IEnumerable<Bikes> Get()
    {
      List<Bikes> list = null;
      try
      {
        list = _context.Bikes.ToList();
        for (int i = 0; i < list.Count; i++)
        {
          list[i].BikeType = _context.BikeTypes.Single(bt => bt.Id == list[i].BikeTypeId);
        }
      }
      catch (Exception e)
      {
        Console.Write(e.Message);
      }
      return list;
    }

    [HttpGet]
    [ActionName("GetBikeTypes")]
    public IEnumerable<BikeTypes> GetBikeTypes()
    {
      List<BikeTypes> list = null;
      try
      {
        list = _context.BikeTypes.ToList();
      }
      catch (Exception e)
      {
        Console.Write(e.Message);
      }
      return list;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
