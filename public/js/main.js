!function(){"use strict";var e={1113:function(e,t,r){var n=r(7294),a=r(3935),o={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Kann","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Peut","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Saattaa","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]};function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e){var t=e.lang,r=e.year,a=e.month,c=e.visibleYear,l=i(o[t.toLowerCase()]),u=new Date(r,a),d=l[u.getMonth()],s=c?u.getFullYear():"";return n.createElement("div",{className:"calendar-head"},d," ",s)},u=(r(2222),r(1249),r(7042),{ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mon","Tue","Wed","Thu","May","Fri","Sat","Sun"],de:["Mon","Die","Mit","Don","Fre","Sum","Son"],fr:["Lun","Mar","Mer","Jeu","Ven","Sem","Dim"],su:["Mn","Ts","Ks","Tr","Pj","Ln","Sn"]});function d(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e){var t=e.startDayWeek,r=e.lang,a=d(u[r]),o=0==t?[].concat(d(a.slice(6)),d(a.slice(0,6))):a;return n.createElement("div",{className:"calendar-day"},o.map((function(e,t){return n.createElement("div",{className:"calendar-day-col",key:t},e)})))};r(9600),r(7327),r(9653);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=["calendar-body-col"],v=function(e,t){var r=(new Date).setHours(0,0,0,0),n=new Date(r).getMonth(),a=new Date(r).getFullYear();return{isCurDate:n==e&&a==t,curDate:r}},x=function(e,t,r,n,a){var o=[[]],i=v(t,e),c=t-1<0?11:t-1,l=t+1>11?0:t+1;a=(a=a.filter((function(e){return e.month==t||e.month==c||e.month==l}))).map((function(e){return m(m({},e),{},{id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})}));for(var u=1;u<=r;u++){var d,s=new Date(e,t,u),y="";s.setHours(0,0,0,0),y=0==s.getDay()||6==s.getDay()?"output":"",s.getTime()==i.curDate&&(y+=" curDate");var f=[];if(1==u&&s.getDay()!=n)f=p(w(e,t,s.getDay(),n));if(0!=u&&s.getDay()==n&&o.push([]),f=[].concat(p(f),[{id:s.getTime(),day:s.getDate(),className:[].concat(g,[y]),hint:[]}]),u==r&&s.getDay()<=6){var b=k(e,t,s.getDay(),n);f=[].concat(p(f),p(b))}(d=o[o.length-1]).push.apply(d,p(f))}return o=function(e,t){var r=p(e),n=p(t);return n.map((function(e){return p(e.map((function(e){var t=r.filter((function(t){return t.id==e.id}));return t.length?m(m({},e),{},{className:[].concat(p(e.className),[t[0].class,"holiday"]),hint:[].concat(p(e.hint),p(t[0].hint))}):m({},e)})))}))}(a,o)},w=function(e,t,r,n){var a=[],o=r-n,i=v(t-1<0?11:t-1,t-1<0?e-1:e);o=o<0?7-n:o;for(var c=0;c<o;c++){var l=new Date(e,t,-c),u=0==l.getDay()||6==l.getDay()?"output":"";l.setHours(0,0,0,0),l.getTime()==i.curDate&&(u+=" curDate"),a.unshift({id:l.getTime(),day:l.getDate(),className:[].concat(g,["prev",u]),hint:[]})}return a},k=function(e,t,r,n){var a=[],o=6-r+n,i=v(t+1>11?0:t+1,t+1>11?+e+1:e);o=7==o?0:o;for(var c=0;c<o;c++){var l=new Date(e,t+1,c+1),u="";l.setHours(0,0,0,0),u=0==l.getDay()||6==l.getDay()?"output":"",i.isCurDate&&l.getTime()==i.curDate&&(u+=" curDate"),a.push({id:l.getTime(),day:l.getDate(),className:[].concat(g,["next",u]),hint:[]})}return a},D=function(e){var t=e.year,r=e.month,a=e.startDayWeek,o=e.holiday,i=function(e,t){return new Date(e,t+1,0).getDate()}(t,r),c=x(t,r,i,a,o);return n.createElement("div",{className:"calendar-body"},c.map((function(e,t){return n.createElement("div",{key:t,className:"calendar-body-row"},e.map((function(e){return n.createElement("div",{className:e.className.join(" "),key:e.id},n.createElement("div",{className:"calendar-body-day"},e.day),e.hint.map((function(e,t){return n.createElement("div",{className:"calendar-body-hint",key:t},n.createElement("div",{className:"calendar-body-title"},e.title),n.createElement("div",{className:"calendar-body-desc"},e.desc))})))})))})))},j=["january","february","march","april","may","june","july","august","september","october","november","december"],O=r(3379),S=r.n(O),A=r(5145),E={insert:"head",singleton:!1},C=(S()(A.Z,E),A.Z.locals,function(e){var t=e.lang,r=void 0===t?"ru":t,a=e.year,o=void 0===a?"2020":a,i=e.month,c=void 0===i?"1":i,u=e.visibleYear,d=void 0===u||u,s=e.startDayWeek,f=void 0===s?1:s,m=e.holiday,b=void 0===m?[]:m,p=c-1,h="calendar ".concat(j[p]);return n.createElement("div",{className:h},n.createElement(l,{lang:r,year:o,month:p,visibleYear:d}),n.createElement(y,{startDayWeek:f,lang:r}),n.createElement(D,{startDayWeek:f,year:o,month:p,holiday:b}))}),N=[{year:2021,month:0,day:1,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:2,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:3,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:4,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:5,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:6,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:7,class:"",hint:[{title:"Рождество Христово",desc:"Один из главных христианских праздников, отмечается всеми христианскими деноминациями."}]},{year:2021,month:0,day:8,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:1,day:20,class:"workDay",hint:[{title:"Рабочий день",desc:"Этот день будет рабочим, зато понедельник будет выходным"}]},{year:2021,month:1,day:22,class:"",hint:[{title:"Выходной день",desc:"В этом году 23 февраля выходит на вторник, и было решено сделать субботу рабочим днем, а выходной перенести на понедельник."}]},{year:2021,month:1,day:23,class:"",hint:[{title:"День защитника отечества",desc:"Тут особо и не попишешь, вобщем женщинам нужно успеть закупиться носками и пеной для бритья."}]},{year:2021,month:2,day:8,class:"",hint:[{title:"8 марта",desc:"Международный женский день. Появился как день солидарности женщин в борьбе за равные права и эмансипацию. С марта 1975 года Международный женский день отмечается в ООН. А если по честному, то кроме СНГ нигде он не отмечается."}]},{year:2021,month:4,day:1,class:"",hint:[{title:"1 мая",desc:"В современной России 1 мая отмечается как Праздник Весны и Труда. Первомай в современном виде возник в середине XIX века в рабочем движении, выдвинувшем в качестве одного из основных требований введение восьмичасового рабочего дня. Первыми с требованием восьмичасового рабочего дня выступили рабочие Австралии 21 апреля 1856 года. С тех пор этот праздник в Австралии стал ежегодным. По образцу рабочих Австралии 1 мая 1886 года анархические организации США и Канады устроили ряд митингов и демонстраций. При разгоне такой демонстрации в Чикаго 4 мая 1886 года погибли шесть демонстрантов. "}]},{year:2021,month:4,day:3,class:"",hint:[{title:"Выходной день",desc:"Так как 1 мая выходит на субботу, выходной переноситчя на понедельник."}]},{year:2021,month:4,day:9,class:"",hint:[{title:"9 мая – День Победы",desc:"Праздник победы Красной Армии и советского народа над нацистской Германией в Великой Отечественной войне 1941—1945 годов. Установлен Указом Президиума Верховного Совета СССР от 8 мая 1945 года и отмечается 9 мая каждого года. В 1945—1947 и с 1965 года День Победы — нерабочий праздничный день."}]},{year:2021,month:4,day:10,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году 9 мая выпадает на воскресенье, то он соответственно переносится на понедельник."}]},{year:2021,month:5,day:12,class:"",hint:[{title:"День России",desc:"День принятия Декларации о государственном суверенитете РСФСР, в просторечии - День независимости. Наверное, это самый противоречивый праздник в современной Российской действительности.)))"}]},{year:2021,month:5,day:14,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году день России выходит на субботу , выходной переносится на понедельник."}]},{year:2021,month:10,day:4,class:"",hint:[{title:"День народного единства",desc:"22 октября (1 ноября) 1612 года народное ополчение под предводительством Кузьмы Минина и Дмитрия Пожарского штурмом взяло Китай-город, гарнизон Речи Посполитой отступил в Кремль. Князь Пожарский вступил в Китай-город с Казанской иконой Божией Матери. 23 октября (2 ноября) командование гарнизона подписало капитуляцию, выпустив тогда же из Кремля московских бояр и других знатных лиц. На следующий день 24 октября (3 ноября) гарнизон сдался. "}]},{year:2021,month:10,day:5,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]},{year:2021,month:11,day:31,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]}],M=r(7219),T={insert:"head",singleton:!1};S()(M.Z,T),M.Z.locals;function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var J=document.getElementById("app"),z=function(){var e=I((0,n.useState)(1),2),t=e[0],r=e[1],a=I((0,n.useState)(1),2),o=a[0],i=a[1];return n.createElement("div",{className:"exampleCalendar"},n.createElement("button",{className:"mdc-button",onClick:function(){i((function(e){return e-1}))}},"Уменьшить месяц"),n.createElement("button",{className:"mdc-button",onClick:function(){r((function(e){return 1==e?0:1}))}},"Изменить начальный день недели"),n.createElement("button",{className:"mdc-button",onClick:function(){i((function(e){return e+1}))}},"Увеличить месяц"),n.createElement("div",{className:"exampleCalendar-wrap"},n.createElement(C,{lang:"ru",year:"2021",month:o,visibleYear:!0,startDayWeek:t,holiday:N})))};a.render(n.createElement(z,null),J)},5145:function(e,t,r){var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".calendar{color:#000;width:100%;text-align:center;border:1px solid #424242;font:16px/120% RobotoDraft}.calendar .calendar-body-col,.calendar .calendar-day-col{width:14.28571428571429%}.calendar .curDate .calendar-body-day{background-color:#fff176}.calendar .output{background-color:#ff5252}.calendar .holiday{background-color:#ff1744}.calendar-head{padding:20px 0;background:#e6ee9c}.calendar-day{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.calendar-day-col{padding:4% 0;background:#dce775;border:1px solid #424242;border-right:none;border-bottom:none}.calendar-day-col:first-of-type{border-left:none}.calendar-body-day{width:34px;height:34px;line-height:34px;display:inline-block;border-radius:50%}.calendar-body-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.calendar-body-col{position:relative;padding:2% 0;border:1px solid #424242;border-right:none;border-bottom:none;background-color:#aed581}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;margin-left:-140px}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:280px;padding:15px;border-radius:10px;background-color:#dce775;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5)}.calendar-body-title{font:16px/120% RobotoDraft;margin:0 0 5px}.calendar-body-desc{font:14px/140% RobotoDraft}.calendar .next div,.calendar .prev div{opacity:.4}.calendar .next:hover .calendar-body-hint,.calendar .prev:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .workDay{background-color:#7cb342}",""]),t.Z=a},7219:function(e,t,r){var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".exampleCalendar{text-align:center;font-family:RobotoDraft}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1400px;margin:40px auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:RobotoDraft}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:RobotoDraft,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:14px;font-size:.875rem;line-height:36px;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:active{outline:none}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}",""]),t.Z=a}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.x=function(){},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1113,592]],n=function(){},a=function(a,o){for(var i,c,l=o[0],u=o[1],d=o[2],s=o[3],y=0,f=[];y<l.length;y++)c=l[y],r.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(d&&d(r),a&&a(o);f.length;)f.shift()();return s&&t.push.apply(t,s),n()},o=self.webpackChunkwbp_boilerplate=self.webpackChunkwbp_boilerplate||[];function i(){for(var n,a=0;a<t.length;a++){for(var o=t[a],i=!0,c=1;c<o.length;c++){var l=o[c];0!==e[l]&&(i=!1)}i&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=function(){}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var c=r.x;r.x=function(){return r.x=c||function(){},(n=i)()}}(),r.x()}();