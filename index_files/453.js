(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{311:function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),n=t(365),c=t(5),d=t(3);a.default=d.default.build({create:function(e,a){var t=i()(".HH-ViewSwitcher-Body",e),s=i()(".HH-ViewSwitcher-Switcher",e),r=function(e){s.removeClass(a.cssClasses.active).filter('[data-hh-view-switch-to="'.concat(e,'"]')).addClass(a.cssClasses.active);var r=t.addClass(a.cssClasses.hidden).filter('[data-hh-view-id="'.concat(e,'"]')).removeClass(a.cssClasses.hidden);if(!r.data("init-tabs")){var h=i()(".HH-ViewSwitcher-Tabs",r);r.data("init-tabs",!0),h.length&&d.default.make(n.a,h.get(0),{menuParams:{host:h.get(0),layer:c.h.overlayContent}})}};return 1===s.length&&s.is("select")?s.on("change",function(e){var a=i()(e.target),t=a.find('option[value="{value}"]'.replace("{value}",a.val())).data("hhViewSwitchTo");r(t)}):s.on("click",function(e){var a=i()(e.currentTarget).data("hhViewSwitchTo");r(a)}),{switchBody:r}},defaults:{cssClasses:{hidden:"g-hidden"}},componentName:"js/HH/ViewSwitcher"})}}]);
//# sourceMappingURL=453.31c9b7c55aef1574c499.js.map