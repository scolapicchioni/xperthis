onmessage = function(parameter){
    let res;
    switch(parameter.data.action){
        case 'min':
            res = min(parameter.data.list)
            break;
        case 'max':
            res = max(parameter.data.list)
            break;
        case 'blabla':
            res = min(parameter.data.list)
            break;
    }

    postMessage({
        command : parameter.data.action, 
        result : res
    })
}

function min(list){
    //do soething veeeeery sloooowly
    return 3
}

function max(list){
    //do something very slowly
    return 4
}