if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,a)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.53cd0746fd5749167118.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.8df03fdb329e1381af12.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/main-da7ddaf8437b59311b22.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/pages/_app-a9f93c8273bce453a658.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/pages/_error-754d5a25238aa2a2c086.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/pages/about-2952ee5150d3fad78803.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/pages/index-d9fda8427dc9a1814482.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/css/798c1847bd39c40d92c2.css",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/hSDZEbVMuat9TSxvsz4Vv/_buildManifest.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/_next/static/hSDZEbVMuat9TSxvsz4Vv/_ssgManifest.js",revision:"hSDZEbVMuat9TSxvsz4Vv"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/manifest.json",revision:"ffee64ef098b31ed88bac2a85e7e00ff"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
