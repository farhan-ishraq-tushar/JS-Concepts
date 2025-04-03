let pizza;
function orderPizza(){
    setTimeout(()=>{
        pizza = '🍕';
        console.log(`Eat ${pizza}`)
    },2
    )
    console.log('Pizza was ordered')
}
orderPizza()
console.log('Call Qoli');
console.log(`Eat ${pizza}`);

