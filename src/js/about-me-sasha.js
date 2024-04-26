import Accordion from 'accordion-js';

document.querySelectorAll('.about-arrow').forEach(arrow => {
  arrow.addEventListener('click', function () {
    const container = this.parentElement; // Батьківський елемент '.about-container'
    container.classList.toggle('active'); // Перемикання класу 'active'
    const panel = container.nextElementSibling; // Пошук наступного елемента, який є текстовим списком
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
