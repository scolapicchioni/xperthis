import Trip from "./trip.js";
export default class TripsRepository{
    constructor(){
        if(localStorage.length===0){
            this.initStorage()
        }
    }
    initStorage(){
        this.addTrip(new Trip(1,"Rome","awesome", "01/01/01",10))
        this.addTrip(new Trip(2,"Paris","oui oui","02/02/02",8))
    }
    getAllTrips(){
        const trips = []
        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index)
            const element = JSON.parse(localStorage.getItem(key))
            trips.push(element)
        }
        return trips
    }
    addTrip(trip){
        trip.id = localStorage.length===0 ? 1 : Math.max(...this.getAllTrips().map(item=> item.id)) + 1;
        localStorage.setItem(trip.id, JSON.stringify(trip))
    }
}