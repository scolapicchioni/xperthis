namespace cursus.Models{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ITripsRepository{
        Task AddTripAsync(Trip trip);
        Task<List<Trip>> GetAllTripsAsync();
        Task<Trip> FindTripAsync(int id);
    }
}