const section = document.getElementById('covers-section');
const imageList = section.querySelector('.cover-list');
imageList.style.display = 'none';

function getRandomIndices(limit, count) {
  let indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * limit));
  }
  return Array.from(indices);
}

function createGallery() {
  const imageElements = section.querySelectorAll('.cover-list-item');
  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'gallery-wrapper';

  const galleryBox = document.createElement('div');
  galleryBox.className = 'gallery-box';

  const gallery = document.createElement('div');
  gallery.id = 'gallery';

  const rows = [];

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'gallery-row';
    const randomIndices = getRandomIndices(imageElements.length, 9);

    randomIndices.forEach(index => {
      const imageClone = imageElements[index].cloneNode(true);
      row.appendChild(imageClone);
    });

    rows.push(row);
    gallery.appendChild(row);
  }

  rows.forEach(row => {
    row.classList.add('animate-right');
  });

  galleryBox.appendChild(gallery);
  galleryWrapper.appendChild(galleryBox);
  section.appendChild(galleryWrapper);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibilityAndAnimate() {
    if (isElementInViewport(section)) {
      animate();
    }
  }

  checkVisibilityAndAnimate();

  window.addEventListener('scroll', checkVisibilityAndAnimate);

  function animate() {
    rows.forEach(row => {
      row.style.animationPlayState = 'running';
      row.addEventListener('animationend', () => {
        row.style.animationPlayState = 'paused';
        row.style.transform = 'translateX(0)';
        const firstItem = row.querySelector('.cover-list-item:first-child');
        if (firstItem.offsetLeft + firstItem.offsetWidth < 0) {
          row.appendChild(firstItem.cloneNode(true));
          row.removeChild(firstItem);
        }
      });
    });
  }
}

createGallery();
