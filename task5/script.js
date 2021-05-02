inputText.oninput = function() {
    duplicateField.innerHTML = inputText.value;
  };

const button = document.querySelector('#buttonText');
button.addEventListener('click', () => {
    console.log(inputText.value);
    duplicateField.textContent = "";
    inputText.value = "";
  })




/*
Как при помощи preventDefault() удалить из поля ввода не могу понять
*/