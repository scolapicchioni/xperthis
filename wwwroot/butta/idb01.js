import idbKeyval from "./idbkeyval.js"

async function doStuff(){
    await idbKeyval.set('somekey', {id:1, name:'Mario'})
    const keys = await idbKeyval.keys()
    console.log(keys)
    const values = await idbKeyval.values()
    console.log(values)
    const val01 = await idbKeyval.get(keys[0])
    console.log(val01)
}

doStuff()
