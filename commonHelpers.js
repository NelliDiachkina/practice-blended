import{a as d}from"./assets/vendor-34f890c2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function u(){const{data:e}=await d("https://dummyjson.com/recipes");return e}async function f(e){const{data:i}=await d(`https://dummyjson.com/recipes/${e}`);return i}const c={recipeList:document.querySelector(".recipe-list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal")};function m(){c.backdrop.classList.remove("is-hidden")}function y(){c.backdrop.classList.add("is-hidden")}function g(e){const i=e.map(({image:n,id:o})=>`<li class="recipe-card">
  <img src="${n}" alt="" data-id="${o}">
</li>`).join("");c.recipeList.insertAdjacentHTML("beforeend",i)}function L({name:e,ingredients:i,instructions:n,cookTimeMinutes:o,servings:t,difficulty:r,image:s},l){const p=`<div>
  <img src="${s}" alt="${e}" />
  <div>
    <h3>Name: ${e}</h3>
    <p>Ingredints:</p>
    <ul>${i.map(a=>`<li>${a}</li>`).join("")}</ul>
    <p>Instructions:</p>
    <ul>${n.map(a=>`<li>${a}</li>`).join("")}</ul>
    <span> Cook Time: ${o} </span>
    <span>Servings: ${t}</span>
    <span>Difficulty: ${r}</span>
  </div>
</div>`;l.innerHTML=p}async function h(e){if(e.target.nodeName!=="IMG")return;m();const i=e.target.dataset.id,n=await f(i);L(n,c.modal)}function $(e){e.target===e.currentTarget&&y()}document.addEventListener("DOMContentLoaded",async()=>{const{recipes:e}=await u();console.log(e),g(e)});c.recipeList.addEventListener("click",h);c.backdrop.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
