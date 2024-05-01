const BG_Object = [
  { color: 'ed3b44', url: '../img/Hero-BG/ed3b44@1x.png' },
  { color: 'c6e327', url: '../img/Hero-BG/c6e327@1x.png' },
  { color: '0041e8', url: '../img/Hero-BG/0041e8@1x.png' },
  { color: 'e6533c', url: '../img/Hero-BG/e6533c@1x.png' },
  { color: '2b4441', url: '../img/Hero-BG/2b4441@1x.png' },
  { color: 'ff7f08', url: '../img/Hero-BG/ff7f08@1x.png' },
];
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

const loadedImages = await Promise.all(
  BG_Object.map(obj => loadImage(obj.url))
);

const imageMap = BG_Object.reduce((acc, obj, index) => {
  acc[obj.color] = loadedImages[index];
  return acc;
}, {});

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
        const newImage = imageMap[newColor];
        heroTheme.style.backgroundImage = `url(${newImage.src})`;
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
