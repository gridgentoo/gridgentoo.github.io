(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1797:function(a,e,t){"use strict";var n=t(2),r=t.n(n),i=t(0),c=t.n(i),o=t(1378),l=t(9),s=t(48),u=500,p=400,d=function(a){var e=a.buttons,t=a.dataQAPrefix,i=a.virtualUrl,c=Object(n.useCallback)(function(a){a.preventDefault();var e=a.currentTarget,t=e.dataset.type,n=(screen.height-p)/2,r=(screen.width-u)/2;window.open(e.href,"socialShare","resizable=yes,top=".concat(n,",left=").concat(r,",height=").concat(p,",width=").concat(u)),i&&s.default.setConversionGoal("".concat(i).concat(t))},[i]);return r.a.createElement(n.Fragment,null,e.map(function(a){var e=a.type,n=a.url;return r.a.createElement(o.a,{key:e,"data-type":e,rel:"nofollow",href:n,"data-qa":"".concat(t).concat(e),icon:r.a.createElement(l.c,{view:l.c.views[e],initial:"mail"===e?l.c.kinds.primary:l.c.kinds.unique}),onClick:"mail"!==e?c:null})}))};d.displayName="components/SocialShare/index/SocialShare",d.propTypes={buttons:c.a.arrayOf(c.a.shape({type:c.a.string,url:c.a.string})).isRequired,dataQAPrefix:c.a.string,virtualUrl:c.a.string},e.a=d}}]);
//# sourceMappingURL=360.85c70e867149a1c69d3d.js.map