import Trip from "./trip.js";
export default class TripsRepository{
    constructor(){
        this.trips = [
            new Trip(1,"Rome","awesome", "01/01/01",10),
            new Trip(2,"Paris","oui oui","02/02/02",8)
        ]
    }
    getAllTrips(){
        return this.trips
    }
    addTrip(trip){
        trip.id =  Math.max(...this.trips.map(item=> item.id)) + 1;
        this.trips.push(trip)
    }
}