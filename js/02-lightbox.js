import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let galleryString = "";

galleryItems.forEach(image => {
    galleryString +=   
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
    </li>`;
});

gallery.innerHTML = galleryString;

let instance = new SimpleLightbox('.gallery a', 
    {
        captionsData: "alt",
        captionDelay: 250,
        disableScroll: false,
    }
);


