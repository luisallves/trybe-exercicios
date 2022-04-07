// Operador AND &&
// Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras:

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

// E o que acontece se existir um encadeamento de &&? 
// Imagine que exista a seguinte expressão:

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;// true
//a ordem logica seguirá o item da esquerda para o item da direita

console.log(listaDeCompras)

// heat sheet para você ver em quais possibilidades teremos resposta true ou false .

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 19.23;
let message;

if(currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir";
}else if(currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D";
}else if(currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?";
}else if(currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!";
}else if(currentHour >= 4 && currentHour < 11){
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message);
