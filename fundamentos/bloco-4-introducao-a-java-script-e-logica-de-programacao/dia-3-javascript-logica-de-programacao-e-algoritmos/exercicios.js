// Criar uma vairável que recebe o número a ser fatorado
let number = 4;
// Criar uma array contendo todos os numeros que o loop encontrar, contendo o numero em questão
let decrement = [number];
// Criar um loop que irá decrementar o valor da variável em questão, até que o o velor seja igual a '1'
for (i = 1; i < number; i += 1) {
  decrement.push(number-i);
};
// criar uma variável que guarde o valor do resultado das multiplicações do próximo loop
let result = 1;
// Criar um loop que irá multiplicar cada valor da array criada
for (num of decrement){
  result *= num;
}
// Criar um console.log para que retorne o valor da variável resultado
console.log(result);