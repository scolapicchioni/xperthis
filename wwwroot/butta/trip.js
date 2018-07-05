export default class Trip {
    constructor(destination="", description="", date="", rating=6){
        if(typeof rating !== 'number')
            throw new TypeError('rating must be a number')
        
        this.destination = destination
        this.description = description
        this.date = date
        this.rating = rating
    }
}