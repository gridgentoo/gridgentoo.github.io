(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1028:function(e,r,t){"use strict";t.r(r);var o=t(3),n=t(20);r.default=o.default.build({create:function(){var e;!window.location.host.startsWith("m.")&&(null===(e=navigator.serviceWorker)||void 0===e?void 0:e.getRegistrations)&&"caches"in window&&window.addEventListener("load",function(){navigator.serviceWorker.register("".concat("/cacheStatic.sw.js","?staticHost=").concat(window.globalVars.staticHost),{scope:"/"}).then(function(e){e.update().then(function(){return navigator.serviceWorker.ready}).then(function(e){e.active.postMessage(JSON.stringify(window.globalVars))}).catch(function(e){n.default.log("error",new Error("Service worker update error: ".concat(e)))})}).catch(function(e){n.default.log("error",new Error("Service worker registration error: ".concat(e)))})})},componentName:"js/HHC/ServiceWorkerRegister"})}}]);
//# sourceMappingURL=905.3742a73569f39f53b190.js.map