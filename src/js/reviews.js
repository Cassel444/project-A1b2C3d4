import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import iziToast from 'izitoast'; 


const REVIEWS_API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');


async function fetchReviews() {
  try {
    const response = await axios.get(REVIEWS_API_URL);
    if (response.data.length === 0) {
      throw new Error('No reviews to display');
    }
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews. Please try again later.',
      position: 'topRight'
    });
    console.error('Failed to fetch reviews:', error);
    throw error; 
  }
}

function setupSwiper() {
  return new Swiper('.swiper-reviews', {
    modules: [Navigation, Mousewheel, Keyboard],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 16, 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: false,
    },
    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
  });
}


async function renderReviews() {
  try {
    const data = await fetchReviews();
    const reviewHtml = data.map(({ _id, avatar_url, author, review }) => `
      <li class='reviews-item swiper-slide' id='${_id}'>
        <img class='reviews-photo' src='${avatar_url}' alt='photo of ${author}'>
        <h3 class='reviews-author-name'>${author}</h3>
        <p class='author-review'>${review}</p>
      </li>
    `).join('');

    reviewsList.insertAdjacentHTML('beforeend', reviewHtml);
    setupSwiper();
  } catch (error) {
    reviewsList.textContent = 'Review data is not available'; 
    console.error('Error in renderReviews:', error.message); 
  }
}


renderReviews();

