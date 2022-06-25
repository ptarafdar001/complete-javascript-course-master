
// function calcTip(bill){
//     return bill>=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;     
// }

// const calcTi = function (bill){
//     return bill>=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const calcTip = bill => 
    bill>=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills, tips);



