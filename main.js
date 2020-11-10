'use strict';

// const toggle = document.querySelector('.navbar__toggle-btn');
// const menu = codument.querySelector('.navbar__menu');

// toggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
// })

// Sticky menu background
// window.addEventListener('scroll', () => ) {
//   if (window.scrollY > 150) {
//     // If navbar is far than 150px 
//     document.querySelector('#navbar').style.opacity = 0.9;
//     // make menu bar is opacity for 0.9
//   } else {
//     document.querySelector('#navbar').style.opacity = 1;
//   }
// });

// Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbar height: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})