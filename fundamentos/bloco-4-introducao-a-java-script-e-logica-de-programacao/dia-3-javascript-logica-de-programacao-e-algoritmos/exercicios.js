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
// console.log(invertedWord);

// -------------------------------------------------------------------------

// Algoritmo 03

// Definir a array de string que será analisada pelo meu algoritimo
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Definir uma variável que irá guardar a maior palavra, ela deve ter seu valor inicial igual ao primeiro valor da array, para evitar uma quebra de codigo caso minha array contenha apenas ma palavra
let biggestWord = array[0];
// Definir uma variável que irá guardar a menor palavra, ela deve ter seu valor inicial igual ao primeiro valor da array, para evitar uma quebra de codigo caso minha array contenha apenas ma palavra 
let smallestWord = array[0];
// Criar meu primeiro loop, que irá buscar a maior palavra da array inicial e atribuir o resultado a minha variável 'biggestWord'
for (index in array) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
};
// Criar meu segundo loop, que irá buscar a menor palavra da array inicial e atribuir o resultado a minha variável 'smallestWord'
for (index in array) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
};
// Criar dois console.log para retornar a maior e a menor palavra da minha array inicial
console.log('A maior palavra do array é ' + biggestWord);
console.log('A menor palavra do array é ' + smallestWord);