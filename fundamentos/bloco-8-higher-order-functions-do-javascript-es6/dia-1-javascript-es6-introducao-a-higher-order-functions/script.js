// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const person = (fullName) => {
    return {
        nomeCompleto: fullName,
        email: emailName(fullName),
    }
};

const emailName = (fullName) => {
    let lower = fullName.toLowerCase();
    let split = lower.split(" ");
    let introEmail = `${split[0]}_`
    for (let i = 1; i < split.length; i += 1){
        introEmail += `${split[i]}_`
    }
    console.log();
    const email = `${introEmail.substring(0, introEmail.length - 1)}@trybe.com`;
    return email;
};

// console.log(person('Luis Fernando Alves Pereira'));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = (numEsc, callback) => {
const sorteio = Math.floor(Math.random() * (6 - 1) + 1);
callback(numEsc, sorteio);
};

const callback = (numEsc, numSort) => {
    console.log(numSort)
    console.log(numEsc)
    if (numEsc === numSort) {
        console.log("Parabéns você ganhou");
    } else {console.log("Tente novamente");};
};

// resultadoSorteio(5,callback);

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let nota = 0

const correcao = (gabarito, respostas, acao) => {
    for (let i = 0; i < gabarito.length; i += 1){
        let conta = acao(gabarito[i], respostas[i])
        nota += conta;
    }
    console.log(nota);
};

const acao = (gabarito, resposta) => {
    if (resposta === gabarito) {
        return 1;
    } else if (resposta === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
};

correcao(gabarito, respostas, acao);