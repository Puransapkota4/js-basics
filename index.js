/*//Prints the message
console.log("Hello world");

//variables
//var,let,const

//var(ES5)
var broadwayTeacher = "raktim"; // always use camel case for joining more words for variables
console.log(broadwayTeacher);

// in var keywords, value can be reassigned. A container can only be defined once with the same name and data can be override.

let teacher = "raktim";
teacher = "sita";
console.log(teacher);

const teach = "raktim";
console.log(teach);
// The difference between var and let is var is ES5/JS5 and let is ES6
//the difference between let and var is in let variable , value can still be reassigned and in const , vlaue cant be reaasigned even tho they are ES6

// single line comment : //
/* multi line comment 

const table = "red table";
const blackFan = "khaitan";
const woodenChair = "furniture";
const redPen = "mahakali";
console.log(table, blackFan + woodenChair, redPen);
console.log(2 + 2);

const person = confirm("is raktim student?");
console.log(person);

const name = prompt("what is your name ?");
console.log(name);

const hello = alert("hello from puran");
console.log(hello);
= :assign
== : value check
=== : value and data type check
Statement
*/
// const gender = prompt("what is your gender ? m/f");
// if (gender === "m") {
//   alert("you are male");
// } else {
//   alert("you are female");
// }

/* 
switch (result){
    case"m":
        alert("");
        break;
    case "f":
        alert("..");
        break;
    default:
        alert("invalid input. please choose m or f") 
}
*/
// const gender = prompt("what is your gender?");

// switch (gender) {
//   case "m":
//     alert("you are male");
//     break;
//   case "f":
//     alert("you are female");
//     break;
//   default:
//     alert("invalid input");
// }

// const userName = prompt("what is your name?");
// switch (userName) {
//   case "Puran":
//     alert("you will succeed in life");
//     break;
//   case "ram":
//     alert("its a hard time but you will be sucessful");
//     break;
//   default:
//     alert("you suck");
// }

// const userName = prompt("what is your name ?");
// const password = prompt("what is your password?");
// //string literal
// if (userName === password) {
//   alert(`welcome ${userName}`);
// } else {
//   alert("Invalid un or pw");
// }

//write a program that asks user for addition of 2 numbers and alert the result.

// string , Number , Boolean , Object
//Type Conversion/ Type casting

// const userNum = Number(prompt("what is your num?"));
// const userTrueNum = Number(userNum);
// const userString = String(userTrueNum);
// console.log(userString);

// ..Ternary operator (ES6)
// // //condition ? true:false
// const userName = prompt("what is your username?");
// const password = prompt("what is your username?");
// // userName === password
// //   ? alert(`welcome ${userName}`)
// //   : alert("invalid un or pw");

//Function : function are the main building blocks of the program.
//They allow code to be called many times without repetition.(DRY)

//EG:
//ES5
//sum of two digits
// const a = Number(prompt("A"));
// const b = Number(prompt("B"));
// const add = a+b;
// console.log(add);

//function define
// function sum(a, b) {
//   //logic
//   return a + b;
// }
// const result = sum(2, 2);
// console.log(result);

// key word for function , name and parameter with the value
// function A(c, d) {
//   return c - d;
// }
// const e = A(2, 2);
// const f = A(2, 2);
// const g = A(2, 2);
// console.log(e, f, g);

// //ES6

// const sum = (a,b) =>{
//     return a+b;
// };

// write a function to do multiplication table of 2

// const mul = (table) => {
//   let i = 1;
//   do {
//     console.log(table * i);
//     i++;
//   } while (i <= 10);
// };

// //function call /execute
// mul(2);

// const mul = (table) => {
//   let i = 1;
//   do {
//     console.log(table * i);
//     i++;
//   } while (i <= 5);
// };
// mul(3);

// write a function to find the area of the triangle
// const area = (l, b) => {
//   return l * b;
// };
// const rect = area(2, 2);
// console.log({ rect });

// write a javascript function that reverses a number
//example x= 32243; expected output : 34223

// const reverse = (number) => {
//   const str = String(number);
//   let newNum = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newNum += str[i];
//   }
// };
// const res =Number(reverse(32243));
// console.log({res});

//write a javascript finction that creates a commaformatter,
//Example x = 1000; expected output : 10,000
//example y = 1000000 ; expected Output : 1,000,000

// Day  (sesh ghale mindset)

//theAsciicode.com.ar website for the key code value
//contact mentor website for the practise questions
//s3amazonnaws.com for the exercisee function tricky and interesting questions
//learn.js.org
//cs.imu.edu

//write a javascript program to convert temperature to and from celsius , Farenheit;
//Default temperature should be celsius;
//Formula : s/5 = (f-32)/9 [wher c= temperature in celsius and f= temperature in farenheite];

//Expected output :
//60*c to 140F
//45F to 7.2222222 C

// const convertTemp = (temp , type ='C') =>{
//     if (type=== "F"){
//         return convert to C
//     }
//     return convert to F
// };
// convertTemp("20"); //default temp c=> convert to F
// convertTemp("120", "F");

// const hello =(name='raktim') =>{
//     console.log(`hello ${name}`)
// }
// hello(); // hello raktim
// hello('puran') // hello puran

//Function chaining
// const cleanStringAndUpperCase = (sentence) => {
//   return sentence.replaceAll("-", " ").toUpperCase();
// };
// const resp = cleanStringAndUpperCase("Puran is --- a genius");
// console.log(resp);

//check mdmn web dock for the key words which is already a function
//check roadmaop.sh

// Object

//CRUD (create, read , update , delete) // start to think it in this way

// const person = {
//   name: "puran",
//   birthYear: 2054,
//   isMale: true,

//   age: function () {
//     return 2080 - this.birthYear;
//   },

//   calcAge: () => {
//     return 2080 - person.birthYear;
//   },
// };
// console.log({ person });

// //Read

// //Property
// console.log(person.name);
// //method
// console.log(person.age());

// //Update

// person.name = " PURAN ";
// console.log({ person });

// //DELETE
// delete person.name;
// console.log({ person });

// console.log(person.calcAge());

// normal function vs arrow function
// the difference between normal function and arrow function is normal function takes the global keyword
// which is already stored and has broad global reach for the keyword as well as parents data
//and arrow function has limited reach and can only access the parents data . so we have to specifically target the parents data only

//Create your own object for car , laptop , tv and do crud operations

const obj = {
  name: "puran",
  password: "1234",
  email: "puransapkota4@gmail.com",
  phone: 123456,
};

//spread operator

const { password, ...test } = obj; // object destructuring
console.log({ test });
