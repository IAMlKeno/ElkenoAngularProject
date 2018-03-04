using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SlickBiking.Models
{
  [Serializable]
  public class Bike
  {
    //private string description;
    //private Decimal price;
    //private int qoh;
    //private string bikeType;
    //private int id;
    //private string model;

    //public Bike() { }

    //public Bike(int id, string description, Decimal price, int qoh, string bikeType, string model)
    //{
    //  this.id = id;
    //  this.description = description;
    //  this.price = price;
    //  this.qoh = qoh;
    //  this.bikeType = bikeType;
    //  this.model = model;
    //}

    public string Description { get; set; }
    public Decimal Price { get; set; }
    public int Qoh { get; set; }
    public string BikeType { get; set; }
    public int Id { get; set; }
    public string Model { get; set; }
  }
}
