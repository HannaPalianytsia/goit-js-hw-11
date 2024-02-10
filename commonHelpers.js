import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery")};function f(o){const i="https://pixabay.com/api/?key="+"42305784-5d55228baaa9a6392a5b2668b"+"&q="+o+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(i).then(n=>n.json())}function p(o){const r=o.hits;r.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(r)}function m(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:l,downloads:u})=>`<li class="gallery-item">
        <a href="${i}">
            <img src="${i}" alt="${e}" title="${e}"/>
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
          <p>${l}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${u}</p>
        </li>
      </ul>
        </a></li>`).join("");c.gallery.innerHTML=r}function d(o){o.preventDefault(),c.gallery.innerHTML="";const r=c.input.value.trim();r!==""&&f(r).then(p)}c.form.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
