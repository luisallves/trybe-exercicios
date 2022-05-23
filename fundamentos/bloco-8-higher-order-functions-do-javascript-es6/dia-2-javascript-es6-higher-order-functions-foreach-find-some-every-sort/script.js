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

console.log(person('Luis Fernando Alves Pereira'));
