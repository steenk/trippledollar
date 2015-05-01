/* tripledollar v.0.10.0, (c) 2015 Steen Klingberg. License MIT. */
(function(e){"use strict";var t="0.10.0",n={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"},i="svg xlink xhtml ",r=function f(e,t){var n=e.length,i=[],r=0,s=0;while(r<n){if(e[r]==="."||e[r]==="#"){if(t){i[s++]=e[r]}else{i.push(e.slice(s,r));s=r+1}}r++;if(!t&&r===n){i.push(e.slice(s))}}return i},s=function(e){var t=Array.prototype.slice.call(arguments,1),o,a,l,c,f,u,d,p=/^[A-Za-z][A-Za-z0-9-_\.:#]*$/;if(typeof e!=="string"){if(Object.prototype.toString.call(e)==="[object Array]"){return s.apply(this,e)}return}o=r(e,false);a=r(e,true);for(c=0;c<o.length;c++){if(o[c]&&!p.test(o[c])){return}if(c===0){f=o[0].split(":");if(i.indexOf(f[0]+" ")>-1){l=document.createElementNS(n[f[0]],f[1]||f[0])}else{l=document.createElement(f[1]||f[0])}}else{if(l&&a[c-1]==="."){d=l.getAttribute("class");u=d?d.split(" "):[];if(o[c]&&u.indexOf(o[c])===-1){u.push(o[c]);l.setAttribute("class",u.join(" "))}}else if(a[c-1]==="#"){l.setAttribute("id",o[c])}}}function h(e){var t,i,r,o,a;for(i=0;i<e.length;i++){t=e[i];if(t&&t.nodeType){l.appendChild(t)}else if(typeof t==="object"){if(Object.prototype.toString.call(t)==="[object Array]"){l.appendChild(s.apply(this,t))}else{for(o in t){if(t.hasOwnProperty(o)){if(/^data./.test(o)){a=o.substr(4).toLowerCase();l.setAttribute("data-"+a,t[o])}else{r=o.split(":");if(r.length===2&&Object.keys(n).indexOf(r[0])>-1){l.setAttributeNS(n[r[0]],r[1],t[o])}else{l.setAttribute(o,t[o])}}}}}}else{l.appendChild(document.createTextNode(String(t)))}}}h(t);function y(e){var t,n,i;for(t in e){if(e.hasOwnProperty(t)){if(typeof e[t]!=="object"){this.style[t]=e[t]}else{n=this.querySelectorAll(t);for(i=0;i<n.length;i++){y.call(n[i],e[t])}}}}return this}l.css=y;l.set=function(e,t){this[e]=t;return this};l.fun=function(e){var t=Array.prototype.slice.call(arguments,1);this[e].apply(this,t);return this};l.evt=function(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(e,function(e){var i=[e].concat(n);t.apply(this,i)},false)}else{this.attachEvent("on"+e,function(e){var i=[e].concat(n);t.apply(this,i)})}}else{if(this.addEventListener){this.addEventListener(e,t,false)}else{this.attachEvent("on"+e,t)}}return this};l.ins=function(){h(Array.prototype.slice.call(arguments));return this};l.query=l.querySelector;l.queryAll=l.querySelectorAll;l.prototype=l;return l},o,a,l,c;s.version=t;s.structify=function(e){var t=null,n;if(e.nodeType===1){n=function(e){var t=[],i,r,s,o,a,l=/id|class|contenteditable/,c=e.localName,f=String(e.className).replace(" ",".");if(f){c+="."+f}if(e.id){c+="#"+e.id}t.push(c);if(e.hasAttributes()){r=e.attributes;i={};for(a=0;a<r.length;a++){if(!l.test(r[a].name)){i[r[a].name]=r[a].value}}if(Object.keys(i).length>0){t.push(i)}}e.normalize();s=e.childNodes;for(a=0;a<s.length;a++){if(s[a].nodeType===3){o=s[a].data.replace(/\s\s*/," ").trim();if(o.length>0){t.push(o)}}else if(s[a].nodeType===1){t.push(n(s[a]))}}return t};t=n(e)}return t};s.onReady=function(e){if(document.readyState==="complete"||document.readyState==="interactive"){o(e)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e,false)}else{document.attachEvent("onreadystatechange",e)}};if(e.setImmediate){o=e.setImmediate}else{l=[];c="doNext"+(Math.random()*67108864|0).toString(16);a=function(t){var n,i;if(t.source===e&&typeof t.data==="string"&&t.data.indexOf(c)===0){i=l.shift();if(i.length>0){n=i[0].apply(undefined,i.splice(1),true);if(l[0]&&l[0].length===1){l[0].push(n)}}}};if(e.postMessage){if(e.addEventListener){e.addEventListener("message",a,false)}else{e.attachEvent("message",a)}}o=function(){var t=Array.prototype.slice.call(arguments);if(typeof t[0]==="function"){l.push(t);e.postMessage(c,"*")}}}s.setImmediate=o;s.appendToDoc=function u(){var t=Array.prototype.slice.call(arguments),n,i=[];u.then=function(e){if(u===e){throw new TypeError("Circular reference.")}if(typeof e==="function"){i.push(e)}else{console.log('$$$: Only functions can be passed to "then()"!')}return u};u.catch=function(e){console.log("$$$: Error occured.",e);return u};function r(i){s.onReady(function(){for(n=0;n<t.length;n++){if(Object.prototype.toString.call(t[n])==="[object Array]"){document.body.appendChild(s(t[n]))}else if(t[n]instanceof e.HTMLElement||t[n]instanceof e.SVGSVGElement){document.body.appendChild(t[n])}else if(typeof t[n]==="function"){t[n]()}}i()})}if(Promise!==undefined){return new Promise(function(e,t){try{r(e)}catch(n){t(n)}})}else{r(function(){var e;i.forEach(function(t){o(function(){if(e&&e.then){e.then(function(e){t(e)})}else{e=t(e)}})})});return u}};s.query=function(e){return document.querySelector(e)};s.queryAll=function(e){return document.querySelectorAll(e)};if(typeof e.define==="function"){e.define(function(){return s})}else if(typeof module==="object"){module.exports=s}else{e.$$$=s}})(this);