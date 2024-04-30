const rootStyle = document.documentElement.style;
const heroTheme = document.querySelector('.hero-section');
const dropdown = document.querySelector('.place-for-button');
const buttonDrop = document.querySelector('.color-change-button');
const changerColor = document.querySelector('.items-colors');

buttonDrop.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

changerColor.addEventListener('click', changeTheme);

function changeTheme(event) {
  if (event.target.nodeName != 'LI') {
    return;
  } else {
    const newColor = event.target.getAttribute('value-color');
    const newHover = event.target.getAttribute('value-hover');

    rootStyle.setProperty('--change-color', `#${newColor}`);
    rootStyle.setProperty('--hover-color', `#${newHover}`);

    if (window.screen.width >= 1440) {
      heroTheme.animate(
        [
          { transform: 'translateX(0px) ', opacity: '100%' },
          { transform: 'translateX(-30px)', opacity: '0%' },
        ],
        {
          duration: 300,
          fill: 'both',
          timingFunction: 'ease-in-out',
        }
      );
      setTimeout(() => {
        heroTheme.style.backgroundImage = `url('../img/Hero-BG/${newColor}@1x.png')`;
        heroTheme.animate(
          [
            { transform: 'translateX(-30px)', opacity: '0%' },
            { transform: 'translateX(0px) ', opacity: '100%' },
          ],
          {
            delay: 305,
            duration: 1000,
            fill: 'both',
            easing: 'ease-out   ',
          }
        );
      }, 601);
    }
  }
}
