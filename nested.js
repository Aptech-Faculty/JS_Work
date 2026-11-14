// var email = 'aliraza@gmail.com';
// var password = 98765;

// if(email === 'ali@gmail.com'){
//     if(password === 987654){
//         console.log('Login Successfully');
//     }
//     else{
//         console.log('Email or Password is incorrect!');
//     }
// }
// else{
//     console.log('Email Not Registered');
// }

// var a = 20;

// a += 15;
// console.log(a);

// a -= 10;
// console.log(a);

// a *= 4;
// console.log(a);

// a /= 15;
// console.log(a);

// a %= 2;
// console.log(a);

// alert('Hello World');
// confirm('You want to get it');

// var age = +prompt('Enter Your Age');

// console.log(age);
// console.log(typeof(age));

// var day1 = "Sunday";
// console.log(day1);
// var day2 = "Monday";
// console.log(day2);
// var day3 = "Tuesday";
// console.log(day3);
// var day4 = "Wednesday";
// console.log(day4);
// var day5 = "Thursday";
// console.log(day5);
// var day6 = "Friday";
// console.log(day6);
// var day7 = "Saturday";
// console.log(day7);
// Index Num   0       1         2          3          4          5        6
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// length      1        2         3         4           5          6        7

// for(var day of days){ console.log(day); }
// console.log(days);
// console.log(days[0]); //Sunday
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[3]);
// console.log(days[4]);
// console.log(days[5]);
// console.log(days[6]);

// for(var i = 0; i < days.length; i++){
//     console.log("Index NUmber",i);
//     console.log(days[i]);
// }

// var std = [1,"Ali","Ahmed",23,true,false]
// console.log(std);

// var fruits = [
//   ["Mango", "Apple", "Orange", "Guava", "Peach"], // 0
//   ["Peanuts", "Wallnuts", "Coconut", "Almond", "Kaaju"], // 1
// ];

// console.log(fruits[0][3]);

// var fruits = ['Mango','Apple','Orange','Guava','Peach'];

// console.log('Original Array',fruits);


// var copyFruits = fruits.slice(2,5);
// console.log('Copy Array',copyFruits);

// copyFruits.push('Banana','Grapes','Pineapple');
// console.log(copyFruits);
// console.log(fruits);


// fruits.pop();
// console.log(fruits);

// fruits.push('Pineapple','Chiku','Red Berries');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift('Banana','Blue Berries','Grapes');
// console.log(fruits);

// fruits.splice(2,1,'Peach');
// console.log(fruits);


// var std = {
//     id : 15,
//     name : 'Hashir',
//     enroll : true,
//     batch : 'AI-202608B',
//     hobbies : ['Reading','Travelling','Art'],
//     courses : {
//         course1 : 'CPISM',
//         course2 : 'DISM'
//     }
// }

// console.log(std);
// console.log('Student Id : ',std.id);
// console.log('Student Name : ',std.name);
// console.log('Student Enrollment : ',std.enroll);
// console.log('Student Batch : ',std.batch);
// console.log('Student Hobbies :',std.hobbies[0],std.hobbies[1],std.hobbies[2]);
// console.log('Student Courses : ',std.courses.course1, std.courses.course2);

// for(var s in std){
//     console.log(s, " : ", std[s]);
// }

// Array of Objects

// var students = [
//     {
//         id : 101,
//         name : 'Konain',
//         age : 17
//     },
//     {
//         id : 102,
//         name : 'Mujtaba',
//         age : 18
//     },
//     {
//         id : 103,
//         name : 'Moazam',
//         age : 16
//     },
//     {
//         id : 104,
//         name : 'Fatima',
//         age : 19
//     },
//     {
//         id : 105,
//         name : 'Hamna',
//         age : 18
//     },
//     {
//         id : 106,
//         name : 'Hasnat',
//         age : 18
//     },
//     {
//         id : 107,
//         name : 'Maroof',
//         age : 16
//     },
//     {
//         id : 108,
//         name : 'Izen',
//         age : 17
//     },
//     {
//         id : 109,
//         name : 'Ukasha',
//         age : 18
//     },
//     {
//         id : 110,
//         name : 'Aliyan',
//         age : 20
//     },
//     {
//         id : 111,
//         name : 'Ayan',
//         age : 16
//     },
//     {
//         id : 112,
//         name : 'Azhab',
//         age : 18
//     }
// ]

// students.map((student)=> {
//     console.log('Student Id : ',student.id);
//     console.log('Student Name : ',student.name);
//     console.log('Student Age : ',student.age);
// })

// var filterStudents = students.filter( student => student.name === 'Maroof');

// var filterStudents = students.filter((student)=>{
//     return student.age > 18 && student.name === 'Fatima'
// })

// console.log(filterStudents);

// Functions In JS

// syntax:
// Non-Parameterized Function
// function add(){
//     console.log(2+3);
// }
// add()

// Parameterized Function
// function multiply(a,b){
//     console.log(a*b);
// }

// multiply(7,6);
// multiply(5,6);
// multiply(8,6);
// multiply(9,6);
// multiply(2,6);
// multiply(3,6);
// multiply(4,6);
// multiply(10,6);

// Pre Defined Function
// function sub(a,b){
//     console.log(a-b);
// }

// sub(7,6);
// sub(5,6);
// sub(8,6);
// sub(9,6);
// sub(2,6);
// sub(3,6);
// sub(4,6);
// sub(10,6);

// User Defined Function

// var input1 = +prompt('Enter Input 1 to add Numbers');
// var input2 = +prompt('Enter Input 2 to add Numbers');

// function addition(a,b){
//     console.log(a+b);
// }

// addition(input1,input2)
