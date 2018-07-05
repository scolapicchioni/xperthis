using System.Collections.Generic;
using System.Threading.Tasks;
using cursus.Data;
using Microsoft.EntityFrameworkCore;

namespace cursus.Models{
    public class TripsRepository : ITripsRepository
    {
        private readonly ApplicationDbContext ctx;
        public TripsRepository(ApplicationDbContext ctx) => this.ctx = ctx;
        
        public async Task AddTripAsync(Trip trip) {
            ctx.Add(trip);
            await ctx.SaveChangesAsync();
        }

        public async Task<List<Trip>> GetAllTripsAsync() => await ctx.Trips.ToListAsync();
        
        public async Task<Trip> FindTripAsync(int id) => await ctx.Trips.SingleOrDefaultAsync(t => t.Id == id);
        
    }
}
