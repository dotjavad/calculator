(window.webpackJsonpcalc=window.webpackJsonpcalc||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(9),a(1)),u=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},l=function(e){return Number(e)===e&&e%1!==0};a(10);var d=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),d=Object(o.a)(i,2),s=d[0],f=d[1],m=Object(n.useState)(),k=Object(o.a)(m,2),v=k[0],b=k[1],y=Object(n.useState)(!1),E=Object(o.a)(y,2),p=E[0],C=E[1],N=Object(n.useState)(""),w=Object(o.a)(N,2),O=w[0],h=w[1],F=function(e){b(l(e)?e.toFixed(1):e),c(l(e)?e.toFixed(1):e)},j=function(e){var t=e.target.dataset.key;switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":p?(f(t),c(t),C(!p)):(c(a+t),f(a+t)),-1===String(a).indexOf(".")&&String(a).startsWith("0")&&(c(t),f(t));break;case"+":if("undefined"!==typeof s){if(!1===p){var n="undefined"!==typeof v?parseFloat(v)+Number(s):Number(s);F(n)}C(!0),h("+")}break;case"-":if("undefined"!==typeof s){if(!1===p){var r="undefined"!==typeof v?parseFloat(v)-Number(s):Number(s);F(r)}C(!0),h("-")}break;case"*":if("undefined"!==typeof s){if(!1===p){var i="undefined"!==typeof v?parseFloat(v)*Number(s):Number(s);F(i)}C(!0),h("*")}break;case"/":if("undefined"!==typeof s){if(!1===p){var o="undefined"!==typeof v?parseFloat(v)/Number(s):Number(s);F(o)}C(!0),h("/")}break;case"=":if("+"===O){var u=parseFloat(v)+Number(s);F(u)}if("-"===O){var l=parseFloat(v)-Number(s);F(l)}if("*"===O){var d=parseFloat(v)*Number(s);F(d)}if("/"===O){var m=parseFloat(v)/Number(s);F(m),isFinite(m)||(C(!0),b())}break;case"comma":-1===a.indexOf(".")&&(c(a+"."),f(a+"."));break;case"inv":a.startsWith("-")?(c(a.replace("-","")),f(s.replace("-",""))):(c("-".concat(a)),f("-".concat(s)));break;case"clear":c("0"),f(),b(),C(!1)}};return r.a.createElement("div",{className:"calc"},r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"current"},r.a.createElement("h1",null,u(a)))),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{"data-key":"clear",onClick:function(e){return j(e)}},"c"),r.a.createElement("div",{"data-key":"inv",onClick:function(e){return j(e)}},"+ / -"),r.a.createElement("div",{"data-key":"%",onClick:function(e){return j(e)}},"%"),r.a.createElement("div",{"data-key":"*",onClick:function(e){return j(e)}},"x"),r.a.createElement("div",{"data-key":"7",onClick:function(e){return j(e)}},"7"),r.a.createElement("div",{"data-key":"8",onClick:function(e){return j(e)}},"8"),r.a.createElement("div",{"data-key":"9",onClick:function(e){return j(e)}},"9"),r.a.createElement("div",{"data-key":"/",onClick:function(e){return j(e)}},"/"),r.a.createElement("div",{"data-key":"4",onClick:function(e){return j(e)}},"4"),r.a.createElement("div",{"data-key":"5",onClick:function(e){return j(e)}},"5"),r.a.createElement("div",{"data-key":"6",onClick:function(e){return j(e)}},"6"),r.a.createElement("div",{"data-key":"-",onClick:function(e){return j(e)}},"-"),r.a.createElement("div",{"data-key":"1",onClick:function(e){return j(e)}},"1"),r.a.createElement("div",{"data-key":"2",onClick:function(e){return j(e)}},"2"),r.a.createElement("div",{"data-key":"3",onClick:function(e){return j(e)}},"3"),r.a.createElement("div",{"data-key":"+",onClick:function(e){return j(e)}},"+"),r.a.createElement("div",{"data-key":"0",onClick:function(e){return j(e)}},"0"),r.a.createElement("div",{"data-key":"comma",onClick:function(e){return j(e)}},"."),r.a.createElement("div",{"data-key":"=",onClick:function(e){return j(e)}},"=")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.43a093a0.chunk.js.map