// Reference : https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
let is_shop_open = true;
let stocks = {
  fruits: ["grapes", "banana", "apple", "strawberry"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};

// Asynchronous with Async / Await

console.log("------------Asynchronous with Async / Await ------------");


function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },3000)
  })
}

async function kitchenOld(){

  console.log("A")
  console.log("B")
  console.log("C")
  
  await toppings_choice()
  
  console.log("D")
  console.log("E")

}

// Trigger the function
kitchenOld();
kitchen();






function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}
// ------------Asynchronous with Async / Await  Example 2------------



function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"));
      }
    });
}

async function kitchen(){
  try{
await time(2000)
console.log(`${stocks.fruits[0]} was selected`)

await time(0000)
console.log("production has started")

await time(2000)
console.log("fruit has been chopped")

await time(1000)
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

await time(1000)
console.log("start the machine")

await time(2000)
console.log(`ice cream placed on ${stocks.holder[1]}`)

await time(3000)
console.log(`${stocks.toppings[0]} as toppings`)

await time(2000)
console.log("Serve Ice Cream")
  }

  catch(error){
 console.log("customer left")
  }
}
