// function orderPizza(callback){
//     setTimeout(()=>{
//         const pizza = `🍕`;
//         callback(pizza);
//     },2000)
// }

// function pizzaReady(pizza){
//     console.log(`Eat the ${pizza}`);
// }

// orderPizza(pizzaReady);
// console.log("Call Qoli");

// Using a callback instead of async/await


// !!! Callback:1 - Will not work at all 
/*
    setTimeout(logHello, 1000)

    const logHello = () =>{
        console.log("Hello")
    }

*/ 

// Callback-2: correct way
const logHello = () => {
    console.log("Hello"); // Hello will show after 1s
};
setTimeout(logHello, 1000);


// Callback-3: Another way of previous approach
setTimeout(()=>{
        console.log("Hello"); // Hello will show after 1s
},1000)


// Callback-4: forEach also uses callback
/*
    const names = ['james', 'jess', 'lily', 'sevy']
    names.forEach((name)=> console.log(name));
*/
const names = ['james', 'jess', 'lily', 'sevy']
const myForEach = (arr, cb) =>{
    for (let i=0; i<arr.length; i++){
        const element = arr[i];
        cb(element)
    }
}

myForEach(names, (name) =>{
    console.log(name) // This callback simply logs each name
    /*
        Here, '(name)=>console.log(name)' is a function passed 
        as a parameter.This arrow function takes a single parameter 
        name and performs the operation console.log(name).
    */
})
// previous code with single line
myForEach(names, (name)=>console.log(name)); 



// Callback-5
const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
      callback("Data fetched!");
    }, 2000); // Simulates a delay of 2 seconds
  };
  
  const getDataWithCallback = () => {
    console.log("Fetching data...");
    fetchDataWithCallback((data) => {
      console.log(data); // Logs the data once the callback is invoked
    });
  };
  
  getDataWithCallback();
  