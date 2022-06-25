/*
///values and variables
let js = 'amazing';
    
console.log(48+8+23-10); 
console.log('Hellow World'); 

// variable
let firstName = 'Prabir';
console.log(firstName);
console.log(firstName);

// Not use for variable name
// let 3yers = 3; x
// let first@Name = 'Prabir'

// dont use JS keyword for variable like this
// let function = 23;


/// data types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof false);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Prabir');

// dynamic typeing (type change of a variable)
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

// undefind type
let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

// bug in JS
console.log(typeof null)


/// let, const, var
let age = 30;
age = 35; // Meutable or Reassining possible

const birthYear = 1998;
// birthYear = 2000; // Imeutable Reassining not possible
// const job; // Missing initializer in const declaration 

var job = 'Programmar';
job = 'Teacher'; //allowd
 

/// operator
console.log(10+5, 10-5, 10*5, 10/5);
console.log(2**3);
const firstName = 'Prabir';
const lastName = 'Tarafdar';
console.log(firstName + lastName); // concatination
console.log(firstName +" " + lastName); // concatination

// assinment operator
let x = 10 +5;
x += 10;
x *= 4;
x++;
x--;
x -= 2;
console.log(x);

// comparison operator; >, <, >=, <=
console.log(5>3);
console.log(5<3);
console.log(10>=11);
console.log(3<=3);


/// operator precedance
console.log(10+5-3*2+10/5);
console.log(10+(5-3)*2+10/5);


/// string in javaScript
const firstName = 'Prabir';
const job = 'Student';
const age = 23;
// string simple concatination
const myData = "I'm " + firstName + ', a ' + age + ' years old ' + job + '!';
console.log(myData);
// template letaral's for conca5tination
const newData = `I'm ${firstName}, a ${age} years old ${job}!`;
console.log(newData);

console.log(`Just a regular string using template letaral's`);

// one string in multiple lines
console.log('String with \n\
multiple \n\
lines');
// one string in multiple lines using template letarals
console.log(`JavaScript 
is the most 
popular web 
programming language`);


/// if - else
const age = 12;
if(age >= 18){
    console.log('Suvo can start driving licence 🚗');
}else{
    const yearsLeft = 18 - age;
    console.log(`suvo is too young. Wait another ${yearsLeft} years`);
}

/// Type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear)+18);

console.log(Number('Pratyusha')); //NaN
console.log(Number('123ab'));// nan

console.log(typeof NaN);

console.log(String(123));

/// type coerction
console.log('I am ' + 23 + 'Years old');// JS automatically convert 23 to a string
console.log('23'-'10'- 3);
console.log('23'*2);
console.log('23'/'2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


/// Truey and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // empty object
console.log(Boolean('')); // empty string

const money = 0; // number
if(money){
    console.log("Don't spend is all;");
}else{
    console.log("You should get a job!!");
}


/// === operator (strict equality operator)
const age = 18;
if(age === 18)
    console.log('You just became an adult');
// == operator(loose equality operator)
if(age == '18')
    console.log('You just became an adult');
/// !== operator 
if(10 !== 18)
    console.log('not equal');

/// user input from web page
const num = prompt('What is your fevourit number');
console.log(num, typeof num);
console.log(Number(num));

/// nested if-else
const marks = Number(prompt('Enter your marks'));
if(marks === 90){
    console.log('Outstanding');
}else if(marks === 80){
    console.log('Very Good');
}else if(marks === 70){
    console.log('Good');
}else if(marks === 50){
    console.log('pass');
}else{
    console.log('Fail');
}

 
/// logical operators

const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);


/// switch statement in JS
const day = 'thursday';

switch(day){
    case 'monday':
        console.log('Monday');
        break;
    case 'tuesday':
        console.log('Tuesday');
        break;
    case 'wednesday':
    case `thursday`:
        console.log('Wednesday');
        console.log('Thursday');
        break;
    case 'friday':
        console.log('Friday');
        break;
    case 'satureday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log('Not a valid day');
}
/*
/// Expreassion
// anything that produce a value ..like
3+2
1992
true && false && !false

if(23>12){ // statement becuase doesnot produce value;
    const str = 'pt'; //exprassion
}
*/

/// Ternary operator
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷'):
console.log('I like to drink milk 🧂')

const drink = age >= 18 ? 'Wine 🍷': 'milk 🧂';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine 🍷': 'milk 🧂'}`);






