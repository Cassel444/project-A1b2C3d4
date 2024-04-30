import{A as q,a as P,i as C,S as g,N as w,M as y,K as E}from"./assets/vendor-595f3b56.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const k=document.querySelector(".backdrop"),O=document.querySelector(".open-menu-btn"),V=document.querySelector(".modal-close-btn"),N=document.querySelector(".navi-modal-wrapper"),A=document.querySelector(".navi"),R=document.querySelector(".menu"),H=document.querySelector(".nav-wrapper");O.addEventListener("click",L);V.addEventListener("click",L);N.addEventListener("click",L);R.addEventListener("click",I);H.addEventListener("click",I);function L(){k.classList.toggle("is-open")}function I(){A.classList.toggle("is-open")}document.addEventListener("DOMContentLoaded",function(){new q(".accordion-container",{showMultiple:!1,openOnInit:[0],duration:500})});const f=document.getElementById("covers-section"),T=f.querySelector(".cover-list");T.style.display="none";function W(t,e){let n=new Set;for(;n.size<e;)n.add(Math.floor(Math.random()*t));return Array.from(n)}function B(){const t=f.querySelectorAll(".cover-list-item"),e=document.createElement("div");e.className="gallery-wrapper";const n=document.createElement("div");n.className="gallery-box";const a=document.createElement("div");a.id="gallery";const o=[];for(let s=0;s<5;s++){const r=document.createElement("div");r.className="gallery-row",W(t.length,9).forEach(v=>{const M=t[v].cloneNode(!0);r.appendChild(M)}),o.push(r),a.appendChild(r)}o.forEach(s=>{s.classList.add("animate-right")}),n.appendChild(a),e.appendChild(n),f.appendChild(e);function i(s){const r=s.getBoundingClientRect();return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)}function l(){i(f)&&m()}l(),window.addEventListener("scroll",l);function m(){o.forEach(s=>{s.style.animationPlayState="running",s.addEventListener("animationend",()=>{s.style.animationPlayState="paused",s.style.transform="translateX(0)";const r=s.querySelector(".cover-list-item:first-child");r.offsetLeft+r.offsetWidth<0&&(s.appendChild(r.cloneNode(!0)),s.removeChild(r))})})}}B();document.addEventListener("DOMContentLoaded",function(){new q(".faq-list",{showMultiple:!1,toggleElements:!0,duration:500})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(e=>{e.addEventListener("click",function(){const n=this.nextElementSibling,a=this.querySelector(".menu-icon");a&&(n.style.maxHeight!==""?a.classList.remove("menu-icon--open"):a.classList.add("menu-icon--open")),n.style.maxHeight=n.scrollHeight+"px",document.querySelectorAll(".ac-panel").forEach(i=>{if(i!==n){i.style.maxHeight=null;const l=i.previousElementSibling.querySelector(".menu-icon");l&&l.classList.remove("menu-icon--open")}})})})});const j="https://portfolio-js.b.goit.study/api/reviews",x=document.querySelector(".reviews-list");async function D(){try{const t=await P.get(j);if(t.data.length===0)throw new Error("No reviews to display");return t.data}catch(t){throw C.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),console.error("Failed to fetch reviews:",t),t}}function $(){return new g(".swiper",{modules:[w,y,E],direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1},navigation:{nextEl:".right-btn",prevEl:".left-btn"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}async function F(){try{const e=(await D()).map(({_id:n,avatar_url:a,author:o,review:i})=>`
      <li class='reviews-item swiper-slide' id='${n}'>
        <img class='reviews-photo' src='${a}' alt='photo of ${o}'>
        <h3 class='reviews-author-name'>${o}</h3>
        <p class='author-review'>${i}</p>
      </li>
    `).join("");x.insertAdjacentHTML("beforeend",e),$()}catch(t){x.textContent="Review data is not available",console.error("Error in renderReviews:",t.message)}}F();function z(){return new g(".mySwiper",{modules:[w,y,E],direction:"horizontal",speed:500,spaceBetween:50,slidesPerView:"auto",allowTouchMove:!0,navigation:{nextEl:".swiper-btn-right",prevEl:".swiper-btn-left"},mousewheel:{invert:!1},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}})}z();const c=new g(".skills-container",{modules:[w,y,E],direction:"horizontal",loop:!0,slidesPerView:"auto",speed:500,grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".btn-slide-right"},mousewheel:{invert:!1},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){const t=this.activeIndex;this.slides.forEach((e,n)=>{n===t?e.classList.add("red"):e.classList.remove("red")})},slideChange:function(){const t=this.activeIndex;this.slides.forEach((e,n)=>{n===t?e.classList.add("red"):e.classList.remove("red")})}}}),U=document.querySelector(".btn-slide-right");U.addEventListener("click",function(){const t=c.slides.filter(n=>n.isVisible);c.isEnd&&t.length===c.slides.length||t.length===c.slides.lengthVisible?c.slideTo(0):c.slideNext()});const S="feedback-form-state",X="https://portfolio-js.b.goit.study/api/requests",u=document.querySelector(".footer-wrap-form"),h=u.querySelector(".footer-form"),d=u.querySelector(".footer-textarea"),p=document.querySelector(".footer-backdrop");u.addEventListener("input",G);u.addEventListener("submit",_);p.addEventListener("click",K);window.addEventListener("keydown",function(t){t.key==="Escape"&&p.classList.add("is-hidden")});d.addEventListener("blur",function(){if(this.value.length>25){const e=this.value.slice(0,this.maxLength);this.value=e+"..."}});d.addEventListener("focus",function(){this.value.endsWith("...")&&(this.value=this.value.slice(0,-3))});Y();function Y(){const t=localStorage.getItem(S);if(t){const{email:e,message:n}=JSON.parse(t);h.value=e||"",d.value=n||""}}function K(t){const e=t.target;(e.classList.contains("footer-backdrop")||e.classList.contains("footer-close-icon"))&&p.classList.add("is-hidden")}async function _(t){try{if(t.preventDefault(),h.value===""||d.value==="")return alert("Please fill out all forms");const e={email:h.value.trim(),comment:d.value.trim()};await J({email:e.email,comment:e.comment}),localStorage.removeItem(S),u.reset(),p.classList.remove("is-hidden")}catch(e){console.log(e)}}function J(t){try{return fetch(X,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw new Error(e.status||e.statusText);return e.json()})}catch(e){console.log(e),alert("Error! Please enter the data again")}}function G(){const t=h.value.trim(),e=d.value.trim(),n={email:t,message:e};localStorage.setItem(S,JSON.stringify(n))}const Q=document.querySelectorAll(".footer-contact");Q.forEach(t=>{t.addEventListener("mousemove",e=>{const{offsetX:n,offsetY:a}=e,{offsetWidth:o,offsetHeight:i}=t,l=o/2,m=i/2,s=(n-l)/l,r=(a-m)/m,b=s*20,v=r*20;t.style.boxShadow=`${b}px ${v}px 30px rgba(166, 166, 166, 0.2)`}),t.addEventListener("mouseleave",()=>{t.style.boxShadow="none"})});
//# sourceMappingURL=commonHelpers.js.map
