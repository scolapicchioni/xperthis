
export default class TripsRepository{
    async getAllTripsAsync(){
        const response = await fetch('/api/trips')
        return response.json()
    }
    async addTripAsync(trip){
        const rawResponse = await fetch('/api/trips', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(trip)
        });
        return rawResponse.json();
    }
}