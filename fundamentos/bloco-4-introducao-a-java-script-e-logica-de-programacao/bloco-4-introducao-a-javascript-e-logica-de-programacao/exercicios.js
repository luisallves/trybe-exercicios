// Exercício 01

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda, ' + info.personagem);

// Exercício 02

info['recorrente'] = 'Sim';
// console.log(info);



for (key in info) {
  // console.log(key);
};

// Exercício 04

for (key in info) {
  console.log(info[key])
};