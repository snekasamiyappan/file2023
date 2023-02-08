// program to check if the string is palindrome or not

//function checkPalindrome(string) {

//const len = string.length;

//for (let i = 0; i < len / 2; i++) {

//if (string[i] !== string[len - 1 - i]) {
// return "It is not a palindrome";
//}
//}
//return "It is a palindrome";
//}

//const string = prompt("Enter a string: ");

//const value = checkPalindrome(string);

//console.log(value);

// program to remove duplicate from array

//function getUnique(arr) {
// let uniqueArr = [];
//for (let i of arr) {
// if (uniqueArr.indexOf(i) === -1) {
//   uniqueArr.push(i);
//  }
// }
// console.log(uniqueArr);
//}

//const array = [1, 2, 3, 4, 5];

//getUnique(array);

//to remove duplicates from array

//var arr = ["carrot", "beans", "tomato", "tomato", "carrot", "brinjal"];

//function removeDuplicates(arr) {
//  return arr.filter((things, index) => arr.indexOf(things) === index);
//}

//console.log(removeDuplicates(arr));

// program to check if a key exists

//const person = {
//   id: 1,
//   name: 'sneka',
//   age: 23
//}
//const hasKey = 'DOB' in person;

//if(hasKey) {
//   console.log('The key exists.');
//}
//else {
//  console.log('The key does not exist.');
//}

// reverse
//var str = "welcome to this javascript guide!";
//var newStr = str.split("").reverse().join("").split(" ").reverse().join(" ");
//console.log(newStr);

//function checkNumber(x) {

//   if(typeof x == 'number' && !isNaN(x)){

//   if (Number.isInteger(x)) {
//      console.log(`${x} is integer.`);
//  }
//  else {
//      console.log(`${x} is not a integer`);
//  }

// } else {
//   console.log(`${x} is not a number`);
// }
//}

//checkNumber('sneka');
//checkNumber(44);
//checkNumber(3.4);
//checkNumber(-3.4);
//checkNumber(NaN);

//function checkStringsAnagram(x,y){
//    let len1=x.length;
//   let len2=y.length;
//   if(len1 !==len2){
//      console.log('Invalid Input')
//  }
//let str1 = x.split('').sort().join('');
//   let str2 = y.split('').sort().join('');
//   if(str1 === str2){
//     console.log("True");
//  } else {
//     console.log("False");
//  }
//}
//checkStringsAnagram("mary","armyh")

//for (x = 1; x <= 100; x++) {
//  if (x % 3 == 0) {
  //  write("Fizz");
  //}
  //if (x % 5 == 0) {
    //write("Buzz");
  //}
  //if (x % 3 != 0 && x % 5 != 0) {
    //write(x);
  //}
//}

//FizzBuzz Challenge:

//for (let i = 1; i <= 100; i++) {
 // let a = i % 3 == 0,
 //   b = i % 5 == 0;
  //console.log(a ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//}


//Different methods to empty an array in javascript

//const names =["sneka","ammu"]
//const namesversion2 = names
//names = []
//console.log(namesversion2)
//names.length = 0
//names.splice(0,names.length)
//while(names.length > 0){
  //names.pop()
//}

a= []; // 37% slower
a.length = 0; // 89% slower
a.splice(0, a.length)  // 97% slower
while (a.length > 0) {
    a.pop();
} // Fastest






























//for(let i=2; i<=15 ; i++){
  //   if(i % 4 == 0){
  //      console.log("Even number", i);
  //  }else{
  //      console.log("Not an even number", i);
  //  }
  //}
  

  //for (let i = 1; i <=100; i++) {
   // if(i % 3 == 0){
    //  console.log("Fizz");
   // }
   // if(i % 5 == 0){
     // console.log("Buzz");
   // }
    //else{
     // console.log(i);
    //}
     //  }
  