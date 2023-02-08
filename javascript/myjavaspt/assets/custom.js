//variables
/*var a=20;


var c;

let a1=10;
let b1="javascript";
if(a==20) {
    var b="javascript";
    b=null;
console.log("the value of B is" +b );
}*/

//Basic operators
//var a = 20;
//var b = 15;
//if (a == 30 || b == 15) {
// alert("the condition is true");
//} else {
// alert("the condition is false");
//}
// console.log("the value of A is" ,a);

//string template literals

//var uname = "sneka";
//var age = 24 ;
//var work = "engineer";
//console.log (`My name is ${uname}.Im ${age}
//  years old.working as an ${work}`);

//Control statements

//for(let i=2; i<=15 ; i++){
//   if(i % 4 == 0){
//      console.log("Even number", i);
//  }else{
//      console.log("Not an even number", i);
//  }
//}

//entry level loop
//let i = 2;
//while( i <= 15){
//   if(i % 4 == 0){
//     console.log("Even number", i);
//  }else{
//      console.log("Not an even number", i);
//  }
//  i++;
//}

//Type conversion

//var a = "25";
//var b = "20";
//var c = Number(a) + Number(b);
//console.log(c);

//ternary operators

//let age = 24;

//age >= 18 ? console.log("the age is",age," - ", "Eligible for voting") : console.log("the age is",age, " - ","Eligible for voting");

//Function Declaration

//let currentYear = 2022;
//function calculateAge(byear){
// let age = currentYear - byear;
// return age;

//}

//let myage = calculateAge(1998);
//console.log(myage);

//Function Expression
//let currentYear = 2022;
//function calculateAge(byear) {
//  let age = currentYear - byear;
// return age;
//}

//console.log(calculateAge(2000));

//Arrow function

//let currentYear = 2022;
//let calculateAge = (byear) => currentYear - byear;

//console.log(calculateAge(2000));

//let calculateF1Rupees = (c1) => {
// return c1 * 4;
//}
//let calculateF2Rupees = (c2) =>{
// return c2 * 3;
//}

//let supermarketProcessor = (c1,f1,c2,f2) =>{
//  var text = `We buy kitchen things,take ${c1} ${f1},billing in  ${calculateF1Rupees(c1)} rupees and take ${c2} ${f2},billing in ${calculateF2Rupees(c2)} rupees`;
//  return text;
//}

//console.log(supermarketProcessor(4,"maggi",3, "nippee"));

//Array

//let arr=[1,10,12,16,30,11];
//let arr2= new Array(1,10,6,8,9,15);
//console.log("Array", arr);
//let arr3=[1,10,6,9,7,'err','error',5,3,6];
//for (let i=0; i< arr3.length; i++){
//  console.log("value", arr3[i]);
//}

//Basic methods

//let arr = [1,2,5,8];

//let arrLength = arr.reverse();

//console.log(arr);
//console.log(arrLength);

//Objects

//const currentYear = 2022;

//const userDetail = {
//name: 'sneka',
//mailid: 'snekarishi@gmail.com',
//mobile: 9159645688,
//birthYear: 1998,
//EVT:true,
//getAge: function(){
//var age = currentYear - this.birthYear;
//return age;
//}
//}
//let age = userDetail.getAge();
//let Eligible =  userDetail.Eligible ?'a': 'yes';
//console.log('${userDetail.name} is a ${userDetail.getAge()} years old and she is ${Eligible} for voting');

//var x1=10;
//var x2=20;

//x1=x2;
//console.log(x1,x2);

//var obj1={
//  name:'sneka',
//  age:'24'
//}
//var obj2={}
//   obj2.name = 'sneka';
//   obj2.age = '24';

//   console.log(obj1,obj2);

//scope /scope chain

// block scope

//function myFunction(){
//if(true){
// const fname = "sneka";
//console.log(fname);
//}
//console.log(fname);
//}
// myFunction();

//Hoisting

//if(true){

//function myFunction(){
// var fname = "sneka";
// console.log(fname);
//}
//}

//myFunction();

//This

//const currentYear = 2022;

//const userDetail = {
//  name: 'sneka',
//  mailid: 'snekarishi@gmail.com',
//  mobile: 9159645688,
//   birthYear: 1998,
//  EVT:true,
//  getAge: function(){
// var age = currentYear - this.birthYear;
//return age;
//}
//}
//let age = userDetail.getAge();
//console.log(this);

//Default parameters
//function myFunction(a1,a2,a3,a4,a5 = 2){
// var sum = a1+a2+a3+a4+a5;
// var avg = sum/5;
// console.log(avg);
//}
//(20,40,19,67);

//Destructing assignment

//var a1,b1;
//[a1,b1] = [10,20];
//var [firsName,,...lastName] = ["mango","orange","lemon","apple"];
//console.log(lastName);

// call

//let user1 = {
//  fname: 'sneka',
// lname: 'sri',
//getFullName: function(){
//    return this.fname+' '+this.lname;
// }
//}

//let user2 = {
//  fname: 'menaga',
//lname: 'ammu',
//}

//let user3 = {
// fname: 'anu',
// lname: 'priya',
//}

//console.log(user1.getFullName.call(user2));
//console.log(user1.getFullName.call(user3));

//apply

//let user1 = {
// fname: 'sneka',
// lname: 'sri',
// getFullName: function(city,country){
//   return this.fname+'  '+this.lname+'  '+city+'  '+country;
// }
//}

//let user2 = {
//  fname: 'menaga',
// lname: 'ammu',
//}

//console.log(user1.getFullName.apply(user2, ['madurai', 'India'] ));

//bind

//let user1 = {
//  fname: "sneka",
// lname: "sri",
// getFullName: function (city, country) {
//   return this.fname + "  " + this.lname;
// }
//}

//let user2 = {
// fname: "menaga",
// lname: "ammu",
//};

//let fullname = user1.getFullName.bind(user2);
//console.log(fullname());

//Basic methods

// function myFunction1(a1, a2, a3, a4, a5){

// var dolphin = a1 + a2 + a3 + a4 + a5;
// var avg1 = dolphin / 5;

//console.log(avg1);
//}

//myFunction1(96, 108, 89, 200, 116);

//function myFunction2(b1, b2, b3, b4, b5){

// var koala = b1 + b2 + b3 + b4 + b5;
//var avg2= koala / 5;
//console.log(avg2);

//}
//myFunction2(88, 91, 110, 150, 197);

//var hText = document.getElementById("titleText");
// hText.textContent = "WELCOME TO TECHNOLOGY";
//var hTextClass = document.getElementsByClassName("title-text");
//hTextClass[0].innerHTML = "Welcome to OurClass";
//hTextClass[1].innerHTML = "Welcome to OurClass";
//hTextClass[2].innerHTML = "Welcome to OurClass";

//for(let i = 0; i<hTextClass.length; i++){
// hTextClass[i].innerHTML = "Welcome Students";
//}

//var hTextTag = document.getElementsByTagName("h2");
//console.log(hTextTag);
//var hTextQS = document.querySelectorAll(".title-text");
// console.log(hTextQS);

//var hText = document.getElementById("titleText");
//var hBtn = document.getElementById("headerBtn");
//hBtn.addEventListener("click", changeHeader);
//hBtn.addEventListener("mouseover", btnMouseOver);

//function changeHeader() {
//hText.textContent = "Welcome to OurClass";
// }

// function btnMouseOver() {
// hBtn.style.backgroundColor = "red";
// hBtn.style.Color = "white";
// }

// program to remove duplicate from array

//function getUnique(arr) {
// let uniqueArr = [];
// for (let i of arr) {
//  if (uniqueArr.indexOf(i) === -1) {
//    uniqueArr.push(i);
//  }
//}
// console.log(uniqueArr);
//}

//const array = [1, 2, 3, 4, 5];

//getUnique(array);

// program to check if the string is palindrome or not

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = checkPalindrome(string);

console.log(value);
