let stock={
    Fruits:['strawberry', 'orange', 'mango', 'pineapple'],
    liquid:['water', 'ice'],
    holders:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanut']
  }

let is_open_shop = false;

let newOrder=(time, work)=>{
    return new Promise((resolve, reject) => {
        if(is_open_shop){
            setTimeout(() => {
                resolve(work());
            }, time);
        
        }else{
            reject(console.log('We do not have what you ordered'));
        };
    });
};
newOrder(2000, ()=>{
    console.log('Work will resume soon');
})

.then(()=>{

    return newOrder(0000, ()=>{
        console.log('Production has started');
    });
})

.then(()=>{

    return newOrder(2000, ()=>{
        console.log('fruit has been chopped');
    })
})

.then(()=>{
    return(newOrder(1000, ()=>{
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} have been added`);
    }))
})

.then(()=>{
    return newOrder(2000, ()=>{
        console.log(`You will be served in a ${stock.holders[0]}`);
    })
})

.then(()=>{
    return newOrder(3000, ()=>{
        console.log(`You will be served icecream with ${stock.toppings[0]} toppings`);
    })
})

.then(()=>{
    return newOrder(2000, ()=>{

        console.log("Your order is ready");
    })
})

.catch(()=>{
    console.log('Customer left')
})

.finally(()=>{
    console.log('Day is over, shop closed!')
})

