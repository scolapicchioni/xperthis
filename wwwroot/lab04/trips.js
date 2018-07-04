const tripsList = [
    {
        id : 1,
        destination: "Rome",
        description: "awesome",
        date: "01/01/01",
        rating: 10
    },
    {
        id : 2,
        destination: "Paris",
        description: "oui oui",
        date: "02/02/02",
        rating: 8
    },
    {
        id : 3,
        destination: "Tokyo",
        description: "arigato",
        date: "03/03/03",
        rating: 9
    },
    {
        id : 4,
        destination: "Milan",
        description: "work work work",
        date: "04/04/04",
        rating: 5
    },
    {
        id : 5,
        destination: "Berlin",
        description: "just wow",
        date: "05/05/05",
        rating: 7
    }
]



const target = document.getElementById('trips')

const tripTemplate = document.getElementById('trip-template')

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
    rating.textContent = trip.destination

    target.appendChild(theTripElement)
}
