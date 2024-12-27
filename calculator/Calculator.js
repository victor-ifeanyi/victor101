let display = document.querySelector('.display')
document.querySelector('.seven')
  .addEventListener('click', () => {
    display.innerHTML += '7';
  });
document.querySelector('.eight')
  .addEventListener('click', () => {
    display.innerHTML += '8';
  });
document.querySelector('.nine')
  .addEventListener('click', () => {
    display.innerHTML += '9';
  });
document.querySelector('.multiply')
  .addEventListener('click', () => {
    display.innerHTML += '*';
  });
document.querySelector('.four')
  .addEventListener('click', () => {
    display.innerHTML += '4';
  });
document.querySelector('.five')
  .addEventListener('click', () => {
    display.innerHTML += '5';
  });
document.querySelector('.six')
  .addEventListener('click', () => {
    display.innerHTML += '6';
  });
document.querySelector('.minus')
  .addEventListener('click', () => {
    display.innerHTML += '-';
  });
document.querySelector('.one')
  .addEventListener('click', () => {
    display.innerHTML += '1';
  });
document.querySelector('.two')
  .addEventListener('click', () => {
    display.innerHTML += '2';
  });
document.querySelector('.three')
  .addEventListener('click', () => {
    display.innerHTML += '3';
  });
document.querySelector('.plus')
  .addEventListener('click', () => {
    display.innerHTML += '+';
  });
document.querySelector('.double-zero')
  .addEventListener('click', () => {
    display.innerHTML += '00';
  });
document.querySelector('.zero')
  .addEventListener('click', () => {
    display.innerHTML += '0';
  });
document.querySelector('.clear')
  .addEventListener('click', () => {
    display.innerHTML = '';
  });
document.querySelector('.clear')
  .addEventListener('click', () => {
    display.innerHTML = '';
  });
document.querySelector('.clear')
  .addEventListener('click', () => {
    display.innerHTML = '';
  });
document.querySelector('.decimal')
  .addEventListener('click', () => {
    display.innerHTML += '.';
  })
document.querySelector('.divide')
  .addEventListener('click', () => {
    display.innerHTML += '/';
  });
document.querySelector('.delete')
  .addEventListener('click', () => {
    display.innerHTML = display.innerHTML.toString().slice(0,-1);
  });
document.querySelector('.js-equal')
  .addEventListener('click', () => {
    display.innerHTML = eval(display.innerHTML);
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === '7') {
    display.innerHTML += '7';
  } else if (event.key === '8') {
    display.innerHTML += '8';
  } else if (event.key === '9') {
    display.innerHTML += '9';
  } else if (event.key === '*') {
    display.innerHTML += '*';
  } else if (event.key === '4') {
    display.innerHTML += '4';
  } else if (event.key === '5') {
    display.innerHTML += '5';
  } else if (event.key === '6') {
    display.innerHTML += '6';
  } else if (event.key === '-') {
    display.innerHTML += '-';
  } else if (event.key === '1') {
    display.innerHTML += '1';
  } else if (event.key === '2') {
    display.innerHTML += '2';
  } else if (event.key === '3') {
    display.innerHTML += '3';
  } else if (event.key === '+') {
    display.innerHTML += '+';
  } else if (event.key === '0') {
    display.innerHTML += '0';
  } else if (event.key === '.') {
    display.innerHTML += '.';
  } else if (event.key === '/') {
    display.innerHTML += '/';
  } else if (event.key === 'Backspace') {
    display.innerHTML = display.innerHTML.toString().slice(0,-1);
  } else if (event.key === 'Escape') {
    display.innerHTML = '';
  } else if (event.key === 'Enter') {
    display.innerHTML = eval(display.innerHTML);
  }
})