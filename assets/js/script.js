// <!-- Typed js Effect -->
var typed = new Typed('.typing-text', {
  strings: ['Fullstack Web Dev', 'Frontend Javascript', 'Backend Javascript'],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000
});

// MEMBUAT HAMBURGER BUTTON DAN NAVBAR SAAT RESPONSIVE
window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// AUTO SCROLL UP BUTTON
let offset = 0;
window.addEventListener('scroll', function () {
  let st = window.pageYOffset;
  if (st > offset) {
    document.querySelector('.fa-arrow-up').classList.add('active');
  } else {
    document.querySelector('.fa-arrow-up').classList.remove('active');
  }
});

// MENAMPILKAN LOADING
const loader = document.getElementById('loader');
const body = document.querySelector('body');

window.addEventListener('load', function () {
  setTimeout(() => {
    loader.classList.add('conceal');
    body.classList.remove('conceal');
  }, 300);
});
