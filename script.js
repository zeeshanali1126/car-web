let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.container-login').classList.toggle('active');
}
 
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.container-login').classList.remove('active');
}
 
window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container-login');

login.onclick = function(){
    container.classList.add('signinForm');
}

create.onclick = function(){
    container.classList.remove('signinForm');
};




// swipper-link-cdn
var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  loop:true,
  centeredSlides:true,
  grabCursor:true,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// swipper-link-cdn
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  loop:true,
  centeredSlides:true,
  grabCursor:true,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// swipper-link-cdn
var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  loop:true,
  centeredSlides:true,
  grabCursor:true,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});