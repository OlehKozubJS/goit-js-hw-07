import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelector(".gallery__item").outerHTML;

let galleryString = "";

let images = [
{
large: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
alt: "Hokkaido Flower",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
alt: "Container Haulage Freight",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
alt: "Aerial Beach View",
},

{
large: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
small: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
alt: "Flower Blooms",
},

{
large: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
small: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
alt: "Alpine Mountains",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
alt: "Mountain Lake Sailing",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
alt: "Alpine Spring Meadows",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
alt: "Nature Landscape",
},

{
large: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
small: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
alt: "Lighthouse Coast Sea",
},
];

images.forEach(image => {
    let newGalleryItem = galleryItem.replaceAll("large-image.jpg", image.large);
    newGalleryItem = newGalleryItem.replace("small-image.jpg", image.small);
    newGalleryItem = newGalleryItem.replace("Image description", image.alt);
    galleryString += newGalleryItem; 
});

gallery.innerHTML = galleryString;

gallery.addEventListener("click", showBigImage);
document.addEventListener("keydown", showBigImage);

let instance;

function showBigImage(event) {
    if (event.type === "click" && event.target.className === "gallery__image") {      
        instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);

        instance.show();
    }

    if (event.type === "keydown" && event.key === "Escape") {
        instance.close();
    }
}

