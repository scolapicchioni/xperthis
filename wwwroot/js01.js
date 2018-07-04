import publicFunction from "./js02.js"

//I can call stuff imported from another module
//as long as the stuff was exported in that module
//publicFunction()

//dynamicallyTyping()

function dynamicallyTyping(){
    var x

    //undefined
    console.log(x)
    //"undefined"
    console.log(typeof x)

    x = 5
    //"number"
    console.log(typeof x)

    x = 'hi'
    //"string"
    console.log(typeof x)

    x = true
    //"boolean"
    console.log(typeof x)
}

//hoisting01()

function hoisting01(){
    //I can use variables before declaring them
    //because the declaration at runtime has hoisted
    //so x already exists and it has an undefined value

    //undefined
    console.log(x)
    var x = 10
    //10
    console.log(x)
}

//watch out for weird behavior when using var
//hoisting02()
function hoisting02(){
    var x

    //undefined
    console.log(x)

    x = 5

    //5
    console.log(x)
    
    f()

    function f(){
        //the x I'm referring to is
        //the one declared IN THIS FUNCTION
        //that at runtime has been hoisting
        //and that has an undefined value
        //UNDEFINED!!!!
        console.log(x)
        var x = 10
        //10
        console.log(x)
    }
}

function hoisting03(){
    //I can use functions before I declare them
    //because they get hoisted too
    f()

    function f(){
        console.log("hi from function1")
    }    
}

//let01()
function let01(){
    let x = 10

    console.log(x)
    //I cannot declare a variable twice with let
    let x; //BOOOOOM!
    console.log(x)
}

//let02()
function let02(){
    //let does not hoist
    //so x does not exist yet
    console.log(x) //BOOM
    let x = 10;
    console.log(x)
}

objects01()

function objects01(){
    const obj1 = {}
    const obj2 = obj1
    obj2.oneProperty = 5
    console.log(obj1)
}

//parameters01()
function parameters01(){
    let argument = 10;
    
    console.log('argument before increment' + argument)
    increment(argument)
    console.log('argument after increment' + argument)
    
    function increment(parameter){
        console.log('parameter before increment' + parameter)
        parameter++
        console.log('parameter after increment' + parameter)
    }
}

parameters02()
function parameters02(){
    const argument = {};
    argument.oneProperty = 10
    console.log('argument before increment' + argument.oneProperty)
    increment(argument)
    console.log('argument after increment' + argument.oneProperty)
    
    function increment(parameter){
        parameter = {}
        console.log('parameter before increment' + parameter.oneProperty)
        parameter.oneProperty++
        console.log('parameter after increment' + parameter.oneProperty)
    }
}

function const01(){
    const obj1 = {}
    obj1.oneProperty = 5
    obj1.oneProperty = 10
    console.log(obj1)
}

function const02(){
    const obj1 = {}
    obj1 = {}
    console.log(obj1)
}

conversions01()
function conversions01(){
    let s = "5" //string
    let i = 5 //number
    
    let conversion = +s
    console.log(conversion)
    console.log(typeof conversion)

    let sum = s + i
    console.log(sum) //"55"
    console.log(typeof sum) //string

    let multiplication = s * i
    console.log(multiplication) //25
    console.log(typeof multiplication) //number
    
    s = 'hi'
    sum = i + s
    console.log(sum) // '5hi'
    console.log(typeof sum) //string

    conversion = +s
    console.log(conversion)
    console.log(typeof conversion)

    multiplication = s * i
    console.log(multiplication) //
    console.log(typeof multiplication) //
    
    s = '1'
    i = true
    let equal = s == i
    equal = s === i

}