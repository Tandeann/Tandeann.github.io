if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>c(e,r),a={module:{uri:r},exports:f,require:s};i[r]=Promise.all(n.map((e=>a[e]||s(e)))).then((e=>(o(...e),f)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"514.bundle.js",revision:"0aa4ff1b852cf4fc5c5408129a666f96"},{url:"app.bundle.js",revision:"7b63fa9e7479cafd7b946d93b9f87d1c"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"c5f77cc3a4e4172b94fe8a15f2cf3b53"},{url:"icons/apple-icon-192x192.png",revision:"0f94ebda846d77484ab7da5ab032fadd"},{url:"icons/icon-128x128.png",revision:"6cf65403537cf28af5a4686244d32c0a"},{url:"icons/icon-144x144.png",revision:"2334ee053ffddd6f06c2ccfb7a96375f"},{url:"icons/icon-152x152.png",revision:"2ca1ca6807611448f8915314a2d1a252"},{url:"icons/icon-192x192.png",revision:"6e34f2cfc6eb4686e06c704ab7ae408f"},{url:"icons/icon-384x384.png",revision:"2f10c44ccbf91117c36e0c7c2884f644"},{url:"icons/icon-512x512.png",revision:"b4b4344553709c106e40b519c4c2f42d"},{url:"icons/icon-72x72.png",revision:"ecfc1351adaa3b78cbffdee7da905b94"},{url:"icons/icon-96x96.png",revision:"7f58cc331be3da179e93279950ae91f9"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/logo.png",revision:"53a25571a3f061d3cabd5985d0fc1a43"},{url:"index.html",revision:"9407cf9c65b38b9e7b1df84c10b2b354"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
