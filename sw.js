if(!self.define){let i,t={};const e=(e,a)=>(e=new URL(e+".js",a).href,t[e]||new Promise((t=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=t,document.head.appendChild(i)}else i=e,importScripts(e),t()})).then((()=>{let i=t[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(a,s)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(t[c])return;let u={};const n=i=>e(i,c),h={module:{uri:c},exports:u,require:n};t[c]=Promise.all(a.map((i=>h[i]||n(i)))).then((i=>(s(...i),u)))}}define(["./workbox-50de5c5d"],(function(i){"use strict";importScripts(),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/POAP-Pathway/Thirdweb-Icon-Circle-Black-08 1.png",revision:"b4dc1d2087b1265d650d499abe7a4571"},{url:"/POAP-Pathway/app-icon.png",revision:"10e0dbc8d6ed439f9b30ea657a98e037"},{url:"/POAP-Pathway/claim-icon.png",revision:"58f639ce485f514079c29370fa7db9b0"},{url:"/POAP-Pathway/favicon.ico",revision:"c2bdab8da799dc162c7745978faf12bf"},{url:"/POAP-Pathway/icon-192x192.png",revision:"500b4f1689e42aa25a8506325326362e"},{url:"/POAP-Pathway/icon-256x256.png",revision:"611d7592f9ffb7304bce61db02d6f23b"},{url:"/POAP-Pathway/icon-384x384.png",revision:"7ac38643f76299e9eedb01f895cdafc2"},{url:"/POAP-Pathway/icon-512x512.png",revision:"97fa3fc0e5451ea734c1b3ac2a089333"},{url:"/POAP-Pathway/images/dashboard-preview.png",revision:"9d22940d2b458959142478c481461c88"},{url:"/POAP-Pathway/images/portal-preview.png",revision:"4fadd20918f9c17cb4de950c688577c9"},{url:"/POAP-Pathway/images/templates-preview.png",revision:"e12b67177a32762b90ed6ad86bbe94c3"},{url:"/POAP-Pathway/manifest.json",revision:"805f48e59f752f718aae1a72f6ff639a"},{url:"/POAP-Pathway/nft-icon.png",revision:"31f376931aadf7277f173701622bcb34"},{url:"/POAP-Pathway/profile-icon.png",revision:"ef5f7a26ea1888b98c982a503e5298ec"},{url:"/POAP-Pathway/thirdweb.svg",revision:"128e36409b1eb9d53937ef095acbea37"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/3-qKWCDyKWB1I8xQyndFk/_buildManifest.js",revision:"9e3e745f6ef0a6995f43ed3dcca26158"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/3-qKWCDyKWB1I8xQyndFk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/105.be3da29459be783b.js",revision:"be3da29459be783b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1063.b6ccd2f08f4f9664.js",revision:"b6ccd2f08f4f9664"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1119.d2d26e806c02bd5e.js",revision:"d2d26e806c02bd5e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1163.ca2d12c1485b7ba4.js",revision:"ca2d12c1485b7ba4"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1281.385c1345a1453356.js",revision:"385c1345a1453356"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1373.d8fe175a954ae09a.js",revision:"d8fe175a954ae09a"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1459.98ea36ccb7147986.js",revision:"98ea36ccb7147986"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1494.d3b7c9d851ad29ad.js",revision:"d3b7c9d851ad29ad"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1503.1e4328d63b35a85e.js",revision:"1e4328d63b35a85e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1575.76edf6d4b454b822.js",revision:"76edf6d4b454b822"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1607.65e4f7919f22c6ee.js",revision:"65e4f7919f22c6ee"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1626.5a23b2deb11734ac.js",revision:"5a23b2deb11734ac"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1675.b2508e76ed652a76.js",revision:"b2508e76ed652a76"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1871.cc92e5c17d55a611.js",revision:"cc92e5c17d55a611"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1876.b0ebf86f56b5a2a4.js",revision:"b0ebf86f56b5a2a4"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/1944.f28b59751987d421.js",revision:"f28b59751987d421"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/215.107d70f4dc257ca6.js",revision:"107d70f4dc257ca6"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2155.12aba553c27cdcf9.js",revision:"12aba553c27cdcf9"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2177.40f474a0ee4191df.js",revision:"40f474a0ee4191df"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2195.2829613b19ddd584.js",revision:"2829613b19ddd584"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2264.3da3a6e6517f6452.js",revision:"3da3a6e6517f6452"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2313.b1427a89aa746e27.js",revision:"b1427a89aa746e27"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2328.6118322762883c04.js",revision:"6118322762883c04"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2341.1980818dec1dfa0e.js",revision:"1980818dec1dfa0e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2532.fc888f84ba8b5caa.js",revision:"fc888f84ba8b5caa"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2569.f08c4cda5139e65e.js",revision:"f08c4cda5139e65e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2610.b1d3457c33240875.js",revision:"b1d3457c33240875"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2692.8285458a58ee667f.js",revision:"8285458a58ee667f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2758.4a14f1ddaf16e1fb.js",revision:"4a14f1ddaf16e1fb"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2785.6c5f6f4fa565f0f7.js",revision:"6c5f6f4fa565f0f7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2812.febbac0757e87bd7.js",revision:"febbac0757e87bd7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/2876.1a04a3b4c6aacf36.js",revision:"1a04a3b4c6aacf36"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3028.534a66ceaa897ba7.js",revision:"534a66ceaa897ba7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3046.af0f263cd04e336a.js",revision:"af0f263cd04e336a"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3176.084e267ff0cc9d7e.js",revision:"084e267ff0cc9d7e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3188.499f08cbbc8fb0ff.js",revision:"499f08cbbc8fb0ff"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3199.4029b01edd9cacd7.js",revision:"4029b01edd9cacd7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3286.78d56340d0690845.js",revision:"78d56340d0690845"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/337d5454.4d725475f7f21868.js",revision:"4d725475f7f21868"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3565.fb5464bf14b9a14e.js",revision:"fb5464bf14b9a14e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3792.dfb3265844df1f74.js",revision:"dfb3265844df1f74"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/3798.91132fb881ede90f.js",revision:"91132fb881ede90f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4002.2ef9de315963c087.js",revision:"2ef9de315963c087"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4020.97ba0b0c8ea9b916.js",revision:"97ba0b0c8ea9b916"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4247.4043c6e5bac6b5be.js",revision:"4043c6e5bac6b5be"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/44.96d1e066598b98a5.js",revision:"96d1e066598b98a5"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4506.bfe29b5281fd9412.js",revision:"bfe29b5281fd9412"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4638.98540dd6e4aec1f9.js",revision:"98540dd6e4aec1f9"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4782.c5239a0c3ef83239.js",revision:"c5239a0c3ef83239"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/4855.b8e1642b7e632113.js",revision:"b8e1642b7e632113"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5198.affc23872de8aa0f.js",revision:"affc23872de8aa0f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5236.07e838469b8d259e.js",revision:"07e838469b8d259e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5331.9447689fc944bbd5.js",revision:"9447689fc944bbd5"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5351.d56faa1fba24797f.js",revision:"d56faa1fba24797f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5442.9fd2a4aec1d036be.js",revision:"9fd2a4aec1d036be"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5811.ef75f12b5a20344b.js",revision:"ef75f12b5a20344b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5844.2b1075f115f7d52d.js",revision:"2b1075f115f7d52d"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/5898.c48b57048ff983e3.js",revision:"c48b57048ff983e3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6044.5ce95e731491f54f.js",revision:"5ce95e731491f54f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6059.e867422b098804b3.js",revision:"e867422b098804b3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6164.c16a1412c44063ff.js",revision:"c16a1412c44063ff"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6327.e1945ef3f2c5ab76.js",revision:"e1945ef3f2c5ab76"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6602.cdd703c02df16811.js",revision:"cdd703c02df16811"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6835.8542546472c902a9.js",revision:"8542546472c902a9"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6852.1b2bdb8090faa89f.js",revision:"1b2bdb8090faa89f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/6942.c08085427c39966c.js",revision:"c08085427c39966c"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7055.03dac7011f8be45b.js",revision:"03dac7011f8be45b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7140.5f93bec8d67ef467.js",revision:"5f93bec8d67ef467"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7396.b3c7f9c5310f25b0.js",revision:"b3c7f9c5310f25b0"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7415.62493d3060050be6.js",revision:"62493d3060050be6"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7517.1c07a4f724abff6e.js",revision:"1c07a4f724abff6e"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7594.d925aa2e5c4922cd.js",revision:"d925aa2e5c4922cd"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7611.685d033af13b9daa.js",revision:"685d033af13b9daa"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7627.b3304007c7436ef0.js",revision:"b3304007c7436ef0"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7652.8c2df55e68488cf7.js",revision:"8c2df55e68488cf7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7767.6dac4c224737fc62.js",revision:"6dac4c224737fc62"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/7891.dc7891aa6add1107.js",revision:"dc7891aa6add1107"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/807.b70242126303c9d5.js",revision:"b70242126303c9d5"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8106.7ec47b329da247f3.js",revision:"7ec47b329da247f3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8110.a315ece2430152e5.js",revision:"a315ece2430152e5"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8359.120000401094f952.js",revision:"120000401094f952"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8504.42960a35d070c714.js",revision:"42960a35d070c714"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8594.aac4cb4c0ee81293.js",revision:"aac4cb4c0ee81293"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8692.40b7bddec1870ee3.js",revision:"40b7bddec1870ee3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8715.a7d9a41b580a6185.js",revision:"a7d9a41b580a6185"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8777.049cc6d93d6c5f29.js",revision:"049cc6d93d6c5f29"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8813.cebe22bab49d19d0.js",revision:"cebe22bab49d19d0"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8818.9a43b613c4983856.js",revision:"9a43b613c4983856"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8845.1798d9cc2ad15084.js",revision:"1798d9cc2ad15084"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/8872.1a2770db4edb7011.js",revision:"1a2770db4edb7011"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/893.18aeea3ec10aff39.js",revision:"18aeea3ec10aff39"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9173.875aeaf5951f02d2.js",revision:"875aeaf5951f02d2"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9186.d975f03b6138af1b.js",revision:"d975f03b6138af1b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9225.27f685d2f9c02327.js",revision:"27f685d2f9c02327"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9291.77cdd1d7efd69340.js",revision:"77cdd1d7efd69340"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9343.d9582edbc6478448.js",revision:"d9582edbc6478448"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9494.964f55c70127ad12.js",revision:"964f55c70127ad12"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9498.9ed9ef8e45b8f08a.js",revision:"9ed9ef8e45b8f08a"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9507.d69af77a3ac40a8b.js",revision:"d69af77a3ac40a8b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9695.bc574f43a6c7f86a.js",revision:"bc574f43a6c7f86a"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9712.6dca3b7662c5df8f.js",revision:"6dca3b7662c5df8f"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/9881.8dbd5fc5711badf3.js",revision:"8dbd5fc5711badf3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/fb7d5399.3940acc9ac8268a7.js",revision:"3940acc9ac8268a7"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/framework-2645a99191cfc5e9.js",revision:"2645a99191cfc5e9"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/main-7207916984bb5462.js",revision:"7207916984bb5462"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/pages/index-271b4b4ba533c555.js",revision:"271b4b4ba533c555"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/pages/nfts-5b17822bee5786d1.js",revision:"5b17822bee5786d1"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/chunks/webpack-9a9599a3646a1047.js",revision:"9a9599a3646a1047"},{url:"https://selcukemiravci.github.io/POAP-Pathway/_next/static/css/f7a4062eaeda89a5.css",revision:"f7a4062eaeda89a5"}],{ignoreURLParametersMatching:[]}),i.cleanupOutdatedCaches(),i.registerRoute("/POAP-Pathway",new i.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:i,response:t,event:e,state:a})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),i.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new i.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),i.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new i.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),i.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new i.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),i.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new i.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new i.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\/_next\/image\?url=.+$/i,new i.StaleWhileRevalidate({cacheName:"next-image",plugins:[new i.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:mp3|wav|ogg)$/i,new i.CacheFirst({cacheName:"static-audio-assets",plugins:[new i.RangeRequestsPlugin,new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:mp4)$/i,new i.CacheFirst({cacheName:"static-video-assets",plugins:[new i.RangeRequestsPlugin,new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:js)$/i,new i.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:css|less)$/i,new i.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new i.StaleWhileRevalidate({cacheName:"next-data",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:json|xml|csv)$/i,new i.NetworkFirst({cacheName:"static-data-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>{if(!(self.origin===i.origin))return!1;const t=i.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new i.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>{if(!(self.origin===i.origin))return!1;return!i.pathname.startsWith("/api/")}),new i.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>!(self.origin===i.origin)),new i.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
