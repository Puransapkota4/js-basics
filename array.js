console.log(" i am array");

// Types of data type
// String , Number , Boolean , undefined , null , BigINt , Symbol , object

//object
//1. object
//2. Array
//3. date

// 1. object

// CRUD (create , read , update , delete)

// Create
// const person = {};
// person.name = "puran";

// // create
// const teacher = {
//   name: "puran",
//   birthYear: 1998,
//   isMale: true,
//   age: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };

// // Read
// console.log(teacher.name);
// console.log(teacher.age());

// //update
// teacher.name = " saroj sapkota";

// delete
// delete teacher.age;
// console.log({ teacher });

// do not temper with original data. instead use

// spread operator

// const user = {
//   user: "raktim",
//   password: "pass123",
//   num: 123,
// };
// const { num, password, ...rest } = user; // Destructure using spread operator
// console.log({ rest });

// Array
//CRUD

//create

// const persons = new Array();   one method

// const teachers = ["raktim shrestha", { name: "puran" }, ["saroj sapkota"]];
// console.log({ teachers });

// // Read
// console.log(teachers[0]);

// //update
// teachers[0] = "puran sir";
// console.log(teachers);

// // Delete
// console.log(teachers.shift());
// console.log({ teachers });

// method of array
// length : This property returns the number of elements in an array.
// shift : This method removes the first element from an array and returns that removed element. The array is then reindexed.
// unshift : This method adds one or more elements to the beginning of an array and returns the new length of the array.
// pop : This method removes the last element from an array and returns that element.
// push : This method adds one or more elements to the end of an array and returns the new length of the array.
// reduce : This method executes a reducer function on each element of the array, resulting in a single output value.
// map : This method creates a new array populated with the results of calling a provided function on every element in the calling array.
// filter : This method creates a new array with all elements that pass the test implemented by the provided function.
// some : This method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// every : This method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// split: This method is not an array method but a string method. It splits a string into an array of substrings using a specified separator.

// we have methods on (string , object , array and dates)
// to look at the method of these data type we need to go on the developer.mozilla.org

// write a js function that finds the largest sentece in the arrayBuffer.Date
// eg const countries = [ "Nepal" , "India", "Japan", "Ireland", "United Kingdom"]

// const countries = ["Nepal", "India", "Japan", "Ireland", "United Kingdom"];
// const largestCountry = (countries) =>
//   countries.sort((a, b) => a.length - b.length).pop(); // This type of function is called implicit function
// const result = largestCountry(countries);
// console.log(result);

// write a js function that return boolean value when we compare two roles

//Eg:
//const userRole = ['user' , 'vendor']
//const sysRoles =['admin', 'vendor']

//result : true

// const userRole = ["user", "vendor"];
// const sysRoles = ["admin", "vendor"];

// const checkRole = (user, system) => system.some((role) => user.includes(role));
// const res = checkRole(userRole, sysRoles);
// console.log({ res });

// //write a js function that returns the number in array that are divisible by 5
// //EG :
// const numbers = [1, 4, 5, 8, 10];
// //result[5,10]

// const getDivisible = (num) => num.filter((number) => number % 5 === 0);
// const resu = getDivisible(numbers);
// console.log({ resu });

// write a js function that return the decimal value in the following array
//eg
// const numeral = [1, 2, 3];
// //result [1.oo ,2.00, 3.00]
// const getDecimal = (numbers) =>
//   numbers.map((number) => String(number).concat(".00"));
// const rest = getDecimal(numeral);
// console.log({ rest });

// write a js function that handles the pagination

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const page = 1;
// const limit = 2;

//result page 1 => [1,2]
//result page 2 => [3,4]
//result page 5 => [9,10]
//result page 10 => []

//write a js function that finds the bird name starting with a character

// const birds =['parrot', 'Eagles' , 'emus', "caracaras" , "egrets"];
// const eBirds=(birds =>{
//     return birds.filter((bird) = {
//         if (bird.search(/[eE]/g)){
//             return bird;
//         }
//     });
// };
// left to solve

//regex: A regex (regular expression) website typically refers to a web-based tool or resource that helps users create, test, and learn about regular expressions. Regular expressions are sequences of characters that define search patterns, often used for string matching and manipulation.

// do the exercise of from github :
//https://github.com/jamsqquick/javascript-array-function-practice

// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// //MAP
// //Get an array of all names

// const getAllName = (characters) =>
//   characters.map((character) => character.name);

// const resp = getAllName(characters);
// console.log({ resp });

// //Get an array of all heights
// console.log(characters.map((character) => character.height));

// //Get an array of objects with just name and height properties

// console.log(
//   characters.map((character) => {
//     return { name: character.name, height: character.height };
//   })
// );

// Questions to be practised

//Get an array of all first names

//REDUCE
// Get the total mass of all characters

// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

//hoisting :
/*Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions and variables before they are declared in the code.

How Hoisting Works
Variable Hoisting: Only the declaration is hoisted, not the initialization.
Function Hoisting: Both the function name and the body are hoisted. */

/*
js Good practices : 
1. Avoid Global variables
2. Always declare local variables
3. Declaration on top
4. initialize variables
5. Declare object with const
6. Declare arrray with const
7. use === Comparison
8. use parameter Defaults while using the function */
