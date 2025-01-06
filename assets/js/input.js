// Actions taken when clicking the 'input-area'
const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handlePaste);
  input.addEventListener("keyup", autoSubmit);
});

function handlePaste(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length == inputs.length) {
    inputs.forEach((input, index) => {
      input.value = value[index];
    });
    submit();
  }
}
function autoSubmit(e) {
  const input = e.target;
  let value = input.value.trim();
  input.value = "";
  input.value = value ? value[0] : "";
  let fieldIndex = input.dataset.index;
  if (value.length > 0 && fieldIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  if (e.key == "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }
  if (fieldIndex == inputs.length - 1) {
    submit();
  }
}

function submit() {
  var otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(otp);
  window.location.href = 'loading.html';
}