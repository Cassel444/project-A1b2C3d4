import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard} from 'swiper/modules';

 function projectSwiper() {
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

projectSwiper();