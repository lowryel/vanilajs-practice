// console.log('this is my first js project');
// const tenn=12;
// const five=5;
// t = tenn + five;
// console.log(t);
//
// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
//
// console.log(Math.max(2, 4, 5, 8));
// console.log(Math.min(2, 4, 5, 8));
//
// let aNumber = Number(prompt('Pick a number: '));
// if (aNumber < 20){
//     console.log('Your number is less than 20!', aNumber);
// }
// else {
//     console.log('Your number is greater than 20', aNumber);
// }
//
// num = 0;
// while (num<=12){
//     console.log(num);
//     num = num + 2;
// }
//
// let result = 1;
// let counter = 1;
// while (counter <= 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);
// console.log(counter);
//
// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);
//
// console.log(Number(586564));
// console.log("thi is the first line\nAnd this is the second");


// for (let num = 0; num<=12; num = num+2){
//   console.log(num);
// }
// var name = 'Atsu';
//     username = String(prompt('Enter a username:'));
//     if (username == name){
//       console.log("Good, you got it,", username);
//     }else{
//       console.log('Name not same as Atsu,',username);
//     };


// TODAY"S DATE 13/12/2021 STUDIES
// let num=20;
// for (num; ; num=num + 1){
//   if (num%7==0){
//     console.log(num);
//     break;

//   };
// for (let number = 0; number <= 7; number = number + 1) {
//   console.log('#');
// }

// for (let num=0; num<=100; num=num+1){
//   if (num%3==0){
//   console.log("Fizz", num);
// }else if(num%5==0){
//   console.log("Buzz", num);
  
// }if(num%3==0 && num%5==0){
//   console.log("FizzBuzz", num);
// }else{
//   console.log("Good");
// }
// }
// Functions in Javascript

// const two=function(x,y) {
//   return x*y
// }
// x=Number(prompt('Enter a number:'))
// y=Number(prompt('Enter a number:'))
// one = two(x,y)
// console.log(one);

// const halve = function(n) {
//   return n / 2;
// }
// let n = 10;
// console.log(halve(20));

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount*factor;
//     if (ingredientAmount>1){
//       unit+='s';
//     }
//     console.log('${ingredientAmount} ${unit} ${name}');
//   }
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// let launchMissiles = function() {
//   missileSystem.launch("now");
// };
// safeMode='Trigger ready'
//   if (safeMode) {
//   launchMissiles = function() {'do nothing'};
// }
// // You can also decide to call a function before declaring it as seen below
// console.log(launchMissiles);
// console.log(name_(), "is clear");
// function  name_() {
//   return "The future"
  
// }

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(power(2,6));

// function greet(who) {
//   console.log("Hello " + who);
//   }
//   greet("Harry");
//   console.log("Bye");

// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// add();
// add();
// add();
// _________________________________________16/12/2021 3:30pm________________________________-

// function greet(who) {
//     console.log("Hello", who);
// }
// greet("Harry")
// console.log("Bye"); //Result will give you Hello Harry followed by Bye on another line

// function chick(){             //This funtion returns nothing and runs into an infinite loop
//     return egg();
// }function egg(){
//     return chick();
// }
// console.log(chick(), "chick came first");

// function square(x,y) {
//     return x*y;
// }
// console.log(square(2,3,4));

// function multiplier(factor) {
//     return number => number*factor
// }
// let num = multiplier(2)
// console.log(num(3));

// function multi(fac) {
//     return numm=>numm*fac
// }
// let mea = multi(3)
// console.log(mea(4));


//_______________________Recursive funtions______________________________________________________
// function numb1(team) {
//     function numb2(club, cap) {
//         if (club==team){
//             return cap;
//         }else if(club>team){
//             return null;
//         }else{
//             return numb2(club + 1 ,cap * 2)|| //Changing the two(2) will give you the exponent of the no.
//                     numb2(club*2, cap + 1);
//         }
//     }
//     return numb2(1,1);
// }
// for (x=1; x<=11; x+=1){
//     console.log(numb1(x)); //You can either call this side OR
// //-----------------------------------=---------------------------------------------------
// }
// __________Issue a call to this part_______________
// console.log(numb1(1));
// console.log(numb1(2));
// console.log(numb1(3));
// console.log(numb1(4));
// console.log(numb1(5));
// console.log(numb1(6));
// console.log(numb1(7));
// console.log(numb1(8));
// console.log(numb1(9));
// console.log(numb1(10));
// console.log(numb1(11));

// function zeroPad(number, width=3) {
//     let string = String(number);
//     while (string.length < width) {
//     string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows)} Cows`);
//     console.log(`${zeroPad(chickens)} Chickens`);
//     console.log(`${zeroPad(pigs)} Pigs`);
// }
//     printFarmInventory(7, 16, 3);

// _________________20/12/2021 Monday___________________________________

// let listOfNumbers = [2,5,4,8,6];
// console.log(listOfNumbers.length)

// let doh = "Doh";
// a = doh[1].toUpperCase();
// console.log(a);
// console.log(doh.toLowerCase());

// The push method (push() works just like append() in python i.e. for adding objects to a list)
// let numList = [2,1,3];
// a = numList.push(5);
// console.log(a);
// console.log(numList);
// console.log(numList.pop());
// console.log(numList.pop());
// console.log(numList);

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
    // };
    // console.log(day1.squirrel);
    // console.log(day1.events);
    // → false
    // console.log(day1.wolf);
    // → undefined
    // day1.wolf = false;
    // console.log(day1.wolf);
    // → false

//     let events = {
//         even:'this is even',
//         number:'This is even number'
        
//     }
//     console.log(events);
// console.log(Object.keys({'even':2, 'odd':3}));
// console.log(Object.values({'even':2, 'odd':3}));

// let day1 = {
//     wolf: true,
//     squirrel:false,
//     events:['climb tree', 'running', 'eat fruit']
// }
// console.log(day1.wolf);
// console.log(day1.squirrel);
// console.log(day1.events);
// day1.wolf = false;
// console.log(day1.wolf);
// if (day1.wolf && day1.squirrel==true){
//     console.log(false);
// }else if (day1.wolf || day1.squirrel==false){
//     console.log(true);
// }else{'e don kpaa'};

// let A={a:2, b:3};
// Object.assign(A, {c:4, d:8})
// console.log(typeof A); 
// console.log(A);

// const score = {visitors:0, rooms:0};
// console.log(score.visitors);
// score.visitors=1;
// score.rooms= 1;
// console.log(score);
// for (key in score){
//     console.log(key);
// }
// let arr = [];
// arr[100] = 1;

//     console.log(arr);

// console.log(arr[100]);
// console.log(arr.length); //result is 101 since we have assigned the 100th term to 1,
// any value from 0 to 99 becomes undefined and has a length of 100 hence the 101.

// let journal = [];
// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }
// addEntry(['climb tree', 'running', 'eat fruit'], false)
// addEntry(['climb tree', 'jump to tree', 'eat mushroom'], false)
// addEntry(['climb mountain', 'read a book', 'eat fruit'], true)

// console.log(journal.keys());
// console.log(journal);



// function phi(table) {
//     return (table[3]*table[0]-table[2]*table[1])/
//     Math.sqrt((table[2]+table[3])*
//     (table[0]+table[1])*
//     (table[1]+table[3])*
//     (table[0]+table[2])
//     )
// }
// console.log(phi([76, 9, 4, 1]));

// function addNum(a,b) {
//     return Math.sqrt(a,b);
// }
// console.log(addNum());
// numList = [76, 9, 4, 1];
// for (i in numList){
//     if (numList.includes(9)){
//         console.log(numList[i=0]);
//     }
// }
// n = numList.includes(9)
// console.log(n);

// function max(...nums) {
//     result=-Infinity;
//     for (let num of nums){
//         if (num>result) result=num;
//     }
//     return result;
// }
// console.log(max(2,5,4,8,9,-2)); //this returns the maximum number if the array


// let words = ['never', 'fully'];
// console.log('will', ...words, 'understand'); //

// function PointOnCircle(radius) {
//     let angle = Math.random()*2*Math.PI;
//     return {
//         x:radius*Math.cos(angle),
//         y:radius*Math.sin(angle)
//     };
// }
// console.log(PointOnCircle(2));  //

// let name = {name:'Fareed', age:15}
// console.log(name.name);
// console.log(name.age);


// function phi([n00, n01, n10, n11]) {
//     let a=(n11 * n00 - n10 * n01);
//         b=(Math.sqrt((n10 + n11) * (n00 + n01) *
//         (n01 + n11) * (n00 + n10)));
//         return a/b;
// }
// console.log(phi([2,4,5,6]));

// let word='learn';
// b=word.repeat(2);
// console.log(b);

// let total = 0, count = 1;
// while (count<=10) {
//     total +=count;
//     count+=1
// }
// console.log(total);
//  //-----------------------OR--------------------

// function repeat(n, action) {
//     for(let i=1; i<n+1; i++){
//         action(i);
//     }
// }
// console.log(repeat(3, console.log));

// let rabbit = {};
// rabbit.speak = function(line) {
//     console.log("The rabbit says '${line}'");
// };
// rabbit.speak("I'm alive.");

// console.log("SPELL CHECKER");
// let mySpell = prompt('Enter a word: ');
// function move(spell){
//     if(mySpell==spell){
//         console.log("Done correctly");
//     }else{
//         console.log("Try again next time");
//     }
//     console.log('Spell ${spell} correctly');
// }
// let angel = {move};
// console.log(angel.move('wellington'));


// Manipulating arrays using the spread [...] operator
// const names=[
//     'Bea',
//     'Ape',
//     'Jude',
//     'Dan',
// ]
// function alphaOrder() {
//     return names.sort();
// }
// console.log(alphaOrder());

// function order(names) {
//     return [...names].sort()
// }
// console.log(order(names));

// const staff = [
//     {
//     name: 'Wesley',
//     position: 'musician',
//     },
//     {
//     name: 'Davis',
//     position: 'engineer',
//     },
// ];

// function Keys(staff) {
//     return staff.keys()
    
// }
// console.log(Keys(staff));
// const game1 = {
//     player: 'Jim Jonas',
//     hits: 2,
//     runs: 1,
//     errors: 0,
// };
//     const game2 = {
//     player: 'Jim Jonas',
//     hits: 3,
//     runs: 0,
//     errors: 1,
// };
// total={};

// const stats=Object.keys(game1)
// for (let i=0; i<stats.length; i++){
//     const stat=stats[i]
//     if(stat!=='player'){
//         total[stat]=(game1[stat]+game2[stat]);
//         // console.log(stat[i].length);
//     }
    
// }
// console.log(total);

const dogPair = {
    name: 'Don',
    color: 'black',
};
if (dogPair.name='Don'){
    console.log(dogPair.color);
}
console.log(dogPair.color + dogPair.name);

// let arr=document.querySelector("#demo")
// let arr_to_display=document.addEventListener('click', arr =>{
//     document.write(arr_to_display);
// })


let newDate= new Date();
document.write(newDate);

// let price=prompt("Enter the price of an item: ");
// let quantity=prompt("Enter the quantity of an item: ");;

// price=5;
// quantity=3;
// let total=price*quantity;
// var el=document.querySelector('#demo1');
// el.textContent='$'+total  //or you can also use innerHTML
// console.log(el.className='siping');

// var inStock;
// var shipping;
// inStock = true;
// shipping= false;

// var elStock = document.getElementById('demo');
// elStock.className = inStock;
// var elShip = document.getElementById('demo1');
// elShip.className = shipping;

// function rrays(nums) {
//     for(let i of nums){
//         console.log(i);
//     }
// }
// nums=[4,5,6,9]
// console.log(rrays(nums));
// var ell=document.getElementById('demo1');
// ell.innerHTML=rrays(nums);

// let nums=[4,5,6,9]
// for(let i=0; i<nums.length; i){
//     console.log(nums.map());
// }

// console.log(('The end').length);


// function func(name){

// }
let nums="Welcome message"
const func=function(nums){
    console.log(nums);
}

el=document.getElementById('demo');
el.innerText=nums

let list=0
let total=document.getElementById('demo2');
let sum;
const functionToDisplayAnArray=function() {
    let display=document.getElementById('demo1')
    display.addEventListener('click', (add)=>{
        sum=add.target.id;
        total.style.border='2px solid red';
        total.innerHTML=nums;
    })
}
functionToDisplayAnArray()


// const getArea=function(width, height) {
//     document.write(width*height);
// }
// getArea(2,3);

// const functionName=(function(a,b) {

//     var total=a+b;
//     console.log(total);
// }(4,5))

// var isWall=canPaint='True';
// console.log(isWall);
// console.log(canPaint);
// Hotel Object with a method that can be accessed using either dot notation or using the square bracket
// var hotel={
//     name: 'Mensvic',
//     rooms:105,
//     booked:45,
//     roomTypes: ['twin', 'double', 'suites'],
//     ratesPerNight:[1400, 1000, 2100],
//     availableRooms: function() {
//         return this.rooms - this.booked;
//     }
// };
// function hotelRates() {
//     return hotel.availableRooms();
// }
// console.log(hotelRates());
// var hotelName=document.getElementById('demo2');
// hotelName.textContent=hotel.name;

// var roomAvailability=document.getElementById('available_room');
// roomAvailability.textContent=hotelRates();

// var hotel= new Object();

// hotel.name='Erata Hotel';
// hotel.rooms=125;
// hotel.booked=58;
// hotel.availableRooms=function() {
//     return this.rooms-this.booked;
// }
// console.log(hotel.availableRooms());

// hotel.booked=63;
// delete hotel.booked;
// console.log(hotel.availableRooms());



// function Hotel(name, rooms, booked) {
//     this.name=name;
//     this.rooms=rooms;
//     this.booked=booked;
//     this.availableRooms=function() {
//         return this.rooms-this.booked;
//     };

// };
// var erataHotel=new Hotel('Erata', 78, 26);
// var mensvicHotel=new Hotel('Mensvic', 200, 112);
// // console.log(erataHotel);

// var details1=erataHotel.name+ " " + 'rooms:';
// details1 +=erataHotel.availableRooms();
// var display1=document.getElementById('hotel_name')
// display1.textContent=details1;
// // console.log(details1);

// var details2=mensvicHotel.name+ " " + 'rooms:';
// details2 +=mensvicHotel.availableRooms();
// var display2=document.getElementById('hotel_name2');
// display2.textContent=details2;
// // console.log(details2);

// const totalRooms=function() {
//     return mensvicHotel.availableRooms() + erataHotel.availableRooms();
// };

// var totalrooms=document.getElementById('available_room');
// totalrooms.textContent=totalRooms();


// var hotel=new Object();
// hotel.name='Mensvic';
// hotel.rooms=120;
// hotel.booked=63;
// hotel.availableRooms=function() {
//     return this.rooms-this.booked;
// };
// var hName=document.getElementById('hotel_name');
// hName.textContent='Welcome to'+" " +hotel.name+ '😊';

// var rooms_available=document.getElementById('available_room');
// rooms_available.textContent='🤩We have'+ " "+ hotel.availableRooms()+ " " + 'rooms left🥰';

// var hotel = {
//     name : 'Park',
//     rooms : 120,
//     booked : 77,
// };
//     hotel.gym = true;
//     hotel.pool = false;
//     delete hotel.booked;
//     var elName = document .getElementById('hotel_name');
//     elName.textContent = hotel.name;
//     var elPool = document.getElementById('pool');
//     elPool.className = ' Pool: ' + hotel.pool ;
//     var elGym = document.getElementById('gym');
//     elGym.className = 'Gym: ' + hotel.gym;

// var timeof=newDate;
// console.log(timeof.getFullYear());

// var text='Welcome User'
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(5)); // operates like indexing in python. the opposite is 'indexOf()'
// console.log(text.split(' '));


// var v=8.0156485625;
// console.log(v.toPrecision(5));

// var today=new Date(2022, 3, 11, 1,50);
// var todays_date=today.getHours()
// console.log(today);

// let lump_sum=0;
// count=1;

// while(count<=10){
//     lump_sum+=count;
//     count+=1;
//     console.log(lump_sum);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     }

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//     action(i);
//     }
// }
// repeat(3, console.log);

// let arr;
// function calculatingAverage(data) {
//     function data() {
//         data=[4,5,6,3,2]
//         for(let i=0; i<data.length; i++){
//             console.log(i);
//         }
//     }
//     console.log(data());
// }
// console.log(calculatingAverage(data()));


// let data=[4,5,6,3,2];
// data.forEach(l=>{l+2});
    
// console.log(data, 'total');

// function sample(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(sample([1, 2, 3, 4], (a, b) => a + b, 0));

// console.log([1, 2, 3, 4].reduce((a, b) => a + b));



listOfNumbers=[1,2];
let lump=0;
for(let i of listOfNumbers){
    lump+=i;
}
totalOfTheList=document.getElementById('summation');
totalOfTheList.addEventListener('click', e=>{
    // lump++
    totalOfTheList.innerHTML=lump++;
})

// class Car{
//     car(tyre) {
//         this.tyre=tyre;
//     }
//     bike(){
//         console.log();
//     }
// }

let myVar=document.querySelector('#gym').style.color='blue';

// function multiply(num1, num2) {
//     let result=num1*num2;
//     return result;

    
// }
// console.log(multiply(4,2));

// let fullHtml=document.querySelector('html');
// fullHtml.addEventListener('click', ()=>{
//     fullHtml.style.backgroundColor='grey';
// })

// let myImage=document.querySelector('img');
// myImage.addEventListener('click', ()=>{
//     let mySrc=myImage.getAttribute('src');
//     if(mySrc==='games/memorygame/image/1.png'){
//         myImage.setAttribute('src', 'games/memorygame/image/1.png')
//     }else{
//         myImage.setAttribute('src', 'games/memorygame/image/1.png');
//     }
// })
// console.log(myImage);



// let lots=[1,2,3,4,5,6,5,6,8,9,5];
// for(let i in lots){
//    console.log(Math.floor(Math.random(lots[i])*lots.length+1));
// }

// lots.pop()
// console.log(lots);

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// day1.wolf=false;
// console.log(Object.keys(day1).length);

// let journal=[];
// function addEntry(events, squirrel) {
//     journal.push(events, squirrel)
// }

// addEntry(['climb tree', 'peanut', 'sleep', 'snore'], true)
// addEntry(['climb tree1', 'peanut1', 'sleep1', 'snore1'], false)
// addEntry(['climb tree2', 'peanut2', 'sleep2', 'snore2'], false)

// console.log(journal);
// console.log(Object.keys(journal));
// console.log([0, 1, 2, 3, 4].slice());
// let arr;
// function opSpread(... nums) {
//     arr=nums;
//     return arr
// }

// console.log(opSpread(5, 5, 4, 8), 'spread');

// const listDetails=[
//     {
//         username:'John',
//         age:12,
//     },
//     {
//         username:'Derbie',
//         age:15,
//     }
// ]


// Several loop methods in JavaScript
// console.log(`Hello I'm ${listDetails[0].username} and I'm ${listDetails[0].age} years old`);

// let filteringList=listDetails.filter(age>12);
// listDetails.forEach(function(list){
//     console.log(`Hello I'm ${list.username} and I'm ${list.age} years old`);
// });

// for(let i=0; i<listDetails.length; i++){
//     console.log(`Hello I'm ${listDetails[i].username} and I'm ${listDetails[i].age} years old`);
// }
// for(i of listDetails){
//     console.log(`Hello I'm ${i.username} and I'm ${i.age} years old`);
// }
// listDetails.filter(e=>{
//     console.log(`Hello I'm ${e.username} and I'm ${e.age} years old`);
// });

// console.table(listDetails)

// function Car(model,names) {
//     this.model = model
//     this.name = names
//     this.age = 15
    // this.method=function () {
    //     return `${this.model} ${this.name} years old`;
    // }
// }

// const myCar = new Car("Toyota", "Land Cruiser")
// console.log(myCar.method());

// Car.prototype.method = function () {
//     return `${this.model} ${this.name} is ${this.age} years old`;
// }

// var civic = new Car("Toyota", "Land Cruiser")
// console.log(civic.method());

// var OneFunctionTester= (function () {
//     function OneFunction(options) {
//         options = options || {};
//         this.names = "Matt"
//         this.pointX = 15
//         this.pointY = 12
//     }
//     var instance;
//     var newOrder = {
//         names: "OneFunctionTester",
//         getInstance: function (options) {
//             if (instance === undefined) {
//                 instance = new OneFunction(options)
//             }
//             return instance
//         }
        
//     };
//     return newOrder;
// }())
// var callingFunction = OneFunctionTester.getInstance({
//     pointX:2
// })
// console.log(callingFunction.pointX);


// var Test = (function () {
//     function Test2(params) {
//         params = {}
//         this.a = 2
//     }
//     var instance;
//     var newFunc = {
//         a: "Test",
//         getinstance: function (params) {
//             if (instance === undefined) {
//                 instance = new Test2(params)
//             }
//             return instance
//         }
//     }
//     return newFunc;
// }());

// var callerfunc= Test.getinstance({})

// console.log(callerfunc.a);

// console.log(encodeURIComponent("Yes?"));
// console.log((decodeURIComponent("Yes%3F")));

// fetch("jsindex.html").then(response => {
//     console.log(response.status)
// })

// fetch("jsindex.html").then(response => {
//     console.log(response.headers.get("Content-Type"))
// })
// console.log(letter[0]);
// const ma = (Math.random())
// const man = Math.floor(ma * 10);
// if (man > 5) {
    //     console.log("Your order is ready")
    
    // } else {
        //     console.log(letter[man]);
        // }
        
let letter = [4, 5, 8, 7, 9]
letter.forEach((a) => {
    // tenary operator
    a % 2 == 0 ? console.log(a) : console.log('Oddddd');;
})


// const f1 = function () {
//     console.log("welcome to the hood");
//     console.log(Math.floor(Math.random()*10));
// }

// let f2 = function () {
//     console.log("You're about to print from f1()");
//     f1()
// }
// console.log(f2());


// Big Integer
// console.log(14551555566994169n);
// console.log(typeof(25n))

const toggle = document.querySelectorAll('#toggle');

toggle.forEach((a) => {
    console.log(a.innerHTML);
    a.addEventListener('click', () => {
        console.log(a.innerText);
        alert("You clicked a dom element")
    } )
})
console.log(toggle);


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('worked');
    }
    else {
        reject('Error, it broke')
    }
})

promise
    .then(response => response + '!')
    .then(response1 => response1 + '!!')
    .catch(() => console.log('aboooooozigi'))
    .then(response2 => {
        console.log(response2 + '!!!')
    })

// const urls = [
//     'https://www.github.com',
//     'https://www.github.com/lowryel',
// ]

// Promise.all(
//     urls.map(url => {
//         return fetch(url).then(response => {
//             response.json()
//         })
//     })
// ).then(result => {
//     console.log(result[0]);
//     console.log(result[0]);
// }).catch(setTimeout(() => {
//     console.log("You catch an Error")
// }, 5000))


async function callb() {
    const func=await console.log(400, 'Good timing');
}

function printf(a,b) {
    console.log(a + b);
}
// console.log(printf(2,25));
async function printPrintf() {
    const func = await printf(4, 5);
    await printf(25, 40);
    await printf(100, 50)
}

console.log(printPrintf());

const array1 = [1, 2, 3]
const array2 = [5, 6, 7]

const conca=function () {
    console.log('concat method', array1.concat(array2))
    array1.push(array2);
    console.log('push method', array1.flat());
    JSON.stringify(array1)
        console.log('stringify',array1);
        console.log('inner function',typeof(array1));

}
console.log(typeof(array1));
console.log(conca());
// JSON.stringify(array1)
// console.log(array1);
// JSON.parse(array1)
// console.log(array1);

let a = 13;
a == 12 ? console.log('good') : console.log('basd');
console.log(a);

// nzemupygzhlxvqwu


