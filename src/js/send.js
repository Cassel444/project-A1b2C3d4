import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const STORAGE_KEY = 'feedback-form-state';
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

const form = document.querySelector('.footer-wrap-form');
const emailInput = form.querySelector('.footer-form');
const textarea = form.querySelector('.footer-textarea');
const modalSend = document.querySelector('.footer-backdrop');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', handleSubmit);
modalSend.addEventListener('click', closeModal);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalSend.classList.add('is-hidden');
  }
});

textarea.addEventListener('blur', function () {
  const maxLength = 25;
  if (this.value.length > maxLength) {
    const truncatedValue = this.value.slice(0, this.maxLength);
    this.value = truncatedValue + '...';
  }
});
textarea.addEventListener('focus', function () {
  if (this.value.endsWith('...')) {
    this.value = this.value.slice(0, -3);
  }
});

savedUnSubmit();
function savedUnSubmit() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const { email, message } = JSON.parse(savedForm);
    emailInput.value = email || '';
    textarea.value = message || '';
  }
}

function closeModal(event) {
  const target = event.target;
  if (
    target.classList.contains('footer-backdrop') ||
    target.classList.contains('footer-close-icon')
  ) {
    modalSend.classList.add('is-hidden');
  }
}

async function handleSubmit(event) {
  try {
    event.preventDefault();
    if (emailInput.value === '' || textarea.value === '') {
      return iziToast.error({
        title: 'Error',
        message: 'Please fill out all forms',
        position: 'topRight',
      });
    }
    const savedForm = {
      email: emailInput.value.trim(),
      comment: textarea.value.trim(),
    };
    await postData({
      email: savedForm.email,
      comment: savedForm.comment,
    });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();

    modalSend.classList.remove('is-hidden');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Oops! Something broke on the server, please try again later',
      position: 'topRight',
    });
  }
}

function postData(data) {
  try {
    return fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.status || response.statusText);
      }
      return response.json();
    });
  } catch (error) {
    console.log(error);
  }
}

function onInputChange() {
  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  const savedForm = {
    email: email,
    message: message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
}
