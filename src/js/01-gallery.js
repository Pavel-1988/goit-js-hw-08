import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const сontainerGallary = document.querySelector('.gallery')

function createGallary (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            
             />
        </a>
        `
    })  .join('')
}

const markup = createGallary(galleryItems);
сontainerGallary.insertAdjacentHTML('beforeend', markup)

let options = {
    captionsData: 'alt',
    captionDelay:250,
}

let gallery = new SimpleLightbox('.gallery a',  options )

