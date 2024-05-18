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

const countries = ["Nepal", "India", "Japan", "Ireland", "United Kingdom"];
const largestCountry = (countries) =>
  countries.sort((a, b) => a.length - b.length).pop(); // This type of function is called implicit function
const result = largestCountry(countries);
console.log(result);

// write a js function that return boolean value when we compare two roles

//Eg:
//const userRole = ['user' , 'vendor']
//const sysRoles =['admin', 'vendor']

//result : true

//write a js function that returns the number in array that are divisible by 5
//EG :
const numbers = [1, 4, 5, 8];
//result[15]
