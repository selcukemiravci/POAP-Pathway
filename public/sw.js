if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Thirdweb-Icon-Circle-Black-08 1.png",revision:"b4dc1d2087b1265d650d499abe7a4571"},{url:"/_next/static/chunks/1119.d2d26e806c02bd5e.js",revision:"d2d26e806c02bd5e"},{url:"/_next/static/chunks/1163.d9d896085e00571f.js",revision:"d9d896085e00571f"},{url:"/_next/static/chunks/1373.34c8cc847b04aa10.js",revision:"34c8cc847b04aa10"},{url:"/_next/static/chunks/1626.391749041c66c940.js",revision:"391749041c66c940"},{url:"/_next/static/chunks/1675.ae51ae0cc2e6c840.js",revision:"ae51ae0cc2e6c840"},{url:"/_next/static/chunks/1706.111c9d363056e41e.js",revision:"111c9d363056e41e"},{url:"/_next/static/chunks/1730.a1cd0adfb2ccc996.js",revision:"a1cd0adfb2ccc996"},{url:"/_next/static/chunks/1830.1e5c4fbecb616f7b.js",revision:"1e5c4fbecb616f7b"},{url:"/_next/static/chunks/2024.5c677db1fb431a8e.js",revision:"5c677db1fb431a8e"},{url:"/_next/static/chunks/215.e2df1ebcfe557ce1.js",revision:"e2df1ebcfe557ce1"},{url:"/_next/static/chunks/2264.b4a3b5cc0c1fd8d9.js",revision:"b4a3b5cc0c1fd8d9"},{url:"/_next/static/chunks/2328.6118322762883c04.js",revision:"6118322762883c04"},{url:"/_next/static/chunks/2405.6c6f10aef46cdd45.js",revision:"6c6f10aef46cdd45"},{url:"/_next/static/chunks/2532.84a1a40a640b65c7.js",revision:"84a1a40a640b65c7"},{url:"/_next/static/chunks/2610.b1d3457c33240875.js",revision:"b1d3457c33240875"},{url:"/_next/static/chunks/2692.c12409aa2fa66212.js",revision:"c12409aa2fa66212"},{url:"/_next/static/chunks/2785.f9428f550e297d0f.js",revision:"f9428f550e297d0f"},{url:"/_next/static/chunks/2806.ce4cc8fe355be346.js",revision:"ce4cc8fe355be346"},{url:"/_next/static/chunks/2876.1a04a3b4c6aacf36.js",revision:"1a04a3b4c6aacf36"},{url:"/_next/static/chunks/3028.534a66ceaa897ba7.js",revision:"534a66ceaa897ba7"},{url:"/_next/static/chunks/3046.a6f98dd3f8a307d3.js",revision:"a6f98dd3f8a307d3"},{url:"/_next/static/chunks/3199.4029b01edd9cacd7.js",revision:"4029b01edd9cacd7"},{url:"/_next/static/chunks/337d5454.22bfc054f210521f.js",revision:"22bfc054f210521f"},{url:"/_next/static/chunks/3565.fb5464bf14b9a14e.js",revision:"fb5464bf14b9a14e"},{url:"/_next/static/chunks/3792.dfb3265844df1f74.js",revision:"dfb3265844df1f74"},{url:"/_next/static/chunks/4247.4043c6e5bac6b5be.js",revision:"4043c6e5bac6b5be"},{url:"/_next/static/chunks/44.96d1e066598b98a5.js",revision:"96d1e066598b98a5"},{url:"/_next/static/chunks/4506.bfe29b5281fd9412.js",revision:"bfe29b5281fd9412"},{url:"/_next/static/chunks/4619.6872f1f31918be3e.js",revision:"6872f1f31918be3e"},{url:"/_next/static/chunks/4737.4120595152715042.js",revision:"4120595152715042"},{url:"/_next/static/chunks/5163.90c9738b3a0044c6.js",revision:"90c9738b3a0044c6"},{url:"/_next/static/chunks/5236.07e838469b8d259e.js",revision:"07e838469b8d259e"},{url:"/_next/static/chunks/5442.de2fc08fce4f278d.js",revision:"de2fc08fce4f278d"},{url:"/_next/static/chunks/5811.ceb1f34b7148d112.js",revision:"ceb1f34b7148d112"},{url:"/_next/static/chunks/5844.86a70b9a4ef26fe4.js",revision:"86a70b9a4ef26fe4"},{url:"/_next/static/chunks/6044.c704236c2cfe1f19.js",revision:"c704236c2cfe1f19"},{url:"/_next/static/chunks/6164.c16a1412c44063ff.js",revision:"c16a1412c44063ff"},{url:"/_next/static/chunks/6523.a005c1f8e9ee47f3.js",revision:"a005c1f8e9ee47f3"},{url:"/_next/static/chunks/6715.223f9cd732c7ff8a.js",revision:"223f9cd732c7ff8a"},{url:"/_next/static/chunks/6942.c08085427c39966c.js",revision:"c08085427c39966c"},{url:"/_next/static/chunks/7396.b31f51385e6f3c4d.js",revision:"b31f51385e6f3c4d"},{url:"/_next/static/chunks/7482.3eb7b10ffc9886d7.js",revision:"3eb7b10ffc9886d7"},{url:"/_next/static/chunks/7611.644417868663e7d0.js",revision:"644417868663e7d0"},{url:"/_next/static/chunks/7652.8c2df55e68488cf7.js",revision:"8c2df55e68488cf7"},{url:"/_next/static/chunks/7891.dc7891aa6add1107.js",revision:"dc7891aa6add1107"},{url:"/_next/static/chunks/7958.787a5d0a106bc3be.js",revision:"787a5d0a106bc3be"},{url:"/_next/static/chunks/807.b70242126303c9d5.js",revision:"b70242126303c9d5"},{url:"/_next/static/chunks/8110.a315ece2430152e5.js",revision:"a315ece2430152e5"},{url:"/_next/static/chunks/8692.1c2aca723460daff.js",revision:"1c2aca723460daff"},{url:"/_next/static/chunks/8715.fec6acdd126a6486.js",revision:"fec6acdd126a6486"},{url:"/_next/static/chunks/8777.049cc6d93d6c5f29.js",revision:"049cc6d93d6c5f29"},{url:"/_next/static/chunks/8872.e260faabb8decff6.js",revision:"e260faabb8decff6"},{url:"/_next/static/chunks/902.7a7d003e3f825d8b.js",revision:"7a7d003e3f825d8b"},{url:"/_next/static/chunks/9291.f7bd59b1226b8fbb.js",revision:"f7bd59b1226b8fbb"},{url:"/_next/static/chunks/9343.c49d8a7a47267493.js",revision:"c49d8a7a47267493"},{url:"/_next/static/chunks/9351.85babb9c5aac3f31.js",revision:"85babb9c5aac3f31"},{url:"/_next/static/chunks/9498.dad8f8c90dba952a.js",revision:"dad8f8c90dba952a"},{url:"/_next/static/chunks/9557.420b09119e335917.js",revision:"420b09119e335917"},{url:"/_next/static/chunks/9695.81b72fba752318cc.js",revision:"81b72fba752318cc"},{url:"/_next/static/chunks/981.38e383ec79d95f8e.js",revision:"38e383ec79d95f8e"},{url:"/_next/static/chunks/fb7d5399.6e516f716fb199a1.js",revision:"6e516f716fb199a1"},{url:"/_next/static/chunks/framework-ca706bf673a13738.js",revision:"ca706bf673a13738"},{url:"/_next/static/chunks/main-30e976abbf41cbf0.js",revision:"30e976abbf41cbf0"},{url:"/_next/static/chunks/pages/_error-2455c9d048a4b9a2.js",revision:"2455c9d048a4b9a2"},{url:"/_next/static/chunks/pages/index-02044323ea4041ac.js",revision:"02044323ea4041ac"},{url:"/_next/static/chunks/pages/nfts-cfdd79ed86f46486.js",revision:"cfdd79ed86f46486"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3669c6a9aca7c567.js",revision:"3669c6a9aca7c567"},{url:"/_next/static/css/f7a4062eaeda89a5.css",revision:"f7a4062eaeda89a5"},{url:"/_next/static/dGXE1REp2qYPpVyFnaNAK/_buildManifest.js",revision:"3d5b4cd596579b125636c62f08320d3c"},{url:"/_next/static/dGXE1REp2qYPpVyFnaNAK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/app-icon.png",revision:"10e0dbc8d6ed439f9b30ea657a98e037"},{url:"/claim-icon.png",revision:"58f639ce485f514079c29370fa7db9b0"},{url:"/favicon.ico",revision:"c2bdab8da799dc162c7745978faf12bf"},{url:"/icon-192x192.png",revision:"500b4f1689e42aa25a8506325326362e"},{url:"/icon-256x256.png",revision:"611d7592f9ffb7304bce61db02d6f23b"},{url:"/icon-384x384.png",revision:"7ac38643f76299e9eedb01f895cdafc2"},{url:"/icon-512x512.png",revision:"97fa3fc0e5451ea734c1b3ac2a089333"},{url:"/images/dashboard-preview.png",revision:"9d22940d2b458959142478c481461c88"},{url:"/images/portal-preview.png",revision:"4fadd20918f9c17cb4de950c688577c9"},{url:"/images/templates-preview.png",revision:"e12b67177a32762b90ed6ad86bbe94c3"},{url:"/manifest.json",revision:"805f48e59f752f718aae1a72f6ff639a"},{url:"/nft-icon.png",revision:"31f376931aadf7277f173701622bcb34"},{url:"/profile-icon.png",revision:"ef5f7a26ea1888b98c982a503e5298ec"},{url:"/thirdweb.svg",revision:"128e36409b1eb9d53937ef095acbea37"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
