using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SlickBiking.Model
{
  public partial class slickbikesContext : DbContext
  {
    public virtual DbSet<Bikes> Bikes { get; set; }
    public virtual DbSet<Users> Users { get; set; }
    public virtual DbSet<BikeTypes> BikeTypes { get; set; }

    public slickbikesContext(DbContextOptions<slickbikesContext> options)
      : base(options)
    { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<BikeTypes>(entity =>
      {
        entity.ToTable("biketypes");

        //entity.HasKey(p => new { p.Id });
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.Description)
            .HasColumnName("description")
            .HasMaxLength(128)
            .IsUnicode(false);
      });

      modelBuilder.Entity<Bikes>(entity =>
      {
        entity.ToTable("bikes");

        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.BikeTypeId)
            .HasColumnName("bike_type_id");

        //entity.OwnsOne(e => e.BikeType).ToTable("biketypes")
        //    .HasForeignKey(e => e.Id); // causes the biketype entity to return an error

        entity.Property(e => e.Description)
        .HasColumnName("description")
        .HasMaxLength(255)
        .IsUnicode(false);

        entity.Property(e => e.Model)
                  .HasColumnName("model")
                  .HasMaxLength(255)
                  .IsUnicode(false);

        entity.Property(e => e.Price)
                  .HasColumnName("price")
                  .HasColumnType("decimal(18, 0)");

        entity.Property(e => e.QuantityOnHand).HasColumnName("quantity_on_hand");
      });

      modelBuilder.Entity<Users>(entity =>
            {
              entity.ToTable("users");

              entity.Property(e => e.Id).HasColumnName("id");

              entity.Property(e => e.FirstName)
                  .HasColumnName("first_name")
                  .HasMaxLength(128)
                  .IsUnicode(false);

              entity.Property(e => e.LastName)
                  .HasColumnName("last_name")
                  .HasMaxLength(128)
                  .IsUnicode(false);

              entity.Property(e => e.Password)
                  .HasColumnName("password")
                  .HasMaxLength(255)
                  .IsUnicode(false);

              entity.Property(e => e.Username)
                  .HasColumnName("username")
                  .HasMaxLength(255)
                  .IsUnicode(false);
            });

    }
  }
}
