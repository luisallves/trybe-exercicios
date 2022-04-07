//swtch -- case

let trafficLight = "roxo";

switch (trafficLight) {
  case "vermelho": //abre um caso para ser analizado.
    console.log("Pare!"); //define codigo a ser executado se caso for true.
    break; //finaliza o switch e não analiza mais.

  case "amarelo": //abre um caso para ser analizado.
    console.log("Pare!"); //define codigo a ser executado se caso for true.
    break; //finaliza o switch e não analiza mais.

  case "verde": //abre um caso para ser analizado.
    console.log("Pare!"); //define codigo a ser executado se caso for true.
    break; //finaliza o switch e não analiza mais.

  default: //abre caso que nenhum dos casos foi atendido.
    console.log("Valor não identificado") //define codigo a ser executado se caso defaut for true.
}


let statusPerson = "reprovada";

switch (statusPerson) {
  case "aprovada":
    console.log("Parabéns você está aprovado(a)!");
    break;

  case "lista":
    console.log("Aguarde você está na lista de espera!");
    break;

  case "reprovada":
    console.log("poxa uma pena mas você esta reprovado... tente novamente");
    break;

  default :
  console.log("Não se aplica")

}