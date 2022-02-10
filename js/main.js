let elopenmenu = document.getElementById('menu-btn');
let elColsemodal = document.getElementById('navbar');
let elModal = document.getElementById('navbar');


elopenmenu.addEventListener('click', function () {
  elModal.classList.toggle('show');
  elopenmenu.classList.toggle('show');  
});

elColsemodal.addEventListener('click', function () {
  elModal.classList.remove('show');
});