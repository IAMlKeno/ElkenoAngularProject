using System;
using System.Collections.Generic;

namespace SlickBiking.Model
{
    public partial class Bikes
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public int? QuantityOnHand { get; set; }
        public BikeTypes BikeType { get; set; }
        public int? BikeTypeId { get; set; }
        public string Model { get; set; }
    }
}
