import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./refs";



export function checkFunction(userData) {
    const userArray = userData.hits;
    if (userArray.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        });
    } else {
        renderFunction(userArray);
    }
};

function renderFunction(userArray) {
    const markup = userArray.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
        <a href="${webformatURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}"/>
            <ul>
        <li>
          <h3>Likes</h3>
          <p>${likes}</p>
        </li>
        <li>
          <h3>Vievs</h3>
          <p>${views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${downloads}</p>
        </li>
      </ul>
        </a></li>`
    }).join("");
    refs.gallery.innerHTML = markup;
};