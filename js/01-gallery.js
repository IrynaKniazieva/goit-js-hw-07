import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


//2. Реализация делегирования на div.gallery и получение url большого изображения.

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCard (galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
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

// доступ к картинке, вешаем слушателя на:

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  // отмена действий браузера (переход на новую страницу - отмена)
  evt.preventDefault()

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const currentImgUrl = evt.target.dataset.source;
const instance = basicLightbox.create(`
<img class="modal__image" src="${currentImgUrl}"/>
`);
instance.show();
}
//открыть модалку
function onOpenModal() {
  window.addEventListener('keydown', onEskDown )
}
// закрыть модалку
function onCloseModal() {
  window.removeEventListener('keydown', onEskDown )
}

function onEskDown(evt) {
  const ESC_KEY_CODE = 'Escape'
  const isEscKey = evt.code === ESC_KEY_CODE;
  if(isEscKey) {
    onCloseModal();
  }
}
