const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const listener1 = () => {
  btn.style.backgroundColor = '#db2777';
  btn.innerText = 'Are you sure?';
  btn.removeEventListener('click', listener1);
  btn.addEventListener('click', listener2);
};

const listener2 = () => {
  container.innerHTML = '🦄';
};

btn.addEventListener('click', listener1);
