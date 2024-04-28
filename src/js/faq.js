import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function() {
  new Accordion('.faq-list', {
    showMultiple: false,
    toggleElements: true,
    duration: 500
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.ac-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      const icon = this.querySelector('.menu-icon');
        
        let isOpen;
      
      if (icon) {
        const isOpen = panel.style.maxHeight !== '';
        
        if (isOpen) {
          icon.classList.remove('menu-icon--open');
        } else {
          icon.classList.add('menu-icon--open');
        }
      }

      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';

      if (!isOpen) {
        const openPanels = document.querySelectorAll('.ac-panel');
        openPanels.forEach(openPanel => {
          if (openPanel !== panel) {
            openPanel.style.maxHeight = null;
            const openIcon = openPanel.previousElementSibling.querySelector('.menu-icon');
            if (openIcon) {
              openIcon.classList.remove('menu-icon--open');
            }
          }
        });
        }
    });
  });
});