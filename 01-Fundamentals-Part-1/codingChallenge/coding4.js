// Implement of Ternary operator

const billValue = Number(prompt('Enter the bill value'));
let tip;
billValue>=50 && billValue<=300 ? 
console.log(`The bill was ${billValue}, the tip was ${tip = billValue*(15/100)}, and the total value ${billValue+tip}`):
console.log(`The bill was ${billValue}, the tip was ${tip = billValue*(20/100)}, and the total value ${billValue+tip}`);

const bill = 275;
const tiip = bill <= 300 && bill >= 50 ? bill * 0.15 :bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tiip}, and the total value ${bill+tiip}`);