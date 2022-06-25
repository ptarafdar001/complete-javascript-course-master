/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.66;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log('Mark BMI', bmiMark);
console.log('JOHN BMI', bmiJohn);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than Jhon's ${bmiJohn}`);
}else{
    console.log(`Jhon's BMI ${bmiJohn} is higher than Mark's ${bmiMark}`);
}