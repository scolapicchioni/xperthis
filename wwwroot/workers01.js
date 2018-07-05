console.log("hi from the main thread")

const worker = new Worker('theworker.js')
console.log("worker created...")

const command = {
    action : 'min',
    list : [3,5,8,2,5,8,3,7,9]
}
worker.postMessage(command)

worker.onmessage = function(parameter){
    console.log(`result ${parameter.data.result} received from command ${parameter.data.command}`)
}