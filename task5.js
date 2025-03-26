// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
let num = Number(prompt("Escribe un numero: "));

for (let i = 1; i <= num; i++) {
  
  if (i % 15 == 0 && i % 7 == 0){
    console.log("FizzBuzzWoof")
  }
  else if (i % 15 == 0){
    console.log("FizzBuzz")
  }
  else if (i % 3 == 0 && i % 7 == 0){
    console.log("FizzWoof")
  }
  else if (i % 5 == 0 && i % 7 == 0){
    console.log("BuzzWoof")
  }
  else if (i % 3 == 0){
    console.log("Fizz")
  }else if (i % 5 == 0){
    console.log("Buzz")
  }else if (i % 7 == 0){
    console.log("Woof")
  }else{
  console.log(i)
  }
};