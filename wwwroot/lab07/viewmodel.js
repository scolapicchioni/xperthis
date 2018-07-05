import Trip from "./trip.js";
export default class ViewModel{
    constructor(repository){
        this.repository = repository

        this.updateUI()

        const tripform = document.getElementById('new-trip-form')
        const newDestination = document.getElementById('new-trip-destination')
        const newDescription = document.getElementById('new-trip-description')
        const newDate = document.getElementById('new-trip-date')
        const newRating = document.getElementById('new-trip-rating')

        document.getElementById('add-trip').addEventListener('click', () => {
            tripform.classList.toggle('invisible')
        })

        document.getElementById('save-trip').addEventListener('click', () => {
            tripform.classList.toggle('invisible')
            try{
                const newTrip = new Trip(0,newDestination.value,newDescription.value,newDate.value,+newRating.value)
            
                this.repository.addTrip(newTrip)
                this.updateUI()
            }catch(error){
                console.log(error)
            }
        })

        document.getElementById('cancel-trip').addEventListener('click', () => {
            tripform.classList.toggle('invisible')
        })
    }

    updateUI(){
        const target = document.getElementById('trips')
        const tripTemplate = document.getElementById('trip-template')
        target.innerHTML = ''
        const tripsList = this.repository.getAllTrips()
        for (let index = 0; index < tripsList.length; index++) {
            const trip = tripsList[index];
            const theTripElement = document.importNode(tripTemplate.content, true);
        
            const id = theTripElement.querySelector('.id')
            id.textContent = trip.id
            const dest = theTripElement.querySelector('.destination')
            dest.textContent = trip.destination
            const desc = theTripElement.querySelector('.description')
            desc.textContent = trip.description
            const date = theTripElement.querySelector('.date')
            date.textContent = trip.date
            const rating = theTripElement.querySelector('.rating')
            rating.textContent = trip.rating
        
            target.appendChild(theTripElement)
        }
    } 
}