Array.prototype.forEach||(Array.prototype.forEach=function(e,r){var n,t;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),o=i.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(1<arguments.length&&(n=r),t=0;t<o;){var a;t in i&&(a=i[t],e.call(n,a,t,i)),t++}}),Array.prototype.map||(Array.prototype.map=function(e,r){var n,t,i;if(null==this)throw new TypeError(" this is null or not defined");var o=Object(this),a=o.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(1<arguments.length&&(n=r),t=new Array(a),i=0;i<a;){var s,l;i in o&&(s=o[i],l=e.call(n,s,i,o),t[i]=l),i++}return t}),Object.keys||(Object.keys=function(){"use strict";var i=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=a.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var r,n,t=[];for(r in e)i.call(e,r)&&t.push(r);if(o)for(n=0;n<s;n++)i.call(e,a[n])&&t.push(a[n]);return t}}()),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function r(){}function n(){return i.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))}var t=Array.prototype.slice.call(arguments,1),i=this;return r.prototype=this.prototype,n.prototype=new r,n}),window.reqlibs={libs:{},deflib:function(e,r,n){if(this.libs[e])throw new Error('Library "'+e+'" already defined');this.libs[e]={deps:r,callback:n,result:void 0}},reqlib:function(e){var t=arguments[1],r=!1;t=t||[],"string"==typeof e&&(e=[e],r=!0);var i=this,o={};return e.forEach(function(e){t.push(e);var r=i.libs[e];if(!r)throw new Error('Library "'+e+'" not found (libs finded stack: ['+t+"])");if(void 0===r.result){var n=i.reqlib(r.deps,t);r.result=r.callback(n)}o[e]=r.result}),r?o[e[0]]:o}},window.reqlibs.deflib("utils",[],function(){function r(e){return e.substr(e.lastIndexOf("/")+1)}function n(e){var r=e.indexOf("?");return-1<r?e.substr(0,r):e}function t(e){var r=e.lastIndexOf("/");return e.substr(0,r)}function i(e){var r=e.lastIndexOf("/");return e.substr(r+1)}function s(e){return"[object Object]"==={}.toString.call(e)}var l=function(e,r){var n,t,i={};for(var o in e)n=e[o],t=s(n)?0===Object.keys(n).length?{}:l({},n):n,i[o]=t;for(var a in r)n=r[a],t=s(n)?0===Object.keys(n).length?{}:l(i[a],n):n,void 0===i[a]||null===i[a]?i[a]=t:(void 0!==t&&!s(t)||s(t)&&0<Object.keys(t).length)&&(i[a]=t);return i};return{getRefNameExt:r,cutParams:n,getParams:function(e){var r=e.lastIndexOf("?");if(-1<r)return e.substr(r+1)},getRefPredDir:t,getPredDir:i,getRefDir:function(e){var r=e.lastIndexOf("/"),n=e.substr(0,r);return 36!==i(n).length?t(n):n},getFilename:function(e){return n(r(e))},mergeParams:l,isObject:s}}),window.reqlibs.deflib("defaultSettings",[],function(){return{cdnBaseUrl:"//cdn.nanosemantics.ru/",clientCode:null,uuid:null,revision:"",imagesDir:"images/",stylesDir:"styles/",scriptsDir:"scripts/",imagesPreview:{},images:{},styles:[],scripts:[],base:"base/",baseClient:"base/",scriptsOnDemand:[],imagesOnDemand:[],stylesOnDemand:[],jsonsOnDemand:[],jsonpsOnDemand:[],vishnuPlugins:[],jQuery:null,autoload:!1,infCoreLoad:!0,infFilename:null,infCoreBaseUrl:null,baseUrlVishnu:null,vishnuInteraction:{prepareVishnuUrls:!0,_vishnuCorePluginName:"vishnu"},readRevisionFrom:null,logging:!1,debugMode:!1,disableExtraScripts:!1,baseUrlWithoutSuffix:!1,debugSettings:{logging:!0,infCoreBaseUrl:"../../",infCoreScriptsDir:"",baseUrlVishnu:null},testMode:!1,testSettings:{infCoreBaseUrl:"../../",infCoreScriptsDir:""},isVishnuBindLoader:!0,isLoadScriptsByAjax:!1,resourcesAmount:null,_vishnuCoreFilename:"jquery.vishnu.min.js",_extraSettingsFilename:"settings.jsonp.js",_globalRegister:!0,_jsonpCallbackName:"VishnuLoader_jsonpCallback",_isTryParamsFromUrl:!0,_loaderScriptVariants:["jquery.vishnu-loader.js","jquery.vishnu-loader.min.js",/^jquery\.vishnu-loader-[v0-9.]*\.js$/,/^jquery\.vishnu-loader-[v0-9.]*\.min\.js$/],_preemptiveSettings:"vishnuSettings",_defaultPreemptiveSettings:"defaultVishnuSettings",_containerSelector:".vishnu-container"}}),window.reqlibs.deflib("prepareSettings",["utils","defaultSettings"],function(e){var l=e.utils,r=e.defaultSettings,n=r._loaderScriptVariants;function a(){return{cdnBaseUrl:null,clientCode:null,uuid:null,revision:null}}var t,i=window[r._defaultPreemptiveSettings],o=window[r._preemptiveSettings];return void 0!==i&&void 0!==o&&(o=l.mergeParams(i,o)),void 0===o&&(o={}),void 0===o.loader&&(o.loader={}),r._isTryParamsFromUrl&&function(e,r){for(var n=function(e){var r,n=new a;n.revision=(r=e,l.getParams(r));var t,i,o=l.getRefDir(e);return n.uuid=(t=o,l.getPredDir(t)),o=l.getRefPredDir(o),n.clientCode=(i=o,l.getPredDir(i)),n.cdnBaseUrl=l.getRefPredDir(o),""!==n.cdnBaseUrl&&(n.cdnBaseUrl+="/"),n}(function(e){for(var r,n,t=document.getElementsByTagName("script"),i=0;i<t.length;i++){var o=t[i].getAttribute("src");if(o&&"string"==typeof o){for(var a=!1,s=0;s<e.length;s++)if(r=l.getFilename(o),"string"==typeof(n=e[s])?r===n:n.test(r)){a=!0;break}if(a)return o}}}(r)),t=Object.keys(n),i=0;i<t.length;i++){var o=t[i];void 0!==e[o]&&null!==e[o]||(e[o]=n[o])}}(o.loader,n),o.loader=l.mergeParams(r,o.loader),o.loader.debugMode&&(o.loader=l.mergeParams(o.loader,o.loader.debugSettings)),o.loader.testMode&&(o.loader=l.mergeParams(o.loader,o.loader.testSettings)),void 0!==(t=window[r._preemptiveSettings])&&(void 0===o.results&&(o.results={}),t.results=o.results),o}),window.reqlibs.deflib("eventsTypes",[],function(){return{EV_LOAD:"loaded",EV_CORE_LOAD:"loaded-core",EV_MAIN_LOAD:"loaded-main",EV_ONE_EX_SCR_LOAD:"extra-script-loaded",EV_STYLES_LOAD:"styles-loaded",EV_ONE_STYLE_LOAD:"one-style-loaded",EV_IMGS_LOAD:"images-loaded",EV_ONE_IMG_LOAD:"one-image-loaded",EV_IMGS_PREV_LOAD:"images-preview-loaded",EV_ONE_IMG_PREV_LOAD:"one-image-preview-loaded",EV_ALL_RES_LOAD:"all-resources-loaded",EV_ONE_ON_DEMAND_SCR:"on-demand-script-loaded",EV_ONE_ON_DEMAND_IMAGE:"on-demand-image-loaded",EV_ONE_ON_DEMAND_STYLE:"on-demand-style-loaded",EV_ONE_ON_DEMAND_JSON:"on-demand-json-loaded",EV_ONE_ON_DEMAND_JSONP:"on-demand-jsonp-loaded"}}),function(d){window.reqlibs.deflib("ResLoader",[],function(e){function r(){}r.prototype={imagesPreview:!1,images:!1,styles:!1,scripts:!1};function n(){this.resources=new r}var t={isLoadScriptsByAjax:!(n.prototype={amount:4,count:0,complete:!(r.prototype={imagesPreview:!1,images:!1,styles:!1,scripts:!1}),resources:null,markComplete:function(e){return this.resources[e]||(this.resources[e]=!0,this.count++,this.count===this.amount&&(this.complete=!0)),this}}),loadCount:0,resStatus:null,loadStyle:function(r,n,t){var i=d('<link rel="stylesheet" href="'+r+'" />');return i.error(function(e){t(e,r)}),i.on("load",function(e){n(e,i)}),d("head").append(i),i},loadStyles:function(t,i,o,e){var r,a={},n=new Array(t.length),s=t.length,l=0;for(r=0;r<s;r++)a[t[r]]=null,n[r]=function(n){return function(e,r){a[t[n]]=r,l++,void 0!==o&&o(t[n],a),l===s&&void 0!==i&&i(a)}}(r);for(r=0;r<t.length;r++)this.loadStyle(t[r],n[r],e);return a},loadImage:function(r,n,t){var i=d("<img>");i.load(function(e){n(e,{img:i})});return i.error(function(e){t(e,r)}),i.attr("src",r),i}};return t.loadImages=function(e,r,n,t){!function(e){return"[object Array]"==={}.toString.call(e)}(e)||(e=function(e){var r={};return e.forEach(function(e){r[function(e){var r=e.indexOf("?");return-1<r?e.substr(0,r):e}(function(e){return e.substr(e.lastIndexOf("/")+1)}(e))]=e}),r}(e));var i={},o=Object.keys(e).length,a=0;for(var s in e)i[s]=null;var l={};d.each(e,function(e){l[e]=function(){i[e].status=!0,n(e,d.extend({},i)),++a===o&&r(i)}});var u=this;return d.each(e,function(e,r){var n=u.loadImage(r,l[e],t);i[e]={image:n,status:null}}),i},t.getScript=function(t,e,i,r,n){var o;if(r=void 0===r||r,n=void 0!==n?n:this.isLoadScriptsByAjax,r||n||(this.loadCount++,t+="?"+this.loadCount),o="function"==typeof i?function(e,r,n){i(t,e,r,n)}:function(){throw new Error("Error loading script. URL: "+t)},n)jQuery.ajax({url:t,type:"get",dataType:"script",data:void 0,success:e,cache:void 0!==r?r:arguments.callee.defaultCache}).fail(o);else{var a=document.createElement("script"),s=document.getElementsByTagName("head")[0];a.src=t,d(a).load(e),d(a).error(o),s.appendChild(a)}},t.loadJSON=function(t,e,i,r){var n;return arguments.callee.defaultCache=!0,"function"==typeof i&&(n=function(e,r,n){i(t,e,r,n)}),d.ajax({url:t,dataType:"json",success:e,cache:void 0!==r?r:arguments.callee.defaultCache}).fail("function"==typeof n?n:function(e,r,n){throw new Error("load json-data failed. URL: "+t+"\n"+n)})},t.loadJSONP=function(t,e,r,i){var n;return arguments.callee.defaultCache=!0,"function"==typeof i&&(n=function(e,r,n){i(t,e,r,n)}),d.ajax({url:t,jsonp:!1,dataType:"jsonp",jsonpCallback:e,success:r,cache:"undefined"!=typeof cache?cache:arguments.callee.defaultCache}).fail("function"==typeof n?n:function(e,r,n){throw new Error("Error loading JSONP data. URL: "+t+"\n"+n)})},t.loadScripts=function(r,n,t,i,e){var o=r.length,a=0;if(0<o){var s=this;if(e)r.forEach(function(e){s.getScript(e,function(){a++,t(e),a===o&&n(r)})});else{for(var l=null,u=[],d=0;d<o;d++)u.push(function(e){return function(){s.getScript(r[e],function(){t(r[e]),(l=u[e+1])?l():n(r)},i)}}(d));u[0]()}}else n()},ResLoader=function(){this.resStatus=new n,this.loadCount=0},ResLoader.prototype=t,ResLoader})}("undefined"!=typeof vishnuJQuery?vishnuJQuery:jQuery),function(a){window.reqlibs.deflib("loaderProtoBase",["defaultSettings","eventsTypes","prepareSettings"],function(e){var r=e.defaultSettings,n=e.eventsTypes,t=e.prepareSettings,i={baseUrl:null};i.defaultSettings=r,i.events=n,i.on=function(e,r){a(this).on(e,r)},i.one=function(e,r){a(this).one(e,r)},i.trigger=function(e,r){return a(this).trigger(e,r)},i.imagesPreview={},i.images={},i.styles={},i.callbacks={},i.loadScript=null,i.settingsStages={prepare:t,base:null,start:null};function o(r,e){function n(e){this.name=r,e&&(this.message=e)}return((n.prototype=new Error).constructor=n).prototype.message=e,n}return i.errors={ErrNoCoreNoMain:o("ErrNoCoreNoMain","Disable load Vishnu core and main Vishnu script!"),ErrFailLoading:o("ErrFailLoading","Fail loading. Maybe bad URL?"),ErrScriptLoading:o("ErrScriptLoading","Fail script loading. Maybe bug into script?"),ErrNotFoundScript:o("ErrNotFoundScript","Fail script loading. Resource not found (404). Maybe bad URL?"),ErrJSONPLoading:o("ErrJSONPLoading","Fail script loading. Maybe bug into JSONP data?"),ErrNotFoundJSONP:o("ErrNotFoundJSONP","Fail JSONP data loading. Resource not found (404). Maybe bad URL?"),ErrJSONLoading:o("ErrJSONLoading","Fail script loading. Maybe bug into JSON data?"),ErrNotFoundJSON:o("ErrNotFoundJSON","Fail JSON data loading. Resource not found (404). Maybe bad URL?"),ErrSkipOnDemandScript:o("ErrSkipOnDemandScript","Fail script loading. Script missed into scriptsOnDemand"),ErrSkipOnDemandStyle:o("ErrSkipOnDemandStyle","Fail style loading. Style missed into stylesOnDemand"),ErrSkipOnDemandImage:o("ErrSkipOnDemandImage","Fail image loading. Image missed into imagesOnDemand"),ErrSkipOnDemandJSON:o("ErrSkipOnDemandJSON","Fail JSON loading. JSON missed into jsonsOnDemand"),ErrSkipOnDemandJSONP:o("ErrSkipOnDemandJSONP","Fail JSONP loading. JSONP missed into jsonpsOnDemand")},i.jsonpCallbackName=r._jsonpCallbackName,i.jsonpCallback=function(e){return e},i.registerJSONPCallback=function(e){e[this.jsonpCallbackName]=this.jsonpCallback},i})}("undefined"!=typeof vishnuJQuery?vishnuJQuery:jQuery),function(X){window.reqlibs.deflib("vishnuLoaderPrototype",["loaderProtoBase"],function(e){var r=e.loaderProtoBase,i=r.settingsStages.prepare;return r.load=function(R,e,r){this.callbacks.callbackLoaded=e,this.callbacks.callbackError=r;function k(){if(R.logging)for(var e=0;e<arguments.length;e++)console.log(arguments[e])}function J(){return t}function F(){var e=J();if(e.settings.isVishnuBindLoader){var r=(e.settings.jQuery||X).fn.vishnu;(r.loader=e).vishnu=r}}function a(e,r){var n=J().errors[e],t=J().callbacks.callbackError,i=new n;if(r.loader=J(),"function"==typeof t)return t(i,r);throw i}function I(e,r){a("ErrFailLoading",{url:r,jqEvent:e})}function M(e,r,n,t){var i={url:e,jqXHRorEvent:r,jqXHRParams:{errName:n,typeErr:t}},o=404===r.status&&"error"===n?"ErrNotFoundScript":"ErrScriptLoading";a(o,i)}function n(t,i){return function(e,r){var n={url:e};n[t]=r,a(i,n)}}function x(e,r,n,t){var i={url:e,jqXHRorEvent:r,jqXHRParams:{errName:n,typeErr:t}},o=404===r.status&&"error"===n?"ErrNotFoundJSONP":"ErrJSONPLoading";a(o,i)}function T(e,r,n,t){var i={url:e,jqXHRorEvent:r,jqXHRParams:{errName:n,typeErr:t}},o=404===r.status&&"error"===n?"ErrNotFoundJSON":"ErrJSONLoading";a(o,i)}var t=this,U=n("scriptsOnDemand","ErrSkipOnDemandScript"),B=n("imagesOnDemand","ErrSkipOnDemandImage"),G=n("stylesOnDemand","ErrSkipOnDemandStyle"),q=n("jsonsOnDemand","ErrSkipOnDemandJSON"),Q=n("jsonpsOnDemand","ErrSkipOnDemandJSONP");return X(function(){function O(e,r){J().trigger(J().events[e],{loader:J(),data:r})}function y(e){k("EV_STYLES_LOAD:",e),O("EV_STYLES_LOAD",{styles:e}),w("styles")}function b(e,r){k("EV_ONE_STYLE_LOAD:",e,r),O("EV_ONE_STYLE_LOAD",{style:e,results:r})}function _(e){k("EV_IMGS_PREV_LOAD:",e),O("EV_IMGS_PREV_LOAD",{results:e}),w("imagesPreview")}function L(e,r){k("EV_ONE_IMG_PREV_LOAD:",e,r),O("EV_ONE_IMG_PREV_LOAD",{image:e,results:r})}function N(e){k("EV_IMGS_LOAD:",e),O("EV_IMGS_LOAD",{results:e}),w("images")}function D(e,r){k("EV_ONE_IMG_LOAD:",e,r),O("EV_ONE_IMG_LOAD",{image:e,results:r})}var w=function(e){J().resLoader.resStatus.markComplete(e).complete&&(k("EV_ALL_RES_LOAD:",J()),O("EV_ALL_RES_LOAD",{}))},e=R;J().settingsStages.base=e,R=X.extend(!0,{},i.loader,R),J().settingsStages.start=R,k("","GLOBAL SETTINGS:",J().defaultSettings),k("","PREPARED SETTINGS:",i),k("","BASE SETTINGS:",e),k("","START SETTINGS:",R),R.debugMode&&(R.cdnBaseUrl=""),R.debugMode?R=X.extend({},R,R.debugSettings):R.testMode&&(R=X.extend({},R,R.testSettings));function a(e,r,n){var t=e.cdnBaseUrl,i=e.clientCode;return r&&!n?t+r:!r&&n?e.baseUrlWithoutSuffix?t+n:t+i+"/"+n:r&&n?e.baseUrlWithoutSuffix?t+r+n:t+r+i+"/"+n:(e.baseUrlWithoutSuffix,t)}function j(e,r,n){return r+e+(n=n?"?"+n:"")}function A(e,r,n){r=r||"";var t="",i="";if(X.isArray(e)){function o(e){switch(e){case"base":t=n.base;break;case"baseClient":i=n.baseClient}}2===e.length?(o(e[0]),e=e[1]):3===e.length&&(o(e[0]),o(e[1]),e=e[2])}return a(n,t,i)+j(e,r,n.revision)}function P(e,r){r=r||R;var n=[];return e.forEach(function(e){n.push(A(e,r.scriptsDir,r))}),n}function V(e,n){n=n||R;var t=X.isArray(e)?[]:{};return X.each(e,function(e,r){t[e]=A(r,n.imagesDir,n)}),t}var r=a(R);J().baseUrl=r;function C(e,r){r()}!function(e){if(R.readRevisionFrom){var r=A(R.readRevisionFrom,"",R);J().resLoader.loadJSONP(r,J().jsonpCallbackName,e,x)}else e({revision:R.revision})}(function(e){R.revision=e.revision;var h,r=A(R._extraSettingsFilename,"",R);(function(e){function r(e){var r=e.lastIndexOf(".");return e.substr(r+1)}var n,t;switch(r(e=0<(t=(n=e).lastIndexOf("?"))?n.substr(0,t):n)){case"jsonp":return!0;case"js":return"jsonp"===r(e.substr(0,e.length-3));default:return!1}}(R._extraSettingsFilename)?function(e,r){return J().resLoader.loadJSONP(e,J().jsonpCallbackName,r,x)}:function(e,r){return J().resLoader.loadJSON(e,r,T)})(r,function(e){h=e}).done(function(){k("","EXTRA SETTINGS:",h),h&&(R=X.extend(!0,{},R,h)),k("","MERGE-EXTRA SETTINGS:",R),R.debugMode&&(R=X.extend(!0,{},R,R.debugSettings)),R.testMode&&(R=X.extend(!0,R,R.testSettings)),k("","WORKING SETTINGS:",R),(J().settings=R).resourcesAmount&&(J().resLoader.resStatus.amount=R.resourcesAmount);var e="string"==typeof R.infCoreScriptsDir?R.infCoreScriptsDir:R.scriptsDir,r=R.infCoreBaseUrl?R.infCoreBaseUrl+j(R._vishnuCoreFilename,e,R.revision):A(R._vishnuCoreFilename,e,R);k("Vishnu_core: "+r);var t="string"==typeof R.baseUrlVishnu?R.baseUrlVishnu+j(R.infFilename,R.scriptsDir,R.revision):A(R.infFilename,R.scriptsDir,R);k("Vishnu_instance: "+t);var n,i,o=J().resLoader.getScript.bind(J().resLoader),a=R.infCoreLoad?o:C,s=R.infFilename&&"string"==typeof R.infFilename,l=s?o:C;if(!s&&!R.infCoreLoad){var u=J().errors.ErrNoCoreNoMain,d=J().callbacks.callbackError,c=new u;if("function"==typeof d)return d(c);throw c}(i=R.vishnuInteraction)&&i.prepareVishnuUrls&&(n=i._vishnuCorePluginName)&&(X.fn[n]={preemptiveConfig:{handlers:{onGetBaseUrl:function(){return J().baseUrl},onGetRevision:function(){return J().settings.revision},onGetImagesDir:function(){return J().settings.imagesDir},onGetScriptsDir:function(){return J().settings.scriptsDir}}}});function f(e){k("EV_ONE_EX_SCR_LOAD:"),O("EV_ONE_EX_SCR_LOAD",{extraScr:e})}function p(e,s){var l=e.resDir||"",u=e.resourcesOnDemandProp,d=e.throwSkipFn,c=e.throwErrLoad,f=e.evName,p=e.fnResLoad;return function(e,r,n){var t=this.settings,i=A(e,l,t),o=-1!==t[u].indexOf(e)&&i;if(o){var a=[o,function(){O(f,{src:e}),r.apply(null,[].slice.call(arguments))},n||c];return s&&(a=a.concat(s)),p.apply(null,a)}d(i,t[u])}}var g,S,v,m,E;J().loadScript=p({resDir:R.scriptsDir,resourcesOnDemandProp:"scriptsOnDemand",throwSkipFn:U,throwErrLoad:M,evName:"EV_ONE_ON_DEMAND_SCR",fnResLoad:o},[void 0,R.isLoadScriptsByAjax]),J().loadImage=p({resDir:R.imagesDir,resourcesOnDemandProp:"imagesOnDemand",throwSkipFn:B,throwErrLoad:I,evName:"EV_ONE_ON_DEMAND_IMAGE",fnResLoad:J().resLoader.loadImage.bind(J().resLoader)}),J().loadStyle=p({resDir:R.stylesDir,resourcesOnDemandProp:"stylesOnDemand",throwSkipFn:G,throwErrLoad:I,evName:"EV_ONE_ON_DEMAND_STYLE",fnResLoad:J().resLoader.loadStyle.bind(J().resLoader)}),J().loadJSON=p({resourcesOnDemandProp:"jsonsOnDemand",throwSkipFn:q,throwErrLoad:T,evName:"EV_ONE_ON_DEMAND_JSON",fnResLoad:J().resLoader.loadJSON.bind(J().resLoader)}),J().loadJSONP=(g="jsonpsOnDemand",S=Q,v=x,m=J().resLoader.loadJSONP.bind(J().resLoader),E=J().jsonpCallbackName,function(e,r,n){var t=this.settings,i=A(e,"",t),o=-1!==t[g].indexOf(e)&&i;if(o){var a=[o,E,function(){O("EV_ONE_ON_DEMAND_JSONP",{src:e}),r.apply(null,[].slice.call(arguments))},n||v];return m.apply(null,a)}S(i,t[g])}),a(r,function(){k("","Vishnu core loaded (baseUrl: "+J().baseUrl+").",""),R.infCoreLoad&&F(),O("EV_CORE_LOAD",{url:r}),J().resLoader.loadScripts(P(R.vishnuPlugins,R),function(){l(t,function(){var e,r;k("","Vishnu loaded (baseUrl: "+J().baseUrl+").",""),R.infCoreLoad||F(),O("EV_MAIN_LOAD",{url:t}),J().resLoader.resStatus.amount=(e=[R.scripts,R.styles,R.imagesPreview,R.images],r=0,e.forEach(function(e){0<Object.keys(e).length&&r++}),r);var n=R.scripts;R.debugMode&&R.debugScripts&&(n=R.debugScripts),R.disableExtraScripts&&(n=[]),J().resLoader.loadScripts(P(n,R),function(e){k("Extra scripts loaded.");var r=J();w("scripts");var n=J().callbacks.callbackLoaded;"function"==typeof n&&n(r),O("EV_LOAD",{scripts:e}),r.imagesPreview=J().resLoader.loadImages(V(R.imagesPreview,R),_,L,I),r.images=J().resLoader.loadImages(V(R.images,R),N,D,I),r.styles=J().resLoader.loadStyles(function(e,r){return r=r||R,e.map(function(e){return A(e,r.stylesDir,r)})}(R.styles,R),y,b,I)},f,M,void 0,R.isLoadScriptsByAjax)},M,void 0,R.isLoadScriptsByAjax)},f,M,void 0,R.isLoadScriptsByAjax)},M,void 0,R.isLoadScriptsByAjax)})})}),J()},r})}("undefined"!=typeof vishnuJQuery?vishnuJQuery:jQuery),function(i){window.reqlibs.deflib("VishnuLoader",["ResLoader","vishnuLoaderPrototype"],function(e){function t(e){return this.resLoader=new n,this.defaultSettings=i.extend(!0,{},this.defaultSettings),e=e||arguments.callee.loadersCount++,arguments.callee.loaders[e]=this}var r=e.vishnuLoaderPrototype,n=e.ResLoader;return t.loadersCount=0,t.loaders={},(r.constructor=t).prototype=r,t.load=function(e,r,n){return new t(e&&e.loaderName).load(e,r,n)},t})}("undefined"!=typeof vishnuJQuery?vishnuJQuery:jQuery),function(a){var e=window.reqlibs.reqlib("VishnuLoader");a.fn.VishnuLoader=e;var r=new a.fn.VishnuLoader;r.registerJSONPCallback(window),r.defaultSettings._globalRegister&&(window.VishnuLoader=e);var s=e.prototype.settingsStages.prepare;void 0!==s.loader&&s.loader.autoload&&(void 0===s.results&&(s.results={}),s.results.loader=r,s.loader.resourcesAmount&&(r.resLoader.resStatus.amount=s.loader.resourcesAmount),r.load(s.loader,function(i){var o=i.settings.vishnuConfig,e=i.settings.mappingClientConfig,r=s.clientConfig;!function(e,r,n){for(var t in r){var i,o=e,a=r[t];for(i=0;i<a.length-1;i++)o=o[a[i]];o[a[i]]=n[t]}}(o,e,r),i.one("loaded",function(){var e=i.settings.methods,r=a(i.settings._containerSelector);r.length&&r.vishnu(o);var n=r.data("vishnu").vishnu;if(s.results.vishnu=n,void 0!==e)for(var t=0;t<e.length;t++)n[e[t]]()})}))}("undefined"!=typeof vishnuJQuery?vishnuJQuery:jQuery);