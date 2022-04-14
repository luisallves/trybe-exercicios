
//variáveis para os programas:

const valorA = 3;
const valorB = 1;
const valorC = 4;
const valorD = 4

//Programa-02

if(valorA > valorB){
  console.log("O valor A é o maior");
} else {
  console.log("O valor B é o maior");
};

//Programa-03

if(valorA > valorB && valorA > valorC) {
 console.log("Valor A é o maior");
} else if( valorB > valorA && valorB > valorC){
  console.log("Valor B é o maior");
} else if(valorC > valorA && valorC > valorB){
  console.log("Valor C é o maior");
} else {
  console.log("valores são iguais");
}

// //Programa-04

if(valorA > 0){
  console.log("positive")
} else if(valorA < 0){
  console.log("negative")
} else {
  console.log("zero")
}

//Programa-05

let angulo01 = 90;
let angulo02 = 60;
let angulo03 = 30;

let somaDosAngulos = angulo01+angulo02+angulo03;

let todosMaioresQueZero = angulo01 > 0 && angulo02 > 0 && angulo03 > 0;

if (todosMaioresQueZero) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
 
// Programa 6

const peca = 'BISPO';

switch (peca.toLocaleLowerCase()) {
  case 'rei':
    console.log('Rei = Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo = Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha = Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo = "L" pode pular sobre peças.');
    break;
  case 'torre':
    console.log('Torre = Horizontal e vertical.');
    break;
  case 'peão':
    console.log('Peão = apenas uma casa pra frente, no primeiro movimento podem ser duas casas');
    break;
  default:
    console.log('Eroo, peça invalida!');
    brack;
};

// Programa 7

