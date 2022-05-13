//1. 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const funcao = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} 
      !!!Ótimo, fui utilizada no escopo !!!`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

funcao(true);

//2. 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

let oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compararNumeros = (a, b) => a - b;

// Seu código aqui.

const sortOddsAndEvens = (array) => {
    let sortedArray = array.sort(compararNumeros);
    let message = `Os números ${sortedArray} se encontram ordenados de forma crescente!`
    console.log(message);
}

sortOddsAndEvens(oddsAndEvens);