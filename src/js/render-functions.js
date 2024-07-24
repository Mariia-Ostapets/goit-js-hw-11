export function renderGallery(images) {
    const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = images.map(image => `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </li>
  `).join('');
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}