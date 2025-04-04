// link: https://www.youtube.com/watch?v=QSqc6MMS6Fk


//  Callback- Revision1
//  #### We already used callback in "addEventListener"
/*
window.addEventListener('click', callback);
function callback(){
    console.log("addEventListener triggered")
}
 
*/
 
//  Callback- Revision2
 function orderPizza(callback){
    setTimeout(()=>{
        const pizza = `🍕`;
        callback(pizza);
    },1000)
 }

 // Call back function 'pizzaReady'
 function pizzaReady(newPizzaName){
    console.log(`Eat the ${newPizzaName}`)
 };

 orderPizza(pizzaReady);
 console.log('Call the customer')


/*
// !!! Callback Hell
function thing1(callback){
   // Call Pizza Shop
   callback()
}

function thing2(callback){
   // Order the pizza
   callback()
}

function thing3(callback){
   // Eat the pizza
   callback()
}

// !!!!hell: passing call back
thing1(
   () => {
      thing2(
         ()=>{
            thing3()
         }
      )
   }
)
*/
