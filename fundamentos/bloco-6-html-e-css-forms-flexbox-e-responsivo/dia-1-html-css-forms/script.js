const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
})

const form = document.querySelector('.speaker-form');
const resetButton = document.createElement('button');

resetButton.id = 'reset-button';
resetButton.type = 'reset';
resetButton.innerHTML = 'Apagar';
form.appendChild(resetButton);