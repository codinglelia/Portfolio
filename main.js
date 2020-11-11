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

// $('#navbar a, .home__contact').on('click', function(event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top - 100
//         // negative -100 means to show the each title in section
//       },
//       800
//       // miler seconds
//     );
//   }
// });

// const menuItem = document.querySelector('.navbar__menu__items');
// menuItem.addEventListener('click', () => {
//   const about = document.querySelector('#about');
//   about.scrollIntoView();
//   const work = document.querySelector('#work');
//   work.scrollIntoView();
//   const contact = document.querySelector('#contact');
//   contact.scrollIntoView();
// })

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
})