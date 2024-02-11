import { refs } from "./js/refs";
import { onFormSubmit } from "./js/onFormSubmit";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



refs.form.addEventListener("submit", onFormSubmit);

let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});