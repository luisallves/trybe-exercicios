

function createDaysOfTheWeek() {
//IMPLEMENTOU UMA FUNCTION QUE RECEBE NENHUM PARAMENTRO

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  //DECLAROU UMA ARRAY CONTENDO OS DIAS DA SEMANA

  const weekDaysList = document.querySelector('.week-days');
  //DECLAROU UMA VARIAVEL COM O ENDEREÇO DA 'UL' NA QUAL IRA ADICIONAR OS ELEMENTOS DA ARRAY CRIADA VIA 'FOR'

  for (let index = 0; index < weekDays.length; index += 1) {
  // INICIA UM LOOPING QUE DEFINE O INDEX DE 1 E CONTANDO MAIS 1 A CADA REPETIÇÃO ATÉ QUE ATINJA O VALOR DE weekDays.length 'O ARRAY CRIADO'

    const days = weekDays[index];
    // A CADA REPETIÇÃO DEFINE UMA VARIÁVEL QUE CONTEM O ELEMENTO POSICIONADO NA POSIÇÃO 'index' DA ARRAY weekDays.

    const dayListItem = document.createElement('li');
    // A CADA REPETIÇÃO CRIA UM ELEMENTO 'LI' NO DOCUMENTO E ATRIBUI ESSA CRIAÇÃO A UMA CONST

    dayListItem.innerHTML = days;
    // DEFINE COMO TEXTO DO ELEMENTO CRIADO, O VALOR DA VARIÁVEL 'days'

    weekDaysList.appendChild(dayListItem);
    // ADICIONA O ELEMENTO CRIADO COMO FILHO DO ELEMENTO ENDEREÇADO NA VARIÁVEL daysListItem
  };
};

createDaysOfTheWeek();
// CHAMA A FUNÇÃO CRIADA

// Escreva seu código abaixo.




// Exercício 1:


let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//DECLARA UMA ARRAY CONTENDO OS DIAS QUE SERÃO ADICIONADOS AO CALENDÁRIO;

function createDaysOfTheMonth() {
// CRIA UMA FUNÇÃO QUE NÃO RECEBE PARAMETRO;

  let getDaysList = document.querySelector('#days');
  // CRIA UMA VARIÁVEL QUE CONTEM O ENDEREÇO DA 'UL' A QUAL QUER ADICIONAR OS ITENS DA ARRAY;

  for (let index = 0; index < dezDaysList.length; index += 1) {
  // ABRE UM LOOPPING QUE PERCORRE TODA A ARRAY CRIADA;

    let day = dezDaysList[index];
    // DEFINE UMA VARIAVEL COM O ITEM DA ARRAY POSICIONADO NO index;

    let dayItem = document.createElement('li');
    // DEFINE OUTRA VARIÁVEL E ATRIBUI A ELA A CRIAÇÃO DE UM ELEMENTO 'li';


    if (day === 24 | day === 31) {
    // ABRE UMA CONDICIONAL QUE VERIFICA SE O VALOR DA VARIÁVEL 'day' É IGUAL AO NUMERO 24 OU 31;

      dayItem.className = 'day holiday';
      //SE SIM, ADICIONA DUAS CLASSES AO ELEMENTO CRIADO;

      dayItem.innerHTML = day;
      //DEPOIS ATRIBUI AO CONTEÚDO HTML DO ELEMENTO CRIADO, O VALOR CONTIDO NA VARIÁVEL 'day';
      
      getDaysList.appendChild(dayItem);
      //ADICIONA O ELEMENTO CRIADO COMO FILHO DO ELEMENTO DESCRITO NO 'getDaysList'


    } else if (day === 4 | day === 11 | day === 18) {
      //NO ELSE ABRE UM IF QUE VERIFICA SE O ITEM CONTIDO NA VARIÁVEL 'day' É IGUAL A 4, 11 OU 18;

      dayItem.className = 'day friday';
      //SE SIM, DEFINE A CLASSE DO ELEMENTO COMO 'day friday';

      dayItem.innerHTML = day;
      //DEFINE O HTML DO ELEMENTO CRIADO COM O VALOR DE 'day';

      getDaysList.appendChild(dayItem);
      //ADICIONA O ELEMENTO CRIADO COMO FILHO DO ELEMENTO DESCRITO NO 'getDaysList'


    } else if (day === 25) {
      //NO ELSE ABRE UM IF QUE VERIFICA SE O ITEM CONTIDO NA VARIÁVEL 'day' É IGUAL 25;

      dayItem.className = 'day holiday friday';
      //DEFINE A CLASSE DO ELEMENTO CRIADO COMO 'day holiday friday';

      dayItem.innerHTML = day;
      //DEFINE O HTML DO ELEMENTO CRIDO COMO 'day';

      getDaysList.appendChild(dayItem);
      //ADICIONA O ELEMENTO CRIADO COMO FILHO DO ELEMENTO DESCRITO NO 'getDaysList'


    } else {
      //NO ELSE QUE DEFINE QUE SE NENHUMA DAS CONDICIONAIS FOR ATENDIDA;

      dayItem.innerHTML = day;
      //DEFINE O HTML DO ITEM CRIADO COMO O VALOR DO 'day';

      dayItem.className = 'day';
      //DEFINE A CLASSE DO ELEMENTO CRIADO COMO O VALOR CONTIDO EM 'day';

      getDaysList.appendChild(dayItem);
      //ADICIONA O ELEMENTO CRIADO COMO FILHO DO ELEMENTO DESCRITO NO 'getDaysList'

    }
  };
};
createDaysOfTheMonth();
//CHAMA A FUNÇÃO CRIADA