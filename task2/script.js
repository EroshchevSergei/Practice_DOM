document.querySelector('#consoleLog').onclick = function() {
    alert('Этот метод выводит сообщение в консоль');
  }

  document.querySelector('#alert').onclick = function() {
    alert('Этот метод выводит сообщение в диалоговое окно с кнопкой OK');
  }

  const promptt = document.querySelector('#prompt');
  promptt.addEventListener('click', () => {
    alert('Этот метод выводит диалоговое окно с запросом на ввод текста');
  })



consoleLogText.onclick = function() {
  console.log('Нажатие оказалось удачным');
}

alertText.onclick = function() {
  alert('ПТИЧКА!!!');
}

promptText.onclick = function() {
  const Watermelon = prompt('Самая большая ягода в мире?');
  if (Watermelon == 'Арбуз') {
    alert('Вы совершенно правы!');
  } else if (Watermelon == 'Арбуз') {
    alert('Вы соверщенно правы!');
  } else {
    alert('К сожалению Вы не правы!');
  }
}