// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
/*
let num1 = Number(prompt("enter a number"));
if(num1 % 2==0){
  alert("Even");
}
  else
  {
    alert("odd");
  }
*/
  



// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
/*
let num1 = Number(prompt("enter 1st number"))
let num2 = Number(prompt("enter 2nd number"))
if(num1>50||num2>50){
  alert("max value is 49");
}
*/
// 3. Convert the above code using`?` terniary operator\
/*
let num1 = Number(prompt("enter 1st number"))
let num2 = Number(prompt("enter 2nd number"))
num1>50||num2>50 ?
  alert("max value is 49")
  :
  alert("its ok");


*/

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
/*
let house =prompt("enter your house name:");
if(house =="stark"){
  alert("winter is coming");
}
else if(house=="lannister"){
  alert(" A lannister always pays his debt");
}
else {
  alert("All men must die");
}
*/


// 5. Convert the above code using`?` terniary operator
/*
let house =prompt("enter your house name:");
house =="stark" ?
  alert("winter is coming")
  :
house=="lannister"?
  alert(" A lannister always pays his debt")
  :
  alert("All men must die");
*/

// Switch
/*
let house =prompt("enter your house name:");
switch(true) {
  case house=="stark":
  alert("winter is coming");
  break;
  case house=="lannister":
  alert(" A lannister always pays his debt");
  break;
  default :
  alert("All men must die");
  break;
}
*/


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
/*
let month=Number(prompt("enter month number(1-12):"));
if(month<=4){
  alert("30 days");
}
else if(month<=12){
  alert("31 days");  
}
else {
  alert("not above ones");
}

*/


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
/*
let salary=Number(prompt("enter the salary:"));
if(salary<=20000){
  handsalary=salary*10/100;
  alert("In hand salary:"+handsalary );
}
else if(salary<=40000){
  handsalary=salary*20/100;
  alert("In hand salary:"+handsalary );
}
else if(salary> 50000) {
  handsalary=salary*30/100;
  alert("In hand salary:"+handsalary );
}
else {
  alert("higher tax");
}
*/
//  if..else vs switch
/*
let salary=Number(prompt("enter the salary:"));
switch(true){
  case salary <= 20000:
    handsalary=salary*10/100;
    alert("In hand salary:"+handsalary );
    break;
  case salary <= 40000:
    handsalary=salary*20/100;
    alert("In hand salary:"+handsalary );
    break;
  case salary > 50000:
    handsalary=salary*30/100;
    alert("In hand salary:"+handsalary );
    break;
  default:
    alert("none");
}
*/
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let mark=Number(prompt("enter your mark:"));
/*
switch(true)
{
  case mark >= 100:   
    alert("marks can't be greaater.");    
    break;
  case mark >= 80 && mark < 100:     
    alert("grade A");      
    break;
  case mark >= 50 && mark < 80:
    alert("grade B");
    break;
  case mark > 30 && mark < 50:
    alert("grade C");
    break;
  case mark > 0: 
    alert("Grade D");
    break;
  default:
    alert("0");
}
*/
/*
if(mark >= 100){
  alert("marks can't be greaater."); 
}
else if(mark >= 80 && mark < 100){
  alert("grade A"); 
}
else if(mark >= 50 && mark < 80){
  alert("grade B");
}
else if(mark >= 30 && mark < 50){
  alert("grade C");
}
else {
  alert("Grade D")
}

*/
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt("whats the weather outside");
if(weather=="sunny"){
  alert("wear a T-Shirt");
}
else if(weather=="rainy"){
  alert("Dont forget your coat");
}
else if(weather=="hot"){
  alert("get a hanky");
}
else if(weather=="freezing"){
  alert("get your sweater");
}
else{
  alert("not valid output");
}