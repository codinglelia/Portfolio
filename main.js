
// Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollX);
  // console.log(`navbar height: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  // const scrollTo = document.querySelector(link);

  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
  // scrollTo.scrollIntoView({behavior: 'smooth'});
});


// Handel click on "contact me" button on home

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  // const scrollTo = document.querySelector('#contact');
  // scrollTo.scrollIntoView({behavior : 'smooth'}); 
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down 

const home = document.querySelector('#home'); 
// If wanting to make background transparent without content,
// Selector should be .home__container 
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(1- window.scrollY / homeHeight);
  // console.log(`window.scrollY: ${window.scrollY}`);
  // console.log(`homeHeight: ${homeHeight} `);
  // console.log(`window.scrollY / homeHeight: ${window.scrollY / homeHeight} `);
  // console.log(`1- window.scrollY / homeHeight: ${1- window.scrollY / homeHeight} `);

  home.style.opacity = 1- window.scrollY / homeHeight;
  
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
  // console.log(`window.scrollY: ${window.scrollY}, homeHeight/2: ${homeHeight / 2}`)
});

// Handel click on the "arrow up" button

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
  // const scrollTo = document.querySelector('#home'); 
  // scrollTo.scrollIntoView({behavior: 'smooth'});
})


// Projects

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }

// Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');
  
  projectContainer.classList.add('anim-out');
  
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
    projects.forEach(project => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    })
  }, 300);
});
  


// 1. 모든 섹션 요소들과 아이템을 가지고 온다
// 2. IntersectionObserver 를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 한다

const sectionIds = ['#home', '#about', '#skill', '#work', '#testimonials','#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
// console.log(sections);
// console.log(navItems);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

// Function for scrolling used in navbar menu and contact me button 
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};


const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    // console.log(entry.target);
    if(!entry.isIntersecting && entry.intersectionRatio > 0) {
      // console.log(entry);
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // console.log(index, entry.target.id);
      // let selectedIndex;
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if(entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
      // console.log(navItem);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
  if(window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (window.scrollY + window.innerHeight === document.body.clientHeight) {
    selectedNavIndex = navItems.length - 1;
  } 
  selectNavItem(navItems[selectedNavIndex]);
});