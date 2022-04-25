

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



// Exercício 2:

function createHolidayButton(buttonName) {
//Cria uma função que recebe como parametro uma string que será ultilizada para servir de nome para o botão;

  let buttonContainer = document.querySelector('.buttons-container');
  //Pega o endereço do elemento com a classe 'buttons-countainer' e atribui a variavel 'buttonContainer';

  let newButton = document.createElement('button');
  //atribui a criação de um elemento 'button' à variável 'newButton';

  let newButtonID = 'btn-holiday';
  //atribui a string "btn-holiday" à variável "newButtonID";

  newButton.innerHTML = buttonName;
  //define o innerHTML do elemento criado como a string que a função ;recebe

  newButton.id = newButtonID;
  //atribui ao id do elemento criado o valor da variável "newButtonID";

  buttonContainer.appendChild(newButton);
  //acrescenta o elemento criado como filho de buttonContainer;
};

createHolidayButton('Feriados');
//Chama a função criada, com a string 'Feriados';



//Exercício 3:

function displayHolidays() {
//Cria uma função que não recebe nenhum parametro;

  let getHolidayButton = document.querySelector('#btn-holiday');
  //atribui o endereço do elemento com o 'id' 'btn-holiday';

  let getHolidays = document.querySelectorAll('.holiday')
  //atribui o endereço do elemento com a 'classe' 'holiday';

  let backgroundColor = 'rgb(238,238,238)';
  //define uma cor em RGB à variável 'backgroundColor';

  let setNewColor = 'white';
  //define a cor branca à variável 'setNewColor';


  getHolidayButton.addEventListener('click', function() {
  //cria uma escuta para um evento "click" que quando ocorrer chama a function que ele mesmo define;

    for (let index = 0; index < getHolidays.length; index += 1) {
    //cria um looping para percorrer toda a array formada por elementos que possuem a classe 'holiday';

      if (getHolidays[index].style.backgroundColor === setNewColor) {
      //abre uma condicional que verifica se o elemento que está na array "getHolidays" possui o backgroundColor igual ao conteúdo da variável 'setNewColor';

        getHolidays[index].style.backgroundColor = backgroundColor;
        //Se sim, atribui o valor da variavel "backgroundColor" à cor de fundo do elemento posicionado na posição index da array;

      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
        //se não, define a cor do fundo do elemento para o conteúdo da var "setNewColor";
      }
    }
  })
};

displayHolidays();
//Chama a função;

// Exercício 4:

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

// Exercício 5:

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// Exercício 6:

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// Exercício 7:

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

// Exercício 8:

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// Exercício 9:

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// Exercício 10:

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Bônus:

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();