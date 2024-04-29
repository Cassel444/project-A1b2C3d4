import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

 function setupSwiper() {
  return new Swiper('.mySwiper', {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      speed: 500,
        slidesPerView: 'auto',
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