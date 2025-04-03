//  Callback- Revision1
//  #### We already used callback in "addEventListener"
window.addEventListener('click', callback);
function callback(){
    console.log("addEventListener triggered")
}
 
 
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


