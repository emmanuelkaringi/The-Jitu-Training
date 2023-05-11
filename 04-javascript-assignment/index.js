//1. Get the current date dd-mm-yyyy, dd/mm/yyyy
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth()+1; 
// let yyyy = today.getFullYear();

// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } 

// today = dd+'-'+mm+'-'+yyyy;
// console.log(today);
// today = dd+'/'+mm+'/'+yyyy;
// console.log(today);


// 2. Number guessing game
// const randomNumber = Math.floor((Math.random() * 10) + 1);
// const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// if (userGuess === randomNumber) {
//   console.log("Good Work!");
// } else {
//   console.log("Not matched. The random number was: " + randomNumber);
// }


//3. Find the closest value to 100 from two numerical values
// function nearest(a, b) {
//     let num1 = 100-a
//     let num2 = 100-b
    
//     if(num1 > num2) {
//       return b + " is nearest to 100"
//     }else {
//       return a + " is nearest to 100"
//     }
//   }
//   console.log(nearest(20, 50));


//4. Function FizzBuzz to replace number divisible by 3 & 5 with strings
// function fizzBuzz() {

//     for (let i = 1; i <= 100; i++) {

//       if (i % 3 === 0 && i % 5 === 0) {

//         console.log("FizzBuzz");

//       } else if (i % 3 === 0) {

//         console.log("Fizz");

//       } else if (i % 5 === 0) {

//         console.log("Buzz");

//       } else {

//         console.log(i);
//       }
//     }
//   }
  
//   fizzBuzz();


//5. While loop to print items from an array
const fruits = ["Apple", "Banana", "Orange", "Mango"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

