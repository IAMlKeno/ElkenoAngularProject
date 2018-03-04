using SlickBiking.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SlickBiking.DAO
{
  public class BikeDao
  {
    private static string connectionString = "Data Source=den1.mssql5.gear.host; Initial Catalog=slickbikes; User id=slickbikes;" +
        "Password=Bw8WI1_9!rXH;";
    SqlConnection con;
      
    public BikeDao()
    {
      con = new SqlConnection(connectionString);
    }

    public List<Bike> getAllBikes()
    {
      using (con = new SqlConnection(connectionString))
      {
        List<Bike> bikeList = new List<Bike>();
        try
        {
          con.Open();
          SqlCommand command = new SqlCommand();
          command.Connection = con;
          command.CommandText = "SELECT * FROM bikes";
          SqlDataReader reader = command.ExecuteReader();
          if (reader.HasRows)
          {
            while (reader.Read())
            {
              int id = reader.GetInt32(0);
              string description = reader.GetString(1);
              decimal price = reader.GetDecimal(2);
              int qoh = reader.GetInt32(3);
              string type = reader.GetString(4);
              Bike bike = new Bike();
              bike.Description = description;
              bike.Id = id;
              bike.Price = price;
              bike.Qoh = qoh;
              bike.BikeType = type;

              bikeList.Add(bike);
            }
          }
        }
        catch (Exception e)
        {
          throw e;
        }
        finally
        {
          con.Close();
        }
        return bikeList;
      }
    }

    public void saveBike(Bike bike)
    {
      using (con = new SqlConnection(connectionString))
      {
        try
        {
          con.Open();
          SqlCommand command = new SqlCommand();
          command.Connection = con;
          command.CommandText = "INSERT INTO bikes (description, bike_type, quantity_on_hand, price, model) " +
            "VALUES (@description, @bikeType, @qoh, @price, @model)";
          command.Parameters.AddWithValue("@description", bike.Description);
          command.Parameters.AddWithValue("@bikeType", bike.BikeType);
          command.Parameters.AddWithValue("@qoh", bike.Qoh);
          command.Parameters.AddWithValue("@price", bike.Price);
          command.Parameters.AddWithValue("@model", bike.Model);

          command.ExecuteNonQuery();
        }
        catch (Exception e)
        {
          throw e;
        }
        finally
        {
          con.Close();
        }
      }
    }

    public void updateBike(Bike bike)
    {
      using (con = new SqlConnection(connectionString))
      {
        try
        {
          con.Open();
          SqlCommand command = new SqlCommand();
          command.Connection = con;
          command.CommandText = "UPDATE bikes " +
            "SET description = @description, bike_type = @bikeType, quantity_on_hand = @qoh, " +
            "price = @price, model = @model) " +
            "WHERE id = @id";
          command.Parameters.AddWithValue("@description", bike.Description);
          command.Parameters.AddWithValue("@bikeType", bike.BikeType);
          command.Parameters.AddWithValue("@qoh", bike.Qoh);
          command.Parameters.AddWithValue("@price", bike.Price);
          command.Parameters.AddWithValue("@model", bike.Model);
          command.Parameters.AddWithValue("@id", bike.Id);

          command.ExecuteNonQuery();
        }
        catch (Exception e)
        {
          throw e;
        }
        finally
        {
          con.Close();
        }
      }
    }

    public void deleteBike(int? id)
    {
      using (con = new SqlConnection(connectionString))
      {
        try
        {
          con.Open();
          SqlCommand command = new SqlCommand();
          command.Connection = con;
          command.CommandText = "DELETE FROM bikes " +
            "WHERE id = @id";
          command.Parameters.AddWithValue("@id", id);

          command.ExecuteNonQuery();
        }
        catch (Exception e)
        {
          throw e;
        }
        finally
        {
          con.Close();
        }
      }
    }



  }
}
