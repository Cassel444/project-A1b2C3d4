import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    showMultiple: false,
    openOnInit: [0],
    duration: 500,
  });
});
