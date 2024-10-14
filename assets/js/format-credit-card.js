const cardInput = document.getElementById('card-number');
const cardCreditNumber = document.getElementById('card_number')
const cvvInput = document.getElementById('cvv');
const cvvNumber = document.getElementById('cvv_number')
const expiryInput = document.getElementById('expiry-date');
const expiryDateNumber = document.getElementById('expiry_date_number')

  cardInput.addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '');
    input = input.substring(0, 16);

    // Divide en grupos de 4 dígitos
    let formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';

    e.target.value = formattedInput;

    if(e.target.value){
        cardCreditNumber.innerHTML =  e.target.value
    } else {
        cardCreditNumber.innerHTML =  "0000 0000 0000 0000"
    }
  });


  cvvInput.addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '')
    input = input.substring(0, 3);
    e.target.value = input;

    if(e.target.value){
        cvvNumber.innerHTML =  e.target.value
    } else {
        cvvNumber.innerHTML =  "000"
    }
  });


  expiryInput.addEventListener('input', function (e) {
    let input = e.target.value;
    
    input = input.replace(/\D/g, '');

    if (input.length > 2) {
      input = input.substring(0, 2) + '/' + input.substring(2, 4);
    }

    e.target.value = input.substring(0, 5);

    if(e.target.value){
        expiryDateNumber.innerHTML =  e.target.value
    } else {
        expiryDateNumber.innerHTML =  "00/00"
    }
  });