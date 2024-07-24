import {fetchGallery} from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchGalleryBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let simpleLightbox;

fetchGalleryBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query === '') {
        iziToast.error({ title: 'Error', message: 'Please enter a search query.' });
        return;
    }
    clearGallery();
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(query);
    loader.classList.add('hidden');
    if (data.hits.length === 0) {
      iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
      return;
    }
    renderGallery(data.hits);
    simpleLightbox = new SimpleLightbox('.gallery a');
    simpleLightbox.refresh();
  } catch (error) {
    loader.classList.add('hidden');
    iziToast.error({ title: 'Error', message: error.message });
  }
});