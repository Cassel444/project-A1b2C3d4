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
  const gallery = document.createElement('div');
  gallery.id = 'gallery';

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'gallery-row';
    const randomIndices = getRandomIndices(imageElements.length, 3);

    randomIndices.forEach(index => {
      const imageClone = imageElements[index].cloneNode(true);
      row.appendChild(imageClone);
    });

    gallery.appendChild(row);
  }

  section.appendChild(gallery);
}

createGallery();
