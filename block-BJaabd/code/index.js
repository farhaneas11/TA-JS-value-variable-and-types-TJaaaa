// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
/*
let age =prompt("enter age");
if(age>=12 && age<=55){
  alert("You can participate in the marathon");
}
else if(age>=4 && age<=11){
  alert("You are too young to participate in the marathon");
}
else if(age<4){
  alert("Hey Kiddo! Can You Walk ?");
}
else {
  alert(" You are too old to participate in the marthon");
}
*/
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
let n=prompt("number of e?");
let total="e ";
for(i="e";i<=n;i++){
  total = total + i;
}
alert(`h${total}llo`);

// [Your code goes here]

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
/*
let num=Number(prompt("enter number"));
let total = 0;
for(i=0;i<=num;i++){
  total=total+i;
}
alert(total);
*/

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
/*
let number=Number(prompt("enter number"));
switch(number){
  case number=1:
    alert("one");
    break;
  case number=2:
    alert("two");
    break;
  case number=3:
    alert("three");
    break;
  case number=4:
    alert("four");
    break; 
  case number=5:
    alert("five");
    break; 
  default:
    alert("please try again!!");
    break;
}
*/
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
/*
let mark=prompt("enter your mark(1-100)");
if(mark>90 && mark<=100){
  alert("your grade AA");
}
else if(mark>80 && mark<=90){
  alert("your grade AB");
}
else if(mark>70 && mark<=80){
  alert("your grade BB");
}
else if(mark>60 && mark<=70){
  alert("your grade BC");
}
else if(mark>50 && mark<=60){
  alert("your grade CC");
}
else if(mark>40 && mark<=50){
  alert("your grade DD");
}
else if(mark>0 && mark<=40){
  alert("Poor student");
}
else{
  alert("not right");
}
*/
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
/*
let numa =Number(prompt("enter number"));
let numb =Number(prompt("enter number"));
if(numa > numb){
  alert(`${numa} is greater`);
}
else if(numa==numb){
  alert(`${numa} is equal to ${numb}`);
}
else{
  alert(`${numb} is greater`);
}
*/
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let num1 =Number(prompt("enter number"));
let num2 =Number(prompt("enter number"));
let num3 =Number(prompt("enter number"));
let total1=num1*num2*num3;
console.log(total);
if(typeof(total)=="-"){
  alert("negative integer");
}
else{
  alert(`${total1} it is.`)
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
/*
let num1 =Number(prompt("enter number"));
let num2 =Number(prompt("enter number"));
let operator = prompt("enter operator(+.-.*./)");
if(operator=="+"){
  alert(num1+num2);
}
else if(operator=="-"){
 if(num1>num2){
  alert(num1-num2);
 }
 else if(num1<num2){
   alert("num2 is larger");
 } 
}
else if(operator=="-"){
  alert(num1-num2);
}
else if(operator=="*"){
  alert(num1*num2);
}
else if(operator=="/"){
  if(num1>num2){
    alert(num1/num2);    
  }
  else if(num1<num2){
    alert("num2 is larger");
  }   
}
*/