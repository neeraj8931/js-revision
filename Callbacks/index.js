// Reference : https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

let stocks = {
    fruits: ["grapes", "banana", "apple", "strawberry"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
  };
  // Asynchronous with callbacks

  console.log("------------Asynchronous with callbacks-----------");
  
  function order(fruitName, startProduction) {
  
    setTimeout(()=>{
       console.log(`${stocks.fruits[fruitName]} was selected`);
  
       // Order placed, call production to start 
       startProduction();
    }, 2000)
  }
  
  function production() {
    setTimeout(()=>{
      console.log("Production has started");
  
      setTimeout(()=>{
          console.log("The fruit has been chopped");
          setTimeout(()=>{
              console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
              setTimeout(()=>{
                console.log("start the machine")
                setTimeout(()=>{
                  console.log(`Ice cream placed on ${stocks.holder[1]}`)
                  setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} as toppings`)
                    setTimeout(()=>{
                      console.log("serve Ice cream")
                    },2000)
                  },3000)
                },2000)
              },1000)
            },1000)
        },2000)
  
    },0);
  }
  
  order(0, production);
  
  