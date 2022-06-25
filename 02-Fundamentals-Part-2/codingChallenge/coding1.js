
const calcAverage = (score1, score2, score3)=>{
    return (score1+score2+score3)/3;
}

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2*avgKoalas){
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas}) ✌`;
    }else if(avgKoalas >= 2*avgDolphins){
        return  `Koalas win (${avgKoalas} vs. ${avgDolphins}) ✌`;
    }else{
        return 'No one Win 🤝'
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));