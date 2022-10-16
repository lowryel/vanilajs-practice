let stock = {
  Fruits: ["strawberry", "orange", "mango", "pineapple"],
  liquid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};

function order(_Fruit_name, production_time) {
  setTimeout(() => {
    console.log(`${stock.Fruits[_Fruit_name]} was selected`);
    production_time();
  }, 2000);
}

function production() {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("fruit has been chopped");
      setTimeout(() => {
        console.log(
          `${stock.liquid[0]} and ${stock.liquid[1]} have been added`
        );

        setTimeout(() => {
          console.log(`You have selected a ${stock.holders[0]} `);
          setTimeout(() => {
            console.log(`You have selected ${stock.toppings[0]}`);
            setTimeout(() => {
              console.log("Your order is ready");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 0000);
}

order(0, production);

// let shop_open=true;
// function newPromiseFunc(time, work) {
//     return new Promise((resolve, reject)=>{
//         if(shop_open){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);

//         }
//         else{
//             reject(console.log('Sorry, we are closed'))
//         }
//     });

// }

// newPromiseFunc(14000, (()=>{
//     console.log('Order being processed');
// }))

// .then(()=>{
//     return newPromiseFunc(1000, ()=>{
//         console.log('Good going')
//     })

// })
