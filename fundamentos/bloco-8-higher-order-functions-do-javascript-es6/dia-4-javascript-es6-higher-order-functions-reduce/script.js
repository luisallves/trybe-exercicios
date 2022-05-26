const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//1 - Dada uma matriz, transforme em um array.
const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flatten());

// Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}
// console.log(reduceNames());

//🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0)/books.length;
// console.log(averageAge());

// 🚀 4- Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((biggestBook, currentBook) => {
  if (currentBook.name.length > biggestBook.name.length) {
    return currentBook;
  }
  return biggestBook;
});
console.log(longestNamedBook());
