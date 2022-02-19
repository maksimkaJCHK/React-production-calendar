!function(){"use strict";var e,t={84:function(e,t,r){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function n(e){return n="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(7294)),i=r(3777),c=(o=r(836))&&o.__esModule?o:{default:o};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var d=function(e){var t=e.year,r=e.month,a=e.startDayWeek,n=e.holiday,o=e.handleClick,u=e.handleMouseOver,d=e.handleMouseOut,s=(0,i.dayInMonth)(t,r),f=(0,i.dayForWeek)(t,r,s,a,n);return l.default.createElement("div",{className:"calendar-body"},f.map((function(e,t){return l.default.createElement("div",{style:{display:"flex"},key:t,className:"calendar-body-row"},e.map((function(e){return l.default.createElement(c.default,{el:e,key:e.id,handleClick:o,handleMouseOver:u,handleMouseOut:d})})))})))};t.default=d},836:function(e,t,r){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function n(e){return n="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(a,i,c):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}(r(7294));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=function(e){var t=e.el,r=e.handleMouseOut,a=e.handleMouseOver,n=e.handleClick,l=(0,o.useRef)();return o.default.createElement("div",{style:{width:"14.28571428571429%"},className:t.className.join(" "),key:t.id,onClick:function(){return n(t.time,l)},onMouseOver:function(){return a(t.time,l)},onMouseOut:function(){return r(t.time,l)},ref:l},o.default.createElement("div",{className:"calendar-body-day"},t.day),t.hint.length?t.hint.map((function(e,t){return o.default.createElement("div",{className:"calendar-body-hint",key:t},o.default.createElement("div",{className:"calendar-body-title"},e.title),o.default.createElement("div",{className:"calendar-body-desc"},e.desc))})):null)};t.default=i},6244:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(7294))&&a.__esModule?a:{default:a},o=r(174);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var c=function(e){var t=e.startDayWeek,r=e.lang,a=l(o.days[r]),i=0==t?[].concat(l(a.slice(6)),l(a.slice(0,6))):a;return n.default.createElement("div",{style:{display:"flex"},className:"calendar-day"},i.map((function(e,t){return n.default.createElement("div",{style:{width:"14.28571428571429%"},className:"calendar-day-col",key:t},e)})))};t.default=c},7999:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(7294))&&a.__esModule?a:{default:a},o=r(3030);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var c=function(e){var t=e.lang,r=e.year,a=e.month,i=e.visibleYear,c=l(o.months[t.toLowerCase()]),u=new Date(r,a),d=c[u.getMonth()],s=i?u.getFullYear():"";return n.default.createElement("div",{className:"calendar-head"},d," ",s)};t.default=c},4989:function(e,t,r){t.Z=void 0;var a=c(r(7294)),n=c(r(7999)),o=c(r(6244)),l=c(r(84)),i=r(600);function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.lang,r=void 0===t?"ru":t,c=e.year,u=void 0===c?"2022":c,d=e.month,s=void 0===d?"1":d,f=e.visibleYear,m=void 0===f||f,y=e.startDayWeek,p=void 0===y?1:y,b=e.calClass,h=void 0===b?"":b,v=e.holiday,g=void 0===v?[]:v,x=e.handleClick,w=void 0===x?function(){return null}:x,k=e.handleMouseOver,O=void 0===k?function(){return null}:k,D=e.handleMouseOut,E=void 0===D?function(){return null}:D,M=s-1,j="calendar ".concat(i.monthClass[M]," ").concat(h);return a.default.createElement("div",{className:j},a.default.createElement(n.default,{lang:r,year:u,month:M,visibleYear:m}),a.default.createElement(o.default,{startDayWeek:p,lang:r}),a.default.createElement(l.default,{startDayWeek:p,year:u,month:M,holiday:g,handleClick:w,handleMouseOver:O,handleMouseOut:E}))};t.Z=u},174:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.days=void 0;t.days={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mo","Tu","We","Th","Fr","Sa","Su"],de:["Mo","Di","Mi","Do","Fr","Sa","So"],fr:["Lu","Ma","Me","Je","Ve","Sa","Di"],su:["Ma","Ti","Ke","To","Pe","La","Su"]}},3030:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.months=void 0;t.months={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]}},600:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.monthClass=void 0;t.monthClass=["january","february","march","april","may","june","july","august","september","october","november","december"]},3777:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}Object.defineProperty(t,"__esModule",{value:!0}),t.numberDayInYear=t.getWeeksInMonth=t.dayInMonth=t.dayForWeek=void 0;var i=["calendar-body-col"],c=function(e,t){var r=(new Date).setHours(0,0,0,0),a=new Date(r).getMonth(),n=new Date(r).getFullYear();return{isCurDate:a==e&&n==t,curDate:r}};t.dayForWeek=function(e,t,r,n,l){var d=[[]],s=c(t,e),f=t-1<0?11:t-1,m=t+1>11?0:t+1;l.length&&(l=(l=l.filter((function(e){return e.month==t||e.month==f||e.month==m}))).map((function(e){return a(a({},e),{},{class:e.class?e.class:"",hint:e.hint?e.hint:[],id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})})));for(var y=1;y<=r;y++){var p,b=new Date(e,t,y),h="";b.setHours(0,0,0,0),h=0==b.getDay()||6==b.getDay()?"output":"",b.getTime()==s.curDate&&(h+=" curDate");var v=[];if(1==y&&b.getDay()!=n&&(v=o(u(e,t,b.getDay(),n,"prev"))),0!=y&&b.getDay()==n&&d.push([]),v=[].concat(o(v),[{id:b.getTime(),time:b.getTime(),day:b.getDate(),className:[].concat(i,[h]),hint:[]}]),y==r&&b.getDay()<=6){var g=u(e,t,b.getDay(),n,"next");v=[].concat(o(v),o(g))}(p=d[d.length-1]).push.apply(p,o(v))}return function(e,t){var r=o(e);return o(t).map((function(e){return o(e.map((function(e){var t=r.filter((function(t){return t.id==e.id}));return t.length?a(a({},e),{},{className:[].concat(o(e.className),[t[0].class?t[0].class:"holiday"]),hint:[].concat(o(e.hint),o(t[0].hint))}):a({},e)})))}))}(l,d)};var u=function(e,t,r,n,o){var l=[],u="prev"==o?r-n:6-r+n,d=c("prev"==o?t-1<0?11:t-1:t+1>11?0:t+1,"prev"==o?t-1<0?e-1:e:t+1>11?+e+1:e);u="prev"==o?u<0?7-n:u:u=7==u?0:u;for(var s=0;s<u;s++){var f="prev"==o?new Date(e,t,-s):new Date(e,t+1,s+1);f.setHours(0,0,0,0);var m=0==f.getDay()||6==f.getDay()?"output":"";f.getTime()==d.curDate&&(m+=" curDate");var y={id:f.getTime(),time:f.getTime(),day:f.getDate(),className:[].concat(i,["prev"==o?"prev":"next",m]),hint:[]};"prev"==o?l.unshift(a({},y)):l.push(a({},y))}return l};t.dayInMonth=function(e,t){return new Date(e,t+1,0).getDate()};t.numberDayInYear=function(e,t){var r=new Date(Number(t)),a=new Date(e-1,11,31);return(r.getTime()-a.getTime())/864e5};t.getWeeksInMonth=function(e,t){var r=new Date(e,t+1,0);return Math.ceil((r.getDate()-(r.getDay()?r.getDay():7))/7)+1}},4192:function(e,t,r){var a=r(7294),n=r(3935),o=r(4989).Z,l=[{year:2022,month:0,day:13,class:"",hint:[{title:"День рождения Ермолова Константина Петровича",desc:"Костику 24 года, он любит панк-рок, ска. Костик работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:2022,month:1,day:10,class:"",hint:[{title:"День рождения Иванова Дмитрия Евгеньевича",desc:"Дмитрию 32 года он любит пиво и хардкор. Дима работает в отделе веб-дизайна, старшим веб-дизайнером. "}]},{year:2022,month:2,day:9,class:"",hint:[{title:"День рождения Романова Павла Евгеньевича",desc:"Павлу 30 лет, он любит читать, слушать музыку, рисовать. Паша работает в отделе веб-разработки, верстальщиком."}]},{year:2022,month:3,day:8,class:"",hint:[{title:"День рождения Сазонова Петра Алексеевича",desc:"Петру 36 лет, он любит спорт. Петр работает в отделе веб-разработки, ведущим программистом"}]},{year:2022,month:4,day:21,class:"",hint:[{title:"День рождения Петренко Константина Михайловича",desc:"Костику 26 лет он ходить в походы. Костик работает в отделе SEO-продвижения, младши копирайтером."}]},{year:2022,month:5,day:18,class:"",hint:[{title:"День рождения Колпакова Евгения Борисовича",desc:"Жени 33 года он любит свою работу. Женя работает в отделе SEO-продвижения,  копирайтером."}]},{year:2022,month:6,day:24,class:"",hint:[{title:"День рождения Николаева Михаила Романовича",desc:"Мише 20 лет, он любит учиться. Миша работает в отделе продаж, помощником менеджера продаж."}]},{year:2022,month:7,day:13,class:"",hint:[{title:"День рождения Насонова Максима Петровича",desc:"Максу 25 лет он любит слушать музыку. Макс работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:2022,month:8,day:25,class:"",hint:[{title:"День рождения Мирошниченко Алексея Михайловича",desc:"Алексею 42 года он любит шахматы. Алексей работает директором по развитию."}]},{year:2022,month:9,day:6,class:"",hint:[{title:"День рождения Орлова Дмитрия Николаевича",desc:"Диме 30 лет, он любит велоспорт. Дима работает в отделе продаж. Ведущим аккаунт-менеджером."}]},{year:2022,month:10,day:25,class:"",hint:[{title:"День рождения Козлова Дмитрия Олеговича",desc:"Диме 36 лет он любит русский рок. Дима работает в отделе SEO-продвижения, старшим копирайтером"}]},{year:2022,month:11,day:22,class:"",hint:[{title:"День рождения Кондратьева Романа Петровича",desc:"Роману 27 лет он любит играть в шахматы. Роман работает в отделе веб-разработки, ведущим веб-программистом. "}]}],i=(r(1457),r(3379)),c=r.n(i),u=r(7795),d=r.n(u),s=r(569),f=r.n(s),m=r(3565),y=r.n(m),p=r(9216),b=r.n(p),h=r(4589),v=r.n(h),g=r(4709),x={};x.styleTagTransform=v(),x.setAttributes=y(),x.insert=f().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=b();c()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var w=r(9561),k={};k.styleTagTransform=v(),k.setAttributes=y(),k.insert=f().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=b();c()(w.Z,k),w.Z&&w.Z.locals&&w.Z.locals;var O=r(6092),D={};D.styleTagTransform=v(),D.setAttributes=y(),D.insert=f().bind(null,"head"),D.domAPI=d(),D.insertStyleElement=b();c()(O.Z,D),O.Z&&O.Z.locals&&O.Z.locals;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return o}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var A=document.getElementById("app"),P=function(){var e=C((0,a.useState)((new Date).getMonth()+1),2),t=e[0],r=e[1],n=C((0,a.useState)({birthdays:S(l),form:{time:"",isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}}}),2),i=n[0],c=n[1],u=function(e){var t=i.birthdays,r=i.form,a=e.target;c({birthdays:S(t),form:M(M({},r),{},j({},a.name,{value:a.value,alarmText:""}))})},d=function(e){var t=new Date(e);return{year:t.getFullYear(),month:t.getMonth(),day:t.getDate()}},s=function(e){var t=d(e);return"".concat(t.day," ").concat(["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.month]," ").concat(t.year)};return a.createElement("div",{className:"exampleCalendar"},a.createElement("h2",null,"Выбрать дату"),a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=i.form,r=i.birthdays,a=t.date.value?"":"Поле не заполнено",n=t.title.value?"":"Поле не заполнено",o=t.text.value?"":"Поле не заполнено";if(a||n||o)c({birthdays:S(r),form:{time:t.time,isDelete:t.isDelete,title:{value:t.title.value,alarmText:n},text:{value:t.text.value,alarmText:o},date:{value:t.date.value,alarmText:a}}});else{var l=d(t.time),u=r.filter((function(e){return!(e.day==l.day&&e.month==l.month)}));c({birthdays:[].concat(S(u),[M(M({},l),{},{class:"holiday",hint:[{title:t.title.value,desc:t.text.value}]})]),form:M(M({},t),{},{isDelete:!0})})}}},a.createElement("div",{className:i.form.date.alarmText?"row alarm":"row"},a.createElement("div",{className:"dateCheck"},a.createElement("div",{className:"prevM",onClick:function(){r(t<2?t:t-1)}},"◄"),a.createElement("div",{className:"nextM",onClick:function(){r(t>11?t:t+1)}},"►"),a.createElement(o,{visibleYear:!1,year:"2022",month:t,holiday:i.birthdays,handleClick:function(e){var t=i.birthdays,r=d(e),a=s(e),n="",o="",l=!1,u=t.findIndex((function(e){return e.day==r.day&&e.month==r.month&&!e.new})),f=t.reduce((function(e,t){return t.new?S(e):[].concat(S(e),[M(M({},t),{},{class:""})])}),[]);-1!=u?(l=!0,n=t[u].hint[0].title,o=t[u].hint[0].desc,f=f.map((function(e,t){var r=t==u?"selected holiday":"";return M(M({},e),{},{class:r})}))):f=[].concat(S(f),[{year:r.year,month:r.month,day:r.day,hint:[],class:"selected",new:!0}]),c({birthdays:S(f),form:{time:e,isDelete:l,title:{value:n,alarmText:""},text:{value:o,alarmText:""},date:{value:a,alarmText:""}}})},handleMouseOver:function(e){s(e)},handleMouseOut:function(e){s(e)}})),a.createElement("div",{className:"chosenDate"},i.form.date.value?"Дата: "+i.form.date.value:"Дата не выбрана")),a.createElement("div",{className:i.form.title.alarmText?"row alarm":"row"},a.createElement("label",null,"Заголовок сообщения"),a.createElement("input",{type:"text",name:"title",value:i.form.title.value,onChange:u}),i.form.title.alarmText?a.createElement("div",{className:"hint"},i.form.title.alarmText):null),a.createElement("div",{className:i.form.text.alarmText?"row alarm":"row"},a.createElement("label",null,"Текст сообщения"),a.createElement("textarea",{type:"text",name:"text",value:i.form.text.value,onChange:u}),i.form.text.alarmText?a.createElement("div",{className:"hint"},i.form.text.alarmText):null),a.createElement("div",{className:"row space-between-align"},a.createElement("button",{className:"mdc-button"},"Сохранить"),i.form.isDelete?a.createElement("button",{className:"mdc-button",onClick:function(e){e.preventDefault();var t=i.birthdays,r=i.form,a=d(i.form.time),n=t.filter((function(e){return e.month==a.month?e.day!=a.day:e.month!=a.month}));c({birthdays:S(n),form:M(M({},r),{},{isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}})})}},"Удалить событие"):null)),a.createElement("h2",null,"Дни рождения сотрдников на 2022 год"),a.createElement("div",{className:"exampleCalendar-group"},a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"1",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"2",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"3",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"4",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"5",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"6",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"7",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"8",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"9",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"10",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"11",holiday:i.birthdays})),a.createElement("div",{className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:"2022",month:"12",holiday:i.birthdays}))))};n.render(a.createElement(P,null),A)},4709:function(e,t,r){var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,'.calendar{color:#000;width:100%;text-align:center;border:1px solid #424242;font:16px/120% "RobotoDraft"}.calendar .curDate{background:#ffd740}.calendar .curDate .calendar-body-day{background-color:#ffc400}.calendar .output{background-color:#ff5252}.calendar .holiday{cursor:pointer;background-color:#ff1744}.calendar-head{padding:20px 0;background:#e6ee9c}.calendar-day{width:100%}.calendar-day-col{padding:4% 0;background:#dce775;border:1px solid #424242;border-right:none;border-bottom:none}.calendar-day-col:first-of-type{border-left:none}.calendar-body-day{width:34px;height:34px;line-height:34px;display:inline-block;border-radius:50%}.calendar-body-row{width:100%}.calendar-body-col{position:relative;padding:2% 0;border:1px solid #424242;border-right:none;border-bottom:none;background-color:#aed581;transition:background-color .15s ease-in-out 0s}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;margin-left:-140px}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:280px;padding:15px;border-radius:10px;background-color:#dce775;box-shadow:0 0 10px rgba(0,0,0,0.5)}.calendar-body-title{font:16px/120% "RobotoDraft";margin:0 0 5px}.calendar-body-desc{font:14px/140% "RobotoDraft"}.calendar .prev div,.calendar .next div{opacity:.4}.calendar .prev:hover .calendar-body-hint,.calendar .next:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .workDay{background-color:#7cb342}\n',""]),t.Z=l},6092:function(e,t,r){var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,'.dateCheck .calendar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.dateCheck .calendar .selected{background-color:#f97d95}.dateCheck .calendar .prev,.dateCheck .calendar .next{cursor:text}.dateCheck .calendar .prev:hover,.dateCheck .calendar .next:hover{background-color:#aed581}.dateCheck .calendar .prev.output:hover,.dateCheck .calendar .next.output:hover{background-color:#ff5252}.dateCheck .calendar-body-col{cursor:pointer}.dateCheck .calendar-body-col:hover{background-color:#f97d95}form{max-width:600px;margin:30px auto;position:relative}form textarea,form input[type="text"]{display:block;width:100%;margin:10px 0;padding:10px 15px;border-radius:5px;box-sizing:border-box;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;border:1px solid #ced4da;appearance:none;outline:none;font:16px/120% \'RobotoDraft\';transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out}form textarea.focus,form textarea:focus,form input[type="text"].focus,form input[type="text"]:focus{color:#212529;border-color:#86b7fe;box-shadow:0 0 0 2px rgba(13,110,253,0.25)}form textarea:placeholder,form input[type="text"]:placeholder{color:#6c757d;opacity:1}form .alarm .chosenDate{color:#ff1744}form .alarm textarea,form .alarm input[type="text"]{border-color:#ff1744}form .alarm textarea:focus,form .alarm input[type="text"]:focus{box-shadow:0 0 0 2px rgba(255,0,0,0.25)}form textarea{height:186px;resize:vertical}form .row{text-align:left;margin:20px 0}form .hint{color:#ff1744}form .space-between-align{display:flex;justify-content:space-between}form .dateCheck{width:100%;margin:0 0 30px;position:relative;background-color:#fff;box-shadow:0 0 30px rgba(0,0,0,0.5)}form .nextM,form .prevM{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}form .nextM,form .prevM{top:15px;width:30px;height:30px;color:#fff;cursor:pointer;position:absolute;border-radius:50%;text-align:center;line-height:30px;font-size:14px;background-color:#ffab40;transition:background-color .15s ease-in-out}form .nextM:hover,form .prevM:hover{background-color:#ff9100}form .nextM:active,form .prevM:active{background-color:#ff6d00}form .prevM{left:30px}form .nextM{right:30px}\n',""]),t.Z=l},9561:function(e,t,r){var a=r(8081),n=r.n(a),o=r(3645),l=r.n(o)()(n());l.push([e.id,".exampleCalendar{text-align:center;font-size:16px;font-family:'RobotoDraft'}.exampleCalendar-lang{max-width:100px;text-align:left;margin:5px auto}.exampleCalendar-lang label{padding-left:5px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:flex;flex-wrap:wrap;max-width:1400px;margin:40px auto;justify-content:center;font-family:'RobotoDraft'}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:'RobotoDraft', sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835;transition:background-color .15s ease-in-out, box-shadow .15s ease-in-out}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:active{background-color:#f2c80d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}@media screen and (max-width: 900px){.calendar-body-col:nth-of-type(1):hover .calendar-body-hint{left:0;margin-left:0}.calendar-body-col:nth-of-type(2):hover .calendar-body-hint{left:-100%;margin-left:0}.calendar-body-col:nth-of-type(5):hover .calendar-body-hint{left:auto;right:-200%;margin-left:0}.calendar-body-col:nth-of-type(6):hover .calendar-body-hint{left:auto;right:-100%;margin-left:0}.calendar-body-col:nth-of-type(7):hover .calendar-body-hint{left:auto;right:0;margin-left:0}}\n",""]),t.Z=l}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={id:e,exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,r,n,o){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={93:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,l=r[0],i=r[1],c=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var d=c(a)}for(t&&t(r);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=self.webpackChunkreact_production_calendar=self.webpackChunkreact_production_calendar||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=a.O(void 0,[592],(function(){return a(4192)}));n=a.O(n)}();