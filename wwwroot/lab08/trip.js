export default class Trip {
    constructor(id=0, destination="", description="", date="", rating=6){
        if(typeof id !== 'number')
            throw new TypeError('id must be a number')
        if(typeof rating !== 'number')
            throw new TypeError('rating must be a number')
        
        this.id = id
        this.destination = destination
        this.description = description
        this.date = date
        this.rating = rating
    }
}