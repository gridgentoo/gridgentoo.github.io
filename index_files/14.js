(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1422:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(0),i=a.n(r),l=a(185),c=a(1391),s=function e(t){var a=t.textify,r=t.date,i=t.showClock,c=t.showYear,s=t.trls,d=t.preposition;if(!r)return null;var g=new Date,m=new Date(r),p=null;a&&g.valueOf()-m.valueOf()<1728e5&&(g.getDate()===m.getDate()&&(p=s[e.trls.today]),g.setDate(g.getDate()-1),g.getDate()===m.getDate()&&(p=s[e.trls.yesterday]));var h=m.getDate(),v=p;return p||(v="".concat(h," ").concat(s[e.trls[m.getMonth()]]),c&&(v+=" ".concat(m.getFullYear()))),o.a.createElement(n.Fragment,null,v,d&&" ".concat(s[e.trls.preposition]),i&&" ".concat(l.default.toFormat(m,"%H:%M")))};s.displayName="components/HumanDate/index/HumanDate",s.trls={today:"date.today.lowercase",yesterday:"date.yesterday.lowercase",preposition:"mobile.date.at",0:"calendar.genitive.month.0",1:"calendar.genitive.month.1",2:"calendar.genitive.month.2",3:"calendar.genitive.month.3",4:"calendar.genitive.month.4",5:"calendar.genitive.month.5",6:"calendar.genitive.month.6",7:"calendar.genitive.month.7",8:"calendar.genitive.month.8",9:"calendar.genitive.month.9",10:"calendar.genitive.month.10",11:"calendar.genitive.month.11"},s.defaultProps={showYear:!0},s.propTypes={textify:i.a.bool,date:i.a.oneOfType([i.a.string,i.a.number]),showClock:i.a.bool,showYear:i.a.bool,trls:i.a.object,preposition:i.a.bool},t.a=Object(c.b)(s)}}]);
//# sourceMappingURL=14.cb2211f8f0b6462c1afc.js.map