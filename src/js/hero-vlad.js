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
  }
}
