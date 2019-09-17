// 'use strict';

// //greeting function

// function greeting(name, age) {
//   if (name === 'undefined' || age === 'undefined'){
//     throw new Error('Arguments not valid');
//   }
//   if (typeof name !== 'string' || typeof age !== 'number'){
//     throw new Error ('invalid entry');
//   }
//   const year = getYearOfBirth(age); 
//   return `Hi my name is ${name} and I am ${age}. I was born in ${year}.`;
// }

// function getYearOfBirth(age){
//   if (age < 0){
//     throw new Error('Age can not be negative');
//   }
//   return 2019 - age;
// }

// try{
//   const greeting1 = greeting('Shannon', 27);
//   console.log(greeting1);
// } catch (err) {
//   console.log(err);
// }
