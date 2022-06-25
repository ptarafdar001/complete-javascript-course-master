'use strict';

/*
//- strict mode
'use strict'; //syntax

let Licence = false;
const passTest = true;

if(passTest) licence = true; // error!! but without strict mode you cant finde it;
if(Licence) console.log('I can drive 🚗'); 


//- function in JS

function love(){
    console.log('I love You Pratyusha 💖💖');
}
// function calling or running or invoking
love();
love();
love();

function fruitProcessor(apples, oranges){
    const juice =  `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 8));

// function declaration - you can call a function declaration
// before declaration
// calling before
console.log(calcAge(1998));

function calcAge(birthYear){
    return 2022 - birthYear;
}
// calling after
const age1 = calcAge(1998);
console.log(age1);

// function expression - cant call before declaration
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2(2000);
console.log(age2);


//- Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);
// single argument Arrow function
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1998));

// multiple argument Arow function
const yearsRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsRetirement(1998, 'Prabir'));
console.log(yearsRetirement(2001, 'Suvo'));


//- function calling inside the function
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applepieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice =  `Juice with ${applepieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


//- Array in JS

const friends = ['Suvo', 'Tarak', 'Roni', 'Suvendu'];
console.log(friends);

const num = new Array(10, 20, 30, 40, 50);
console.log(num[0]);
console.log(num[3]);

console.log(num.length);

const prabir = ['Prabir', 'Tarafdar', 2022-1998, 'Programmer', friends];
console.log(prabir);

// array method
const friends = ['Suvo', 'Tarak', 'Roni'];
console.log(friends);
//add element
friends.push('Suvendu'); // add last, and return the length of the newArray
console.log(friends);
// another method for add element
const firstName = friends.unshift('Prabir'); // add front
console.log(friends);
console.log(firstName); // unshift method return the array length also

// delete element
friends.pop(); // pop from last
console.log(friends);

friends.shift()// pop from frist
console.log(friends);

// find index of any element
console.log(friends.indexOf('Roni')); // return the index no.
console.log(friends.indexOf('Moni'));// return -1

console.log(friends.includes('Rahul')); // return false
console.log(friends.includes('Roni')); // if yes return true else false


 //- Objects in JS - key-value pairs

 const prabir = {
     firstName: 'Prabir',
     lastName: 'Tarafdar',
     age: 23,
     job: 'Student',
     frinds: ['Suvo', 'Rahul', 'Roni']
 };
 console.log(prabir);
 console.log(typeof prabir);

 console.log(prabir.firstName);
 console.log(prabir['firstName']);

 const nameKey = 'Name';
 console.log(prabir['last'+ nameKey]);
 console.log(prabir['first'+ nameKey]);

// add more proparty to the object
prabir.location = 'India';
prabir['twitter'] = '@prabir_tarafdar';
console.log(prabir);  
// fun
console.log(`${prabir.firstName} has ${prabir.frinds.length} friends, and his best friend is ${prabir.frinds[0]}`);

//- Object methods
const prabir = {
    firstName: 'Prabir',
    lastName: 'Tarafdar',
    birthYear: 1998,
    job: 'Student',
    frinds: ['Suvo', 'Rahul', 'Roni'],
    hasIDcard: true,

    // calcAge: function(Year){ // function expression within a object
    //     return 2022-Year; 
    // }

    // calcAge: function(){
    //     return 2022 - this.birthYear; // this points to the object here
    // }

    calcAge: function(){ // efficient solution
        this.age =  2022 - this.birthYear; // this points to the object here
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} 
        -year old ${prabir.job}, and he has ${this.hasIDcard ? 'a': 'no'} 
        ID card.`
    }

};

console.log(prabir.calcAge(1998));
//console.log(prabir['calcAge'](1998));

console.log(prabir.age);
console.log(prabir.age);

console.log(prabir.getSummary());

//- Loops in JS
// for - loop

for(let i = 1; i<=10; i++){
    console.log(`Lifting weights repetion ${i} 🏋️‍♀️`);
}

const types =[]
const prabir = ['Prabir',
 'Tarafdar',
  2022-1998,
 'Programmer',
 ['Suvo', 'Rahul', 'Roni'],
 true
];
for(let i = 0; i<prabir.length; i++){
    console.log(prabir[i]);
    
    //types[i] = typeof prabir[i];
    types.push(typeof prabir[i]);
}
console.log(types);

const num = new Array(10, 20, 30, 40, 50);
for(let i=0; i<num.length; i++)
    console.log(num[i]);

// continue 
console.log('----only String----');
for(let i=0; i<prabir.length; i++){
    if(typeof prabir[i] !== 'string')
        continue;
    console.log(prabir[i], typeof prabir[i]);
}
// break
console.log('----Break with NUmber----');
for(let i=0; i<prabir.length; i++){
    if(typeof prabir[i] === 'number')
        break;
    console.log(prabir[i]);
}

// loop through backword
const num = new Array(10, 20, 30, 40, 50);
for(let i=num.length-1; i>=0; i--){
    console.log(num[i]);
}

// loop inside a loop
for(let i=0; i< 5; i++){
    console.log(`${i+1}st itaration of outer loop`)
    for(let j=1; j<5; j++){
        console.log(j);
    }
}
*/

//- while loop
let i = 1;
while(i <= 10){
    console.log(`${i} Prabir 💖 Pratyusha`);
    i++;
}

let dice = Math.trunc(Math.random()*6) +1;
//console.log(dice);
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) +1;

    if(dice === 6)
        console.log('Loop is about to end!!');
}


