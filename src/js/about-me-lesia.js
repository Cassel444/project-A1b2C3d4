import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';



const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Mousewheel, Keyboard],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    speed: 500,
    grabCursor: true,
    allowTouchMove: true,
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
    on: {
        init: function () {
            const activeIndex = this.activeIndex; this.slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.classList.add('red');
                } else {
                    slide.classList.remove('red');
                }
            });
        },
        slideChange: function () {
            const activeIndex = this.activeIndex; this.slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.classList.add('red');
                } else {
                    slide.classList.remove('red');
                }
            });
        },
    }
});


const btnRight = document.querySelector('.btn-slide-right');
btnRight.addEventListener('click', function () {
    const visibleSlides = swiper.slides.filter(slide => slide.isVisible);
    const isEnd = swiper.isEnd && visibleSlides.length === swiper.slides.length;
    if (isEnd || visibleSlides.length === swiper.slides.lengthVisible) {
        swiper.slideTo(0);
    } else {
        swiper.slideNext();
    }
});
// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';




// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true,

//     navigation: {
//         nextEl: '.btn-slide-right',
//     },
//     breakpoints: {
//         320: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1440: { slidesPerView: 6 },
//     },
// });
