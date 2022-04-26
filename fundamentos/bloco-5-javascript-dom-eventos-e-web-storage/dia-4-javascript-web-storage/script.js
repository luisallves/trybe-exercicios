let savedBgColor = localStorage.getItem('background-color') 
  document.body.style.backgroundColor = savedBgColor; 

let savedTextColor = localStorage.getItem('text-color')
  document.body.style.color = savedTextColor

  
  window.onload = function(){
    
    
    //changing background color;
    
    let savedFontSize = localStorage.getItem('text-size') 
        document.querySelector('p').style.fontSize = savedFontSize;

        
  let selectBgColor = document.getElementById("background-color");

  selectBgColor.addEventListener('change', function(){
    let selected = selectBgColor.selectedOptions[0];
    // console.log(select.selectedOptions);
    document.body.style.backgroundColor = selected.value;    localStorage.setItem('background-color', selected.value);
  })

//changing text color;

  let selectTextColor = document.getElementById("font-color");

  selectTextColor.addEventListener('input', function(){
    let selected = selectTextColor.selectedOptions[0];
    document.body.style.color = selected.value;
    localStorage.setItem('text-color', selected.value);
  })

//changing text size;

  let inputFontSize = document.querySelector('input[name="font-size"]');
  
  inputFontSize.addEventListener('change',function(){
  let fontSizes = `${inputFontSize.value}px`;
  document.querySelector('p').style.fontSize = fontSizes
  localStorage.setItem('text-size', fontSizes);
  })

  
  }


