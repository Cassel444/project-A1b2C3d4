// import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-right',
    prevEl: '.swiper-btn-left',
  }
});