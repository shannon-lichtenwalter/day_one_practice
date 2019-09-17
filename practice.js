'use strict';
// practicing for loops. best used when there is a set of 
// operations that you want to do a set number of times.

// const countTo = 10;
// for (let i=1; i <= countTo; i++){
//   console.log(i);
// }

//while loop-- best used when the looped behavior does not
//have a known number of iterations, but rather has a known logical condition where it should terminate.

// let counter = 1;
// const countTo = 10;
// while (counter <= countTo) {
//   console.log(counter);
//   counter++;
// }

//Max and Min Drill

// function max(numbers){
//   let currentMax = numbers[0];
//   for (let i=0; i < numbers.length; i++){
//     if (currentMax < numbers[i]){
//       currentMax = numbers[i];
//     }
//   }
//   return currentMax;
// }

// console.log(max([1,2,6,7,3,100]));

// function min(numbers){
//   let currentMin = numbers[0];
//   for (let i=0; i<numbers.length; i++){
//     if (currentMin > numbers[i]){
//       currentMin = numbers [i];
//     }
//   }
//   return currentMin;
// }

// console.log(min([1,5,6,-10,29]));

//average drill

// function average(numbers){
//   let total = numbers [0];
//   for (let i=1; i<numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total/numbers.length;
// }

// console.log(average([1,2,3,4]));

//fizzBuzz drill

function fizzBuzz(countTo){
  let result = [];
  for(let i=1; i <= countTo; i++){
    if (i % 3 === 0 && i % 5 === 0){
      result.push('fizzbuzz');
    } else if (i % 3 === 0){
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(15));