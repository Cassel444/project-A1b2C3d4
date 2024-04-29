import Swiper from 'swiper';
// import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

const btnRight = document.querySelector('.btn-slide-right');
btnRight.addEventListener('click', slideClick);

function setupSwiper() {
    return new Swiper('.swiper-container', {
        modules: [Navigation, Mousewheel, Keyboard],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        speed: 500,
        allowTouchMove: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.btn-slide-right',
        },
        mousewheel: {
            invert: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        breakpoints: {
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1440: { slidesPerView: 6 },
        },
    });
}

function slideClick() {

}






