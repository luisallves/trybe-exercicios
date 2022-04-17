
// //variáveis para os programas:

// const valorA = 3;
// const valorB = 1;
// const valorC = 4;
// const valorD = 4

// //Programa-02

// if(valorA > valorB){
//   console.log("O valor A é o maior");
// } else {
//   console.log("O valor B é o maior");
// };

// //Programa-03

// if(valorA > valorB && valorA > valorC) {
//  console.log("Valor A é o maior");
// } else if( valorB > valorA && valorB > valorC){
//   console.log("Valor B é o maior");
// } else if(valorC > valorA && valorC > valorB){
//   console.log("Valor C é o maior");
// } else {
//   console.log("valores são iguais");
// }

// // //Programa-04

// if(valorA > 0){
//   console.log("positive")
// } else if(valorA < 0){
//   console.log("negative")
// } else {
//   console.log("zero")
// }

// //Programa-05

// let angulo01 = 90;
// let angulo02 = 60;
// let angulo03 = 30;

// let somaDosAngulos = angulo01+angulo02+angulo03;

// let todosMaioresQueZero = angulo01 > 0 && angulo02 > 0 && angulo03 > 0;

// if (todosMaioresQueZero) {
//   if (somaDosAngulos === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }
 
// // Programa 6

// const peca = 'BISPO';

// switch (peca.toLocaleLowerCase()) {
//   case 'rei':
//     console.log('Rei = Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo = Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha = Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo = "L" pode pular sobre peças.');
//     break;
//   case 'torre':
//     console.log('Torre = Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log('Peão = apenas uma casa pra frente, no primeiro movimento podem ser duas casas');
//     break;
//   default:
//     console.log('Eroo, peça invalida!');
//     break;
// };

// // Programa 7

// let porcent = 60;

// if (porcent < 0 || porcent > 100){
//   console.log('Erro, nota incorreta!');
// } else if (porcent >= 90) {
//   console.log('A');
// } else if (porcent >= 80) {
//   console.log('B');
// } else if (porcent >= 70) {
//   console.log('C');
// } else if (porcent >= 60) {
//   console.log('D');
// } else if (porcent >= 50) {
//   console.log('E');
// } else if (porcent < 50) {
//   console.log('F');
// };

// // Programa 8
// const num1 = 1;
// const num2 = 2;
// const num3 = 3;

// if (num1 % 2 === 0||num2 % 2 === 0||num3 % 2 === 0){
//   console.log(true);
// } else {
//   console.log(false);
// };

// // Programa 9

// const num1 = 6;
// const num2 = 1;
// const num3 = 4;

// if (num1 % 2 !== 0||num2 % 2 !== 0||num3 % 2 !== 0){
//   console.log(true);
// } else {
//   console.log(false);
// };

// Programa 10

const custoProduto = 20;
const custoTotal = custoProduto*1.2;
const venda = 35;
const lucro = venda - custoTotal;


console.log('O lucro da empresa em 1000 unidades será de: ' + lucro * 1000 + ' reais.');

//Programa 11

let aliquotINSS;
let aliquotIR;

let grosSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));