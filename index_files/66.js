(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{550:function(e,a,r){"use strict";r.r(a),r.d(a,"markContactsAsShown",function(){return s});var t=r(54),o=r(57),s=function(e){o.default.put("/shards/resume/mark_contacts_showed?resumeId=".concat(e)).catch(console.error)};a.default=function(e){var a=e.goal,r=e.resumeId,o=e.resumeHash,s=e.employerId,n=e.employerManagerId;Object(t.default)({data:{event:"resumeShowContacts",resumeId:r}}),a&&Object(t.default)({data:{goal:a,resumeHash:o,resumeId:r,employerId:s,employerManagerId:n}})}}}]);
//# sourceMappingURL=66.c78853b5cc47759dd61a.js.map