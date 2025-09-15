//Logical AND(&&) operator
let age=20;
let hasID=true;
if(age>=18 && hasID){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible for voting");
}
//Another example
let vowels=5;
let words=true;
if(vowels>=5 && words){
    console.log("vowels");
}
else{
    console.log("not vowels");
}

// Logical Or(||) operator
let isWeekend=true;
let isHoliday=false;
if(isWeekend || isHoliday){
    console.log("You can relax today");
}
else{
    console.log("You have to work today");
}
// Logical NOT(!) operator
let isRaining=false;
if(!isRaining){
    console.log("You can go outside");
}
else{
    console.log("You should stay inside");
}


