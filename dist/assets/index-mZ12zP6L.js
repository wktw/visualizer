(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var J0={exports:{}},du={},ev={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),F_=Symbol.for("react.portal"),O_=Symbol.for("react.fragment"),k_=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),V_=Symbol.for("react.suspense"),W_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),om=Symbol.iterator;function X_(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nv=Object.assign,iv={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||tv}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rv(){}rv.prototype=Fo.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||tv}var Dh=Lh.prototype=new rv;Dh.constructor=Lh;nv(Dh,Fo.prototype);Dh.isPureReactComponent=!0;var am=Array.isArray,sv=Object.prototype.hasOwnProperty,Uh={current:null},ov={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sv.call(e,i)&&!ov.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ja,type:t,key:s,ref:o,props:r,_owner:Uh.current}}function Y_(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function Mc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case F_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mf(o,0):i,am(r)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),Mc(r,e,n,"",function(c){return c})):r!=null&&(Nh(r)&&(r=Y_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",am(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mf(s,a);o+=Mc(s,e,n,l,r)}else if(l=X_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mf(s,a++),o+=Mc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var i=[],r=0;return Mc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rn={current:null},Ec={transition:null},Q_={ReactCurrentDispatcher:Rn,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:Uh};function lv(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=Fo;ct.Fragment=O_;ct.Profiler=z_;ct.PureComponent=Lh;ct.StrictMode=k_;ct.Suspense=V_;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;ct.act=lv;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sv.call(e,l)&&!ov.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ja,type:t.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};ct.createElement=av;ct.createFactory=function(t){var e=av.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:G_,render:t}};ct.isValidElement=Nh;ct.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:$_}};ct.memo=function(t,e){return{$$typeof:W_,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};ct.unstable_act=lv;ct.useCallback=function(t,e){return Rn.current.useCallback(t,e)};ct.useContext=function(t){return Rn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return Rn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return Rn.current.useEffect(t,e)};ct.useId=function(){return Rn.current.useId()};ct.useImperativeHandle=function(t,e,n){return Rn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return Rn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return Rn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return Rn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return Rn.current.useReducer(t,e,n)};ct.useRef=function(t){return Rn.current.useRef(t)};ct.useState=function(t){return Rn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return Rn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return Rn.current.useTransition()};ct.version="18.3.1";ev.exports=ct;var F=ev.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=F,Z_=Symbol.for("react.element"),J_=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)eS.call(e,i)&&!nS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z_,type:t,key:s,ref:o,props:r,_owner:tS.current}}du.Fragment=J_;du.jsx=cv;du.jsxs=cv;J0.exports=du;var A=J0.exports,bd={},uv={exports:{}},Kn={},fv={exports:{}},dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,B){var Y=O.length;O.push(B);e:for(;0<Y;){var te=Y-1>>>1,ee=O[te];if(0<r(ee,B))O[te]=B,O[Y]=ee,Y=te;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var B=O[0],Y=O.pop();if(Y!==B){O[0]=Y;e:for(var te=0,ee=O.length,Z=ee>>>1;te<Z;){var ne=2*(te+1)-1,xe=O[ne],Ce=ne+1,be=O[Ce];if(0>r(xe,Y))Ce<ee&&0>r(be,xe)?(O[te]=be,O[Ce]=Y,te=Ce):(O[te]=xe,O[ne]=Y,te=ne);else if(Ce<ee&&0>r(be,Y))O[te]=be,O[Ce]=Y,te=Ce;else break e}}return B}function r(O,B){var Y=O.sortIndex-B.sortIndex;return Y!==0?Y:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=O)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function _(O){if(y=!1,v(O),!x)if(n(l)!==null)x=!0,K(R);else{var B=n(c);B!==null&&J(_,B.startTime-O)}}function R(O,B){x=!1,y&&(y=!1,u(U),U=-1),m=!0;var Y=h;try{for(v(B),d=n(l);d!==null&&(!(d.expirationTime>B)||O&&!V());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var ee=te(d.expirationTime<=B);B=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),v(B)}else i(l);d=n(l)}if(d!==null)var Z=!0;else{var ne=n(c);ne!==null&&J(_,ne.startTime-B),Z=!1}return Z}finally{d=null,h=Y,m=!1}}var b=!1,E=null,U=-1,S=5,T=-1;function V(){return!(t.unstable_now()-T<S)}function W(){if(E!==null){var O=t.unstable_now();T=O;var B=!0;try{B=E(!0,O)}finally{B?ie():(b=!1,E=null)}}else b=!1}var ie;if(typeof g=="function")ie=function(){g(W)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=W,ie=function(){G.postMessage(null)}}else ie=function(){p(W,0)};function K(O){E=O,b||(b=!0,ie())}function J(O,B){U=p(function(){O(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var Y=h;h=B;try{return O()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=h;h=O;try{return B()}finally{h=Y}},t.unstable_scheduleCallback=function(O,B,Y){var te=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Y+ee,O={id:f++,callback:B,priorityLevel:O,startTime:Y,expirationTime:ee,sortIndex:-1},Y>te?(O.sortIndex=Y,e(c,O),n(l)===null&&O===n(c)&&(y?(u(U),U=-1):y=!0,J(_,Y-te))):(O.sortIndex=ee,e(l,O),x||m||(x=!0,K(R))),O},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(O){var B=h;return function(){var Y=h;h=B;try{return O.apply(this,arguments)}finally{h=Y}}}})(dv);fv.exports=dv;var iS=fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=F,Qn=iS;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hv=new Set,Ta={};function xs(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(Ta[t]=e,t=0;t<e.length;t++)hv.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},um={};function oS(t){return Ad.call(um,t)?!0:Ad.call(cm,t)?!1:sS.test(t)?um[t]=!0:(cm[t]=!0,!1)}function aS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lS(t,e,n,i){if(e===null||typeof e>"u"||aS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){hn[t]=new Pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];hn[e]=new Pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){hn[t]=new Pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){hn[t]=new Pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){hn[t]=new Pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){hn[t]=new Pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){hn[t]=new Pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){hn[t]=new Pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){hn[t]=new Pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ih=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ih,Fh);hn[e]=new Pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ih,Fh);hn[e]=new Pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ih,Fh);hn[e]=new Pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){hn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!1,!1)});hn.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){hn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,i){var r=hn.hasOwnProperty(e)?hn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lS(e,n,r,i)&&(n=null),i||r===null?oS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),gv=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Object.assign,gf;function oa(t){if(gf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gf=e&&e[1]||""}return`
`+gf+t}var vf=!1;function xf(t,e){if(!t||vf)return"";vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function cS(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=xf(t.type,!1),t;case 11:return t=xf(t.type.render,!1),t;case 1:return t=xf(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Zs:return"Portal";case Cd:return"Profiler";case kh:return"StrictMode";case Rd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mv:return(t.displayName||"Context")+".Consumer";case pv:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function uS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fS(t){var e=vv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){t._valueTracker||(t._valueTracker=fS(t))}function xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yv(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function Ud(t,e){yv(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nd(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nd(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(aa(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function _v(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ll,Mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dS=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){dS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function Ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ev(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hS=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,mo=null,go=null;function gm(t){if(t=qa(t)){if(typeof Bd!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=vu(e),Bd(t.stateNode,t.type,e))}}function Tv(t){mo?go?go.push(t):go=[t]:mo=t}function bv(){if(mo){var t=mo,e=go;if(go=mo=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function Av(t,e){return t(e)}function Cv(){}var yf=!1;function Rv(t,e,n){if(yf)return t(e,n);yf=!0;try{return Av(t,e,n)}finally{yf=!1,(mo!==null||go!==null)&&(Cv(),bv())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=vu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Hd=!1;if(qi)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Hd=!1}function pS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var da=!1,Fc=null,Oc=!1,Gd=null,mS={onError:function(t){da=!0,Fc=t}};function gS(t,e,n,i,r,s,o,a,l){da=!1,Fc=null,pS.apply(mS,arguments)}function vS(t,e,n,i,r,s,o,a,l){if(gS.apply(this,arguments),da){if(da){var c=Fc;da=!1,Fc=null}else throw Error(ue(198));Oc||(Oc=!0,Gd=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(ys(t)!==t)throw Error(ue(188))}function xS(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vm(r),t;if(s===i)return vm(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Lv(t){return t=xS(t),t!==null?Dv(t):null}function Dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=Qn.unstable_scheduleCallback,xm=Qn.unstable_cancelCallback,yS=Qn.unstable_shouldYield,_S=Qn.unstable_requestPaint,Ht=Qn.unstable_now,SS=Qn.unstable_getCurrentPriorityLevel,Gh=Qn.unstable_ImmediatePriority,Nv=Qn.unstable_UserBlockingPriority,kc=Qn.unstable_NormalPriority,MS=Qn.unstable_LowPriority,Iv=Qn.unstable_IdlePriority,hu=null,Li=null;function ES(t){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var yi=Math.clz32?Math.clz32:bS,wS=Math.log,TS=Math.LN2;function bS(t){return t>>>=0,t===0?32:31-(wS(t)/TS|0)|0}var Dl=64,Ul=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=la(a):(s&=o,s!==0&&(i=la(s)))}else o=n&~r,o!==0?i=la(o):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-yi(e),r=1<<n,i|=t[n],e&=~r;return i}function AS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=AS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fv(){var t=Dl;return Dl<<=1,!(Dl&4194240)&&(Dl=64),t}function _f(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yi(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var yt=0;function Ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kv,Wh,zv,Bv,Hv,Wd=!1,Nl=[],wr=null,Tr=null,br=null,Ca=new Map,Ra=new Map,yr=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ym(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function $o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&Wh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function LS(t,e,n,i,r){switch(e){case"focusin":return wr=$o(wr,t,e,n,i,r),!0;case"dragenter":return Tr=$o(Tr,t,e,n,i,r),!0;case"mouseover":return br=$o(br,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,$o(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,$o(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Gv(t){var e=rs(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,Hv(t.priority,function(){zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=qa(n),e!==null&&Wh(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){wc(t)&&n.delete(e)}function DS(){Wd=!1,wr!==null&&wc(wr)&&(wr=null),Tr!==null&&wc(Tr)&&(Tr=null),br!==null&&wc(br)&&(br=null),Ca.forEach(_m),Ra.forEach(_m)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,DS)))}function Pa(t){function e(r){return Qo(r,t)}if(0<Nl.length){Qo(Nl[0],t);for(var n=1;n<Nl.length;n++){var i=Nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Qo(wr,t),Tr!==null&&Qo(Tr,t),br!==null&&Qo(br,t),Ca.forEach(e),Ra.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&yr.shift()}var vo=Ji.ReactCurrentBatchConfig,Bc=!0;function US(t,e,n,i){var r=yt,s=vo.transition;vo.transition=null;try{yt=1,jh(t,e,n,i)}finally{yt=r,vo.transition=s}}function NS(t,e,n,i){var r=yt,s=vo.transition;vo.transition=null;try{yt=4,jh(t,e,n,i)}finally{yt=r,vo.transition=s}}function jh(t,e,n,i){if(Bc){var r=jd(t,e,n,i);if(r===null)Pf(t,e,i,Hc,n),ym(t,i);else if(LS(r,t,e,n,i))i.stopPropagation();else if(ym(t,i),e&4&&-1<PS.indexOf(t)){for(;r!==null;){var s=qa(r);if(s!==null&&kv(s),s=jd(t,e,n,i),s===null&&Pf(t,e,i,Hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pf(t,e,i,null,n)}}var Hc=null;function jd(t,e,n,i){if(Hc=null,t=Hh(i),t=rs(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hc=t,null}function Vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case Gh:return 1;case Nv:return 4;case kc:case MS:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Sr=null,Xh=null,Tc=null;function Wv(){if(Tc)return Tc;var t,e=Xh,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tc=r.slice(t,1<i?1-i:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Sm(){return!1}function Zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:Sm,this.isPropagationStopped=Sm,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=Zn(Oo),Ya=kt({},Oo,{view:0,detail:0}),IS=Zn(Ya),Sf,Mf,Ko,pu=kt({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Sf=t.screenX-Ko.screenX,Mf=t.screenY-Ko.screenY):Mf=Sf=0,Ko=t),Sf)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),Mm=Zn(pu),FS=kt({},pu,{dataTransfer:0}),OS=Zn(FS),kS=kt({},Ya,{relatedTarget:0}),Ef=Zn(kS),zS=kt({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=Zn(zS),HS=kt({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GS=Zn(HS),VS=kt({},Oo,{data:0}),Em=Zn(VS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function qh(){return YS}var qS=kt({},Ya,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$S=Zn(qS),QS=kt({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=Zn(QS),KS=kt({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),ZS=Zn(KS),JS=kt({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=Zn(JS),t1=kt({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=Zn(t1),i1=[9,13,27,32],$h=qi&&"CompositionEvent"in window,ha=null;qi&&"documentMode"in document&&(ha=document.documentMode);var r1=qi&&"TextEvent"in window&&!ha,jv=qi&&(!$h||ha&&8<ha&&11>=ha),Tm=" ",bm=!1;function Xv(t,e){switch(t){case"keyup":return i1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function s1(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(bm=!0,Tm);case"textInput":return t=e.data,t===Tm&&bm?null:t;default:return null}}function o1(t,e){if(eo)return t==="compositionend"||!$h&&Xv(t,e)?(t=Wv(),Tc=Xh=Sr=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var a1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a1[t.type]:e==="textarea"}function qv(t,e,n,i){Tv(i),e=Gc(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,La=null;function l1(t){sx(t,0)}function mu(t){var e=io(t);if(xv(e))return t}function c1(t,e){if(t==="change")return e}var $v=!1;if(qi){var wf;if(qi){var Tf="oninput"in document;if(!Tf){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),Tf=typeof Cm.oninput=="function"}wf=Tf}else wf=!1;$v=wf&&(!document.documentMode||9<document.documentMode)}function Rm(){pa&&(pa.detachEvent("onpropertychange",Qv),La=pa=null)}function Qv(t){if(t.propertyName==="value"&&mu(La)){var e=[];qv(e,La,t,Hh(t)),Rv(l1,e)}}function u1(t,e,n){t==="focusin"?(Rm(),pa=e,La=n,pa.attachEvent("onpropertychange",Qv)):t==="focusout"&&Rm()}function f1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(La)}function d1(t,e){if(t==="click")return mu(e)}function h1(t,e){if(t==="input"||t==="change")return mu(e)}function p1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:p1;function Da(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ad.call(e,r)||!Si(t[r],e[r]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Pm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function Kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zv(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m1(t){var e=Zv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(i!==null&&Qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lm(n,s);var o=Lm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g1=qi&&"documentMode"in document&&11>=document.documentMode,to=null,Xd=null,ma=null,Yd=!1;function Dm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||to==null||to!==Ic(i)||(i=to,"selectionStart"in i&&Qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Da(ma,i)||(ma=i,i=Gc(Xd,"onSelect"),0<i.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=to)))}function Fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},bf={},Jv={};qi&&(Jv=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function gu(t){if(bf[t])return bf[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jv)return bf[t]=e[n];return t}var ex=gu("animationend"),tx=gu("animationiteration"),nx=gu("animationstart"),ix=gu("transitionend"),rx=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){rx.set(t,e),xs(e,[t])}for(var Af=0;Af<Um.length;Af++){var Cf=Um[Af],v1=Cf.toLowerCase(),x1=Cf[0].toUpperCase()+Cf.slice(1);kr(v1,"on"+x1)}kr(ex,"onAnimationEnd");kr(tx,"onAnimationIteration");kr(nx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(ix,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vS(i,e,void 0,t),t.currentTarget=null}function sx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,a,c),s=l}}}if(Oc)throw t=Gd,Oc=!1,Gd=null,t}function bt(t,e){var n=e[Zd];n===void 0&&(n=e[Zd]=new Set);var i=t+"__bubble";n.has(i)||(ox(e,t,2,!1),n.add(i))}function Rf(t,e,n){var i=0;e&&(i|=4),ox(n,t,i,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[Ol]){t[Ol]=!0,hv.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||Rf(n,!1,t),Rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,Rf("selectionchange",!1,e))}}function ox(t,e,n,i){switch(Vv(e)){case 1:var r=US;break;case 4:r=NS;break;default:r=jh}n=r.bind(null,e,n,t),r=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rv(function(){var c=s,f=Hh(n),d=[];e:{var h=rx.get(t);if(h!==void 0){var m=Yh,x=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":m=$S;break;case"focusin":x="focus",m=Ef;break;case"focusout":x="blur",m=Ef;break;case"beforeblur":case"afterblur":m=Ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ZS;break;case ex:case tx:case nx:m=BS;break;case ix:m=e1;break;case"scroll":m=IS;break;case"wheel":m=n1;break;case"copy":case"cut":case"paste":m=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wm}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,u!==null&&(_=Aa(g,u),_!=null&&y.push(Na(g,_,v)))),p)break;g=g.return}0<y.length&&(h=new m(h,x,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==zd&&(x=n.relatedTarget||n.fromElement)&&(rs(x)||x[$i]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?rs(x):null,x!==null&&(p=ys(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=Mm,_="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=wm,_="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:io(m),v=x==null?h:io(x),h=new y(_,g+"leave",m,n,f),h.target=p,h.relatedTarget=v,_=null,rs(f)===c&&(y=new y(u,g+"enter",x,n,f),y.target=v,y.relatedTarget=p,_=y),p=_,m&&x)t:{for(y=m,u=x,g=0,v=y;v;v=Ds(v))g++;for(v=0,_=u;_;_=Ds(_))v++;for(;0<g-v;)y=Ds(y),g--;for(;0<v-g;)u=Ds(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ds(y),u=Ds(u)}y=null}else y=null;m!==null&&Im(d,h,m,y,!1),x!==null&&p!==null&&Im(d,p,x,y,!0)}}e:{if(h=c?io(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=c1;else if(Am(h))if($v)R=h1;else{R=f1;var b=u1}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=d1);if(R&&(R=R(t,c))){qv(d,R,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Nd(h,"number",h.value)}switch(b=c?io(c):window,t){case"focusin":(Am(b)||b.contentEditable==="true")&&(to=b,Xd=c,ma=null);break;case"focusout":ma=Xd=to=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Dm(d,n,f);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":Dm(d,n,f)}var E;if($h)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else eo?Xv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(jv&&n.locale!=="ko"&&(eo||U!=="onCompositionStart"?U==="onCompositionEnd"&&eo&&(E=Wv()):(Sr=f,Xh="value"in Sr?Sr.value:Sr.textContent,eo=!0)),b=Gc(c,U),0<b.length&&(U=new Em(U,t,null,n,f),d.push({event:U,listeners:b}),E?U.data=E:(E=Yv(n),E!==null&&(U.data=E)))),(E=r1?s1(t,n):o1(t,n))&&(c=Gc(c,"onBeforeInput"),0<c.length&&(f=new Em("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}sx(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Aa(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Na(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _1=/\r\n?/g,S1=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(_1,`
`).replace(S1,"")}function kl(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error(ue(425))}function Vc(){}var qd=null,$d=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(t){return Om.resolve(null).then(t).catch(w1)}:Kd;function w1(t){setTimeout(function(){throw t})}function Lf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ko,Ia="__reactProps$"+ko,$i="__reactContainer$"+ko,Zd="__reactEvents$"+ko,T1="__reactListeners$"+ko,b1="__reactHandles$"+ko;function rs(t){var e=t[Ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=km(t);t!==null;){if(n=t[Ri])return n;t=km(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[Ri]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function vu(t){return t[Ia]||null}var Jd=[],ro=-1;function zr(t){return{current:t}}function Rt(t){0>ro||(t.current=Jd[ro],Jd[ro]=null,ro--)}function wt(t,e){ro++,Jd[ro]=t.current,t.current=e}var Ir={},Mn=zr(Ir),Fn=zr(!1),ds=Ir;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function Wc(){Rt(Fn),Rt(Mn)}function zm(t,e,n){if(Mn.current!==Ir)throw Error(ue(168));wt(Mn,e),wt(Fn,n)}function ax(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,uS(t)||"Unknown",r));return kt({},n,i)}function jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ds=Mn.current,wt(Mn,t),wt(Fn,Fn.current),!0}function Bm(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=ax(t,e,ds),i.__reactInternalMemoizedMergedChildContext=t,Rt(Fn),Rt(Mn),wt(Mn,t)):Rt(Fn),wt(Fn,n)}var Vi=null,xu=!1,Df=!1;function lx(t){Vi===null?Vi=[t]:Vi.push(t)}function A1(t){xu=!0,lx(t)}function Br(){if(!Df&&Vi!==null){Df=!0;var t=0,e=yt;try{var n=Vi;for(yt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,xu=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),Uv(Gh,Br),r}finally{yt=e,Df=!1}}return null}var so=[],oo=0,Xc=null,Yc=0,ei=[],ti=0,hs=null,Wi=1,ji="";function Jr(t,e){so[oo++]=Yc,so[oo++]=Xc,Xc=t,Yc=e}function cx(t,e,n){ei[ti++]=Wi,ei[ti++]=ji,ei[ti++]=hs,hs=t;var i=Wi;t=ji;var r=32-yi(i)-1;i&=~(1<<r),n+=1;var s=32-yi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-yi(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function Kh(t){t.return!==null&&(Jr(t,1),cx(t,1,0))}function Zh(t){for(;t===Xc;)Xc=so[--oo],so[oo]=null,Yc=so[--oo],so[oo]=null;for(;t===hs;)hs=ei[--ti],ei[ti]=null,ji=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var $n=null,qn=null,Nt=!1,xi=null;function ux(t,e){var n=ai(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,qn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ai(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,qn=null,!0):!1;default:return!1}}function eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function th(t){if(Nt){var e=qn;if(e){var n=e;if(!Hm(t,e)){if(eh(t))throw Error(ue(418));e=Ar(n.nextSibling);var i=$n;e&&Hm(t,e)?ux(i,n):(t.flags=t.flags&-4097|2,Nt=!1,$n=t)}}else{if(eh(t))throw Error(ue(418));t.flags=t.flags&-4097|2,Nt=!1,$n=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function zl(t){if(t!==$n)return!1;if(!Nt)return Gm(t),Nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=qn)){if(eh(t))throw fx(),Error(ue(418));for(;e;)ux(t,e),e=Ar(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=$n?Ar(t.stateNode.nextSibling):null;return!0}function fx(){for(var t=qn;t;)t=Ar(t.nextSibling)}function wo(){qn=$n=null,Nt=!1}function Jh(t){xi===null?xi=[t]:xi.push(t)}var C1=Ji.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Bl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vm(t){var e=t._init;return e(t._payload)}function dx(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Lr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,_){return g===null||g.tag!==6?(g=zf(v,u.mode,_),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,_){var R=v.type;return R===Js?f(u,g,v.props.children,_,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===vr&&Vm(R)===g.type)?(_=r(g,v.props),_.ref=Zo(u,g,v),_.return=u,_):(_=Uc(v.type,v.key,v.props,null,u.mode,_),_.ref=Zo(u,g,v),_.return=u,_)}function c(u,g,v,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Bf(v,u.mode,_),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,_,R){return g===null||g.tag!==7?(g=ls(v,u.mode,_,R),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zf(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Rl:return v=Uc(g.type,g.key,g.props,null,u.mode,v),v.ref=Zo(u,null,g),v.return=u,v;case Zs:return g=Bf(g,u.mode,v),g.return=u,g;case vr:var _=g._init;return d(u,_(g._payload),v)}if(aa(g)||Yo(g))return g=ls(g,u.mode,v,null),g.return=u,g;Bl(u,g)}return null}function h(u,g,v,_){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,g,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:return v.key===R?l(u,g,v,_):null;case Zs:return v.key===R?c(u,g,v,_):null;case vr:return R=v._init,h(u,g,R(v._payload),_)}if(aa(v)||Yo(v))return R!==null?null:f(u,g,v,_,null);Bl(u,v)}return null}function m(u,g,v,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(v)||null,a(g,u,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Rl:return u=u.get(_.key===null?v:_.key)||null,l(g,u,_,R);case Zs:return u=u.get(_.key===null?v:_.key)||null,c(g,u,_,R);case vr:var b=_._init;return m(u,g,v,b(_._payload),R)}if(aa(_)||Yo(_))return u=u.get(v)||null,f(g,u,_,R,null);Bl(g,_)}return null}function x(u,g,v,_){for(var R=null,b=null,E=g,U=g=0,S=null;E!==null&&U<v.length;U++){E.index>U?(S=E,E=null):S=E.sibling;var T=h(u,E,v[U],_);if(T===null){E===null&&(E=S);break}t&&E&&T.alternate===null&&e(u,E),g=s(T,g,U),b===null?R=T:b.sibling=T,b=T,E=S}if(U===v.length)return n(u,E),Nt&&Jr(u,U),R;if(E===null){for(;U<v.length;U++)E=d(u,v[U],_),E!==null&&(g=s(E,g,U),b===null?R=E:b.sibling=E,b=E);return Nt&&Jr(u,U),R}for(E=i(u,E);U<v.length;U++)S=m(E,u,U,v[U],_),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?U:S.key),g=s(S,g,U),b===null?R=S:b.sibling=S,b=S);return t&&E.forEach(function(V){return e(u,V)}),Nt&&Jr(u,U),R}function y(u,g,v,_){var R=Yo(v);if(typeof R!="function")throw Error(ue(150));if(v=R.call(v),v==null)throw Error(ue(151));for(var b=R=null,E=g,U=g=0,S=null,T=v.next();E!==null&&!T.done;U++,T=v.next()){E.index>U?(S=E,E=null):S=E.sibling;var V=h(u,E,T.value,_);if(V===null){E===null&&(E=S);break}t&&E&&V.alternate===null&&e(u,E),g=s(V,g,U),b===null?R=V:b.sibling=V,b=V,E=S}if(T.done)return n(u,E),Nt&&Jr(u,U),R;if(E===null){for(;!T.done;U++,T=v.next())T=d(u,T.value,_),T!==null&&(g=s(T,g,U),b===null?R=T:b.sibling=T,b=T);return Nt&&Jr(u,U),R}for(E=i(u,E);!T.done;U++,T=v.next())T=m(E,u,U,T.value,_),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?U:T.key),g=s(T,g,U),b===null?R=T:b.sibling=T,b=T);return t&&E.forEach(function(W){return e(u,W)}),Nt&&Jr(u,U),R}function p(u,g,v,_){if(typeof v=="object"&&v!==null&&v.type===Js&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:e:{for(var R=v.key,b=g;b!==null;){if(b.key===R){if(R=v.type,R===Js){if(b.tag===7){n(u,b.sibling),g=r(b,v.props.children),g.return=u,u=g;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===vr&&Vm(R)===b.type){n(u,b.sibling),g=r(b,v.props),g.ref=Zo(u,b,v),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Js?(g=ls(v.props.children,u.mode,_,v.key),g.return=u,u=g):(_=Uc(v.type,v.key,v.props,null,u.mode,_),_.ref=Zo(u,g,v),_.return=u,u=_)}return o(u);case Zs:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Bf(v,u.mode,_),g.return=u,u=g}return o(u);case vr:return b=v._init,p(u,g,b(v._payload),_)}if(aa(v))return x(u,g,v,_);if(Yo(v))return y(u,g,v,_);Bl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=zf(v,u.mode,_),g.return=u,u=g),o(u)):n(u,g)}return p}var To=dx(!0),hx=dx(!1),qc=zr(null),$c=null,ao=null,ep=null;function tp(){ep=ao=$c=null}function np(t){var e=qc.current;Rt(qc),t._currentValue=e}function nh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){$c=t,ep=ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(In=!0),t.firstContext=null)}function ui(t){var e=t._currentValue;if(ep!==t)if(t={context:t,memoizedValue:e,next:null},ao===null){if($c===null)throw Error(ue(308));ao=t,$c.dependencies={lanes:0,firstContext:t}}else ao=ao.next=t;return e}var ss=null;function ip(t){ss===null?ss=[t]:ss.push(t)}function px(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ip(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,ip(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}function Wm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,i){var r=t.updateQueue;xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=kt({},d,h);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=d}}function jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var $a={},Di=zr($a),Fa=zr($a),Oa=zr($a);function os(t){if(t===$a)throw Error(ue(174));return t}function sp(t,e){switch(wt(Oa,e),wt(Fa,t),wt(Di,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}Rt(Di),wt(Di,e)}function bo(){Rt(Di),Rt(Fa),Rt(Oa)}function gx(t){os(Oa.current);var e=os(Di.current),n=Fd(e,t.type);e!==n&&(wt(Fa,t),wt(Di,n))}function op(t){Fa.current===t&&(Rt(Di),Rt(Fa))}var Ft=zr(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uf=[];function ap(){for(var t=0;t<Uf.length;t++)Uf[t]._workInProgressVersionPrimary=null;Uf.length=0}var Cc=Ji.ReactCurrentDispatcher,Nf=Ji.ReactCurrentBatchConfig,ps=0,Ot=null,$t=null,rn=null,Zc=!1,ga=!1,ka=0,R1=0;function gn(){throw Error(ue(321))}function lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function cp(t,e,n,i,r,s){if(ps=s,Ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?U1:N1,t=n(i,r),ga){s=0;do{if(ga=!1,ka=0,25<=s)throw Error(ue(301));s+=1,rn=$t=null,e.updateQueue=null,Cc.current=I1,t=n(i,r)}while(ga)}if(Cc.current=Jc,e=$t!==null&&$t.next!==null,ps=0,rn=$t=Ot=null,Zc=!1,e)throw Error(ue(300));return t}function up(){var t=ka!==0;return ka=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ot.memoizedState=rn=t:rn=rn.next=t,rn}function fi(){if($t===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=rn===null?Ot.memoizedState:rn.next;if(e!==null)rn=e,$t=t;else{if(t===null)throw Error(ue(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Ot.memoizedState=rn=t:rn=rn.next=t}return rn}function za(t,e){return typeof e=="function"?e(t):e}function If(t){var e=fi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=$t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ps&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ot.lanes|=f,ms|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(In=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ot.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ff(t){var e=fi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(In=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function vx(){}function xx(t,e){var n=Ot,i=fi(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,In=!0),i=i.queue,fp(Sx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||rn!==null&&rn.memoizedState.tag&1){if(n.flags|=2048,Ba(9,_x.bind(null,n,i,r,e),void 0,null),an===null)throw Error(ue(349));ps&30||yx(n,e,r)}return r}function yx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _x(t,e,n,i){e.value=n,e.getSnapshot=i,Mx(e)&&Ex(t)}function Sx(t,e,n){return n(function(){Mx(e)&&Ex(t)})}function Mx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch{return!0}}function Ex(t){var e=Qi(t,1);e!==null&&_i(e,t,1,-1)}function Xm(t){var e=Ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=D1.bind(null,Ot,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wx(){return fi().memoizedState}function Rc(t,e,n,i){var r=Ai();Ot.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=fi();i=i===void 0?null:i;var s=void 0;if($t!==null){var o=$t.memoizedState;if(s=o.destroy,i!==null&&lp(i,o.deps)){r.memoizedState=Ba(e,n,s,i);return}}Ot.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function Ym(t,e){return Rc(8390656,8,t,e)}function fp(t,e){return yu(2048,8,t,e)}function Tx(t,e){return yu(4,2,t,e)}function bx(t,e){return yu(4,4,t,e)}function Ax(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cx(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,Ax.bind(null,e,t),n)}function dp(){}function Rx(t,e){var n=fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Px(t,e){var n=fi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lx(t,e,n){return ps&21?(Si(n,e)||(n=Fv(),Ot.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,In=!0),t.memoizedState=n)}function P1(t,e){var n=yt;yt=n!==0&&4>n?n:4,t(!0);var i=Nf.transition;Nf.transition={};try{t(!1),e()}finally{yt=n,Nf.transition=i}}function Dx(){return fi().memoizedState}function L1(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ux(t))Nx(e,n);else if(n=px(t,e,n,i),n!==null){var r=An();_i(n,t,i,r),Ix(n,e,i)}}function D1(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ux(t))Nx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,ip(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=px(t,e,r,i),n!==null&&(r=An(),_i(n,t,i,r),Ix(n,e,i))}}function Ux(t){var e=t.alternate;return t===Ot||e!==null&&e===Ot}function Nx(t,e){ga=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ix(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}var Jc={readContext:ui,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},U1={readContext:ui,useCallback:function(t,e){return Ai().memoizedState=[t,e===void 0?null:e],t},useContext:ui,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,Ax.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=Ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L1.bind(null,Ot,t),[i.memoizedState,t]},useRef:function(t){var e=Ai();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:dp,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=P1.bind(null,t[1]),Ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ot,r=Ai();if(Nt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),an===null)throw Error(ue(349));ps&30||yx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ym(Sx.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,_x.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ai(),e=an.identifierPrefix;if(Nt){var n=ji,i=Wi;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},N1={readContext:ui,useCallback:Rx,useContext:ui,useEffect:fp,useImperativeHandle:Cx,useInsertionEffect:Tx,useLayoutEffect:bx,useMemo:Px,useReducer:If,useRef:wx,useState:function(){return If(za)},useDebugValue:dp,useDeferredValue:function(t){var e=fi();return Lx(e,$t.memoizedState,t)},useTransition:function(){var t=If(za)[0],e=fi().memoizedState;return[t,e]},useMutableSource:vx,useSyncExternalStore:xx,useId:Dx,unstable_isNewReconciler:!1},I1={readContext:ui,useCallback:Rx,useContext:ui,useEffect:fp,useImperativeHandle:Cx,useInsertionEffect:Tx,useLayoutEffect:bx,useMemo:Px,useReducer:Ff,useRef:wx,useState:function(){return Ff(za)},useDebugValue:dp,useDeferredValue:function(t){var e=fi();return $t===null?e.memoizedState=t:Lx(e,$t.memoizedState,t)},useTransition:function(){var t=Ff(za)[0],e=fi().memoizedState;return[t,e]},useMutableSource:vx,useSyncExternalStore:xx,useId:Dx,unstable_isNewReconciler:!1};function gi(t,e){if(t&&t.defaultProps){e=kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ih(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=An(),r=Pr(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(_i(e,t,r,i),Ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=An(),r=Pr(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(_i(e,t,r,i),Ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=An(),i=Pr(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(_i(e,t,i,n),Ac(e,t,i))}};function qm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function Fx(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=ui(s):(r=On(e)?ds:Mn.current,i=e.contextTypes,s=(i=i!=null)?Eo(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ui(s):(s=On(e)?ds:Mn.current,r.context=Eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ih(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),Qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=cS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function Ox(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,mh=i),sh(t,e)},n}function kx(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new F1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Q1.bind(null,t,e,n),e.then(t,t))}function Km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var O1=Ji.ReactCurrentOwner,In=!1;function wn(t,e,n,i){e.child=t===null?hx(e,null,n,i):To(e,t.child,n,i)}function Jm(t,e,n,i,r){n=n.render;var s=e.ref;return xo(e,r),i=cp(t,e,n,i,s,r),n=up(),t!==null&&!In?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(Nt&&n&&Kh(e),e.flags|=1,wn(t,e,i,r),e.child)}function eg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zx(t,e,s,i,r)):(t=Uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function zx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(In=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(In=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return oh(t,e,n,i,r)}function Bx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(co,jn),jn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,wt(co,jn),jn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,wt(co,jn),jn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,wt(co,jn),jn|=i;return wn(t,e,r,n),e.child}function Hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,i,r){var s=On(n)?ds:Mn.current;return s=Eo(e,s),xo(e,r),n=cp(t,e,n,i,s,r),i=up(),t!==null&&!In?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(Nt&&i&&Kh(e),e.flags|=1,wn(t,e,n,r),e.child)}function tg(t,e,n,i,r){if(On(n)){var s=!0;jc(e)}else s=!1;if(xo(e,r),e.stateNode===null)Pc(t,e),Fx(e,n,i),rh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ui(c):(c=On(n)?ds:Mn.current,c=Eo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&$m(e,o,i,c),xr=!1;var h=e.memoizedState;o.state=h,Qc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Fn.current||xr?(typeof f=="function"&&(ih(e,n,f,i),l=e.memoizedState),(a=xr||qm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,mx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:gi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ui(l):(l=On(n)?ds:Mn.current,l=Eo(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&$m(e,o,i,l),xr=!1,h=e.memoizedState,o.state=h,Qc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Fn.current||xr?(typeof m=="function"&&(ih(e,n,m,i),x=e.memoizedState),(c=xr||qm(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ah(t,e,n,i,s,r)}function ah(t,e,n,i,r,s){Hx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bm(e,n,!1),Ki(t,e,s);i=e.stateNode,O1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=To(e,t.child,null,s),e.child=To(e,null,a,s)):wn(t,e,a,s),e.memoizedState=i.state,r&&Bm(e,n,!0),e.child}function Gx(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),sp(t,e.containerInfo)}function ng(t,e,n,i,r){return wo(),Jh(r),e.flags|=256,wn(t,e,n,i),e.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vx(t,e,n){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),wt(Ft,r&1),t===null)return th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ch(n),e.memoizedState=lh,t):hp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return k1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lh,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hp(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,i){return i!==null&&Jh(i),To(e,t.child,null,n),t=hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Of(Error(ue(422))),Hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Eu({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,t.child,null,o),e.child.memoizedState=ch(o),e.memoizedState=lh,s);if(!(e.mode&1))return Hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Of(s,i,void 0),Hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,In||a){if(i=an,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),_i(i,t,r,-1))}return yp(),i=Of(Error(ue(421))),Hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=K1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qn=Ar(r.nextSibling),$n=e,Nt=!0,xi=null,t!==null&&(ei[ti++]=Wi,ei[ti++]=ji,ei[ti++]=hs,Wi=t.id,ji=t.overflow,hs=e),e=hp(e,i.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nh(t.return,e,n)}function kf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(wn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(wt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kf(e,!0,n,null,s);break;case"together":kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z1(t,e,n){switch(e.tag){case 3:Gx(e),wo();break;case 5:gx(e);break;case 1:On(e.type)&&jc(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(qc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?Vx(t,e,n):(wt(Ft,Ft.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);wt(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Bx(t,e,n)}return Ki(t,e,n)}var jx,uh,Xx,Yx;jx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};Xx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(Di.current);var s=null;switch(n){case"input":r=Dd(t,r),i=Dd(t,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=Id(t,r),i=Id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vc)}Od(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&bt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Jo(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function B1(t,e,n){var i=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(e),null;case 1:return On(e.type)&&Wc(),vn(e),null;case 3:return i=e.stateNode,bo(),Rt(Fn),Rt(Mn),ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xi!==null&&(xh(xi),xi=null))),uh(t,e),vn(e),null;case 5:op(e);var r=os(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Xx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return vn(e),null}if(t=os(Di.current),zl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)bt(ca[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":dm(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":pm(i,s),bt("invalid",i)}Od(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,a,t),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(n){case"input":Pl(i),hm(i,s,!0);break;case"textarea":Pl(i),mm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ri]=e,t[Ia]=i,jx(t,e,!1,!1),e.stateNode=t;e:{switch(o=kd(n,i),n){case"dialog":bt("cancel",t),bt("close",t),r=i;break;case"iframe":case"object":case"embed":bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)bt(ca[r],t);r=i;break;case"source":bt("error",t),r=i;break;case"img":case"image":case"link":bt("error",t),bt("load",t),r=i;break;case"details":bt("toggle",t),r=i;break;case"input":dm(t,i),r=Dd(t,i),bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),bt("invalid",t);break;case"textarea":pm(t,i),r=Id(t,i),bt("invalid",t);break;default:r=i}Od(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",t):l!=null&&Oh(t,s,l,o))}switch(n){case"input":Pl(t),hm(t,i,!1);break;case"textarea":Pl(t),mm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?po(t,!!i.multiple,s,!1):i.defaultValue!=null&&po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vn(e),null;case 6:if(t&&e.stateNode!=null)Yx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=os(Oa.current),os(Di.current),zl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:kl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return vn(e),null;case 13:if(Rt(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&qn!==null&&e.mode&1&&!(e.flags&128))fx(),wo(),e.flags|=98560,s=!1;else if(s=zl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Ri]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vn(e),s=!1}else xi!==null&&(xh(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Qt===0&&(Qt=3):yp())),e.updateQueue!==null&&(e.flags|=4),vn(e),null);case 4:return bo(),uh(t,e),t===null&&Ua(e.stateNode.containerInfo),vn(e),null;case 10:return np(e.type._context),vn(e),null;case 17:return On(e.type)&&Wc(),vn(e),null;case 19:if(Rt(Ft),s=e.memoizedState,s===null)return vn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Jo(s,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,Jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return wt(Ft,Ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>Co&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Nt)return vn(e),null}else 2*Ht()-s.renderingStartTime>Co&&n!==1073741824&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=Ft.current,wt(Ft,i?n&1|2:n&1),e):(vn(e),null);case 22:case 23:return xp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?jn&1073741824&&(vn(e),e.subtreeFlags&6&&(e.flags|=8192)):vn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function H1(t,e){switch(Zh(e),e.tag){case 1:return On(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bo(),Rt(Fn),Rt(Mn),ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return op(e),null;case 13:if(Rt(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Rt(Ft),null;case 4:return bo(),null;case 10:return np(e.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var Gl=!1,_n=!1,G1=typeof WeakSet=="function"?WeakSet:Set,Re=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function fh(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var rg=!1;function V1(t,e){if(qd=Bc,t=Zv(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},Bc=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:gi(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(_){Bt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return x=rg,rg=!1,x}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fh(e,n,s)}r=r.next}while(r!==i)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qx(t){var e=t.alternate;e!==null&&(t.alternate=null,qx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ri],delete e[Ia],delete e[Zd],delete e[T1],delete e[b1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $x(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$x(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(i!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}function ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}var cn=null,vi=!1;function ur(t,e,n){for(n=n.child;n!==null;)Qx(t,e,n),n=n.sibling}function Qx(t,e,n){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:_n||lo(n,e);case 6:var i=cn,r=vi;cn=null,ur(t,e,n),cn=i,vi=r,cn!==null&&(vi?(t=cn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):cn.removeChild(n.stateNode));break;case 18:cn!==null&&(vi?(t=cn,n=n.stateNode,t.nodeType===8?Lf(t.parentNode,n):t.nodeType===1&&Lf(t,n),Pa(t)):Lf(cn,n.stateNode));break;case 4:i=cn,r=vi,cn=n.stateNode.containerInfo,vi=!0,ur(t,e,n),cn=i,vi=r;break;case 0:case 11:case 14:case 15:if(!_n&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),r=r.next}while(r!==i)}ur(t,e,n);break;case 1:if(!_n&&(lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(_n=(i=_n)||n.memoizedState!==null,ur(t,e,n),_n=i):ur(t,e,n);break;default:ur(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G1),e.forEach(function(i){var r=Z1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function di(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:cn=a.stateNode,vi=!1;break e;case 3:cn=a.stateNode.containerInfo,vi=!0;break e;case 4:cn=a.stateNode.containerInfo,vi=!0;break e}a=a.return}if(cn===null)throw Error(ue(160));Qx(s,o,r),cn=null,vi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kx(e,t),e=e.sibling}function Kx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(e,t),Ti(t),i&4){try{va(3,t,t.return),Su(3,t)}catch(y){Bt(t,t.return,y)}try{va(5,t,t.return)}catch(y){Bt(t,t.return,y)}}break;case 1:di(e,t),Ti(t),i&512&&n!==null&&lo(n,n.return);break;case 5:if(di(e,t),Ti(t),i&512&&n!==null&&lo(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(y){Bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yv(r,s),kd(a,o);var c=kd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?wv(r,d):f==="dangerouslySetInnerHTML"?Mv(r,d):f==="children"?ba(r,d):Oh(r,f,d,c)}switch(a){case"input":Ud(r,s);break;case"textarea":_v(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?po(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?po(r,!!s.multiple,s.defaultValue,!0):po(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(y){Bt(t,t.return,y)}}break;case 6:if(di(e,t),Ti(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Bt(t,t.return,y)}}break;case 3:if(di(e,t),Ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(y){Bt(t,t.return,y)}break;case 4:di(e,t),Ti(t);break;case 13:di(e,t),Ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gp=Ht())),i&4&&og(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_n=(c=_n)||f,di(e,t),_n=c):di(e,t),Ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Re=t,f=t.child;f!==null;){for(d=Re=f;Re!==null;){switch(h=Re,m=h.child,h.tag){case 0:case 11:case 14:case 15:va(4,h,h.return);break;case 1:lo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Bt(i,n,y)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){lg(d);continue}}m!==null?(m.return=h,Re=m):lg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ev("display",o))}catch(y){Bt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Bt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:di(e,t),Ti(t),i&4&&og(t);break;case 21:break;default:di(e,t),Ti(t)}}function Ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($x(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=sg(t);ph(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sg(t);hh(t,a,o);break;default:throw Error(ue(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W1(t,e,n){Re=t,Zx(t)}function Zx(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||_n;a=Gl;var c=_n;if(Gl=o,(_n=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?cg(r):l!==null?(l.return=o,Re=l):cg(r);for(;s!==null;)Re=s,Zx(s),s=s.sibling;Re=r,Gl=a,_n=c}ag(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):ag(t)}}function ag(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_n||Su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_n)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}_n||e.flags&512&&dh(e)}catch(h){Bt(e,e.return,h)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function lg(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function cg(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{dh(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{dh(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var j1=Math.ceil,eu=Ji.ReactCurrentDispatcher,pp=Ji.ReactCurrentOwner,li=Ji.ReactCurrentBatchConfig,ft=0,an=null,jt=null,dn=0,jn=0,co=zr(0),Qt=0,Ha=null,ms=0,Mu=0,mp=0,xa=null,Nn=null,gp=0,Co=1/0,Gi=null,tu=!1,mh=null,Rr=null,Vl=!1,Mr=null,nu=0,ya=0,gh=null,Lc=-1,Dc=0;function An(){return ft&6?Ht():Lc!==-1?Lc:Lc=Ht()}function Pr(t){return t.mode&1?ft&2&&dn!==0?dn&-dn:C1.transition!==null?(Dc===0&&(Dc=Fv()),Dc):(t=yt,t!==0||(t=window.event,t=t===void 0?16:Vv(t.type)),t):1}function _i(t,e,n,i){if(50<ya)throw ya=0,gh=null,Error(ue(185));Xa(t,n,i),(!(ft&2)||t!==an)&&(t===an&&(!(ft&2)&&(Mu|=n),Qt===4&&_r(t,dn)),kn(t,i),n===1&&ft===0&&!(e.mode&1)&&(Co=Ht()+500,xu&&Br()))}function kn(t,e){var n=t.callbackNode;CS(t,e);var i=zc(t,t===an?dn:0);if(i===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?A1(ug.bind(null,t)):lx(ug.bind(null,t)),E1(function(){!(ft&6)&&Br()}),n=null;else{switch(Ov(i)){case 1:n=Gh;break;case 4:n=Nv;break;case 16:n=kc;break;case 536870912:n=Iv;break;default:n=kc}n=oy(n,Jx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jx(t,e){if(Lc=-1,Dc=0,ft&6)throw Error(ue(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=zc(t,t===an?dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=ft;ft|=2;var s=ty();(an!==t||dn!==e)&&(Gi=null,Co=Ht()+500,as(t,e));do try{q1();break}catch(a){ey(t,a)}while(!0);tp(),eu.current=s,ft=r,jt!==null?e=0:(an=null,dn=0,e=Qt)}if(e!==0){if(e===2&&(r=Vd(t),r!==0&&(i=r,e=vh(t,r))),e===1)throw n=Ha,as(t,0),_r(t,i),kn(t,Ht()),n;if(e===6)_r(t,i);else{if(r=t.current.alternate,!(i&30)&&!X1(r)&&(e=iu(t,i),e===2&&(s=Vd(t),s!==0&&(i=s,e=vh(t,s))),e===1))throw n=Ha,as(t,0),_r(t,i),kn(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:es(t,Nn,Gi);break;case 3:if(_r(t,i),(i&130023424)===i&&(e=gp+500-Ht(),10<e)){if(zc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){An(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kd(es.bind(null,t,Nn,Gi),e);break}es(t,Nn,Gi);break;case 4:if(_r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-yi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j1(i/1960))-i,10<i){t.timeoutHandle=Kd(es.bind(null,t,Nn,Gi),i);break}es(t,Nn,Gi);break;case 5:es(t,Nn,Gi);break;default:throw Error(ue(329))}}}return kn(t,Ht()),t.callbackNode===n?Jx.bind(null,t):null}function vh(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=iu(t,e),t!==2&&(e=Nn,Nn=n,e!==null&&xh(e)),t}function xh(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function X1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~mp,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yi(e),i=1<<n;t[n]=-1,e&=~i}}function ug(t){if(ft&6)throw Error(ue(327));yo();var e=zc(t,0);if(!(e&1))return kn(t,Ht()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=Vd(t);i!==0&&(e=i,n=vh(t,i))}if(n===1)throw n=Ha,as(t,0),_r(t,e),kn(t,Ht()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Nn,Gi),kn(t,Ht()),null}function vp(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(Co=Ht()+500,xu&&Br())}}function gs(t){Mr!==null&&Mr.tag===0&&!(ft&6)&&yo();var e=ft;ft|=1;var n=li.transition,i=yt;try{if(li.transition=null,yt=1,t)return t()}finally{yt=i,li.transition=n,ft=e,!(ft&6)&&Br()}}function xp(){jn=co.current,Rt(co)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M1(n)),jt!==null)for(n=jt.return;n!==null;){var i=n;switch(Zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wc();break;case 3:bo(),Rt(Fn),Rt(Mn),ap();break;case 5:op(i);break;case 4:bo();break;case 13:Rt(Ft);break;case 19:Rt(Ft);break;case 10:np(i.type._context);break;case 22:case 23:xp()}n=n.return}if(an=t,jt=t=Lr(t.current,null),dn=jn=e,Qt=0,Ha=null,mp=Mu=ms=0,Nn=xa=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ss=null}return t}function ey(t,e){do{var n=jt;try{if(tp(),Cc.current=Jc,Zc){for(var i=Ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(ps=0,rn=$t=Ot=null,ga=!1,ka=0,pp.current=null,n===null||n.return===null){Qt=1,Ha=e,jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Km(o);if(m!==null){m.flags&=-257,Zm(m,o,a,s,e),m.mode&1&&Qm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Qm(s,c,e),yp();break e}l=Error(ue(426))}}else if(Nt&&a.mode&1){var p=Km(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Zm(p,o,a,s,e),Jh(Ao(l,a));break e}}s=l=Ao(l,a),Qt!==4&&(Qt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Ox(s,l,e);Wm(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Rr===null||!Rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=kx(s,a,e);Wm(s,_);break e}}s=s.return}while(s!==null)}iy(n)}catch(R){e=R,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function ty(){var t=eu.current;return eu.current=Jc,t===null?Jc:t}function yp(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),an===null||!(ms&268435455)&&!(Mu&268435455)||_r(an,dn)}function iu(t,e){var n=ft;ft|=2;var i=ty();(an!==t||dn!==e)&&(Gi=null,as(t,e));do try{Y1();break}catch(r){ey(t,r)}while(!0);if(tp(),ft=n,eu.current=i,jt!==null)throw Error(ue(261));return an=null,dn=0,Qt}function Y1(){for(;jt!==null;)ny(jt)}function q1(){for(;jt!==null&&!yS();)ny(jt)}function ny(t){var e=sy(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?iy(t):jt=e,pp.current=null}function iy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H1(n,e),n!==null){n.flags&=32767,jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,jt=null;return}}else if(n=B1(n,e,jn),n!==null){jt=n;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);Qt===0&&(Qt=5)}function es(t,e,n){var i=yt,r=li.transition;try{li.transition=null,yt=1,$1(t,e,n,i)}finally{li.transition=r,yt=i}return null}function $1(t,e,n,i){do yo();while(Mr!==null);if(ft&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RS(t,s),t===an&&(jt=an=null,dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vl||(Vl=!0,oy(kc,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=li.transition,li.transition=null;var o=yt;yt=1;var a=ft;ft|=4,pp.current=null,V1(t,n),Kx(n,t),m1($d),Bc=!!qd,$d=qd=null,t.current=n,W1(n),_S(),ft=a,yt=o,li.transition=s}else t.current=n;if(Vl&&(Vl=!1,Mr=t,nu=r),s=t.pendingLanes,s===0&&(Rr=null),ES(n.stateNode),kn(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=mh,mh=null,t;return nu&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===gh?ya++:(ya=0,gh=t):ya=0,Br(),null}function yo(){if(Mr!==null){var t=Ov(nu),e=li.transition,n=yt;try{if(li.transition=null,yt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,nu=0,ft&6)throw Error(ue(331));var r=ft;for(ft|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var f=Re;switch(f.tag){case 0:case 11:case 15:va(8,f,s)}var d=f.child;if(d!==null)d.return=f,Re=d;else for(;Re!==null;){f=Re;var h=f.sibling,m=f.return;if(qx(f),f===c){Re=null;break}if(h!==null){h.return=m,Re=h;break}Re=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Re=u;break e}Re=s.return}}var g=t.current;for(Re=g;Re!==null;){o=Re;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Re=v;else e:for(o=g;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Su(9,a)}}catch(R){Bt(a,a.return,R)}if(a===o){Re=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Re=_;break e}Re=a.return}}if(ft=r,Br(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(hu,t)}catch{}i=!0}return i}finally{yt=n,li.transition=e}}return!1}function fg(t,e,n){e=Ao(n,e),e=Ox(t,e,1),t=Cr(t,e,1),e=An(),t!==null&&(Xa(t,1,e),kn(t,e))}function Bt(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=Ao(n,t),t=kx(e,t,1),e=Cr(e,t,1),t=An(),e!==null&&(Xa(e,1,t),kn(e,t));break}}e=e.return}}function Q1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=An(),t.pingedLanes|=t.suspendedLanes&n,an===t&&(dn&n)===n&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>Ht()-gp?as(t,0):mp|=n),kn(t,e)}function ry(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=An();t=Qi(t,e),t!==null&&(Xa(t,e,n),kn(t,n))}function K1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ry(t,n)}function Z1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),ry(t,n)}var sy;sy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)In=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return In=!1,z1(t,e,n);In=!!(t.flags&131072)}else In=!1,Nt&&e.flags&1048576&&cx(e,Yc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pc(t,e),t=e.pendingProps;var r=Eo(e,Mn.current);xo(e,n),r=cp(null,e,i,t,r,n);var s=up();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,jc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rp(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,rh(e,i,t,n),e=ah(null,e,i,!0,s,n)):(e.tag=0,Nt&&s&&Kh(e),wn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eM(i),t=gi(i,t),r){case 0:e=oh(null,e,i,t,n);break e;case 1:e=tg(null,e,i,t,n);break e;case 11:e=Jm(null,e,i,t,n);break e;case 14:e=eg(null,e,i,gi(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),oh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),tg(t,e,i,r,n);case 3:e:{if(Gx(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mx(t,e),Qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ue(423)),e),e=ng(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(ue(424)),e),e=ng(t,e,i,n,r);break e}else for(qn=Ar(e.stateNode.containerInfo.firstChild),$n=e,Nt=!0,xi=null,n=hx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=Ki(t,e,n);break e}wn(t,e,i,n)}e=e.child}return e;case 5:return gx(e),t===null&&th(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qd(i,r)?o=null:s!==null&&Qd(i,s)&&(e.flags|=32),Hx(t,e),wn(t,e,o,n),e.child;case 6:return t===null&&th(e),null;case 13:return Vx(t,e,n);case 4:return sp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=To(e,null,i,n):wn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Jm(t,e,i,r,n);case 7:return wn(t,e,e.pendingProps,n),e.child;case 8:return wn(t,e,e.pendingProps.children,n),e.child;case 12:return wn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(qc,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!Fn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xo(e,n),r=ui(r),i=i(r),e.flags|=1,wn(t,e,i,n),e.child;case 14:return i=e.type,r=gi(i,e.pendingProps),r=gi(i.type,r),eg(t,e,i,r,n);case 15:return zx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Pc(t,e),e.tag=1,On(i)?(t=!0,jc(e)):t=!1,xo(e,n),Fx(e,i,r),rh(e,i,r,n),ah(null,e,i,!0,t,n);case 19:return Wx(t,e,n);case 22:return Bx(t,e,n)}throw Error(ue(156,e.tag))};function oy(t,e){return Uv(t,e)}function J1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,e,n,i){return new J1(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eM(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===Bh)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=ai(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return ls(n.children,r,s,e);case kh:o=8,r|=8;break;case Cd:return t=ai(12,n,e,r|2),t.elementType=Cd,t.lanes=s,t;case Rd:return t=ai(13,n,e,r),t.elementType=Rd,t.lanes=s,t;case Pd:return t=ai(19,n,e,r),t.elementType=Pd,t.lanes=s,t;case gv:return Eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pv:o=10;break e;case mv:o=9;break e;case zh:o=11;break e;case Bh:o=14;break e;case vr:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=ai(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=ai(7,t,i,e),t.lanes=n,t}function Eu(t,e,n,i){return t=ai(22,t,i,e),t.elementType=gv,t.lanes=n,t.stateNode={isHidden:!1},t}function zf(t,e,n){return t=ai(6,t,null,e),t.lanes=n,t}function Bf(t,e,n){return e=ai(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_f(0),this.expirationTimes=_f(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_f(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sp(t,e,n,i,r,s,o,a,l){return t=new tM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ai(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function nM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ay(t){if(!t)return Ir;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(On(n))return ax(t,n,e)}return e}function ly(t,e,n,i,r,s,o,a,l){return t=Sp(n,i,!0,t,r,s,o,a,l),t.context=ay(null),n=t.current,i=An(),r=Pr(n),s=Yi(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,Xa(t,r,i),kn(t,i),t}function wu(t,e,n,i){var r=e.current,s=An(),o=Pr(r);return n=ay(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(_i(t,r,o,s),Ac(t,r,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mp(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function iM(){return null}var cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ep(t){this._internalRoot=t}Tu.prototype.render=Ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));wu(t,e,null,null)};Tu.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){wu(null,t,null,null)}),e[$i]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&Gv(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function rM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ru(o);s.call(c)}}var o=ly(e,i,t,0,null,!1,!1,"",hg);return t._reactRootContainer=o,t[$i]=o.current,Ua(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ru(l);a.call(c)}}var l=Sp(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=l,t[$i]=l.current,Ua(t.nodeType===8?t.parentNode:t),gs(function(){wu(e,l,n,i)}),l}function Au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ru(o);a.call(l)}}wu(e,o,t,r)}else o=rM(n,e,t,r,i);return ru(o)}kv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Vh(e,n|1),kn(e,Ht()),!(ft&6)&&(Co=Ht()+500,Br()))}break;case 13:gs(function(){var i=Qi(t,1);if(i!==null){var r=An();_i(i,t,1,r)}}),Mp(t,1)}};Wh=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=An();_i(e,t,134217728,n)}Mp(t,134217728)}};zv=function(t){if(t.tag===13){var e=Pr(t),n=Qi(t,e);if(n!==null){var i=An();_i(n,t,e,i)}Mp(t,e)}};Bv=function(){return yt};Hv=function(t,e){var n=yt;try{return yt=t,e()}finally{yt=n}};Bd=function(t,e,n){switch(e){case"input":if(Ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vu(i);if(!r)throw Error(ue(90));xv(i),Ud(i,r)}}}break;case"textarea":_v(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};Av=vp;Cv=gs;var sM={usingClientEntryPoint:!1,Events:[qa,io,vu,Tv,bv,vp]},ea={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oM={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||iM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{hu=Wl.inject(oM),Li=Wl}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;Kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(e))throw Error(ue(200));return nM(t,e,null,n)};Kn.createRoot=function(t,e){if(!wp(t))throw Error(ue(299));var n=!1,i="",r=cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sp(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Ep(e)};Kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};Kn.flushSync=function(t){return gs(t)};Kn.hydrate=function(t,e,n){if(!bu(e))throw Error(ue(200));return Au(null,t,e,!0,n)};Kn.hydrateRoot=function(t,e,n){if(!wp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=cy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ly(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tu(e)};Kn.render=function(t,e,n){if(!bu(e))throw Error(ue(200));return Au(null,t,e,!1,n)};Kn.unmountComponentAtNode=function(t){if(!bu(t))throw Error(ue(40));return t._reactRootContainer?(gs(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Kn.unstable_batchedUpdates=vp;Kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Au(t,e,n,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uy)}catch(t){console.error(t)}}uy(),uv.exports=Kn;var aM=uv.exports,pg=aM;bd.createRoot=pg.createRoot,bd.hydrateRoot=pg.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="160",Us={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lM=0,mg=1,cM=2,fy=1,uM=2,Hi=3,Fr=0,on=1,si=2,Ui=0,_o=1,Or=2,gg=3,vg=4,fM=5,ns=100,dM=101,hM=102,xg=103,yg=104,pM=200,mM=201,gM=202,vM=203,yh=204,_h=205,xM=206,yM=207,_M=208,SM=209,MM=210,EM=211,wM=212,TM=213,bM=214,AM=0,CM=1,RM=2,su=3,PM=4,LM=5,DM=6,UM=7,dy=0,NM=1,IM=2,Dr=0,FM=1,OM=2,kM=3,hy=4,zM=5,BM=6,py=300,Ro=301,Po=302,Sh=303,Mh=304,Cu=306,Eh=1e3,Xn=1001,wh=1002,Ct=1003,_g=1004,Hf=1005,ni=1006,HM=1007,Ga=1008,Ur=1009,GM=1010,VM=1011,bp=1012,my=1013,Er=1014,Pi=1015,ci=1016,gy=1017,vy=1018,cs=1020,WM=1021,Yn=1023,jM=1024,XM=1025,us=1026,Lo=1027,YM=1028,xy=1029,qM=1030,yy=1031,_y=1033,Gf=33776,Vf=33777,Wf=33778,jf=33779,Sg=35840,Mg=35841,Eg=35842,wg=35843,Sy=36196,Tg=37492,bg=37496,Ag=37808,Cg=37809,Rg=37810,Pg=37811,Lg=37812,Dg=37813,Ug=37814,Ng=37815,Ig=37816,Fg=37817,Og=37818,kg=37819,zg=37820,Bg=37821,Xf=36492,Hg=36494,Gg=36495,$M=36283,Vg=36284,Wg=36285,jg=36286,My=3e3,fs=3001,QM=3200,Ey=3201,wy=0,KM=1,oi="",un="srgb",Zi="srgb-linear",Ap="display-p3",Ru="display-p3-linear",ou="linear",At="srgb",au="rec709",lu="p3",Is=7680,Xg=519,ZM=512,JM=513,eE=514,Ty=515,tE=516,nE=517,iE=518,rE=519,Yg=35044,qg="300 es",Th=1035,Xi=2e3,cu=2001;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,bh=180/Math.PI;function Qa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function sE(t,e){return(t%e+e)%e}function Yf(t,e,n){return(1-n)*t+n*e}function $g(t){return(t&t-1)===0&&t!==0}function Ah(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const oE={DEG2RAD:_a};class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,i,r,s,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],x=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],_=r[7],R=r[2],b=r[5],E=r[8];return s[0]=o*y+a*g+l*R,s[3]=o*p+a*v+l*b,s[6]=o*u+a*_+l*E,s[1]=c*y+f*g+d*R,s[4]=c*p+f*v+d*b,s[7]=c*u+f*_+d*E,s[2]=h*y+m*g+x*R,s[5]=h*p+m*v+x*b,s[8]=h*u+m*_+x*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qf.makeScale(e,n)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,n){return this.premultiply(qf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new at;function by(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aE(){const t=uu("canvas");return t.style.display="block",t}const Qg={};function Sa(t){t in Qg||(Qg[t]=!0,console.warn(t))}const Kg=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zg=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jl={[Zi]:{transfer:ou,primaries:au,toReference:t=>t,fromReference:t=>t},[un]:{transfer:At,primaries:au,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ru]:{transfer:ou,primaries:lu,toReference:t=>t.applyMatrix3(Zg),fromReference:t=>t.applyMatrix3(Kg)},[Ap]:{transfer:At,primaries:lu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zg),fromReference:t=>t.applyMatrix3(Kg).convertLinearToSRGB()}},lE=new Set([Zi,Ru]),St={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=jl[e].toReference,r=jl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return jl[t].primaries},getTransfer:function(t){return t===oi?ou:jl[t].transfer}};function So(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $f(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fs;class Ay{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=uu("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=So(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(So(n[i]/255)*255):n[i]=So(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cE=0;class Cy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Qa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qf(r[o].image)):s.push(Qf(r[o]))}else s=Qf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ay.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uE=0;class zn extends _s{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,i=Xn,r=Xn,s=ni,o=Ga,a=Yn,l=Ur,c=zn.DEFAULT_ANISOTROPY,f=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Qa(),this.name="",this.source=new Cy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===fs?un:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===un?fs:My}set encoding(e){Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?un:oi}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=py;zn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,i=0,r=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],x=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,_=(m+1)/2,R=(u+1)/2,b=(f+h)/4,E=(d+y)/4,U=(x+p)/4;return v>_&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=E/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=E/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends _s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?un:oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends fE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ry extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dE extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==m||f!==x){let p=1-a;const u=l*h+c*m+f*x+d*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,u*g);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}const _=a*g;if(l=l*p+h*_,c=c*p+m*_,f=f*p+x*_,d=d*p+y*_,p===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*m-c*h,e[n+1]=l*x+f*h+c*d-a*m,e[n+2]=c*x+f*m+a*h-l*d,e[n+3]=f*x-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d-h*m*x;break;case"YXZ":this._x=h*f*d+c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d+h*m*x;break;case"ZXY":this._x=h*f*d-c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d-h*m*x;break;case"ZYX":this._x=h*f*d-c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d+h*m*x;break;case"YZX":this._x=h*f*d+c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d-h*m*x;break;case"XZY":this._x=h*f*d-c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new L,Jg=new vs;class Ka{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Yl.subVectors(this.max,na),Os.subVectors(e.a,na),ks.subVectors(e.b,na),zs.subVectors(e.c,na),fr.subVectors(ks,Os),dr.subVectors(zs,ks),qr.subVectors(Os,zs);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-qr.z,qr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,qr.z,0,-qr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-qr.y,qr.x,0];return!Zf(n,Os,ks,zs,Yl)||(n=[1,0,0,0,1,0,0,0,1],!Zf(n,Os,ks,zs,Yl))?!1:(ql.crossVectors(fr,dr),n=[ql.x,ql.y,ql.z],Zf(n,Os,ks,zs,Yl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,Xl=new Ka,Os=new L,ks=new L,zs=new L,fr=new L,dr=new L,qr=new L,na=new L,Yl=new L,ql=new L,$r=new L;function Zf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$r.fromArray(t,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=n.dot($r),f=i.dot($r);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const hE=new Ka,ia=new L,Jf=new L;class Za{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Jf)),this.expandByPoint(ia.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new L,ed=new L,$l=new L,hr=new L,td=new L,Ql=new L,nd=new L;class Ja{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ed.copy(e).add(n).multiplyScalar(.5),$l.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(ed);const s=e.distanceTo(n)*.5,o=-this.direction.dot($l),a=hr.dot(this.direction),l=-hr.dot($l),c=hr.lengthSq(),f=Math.abs(1-o*o);let d,h,m,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ed).addScaledVector($l,h),m}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){td.subVectors(n,e),Ql.subVectors(i,e),nd.crossVectors(td,Ql);let o=this.direction.dot(nd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Ql.crossVectors(hr,Ql));if(l<0)return null;const c=a*this.direction.dot(td.cross(hr));if(c<0||l+c>o)return null;const f=-a*hr.dot(nd);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=x,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,x=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,x=c*f,y=c*d;n[0]=h+y*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,x=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,x=a*f,y=a*d;n[0]=l*f,n[4]=x*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=x*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pE,e,mE)}lookAt(e,n,i){const r=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),pr.crossVectors(i,Vn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),pr.crossVectors(i,Vn)),pr.normalize(),Kl.crossVectors(Vn,pr),r[0]=pr.x,r[4]=Kl.x,r[8]=Vn.x,r[1]=pr.y,r[5]=Kl.y,r[9]=Vn.y,r[2]=pr.z,r[6]=Kl.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],x=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],_=i[11],R=i[15],b=r[0],E=r[4],U=r[8],S=r[12],T=r[1],V=r[5],W=r[9],ie=r[13],I=r[2],G=r[6],K=r[10],J=r[14],O=r[3],B=r[7],Y=r[11],te=r[15];return s[0]=o*b+a*T+l*I+c*O,s[4]=o*E+a*V+l*G+c*B,s[8]=o*U+a*W+l*K+c*Y,s[12]=o*S+a*ie+l*J+c*te,s[1]=f*b+d*T+h*I+m*O,s[5]=f*E+d*V+h*G+m*B,s[9]=f*U+d*W+h*K+m*Y,s[13]=f*S+d*ie+h*J+m*te,s[2]=x*b+y*T+p*I+u*O,s[6]=x*E+y*V+p*G+u*B,s[10]=x*U+y*W+p*K+u*Y,s[14]=x*S+y*ie+p*J+u*te,s[3]=g*b+v*T+_*I+R*O,s[7]=g*E+v*V+_*G+R*B,s[11]=g*U+v*W+_*K+R*Y,s[15]=g*S+v*ie+_*J+R*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],x=e[3],y=e[7],p=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],x=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*h*c+y*l*m-a*p*m-d*l*u+a*h*u,v=x*h*c-f*p*c-x*l*m+o*p*m+f*l*u-o*h*u,_=f*y*c-x*d*c+x*a*m-o*y*m-f*a*u+o*d*u,R=x*d*l-f*y*l-x*a*h+o*y*h+f*a*p-o*d*p,b=n*g+i*v+r*_+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=g*E,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*u-i*h*u)*E,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*E,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*E,e[4]=v*E,e[5]=(f*p*s-x*h*s+x*r*m-n*p*m-f*r*u+n*h*u)*E,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*E,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*E,e[8]=_*E,e[9]=(x*d*s-f*y*s-x*i*m+n*y*m+f*i*u-n*d*u)*E,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*E,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*E,e[12]=R*E,e[13]=(f*y*r-x*d*r+x*i*h-n*y*h-f*i*p+n*d*p)*E,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*p-n*a*p)*E,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,x=s*d,y=o*f,p=o*d,u=a*d,g=l*c,v=l*f,_=l*d,R=i.x,b=i.y,E=i.z;return r[0]=(1-(y+u))*R,r[1]=(m+_)*R,r[2]=(x-v)*R,r[3]=0,r[4]=(m-_)*b,r[5]=(1-(h+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+v)*E,r[9]=(p-g)*E,r[10]=(1-(h+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/s,f=1/o,d=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=f,pi.elements[5]*=f,pi.elements[6]*=f,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,n.setFromRotationMatrix(pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Xi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===Xi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===cu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Xi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let x,y;if(a===Xi)x=(o+s)*d,y=-2*d;else if(a===cu)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Bs=new L,pi=new Xt,pE=new L(0,0,0),mE=new L(1,1,1),pr=new L,Kl=new L,Vn=new L,e0=new Xt,t0=new vs;class Pu{constructor(e=0,n=0,i=0,r=Pu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pu.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gE=0;const n0=new L,Hs=new vs,ki=new Xt,Zl=new L,ra=new L,vE=new L,xE=new vs,i0=new L(1,0,0),r0=new L(0,1,0),s0=new L(0,0,1),yE={type:"added"},_E={type:"removed"};class Sn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new L,n=new Pu,i=new vs,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new at}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(s0,e)}translateOnAxis(e,n){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(s0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zl.copy(e):Zl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ra,Zl,this.up):ki.lookAt(Zl,ra,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(ki),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_E)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,vE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,xE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new L(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new L,zi=new L,id=new L,Bi=new L,Gs=new L,Vs=new L,o0=new L,rd=new L,sd=new L,od=new L;let Jl=!1;class ii{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mi.subVectors(e,n),r.cross(mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mi.subVectors(r,n),zi.subVectors(i,n),id.subVectors(e,n);const o=mi.dot(mi),a=mi.dot(zi),l=mi.dot(id),c=zi.dot(zi),f=zi.dot(id),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static isFrontFacing(e,n,i,r){return mi.subVectors(i,n),zi.subVectors(e,n),mi.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),mi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gs.subVectors(r,i),Vs.subVectors(s,i),rd.subVectors(e,i);const l=Gs.dot(rd),c=Vs.dot(rd);if(l<=0&&c<=0)return n.copy(i);sd.subVectors(e,r);const f=Gs.dot(sd),d=Vs.dot(sd);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Gs,o);od.subVectors(e,s);const m=Gs.dot(od),x=Vs.dot(od);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Vs,a);const p=f*x-m*d;if(p<=0&&d-f>=0&&m-x>=0)return o0.subVectors(s,r),a=(d-f)/(d-f+(m-x)),n.copy(r).addScaledVector(o0,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(Gs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function ad(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ae{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=St.workingColorSpace){return this.r=e,this.g=n,this.b=i,St.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=St.workingColorSpace){if(e=sE(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ad(o,s,e+1/3),this.g=ad(o,s,e),this.b=ad(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=Py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=$f(e.r),this.g=$f(e.g),this.b=$f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return St.fromWorkingColorSpace(yn.copy(this),e),Math.round(sn(yn.r*255,0,255))*65536+Math.round(sn(yn.g*255,0,255))*256+Math.round(sn(yn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(yn.copy(this),n);const i=yn.r,r=yn.g,s=yn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=un){St.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,i=yn.g,r=yn.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ec);const i=Yf(mr.h,ec.h,n),r=Yf(mr.s,ec.s,n),s=Yf(mr.l,ec.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ae;Ae.NAMES=Py;let SE=0;class Ss extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=_o,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=_h,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tn extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new L,tc=new he;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tc.fromBufferAttribute(this,n),tc.applyMatrix3(e),this.setXY(n,tc.x,tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yg&&(e.usage=this.usage),e}}class Ly extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dy extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ME=0;const Jn=new Xt,ld=new Sn,Ws=new L,Wn=new Ka,sa=new Ka,nn=new L;class Jt extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(by(e)?Dy:Ly)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Wn.min,sa.min),Wn.expandByPoint(nn),nn.addVectors(Wn.max,sa.max),Wn.expandByPoint(nn)):(Wn.expandByPoint(sa.min),Wn.expandByPoint(sa.max))}Wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)nn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),nn.add(Ws)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<a;T++)c[T]=new L,f[T]=new L;const d=new L,h=new L,m=new L,x=new he,y=new he,p=new he,u=new L,g=new L;function v(T,V,W){d.fromArray(r,T*3),h.fromArray(r,V*3),m.fromArray(r,W*3),x.fromArray(o,T*2),y.fromArray(o,V*2),p.fromArray(o,W*2),h.sub(d),m.sub(d),y.sub(x),p.sub(x);const ie=1/(y.x*p.y-p.x*y.y);isFinite(ie)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(ie),g.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ie),c[T].add(u),c[V].add(u),c[W].add(u),f[T].add(g),f[V].add(g),f[W].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,V=_.length;T<V;++T){const W=_[T],ie=W.start,I=W.count;for(let G=ie,K=ie+I;G<K;G+=3)v(i[G+0],i[G+1],i[G+2])}const R=new L,b=new L,E=new L,U=new L;function S(T){E.fromArray(s,T*3),U.copy(E);const V=c[T];R.copy(V),R.sub(E.multiplyScalar(E.dot(V))).normalize(),b.crossVectors(U,V);const ie=b.dot(f[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=ie}for(let T=0,V=_.length;T<V;++T){const W=_[T],ie=W.start,I=W.count;for(let G=ie,K=ie+I;G<K;G+=3)S(i[G+0]),S(i[G+1]),S(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)h[x++]=c[m++]}return new Bn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a0=new Xt,Qr=new Ja,nc=new Za,l0=new L,js=new L,Xs=new L,Ys=new L,cd=new L,ic=new L,rc=new he,sc=new he,oc=new he,c0=new L,u0=new L,f0=new L,ac=new L,lc=new L;class It extends Sn{constructor(e=new Jt,n=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(cd.fromBufferAttribute(d,e),o?ic.addScaledVector(cd,f):ic.addScaledVector(cd.sub(n),f))}n.add(ic)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(nc.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(nc,l0)===null||Qr.origin.distanceToSquared(l0)>(e.far-e.near)**2))&&(a0.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(a0),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,R=v;_<R;_+=3){const b=a.getX(_),E=a.getX(_+1),U=a.getX(_+2);r=cc(this,u,e,i,c,f,d,b,E,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);r=cc(this,o,e,i,c,f,d,g,v,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,R=v;_<R;_+=3){const b=_,E=_+1,U=_+2;r=cc(this,u,e,i,c,f,d,b,E,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=p,v=p+1,_=p+2;r=cc(this,o,e,i,c,f,d,g,v,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function EE(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fr,a),l===null)return null;lc.copy(a),lc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(lc);return c<n.near||c>n.far?null:{distance:c,point:lc.clone(),object:t}}function cc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,js),t.getVertexPosition(l,Xs),t.getVertexPosition(c,Ys);const f=EE(t,e,n,i,js,Xs,Ys,ac);if(f){r&&(rc.fromBufferAttribute(r,a),sc.fromBufferAttribute(r,l),oc.fromBufferAttribute(r,c),f.uv=ii.getInterpolation(ac,js,Xs,Ys,rc,sc,oc,new he)),s&&(rc.fromBufferAttribute(s,a),sc.fromBufferAttribute(s,l),oc.fromBufferAttribute(s,c),f.uv1=ii.getInterpolation(ac,js,Xs,Ys,rc,sc,oc,new he),f.uv2=f.uv1),o&&(c0.fromBufferAttribute(o,a),u0.fromBufferAttribute(o,l),f0.fromBufferAttribute(o,c),f.normal=ii.getInterpolation(ac,js,Xs,Ys,c0,u0,f0,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};ii.getNormal(js,Xs,Ys,d.normal),f.face=d}return f}class el extends Jt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(d,2));function x(y,p,u,g,v,_,R,b,E,U,S){const T=_/E,V=R/U,W=_/2,ie=R/2,I=b/2,G=E+1,K=U+1;let J=0,O=0;const B=new L;for(let Y=0;Y<K;Y++){const te=Y*V-ie;for(let ee=0;ee<G;ee++){const Z=ee*T-W;B[y]=Z*g,B[p]=te*v,B[u]=I,c.push(B.x,B.y,B.z),B[y]=0,B[p]=0,B[u]=b>0?1:-1,f.push(B.x,B.y,B.z),d.push(ee/E),d.push(1-Y/U),J+=1}}for(let Y=0;Y<U;Y++)for(let te=0;te<E;te++){const ee=h+te+G*Y,Z=h+te+G*(Y+1),ne=h+(te+1)+G*(Y+1),xe=h+(te+1)+G*Y;l.push(ee,Z,xe),l.push(Z,ne,xe),O+=6}a.addGroup(m,O,S),m+=O,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function En(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const r in i)e[r]=i[r]}return e}function wE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Uy(t){return t.getRenderTarget()===null?t.outputColorSpace:St.workingColorSpace}const Uo={clone:Do,merge:En};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=wE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rp extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ri extends Rp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qs=-90,$s=1;class AE extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(qs,$s,e,n);r.layers=this.layers,this.add(r);const s=new ri(qs,$s,e,n);s.layers=this.layers,this.add(s);const o=new ri(qs,$s,e,n);o.layers=this.layers,this.add(o);const a=new ri(qs,$s,e,n);a.layers=this.layers,this.add(a);const l=new ri(qs,$s,e,n);l.layers=this.layers,this.add(l);const c=new ri(qs,$s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ny extends zn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ro,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CE extends Cn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fs?un:oi),this.texture=new Ny(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ui});s.uniforms.tEquirect.value=n;const o=new It(r,s),a=n.minFilter;return n.minFilter===Ga&&(n.minFilter=ni),new AE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ud=new L,RE=new L,PE=new at;class bn{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ud.subVectors(i,n).cross(RE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PE.getNormalMatrix(e),r=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Za,uc=new L;class Iy{constructor(e=new bn,n=new bn,i=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],x=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,h-c,p-m,_-u).normalize(),i[1].setComponents(l+s,h+c,p+m,_+u).normalize(),i[2].setComponents(l+o,h+f,p+x,_+g).normalize(),i[3].setComponents(l-o,h-f,p-x,_-g).normalize(),i[4].setComponents(l-a,h-d,p-y,_-v).normalize(),n===Xi)i[5].setComponents(l+a,h+d,p+y,_+v).normalize();else if(n===cu)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,x=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let y=0,p=x.length;y<p;y++){const u=x[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class Lu extends Jt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],x=[],y=[],p=[];for(let u=0;u<f;u++){const g=u*h-o;for(let v=0;v<c;v++){const _=v*d-s;x.push(_,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,_=g+c*(u+1),R=g+1+c*(u+1),b=g+1+c*u;m.push(v,_,b),m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var DE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_w=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:DE,alphahash_pars_fragment:UE,alphamap_fragment:NE,alphamap_pars_fragment:IE,alphatest_fragment:FE,alphatest_pars_fragment:OE,aomap_fragment:kE,aomap_pars_fragment:zE,batching_pars_vertex:BE,batching_vertex:HE,begin_vertex:GE,beginnormal_vertex:VE,bsdfs:WE,iridescence_fragment:jE,bumpmap_pars_fragment:XE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:qE,clipping_planes_pars_vertex:$E,clipping_planes_vertex:QE,color_fragment:KE,color_pars_fragment:ZE,color_pars_vertex:JE,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:sw,emissivemap_fragment:ow,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:cw,envmap_fragment:uw,envmap_common_pars_fragment:fw,envmap_pars_fragment:dw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:Tw,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:vw,fog_pars_fragment:xw,gradientmap_pars_fragment:yw,lightmap_fragment:_w,lightmap_pars_fragment:Sw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:Ew,lights_pars_begin:ww,lights_toon_fragment:bw,lights_toon_pars_fragment:Aw,lights_phong_fragment:Cw,lights_phong_pars_fragment:Rw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Dw,lights_fragment_maps:Uw,lights_fragment_end:Nw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:kw,map_fragment:zw,map_pars_fragment:Bw,map_particle_fragment:Hw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Ww,morphcolor_vertex:jw,morphnormal_vertex:Xw,morphtarget_pars_vertex:Yw,morphtarget_vertex:qw,normal_fragment_begin:$w,normal_fragment_maps:Qw,normal_pars_fragment:Kw,normal_pars_vertex:Zw,normal_vertex:Jw,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:rT,opaque_fragment:sT,packing:oT,premultiplied_alpha_fragment:aT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:yT,skinnormal_vertex:_T,specularmap_fragment:ST,specularmap_pars_fragment:MT,tonemapping_fragment:ET,tonemapping_pars_fragment:wT,transmission_fragment:TT,transmission_pars_fragment:bT,uv_pars_fragment:AT,uv_pars_vertex:CT,uv_vertex:RT,worldpos_vertex:PT,background_vert:LT,background_frag:DT,backgroundCube_vert:UT,backgroundCube_frag:NT,cube_vert:IT,cube_frag:FT,depth_vert:OT,depth_frag:kT,distanceRGBA_vert:zT,distanceRGBA_frag:BT,equirect_vert:HT,equirect_frag:GT,linedashed_vert:VT,linedashed_frag:WT,meshbasic_vert:jT,meshbasic_frag:XT,meshlambert_vert:YT,meshlambert_frag:qT,meshmatcap_vert:$T,meshmatcap_frag:QT,meshnormal_vert:KT,meshnormal_frag:ZT,meshphong_vert:JT,meshphong_frag:eb,meshphysical_vert:tb,meshphysical_frag:nb,meshtoon_vert:ib,meshtoon_frag:rb,points_vert:sb,points_frag:ob,shadow_vert:ab,shadow_frag:lb,sprite_vert:cb,sprite_frag:ub},ve={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ci={basic:{uniforms:En([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:En([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:En([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:En([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:En([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:En([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:En([ve.points,ve.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:En([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:En([ve.common,ve.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:En([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:En([ve.sprite,ve.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:En([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:En([ve.lights,ve.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ci.physical={uniforms:En([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const fc={r:0,b:0,g:0};function fb(t,e,n,i,r,s,o){const a=new Ae(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cu)?(f===void 0&&(f=new It(new el(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Do(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=St.getTransfer(v.colorSpace)!==At,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new It(new Lu(2,2),new Gt({name:"BackgroundMaterial",uniforms:Do(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=St.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(fc,Uy(t)),i.buffers.color.setClear(fc.r,fc.g,fc.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:x}}function db(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(I,G,K,J,O){let B=!1;if(o){const Y=y(J,K,G);c!==Y&&(c=Y,m(c.object)),B=u(I,J,K,O),B&&g(I,J,K,O)}else{const Y=G.wireframe===!0;(c.geometry!==J.id||c.program!==K.id||c.wireframe!==Y)&&(c.geometry=J.id,c.program=K.id,c.wireframe=Y,B=!0)}O!==null&&n.update(O,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,U(I,G,K,J),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,G,K){const J=K.wireframe===!0;let O=a[I.id];O===void 0&&(O={},a[I.id]=O);let B=O[G.id];B===void 0&&(B={},O[G.id]=B);let Y=B[J];return Y===void 0&&(Y=p(h()),B[J]=Y),Y}function p(I){const G=[],K=[],J=[];for(let O=0;O<r;O++)G[O]=0,K[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:J,object:I,attributes:{},index:null}}function u(I,G,K,J){const O=c.attributes,B=G.attributes;let Y=0;const te=K.getAttributes();for(const ee in te)if(te[ee].location>=0){const ne=O[ee];let xe=B[ee];if(xe===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),ne===void 0||ne.attribute!==xe||xe&&ne.data!==xe.data)return!0;Y++}return c.attributesNum!==Y||c.index!==J}function g(I,G,K,J){const O={},B=G.attributes;let Y=0;const te=K.getAttributes();for(const ee in te)if(te[ee].location>=0){let ne=B[ee];ne===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const xe={};xe.attribute=ne,ne&&ne.data&&(xe.data=ne.data),O[ee]=xe,Y++}c.attributes=O,c.attributesNum=Y,c.index=J}function v(){const I=c.newAttributes;for(let G=0,K=I.length;G<K;G++)I[G]=0}function _(I){R(I,0)}function R(I,G){const K=c.newAttributes,J=c.enabledAttributes,O=c.attributeDivisors;K[I]=1,J[I]===0&&(t.enableVertexAttribArray(I),J[I]=1),O[I]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),O[I]=G)}function b(){const I=c.newAttributes,G=c.enabledAttributes;for(let K=0,J=G.length;K<J;K++)G[K]!==I[K]&&(t.disableVertexAttribArray(K),G[K]=0)}function E(I,G,K,J,O,B,Y){Y===!0?t.vertexAttribIPointer(I,G,K,O,B):t.vertexAttribPointer(I,G,K,J,O,B)}function U(I,G,K,J){if(i.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const O=J.attributes,B=K.getAttributes(),Y=G.defaultAttributeValues;for(const te in B){const ee=B[te];if(ee.location>=0){let Z=O[te];if(Z===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ne=Z.normalized,xe=Z.itemSize,Ce=n.get(Z);if(Ce===void 0)continue;const be=Ce.buffer,je=Ce.type,Xe=Ce.bytesPerElement,ze=i.isWebGL2===!0&&(je===t.INT||je===t.UNSIGNED_INT||Z.gpuType===my);if(Z.isInterleavedBufferAttribute){const lt=Z.data,X=lt.stride,Yt=Z.offset;if(lt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ee.locationSize;Ie++)R(ee.location+Ie,lt.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ie=0;Ie<ee.locationSize;Ie++)_(ee.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,be);for(let Ie=0;Ie<ee.locationSize;Ie++)E(ee.location+Ie,xe/ee.locationSize,je,ne,X*Xe,(Yt+xe/ee.locationSize*Ie)*Xe,ze)}else{if(Z.isInstancedBufferAttribute){for(let lt=0;lt<ee.locationSize;lt++)R(ee.location+lt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<ee.locationSize;lt++)_(ee.location+lt);t.bindBuffer(t.ARRAY_BUFFER,be);for(let lt=0;lt<ee.locationSize;lt++)E(ee.location+lt,xe/ee.locationSize,je,ne,xe*Xe,xe/ee.locationSize*lt*Xe,ze)}}else if(Y!==void 0){const ne=Y[te];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(ee.location,ne);break;case 3:t.vertexAttrib3fv(ee.location,ne);break;case 4:t.vertexAttrib4fv(ee.location,ne);break;default:t.vertexAttrib1fv(ee.location,ne)}}}}b()}function S(){W();for(const I in a){const G=a[I];for(const K in G){const J=G[K];for(const O in J)x(J[O].object),delete J[O];delete G[K]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const K in G){const J=G[K];for(const O in J)x(J[O].object),delete J[O];delete G[K]}delete a[I.id]}function V(I){for(const G in a){const K=a[G];if(K[I.id]===void 0)continue;const J=K[I.id];for(const O in J)x(J[O].object),delete J[O];delete K[I.id]}}function W(){ie(),f=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:_,disableUnusedAttributes:b}}function hb(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(f[x],d[x]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function pb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,_=o||e.has("OES_texture_float"),R=v&&_,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:R,maxSamples:b}}function mb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new bn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,v=g*4;let _=u.clippingState||null;l.value=_,_=f(x,h,v,m);for(let R=0;R!==v;++R)_[R]=n[R];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const u=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,_=m;v!==y;++v,_+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function gb(t){let e=new WeakMap;function n(o,a){return a===Sh?o.mapping=Ro:a===Mh&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sh||a===Mh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new CE(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Oy extends Rp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=4,d0=[.125,.215,.35,.446,.526,.582],is=20,fd=new Oy,h0=new Ae;let dd=null,hd=0,pd=0;const ts=(1+Math.sqrt(5))/2,Qs=1/ts,p0=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ts,Qs),new L(0,ts,-Qs),new L(Qs,0,ts),new L(-Qs,0,ts),new L(ts,Qs,0),new L(-ts,Qs,0)];class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,hd,pd),e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ro||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:ci,format:Yn,colorSpace:Zi,depthBuffer:!1},r=g0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vb(s)),this._blurMaterial=xb(s,e,n)}return r}_compileMaterial(e){const n=new It(this._lodPlanes[0],e);this._renderer.compile(n,fd)}_sceneToCubeUV(e,n,i,r){const a=new ri(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(h0),f.toneMapping=Dr,f.autoClear=!1;const m=new Tn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new It(new el,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(h0),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;dc(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ro||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=p0[(r-1)%p0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new It(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*is-1),y=s/x,p=isFinite(s)?1+Math.floor(f*y):is;p>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);const u=[];let g=0;for(let E=0;E<is;++E){const U=E/y,S=Math.exp(-U*U/2);u.push(S),E===0?g+=S:E<p&&(g+=2*S)}for(let E=0;E<u.length;E++)u[E]=u[E]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const _=this._sizeLods[r],R=3*_*(r>v-uo?r-v+uo:0),b=4*(this._cubeSize-_);dc(n,R,b,3*_,2*_),l.setRenderTarget(n),l.render(d,fd)}}function vb(t){const e=[],n=[],i=[];let r=t;const s=t-uo+1+d0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-uo?l=d0[o-t+uo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,y=3,p=2,u=1,g=new Float32Array(y*x*m),v=new Float32Array(p*x*m),_=new Float32Array(u*x*m);for(let b=0;b<m;b++){const E=b%3*2/3-1,U=b>2?0:-1,S=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];g.set(S,y*x*b),v.set(h,p*x*b);const T=[b,b,b,b,b,b];_.set(T,u*x*b)}const R=new Jt;R.setAttribute("position",new Bn(g,y)),R.setAttribute("uv",new Bn(v,p)),R.setAttribute("faceIndex",new Bn(_,u)),e.push(R),r>uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function g0(t,e,n){const i=new Cn(t,e,n);return i.texture.mapping=Cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xb(t,e,n){const i=new Float32Array(is),r=new L(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function v0(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function x0(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sh||l===Mh,f=l===Ro||l===Po;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new m0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new m0(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _b(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sb(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,_=g.length;v<_;v+=3){const R=g[v+0],b=g[v+1],E=g[v+2];h.push(R,b,b,E,E,R)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,_=g.length/3-1;v<_;v+=3){const R=v+0,b=v+1,E=v+2;h.push(R,b,b,E,E,R)}}else return;const p=new(by(h)?Dy:Ly)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Mb(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function d(m,x,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,m*l,y),n.update(x,s,y)}function h(m,x,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,y);let u=0;for(let g=0;g<y;g++)u+=x[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function Eb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wb(t,e){return t[0]-e[0]}function Tb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function bb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new fn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let G=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),R===!0&&(S=3);let T=f.attributes.position.count*S,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*V*4*y),ie=new Ry(W,T,V,y);ie.type=Pi,ie.needsUpdate=!0;const I=S*4;for(let K=0;K<y;K++){const J=b[K],O=E[K],B=U[K],Y=T*V*4*K;for(let te=0;te<J.count;te++){const ee=te*I;v===!0&&(o.fromBufferAttribute(J,te),W[Y+ee+0]=o.x,W[Y+ee+1]=o.y,W[Y+ee+2]=o.z,W[Y+ee+3]=0),_===!0&&(o.fromBufferAttribute(O,te),W[Y+ee+4]=o.x,W[Y+ee+5]=o.y,W[Y+ee+6]=o.z,W[Y+ee+7]=0),R===!0&&(o.fromBufferAttribute(B,te),W[Y+ee+8]=o.x,W[Y+ee+9]=o.y,W[Y+ee+10]=o.z,W[Y+ee+11]=B.itemSize===4?o.w:1)}}p={count:y,texture:ie,size:new he(T,V)},s.set(f,p),f.addEventListener("dispose",G)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==x){y=[];for(let _=0;_<x;_++)y[_]=[_,0];i[f.id]=y}for(let _=0;_<x;_++){const R=y[_];R[0]=_,R[1]=h[_]}y.sort(Tb);for(let _=0;_<8;_++)_<x&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(wb);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let _=0;_<8;_++){const R=a[_],b=R[0],E=R[1];b!==Number.MAX_SAFE_INTEGER&&E?(p&&f.getAttribute("morphTarget"+_)!==p[b]&&f.setAttribute("morphTarget"+_,p[b]),u&&f.getAttribute("morphNormal"+_)!==u[b]&&f.setAttribute("morphNormal"+_,u[b]),r[_]=E,g+=E):(p&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),u&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),r[_]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ab(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ky extends zn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:us,f!==us&&f!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===us&&(i=Er),i===void 0&&f===Lo&&(i=cs),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zy=new zn,By=new ky(1,1);By.compareFunction=Ty;const Hy=new Ry,Gy=new dE,Vy=new Ny,y0=[],_0=[],S0=new Float32Array(16),M0=new Float32Array(9),E0=new Float32Array(4);function zo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=y0[r];if(s===void 0&&(s=new Float32Array(r),y0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=_0[e];n===void 0&&(n=new Int32Array(e),_0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Cb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;E0.set(i),t.uniformMatrix2fv(this.addr,!1,E0),Zt(n,i)}}function Ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;M0.set(i),t.uniformMatrix3fv(this.addr,!1,M0),Zt(n,i)}}function Nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;S0.set(i),t.uniformMatrix4fv(this.addr,!1,S0),Zt(n,i)}}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?By:zy;n.setTexture2D(e||s,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gy,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vy,r)}function Xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hy,r)}function Yb(t){switch(t){case 5126:return Cb;case 35664:return Rb;case 35665:return Pb;case 35666:return Lb;case 35674:return Db;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Ib;case 35667:case 35671:return Fb;case 35668:case 35672:return Ob;case 35669:case 35673:return kb;case 5125:return zb;case 36294:return Bb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Xb}}function qb(t,e){t.uniform1fv(this.addr,e)}function $b(t,e){const n=zo(e,this.size,2);t.uniform2fv(this.addr,n)}function Qb(t,e){const n=zo(e,this.size,3);t.uniform3fv(this.addr,n)}function Kb(t,e){const n=zo(e,this.size,4);t.uniform4fv(this.addr,n)}function Zb(t,e){const n=zo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Jb(t,e){const n=zo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function e2(t,e){const n=zo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function t2(t,e){t.uniform1iv(this.addr,e)}function n2(t,e){t.uniform2iv(this.addr,e)}function i2(t,e){t.uniform3iv(this.addr,e)}function r2(t,e){t.uniform4iv(this.addr,e)}function s2(t,e){t.uniform1uiv(this.addr,e)}function o2(t,e){t.uniform2uiv(this.addr,e)}function a2(t,e){t.uniform3uiv(this.addr,e)}function l2(t,e){t.uniform4uiv(this.addr,e)}function c2(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||zy,s[o])}function u2(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Gy,s[o])}function f2(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vy,s[o])}function d2(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hy,s[o])}function h2(t){switch(t){case 5126:return qb;case 35664:return $b;case 35665:return Qb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}class p2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yb(n.type)}}class m2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h2(n.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const md=/(\w+)(\])?(\[|\.)?/g;function w0(t,e){t.seq.push(e),t.map[e.id]=e}function v2(t,e,n){const i=t.name,r=i.length;for(md.lastIndex=0;;){const s=md.exec(i),o=md.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w0(n,c===void 0?new p2(a,t,e):new m2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new g2(a),w0(n,d)),n=d}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);v2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function T0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x2=37297;let y2=0;function _2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function S2(t){const e=St.getPrimaries(St.workingColorSpace),n=St.getPrimaries(t);let i;switch(e===n?i="":e===lu&&n===au?i="LinearDisplayP3ToLinearSRGB":e===au&&n===lu&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Ru:return[i,"LinearTransferOETF"];case un:case Ap:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function b0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_2(t.getShaderSource(e),o)}else return r}function M2(t,e){const n=S2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function E2(t,e){let n;switch(e){case FM:n="Linear";break;case OM:n="Reinhard";break;case kM:n="OptimizedCineon";break;case hy:n="ACESFilmic";break;case BM:n="AgX";break;case zM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function w2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function T2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fo).join(`
`)}function b2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function A2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function A0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(t){return t.replace(C2,P2)}const R2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P2(t,e){let n=st[e];if(n===void 0){const i=R2.get(e);if(i!==void 0)n=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ch(n)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(t){return t.replace(L2,D2)}function D2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function N2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ro:case Po:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function F2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case dy:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case IM:e="ENVMAP_BLENDING_ADD";break}return e}function O2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function k2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=U2(n),c=N2(n),f=I2(n),d=F2(n),h=O2(n),m=n.isWebGL2?"":w2(n),x=T2(n),y=b2(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(fo).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(fo).join(`
`),g.length>0&&(g+=`
`)):(u=[P0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),g=[m,P0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?st.tonemapping_pars_fragment:"",n.toneMapping!==Dr?E2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,M2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=Ch(o),o=A0(o,n),o=C0(o,n),a=Ch(a),a=A0(a,n),a=C0(a,n),o=R0(o),a=R0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+u+o,R=v+g+a,b=T0(r,r.VERTEX_SHADER,_),E=T0(r,r.FRAGMENT_SHADER,R);r.attachShader(p,b),r.attachShader(p,E),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(W){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(b).trim(),G=r.getShaderInfoLog(E).trim();let K=!0,J=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,E);else{const O=b0(r,b,"vertex"),B=b0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+O+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(I===""||G==="")&&(J=!1);J&&(W.diagnostics={runnable:K,programLog:ie,vertexShader:{log:I,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(b),r.deleteShader(E),S=new Nc(r,p),T=A2(r,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,x2)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let z2=0;class B2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new H2(e),n.set(e,i)),i}}class H2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function G2(t,e,n,i,r,s,o){const a=new Cp,l=new B2,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function p(S,T,V,W,ie){const I=W.fog,G=ie.geometry,K=S.isMeshStandardMaterial?W.environment:null,J=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),O=J&&J.mapping===Cu?J.image.height:null,B=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=Y!==void 0?Y.length:0;let ee=0;G.morphAttributes.position!==void 0&&(ee=1),G.morphAttributes.normal!==void 0&&(ee=2),G.morphAttributes.color!==void 0&&(ee=3);let Z,ne,xe,Ce;if(B){const Et=Ci[B];Z=Et.vertexShader,ne=Et.fragmentShader}else Z=S.vertexShader,ne=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const be=t.getRenderTarget(),je=ie.isInstancedMesh===!0,Xe=ie.isBatchedMesh===!0,ze=!!S.map,lt=!!S.matcap,X=!!J,Yt=!!S.aoMap,Ie=!!S.lightMap,Ye=!!S.bumpMap,Le=!!S.normalMap,Mt=!!S.displacementMap,Ze=!!S.emissiveMap,P=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,le=S.clearcoat>0,oe=S.iridescence>0,ae=S.sheen>0,De=S.transmission>0,me=H&&!!S.anisotropyMap,we=le&&!!S.clearcoatMap,Fe=le&&!!S.clearcoatNormalMap,$e=le&&!!S.clearcoatRoughnessMap,se=oe&&!!S.iridescenceMap,dt=oe&&!!S.iridescenceThicknessMap,Je=ae&&!!S.sheenColorMap,Ge=ae&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,_e=!!S.specularColorMap,D=!!S.specularIntensityMap,ce=De&&!!S.transmissionMap,ge=De&&!!S.thicknessMap,Se=!!S.gradientMap,re=!!S.alphaMap,N=S.alphaTest>0,fe=!!S.alphaHash,ye=!!S.extensions,Be=!!G.attributes.uv1,Oe=!!G.attributes.uv2,et=!!G.attributes.uv3;let it=Dr;return S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:f,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:ne,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Xe,instancing:je,instancingColor:je&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Zi,map:ze,matcap:lt,envMap:X,envMapMode:X&&J.mapping,envMapCubeUVHeight:O,aoMap:Yt,lightMap:Ie,bumpMap:Ye,normalMap:Le,displacementMap:h&&Mt,emissiveMap:Ze,normalMapObjectSpace:Le&&S.normalMapType===KM,normalMapTangentSpace:Le&&S.normalMapType===wy,metalnessMap:P,roughnessMap:M,anisotropy:H,anisotropyMap:me,clearcoat:le,clearcoatMap:we,clearcoatNormalMap:Fe,clearcoatRoughnessMap:$e,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:dt,sheen:ae,sheenColorMap:Je,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:_e,specularIntensityMap:D,transmission:De,transmissionMap:ce,thicknessMap:ge,gradientMap:Se,opaque:S.transparent===!1&&S.blending===_o,alphaMap:re,alphaTest:N,alphaHash:fe,combine:S.combine,mapUv:ze&&y(S.map.channel),aoMapUv:Yt&&y(S.aoMap.channel),lightMapUv:Ie&&y(S.lightMap.channel),bumpMapUv:Ye&&y(S.bumpMap.channel),normalMapUv:Le&&y(S.normalMap.channel),displacementMapUv:Mt&&y(S.displacementMap.channel),emissiveMapUv:Ze&&y(S.emissiveMap.channel),metalnessMapUv:P&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:me&&y(S.anisotropyMap.channel),clearcoatMapUv:we&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(S.sheenRoughnessMap.channel),specularMapUv:Pe&&y(S.specularMap.channel),specularColorMapUv:_e&&y(S.specularColorMap.channel),specularIntensityMapUv:D&&y(S.specularIntensityMap.channel),transmissionMapUv:ce&&y(S.transmissionMap.channel),thicknessMapUv:ge&&y(S.thicknessMap.channel),alphaMapUv:re&&y(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Oe,vertexUv3s:et,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(ze||re),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&St.getTransfer(S.map.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ye&&S.extensions.derivatives===!0,extensionFragDepth:ye&&S.extensions.fragDepth===!0,extensionDrawBuffers:ye&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)T.push(V),T.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(g(T,S),v(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function _(S){const T=x[S.type];let V;if(T){const W=Ci[T];V=Uo.clone(W.uniforms)}else V=S.uniforms;return V}function R(S,T){let V;for(let W=0,ie=c.length;W<ie;W++){const I=c[W];if(I.cacheKey===T){V=I,++V.usedTimes;break}}return V===void 0&&(V=new k2(t,T,S,s),c.push(V)),V}function b(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:U}}function V2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function W2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function L0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function D0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,x,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,m,x,y,p){const u=o(d,h,m,x,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,x,y,p){const u=o(d,h,m,x,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||W2),i.length>1&&i.sort(h||L0),r.length>1&&r.sort(h||L0)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function j2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new D0,t.set(i,[o])):r>=s.length?(o=new D0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function X2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ae};break;case"SpotLight":n={position:new L,direction:new L,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":n={color:new Ae,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function Y2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let q2=0;function $2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Q2(t,e){const n=new X2,i=Y2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new L);const s=new L,o=new Xt,a=new Xt;function l(f,d){let h=0,m=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,_=0,R=0,b=0,E=0,U=0,S=0;f.sort($2);const T=d===!0?Math.PI:1;for(let W=0,ie=f.length;W<ie;W++){const I=f[W],G=I.color,K=I.intensity,J=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*K*T,m+=G.g*K*T,x+=G.b*K*T;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],K);S++}else if(I.isDirectionalLight){const B=n.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const Y=I.shadow,te=i.get(I);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=O,r.directionalShadowMatrix[y]=I.shadow.matrix,_++}r.directional[y]=B,y++}else if(I.isSpotLight){const B=n.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(G).multiplyScalar(K*T),B.distance=J,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[u]=B;const Y=I.shadow;if(I.map&&(r.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[u]=Y.matrix,I.castShadow){const te=i.get(I);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,r.spotShadow[u]=te,r.spotShadowMap[u]=O,b++}u++}else if(I.isRectAreaLight){const B=n.get(I);B.color.copy(G).multiplyScalar(K),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=B,g++}else if(I.isPointLight){const B=n.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*T),B.distance=I.distance,B.decay=I.decay,I.castShadow){const Y=I.shadow,te=i.get(I);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=O,r.pointShadowMatrix[p]=I.shadow.matrix,R++}r.point[p]=B,p++}else if(I.isHemisphereLight){const B=n.get(I);B.skyColor.copy(I.color).multiplyScalar(K*T),B.groundColor.copy(I.groundColor).multiplyScalar(K*T),r.hemi[v]=B,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==g||V.hemiLength!==v||V.numDirectionalShadows!==_||V.numPointShadows!==R||V.numSpotShadows!==b||V.numSpotMaps!==E||V.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+E-U,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=S,V.directionalLength=y,V.pointLength=p,V.spotLength=u,V.rectAreaLength=g,V.hemiLength=v,V.numDirectionalShadows=_,V.numPointShadows=R,V.numSpotShadows=b,V.numSpotMaps=E,V.numLightProbes=S,r.version=q2++)}function c(f,d){let h=0,m=0,x=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const _=f[g];if(_.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(_.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),x++}else if(_.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function U0(t,e){const n=new Q2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function K2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new U0(t,e),n.set(s,[l])):o>=a.length?(l=new U0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Wy extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z2 extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tA(t,e,n){let i=new Iy;const r=new he,s=new he,o=new fn,a=new Wy({depthPacking:Ey}),l=new Z2,c={},f=n.maxTextureSize,d={[Fr]:on,[on]:Fr,[si]:si},h=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:J2,fragmentShader:eA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Jt;x.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new It(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fy;let u=this.type;this.render=function(b,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ui),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ie=u!==Hi&&this.type===Hi,I=u===Hi&&this.type!==Hi;for(let G=0,K=b.length;G<K;G++){const J=b[G],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const B=O.getFrameExtents();if(r.multiply(B),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,O.mapSize.y=s.y)),O.map===null||ie===!0||I===!0){const te=this.type!==Hi?{minFilter:Ct,magFilter:Ct}:{};O.map!==null&&O.map.dispose(),O.map=new Cn(r.x,r.y,te),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const Y=O.getViewportCount();for(let te=0;te<Y;te++){const ee=O.getViewport(te);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),W.viewport(o),O.updateMatrices(J,te),i=O.getFrustum(),_(E,U,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===Hi&&g(O,U),O.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,T,V)};function g(b,E){const U=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Cn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(E,null,U,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(E,null,U,m,y,null)}function v(b,E,U,S){let T=null;const V=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)T=V;else if(T=U.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=T.uuid,ie=E.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let G=I[ie];G===void 0&&(G=T.clone(),I[ie]=G,E.addEventListener("dispose",R)),T=G}if(T.visible=E.visible,T.wireframe=E.wireframe,S===Hi?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:d[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=t.properties.get(T);W.light=U}return T}function _(b,E,U,S,T){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Hi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const ie=e.update(b),I=b.material;if(Array.isArray(I)){const G=ie.groups;for(let K=0,J=G.length;K<J;K++){const O=G[K],B=I[O.materialIndex];if(B&&B.visible){const Y=v(b,B,S,T);b.onBeforeShadow(t,b,E,U,ie,Y,O),t.renderBufferDirect(U,null,ie,Y,b,O),b.onAfterShadow(t,b,E,U,ie,Y,O)}}}else if(I.visible){const G=v(b,I,S,T);b.onBeforeShadow(t,b,E,U,ie,G,null),t.renderBufferDirect(U,null,ie,G,b,null),b.onAfterShadow(t,b,E,U,ie,G,null)}}const W=b.children;for(let ie=0,I=W.length;ie<I;ie++)_(W[ie],E,U,S,T)}function R(b){b.target.removeEventListener("dispose",R);for(const U in c){const S=c[U],T=b.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function nA(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const fe=new fn;let ye=null;const Be=new fn(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!N&&(t.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){N=Oe},setClear:function(Oe,et,it,xt,Et){Et===!0&&(Oe*=xt,et*=xt,it*=xt),fe.set(Oe,et,it,xt),Be.equals(fe)===!1&&(t.clearColor(Oe,et,it,xt),Be.copy(fe))},reset:function(){N=!1,ye=null,Be.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,ye=null,Be=null;return{setTest:function(Oe){Oe?Xe(t.DEPTH_TEST):ze(t.DEPTH_TEST)},setMask:function(Oe){fe!==Oe&&!N&&(t.depthMask(Oe),fe=Oe)},setFunc:function(Oe){if(ye!==Oe){switch(Oe){case AM:t.depthFunc(t.NEVER);break;case CM:t.depthFunc(t.ALWAYS);break;case RM:t.depthFunc(t.LESS);break;case su:t.depthFunc(t.LEQUAL);break;case PM:t.depthFunc(t.EQUAL);break;case LM:t.depthFunc(t.GEQUAL);break;case DM:t.depthFunc(t.GREATER);break;case UM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=Oe}},setLocked:function(Oe){N=Oe},setClear:function(Oe){Be!==Oe&&(t.clearDepth(Oe),Be=Oe)},reset:function(){N=!1,fe=null,ye=null,Be=null}}}function o(){let N=!1,fe=null,ye=null,Be=null,Oe=null,et=null,it=null,xt=null,Et=null;return{setTest:function(rt){N||(rt?Xe(t.STENCIL_TEST):ze(t.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!N&&(t.stencilMask(rt),fe=rt)},setFunc:function(rt,Pt,pn){(ye!==rt||Be!==Pt||Oe!==pn)&&(t.stencilFunc(rt,Pt,pn),ye=rt,Be=Pt,Oe=pn)},setOp:function(rt,Pt,pn){(et!==rt||it!==Pt||xt!==pn)&&(t.stencilOp(rt,Pt,pn),et=rt,it=Pt,xt=pn)},setLocked:function(rt){N=rt},setClear:function(rt){Et!==rt&&(t.clearStencil(rt),Et=rt)},reset:function(){N=!1,fe=null,ye=null,Be=null,Oe=null,et=null,it=null,xt=null,Et=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,_=null,R=null,b=null,E=null,U=null,S=new Ae(0,0,0),T=0,V=!1,W=null,ie=null,I=null,G=null,K=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=B>=2);let te=null,ee={};const Z=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),xe=new fn().fromArray(Z),Ce=new fn().fromArray(ne);function be(N,fe,ye,Be){const Oe=new Uint8Array(4),et=t.createTexture();t.bindTexture(N,et),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<ye;it++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Oe):t.texImage2D(fe+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Oe);return et}const je={};je[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),je[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(je[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),je[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Xe(t.DEPTH_TEST),l.setFunc(su),Ze(!1),P(mg),Xe(t.CULL_FACE),Le(Ui);function Xe(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ze(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function lt(N,fe){return m[N]!==fe?(t.bindFramebuffer(N,fe),m[N]=fe,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function X(N,fe){let ye=y,Be=!1;if(N)if(ye=x.get(fe),ye===void 0&&(ye=[],x.set(fe,ye)),N.isWebGLMultipleRenderTargets){const Oe=N.texture;if(ye.length!==Oe.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let et=0,it=Oe.length;et<it;et++)ye[et]=t.COLOR_ATTACHMENT0+et;ye.length=Oe.length,Be=!0}}else ye[0]!==t.COLOR_ATTACHMENT0&&(ye[0]=t.COLOR_ATTACHMENT0,Be=!0);else ye[0]!==t.BACK&&(ye[0]=t.BACK,Be=!0);Be&&(n.isWebGL2?t.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Yt(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Ie={[ns]:t.FUNC_ADD,[dM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ie[xg]=t.MIN,Ie[yg]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ie[xg]=N.MIN_EXT,Ie[yg]=N.MAX_EXT)}const Ye={[pM]:t.ZERO,[mM]:t.ONE,[gM]:t.SRC_COLOR,[yh]:t.SRC_ALPHA,[MM]:t.SRC_ALPHA_SATURATE,[_M]:t.DST_COLOR,[xM]:t.DST_ALPHA,[vM]:t.ONE_MINUS_SRC_COLOR,[_h]:t.ONE_MINUS_SRC_ALPHA,[SM]:t.ONE_MINUS_DST_COLOR,[yM]:t.ONE_MINUS_DST_ALPHA,[EM]:t.CONSTANT_COLOR,[wM]:t.ONE_MINUS_CONSTANT_COLOR,[TM]:t.CONSTANT_ALPHA,[bM]:t.ONE_MINUS_CONSTANT_ALPHA};function Le(N,fe,ye,Be,Oe,et,it,xt,Et,rt){if(N===Ui){u===!0&&(ze(t.BLEND),u=!1);return}if(u===!1&&(Xe(t.BLEND),u=!0),N!==fM){if(N!==g||rt!==V){if((v!==ns||b!==ns)&&(t.blendEquation(t.FUNC_ADD),v=ns,b=ns),rt)switch(N){case _o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Or:t.blendFunc(t.ONE,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Or:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,R=null,E=null,U=null,S.set(0,0,0),T=0,g=N,V=rt}return}Oe=Oe||fe,et=et||ye,it=it||Be,(fe!==v||Oe!==b)&&(t.blendEquationSeparate(Ie[fe],Ie[Oe]),v=fe,b=Oe),(ye!==_||Be!==R||et!==E||it!==U)&&(t.blendFuncSeparate(Ye[ye],Ye[Be],Ye[et],Ye[it]),_=ye,R=Be,E=et,U=it),(xt.equals(S)===!1||Et!==T)&&(t.blendColor(xt.r,xt.g,xt.b,Et),S.copy(xt),T=Et),g=N,V=!1}function Mt(N,fe){N.side===si?ze(t.CULL_FACE):Xe(t.CULL_FACE);let ye=N.side===on;fe&&(ye=!ye),Ze(ye),N.blending===_o&&N.transparent===!1?Le(Ui):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Be=N.stencilWrite;c.setTest(Be),Be&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Xe(t.SAMPLE_ALPHA_TO_COVERAGE):ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){W!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),W=N)}function P(N){N!==lM?(Xe(t.CULL_FACE),N!==ie&&(N===mg?t.cullFace(t.BACK):N===cM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ze(t.CULL_FACE),ie=N}function M(N){N!==I&&(O&&t.lineWidth(N),I=N)}function H(N,fe,ye){N?(Xe(t.POLYGON_OFFSET_FILL),(G!==fe||K!==ye)&&(t.polygonOffset(fe,ye),G=fe,K=ye)):ze(t.POLYGON_OFFSET_FILL)}function le(N){N?Xe(t.SCISSOR_TEST):ze(t.SCISSOR_TEST)}function oe(N){N===void 0&&(N=t.TEXTURE0+J-1),te!==N&&(t.activeTexture(N),te=N)}function ae(N,fe,ye){ye===void 0&&(te===null?ye=t.TEXTURE0+J-1:ye=te);let Be=ee[ye];Be===void 0&&(Be={type:void 0,texture:void 0},ee[ye]=Be),(Be.type!==N||Be.texture!==fe)&&(te!==ye&&(t.activeTexture(ye),te=ye),t.bindTexture(N,fe||je[N]),Be.type=N,Be.texture=fe)}function De(){const N=ee[te];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(N){xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function ce(N){Ce.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function ge(N,fe){let ye=d.get(fe);ye===void 0&&(ye=new WeakMap,d.set(fe,ye));let Be=ye.get(N);Be===void 0&&(Be=t.getUniformBlockIndex(fe,N.name),ye.set(N,Be))}function Se(N,fe){const Be=d.get(fe).get(N);f.get(fe)!==Be&&(t.uniformBlockBinding(fe,Be,N.__bindingPointIndex),f.set(fe,Be))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},te=null,ee={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,_=null,R=null,b=null,E=null,U=null,S=new Ae(0,0,0),T=0,V=!1,W=null,ie=null,I=null,G=null,K=null,xe.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Xe,disable:ze,bindFramebuffer:lt,drawBuffers:X,useProgram:Yt,setBlending:Le,setMaterial:Mt,setFlipSided:Ze,setCullFace:P,setLineWidth:M,setPolygonOffset:H,setScissorTest:le,activeTexture:oe,bindTexture:ae,unbindTexture:De,compressedTexImage2D:me,compressedTexImage3D:we,texImage2D:Pe,texImage3D:_e,updateUBOMapping:ge,uniformBlockBinding:Se,texStorage2D:Je,texStorage3D:Ge,texSubImage2D:Fe,texSubImage3D:$e,compressedTexSubImage2D:se,compressedTexSubImage3D:dt,scissor:D,viewport:ce,reset:re}}function iA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return m?new OffscreenCanvas(P,M):uu("canvas")}function y(P,M,H,le){let oe=1;if((P.width>le||P.height>le)&&(oe=le/Math.max(P.width,P.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ae=M?Ah:Math.floor,De=ae(oe*P.width),me=ae(oe*P.height);d===void 0&&(d=x(De,me));const we=H?x(De,me):d;return we.width=De,we.height=me,we.getContext("2d").drawImage(P,0,0,De,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+De+"x"+me+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return $g(P.width)&&$g(P.height)}function u(P){return a?!1:P.wrapS!==Xn||P.wrapT!==Xn||P.minFilter!==Ct&&P.minFilter!==ni}function g(P,M){return P.generateMipmaps&&M&&P.minFilter!==Ct&&P.minFilter!==ni}function v(P){t.generateMipmap(P)}function _(P,M,H,le,oe=!1){if(a===!1)return M;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=M;if(M===t.RED&&(H===t.FLOAT&&(ae=t.R32F),H===t.HALF_FLOAT&&(ae=t.R16F),H===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ae=t.R8UI),H===t.UNSIGNED_SHORT&&(ae=t.R16UI),H===t.UNSIGNED_INT&&(ae=t.R32UI),H===t.BYTE&&(ae=t.R8I),H===t.SHORT&&(ae=t.R16I),H===t.INT&&(ae=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ae=t.RG32F),H===t.HALF_FLOAT&&(ae=t.RG16F),H===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RGBA){const De=oe?ou:St.getTransfer(le);H===t.FLOAT&&(ae=t.RGBA32F),H===t.HALF_FLOAT&&(ae=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ae=De===At?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function R(P,M,H){return g(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function b(P){return P===Ct||P===_g||P===Hf?t.NEAREST:t.LINEAR}function E(P){const M=P.target;M.removeEventListener("dispose",E),S(M),M.isVideoTexture&&f.delete(M)}function U(P){const M=P.target;M.removeEventListener("dispose",U),V(M)}function S(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,le=h.get(H);if(le){const oe=le[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(P),Object.keys(le).length===0&&h.delete(H)}i.remove(P)}function T(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,le=h.get(H);delete le[M.__cacheKey],o.memory.textures--}function V(P){const M=P.texture,H=i.get(P),le=i.get(M);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let ae=0;ae<H.__webglFramebuffer[oe].length;ae++)t.deleteFramebuffer(H.__webglFramebuffer[oe][ae]);else t.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)t.deleteFramebuffer(H.__webglFramebuffer[oe]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,ae=M.length;oe<ae;oe++){const De=i.get(M[oe]);De.__webglTexture&&(t.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(P)}let W=0;function ie(){W=0}function I(){const P=W;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),W+=1,P}function G(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function K(P,M){const H=i.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,P,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function J(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){xe(H,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function O(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){xe(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function B(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ce(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const Y={[Eh]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[wh]:t.MIRRORED_REPEAT},te={[Ct]:t.NEAREST,[_g]:t.NEAREST_MIPMAP_NEAREST,[Hf]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[HM]:t.LINEAR_MIPMAP_NEAREST,[Ga]:t.LINEAR_MIPMAP_LINEAR},ee={[ZM]:t.NEVER,[rE]:t.ALWAYS,[JM]:t.LESS,[Ty]:t.LEQUAL,[eE]:t.EQUAL,[iE]:t.GEQUAL,[tE]:t.GREATER,[nE]:t.NOTEQUAL};function Z(P,M,H){if(H?(t.texParameteri(P,t.TEXTURE_WRAP_S,Y[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Y[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Y[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[M.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Ct&&M.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ct||M.minFilter!==Hf&&M.minFilter!==Ga||M.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ci&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ne(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",E));const le=M.source;let oe=h.get(le);oe===void 0&&(oe={},h.set(le,oe));const ae=G(M);if(ae!==P.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ae].usedTimes++;const De=oe[P.__cacheKey];De!==void 0&&(oe[P.__cacheKey].usedTimes--,De.usedTimes===0&&T(M)),P.__cacheKey=ae,P.__webglTexture=oe[ae].texture}return H}function xe(P,M,H){let le=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=t.TEXTURE_3D);const oe=ne(P,M),ae=M.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+H);const De=i.get(ae);if(ae.version!==De.__version||oe===!0){n.activeTexture(t.TEXTURE0+H);const me=St.getPrimaries(St.workingColorSpace),we=M.colorSpace===oi?null:St.getPrimaries(M.colorSpace),Fe=M.colorSpace===oi||me===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const $e=u(M)&&p(M.image)===!1;let se=y(M.image,$e,!1,r.maxTextureSize);se=Ze(M,se);const dt=p(se)||a,Je=s.convert(M.format,M.colorSpace);let Ge=s.convert(M.type),Pe=_(M.internalFormat,Je,Ge,M.colorSpace,M.isVideoTexture);Z(le,M,dt);let _e;const D=M.mipmaps,ce=a&&M.isVideoTexture!==!0&&Pe!==Sy,ge=De.__version===void 0||oe===!0,Se=R(M,se,dt);if(M.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?M.type===Pi?Pe=t.DEPTH_COMPONENT32F:M.type===Er?Pe=t.DEPTH_COMPONENT24:M.type===cs?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:M.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===us&&Pe===t.DEPTH_COMPONENT&&M.type!==bp&&M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Er,Ge=s.convert(M.type)),M.format===Lo&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,M.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=cs,Ge=s.convert(M.type))),ge&&(ce?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,Je,Ge,null));else if(M.isDataTexture)if(D.length>0&&dt){ce&&ge&&n.texStorage2D(t.TEXTURE_2D,Se,Pe,D[0].width,D[0].height);for(let re=0,N=D.length;re<N;re++)_e=D[re],ce?n.texSubImage2D(t.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,Ge,_e.data):n.texImage2D(t.TEXTURE_2D,re,Pe,_e.width,_e.height,0,Je,Ge,_e.data);M.generateMipmaps=!1}else ce?(ge&&n.texStorage2D(t.TEXTURE_2D,Se,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Je,Ge,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,Je,Ge,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ce&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Pe,D[0].width,D[0].height,se.depth);for(let re=0,N=D.length;re<N;re++)_e=D[re],M.format!==Yn?Je!==null?ce?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,se.depth,Je,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Pe,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,se.depth,Je,Ge,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Pe,_e.width,_e.height,se.depth,0,Je,Ge,_e.data)}else{ce&&ge&&n.texStorage2D(t.TEXTURE_2D,Se,Pe,D[0].width,D[0].height);for(let re=0,N=D.length;re<N;re++)_e=D[re],M.format!==Yn?Je!==null?ce?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage2D(t.TEXTURE_2D,re,0,0,_e.width,_e.height,Je,Ge,_e.data):n.texImage2D(t.TEXTURE_2D,re,Pe,_e.width,_e.height,0,Je,Ge,_e.data)}else if(M.isDataArrayTexture)ce?(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Je,Ge,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,Je,Ge,se.data);else if(M.isData3DTexture)ce?(ge&&n.texStorage3D(t.TEXTURE_3D,Se,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Je,Ge,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,Je,Ge,se.data);else if(M.isFramebufferTexture){if(ge)if(ce)n.texStorage2D(t.TEXTURE_2D,Se,Pe,se.width,se.height);else{let re=se.width,N=se.height;for(let fe=0;fe<Se;fe++)n.texImage2D(t.TEXTURE_2D,fe,Pe,re,N,0,Je,Ge,null),re>>=1,N>>=1}}else if(D.length>0&&dt){ce&&ge&&n.texStorage2D(t.TEXTURE_2D,Se,Pe,D[0].width,D[0].height);for(let re=0,N=D.length;re<N;re++)_e=D[re],ce?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Je,Ge,_e):n.texImage2D(t.TEXTURE_2D,re,Pe,Je,Ge,_e);M.generateMipmaps=!1}else ce?(ge&&n.texStorage2D(t.TEXTURE_2D,Se,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Je,Ge,se)):n.texImage2D(t.TEXTURE_2D,0,Pe,Je,Ge,se);g(M,dt)&&v(le),De.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ce(P,M,H){if(M.image.length!==6)return;const le=ne(P,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const ae=i.get(oe);if(oe.version!==ae.__version||le===!0){n.activeTexture(t.TEXTURE0+H);const De=St.getPrimaries(St.workingColorSpace),me=M.colorSpace===oi?null:St.getPrimaries(M.colorSpace),we=M.colorSpace===oi||De===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,se=[];for(let re=0;re<6;re++)!Fe&&!$e?se[re]=y(M.image[re],!1,!0,r.maxCubemapSize):se[re]=$e?M.image[re].image:M.image[re],se[re]=Ze(M,se[re]);const dt=se[0],Je=p(dt)||a,Ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),_e=_(M.internalFormat,Ge,Pe,M.colorSpace),D=a&&M.isVideoTexture!==!0,ce=ae.__version===void 0||le===!0;let ge=R(M,dt,Je);Z(t.TEXTURE_CUBE_MAP,M,Je);let Se;if(Fe){D&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,_e,dt.width,dt.height);for(let re=0;re<6;re++){Se=se[re].mipmaps;for(let N=0;N<Se.length;N++){const fe=Se[N];M.format!==Yn?Ge!==null?D?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,0,0,fe.width,fe.height,Ge,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,0,0,fe.width,fe.height,Ge,Pe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,_e,fe.width,fe.height,0,Ge,Pe,fe.data)}}}else{Se=M.mipmaps,D&&ce&&(Se.length>0&&ge++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,_e,se[0].width,se[0].height));for(let re=0;re<6;re++)if($e){D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,se[re].width,se[re].height,Ge,Pe,se[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,se[re].width,se[re].height,0,Ge,Pe,se[re].data);for(let N=0;N<Se.length;N++){const ye=Se[N].image[re].image;D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,0,0,ye.width,ye.height,Ge,Pe,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,_e,ye.width,ye.height,0,Ge,Pe,ye.data)}}else{D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ge,Pe,se[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,Ge,Pe,se[re]);for(let N=0;N<Se.length;N++){const fe=Se[N];D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,0,0,Ge,Pe,fe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,_e,Ge,Pe,fe.image[re])}}}g(M,Je)&&v(t.TEXTURE_CUBE_MAP),ae.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function be(P,M,H,le,oe,ae){const De=s.convert(H.format,H.colorSpace),me=s.convert(H.type),we=_(H.internalFormat,De,me,H.colorSpace);if(!i.get(M).__hasExternalTextures){const $e=Math.max(1,M.width>>ae),se=Math.max(1,M.height>>ae);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ae,we,$e,se,M.depth,0,De,me,null):n.texImage2D(oe,ae,we,$e,se,0,De,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Le(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,i.get(H).__webglTexture,0,Ye(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,i.get(H).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Le(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Pi?le=t.DEPTH_COMPONENT32F:oe.type===Er&&(le=t.DEPTH_COMPONENT24));const ae=Ye(M);Le(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,le,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,le,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){const le=Ye(M);H&&Le(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):Le(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const le=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<le.length;oe++){const ae=le[oe],De=s.convert(ae.format,ae.colorSpace),me=s.convert(ae.type),we=_(ae.internalFormat,De,me,ae.colorSpace),Fe=Ye(M);H&&Le(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,we,M.width,M.height):Le(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const le=i.get(M.depthTexture).__webglTexture,oe=Ye(M);if(M.depthTexture.format===us)Le(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(M.depthTexture.format===Lo)Le(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ze(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Xe(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]=t.createRenderbuffer(),je(M.__webglDepthbuffer[le],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),je(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(P,M,H){const le=i.get(P);M!==void 0&&be(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ze(P)}function X(P){const M=P.texture,H=i.get(P),le=i.get(M);P.addEventListener("dispose",U),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=M.version,o.memory.textures++);const oe=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,De=p(P)||a;if(oe){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let we=0;we<M.mipmaps.length;we++)H.__webglFramebuffer[me][we]=t.createFramebuffer()}else H.__webglFramebuffer[me]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[me]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const me=P.texture;for(let we=0,Fe=me.length;we<Fe;we++){const $e=i.get(me[we]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Le(P)===!1){const me=ae?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const Fe=me[we];H.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[we]);const $e=s.convert(Fe.format,Fe.colorSpace),se=s.convert(Fe.type),dt=_(Fe.internalFormat,$e,se,Fe.colorSpace,P.isXRRenderTarget===!0),Je=Ye(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,dt,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,H.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),je(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),Z(t.TEXTURE_CUBE_MAP,M,De);for(let me=0;me<6;me++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)be(H.__webglFramebuffer[me][we],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else be(H.__webglFramebuffer[me],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(M,De)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const me=P.texture;for(let we=0,Fe=me.length;we<Fe;we++){const $e=me[we],se=i.get($e);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Z(t.TEXTURE_2D,$e,De),be(H.__webglFramebuffer,P,$e,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),g($e,De)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,le.__webglTexture),Z(me,M,De),a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)be(H.__webglFramebuffer[we],P,M,t.COLOR_ATTACHMENT0,me,we);else be(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,me,0);g(M,De)&&v(me),n.unbindTexture()}P.depthBuffer&&ze(P)}function Yt(P){const M=p(P)||a,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,oe=H.length;le<oe;le++){const ae=H[le];if(g(ae,M)){const De=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ae).__webglTexture;n.bindTexture(De,me),v(De),n.unbindTexture()}}}function Ie(P){if(a&&P.samples>0&&Le(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,le=P.height;let oe=t.COLOR_BUFFER_BIT;const ae=[],De=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(P),we=P.isWebGLMultipleRenderTargets===!0;if(we)for(let Fe=0;Fe<M.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){ae.push(t.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&ae.push(De);const $e=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if($e===!1&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]),$e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[De]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[De])),we){const se=i.get(M[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,H,le,0,0,H,le,oe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<M.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]);const $e=i.get(M[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Ye(P){return Math.min(r.maxSamples,P.samples)}function Le(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(P){const M=o.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function Ze(P,M){const H=P.colorSpace,le=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Th||H!==Zi&&H!==oi&&(St.getTransfer(H)===At?a===!1?e.has("EXT_sRGB")===!0&&le===Yn?(P.format=Th,P.minFilter=ni,P.generateMipmaps=!1):M=Ay.sRGBToLinear(M):(le!==Yn||oe!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=lt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Le}function rA(t,e,n){const i=n.isWebGL2;function r(s,o=oi){let a;const l=St.getTransfer(o);if(s===Ur)return t.UNSIGNED_BYTE;if(s===gy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===vy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===GM)return t.BYTE;if(s===VM)return t.SHORT;if(s===bp)return t.UNSIGNED_SHORT;if(s===my)return t.INT;if(s===Er)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===ci)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===WM)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===jM)return t.LUMINANCE;if(s===XM)return t.LUMINANCE_ALPHA;if(s===us)return t.DEPTH_COMPONENT;if(s===Lo)return t.DEPTH_STENCIL;if(s===Th)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===YM)return t.RED;if(s===xy)return t.RED_INTEGER;if(s===qM)return t.RG;if(s===yy)return t.RG_INTEGER;if(s===_y)return t.RGBA_INTEGER;if(s===Gf||s===Vf||s===Wf||s===jf)if(l===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Gf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Gf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sg||s===Mg||s===Eg||s===wg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tg||s===bg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tg)return l===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ag||s===Cg||s===Rg||s===Pg||s===Lg||s===Dg||s===Ug||s===Ng||s===Ig||s===Fg||s===Og||s===kg||s===zg||s===Bg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ag)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ug)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ng)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ig)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Og)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bg)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xf||s===Hg||s===Gg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xf)return l===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$M||s===Vg||s===Wg||s===jg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class sA extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ho extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oA={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class aA extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,x=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],_=new he;let R=null;const b=new ri;b.layers.enable(1),b.viewport=new fn;const E=new ri;E.layers.enable(2),E.viewport=new fn;const U=[b,E],S=new sA;S.layers.enable(1),S.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=g[Z];return ne===void 0&&(ne=new gd,g[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=g[Z];return ne===void 0&&(ne=new gd,g[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=g[Z];return ne===void 0&&(ne=new gd,g[Z]=ne),ne.getHandSpace()};function W(Z){const ne=v.indexOf(Z.inputSource);if(ne===-1)return;const xe=g[ne];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<g.length;Z++){const ne=v[Z];ne!==null&&(v[Z]=null,g[Z].disconnect(ne))}T=null,V=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,xe=null,Ce=null;y.depth&&(Ce=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=y.stencil?Lo:us,xe=y.stencil?cs:Er);const be={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Cn(h.textureWidth,h.textureHeight,{format:Yn,type:Ur,depthTexture:new ky(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const je=e.properties.get(u);je.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(Z){for(let ne=0;ne<Z.removed.length;ne++){const xe=Z.removed[ne],Ce=v.indexOf(xe);Ce>=0&&(v[Ce]=null,g[Ce].disconnect(xe))}for(let ne=0;ne<Z.added.length;ne++){const xe=Z.added[ne];let Ce=v.indexOf(xe);if(Ce===-1){for(let je=0;je<g.length;je++)if(je>=v.length){v.push(xe),Ce=je;break}else if(v[je]===null){v[je]=xe,Ce=je;break}if(Ce===-1)break}const be=g[Ce];be&&be.connect(xe)}}const G=new L,K=new L;function J(Z,ne,xe){G.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const Ce=G.distanceTo(K),be=ne.projectionMatrix.elements,je=xe.projectionMatrix.elements,Xe=be[14]/(be[10]-1),ze=be[14]/(be[10]+1),lt=(be[9]+1)/be[5],X=(be[9]-1)/be[5],Yt=(be[8]-1)/be[0],Ie=(je[8]+1)/je[0],Ye=Xe*Yt,Le=Xe*Ie,Mt=Ce/(-Yt+Ie),Ze=Mt*-Yt;ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=Xe+Mt,M=ze+Mt,H=Ye-Ze,le=Le+(Ce-Ze),oe=lt*ze/M*P,ae=X*ze/M*P;Z.projectionMatrix.makePerspective(H,le,oe,ae,P,M),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function O(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;S.near=E.near=b.near=Z.near,S.far=E.far=b.far=Z.far,(T!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,V=S.far);const ne=Z.parent,xe=S.cameras;O(S,ne);for(let Ce=0;Ce<xe.length;Ce++)O(xe[Ce],ne);xe.length===2?J(S,b,E):S.projectionMatrix.copy(b.projectionMatrix),B(Z,S,ne)};function B(Z,ne,xe){xe===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)};let Y=null;function te(Z,ne){if(f=ne.getViewerPose(c||o),x=ne,f!==null){const xe=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Ce=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,Ce=!0);for(let be=0;be<xe.length;be++){const je=xe[be];let Xe=null;if(m!==null)Xe=m.getViewport(je);else{const lt=d.getViewSubImage(h,je);Xe=lt.viewport,be===0&&(e.setRenderTargetTextures(u,lt.colorTexture,h.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(u))}let ze=U[be];ze===void 0&&(ze=new ri,ze.layers.enable(be),ze.viewport=new fn,U[be]=ze),ze.matrix.fromArray(je.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(je.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),be===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ce===!0&&S.cameras.push(ze)}}for(let xe=0;xe<g.length;xe++){const Ce=v[xe],be=g[xe];Ce!==null&&be!==void 0&&be.update(Ce,ne,c||o)}Y&&Y(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const ee=new Fy;ee.setAnimationLoop(te),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}}function lA(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Uy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,_)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===on&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===on&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const _=v.program;i.uniformBlockBinding(g,_)}function c(g,v){let _=r[g.id];_===void 0&&(x(g),_=f(g),r[g.id]=_,g.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(g,R);const b=e.render.frame;s[g.id]!==b&&(h(g),s[g.id]=b)}function f(g){const v=d();g.__bindingPointIndex=v;const _=t.createBuffer(),R=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],_=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,E=_.length;b<E;b++){const U=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,T=U.length;S<T;S++){const V=U[S];if(m(V,b,S,R)===!0){const W=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let I=0;for(let G=0;G<ie.length;G++){const K=ie[G],J=y(K);typeof K=="number"||typeof K=="boolean"?(V.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,W+I,V.__data)):K.isMatrix3?(V.__data[0]=K.elements[0],V.__data[1]=K.elements[1],V.__data[2]=K.elements[2],V.__data[3]=0,V.__data[4]=K.elements[3],V.__data[5]=K.elements[4],V.__data[6]=K.elements[5],V.__data[7]=0,V.__data[8]=K.elements[6],V.__data[9]=K.elements[7],V.__data[10]=K.elements[8],V.__data[11]=0):(K.toArray(V.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,_,R){const b=g.value,E=v+"_"+_;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:R[E]=b.clone(),!0;{const U=R[E];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return R[E]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function x(g){const v=g.uniforms;let _=0;const R=16;for(let E=0,U=v.length;E<U;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,V=S.length;T<V;T++){const W=S[T],ie=Array.isArray(W.value)?W.value:[W.value];for(let I=0,G=ie.length;I<G;I++){const K=ie[I],J=y(K),O=_%R;O!==0&&R-O<J.boundary&&(_+=R-O),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=J.storage}}}const b=_%R;return b>0&&(_+=R-b),g.__size=_,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class jy{constructor(e={}){const{canvas:n=aE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=Dr,this.toneMappingExposure=1;const v=this;let _=!1,R=0,b=0,E=null,U=-1,S=null;const T=new fn,V=new fn;let W=null;const ie=new Ae(0);let I=0,G=n.width,K=n.height,J=1,O=null,B=null;const Y=new fn(0,0,G,K),te=new fn(0,0,G,K);let ee=!1;const Z=new Iy;let ne=!1,xe=!1,Ce=null;const be=new Xt,je=new he,Xe=new L,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return E===null?J:1}let X=i;function Yt(C,z){for(let Q=0;Q<C.length;Q++){const q=C[Q],$=n.getContext(q,z);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tp}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",fe,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),X=Yt(z,C),X===null)throw Yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,Ye,Le,Mt,Ze,P,M,H,le,oe,ae,De,me,we,Fe,$e,se,dt,Je,Ge,Pe,_e,D,ce;function ge(){Ie=new _b(X),Ye=new pb(X,Ie,e),Ie.init(Ye),_e=new rA(X,Ie,Ye),Le=new nA(X,Ie,Ye),Mt=new Eb(X),Ze=new V2,P=new iA(X,Ie,Le,Ze,Ye,_e,Mt),M=new gb(v),H=new yb(v),le=new LE(X,Ye),D=new db(X,Ie,le,Ye),oe=new Sb(X,le,Mt,D),ae=new Ab(X,oe,le,Mt),Je=new bb(X,Ye,P),$e=new mb(Ze),De=new G2(v,M,H,Ie,Ye,D,$e),me=new lA(v,Ze),we=new j2,Fe=new K2(Ie,Ye),dt=new fb(v,M,H,Le,ae,h,l),se=new tA(v,ae,Ye),ce=new cA(X,Mt,Ye,Le),Ge=new hb(X,Ie,Mt,Ye),Pe=new Mb(X,Ie,Mt,Ye),Mt.programs=De.programs,v.capabilities=Ye,v.extensions=Ie,v.properties=Ze,v.renderLists=we,v.shadowMap=se,v.state=Le,v.info=Mt}ge();const Se=new aA(v,X);this.xr=Se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(G,K,!1))},this.getSize=function(C){return C.set(G,K)},this.setSize=function(C,z,Q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,K=z,n.width=Math.floor(C*J),n.height=Math.floor(z*J),Q===!0&&(n.style.width=C+"px",n.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(G*J,K*J).floor()},this.setDrawingBufferSize=function(C,z,Q){G=C,K=z,J=Q,n.width=Math.floor(C*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,z,Q,q){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,z,Q,q),Le.viewport(T.copy(Y).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,z,Q,q){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,z,Q,q),Le.scissor(V.copy(te).multiplyScalar(J).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Le.setScissorTest(ee=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(C=!0,z=!0,Q=!0){let q=0;if(C){let $=!1;if(E!==null){const Te=E.texture.format;$=Te===_y||Te===yy||Te===xy}if($){const Te=E.texture.type,Ue=Te===Ur||Te===Er||Te===bp||Te===cs||Te===gy||Te===vy,He=dt.getClearColor(),Ve=dt.getClearAlpha(),tt=He.r,Qe=He.g,nt=He.b;Ue?(m[0]=tt,m[1]=Qe,m[2]=nt,m[3]=Ve,X.clearBufferuiv(X.COLOR,0,m)):(x[0]=tt,x[1]=Qe,x[2]=nt,x[3]=Ve,X.clearBufferiv(X.COLOR,0,x))}else q|=X.COLOR_BUFFER_BIT}z&&(q|=X.DEPTH_BUFFER_BIT),Q&&(q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),we.dispose(),Fe.dispose(),Ze.dispose(),M.dispose(),H.dispose(),ae.dispose(),D.dispose(),ce.dispose(),De.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Et),Se.removeEventListener("sessionend",rt),Ce&&(Ce.dispose(),Ce=null),Pt.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=Mt.autoReset,z=se.enabled,Q=se.autoUpdate,q=se.needsUpdate,$=se.type;ge(),Mt.autoReset=C,se.enabled=z,se.autoUpdate=Q,se.needsUpdate=q,se.type=$}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ye(C){const z=C.target;z.removeEventListener("dispose",ye),Be(z)}function Be(C){Oe(C),Ze.remove(C)}function Oe(C){const z=Ze.get(C).programs;z!==void 0&&(z.forEach(function(Q){De.releaseProgram(Q)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,Q,q,$,Te){z===null&&(z=ze);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,He=sr(C,z,Q,q,$);Le.setMaterial(q,Ue);let Ve=Q.index,tt=1;if(q.wireframe===!0){if(Ve=oe.getWireframeAttribute(Q),Ve===void 0)return;tt=2}const Qe=Q.drawRange,nt=Q.attributes.position;let Lt=Qe.start*tt,ln=(Qe.start+Qe.count)*tt;Te!==null&&(Lt=Math.max(Lt,Te.start*tt),ln=Math.min(ln,(Te.start+Te.count)*tt)),Ve!==null?(Lt=Math.max(Lt,0),ln=Math.min(ln,Ve.count)):nt!=null&&(Lt=Math.max(Lt,0),ln=Math.min(ln,nt.count));const Vt=ln-Lt;if(Vt<0||Vt===1/0)return;D.setup($,q,He,Q,Ve);let en,_t=Ge;if(Ve!==null&&(en=le.get(Ve),_t=Pe,_t.setIndex(en)),$.isMesh)q.wireframe===!0?(Le.setLineWidth(q.wireframeLinewidth*lt()),_t.setMode(X.LINES)):_t.setMode(X.TRIANGLES);else if($.isLine){let ot=q.linewidth;ot===void 0&&(ot=1),Le.setLineWidth(ot*lt()),$.isLineSegments?_t.setMode(X.LINES):$.isLineLoop?_t.setMode(X.LINE_LOOP):_t.setMode(X.LINE_STRIP)}else $.isPoints?_t.setMode(X.POINTS):$.isSprite&&_t.setMode(X.TRIANGLES);if($.isBatchedMesh)_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)_t.renderInstances(Lt,Vt,$.count);else if(Q.isInstancedBufferGeometry){const ot=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ws=Math.min(Q.instanceCount,ot);_t.renderInstances(Lt,Vt,ws)}else _t.render(Lt,Vt)};function et(C,z,Q){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,ir(C,z,Q),C.side=Fr,C.needsUpdate=!0,ir(C,z,Q),C.side=si):ir(C,z,Q)}this.compile=function(C,z,Q=null){Q===null&&(Q=C),p=Fe.get(Q),p.init(),g.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==Q&&C.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const q=new Set;return C.traverse(function($){const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const He=Te[Ue];et(He,Q,$),q.add(He)}else et(Te,Q,$),q.add(Te)}),g.pop(),p=null,q},this.compileAsync=function(C,z,Q=null){const q=this.compile(C,z,Q);return new Promise($=>{function Te(){if(q.forEach(function(Ue){Ze.get(Ue).currentProgram.isReady()&&q.delete(Ue)}),q.size===0){$(C);return}setTimeout(Te,10)}Ie.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let it=null;function xt(C){it&&it(C)}function Et(){Pt.stop()}function rt(){Pt.start()}const Pt=new Fy;Pt.setAnimationLoop(xt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(C){it=C,Se.setAnimationLoop(C),C===null?Pt.stop():Pt.start()},Se.addEventListener("sessionstart",Et),Se.addEventListener("sessionend",rt),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(z),z=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,z,E),p=Fe.get(C,g.length),p.init(),g.push(p),be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(be),xe=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,xe),y=we.get(C,u.length),y.init(),u.push(y),pn(C,z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(O,B),this.info.render.frame++,ne===!0&&$e.beginShadows();const Q=p.state.shadowsArray;if(se.render(Q,C,z),ne===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(y,C),p.setupLights(v._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let $=0,Te=q.length;$<Te;$++){const Ue=q[$];Hr(y,C,Ue,Ue.viewport)}}else Hr(y,C,z);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,z),D.resetDefaultState(),U=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function pn(C,z,Q,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){q&&Xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Ue=ae.update(C),He=C.material;He.visible&&y.push(C,Ue,He,Q,Xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ue=ae.update(C),He=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xe.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Xe.copy(Ue.boundingSphere.center)),Xe.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(He)){const Ve=Ue.groups;for(let tt=0,Qe=Ve.length;tt<Qe;tt++){const nt=Ve[tt],Lt=He[nt.materialIndex];Lt&&Lt.visible&&y.push(C,Ue,Lt,Q,Xe.z,nt)}}else He.visible&&y.push(C,Ue,He,Q,Xe.z,null)}}const Te=C.children;for(let Ue=0,He=Te.length;Ue<He;Ue++)pn(Te[Ue],z,Q,q)}function Hr(C,z,Q,q){const $=C.opaque,Te=C.transmissive,Ue=C.transparent;p.setupLightsView(Q),ne===!0&&$e.setGlobalState(v.clippingPlanes,Q),Te.length>0&&tr($,Te,z,Q),q&&Le.viewport(T.copy(q)),$.length>0&&Mi($,z,Q),Te.length>0&&Mi(Te,z,Q),Ue.length>0&&Mi(Ue,z,Q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function tr(C,z,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Te=Ye.isWebGL2;Ce===null&&(Ce=new Cn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?ci:Ur,minFilter:Ga,samples:Te?4:0})),v.getDrawingBufferSize(je),Te?Ce.setSize(je.x,je.y):Ce.setSize(Ah(je.x),Ah(je.y));const Ue=v.getRenderTarget();v.setRenderTarget(Ce),v.getClearColor(ie),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=Dr,Mi(C,Q,q),P.updateMultisampleRenderTarget(Ce),P.updateRenderTargetMipmap(Ce);let Ve=!1;for(let tt=0,Qe=z.length;tt<Qe;tt++){const nt=z[tt],Lt=nt.object,ln=nt.geometry,Vt=nt.material,en=nt.group;if(Vt.side===si&&Lt.layers.test(q.layers)){const _t=Vt.side;Vt.side=on,Vt.needsUpdate=!0,nr(Lt,Q,q,ln,Vt,en),Vt.side=_t,Vt.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(Ce),P.updateRenderTargetMipmap(Ce)),v.setRenderTarget(Ue),v.setClearColor(ie,I),v.toneMapping=He}function Mi(C,z,Q){const q=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Ue=C[$],He=Ue.object,Ve=Ue.geometry,tt=q===null?Ue.material:q,Qe=Ue.group;He.layers.test(Q.layers)&&nr(He,z,Q,Ve,tt,Qe)}}function nr(C,z,Q,q,$,Te){C.onBeforeRender(v,z,Q,q,$,Te),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(v,z,Q,q,C,Te),$.transparent===!0&&$.side===si&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,v.renderBufferDirect(Q,z,q,$,C,Te),$.side=Fr,$.needsUpdate=!0,v.renderBufferDirect(Q,z,q,$,C,Te),$.side=si):v.renderBufferDirect(Q,z,q,$,C,Te),C.onAfterRender(v,z,Q,q,$,Te)}function ir(C,z,Q){z.isScene!==!0&&(z=ze);const q=Ze.get(C),$=p.state.lights,Te=p.state.shadowsArray,Ue=$.state.version,He=De.getParameters(C,$.state,Te,z,Q),Ve=De.getProgramCacheKey(He);let tt=q.programs;q.environment=C.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(C.isMeshStandardMaterial?H:M).get(C.envMap||q.environment),tt===void 0&&(C.addEventListener("dispose",ye),tt=new Map,q.programs=tt);let Qe=tt.get(Ve);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Ue)return rr(C,He),Qe}else He.uniforms=De.getUniforms(C),C.onBuild(Q,He,v),C.onBeforeCompile(He,v),Qe=De.acquireProgram(He,Ve),tt.set(Ve,Qe),q.uniforms=He.uniforms;const nt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=$e.uniform),rr(C,He),q.needsLights=or(C),q.lightsStateVersion=Ue,q.needsLights&&(nt.ambientLightColor.value=$.state.ambient,nt.lightProbe.value=$.state.probe,nt.directionalLights.value=$.state.directional,nt.directionalLightShadows.value=$.state.directionalShadow,nt.spotLights.value=$.state.spot,nt.spotLightShadows.value=$.state.spotShadow,nt.rectAreaLights.value=$.state.rectArea,nt.ltc_1.value=$.state.rectAreaLTC1,nt.ltc_2.value=$.state.rectAreaLTC2,nt.pointLights.value=$.state.point,nt.pointLightShadows.value=$.state.pointShadow,nt.hemisphereLights.value=$.state.hemi,nt.directionalShadowMap.value=$.state.directionalShadowMap,nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,nt.spotShadowMap.value=$.state.spotShadowMap,nt.spotLightMatrix.value=$.state.spotLightMatrix,nt.spotLightMap.value=$.state.spotLightMap,nt.pointShadowMap.value=$.state.pointShadowMap,nt.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function Ei(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Nc.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function rr(C,z){const Q=Ze.get(C);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function sr(C,z,Q,q,$){z.isScene!==!0&&(z=ze),P.resetTextureUnits();const Te=z.fog,Ue=q.isMeshStandardMaterial?z.environment:null,He=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,Ve=(q.isMeshStandardMaterial?H:M).get(q.envMap||Ue),tt=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),nt=!!Q.morphAttributes.position,Lt=!!Q.morphAttributes.normal,ln=!!Q.morphAttributes.color;let Vt=Dr;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const en=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=en!==void 0?en.length:0,ot=Ze.get(q),ws=p.state.lights;if(ne===!0&&(xe===!0||C!==S)){const qt=C===S&&q.id===U;$e.setState(q,C,qt)}let Dt=!1;q.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==ws.state.version||ot.outputColorSpace!==He||$.isBatchedMesh&&ot.batching===!1||!$.isBatchedMesh&&ot.batching===!0||$.isInstancedMesh&&ot.instancing===!1||!$.isInstancedMesh&&ot.instancing===!0||$.isSkinnedMesh&&ot.skinning===!1||!$.isSkinnedMesh&&ot.skinning===!0||$.isInstancedMesh&&ot.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ot.instancingColor===!1&&$.instanceColor!==null||ot.envMap!==Ve||q.fog===!0&&ot.fog!==Te||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==$e.numPlanes||ot.numIntersection!==$e.numIntersection)||ot.vertexAlphas!==tt||ot.vertexTangents!==Qe||ot.morphTargets!==nt||ot.morphNormals!==Lt||ot.morphColors!==ln||ot.toneMapping!==Vt||Ye.isWebGL2===!0&&ot.morphTargetsCount!==_t)&&(Dt=!0):(Dt=!0,ot.__version=q.version);let Ni=ot.currentProgram;Dt===!0&&(Ni=ir(q,z,$));let tl=!1,Gr=!1,Bo=!1;const tn=Ni.getUniforms(),wi=ot.uniforms;if(Le.useProgram(Ni.program)&&(tl=!0,Gr=!0,Bo=!0),q.id!==U&&(U=q.id,Gr=!0),tl||S!==C){tn.setValue(X,"projectionMatrix",C.projectionMatrix),tn.setValue(X,"viewMatrix",C.matrixWorldInverse);const qt=tn.map.cameraPosition;qt!==void 0&&qt.setValue(X,Xe.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&tn.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&tn.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Gr=!0,Bo=!0)}if($.isSkinnedMesh){tn.setOptional(X,$,"bindMatrix"),tn.setOptional(X,$,"bindMatrixInverse");const qt=$.skeleton;qt&&(Ye.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),tn.setValue(X,"boneTexture",qt.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(tn.setOptional(X,$,"batchingTexture"),tn.setValue(X,"batchingTexture",$._matricesTexture,P));const Ho=Q.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&Ye.isWebGL2===!0)&&Je.update($,Q,Ni),(Gr||ot.receiveShadow!==$.receiveShadow)&&(ot.receiveShadow=$.receiveShadow,tn.setValue(X,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(wi.envMap.value=Ve,wi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Gr&&(tn.setValue(X,"toneMappingExposure",v.toneMappingExposure),ot.needsLights&&Es(wi,Bo),Te&&q.fog===!0&&me.refreshFogUniforms(wi,Te),me.refreshMaterialUniforms(wi,q,J,K,Ce),Nc.upload(X,Ei(ot),wi,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nc.upload(X,Ei(ot),wi,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&tn.setValue(X,"center",$.center),tn.setValue(X,"modelViewMatrix",$.modelViewMatrix),tn.setValue(X,"normalMatrix",$.normalMatrix),tn.setValue(X,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const qt=q.uniformsGroups;for(let Ts=0,ar=qt.length;Ts<ar;Ts++)if(Ye.isWebGL2){const Vr=qt[Ts];ce.update(Vr,Ni),ce.bind(Vr,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Es(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function or(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,z,Q){Ze.get(C.texture).__webglTexture=z,Ze.get(C.depthTexture).__webglTexture=Q;const q=Ze.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Q===void 0,q.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const Q=Ze.get(C);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,Q=0){E=C,R=z,b=Q;let q=!0,$=null,Te=!1,Ue=!1;if(C){const Ve=Ze.get(C);Ve.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(X.FRAMEBUFFER,null),q=!1):Ve.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ve.__hasExternalTextures&&P.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ue=!0);const Qe=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?$=Qe[z][Q]:$=Qe[z],Te=!0):Ye.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?$=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?$=Qe[Q]:$=Qe,T.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else T.copy(Y).multiplyScalar(J).floor(),V.copy(te).multiplyScalar(J).floor(),W=ee;if(Le.bindFramebuffer(X.FRAMEBUFFER,$)&&Ye.drawBuffers&&q&&Le.drawBuffers(C,$),Le.viewport(T),Le.scissor(V),Le.setScissorTest(W),Te){const Ve=Ze.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,Q)}else if(Ue){const Ve=Ze.get(C.texture),tt=z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,Q||0,tt)}U=-1},this.readRenderTargetPixels=function(C,z,Q,q,$,Te,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){Le.bindFramebuffer(X.FRAMEBUFFER,He);try{const Ve=C.texture,tt=Ve.format,Qe=Ve.type;if(tt!==Yn&&_e.convert(tt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Qe===ci&&(Ie.has("EXT_color_buffer_half_float")||Ye.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(Qe!==Ur&&_e.convert(Qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Pi&&(Ye.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&Q>=0&&Q<=C.height-$&&X.readPixels(z,Q,q,$,_e.convert(tt),_e.convert(Qe),Te)}finally{const Ve=E!==null?Ze.get(E).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,z,Q=0){const q=Math.pow(2,-Q),$=Math.floor(z.image.width*q),Te=Math.floor(z.image.height*q);P.setTexture2D(z,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,C.x,C.y,$,Te),Le.unbindTexture()},this.copyTextureToTexture=function(C,z,Q,q=0){const $=z.image.width,Te=z.image.height,Ue=_e.convert(Q.format),He=_e.convert(Q.type);P.setTexture2D(Q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment),z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,q,C.x,C.y,$,Te,Ue,He,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,q,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,Ue,z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,q,C.x,C.y,Ue,He,z.image),q===0&&Q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(C,z,Q,q,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,Ve=_e.convert(q.format),tt=_e.convert(q.type);let Qe;if(q.isData3DTexture)P.setTexture3D(q,0),Qe=X.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)P.setTexture2DArray(q,0),Qe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const nt=X.getParameter(X.UNPACK_ROW_LENGTH),Lt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ln=X.getParameter(X.UNPACK_SKIP_PIXELS),Vt=X.getParameter(X.UNPACK_SKIP_ROWS),en=X.getParameter(X.UNPACK_SKIP_IMAGES),_t=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,_t.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_t.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?X.texSubImage3D(Qe,$,z.x,z.y,z.z,Te,Ue,He,Ve,tt,_t.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Qe,$,z.x,z.y,z.z,Te,Ue,He,Ve,_t.data)):X.texSubImage3D(Qe,$,z.x,z.y,z.z,Te,Ue,He,Ve,tt,_t),X.pixelStorei(X.UNPACK_ROW_LENGTH,nt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ln),X.pixelStorei(X.UNPACK_SKIP_ROWS,Vt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,en),$===0&&q.generateMipmaps&&X.generateMipmap(Qe),Le.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){R=0,b=0,E=null,Le.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ap?"display-p3":"srgb",n.unpackColorSpace=St.workingColorSpace===Ru?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===un?fs:My}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?un:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uA extends jy{}uA.prototype.isWebGL1Renderer=!0;class Lp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=n}clone(){return new Lp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xy extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class fA extends zn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Ct,f=Ct,d,h){super(null,o,a,l,c,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yy extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const N0=new L,I0=new L,F0=new Xt,vd=new Ja,hc=new Za;class dA extends Sn{constructor(e=new Jt,n=new Yy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)N0.fromBufferAttribute(n,r-1),I0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=N0.distanceTo(I0);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(r),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;F0.copy(r).invert(),vd.copy(e.ray).applyMatrix4(F0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,f=new L,d=new L,h=new L,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),g=Math.min(x.count,o.start+o.count);for(let v=u,_=g-1;v<_;v+=m){const R=x.getX(v),b=x.getX(v+1);if(c.fromBufferAttribute(p,R),f.fromBufferAttribute(p,b),vd.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||n.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=u,_=g-1;v<_;v+=m){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),vd.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const O0=new L,k0=new L;class hA extends dA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)O0.fromBufferAttribute(n,r),k0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+O0.distanceTo(k0);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pA extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new Xt,Rh=new Ja,pc=new Za,mc=new L;class qy extends Sn{constructor(e=new Jt,n=new pA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;z0.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(z0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,y=m;x<y;x++){const p=c.getX(x);mc.fromBufferAttribute(d,p),B0(mc,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=h,y=m;x<y;x++)mc.fromBufferAttribute(d,x),B0(mc,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function B0(t,e,n,i,r,s,o){const a=Rh.distanceSqToPoint(t);if(a<n){const l=new L;Rh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class er{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,m=(o-f)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,r=[],s=[],o=[],a=new L,l=new Xt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(sn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(sn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $y extends er{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*f-m*d+this.aX,c=h*d+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mA extends $y{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,m*=f,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const gc=new L,xd=new Dp,yd=new Dp,_d=new Dp;class fu extends er{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(gc.subVectors(r[0],r[1]).add(r[0]),c=gc);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(gc.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=gc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),xd.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,x,y,p),yd.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,x,y,p),_d.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,x,y,p)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),yd.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),_d.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(xd.calc(l),yd.calc(l),_d.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function H0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function gA(t,e){const n=1-t;return n*n*e}function vA(t,e){return 2*(1-t)*t*e}function xA(t,e){return t*t*e}function Ma(t,e,n,i){return gA(t,e)+vA(t,n)+xA(t,i)}function yA(t,e){const n=1-t;return n*n*n*e}function _A(t,e){const n=1-t;return 3*n*n*t*e}function SA(t,e){return 3*(1-t)*t*t*e}function MA(t,e){return t*t*t*e}function Ea(t,e,n,i,r){return yA(t,e)+_A(t,n)+SA(t,i)+MA(t,r)}class EA extends er{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,r.x,s.x,o.x,a.x),Ea(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wA extends er{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,r.x,s.x,o.x,a.x),Ea(e,r.y,s.y,o.y,a.y),Ea(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class TA extends er{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bA extends er{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AA extends er{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qy extends er{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y),Ma(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CA extends er{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(H0(a,l.x,c.x,f.x,d.x),H0(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var RA=Object.freeze({__proto__:null,ArcCurve:mA,CatmullRomCurve3:fu,CubicBezierCurve:EA,CubicBezierCurve3:wA,EllipseCurve:$y,LineCurve:TA,LineCurve3:bA,QuadraticBezierCurve:AA,QuadraticBezierCurve3:Qy,SplineCurve:CA});class Up extends Jt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let x=0;const y=[],p=i/2;let u=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(m,2));function g(){const _=new L,R=new L;let b=0;const E=(n-e)/i;for(let U=0;U<=s;U++){const S=[],T=U/s,V=T*(n-e)+e;for(let W=0;W<=r;W++){const ie=W/r,I=ie*l+a,G=Math.sin(I),K=Math.cos(I);R.x=V*G,R.y=-T*i+p,R.z=V*K,d.push(R.x,R.y,R.z),_.set(G,E,K).normalize(),h.push(_.x,_.y,_.z),m.push(ie,1-T),S.push(x++)}y.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const T=y[S][U],V=y[S+1][U],W=y[S+1][U+1],ie=y[S][U+1];f.push(T,V,ie),f.push(V,W,ie),b+=6}c.addGroup(u,b,0),u+=b}function v(_){const R=x,b=new he,E=new L;let U=0;const S=_===!0?e:n,T=_===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,p*T,0),h.push(0,T,0),m.push(.5,.5),x++;const V=x;for(let W=0;W<=r;W++){const I=W/r*l+a,G=Math.cos(I),K=Math.sin(I);E.x=S*K,E.y=p*T,E.z=S*G,d.push(E.x,E.y,E.z),h.push(0,T,0),b.x=G*.5+.5,b.y=K*.5*T+.5,m.push(b.x,b.y),x++}for(let W=0;W<r;W++){const ie=R+W,I=V+W;_===!0?f.push(I,I+1,ie):f.push(I+1,I,ie),U+=3}c.addGroup(u,U,_===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uu extends Jt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new L,_=new L,R=new L;for(let b=0;b<n.length;b+=3)m(n[b+0],v),m(n[b+1],_),m(n[b+2],R),l(v,_,R,g)}function l(g,v,_,R){const b=R+1,E=[];for(let U=0;U<=b;U++){E[U]=[];const S=g.clone().lerp(_,U/b),T=v.clone().lerp(_,U/b),V=b-U;for(let W=0;W<=V;W++)W===0&&U===b?E[U][W]=S:E[U][W]=S.clone().lerp(T,W/V)}for(let U=0;U<b;U++)for(let S=0;S<2*(b-U)-1;S++){const T=Math.floor(S/2);S%2===0?(h(E[U][T+1]),h(E[U+1][T]),h(E[U][T])):(h(E[U][T+1]),h(E[U+1][T+1]),h(E[U+1][T]))}}function c(g){const v=new L;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(g),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function f(){const g=new L;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const _=p(g)/2/Math.PI+.5,R=u(g)/Math.PI+.5;o.push(_,1-R)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],_=o[g+2],R=o[g+4],b=Math.max(v,_,R),E=Math.min(v,_,R);b>.9&&E<.1&&(v<.2&&(o[g+0]+=1),_<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,v){const _=g*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function x(){const g=new L,v=new L,_=new L,R=new L,b=new he,E=new he,U=new he;for(let S=0,T=0;S<s.length;S+=9,T+=6){g.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),b.set(o[T+0],o[T+1]),E.set(o[T+2],o[T+3]),U.set(o[T+4],o[T+5]),R.copy(g).add(v).add(_).divideScalar(3);const V=p(R);y(b,T+0,g,V),y(E,T+2,v,V),y(U,T+4,_,V)}}function y(g,v,_,R){R<0&&g.x===1&&(o[v]=g.x-1),_.x===0&&_.z===0&&(o[v]=R/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.vertices,e.indices,e.radius,e.details)}}class Np extends Uu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Np(e.radius,e.detail)}}const vc=new L,xc=new L,Sd=new L,yc=new ii;class _c extends Jt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(_a*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:y,b:p,c:u}=yc;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),yc.getNormal(Sd),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,_=d[g],R=d[v],b=yc[f[g]],E=yc[f[v]],U=`${_}_${R}`,S=`${R}_${_}`;S in h&&h[S]?(Sd.dot(h[S].normal)<=s&&(m.push(b.x,b.y,b.z),m.push(E.x,E.y,E.z)),h[S]=null):U in h||(h[U]={index0:c[g],index1:c[v],normal:Sd.clone()})}}for(const x in h)if(h[x]){const{index0:y,index1:p}=h[x];vc.fromBufferAttribute(a,y),xc.fromBufferAttribute(a,p),m.push(vc.x,vc.y,vc.z),m.push(xc.x,xc.y,xc.z)}this.setAttribute("position",new vt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ip extends Uu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ip(e.radius,e.detail)}}class Va extends Jt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new L,h=new L,m=[],x=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let _=0;u===0&&o===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let R=0;R<=n;R++){const b=R/n;d.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(b+_,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],_=f[u][g],R=f[u+1][g],b=f[u+1][g+1];(u!==0||o>0)&&m.push(v,_,b),(u!==i-1||l<Math.PI)&&m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wa extends Jt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new L,d=new L,h=new L;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const y=x/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(y),d.y=(e+n*Math.cos(p))*Math.sin(y),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const y=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,u=(r+1)*(m-1)+x,g=(r+1)*m+x;o.push(y,p,g),o.push(p,u,g)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class No extends Jt{constructor(e=new Qy(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new he;let f=new L;const d=[],h=[],m=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(m,2));function y(){for(let v=0;v<n;v++)p(v);p(s===!1?n:0),g(),u()}function p(v){f=e.getPointAt(v/n,f);const _=o.normals[v],R=o.binormals[v];for(let b=0;b<=r;b++){const E=b/r*Math.PI*2,U=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+U*R.x,l.y=S*_.y+U*R.y,l.z=S*_.z+U*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let _=1;_<=r;_++){const R=(r+1)*(v-1)+(_-1),b=(r+1)*v+(_-1),E=(r+1)*v+_,U=(r+1)*(v-1)+_;x.push(R,b,U),x.push(b,E,U)}}function g(){for(let v=0;v<=n;v++)for(let _=0;_<=r;_++)c.x=v/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new No(new RA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class PA extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wy,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G0 extends PA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class LA extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class DA extends LA{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ky{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=V0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=V0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function V0(){return(typeof performance>"u"?Date:performance).now()}class UA{constructor(e,n,i=0,r=1/0){this.ray=new Ja(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Ph(e,this,i,n),i.sort(W0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ph(e[r],this,i,n);return i.sort(W0),i}}function W0(t,e){return t.distance-e.distance}function Ph(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Ph(r[s],e,n,!0)}}class j0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);const X0={type:"change"},Md={type:"start"},Y0={type:"end"},Sc=new Ja,q0=new bn,NA=Math.cos(70*oE.DEG2RAD);class IA extends _s{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Fe),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(X0),i.update(),s=r.NONE},this.update=function(){const D=new L,ce=new vs().setFromUnitVectors(e.up,new L(0,1,0)),ge=ce.clone().invert(),Se=new L,re=new vs,N=new L,fe=2*Math.PI;return function(Be=null){const Oe=i.object.position;D.copy(Oe).sub(i.target),D.applyQuaternion(ce),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&W(T(Be)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let et=i.minAzimuthAngle,it=i.maxAzimuthAngle;isFinite(et)&&isFinite(it)&&(et<-Math.PI?et+=fe:et>Math.PI&&(et-=fe),it<-Math.PI?it+=fe:it>Math.PI&&(it-=fe),et<=it?a.theta=Math.max(et,Math.min(it,a.theta)):a.theta=a.theta>(et+it)/2?Math.max(et,a.theta):Math.min(it,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&b||i.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(ge),Oe.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let xt=!1;if(i.zoomToCursor&&b){let Et=null;if(i.object.isPerspectiveCamera){const rt=D.length();Et=Y(rt*c);const Pt=rt-Et;i.object.position.addScaledVector(_,Pt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const rt=new L(R.x,R.y,0);rt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),xt=!0;const Pt=new L(R.x,R.y,0);Pt.unproject(i.object),i.object.position.sub(Pt).add(rt),i.object.updateMatrixWorld(),Et=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Et!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Et).add(i.object.position):(Sc.origin.copy(i.object.position),Sc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Sc.direction))<NA?e.lookAt(i.target):(q0.setFromNormalAndCoplanarPoint(i.object.up,i.target),Sc.intersectPlane(q0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),xt=!0);return c=1,b=!1,xt||Se.distanceToSquared(i.object.position)>o||8*(1-re.dot(i.object.quaternion))>o||N.distanceToSquared(i.target)>0?(i.dispatchEvent(X0),Se.copy(i.object.position),re.copy(i.object.quaternion),N.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",dt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new j0,l=new j0;let c=1;const f=new L,d=new he,h=new he,m=new he,x=new he,y=new he,p=new he,u=new he,g=new he,v=new he,_=new L,R=new he;let b=!1;const E=[],U={};let S=!1;function T(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function V(D){const ce=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*ce)}function W(D){l.theta-=D}function ie(D){l.phi-=D}const I=function(){const D=new L;return function(ge,Se){D.setFromMatrixColumn(Se,0),D.multiplyScalar(-ge),f.add(D)}}(),G=function(){const D=new L;return function(ge,Se){i.screenSpacePanning===!0?D.setFromMatrixColumn(Se,1):(D.setFromMatrixColumn(Se,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(ge),f.add(D)}}(),K=function(){const D=new L;return function(ge,Se){const re=i.domElement;if(i.object.isPerspectiveCamera){const N=i.object.position;D.copy(N).sub(i.target);let fe=D.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),I(2*ge*fe/re.clientHeight,i.object.matrix),G(2*Se*fe/re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(ge*(i.object.right-i.object.left)/i.object.zoom/re.clientWidth,i.object.matrix),G(Se*(i.object.top-i.object.bottom)/i.object.zoom/re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(D,ce){if(!i.zoomToCursor)return;b=!0;const ge=i.domElement.getBoundingClientRect(),Se=D-ge.left,re=ce-ge.top,N=ge.width,fe=ge.height;R.x=Se/N*2-1,R.y=-(re/fe)*2+1,_.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function te(D){d.set(D.clientX,D.clientY)}function ee(D){B(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function Z(D){x.set(D.clientX,D.clientY)}function ne(D){h.set(D.clientX,D.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;W(2*Math.PI*m.x/ce.clientHeight),ie(2*Math.PI*m.y/ce.clientHeight),d.copy(h),i.update()}function xe(D){g.set(D.clientX,D.clientY),v.subVectors(g,u),v.y>0?J(V(v.y)):v.y<0&&O(V(v.y)),u.copy(g),i.update()}function Ce(D){y.set(D.clientX,D.clientY),p.subVectors(y,x).multiplyScalar(i.panSpeed),K(p.x,p.y),x.copy(y),i.update()}function be(D){B(D.clientX,D.clientY),D.deltaY<0?O(V(D.deltaY)):D.deltaY>0&&J(V(D.deltaY)),i.update()}function je(D){let ce=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),ce=!0;break}ce&&(D.preventDefault(),i.update())}function Xe(D){if(E.length===1)d.set(D.pageX,D.pageY);else{const ce=_e(D),ge=.5*(D.pageX+ce.x),Se=.5*(D.pageY+ce.y);d.set(ge,Se)}}function ze(D){if(E.length===1)x.set(D.pageX,D.pageY);else{const ce=_e(D),ge=.5*(D.pageX+ce.x),Se=.5*(D.pageY+ce.y);x.set(ge,Se)}}function lt(D){const ce=_e(D),ge=D.pageX-ce.x,Se=D.pageY-ce.y,re=Math.sqrt(ge*ge+Se*Se);u.set(0,re)}function X(D){i.enableZoom&&lt(D),i.enablePan&&ze(D)}function Yt(D){i.enableZoom&&lt(D),i.enableRotate&&Xe(D)}function Ie(D){if(E.length==1)h.set(D.pageX,D.pageY);else{const ge=_e(D),Se=.5*(D.pageX+ge.x),re=.5*(D.pageY+ge.y);h.set(Se,re)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const ce=i.domElement;W(2*Math.PI*m.x/ce.clientHeight),ie(2*Math.PI*m.y/ce.clientHeight),d.copy(h)}function Ye(D){if(E.length===1)y.set(D.pageX,D.pageY);else{const ce=_e(D),ge=.5*(D.pageX+ce.x),Se=.5*(D.pageY+ce.y);y.set(ge,Se)}p.subVectors(y,x).multiplyScalar(i.panSpeed),K(p.x,p.y),x.copy(y)}function Le(D){const ce=_e(D),ge=D.pageX-ce.x,Se=D.pageY-ce.y,re=Math.sqrt(ge*ge+Se*Se);g.set(0,re),v.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),J(v.y),u.copy(g);const N=(D.pageX+ce.x)*.5,fe=(D.pageY+ce.y)*.5;B(N,fe)}function Mt(D){i.enableZoom&&Le(D),i.enablePan&&Ye(D)}function Ze(D){i.enableZoom&&Le(D),i.enableRotate&&Ie(D)}function P(D){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",H)),Je(D),D.pointerType==="touch"?$e(D):le(D))}function M(D){i.enabled!==!1&&(D.pointerType==="touch"?se(D):oe(D))}function H(D){Ge(D),E.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(Y0),s=r.NONE}function le(D){let ce;switch(D.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Us.DOLLY:if(i.enableZoom===!1)return;ee(D),s=r.DOLLY;break;case Us.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;Z(D),s=r.PAN}else{if(i.enableRotate===!1)return;te(D),s=r.ROTATE}break;case Us.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;te(D),s=r.ROTATE}else{if(i.enablePan===!1)return;Z(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Md)}function oe(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ne(D);break;case r.DOLLY:if(i.enableZoom===!1)return;xe(D);break;case r.PAN:if(i.enablePan===!1)return;Ce(D);break}}function ae(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Md),be(De(D)),i.dispatchEvent(Y0))}function De(D){const ce=D.deltaMode,ge={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ce){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return D.ctrlKey&&!S&&(ge.deltaY*=10),ge}function me(D){D.key==="Control"&&(S=!0,document.addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(D){D.key==="Control"&&(S=!1,document.removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Fe(D){i.enabled===!1||i.enablePan===!1||je(D)}function $e(D){switch(Pe(D),E.length){case 1:switch(i.touches.ONE){case Ns.ROTATE:if(i.enableRotate===!1)return;Xe(D),s=r.TOUCH_ROTATE;break;case Ns.PAN:if(i.enablePan===!1)return;ze(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ns.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;X(D),s=r.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Yt(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Md)}function se(D){switch(Pe(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ye(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Mt(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ze(D),i.update();break;default:s=r.NONE}}function dt(D){i.enabled!==!1&&D.preventDefault()}function Je(D){E.push(D.pointerId)}function Ge(D){delete U[D.pointerId];for(let ce=0;ce<E.length;ce++)if(E[ce]==D.pointerId){E.splice(ce,1);return}}function Pe(D){let ce=U[D.pointerId];ce===void 0&&(ce=new he,U[D.pointerId]=ce),ce.set(D.pageX,D.pageY)}function _e(D){const ce=D.pointerId===E[0]?E[1]:E[0];return U[ce]}i.domElement.addEventListener("contextmenu",dt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",ae,{passive:!1}),document.addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}const Zy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FA=new Oy(-1,1,1,-1,0,1);class OA extends Jt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}}const kA=new OA;class Wa{constructor(e){this._mesh=new It(kA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,FA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ua extends Ms{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wa(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $0 extends Ms{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class zA extends Ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class BA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new he);this._width=i.width,this._height=i.height,n=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ua(Zy),this.copyPass.material.blending=Ui,this.clock=new Ky}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$0!==void 0&&(o instanceof $0?i=!0:o instanceof zA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HA extends Ms{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const GA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Io extends Ms{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(s,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Cn(s,o,{type:ci});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Cn(s,o,{type:ci});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=GA;this.highPassUniforms=Uo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new he(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Zy;this.copyUniforms=Uo.clone(f.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new Wa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Io.BlurDirectionX=new he(1,0);Io.BlurDirectionY=new he(0,1);const VA={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class WA extends Ms{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Cn(1,1,{minFilter:Ct,magFilter:Ct,type:ci}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Wy,this.materialDepth.depthPacking=Ey,this.materialDepth.blending=Ui;const a=VA,l=Uo.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=n.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=n.near,l.farClip.value=n.far,this.materialBokeh=new Gt({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new Wa(this.materialBokeh),this._oldClearColor=new Ae}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,n){this.materialBokeh.uniforms.aspect.value=e/n,this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const jA={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class XA extends Ms{constructor(e=.96){super(),this.shader=jA,this.uniforms=Uo.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new Cn(window.innerWidth,window.innerHeight,{magFilter:Ct,type:ci}),this.textureOld=new Cn(window.innerWidth,window.innerHeight,{magFilter:Ct,type:ci}),this.compFsMaterial=new Gt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Wa(this.compFsMaterial),this.copyFsMaterial=new Tn,this.copyFsQuad=new Wa(this.copyFsMaterial)}render(e,n,i){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=i.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.copyFsQuad.render(e));const r=this.textureOld;this.textureOld=this.textureComp,this.textureComp=r}setSize(e,n){this.textureComp.setSize(e,n),this.textureOld.setSize(e,n)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class YA{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=Pi;const s=new Xy,o=new Rp;o.position.z=1;const a={passThruTexture:{value:null}},l=d(m(),a),c=new It(new Lu(2,2),l);s.add(c),this.setDataType=function(x){return r=x,this},this.addVariable=function(x,y,p){const u=this.createShaderMaterial(y),g={name:x,initialValueTexture:p,material:u,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Ct,magFilter:Ct};return this.variables.push(g),g},this.setVariableDependencies=function(x,y){x.dependencies=y},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const y=this.variables[x];y.renderTargets[0]=this.createRenderTarget(e,n,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(e,n,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);const p=y.material,u=p.uniforms;if(y.dependencies!==null)for(let g=0;g<y.dependencies.length;g++){const v=y.dependencies[g];if(v.name!==y.name){let _=!1;for(let R=0;R<this.variables.length;R++)if(v.name===this.variables[R].name){_=!0;break}if(!_)return"Variable dependency not found. Variable="+y.name+", dependency="+v.name}u[v.name]={value:null},p.fragmentShader=`
uniform sampler2D `+v.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0;for(let p=0,u=this.variables.length;p<u;p++){const g=this.variables[p];if(g.dependencies!==null){const v=g.material.uniforms;for(let _=0,R=g.dependencies.length;_<R;_++){const b=g.dependencies[_];v[b.name].value=b.renderTargets[x].texture}}this.doRenderTarget(g.material,g.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const x=this.variables;for(let y=0;y<x.length;y++){const p=x[y];p.initialValueTexture&&p.initialValueTexture.dispose();const u=p.renderTargets;for(let g=0;g<u.length;g++)u[g].dispose()}};function f(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=f;function d(x,y){y=y||{};const p=new Gt({name:"GPUComputationShader",uniforms:y,vertexShader:h(),fragmentShader:x});return f(p),p}this.createShaderMaterial=d,this.createRenderTarget=function(x,y,p,u,g,v){return x=x||e,y=y||n,p=p||Xn,u=u||Xn,g=g||Ct,v=v||Ct,new Cn(x,y,{wrapS:p,wrapT:u,minFilter:g,magFilter:v,format:Yn,type:r,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*n*4),y=new fA(x,e,n,Yn,Pi);return y.needsUpdate=!0,y},this.renderTexture=function(x,y){a.passThruTexture.value=x,this.doRenderTarget(l,y),a.passThruTexture.value=null},this.doRenderTarget=function(x,y){const p=i.getRenderTarget(),u=i.xr.enabled,g=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,c.material=x,i.setRenderTarget(y),i.render(s,o),c.material=l,i.xr.enabled=u,i.shadowMap.autoUpdate=g,i.setRenderTarget(p)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function m(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const qA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Ut={"Northern Lights":{primary:"#00ffaa",secondary:"#00aaff",accent:"#aa55ff",highlight:"#ffffff",background:["#0a0a1a","#051515","#0a1a1a"]},"Deep Ocean":{primary:"#0055ff",secondary:"#00ffff",accent:"#8800ff",highlight:"#ffffff",background:["#000515","#001025","#000520"]},"Solar Corona":{primary:"#ff8800",secondary:"#ffff00",accent:"#ff2200",highlight:"#ffffff",background:["#1a0a00","#150500","#1a0500"]},Synthwave:{primary:"#ff00aa",secondary:"#00ffff",accent:"#aa00ff",highlight:"#ffaaff",background:["#0a0015","#150020","#0a0520"]},"Monochrome Zen":{primary:"#ffffff",secondary:"#aabbcc",accent:"#8899aa",highlight:"#ffffff",background:["#0a0a0f","#0f0f15","#0a0a12"]},"Ember & Ash":{primary:"#ff3300",secondary:"#ff8800",accent:"#ffaa00",highlight:"#ffffff",background:["#0a0505","#150a05","#0a0805"]}},Q0={"Cosmic Dance":{description:"Ethereal deep ocean with swirling rings",palette:"Deep Ocean",background:"nebula",timeScale:.8,bloom:1.8,structures:[{type:"rings",scale:1.2,position:[0,0,0],rotationSpeed:.3},{type:"icosahedron",scale:.4,position:[0,0,0],rotationSpeed:.2}],ribbons:[{type:"toroidal",thickness:.06}],waveGrid:!0,waveAmplitude:1.5},"Solar Flare":{description:"Intense fiery energy burst",palette:"Solar Corona",background:"gradient",timeScale:1.3,bloom:2.2,structures:[{type:"torus",scale:.8,position:[0,0,0],rotationSpeed:.5}],ribbons:[{type:"spiral",thickness:.1},{type:"helix",thickness:.05}],waveGrid:!0,waveAmplitude:2},"Digital Dreams":{description:"Synthwave aesthetic with geometric precision",palette:"Synthwave",background:"nebula",timeScale:1,bloom:2,structures:[{type:"helix",scale:1.5,position:[0,0,0],rotationSpeed:.15},{type:"mobius",scale:.6,position:[2,0,0],rotationSpeed:.4}],ribbons:[{type:"lissajous",thickness:.08}],waveGrid:!0,waveAmplitude:.8},"Zen Garden":{description:"Minimal and meditative monochrome",palette:"Monochrome Zen",background:"gradient",timeScale:.5,bloom:1.2,structures:[{type:"icosahedron",scale:1,position:[0,0,0],rotationSpeed:.1}],ribbons:[],waveGrid:!0,waveAmplitude:.5},"Aurora Borealis":{description:"Northern lights dancing in the sky",palette:"Northern Lights",background:"nebula",timeScale:.7,bloom:1.5,structures:[{type:"rings",scale:1.8,position:[0,0,0],rotationSpeed:.08}],ribbons:[{type:"helix",thickness:.12},{type:"toroidal",thickness:.04}],waveGrid:!0,waveAmplitude:1.2},"Ember Storm":{description:"Fiery particles in chaotic motion",palette:"Ember & Ash",background:"gradient",timeScale:1.5,bloom:1.8,structures:[{type:"torus",scale:.6,position:[0,1,0],rotationSpeed:.8},{type:"torus",scale:.4,position:[0,-1,0],rotationSpeed:-.6}],ribbons:[{type:"spiral",thickness:.15}],waveGrid:!1,waveAmplitude:1},Murmuration:{description:"Flocking behavior - birds in synchronized flight",palette:"Northern Lights",background:"gradient",timeScale:1,bloom:1.4,simulationMode:"boids",boids:{separation:2,alignment:1.5,cohesion:1.2,neighborRadius:2.5,maxSpeed:5},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:1},Swarm:{description:"Dense flocking with high cohesion",palette:"Synthwave",background:"nebula",timeScale:.8,bloom:2,simulationMode:"boids",boids:{separation:.8,alignment:.8,cohesion:3,neighborRadius:3,maxSpeed:4},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:.5},"Solar System":{description:"Gravitational n-body simulation",palette:"Solar Corona",background:"gradient",timeScale:.6,bloom:2.2,simulationMode:"nbody",nbody:{gravConstant:.8,softening:.5,damping:.998},structures:[{type:"icosahedron",scale:1.5,position:[0,0,0],rotationSpeed:.1,mass:5},{type:"torus",scale:.8,position:[4,0,0],rotationSpeed:.3,mass:2},{type:"rings",scale:.6,position:[-3,2,0],rotationSpeed:.2,mass:1.5}],ribbons:[],waveGrid:!1,waveAmplitude:.8},Galaxy:{description:"Massive central body with orbiting particles",palette:"Deep Ocean",background:"nebula",timeScale:.5,bloom:1.8,simulationMode:"nbody",nbody:{gravConstant:1.2,softening:.8,damping:.999},structures:[{type:"icosahedron",scale:2,position:[0,0,0],rotationSpeed:.05,mass:10}],ribbons:[],waveGrid:!1,waveAmplitude:1}},$A={default:{position:[0,2,8],target:[0,0,0],fov:75},topDown:{position:[0,15,.1],target:[0,0,0],fov:60},side:{position:[12,0,0],target:[0,0,0],fov:70},closeUp:{position:[0,.5,3],target:[0,0,0],fov:50},wide:{position:[0,5,18],target:[0,0,0],fov:90},cinematic:{position:[6,4,6],target:[0,-1,0],fov:65},low:{position:[4,-2,4],target:[0,1,0],fov:80}};function QA(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}function Ks(t,e,n){const i=new Ae(t),r=new Ae(e);return i.lerp(r,n)}const Ed={" ":{action:"triggerPulse",description:"Trigger shockwave pulse"},r:{action:"randomize",description:"Randomize scene"},c:{action:"clearScene",description:"Clear all objects"},h:{action:"toggleUI",description:"Hide/show control panel"},f:{action:"toggleFullscreen",description:"Toggle fullscreen"},p:{action:"togglePause",description:"Pause/resume animation"},m:{action:"toggleMouseFollow",description:"Toggle mouse attraction"},g:{action:"toggleWaveGrid",description:"Toggle wave grid"},1:{action:"palette1",description:"Northern Lights palette"},2:{action:"palette2",description:"Deep Ocean palette"},3:{action:"palette3",description:"Solar Corona palette"},4:{action:"palette4",description:"Synthwave palette"},5:{action:"palette5",description:"Monochrome Zen palette"},6:{action:"palette6",description:"Ember & Ash palette"},"=":{action:"qualityUp",description:"Increase quality"},"-":{action:"qualityDown",description:"Decrease quality"},Escape:{action:"resetCamera",description:"Reset camera position"},"?":{action:"showHelp",description:"Show keyboard shortcuts"},i:{action:"togglePerfOverlay",description:"Toggle performance overlay"},"Shift+1":{action:"cameraTopDown",description:"Camera: Top-down view"},"Shift+2":{action:"cameraSide",description:"Camera: Side view"},"Shift+3":{action:"cameraCloseUp",description:"Camera: Close-up view"},"Shift+4":{action:"cameraWide",description:"Camera: Wide view"},"Shift+5":{action:"cameraCinematic",description:"Camera: Cinematic view"},"Shift+6":{action:"cameraLow",description:"Camera: Low angle view"}},KA={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1.2}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
      float vignette = 1.0 - dot(uv, uv);
      vignette = clamp(pow(vignette, darkness), 0.0, 1.0);
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `},ZA={uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.05}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float intensity;
    varying vec2 vUv;

    float random(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float noise = random(vUv + time) * 2.0 - 1.0;
      vec3 result = texel.rgb + texel.rgb * noise * intensity;
      gl_FragColor = vec4(result, texel.a);
    }
  `},JA={uniforms:{tDiffuse:{value:null},uIntensity:{value:.003},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uIntensity;
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      // Radial chromatic aberration - stronger at edges
      vec2 center = vUv - 0.5;
      float dist = length(center);
      vec2 offset = center * uIntensity * dist;
      
      // Slight animation for subtle movement
      float animOffset = sin(uTime * 0.5) * 0.0005;
      offset += animOffset;
      
      // Sample RGB channels with offset
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `},eC={"Northern Lights":{strength:1.5,radius:.6,threshold:.3},"Deep Ocean":{strength:1.8,radius:.5,threshold:.2},"Solar Corona":{strength:2.2,radius:.7,threshold:.1},Synthwave:{strength:2,radius:.5,threshold:.2},"Monochrome Zen":{strength:1.2,radius:.4,threshold:.4},"Ember & Ash":{strength:1.8,radius:.6,threshold:.2}};class tC{constructor(e,n,i=256){this.renderer=e,this.scene=n,this.SIZE=i,this.count=this.SIZE*this.SIZE,this.initComputeRenderer(),this.initParticles()}initComputeRenderer(){this.gpuCompute=new YA(this.SIZE,this.SIZE,this.renderer),this.renderer.capabilities.isWebGL2||console.warn("WebGL2 not supported, GPGPU may not work");const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",this.getPositionShader(),e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",this.getVelocityShader(),n),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.uTime={value:0},this.positionUniforms.uDelta={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uDelta={value:0},this.velocityUniforms.uNoiseScale={value:.5},this.velocityUniforms.uNoiseSpeed={value:.2},this.velocityUniforms.uSimulationMode={value:0},this.velocityUniforms.uFlowDamping={value:.98},this.velocityUniforms.uFlowMaxSpeed={value:8},this.velocityUniforms.uBoidsSeparation={value:1.5},this.velocityUniforms.uBoidsAlignment={value:1},this.velocityUniforms.uBoidsCohesion={value:1},this.velocityUniforms.uBoidsNeighborRadius={value:2},this.velocityUniforms.uBoidsMaxSpeed={value:4},this.velocityUniforms.uNbodyGravConstant={value:.5},this.velocityUniforms.uNbodySoftening={value:.5},this.velocityUniforms.uNbodyDamping={value:.999},this.velocityUniforms.uStructureMasses={value:new Array(8).fill(1)},this.velocityUniforms.uAttractorPositions={value:Array.from({length:16},()=>new L(0,0,0))},this.velocityUniforms.uAttractorStrengths={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorTypes={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorRadii={value:new Array(16).fill(3)},this.velocityUniforms.uAttractorCount={value:0},this.velocityUniforms.uGravityDir={value:new L(0,-1,0)},this.velocityUniforms.uGravityStrength={value:0},this.velocityUniforms.uShockwaveOrigins={value:Array.from({length:5},()=>new L(0,0,0))},this.velocityUniforms.uShockwaveRadii={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveStrengths={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveThicknesses={value:new Array(5).fill(2)},this.velocityUniforms.uShockwaveCount={value:0},this.velocityUniforms.uStructurePositions={value:Array.from({length:8},()=>new L(0,0,0))},this.velocityUniforms.uStructureRadii={value:new Array(8).fill(0)},this.velocityUniforms.uStructureCount={value:0};const i=this.gpuCompute.init();i!==null&&console.error("GPUComputationRenderer error:",i)}fillPositionTexture(e){const n=e.image.data,i=5;for(let r=0;r<n.length;r+=4){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=Math.cbrt(Math.random())*i;n[r+0]=a*Math.sin(o)*Math.cos(s),n[r+1]=a*Math.sin(o)*Math.sin(s),n[r+2]=a*Math.cos(o),n[r+3]=Math.random()*5+2}}fillVelocityTexture(e){const n=e.image.data;for(let i=0;i<n.length;i+=4)n[i+0]=(Math.random()-.5)*.5,n[i+1]=(Math.random()-.5)*.5,n[i+2]=(Math.random()-.5)*.5,n[i+3]=1}getPositionShader(){return`
      uniform float uTime;
      uniform float uDelta;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        // Update position
        pos.xyz += vel.xyz * uDelta;

        // Decrease lifetime
        pos.w -= uDelta;

        // Respawn if dead
        if (pos.w <= 0.0) {
          // Respawn at random position in sphere
          float theta = fract(sin(uv.x * 123.456 + uTime) * 43758.5453) * 6.28318;
          float phi = acos(2.0 * fract(sin(uv.y * 789.012 + uTime) * 43758.5453) - 1.0);
          float r = pow(fract(sin((uv.x + uv.y) * 456.789 + uTime) * 43758.5453), 0.333) * 3.0;

          pos.x = r * sin(phi) * cos(theta);
          pos.y = r * sin(phi) * sin(theta);
          pos.z = r * cos(phi);
          pos.w = 3.0 + fract(sin(uv.x * uv.y * 999.0 + uTime) * 43758.5453) * 4.0;
        }

        gl_FragColor = pos;
      }
    `}getVelocityShader(){return`
      uniform float uTime;
      uniform float uDelta;
      uniform float uNoiseScale;
      uniform float uNoiseSpeed;

      // Simulation mode: 0=flow, 1=boids, 2=nbody
      uniform int uSimulationMode;

      // Flow mode parameters
      uniform float uFlowDamping;
      uniform float uFlowMaxSpeed;

      // Boids parameters
      uniform float uBoidsSeparation;
      uniform float uBoidsAlignment;
      uniform float uBoidsCohesion;
      uniform float uBoidsNeighborRadius;
      uniform float uBoidsMaxSpeed;

      // N-Body parameters
      uniform float uNbodyGravConstant;
      uniform float uNbodySoftening;
      uniform float uNbodyDamping;
      uniform float uStructureMasses[8];

      // Multi-attractor system (up to 16 attractors)
      uniform vec3 uAttractorPositions[16];
      uniform float uAttractorStrengths[16];
      uniform int uAttractorTypes[16]; // 0=point, 1=vortex, 2=orbit, 3=repulsor
      uniform float uAttractorRadii[16];
      uniform int uAttractorCount;

      // Gravity uniforms
      uniform vec3 uGravityDir;
      uniform float uGravityStrength;

      // Multi-shockwave uniforms (up to 5 shockwaves)
      uniform vec3 uShockwaveOrigins[5];
      uniform float uShockwaveRadii[5];
      uniform float uShockwaveStrengths[5];
      uniform float uShockwaveThicknesses[5];
      uniform int uShockwaveCount;

      // Structure force fields (up to 8 structures)
      uniform vec3 uStructurePositions[8];
      uniform float uStructureRadii[8];
      uniform int uStructureCount;

      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
      }

      vec3 curlNoise(vec3 p) {
        const float e = 0.1;
        float n1 = snoise(p + vec3(e, 0, 0));
        float n2 = snoise(p - vec3(e, 0, 0));
        float n3 = snoise(p + vec3(0, e, 0));
        float n4 = snoise(p - vec3(0, e, 0));
        float n5 = snoise(p + vec3(0, 0, e));
        float n6 = snoise(p - vec3(0, 0, e));

        float x = (n3 - n4) - (n5 - n6);
        float y = (n5 - n6) - (n1 - n2);
        float z = (n1 - n2) - (n3 - n4);

        return normalize(vec3(x, y, z));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        vec3 acceleration = vec3(0.0);
        float damping = uFlowDamping;
        float maxSpeed = uFlowMaxSpeed;

        // BOIDS MODE (Flocking simulation)
        if (uSimulationMode == 1) {
          vec3 separation = vec3(0.0);
          vec3 alignment = vec3(0.0);
          vec3 cohesion = vec3(0.0);
          int neighborCount = 0;

          // Sample 16 neighbors using pseudo-random offsets
          for (int i = 0; i < 16; i++) {
            float fi = float(i);
            vec2 neighborUV = fract(uv + vec2(fi * 0.618033, fi * 0.381966));
            vec4 neighborPos = texture2D(texturePosition, neighborUV);
            vec4 neighborVel = texture2D(textureVelocity, neighborUV);

            vec3 toNeighbor = neighborPos.xyz - pos.xyz;
            float dist = length(toNeighbor);

            if (dist < uBoidsNeighborRadius && dist > 0.01) {
              // Separation: avoid crowding neighbors
              if (dist < uBoidsNeighborRadius * 0.5) {
                separation -= normalize(toNeighbor) / max(dist, 0.01);
              }

              // Alignment: steer toward average heading
              alignment += neighborVel.xyz;

              // Cohesion: steer toward center of mass
              cohesion += neighborPos.xyz;

              neighborCount++;
            }
          }

          if (neighborCount > 0) {
            alignment /= float(neighborCount);
            cohesion = cohesion / float(neighborCount) - pos.xyz;
          }

          // Apply weighted forces
          acceleration += separation * uBoidsSeparation;
          acceleration += alignment * uBoidsAlignment * 0.1;
          acceleration += cohesion * uBoidsCohesion * 0.1;

          // Light curl noise for organic feel (20% strength)
          vec3 noisePos = pos.xyz * uNoiseScale + uTime * uNoiseSpeed;
          vec3 curl = curlNoise(noisePos);
          acceleration += curl * 0.4;

          // Containment force - push back toward origin when far
          float distFromOrigin = length(pos.xyz);
          if (distFromOrigin > 8.0) {
            acceleration -= normalize(pos.xyz) * (distFromOrigin - 8.0) * 0.5;
          }

          maxSpeed = uBoidsMaxSpeed;
        }
        // N-BODY MODE (Gravitational simulation)
        else if (uSimulationMode == 2) {
          // Structures act as massive bodies
          for (int i = 0; i < 8; i++) {
            if (i >= uStructureCount) break;

            vec3 toStructure = uStructurePositions[i] - pos.xyz;
            float dist = length(toStructure);

            if (dist > 0.1) {
              vec3 dir = normalize(toStructure);
              float mass = uStructureMasses[i];
              // F = G * M / (r^2 + softening)
              float force = uNbodyGravConstant * mass / (dist * dist + uNbodySoftening);
              acceleration += dir * force;
            }
          }

          // Weak inter-particle gravity (sample 8 nearby particles)
          for (int i = 0; i < 8; i++) {
            float fi = float(i);
            vec2 neighborUV = fract(uv + vec2(fi * 0.707107, fi * 0.292893));
            vec4 neighborPos = texture2D(texturePosition, neighborUV);

            vec3 toNeighbor = neighborPos.xyz - pos.xyz;
            float dist = length(toNeighbor);

            if (dist > 0.1 && dist < 3.0) {
              vec3 dir = normalize(toNeighbor);
              float force = 0.001 / (dist * dist + 0.1);
              acceleration += dir * force;
            }
          }

          // No curl noise in n-body mode
          damping = uNbodyDamping; // Preserve orbital energy
          maxSpeed = 20.0; // Higher speed limit for orbital motion
        }
        // FLOW MODE (Default - attractors + noise)
        else {
          // Multi-attractor forces
          for (int i = 0; i < 16; i++) {
            if (i >= uAttractorCount) break;

            vec3 toAttractor = uAttractorPositions[i] - pos.xyz;
            float dist = length(toAttractor);

            if (dist > 0.1) {
              vec3 dir = normalize(toAttractor);
              float strength = uAttractorStrengths[i];
              float radius = uAttractorRadii[i];

              if (uAttractorTypes[i] == 0) {
                // Point attractor - standard inverse square falloff
                acceleration += dir * strength / (dist * dist + 0.5);
              } else if (uAttractorTypes[i] == 1) {
                // Vortex - tangential force with weak radial pull
                vec3 tangent = normalize(cross(dir, vec3(0.0, 1.0, 0.0)));
                if (length(tangent) < 0.1) {
                  tangent = normalize(cross(dir, vec3(1.0, 0.0, 0.0)));
                }
                acceleration += tangent * strength / (dist + 0.5);
                acceleration += dir * strength * 0.2 / (dist * dist + 0.5); // weak pull
              } else if (uAttractorTypes[i] == 2) {
                // Orbit - force toward attractor that weakens inside radius (stable orbit)
                float radiusFactor = smoothstep(0.0, radius, dist);
                acceleration += dir * strength * radiusFactor / (dist * dist + 0.5);
              } else if (uAttractorTypes[i] == 3) {
                // Repulsor - push away from attractor
                acceleration -= dir * strength / (dist * dist + 0.5);
              }
            }
          }

          // Gravity force
          if (uGravityStrength > 0.001) {
            acceleration += uGravityDir * uGravityStrength;
          }

          // Structure force fields - deflection/repulsion
          for (int i = 0; i < 8; i++) {
            if (i >= uStructureCount) break;

            vec3 toParticle = pos.xyz - uStructurePositions[i];
            float dist = length(toParticle);
            float radius = uStructureRadii[i];

            // If particle is within 1.3x structure radius, push it away
            if (dist < radius * 1.3) {
              vec3 pushDir = normalize(toParticle);
              float penetration = radius * 1.3 - dist;
              float repulsionStrength = 5.0;
              acceleration += pushDir * repulsionStrength * penetration / max(dist - radius, 0.1);
            }
          }

          // Curl noise for organic movement
          vec3 noisePos = pos.xyz * uNoiseScale + uTime * uNoiseSpeed;
          vec3 curl = curlNoise(noisePos);
          acceleration += curl * 2.0;
        }

        // Multi-shockwave forces (active in all modes)
        for (int i = 0; i < 5; i++) {
          if (i >= uShockwaveCount) break;

          if (uShockwaveStrengths[i] > 0.01) {
            vec3 toParticle = pos.xyz - uShockwaveOrigins[i];
            float particleDist = length(toParticle);

            float shellDist = abs(particleDist - uShockwaveRadii[i]);

            if (shellDist < uShockwaveThicknesses[i]) {
              float shellFalloff = 1.0 - (shellDist / uShockwaveThicknesses[i]);
              shellFalloff = shellFalloff * shellFalloff;

              vec3 pushDir = normalize(toParticle);
              vec3 tangent = normalize(cross(pushDir, vec3(0.0, 1.0, 0.0)));
              if (length(tangent) < 0.1) {
                tangent = normalize(cross(pushDir, vec3(1.0, 0.0, 0.0)));
              }

              vec3 shockForce = pushDir * uShockwaveStrengths[i] * shellFalloff;
              shockForce += tangent * uShockwaveStrengths[i] * shellFalloff * 0.3;

              acceleration += shockForce;
            }
          }
        }

        // Apply acceleration
        vel.xyz += acceleration * uDelta;

        // Damping
        vel.xyz *= damping;

        // Speed limit
        float speed = length(vel.xyz);
        if (speed > maxSpeed) {
          vel.xyz = normalize(vel.xyz) * maxSpeed;
        }

        // Reset velocity if particle respawned
        if (pos.w <= 0.0) {
          vel.xyz = vec3(0.0);
        }

        gl_FragColor = vel;
      }
    `}initParticles(){const e=new Jt,n=new Float32Array(this.count*3),i=new Float32Array(this.count*2);for(let s=0;s<this.count;s++){const o=s%this.SIZE/this.SIZE,a=Math.floor(s/this.SIZE)/this.SIZE;i[s*2+0]=o,i[s*2+1]=a,n[s*3+0]=0,n[s*3+1]=0,n[s*3+2]=0}e.setAttribute("position",new Bn(n,3)),e.setAttribute("reference",new Bn(i,2));const r=new Gt({uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uTime:{value:0},uColor1:{value:new Ae(65450)},uColor2:{value:new Ae(43775)},uColor3:{value:new Ae(11163135)},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:4},uColorMode:{value:0}},vertexShader:`
        uniform sampler2D texturePosition;
        uniform sampler2D textureVelocity;
        uniform float uPixelRatio;
        uniform float uSize;
        uniform float uTime;
        uniform int uColorMode; // 0=speed, 1=direction, 2=acceleration

        attribute vec2 reference;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vLife;

        // HSV to RGB conversion for direction-based coloring
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }

        void main() {
          vec4 pos = texture2D(texturePosition, reference);
          vec4 vel = texture2D(textureVelocity, reference);

          float life = pos.w / 7.0; // Normalize
          float speed = length(vel.xyz);

          // Life-based alpha
          vAlpha = smoothstep(0.0, 0.15, life) * smoothstep(1.0, 0.7, life);
          vLife = life;

          // Color based on mode
          if (uColorMode == 1) {
            // Direction-based: map velocity direction to hue
            vec3 velDir = normalize(vel.xyz);
            float hue = atan(velDir.z, velDir.x) / 6.28318 + 0.5;
            float saturation = 0.8;
            float value = 0.5 + speed * 0.3;
            vColor = hsv2rgb(vec3(hue, saturation, value));
          } else if (uColorMode == 2) {
            // Acceleration-based: highlight changes
            // Approximate acceleration by speed variation
            float accelHighlight = smoothstep(2.0, 6.0, speed);
            vColor = mix(
              vec3(0.0, 0.5, 1.0), // Blue for low acceleration
              vec3(1.0, 0.3, 0.0), // Orange for high acceleration
              accelHighlight
            );
          } else {
            // Speed-based (default)
            float colorMix = clamp(speed * 0.3, 0.0, 1.0);
            vColor = mix(vec3(0.0, 1.0, 0.67), vec3(1.0, 0.4, 0.2), colorMix);
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos.xyz, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size with attenuation
          float sizeAtten = 200.0 / -mvPosition.z;
          gl_PointSize = uSize * sizeAtten * uPixelRatio * (0.5 + speed * 0.2);
          gl_PointSize = max(gl_PointSize, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        varying float vLife;

        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);

          // Soft glow with bright core
          float core = exp(-dist * 10.0) * 1.5;
          float glow = exp(-dist * 4.0);
          float outer = exp(-dist * 2.0) * 0.4;

          float intensity = core + glow * 0.5 + outer * 0.2;
          intensity *= smoothstep(0.5, 0.15, dist);

          // Pulse
          intensity *= 0.9 + sin(vLife * 15.0) * 0.1;

          vec3 finalColor = vColor * intensity;
          float finalAlpha = vAlpha * intensity;

          if (finalAlpha < 0.01) discard;

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,transparent:!0,blending:Or,depthWrite:!1});this.particles=new qy(e,r),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,n){const i=Math.min(e,.05);this.positionUniforms.uTime.value=n,this.positionUniforms.uDelta.value=i,this.velocityUniforms.uTime.value=n,this.velocityUniforms.uDelta.value=i,this.gpuCompute.compute(),this.particles.material.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.particles.material.uniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture,this.particles.material.uniforms.uTime.value=n}setAttractors(e){const n=Math.min(e.length,16);this.velocityUniforms.uAttractorCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uAttractorPositions.value[i].copy(r.position),this.velocityUniforms.uAttractorStrengths.value[i]=r.strength;const s={point:0,vortex:1,orbit:2,repulsor:3};this.velocityUniforms.uAttractorTypes.value[i]=s[r.type]||0,this.velocityUniforms.uAttractorRadii.value[i]=r.radius||3}for(let i=n;i<16;i++)this.velocityUniforms.uAttractorStrengths.value[i]=0}setGravity(e,n){this.velocityUniforms.uGravityDir.value.copy(e),this.velocityUniforms.uGravityStrength.value=n}setShockwaves(e){const n=Math.min(e.length,5);this.velocityUniforms.uShockwaveCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uShockwaveOrigins.value[i].copy(r.origin),this.velocityUniforms.uShockwaveRadii.value[i]=r.radius,this.velocityUniforms.uShockwaveStrengths.value[i]=r.strength,this.velocityUniforms.uShockwaveThicknesses.value[i]=r.thickness}for(let i=n;i<5;i++)this.velocityUniforms.uShockwaveStrengths.value[i]=0}setStructures(e){const n=Math.min(e.length,8);this.velocityUniforms.uStructureCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uStructurePositions.value[i].copy(r.position),this.velocityUniforms.uStructureRadii.value[i]=r.radius}for(let i=n;i<8;i++)this.velocityUniforms.uStructureRadii.value[i]=0}setColors(e,n,i){this.particles.material.uniforms.uColor1.value.set(e),this.particles.material.uniforms.uColor2.value.set(n),this.particles.material.uniforms.uColor3.value.set(i)}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}class K0{constructor(e,n,i="point"){this.position=e.clone(),this.strength=n,this.type=i,this.active=!0,this.radius=3,this.vortexAxis=new L(0,1,0)}setPosition(e){this.position.copy(e)}toUniformData(){const e={point:0,vortex:1,orbit:2,repulsor:3};return{position:this.position,strength:this.active?this.strength:0,type:e[this.type]||0,radius:this.radius}}}class nC{constructor(e=5){this.shockwaves=[],this.maxShockwaves=e}trigger(e,n=10,i=2,r=8){this.shockwaves.length>=this.maxShockwaves&&this.shockwaves.shift(),this.shockwaves.push({origin:e.clone(),radius:.1,strength:n,thickness:i,expansionSpeed:r,decay:.92,active:!0})}update(e){for(let n=this.shockwaves.length-1;n>=0;n--){const i=this.shockwaves[n];i.radius+=i.expansionSpeed*e,i.strength*=i.decay,(i.radius>25||i.strength<.05)&&this.shockwaves.splice(n,1)}}getActiveShockwave(){if(this.shockwaves.length===0)return{origin:new L(0,0,0),radius:0,strength:0,thickness:1};let e=this.shockwaves[0];for(const n of this.shockwaves)n.strength>e.strength&&(e=n);return e}getAllShockwaves(){return this.shockwaves}hasActive(){return this.shockwaves.length>0}clear(){this.shockwaves=[]}}class iC{constructor(e,n={}){this.scene=e,this.config={size:128,gridScale:20,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:"#00ffaa",color2:"#00aaff",color3:"#aa55ff",opacity:.6,particleSize:2,yOffset:-5,...n},this.time=0,this.visible=!0,this.createGrid(),this.scene.add(this.mesh)}createGrid(){const e=this.config.size,n=this.config.gridScale,i=new Jt,r=new Float32Array(e*e*3),s=new Float32Array(e*e*2);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=a*e+l;r[c*3+0]=(a/e-.5)*n,r[c*3+1]=0,r[c*3+2]=(l/e-.5)*n,s[c*2+0]=a/e,s[c*2+1]=l/e}i.setAttribute("position",new Bn(r,3)),i.setAttribute("uv",new Bn(s,2));const o=new Gt({uniforms:{uTime:{value:0},uWaveAmplitude:{value:this.config.waveAmplitude},uWaveFrequency:{value:this.config.waveFrequency},uWaveSpeed:{value:this.config.waveSpeed},uColor1:{value:new Ae(this.config.color1)},uColor2:{value:new Ae(this.config.color2)},uColor3:{value:new Ae(this.config.color3)},uOpacity:{value:this.config.opacity},uSize:{value:this.config.particleSize},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uYOffset:{value:this.config.yOffset}},vertexShader:`
        uniform float uTime;
        uniform float uWaveAmplitude;
        uniform float uWaveFrequency;
        uniform float uWaveSpeed;
        uniform float uSize;
        uniform float uPixelRatio;
        uniform float uYOffset;

        varying float vHeight;
        varying vec2 vUv;

        // Simplex noise for organic waves
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
        }

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Multiple wave layers for organic motion
          float wave1 = sin(pos.x * uWaveFrequency + uTime * uWaveSpeed) * uWaveAmplitude;
          float wave2 = sin(pos.z * uWaveFrequency * 0.8 + uTime * uWaveSpeed * 1.2) * uWaveAmplitude * 0.7;
          float wave3 = snoise(vec3(pos.xz * 0.3, uTime * 0.2)) * uWaveAmplitude * 0.5;
          float wave4 = snoise(vec3(pos.xz * 0.15, uTime * 0.1)) * uWaveAmplitude * 0.8;

          // Combine waves
          pos.y = wave1 + wave2 + wave3 + wave4 + uYOffset;

          // Normalize height for color mapping
          vHeight = (pos.y - uYOffset) / (uWaveAmplitude * 3.0) * 0.5 + 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size with distance attenuation
          float sizeAtten = 300.0 / -mvPosition.z;
          gl_PointSize = uSize * sizeAtten * uPixelRatio;
          gl_PointSize = max(gl_PointSize, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uOpacity;
        uniform float uTime;

        varying float vHeight;
        varying vec2 vUv;

        void main() {
          // Distance from center of point
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);

          // Soft circular falloff
          float alpha = smoothstep(0.5, 0.2, dist);
          
          // Add glow
          float glow = exp(-dist * 4.0) * 0.8;
          alpha = max(alpha, glow);

          // Three-way color blend based on height
          vec3 color;
          if (vHeight < 0.5) {
            color = mix(uColor1, uColor2, vHeight * 2.0);
          } else {
            color = mix(uColor2, uColor3, (vHeight - 0.5) * 2.0);
          }

          // Add subtle pulse
          float pulse = sin(uTime * 2.0 + vUv.x * 10.0 + vUv.y * 10.0) * 0.1 + 0.9;
          color *= pulse;

          if (alpha < 0.01) discard;

          gl_FragColor = vec4(color, alpha * uOpacity);
        }
      `,transparent:!0,blending:Or,depthWrite:!1});this.mesh=new qy(i,o),this.mesh.frustumCulled=!1}update(e,n=1){this.time+=e*n,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uTime.value=this.time)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e)}setColors(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uColor1.value.set(e),this.mesh.material.uniforms.uColor2.value.set(n),this.mesh.material.uniforms.uColor3.value.set(i))}setWaveParams(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uWaveAmplitude.value=e,this.mesh.material.uniforms.uWaveFrequency.value=n,this.mesh.material.uniforms.uWaveSpeed.value=i)}setOpacity(e){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uOpacity.value=e)}setParticleSize(e){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uSize.value=e)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh))}}class rC{constructor(e){this.frameHistory=[],this.historyLength=60,this.currentQuality="high",this.onQualityChange=e,this.cooldown=0,this.enabled=!0,this.lastFps=60,this.presets={ultra:{particleSize:512,waveSize:192,bloom:!0,bloomStrength:2,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:55},high:{particleSize:384,waveSize:128,bloom:!0,bloomStrength:1.5,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:50},medium:{particleSize:256,waveSize:96,bloom:!0,bloomStrength:1.2,chromatic:!1,filmGrain:!1,fxaa:!0,targetFps:40},low:{particleSize:192,waveSize:64,bloom:!0,bloomStrength:1,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:30},potato:{particleSize:128,waveSize:48,bloom:!1,bloomStrength:0,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:25}},this.qualityLevels=["ultra","high","medium","low","potato"]}update(e){if(!this.enabled)return null;const n=e>0?Math.min(1/e,120):60;if(this.frameHistory.push(n),this.frameHistory.length>this.historyLength&&this.frameHistory.shift(),this.cooldown-=e,this.frameHistory.length===this.historyLength&&this.cooldown<=0){const i=this.frameHistory.reduce((s,o)=>s+o,0)/this.historyLength;this.lastFps=i;const r=this.presets[this.currentQuality];if(i<r.targetFps-10&&this.currentQuality!=="potato")return this.decreaseQuality();if(i>58&&this.currentQuality!=="ultra")return this.increaseQuality()}return null}decreaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e<this.qualityLevels.length-1?(this.currentQuality=this.qualityLevels[e+1],this.cooldown=3,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"decrease"}):null}increaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e>0?(this.currentQuality=this.qualityLevels[e-1],this.cooldown=5,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"increase"}):null}setQuality(e){return this.qualityLevels.includes(e)?(this.currentQuality=e,this.frameHistory=[],this.cooldown=2,this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),this.presets[this.currentQuality]):null}setEnabled(e){this.enabled=e}getCurrentPreset(){return this.presets[this.currentQuality]}getStats(){return{quality:this.currentQuality,fps:Math.round(this.lastFps),particleCount:Math.pow(this.presets[this.currentQuality].particleSize,2),cooldown:Math.max(0,this.cooldown).toFixed(1)}}}class wd{constructor(e,n){this.scene=e,this.config={type:"icosahedron",position:new L(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:"#00ffaa",...n},this.group=new ho,this.group.position.copy(this.config.position),this.time=Math.random()*100,this.energyOffset=Math.random()*Math.PI*2,this.createStructure(),this.scene.add(this.group)}createStructure(){for(;this.group.children.length;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}switch(this.config.type){case"icosahedron":this.createNestedIcosahedron();break;case"torus":this.createAnimatedTorus();break;case"rings":this.createConcentricRings();break;case"helix":this.createDNAHelix();break;case"mobius":this.createMobiusStrip();break;default:this.createNestedIcosahedron()}}createNestedIcosahedron(){const e=new Ae(this.config.color),n=new Np(1.5*this.config.scale,0),i=new _c(n);this.createGlowingEdges(i,e,1.5);const r=new Ip(.8*this.config.scale,this.config.complexity),s=new _c(r),o=this.createMaterial(e),a=new It(r,o);a.userData.isInner=!0,this.group.add(a),this.createGlowingEdges(s,e.clone().multiplyScalar(1.5),.8);const l=new Va(.3*this.config.scale,16,16),c=new Tn({color:e,transparent:!0,opacity:.5}),f=new It(l,c);f.userData.isCore=!0,this.group.add(f)}createAnimatedTorus(){const e=new Ae(this.config.color),n=new wa(1*this.config.scale,.3*this.config.scale,16,50),i=this.createMaterial(e),r=new It(n,i);this.group.add(r);for(let o=0;o<3;o++){const a=new wa(.5*this.config.scale,.05*this.config.scale,8,30),l=new Tn({color:e,transparent:!0,opacity:.8}),c=new It(a,l);c.rotation.x=o/3*Math.PI,c.userData.rotationOffset=o,this.group.add(c)}const s=new _c(n);this.createGlowingEdges(s,e,1)}createConcentricRings(){const e=new Ae(this.config.color);for(let s=0;s<4;s++){const o=(.5+s*.4)*this.config.scale,a=new wa(o,.03*this.config.scale,8,64),l=new Tn({color:e,transparent:!0,opacity:.9-s*.15}),c=new It(a,l);c.userData.ringIndex=s,c.rotation.x=Math.PI/2+(s%2===0?0:Math.PI/4),c.rotation.y=s/4*Math.PI/2,this.group.add(c)}const n=new Va(.2*this.config.scale,16,16),i=new Tn({color:e,transparent:!0,opacity:.8}),r=new It(n,i);r.userData.isCore=!0,this.group.add(r)}createDNAHelix(){const e=new Ae(this.config.color),n=[],i=[],r=[],s=4*this.config.scale,o=.5*this.config.scale,a=2,l=100;for(let p=0;p<=l;p++){const u=p/l,g=(u-.5)*s,v=u*a*Math.PI*2;n.push(new L(Math.cos(v)*o,g,Math.sin(v)*o)),i.push(new L(Math.cos(v+Math.PI)*o,g,Math.sin(v+Math.PI)*o)),p%10===0&&p>0&&p<l&&r.push({start:n[n.length-1].clone(),end:i[i.length-1].clone()})}const c=new fu(n),f=new fu(i),d=new No(c,l,.05*this.config.scale,8,!1),h=new No(f,l,.05*this.config.scale,8,!1),m=new Tn({color:e,transparent:!0,opacity:.9}),x=new It(d,m),y=new It(h,m.clone());this.group.add(x),this.group.add(y),r.forEach((p,u)=>{const g=new Up(.02*this.config.scale,.02*this.config.scale,p.start.distanceTo(p.end),8),v=new Tn({color:e.clone().multiplyScalar(.7),transparent:!0,opacity:.7}),_=new It(g,v),R=p.start.clone().add(p.end).multiplyScalar(.5);_.position.copy(R),_.lookAt(p.end),_.rotateX(Math.PI/2),_.userData.rungIndex=u,this.group.add(_)})}createMobiusStrip(){const e=new Ae(this.config.color),n=new Jt,i=[],r=[],s=[],o=[],a=1*this.config.scale,l=.4*this.config.scale,c=100,f=10;for(let x=0;x<=c;x++){const y=x/c*Math.PI*2;for(let p=0;p<=f;p++){const u=(p/f-.5)*l,g=(a+u*Math.cos(y/2))*Math.cos(y),v=(a+u*Math.cos(y/2))*Math.sin(y),_=u*Math.sin(y/2);i.push(g,v,_);const R=Math.cos(y)*Math.cos(y/2),b=Math.sin(y)*Math.cos(y/2),E=Math.sin(y/2);r.push(R,b,E),s.push(x/c,p/f)}}for(let x=0;x<c;x++)for(let y=0;y<f;y++){const p=x*(f+1)+y,u=p+f+1,g=p+1,v=u+1;o.push(p,u,g),o.push(u,v,g)}n.setAttribute("position",new vt(i,3)),n.setAttribute("normal",new vt(r,3)),n.setAttribute("uv",new vt(s,2)),n.setIndex(o);const d=this.createMaterial(e);d.side=si;const h=new It(n,d);this.group.add(h);const m=new _c(n,30);this.createGlowingEdges(m,e,1)}createGlowingEdges(e,n,i){e.attributes.position.array;for(let r=0;r<3;r++){const s=new Yy({color:n,transparent:!0,opacity:.6-r*.15,linewidth:1,blending:Or}),o=e.clone(),a=new hA(o,s);a.scale.setScalar(1+r*.02),a.userData.edgeLayer=r,this.group.add(a)}}createMaterial(e){switch(this.config.materialStyle){case"glass":return new G0({color:e,transparent:!0,opacity:.3,roughness:.1,metalness:.1,transmission:.9,thickness:.5});case"holographic":return new G0({color:e,transparent:!0,opacity:.4,roughness:.2,metalness:.8,iridescence:1,iridescenceIOR:1.5,sheen:1,sheenColor:e});case"solid":return new Tn({color:e,transparent:!0,opacity:.7});default:return new Tn({color:e,transparent:!0,opacity:.5})}}getBoundingRadius(){const e=this.config.scale||1,n=1+(this.config.pulseIntensity||.1),r={icosahedron:1.5,torus:1.3,rings:2.2,helix:2.5,mobius:1.2}[this.config.type]||1.5;return e*r*n}getPosition(){return this.group.position}update(e,n){this.time+=e*n,this.group.rotation.x+=this.config.rotationSpeed.x*e*n,this.group.rotation.y+=this.config.rotationSpeed.y*e*n,this.group.rotation.z+=this.config.rotationSpeed.z*e*n;const i=1+Math.sin(this.time*2)*this.config.pulseIntensity;this.group.scale.setScalar(i),this.group.children.forEach((r,s)=>{if(r.userData.isInner&&(r.rotation.y-=this.config.rotationSpeed.y*e*n*.5),r.userData.isCore){const o=1+Math.sin(this.time*4)*.2;r.scale.setScalar(o)}if(r.userData.ringIndex!==void 0){const o=r.userData.ringIndex*.5;r.rotation.z+=(.5+o*.2)*e*n}if(r.userData.rotationOffset!==void 0&&(r.rotation.x+=(1+r.userData.rotationOffset*.3)*e*n),r.userData.edgeLayer!==void 0){const o=Math.sin(this.time*3+this.energyOffset+r.userData.edgeLayer)*.3+.7;r.material.opacity=(.6-r.userData.edgeLayer*.15)*o}if(r.userData.rungIndex!==void 0){const o=Math.sin(this.time*5+r.userData.rungIndex*.5)*.3+.7;r.material.opacity=.7*o}})}setColor(e){this.config.color=e;const n=new Ae(e);this.group.children.forEach(i=>{i.material&&(i.material.color&&i.material.color.set(n),i.material.sheenColor&&i.material.sheenColor.set(n))})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class Td{constructor(e,n){this.scene=e,this.config={type:"helix",position:new L(0,0,0),animationSpeed:1,thickness:.1,glowIntensity:1,color:"#00ffaa",trailFade:2,...n},this.time=Math.random()*100,this.group=new ho,this.group.position.copy(this.config.position),this.createRibbon(),this.scene.add(this.group)}createRibbon(){for(;this.group.children.length;){const o=this.group.children[0];this.group.remove(o),o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}const e=this.generateCurvePoints();this.curve=new fu(e);const n=new No(this.curve,200,this.config.thickness,8,!1),i=new Ae(this.config.color),r=new Gt({uniforms:{color:{value:i},time:{value:0},glowIntensity:{value:this.config.glowIntensity}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        uniform float glowIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);

          // Flowing energy effect
          float flow = sin(vUv.x * 20.0 - time * 3.0) * 0.5 + 0.5;
          float pulse = sin(time * 2.0) * 0.2 + 0.8;

          vec3 finalColor = color * (1.0 + fresnel * glowIntensity) * (0.5 + flow * 0.5) * pulse;
          float alpha = (0.6 + fresnel * 0.4) * (0.3 + flow * 0.7);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,blending:Or,side:si,depthWrite:!1}),s=new It(n,r);s.userData.isMainRibbon=!0,this.group.add(s);for(let o=0;o<2;o++){const a=new No(this.curve,100,this.config.thickness*(2+o),8,!1),l=new Tn({color:i,transparent:!0,opacity:.1-o*.03,blending:Or,side:si,depthWrite:!1}),c=new It(a,l);c.userData.glowLayer=o,this.group.add(c)}}generateCurvePoints(){const e=[];switch(this.config.type){case"helix":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*6,o=2+Math.sin(r*Math.PI*2)*.5;e.push(new L(Math.cos(s)*o,(r-.5)*6,Math.sin(s)*o))}break;case"lissajous":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2;e.push(new L(Math.sin(3*r)*2,Math.sin(2*r)*2,Math.sin(5*r)*2))}break;case"toroidal":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2,s=3,o=2,a=.5*(2+Math.cos(o*r));e.push(new L(a*Math.cos(s*r)*1.5,a*Math.sin(s*r)*1.5,-Math.sin(o*r)*1.5))}break;case"spiral":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*8,o=.5+r*2;e.push(new L(Math.cos(s)*o,(r-.5)*4,Math.sin(s)*o))}break;default:for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*4;e.push(new L(Math.cos(s)*2,(r-.5)*4,Math.sin(s)*2))}}return e}update(e,n){this.time+=e*n*this.config.animationSpeed,this.group.children.forEach(i=>{if(i.userData.isMainRibbon&&i.material.uniforms&&(i.material.uniforms.time.value=this.time),i.userData.glowLayer!==void 0){const r=Math.sin(this.time*2+i.userData.glowLayer)*.02+.08;i.material.opacity=r}}),this.group.rotation.y+=.1*e*n}setColor(e){this.config.color=e;const n=new Ae(e);this.group.children.forEach(i=>{i.material.uniforms&&i.material.uniforms.color?i.material.uniforms.color.value=n:i.material.color&&i.material.color.set(n)})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class sC{constructor(e){this.scene=e,this.mesh=null,this.style="gradient",this.colors=["#0a0a1a","#051515","#0a1a1a"],this.createBackground()}createBackground(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());const e=new Va(100,32,32);let n;switch(this.style){case"solid":n=new Tn({color:0,side:on});break;case"gradient":n=new Gt({uniforms:{color1:{value:new Ae(this.colors[0])},color2:{value:new Ae(this.colors[1])},color3:{value:new Ae(this.colors[2])},time:{value:0}},vertexShader:`
            varying vec3 vPosition;
            void main() {
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform float time;
            varying vec3 vPosition;

            void main() {
              float y = (vPosition.y + 100.0) / 200.0;
              y = y + sin(time * 0.1 + vPosition.x * 0.02) * 0.05;

              vec3 color;
              if (y < 0.5) {
                color = mix(color1, color2, y * 2.0);
              } else {
                color = mix(color2, color3, (y - 0.5) * 2.0);
              }

              gl_FragColor = vec4(color, 1.0);
            }
          `,side:on});break;case"nebula":n=new Gt({uniforms:{color1:{value:new Ae(this.colors[0])},color2:{value:new Ae(this.colors[1])},color3:{value:new Ae(this.colors[2]||this.colors[1])},time:{value:0}},vertexShader:`
            varying vec3 vPosition;
            varying vec2 vUv;
            void main() {
              vPosition = position;
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform float time;
            varying vec3 vPosition;
            varying vec2 vUv;

            // Simplex noise functions
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

            float snoise(vec3 v) {
              const vec2 C = vec2(1.0/6.0, 1.0/3.0);
              const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

              vec3 i  = floor(v + dot(v, C.yyy));
              vec3 x0 = v - i + dot(i, C.xxx);

              vec3 g = step(x0.yzx, x0.xyz);
              vec3 l = 1.0 - g;
              vec3 i1 = min(g.xyz, l.zxy);
              vec3 i2 = max(g.xyz, l.zxy);

              vec3 x1 = x0 - i1 + C.xxx;
              vec3 x2 = x0 - i2 + C.yyy;
              vec3 x3 = x0 - D.yyy;

              i = mod289(i);
              vec4 p = permute(permute(permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

              float n_ = 0.142857142857;
              vec3 ns = n_ * D.wyz - D.xzx;

              vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

              vec4 x_ = floor(j * ns.z);
              vec4 y_ = floor(j - 7.0 * x_);

              vec4 x = x_ *ns.x + ns.yyyy;
              vec4 y = y_ *ns.x + ns.yyyy;
              vec4 h = 1.0 - abs(x) - abs(y);

              vec4 b0 = vec4(x.xy, y.xy);
              vec4 b1 = vec4(x.zw, y.zw);

              vec4 s0 = floor(b0)*2.0 + 1.0;
              vec4 s1 = floor(b1)*2.0 + 1.0;
              vec4 sh = -step(h, vec4(0.0));

              vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
              vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

              vec3 p0 = vec3(a0.xy, h.x);
              vec3 p1 = vec3(a0.zw, h.y);
              vec3 p2 = vec3(a1.xy, h.z);
              vec3 p3 = vec3(a1.zw, h.w);

              vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
              p0 *= norm.x;
              p1 *= norm.y;
              p2 *= norm.z;
              p3 *= norm.w;

              vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
              m = m * m;
              return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
            }

            void main() {
              vec3 pos = vPosition * 0.01;

              // Multi-octave noise for rich nebula texture
              float n1 = snoise(pos + time * 0.02) * 0.5 + 0.5;
              float n2 = snoise(pos * 2.0 + time * 0.03) * 0.25 + 0.25;
              float n3 = snoise(pos * 4.0 - time * 0.01) * 0.125 + 0.125;
              float n4 = snoise(pos * 8.0 + time * 0.05) * 0.0625;

              float noise = n1 + n2 + n3 + n4;
              noise = pow(noise, 1.5); // Contrast boost

              // Three-way color blend for richer gradients
              vec3 color;
              if (noise < 0.5) {
                color = mix(color1, color2, noise * 2.0);
              } else {
                color = mix(color2, color3, (noise - 0.5) * 2.0);
              }

              // Add subtle animated stars
              float starNoise = snoise(pos * 100.0 + time * 0.1);
              float stars = pow(max(starNoise, 0.0), 20.0) * 0.5;
              color += vec3(stars);

              // Add subtle color variation based on position
              float colorVariation = snoise(pos * 0.5 + time * 0.005) * 0.1;
              color += colorVariation;

              // Vignette darkening at edges
              float vignette = 1.0 - length(vPosition.xy) * 0.003;
              vignette = clamp(vignette, 0.5, 1.0);
              color *= vignette;

              gl_FragColor = vec4(color, 1.0);
            }
          `,side:on});break;default:n=new Tn({color:328976,side:on})}this.mesh=new It(e,n),this.scene.add(this.mesh)}setStyle(e){this.style=e,this.createBackground()}setColors(e){this.colors=e,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.color1&&(this.mesh.material.uniforms.color1.value=new Ae(e[0])),this.mesh.material.uniforms.color2&&(this.mesh.material.uniforms.color2.value=new Ae(e[1])),this.mesh.material.uniforms.color3&&(this.mesh.material.uniforms.color3.value=new Ae(e[2])))}update(e){this.mesh&&this.mesh.material.uniforms&&this.mesh.material.uniforms.time&&(this.mesh.material.uniforms.time.value=e)}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}}class oC{constructor(){this.audioContext=null,this.analyser=null,this.dataArray=null,this.source=null,this.active=!1,this.smoothing=.8}async connectMicrophone(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});return this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(e),this.source.connect(this.analyser),this.active=!0,{success:!0}}catch(e){return console.error("Failed to access microphone:",e),{success:!1,error:e.message}}}connectAudioElement(e){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaElementSource(e),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.active=!0}getFrequencyData(){return!this.active||!this.analyser?{bass:0,mid:0,high:0,overall:0}:(this.analyser.getByteFrequencyData(this.dataArray),{bass:this.getRange(0,10)/255,mid:this.getRange(10,50)/255,high:this.getRange(50,128)/255,overall:this.getOverallVolume()/255})}getRange(e,n){let i=0;for(let r=e;r<n&&r<this.dataArray.length;r++)i+=this.dataArray[r];return i/(n-e)}getOverallVolume(){let e=0;for(let n=0;n<this.dataArray.length;n++)e+=this.dataArray[n];return e/this.dataArray.length}detectBeat(e=.7){return this.getRange(0,10)/255>e}disconnect(){this.source&&this.source.disconnect(),this.audioContext&&this.audioContext.close(),this.active=!1}setSmoothing(e){this.smoothing=e,this.analyser&&(this.analyser.smoothingTimeConstant=e)}}function aC(){var jp,Xp,Yp,qp,$p;const t=F.useRef(null),e=F.useRef(null),n=F.useRef(null),i=F.useRef(null),r=F.useRef(null),s=F.useRef(null),o=F.useRef(new Ky),a=F.useRef(null),l=F.useRef(null),c=F.useRef(null),f=F.useRef([]),d=F.useRef([]),h=F.useRef(null),m=F.useRef(null),x=F.useRef(null),y=F.useRef(null),p=F.useRef(null),u=F.useRef(null),g=F.useRef(null),v=F.useRef(null),_=F.useRef({active:!1,startPos:new L,endPos:new L,startTarget:new L,endTarget:new L,startFov:75,endFov:75,progress:0,duration:1.5}),R=F.useRef({intensity:0,decay:.9});F.useRef({active:!1,params:{},targets:{},progress:0,duration:1});const b=F.useRef({active:!1,currentColors:null,targetColors:null,progress:0,duration:1}),E=F.useRef(null),U=F.useRef(null),S=F.useRef(new UA),T=F.useRef(new he),V=F.useRef(0),W=F.useRef(null),ie=F.useRef(!1),I=F.useRef(new L),G=F.useRef(null),K=F.useRef(0),J=F.useRef(null),O=F.useRef(null),B=F.useRef(null),Y=F.useRef(!1),te=F.useRef(0),ee=F.useRef(null),Z=F.useRef([]),ne=F.useRef(!0),xe=F.useRef(!0),Ce=F.useRef(4),[be,je]=F.useState(!0),[Xe,ze]=F.useState(!1),[lt,X]=F.useState(!1),[Yt,Ie]=F.useState(!1),[Ye,Le]=F.useState(!1),[Mt,Ze]=F.useState(!1),[P,M]=F.useState(()=>{try{return localStorage.getItem("luminousflow_onboarded")!=="true"}catch{return!0}}),[H,le]=F.useState(1),[oe,ae]=F.useState([]),De=F.useRef(!1),[me,we]=F.useState(1),[Fe,$e]=F.useState(1),[se,dt]=F.useState("down"),[Je,Ge]=F.useState(.5),[Pe,_e]=F.useState(1.5),[D,ce]=F.useState("gradient"),[ge,Se]=F.useState("Northern Lights"),[re,N]=F.useState(!0),[fe,ye]=F.useState(.5),[Be,Oe]=F.useState(!1),[et,it]=F.useState(!1),[xt,Et]=F.useState(!0),[rt,Pt]=F.useState(.003),[pn,Hr]=F.useState(!0),[tr,Mi]=F.useState(!0),[nr,ir]=F.useState(4),[Ei,rr]=F.useState(!0),[sr,Es]=F.useState(1),[or,C]=F.useState(1),[z,Q]=F.useState("high"),[q,$]=F.useState(!0),[Te,Ue]=F.useState(60),[He,Ve]=F.useState(65536),[tt,Qe]=F.useState(null),[nt,Lt]=F.useState(!1),[ln,Vt]=F.useState(!1),[en,_t]=F.useState(!1),[ot,ws]=F.useState("none"),[Dt,Ni]=F.useState(0),[tl,Gr]=F.useState(0),[Bo,tn]=F.useState(0),[wi,Ho]=F.useState(.7),[qt,Ts]=F.useState(!1),[ar,Vr]=F.useState(2),[bs,nl]=F.useState(1.5),[il,Nu]=F.useState(8),[rl,Iu]=F.useState(.98),[sl,Fu]=F.useState(.5),[ol,Ou]=F.useState(.2),[ku,zu]=F.useState(8),[As,Bu]=F.useState(.5),[Go,Hu]=F.useState(.5),[Vo,Gu]=F.useState(2.5),[al,Vu]=F.useState(.8),[ll,Wu]=F.useState(0),[cl,ju]=F.useState(.03),[ul,Xu]=F.useState(1.2),[Yu,Jy]=F.useState(!1),[Fp,e_]=F.useState(.85),[cC,uC]=F.useState([]),[Wr,lr]=F.useState([]),[fl,jr]=F.useState([]),[Wo,qu]=F.useState([]),[$u,t_]=F.useState("speed"),[Hn,Cs]=F.useState("flow"),[dl,Qu]=F.useState(1.5),[hl,Ku]=F.useState(1),[pl,Zu]=F.useState(1),[ml,Ju]=F.useState(2),[gl,ef]=F.useState(4),[vl,tf]=F.useState(.5),[xl,nf]=F.useState(.5),[yl,rf]=F.useState(.999),[Rs,sf]=F.useState(!1),[_l,of]=F.useState(8),[Sl,af]=F.useState(.025),[Ii,n_]=F.useState(()=>{try{const w=localStorage.getItem("luminousflow_expandedSections");if(w)return JSON.parse(w)}catch(w){console.warn("Failed to load expanded sections from localStorage:",w)}return{global:!0,emitters:!0,structures:!0,ribbons:!1,camera:!1,audio:!1,media:!1}}),[Op,i_]=F.useState({}),[jo,kp]=F.useState(""),[Ln,lf]=F.useState(()=>{try{const w=localStorage.getItem("luminousflow_scenes");if(w)return JSON.parse(w)}catch(w){console.warn("Failed to load saved scenes from localStorage:",w)}return{}}),[mn,cf]=F.useState("");F.useEffect(()=>{const w="ontouchstart"in window||navigator.maxTouchPoints>0;Vt(w)},[]),F.useEffect(()=>{if(!t.current)return;const w=new Xy;e.current=w;const k=new ri(60,window.innerWidth/window.innerHeight,.1,1e3);k.position.set(0,2,8),r.current=k;const j=new jy({antialias:!0,alpha:!0});j.setSize(window.innerWidth,window.innerHeight),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.toneMapping=hy,j.toneMappingExposure=1.2,t.current.appendChild(j.domElement),n.current=j;const de=new IA(k,j.domElement);de.enableDamping=!0,de.dampingFactor=.05,de.autoRotate=!0,de.autoRotateSpeed=.5,de.minDistance=2,de.maxDistance=50,s.current=de;const Me=new BA(j),ht=new HA(w,k);Me.addPass(ht);const pt=new XA(.85);pt.enabled=!1,Me.addPass(pt),v.current=pt;const zt=new WA(w,k,{focus:8,aperture:.025,maxblur:.01});zt.enabled=!1,Me.addPass(zt),g.current=zt;const cr=new Io(new he(window.innerWidth,window.innerHeight),1.5,.4,.85);cr.threshold=0,cr.strength=1.5,cr.radius=.8,Me.addPass(cr),u.current=cr;const Tl=new ua(JA);Tl.uniforms.uIntensity.value=.003,Tl.enabled=!0,Me.addPass(Tl),x.current=Tl;const bl=new ua(KA);bl.uniforms.offset.value=.95,bl.uniforms.darkness.value=1.2,Me.addPass(bl),y.current=bl;const Al=new ua(ZA);Al.uniforms.intensity.value=.03,Al.enabled=!1,Me.addPass(Al),m.current=Al;const hf=new ua(qA);hf.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),Me.addPass(hf),p.current=hf,i.current=Me;const A_=new sC(w);h.current=A_;const C_=new DA(4210752,.5);w.add(C_),w.fog=new Lp(0,.02);const R_=new tC(j,w,256);l.current=R_;const P_=new nC(5);E.current=P_;const L_=new K0(new L(0,0,0),8,"point");U.current=L_;const D_=new rC((ke,Ne)=>{console.log(`Quality changed to: ${ke}`,Ne),Q(ke),Ve(Ne.particleSize*Ne.particleSize),u.current&&(u.current.enabled=Ne.bloom,Ne.bloom&&(u.current.strength=Ne.bloomStrength)),x.current&&(x.current.enabled=Ne.chromatic),m.current&&(m.current.enabled=Ne.filmGrain),p.current&&(p.current.enabled=Ne.fxaa)});O.current=D_;const U_=new oC;B.current=U_;const pf=Ut["Northern Lights"],N_=new iC(w,{size:128,gridScale:25,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:pf.primary,color2:pf.secondary,color3:pf.accent,opacity:.5,particleSize:2.5,yOffset:-6});c.current=N_,r_();const Qp=ke=>{const Ne=j.domElement.getBoundingClientRect();T.current.x=(ke.clientX-Ne.left)/Ne.width*2-1,T.current.y=-((ke.clientY-Ne.top)/Ne.height)*2+1,S.current.setFromCamera(T.current,k);const pe=new bn(new L(0,0,1),0),We=new L;S.current.ray.intersectPlane(pe,We),U.current&&We&&U.current.setPosition(We)},Kp=ke=>{var ut;const Ne=j.domElement.getBoundingClientRect(),pe=new he((ke.clientX-Ne.left)/Ne.width*2-1,-((ke.clientY-Ne.top)/Ne.height)*2+1);S.current.setFromCamera(pe,k);const We=f.current.map(Gn=>Gn.group).filter(Gn=>Gn&&Gn.visible),Ke=S.current.intersectObjects(We,!0);if(Ke.length>0&&ke.shiftKey){const Gn=Ke[0].object.parent,Ls=f.current.findIndex(I_=>I_.group===Gn);if(Ls!==-1){Qe(Ls),W.current=Ls,Ee(`Selected ${((ut=Wr[Ls])==null?void 0:ut.type)||"structure"}`,"info");return}}const mt=new bn(new L(0,0,1),0),Tt=new L;S.current.ray.intersectPlane(mt,Tt),E.current&&Tt&&E.current.trigger(Tt,15,2.5,10)},Zp=ke=>{if(W.current!==null){const Ne=j.domElement.getBoundingClientRect(),pe=new he((ke.clientX-Ne.left)/Ne.width*2-1,-((ke.clientY-Ne.top)/Ne.height)*2+1);S.current.setFromCamera(pe,k);const We=W.current;if(f.current[We]){const Ke=new bn(new L(0,0,1),0),mt=new L;if(S.current.ray.intersectPlane(Ke,mt),mt){ie.current=!0,Lt(!0);const Tt=f.current[We].group.position;I.current.copy(mt).sub(Tt)}}}},Jp=ke=>{ie.current&&(ie.current=!1,Lt(!1))},em=ke=>{if(ie.current&&W.current!==null){const Ne=j.domElement.getBoundingClientRect(),pe=new he((ke.clientX-Ne.left)/Ne.width*2-1,-((ke.clientY-Ne.top)/Ne.height)*2+1);S.current.setFromCamera(pe,k);const We=new bn(new L(0,0,1),0),Ke=new L;if(S.current.ray.intersectPlane(We,Ke),Ke&&f.current[W.current]){const mt=Ke.sub(I.current);f.current[W.current].group.position.copy(mt),lr(Tt=>Tt.map((ut,Gn)=>Gn===W.current?{...ut,position:mt}:ut))}}},tm=ke=>{const Ne=ke.touches[0],pe=Date.now();if(G.current={x:Ne.clientX,y:Ne.clientY,time:pe},pe-K.current<300){const We=j.domElement.getBoundingClientRect(),Ke=new he((Ne.clientX-We.left)/We.width*2-1,-((Ne.clientY-We.top)/We.height)*2+1);S.current.setFromCamera(Ke,k);const mt=new bn(new L(0,0,1),0),Tt=new L;S.current.ray.intersectPlane(mt,Tt),Tt&&(El(),Ee("Structure added","success"))}K.current=pe,ke.touches.length===2?J.current={type:"pinch",startDistance:Math.hypot(ke.touches[0].clientX-ke.touches[1].clientX,ke.touches[0].clientY-ke.touches[1].clientY)}:ke.touches.length===3&&(J.current={type:"three-finger"})},nm=ke=>{var Ne;if(ke.preventDefault(),ke.touches.length===1){const pe=ke.touches[0],We=j.domElement.getBoundingClientRect();T.current.x=(pe.clientX-We.left)/We.width*2-1,T.current.y=-((pe.clientY-We.top)/We.height)*2+1,S.current.setFromCamera(T.current,k);const Ke=new bn(new L(0,0,1),0),mt=new L;S.current.ray.intersectPlane(Ke,mt),U.current&&mt&&U.current.setPosition(mt)}else ke.touches.length===2&&((Ne=J.current)==null||Ne.type)},im=ke=>{var pe;if(!G.current)return;const Ne=Date.now()-G.current.time;if(Ne>500&&ke.changedTouches.length===1){const We=ke.changedTouches[0],Ke=j.domElement.getBoundingClientRect(),mt=new he((We.clientX-Ke.left)/Ke.width*2-1,-((We.clientY-Ke.top)/Ke.height)*2+1);S.current.setFromCamera(mt,k);const Tt=new bn(new L(0,0,1),0),ut=new L;S.current.ray.intersectPlane(Tt,ut),ut&&E.current&&(E.current.trigger(ut,15,2.5,10),Ee("Shockwave triggered","success"))}if(G.current&&ke.changedTouches.length===1){const We=ke.changedTouches[0],Ke=We.clientX-G.current.x,mt=We.clientY-G.current.y;if(Math.abs(Ke)>100&&Math.abs(mt)<50&&Ne<300){const Tt=Object.keys(Ut),ut=Tt.indexOf(ge);Ke>0&&ut>0?(Se(Tt[ut-1]),Ee(`Palette: ${Tt[ut-1]}`,"success")):Ke<0&&ut<Tt.length-1&&(Se(Tt[ut+1]),Ee(`Palette: ${Tt[ut+1]}`,"success"))}}((pe=J.current)==null?void 0:pe.type)==="three-finger"&&ke.changedTouches.length===3&&(je(We=>!We),Ee(be?"UI hidden":"UI visible","info")),G.current=null,J.current=null};j.domElement.addEventListener("mousemove",Qp),j.domElement.addEventListener("mousemove",em),j.domElement.addEventListener("mousedown",Zp),j.domElement.addEventListener("mouseup",Jp),j.domElement.addEventListener("click",Kp),ln&&(j.domElement.addEventListener("touchstart",tm,{passive:!1}),j.domElement.addEventListener("touchmove",nm,{passive:!1}),j.domElement.addEventListener("touchend",im));const rm=()=>{const ke=window.innerWidth,Ne=window.innerHeight;k.aspect=ke/Ne,k.updateProjectionMatrix(),j.setSize(ke,Ne),Me.setSize(ke,Ne),p.current&&p.current.uniforms.resolution.value.set(1/ke,1/Ne)};window.addEventListener("resize",rm);const sm=()=>{a.current=requestAnimationFrame(sm);const ke=o.current.getDelta(),Ne=o.current.getElapsedTime();if(_.current.active){const pe=_.current;pe.progress+=ke/pe.duration,pe.progress>=1&&(pe.progress=1,pe.active=!1);const We=pe.progress,Ke=We<.5?4*We*We*We:1-Math.pow(-2*We+2,3)/2;r.current.position.lerpVectors(pe.startPos,pe.endPos,Ke);const mt=new L().lerpVectors(pe.startTarget,pe.endTarget,Ke);s.current.target.copy(mt),r.current.fov=pe.startFov+(pe.endFov-pe.startFov)*Ke,r.current.updateProjectionMatrix()}if(R.current.intensity>.001){const pe=R.current,We=(Math.random()-.5)*pe.intensity,Ke=(Math.random()-.5)*pe.intensity,mt=(Math.random()-.5)*pe.intensity;r.current.position.x+=We,r.current.position.y+=Ke,r.current.position.z+=mt,pe.intensity*=pe.decay}if(b.current.active){const pe=b.current;pe.progress+=ke/pe.duration,pe.progress>=1&&(pe.progress=1,pe.active=!1);const We=QA(pe.progress);if(pe.currentColors&&pe.targetColors){const Ke=Ks(pe.currentColors.primary,pe.targetColors.primary,We),mt=Ks(pe.currentColors.secondary,pe.targetColors.secondary,We),Tt=Ks(pe.currentColors.accent,pe.targetColors.accent,We);if(l.current&&l.current.setColors(Ke,mt,Tt),c.current&&c.current.setColors(Ke,mt,Tt),h.current){const ut=Ks(pe.currentColors.background[0],pe.targetColors.background[0],We),Gn=Ks(pe.currentColors.background[1],pe.targetColors.background[1],We),Ls=Ks(pe.currentColors.background[2],pe.targetColors.background[2],We);h.current.setColors(ut,Gn,Ls)}f.current.forEach(ut=>{ut.material&&(ut.material.color=Ke,ut.material.emissive=Tt)}),d.current.forEach(ut=>{ut.material&&(ut.material.color=mt)})}}if(s.current&&s.current.update(),E.current&&(E.current.update(ke),l.current)){const pe=E.current.getAllShockwaves();l.current.setShockwaves(pe)}if(l.current){const pe={flow:0,boids:1,nbody:2};l.current.velocityUniforms.uSimulationMode.value=pe[Hn]||0,l.current.velocityUniforms.uBoidsSeparation.value=dl,l.current.velocityUniforms.uBoidsAlignment.value=hl,l.current.velocityUniforms.uBoidsCohesion.value=pl,l.current.velocityUniforms.uBoidsNeighborRadius.value=ml,l.current.velocityUniforms.uBoidsMaxSpeed.value=gl,l.current.velocityUniforms.uNbodyGravConstant.value=vl,l.current.velocityUniforms.uNbodySoftening.value=xl,l.current.velocityUniforms.uNbodyDamping.value=yl,Wr.forEach((ut,Gn)=>{Gn<8&&(l.current.velocityUniforms.uStructureMasses.value[Gn]=ut.mass||1)});const We=[];ne.current&&U.current&&We.push({position:U.current.position,strength:U.current.strength,type:"point",radius:3}),Wo.forEach(ut=>{ut.active!==!1&&We.push({position:ut.position,strength:ut.strength,type:ut.type,radius:ut.radius||3})}),l.current.setAttractors(We);const mt={down:new L(0,-1,0),up:new L(0,1,0),left:new L(-1,0,0),right:new L(1,0,0),forward:new L(0,0,-1),backward:new L(0,0,1)}[se]||new L(0,-1,0);l.current.setGravity(mt,Fe*.5);const Tt=f.current.map(ut=>({position:ut.getPosition(),radius:ut.getBoundingRadius()}));l.current.setStructures(Tt),l.current.velocityUniforms.uNoiseScale.value=sl,l.current.velocityUniforms.uNoiseSpeed.value=ol,l.current.velocityUniforms.uFlowDamping.value=rl,l.current.velocityUniforms.uFlowMaxSpeed.value=il,l.current.particles.material.uniforms.uSize.value=ar,l.current.particles.material.uniforms.uGlowIntensity.value=bs}if(E.current&&xe.current&&Ne-V.current>=Ce.current&&(E.current.trigger(new L(0,0,0),8,3,6),V.current=Ne),l.current&&l.current.update(ke,Ne),f.current.forEach(pe=>{pe.update(ke,me)}),d.current.forEach(pe=>{pe.update(ke,me)}),c.current&&c.current.update(ke,me),h.current&&h.current.update(Ne),m.current&&m.current.enabled&&(m.current.uniforms.time.value=Ne),x.current&&x.current.enabled&&(x.current.uniforms.uTime.value=Ne),g.current&&(g.current.enabled=Rs,Rs&&(g.current.uniforms.focus.value=_l,g.current.uniforms.aperture.value=Sl)),u.current&&(u.current.strength=Pe,u.current.radius=al,u.current.threshold=ll),m.current&&m.current.enabled&&(m.current.uniforms.intensity.value=cl),x.current&&(x.current.uniforms.uIntensity.value=rt),y.current&&(y.current.uniforms.darkness.value=ul),v.current&&(v.current.enabled=Yu,v.current.uniforms.damp.value=Fp),B.current&&Y.current){const pe=B.current.getFrequencyData();if(Math.floor(Ne*10)%5===0&&(Ni(pe.bass),Gr(pe.mid),tn(pe.high)),B.current.detectBeat(wi)&&Ne-te.current>.3&&(E.current&&E.current.trigger(new L(0,0,0),pe.bass*20,2,8),te.current=Ne),l.current){const Ke=pe.mid*2;l.current.velocityUniforms.uNoiseScale.value=.5+Ke}if(x.current&&x.current.enabled){const Ke=pe.high*.005;x.current.uniforms.uIntensity.value=rt+Ke}if(u.current&&u.current.enabled){const Ke=pe.overall*.5;u.current.strength=Pe+Ke}if(c.current&&Ei){const Ke=pe.bass*1.5;c.current.setWaveParams(sr+Ke,As,or)}f.current.forEach(Ke=>{if(Ke.config){const mt=Ke.config.pulseIntensity||.1;Ke.config.pulseIntensity=mt+pe.mid*.3}})}if(O.current&&q&&(O.current.update(ke),Math.floor(Ne*2)%1===0)){const pe=O.current.getStats();Ue(pe.fps)}if(Be&&r.current){const pe=Math.sin(Ne*.2)*.5;r.current.position.y+=pe*ke}i.current&&i.current.render()};return sm(),()=>{window.removeEventListener("resize",rm),j.domElement.removeEventListener("mousemove",Qp),j.domElement.removeEventListener("mousemove",em),j.domElement.removeEventListener("mousedown",Zp),j.domElement.removeEventListener("mouseup",Jp),j.domElement.removeEventListener("click",Kp),ln&&(j.domElement.removeEventListener("touchstart",tm),j.domElement.removeEventListener("touchmove",nm),j.domElement.removeEventListener("touchend",im)),a.current&&cancelAnimationFrame(a.current),E.current&&(E.current.clear(),E.current=null),U.current=null,B.current&&(B.current.disconnect(),B.current=null),ee.current&&ee.current.state==="recording"&&(ee.current.stop(),ee.current=null),l.current&&(l.current.dispose(),l.current=null),f.current.forEach(ke=>ke.dispose()),f.current=[],d.current.forEach(ke=>ke.dispose()),d.current=[],c.current&&(c.current.dispose(),c.current=null),h.current&&h.current.dispose(),n.current&&(n.current.dispose(),t.current&&n.current.domElement&&t.current.removeChild(n.current.domElement))}},[]),F.useEffect(()=>{const w=window.matchMedia("(prefers-reduced-motion: reduce)");w.matches&&(X(!0),we(.3),Mi(!1),Et(!1),Ee("Reduced motion mode enabled","info"));const k=j=>{j.matches&&(X(!0),we(.3),Mi(!1),Ee("Reduced motion mode enabled","info"))};return w.addEventListener("change",k),()=>w.removeEventListener("change",k)},[]),F.useEffect(()=>{const w=k=>{if(k.target.tagName==="INPUT"||k.target.tagName==="TEXTAREA"||k.target.tagName==="SELECT")return;let j=k.key.toLowerCase();k.shiftKey&&k.key!=="Shift"&&(j=`Shift+${k.key}`);const de=Ed[j]||Ed[k.key];if(!de)return;k.preventDefault();const Me=Object.keys(Ut);switch(de.action){case"triggerPulse":l_();break;case"randomize":ff(),Ee("Scene randomized","success");break;case"clearScene":Xr(),Ee("Scene cleared","info");break;case"toggleUI":je(pt=>!pt),Ee(be?"UI hidden":"UI visible","info");break;case"toggleFullscreen":c_();break;case"togglePause":u_();break;case"toggleMouseFollow":Hr(pt=>{const zt=!pt;return Ee(zt?"Mouse follow ON":"Mouse follow OFF","info"),zt});break;case"toggleWaveGrid":rr(pt=>{const zt=!pt;return Ee(zt?"Wave grid ON":"Wave grid OFF","info"),zt});break;case"palette1":case"palette2":case"palette3":case"palette4":case"palette5":case"palette6":const ht=parseInt(de.action.slice(-1))-1;Me[ht]&&(Se(Me[ht]),Ee(`Palette: ${Me[ht]}`,"success"));break;case"qualityUp":Bp(1);break;case"qualityDown":Bp(-1);break;case"resetCamera":df(),Ee("Camera reset","info");break;case"cameraTopDown":Dn("topDown");break;case"cameraSide":Dn("side");break;case"cameraCloseUp":Dn("closeUp");break;case"cameraWide":Dn("wide");break;case"cameraCinematic":Dn("cinematic");break;case"cameraLow":Dn("low");break;case"showHelp":Ie(pt=>!pt);break;case"togglePerfOverlay":Ze(pt=>!pt);break}};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[be,ff,Xr,df,Dn]),F.useEffect(()=>{De.current=Xe,o.current&&(Xe?o.current.stop():o.current.start())},[Xe]),F.useEffect(()=>{i.current&&i.current.passes[1]&&(i.current.passes[1].strength=Pe)},[Pe]),F.useEffect(()=>{s.current&&(s.current.autoRotate=re,s.current.autoRotateSpeed=fe)},[re,fe]),F.useEffect(()=>{h.current&&h.current.setStyle(D)},[D]),F.useEffect(()=>{m.current&&(m.current.enabled=et)},[et]),F.useEffect(()=>{ne.current=pn},[pn]),F.useEffect(()=>{x.current&&(x.current.enabled=xt)},[xt]),F.useEffect(()=>{x.current&&(x.current.uniforms.uIntensity.value=rt)},[rt]),F.useEffect(()=>{xe.current=tr},[tr]),F.useEffect(()=>{Ce.current=nr},[nr]),F.useEffect(()=>{c.current&&c.current.setVisible(Ei)},[Ei]),F.useEffect(()=>{O.current&&O.current.setEnabled(q)},[q]),F.useEffect(()=>{if(O.current&&!q){const w=O.current.setQuality(z);w&&Ve(w.particleSize*w.particleSize)}},[z,q]),F.useEffect(()=>{c.current&&c.current.setWaveParams(sr,As,or)},[sr,As,or]),F.useEffect(()=>{c.current&&c.current.setOpacity(Go)},[Go]),F.useEffect(()=>{c.current&&c.current.setParticleSize(Vo)},[Vo]),F.useEffect(()=>{if(l.current&&l.current.particles){const w={speed:0,direction:1,acceleration:2};l.current.particles.material.uniforms.uColorMode.value=w[$u]||0}},[$u]),F.useEffect(()=>{const w=Ut[ge];if(!w)return;const k=b.current.targetColors||Ut[ge];b.current={active:!0,currentColors:k,targetColors:w,progress:0,duration:1};const j=eC[ge];j&&u.current&&(u.current.strength=j.strength,u.current.radius=j.radius,u.current.threshold=j.threshold),lr(de=>de.map(Me=>({...Me,color:w.primary}))),jr(de=>de.map(Me=>({...Me,color:w.secondary})))},[ge]);const r_=F.useCallback(()=>{const w=Ut[ge],k={type:"icosahedron",position:new L(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:w.primary},j=new wd(e.current,k);f.current.push(j),lr([{id:Date.now(),...k}]),l.current&&l.current.setColors(w.primary,w.secondary,w.accent);const de={type:"helix",position:new L(0,0,0),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:w.accent},Me=new Td(e.current,de);d.current.push(Me),jr([{id:Date.now(),...de}])},[ge]),Ml=F.useCallback((w="point")=>{const k=new K0(new L((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4),w==="repulsor"?-5:5,w);qu(j=>[...j,{id:Date.now(),type:w,position:k.position.clone(),strength:k.strength,radius:k.radius}]),Ee(`${w.charAt(0).toUpperCase()+w.slice(1)} attractor added`,"success")},[Ee]),s_=F.useCallback(w=>{qu(k=>k.filter((j,de)=>de!==w))},[]),Xo=F.useCallback((w,k,j)=>{qu(de=>de.map((Me,ht)=>ht===w?{...Me,[k]:j}:Me))},[]),El=F.useCallback((w="icosahedron")=>{const k=Ut[ge],j={type:w,position:new L((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6),rotationSpeed:{x:.1,y:.2,z:.05},scale:.5+Math.random()*.5,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:k.primary,mass:1},de=new wd(e.current,j);f.current.push(de),lr(Me=>[...Me,{id:Date.now(),...j}])},[ge]),o_=F.useCallback(w=>{f.current[w]&&(f.current[w].dispose(),f.current.splice(w,1),lr(k=>k.filter((j,de)=>de!==w)))},[]),Ps=F.useCallback((w,k,j)=>{f.current[w]&&(k==="type"?(f.current[w].config.type=j,f.current[w].createStructure()):k==="materialStyle"?(f.current[w].config.materialStyle=j,f.current[w].createStructure()):f.current[w].config[k]=j,lr(de=>de.map((Me,ht)=>ht===w?{...Me,[k]:j}:Me)))},[]),uf=F.useCallback((w="helix")=>{const k=Ut[ge],j={type:w,position:new L((Math.random()-.5)*4,(Math.random()-.5)*2,(Math.random()-.5)*4),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:k.accent},de=new Td(e.current,j);d.current.push(de),jr(Me=>[...Me,{id:Date.now(),...j}])},[ge]),a_=F.useCallback(w=>{d.current[w]&&(d.current[w].dispose(),d.current.splice(w,1),jr(k=>k.filter((j,de)=>de!==w)))},[]),wl=F.useCallback((w,k,j)=>{d.current[w]&&(k==="type"?(d.current[w].config.type=j,d.current[w].createRibbon()):d.current[w].config[k]=j,jr(de=>de.map((Me,ht)=>ht===w?{...Me,[k]:j}:Me)))},[]),Xr=F.useCallback(()=>{f.current.forEach(w=>w.dispose()),f.current=[],lr([]),d.current.forEach(w=>w.dispose()),d.current=[],jr([])},[]),ff=F.useCallback(()=>{Xr();const w=Object.keys(Ut),k=w[Math.floor(Math.random()*w.length)];Se(k);const j=["icosahedron","torus","rings","helix","mobius"],de=1+Math.floor(Math.random()*3);for(let pt=0;pt<de;pt++){const zt=j[Math.floor(Math.random()*j.length)];setTimeout(()=>El(zt),pt*100)}const Me=["helix","lissajous","toroidal","spiral"],ht=1+Math.floor(Math.random()*2);for(let pt=0;pt<ht;pt++){const zt=Me[Math.floor(Math.random()*Me.length)];setTimeout(()=>uf(zt),pt*100)}we(.5+Math.random()*1.5),_e(1+Math.random()*1.5),Ge(Math.random()*1.5)},[Xr,El,uf]),df=F.useCallback(()=>{r.current&&s.current&&(r.current.position.set(0,2,8),s.current.target.set(0,0,0),s.current.update())},[]),zp=F.useCallback((w,k,j,de=1.5)=>{if(!r.current||!s.current)return;const Me=_.current;Me.startPos.copy(r.current.position),Me.endPos.set(...w),Me.startTarget.copy(s.current.target),Me.endTarget.set(...k),Me.startFov=r.current.fov,Me.endFov=j,Me.progress=0,Me.duration=de,Me.active=!0},[]),Dn=F.useCallback(w=>{const k=$A[w];k&&(zp(k.position,k.target,k.fov),Ee(`Camera: ${w}`,"info"))},[zp,Ee]),Ee=F.useCallback((w,k="info")=>{const j=Date.now();ae(de=>[...de,{id:j,message:w,type:k}]),setTimeout(()=>{ae(de=>de.filter(Me=>Me.id!==j))},3e3)},[]),l_=F.useCallback(()=>{E.current&&(E.current.trigger(new L(0,0,0),12,3,8),R.current.intensity=.15,Ee("Pulse triggered!","success"))},[Ee]),c_=F.useCallback(()=>{document.fullscreenElement?(document.exitFullscreen(),Ee("Fullscreen OFF","info")):(document.documentElement.requestFullscreen().catch(w=>{Ee("Could not enter fullscreen","error")}),Ee("Fullscreen ON","info"))},[Ee]),u_=F.useCallback(()=>{ze(w=>{const k=!w;return Ee(k?"Paused":"Resumed","info"),k})},[Ee]),Bp=F.useCallback(w=>{const k=["ultra","high","medium","low","potato"],j=k.indexOf(z),de=Math.max(0,Math.min(k.length-1,j-w));de!==j&&($(!1),Q(k[de]),Ee(`Quality: ${k[de]}`,"info"))},[z,Ee]),f_=F.useCallback(async w=>{if(w==="microphone"&&B.current){const k=await B.current.connectMicrophone();k.success?(_t(!0),ws("microphone"),Y.current=!0,Ee("Microphone connected","success")):Ee(`Microphone error: ${k.error}`,"error")}},[Ee]),d_=F.useCallback(()=>{B.current&&(B.current.disconnect(),Y.current=!1,_t(!1),ws("none"),Ee("Audio reactivity disabled","info"))},[Ee]),Hp=F.useCallback((w=2)=>{if(!n.current||!i.current)return;const k=new he;n.current.getSize(k);const j=k.x*w,de=k.y*w;n.current.setSize(j,de),i.current.setSize(j,de),i.current.render();const Me=n.current.domElement.toDataURL("image/png");n.current.setSize(k.x,k.y),i.current.setSize(k.x,k.y);const ht=document.createElement("a");ht.download=`luminous-flow-${Date.now()}.png`,ht.href=Me,ht.click(),Ee(`Screenshot saved (${j}x${de})`,"success")},[Ee]),h_=F.useCallback(()=>{if(!(!n.current||qt))try{const w=n.current.domElement.captureStream(30),k=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm",j=new MediaRecorder(w,{mimeType:k,videoBitsPerSecond:25e5});Z.current=[],j.ondataavailable=de=>{de.data.size>0&&Z.current.push(de.data)},j.onstop=()=>{const de=new Blob(Z.current,{type:k}),Me=URL.createObjectURL(de),ht=document.createElement("a");ht.download=`luminous-flow-${Date.now()}.webm`,ht.href=Me,ht.click(),URL.revokeObjectURL(Me),Ee("Recording saved","success")},j.start(),ee.current=j,Ts(!0),Ee("Recording started (30fps)","info")}catch(w){Ee(`Recording error: ${w.message}`,"error")}},[qt,Ee]),p_=F.useCallback(()=>{ee.current&&ee.current.state==="recording"&&(ee.current.stop(),ee.current=null,Ts(!1))},[]),m_=F.useCallback(w=>{const k=Q0[w];k&&(Xr(),Se(k.palette),ce(k.background),we(k.timeScale),_e(k.bloom),rr(k.waveGrid),Es(k.waveAmplitude),k.simulationMode?(Cs(k.simulationMode),k.simulationMode==="boids"&&k.boids&&(Qu(k.boids.separation),Ku(k.boids.alignment),Zu(k.boids.cohesion),Ju(k.boids.neighborRadius),ef(k.boids.maxSpeed)),k.simulationMode==="nbody"&&k.nbody&&(tf(k.nbody.gravConstant),nf(k.nbody.softening),rf(k.nbody.damping))):Cs("flow"),k.structures.forEach((j,de)=>{setTimeout(()=>{const Me={type:j.type,position:new L(...j.position||[0,0,0]),rotationSpeed:{x:(j.rotationSpeed||.2)*.5,y:j.rotationSpeed||.2,z:(j.rotationSpeed||.2)*.25},scale:j.scale||1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:Ut[k.palette].primary,mass:j.mass||1},ht=new wd(e.current,Me);f.current.push(ht),lr(pt=>[...pt,{id:Date.now()+de,...Me}])},de*100)}),k.ribbons.forEach((j,de)=>{setTimeout(()=>{const Me={type:j.type,position:new L(0,0,0),animationSpeed:1,thickness:j.thickness||.08,glowIntensity:1.5,color:Ut[k.palette].accent},ht=new Td(e.current,Me);d.current.push(ht),jr(pt=>[...pt,{id:Date.now()+100+de,...Me}])},(k.structures.length+de)*100)}),Ee(`Loaded: ${w}`,"success"),Le(!1))},[Xr,Ee]),Yr=w=>{n_(k=>({...k,[w]:!k[w]}))};F.useEffect(()=>{try{localStorage.setItem("luminousflow_expandedSections",JSON.stringify(Ii))}catch(w){console.warn("Failed to save expanded sections to localStorage:",w)}},[Ii]);const g_=F.useCallback(()=>{we(1),$e(0),Ge(.8),_e(1.5),Vu(.8),Wu(0),Xu(1.2),ce("gradient"),Se("Northern Lights"),it(!0),ju(.03),Et(!0),Pt(.003),Ee("Global Controls reset to defaults","success")},[Ee]),v_=F.useCallback(()=>{Cs("flow"),Vr(2),nl(1.5),Nu(8),Iu(.98),Fu(.5),Ou(.2),zu(8),Hr(!1),Mi(!1),ir(3),rr(!1),Es(1),C(1),Bu(.5),Hu(.5),Gu(2.5),Ee("Particle Controls reset to defaults","success")},[Ee]),x_=F.useCallback(()=>{setCameraDistance(15),setCameraHeight(8),setCameraAngle(.8),setCameraRotationSpeed(.5),sf(!1),of(8),af(.025),Ee("Camera Controls reset to defaults","success")},[Ee]),y_=F.useCallback(()=>{_t(!1),setAudioSensitivity(1.5),Ee("Audio Controls reset to defaults","success")},[Ee]),Gp=F.useCallback(()=>{if(!jo.trim()){Ee("Please enter a scene name","error");return}const w={timeScale:me,gravity:Fe,turbulence:Je,bloomIntensity:Pe,bloomRadius:al,bloomThreshold:ll,vignetteIntensity:ul,backgroundStyle:D,colorPalette:ge,filmGrain:et,filmGrainIntensity:cl,chromaticAberration:xt,chromaticIntensity:rt,simulationMode:Hn,particleSize:ar,particleGlow:bs,particleSpeedLimit:il,particleDamping:rl,curlNoiseScale:sl,curlNoiseSpeed:ol,spawnRadius:ku,mouseFollow:pn,autoPulse:tr,pulseInterval:nr,boidsSeparation:dl,boidsAlignment:hl,boidsCohesion:pl,boidsNeighborRadius:ml,boidsMaxSpeed:gl,nbodyGravConstant:vl,nbodySoftening:xl,nbodyDamping:yl,waveGridEnabled:Ei,waveAmplitude:sr,waveSpeed:or,waveFrequency:As,waveOpacity:Go,waveParticleSize:Vo,cameraDistance,cameraHeight,cameraAngle,cameraRotationSpeed,dofEnabled:Rs,dofFocus:_l,dofAperture:Sl,audioReactivity:en,audioSensitivity,structures:Wr,ribbons:fl,attractors:Wo,qualityLevel:z,autoQuality:q,savedAt:new Date().toISOString()},k={...Ln,[jo.trim()]:w};try{localStorage.setItem("luminousflow_scenes",JSON.stringify(k)),lf(k),Ee(`Scene "${jo.trim()}" saved`,"success"),kp("")}catch(j){console.error("Failed to save scene:",j),Ee("Failed to save scene","error")}},[jo,Ln,Ee,me,Fe,Je,Pe,al,ll,ul,D,ge,et,cl,xt,rt,Hn,ar,bs,il,rl,sl,ol,ku,pn,tr,nr,dl,hl,pl,ml,gl,vl,xl,yl,Ei,sr,or,As,Go,Vo,cameraDistance,cameraHeight,cameraAngle,cameraRotationSpeed,Rs,_l,Sl,en,audioSensitivity,Wr,fl,Wo,z,q]),__=F.useCallback(()=>{if(!mn||!Ln[mn]){Ee("Please select a scene to load","error");return}const w=Ln[mn];try{w.timeScale!==void 0&&we(w.timeScale),w.gravity!==void 0&&$e(w.gravity),w.turbulence!==void 0&&Ge(w.turbulence),w.bloomIntensity!==void 0&&_e(w.bloomIntensity),w.bloomRadius!==void 0&&Vu(w.bloomRadius),w.bloomThreshold!==void 0&&Wu(w.bloomThreshold),w.vignetteIntensity!==void 0&&Xu(w.vignetteIntensity),w.backgroundStyle!==void 0&&ce(w.backgroundStyle),w.colorPalette!==void 0&&Se(w.colorPalette),w.filmGrain!==void 0&&it(w.filmGrain),w.filmGrainIntensity!==void 0&&ju(w.filmGrainIntensity),w.chromaticAberration!==void 0&&Et(w.chromaticAberration),w.chromaticIntensity!==void 0&&Pt(w.chromaticIntensity),w.simulationMode!==void 0&&Cs(w.simulationMode),w.particleSize!==void 0&&Vr(w.particleSize),w.particleGlow!==void 0&&nl(w.particleGlow),w.particleSpeedLimit!==void 0&&Nu(w.particleSpeedLimit),w.particleDamping!==void 0&&Iu(w.particleDamping),w.curlNoiseScale!==void 0&&Fu(w.curlNoiseScale),w.curlNoiseSpeed!==void 0&&Ou(w.curlNoiseSpeed),w.spawnRadius!==void 0&&zu(w.spawnRadius),w.mouseFollow!==void 0&&Hr(w.mouseFollow),w.autoPulse!==void 0&&Mi(w.autoPulse),w.pulseInterval!==void 0&&ir(w.pulseInterval),w.boidsSeparation!==void 0&&Qu(w.boidsSeparation),w.boidsAlignment!==void 0&&Ku(w.boidsAlignment),w.boidsCohesion!==void 0&&Zu(w.boidsCohesion),w.boidsNeighborRadius!==void 0&&Ju(w.boidsNeighborRadius),w.boidsMaxSpeed!==void 0&&ef(w.boidsMaxSpeed),w.nbodyGravConstant!==void 0&&tf(w.nbodyGravConstant),w.nbodySoftening!==void 0&&nf(w.nbodySoftening),w.nbodyDamping!==void 0&&rf(w.nbodyDamping),w.waveGridEnabled!==void 0&&rr(w.waveGridEnabled),w.waveAmplitude!==void 0&&Es(w.waveAmplitude),w.waveSpeed!==void 0&&C(w.waveSpeed),w.waveFrequency!==void 0&&Bu(w.waveFrequency),w.waveOpacity!==void 0&&Hu(w.waveOpacity),w.waveParticleSize!==void 0&&Gu(w.waveParticleSize),w.cameraDistance!==void 0&&setCameraDistance(w.cameraDistance),w.cameraHeight!==void 0&&setCameraHeight(w.cameraHeight),w.cameraAngle!==void 0&&setCameraAngle(w.cameraAngle),w.cameraRotationSpeed!==void 0&&setCameraRotationSpeed(w.cameraRotationSpeed),w.dofEnabled!==void 0&&sf(w.dofEnabled),w.dofFocus!==void 0&&of(w.dofFocus),w.dofAperture!==void 0&&af(w.dofAperture),w.audioReactivity!==void 0&&_t(w.audioReactivity),w.audioSensitivity!==void 0&&setAudioSensitivity(w.audioSensitivity),w.qualityLevel!==void 0&&Q(w.qualityLevel),w.autoQuality!==void 0&&$(w.autoQuality),Ee(`Loaded scene "${mn}"`,"success")}catch(k){console.error("Failed to load scene:",k),Ee("Failed to load scene","error")}},[mn,Ln,Ee]),S_=F.useCallback(w=>{if(!window.confirm(`Delete scene "${w}"?`))return;const k={...Ln};delete k[w];try{localStorage.setItem("luminousflow_scenes",JSON.stringify(k)),lf(k),mn===w&&cf(""),Ee(`Scene "${w}" deleted`,"success")}catch(j){console.error("Failed to delete scene:",j),Ee("Failed to delete scene","error")}},[Ln,mn,Ee]),M_=F.useCallback(()=>{if(!mn||!Ln[mn]){Ee("Please select a scene to export","error");return}const w=Ln[mn],k=JSON.stringify(w,null,2),j=new Blob([k],{type:"application/json"}),de=URL.createObjectURL(j),Me=document.createElement("a");Me.href=de,Me.download=`luminous-flow-${mn}.json`,document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(de),Ee(`Exported scene "${mn}"`,"success")},[mn,Ln,Ee]),E_=F.useCallback(()=>{const w=document.createElement("input");w.type="file",w.accept=".json",w.onchange=k=>{const j=k.target.files[0];if(!j)return;const de=new FileReader;de.onload=Me=>{try{const ht=JSON.parse(Me.target.result),pt=j.name.replace(".json","").replace("luminous-flow-",""),zt={...Ln,[pt]:ht};localStorage.setItem("luminousflow_scenes",JSON.stringify(zt)),lf(zt),cf(pt),Ee(`Imported scene "${pt}"`,"success")}catch(ht){console.error("Failed to import scene:",ht),Ee("Invalid scene file","error")}},de.readAsText(j)},w.click()},[Ln,Ee]),w_=F.useCallback(()=>{const w={palette:ge,bg:D,mode:Hn,bloom:Pe,particle:ar,glow:bs};try{const k=JSON.stringify(w),j=btoa(k),de=`${window.location.origin}${window.location.pathname}#${j}`;navigator.clipboard.writeText(de).then(()=>{Ee("Share link copied to clipboard!","success")}).catch(()=>{const Me=document.createElement("textarea");Me.value=de,document.body.appendChild(Me),Me.select(),document.execCommand("copy"),document.body.removeChild(Me),Ee("Share link copied to clipboard!","success")})}catch(k){console.error("Failed to create share URL:",k),Ee("Failed to create share link","error")}},[ge,D,Hn,Pe,ar,bs,Ee]);F.useEffect(()=>{const w=window.location.hash.slice(1);if(w)try{const k=atob(w),j=JSON.parse(k);j.palette&&Se(j.palette),j.bg&&ce(j.bg),j.mode&&Cs(j.mode),j.bloom!==void 0&&_e(j.bloom),j.particle!==void 0&&Vr(j.particle),j.glow!==void 0&&nl(j.glow),Ee("Loaded shared configuration","success")}catch(k){console.warn("Failed to parse URL hash:",k)}},[Ee]);const T_=F.useCallback(()=>{H<3?le(w=>w+1):Vp()},[H]),b_=F.useCallback(()=>{Vp()},[]),Vp=F.useCallback(()=>{try{localStorage.setItem("luminousflow_onboarded","true")}catch(w){console.warn("Failed to save onboarding state:",w)}M(!1)},[]),Wp=w=>{i_(k=>({...k,[w]:!k[w]}))};return A.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[A.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),A.jsx("div",{style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px",pointerEvents:"none"},children:oe.map(w=>A.jsx("div",{style:{padding:"12px 24px",borderRadius:"8px",background:w.type==="success"?"rgba(0, 200, 100, 0.9)":w.type==="error"?"rgba(200, 50, 50, 0.9)":"rgba(50, 50, 70, 0.9)",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",backdropFilter:"blur(10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)",animation:"slideUp 0.3s ease-out",pointerEvents:"auto"},children:w.message},w.id))}),Mt&&A.jsxs("div",{style:{position:"fixed",top:"10px",left:"10px",background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(5px)",color:"#0f0",fontFamily:"monospace",fontSize:"11px",padding:"8px",borderRadius:"4px",pointerEvents:"none",zIndex:1e3,lineHeight:"1.6"},children:[A.jsx("div",{children:A.jsx("strong",{children:"PERFORMANCE STATS"})}),A.jsxs("div",{children:["FPS: ",Te]}),A.jsxs("div",{children:["Particles: ",(He/1e3).toFixed(0),"K"]}),A.jsxs("div",{children:["Quality: ",z]}),A.jsxs("div",{children:["Mode: ",Hn]}),n.current&&A.jsxs(A.Fragment,{children:[A.jsxs("div",{children:["Calls: ",n.current.info.render.calls]}),A.jsxs("div",{children:["Triangles: ",(n.current.info.render.triangles/1e3).toFixed(1),"K"]}),A.jsxs("div",{children:["Textures: ",n.current.info.memory.textures]}),A.jsxs("div",{children:["Geometries: ",n.current.info.memory.geometries]})]})]}),P&&A.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(10, 10, 20, 0.9)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3,padding:"20px"},children:A.jsxs("div",{style:{maxWidth:"400px",background:"rgba(20, 20, 30, 0.95)",borderRadius:"12px",padding:"30px",boxShadow:`0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px ${((jp=Ut[ge])==null?void 0:jp.primary)||"#00ffaa"}`,textAlign:"center"},children:[A.jsxs("div",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"20px",color:((Xp=Ut[ge])==null?void 0:Xp.primary)||"#00ffaa"},children:[H===1&&"Welcome to Luminous Flow",H===2&&"Customize Everything",H===3&&"Keyboard Shortcuts"]}),A.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6",marginBottom:"30px",color:"#ccc"},children:[H===1&&A.jsxs(A.Fragment,{children:[A.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"🖱️"}),A.jsx("div",{children:"Click anywhere on the canvas to create beautiful shockwave pulses that interact with particles and structures."})]}),H===2&&A.jsxs(A.Fragment,{children:[A.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"⚙️ →"}),A.jsx("div",{children:"Open the side panel to customize particles, add structures, change colors, adjust physics, and create your own unique scenes."})]}),H===3&&A.jsxs(A.Fragment,{children:[A.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"⌨️"}),A.jsxs("div",{children:["Press ",A.jsx("strong",{style:{color:((Yp=Ut[ge])==null?void 0:Yp.accent)||"#aa55ff"},children:"?"})," anytime to see all available keyboard shortcuts for quick access to features."]})]})]}),A.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:A.jsx("button",{onClick:T_,style:{padding:"12px 24px",fontSize:"14px",fontWeight:"500",background:((qp=Ut[ge])==null?void 0:qp.primary)||"#00ffaa",color:"#000",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:w=>{var k;w.target.style.transform="scale(1.05)",w.target.style.boxShadow=`0 0 20px ${((k=Ut[ge])==null?void 0:k.primary)||"#00ffaa"}`},onMouseLeave:w=>{w.target.style.transform="scale(1)",w.target.style.boxShadow="none"},children:H<3?"Next":"Get Started"})}),A.jsx("div",{style:{marginTop:"20px",fontSize:"12px",opacity:.6},children:A.jsx("button",{onClick:b_,style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",textDecoration:"underline",fontSize:"12px"},onMouseEnter:w=>{w.target.style.color="#fff"},onMouseLeave:w=>{w.target.style.color="#aaa"},children:"Skip tutorial"})}),A.jsx("div",{style:{marginTop:"15px",display:"flex",gap:"8px",justifyContent:"center"},children:[1,2,3].map(w=>{var k;return A.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:w===H?((k=Ut[ge])==null?void 0:k.primary)||"#00ffaa":"rgba(255, 255, 255, 0.3)"}},w)})})]})}),Yt&&A.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>Ie(!1),children:A.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"500px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:w=>w.stopPropagation(),children:[A.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"KEYBOARD SHORTCUTS"}),A.jsx("div",{style:{display:"grid",gap:"8px"},children:Object.entries(Ed).map(([w,{description:k}])=>A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px"},children:[A.jsx("span",{style:{fontSize:"13px",color:"#ccc",fontFamily:"system-ui, -apple-system, sans-serif"},children:k}),A.jsx("kbd",{style:{padding:"4px 10px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",color:"#00ffaa",border:"1px solid rgba(255, 255, 255, 0.2)"},children:w===" "?"Space":w})]},w))}),A.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Press ? or Escape to close"})]})}),Ye&&A.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>Le(!1),children:A.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"700px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:w=>w.stopPropagation(),children:[A.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"SCENE PRESETS"}),A.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"15px"},children:Object.entries(Q0).map(([w,k])=>{var j,de,Me,ht,pt;return A.jsxs("button",{onClick:()=>m_(w),style:{padding:"20px",background:`linear-gradient(135deg, ${((j=Ut[k.palette])==null?void 0:j.background[0])||"#1a1a2e"}, ${((de=Ut[k.palette])==null?void 0:de.background[1])||"#16213e"})`,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",position:"relative",overflow:"hidden"},onMouseEnter:zt=>{var cr;zt.currentTarget.style.transform="scale(1.02)",zt.currentTarget.style.borderColor=((cr=Ut[k.palette])==null?void 0:cr.primary)||"#00ffaa"},onMouseLeave:zt=>{zt.currentTarget.style.transform="scale(1)",zt.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)"},children:[A.jsx("div",{style:{fontSize:"14px",fontWeight:"500",color:((Me=Ut[k.palette])==null?void 0:Me.primary)||"#00ffaa",marginBottom:"8px",fontFamily:"system-ui, -apple-system, sans-serif"},children:w}),A.jsx("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.4",fontFamily:"system-ui, -apple-system, sans-serif"},children:k.description}),A.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",width:"8px",height:"8px",borderRadius:"50%",background:((ht=Ut[k.palette])==null?void 0:ht.primary)||"#00ffaa",boxShadow:`0 0 10px ${((pt=Ut[k.palette])==null?void 0:pt.primary)||"#00ffaa"}`}})]},w)})}),A.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Click a preset to load it, or click outside to close"})]})}),be&&A.jsxs("div",{style:{position:"absolute",top:0,right:0,width:"320px",height:"100%",background:"rgba(10, 10, 20, 0.85)",backdropFilter:"blur(10px)",borderLeft:"1px solid rgba(255, 255, 255, 0.1)",overflowY:"auto",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"13px",color:"#fff"},children:[A.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(0, 0, 0, 0.3)"},children:[A.jsx("h1",{style:{margin:0,fontSize:"20px",fontWeight:"300",letterSpacing:"2px"},children:"LUMINOUS FLOW"}),A.jsx("p",{style:{margin:"5px 0 0",opacity:.6,fontSize:"11px"},children:"3D Particle & Light Sculpture Sandbox"})]}),A.jsxs("div",{style:{padding:"15px 20px",display:"flex",gap:"10px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",flexWrap:"wrap"},children:[A.jsx("button",{onClick:ff,style:{...gt,flex:"1 1 30%"},children:"Randomize"}),A.jsx("button",{onClick:Xr,style:{...gt,flex:"1 1 30%"},children:"Clear Scene"}),A.jsx("button",{onClick:w_,style:{...gt,flex:"1 1 30%",background:"rgba(100, 200, 255, 0.2)",border:"1px solid rgba(100, 200, 255, 0.4)",color:"#64c8ff"},children:"🔗 Share"})]}),A.jsxs("div",{style:{padding:"15px 20px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(100, 200, 255, 0.05)"},children:[A.jsx("div",{style:{fontSize:"13px",fontWeight:"500",marginBottom:"12px",color:"#64c8ff",letterSpacing:"0.5px"},children:"Scenes"}),A.jsxs("div",{style:{marginBottom:"12px"},children:[A.jsx("input",{type:"text",value:jo,onChange:w=>kp(w.target.value),placeholder:"Scene name...",style:{width:"100%",padding:"8px",fontSize:"12px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"white",marginBottom:"8px"},onKeyDown:w=>{w.key==="Enter"&&Gp()}}),A.jsx("button",{onClick:Gp,style:{...gt,width:"100%",background:"rgba(0, 255, 100, 0.2)",border:"1px solid rgba(0, 255, 100, 0.4)",color:"#00ff64"},children:"💾 Save Current Scene"})]}),Object.keys(Ln).length>0&&A.jsxs("div",{children:[A.jsxs("select",{value:mn,onChange:w=>cf(w.target.value),style:{width:"100%",padding:"8px",fontSize:"12px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"white",marginBottom:"8px"},children:[A.jsx("option",{value:"",children:"Select a scene..."}),Object.keys(Ln).map(w=>A.jsx("option",{value:w,children:w},w))]}),mn&&A.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[A.jsx("button",{onClick:__,style:{...gt,flex:"1 1 45%",background:"rgba(100, 200, 255, 0.2)",border:"1px solid rgba(100, 200, 255, 0.4)",color:"#64c8ff"},children:"📂 Load"}),A.jsx("button",{onClick:M_,style:{...gt,flex:"1 1 45%",background:"rgba(255, 170, 0, 0.2)",border:"1px solid rgba(255, 170, 0, 0.4)",color:"#ffaa00"},children:"📤 Export"}),A.jsx("button",{onClick:()=>S_(mn),style:{...gt,width:"100%",background:"rgba(255, 64, 64, 0.2)",border:"1px solid rgba(255, 64, 64, 0.4)",color:"#ff4040"},children:"🗑️ Delete"})]})]}),A.jsx("button",{onClick:E_,style:{...gt,width:"100%",marginTop:"12px",background:"rgba(170, 100, 255, 0.2)",border:"1px solid rgba(170, 100, 255, 0.4)",color:"#aa64ff"},children:"📥 Import Scene"})]}),A.jsxs(Zr,{title:"Global Controls",expanded:Ii.global,onToggle:()=>Yr("global"),onReset:g_,children:[A.jsx(qe,{label:"Time Scale",value:me,onChange:we,min:.1,max:3,step:.1}),A.jsx(qe,{label:"Gravity",value:Fe,onChange:$e,min:-2,max:2,step:.1}),A.jsx(qe,{label:"Turbulence",value:Je,onChange:Ge,min:0,max:3,step:.1}),A.jsx(qe,{label:"Bloom Intensity",value:Pe,onChange:_e,min:0,max:3,step:.1}),A.jsx(qe,{label:"Bloom Radius",value:al,onChange:Vu,min:.1,max:2,step:.1}),A.jsx(qe,{label:"Bloom Threshold",value:ll,onChange:Wu,min:0,max:1,step:.05}),A.jsx(qe,{label:"Vignette Intensity",value:ul,onChange:Xu,min:0,max:3,step:.1}),A.jsx(gr,{label:"Background Style",value:D,onChange:ce,options:["solid","gradient","nebula"]}),A.jsx(gr,{label:"Color Palette",value:ge,onChange:Se,options:Object.keys(Ut)}),A.jsx(bi,{label:"Film Grain",checked:et,onChange:it}),et&&A.jsx(qe,{label:"Film Grain Intensity",value:cl,onChange:ju,min:0,max:.1,step:.01}),A.jsx(bi,{label:"Chromatic Aberration",checked:xt,onChange:Et}),xt&&A.jsx(qe,{label:"Aberration Intensity",value:rt,onChange:Pt,min:.001,max:.01,step:.001}),A.jsx(bi,{label:"Particle Trails",checked:Yu,onChange:Jy}),Yu&&A.jsx(qe,{label:"Trail Length",value:Fp,onChange:e_,min:.7,max:.98,step:.01})]}),A.jsxs(Zr,{title:"GPU Particles",expanded:Ii.emitters,onToggle:()=>Yr("emitters"),onReset:v_,children:[A.jsxs("div",{style:{padding:"12px",background:"rgba(0, 255, 170, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 255, 170, 0.3)",marginBottom:"10px"},children:[A.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"6px",color:"#00ffaa"},children:"✓ GPU Particles Active"}),A.jsxs("div",{style:{fontSize:"11px",opacity:.8,lineHeight:"1.4"},children:["65,536 particles (256×256 texture)",A.jsx("br",{}),"GPU-computed positions & velocities",A.jsx("br",{}),"Curl noise + central attractor"]})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(100, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(100, 200, 255, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#64c8ff"},children:"Simulation Mode"}),A.jsx(gr,{label:"Mode",value:Hn,onChange:Cs,options:["flow","boids","nbody"]}),Hn==="boids"&&A.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[A.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"Boids Parameters"}),A.jsx(qe,{label:"Separation",value:dl,onChange:Qu,min:0,max:5,step:.1}),A.jsx(qe,{label:"Alignment",value:hl,onChange:Ku,min:0,max:5,step:.1}),A.jsx(qe,{label:"Cohesion",value:pl,onChange:Zu,min:0,max:5,step:.1}),A.jsx(qe,{label:"Neighbor Radius",value:ml,onChange:Ju,min:.5,max:5,step:.1}),A.jsx(qe,{label:"Max Speed",value:gl,onChange:ef,min:1,max:10,step:.5})]}),Hn==="nbody"&&A.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[A.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"N-Body Parameters"}),A.jsx(qe,{label:"Gravitational Constant",value:vl,onChange:tf,min:.01,max:2,step:.01}),A.jsx(qe,{label:"Softening",value:xl,onChange:nf,min:.1,max:2,step:.1}),A.jsx(qe,{label:"Damping",value:yl,onChange:rf,min:.99,max:1,step:.001})]}),A.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:[Hn==="flow"&&"Default mode: curl noise + attractors + shockwaves",Hn==="boids"&&"Flocking behavior: particles avoid, align, and cohere",Hn==="nbody"&&"Gravitational simulation: structures as massive bodies"]})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 255, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 255, 255, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#00ffff"},children:"Particle Parameters"}),A.jsx(qe,{label:"Particle Size",value:ar,onChange:Vr,min:.5,max:5,step:.1}),A.jsx(qe,{label:"Particle Glow",value:bs,onChange:nl,min:0,max:3,step:.1}),A.jsx(qe,{label:"Speed Limit",value:il,onChange:Nu,min:1,max:20,step:.5}),A.jsx(qe,{label:"Damping",value:rl,onChange:Iu,min:.9,max:.999,step:.001}),A.jsx(qe,{label:"Curl Noise Scale",value:sl,onChange:Fu,min:.1,max:2,step:.1}),A.jsx(qe,{label:"Curl Noise Speed",value:ol,onChange:Ou,min:.05,max:1,step:.05}),A.jsx(qe,{label:"Spawn Radius",value:ku,onChange:zu,min:1,max:20,step:.5}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Controls for particle appearance and physics behavior"})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 170, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 170, 0, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ffaa00"},children:"Interactivity"}),A.jsx(bi,{label:"Mouse Follow (particles follow cursor)",checked:pn,onChange:Hr}),A.jsx(bi,{label:"Auto Pulse (periodic shockwaves)",checked:tr,onChange:Mi}),tr&&A.jsx(qe,{label:"Pulse Interval (seconds)",value:nr,onChange:ir,min:1,max:10,step:.5}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Click anywhere to trigger a shockwave!"})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 170, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 170, 255, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#00aaff"},children:"Wave Grid"}),A.jsx(bi,{label:"Enable Wave Grid",checked:Ei,onChange:rr}),Ei&&A.jsxs(A.Fragment,{children:[A.jsx(qe,{label:"Wave Amplitude",value:sr,onChange:Es,min:.2,max:3,step:.1}),A.jsx(qe,{label:"Wave Speed",value:or,onChange:C,min:.2,max:3,step:.1}),A.jsx(qe,{label:"Wave Frequency",value:As,onChange:Bu,min:.1,max:2,step:.1}),A.jsx(qe,{label:"Wave Opacity",value:Go,onChange:Hu,min:0,max:1,step:.05}),A.jsx(qe,{label:"Wave Particle Size",value:Vo,onChange:Gu,min:.5,max:5,step:.1})]}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"16,384 particles in undulating grid below the scene"})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 85, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 85, 255, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aa55ff"},children:"Performance"}),A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px",fontSize:"11px"},children:[A.jsxs("span",{children:["FPS: ",A.jsx("strong",{style:{color:Te>50?"#00ff88":Te>30?"#ffaa00":"#ff4444"},children:Te})]}),A.jsxs("span",{children:["Quality: ",A.jsx("strong",{style:{color:"#aa55ff",textTransform:"capitalize"},children:z})]}),A.jsxs("span",{children:["Particles: ",A.jsxs("strong",{children:[(He/1e3).toFixed(0),"K"]})]})]}),A.jsx(bi,{label:"Auto Quality (adjusts based on FPS)",checked:q,onChange:$}),!q&&A.jsx(gr,{label:"Quality Level",value:z,onChange:Q,options:["ultra","high","medium","low","potato"]}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:q?A.jsx(A.Fragment,{children:"Auto mode adjusts quality based on FPS. Target: 50-60fps."}):A.jsx(A.Fragment,{children:"Manual mode lets you choose quality level. Higher = more particles and effects."})})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 255, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 255, 0, 0.3)"},children:[A.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aaff00"},children:["Attractors (",Wo.length,")"]}),A.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"10px",flexWrap:"wrap"},children:[A.jsx("button",{onClick:()=>Ml("point"),style:{...gt,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Point"}),A.jsx("button",{onClick:()=>Ml("vortex"),style:{...gt,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Vortex"}),A.jsx("button",{onClick:()=>Ml("orbit"),style:{...gt,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Orbit"}),A.jsx("button",{onClick:()=>Ml("repulsor"),style:{...gt,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Repulsor"})]}),Wo.map((w,k)=>A.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"6px"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[A.jsx("span",{style:{fontSize:"11px",textTransform:"capitalize"},children:w.type}),A.jsx("button",{onClick:()=>s_(k),style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]}),A.jsx(qe,{label:"Strength",value:w.strength,onChange:j=>Xo(k,"strength",j),min:-10,max:10,step:.5}),A.jsx(qe,{label:"Position X",value:w.position.x,onChange:j=>Xo(k,"position",new L(j,w.position.y,w.position.z)),min:-10,max:10,step:.5}),A.jsx(qe,{label:"Position Y",value:w.position.y,onChange:j=>Xo(k,"position",new L(w.position.x,j,w.position.z)),min:-10,max:10,step:.5}),A.jsx(qe,{label:"Position Z",value:w.position.z,onChange:j=>Xo(k,"position",new L(w.position.x,w.position.y,j)),min:-10,max:10,step:.5}),w.type==="orbit"&&A.jsx(qe,{label:"Orbit Radius",value:w.radius,onChange:j=>Xo(k,"radius",j),min:.5,max:10,step:.5})]},w.id)),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Add attractors to create force fields. Point attracts, Vortex spins, Orbit maintains distance, Repulsor pushes away."})]}),A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 100, 200, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 100, 200, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff64c8"},children:"Velocity Coloring"}),A.jsx(gr,{label:"Color Mode",value:$u,onChange:t_,options:["speed","direction","acceleration"]}),A.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Speed: color by velocity magnitude",A.jsx("br",{}),"Direction: hue based on movement direction",A.jsx("br",{}),"Acceleration: highlight sudden changes"]})]}),tt!==null&&A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 200, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 200, 0, 0.3)"},children:[A.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#ffc800"},children:["Selected: ",(($p=Wr[tt])==null?void 0:$p.type)||"Structure"]}),A.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.4"},children:["Drag to move • Shift+Click to select",A.jsx("br",{}),"Click elsewhere to deselect"]}),A.jsx("button",{onClick:()=>{Qe(null),W.current=null},style:{...gt,width:"100%",marginTop:"8px",fontSize:"11px"},children:"Deselect"})]}),ln&&A.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 200, 255, 0.3)"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#00c8ff"},children:"Touch Gestures"}),A.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.6"},children:["• Tap: Shockwave",A.jsx("br",{}),"• Double-tap: Add structure",A.jsx("br",{}),"• Long press: Strong shockwave",A.jsx("br",{}),"• Swipe left/right: Change palette",A.jsx("br",{}),"• 3-finger swipe: Toggle UI"]})]})]}),A.jsxs(Zr,{title:`Structures (${Wr.length})`,expanded:Ii.structures,onToggle:()=>Yr("structures"),children:[A.jsx("button",{onClick:()=>El(),style:{...gt,width:"100%",marginBottom:"10px"},children:"+ Add Structure"}),Wr.map((w,k)=>{var j;return A.jsxs(Z0,{title:`${w.type}`,expanded:Op[w.id],onToggle:()=>Wp(w.id),onDelete:()=>o_(k),children:[A.jsx(gr,{label:"Type",value:w.type,onChange:de=>Ps(k,"type",de),options:["icosahedron","torus","rings","helix","mobius"]}),A.jsx(qe,{label:"Rotation Speed",value:((j=w.rotationSpeed)==null?void 0:j.y)||.2,onChange:de=>Ps(k,"rotationSpeed",{x:de*.5,y:de,z:de*.25}),min:0,max:2,step:.1}),A.jsx(qe,{label:"Pulse Intensity",value:w.pulseIntensity,onChange:de=>Ps(k,"pulseIntensity",de),min:0,max:.5,step:.05}),A.jsx(qe,{label:"Scale",value:w.scale,onChange:de=>Ps(k,"scale",de),min:.2,max:3,step:.1}),A.jsx(gr,{label:"Material",value:w.materialStyle,onChange:de=>Ps(k,"materialStyle",de),options:["glass","holographic","solid"]}),Hn==="nbody"&&A.jsx(qe,{label:"Mass (N-Body)",value:w.mass||1,onChange:de=>Ps(k,"mass",de),min:.1,max:10,step:.1})]},w.id)})]}),A.jsxs(Zr,{title:`Ribbons (${fl.length})`,expanded:Ii.ribbons,onToggle:()=>Yr("ribbons"),children:[A.jsx("button",{onClick:()=>uf(),style:{...gt,width:"100%",marginBottom:"10px"},children:"+ Add Ribbon"}),fl.map((w,k)=>A.jsxs(Z0,{title:`${w.type} Ribbon`,expanded:Op[w.id],onToggle:()=>Wp(w.id),onDelete:()=>a_(k),children:[A.jsx(gr,{label:"Curve Type",value:w.type,onChange:j=>wl(k,"type",j),options:["helix","lissajous","toroidal","spiral"]}),A.jsx(qe,{label:"Animation Speed",value:w.animationSpeed,onChange:j=>wl(k,"animationSpeed",j),min:.1,max:3,step:.1}),A.jsx(qe,{label:"Thickness",value:w.thickness,onChange:j=>wl(k,"thickness",j),min:.02,max:.3,step:.01}),A.jsx(qe,{label:"Glow Intensity",value:w.glowIntensity,onChange:j=>wl(k,"glowIntensity",j),min:.5,max:3,step:.1})]},w.id))]}),A.jsxs(Zr,{title:"Camera",expanded:Ii.camera,onToggle:()=>Yr("camera"),onReset:x_,children:[A.jsxs("div",{style:{padding:"12px",background:"rgba(100, 150, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(100, 150, 255, 0.3)",marginBottom:"12px"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#6496ff"},children:"Camera Presets"}),A.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[A.jsx("button",{onClick:()=>Dn("default"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Default"}),A.jsx("button",{onClick:()=>Dn("topDown"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Top-Down"}),A.jsx("button",{onClick:()=>Dn("side"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Side View"}),A.jsx("button",{onClick:()=>Dn("closeUp"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Close-Up"}),A.jsx("button",{onClick:()=>Dn("wide"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Wide"}),A.jsx("button",{onClick:()=>Dn("cinematic"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Cinematic"}),A.jsx("button",{onClick:()=>Dn("low"),style:{...gt,fontSize:"10px",padding:"6px"},children:"Low Angle"})]}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Smooth camera transitions with Shift+1-6 shortcuts"})]}),A.jsxs("div",{style:{padding:"12px",background:"rgba(255, 150, 100, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 150, 100, 0.3)",marginBottom:"12px"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff9664"},children:"Depth of Field"}),A.jsx(bi,{label:"Enable DOF (Bokeh Effect)",checked:Rs,onChange:sf}),Rs&&A.jsxs(A.Fragment,{children:[A.jsx(qe,{label:"Focus Distance",value:_l,onChange:of,min:1,max:20,step:.5}),A.jsx(qe,{label:"Blur Amount (Aperture)",value:Sl,onChange:af,min:.001,max:.1,step:.001})]}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Cinematic depth of field effect with bokeh blur"})]}),A.jsx(bi,{label:"Auto Rotate",checked:re,onChange:N}),re&&A.jsx(qe,{label:"Rotation Speed",value:fe,onChange:ye,min:.1,max:2,step:.1}),A.jsx(bi,{label:"Immersion Mode",checked:Be,onChange:Oe}),A.jsx("button",{onClick:df,style:{...gt,width:"100%",marginTop:"10px"},children:"Reset Camera"})]}),A.jsxs(Zr,{title:"Audio Reactivity",expanded:Ii.audio,onToggle:()=>Yr("audio"),onReset:y_,children:[A.jsxs("div",{style:{padding:"12px",background:en?"rgba(0, 255, 100, 0.1)":"rgba(255, 100, 100, 0.1)",borderRadius:"4px",border:`1px solid ${en?"rgba(0, 255, 100, 0.3)":"rgba(255, 100, 100, 0.3)"}`,marginBottom:"12px"},children:[A.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"8px",color:en?"#00ff64":"#ff6464"},children:en?"🎵 Audio Active":"🔇 Audio Inactive"}),en?A.jsx("button",{onClick:d_,style:{...gt,width:"100%",background:"rgba(255, 100, 100, 0.2)"},children:"Disconnect Audio"}):A.jsx("button",{onClick:()=>f_("microphone"),style:{...gt,width:"100%"},children:"Connect Microphone"}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Microphone permission required. Audio affects particles, shockwaves, bloom, and more."})]}),en&&A.jsxs(A.Fragment,{children:[A.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px"},children:[A.jsx("div",{style:{fontSize:"11px",marginBottom:"6px",opacity:.7},children:"Frequency Levels"}),A.jsxs("div",{style:{display:"flex",gap:"8px",fontSize:"10px"},children:[A.jsxs("div",{style:{flex:1},children:[A.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Bass"}),A.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:A.jsx("div",{style:{height:"100%",width:`${Dt*100}%`,background:"#ff4444",transition:"width 0.1s"}})})]}),A.jsxs("div",{style:{flex:1},children:[A.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Mid"}),A.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:A.jsx("div",{style:{height:"100%",width:`${tl*100}%`,background:"#44ff44",transition:"width 0.1s"}})})]}),A.jsxs("div",{style:{flex:1},children:[A.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"High"}),A.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:A.jsx("div",{style:{height:"100%",width:`${Bo*100}%`,background:"#4444ff",transition:"width 0.1s"}})})]})]})]}),A.jsx(qe,{label:"Beat Threshold",value:wi,onChange:Ho,min:.3,max:.9,step:.05}),A.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Mappings:",A.jsx("br",{}),"• Bass → Shockwaves + Structure pulse",A.jsx("br",{}),"• Mid → Particle turbulence",A.jsx("br",{}),"• High → Chromatic aberration",A.jsx("br",{}),"• Volume → Bloom + Wave amplitude"]})]})]}),A.jsxs(Zr,{title:"Screenshot & Recording",expanded:Ii.media,onToggle:()=>Yr("media"),children:[A.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[A.jsx("button",{onClick:()=>Hp(2),style:{...gt},children:"📸 Screenshot (2x)"}),A.jsx("button",{onClick:()=>Hp(4),style:{...gt},children:"📸 HQ (4x)"})]}),A.jsxs("div",{style:{padding:"12px",background:qt?"rgba(255, 50, 50, 0.1)":"rgba(50, 50, 70, 0.1)",borderRadius:"4px",border:`1px solid ${qt?"rgba(255, 50, 50, 0.3)":"rgba(50, 50, 70, 0.3)"}`,marginBottom:"10px"},children:[qt?A.jsx("button",{onClick:p_,style:{...gt,width:"100%",background:"rgba(255, 50, 50, 0.3)",border:"1px solid rgba(255, 50, 50, 0.5)",animation:"pulse 1s infinite"},children:"⏹️ Stop Recording"}):A.jsx("button",{onClick:h_,style:{...gt,width:"100%",background:"rgba(255, 50, 50, 0.2)",border:"1px solid rgba(255, 50, 50, 0.4)"},children:"🔴 Start Recording"}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4",textAlign:"center"},children:qt?"Recording at 30fps...":"Capture WebM video at 30fps"})]}),A.jsx("div",{style:{fontSize:"10px",opacity:.6,lineHeight:"1.4"},children:"Screenshots are saved at 2x or 4x native resolution for high quality prints and social media."})]}),A.jsx("div",{style:{padding:"15px 20px",textAlign:"center",opacity:.5,fontSize:"11px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:"Drag to orbit | Scroll to zoom | Press ? for help"}),A.jsx("div",{style:{padding:"10px 20px 20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:A.jsx("button",{onClick:()=>Le(!0),style:{...gt,width:"100%",background:"linear-gradient(135deg, rgba(0, 255, 170, 0.2), rgba(0, 170, 255, 0.2))",border:"1px solid rgba(0, 255, 170, 0.4)"},children:"Open Preset Gallery"})})]}),!be&&A.jsxs("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"10px",zIndex:100},children:[A.jsx("button",{onClick:()=>Ie(!0),style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"18px",cursor:"pointer",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Keyboard Shortcuts (?)",children:"?"}),A.jsx("button",{onClick:()=>je(!0),style:{padding:"10px 20px",borderRadius:"20px",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"12px",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"system-ui, -apple-system, sans-serif"},title:"Show UI (H)",children:"Show UI"})]}),A.jsx("style",{children:`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
      `})]})}const gt={background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",padding:"8px 16px",cursor:"pointer",fontSize:"12px",transition:"all 0.2s",flex:1};function Zr({title:t,expanded:e,onToggle:n,onReset:i,children:r}){return A.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[A.jsxs("div",{style:{padding:"12px 20px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255, 255, 255, 0.03)",gap:"10px"},children:[A.jsx("span",{onClick:n,style:{fontWeight:"500",letterSpacing:"0.5px",flex:1},children:t}),A.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[i&&A.jsx("button",{onClick:s=>{s.stopPropagation(),i()},style:{padding:"4px 8px",fontSize:"10px",background:"rgba(255, 170, 0, 0.2)",border:"1px solid rgba(255, 170, 0, 0.4)",borderRadius:"3px",color:"#ffaa00",cursor:"pointer",fontWeight:"500"},onMouseEnter:s=>{s.target.style.background="rgba(255, 170, 0, 0.3)"},onMouseLeave:s=>{s.target.style.background="rgba(255, 170, 0, 0.2)"},children:"Reset"}),A.jsx("span",{onClick:n,style:{opacity:.5},children:e?"−":"+"})]})]}),e&&A.jsx("div",{style:{padding:"10px 20px"},children:r})]})}function Z0({title:t,expanded:e,onToggle:n,onDelete:i,children:r}){return A.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"4px",marginBottom:"8px",overflow:"hidden"},children:[A.jsxs("div",{style:{padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:n,children:[A.jsx("span",{style:{fontSize:"12px",textTransform:"capitalize"},children:t}),A.jsxs("div",{style:{display:"flex",gap:"8px"},children:[A.jsx("span",{style:{opacity:.5,fontSize:"12px"},children:e?"−":"+"}),A.jsx("button",{onClick:s=>{s.stopPropagation(),i()},style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]})]}),e&&A.jsx("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:r})]})}function qe({label:t,value:e,onChange:n,min:i,max:r,step:s}){return A.jsxs("div",{style:{marginBottom:"12px"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",fontSize:"11px"},children:[A.jsx("span",{style:{opacity:.7},children:t}),A.jsx("span",{style:{opacity:.5},children:typeof e=="number"?e.toFixed(2):e})]}),A.jsx("input",{type:"range",value:e,onChange:o=>n(parseFloat(o.target.value)),min:i,max:r,step:s,style:{width:"100%",height:"4px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"2px",appearance:"none",cursor:"pointer"}})]})}function gr({label:t,value:e,onChange:n,options:i}){return A.jsxs("div",{style:{marginBottom:"12px"},children:[A.jsx("div",{style:{fontSize:"11px",opacity:.7,marginBottom:"4px"},children:t}),A.jsx("select",{value:e,onChange:r=>n(r.target.value),style:{width:"100%",padding:"6px 10px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",fontSize:"12px",cursor:"pointer"},children:i.map(r=>A.jsx("option",{value:r,style:{background:"#1a1a2e"},children:r},r))})]})}function bi({label:t,checked:e,onChange:n}){return A.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",cursor:"pointer",fontSize:"12px"},children:[A.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{cursor:"pointer"}}),A.jsx("span",{style:{opacity:.8},children:t})]})}const lC=bd.createRoot(document.getElementById("root"));lC.render(A.jsx(aC,{}));
