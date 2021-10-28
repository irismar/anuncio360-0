/*! Sortable 1.9.0 - MIT | git://github.com/SortableJS/Sortable.git */

!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():window.Sortable=t()}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};function A(t,e){if(!t||!t.getBoundingClientRect)return ut();var o=t,n=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var i=Tt(o);if(o.clientWidth<o.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!o||!o.getBoundingClientRect||o===J.body)return ut();if(n||e)return o;n=!0}}}while(o=o.parentNode);return ut()}function X(t,e,o){t.scrollLeft+=e,t.scrollTop+=o}function n(t){E&&E.parentNode&&E.parentNode[Q]&&E.parentNode[Q]._computeIsAligned(t)}function u(){!it&&p&&Tt(p,"display","none")}function f(){!it&&p&&Tt(p,"display","")}var E,x,p,v,M,N,g,Y,k,I,P,i,O,r,H,B,l,s,c,m,R,L,W,F,z,j,b,U,V=[],q=!1,w=!1,G=!1,d=[],K=!1,Z=!1,_=[],a=/\s+/g,Q="Sortable"+(new Date).getTime(),y=window,J=y.document,D=y.parseInt,$=y.setTimeout,e=y.jQuery||y.Zepto,o=y.Polymer,h={capture:!1,passive:!1},T=!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),S=!!navigator.userAgent.match(/Edge/i),C=!!navigator.userAgent.match(/firefox/i),tt=!(!navigator.userAgent.match(/safari/i)||navigator.userAgent.match(/chrome/i)||navigator.userAgent.match(/android/i)),et=!!navigator.userAgent.match(/iP(ad|od|hone)/i),ot=S||T?"cssFloat":"float",nt="draggable"in J.createElement("div"),it=function(){if(T)return!1;var t=J.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),rt=!1,at=!1,lt=Math.abs,st=Math.min,ct=Math.max,dt=[],ht=function(t,e){var o=Tt(t),n=D(o.width)-D(o.paddingLeft)-D(o.paddingRight)-D(o.borderLeftWidth)-D(o.borderRightWidth),i=Pt(t,0,e),r=Pt(t,1,e),a=i&&Tt(i),l=r&&Tt(r),s=a&&D(a.marginLeft)+D(a.marginRight)+Lt(i).width,c=l&&D(l.marginLeft)+D(l.marginRight)+Lt(r).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==d?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||n<=s&&"none"===o[ot]||r&&"none"===o[ot]&&n<s+c)?"vertical":"horizontal"},ut=function(){return T?J.documentElement:J.scrollingElement},ft=t(function(o,t,e,n){if(t.scroll){var i=e?e[Q]:window,r=t.scrollSensitivity,a=t.scrollSpeed,l=o.clientX,s=o.clientY,c=ut(),d=!1;k!==e&&(pt(),Y=t.scroll,I=t.scrollFn,!0===Y&&(Y=A(e,!0),k=Y));var h=0,u=Y;do{var f,p,v,g,m,b,w,_,y,D=u,T=Lt(D),S=T.top,C=T.bottom,E=T.left,x=T.right,M=T.width,N=T.height;if(f=D.scrollWidth,p=D.scrollHeight,v=Tt(D),_=D.scrollLeft,y=D.scrollTop,w=D===c?(b=M<f&&("auto"===v.overflowX||"scroll"===v.overflowX||"visible"===v.overflowX),N<p&&("auto"===v.overflowY||"scroll"===v.overflowY||"visible"===v.overflowY)):(b=M<f&&("auto"===v.overflowX||"scroll"===v.overflowX),N<p&&("auto"===v.overflowY||"scroll"===v.overflowY)),g=b&&(lt(x-l)<=r&&_+M<f)-(lt(E-l)<=r&&!!_),m=w&&(lt(C-s)<=r&&y+N<p)-(lt(S-s)<=r&&!!y),!V[h])for(var P=0;P<=h;P++)V[P]||(V[P]={});V[h].vx==g&&V[h].vy==m&&V[h].el===D||(V[h].el=D,V[h].vx=g,V[h].vy=m,clearInterval(V[h].pid),!D||0==g&&0==m||(d=!0,V[h].pid=setInterval(function(){n&&0===this.layer&&(bt.active._emulateDragOver(!0),bt.active._onTouchMove(R,!0));var t=V[this.layer].vy?V[this.layer].vy*a:0,e=V[this.layer].vx?V[this.layer].vx*a:0;"function"==typeof I&&"continue"!==I.call(i,e,t,o,R,V[this.layer].el)||X(V[this.layer].el,e,t)}.bind({layer:h}),24))),h++}while(t.bubbleScroll&&u!==c&&(u=A(u,!1)));q=d}},30),pt=function(){V.forEach(function(t){clearInterval(t.pid)}),V=[]},vt=function(t){function s(a,l){return function(t,e,o,n){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==a&&(l||i))return!0;if(null==a||!1===a)return!1;if(l&&"clone"===a)return a;if("function"==typeof a)return s(a(t,e,o,n),l)(t,e,o,n);var r=(l?t:e).options.group.name;return!0===a||"string"==typeof a&&a===r||a.join&&-1<a.indexOf(r)}}var e={},o=t.group;o&&"object"==typeof o||(o={name:o}),e.name=o.name,e.checkPull=s(o.pull,!0),e.checkPut=s(o.put),e.revertClone=o.revertClone,t.group=e};J.addEventListener("click",function(t){if(G)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),G=!1},!0);function gt(t){if(E){var e=function(t,e){for(var o=0;o<d.length;o++)if(!At(d[o])){var n=Lt(d[o]),i=d[o][Q].options.emptyInsertThreshold,r=t>=n.left-i&&t<=n.right+i,a=e>=n.top-i&&e<=n.bottom+i;if(i&&r&&a)return d[o]}}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var o={};for(var n in t)o[n]=t[n];o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[Q]._onDragOver(o)}}}var mt;function bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, not "+{}.toString.call(t);this.el=t,this.options=e=Ot({},e),t[Q]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0,draggable:/[uo]l/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ht(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:D(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==bt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var n in o)!(n in e)&&(e[n]=o[n]);for(var i in vt(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&nt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?_t(t,"pointerdown",this._onTapStart):(_t(t,"mousedown",this._onTapStart),_t(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(_t(t,"dragover",this),_t(t,"dragenter",this)),d.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[])}function wt(t,e,o,n){if(t){o=o||J;do{if(null!=e&&(">"===e[0]?t.parentNode===o&&It(t,e):It(t,e))||n&&t===o)return t;if(t===o)break}while(t=(i=t).host&&i!==J&&i.host.nodeType?i.host:i.parentNode)}var i;return null}function _t(t,e,o){t.addEventListener(e,o,!T&&h)}function yt(t,e,o){t.removeEventListener(e,o,!T&&h)}function Dt(t,e,o){if(t&&e)if(t.classList)t.classList[o?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(a," ").replace(" "+e+" "," ");t.className=(n+(o?" "+e:"")).replace(a," ")}}function Tt(t,e,o){var n=t&&t.style;if(n){if(void 0===o)return J.defaultView&&J.defaultView.getComputedStyle?o=J.defaultView.getComputedStyle(t,""):t.currentStyle&&(o=t.currentStyle),void 0===e?o:o[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=o+("string"==typeof o?"":"px")}}function St(t){var e="";do{var o=Tt(t,"transform");o&&"none"!==o&&(e=o+" "+e)}while(t=t.parentNode);return window.DOMMatrix?new DOMMatrix(e):window.WebKitCSSMatrix?new WebKitCSSMatrix(e):window.CSSMatrix?new CSSMatrix(e):void 0}function Ct(t,e,o){if(t){var n=t.getElementsByTagName(e),i=0,r=n.length;if(o)for(;i<r;i++)o(n[i],i);return n}return[]}function Et(t,e,o,n,i,r,a,l,s,c,d){var h,u=(t=t||e[Q]).options,f="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||T||S?(h=J.createEvent("Event")).initEvent(o,!0,!0):h=new CustomEvent(o,{bubbles:!0,cancelable:!0}),h.to=i||e,h.from=r||e,h.item=n||e,h.clone=v,h.oldIndex=a,h.newIndex=l,h.oldDraggableIndex=s,h.newDraggableIndex=c,h.originalEvent=d,h.pullMode=B?B.lastPutMode:void 0,e&&e.dispatchEvent(h),u[f]&&u[f].call(t,h)}function xt(t,e,o,n,i,r,a,l){var s,c,d=t[Q],h=d.options.onMove;return!window.CustomEvent||T||S?(s=J.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=o,s.draggedRect=n,s.related=i||e,s.relatedRect=r||Lt(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),h&&(c=h.call(d,s,a)),c}function Mt(t){t.draggable=!1}function Nt(){rt=!1}function Pt(t,e,o){for(var n=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==p&&r[i]!==E&&wt(r[i],o.draggable,t,!1)){if(n===e)return r[i];n++}i++}return null}function At(t){for(var e=t.lastElementChild;e&&(e===p||"none"===Tt(e,"display"));)e=e.previousElementSibling;return e||null}function Xt(t){return kt(E)<kt(t)?1:-1}function Yt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,o=e.length,n=0;o--;)n+=e.charCodeAt(o);return n.toString(36)}function kt(t,e){var o=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||t===v||e&&!It(t,e)||o++;return o}function It(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function t(o,n){return function(){if(!mt){var t=arguments,e=this;mt=$(function(){1===t.length?o.call(e,t[0]):o.apply(e,t),mt=void 0},n)}}}function Ot(t,e){if(t&&e)for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}function Ht(t){return o&&o.dom?o.dom(t).cloneNode(!0):e?e(t).clone(!0)[0]:t.cloneNode(!0)}function Bt(t){return $(t,0)}function Rt(t){return clearTimeout(t)}function Lt(t,e,o,n){if(t.getBoundingClientRect||t===y){var i,r,a,l,s,c,d;if(d=t!==y&&t!==ut()?(r=(i=t.getBoundingClientRect()).top,a=i.left,l=i.bottom,s=i.right,c=i.height,i.width):(a=r=0,l=window.innerHeight,s=window.innerWidth,c=window.innerHeight,window.innerWidth),n&&t!==y&&(o=o||t.parentNode,!T))do{if(o&&o.getBoundingClientRect&&"none"!==Tt(o,"transform")){var h=o.getBoundingClientRect();r-=h.top+D(Tt(o,"border-top-width")),a-=h.left+D(Tt(o,"border-left-width")),l=r+i.height,s=a+i.width;break}}while(o=o.parentNode);if(e&&t!==y){var u=St(o||t),f=u&&u.a,p=u&&u.d;u&&(l=(r/=p)+(c/=p),s=(a/=f)+(d/=f))}return{top:r,left:a,bottom:l,right:s,width:d,height:c}}}function Wt(t,e){for(var o=A(t,!0),n=Lt(t)[e];o;){var i=Lt(o)[e];if(!("top"===e||"left"===e?i<=n:n<=i))return o;if(o===ut())break;o=A(o,!1)}return!1}function Ft(t){var e=0,o=0,n=ut();if(t)do{var i=St(t),r=i.a,a=i.d;e+=t.scrollLeft*r,o+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,o]}return bt.prototype={constructor:bt,_computeIsAligned:function(t){var e;if(p&&!it?(u(),e=J.elementFromPoint(t.clientX,t.clientY),f()):e=t.target,e=wt(e,this.options.draggable,this.el,!1),!at&&E&&E.parentNode===this.el){for(var o,n,i,r,a,l,s,c,d=this.el.children,h=0;h<d.length;h++)wt(d[h],this.options.draggable,this.el,!1)&&d[h]!==e&&(d[h].sortableMouseAligned=(o=t.clientX,n=t.clientY,i=d[h],r=this._getDirection(t,null),this.options,void 0,a=Lt(i),l="vertical"===r?a.left:a.top,s="vertical"===r?a.right:a.bottom,l<(c="vertical"===r?o:n)&&c<s));wt(e,this.options.draggable,this.el,!0)||(W=null),at=!0,$(function(){at=!1},30)}},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,E):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e,o,n=this,i=this.el,r=this.options,a=r.preventOnFilter,l=t.type,s=t.touches&&t.touches[0],c=(s||t).target,d=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||c,h=r.filter;if(function(t){dt.length=0;var e=t.getElementsByTagName("input"),o=e.length;for(;o--;){var n=e[o];n.checked&&dt.push(n)}}(i),!E&&!(/mousedown|pointerdown/.test(l)&&0!==t.button||r.disabled||d.isContentEditable||(c=wt(c,r.draggable,i,!1),g===c))){if(e=kt(c),o=kt(c,r.draggable),"function"==typeof h){if(h.call(this,t,c,this))return Et(n,d,"filter",c,i,i,e,void 0,o),void(a&&t.cancelable&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=wt(d,t.trim(),i,!1))return Et(n,t,"filter",c,i,i,e,void 0,o),!0})))return void(a&&t.cancelable&&t.preventDefault());r.handle&&!wt(d,r.handle,i,!1)||this._prepareDragStart(t,s,c,e,o)}}},_handleAutoScroll:function(e,o){if(E&&this.options.scroll){var n=e.clientX,i=e.clientY,t=J.elementFromPoint(n,i),r=this;if(o||S||T||tt){ft(e,r.options,t,o);var a=A(t,!0);!q||l&&n===s&&i===c||(l&&clearInterval(l),l=setInterval(function(){if(E){var t=A(J.elementFromPoint(n,i),!0);t!==a&&(a=t,pt(),ft(e,r.options,a,o))}},10),s=n,c=i)}else{if(!r.options.bubbleScroll||A(t,!0)===ut())return void pt();ft(e,r.options,A(t,!1),!1)}}},_prepareDragStart:function(t,e,o,n,i){var r,a=this,l=a.el,s=a.options,c=l.ownerDocument;o&&!E&&o.parentNode===l&&(M=l,x=(E=o).parentNode,N=E.nextSibling,g=o,H=s.group,P=n,O=i,m={target:E,clientX:(e||t).clientX,clientY:(e||t).clientY},this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,E.style["will-change"]="all",E.style.transition="",E.style.transform="",r=function(){a._disableDelayedDragEvents(),!C&&a.nativeDraggable&&(E.draggable=!0),a._triggerDragStart(t,e),Et(a,M,"choose",E,M,M,P,void 0,O),Dt(E,s.chosenClass,!0)},s.ignore.split(",").forEach(function(t){Ct(E,t.trim(),Mt)}),_t(c,"dragover",gt),_t(c,"mousemove",gt),_t(c,"touchmove",gt),_t(c,"mouseup",a._onDrop),_t(c,"touchend",a._onDrop),_t(c,"touchcancel",a._onDrop),C&&this.nativeDraggable&&(this.options.touchStartThreshold=4,E.draggable=!0),!s.delay||s.delayOnTouchOnly&&!e||this.nativeDraggable&&(S||T)?r():(_t(c,"mouseup",a._disableDelayedDrag),_t(c,"touchend",a._disableDelayedDrag),_t(c,"touchcancel",a._disableDelayedDrag),_t(c,"mousemove",a._delayedDragTouchMoveHandler),_t(c,"touchmove",a._delayedDragTouchMoveHandler),s.supportPointer&&_t(c,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=$(r,s.delay)))},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;ct(lt(e.clientX-this._lastX),lt(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){E&&Mt(E),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;yt(t,"mouseup",this._disableDelayedDrag),yt(t,"touchend",this._disableDelayedDrag),yt(t,"touchcancel",this._disableDelayedDrag),yt(t,"mousemove",this._delayedDragTouchMoveHandler),yt(t,"touchmove",this._delayedDragTouchMoveHandler),yt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),!this.nativeDraggable||e?this.options.supportPointer?_t(J,"pointermove",this._onTouchMove):_t(J,e?"touchmove":"mousemove",this._onTouchMove):(_t(E,"dragend",this),_t(M,"dragstart",this._onDragStart));try{J.selection?Bt(function(){J.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(w=!1,M&&E){this.nativeDraggable&&(_t(J,"dragover",this._handleAutoScroll),_t(J,"dragover",n));var o=this.options;!t&&Dt(E,o.dragClass,!1),Dt(E,o.ghostClass,!0),Tt(E,"transform",""),bt.active=this,t&&this._appendGhost(),Et(this,M,"start",E,M,M,P,void 0,O,void 0,e)}else this._nulling()},_emulateDragOver:function(t){if(R){if(this._lastX===R.clientX&&this._lastY===R.clientY&&!t)return;this._lastX=R.clientX,this._lastY=R.clientY,u();for(var e=J.elementFromPoint(R.clientX,R.clientY),o=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(R.clientX,R.clientY))!==o;)o=e;if(o)do{if(o[Q])if(o[Q]._onDragOver({clientX:R.clientX,clientY:R.clientY,target:e,rootEl:o})&&!this.options.dragoverBubble)break;e=o}while(o=o.parentNode);E.parentNode[Q]._computeIsAligned(R),f()}},_onTouchMove:function(t,e){if(m){var o=this.options,n=o.fallbackTolerance,i=o.fallbackOffset,r=t.touches?t.touches[0]:t,a=p&&St(p),l=p&&a&&a.a,s=p&&a&&a.d,c=et&&b&&Ft(b),d=(r.clientX-m.clientX+i.x)/(l||1)+(c?c[0]-_[0]:0)/(l||1),h=(r.clientY-m.clientY+i.y)/(s||1)+(c?c[1]-_[1]:0)/(s||1),u=t.touches?"translate3d("+d+"px,"+h+"px,0)":"translate("+d+"px,"+h+"px)";if(!bt.active&&!w){if(n&&st(lt(r.clientX-this._lastX),lt(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}!e&&this._handleAutoScroll(r,!0),L=!0,R=r,Tt(p,"webkitTransform",u),Tt(p,"mozTransform",u),Tt(p,"msTransform",u),Tt(p,"transform",u),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!p){var t=this.options.fallbackOnBody?J.body:M,e=Lt(E,!0,t,!et),o=(Tt(E),this.options);if(et){for(b=t;"static"===Tt(b,"position")&&"none"===Tt(b,"transform")&&b!==J;)b=b.parentNode;if(b!==J){var n=Lt(b,!0);e.top-=n.top,e.left-=n.left}b!==J.body&&b!==J.documentElement?(b===J&&(b=ut()),e.top+=b.scrollTop,e.left+=b.scrollLeft):b=ut(),_=Ft(b)}Dt(p=E.cloneNode(!0),o.ghostClass,!1),Dt(p,o.fallbackClass,!0),Dt(p,o.dragClass,!0),Tt(p,"box-sizing","border-box"),Tt(p,"margin",0),Tt(p,"top",e.top),Tt(p,"left",e.left),Tt(p,"width",e.width),Tt(p,"height",e.height),Tt(p,"opacity","0.8"),Tt(p,"position",et?"absolute":"fixed"),Tt(p,"zIndex","100000"),Tt(p,"pointerEvents","none"),t.appendChild(p)}},_onDragStart:function(t,e){var o=this,n=t.dataTransfer,i=o.options;(v=Ht(E)).draggable=!1,v.style["will-change"]="",this._hideClone(),Dt(v,o.options.chosenClass,!1),o._cloneId=Bt(function(){o.options.removeCloneOnHide||M.insertBefore(v,E),Et(o,M,"clone",E)}),!e&&Dt(E,i.dragClass,!0),e?(G=!0,o._loopId=setInterval(o._emulateDragOver,50)):(yt(J,"mouseup",o._onDrop),yt(J,"touchend",o._onDrop),yt(J,"touchcancel",o._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(o,n,E)),_t(J,"drop",o),Tt(E,"transform","translateZ(0)")),w=!0,o._dragStartId=Bt(o._dragStarted.bind(o,e,t)),_t(J,"selectstart",o),tt&&Tt(J.body,"user-select","none")},_onDragOver:function(e){var o,n,t,i=this.el,r=e.target,a=this.options,l=a.group,s=bt.active,c=H===l,d=a.sort,h=this;if(!rt){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),L=!0,r=wt(r,a.draggable,i,!0),E.contains(e.target)||r.animated)return S(!1);if(r!==E&&(G=!1),s&&!a.disabled&&(c?d||(t=!M.contains(E)):B===this||(this.lastPutMode=H.checkPull(this,s,E,e))&&l.checkPut(this,s,E,e))){var u=this._getDirection(e,r);if(o=Lt(E),t)return this._hideClone(),x=M,N?M.insertBefore(E,N):M.appendChild(E),S(!0);var f=At(i);if(!f||function(t,e,o){var n=Lt(At(o)),i="vertical"===e?t.clientY:t.clientX,r="vertical"===e?t.clientX:t.clientY,a="vertical"===e?n.bottom:n.right,l="vertical"===e?n.left:n.top,s="vertical"===e?n.right:n.bottom;return"vertical"===e?s+10<r||r<=s&&a<i&&l<=r:a<i&&l<r||i<=a&&s+10<r}(e,u,i)&&!f.animated){if(f&&i===e.target&&(r=f),r&&(n=Lt(r)),c?s._hideClone():s._showClone(this),!1!==xt(M,i,E,o,r,n,e,!!r))return i.appendChild(E),x=i,U=null,C(),S(!0)}else if(r&&r!==E&&r.parentNode===i){var p,v=0,g=r.sortableMouseAligned,m=E.parentNode!==i,b="vertical"===u?"top":"left",w=Wt(r,"top")||Wt(E,"top"),_=w?w.scrollTop:void 0;if(W!==r&&(z=null,p=Lt(r)[b],K=!1),z=function(t,e,o){var n=t===E&&U||Lt(t),i=e===E&&U||Lt(e),r="vertical"===o?n.left:n.top,a="vertical"===o?n.right:n.bottom,l="vertical"===o?n.width:n.height,s="vertical"===o?i.left:i.top,c="vertical"===o?i.right:i.bottom,d="vertical"===o?i.width:i.height;return r===s||a===c||r+l/2===s+d/2}(E,r,u)&&g||m||w||a.invertSwap||"insert"===z||"swap"===z?("swap"!==z&&(Z=a.invertSwap||m),v=function(t,e,o,n,i,r,a){var l=Lt(e),s="vertical"===o?t.clientY:t.clientX,c="vertical"===o?l.height:l.width,d="vertical"===o?l.top:l.left,h="vertical"===o?l.bottom:l.right,u=Lt(E),f=!1;if(!r)if(a&&j<c*n)if(!K&&(1===F?d+c*i/2<s:s<h-c*i/2)&&(K=!0),K)f=!0;else{"vertical"===o?u.top:u.left,"vertical"===o?u.bottom:u.right;if(1===F?s<d+j:h-j<s)return-1*F}else if(d+c*(1-n)/2<s&&s<h-c*(1-n)/2)return Xt(e);if((f=f||r)&&(s<d+c*i/2||h-c*i/2<s))return d+c/2<s?1:-1;return 0}(e,r,u,a.swapThreshold,null==a.invertedSwapThreshold?a.swapThreshold:a.invertedSwapThreshold,Z,W===r),"swap"):(v=Xt(r),"insert"),0===v)return S(!1);U=null,F=v,n=Lt(W=r);var y=r.nextElementSibling,D=!1,T=xt(M,i,E,o,r,n,e,D=1===v);if(!1!==T)return 1!==T&&-1!==T||(D=1===T),rt=!0,$(Nt,30),c?s._hideClone():s._showClone(this),D&&!y?i.appendChild(E):r.parentNode.insertBefore(E,D?y:r),w&&X(w,0,_-w.scrollTop),x=E.parentNode,void 0===p||Z||(j=lt(p-Lt(r)[b])),C(),S(!0)}if(i.contains(E))return S(!1)}return!1}function S(t){return t&&(c?s._hideClone():s._showClone(h),s&&(Dt(E,B?B.options.ghostClass:s.options.ghostClass,!1),Dt(E,a.ghostClass,!0)),B!==h&&h!==bt.active?B=h:h===bt.active&&(B=null),o&&h._animate(o,E),r&&n&&h._animate(n,r)),(r===E&&!E.animated||r===i&&!r.animated)&&(W=null),a.dragoverBubble||e.rootEl||r===J||(h._handleAutoScroll(e),E.parentNode[Q]._computeIsAligned(e),!t&&gt(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),!0}function C(){Et(h,M,"change",r,i,M,P,kt(E),O,kt(E,a.draggable),e)}},_animate:function(t,e){var o=this.options.animation;if(o){var n=Lt(e);if(e===E&&(U=n),1===t.nodeType&&(t=Lt(t)),t.left+t.width/2!==n.left+n.width/2||t.top+t.height/2!==n.top+n.height/2){var i=St(this.el),r=i&&i.a,a=i&&i.d;Tt(e,"transition","none"),Tt(e,"transform","translate3d("+(t.left-n.left)/(r||1)+"px,"+(t.top-n.top)/(a||1)+"px,0)"),this._repaint(e),Tt(e,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Tt(e,"transform","translate3d(0,0,0)")}"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=$(function(){Tt(e,"transition",""),Tt(e,"transform",""),e.animated=!1},o)}},_repaint:function(t){return t.offsetWidth},_offMoveEvents:function(){yt(J,"touchmove",this._onTouchMove),yt(J,"pointermove",this._onTouchMove),yt(J,"dragover",gt),yt(J,"mousemove",gt),yt(J,"touchmove",gt)},_offUpEvents:function(){var t=this.el.ownerDocument;yt(t,"mouseup",this._onDrop),yt(t,"touchend",this._onDrop),yt(t,"pointerup",this._onDrop),yt(t,"touchcancel",this._onDrop),yt(J,"selectstart",this)},_onDrop:function(t){var e=this.el,o=this.options;K=Z=q=w=!1,clearInterval(this._loopId),clearInterval(l),pt(),clearTimeout(mt),mt=void 0,clearTimeout(this._dragStartTimer),Rt(this._cloneId),Rt(this._dragStartId),yt(J,"mousemove",this._onTouchMove),this.nativeDraggable&&(yt(J,"drop",this),yt(e,"dragstart",this._onDragStart),yt(J,"dragover",this._handleAutoScroll),yt(J,"dragover",n)),tt&&Tt(J.body,"user-select",""),this._offMoveEvents(),this._offUpEvents(),t&&(L&&(t.cancelable&&t.preventDefault(),!o.dropBubble&&t.stopPropagation()),p&&p.parentNode&&p.parentNode.removeChild(p),(M===x||B&&"clone"!==B.lastPutMode)&&v&&v.parentNode&&v.parentNode.removeChild(v),E&&(this.nativeDraggable&&yt(E,"dragend",this),Mt(E),E.style["will-change"]="",Dt(E,B?B.options.ghostClass:this.options.ghostClass,!1),Dt(E,this.options.chosenClass,!1),Et(this,M,"unchoose",E,x,M,P,null,O,null,t),M!==x?(i=kt(E),r=kt(E,o.draggable),0<=i&&(Et(null,x,"add",E,x,M,P,i,O,r,t),Et(this,M,"remove",E,x,M,P,i,O,r,t),Et(null,x,"sort",E,x,M,P,i,O,r,t),Et(this,M,"sort",E,x,M,P,i,O,r,t)),B&&B.save()):E.nextSibling!==N&&(i=kt(E),r=kt(E,o.draggable),0<=i&&(Et(this,M,"update",E,x,M,P,i,O,r,t),Et(this,M,"sort",E,x,M,P,i,O,r,t))),bt.active&&(null!=i&&-1!==i||(i=P,r=O),Et(this,M,"end",E,x,M,P,i,O,r,t),this.save()))),this._nulling()},_nulling:function(){M=E=x=p=N=v=g=Y=k=V.length=l=s=c=m=R=L=i=P=W=F=U=B=H=bt.active=null,dt.forEach(function(t){t.checked=!0}),dt.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":E&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],o=this.el.children,n=0,i=o.length,r=this.options;n<i;n++)wt(t=o[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Yt(t));return e},sort:function(t){var n={},i=this.el;this.toArray().forEach(function(t,e){var o=i.children[e];wt(o,this.options.draggable,i,!1)&&(n[t]=o)},this),t.forEach(function(t){n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return wt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var o=this.options;if(void 0===e)return o[t];o[t]=e,"group"===t&&vt(o)},destroy:function(){var t=this.el;t[Q]=null,yt(t,"mousedown",this._onTapStart),yt(t,"touchstart",this._onTapStart),yt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(yt(t,"dragover",this),yt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),d.splice(d.indexOf(this.el),1),this.el=t=null},_hideClone:function(){v.cloneHidden||(Tt(v,"display","none"),v.cloneHidden=!0,v.parentNode&&this.options.removeCloneOnHide&&v.parentNode.removeChild(v))},_showClone:function(t){"clone"===t.lastPutMode?v.cloneHidden&&(M.contains(E)&&!this.options.group.revertClone?M.insertBefore(v,E):N?M.insertBefore(v,N):M.appendChild(v),this.options.group.revertClone&&this._animate(E,v),Tt(v,"display",""),v.cloneHidden=!1):this._hideClone()}},_t(J,"touchmove",function(t){(bt.active||w)&&t.cancelable&&t.preventDefault()}),bt.utils={on:_t,off:yt,css:Tt,find:Ct,is:function(t,e){return!!wt(t,e,t,!1)},extend:Ot,throttle:t,closest:wt,toggleClass:Dt,clone:Ht,index:kt,nextTick:Bt,cancelNextTick:Rt,detectDirection:ht,getChild:Pt},bt.create=function(t,e){return new bt(t,e)},bt.version="1.9.0",bt});