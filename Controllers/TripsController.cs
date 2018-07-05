using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using cursus.Models;

namespace cursus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private readonly ITripsRepository _repository;

        public TripsController(ITripsRepository repository) {
            _repository = repository;
        }

        public async Task<List<Trip>> GetTrips() =>  await _repository.GetAllTripsAsync();

        [HttpGet("{id}"), ActionName("GetTripById")]
        public async Task<ActionResult<Trip>> GetTripById(int id) {
            Trip comment = await _repository.FindTripAsync(id);
            if (comment==null) {
                return NotFound();
            }

            return comment;
        }

        [HttpPost]
        public async Task<ActionResult<Trip>> AddTripAsync(Trip trip) {
            await _repository.AddTripAsync(trip);
            return CreatedAtAction(nameof(GetTripById), new { id = trip.Id }, trip);
        }
    }
}
 