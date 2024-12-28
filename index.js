const element = document.querySelector('.circle');
const h1Tag = document.querySelector('h1');
const body = document.querySelector('body');

element.addEventListener('click', () => {
  const isMovedRight = element.classList.toggle('moved-right');
  element.classList.toggle('moved-left', !isMovedRight);

  if (isMovedRight) {
    h1Tag.style.color = 'white';
    body.style.backgroundColor = 'black';
  } else {
    h1Tag.style.color = 'black';
    body.style.backgroundColor = 'white';
  }
});
