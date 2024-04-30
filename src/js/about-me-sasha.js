import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-accordion-container', {
    duration: 500,
    ariaEnabled: true,
    collapse: true,
    showMultiple: false,
    onlyChildNodes: true,
    openOnInit: [0],
    elementClass: 'about-ac', // оновлений клас елементів
    triggerClass: 'about-ac-trigger', // оновлений клас кнопки тригера
    panelClass: 'about-ac-panel', // оновлений клас панелі
    activeClass: 'about-is-active', // оновлений клас активного стану
    beforeOpen: currElement => {
      console.log('Перед відкриттям:', currElement);
    },
    onOpen: currElement => {
      console.log('Відкрито:', currElement);
    },
    beforeClose: currElement => {
      console.log('Перед закриттям:', currElement);
    },
    onClose: currElement => {
      console.log('Закрито:', currElement);
    },
  });
});
