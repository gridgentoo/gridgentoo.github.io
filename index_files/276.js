(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{1624:function(e,n,t){"use strict";var r=t(2),o=t.n(r),a=t(0),c=t.n(a),s=t(28),i=function(e){var n=e.serviceType,t=e.resumeHash,a=Object(r.useRef)(null),c=Object(r.useCallback)(function(){a.current&&(a.current.height="".concat(a.current.contentWindow.document.body.scrollHeight,"px"))},[a]);Object(r.useEffect)(function(){var e=function(e){a.current&&e.source===a.current.contentWindow&&"heightUpdate"===e.data&&c()};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},[a,c]);var i=Object(s.a)("/applicant/applicant_services_popup");return i.params={type:["page"],service_type:[n],backurl:[window.location.href],no_menu:[""],resumeHash:t?[t]:[]},o.a.createElement("iframe",{ref:a,onLoad:c,onClick:c,seamless:!0,frameBorder:"0",scrolling:"no",src:i.href,className:"dropdown-content__iframe"})};i.displayName="components/ApplicantNavigation/DropdownContent/DropdownContent",i.propTypes={serviceType:c.a.string.isRequired,resumeHash:c.a.string},n.a=i}}]);
//# sourceMappingURL=276.e046e6cc27d286ba1a95.js.map