let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01

for (num of numbers) {
  // console.log(num);
};

// Exercício 02

let totalSum = 0;

for (num of numbers) {
  totalSum += num;
};

// console.log(totalSum);

// Exercício 03

let mean = totalSum / numbers.length;

// console.log(mean);

// Exercício 04

if (mean > 20){
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20")
};

// Exercício 05

let biggestNumber = numbers[0];

 for (num of numbers) {
   if (num > biggestNumber) {
     biggestNumber = num;
   }
 };

//  console.log(biggestNumber);

//  Exercício 06

let OddNumbers = 0; 

for (num of numbers) {
  if (num % 2 !== 0){
    OddNumbers += 1;
  }
}

if (OddNumbers > 0){
  // console.log('este array possui ' + OddNumbers + ' números ímpares.');
} else {
  // console.log("nenhum valor ímpar encontrado.");
}

// Exercício 07

let smallestNumber = numbers[0];

for (num of numbers) {
  if (num < smallestNumber) {
    smallestNumber = num;
  }
}

// console.log(smallestNumber);

// Exercício 08

let oneToTwentyFive = [];

for (i = 1; i <= 25; i +=1) {
  oneToTwentyFive.push(i);
}
// console.log(oneToTwentyFive);

//Exercício 09

for (num of oneToTwentyFive) {
  console.log(num / 2);
};