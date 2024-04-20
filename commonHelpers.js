import{a as d}from"./assets/vendor-34f890c2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function u(){const{data:e}=await d("https://dummyjson.com/recipes");return e}async function m(e){const{data:i}=await d(`https://dummyjson.com/recipes/${e}`);return i}const s={recipeList:document.querySelector(".recipe-list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal")};function f(){s.backdrop.classList.remove("is-hidden")}function y(){s.backdrop.classList.add("is-hidden")}function g(e){const i=e.map(({image:o,id:c})=>`<li class="recipe-card">
  <img src="${o}" alt="" data-id="${c}">
</li>`).join("");s.recipeList.insertAdjacentHTML("beforeend",i)}function h({name:e,ingredients:i,instructions:o,cookTimeMinutes:c,servings:t,difficulty:r,image:n},l){const p=`<div class="modal">
  <div class="modal-img"><img src="${n}" alt="${e}" /></div>
  <div class="modal-description">
    <h3 class="modal-title">Name: ${e}</h3>
    <p class="modal-chapter">Ingredients:</p>
    <ul class="modal-chapter-text">${i.map(a=>`<li>${a}</li>`).join("")}</ul>
    <p class="modal-chapter">Instructions:</p>
    <ul class="modal-chapter-text">${o.map(a=>`<li>${a}</li>`).join("")}</ul>
    <span> Cook Time: ${c} </span>
    <span>Servings: ${t}</span>
    <span>Difficulty: ${r}</span>
  </div>
</div>`;l.innerHTML=p}async function L(e){if(e.target.nodeName!=="IMG")return;f();const i=e.target.dataset.id,o=await m(i);h(o,s.modal)}function v(e){e.target===e.currentTarget&&y()}document.addEventListener("DOMContentLoaded",async()=>{const{recipes:e}=await u();console.log(e),g(e)});s.recipeList.addEventListener("click",L);s.backdrop.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
