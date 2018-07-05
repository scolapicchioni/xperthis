import TripsRepository from "./tripsrepository.js";

async function doStuff(){
    const repo = new TripsRepository()

    await repo.addTrip({destination : 'Rome',description:'nnrf rig elwief', date: '01/01/01', rating: 10})
    const keys = await repo.getIds()
    console.log(keys)
    const trips = await repo.getAllTrips()
    console.log(trips)
    const val01 = await repo.getTripById(keys[0])
    console.log(val01)
}

doStuff()