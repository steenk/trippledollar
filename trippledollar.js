(function(){var t="0.51";window.$$$=function(){function t(t){for(var e=0;t.length>e;e++){var r=t[e];if(r&&r.nodeType)o.appendChild(r);else if("object"==typeof r)if(Array.isArray(r))o.appendChild(window.$$$.apply(this,r));else for(var n in r)if(n.match(/^data./)){var i=n.substr(4).toLowerCase();o.setAttribute("data-"+i,r[n])}else o.setAttribute(n,r[n]);else o.appendChild(document.createTextNode(r+""))}}var e=Array.prototype.slice.call(arguments);if("string"!=typeof e[0])return Array.isArray(e[0])?window.$$$.apply(this,e[0]):null;var r=e.shift(),n=r.split("#")[1],i=r.split("#")[0].split("."),a=i.shift(),s=i.join(" ").trim(),o=document.createElement(a);return s&&(o.className=s),n&&o.setAttribute("id",n),t(e),o.css=function(t){for(var e in t)this.style[e]=t[e];return this},o.set=function(t,e){return this[t]=e,this},o.fun=function(t,e){return this[t].apply(this,e),this},o.evt=function(t,e){if(arguments.length>2){var r=Array.prototype.slice.call(arguments,2);this.addEventListener(t,function(t){var n=[t,r];e.apply(this,n)})}else this.addEventListener(t,e);return this},o.ins=function(){var e=Array.prototype.slice.call(arguments);t(e)},o.prototype=o,o},window.$$$.version=t,window.$$$.structify=function(t){function e(t){var r=[],n=t.localName,i=t.className.replace(" ",".");if(i&&(n+="."+i),t.id&&(n+="#"+t.id),r.push(n),t.hasAttributes())for(var a=t.attributes,s={},o=0;a.length>o;o++)a[o].name.match(/id|class|contenteditable/)||(s[a[o].name]=a[o].value,r.push(s));t.normalize();for(var l=t.childNodes,o=0;l.length>o;o++)if(3===l[o].nodeType){var u=l[o].data.replace(/\s\s*/," ");u.length>0&&r.push(u)}else 1===l[o].nodeType&&r.push(e(l[o]));return r}1===t.nodeType;var r=e(t);return r},!window.$&&document.querySelectorAll&&(window.$=function(t){return document.querySelectorAll(t)})})();