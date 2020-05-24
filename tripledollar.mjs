/* tripledollar v.1.7.6, (c) 2020 Steen Klingberg. License MIT. */
let VERSION="1.7.6",ns={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"};export default function $$$(ident){var args=Array.prototype.slice.call(arguments,1),identparts,elem,i,nsparts,classlist=[],re=/^[A-Za-z][A-Za-z0-9-_\.:#]*$/;if(typeof ident!=="string"){if(Object.prototype.toString.call(ident)==="[object Array]"){return $$$.apply(this,ident)}if(ident instanceof window.HTMLElement||ident instanceof window.SVGElement){ident.evt=evt;ident.set=set;ident.fun=fun;ident.ins=ins;ident.css=css;ident.query=ident.querySelector;ident.queryAll=ident.querySelectorAll;ident.prototype=ident;return ident}return}if(ident&&!re.test(ident)){console.log('$$$: not a valid ident parameter "'+ident+'".');return}identparts=ident.split(/([\.#])/);for(i=0;i<identparts.length;i++){if(i===0){nsparts=identparts[0].split(":");if(ns[nsparts[0]]){elem=window.document.createElementNS(ns[nsparts[0]],nsparts[1]||nsparts[0])}else{elem=window.document.createElement(nsparts[1]||nsparts[0])}}else{if(elem&&identparts[i-1]==="."){classlist.push(identparts[i])}else if(identparts[i-1]==="#"){elem.setAttribute("id",identparts[i])}}}if(classlist.length>0){elem.setAttribute("class",classlist.join(" "))}function allArgs(args){var param,j,r,a,atr;for(j=0;j<args.length;j++){param=args[j];if(param&&param.nodeType){this.appendChild(param)}else if(typeof param==="object"){if(Object.prototype.toString.call(param)==="[object Array]"){this.appendChild($$$.apply(this,param))}else{for(a in param){if(param.hasOwnProperty(a)){if(/^data[A-Z]/.test(a)){atr=a.substr(4).toLowerCase();this.setAttribute("data-"+atr,param[a])}else{r=a.split(":");if(r.length===2&&Object.keys(ns).indexOf(r[0])>-1){this.setAttributeNS(ns[r[0]],r[1],param[a])}else{this.setAttribute(a,param[a])}}}}}}else{this.appendChild(window.document.createTextNode(String(param)))}}}allArgs.call(elem,args);function css(obj){var k,o,j;for(k in obj){if(obj.hasOwnProperty(k)){if(typeof obj[k]!=="object"){this.style[k]=obj[k]}else{o=this.querySelectorAll(k);for(j=0;j<o.length;j++){css.call(o[j],obj[k])}}}}return this}elem.css=css;function set(key,val){this[key]=val;return this}elem.set=set;function fun(func){var args2=Array.prototype.slice.call(arguments,1);this[func].apply(this,args2);return this}elem.fun=fun;function evt(ev,func){if(arguments.length>2){var args3=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(ev,function(e){var a=[e].concat(args3);func.apply(this,a)},false)}else{this.attachEvent("on"+ev,function(e){var a=[e].concat(args3);func.apply(this,a)})}}else{if(this.addEventListener){this.addEventListener(ev,func,false)}else{this.attachEvent("on"+ev,func)}}return this}elem.evt=evt;function ins(){if(Object.prototype.toString.call(arguments[0])==="[object Array]"&&Object.prototype.toString.call(arguments[0][0])==="[object Array]"||arguments[0][0]&&arguments[0][0].nodeType){for(var part of arguments[0]){if(part.nodeType){this.appendChild(part)}else{this.appendChild($$$.apply(this,part))}}}else{allArgs.call(this,Array.prototype.slice.call(arguments))}return this}elem.ins=ins;elem.query=elem.querySelector;elem.queryAll=elem.querySelectorAll;elem.prototype=elem;return elem};var doNext,react,q,id;$$$.version=VERSION,$$$.structify=function(e,t){var n,i=null;return 1===e.nodeType&&(n=function(e){var i,r,a,s,o,l=[],d=/id|class|contenteditable/,c=e.localName,p=String(e.getAttribute("class")||"").replace(/\s/g,".");if(p&&(c+="."+p),e.id&&(c+="#"+e.id),l.push(c),e.hasAttributes()){for(r=e.attributes,i={},o=0;o<r.length;o++)d.test(r[o].name)||(i[r[o].name]=r[o].value);Object.keys(i).length>0&&l.push(i)}for(e.normalize(),a=e.childNodes,o=0;o<a.length;o++)3===a[o].nodeType?(s=t?a[o].data.replace(/\s\s*/," ").trim():a[o].data,s.length>0&&l.push(s)):1===a[o].nodeType&&l.push(n(a[o]));return l},i=n(e)),i},$$$.onReady=function(e){"complete"===window.document.readyState||"interactive"===window.document.readyState?doNext(e):window.document.addEventListener?window.document.addEventListener("DOMContentLoaded",e,!1):window.document.attachEvent("onreadystatechange",e)},"function"==typeof setImmediate?doNext=setImmediate:window.setImmediate?doNext=window.setImmediate:(q=[],id="doNext"+(67108864*Math.random()|0).toString(16),react=function(e){var t,n;e.source===window&&"string"==typeof e.data&&0===e.data.indexOf(id)&&(n=q.shift(),n.length>0&&(t=n[0].apply(void 0,n.splice(1),!0),q[0]&&1===q[0].length&&q[0].push(t)))},window.postMessage?window.addEventListener?window.addEventListener("message",react,!1):window.attachEvent("message",react):window.postMessage=function(e){window.setTimeout(function(){react({source:window,data:e})},0)},doNext=function(){var e=Array.prototype.slice.call(arguments);"function"==typeof e[0]&&(q.push(e),window.postMessage(id,"*"))}),$$$.setImmediate=doNext,$$$.appendToDoc=function e(){function t(e){var t;$$$.onReady(function(){for(n=0;n<i.length;n++)"[object Array]"===Object.prototype.toString.call(i[n])?(t=$$$.apply(this,i[n]))&&window.document.body.appendChild(t):i[n]instanceof window.Element?window.document.body.appendChild(i[n]):"function"==typeof i[n]&&i[n]();e()})}var n,i=Array.prototype.slice.call(arguments),r=[];return e.then=function(t){if(e===t)throw new TypeError("Circular reference.");return"function"==typeof t?r.push(t):console.log('$$$: Only functions can be passed to "then()"!'),e},e.catch=function(t){return console.log("$$$: Error occured.",t),e},"undefined"!=typeof Promise?new Promise(function(e,n){try{t(e)}catch(e){n(e)}}):(t(function(){var e;r.forEach(function(t){doNext(function(){e&&e.then?e.then(function(e){t(e)}):e=t(e)})})}),e)},$$$.query=function(e){return window.document.querySelector(e)},$$$.queryAll=function(e){return window.document.querySelectorAll(e)};export function destroy(div){if(div){while(div.hasChildNodes()){destroy(div.firstChild);div.removeChild(div.firstChild)}}};export function namespace(name,uri){if(uri){ns[name]=uri}return ns[name]};