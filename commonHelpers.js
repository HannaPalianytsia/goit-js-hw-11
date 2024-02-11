import{i as u,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery")};function f(o){const n="https://pixabay.com/api/?key="+"42305784-5d55228baaa9a6392a5b2668b"+"&q="+o+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(n).then(i=>i.json())}function m(o){const r=o.hits;r.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(r)}function h(o){const r=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:c,downloads:l})=>`<li class="gallery-item">
        <a href="${i}">
          <img src="${n}" alt="${e}" title="${e}"/>
          <ul>
            <li>
              <h3>Likes</h3>
              <p>${t}</p>
            </li>
            <li>
              <h3>Vievs</h3>
              <p>${s}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${c}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${l}</p>
            </li>
          </ul>
        </a></li>`).join("");a.gallery.innerHTML=r}function d(o){o.preventDefault(),a.gallery.innerHTML="";const r=a.input.value.trim();r!==""&&f(r).then(m).catch()}a.form.addEventListener("submit",d);new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
