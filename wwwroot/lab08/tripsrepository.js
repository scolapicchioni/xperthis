import Trip from "./trip.js";
export default class TripsRepository{
    async getAllTripsAsync(){
        const response = await fetch('../tripsfromtheserver.txt')
        return response.json()
    }
    addTrip(trip){
        trip.id = localStorage.length===0 ? 1 : Math.max(...this.getAllTrips().map(item=> item.id)) + 1;
        localStorage.setItem(trip.id, JSON.stringify(trip))
    }
}