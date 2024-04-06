
// ---------------------Problem-----------------------
// ---------------------- Q4--------------------------
// Enter a month (as a number between 1 and 12).
// Print the number of days in that month. Assume a non-leap Year
// -------------------------Solution------------------
import inquirer from "inquirer";
async function onceMore():Promise<boolean>{
    const userOption= await inquirer.prompt([{
        name:"this",
        type:"string",
        message:"Do you want to find number of days for a month again? enter 'y' for yes and press any key otherwise!"
    }])
    if (userOption.this=="y"){
        return true;

    }else{
        return false;
    }
}
console.log("This program prints number of days of the Month,")
console.log("User Enters the Month Mumber and gets the number of days in that Month,")

do{
var again:boolean=true;
const userMonth=await inquirer.prompt([{
    name:"month",
    type:"number",
    message:"Please enter the month number (between 1 and 12: )"

}]);

if (userMonth.month <1  || userMonth.month > 12){
    console.log("You have not entered a valid number please enter a number between 1 and 12")
    again=await onceMore();
}else if (userMonth.month == 1 ||userMonth.month==3 || userMonth.month == 5 ||userMonth.month==7 || userMonth.month==8 ||userMonth.month==10 ||userMonth.month==12){
    console.log("Number of days of this month are 31")
    again= await onceMore();
}else if(userMonth.month==4 ||userMonth.month==6 ||userMonth.month==9 ||userMonth.month==11){
    console.log("Number of days of this month are 30")
    again= await onceMore();
}else if(userMonth.month==2){
    console.log("Number of days of this month are 28")
    again= await onceMore();
}else{
    console.log("You have not entered a valid number. Please enter value between 1-12")
    again= await onceMore();
}

}while(again);