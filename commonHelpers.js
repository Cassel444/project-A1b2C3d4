import{A as y}from"./assets/vendor-c6ca0da5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=document.querySelector(".backdrop"),h=document.querySelector(".open-menu-btn"),v=document.querySelector(".modal-close-btn"),E=document.querySelector(".navi-modal-wrapper"),L=document.querySelector(".navi"),w=document.querySelector(".menu"),S=document.querySelector(".nav-wrapper");h.addEventListener("click",a);v.addEventListener("click",a);E.addEventListener("click",a);w.addEventListener("click",u);S.addEventListener("click",u);function a(){g.classList.toggle("is-open")}function u(){L.classList.toggle("is-open")}document.addEventListener("DOMContentLoaded",function(){new y(".accordion-container",{showMultiple:!1,openOnInit:[0],duration:500})});const d=document.getElementById("covers-section"),q=d.querySelector(".cover-list");q.style.display="none";function M(s,i){let r=new Set;for(;r.size<i;)r.add(Math.floor(Math.random()*s));return Array.from(r)}function C(){const s=d.querySelectorAll(".cover-list-item"),i=document.createElement("div");i.className="gallery-wrapper";const r=document.createElement("div");r.className="gallery-box";const c=document.createElement("div");c.id="gallery";const e=[];for(let t=0;t<5;t++){const n=document.createElement("div");n.className="gallery-row",M(s.length,9).forEach(f=>{const p=s[f].cloneNode(!0);n.appendChild(p)}),e.push(n),c.appendChild(n)}e.forEach(t=>{t.classList.add("animate-right")}),r.appendChild(c),i.appendChild(r),d.appendChild(i);function o(t){const n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function l(){o(d)&&m()}l(),window.addEventListener("scroll",l);function m(){e.forEach(t=>{t.style.animationPlayState="running",t.addEventListener("animationend",()=>{t.style.animationPlayState="paused",t.style.transform="translateX(0)";const n=t.querySelector(".cover-list-item:first-child");n.offsetLeft+n.offsetWidth<0&&(t.appendChild(n.cloneNode(!0)),t.removeChild(n))})})}}C();
//# sourceMappingURL=commonHelpers.js.map
