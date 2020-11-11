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
});

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

  scrollIntoView(link);
});

// Handel click on "contact me" button on home

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
};

// Make home transparent when scrolling down
// const home = document.querySelector('#home');

// document.addEventListener('scroll', () => {
//   // console.log(window.scrollY);
//   // console.log(`navbar height: ${navbarHeight}`);
//   if(window.scrollY > navbarHeight) {
//     home.classList.add('home--dark');
//   } else {
//     home.classList.remove('home--dark');
//   }
// })

// Make home slowly fade to transparent as the window scrolls down 

const home = document.querySelector('#home'); 
// If wanting to make background transparent without content,
// Selector should be .home__container 
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(1- window.scrollY / homeHeight);
  home.style.opacity = 1- window.scrollY / homeHeight;
  
});

// document.addEventListener('scroll', () => {
//   arrowBtn.style.opacity = 1 - window.scollY / homeHeight;
//   console.log(arrowBtn.style.opacity);
// })

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handel click on the "arrow up" button

document.addEventListener('click', () => {
  scrollIntoView('#home');
})