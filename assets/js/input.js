// Actions taken when clicking the 'input-area'
var inputAreas = document.querySelectorAll('.input-area');

for(let inputArea of inputAreas) {
  inputArea.addEventListener('click', function(){
    inputArea.querySelector('label').classList.add('floating-label');
    inputArea.querySelector('input').focus();
  });
}

// Actions taken when focus/blur the input
var inputs = document.querySelectorAll('input');

for(let input of inputs) {
  //   focus actions
  input.addEventListener('focus', function(){
    input.parentElement.querySelector('label').classList.add('floating-label');
  });
  //   blur actions
  input.addEventListener('blur', function(){
    if(!input.value) {
      input.parentElement.querySelector('label').classList.remove('floating-label');
    }
  });
}

