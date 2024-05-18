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

// const age = prompt("what is your age");
// switch (age) {
//   case "under 18":
//     alert(" you are minor");
//     break;
//   case " above 18":
//     alert("you are not minor");
//     break;
//   default:
//     alert(" invalid");
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

// const userName = prompt("what is your userName?");
// const place = prompt("where are you from?");
// userName === place
//   ? alert(`welcome ${userName} `)
//   : alert("you are not from here");

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

// const obj = {
//   name: "puran",
//   password: "1234",
//   email: "puransapkota4@gmail.com",
//   phone: 123456,
// };

// //spread operator

// //it means it takes out password from the object

// const { password, ...test } = obj; // object destructuring
// console.log({ test });

//Exercise:
// use given object and loop through its properties
// and if it has property "discount"
// print " Already discounted by
// and add value (How much was the discount .
// in opposite case
//do what you do in the previous exercise .
// check the price depending on it
//  if its greater 0r lower than 100
//  add discount (10% or 7%) and the property dicount to the object

// let prod = {
//   name: "headphones",
//   price: 83.7,
//   discount: "7%",
// };

// const checkDiscount = (obj) => {
//   return Object.hasOwn(obj, "discount")
//     ? `Already discounted by ${obj.discount}`
//     : "No discount found";
// };
// const resp = checkDiscount(prod);
// console.log({ resp });

// const findDiscount = (obj) => {
//   delete obj.discount;
//   const discountPercent = obj.price > 100 ? 10 : 7;
//   obj.discount = `${discountPercent} %`;
//   obj.price = obj.price - (discountPercent / 100) * obj.price;
//   return obj;
// };
// console.log(findDiscount(prod));

//End result should be like this>>
// end result- case 2:
//{name: 'headphones' , price:'77.84' , dicount:'7%'}
//end result - case1:
//Already discounted by 7%

// Array

//CRUD

//create

// const newAr = [];

// // Read

// const cars = ["BMW", "Toyota", { name: "tesla" }];
// console.log(cars[1]);

// //update
// cars[0] = "hyundai";
// console.log(cars);

// //delete

// delete cars[0];
// console.log[cars];

// // Array methods
// cars.length; // return the number of elements
// console.log(cars);

// cars.sort(); // sprt the array

// cars.push(); // insert new items at the back

// cars.pop(); // get the last item

// cars.toString(); // join all the string

// const group =[
//     {name:"puran", age:30},
//     { name:"ruchi", age:26},
//     {name:"samundra", age:26},
//     { name:"puran", age: 25}
// ]

// Array sort method and sort the data in ascending orfer by age(sano to thulo)

// write a js function that checks if the user has aceess or not

// const userRole = ["user", "vendor"];
// const sysRole = ["admin", "vendor"];

// const checkRole = (ur, sr) => sr.some((role) => ur.includes(role));
// console.log(checkRole(userRole, sysRole));

//write a js function that creates slug
//EG : understanding next js architecture
// => understanding-nextjs-architecture

// const slugger = (sentence) => {
//   string(sentence)
//     .toLowerCase.replaceAll(/!@#$%^&*"'()/g, "")
//     .replaceAll(" ", "-");
//   const res = slugger("understanding Nest js Architecture");
//   console.log({ res });
// };

// write a js functionn that creates a sum of numbers from 1 to 10
//EG : [1,2,3,4,5,6,7,8,9,10] => 55

// const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// const resp = getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log({ resp });

//let food = ['noodle' , 'pasta' , Ice-cream'];
// let food = ['fries', 'ice-cream' , 'pizza'];
//compare the two arrrays and find the common food if any

// write a js function that works as a pagination

//const arr = ['Noodle' , 'pasta' , 'Ice-Cream'];
// const page = 1 ; dynamic
//const limit = 2 ; //dynamic

//Example
// page 1 => ['raktim' , 'ruchi']
// page 2 => ['anima', 'sumit']
// page 3 => ['samundra' , 'kuber']

//Array
// .split() , Includes , some , slice , shift , filter , join , reduce, pop(), push, length, every, forEach , sort , map

// orginal data is also know as golden source of truth . Thats why we use the copy of the data and put it in the memory and we operate it there .

//immutable js : it is the method  which  works after copying the data is call immutable js .  it is the method which encourage to work on the copied files. overall , when we use such method to solve the problem is considered as immutable js
// eg of immutable data are : map , filter , reduce , every , some
// use this method to solve the array problem

// write the javascript function that checks the username and password in the database.
// and checks if the password match or not
// return bool value

const db = [
  { username: "puran", password: "pass1" },
  { username: "sarina", password: "pass2" },
  { username: "saroj", password: "pass3" },
  { username: "Ambika", password: "pass4" },
  { username: "krishna", password: "pass5" },
];

const login = (un, pw) => {
  const result = db.find((data) => data.username === un);
  console.log({ result });
  if (!result) console.log("user doesnt exist");
  const resp = result.passwprd === pw ? true : false;
  if (!resp) console.log("password or un matched");
  return resp;
};
const result = login("puran", "pass1");
console.log({ result });
// write a js function that search the user based on the key input
//EG :  "s " =>  [{username: "sarina", password: "pass2"} , { username: "saroj", password: "pass3" }]

// Date

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const day = now.getDay();
// const time = now.getTime();
// console.log({ year, month, day, time });

// const past = new Date("1998-06-12");
// const year = past.getFullYear();
// const month = past.getMonth();
// const day = past.getDay();
// console.log({ year, month, day });

// ISO String , UTC String , Time String

// const iso = now.toISOString();
// const utc = now.toUTCString();
// console.log(iso, utc);

// iso string is used for machine to machine connection and UTC is used to make it human readable
