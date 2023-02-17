!function(){"use strict";var e,t={84:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){return a="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(7294)),i=r(3777),c=(o=r(836))&&o.__esModule?o:{default:o};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var d=function(e){var t=e.year,r=e.month,n=e.startDayWeek,a=e.holiday,o=e.handleClick,u=e.handleMouseOver,d=e.handleMouseOut,f=(0,i.dayInMonth)(t,r),s=(0,i.dayForWeek)(t,r,f,n,a);return l.default.createElement("div",{className:"calendar-body"},s.map((function(e,t){return l.default.createElement("div",{style:{display:"flex"},key:t,className:"calendar-body-row"},e.map((function(e){return l.default.createElement(c.default,{el:e,key:e.id,handleClick:o,handleMouseOver:u,handleMouseOut:d})})))})))};t.default=d},836:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){return a="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(r(7294));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=function(e){var t=e.el,r=e.handleMouseOut,n=e.handleMouseOver,a=e.handleClick,l=(0,o.useRef)();return o.default.createElement("div",{style:{width:"14.28571428571429%"},className:t.className.join(" "),key:t.id,onClick:function(){return a(t.time,l)},onMouseOver:function(){return n(t.time,l)},onMouseOut:function(){return r(t.time,l)},ref:l},o.default.createElement("div",{className:"calendar-body-day"},t.day),t.hint.length?t.hint.map((function(e,t){return o.default.createElement("div",{className:"calendar-body-hint",key:t},o.default.createElement("div",{className:"calendar-body-title"},e.title),o.default.createElement("div",{className:"calendar-body-desc"},e.desc))})):null)};t.default=i},6244:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(174);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t=e.startDayWeek,r=e.lang,n=l(o.days[r]),i=0==t?[].concat(l(n.slice(6)),l(n.slice(0,6))):n;return a.default.createElement("div",{style:{display:"flex"},className:"calendar-day"},i.map((function(e,t){return a.default.createElement("div",{style:{width:"14.28571428571429%"},className:"calendar-day-col",key:t},e)})))};t.default=c},7999:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3030);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t=e.lang,r=e.year,n=e.month,i=e.visibleYear,c=l(o.months[t.toLowerCase()]),u=new Date(r,n),d=c[u.getMonth()],f=i?u.getFullYear():"";return a.default.createElement("div",{className:"calendar-head"},d," ",f)};t.default=c},4989:function(e,t,r){t.Z=void 0;var n=c(r(7294)),a=c(r(7999)),o=c(r(6244)),l=c(r(84)),i=r(600);function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.lang,r=void 0===t?"ru":t,c=e.year,u=void 0===c?"2022":c,d=e.month,f=void 0===d?"1":d,s=e.visibleYear,m=void 0===s||s,y=e.startDayWeek,p=void 0===y?1:y,b=e.calClass,h=void 0===b?"":b,v=e.holiday,g=void 0===v?[]:v,x=e.handleClick,w=void 0===x?function(){return null}:x,O=e.handleMouseOver,k=void 0===O?function(){return null}:O,S=e.handleMouseOut,D=void 0===S?function(){return null}:S,j=f-1,M="calendar ".concat(i.monthClass[j]," ").concat(h);return n.default.createElement("div",{className:M},n.default.createElement(a.default,{lang:r,year:u,month:j,visibleYear:m}),n.default.createElement(o.default,{startDayWeek:p,lang:r}),n.default.createElement(l.default,{startDayWeek:p,year:u,month:j,holiday:g,handleClick:w,handleMouseOver:k,handleMouseOut:D}))};t.Z=u},174:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.days=void 0;t.days={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mo","Tu","We","Th","Fr","Sa","Su"],de:["Mo","Di","Mi","Do","Fr","Sa","So"],fr:["Lu","Ma","Me","Je","Ve","Sa","Di"],su:["Ma","Ti","Ke","To","Pe","La","Su"]}},3030:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.months=void 0;t.months={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]}},600:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.monthClass=void 0;t.monthClass=["january","february","march","april","may","june","july","august","september","october","november","december"]},3777:function(e,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e){return n="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.numberDayInYear=t.getWeeksInMonth=t.dayInMonth=t.dayForWeek=void 0;var u=["calendar-body-col"],d=function(e,t){var r=(new Date).setHours(0,0,0,0),n=new Date(r).getMonth(),a=new Date(r).getFullYear();return{isCurDate:n==e&&a==t,curDate:r}};t.dayForWeek=function(e,t,r,n,a){var l=[[]],c=d(t,e),s=t-1<0?11:t-1,m=t+1>11?0:t+1;a.length&&(a=(a=a.filter((function(e){return e.month==t||e.month==s||e.month==m}))).map((function(e){return o(o({},e),{},{class:e.class?e.class:"",hint:e.hint?e.hint:[],id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})})));for(var y=1;y<=r;y++){var p,b=new Date(e,t,y),h="";b.setHours(0,0,0,0),h=0==b.getDay()||6==b.getDay()?"output":"",b.getTime()==c.curDate&&(h+=" curDate");var v=[];if(1==y&&b.getDay()!=n&&(v=i(f(e,t,b.getDay(),n,"prev"))),0!=y&&b.getDay()==n&&l.push([]),v=[].concat(i(v),[{id:b.getTime(),time:b.getTime(),day:b.getDate(),className:[].concat(u,[h]),hint:[]}]),y==r&&b.getDay()<=6){var g=f(e,t,b.getDay(),n,"next");v=[].concat(i(v),i(g))}(p=l[l.length-1]).push.apply(p,i(v))}return function(e,t){var r=i(e);return i(t).map((function(e){return i(e.map((function(e){var t=r.filter((function(t){return t.id==e.id}));return t.length?o(o({},e),{},{className:[].concat(i(e.className),[t[0].class?t[0].class:"holiday"]),hint:[].concat(i(e.hint),i(t[0].hint))}):o({},e)})))}))}(a,l)};var f=function(e,t,r,n,a){var l=[],i="prev"==a?r-n:6-r+n,c=d("prev"==a?t-1<0?11:t-1:t+1>11?0:t+1,"prev"==a?t-1<0?e-1:e:t+1>11?+e+1:e);i="prev"==a?i<0?7-n:i:i=7==i?0:i;for(var f=0;f<i;f++){var s="prev"==a?new Date(e,t,-f):new Date(e,t+1,f+1);s.setHours(0,0,0,0);var m=0==s.getDay()||6==s.getDay()?"output":"";s.getTime()==c.curDate&&(m+=" curDate");var y={id:s.getTime(),time:s.getTime(),day:s.getDate(),className:[].concat(u,["prev"==a?"prev":"next",m]),hint:[]};"prev"==a?l.unshift(o({},y)):l.push(o({},y))}return l};t.dayInMonth=function(e,t){return new Date(e,t+1,0).getDate()};t.numberDayInYear=function(e,t){var r=new Date(Number(t)),n=new Date(e-1,11,31);return(r.getTime()-n.getTime())/864e5};t.getWeeksInMonth=function(e,t){var r=new Date(e,t+1,0);return Math.ceil((r.getDate()-(r.getDay()?r.getDay():7))/7)+1}},4192:function(e,t,r){var n=r(7294),a=r(745),o=r(4989).Z,l=2023,i=[{year:l,month:0,day:13,class:"",hint:[{title:"День рождения Ермолова Константина Петровича",desc:"Костику 24 года, он любит панк-рок, ска. Костик работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:l,month:1,day:10,class:"",hint:[{title:"День рождения Иванова Дмитрия Евгеньевича",desc:"Дмитрию 32 года он любит пиво и хардкор. Дима работает в отделе веб-дизайна, старшим веб-дизайнером. "}]},{year:l,month:2,day:9,class:"",hint:[{title:"День рождения Романова Павла Евгеньевича",desc:"Павлу 30 лет, он любит читать, слушать музыку, рисовать. Паша работает в отделе веб-разработки, верстальщиком."}]},{year:l,month:3,day:8,class:"",hint:[{title:"День рождения Сазонова Петра Алексеевича",desc:"Петру 36 лет, он любит спорт. Петр работает в отделе веб-разработки, ведущим программистом"}]},{year:l,month:4,day:21,class:"",hint:[{title:"День рождения Петренко Константина Михайловича",desc:"Костику 26 лет он ходить в походы. Костик работает в отделе SEO-продвижения, младши копирайтером."}]},{year:l,month:5,day:18,class:"",hint:[{title:"День рождения Колпакова Евгения Борисовича",desc:"Жени 33 года он любит свою работу. Женя работает в отделе SEO-продвижения,  копирайтером."}]},{year:l,month:6,day:24,class:"",hint:[{title:"День рождения Николаева Михаила Романовича",desc:"Мише 20 лет, он любит учиться. Миша работает в отделе продаж, помощником менеджера продаж."}]},{year:l,month:7,day:13,class:"",hint:[{title:"День рождения Насонова Максима Петровича",desc:"Максу 25 лет он любит слушать музыку. Макс работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:l,month:8,day:25,class:"",hint:[{title:"День рождения Мирошниченко Алексея Михайловича",desc:"Алексею 42 года он любит шахматы. Алексей работает директором по развитию."}]},{year:l,month:9,day:6,class:"",hint:[{title:"День рождения Орлова Дмитрия Николаевича",desc:"Диме 30 лет, он любит велоспорт. Дима работает в отделе продаж. Ведущим аккаунт-менеджером."}]},{year:l,month:10,day:25,class:"",hint:[{title:"День рождения Козлова Дмитрия Олеговича",desc:"Диме 36 лет он любит русский рок. Дима работает в отделе SEO-продвижения, старшим копирайтером"}]},{year:l,month:11,day:22,class:"",hint:[{title:"День рождения Кондратьева Романа Петровича",desc:"Роману 27 лет он любит играть в шахматы. Роман работает в отделе веб-разработки, ведущим веб-программистом. "}]}],c=(r(1457),r(3379)),u=r.n(c),d=r(7795),f=r.n(d),s=r(569),m=r.n(s),y=r(3565),p=r.n(y),b=r(9216),h=r.n(b),v=r(4589),g=r.n(v),x=r(4709),w={};w.styleTagTransform=g(),w.setAttributes=p(),w.insert=m().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=h();u()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var O=r(9561),k={};k.styleTagTransform=g(),k.setAttributes=p(),k.insert=m().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=h();u()(O.Z,k),O.Z&&O.Z.locals&&O.Z.locals;var S=r(6092),D={};D.styleTagTransform=g(),D.setAttributes=p(),D.insert=m().bind(null,"head"),D.domAPI=f(),D.insertStyleElement=h();u()(S.Z,D),S.Z&&S.Z.locals&&S.Z.locals;function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===j(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=document.getElementById("app"),I=function(){var e=P((0,n.useState)(2023),2),t=e[0],r=(e[1],P((0,n.useState)((new Date).getMonth()+1),2)),a=r[0],l=r[1],c=P((0,n.useState)({birthdays:T(i),form:{time:"",isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}}}),2),u=c[0],d=c[1],f=function(e){var t=u.birthdays,r=u.form,n=e.target;d({birthdays:T(t),form:E(E({},r),{},C({},n.name,{value:n.value,alarmText:""}))})},s=function(e){var t=new Date(e);return{year:t.getFullYear(),month:t.getMonth(),day:t.getDate()}},m=function(e){var t=s(e);return"".concat(t.day," ").concat(["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.month]," ").concat(t.year)};return n.createElement("div",{className:"exampleCalendar"},n.createElement("h2",null,"Выбрать дату"),n.createElement("form",{onSubmit:function(e){e.preventDefault();var t=u.form,r=u.birthdays,n=t.date.value?"":"Поле не заполнено",a=t.title.value?"":"Поле не заполнено",o=t.text.value?"":"Поле не заполнено";if(n||a||o)d({birthdays:T(r),form:{time:t.time,isDelete:t.isDelete,title:{value:t.title.value,alarmText:a},text:{value:t.text.value,alarmText:o},date:{value:t.date.value,alarmText:n}}});else{var l=s(t.time),i=r.filter((function(e){return!(e.day==l.day&&e.month==l.month)}));d({birthdays:[].concat(T(i),[E(E({},l),{},{class:"holiday",hint:[{title:t.title.value,desc:t.text.value}]})]),form:E(E({},t),{},{isDelete:!0})})}}},n.createElement("div",{className:u.form.date.alarmText?"row alarm":"row"},n.createElement("div",{className:"dateCheck"},n.createElement("div",{className:"prevM",onClick:function(){l(a<2?a:a-1)}},"◄"),n.createElement("div",{className:"nextM",onClick:function(){l(a>11?a:a+1)}},"►"),n.createElement(o,{visibleYear:!1,year:t,month:a,holiday:u.birthdays,handleClick:function(e){var t=u.birthdays,r=s(e),n=m(e),a="",o="",l=!1,i=t.findIndex((function(e){return e.day==r.day&&e.month==r.month&&!e.new})),c=t.reduce((function(e,t){return t.new?T(e):[].concat(T(e),[E(E({},t),{},{class:""})])}),[]);-1!=i?(l=!0,a=t[i].hint[0].title,o=t[i].hint[0].desc,c=c.map((function(e,t){var r=t==i?"selected holiday":"";return E(E({},e),{},{class:r})}))):c=[].concat(T(c),[{year:r.year,month:r.month,day:r.day,hint:[],class:"selected",new:!0}]),d({birthdays:T(c),form:{time:e,isDelete:l,title:{value:a,alarmText:""},text:{value:o,alarmText:""},date:{value:n,alarmText:""}}})},handleMouseOver:function(e){m(e)},handleMouseOut:function(e){m(e)}})),n.createElement("div",{className:"chosenDate"},u.form.date.value?"Дата: "+u.form.date.value:"Дата не выбрана")),n.createElement("div",{className:u.form.title.alarmText?"row alarm":"row"},n.createElement("label",null,"Заголовок сообщения"),n.createElement("input",{type:"text",name:"title",value:u.form.title.value,onChange:f}),u.form.title.alarmText?n.createElement("div",{className:"hint"},u.form.title.alarmText):null),n.createElement("div",{className:u.form.text.alarmText?"row alarm":"row"},n.createElement("label",null,"Текст сообщения"),n.createElement("textarea",{type:"text",name:"text",value:u.form.text.value,onChange:f}),u.form.text.alarmText?n.createElement("div",{className:"hint"},u.form.text.alarmText):null),n.createElement("div",{className:"row space-between-align"},n.createElement("button",{className:"mdc-button"},"Сохранить"),u.form.isDelete?n.createElement("button",{className:"mdc-button",onClick:function(e){e.preventDefault();var t=u.birthdays,r=u.form,n=s(u.form.time),a=t.filter((function(e){return e.month==n.month?e.day!=n.day:e.month!=n.month}));d({birthdays:T(a),form:E(E({},r),{},{isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}})})}},"Удалить событие"):null)),n.createElement("h2",null,"Дни рождения сотрдников на ",t," год"),n.createElement("div",{className:"exampleCalendar-group"},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){return n.createElement("div",{key:e,className:"exampleCalendar-item"},n.createElement(o,{visibleYear:!1,year:t,month:e,holiday:u.birthdays}))}))))};a.createRoot(_).render(n.createElement(I,null))},4709:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),l=r.n(o)()(a());l.push([e.id,'.calendar{color:#000;width:100%;text-align:center;border:1px solid #424242;font:16px/120% "RobotoDraft"}.calendar .curDate{background:#ffd740}.calendar .curDate .calendar-body-day{background-color:#ffc400}.calendar .output{background-color:#ff5252}.calendar .holiday{cursor:pointer;background-color:#ff1744}.calendar-head{padding:20px 0;background:#e6ee9c}.calendar-day{width:100%}.calendar-day-col{padding:4% 0;background:#dce775;border:1px solid #424242;border-right:none;border-bottom:none}.calendar-day-col:first-of-type{border-left:none}.calendar-body-day{width:34px;height:34px;line-height:34px;display:inline-block;border-radius:50%}.calendar-body-row{width:100%}.calendar-body-col{position:relative;padding:2% 0;border:1px solid #424242;border-right:none;border-bottom:none;background-color:#aed581;transition:background-color .15s ease-in-out 0s}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;margin-left:-140px}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:280px;padding:15px;border-radius:10px;background-color:#dce775;box-shadow:0 0 10px rgba(0,0,0,0.5)}.calendar-body-title{font:16px/120% "RobotoDraft";margin:0 0 5px}.calendar-body-desc{font:14px/140% "RobotoDraft"}.calendar .prev div,.calendar .next div{opacity:.4}.calendar .prev:hover .calendar-body-hint,.calendar .next:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .workDay{background-color:#7cb342}\n',""]),t.Z=l},6092:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),l=r.n(o)()(a());l.push([e.id,'.dateCheck .calendar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.dateCheck .calendar .selected{background-color:#f97d95}.dateCheck .calendar .prev,.dateCheck .calendar .next{cursor:text}.dateCheck .calendar .prev:hover,.dateCheck .calendar .next:hover{background-color:#aed581}.dateCheck .calendar .prev.output:hover,.dateCheck .calendar .next.output:hover{background-color:#ff5252}.dateCheck .calendar-body-col{cursor:pointer}.dateCheck .calendar-body-col:hover{background-color:#f97d95}form{max-width:600px;margin:30px auto;position:relative}form textarea,form input[type="text"]{display:block;width:100%;margin:10px 0;padding:10px 15px;border-radius:5px;box-sizing:border-box;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;border:1px solid #ced4da;appearance:none;outline:none;font:16px/120% \'RobotoDraft\';transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out}form textarea.focus,form textarea:focus,form input[type="text"].focus,form input[type="text"]:focus{color:#212529;border-color:#86b7fe;box-shadow:0 0 0 2px rgba(13,110,253,0.25)}form textarea:placeholder,form input[type="text"]:placeholder{color:#6c757d;opacity:1}form .alarm .chosenDate{color:#ff1744}form .alarm textarea,form .alarm input[type="text"]{border-color:#ff1744}form .alarm textarea:focus,form .alarm input[type="text"]:focus{box-shadow:0 0 0 2px rgba(255,0,0,0.25)}form textarea{height:186px;resize:vertical}form .row{text-align:left;margin:20px 0}form .hint{color:#ff1744}form .space-between-align{display:flex;justify-content:space-between}form .dateCheck{width:100%;margin:0 0 30px;position:relative;background-color:#fff;box-shadow:0 0 30px rgba(0,0,0,0.5)}form .nextM,form .prevM{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}form .nextM,form .prevM{top:15px;width:30px;height:30px;color:#fff;cursor:pointer;position:absolute;border-radius:50%;text-align:center;line-height:30px;font-size:14px;background-color:#ffab40;transition:background-color .15s ease-in-out}form .nextM:hover,form .prevM:hover{background-color:#ff9100}form .nextM:active,form .prevM:active{background-color:#ff6d00}form .prevM{left:30px}form .nextM{right:30px}\n',""]),t.Z=l},9561:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),l=r.n(o)()(a());l.push([e.id,".exampleCalendar{text-align:center;font-size:16px;font-family:'RobotoDraft'}.exampleCalendar-lang{max-width:100px;text-align:left;margin:5px auto}.exampleCalendar-lang label{padding-left:5px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:flex;flex-wrap:wrap;max-width:1400px;margin:40px auto;justify-content:center;font-family:'RobotoDraft'}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:'RobotoDraft', sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835;transition:background-color .15s ease-in-out, box-shadow .15s ease-in-out}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:active{background-color:#f2c80d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}@media screen and (max-width: 900px){.calendar-body-col:nth-of-type(1):hover .calendar-body-hint{left:0;margin-left:0}.calendar-body-col:nth-of-type(2):hover .calendar-body-hint{left:-100%;margin-left:0}.calendar-body-col:nth-of-type(5):hover .calendar-body-hint{left:auto;right:-200%;margin-left:0}.calendar-body-col:nth-of-type(6):hover .calendar-body-hint{left:auto;right:-100%;margin-left:0}.calendar-body-col:nth-of-type(7):hover .calendar-body-hint{left:auto;right:0;margin-left:0}}\n",""]),t.Z=l}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={93:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,l=r[0],i=r[1],c=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var d=c(n)}for(t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunkreact_production_calendar=self.webpackChunkreact_production_calendar||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.nc=void 0;var a=n.O(void 0,[592],(function(){return n(4192)}));a=n.O(a)}();