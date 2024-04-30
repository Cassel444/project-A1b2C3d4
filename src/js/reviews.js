
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
<<<<<<< Updated upstream
import iziToast from 'izitoast'; 


const REVIEWS_API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');

=======

const REVIEWS_API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewList = document.querySelector('.review-list');
>>>>>>> Stashed changes

async function fetchReviews() {
  try {
    const response = await axios.get(REVIEWS_API_URL);
    if (response.data.length === 0) {
      throw new Error('No reviews to display');
    }
    return response.data;
  } catch (error) {
<<<<<<< Updated upstream
    iziToast.error({
=======
    console.error('Failed to fetch reviews:', error);
    iziToast.error({ // Use iziToast to show an error message
>>>>>>> Stashed changes
      title: 'Error',
      message: 'Failed to fetch reviews. Please try again later.',
      position: 'topRight'
    });
<<<<<<< Updated upstream
    console.error('Failed to fetch reviews:', error);
    throw error; 
=======
    throw new Error('Failed to fetch reviews'); // Continue to throw to prevent further execution
>>>>>>> Stashed changes
  }
}

function setupSwiper() {
  return new Swiper('.swiper', {
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
<<<<<<< Updated upstream
=======
    mousewheel: {
      invert: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    direction: 'horizontal',
    slidesPerView: 1,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <li class='reviews-item swiper-slide' id='${_id}'>
        <img class='reviews-photo' src='${avatar_url}' alt='photo of ${author}'>
        <h3 class='reviews-author-name'>${author}</h3>
        <p class='author-review'>${review}</p>
=======
      <li class='review-item swiper-slide' id='${_id}'>
        <img class='review-author-photo' src='${avatar_url}' alt='author photo'>
        <h3 class='review-author-name'>${author}</h3>
        <p class='review-text'>${review}</p>
>>>>>>> Stashed changes
      </li>
    `).join('');

    reviewList.insertAdjacentHTML('beforeend', reviewHtml);
    setupSwiper();
  } catch (error) {
<<<<<<< Updated upstream
    reviewsList.textContent = 'Review data is not available'; 
    console.error('Error in renderReviews:', error.message); 
=======
    // Error handled in fetchReviews(), so nothing needed here
>>>>>>> Stashed changes
  }
}


renderReviews();



// import axios from 'axios';
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation, Mousewheel, Keyboard} from 'swiper/modules';


// const reviewsList = document.querySelector('.reviews-list');


// const REVIEWS_API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

// async function fetchReviews() {
//   try {
//     const response = await axios.get(REVIEWS_API_URL); 
//     if (response.data.length === 0) {
//       throw new Error('No reviews to display'); 
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch reviews:', error); 
//     throw new Error('Failed to fetch reviews');
//   }
// }

// function setupSwiper() {
//   return new Swiper('.swiper', {
//     modules: [Navigation, Mousewheel, Keyboard],
//     watchOverflow: true,
//     navigation: {
//       nextEl: '.right-btn',
//       prevEl: '.left-btn',
//     },
//     mousewheel: {
//       invert: false, 
//     },
//     keyboard: {
//       enabled: true,        
//       onlyInViewport: true, 
//     },
//     direction: 'horizontal',
//     slidesPerView: 1,
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 16,
//       },
//       1440: {
//         slidesPerView: 4,
//         spaceBetween: 16,
//       },
//     },
//   });
// }

// async function renderReviews() {
//   try {
//     const data = await fetchReviews();
//     const reviewHtml = data.map(({ _id, avatar_url, author, review }) => `
//       <li class='reviews-item swiper-slide' id='${_id}'>
//         <img class='reviews-photo' src='${avatar_url}' alt='photo'>
//         <h3 class='reviews-author-name'>${author}</h3>
//         <p class='author-review'>${review}</p>
//       </li>
//     `).join('');

//     reviewsList.insertAdjacentHTML('beforeend', reviewHtml);
//     setupSwiper();
//   } catch (error) {
//     reviewsList.textContent = 'Not found'; 
//     console.error(error.message); 
//   }
// }

// renderReviews();
