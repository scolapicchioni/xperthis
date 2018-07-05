//import idb from './idb.js';

const storename = 'trips-store' 
const dbPromise = idb.open('trips-db', 1, upgradeDB => {
    upgradeDB.createObjectStore(storename)
});
  
const idbKeyval = {
    async get(key) {
        const db = await dbPromise 
        const value = db.transaction(storename).objectStore(storename).get(key)
        return value
    },
    async set(key, val) {
        const db = await dbPromise
        const tx = db.transaction(storename, 'readwrite');
        tx.objectStore(storename).put(val, key);
        return await tx.complete;
    },
    async keys() {
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
    },
    async values() {
        const db = await dbPromise
        const tx = db.transaction(storename);
        const keys = [];
        const store = tx.objectStore(storename);

        store.iterateCursor(cursor => {
            if (!cursor) return;
            keys.push(cursor.value);
            cursor.continue();
        });

        await tx.complete
        return keys
    }
};

export default idbKeyval;