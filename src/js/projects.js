import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

 function setupSwiper() {
  return new Swiper('.mySwiper', {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      speed: 500,
      allowTouchMove: true,
      navigation: {
          nextEl: '.swiper-btn-right',
          prevEl: '.swiper-btn-left',
      },
      mousewheel: {
          invert: false,
      },
      keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
      },
  });
}

setupSwiper();