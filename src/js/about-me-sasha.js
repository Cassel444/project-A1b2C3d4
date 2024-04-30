import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-accordion-container', {
    duration: 600,
    openOnInit: [0],
    elementClass: 'about-ac',
    triggerClass: 'about-ac-trigger',
    panelClass: 'about-ac-panel',
    activeClass: 'about-is-active',
  });
});
