import redBG from '../img/Hero-BG/ed3b44@1x.png';
import yellowBG from '../img/Hero-BG/c6e327@1x.png';
import blueBG from '../img/Hero-BG/0041e8@1x.png';
import pinkBG from '../img/Hero-BG/e6533c@1x.png';
import grayBG from '../img/Hero-BG/2b4441@1x.png';
import orangeBG from '../img/Hero-BG/ff7f08@1x.png';

const BG_Object = [
  { color: 'ed3b44', image: redBG },
  { color: 'c6e327', image: yellowBG },
  { color: '0041e8', image: blueBG },
  { color: 'e6533c', image: pinkBG },
  { color: '2b4441', image: grayBG },
  { color: 'ff7f08', image: orangeBG },
];
console.log(BG_Object);

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
        const newBG = BG_Object.find(obj => obj.color == newColor);
        heroTheme.style.backgroundImage = `url(${newBG.image})`;
        heroTheme.animate(
          [
            { transform: 'translateX(-30px)', opacity: '0%' },
            { transform: 'translateX(0px) ', opacity: '100%' },
          ],
          {
            delay: 705,
            duration: 1000,
            fill: 'both',
            easing: 'ease-out   ',
          }
        );
      }, 601);
    }
  }
}
