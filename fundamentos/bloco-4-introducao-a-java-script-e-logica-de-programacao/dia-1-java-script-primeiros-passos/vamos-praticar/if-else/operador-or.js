// Operador OR ||
// Com o operador OR (ou || , no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo.

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// Abaixo temos uma tabela mostrando como é o resultado de cada operação, assim como no operador "AND":

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

let weekDay = "sabado";

if(weekDay === "segunda-feira" || weekDay ==="terça-feira" || weekDay ==="quarta-feira" || weekDay ==="quinta-feira" ||weekDay ==="sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if(weekDay === "sabado" || weekDay ==="sábado" || weekDay ==="domingo"){
  console.log("FINALMENTE, descanso merecido UwU");
}

// Tenho que colocar a variavel de referencia toda vez que eu for acrescentar o ||