using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SlickBiking.DAO;
using SlickBiking.Models;

namespace SlickBiking.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Bike> Get()
        {
            List<Bike> list = null;
            try
            {
                BikeDao bikeDao = new BikeDao();
                list = bikeDao.getAllBikes();
            }
            catch (Exception e)
            {
                Console.Write(e.Message);
                //return new string[] { e.Message, "1" };
            }
            //return new string[] { "value1", "value2", "value3", "value4" };
            //return new string[] { "test", list[0].Description, list[1].Description };
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
