import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


//2. Реализация делегирования на div.gallery и получение url большого изображения.
let instance = null
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
  //модальное окно из библиотеки basicLightbox.
let instance = basicLightbox.create(`
<img class="modal__image" src="${currentImgUrl}"/>
`);
instance.show();
window.addEventListener('keydown', onEskDown);
// закрытие модального клавишей ESC
function onEskDown(evt) {
  const ESC_KEY_CODE = 'Escape'
  const isEscKey = evt.code === ESC_KEY_CODE;
  if(isEscKey) {
    instance.close();
    window.removeEventListener('keydown', onEskDown);
  }
}
}

