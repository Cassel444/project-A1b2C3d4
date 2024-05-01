import{A as I,a as M,i as y,S as w,N as E,M as b,K as L,b as O}from"./assets/vendor-6bb11adb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const A=document.querySelector(".backdrop"),N=document.querySelector(".open-menu-btn"),V=document.querySelector(".modal-close-btn"),H=document.querySelector(".navi-modal-wrapper"),R=document.querySelector(".navi"),$=document.querySelector(".menu"),T=document.querySelector(".nav-wrapper");N.addEventListener("click",S);V.addEventListener("click",S);H.addEventListener("click",S);$.addEventListener("click",P);T.addEventListener("click",P);function S(){A.classList.toggle("is-open"),document.body.classList.toggle("modal-open")}function P(){R.classList.toggle("is-open")}const q=document.documentElement.style;document.querySelector(".hero-section");const W=document.querySelector(".place-for-button"),X=document.querySelector(".color-change-button"),Y=document.querySelector(".items-colors");X.addEventListener("click",()=>{W.classList.toggle("active")});Y.addEventListener("click",B);function B(e){if(e.target.nodeName=="LI"){const t=e.target.getAttribute("value-color"),o=e.target.getAttribute("value-hover");q.setProperty("--change-color",`#${t}`),q.setProperty("--hover-color",`#${o}`)}}document.addEventListener("DOMContentLoaded",function(){new I(".about-accordion-container",{duration:600,openOnInit:[0],elementClass:"about-ac",triggerClass:"about-ac-trigger",panelClass:"about-ac-panel",activeClass:"about-is-active"})});const p=document.getElementById("covers-section"),D=p.querySelector(".cover-list");D.style.display="none";function j(e,t){let o=new Set;for(;o.size<t;)o.add(Math.floor(Math.random()*e));return Array.from(o)}function F(){const e=p.querySelectorAll(".cover-list-item"),t=document.createElement("div");t.className="gallery-wrapper";const o=document.createElement("div");o.className="gallery-box";const a=document.createElement("div");a.id="gallery";const n=[];for(let i=0;i<5;i++){const r=document.createElement("div");r.className="gallery-row",j(e.length,9).forEach(m=>{const k=e[m].cloneNode(!0);r.appendChild(k)}),n.push(r),a.appendChild(r)}n.forEach(i=>{i.classList.add("animate-right")}),o.appendChild(a),t.appendChild(o),p.appendChild(t);function s(i){const r=i.getBoundingClientRect();return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)}function c(){s(p)&&l()}c(),window.addEventListener("scroll",c);function l(){n.forEach(i=>{i.style.animationPlayState="running",i.addEventListener("animationend",()=>{i.style.animationPlayState="paused",i.style.transform="translateX(0)";const r=i.querySelector(".cover-list-item:first-child");r.offsetLeft+r.offsetWidth<0&&(i.appendChild(r.cloneNode(!0)),i.removeChild(r))})})}}F();document.addEventListener("DOMContentLoaded",function(){new I(".faq-list",{duration:600})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".ac-header").forEach(t=>{t.addEventListener("click",function(){const o=this.nextElementSibling,a=this.querySelector(".menu-icon");a&&(o.style.maxHeight!==""?a.classList.remove("menu-icon--open"):a.classList.add("menu-icon--open")),o.style.maxHeight=o.scrollHeight+"px",document.querySelectorAll(".ac-panel").forEach(s=>{if(s!==o){s.style.maxHeight=null;const c=s.previousElementSibling.querySelector(".menu-icon");c&&c.classList.remove("menu-icon--open")}})})})});const z="https://portfolio-js.b.goit.study/api/reviews",C=document.querySelector(".reviews-list");async function U(){try{const e=await M.get(z);if(e.data.length===0)throw new Error("No reviews to display");return e.data}catch(e){throw y.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),console.error("Failed to fetch reviews:",e),e}}function K(){return new w(".swiper-reviews",{modules:[E,b,L],direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!1,navigation:{nextEl:".right-btn",prevEl:".left-btn"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}async function _(){try{const t=(await U()).map(({_id:o,avatar_url:a,author:n,review:s})=>`
      <li class='reviews-item swiper-slide'  id='${o}'>
        <img class='reviews-photo' src='${a}' alt='photo of ${n}'>
        <h3 class='reviews-author-name'>${n}</h3>
        <p class='author-review'>${s}</p>
      </li>
    `).join("");C.insertAdjacentHTML("beforeend",t),K()}catch(e){C.textContent="Not found",console.error("Error in renderReviews:",e.message)}}_();function J(){return new w(".mySwiper",{modules:[E,b,L],direction:"horizontal",speed:500,spaceBetween:50,slidesPerView:"auto",allowTouchMove:!0,navigation:{nextEl:".swiper-btn-right",prevEl:".swiper-btn-left"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}})}J();const d=new w(".skills-container",{modules:[E,b,L],direction:"horizontal",loop:!0,slidesPerView:"auto",speed:500,grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".btn-slide-right"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("red"):t.classList.remove("red")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,o)=>{o===e?t.classList.add("red"):t.classList.remove("red")})}}}),G=document.querySelector(".btn-slide-right");G.addEventListener("click",function(){const e=d.slides.filter(o=>o.isVisible);d.isEnd&&e.length===d.slides.length||e.length===d.slides.lengthVisible?d.slideTo(0):d.slideNext()});const x="feedback-form-state",Q="https://portfolio-js.b.goit.study/api/requests",f=document.querySelector(".footer-wrap-form"),g=f.querySelector(".footer-form"),u=f.querySelector(".footer-textarea"),v=document.querySelector(".footer-backdrop");f.addEventListener("input",ne);f.addEventListener("submit",te);v.addEventListener("click",ee);window.addEventListener("keydown",function(e){e.key==="Escape"&&v.classList.add("is-hidden")});u.addEventListener("blur",function(){if(this.value.length>25){const t=this.value.slice(0,this.maxLength);this.value=t+"..."}});u.addEventListener("focus",function(){this.value.endsWith("...")&&(this.value=this.value.slice(0,-3))});Z();function Z(){const e=localStorage.getItem(x);if(e){const{email:t,message:o}=JSON.parse(e);g.value=t||"",u.value=o||""}}function ee(e){const t=e.target;(t.classList.contains("footer-backdrop")||t.classList.contains("footer-close-icon"))&&v.classList.add("is-hidden")}async function te(e){try{if(e.preventDefault(),g.value===""||u.value==="")return y.error({title:"Error",message:"Please fill out all forms",position:"topRight"});const t={email:g.value.trim(),comment:u.value.trim()};await oe({email:t.email,comment:t.comment}),localStorage.removeItem(x),f.reset(),v.classList.remove("is-hidden")}catch(t){console.log(t)}}function oe(e){try{return fetch(Q,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error(t.status||t.statusText);return t.json()})}catch{y.error({title:"Error",message:"Oops! Something broke on the server, please try again later",position:"topRight"})}}function ne(){const e=g.value.trim(),t=u.value.trim(),o={email:e,message:t};localStorage.setItem(x,JSON.stringify(o))}O.init({duration:1200,once:!0,mirror:!1,easing:"ease-out-cubic",anchorPlacement:"bottom-bottom",offset:-300});const se=document.querySelectorAll(".footer-contact"),ie=document.querySelectorAll(".btn-slide-right");se.forEach(e=>{e.addEventListener("mousemove",t=>{const{offsetX:o,offsetY:a}=t,{offsetWidth:n,offsetHeight:s}=e,c=n/2,l=s/2,i=(o-c)/c,r=(a-l)/l,h=i*20,m=r*20;e.style.boxShadow=`${h}px ${m}px 30px rgba(166, 166, 166, 0.2)`}),e.addEventListener("mouseleave",()=>{e.style.boxShadow="none"})});ie.forEach(e=>{e.addEventListener("mousemove",t=>{const{offsetX:o,offsetY:a}=t,{offsetWidth:n,offsetHeight:s}=e,c=n/2,l=s/2,i=(o-c)/c,r=(a-l)/l,h=i*20,m=r*20;e.style.boxShadow=`${h}px ${m}px 30px rgba(166, 166, 166, 0.2)`}),e.addEventListener("mouseleave",()=>{e.style.boxShadow="none"})});
//# sourceMappingURL=commonHelpers.js.map
