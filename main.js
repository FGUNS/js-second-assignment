// function lifeInWeeks(age) {
//     /************Don't change the code above************/    
    
//     
//     const yearsRemaining = 90 - age;
    
//     
//     const daysLeft = yearsRemaining * 365;
//     const weeksLeft = yearsRemaining * 52;
//     const monthsLeft = yearsRemaining * 12;
    
//     
//     console.log(`You have ${90} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
    
//     /*************Don't change the code below**********/
// }

function loveCalculator(name1, name2) {
    
    const matchPercentage = Math.floor(Math.random() * 101); 
    
    
    console.log(`${name1} and ${name2} are ${matchPercentage}% match!!`);
}


const firstInput = "John";
const secondInput = "Mary";

loveCalculator(firstInput, secondInput);
