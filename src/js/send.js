import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

// зберігання форми
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.footer-wrap-form');
const emailInput = form.querySelector('.footer-form');
const textarea = form.querySelector('.footer-textarea');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', handleSubmit);

populateForm();

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields before submitting.');
    return;
  }

  const formData = {
    email: email,
    message: message,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onInputChange() {
  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  const savedForm = {
    email: email,
    message: message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));

  // Виконуємо POST-запит на сервер за допомогою Axios
  axios
    .post('https://portfolio-js.b.goit.study/api', savedForm)
    .then(response => {
      console.log('Дані успішно відправлені на сервер:', response.data);
      // Додайте будь-які інші дії, які вам потрібно виконати після успішного відправлення даних
    })
    .catch(error => {
      console.error('Помилка під час відправки даних на сервер:', error);
      // Додайте будь-які інші дії, які вам потрібно виконати у випадку помилки
    });
}
//   fetch('https://portfolio-js.b.goit.study/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Додайте будь-які інші заголовки, які можуть бути потрібні для вашого API
//     },
//     body: JSON.stringify(savedForm),
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Дані успішно відправлені на сервер:', data);
//       // Додайте будь-які інші дії, які вам потрібно виконати після успішного відправлення даних
//     })
//     .catch(error => {
//       console.error('Помилка під час відправки даних на сервер:', error);
//       // Додайте будь-які інші дії, які вам потрібно виконати у випадку помилки
//     });
// }

function populateForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const { email, message } = JSON.parse(savedForm);
    emailInput.value = email || '';
    textarea.value = message || '';
  }
}

// запуск повідомлення

// const sendBtm = form.querySelector('.footer-submit-btn');

// form.addEventListener('click', function (event) {
//   event.preventDefault();
//   const target = event.target;
//   if (target.classList.contains('footer-submit-btn')) {
//     const imageUrl = target.dataset.source;
//     const instance = SimpleLightbox.create(`<div>
//     <h2>Thank you for your interest in cooperation!</h2>
//       <p>The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
//     </div>`);
//     instance.show();
//     document.addEventListener('keydown', function (event) {
//       if (event.key === 'Escape' && instance) {
//         instance.close();
//       }
//     });
//   }
// });

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });
