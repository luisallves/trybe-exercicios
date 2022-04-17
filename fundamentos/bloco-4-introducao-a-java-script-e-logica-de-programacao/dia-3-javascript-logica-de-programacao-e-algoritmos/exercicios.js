// Algoritmo 01

// Criar uma vairável que recebe o número a ser fatorado
let number = 10;
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
// console.log(result);

// -------------------------------------------------------------------------

// Algoritmo 02

// Criar uma variável que irá guardar a palavra que será invertida
let word = 'tryber';
// Criar uma variável que ira guardar o resultado do meu loop que inverte a palavra
let invertedWord = '';
//Criar um loop que busca cada letra da minha palavra e concatena com a variavel da palavra invertida
for (index in word){
  invertedWord = word[index] + invertedWord;
}
// Criar um console.log para revelar a palavra invertida
console.log(invertedWord);
