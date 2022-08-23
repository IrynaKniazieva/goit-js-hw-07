import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCard (galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


function createGalleryCard (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }).join(''); 
}

console.log(galleryContainer);