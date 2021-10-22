const buttons = document.querySelectorAll('.button');
buttons[0].addEventListener('click', () => {
  localStorage.setItem('NO', 'DE');
});
buttons[1].addEventListener('click', function () {
  this.style.backgroundColor = 'red';
});
buttons[2].addEventListener('click', () => {
  alert(new Date().toTimeString());
});
buttons[3].addEventListener('click', () => {
  window.location.reload();
});
buttons[4].addEventListener('click', () => {
  window.open();
});
buttons[5].addEventListener('click', () => {
  setInterval(() => {
    console.log('I did');
    console.log('I dId');
  }, 500);
});
