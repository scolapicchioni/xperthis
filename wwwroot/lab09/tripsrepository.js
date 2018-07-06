const storename = 'trips-store' 
const dbPromise = idb.open('trips-db', 1, upgradeDB => {
    if(upgradeDB.objectStoreNames.contains(storename)) 
        upgradeDB.deleteObjectStore(storename);
    upgradeDB.createObjectStore(storename, { keyPath: 'id', autoIncrement:true })
});
  
class TripsRepository {
    async getTripByIdAsync(id) {
        const db = await dbPromise 
        const value = db.transaction(storename).objectStore(storename).get(id)
        return value
    }
    async addTripAsync(trip) {
        const db = await dbPromise
        const tx = db.transaction(storename, 'readwrite');
        tx.objectStore(storename).put(trip);
        return await tx.complete;
    }
    async getIdsAsync() {
        const db = await dbPromise
        const tx = db.transaction(storename);
        const keys = [];
        const store = tx.objectStore(storename);

        store.iterateKeyCursor(cursor => {
            if (!cursor) return;
            keys.push(cursor.key);
            cursor.continue();
        });

        await tx.complete
        return keys
    }
    async getAllTripsAsync() {
        const db = await dbPromise
        const tx = db.transaction(storename);
        const values = [];
        const store = tx.objectStore(storename);

        store.iterateCursor(cursor => {
            if (!cursor) return;
            values.push(cursor.value);
            cursor.continue();
        });

        await tx.complete
        return values
    }
}

export default TripsRepository;