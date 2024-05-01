const footerContacts = document.querySelectorAll('.footer-contact');
const orderProjectBtn = document.querySelectorAll('.benefits-btn');
const aboutMeSlide = document.querySelectorAll('.btn-slide-right');

footerContacts.forEach(contact => {
  contact.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = contact;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (offsetX - centerX) / centerX;
    const deltaY = (offsetY - centerY) / centerY;

    const shadowX = deltaX * 20;
    const shadowY = deltaY * 20;

    contact.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(166, 166, 166, 0.2)`;
  });

  contact.addEventListener('mouseleave', () => {
    contact.style.boxShadow = 'none';
  });
});

orderProjectBtn.forEach(button => {
  button.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = button;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (offsetX - centerX) / centerX;
    const deltaY = (offsetY - centerY) / centerY;

    const shadowX = deltaX * 20;
    const shadowY = deltaY * 20;

    button.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(166, 166, 166, 0.2)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
  });
});

aboutMeSlide.forEach(button => {
  button.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = button;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (offsetX - centerX) / centerX;
    const deltaY = (offsetY - centerY) / centerY;

    const shadowX = deltaX * 20;
    const shadowY = deltaY * 20;

    button.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(166, 166, 166, 0.2)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
  });
});
