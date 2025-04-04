// link: https://www.youtube.com/watch?v=TnhCX0KkPqs

/*
//Part1: Promise has two parts: promise maker and promise receiver
// Promise maker
function getWeather(){
    return new Promise() //This is the promise
}

// Promise receiver
getWeather()
*/

// Part2: A promise has 3 stages: pending(default state), resolve and reject
function getWeather(){
    return new Promise(function(resolve, reject){
        // new Promise() would create new promise 
        /*
            A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
        */
        // resolve('Sunny');
        reject('Sunny');
        // reject('Windy')
    })
}

/*
const promise = getWeather()
promise.then(function(data){
    console.log(data) // Output: Sunny
})
promise
*/
function onSuccess(data){
    console.log(`Success ${data}`)
}

function onError(error){
    console.log(`Error: ${error}`)
}

getWeather().then(onSuccess, onError)