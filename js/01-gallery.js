import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems.map((galleryItem) => `<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
<img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source= "${galleryItem.original}"
    alt="${galleryItem.description}"
/>
</a>
</div>`).join("");
gallery.innerHTML = galleryItem;
gallery.addEventListener("click", (event) =>
{
    event.preventDefault();

    const target = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`<img src="${target}" width="800" height="600">`);

    instance.show();

    gallery.addEventListener('keydown', (e) => {
        if (e['key'] === 'Escape') {
            instance.close();
        }
    })
});