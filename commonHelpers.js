import{A as f}from"./assets/vendor-c6ca0da5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){new f(".accordion-container",{showMultiple:!1,openOnInit:[0],duration:500})});const a=document.getElementById("covers-section"),p=a.querySelector(".cover-list");p.style.display="none";function h(s,i){let r=new Set;for(;r.size<i;)r.add(Math.floor(Math.random()*s));return Array.from(r)}function y(){const s=a.querySelectorAll(".cover-list-item"),i=document.createElement("div");i.className="gallery-wrapper";const r=document.createElement("div");r.className="gallery-box";const c=document.createElement("div");c.id="gallery";const e=[];for(let t=0;t<5;t++){const n=document.createElement("div");n.className="gallery-row",h(s.length,9).forEach(m=>{const u=s[m].cloneNode(!0);n.appendChild(u)}),e.push(n),c.appendChild(n)}e.forEach(t=>{t.classList.add("animate-right")}),r.appendChild(c),i.appendChild(r),a.appendChild(i);function o(t){const n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function l(){o(a)&&d()}l(),window.addEventListener("scroll",l);function d(){e.forEach(t=>{t.style.animationPlayState="running",t.addEventListener("animationend",()=>{t.style.animationPlayState="paused",t.style.transform="translateX(0)";const n=t.querySelector(".cover-list-item:first-child");n.offsetLeft+n.offsetWidth<0&&(t.appendChild(n.cloneNode(!0)),t.removeChild(n))})})}}y();
//# sourceMappingURL=commonHelpers.js.map