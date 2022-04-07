// Operador NOT
// Ele pode inverter o valor booleano de um elemento.
// Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável .

// console.log((2 + 2) === 4);
// console.log(!(2 + 2) === 4);

// O conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

//*Strings

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

//*Números

console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// *Valores nulos

console.log(!null); // true

//*Valores indefinidos

console.log(!undefined); // true