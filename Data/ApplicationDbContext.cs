using cursus.Models;
using Microsoft.EntityFrameworkCore;

namespace cursus.Data {
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Trip>().HasData(
                new Trip {
                    Id = 1,
                    Destination = "Rome",
                    Description = "I was very impressed with the city",
                    Date = "01/01/01",
                    Rating = 10
                },
                new Trip {
                    Id = 2,
                    Destination = "Milan",
                    Description = "I was very impressed with the city uglyness",
                    Date = "02/02/02",
                    Rating = 3
                }
            );
        }

        public DbSet<cursus.Models.Trip> Trips { get; set; }
    }
}