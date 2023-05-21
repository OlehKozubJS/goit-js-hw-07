import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let galleryString = "";

galleryItems.forEach(image => {
    galleryString +=   
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </li>`;
});

gallery.innerHTML = galleryString;

gallery.addEventListener("click", showModal);

let instance;

function showModal(event) {
    event.preventDefault();

    if (event.target.className === "gallery__image") {      
        instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`,
            {
                onShow: () => {
                    document.addEventListener("keydown", hideModal);
                },
                onClose: () => {
                    document.removeEventListener("keydown", hideModal);
                }
            }
        );
        instance.show();
    }
}

function hideModal(event) {
    if (event.key === "Escape") {
        instance.close();
    }
}
