(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var l0={exports:{}},Pc={},c0={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),By=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Vy=Symbol.for("react.strict_mode"),Gy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Xy=Symbol.for("react.forward_ref"),Yy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),$y=Symbol.for("react.lazy"),mp=Symbol.iterator;function Ky(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var u0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,d0={};function go(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||u0}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h0(){}h0.prototype=go.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||u0}var Rd=Cd.prototype=new h0;Rd.constructor=Cd;f0(Rd,go.prototype);Rd.isPureReactComponent=!0;var gp=Array.isArray,p0=Object.prototype.hasOwnProperty,Pd={current:null},m0={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p0.call(e,i)&&!m0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:Pd.current}}function Qy(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function Bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case By:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fu(o,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Bl(r,e,n,"",function(c){return c})):r!=null&&(Ld(r)&&(r=Qy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fu(s,a);o+=Bl(s,e,n,l,r)}else if(l=Ky(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fu(s,a++),o+=Bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Hl={transition:null},e_={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Pd};function v0(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=go;ct.Fragment=Hy;ct.Profiler=Gy;ct.PureComponent=Cd;ct.StrictMode=Vy;ct.Suspense=Yy;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;ct.act=v0;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=f0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)p0.call(e,l)&&!m0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(t){return t={$$typeof:jy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};ct.createElement=g0;ct.createFactory=function(t){var e=g0.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:Xy,render:t}};ct.isValidElement=Ld;ct.lazy=function(t){return{$$typeof:$y,_payload:{_status:-1,_result:t},_init:Jy}};ct.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};ct.unstable_act=v0;ct.useCallback=function(t,e){return wn.current.useCallback(t,e)};ct.useContext=function(t){return wn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return wn.current.useEffect(t,e)};ct.useId=function(){return wn.current.useId()};ct.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return wn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};ct.useRef=function(t){return wn.current.useRef(t)};ct.useState=function(t){return wn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return wn.current.useTransition()};ct.version="18.3.1";c0.exports=ct;var z=c0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_=z,n_=Symbol.for("react.element"),i_=Symbol.for("react.fragment"),r_=Object.prototype.hasOwnProperty,s_=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o_={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)r_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n_,type:t,key:s,ref:o,props:r,_owner:s_.current}}Pc.Fragment=i_;Pc.jsx=x0;Pc.jsxs=x0;l0.exports=Pc;var L=l0.exports,Ef={},y0={exports:{}},Xn={},_0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var H=I.length;I.push(G);e:for(;0<H;){var ee=H-1>>>1,re=I[ee];if(0<r(re,G))I[ee]=G,I[H]=re,H=ee;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],H=I.pop();if(H!==G){I[0]=H;e:for(var ee=0,re=I.length,Q=re>>>1;ee<Q;){var te=2*(ee+1)-1,he=I[te],Se=te+1,we=I[Se];if(0>r(he,H))Se<re&&0>r(we,he)?(I[ee]=we,I[Se]=H,ee=Se):(I[ee]=he,I[te]=H,ee=te);else if(Se<re&&0>r(we,H))I[ee]=we,I[Se]=H,ee=Se;else break e}}return G}function r(I,G){var H=I.sortIndex-G.sortIndex;return H!==0?H:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function _(I){if(y=!1,v(I),!x)if(n(l)!==null)x=!0,q(b);else{var G=n(c);G!==null&&J(_,G.startTime-I)}}function b(I,G){x=!1,y&&(y=!1,u(U),U=-1),m=!0;var H=h;try{for(v(G),d=n(l);d!==null&&(!(d.expirationTime>G)||I&&!B());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var re=ee(d.expirationTime<=G);G=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&i(l),v(G)}else i(l);d=n(l)}if(d!==null)var Q=!0;else{var te=n(c);te!==null&&J(_,te.startTime-G),Q=!1}return Q}finally{d=null,h=H,m=!1}}var T=!1,E=null,U=-1,S=5,w=-1;function B(){return!(t.unstable_now()-w<S)}function Y(){if(E!==null){var I=t.unstable_now();w=I;var G=!0;try{G=E(!0,I)}finally{G?ie():(T=!1,E=null)}}else T=!1}var ie;if(typeof g=="function")ie=function(){g(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=Y,ie=function(){V.postMessage(null)}}else ie=function(){p(Y,0)};function q(I){E=I,T||(T=!0,ie())}function J(I,G){U=p(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,q(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var H=h;h=G;try{return I()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=h;h=I;try{return G()}finally{h=H}},t.unstable_scheduleCallback=function(I,G,H){var ee=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=H+re,I={id:f++,callback:G,priorityLevel:I,startTime:H,expirationTime:re,sortIndex:-1},H>ee?(I.sortIndex=H,e(c,I),n(l)===null&&I===n(c)&&(y?(u(U),U=-1):y=!0,J(_,H-ee))):(I.sortIndex=re,e(l,I),x||m||(x=!0,q(b))),I},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(I){var G=h;return function(){var H=h;h=G;try{return I.apply(this,arguments)}finally{h=H}}}})(S0);_0.exports=S0;var a_=_0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=z,jn=a_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,oa={};function os(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(oa[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,c_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},yp={};function u_(t){return wf.call(yp,t)?!0:wf.call(xp,t)?!1:c_.test(t)?yp[t]=!0:(xp[t]=!0,!1)}function f_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d_(t,e,n,i){if(e===null||typeof e>"u"||f_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){un[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];un[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){un[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){un[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){un[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){un[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){un[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){un[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){un[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Ud);un[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Ud);un[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Ud);un[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){un[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});un.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){un[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d_(e,n,r,i)&&(n=null),i||r===null?u_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),T0=Symbol.for("react.offscreen"),_p=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,du;function Ho(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function h_(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function Cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Us:return"Portal";case Tf:return"Profiler";case Id:return"StrictMode";case bf:return"Suspense";case Af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case E0:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:Cf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Cf(t(e))}catch{}}return null}function p_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cf(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m_(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=m_(t))}function A0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C0(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function Pf(t,e){C0(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lf(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Vo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function R0(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function P0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?P0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,L0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g_=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){g_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=D0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var v_=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(v_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,$s=null,Ks=null;function Tp(t){if(t=Ra(t)){if(typeof Of!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Ic(e),Of(t.stateNode,t.type,e))}}function N0(t){$s?Ks?Ks.push(t):Ks=[t]:$s=t}function I0(){if($s){var t=$s,e=Ks;if(Ks=$s=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function F0(t,e){return t(e)}function O0(){}var mu=!1;function z0(t,e,n){if(mu)return t(e,n);mu=!0;try{return F0(t,e,n)}finally{mu=!1,($s!==null||Ks!==null)&&(O0(),I0())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var zf=!1;if(Wi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){zf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{zf=!1}function x_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Yo=!1,ec=null,tc=!1,kf=null,y_={onError:function(t){Yo=!0,ec=t}};function __(t,e,n,i,r,s,o,a,l){Yo=!1,ec=null,x_.apply(y_,arguments)}function S_(t,e,n,i,r,s,o,a,l){if(__.apply(this,arguments),Yo){if(Yo){var c=ec;Yo=!1,ec=null}else throw Error(ce(198));tc||(tc=!0,kf=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(as(t)!==t)throw Error(ce(188))}function M_(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bp(r),t;if(s===i)return bp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function B0(t){return t=M_(t),t!==null?H0(t):null}function H0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H0(t);if(e!==null)return e;t=t.sibling}return null}var V0=jn.unstable_scheduleCallback,Ap=jn.unstable_cancelCallback,E_=jn.unstable_shouldYield,w_=jn.unstable_requestPaint,Bt=jn.unstable_now,T_=jn.unstable_getCurrentPriorityLevel,kd=jn.unstable_ImmediatePriority,G0=jn.unstable_UserBlockingPriority,nc=jn.unstable_NormalPriority,b_=jn.unstable_LowPriority,W0=jn.unstable_IdlePriority,Lc=null,Ti=null;function A_(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var gi=Math.clz32?Math.clz32:P_,C_=Math.log,R_=Math.LN2;function P_(t){return t>>>=0,t===0?32:31-(C_(t)/R_|0)|0}var Ka=64,Qa=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-gi(e),r=1<<n,i|=t[n],e&=~r;return i}function L_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=L_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gi(e),t[e]=n}function U_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-gi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function X0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,Hd,q0,$0,K0,Hf=!1,Za=[],pr=null,mr=null,gr=null,ca=new Map,ua=new Map,cr=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function I_(t,e,n,i,r){switch(e){case"focusin":return pr=Po(pr,t,e,n,i,r),!0;case"dragenter":return mr=Po(mr,t,e,n,i,r),!0;case"mouseover":return gr=Po(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Po(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Po(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=Xr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=k0(n),e!==null){t.blockedOn=e,K0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ff=i,n.target.dispatchEvent(i),Ff=null}else return e=Ra(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){Vl(t)&&n.delete(e)}function F_(){Hf=!1,pr!==null&&Vl(pr)&&(pr=null),mr!==null&&Vl(mr)&&(mr=null),gr!==null&&Vl(gr)&&(gr=null),ca.forEach(Rp),ua.forEach(Rp)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,F_)))}function fa(t){function e(r){return Lo(r,t)}if(0<Za.length){Lo(Za[0],t);for(var n=1;n<Za.length;n++){var i=Za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&Lo(pr,t),mr!==null&&Lo(mr,t),gr!==null&&Lo(gr,t),ca.forEach(e),ua.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&cr.shift()}var Qs=$i.ReactCurrentBatchConfig,rc=!0;function O_(t,e,n,i){var r=pt,s=Qs.transition;Qs.transition=null;try{pt=1,Vd(t,e,n,i)}finally{pt=r,Qs.transition=s}}function z_(t,e,n,i){var r=pt,s=Qs.transition;Qs.transition=null;try{pt=4,Vd(t,e,n,i)}finally{pt=r,Qs.transition=s}}function Vd(t,e,n,i){if(rc){var r=Vf(t,e,n,i);if(r===null)bu(t,e,i,sc,n),Cp(t,i);else if(I_(r,t,e,n,i))i.stopPropagation();else if(Cp(t,i),e&4&&-1<N_.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&Y0(s),s=Vf(t,e,n,i),s===null&&bu(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bu(t,e,i,null,n)}}var sc=null;function Vf(t,e,n,i){if(sc=null,t=zd(i),t=Xr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function Z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T_()){case kd:return 1;case G0:return 4;case nc:case b_:return 16;case W0:return 536870912;default:return 16}default:return 16}}var fr=null,Gd=null,Gl=null;function J0(){if(Gl)return Gl;var t,e=Gd,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Gl=r.slice(t,1<i?1-i:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Pp(){return!1}function Yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Pp,this.isPropagationStopped=Pp,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Yn(vo),Ca=Ft({},vo,{view:0,detail:0}),k_=Yn(Ca),vu,xu,Do,Dc=Ft({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(vu=t.screenX-Do.screenX,xu=t.screenY-Do.screenY):xu=vu=0,Do=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Lp=Yn(Dc),B_=Ft({},Dc,{dataTransfer:0}),H_=Yn(B_),V_=Ft({},Ca,{relatedTarget:0}),yu=Yn(V_),G_=Ft({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=Yn(G_),j_=Ft({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X_=Yn(j_),Y_=Ft({},vo,{data:0}),Dp=Yn(Y_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function jd(){return Q_}var Z_=Ft({},Ca,{key:function(t){if(t.key){var e=q_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J_=Yn(Z_),eS=Ft({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Yn(eS),tS=Ft({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),nS=Yn(tS),iS=Ft({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=Yn(iS),sS=Ft({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=Yn(sS),aS=[9,13,27,32],Xd=Wi&&"CompositionEvent"in window,qo=null;Wi&&"documentMode"in document&&(qo=document.documentMode);var lS=Wi&&"TextEvent"in window&&!qo,ev=Wi&&(!Xd||qo&&8<qo&&11>=qo),Np=" ",Ip=!1;function tv(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function cS(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Ip=!0,Np);case"textInput":return t=e.data,t===Np&&Ip?null:t;default:return null}}function uS(t,e){if(Is)return t==="compositionend"||!Xd&&tv(t,e)?(t=J0(),Gl=Gd=fr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fS[t.type]:e==="textarea"}function iv(t,e,n,i){N0(i),e=oc(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,da=null;function dS(t){pv(t,0)}function Uc(t){var e=zs(t);if(A0(e))return t}function hS(t,e){if(t==="change")return e}var rv=!1;if(Wi){var _u;if(Wi){var Su="oninput"in document;if(!Su){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Su=typeof Op.oninput=="function"}_u=Su}else _u=!1;rv=_u&&(!document.documentMode||9<document.documentMode)}function zp(){$o&&($o.detachEvent("onpropertychange",sv),da=$o=null)}function sv(t){if(t.propertyName==="value"&&Uc(da)){var e=[];iv(e,da,t,zd(t)),z0(dS,e)}}function pS(t,e,n){t==="focusin"?(zp(),$o=e,da=n,$o.attachEvent("onpropertychange",sv)):t==="focusout"&&zp()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(da)}function gS(t,e){if(t==="click")return Uc(e)}function vS(t,e){if(t==="input"||t==="change")return Uc(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xi=typeof Object.is=="function"?Object.is:xS;function ha(t,e){if(xi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wf.call(e,r)||!xi(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(i!==null&&Yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bp(n,s);var o=Bp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _S=Wi&&"documentMode"in document&&11>=document.documentMode,Fs=null,Gf=null,Ko=null,Wf=!1;function Hp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Fs==null||Fs!==Jl(i)||(i=Fs,"selectionStart"in i&&Yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&ha(Ko,i)||(Ko=i,i=oc(Gf,"onSelect"),0<i.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Mu={},lv={};Wi&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Nc(t){if(Mu[t])return Mu[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Mu[t]=e[n];return t}var cv=Nc("animationend"),uv=Nc("animationiteration"),fv=Nc("animationstart"),dv=Nc("transitionend"),hv=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){hv.set(t,e),os(e,[t])}for(var Eu=0;Eu<Vp.length;Eu++){var wu=Vp[Eu],SS=wu.toLowerCase(),MS=wu[0].toUpperCase()+wu.slice(1);Cr(SS,"on"+MS)}Cr(cv,"onAnimationEnd");Cr(uv,"onAnimationIteration");Cr(fv,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(dv,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,S_(i,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}}}if(tc)throw t=kf,tc=!1,kf=null,t}function wt(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var i=t+"__bubble";n.has(i)||(mv(e,t,2,!1),n.add(i))}function Tu(t,e,n){var i=0;e&&(i|=4),mv(n,t,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[tl]){t[tl]=!0,M0.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Tu("selectionchange",!1,e))}}function mv(t,e,n,i){switch(Z0(e)){case 1:var r=O_;break;case 4:r=z_;break;default:r=Vd}n=r.bind(null,e,n,t),r=void 0,!zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}z0(function(){var c=s,f=zd(n),d=[];e:{var h=hv.get(t);if(h!==void 0){var m=Wd,x=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":m=J_;break;case"focusin":x="focus",m=yu;break;case"focusout":x="blur",m=yu;break;case"beforeblur":case"afterblur":m=yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nS;break;case cv:case uv:case fv:m=W_;break;case dv:m=rS;break;case"scroll":m=k_;break;case"wheel":m=oS;break;case"copy":case"cut":case"paste":m=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Up}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,u!==null&&(_=la(g,u),_!=null&&y.push(ma(g,_,v)))),p)break;g=g.return}0<y.length&&(h=new m(h,x,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ff&&(x=n.relatedTarget||n.fromElement)&&(Xr(x)||x[ji]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Xr(x):null,x!==null&&(p=as(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=Lp,_="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Up,_="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:zs(m),v=x==null?h:zs(x),h=new y(_,g+"leave",m,n,f),h.target=p,h.relatedTarget=v,_=null,Xr(f)===c&&(y=new y(u,g+"enter",x,n,f),y.target=v,y.relatedTarget=p,_=y),p=_,m&&x)t:{for(y=m,u=x,g=0,v=y;v;v=ps(v))g++;for(v=0,_=u;_;_=ps(_))v++;for(;0<g-v;)y=ps(y),g--;for(;0<v-g;)u=ps(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=ps(y),u=ps(u)}y=null}else y=null;m!==null&&Wp(d,h,m,y,!1),x!==null&&p!==null&&Wp(d,p,x,y,!0)}}e:{if(h=c?zs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=hS;else if(Fp(h))if(rv)b=vS;else{b=mS;var T=pS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=gS);if(b&&(b=b(t,c))){iv(d,b,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Lf(h,"number",h.value)}switch(T=c?zs(c):window,t){case"focusin":(Fp(T)||T.contentEditable==="true")&&(Fs=T,Gf=c,Ko=null);break;case"focusout":Ko=Gf=Fs=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Hp(d,n,f);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Hp(d,n,f)}var E;if(Xd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Is?tv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(ev&&n.locale!=="ko"&&(Is||U!=="onCompositionStart"?U==="onCompositionEnd"&&Is&&(E=J0()):(fr=f,Gd="value"in fr?fr.value:fr.textContent,Is=!0)),T=oc(c,U),0<T.length&&(U=new Dp(U,t,null,n,f),d.push({event:U,listeners:T}),E?U.data=E:(E=nv(n),E!==null&&(U.data=E)))),(E=lS?cS(t,n):uS(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(f=new Dp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}pv(d,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wS=/\r\n?/g,TS=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(TS,"")}function nl(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(ce(425))}function ac(){}var jf=null,Xf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(CS)}:qf;function CS(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+xo,ga="__reactProps$"+xo,ji="__reactContainer$"+xo,$f="__reactEvents$"+xo,RS="__reactListeners$"+xo,PS="__reactHandles$"+xo;function Xr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[Ei])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Ei]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Ic(t){return t[ga]||null}var Kf=[],ks=-1;function Rr(t){return{current:t}}function bt(t){0>ks||(t.current=Kf[ks],Kf[ks]=null,ks--)}function Mt(t,e){ks++,Kf[ks]=t.current,t.current=e}var Tr={},vn=Rr(Tr),Dn=Rr(!1),es=Tr;function io(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Un(t){return t=t.childContextTypes,t!=null}function lc(){bt(Dn),bt(vn)}function qp(t,e,n){if(vn.current!==Tr)throw Error(ce(168));Mt(vn,e),Mt(Dn,n)}function gv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,p_(t)||"Unknown",r));return Ft({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,es=vn.current,Mt(vn,t),Mt(Dn,Dn.current),!0}function $p(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=gv(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,bt(Dn),bt(vn),Mt(vn,t)):bt(Dn),Mt(Dn,n)}var ki=null,Fc=!1,Cu=!1;function vv(t){ki===null?ki=[t]:ki.push(t)}function LS(t){Fc=!0,vv(t)}function Pr(){if(!Cu&&ki!==null){Cu=!0;var t=0,e=pt;try{var n=ki;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,Fc=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),V0(kd,Pr),r}finally{pt=e,Cu=!1}}return null}var Bs=[],Hs=0,uc=null,fc=0,$n=[],Kn=0,ts=null,Bi=1,Hi="";function Hr(t,e){Bs[Hs++]=fc,Bs[Hs++]=uc,uc=t,fc=e}function xv(t,e,n){$n[Kn++]=Bi,$n[Kn++]=Hi,$n[Kn++]=ts,ts=t;var i=Bi;t=Hi;var r=32-gi(i)-1;i&=~(1<<r),n+=1;var s=32-gi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-gi(e)+r|n<<r|i,Hi=s+t}else Bi=1<<s|n<<r|i,Hi=t}function qd(t){t.return!==null&&(Hr(t,1),xv(t,1,0))}function $d(t){for(;t===uc;)uc=Bs[--Hs],Bs[Hs]=null,fc=Bs[--Hs],Bs[Hs]=null;for(;t===ts;)ts=$n[--Kn],$n[Kn]=null,Hi=$n[--Kn],$n[Kn]=null,Bi=$n[--Kn],$n[Kn]=null}var Gn=null,Vn=null,Rt=!1,mi=null;function yv(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Bi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Vn=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Rt){var e=Vn;if(e){var n=e;if(!Kp(t,e)){if(Qf(t))throw Error(ce(418));e=vr(n.nextSibling);var i=Gn;e&&Kp(t,e)?yv(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Gn=t)}}else{if(Qf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Rt=!1,Gn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function il(t){if(t!==Gn)return!1;if(!Rt)return Qp(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Vn)){if(Qf(t))throw _v(),Error(ce(418));for(;e;)yv(t,e),e=vr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Gn?vr(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=Vn;t;)t=vr(t.nextSibling)}function ro(){Vn=Gn=null,Rt=!1}function Kd(t){mi===null?mi=[t]:mi.push(t)}var DS=$i.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zp(t){var e=t._init;return e(t._payload)}function Sv(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Sr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,_){return g===null||g.tag!==6?(g=Iu(v,u.mode,_),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,_){var b=v.type;return b===Ns?f(u,g,v.props.children,_,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Zp(b)===g.type)?(_=r(g,v.props),_.ref=Uo(u,g,v),_.return=u,_):(_=Ql(v.type,v.key,v.props,null,u.mode,_),_.ref=Uo(u,g,v),_.return=u,_)}function c(u,g,v,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Fu(v,u.mode,_),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,_,b){return g===null||g.tag!==7?(g=Kr(v,u.mode,_,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Iu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ya:return v=Ql(g.type,g.key,g.props,null,u.mode,v),v.ref=Uo(u,null,g),v.return=u,v;case Us:return g=Fu(g,u.mode,v),g.return=u,g;case ar:var _=g._init;return d(u,_(g._payload),v)}if(Vo(g)||Co(g))return g=Kr(g,u.mode,v,null),g.return=u,g;rl(u,g)}return null}function h(u,g,v,_){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,g,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:return v.key===b?l(u,g,v,_):null;case Us:return v.key===b?c(u,g,v,_):null;case ar:return b=v._init,h(u,g,b(v._payload),_)}if(Vo(v)||Co(v))return b!==null?null:f(u,g,v,_,null);rl(u,v)}return null}function m(u,g,v,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(v)||null,a(g,u,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return u=u.get(_.key===null?v:_.key)||null,l(g,u,_,b);case Us:return u=u.get(_.key===null?v:_.key)||null,c(g,u,_,b);case ar:var T=_._init;return m(u,g,v,T(_._payload),b)}if(Vo(_)||Co(_))return u=u.get(v)||null,f(g,u,_,b,null);rl(g,_)}return null}function x(u,g,v,_){for(var b=null,T=null,E=g,U=g=0,S=null;E!==null&&U<v.length;U++){E.index>U?(S=E,E=null):S=E.sibling;var w=h(u,E,v[U],_);if(w===null){E===null&&(E=S);break}t&&E&&w.alternate===null&&e(u,E),g=s(w,g,U),T===null?b=w:T.sibling=w,T=w,E=S}if(U===v.length)return n(u,E),Rt&&Hr(u,U),b;if(E===null){for(;U<v.length;U++)E=d(u,v[U],_),E!==null&&(g=s(E,g,U),T===null?b=E:T.sibling=E,T=E);return Rt&&Hr(u,U),b}for(E=i(u,E);U<v.length;U++)S=m(E,u,U,v[U],_),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?U:S.key),g=s(S,g,U),T===null?b=S:T.sibling=S,T=S);return t&&E.forEach(function(B){return e(u,B)}),Rt&&Hr(u,U),b}function y(u,g,v,_){var b=Co(v);if(typeof b!="function")throw Error(ce(150));if(v=b.call(v),v==null)throw Error(ce(151));for(var T=b=null,E=g,U=g=0,S=null,w=v.next();E!==null&&!w.done;U++,w=v.next()){E.index>U?(S=E,E=null):S=E.sibling;var B=h(u,E,w.value,_);if(B===null){E===null&&(E=S);break}t&&E&&B.alternate===null&&e(u,E),g=s(B,g,U),T===null?b=B:T.sibling=B,T=B,E=S}if(w.done)return n(u,E),Rt&&Hr(u,U),b;if(E===null){for(;!w.done;U++,w=v.next())w=d(u,w.value,_),w!==null&&(g=s(w,g,U),T===null?b=w:T.sibling=w,T=w);return Rt&&Hr(u,U),b}for(E=i(u,E);!w.done;U++,w=v.next())w=m(E,u,U,w.value,_),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?U:w.key),g=s(w,g,U),T===null?b=w:T.sibling=w,T=w);return t&&E.forEach(function(Y){return e(u,Y)}),Rt&&Hr(u,U),b}function p(u,g,v,_){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:e:{for(var b=v.key,T=g;T!==null;){if(T.key===b){if(b=v.type,b===Ns){if(T.tag===7){n(u,T.sibling),g=r(T,v.props.children),g.return=u,u=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Zp(b)===T.type){n(u,T.sibling),g=r(T,v.props),g.ref=Uo(u,T,v),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===Ns?(g=Kr(v.props.children,u.mode,_,v.key),g.return=u,u=g):(_=Ql(v.type,v.key,v.props,null,u.mode,_),_.ref=Uo(u,g,v),_.return=u,u=_)}return o(u);case Us:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Fu(v,u.mode,_),g.return=u,u=g}return o(u);case ar:return T=v._init,p(u,g,T(v._payload),_)}if(Vo(v))return x(u,g,v,_);if(Co(v))return y(u,g,v,_);rl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Iu(v,u.mode,_),g.return=u,u=g),o(u)):n(u,g)}return p}var so=Sv(!0),Mv=Sv(!1),dc=Rr(null),hc=null,Vs=null,Qd=null;function Zd(){Qd=Vs=hc=null}function Jd(t){var e=dc.current;bt(dc),t._currentValue=e}function Jf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){hc=t,Qd=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ln=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(hc===null)throw Error(ce(308));Vs=t,hc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Yr=null;function eh(t){Yr===null?Yr=[t]:Yr.push(t)}function Ev(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}function Jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=Ft({},d,h);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=d}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Pa={},bi=Rr(Pa),va=Rr(Pa),xa=Rr(Pa);function qr(t){if(t===Pa)throw Error(ce(174));return t}function nh(t,e){switch(Mt(xa,e),Mt(va,t),Mt(bi,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uf(e,t)}bt(bi),Mt(bi,e)}function oo(){bt(bi),bt(va),bt(xa)}function Tv(t){qr(xa.current);var e=qr(bi.current),n=Uf(e,t.type);e!==n&&(Mt(va,t),Mt(bi,n))}function ih(t){va.current===t&&(bt(bi),bt(va))}var Ut=Rr(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function rh(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Xl=$i.ReactCurrentDispatcher,Pu=$i.ReactCurrentBatchConfig,ns=0,It=null,Yt=null,Jt=null,gc=!1,Qo=!1,ya=0,US=0;function fn(){throw Error(ce(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xi(t[n],e[n]))return!1;return!0}function oh(t,e,n,i,r,s){if(ns=s,It=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?OS:zS,t=n(i,r),Qo){s=0;do{if(Qo=!1,ya=0,25<=s)throw Error(ce(301));s+=1,Jt=Yt=null,e.updateQueue=null,Xl.current=kS,t=n(i,r)}while(Qo)}if(Xl.current=vc,e=Yt!==null&&Yt.next!==null,ns=0,Jt=Yt=It=null,gc=!1,e)throw Error(ce(300));return t}function ah(){var t=ya!==0;return ya=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?It.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function si(){if(Yt===null){var t=It.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=Jt===null?It.memoizedState:Jt.next;if(e!==null)Jt=e,Yt=t;else{if(t===null)throw Error(ce(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?It.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function _a(t,e){return typeof e=="function"?e(t):e}function Lu(t){var e=si(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ns&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,It.lanes|=f,is|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,xi(i,e.memoizedState)||(Ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,It.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Du(t){var e=si(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);xi(s,e.memoizedState)||(Ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bv(){}function Av(t,e){var n=It,i=si(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Ln=!0),i=i.queue,lh(Pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,Rv.bind(null,n,i,r,e),void 0,null),nn===null)throw Error(ce(349));ns&30||Cv(n,e,r)}return r}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Dv(t)}function Pv(t,e,n){return n(function(){Lv(e)&&Dv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xi(t,n)}catch{return!0}}function Dv(t){var e=Xi(t,1);e!==null&&vi(e,t,1,-1)}function tm(t){var e=Si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=FS.bind(null,It,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uv(){return si().memoizedState}function Yl(t,e,n,i){var r=Si();It.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Oc(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var o=Yt.memoizedState;if(s=o.destroy,i!==null&&sh(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}It.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function nm(t,e){return Yl(8390656,8,t,e)}function lh(t,e){return Oc(2048,8,t,e)}function Nv(t,e){return Oc(4,2,t,e)}function Iv(t,e){return Oc(4,4,t,e)}function Fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ov(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,Fv.bind(null,e,t),n)}function ch(){}function zv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bv(t,e,n){return ns&21?(xi(n,e)||(n=j0(),It.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=n)}function NS(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Pu.transition;Pu.transition={};try{t(!1),e()}finally{pt=n,Pu.transition=i}}function Hv(){return si().memoizedState}function IS(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Gv(e,n);else if(n=Ev(t,e,n,i),n!==null){var r=En();vi(n,t,i,r),Wv(n,e,i)}}function FS(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,xi(a,o)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ev(t,e,r,i),n!==null&&(r=En(),vi(n,t,i,r),Wv(n,e,i))}}function Vv(t){var e=t.alternate;return t===It||e!==null&&e===It}function Gv(t,e){Qo=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}var vc={readContext:ri,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},OS={readContext:ri,useCallback:function(t,e){return Si().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,Fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=Si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=IS.bind(null,It,t),[i.memoizedState,t]},useRef:function(t){var e=Si();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:ch,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=NS.bind(null,t[1]),Si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=It,r=Si();if(Rt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),nn===null)throw Error(ce(349));ns&30||Cv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nm(Pv.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,Rv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Si(),e=nn.identifierPrefix;if(Rt){var n=Hi,i=Bi;n=(i&~(1<<32-gi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=US++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zS={readContext:ri,useCallback:zv,useContext:ri,useEffect:lh,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:kv,useReducer:Lu,useRef:Uv,useState:function(){return Lu(_a)},useDebugValue:ch,useDeferredValue:function(t){var e=si();return Bv(e,Yt.memoizedState,t)},useTransition:function(){var t=Lu(_a)[0],e=si().memoizedState;return[t,e]},useMutableSource:bv,useSyncExternalStore:Av,useId:Hv,unstable_isNewReconciler:!1},kS={readContext:ri,useCallback:zv,useContext:ri,useEffect:lh,useImperativeHandle:Ov,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:kv,useReducer:Du,useRef:Uv,useState:function(){return Du(_a)},useDebugValue:ch,useDeferredValue:function(t){var e=si();return Yt===null?e.memoizedState=t:Bv(e,Yt.memoizedState,t)},useTransition:function(){var t=Du(_a)[0],e=si().memoizedState;return[t,e]},useMutableSource:bv,useSyncExternalStore:Av,useId:Hv,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=En(),r=_r(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(vi(e,t,r,i),jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=En(),r=_r(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(vi(e,t,r,i),jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=En(),i=_r(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(vi(e,t,i,n),jl(e,t,i))}};function im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function jv(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Un(e)?es:vn.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Un(e)?es:vn.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zc.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=h_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yc||(yc=!0,dd=i),nd(t,e)},n}function Yv(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eM.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var HS=$i.ReactCurrentOwner,Ln=!1;function Sn(t,e,n,i){e.child=t===null?Mv(e,null,n,i):so(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=oh(t,e,n,i,s,r),n=ah(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Rt&&n&&qd(e),e.flags|=1,Sn(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qv(t,e,s,i,r)):(t=Ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function qv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(Ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Ln=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return id(t,e,n,i,r)}function $v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(Ws,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(Ws,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(Ws,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(Ws,kn),kn|=i;return Sn(t,e,r,n),e.child}function Kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=Un(n)?es:vn.current;return s=io(e,s),Zs(e,r),n=oh(t,e,n,i,s,r),i=ah(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Rt&&i&&qd(e),e.flags|=1,Sn(t,e,n,r),e.child)}function um(t,e,n,i,r){if(Un(n)){var s=!0;cc(e)}else s=!1;if(Zs(e,r),e.stateNode===null)ql(t,e),jv(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Un(n)?es:vn.current,c=io(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rm(e,o,i,c),lr=!1;var h=e.memoizedState;o.state=h,pc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Dn.current||lr?(typeof f=="function"&&(ed(e,n,f,i),l=e.memoizedState),(a=lr||im(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Un(n)?es:vn.current,l=io(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&rm(e,o,i,l),lr=!1,h=e.memoizedState,o.state=h,pc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Dn.current||lr?(typeof m=="function"&&(ed(e,n,m,i),x=e.memoizedState),(c=lr||im(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){Kv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$p(e,n,!1),Yi(t,e,s);i=e.stateNode,HS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Sn(t,e,a,s),e.memoizedState=i.state,r&&$p(e,n,!0),e.child}function Qv(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),nh(t,e.containerInfo)}function fm(t,e,n,i,r){return ro(),Kd(r),e.flags|=256,Sn(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zv(t,e,n){var i=e.pendingProps,r=Ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Ut,r&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hc(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=od(n),e.memoizedState=sd,t):uh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uh(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,i){return i!==null&&Kd(i),so(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(ce(422))),sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=od(o),e.memoizedState=sd,s);if(!(e.mode&1))return sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Uu(s,i,void 0),sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Ln||a){if(i=nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),vi(i,t,r,-1))}return gh(),i=Uu(Error(ce(421))),sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=vr(r.nextSibling),Gn=e,Rt=!0,mi=null,t!==null&&($n[Kn++]=Bi,$n[Kn++]=Hi,$n[Kn++]=ts,Bi=t.id,Hi=t.overflow,ts=e),e=uh(e,i.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jf(t.return,e,n)}function Nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=Ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nu(e,!0,n,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GS(t,e,n){switch(e.tag){case 3:Qv(e),ro();break;case 5:Tv(e);break;case 1:Un(e.type)&&cc(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Ut,Ut.current&1),e.flags|=128,null):n&e.child.childLanes?Zv(t,e,n):(Mt(Ut,Ut.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);Mt(Ut,Ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Ut,Ut.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Yi(t,e,n)}var ex,ad,tx,nx;ex=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};tx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(bi.current);var s=null;switch(n){case"input":r=Rf(t,r),i=Rf(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=Df(t,r),i=Df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ac)}Nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nx=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function dn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function WS(t,e,n){var i=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return Un(e.type)&&lc(),dn(e),null;case 3:return i=e.stateNode,oo(),bt(Dn),bt(vn),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(md(mi),mi=null))),ad(t,e),dn(e),null;case 5:ih(e);var r=qr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)tx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return dn(e),null}if(t=qr(bi.current),il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)wt(Wo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":Sp(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":Ep(i,s),wt("invalid",i)}Nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":qa(i),Mp(i,s,!0);break;case"textarea":qa(i),wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=P0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[ga]=i,ex(t,e,!1,!1),e.stateNode=t;e:{switch(o=If(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)wt(Wo[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":Sp(t,i),r=Rf(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),wt("invalid",t);break;case"textarea":Ep(t,i),r=Df(t,i),wt("invalid",t);break;default:r=i}Nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&L0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&Nd(t,s,l,o))}switch(n){case"input":qa(t),Mp(t,i,!1);break;case"textarea":qa(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(t&&e.stateNode!=null)nx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=qr(xa.current),qr(bi.current),il(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return dn(e),null;case 13:if(bt(Ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&Vn!==null&&e.mode&1&&!(e.flags&128))_v(),ro(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ei]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),s=!1}else mi!==null&&(md(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ut.current&1?qt===0&&(qt=3):gh())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return oo(),ad(t,e),t===null&&pa(e.stateNode.containerInfo),dn(e),null;case 10:return Jd(e.type._context),dn(e),null;case 17:return Un(e.type)&&lc(),dn(e),null;case 19:if(bt(Ut),s=e.memoizedState,s===null)return dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Ut,Ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&Bt()>lo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return dn(e),null}else 2*Bt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Bt(),e.sibling=null,n=Ut.current,Mt(Ut,i?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function jS(t,e){switch($d(e),e.tag){case 1:return Un(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),bt(Dn),bt(vn),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(bt(Ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Ut),null;case 4:return oo(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var ol=!1,mn=!1,XS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var hm=!1;function YS(t,e){if(jf=rc,t=av(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:t,selectionRange:n},rc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:hi(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){Ot(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=hm,hm=!1,x}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ix(t){var e=t.alternate;e!==null&&(t.alternate=null,ix(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[ga],delete e[$f],delete e[RS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rx(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var on=null,pi=!1;function er(t,e,n){for(n=n.child;n!==null;)sx(t,e,n),n=n.sibling}function sx(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:mn||Gs(n,e);case 6:var i=on,r=pi;on=null,er(t,e,n),on=i,pi=r,on!==null&&(pi?(t=on,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):on.removeChild(n.stateNode));break;case 18:on!==null&&(pi?(t=on,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),fa(t)):Au(on,n.stateNode));break;case 4:i=on,r=pi,on=n.stateNode.containerInfo,pi=!0,er(t,e,n),on=i,pi=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ld(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!mn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ot(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(mn=(i=mn)||n.memoizedState!==null,er(t,e,n),mn=i):er(t,e,n);break;default:er(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(i){var r=nM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:on=a.stateNode,pi=!1;break e;case 3:on=a.stateNode.containerInfo,pi=!0;break e;case 4:on=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(on===null)throw Error(ce(160));sx(s,o,r),on=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ot(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ox(e,t),e=e.sibling}function ox(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),_i(t),i&4){try{Zo(3,t,t.return),kc(3,t)}catch(y){Ot(t,t.return,y)}try{Zo(5,t,t.return)}catch(y){Ot(t,t.return,y)}}break;case 1:ci(e,t),_i(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(ci(e,t),_i(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(y){Ot(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&C0(r,s),If(a,o);var c=If(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?U0(r,d):f==="dangerouslySetInnerHTML"?L0(r,d):f==="children"?aa(r,d):Nd(r,f,d,c)}switch(a){case"input":Pf(r,s);break;case"textarea":R0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){Ot(t,t.return,y)}}break;case 6:if(ci(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ot(t,t.return,y)}}break;case 3:if(ci(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(y){Ot(t,t.return,y)}break;case 4:ci(e,t),_i(t);break;case 13:ci(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hh=Bt())),i&4&&mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(mn=(c=mn)||f,ci(e,t),mn=c):ci(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(h=Ee,m=h.child,h.tag){case 0:case 11:case 14:case 15:Zo(4,h,h.return);break;case 1:Gs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Ot(i,n,y)}}break;case 5:Gs(h,h.return);break;case 22:if(h.memoizedState!==null){vm(d);continue}}m!==null?(m.return=h,Ee=m):vm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=D0("display",o))}catch(y){Ot(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Ot(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ci(e,t),_i(t),i&4&&mm(t);break;case 21:break;default:ci(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rx(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=pm(t);fd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pm(t);ud(t,a,o);break;default:throw Error(ce(161))}}catch(l){Ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){Ee=t,ax(t)}function ax(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mn;a=ol;var c=mn;if(ol=o,(mn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?xm(r):l!==null?(l.return=o,Ee=l):xm(r);for(;s!==null;)Ee=s,ax(s),s=s.sibling;Ee=r,ol=a,mn=c}gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):gm(t)}}function gm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}mn||e.flags&512&&cd(e)}catch(h){Ot(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function vm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function xm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Ot(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{cd(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var $S=Math.ceil,xc=$i.ReactCurrentDispatcher,fh=$i.ReactCurrentOwner,ii=$i.ReactCurrentBatchConfig,ut=0,nn=null,Gt=null,cn=0,kn=0,Ws=Rr(0),qt=0,Ma=null,is=0,Bc=0,dh=0,Jo=null,Pn=null,hh=0,lo=1/0,zi=null,yc=!1,dd=null,yr=null,al=!1,dr=null,_c=0,ea=0,hd=null,$l=-1,Kl=0;function En(){return ut&6?Bt():$l!==-1?$l:$l=Bt()}function _r(t){return t.mode&1?ut&2&&cn!==0?cn&-cn:DS.transition!==null?(Kl===0&&(Kl=j0()),Kl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:Z0(t.type)),t):1}function vi(t,e,n,i){if(50<ea)throw ea=0,hd=null,Error(ce(185));Aa(t,n,i),(!(ut&2)||t!==nn)&&(t===nn&&(!(ut&2)&&(Bc|=n),qt===4&&ur(t,cn)),Nn(t,i),n===1&&ut===0&&!(e.mode&1)&&(lo=Bt()+500,Fc&&Pr()))}function Nn(t,e){var n=t.callbackNode;D_(t,e);var i=ic(t,t===nn?cn:0);if(i===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?LS(ym.bind(null,t)):vv(ym.bind(null,t)),AS(function(){!(ut&6)&&Pr()}),n=null;else{switch(X0(i)){case 1:n=kd;break;case 4:n=G0;break;case 16:n=nc;break;case 536870912:n=W0;break;default:n=nc}n=mx(n,lx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lx(t,e){if($l=-1,Kl=0,ut&6)throw Error(ce(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=ic(t,t===nn?cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sc(t,i);else{e=i;var r=ut;ut|=2;var s=ux();(nn!==t||cn!==e)&&(zi=null,lo=Bt()+500,$r(t,e));do try{ZS();break}catch(a){cx(t,a)}while(!0);Zd(),xc.current=s,ut=r,Gt!==null?e=0:(nn=null,cn=0,e=qt)}if(e!==0){if(e===2&&(r=Bf(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Ma,$r(t,0),ur(t,i),Nn(t,Bt()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!KS(r)&&(e=Sc(t,i),e===2&&(s=Bf(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Ma,$r(t,0),ur(t,i),Nn(t,Bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Vr(t,Pn,zi);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=hh+500-Bt(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){En(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qf(Vr.bind(null,t,Pn,zi),e);break}Vr(t,Pn,zi);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-gi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$S(i/1960))-i,10<i){t.timeoutHandle=qf(Vr.bind(null,t,Pn,zi),i);break}Vr(t,Pn,zi);break;case 5:Vr(t,Pn,zi);break;default:throw Error(ce(329))}}}return Nn(t,Bt()),t.callbackNode===n?lx.bind(null,t):null}function pd(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=Pn,Pn=n,e!==null&&md(e)),t}function md(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~dh,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gi(e),i=1<<n;t[n]=-1,e&=~i}}function ym(t){if(ut&6)throw Error(ce(327));Js();var e=ic(t,0);if(!(e&1))return Nn(t,Bt()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var i=Bf(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Ma,$r(t,0),ur(t,e),Nn(t,Bt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,Pn,zi),Nn(t,Bt()),null}function ph(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(lo=Bt()+500,Fc&&Pr())}}function rs(t){dr!==null&&dr.tag===0&&!(ut&6)&&Js();var e=ut;ut|=1;var n=ii.transition,i=pt;try{if(ii.transition=null,pt=1,t)return t()}finally{pt=i,ii.transition=n,ut=e,!(ut&6)&&Pr()}}function mh(){kn=Ws.current,bt(Ws)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch($d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:oo(),bt(Dn),bt(vn),rh();break;case 5:ih(i);break;case 4:oo();break;case 13:bt(Ut);break;case 19:bt(Ut);break;case 10:Jd(i.type._context);break;case 22:case 23:mh()}n=n.return}if(nn=t,Gt=t=Sr(t.current,null),cn=kn=e,qt=0,Ma=null,dh=Bc=is=0,Pn=Jo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function cx(t,e){do{var n=Gt;try{if(Zd(),Xl.current=vc,gc){for(var i=It.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(ns=0,Jt=Yt=It=null,Qo=!1,ya=0,fh.current=null,n===null||n.return===null){qt=1,Ma=e,Gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=om(o);if(m!==null){m.flags&=-257,am(m,o,a,s,e),m.mode&1&&sm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){sm(s,c,e),gh();break e}l=Error(ce(426))}}else if(Rt&&a.mode&1){var p=om(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),am(p,o,a,s,e),Kd(ao(l,a));break e}}s=l=ao(l,a),qt!==4&&(qt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Xv(s,l,e);Jp(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Yv(s,a,e);Jp(s,_);break e}}s=s.return}while(s!==null)}dx(n)}catch(b){e=b,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function ux(){var t=xc.current;return xc.current=vc,t===null?vc:t}function gh(){(qt===0||qt===3||qt===2)&&(qt=4),nn===null||!(is&268435455)&&!(Bc&268435455)||ur(nn,cn)}function Sc(t,e){var n=ut;ut|=2;var i=ux();(nn!==t||cn!==e)&&(zi=null,$r(t,e));do try{QS();break}catch(r){cx(t,r)}while(!0);if(Zd(),ut=n,xc.current=i,Gt!==null)throw Error(ce(261));return nn=null,cn=0,qt}function QS(){for(;Gt!==null;)fx(Gt)}function ZS(){for(;Gt!==null&&!E_();)fx(Gt)}function fx(t){var e=px(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?dx(t):Gt=e,fh.current=null}function dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jS(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}else if(n=WS(n,e,kn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);qt===0&&(qt=5)}function Vr(t,e,n){var i=pt,r=ii.transition;try{ii.transition=null,pt=1,JS(t,e,n,i)}finally{ii.transition=r,pt=i}return null}function JS(t,e,n,i){do Js();while(dr!==null);if(ut&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(U_(t,s),t===nn&&(Gt=nn=null,cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,mx(nc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=pt;pt=1;var a=ut;ut|=4,fh.current=null,YS(t,n),ox(n,t),yS(Xf),rc=!!jf,Xf=jf=null,t.current=n,qS(n),w_(),ut=a,pt=o,ii.transition=s}else t.current=n;if(al&&(al=!1,dr=t,_c=r),s=t.pendingLanes,s===0&&(yr=null),A_(n.stateNode),Nn(t,Bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yc)throw yc=!1,t=dd,dd=null,t;return _c&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===hd?ea++:(ea=0,hd=t):ea=0,Pr(),null}function Js(){if(dr!==null){var t=X0(_c),e=ii.transition,n=pt;try{if(ii.transition=null,pt=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,_c=0,ut&6)throw Error(ce(331));var r=ut;for(ut|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Zo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var h=f.sibling,m=f.return;if(ix(f),f===c){Ee=null;break}if(h!==null){h.return=m,Ee=h;break}Ee=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(b){Ot(a,a.return,b)}if(a===o){Ee=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Ee=_;break e}Ee=a.return}}if(ut=r,Pr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(Lc,t)}catch{}i=!0}return i}finally{pt=n,ii.transition=e}}return!1}function _m(t,e,n){e=ao(n,e),e=Xv(t,e,1),t=xr(t,e,1),e=En(),t!==null&&(Aa(t,1,e),Nn(t,e))}function Ot(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=ao(n,t),t=Yv(e,t,1),e=xr(e,t,1),t=En(),e!==null&&(Aa(e,1,t),Nn(e,t));break}}e=e.return}}function eM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=En(),t.pingedLanes|=t.suspendedLanes&n,nn===t&&(cn&n)===n&&(qt===4||qt===3&&(cn&130023424)===cn&&500>Bt()-hh?$r(t,0):dh|=n),Nn(t,e)}function hx(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=En();t=Xi(t,e),t!==null&&(Aa(t,e,n),Nn(t,n))}function tM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hx(t,n)}function nM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),hx(t,n)}var px;px=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dn.current)Ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ln=!1,GS(t,e,n);Ln=!!(t.flags&131072)}else Ln=!1,Rt&&e.flags&1048576&&xv(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ql(t,e),t=e.pendingProps;var r=io(e,vn.current);Zs(e,n),r=oh(null,e,i,t,r,n);var s=ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Un(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=zc,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&qd(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rM(i),t=hi(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=cm(null,e,i,hi(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),um(t,e,i,r,n);case 3:e:{if(Qv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wv(t,e),pc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ce(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ce(424)),e),e=fm(t,e,i,n,r);break e}else for(Vn=vr(e.stateNode.containerInfo.firstChild),Gn=e,Rt=!0,mi=null,n=Mv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=Yi(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return Tv(e),t===null&&Zf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yf(i,r)?o=null:s!==null&&Yf(i,s)&&(e.flags|=32),Kv(t,e),Sn(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return Zv(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),lm(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(dc,i._currentValue),i._currentValue=o,s!==null)if(xi(s.value,o)){if(s.children===r.children&&!Dn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=ri(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),cm(t,e,i,r,n);case 15:return qv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),ql(t,e),e.tag=1,Un(i)?(t=!0,cc(e)):t=!1,Zs(e,n),jv(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return Jv(t,e,n);case 22:return $v(t,e,n)}throw Error(ce(156,e.tag))};function mx(t,e){return V0(t,e)}function iM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new iM(t,e,n,i)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rM(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===Od)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Kr(n.children,r,s,e);case Id:o=8,r|=8;break;case Tf:return t=ni(12,n,e,r|2),t.elementType=Tf,t.lanes=s,t;case bf:return t=ni(13,n,e,r),t.elementType=bf,t.lanes=s,t;case Af:return t=ni(19,n,e,r),t.elementType=Af,t.lanes=s,t;case T0:return Hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E0:o=10;break e;case w0:o=9;break e;case Fd:o=11;break e;case Od:o=14;break e;case ar:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ni(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function Hc(t,e,n,i){return t=ni(22,t,i,e),t.elementType=T0,t.lanes=n,t.stateNode={isHidden:!1},t}function Iu(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,s,o,a,l){return t=new sM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(s),t}function oM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gx(t){if(!t)return Tr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Un(n))return gv(t,n,e)}return e}function vx(t,e,n,i,r,s,o,a,l){return t=xh(n,i,!0,t,r,s,o,a,l),t.context=gx(null),n=t.current,i=En(),r=_r(n),s=Gi(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,Aa(t,r,i),Nn(t,i),t}function Vc(t,e,n,i){var r=e.current,s=En(),o=_r(r);return n=gx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(vi(t,r,o,s),jl(t,r,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function aM(){return null}var xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}Gc.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Vc(t,e,null,null)};Gc.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Vc(null,t,null,null)}),e[ji]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&Q0(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function lM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(o);s.call(c)}}var o=vx(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[ji]=o.current,pa(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Mc(l);a.call(c)}}var l=xh(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[ji]=l.current,pa(t.nodeType===8?t.parentNode:t),rs(function(){Vc(e,l,n,i)}),l}function jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mc(o);a.call(l)}}Vc(e,o,t,r)}else o=lM(n,e,t,r,i);return Mc(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(Bd(e,n|1),Nn(e,Bt()),!(ut&6)&&(lo=Bt()+500,Pr()))}break;case 13:rs(function(){var i=Xi(t,1);if(i!==null){var r=En();vi(i,t,1,r)}}),yh(t,1)}};Hd=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=En();vi(e,t,134217728,n)}yh(t,134217728)}};q0=function(t){if(t.tag===13){var e=_r(t),n=Xi(t,e);if(n!==null){var i=En();vi(n,t,e,i)}yh(t,e)}};$0=function(){return pt};K0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Of=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ic(i);if(!r)throw Error(ce(90));A0(i),Pf(i,r)}}}break;case"textarea":R0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};F0=ph;O0=rs;var cM={usingClientEntryPoint:!1,Events:[Ra,zs,Ic,N0,I0,ph]},Io={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uM={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B0(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||aM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Lc=ll.inject(uM),Ti=ll}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cM;Xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(ce(200));return oM(t,e,null,n)};Xn.createRoot=function(t,e){if(!Sh(t))throw Error(ce(299));var n=!1,i="",r=xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,pa(t.nodeType===8?t.parentNode:t),new _h(e)};Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=B0(e),t=t===null?null:t.stateNode,t};Xn.flushSync=function(t){return rs(t)};Xn.hydrate=function(t,e,n){if(!Wc(e))throw Error(ce(200));return jc(null,t,e,!0,n)};Xn.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=xx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vx(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gc(e)};Xn.render=function(t,e,n){if(!Wc(e))throw Error(ce(200));return jc(null,t,e,!1,n)};Xn.unmountComponentAtNode=function(t){if(!Wc(t))throw Error(ce(40));return t._reactRootContainer?(rs(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Xn.unstable_batchedUpdates=ph;Xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return jc(t,e,n,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx)}catch(t){console.error(t)}}yx(),y0.exports=Xn;var fM=y0.exports,Em=fM;Ef.createRoot=Em.createRoot,Ef.hydrateRoot=Em.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="160",ms={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dM=0,wm=1,hM=2,_x=1,pM=2,Oi=3,br=0,tn=1,ei=2,Ai=0,eo=1,Ar=2,Tm=3,bm=4,mM=5,Wr=100,gM=101,vM=102,Am=103,Cm=104,xM=200,yM=201,_M=202,SM=203,gd=204,vd=205,MM=206,EM=207,wM=208,TM=209,bM=210,AM=211,CM=212,RM=213,PM=214,LM=0,DM=1,UM=2,Ec=3,NM=4,IM=5,FM=6,OM=7,Sx=0,zM=1,kM=2,Mr=0,BM=1,HM=2,VM=3,Mx=4,GM=5,WM=6,Ex=300,co=301,uo=302,xd=303,yd=304,Xc=306,_d=1e3,Bn=1001,Sd=1002,Nt=1003,Rm=1004,Ou=1005,Qn=1006,jM=1007,Ea=1008,Er=1009,XM=1010,YM=1011,Eh=1012,wx=1013,hr=1014,wi=1015,Ci=1016,Tx=1017,bx=1018,Qr=1020,qM=1021,Hn=1023,$M=1024,KM=1025,Zr=1026,fo=1027,QM=1028,Ax=1029,ZM=1030,Cx=1031,Rx=1033,zu=33776,ku=33777,Bu=33778,Hu=33779,Pm=35840,Lm=35841,Dm=35842,Um=35843,Px=36196,Nm=37492,Im=37496,Fm=37808,Om=37809,zm=37810,km=37811,Bm=37812,Hm=37813,Vm=37814,Gm=37815,Wm=37816,jm=37817,Xm=37818,Ym=37819,qm=37820,$m=37821,Vu=36492,Km=36494,Qm=36495,JM=36283,Zm=36284,Jm=36285,eg=36286,Lx=3e3,Jr=3001,e1=3200,Dx=3201,Ux=0,t1=1,ti="",an="srgb",qi="srgb-linear",wh="display-p3",Yc="display-p3-linear",wc="linear",Tt="srgb",Tc="rec709",bc="p3",vs=7680,tg=519,n1=512,i1=513,r1=514,Nx=515,s1=516,o1=517,a1=518,l1=519,ng=35044,ig="300 es",Md=1035,Vi=2e3,Ac=2001;class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Ed=180/Math.PI;function La(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function c1(t,e){return(t%e+e)%e}function Gu(t,e,n){return(1-n)*t+n*e}function rg(t){return(t&t-1)===0&&t!==0}function wd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const u1={DEG2RAD:ta};class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,i,r,s,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],x=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],_=r[7],b=r[2],T=r[5],E=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*p+a*v+l*T,s[6]=o*u+a*_+l*E,s[1]=c*y+f*g+d*b,s[4]=c*p+f*v+d*T,s[7]=c*u+f*_+d*E,s[2]=h*y+m*g+x*b,s[5]=h*p+m*v+x*T,s[8]=h*u+m*_+x*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wu.makeScale(e,n)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new lt;function Ix(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){const t=Cc("canvas");return t.style.display="block",t}const sg={};function na(t){t in sg||(sg[t]=!0,console.warn(t))}const og=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ag=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[qi]:{transfer:wc,primaries:Tc,toReference:t=>t,fromReference:t=>t},[an]:{transfer:Tt,primaries:Tc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yc]:{transfer:wc,primaries:bc,toReference:t=>t.applyMatrix3(ag),fromReference:t=>t.applyMatrix3(og)},[wh]:{transfer:Tt,primaries:bc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ag),fromReference:t=>t.applyMatrix3(og).convertLinearToSRGB()}},d1=new Set([qi,Yc]),gt={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!d1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cl[e].toReference,r=cl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return cl[t].primaries},getTransfer:function(t){return t===ti?wc:cl[t].transfer}};function to(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ju(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class Fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Cc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(to(n[i]/255)*255):n[i]=to(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h1=0;class Ox{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=La(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Fx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p1=0;class In extends ls{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,i=Bn,r=Bn,s=Qn,o=Ea,a=Hn,l=Er,c=In.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=La(),this.name="",this.source=new Ox(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Jr?an:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?Jr:Lx}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?an:ti}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ex;In.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,n=0,i=0,r=1){ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],x=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,_=(m+1)/2,b=(u+1)/2,T=(f+h)/4,E=(d+y)/4,U=(x+p)/4;return v>_&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=E/i):_>b?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m1 extends ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?an:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new In(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ox(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends m1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zx extends In{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g1 extends In{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==m||f!==x){let p=1-a;const u=l*h+c*m+f*x+d*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,u*g);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const _=a*g;if(l=l*p+h*_,c=c*p+m*_,f=f*p+x*_,d=d*p+y*_,p===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=b,c*=b,f*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*m-c*h,e[n+1]=l*x+f*h+c*d-a*m,e[n+2]=c*x+f*m+a*h-l*d,e[n+3]=f*x-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d-h*m*x;break;case"YXZ":this._x=h*f*d+c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d+h*m*x;break;case"ZXY":this._x=h*f*d-c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d-h*m*x;break;case"ZYX":this._x=h*f*d-c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d+h*m*x;break;case"YZX":this._x=h*f*d+c*m*x,this._y=c*m*d+h*f*x,this._z=c*f*x-h*m*d,this._w=c*f*d-h*m*x;break;case"XZY":this._x=h*f*d-c*m*x,this._y=c*m*d-h*f*x,this._z=c*f*x+h*m*d,this._w=c*f*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new R,lg=new ss;class Da{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),fl.subVectors(this.max,Oo),ys.subVectors(e.a,Oo),_s.subVectors(e.b,Oo),Ss.subVectors(e.c,Oo),tr.subVectors(_s,ys),nr.subVectors(Ss,_s),Fr.subVectors(ys,Ss);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Fr.z,Fr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Fr.z,0,-Fr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Fr.y,Fr.x,0];return!qu(n,ys,_s,Ss,fl)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,ys,_s,Ss,fl))?!1:(dl.crossVectors(tr,nr),n=[dl.x,dl.y,dl.z],qu(n,ys,_s,Ss,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,ul=new Da,ys=new R,_s=new R,Ss=new R,tr=new R,nr=new R,Fr=new R,Oo=new R,fl=new R,dl=new R,Or=new R;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),f=i.dot(Or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const v1=new Da,zo=new R,$u=new R;class Ua{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add($u)),this.expandByPoint(zo.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new R,Ku=new R,hl=new R,ir=new R,Qu=new R,pl=new R,Zu=new R;class Na{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ku.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(Ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hl),a=ir.dot(this.direction),l=-ir.dot(hl),c=ir.lengthSq(),f=Math.abs(1-o*o);let d,h,m,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ku).addScaledVector(hl,h),m}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),pl.subVectors(i,e),Zu.crossVectors(Qu,pl);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(pl.crossVectors(ir,pl));if(l<0)return null;const c=a*this.direction.dot(Qu.cross(ir));if(c<0||l+c>o)return null;const f=-a*ir.dot(Zu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,x,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=x,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,x=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,x=c*f,y=c*d;n[0]=h+y*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,x=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,x=a*f,y=a*d;n[0]=l*f,n[4]=x*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=x*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x1,e,y1)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),rr.crossVectors(i,On),rr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),rr.crossVectors(i,On)),rr.normalize(),ml.crossVectors(On,rr),r[0]=rr.x,r[4]=ml.x,r[8]=On.x,r[1]=rr.y,r[5]=ml.y,r[9]=On.y,r[2]=rr.z,r[6]=ml.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],x=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],_=i[11],b=i[15],T=r[0],E=r[4],U=r[8],S=r[12],w=r[1],B=r[5],Y=r[9],ie=r[13],N=r[2],V=r[6],q=r[10],J=r[14],I=r[3],G=r[7],H=r[11],ee=r[15];return s[0]=o*T+a*w+l*N+c*I,s[4]=o*E+a*B+l*V+c*G,s[8]=o*U+a*Y+l*q+c*H,s[12]=o*S+a*ie+l*J+c*ee,s[1]=f*T+d*w+h*N+m*I,s[5]=f*E+d*B+h*V+m*G,s[9]=f*U+d*Y+h*q+m*H,s[13]=f*S+d*ie+h*J+m*ee,s[2]=x*T+y*w+p*N+u*I,s[6]=x*E+y*B+p*V+u*G,s[10]=x*U+y*Y+p*q+u*H,s[14]=x*S+y*ie+p*J+u*ee,s[3]=g*T+v*w+_*N+b*I,s[7]=g*E+v*B+_*V+b*G,s[11]=g*U+v*Y+_*q+b*H,s[15]=g*S+v*ie+_*J+b*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],x=e[3],y=e[7],p=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],x=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*h*c+y*l*m-a*p*m-d*l*u+a*h*u,v=x*h*c-f*p*c-x*l*m+o*p*m+f*l*u-o*h*u,_=f*y*c-x*d*c+x*a*m-o*y*m-f*a*u+o*d*u,b=x*d*l-f*y*l-x*a*h+o*y*h+f*a*p-o*d*p,T=n*g+i*v+r*_+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=g*E,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*u-i*h*u)*E,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*E,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*E,e[4]=v*E,e[5]=(f*p*s-x*h*s+x*r*m-n*p*m-f*r*u+n*h*u)*E,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*E,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*E,e[8]=_*E,e[9]=(x*d*s-f*y*s-x*i*m+n*y*m+f*i*u-n*d*u)*E,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*E,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*E,e[12]=b*E,e[13]=(f*y*r-x*d*r+x*i*h-n*y*h-f*i*p+n*d*p)*E,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*p-n*a*p)*E,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,x=s*d,y=o*f,p=o*d,u=a*d,g=l*c,v=l*f,_=l*d,b=i.x,T=i.y,E=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+_)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(h+u))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(x+v)*E,r[9]=(p-g)*E,r[10]=(1-(h+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ms.set(r[0],r[1],r[2]).length();const o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,f=1/o,d=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=f,fi.elements[5]*=f,fi.elements[6]*=f,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,n.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===Vi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ac)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let x,y;if(a===Vi)x=(o+s)*d,y=-2*d;else if(a===Ac)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ms=new R,fi=new jt,x1=new R(0,0,0),y1=new R(1,1,1),rr=new R,ml=new R,On=new R,cg=new jt,ug=new ss;class qc{constructor(e=0,n=0,i=0,r=qc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qc.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _1=0;const fg=new R,Es=new ss,Ui=new jt,gl=new R,ko=new R,S1=new R,M1=new ss,dg=new R(1,0,0),hg=new R(0,1,0),pg=new R(0,0,1),E1={type:"added"},w1={type:"removed"};class gn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new R,n=new qc,i=new ss,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new lt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ko,gl,this.up):Ui.lookAt(gl,ko,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ui),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(E1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(w1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,M1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new R(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new R,Ni=new R,Ju=new R,Ii=new R,ws=new R,Ts=new R,mg=new R,ef=new R,tf=new R,nf=new R;let vl=!1;class Zn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),Ni.subVectors(i,n),Ju.subVectors(e,n);const o=di.dot(di),a=di.dot(Ni),l=di.dot(Ju),c=Ni.dot(Ni),f=Ni.dot(Ju),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,n,i,r,s,o,a,l){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),Ni.subVectors(e,n),di.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),di.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Ts.subVectors(s,i),ef.subVectors(e,i);const l=ws.dot(ef),c=Ts.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const f=ws.dot(tf),d=Ts.dot(tf);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ws,o);nf.subVectors(e,s);const m=ws.dot(nf),x=Ts.dot(nf);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ts,a);const p=f*x-m*d;if(p<=0&&d-f>=0&&m-x>=0)return mg.subVectors(s,r),a=(d-f)/(d-f+(m-x)),n.copy(r).addScaledVector(mg,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function rf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Te{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=c1(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){const i=kx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=ju(e.r),this.g=ju(e.g),this.b=ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return gt.fromWorkingColorSpace(pn.copy(this),e),Math.round(en(pn.r*255,0,255))*65536+Math.round(en(pn.g*255,0,255))*256+Math.round(en(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(pn.copy(this),n);const i=pn.r,r=pn.g,s=pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){gt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,r=pn.b;return e!==an?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(xl);const i=Gu(sr.h,xl.h,n),r=Gu(sr.s,xl.s,n),s=Gu(sr.l,xl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Te;Te.NAMES=kx;let T1=0;class cs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=La(),this.name="",this.type="Material",this.blending=eo,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gd&&(i.blendSrc=this.blendSrc),this.blendDst!==vd&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new R,yl=new de;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array),s=Cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class Bx extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hx extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dt extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let b1=0;const qn=new jt,sf=new gn,bs=new R,zn=new Da,Bo=new Da,Zt=new R;class Qt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Hx:Bx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(zn.min,Bo.min),zn.expandByPoint(Zt),Zt.addVectors(zn.max,Bo.max),zn.expandByPoint(Zt)):(zn.expandByPoint(Bo.min),zn.expandByPoint(Bo.max))}zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Zt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Zt.add(bs)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new R,f[w]=new R;const d=new R,h=new R,m=new R,x=new de,y=new de,p=new de,u=new R,g=new R;function v(w,B,Y){d.fromArray(r,w*3),h.fromArray(r,B*3),m.fromArray(r,Y*3),x.fromArray(o,w*2),y.fromArray(o,B*2),p.fromArray(o,Y*2),h.sub(d),m.sub(d),y.sub(x),p.sub(x);const ie=1/(y.x*p.y-p.x*y.y);isFinite(ie)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(ie),g.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ie),c[w].add(u),c[B].add(u),c[Y].add(u),f[w].add(g),f[B].add(g),f[Y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let w=0,B=_.length;w<B;++w){const Y=_[w],ie=Y.start,N=Y.count;for(let V=ie,q=ie+N;V<q;V+=3)v(i[V+0],i[V+1],i[V+2])}const b=new R,T=new R,E=new R,U=new R;function S(w){E.fromArray(s,w*3),U.copy(E);const B=c[w];b.copy(B),b.sub(E.multiplyScalar(E.dot(B))).normalize(),T.crossVectors(U,B);const ie=T.dot(f[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ie}for(let w=0,B=_.length;w<B;++w){const Y=_[w],ie=Y.start,N=Y.count;for(let V=ie,q=ie+N;V<q;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R,d=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)h[x++]=c[m++]}return new Fn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new jt,zr=new Na,_l=new Ua,vg=new R,As=new R,Cs=new R,Rs=new R,of=new R,Sl=new R,Ml=new de,El=new de,wl=new de,xg=new R,yg=new R,_g=new R,Tl=new R,bl=new R;class Dt extends gn{constructor(e=new Qt,n=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(of.fromBufferAttribute(d,e),o?Sl.addScaledVector(of,f):Sl.addScaledVector(of.sub(n),f))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(_l.containsPoint(zr.origin)===!1&&(zr.intersectSphere(_l,vg)===null||zr.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(s).invert(),zr.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,b=v;_<b;_+=3){const T=a.getX(_),E=a.getX(_+1),U=a.getX(_+2);r=Al(this,u,e,i,c,f,d,T,E,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);r=Al(this,o,e,i,c,f,d,g,v,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,b=v;_<b;_+=3){const T=_,E=_+1,U=_+2;r=Al(this,u,e,i,c,f,d,T,E,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=p,v=p+1,_=p+2;r=Al(this,o,e,i,c,f,d,g,v,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function A1(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;bl.copy(a),bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:t}}function Al(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,As),t.getVertexPosition(l,Cs),t.getVertexPosition(c,Rs);const f=A1(t,e,n,i,As,Cs,Rs,Tl);if(f){r&&(Ml.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),wl.fromBufferAttribute(r,c),f.uv=Zn.getInterpolation(Tl,As,Cs,Rs,Ml,El,wl,new de)),s&&(Ml.fromBufferAttribute(s,a),El.fromBufferAttribute(s,l),wl.fromBufferAttribute(s,c),f.uv1=Zn.getInterpolation(Tl,As,Cs,Rs,Ml,El,wl,new de),f.uv2=f.uv1),o&&(xg.fromBufferAttribute(o,a),yg.fromBufferAttribute(o,l),_g.fromBufferAttribute(o,c),f.normal=Zn.getInterpolation(Tl,As,Cs,Rs,xg,yg,_g,new R),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Zn.getNormal(As,Cs,Rs,d.normal),f.face=d}return f}class Ia extends Qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(d,2));function x(y,p,u,g,v,_,b,T,E,U,S){const w=_/E,B=b/U,Y=_/2,ie=b/2,N=T/2,V=E+1,q=U+1;let J=0,I=0;const G=new R;for(let H=0;H<q;H++){const ee=H*B-ie;for(let re=0;re<V;re++){const Q=re*w-Y;G[y]=Q*g,G[p]=ee*v,G[u]=N,c.push(G.x,G.y,G.z),G[y]=0,G[p]=0,G[u]=T>0?1:-1,f.push(G.x,G.y,G.z),d.push(re/E),d.push(1-H/U),J+=1}}for(let H=0;H<U;H++)for(let ee=0;ee<E;ee++){const re=h+ee+V*H,Q=h+ee+V*(H+1),te=h+(ee+1)+V*(H+1),he=h+(ee+1)+V*H;l.push(re,Q,he),l.push(Q,te,he),I+=6}a.addGroup(m,I,S),m+=I,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=ho(t[n]);for(const r in i)e[r]=i[r]}return e}function C1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vx(t){return t.getRenderTarget()===null?t.outputColorSpace:gt.workingColorSpace}const wa={clone:ho,merge:_n};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=C1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bh extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jn extends bh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class L1 extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Ps,Ls,e,n);r.layers=this.layers,this.add(r);const s=new Jn(Ps,Ls,e,n);s.layers=this.layers,this.add(s);const o=new Jn(Ps,Ls,e,n);o.layers=this.layers,this.add(o);const a=new Jn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const l=new Jn(Ps,Ls,e,n);l.layers=this.layers,this.add(l);const c=new Jn(Ps,Ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Gx extends In{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:co,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D1 extends Wn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jr?an:ti),this.texture=new Gx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ia(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Dt(r,s),a=n.minFilter;return n.minFilter===Ea&&(n.minFilter=Qn),new L1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const af=new R,U1=new R,N1=new lt;class Mn{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=af.subVectors(i,n).cross(U1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(af),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||N1.getNormalMatrix(e),r=this.coplanarPoint(af).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ua,Cl=new R;class Wx{constructor(e=new Mn,n=new Mn,i=new Mn,r=new Mn,s=new Mn,o=new Mn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],x=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,h-c,p-m,_-u).normalize(),i[1].setComponents(l+s,h+c,p+m,_+u).normalize(),i[2].setComponents(l+o,h+f,p+x,_+g).normalize(),i[3].setComponents(l-o,h-f,p-x,_-g).normalize(),i[4].setComponents(l-a,h-d,p-y,_-v).normalize(),n===Vi)i[5].setComponents(l+a,h+d,p+y,_+v).normalize();else if(n===Ac)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,x=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let y=0,p=x.length;y<p;y++){const u=x[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class $c extends Qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],x=[],y=[],p=[];for(let u=0;u<f;u++){const g=u*h-o;for(let v=0;v<c;v++){const _=v*d-s;x.push(_,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,_=g+c*(u+1),b=g+1+c*(u+1),T=g+1+c*u;m.push(v,_,T),m.push(_,b,T)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
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
#endif`,z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
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
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aE=`vec3 transformedNormal = objectNormal;
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
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",hE=`
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
}`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
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
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NE=`PhysicalMaterial material;
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
#endif`,IE=`struct PhysicalMaterial {
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
}`,FE=`
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XE=`#if defined( USE_POINTS_UV )
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
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$E=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
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
#endif`,QE=`#ifdef USE_MORPHTARGETS
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
#endif`,ZE=`#ifdef USE_MORPHTARGETS
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
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rw=`#ifdef USE_NORMALMAP
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
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_w=`float getShadowMask() {
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
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
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
#endif`,Ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rw=`#ifdef USE_TRANSMISSION
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
#endif`,Pw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fw=`uniform sampler2D t2D;
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
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
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
}`,Vw=`#if DEPTH_PACKING == 3200
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
}`,Gw=`#define DISTANCE
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
}`,Ww=`#define DISTANCE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`uniform float scale;
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
}`,qw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,Zw=`#define LAMBERT
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
}`,Jw=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,tT=`#define NORMAL
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
}`,nT=`#define NORMAL
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
}`,iT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,sT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,lT=`#define TOON
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
}`,cT=`uniform float size;
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,dT=`uniform vec3 color;
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
}`,hT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:F1,alphahash_pars_fragment:O1,alphamap_fragment:z1,alphamap_pars_fragment:k1,alphatest_fragment:B1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:G1,batching_pars_vertex:W1,batching_vertex:j1,begin_vertex:X1,beginnormal_vertex:Y1,bsdfs:q1,iridescence_fragment:$1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:eE,color_fragment:tE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:rE,common:sE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:aE,displacementmap_pars_vertex:lE,displacementmap_vertex:cE,emissivemap_fragment:uE,emissivemap_pars_fragment:fE,colorspace_fragment:dE,colorspace_pars_fragment:hE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:vE,envmap_physical_pars_fragment:RE,envmap_vertex:xE,fog_vertex:yE,fog_pars_vertex:_E,fog_fragment:SE,fog_pars_fragment:ME,gradientmap_pars_fragment:EE,lightmap_fragment:wE,lightmap_pars_fragment:TE,lights_lambert_fragment:bE,lights_lambert_pars_fragment:AE,lights_pars_begin:CE,lights_toon_fragment:PE,lights_toon_pars_fragment:LE,lights_phong_fragment:DE,lights_phong_pars_fragment:UE,lights_physical_fragment:NE,lights_physical_pars_fragment:IE,lights_fragment_begin:FE,lights_fragment_maps:OE,lights_fragment_end:zE,logdepthbuf_fragment:kE,logdepthbuf_pars_fragment:BE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:VE,map_fragment:GE,map_pars_fragment:WE,map_particle_fragment:jE,map_particle_pars_fragment:XE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:qE,morphcolor_vertex:$E,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:ZE,normal_fragment_begin:JE,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:rw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:aw,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:uw,premultiplied_alpha_fragment:fw,project_vertex:dw,dithering_fragment:hw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:xw,shadowmap_vertex:yw,shadowmask_pars_fragment:_w,skinbase_vertex:Sw,skinning_pars_vertex:Mw,skinning_vertex:Ew,skinnormal_vertex:ww,specularmap_fragment:Tw,specularmap_pars_fragment:bw,tonemapping_fragment:Aw,tonemapping_pars_fragment:Cw,transmission_fragment:Rw,transmission_pars_fragment:Pw,uv_pars_fragment:Lw,uv_pars_vertex:Dw,uv_vertex:Uw,worldpos_vertex:Nw,background_vert:Iw,background_frag:Fw,backgroundCube_vert:Ow,backgroundCube_frag:zw,cube_vert:kw,cube_frag:Bw,depth_vert:Hw,depth_frag:Vw,distanceRGBA_vert:Gw,distanceRGBA_frag:Ww,equirect_vert:jw,equirect_frag:Xw,linedashed_vert:Yw,linedashed_frag:qw,meshbasic_vert:$w,meshbasic_frag:Kw,meshlambert_vert:Qw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:eT,meshnormal_vert:tT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:oT,meshtoon_vert:aT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:fT,shadow_frag:dT,sprite_vert:hT,sprite_frag:pT},me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:_n([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:_n([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:_n([me.points,me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:_n([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:_n([me.common,me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:_n([me.sprite,me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:_n([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:_n([me.lights,me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Mi.physical={uniforms:_n([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Rl={r:0,b:0,g:0};function mT(t,e,n,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xc)?(f===void 0&&(f=new Dt(new Ia(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ho(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dt(new $c(2,2),new Wt({name:"BackgroundMaterial",uniforms:ho(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(Rl,Vx(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:x}}function gT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(N,V,q,J,I){let G=!1;if(o){const H=y(J,q,V);c!==H&&(c=H,m(c.object)),G=u(N,J,q,I),G&&g(N,J,q,I)}else{const H=V.wireframe===!0;(c.geometry!==J.id||c.program!==q.id||c.wireframe!==H)&&(c.geometry=J.id,c.program=q.id,c.wireframe=H,G=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,U(N,V,q,J),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function y(N,V,q){const J=q.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let G=I[V.id];G===void 0&&(G={},I[V.id]=G);let H=G[J];return H===void 0&&(H=p(h()),G[J]=H),H}function p(N){const V=[],q=[],J=[];for(let I=0;I<r;I++)V[I]=0,q[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:J,object:N,attributes:{},index:null}}function u(N,V,q,J){const I=c.attributes,G=V.attributes;let H=0;const ee=q.getAttributes();for(const re in ee)if(ee[re].location>=0){const te=I[re];let he=G[re];if(he===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;H++}return c.attributesNum!==H||c.index!==J}function g(N,V,q,J){const I={},G=V.attributes;let H=0;const ee=q.getAttributes();for(const re in ee)if(ee[re].location>=0){let te=G[re];te===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),I[re]=he,H++}c.attributes=I,c.attributesNum=H,c.index=J}function v(){const N=c.newAttributes;for(let V=0,q=N.length;V<q;V++)N[V]=0}function _(N){b(N,0)}function b(N,V){const q=c.newAttributes,J=c.enabledAttributes,I=c.attributeDivisors;q[N]=1,J[N]===0&&(t.enableVertexAttribArray(N),J[N]=1),I[N]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),I[N]=V)}function T(){const N=c.newAttributes,V=c.enabledAttributes;for(let q=0,J=V.length;q<J;q++)V[q]!==N[q]&&(t.disableVertexAttribArray(q),V[q]=0)}function E(N,V,q,J,I,G,H){H===!0?t.vertexAttribIPointer(N,V,q,I,G):t.vertexAttribPointer(N,V,q,J,I,G)}function U(N,V,q,J){if(i.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=J.attributes,G=q.getAttributes(),H=V.defaultAttributeValues;for(const ee in G){const re=G[ee];if(re.location>=0){let Q=I[ee];if(Q===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const te=Q.normalized,he=Q.itemSize,Se=n.get(Q);if(Se===void 0)continue;const we=Se.buffer,je=Se.type,Ye=Se.bytesPerElement,ke=i.isWebGL2===!0&&(je===t.INT||je===t.UNSIGNED_INT||Q.gpuType===wx);if(Q.isInterleavedBufferAttribute){const st=Q.data,j=st.stride,Xt=Q.offset;if(st.isInstancedInterleavedBuffer){for(let Ne=0;Ne<re.locationSize;Ne++)b(re.location+Ne,st.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ne=0;Ne<re.locationSize;Ne++)_(re.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ne=0;Ne<re.locationSize;Ne++)E(re.location+Ne,he/re.locationSize,je,te,j*Ye,(Xt+he/re.locationSize*Ne)*Ye,ke)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<re.locationSize;st++)b(re.location+st,Q.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<re.locationSize;st++)_(re.location+st);t.bindBuffer(t.ARRAY_BUFFER,we);for(let st=0;st<re.locationSize;st++)E(re.location+st,he/re.locationSize,je,te,he*Ye,he/re.locationSize*st*Ye,ke)}}else if(H!==void 0){const te=H[ee];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(re.location,te);break;case 3:t.vertexAttrib3fv(re.location,te);break;case 4:t.vertexAttrib4fv(re.location,te);break;default:t.vertexAttrib1fv(re.location,te)}}}}T()}function S(){Y();for(const N in a){const V=a[N];for(const q in V){const J=V[q];for(const I in J)x(J[I].object),delete J[I];delete V[q]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const q in V){const J=V[q];for(const I in J)x(J[I].object),delete J[I];delete V[q]}delete a[N.id]}function B(N){for(const V in a){const q=a[V];if(q[N.id]===void 0)continue;const J=q[N.id];for(const I in J)x(J[I].object),delete J[I];delete q[N.id]}}function Y(){ie(),f=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:_,disableUnusedAttributes:T}}function vT(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(f[x],d[x]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,_=o||e.has("OES_texture_float"),b=v&&_,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:T}}function yT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Mn,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,v=g*4;let _=u.clippingState||null;l.value=_,_=f(x,h,v,m);for(let b=0;b!==v;++b)_[b]=n[b];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const u=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,_=m;v!==y;++v,_+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function _T(t){let e=new WeakMap;function n(o,a){return a===xd?o.mapping=co:a===yd&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xd||a===yd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new D1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xx extends bh{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,Sg=[.125,.215,.35,.446,.526,.582],jr=20,lf=new Xx,Mg=new Te;let cf=null,uf=0,ff=0;const Gr=(1+Math.sqrt(5))/2,Ds=1/Gr,Eg=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Gr,Ds),new R(0,Gr,-Ds),new R(Ds,0,Gr),new R(-Ds,0,Gr),new R(Gr,Ds,0),new R(-Gr,Ds,0)];class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,uf,ff),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ci,format:Hn,colorSpace:qi,depthBuffer:!1},r=Tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ST(s)),this._blurMaterial=MT(s,e,n)}return r}_compileMaterial(e){const n=new Dt(this._lodPlanes[0],e);this._renderer.compile(n,lf)}_sceneToCubeUV(e,n,i,r){const a=new Jn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Mg),f.toneMapping=Mr,f.autoClear=!1;const m=new Rn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Dt(new Ia,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Mg),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Pl(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===co||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Eg[(r-1)%Eg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Dt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jr-1),y=s/x,p=isFinite(s)?1+Math.floor(f*y):jr;p>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jr}`);const u=[];let g=0;for(let E=0;E<jr;++E){const U=E/y,S=Math.exp(-U*U/2);u.push(S),E===0?g+=S:E<p&&(g+=2*S)}for(let E=0;E<u.length;E++)u[E]=u[E]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const _=this._sizeLods[r],b=3*_*(r>v-js?r-v+js:0),T=4*(this._cubeSize-_);Pl(n,b,T,3*_,2*_),l.setRenderTarget(n),l.render(d,lf)}}function ST(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+Sg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=Sg[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,y=3,p=2,u=1,g=new Float32Array(y*x*m),v=new Float32Array(p*x*m),_=new Float32Array(u*x*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,U=T>2?0:-1,S=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];g.set(S,y*x*T),v.set(h,p*x*T);const w=[T,T,T,T,T,T];_.set(w,u*x*T)}const b=new Qt;b.setAttribute("position",new Fn(g,y)),b.setAttribute("uv",new Fn(v,p)),b.setAttribute("faceIndex",new Fn(_,u)),e.push(b),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tg(t,e,n){const i=new Wn(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MT(t,e,n){const i=new Float32Array(jr),r=new R(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function bg(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ag(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function ET(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xd||l===yd,f=l===co||l===uo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new wg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new wg(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function wT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,_=g.length;v<_;v+=3){const b=g[v+0],T=g[v+1],E=g[v+2];h.push(b,T,T,E,E,b)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,_=g.length/3-1;v<_;v+=3){const b=v+0,T=v+1,E=v+2;h.push(b,T,T,E,E,b)}}else return;const p=new(Ix(h)?Hx:Bx)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function bT(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function d(m,x,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,m*l,y),n.update(x,s,y)}function h(m,x,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,y);let u=0;for(let g=0;g<y;g++)u+=x[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function AT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function CT(t,e){return t[0]-e[0]}function RT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ln,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let V=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),b===!0&&(S=3);let w=f.attributes.position.count*S,B=1;w>e.maxTextureSize&&(B=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Y=new Float32Array(w*B*4*y),ie=new zx(Y,w,B,y);ie.type=wi,ie.needsUpdate=!0;const N=S*4;for(let q=0;q<y;q++){const J=T[q],I=E[q],G=U[q],H=w*B*4*q;for(let ee=0;ee<J.count;ee++){const re=ee*N;v===!0&&(o.fromBufferAttribute(J,ee),Y[H+re+0]=o.x,Y[H+re+1]=o.y,Y[H+re+2]=o.z,Y[H+re+3]=0),_===!0&&(o.fromBufferAttribute(I,ee),Y[H+re+4]=o.x,Y[H+re+5]=o.y,Y[H+re+6]=o.z,Y[H+re+7]=0),b===!0&&(o.fromBufferAttribute(G,ee),Y[H+re+8]=o.x,Y[H+re+9]=o.y,Y[H+re+10]=o.z,Y[H+re+11]=G.itemSize===4?o.w:1)}}p={count:y,texture:ie,size:new de(w,B)},s.set(f,p),f.addEventListener("dispose",V)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==x){y=[];for(let _=0;_<x;_++)y[_]=[_,0];i[f.id]=y}for(let _=0;_<x;_++){const b=y[_];b[0]=_,b[1]=h[_]}y.sort(RT);for(let _=0;_<8;_++)_<x&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(CT);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let _=0;_<8;_++){const b=a[_],T=b[0],E=b[1];T!==Number.MAX_SAFE_INTEGER&&E?(p&&f.getAttribute("morphTarget"+_)!==p[T]&&f.setAttribute("morphTarget"+_,p[T]),u&&f.getAttribute("morphNormal"+_)!==u[T]&&f.setAttribute("morphNormal"+_,u[T]),r[_]=E,g+=E):(p&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),u&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),r[_]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Yx extends In{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Zr,f!==Zr&&f!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Zr&&(i=hr),i===void 0&&f===fo&&(i=Qr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qx=new In,$x=new Yx(1,1);$x.compareFunction=Nx;const Kx=new zx,Qx=new g1,Zx=new Gx,Cg=[],Rg=[],Pg=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cg[r];if(s===void 0&&(s=new Float32Array(r),Cg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=Rg[e];n===void 0&&(n=new Int32Array(e),Rg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Dg.set(i),t.uniformMatrix2fv(this.addr,!1,Dg),Kt(n,i)}}function OT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Lg.set(i),t.uniformMatrix3fv(this.addr,!1,Lg),Kt(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Pg.set(i),t.uniformMatrix4fv(this.addr,!1,Pg),Kt(n,i)}}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?$x:qx;n.setTexture2D(e||s,r)}function qT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qx,r)}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zx,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kx,r)}function QT(t){switch(t){case 5126:return DT;case 35664:return UT;case 35665:return NT;case 35666:return IT;case 35674:return FT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return kT;case 35667:case 35671:return BT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return GT;case 36294:return WT;case 36295:return jT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}function ZT(t,e){t.uniform1fv(this.addr,e)}function JT(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function eb(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function tb(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function nb(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ib(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rb(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sb(t,e){t.uniform1iv(this.addr,e)}function ob(t,e){t.uniform2iv(this.addr,e)}function ab(t,e){t.uniform3iv(this.addr,e)}function lb(t,e){t.uniform4iv(this.addr,e)}function cb(t,e){t.uniform1uiv(this.addr,e)}function ub(t,e){t.uniform2uiv(this.addr,e)}function fb(t,e){t.uniform3uiv(this.addr,e)}function db(t,e){t.uniform4uiv(this.addr,e)}function hb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||qx,s[o])}function pb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qx,s[o])}function mb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zx,s[o])}function gb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Kx,s[o])}function vb(t){switch(t){case 5126:return ZT;case 35664:return JT;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return ab;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}class xb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QT(n.type)}}class yb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vb(n.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Ug(t,e){t.seq.push(e),t.map[e.id]=e}function Sb(t,e,n){const i=t.name,r=i.length;for(df.lastIndex=0;;){const s=df.exec(i),o=df.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ug(n,c===void 0?new xb(a,t,e):new yb(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new _b(a),Ug(n,d)),n=d}}}class Zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Sb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ng(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Mb=37297;let Eb=0;function wb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Tb(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===bc&&n===Tc?i="LinearDisplayP3ToLinearSRGB":e===Tc&&n===bc&&(i="LinearSRGBToLinearDisplayP3"),t){case qi:case Yc:return[i,"LinearTransferOETF"];case an:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ig(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+wb(t.getShaderSource(e),o)}else return r}function bb(t,e){const n=Tb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ab(t,e){let n;switch(e){case BM:n="Linear";break;case HM:n="Reinhard";break;case VM:n="OptimizedCineon";break;case Mx:n="ACESFilmic";break;case WM:n="AgX";break;case GM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Cb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function Rb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function Pb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(Db,Nb)}const Ub=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nb(t,e){let n=rt[e];if(n===void 0){const i=Ub.get(e);if(i!==void 0)n=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(t){return t.replace(Ib,Fb)}function Fb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ob(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function Bb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sx:e="ENVMAP_BLENDING_MULTIPLY";break;case zM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function Hb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Vb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ob(n),c=zb(n),f=kb(n),d=Bb(n),h=Hb(n),m=n.isWebGL2?"":Cb(n),x=Rb(n),y=Pb(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xs).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Xs).join(`
`),g.length>0&&(g+=`
`)):(u=[kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),g=[m,kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?rt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?Ab("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,bb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Td(o),o=Fg(o,n),o=Og(o,n),a=Td(a),a=Fg(a,n),a=Og(a,n),o=zg(o),a=zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+u+o,b=v+g+a,T=Ng(r,r.VERTEX_SHADER,_),E=Ng(r,r.FRAGMENT_SHADER,b);r.attachShader(p,T),r.attachShader(p,E),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(Y){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(T).trim(),V=r.getShaderInfoLog(E).trim();let q=!0,J=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,E);else{const I=Ig(r,T,"vertex"),G=Ig(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+I+`
`+G)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(N===""||V==="")&&(J=!1);J&&(Y.diagnostics={runnable:q,programLog:ie,vertexShader:{log:N,prefix:u},fragmentShader:{log:V,prefix:g}})}r.deleteShader(T),r.deleteShader(E),S=new Zl(r,p),w=Lb(r,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(p,Mb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=E,this}let Gb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jb(e),n.set(e,i)),i}}class jb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function Xb(t,e,n,i,r,s,o){const a=new Th,l=new Wb,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function p(S,w,B,Y,ie){const N=Y.fog,V=ie.geometry,q=S.isMeshStandardMaterial?Y.environment:null,J=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),I=J&&J.mapping===Xc?J.image.height:null,G=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const H=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=H!==void 0?H.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let Q,te,he,Se;if(G){const Pt=Mi[G];Q=Pt.vertexShader,te=Pt.fragmentShader}else Q=S.vertexShader,te=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const we=t.getRenderTarget(),je=ie.isInstancedMesh===!0,Ye=ie.isBatchedMesh===!0,ke=!!S.map,st=!!S.matcap,j=!!J,Xt=!!S.aoMap,Ne=!!S.lightMap,Ve=!!S.bumpMap,be=!!S.normalMap,vt=!!S.displacementMap,We=!!S.emissiveMap,C=!!S.metalnessMap,M=!!S.roughnessMap,W=S.anisotropy>0,ae=S.clearcoat>0,oe=S.iridescence>0,le=S.sheen>0,Ae=S.transmission>0,pe=W&&!!S.anisotropyMap,_e=ae&&!!S.clearcoatMap,Ie=ae&&!!S.clearcoatNormalMap,qe=ae&&!!S.clearcoatRoughnessMap,ne=oe&&!!S.iridescenceMap,ot=oe&&!!S.iridescenceThicknessMap,$e=le&&!!S.sheenColorMap,Ge=le&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,ye=!!S.specularColorMap,P=!!S.specularIntensityMap,fe=Ae&&!!S.transmissionMap,Ce=Ae&&!!S.thicknessMap,Me=!!S.gradientMap,se=!!S.alphaMap,D=S.alphaTest>0,ue=!!S.alphaHash,ve=!!S.extensions,Be=!!V.attributes.uv1,Fe=!!V.attributes.uv2,Ze=!!V.attributes.uv3;let tt=Mr;return S.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:f,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:te,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ye,instancing:je,instancingColor:je&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qi,map:ke,matcap:st,envMap:j,envMapMode:j&&J.mapping,envMapCubeUVHeight:I,aoMap:Xt,lightMap:Ne,bumpMap:Ve,normalMap:be,displacementMap:h&&vt,emissiveMap:We,normalMapObjectSpace:be&&S.normalMapType===t1,normalMapTangentSpace:be&&S.normalMapType===Ux,metalnessMap:C,roughnessMap:M,anisotropy:W,anisotropyMap:pe,clearcoat:ae,clearcoatMap:_e,clearcoatNormalMap:Ie,clearcoatRoughnessMap:qe,iridescence:oe,iridescenceMap:ne,iridescenceThicknessMap:ot,sheen:le,sheenColorMap:$e,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:ye,specularIntensityMap:P,transmission:Ae,transmissionMap:fe,thicknessMap:Ce,gradientMap:Me,opaque:S.transparent===!1&&S.blending===eo,alphaMap:se,alphaTest:D,alphaHash:ue,combine:S.combine,mapUv:ke&&y(S.map.channel),aoMapUv:Xt&&y(S.aoMap.channel),lightMapUv:Ne&&y(S.lightMap.channel),bumpMapUv:Ve&&y(S.bumpMap.channel),normalMapUv:be&&y(S.normalMap.channel),displacementMapUv:vt&&y(S.displacementMap.channel),emissiveMapUv:We&&y(S.emissiveMap.channel),metalnessMapUv:C&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:pe&&y(S.anisotropyMap.channel),clearcoatMapUv:_e&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(S.sheenRoughnessMap.channel),specularMapUv:Pe&&y(S.specularMap.channel),specularColorMapUv:ye&&y(S.specularColorMap.channel),specularIntensityMapUv:P&&y(S.specularIntensityMap.channel),transmissionMapUv:fe&&y(S.transmissionMap.channel),thicknessMapUv:Ce&&y(S.thicknessMap.channel),alphaMapUv:se&&y(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Fe,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!V.attributes.uv&&(ke||se),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(g(w,S),v(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function _(S){const w=x[S.type];let B;if(w){const Y=Mi[w];B=wa.clone(Y.uniforms)}else B=S.uniforms;return B}function b(S,w){let B;for(let Y=0,ie=c.length;Y<ie;Y++){const N=c[Y];if(N.cacheKey===w){B=N,++B.usedTimes;break}}return B===void 0&&(B=new Vb(t,w,S,s),c.push(B)),B}function T(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:U}}function Yb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function qb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,x,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,m,x,y,p){const u=o(d,h,m,x,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,x,y,p){const u=o(d,h,m,x,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||qb),i.length>1&&i.sort(h||Bg),r.length>1&&r.sort(h||Bg)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function $b(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Hg,t.set(i,[o])):r>=s.length?(o=new Hg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Kb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new Te};break;case"SpotLight":n={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":n={color:new Te,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function Qb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Zb=0;function Jb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eA(t,e){const n=new Kb,i=Qb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new R);const s=new R,o=new jt,a=new jt;function l(f,d){let h=0,m=0,x=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,_=0,b=0,T=0,E=0,U=0,S=0;f.sort(Jb);const w=d===!0?Math.PI:1;for(let Y=0,ie=f.length;Y<ie;Y++){const N=f[Y],V=N.color,q=N.intensity,J=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*q*w,m+=V.g*q*w,x+=V.b*q*w;else if(N.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(N.sh.coefficients[G],q);S++}else if(N.isDirectionalLight){const G=n.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const H=N.shadow,ee=i.get(N);ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=N.shadow.matrix,_++}r.directional[y]=G,y++}else if(N.isSpotLight){const G=n.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(V).multiplyScalar(q*w),G.distance=J,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,r.spot[u]=G;const H=N.shadow;if(N.map&&(r.spotLightMap[E]=N.map,E++,H.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[u]=H.matrix,N.castShadow){const ee=i.get(N);ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=I,T++}u++}else if(N.isRectAreaLight){const G=n.get(N);G.color.copy(V).multiplyScalar(q),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),r.rectArea[g]=G,g++}else if(N.isPointLight){const G=n.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*w),G.distance=N.distance,G.decay=N.decay,N.castShadow){const H=N.shadow,ee=i.get(N);ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,b++}r.point[p]=G,p++}else if(N.isHemisphereLight){const G=n.get(N);G.skyColor.copy(N.color).multiplyScalar(q*w),G.groundColor.copy(N.groundColor).multiplyScalar(q*w),r.hemi[v]=G,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==y||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==g||B.hemiLength!==v||B.numDirectionalShadows!==_||B.numPointShadows!==b||B.numSpotShadows!==T||B.numSpotMaps!==E||B.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+E-U,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=S,B.directionalLength=y,B.pointLength=p,B.spotLength=u,B.rectAreaLength=g,B.hemiLength=v,B.numDirectionalShadows=_,B.numPointShadows=b,B.numSpotShadows=T,B.numSpotMaps=E,B.numLightProbes=S,r.version=Zb++)}function c(f,d){let h=0,m=0,x=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const _=f[g];if(_.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(_.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),x++}else if(_.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Vg(t,e){const n=new eA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Vg(t,e),n.set(s,[l])):o>=a.length?(l=new Vg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Jx extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nA extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rA=`uniform sampler2D shadow_pass;
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
}`;function sA(t,e,n){let i=new Wx;const r=new de,s=new de,o=new ln,a=new Jx({depthPacking:Dx}),l=new nA,c={},f=n.maxTextureSize,d={[br]:tn,[tn]:br,[ei]:ei},h=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:iA,fragmentShader:rA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Qt;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Dt(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_x;let u=this.type;this.render=function(T,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),w=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Ai),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ie=u!==Oi&&this.type===Oi,N=u===Oi&&this.type!==Oi;for(let V=0,q=T.length;V<q;V++){const J=T[V],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null||ie===!0||N===!0){const ee=this.type!==Oi?{minFilter:Nt,magFilter:Nt}:{};I.map!==null&&I.map.dispose(),I.map=new Wn(r.x,r.y,ee),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const H=I.getViewportCount();for(let ee=0;ee<H;ee++){const re=I.getViewport(ee);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),Y.viewport(o),I.updateMatrices(J,ee),i=I.getFrustum(),_(E,U,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===Oi&&g(I,U),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,w,B)};function g(T,E){const U=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(E,null,U,h,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(E,null,U,m,y,null)}function v(T,E,U,S){let w=null;const B=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)w=B;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Y=w.uuid,ie=E.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let V=N[ie];V===void 0&&(V=w.clone(),N[ie]=V,E.addEventListener("dispose",b)),w=V}if(w.visible=E.visible,w.wireframe=E.wireframe,S===Oi?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:d[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=t.properties.get(w);Y.light=U}return w}function _(T,E,U,S,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),N=T.material;if(Array.isArray(N)){const V=ie.groups;for(let q=0,J=V.length;q<J;q++){const I=V[q],G=N[I.materialIndex];if(G&&G.visible){const H=v(T,G,S,w);T.onBeforeShadow(t,T,E,U,ie,H,I),t.renderBufferDirect(U,null,ie,H,T,I),T.onAfterShadow(t,T,E,U,ie,H,I)}}}else if(N.visible){const V=v(T,N,S,w);T.onBeforeShadow(t,T,E,U,ie,V,null),t.renderBufferDirect(U,null,ie,V,T,null),T.onAfterShadow(t,T,E,U,ie,V,null)}}const Y=T.children;for(let ie=0,N=Y.length;ie<N;ie++)_(Y[ie],E,U,S,w)}function b(T){T.target.removeEventListener("dispose",b);for(const U in c){const S=c[U],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function oA(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const ue=new ln;let ve=null;const Be=new ln(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!D&&(t.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){D=Fe},setClear:function(Fe,Ze,tt,yt,Pt){Pt===!0&&(Fe*=yt,Ze*=yt,tt*=yt),ue.set(Fe,Ze,tt,yt),Be.equals(ue)===!1&&(t.clearColor(Fe,Ze,tt,yt),Be.copy(ue))},reset:function(){D=!1,ve=null,Be.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,ve=null,Be=null;return{setTest:function(Fe){Fe?Ye(t.DEPTH_TEST):ke(t.DEPTH_TEST)},setMask:function(Fe){ue!==Fe&&!D&&(t.depthMask(Fe),ue=Fe)},setFunc:function(Fe){if(ve!==Fe){switch(Fe){case LM:t.depthFunc(t.NEVER);break;case DM:t.depthFunc(t.ALWAYS);break;case UM:t.depthFunc(t.LESS);break;case Ec:t.depthFunc(t.LEQUAL);break;case NM:t.depthFunc(t.EQUAL);break;case IM:t.depthFunc(t.GEQUAL);break;case FM:t.depthFunc(t.GREATER);break;case OM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Fe}},setLocked:function(Fe){D=Fe},setClear:function(Fe){Be!==Fe&&(t.clearDepth(Fe),Be=Fe)},reset:function(){D=!1,ue=null,ve=null,Be=null}}}function o(){let D=!1,ue=null,ve=null,Be=null,Fe=null,Ze=null,tt=null,yt=null,Pt=null;return{setTest:function(at){D||(at?Ye(t.STENCIL_TEST):ke(t.STENCIL_TEST))},setMask:function(at){ue!==at&&!D&&(t.stencilMask(at),ue=at)},setFunc:function(at,At,xn){(ve!==at||Be!==At||Fe!==xn)&&(t.stencilFunc(at,At,xn),ve=at,Be=At,Fe=xn)},setOp:function(at,At,xn){(Ze!==at||tt!==At||yt!==xn)&&(t.stencilOp(at,At,xn),Ze=at,tt=At,yt=xn)},setLocked:function(at){D=at},setClear:function(at){Pt!==at&&(t.clearStencil(at),Pt=at)},reset:function(){D=!1,ue=null,ve=null,Be=null,Fe=null,Ze=null,tt=null,yt=null,Pt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,_=null,b=null,T=null,E=null,U=null,S=new Te(0,0,0),w=0,B=!1,Y=null,ie=null,N=null,V=null,q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=G>=2);let ee=null,re={};const Q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),he=new ln().fromArray(Q),Se=new ln().fromArray(te);function we(D,ue,ve,Be){const Fe=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(D,Ze),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ve;tt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(ue+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return Ze}const je={};je[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),je[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(je[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),je[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(t.DEPTH_TEST),l.setFunc(Ec),We(!1),C(wm),Ye(t.CULL_FACE),be(Ai);function Ye(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function ke(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function st(D,ue){return m[D]!==ue?(t.bindFramebuffer(D,ue),m[D]=ue,i&&(D===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function j(D,ue){let ve=y,Be=!1;if(D)if(ve=x.get(ue),ve===void 0&&(ve=[],x.set(ue,ve)),D.isWebGLMultipleRenderTargets){const Fe=D.texture;if(ve.length!==Fe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,tt=Fe.length;Ze<tt;Ze++)ve[Ze]=t.COLOR_ATTACHMENT0+Ze;ve.length=Fe.length,Be=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,Be=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,Be=!0);Be&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Xt(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Ne={[Wr]:t.FUNC_ADD,[gM]:t.FUNC_SUBTRACT,[vM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ne[Am]=t.MIN,Ne[Cm]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ne[Am]=D.MIN_EXT,Ne[Cm]=D.MAX_EXT)}const Ve={[xM]:t.ZERO,[yM]:t.ONE,[_M]:t.SRC_COLOR,[gd]:t.SRC_ALPHA,[bM]:t.SRC_ALPHA_SATURATE,[wM]:t.DST_COLOR,[MM]:t.DST_ALPHA,[SM]:t.ONE_MINUS_SRC_COLOR,[vd]:t.ONE_MINUS_SRC_ALPHA,[TM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[AM]:t.CONSTANT_COLOR,[CM]:t.ONE_MINUS_CONSTANT_COLOR,[RM]:t.CONSTANT_ALPHA,[PM]:t.ONE_MINUS_CONSTANT_ALPHA};function be(D,ue,ve,Be,Fe,Ze,tt,yt,Pt,at){if(D===Ai){u===!0&&(ke(t.BLEND),u=!1);return}if(u===!1&&(Ye(t.BLEND),u=!0),D!==mM){if(D!==g||at!==B){if((v!==Wr||T!==Wr)&&(t.blendEquation(t.FUNC_ADD),v=Wr,T=Wr),at)switch(D){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ar:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ar:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,b=null,E=null,U=null,S.set(0,0,0),w=0,g=D,B=at}return}Fe=Fe||ue,Ze=Ze||ve,tt=tt||Be,(ue!==v||Fe!==T)&&(t.blendEquationSeparate(Ne[ue],Ne[Fe]),v=ue,T=Fe),(ve!==_||Be!==b||Ze!==E||tt!==U)&&(t.blendFuncSeparate(Ve[ve],Ve[Be],Ve[Ze],Ve[tt]),_=ve,b=Be,E=Ze,U=tt),(yt.equals(S)===!1||Pt!==w)&&(t.blendColor(yt.r,yt.g,yt.b,Pt),S.copy(yt),w=Pt),g=D,B=!1}function vt(D,ue){D.side===ei?ke(t.CULL_FACE):Ye(t.CULL_FACE);let ve=D.side===tn;ue&&(ve=!ve),We(ve),D.blending===eo&&D.transparent===!1?be(Ai):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Be=D.stencilWrite;c.setTest(Be),Be&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ye(t.SAMPLE_ALPHA_TO_COVERAGE):ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){Y!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),Y=D)}function C(D){D!==dM?(Ye(t.CULL_FACE),D!==ie&&(D===wm?t.cullFace(t.BACK):D===hM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ke(t.CULL_FACE),ie=D}function M(D){D!==N&&(I&&t.lineWidth(D),N=D)}function W(D,ue,ve){D?(Ye(t.POLYGON_OFFSET_FILL),(V!==ue||q!==ve)&&(t.polygonOffset(ue,ve),V=ue,q=ve)):ke(t.POLYGON_OFFSET_FILL)}function ae(D){D?Ye(t.SCISSOR_TEST):ke(t.SCISSOR_TEST)}function oe(D){D===void 0&&(D=t.TEXTURE0+J-1),ee!==D&&(t.activeTexture(D),ee=D)}function le(D,ue,ve){ve===void 0&&(ee===null?ve=t.TEXTURE0+J-1:ve=ee);let Be=re[ve];Be===void 0&&(Be={type:void 0,texture:void 0},re[ve]=Be),(Be.type!==D||Be.texture!==ue)&&(ee!==ve&&(t.activeTexture(ve),ee=ve),t.bindTexture(D,ue||je[D]),Be.type=D,Be.texture=ue)}function Ae(){const D=re[ee];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){he.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function fe(D){Se.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function Ce(D,ue){let ve=d.get(ue);ve===void 0&&(ve=new WeakMap,d.set(ue,ve));let Be=ve.get(D);Be===void 0&&(Be=t.getUniformBlockIndex(ue,D.name),ve.set(D,Be))}function Me(D,ue){const Be=d.get(ue).get(D);f.get(ue)!==Be&&(t.uniformBlockBinding(ue,Be,D.__bindingPointIndex),f.set(ue,Be))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ee=null,re={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,_=null,b=null,T=null,E=null,U=null,S=new Te(0,0,0),w=0,B=!1,Y=null,ie=null,N=null,V=null,q=null,he.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ye,disable:ke,bindFramebuffer:st,drawBuffers:j,useProgram:Xt,setBlending:be,setMaterial:vt,setFlipSided:We,setCullFace:C,setLineWidth:M,setPolygonOffset:W,setScissorTest:ae,activeTexture:oe,bindTexture:le,unbindTexture:Ae,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:Pe,texImage3D:ye,updateUBOMapping:Ce,uniformBlockBinding:Me,texStorage2D:$e,texStorage3D:Ge,texSubImage2D:Ie,texSubImage3D:qe,compressedTexSubImage2D:ne,compressedTexSubImage3D:ot,scissor:P,viewport:fe,reset:se}}function aA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return m?new OffscreenCanvas(C,M):Cc("canvas")}function y(C,M,W,ae){let oe=1;if((C.width>ae||C.height>ae)&&(oe=ae/Math.max(C.width,C.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=M?wd:Math.floor,Ae=le(oe*C.width),pe=le(oe*C.height);d===void 0&&(d=x(Ae,pe));const _e=W?x(Ae,pe):d;return _e.width=Ae,_e.height=pe,_e.getContext("2d").drawImage(C,0,0,Ae,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ae+"x"+pe+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return rg(C.width)&&rg(C.height)}function u(C){return a?!1:C.wrapS!==Bn||C.wrapT!==Bn||C.minFilter!==Nt&&C.minFilter!==Qn}function g(C,M){return C.generateMipmaps&&M&&C.minFilter!==Nt&&C.minFilter!==Qn}function v(C){t.generateMipmap(C)}function _(C,M,W,ae,oe=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=M;if(M===t.RED&&(W===t.FLOAT&&(le=t.R32F),W===t.HALF_FLOAT&&(le=t.R16F),W===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(le=t.R8UI),W===t.UNSIGNED_SHORT&&(le=t.R16UI),W===t.UNSIGNED_INT&&(le=t.R32UI),W===t.BYTE&&(le=t.R8I),W===t.SHORT&&(le=t.R16I),W===t.INT&&(le=t.R32I)),M===t.RG&&(W===t.FLOAT&&(le=t.RG32F),W===t.HALF_FLOAT&&(le=t.RG16F),W===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const Ae=oe?wc:gt.getTransfer(ae);W===t.FLOAT&&(le=t.RGBA32F),W===t.HALF_FLOAT&&(le=t.RGBA16F),W===t.UNSIGNED_BYTE&&(le=Ae===Tt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(C,M,W){return g(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Nt&&C.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===Nt||C===Rm||C===Ou?t.NEAREST:t.LINEAR}function E(C){const M=C.target;M.removeEventListener("dispose",E),S(M),M.isVideoTexture&&f.delete(M)}function U(C){const M=C.target;M.removeEventListener("dispose",U),B(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const W=C.source,ae=h.get(W);if(ae){const oe=ae[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(C),Object.keys(ae).length===0&&h.delete(W)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const W=C.source,ae=h.get(W);delete ae[M.__cacheKey],o.memory.textures--}function B(C){const M=C.texture,W=i.get(C),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(W.__webglFramebuffer[oe]))for(let le=0;le<W.__webglFramebuffer[oe].length;le++)t.deleteFramebuffer(W.__webglFramebuffer[oe][le]);else t.deleteFramebuffer(W.__webglFramebuffer[oe]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[oe])}else{if(Array.isArray(W.__webglFramebuffer))for(let oe=0;oe<W.__webglFramebuffer.length;oe++)t.deleteFramebuffer(W.__webglFramebuffer[oe]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let oe=0;oe<W.__webglColorRenderbuffer.length;oe++)W.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[oe]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,le=M.length;oe<le;oe++){const Ae=i.get(M[oe]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(C)}let Y=0;function ie(){Y=0}function N(){const C=Y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Y+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const W=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(W,C,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function J(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){he(W,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function I(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){he(W,C,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function G(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Se(W,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const H={[_d]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[Sd]:t.MIRRORED_REPEAT},ee={[Nt]:t.NEAREST,[Rm]:t.NEAREST_MIPMAP_NEAREST,[Ou]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[jM]:t.LINEAR_MIPMAP_NEAREST,[Ea]:t.LINEAR_MIPMAP_LINEAR},re={[n1]:t.NEVER,[l1]:t.ALWAYS,[i1]:t.LESS,[Nx]:t.LEQUAL,[r1]:t.EQUAL,[a1]:t.GEQUAL,[s1]:t.GREATER,[o1]:t.NOTEQUAL};function Q(C,M,W){if(W?(t.texParameteri(C,t.TEXTURE_WRAP_S,H[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,H[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,H[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ee[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ee[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Bn||M.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==Ou&&M.minFilter!==Ea||M.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function te(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));const ae=M.source;let oe=h.get(ae);oe===void 0&&(oe={},h.set(ae,oe));const le=V(M);if(le!==C.__cacheKey){oe[le]===void 0&&(oe[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[le].usedTimes++;const Ae=oe[C.__cacheKey];Ae!==void 0&&(oe[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(M)),C.__cacheKey=le,C.__webglTexture=oe[le].texture}return W}function he(C,M,W){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const oe=te(C,M),le=M.source;n.bindTexture(ae,C.__webglTexture,t.TEXTURE0+W);const Ae=i.get(le);if(le.version!==Ae.__version||oe===!0){n.activeTexture(t.TEXTURE0+W);const pe=gt.getPrimaries(gt.workingColorSpace),_e=M.colorSpace===ti?null:gt.getPrimaries(M.colorSpace),Ie=M.colorSpace===ti||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const qe=u(M)&&p(M.image)===!1;let ne=y(M.image,qe,!1,r.maxTextureSize);ne=We(M,ne);const ot=p(ne)||a,$e=s.convert(M.format,M.colorSpace);let Ge=s.convert(M.type),Pe=_(M.internalFormat,$e,Ge,M.colorSpace,M.isVideoTexture);Q(ae,M,ot);let ye;const P=M.mipmaps,fe=a&&M.isVideoTexture!==!0&&Pe!==Px,Ce=Ae.__version===void 0||oe===!0,Me=b(M,ne,ot);if(M.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?M.type===wi?Pe=t.DEPTH_COMPONENT32F:M.type===hr?Pe=t.DEPTH_COMPONENT24:M.type===Qr?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:M.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Zr&&Pe===t.DEPTH_COMPONENT&&M.type!==Eh&&M.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=hr,Ge=s.convert(M.type)),M.format===fo&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,M.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Qr,Ge=s.convert(M.type))),Ce&&(fe?n.texStorage2D(t.TEXTURE_2D,1,Pe,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,$e,Ge,null));else if(M.isDataTexture)if(P.length>0&&ot){fe&&Ce&&n.texStorage2D(t.TEXTURE_2D,Me,Pe,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)ye=P[se],fe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,$e,Ge,ye.data):n.texImage2D(t.TEXTURE_2D,se,Pe,ye.width,ye.height,0,$e,Ge,ye.data);M.generateMipmaps=!1}else fe?(Ce&&n.texStorage2D(t.TEXTURE_2D,Me,Pe,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,$e,Ge,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,$e,Ge,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Pe,P[0].width,P[0].height,ne.depth);for(let se=0,D=P.length;se<D;se++)ye=P[se],M.format!==Hn?$e!==null?fe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ne.depth,$e,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Pe,ye.width,ye.height,ne.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ne.depth,$e,Ge,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Pe,ye.width,ye.height,ne.depth,0,$e,Ge,ye.data)}else{fe&&Ce&&n.texStorage2D(t.TEXTURE_2D,Me,Pe,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)ye=P[se],M.format!==Hn?$e!==null?fe?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,$e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,$e,Ge,ye.data):n.texImage2D(t.TEXTURE_2D,se,Pe,ye.width,ye.height,0,$e,Ge,ye.data)}else if(M.isDataArrayTexture)fe?(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Pe,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,$e,Ge,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,$e,Ge,ne.data);else if(M.isData3DTexture)fe?(Ce&&n.texStorage3D(t.TEXTURE_3D,Me,Pe,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,$e,Ge,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,$e,Ge,ne.data);else if(M.isFramebufferTexture){if(Ce)if(fe)n.texStorage2D(t.TEXTURE_2D,Me,Pe,ne.width,ne.height);else{let se=ne.width,D=ne.height;for(let ue=0;ue<Me;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,se,D,0,$e,Ge,null),se>>=1,D>>=1}}else if(P.length>0&&ot){fe&&Ce&&n.texStorage2D(t.TEXTURE_2D,Me,Pe,P[0].width,P[0].height);for(let se=0,D=P.length;se<D;se++)ye=P[se],fe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,$e,Ge,ye):n.texImage2D(t.TEXTURE_2D,se,Pe,$e,Ge,ye);M.generateMipmaps=!1}else fe?(Ce&&n.texStorage2D(t.TEXTURE_2D,Me,Pe,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$e,Ge,ne)):n.texImage2D(t.TEXTURE_2D,0,Pe,$e,Ge,ne);g(M,ot)&&v(ae),Ae.__version=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Se(C,M,W){if(M.image.length!==6)return;const ae=te(C,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const le=i.get(oe);if(oe.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+W);const Ae=gt.getPrimaries(gt.workingColorSpace),pe=M.colorSpace===ti?null:gt.getPrimaries(M.colorSpace),_e=M.colorSpace===ti||Ae===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,qe=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Ie&&!qe?ne[se]=y(M.image[se],!1,!0,r.maxCubemapSize):ne[se]=qe?M.image[se].image:M.image[se],ne[se]=We(M,ne[se]);const ot=ne[0],$e=p(ot)||a,Ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),ye=_(M.internalFormat,Ge,Pe,M.colorSpace),P=a&&M.isVideoTexture!==!0,fe=le.__version===void 0||ae===!0;let Ce=b(M,ot,$e);Q(t.TEXTURE_CUBE_MAP,M,$e);let Me;if(Ie){P&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ye,ot.width,ot.height);for(let se=0;se<6;se++){Me=ne[se].mipmaps;for(let D=0;D<Me.length;D++){const ue=Me[D];M.format!==Hn?Ge!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ue.width,ue.height,Ge,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ue.width,ue.height,Ge,Pe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ye,ue.width,ue.height,0,Ge,Pe,ue.data)}}}else{Me=M.mipmaps,P&&fe&&(Me.length>0&&Ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ye,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(qe){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Ge,Pe,ne[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,ne[se].width,ne[se].height,0,Ge,Pe,ne[se].data);for(let D=0;D<Me.length;D++){const ve=Me[D].image[se].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,ve.width,ve.height,Ge,Pe,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ye,ve.width,ve.height,0,Ge,Pe,ve.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ge,Pe,ne[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,Ge,Pe,ne[se]);for(let D=0;D<Me.length;D++){const ue=Me[D];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Ge,Pe,ue.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ye,Ge,Pe,ue.image[se])}}}g(M,$e)&&v(t.TEXTURE_CUBE_MAP),le.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function we(C,M,W,ae,oe,le){const Ae=s.convert(W.format,W.colorSpace),pe=s.convert(W.type),_e=_(W.internalFormat,Ae,pe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const qe=Math.max(1,M.width>>le),ne=Math.max(1,M.height>>le);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,le,_e,qe,ne,M.depth,0,Ae,pe,null):n.texImage2D(oe,le,_e,qe,ne,0,Ae,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,oe,i.get(W).__webglTexture,0,Ve(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,oe,i.get(W).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(C,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||be(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===wi?ae=t.DEPTH_COMPONENT32F:oe.type===hr&&(ae=t.DEPTH_COMPONENT24));const le=Ve(M);be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ae=Ve(M);W&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ae.length;oe++){const le=ae[oe],Ae=s.convert(le.format,le.colorSpace),pe=s.convert(le.type),_e=_(le.internalFormat,Ae,pe,le.colorSpace),Ie=Ve(M);W&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,_e,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,oe=Ve(M);if(M.depthTexture.format===Zr)be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===fo)be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ke(C){const M=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ye(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),je(M.__webglDepthbuffer[ae],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),je(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(C,M,W){const ae=i.get(C);M!==void 0&&we(ae.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&ke(C)}function j(C){const M=C.texture,W=i.get(C),ae=i.get(M);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Ae=p(C)||a;if(oe){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[pe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)W.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else W.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)W.__webglFramebuffer[pe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const pe=C.texture;for(let _e=0,Ie=pe.length;_e<Ie;_e++){const qe=i.get(pe[_e]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&be(C)===!1){const pe=le?M:[M];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const Ie=pe[_e];W.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const qe=s.convert(Ie.format,Ie.colorSpace),ne=s.convert(Ie.type),ot=_(Ie.internalFormat,qe,ne,Ie.colorSpace,C.isXRRenderTarget===!0),$e=Ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ot,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),je(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M,Ae);for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)we(W.__webglFramebuffer[pe][_e],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else we(W.__webglFramebuffer[pe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(M,Ae)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const pe=C.texture;for(let _e=0,Ie=pe.length;_e<Ie;_e++){const qe=pe[_e],ne=i.get(qe);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Q(t.TEXTURE_2D,qe,Ae),we(W.__webglFramebuffer,C,qe,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),g(qe,Ae)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ae.__webglTexture),Q(pe,M,Ae),a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)we(W.__webglFramebuffer[_e],C,M,t.COLOR_ATTACHMENT0,pe,_e);else we(W.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,pe,0);g(M,Ae)&&v(pe),n.unbindTexture()}C.depthBuffer&&ke(C)}function Xt(C){const M=p(C)||a,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,oe=W.length;ae<oe;ae++){const le=W[ae];if(g(le,M)){const Ae=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(le).__webglTexture;n.bindTexture(Ae,pe),v(Ae),n.unbindTexture()}}}function Ne(C){if(a&&C.samples>0&&be(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ae=C.height;let oe=t.COLOR_BUFFER_BIT;const le=[],Ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ie=0;Ie<M.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){le.push(t.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&le.push(Ae);const qe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(qe===!1&&(C.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]),qe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),_e){const ne=i.get(M[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,W,ae,0,0,W,ae,oe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<M.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]);const qe=i.get(M[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function be(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function We(C,M){const W=C.colorSpace,ae=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Md||W!==qi&&W!==ti&&(gt.getTransfer(W)===Tt?a===!1?e.has("EXT_sRGB")===!0&&ae===Hn?(C.format=Md,C.minFilter=Qn,C.generateMipmaps=!1):M=Fx.sRGBToLinear(M):(ae!==Hn||oe!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=N,this.resetTextureUnits=ie,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=I,this.setTextureCube=G,this.rebindTextures=st,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=be}function lA(t,e,n){const i=n.isWebGL2;function r(s,o=ti){let a;const l=gt.getTransfer(o);if(s===Er)return t.UNSIGNED_BYTE;if(s===Tx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===bx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===XM)return t.BYTE;if(s===YM)return t.SHORT;if(s===Eh)return t.UNSIGNED_SHORT;if(s===wx)return t.INT;if(s===hr)return t.UNSIGNED_INT;if(s===wi)return t.FLOAT;if(s===Ci)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qM)return t.ALPHA;if(s===Hn)return t.RGBA;if(s===$M)return t.LUMINANCE;if(s===KM)return t.LUMINANCE_ALPHA;if(s===Zr)return t.DEPTH_COMPONENT;if(s===fo)return t.DEPTH_STENCIL;if(s===Md)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===QM)return t.RED;if(s===Ax)return t.RED_INTEGER;if(s===ZM)return t.RG;if(s===Cx)return t.RG_INTEGER;if(s===Rx)return t.RGBA_INTEGER;if(s===zu||s===ku||s===Bu||s===Hu)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pm||s===Lm||s===Dm||s===Um)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Um)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Px)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nm||s===Im)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Nm)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Im)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fm||s===Om||s===zm||s===km||s===Bm||s===Hm||s===Vm||s===Gm||s===Wm||s===jm||s===Xm||s===Ym||s===qm||s===$m)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Om)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===km)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ym)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$m)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vu||s===Km||s===Qm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vu)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Km)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===JM||s===Zm||s===Jm||s===eg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===eg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class cA extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ys extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uA={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class fA extends ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,x=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],_=new de;let b=null;const T=new Jn;T.layers.enable(1),T.viewport=new ln;const E=new Jn;E.layers.enable(2),E.viewport=new ln;const U=[T,E],S=new cA;S.layers.enable(1),S.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=g[Q];return te===void 0&&(te=new hf,g[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=g[Q];return te===void 0&&(te=new hf,g[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=g[Q];return te===void 0&&(te=new hf,g[Q]=te),te.getHandSpace()};function Y(Q){const te=v.indexOf(Q.inputSource);if(te===-1)return;const he=g[te];he!==void 0&&(he.update(Q.inputSource,Q.frame,c||o),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ie(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",N);for(let Q=0;Q<g.length;Q++){const te=v[Q];te!==null&&(v[Q]=null,g[Q].disconnect(te))}w=null,B=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Wn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let te=null,he=null,Se=null;y.depth&&(Se=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=y.stencil?fo:Zr,he=y.stencil?Qr:hr);const we={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Wn(h.textureWidth,h.textureHeight,{format:Hn,type:Er,depthTexture:new Yx(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const je=e.properties.get(u);je.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(Q){for(let te=0;te<Q.removed.length;te++){const he=Q.removed[te],Se=v.indexOf(he);Se>=0&&(v[Se]=null,g[Se].disconnect(he))}for(let te=0;te<Q.added.length;te++){const he=Q.added[te];let Se=v.indexOf(he);if(Se===-1){for(let je=0;je<g.length;je++)if(je>=v.length){v.push(he),Se=je;break}else if(v[je]===null){v[je]=he,Se=je;break}if(Se===-1)break}const we=g[Se];we&&we.connect(he)}}const V=new R,q=new R;function J(Q,te,he){V.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const Se=V.distanceTo(q),we=te.projectionMatrix.elements,je=he.projectionMatrix.elements,Ye=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),st=(we[9]+1)/we[5],j=(we[9]-1)/we[5],Xt=(we[8]-1)/we[0],Ne=(je[8]+1)/je[0],Ve=Ye*Xt,be=Ye*Ne,vt=Se/(-Xt+Ne),We=vt*-Xt;te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(We),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const C=Ye+vt,M=ke+vt,W=Ve-We,ae=be+(Se-We),oe=st*ke/M*C,le=j*ke/M*C;Q.projectionMatrix.makePerspective(W,ae,oe,le,C,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function I(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;S.near=E.near=T.near=Q.near,S.far=E.far=T.far=Q.far,(w!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,B=S.far);const te=Q.parent,he=S.cameras;I(S,te);for(let Se=0;Se<he.length;Se++)I(he[Se],te);he.length===2?J(S,T,E):S.projectionMatrix.copy(T.projectionMatrix),G(Q,S,te)};function G(Q,te,he){he===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ed*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let H=null;function ee(Q,te){if(f=te.getViewerPose(c||o),x=te,f!==null){const he=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Se=!1;he.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let we=0;we<he.length;we++){const je=he[we];let Ye=null;if(m!==null)Ye=m.getViewport(je);else{const st=d.getViewSubImage(h,je);Ye=st.viewport,we===0&&(e.setRenderTargetTextures(u,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(u))}let ke=U[we];ke===void 0&&(ke=new Jn,ke.layers.enable(we),ke.viewport=new ln,U[we]=ke),ke.matrix.fromArray(je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(ke)}}for(let he=0;he<g.length;he++){const Se=v[he],we=g[he];Se!==null&&we!==void 0&&we.update(Se,te,c||o)}H&&H(Q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const re=new jx;re.setAnimationLoop(ee),this.setAnimationLoop=function(Q){H=Q},this.dispose=function(){}}}function dA(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Vx(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,_)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const _=v.program;i.uniformBlockBinding(g,_)}function c(g,v){let _=r[g.id];_===void 0&&(x(g),_=f(g),r[g.id]=_,g.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function f(g){const v=d();g.__bindingPointIndex=v;const _=t.createBuffer(),b=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],_=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,E=_.length;T<E;T++){const U=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,w=U.length;S<w;S++){const B=U[S];if(m(B,T,S,b)===!0){const Y=B.__offset,ie=Array.isArray(B.value)?B.value:[B.value];let N=0;for(let V=0;V<ie.length;V++){const q=ie[V],J=y(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,Y+N,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,_,b){const T=g.value,E=v+"_"+_;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const U=b[E];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return b[E]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function x(g){const v=g.uniforms;let _=0;const b=16;for(let E=0,U=v.length;E<U;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,B=S.length;w<B;w++){const Y=S[w],ie=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,V=ie.length;N<V;N++){const q=ie[N],J=y(q),I=_%b;I!==0&&b-I<J.boundary&&(_+=b-I),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=J.storage}}}const T=_%b;return T>0&&(_+=b-T),g.__size=_,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ey{constructor(e={}){const{canvas:n=f1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const v=this;let _=!1,b=0,T=0,E=null,U=-1,S=null;const w=new ln,B=new ln;let Y=null;const ie=new Te(0);let N=0,V=n.width,q=n.height,J=1,I=null,G=null;const H=new ln(0,0,V,q),ee=new ln(0,0,V,q);let re=!1;const Q=new Wx;let te=!1,he=!1,Se=null;const we=new jt,je=new de,Ye=new R,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return E===null?J:1}let j=i;function Xt(A,O){for(let $=0;$<A.length;$++){const K=A[$],X=n.getContext(K,O);if(X!==null)return X}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mh}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",ue,!1),j===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),j=Xt(O,A),j===null)throw Xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ne,Ve,be,vt,We,C,M,W,ae,oe,le,Ae,pe,_e,Ie,qe,ne,ot,$e,Ge,Pe,ye,P,fe;function Ce(){Ne=new wT(j),Ve=new xT(j,Ne,e),Ne.init(Ve),ye=new lA(j,Ne,Ve),be=new oA(j,Ne,Ve),vt=new AT(j),We=new Yb,C=new aA(j,Ne,be,We,Ve,ye,vt),M=new _T(v),W=new ET(v),ae=new I1(j,Ve),P=new gT(j,Ne,ae,Ve),oe=new TT(j,ae,vt,P),le=new LT(j,oe,ae,vt),$e=new PT(j,Ve,C),qe=new yT(We),Ae=new Xb(v,M,W,Ne,Ve,P,qe),pe=new dA(v,We),_e=new $b,Ie=new tA(Ne,Ve),ot=new mT(v,M,W,be,le,h,l),ne=new sA(v,le,Ve),fe=new hA(j,vt,Ve,be),Ge=new vT(j,Ne,vt,Ve),Pe=new bT(j,Ne,vt,Ve),vt.programs=Ae.programs,v.capabilities=Ve,v.extensions=Ne,v.properties=We,v.renderLists=_e,v.shadowMap=ne,v.state=be,v.info=vt}Ce();const Me=new fA(v,j);this.xr=Me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(V,q,!1))},this.getSize=function(A){return A.set(V,q)},this.setSize=function(A,O,$=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,q=O,n.width=Math.floor(A*J),n.height=Math.floor(O*J),$===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(V*J,q*J).floor()},this.setDrawingBufferSize=function(A,O,$){V=A,q=O,J=$,n.width=Math.floor(A*$),n.height=Math.floor(O*$),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,O,$,K){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,$,K),be.viewport(w.copy(H).multiplyScalar(J).floor())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,O,$,K){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,O,$,K),be.scissor(B.copy(ee).multiplyScalar(J).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){be.setScissorTest(re=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(A=!0,O=!0,$=!0){let K=0;if(A){let X=!1;if(E!==null){const xe=E.texture.format;X=xe===Rx||xe===Cx||xe===Ax}if(X){const xe=E.texture.type,Le=xe===Er||xe===hr||xe===Eh||xe===Qr||xe===Tx||xe===bx,Oe=ot.getClearColor(),He=ot.getClearAlpha(),nt=Oe.r,Xe=Oe.g,Ke=Oe.b;Le?(m[0]=nt,m[1]=Xe,m[2]=Ke,m[3]=He,j.clearBufferuiv(j.COLOR,0,m)):(x[0]=nt,x[1]=Xe,x[2]=Ke,x[3]=He,j.clearBufferiv(j.COLOR,0,x))}else K|=j.COLOR_BUFFER_BIT}O&&(K|=j.DEPTH_BUFFER_BIT),$&&(K|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),Ie.dispose(),We.dispose(),M.dispose(),W.dispose(),le.dispose(),P.dispose(),fe.dispose(),Ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Pt),Me.removeEventListener("sessionend",at),Se&&(Se.dispose(),Se=null),At.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=vt.autoReset,O=ne.enabled,$=ne.autoUpdate,K=ne.needsUpdate,X=ne.type;Ce(),vt.autoReset=A,ne.enabled=O,ne.autoUpdate=$,ne.needsUpdate=K,ne.type=X}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){const O=A.target;O.removeEventListener("dispose",ve),Be(O)}function Be(A){Fe(A),We.remove(A)}function Fe(A){const O=We.get(A).programs;O!==void 0&&(O.forEach(function($){Ae.releaseProgram($)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,$,K,X,xe){O===null&&(O=ke);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Oe=Eo(A,O,$,K,X);be.setMaterial(K,Le);let He=$.index,nt=1;if(K.wireframe===!0){if(He=oe.getWireframeAttribute($),He===void 0)return;nt=2}const Xe=$.drawRange,Ke=$.attributes.position;let Lt=Xe.start*nt,yn=(Xe.start+Xe.count)*nt;xe!==null&&(Lt=Math.max(Lt,xe.start*nt),yn=Math.min(yn,(xe.start+xe.count)*nt)),He!==null?(Lt=Math.max(Lt,0),yn=Math.min(yn,He.count)):Ke!=null&&(Lt=Math.max(Lt,0),yn=Math.min(yn,Ke.count));const Ht=yn-Lt;if(Ht<0||Ht===1/0)return;P.setup(X,K,Oe,$,He);let ai,Et=Ge;if(He!==null&&(ai=ae.get(He),Et=Pe,Et.setIndex(ai)),X.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*st()),Et.setMode(j.LINES)):Et.setMode(j.TRIANGLES);else if(X.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),be.setLineWidth(Je*st()),X.isLineSegments?Et.setMode(j.LINES):X.isLineLoop?Et.setMode(j.LINE_LOOP):Et.setMode(j.LINE_STRIP)}else X.isPoints?Et.setMode(j.POINTS):X.isSprite&&Et.setMode(j.TRIANGLES);if(X.isBatchedMesh)Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Et.renderInstances(Lt,Ht,X.count);else if($.isInstancedBufferGeometry){const Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wo=Math.min($.instanceCount,Je);Et.renderInstances(Lt,Ht,wo)}else Et.render(Lt,Ht)};function Ze(A,O,$){A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Qi(A,O,$),A.side=br,A.needsUpdate=!0,Qi(A,O,$),A.side=ei):Qi(A,O,$)}this.compile=function(A,O,$=null){$===null&&($=A),p=Ie.get($),p.init(),g.push(p),$.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==$&&A.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const K=new Set;return A.traverse(function(X){const xe=X.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const Oe=xe[Le];Ze(Oe,$,X),K.add(Oe)}else Ze(xe,$,X),K.add(xe)}),g.pop(),p=null,K},this.compileAsync=function(A,O,$=null){const K=this.compile(A,O,$);return new Promise(X=>{function xe(){if(K.forEach(function(Le){We.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){X(A);return}setTimeout(xe,10)}Ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let tt=null;function yt(A){tt&&tt(A)}function Pt(){At.stop()}function at(){At.start()}const At=new jx;At.setAnimationLoop(yt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){tt=A,Me.setAnimationLoop(A),A===null?At.stop():At.start()},Me.addEventListener("sessionstart",Pt),Me.addEventListener("sessionend",at),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,E),p=Ie.get(A,g.length),p.init(),g.push(p),we.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(we),he=this.localClippingEnabled,te=qe.init(this.clippingPlanes,he),y=_e.get(A,u.length),y.init(),u.push(y),xn(A,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,G),this.info.render.frame++,te===!0&&qe.beginShadows();const $=p.state.shadowsArray;if(ne.render($,A,O),te===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(y,A),p.setupLights(v._useLegacyLights),O.isArrayCamera){const K=O.cameras;for(let X=0,xe=K.length;X<xe;X++){const Le=K[X];So(y,A,Le,Le.viewport)}}else So(y,A,O);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,O),P.resetDefaultState(),U=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function xn(A,O,$,K){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Le=le.update(A),Oe=A.material;Oe.visible&&y.push(A,Le,Oe,$,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Le=le.update(A),Oe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const He=Le.groups;for(let nt=0,Xe=He.length;nt<Xe;nt++){const Ke=He[nt],Lt=Oe[Ke.materialIndex];Lt&&Lt.visible&&y.push(A,Le,Lt,$,Ye.z,Ke)}}else Oe.visible&&y.push(A,Le,Oe,$,Ye.z,null)}}const xe=A.children;for(let Le=0,Oe=xe.length;Le<Oe;Le++)xn(xe[Le],O,$,K)}function So(A,O,$,K){const X=A.opaque,xe=A.transmissive,Le=A.transparent;p.setupLightsView($),te===!0&&qe.setGlobalState(v.clippingPlanes,$),xe.length>0&&us(X,xe,O,$),K&&be.viewport(w.copy(K)),X.length>0&&fs(X,O,$),xe.length>0&&fs(xe,O,$),Le.length>0&&fs(Le,O,$),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function us(A,O,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const xe=Ve.isWebGL2;Se===null&&(Se=new Wn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Ci:Er,minFilter:Ea,samples:xe?4:0})),v.getDrawingBufferSize(je),xe?Se.setSize(je.x,je.y):Se.setSize(wd(je.x),wd(je.y));const Le=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(ie),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=Mr,fs(A,$,K),C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se);let He=!1;for(let nt=0,Xe=O.length;nt<Xe;nt++){const Ke=O[nt],Lt=Ke.object,yn=Ke.geometry,Ht=Ke.material,ai=Ke.group;if(Ht.side===ei&&Lt.layers.test(K.layers)){const Et=Ht.side;Ht.side=tn,Ht.needsUpdate=!0,Ri(Lt,$,K,yn,Ht,ai),Ht.side=Et,Ht.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se)),v.setRenderTarget(Le),v.setClearColor(ie,N),v.toneMapping=Oe}function fs(A,O,$){const K=O.isScene===!0?O.overrideMaterial:null;for(let X=0,xe=A.length;X<xe;X++){const Le=A[X],Oe=Le.object,He=Le.geometry,nt=K===null?Le.material:K,Xe=Le.group;Oe.layers.test($.layers)&&Ri(Oe,O,$,He,nt,Xe)}}function Ri(A,O,$,K,X,xe){A.onBeforeRender(v,O,$,K,X,xe),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,O,$,K,A,xe),X.transparent===!0&&X.side===ei&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,v.renderBufferDirect($,O,K,X,A,xe),X.side=br,X.needsUpdate=!0,v.renderBufferDirect($,O,K,X,A,xe),X.side=ei):v.renderBufferDirect($,O,K,X,A,xe),A.onAfterRender(v,O,$,K,X,xe)}function Qi(A,O,$){O.isScene!==!0&&(O=ke);const K=We.get(A),X=p.state.lights,xe=p.state.shadowsArray,Le=X.state.version,Oe=Ae.getParameters(A,X.state,xe,O,$),He=Ae.getProgramCacheKey(Oe);let nt=K.programs;K.environment=A.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(A.isMeshStandardMaterial?W:M).get(A.envMap||K.environment),nt===void 0&&(A.addEventListener("dispose",ve),nt=new Map,K.programs=nt);let Xe=nt.get(He);if(Xe!==void 0){if(K.currentProgram===Xe&&K.lightsStateVersion===Le)return Mo(A,Oe),Xe}else Oe.uniforms=Ae.getUniforms(A),A.onBuild($,Oe,v),A.onBeforeCompile(Oe,v),Xe=Ae.acquireProgram(Oe,He),nt.set(He,Xe),K.uniforms=Oe.uniforms;const Ke=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=qe.uniform),Mo(A,Oe),K.needsLights=Jc(A),K.lightsStateVersion=Le,K.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Xe,K.uniformsList=null,Xe}function oi(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Mo(A,O){const $=We.get(A);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Eo(A,O,$,K,X){O.isScene!==!0&&(O=ke),C.resetTextureUnits();const xe=O.fog,Le=K.isMeshStandardMaterial?O.environment:null,Oe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qi,He=(K.isMeshStandardMaterial?W:M).get(K.envMap||Le),nt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ke=!!$.morphAttributes.position,Lt=!!$.morphAttributes.normal,yn=!!$.morphAttributes.color;let Ht=Mr;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const ai=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Et=ai!==void 0?ai.length:0,Je=We.get(K),wo=p.state.lights;if(te===!0&&(he===!0||A!==S)){const bn=A===S&&K.id===U;qe.setState(K,A,bn)}let ht=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==wo.state.version||Je.outputColorSpace!==Oe||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==xe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==qe.numPlanes||Je.numIntersection!==qe.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==Xe||Je.morphTargets!==Ke||Je.morphNormals!==Lt||Je.morphColors!==yn||Je.toneMapping!==Ht||Ve.isWebGL2===!0&&Je.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,Je.__version=K.version);let yi=Je.currentProgram;ht===!0&&(yi=Qi(K,O,X));let Fa=!1,ds=!1,To=!1;const rn=yi.getUniforms(),Pi=Je.uniforms;if(be.useProgram(yi.program)&&(Fa=!0,ds=!0,To=!0),K.id!==U&&(U=K.id,ds=!0),Fa||S!==A){rn.setValue(j,"projectionMatrix",A.projectionMatrix),rn.setValue(j,"viewMatrix",A.matrixWorldInverse);const bn=rn.map.cameraPosition;bn!==void 0&&bn.setValue(j,Ye.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&rn.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&rn.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,ds=!0,To=!0)}if(X.isSkinnedMesh){rn.setOptional(j,X,"bindMatrix"),rn.setOptional(j,X,"bindMatrixInverse");const bn=X.skeleton;bn&&(Ve.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),rn.setValue(j,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(rn.setOptional(j,X,"batchingTexture"),rn.setValue(j,"batchingTexture",X._matricesTexture,C));const Oa=$.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&Ve.isWebGL2===!0)&&$e.update(X,$,yi),(ds||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,rn.setValue(j,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Pi.envMap.value=He,Pi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ds&&(rn.setValue(j,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&Zc(Pi,To),xe&&K.fog===!0&&pe.refreshFogUniforms(Pi,xe),pe.refreshMaterialUniforms(Pi,K,J,q,Se),Zl.upload(j,oi(Je),Pi,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zl.upload(j,oi(Je),Pi,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&rn.setValue(j,"center",X.center),rn.setValue(j,"modelViewMatrix",X.modelViewMatrix),rn.setValue(j,"normalMatrix",X.normalMatrix),rn.setValue(j,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const bn=K.uniformsGroups;for(let za=0,eu=bn.length;za<eu;za++)if(Ve.isWebGL2){const tu=bn[za];fe.update(tu,yi),fe.bind(tu,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Zc(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Jc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,$){We.get(A.texture).__webglTexture=O,We.get(A.depthTexture).__webglTexture=$;const K=We.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const $=We.get(A);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,$=0){E=A,b=O,T=$;let K=!0,X=null,xe=!1,Le=!1;if(A){const He=We.get(A);He.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(j.FRAMEBUFFER,null),K=!1):He.__webglFramebuffer===void 0?C.setupRenderTarget(A):He.__hasExternalTextures&&C.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const Xe=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?X=Xe[O][$]:X=Xe[O],xe=!0):Ve.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?X=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[$]:X=Xe,w.copy(A.viewport),B.copy(A.scissor),Y=A.scissorTest}else w.copy(H).multiplyScalar(J).floor(),B.copy(ee).multiplyScalar(J).floor(),Y=re;if(be.bindFramebuffer(j.FRAMEBUFFER,X)&&Ve.drawBuffers&&K&&be.drawBuffers(A,X),be.viewport(w),be.scissor(B),be.setScissorTest(Y),xe){const He=We.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+O,He.__webglTexture,$)}else if(Le){const He=We.get(A.texture),nt=O||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,He.__webglTexture,$||0,nt)}U=-1},this.readRenderTargetPixels=function(A,O,$,K,X,xe,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){be.bindFramebuffer(j.FRAMEBUFFER,Oe);try{const He=A.texture,nt=He.format,Xe=He.type;if(nt!==Hn&&ye.convert(nt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Xe===Ci&&(Ne.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Xe!==Er&&ye.convert(Xe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===wi&&(Ve.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-K&&$>=0&&$<=A.height-X&&j.readPixels(O,$,K,X,ye.convert(nt),ye.convert(Xe),xe)}finally{const He=E!==null?We.get(E).__webglFramebuffer:null;be.bindFramebuffer(j.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(A,O,$=0){const K=Math.pow(2,-$),X=Math.floor(O.image.width*K),xe=Math.floor(O.image.height*K);C.setTexture2D(O,0),j.copyTexSubImage2D(j.TEXTURE_2D,$,0,0,A.x,A.y,X,xe),be.unbindTexture()},this.copyTextureToTexture=function(A,O,$,K=0){const X=O.image.width,xe=O.image.height,Le=ye.convert($.format),Oe=ye.convert($.type);C.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,K,A.x,A.y,X,xe,Le,Oe,O.image.data):O.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,K,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,K,A.x,A.y,Le,Oe,O.image),K===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(A,O,$,K,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,He=ye.convert(K.format),nt=ye.convert(K.type);let Xe;if(K.isData3DTexture)C.setTexture3D(K,0),Xe=j.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),Xe=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const Ke=j.getParameter(j.UNPACK_ROW_LENGTH),Lt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),yn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ht=j.getParameter(j.UNPACK_SKIP_ROWS),ai=j.getParameter(j.UNPACK_SKIP_IMAGES),Et=$.isCompressedTexture?$.mipmaps[X]:$.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Et.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Et.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,A.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,A.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(Xe,X,O.x,O.y,O.z,xe,Le,Oe,He,nt,Et.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Xe,X,O.x,O.y,O.z,xe,Le,Oe,He,Et.data)):j.texSubImage3D(Xe,X,O.x,O.y,O.z,xe,Le,Oe,He,nt,Et),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ke),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Lt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,yn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ht),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ai),X===0&&K.generateMipmaps&&j.generateMipmap(Xe),be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,be.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wh?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Yc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?Jr:Lx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?an:qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pA extends ey{}pA.prototype.isWebGL1Renderer=!0;class Ch{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=n}clone(){return new Ch(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ty extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class mA extends In{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Nt,f=Nt,d,h){super(null,o,a,l,c,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ny extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gg=new R,Wg=new R,jg=new jt,pf=new Na,Ll=new Ua;class gA extends gn{constructor(e=new Qt,n=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gg.fromBufferAttribute(n,r-1),Wg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gg.distanceTo(Wg);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;jg.copy(r).invert(),pf.copy(e.ray).applyMatrix4(jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,f=new R,d=new R,h=new R,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),g=Math.min(x.count,o.start+o.count);for(let v=u,_=g-1;v<_;v+=m){const b=x.getX(v),T=x.getX(v+1);if(c.fromBufferAttribute(p,b),f.fromBufferAttribute(p,T),pf.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||n.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=u,_=g-1;v<_;v+=m){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),pf.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Xg=new R,Yg=new R;class vA extends gA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Xg.fromBufferAttribute(n,r),Yg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xg.distanceTo(Yg);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xA extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qg=new jt,bd=new Na,Dl=new Ua,Ul=new R;class iy extends gn{constructor(e=new Qt,n=new xA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;qg.copy(r).invert(),bd.copy(e.ray).applyMatrix4(qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=h,y=m;x<y;x++){const p=c.getX(x);Ul.fromBufferAttribute(d,p),$g(Ul,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=h,y=m;x<y;x++)Ul.fromBufferAttribute(d,x),$g(Ul,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $g(t,e,n,i,r,s,o){const a=bd.distanceSqToPoint(t);if(a<n){const l=new R;bd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,m=(o-f)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new jt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(en(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(en(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ry extends Ki{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*f-m*d+this.aX,c=h*d+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yA extends ry{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,m*=f,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Nl=new R,mf=new Rh,gf=new Rh,vf=new Rh;class Rc extends Ki{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Nl.subVectors(r[0],r[1]).add(r[0]),c=Nl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),mf.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,x,y,p),gf.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,x,y,p),vf.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,x,y,p)}else this.curveType==="catmullrom"&&(mf.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),gf.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),vf.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(mf.calc(l),gf.calc(l),vf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function _A(t,e){const n=1-t;return n*n*e}function SA(t,e){return 2*(1-t)*t*e}function MA(t,e){return t*t*e}function ia(t,e,n,i){return _A(t,e)+SA(t,n)+MA(t,i)}function EA(t,e){const n=1-t;return n*n*n*e}function wA(t,e){const n=1-t;return 3*n*n*t*e}function TA(t,e){return 3*(1-t)*t*t*e}function bA(t,e){return t*t*t*e}function ra(t,e,n,i,r){return EA(t,e)+wA(t,n)+TA(t,i)+bA(t,r)}class AA extends Ki{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CA extends Ki{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y),ra(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class RA extends Ki{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class PA extends Ki{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LA extends Ki{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sy extends Ki{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y),ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DA extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Kg(a,l.x,c.x,f.x,d.x),Kg(a,l.y,c.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var UA=Object.freeze({__proto__:null,ArcCurve:yA,CatmullRomCurve3:Rc,CubicBezierCurve:AA,CubicBezierCurve3:CA,EllipseCurve:ry,LineCurve:RA,LineCurve3:PA,QuadraticBezierCurve:LA,QuadraticBezierCurve3:sy,SplineCurve:DA});class Ph extends Qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let x=0;const y=[],p=i/2;let u=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(m,2));function g(){const _=new R,b=new R;let T=0;const E=(n-e)/i;for(let U=0;U<=s;U++){const S=[],w=U/s,B=w*(n-e)+e;for(let Y=0;Y<=r;Y++){const ie=Y/r,N=ie*l+a,V=Math.sin(N),q=Math.cos(N);b.x=B*V,b.y=-w*i+p,b.z=B*q,d.push(b.x,b.y,b.z),_.set(V,E,q).normalize(),h.push(_.x,_.y,_.z),m.push(ie,1-w),S.push(x++)}y.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const w=y[S][U],B=y[S+1][U],Y=y[S+1][U+1],ie=y[S][U+1];f.push(w,B,ie),f.push(B,Y,ie),T+=6}c.addGroup(u,T,0),u+=T}function v(_){const b=x,T=new de,E=new R;let U=0;const S=_===!0?e:n,w=_===!0?1:-1;for(let Y=1;Y<=r;Y++)d.push(0,p*w,0),h.push(0,w,0),m.push(.5,.5),x++;const B=x;for(let Y=0;Y<=r;Y++){const N=Y/r*l+a,V=Math.cos(N),q=Math.sin(N);E.x=S*q,E.y=p*w,E.z=S*V,d.push(E.x,E.y,E.z),h.push(0,w,0),T.x=V*.5+.5,T.y=q*.5*w+.5,m.push(T.x,T.y),x++}for(let Y=0;Y<r;Y++){const ie=b+Y,N=B+Y;_===!0?f.push(N,N+1,ie):f.push(N+1,N,ie),U+=3}c.addGroup(u,U,_===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new R,_=new R,b=new R;for(let T=0;T<n.length;T+=3)m(n[T+0],v),m(n[T+1],_),m(n[T+2],b),l(v,_,b,g)}function l(g,v,_,b){const T=b+1,E=[];for(let U=0;U<=T;U++){E[U]=[];const S=g.clone().lerp(_,U/T),w=v.clone().lerp(_,U/T),B=T-U;for(let Y=0;Y<=B;Y++)Y===0&&U===T?E[U][Y]=S:E[U][Y]=S.clone().lerp(w,Y/B)}for(let U=0;U<T;U++)for(let S=0;S<2*(T-U)-1;S++){const w=Math.floor(S/2);S%2===0?(h(E[U][w+1]),h(E[U+1][w]),h(E[U][w])):(h(E[U][w+1]),h(E[U+1][w+1]),h(E[U+1][w]))}}function c(g){const v=new R;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(g),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function f(){const g=new R;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const _=p(g)/2/Math.PI+.5,b=u(g)/Math.PI+.5;o.push(_,1-b)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],_=o[g+2],b=o[g+4],T=Math.max(v,_,b),E=Math.min(v,_,b);T>.9&&E<.1&&(v<.2&&(o[g+0]+=1),_<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,v){const _=g*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function x(){const g=new R,v=new R,_=new R,b=new R,T=new de,E=new de,U=new de;for(let S=0,w=0;S<s.length;S+=9,w+=6){g.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),b.copy(g).add(v).add(_).divideScalar(3);const B=p(b);y(T,w+0,g,B),y(E,w+2,v,B),y(U,w+4,_,B)}}function y(g,v,_,b){b<0&&g.x===1&&(o[v]=g.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.vertices,e.indices,e.radius,e.details)}}class Lh extends Qc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lh(e.radius,e.detail)}}const Il=new R,Fl=new R,xf=new R,Ol=new Zn;class zl extends Qt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ta*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:y,b:p,c:u}=Ol;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Ol.getNormal(xf),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,_=d[g],b=d[v],T=Ol[f[g]],E=Ol[f[v]],U=`${_}_${b}`,S=`${b}_${_}`;S in h&&h[S]?(xf.dot(h[S].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(E.x,E.y,E.z)),h[S]=null):U in h||(h[U]={index0:c[g],index1:c[v],normal:xf.clone()})}}for(const x in h)if(h[x]){const{index0:y,index1:p}=h[x];Il.fromBufferAttribute(a,y),Fl.fromBufferAttribute(a,p),m.push(Il.x,Il.y,Il.z),m.push(Fl.x,Fl.y,Fl.z)}this.setAttribute("position",new dt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dh extends Qc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Dh(e.radius,e.detail)}}class Ta extends Qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new R,h=new R,m=[],x=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let _=0;u===0&&o===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let b=0;b<=n;b++){const T=b/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(T+_,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],_=f[u][g],b=f[u+1][g],T=f[u+1][g+1];(u!==0||o>0)&&m.push(v,_,T),(u!==i-1||l<Math.PI)&&m.push(_,b,T)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sa extends Qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new R,d=new R,h=new R;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const y=x/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(y),d.y=(e+n*Math.cos(p))*Math.sin(y),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const y=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,u=(r+1)*(m-1)+x,g=(r+1)*m+x;o.push(y,p,g),o.push(p,u,g)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class po extends Qt{constructor(e=new sy(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new de;let f=new R;const d=[],h=[],m=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(m,2));function y(){for(let v=0;v<n;v++)p(v);p(s===!1?n:0),g(),u()}function p(v){f=e.getPointAt(v/n,f);const _=o.normals[v],b=o.binormals[v];for(let T=0;T<=r;T++){const E=T/r*Math.PI*2,U=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+U*b.x,l.y=S*_.y+U*b.y,l.z=S*_.z+U*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let _=1;_<=r;_++){const b=(r+1)*(v-1)+(_-1),T=(r+1)*v+(_-1),E=(r+1)*v+_,U=(r+1)*(v-1)+_;x.push(b,T,U),x.push(T,E,U)}}function g(){for(let v=0;v<=n;v++)for(let _=0;_<=r;_++)c.x=v/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new po(new UA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class NA extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ux,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends NA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class IA extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class FA extends IA{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class oy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zg(){return(typeof performance>"u"?Date:performance).now()}class OA{constructor(e,n,i=0,r=1/0){this.ray=new Na(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Ad(e,this,i,n),i.sort(Jg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ad(e[r],this,i,n);return i.sort(Jg),i}}function Jg(t,e){return t.distance-e.distance}function Ad(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Ad(r[s],e,n,!0)}}class e0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);const t0={type:"change"},yf={type:"start"},n0={type:"end"},kl=new Na,i0=new Mn,zA=Math.cos(70*u1.DEG2RAD);class kA extends ls{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ie),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(t0),i.update(),s=r.NONE},this.update=function(){const P=new R,fe=new ss().setFromUnitVectors(e.up,new R(0,1,0)),Ce=fe.clone().invert(),Me=new R,se=new ss,D=new R,ue=2*Math.PI;return function(Be=null){const Fe=i.object.position;P.copy(Fe).sub(i.target),P.applyQuaternion(fe),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&Y(w(Be)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ze=i.minAzimuthAngle,tt=i.maxAzimuthAngle;isFinite(Ze)&&isFinite(tt)&&(Ze<-Math.PI?Ze+=ue:Ze>Math.PI&&(Ze-=ue),tt<-Math.PI?tt+=ue:tt>Math.PI&&(tt-=ue),Ze<=tt?a.theta=Math.max(Ze,Math.min(tt,a.theta)):a.theta=a.theta>(Ze+tt)/2?Math.max(Ze,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=H(a.radius):a.radius=H(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ce),Fe.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let yt=!1;if(i.zoomToCursor&&T){let Pt=null;if(i.object.isPerspectiveCamera){const at=P.length();Pt=H(at*c);const At=at-Pt;i.object.position.addScaledVector(_,At),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const at=new R(b.x,b.y,0);at.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),yt=!0;const At=new R(b.x,b.y,0);At.unproject(i.object),i.object.position.sub(At).add(at),i.object.updateMatrixWorld(),Pt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Pt).add(i.object.position):(kl.origin.copy(i.object.position),kl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(kl.direction))<zA?e.lookAt(i.target):(i0.setFromNormalAndCoplanarPoint(i.object.up,i.target),kl.intersectPlane(i0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),yt=!0);return c=1,T=!1,yt||Me.distanceToSquared(i.object.position)>o||8*(1-se.dot(i.object.quaternion))>o||D.distanceToSquared(i.target)>0?(i.dispatchEvent(t0),Me.copy(i.object.position),se.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ot),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",W),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",W),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ie),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new e0,l=new e0;let c=1;const f=new R,d=new de,h=new de,m=new de,x=new de,y=new de,p=new de,u=new de,g=new de,v=new de,_=new R,b=new de;let T=!1;const E=[],U={};let S=!1;function w(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function B(P){const fe=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*fe)}function Y(P){l.theta-=P}function ie(P){l.phi-=P}const N=function(){const P=new R;return function(Ce,Me){P.setFromMatrixColumn(Me,0),P.multiplyScalar(-Ce),f.add(P)}}(),V=function(){const P=new R;return function(Ce,Me){i.screenSpacePanning===!0?P.setFromMatrixColumn(Me,1):(P.setFromMatrixColumn(Me,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ce),f.add(P)}}(),q=function(){const P=new R;return function(Ce,Me){const se=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;P.copy(D).sub(i.target);let ue=P.length();ue*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ce*ue/se.clientHeight,i.object.matrix),V(2*Me*ue/se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ce*(i.object.right-i.object.left)/i.object.zoom/se.clientWidth,i.object.matrix),V(Me*(i.object.top-i.object.bottom)/i.object.zoom/se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(P,fe){if(!i.zoomToCursor)return;T=!0;const Ce=i.domElement.getBoundingClientRect(),Me=P-Ce.left,se=fe-Ce.top,D=Ce.width,ue=Ce.height;b.x=Me/D*2-1,b.y=-(se/ue)*2+1,_.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function H(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ee(P){d.set(P.clientX,P.clientY)}function re(P){G(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function Q(P){x.set(P.clientX,P.clientY)}function te(P){h.set(P.clientX,P.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const fe=i.domElement;Y(2*Math.PI*m.x/fe.clientHeight),ie(2*Math.PI*m.y/fe.clientHeight),d.copy(h),i.update()}function he(P){g.set(P.clientX,P.clientY),v.subVectors(g,u),v.y>0?J(B(v.y)):v.y<0&&I(B(v.y)),u.copy(g),i.update()}function Se(P){y.set(P.clientX,P.clientY),p.subVectors(y,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(y),i.update()}function we(P){G(P.clientX,P.clientY),P.deltaY<0?I(B(P.deltaY)):P.deltaY>0&&J(B(P.deltaY)),i.update()}function je(P){let fe=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),fe=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),fe=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),fe=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),fe=!0;break}fe&&(P.preventDefault(),i.update())}function Ye(P){if(E.length===1)d.set(P.pageX,P.pageY);else{const fe=ye(P),Ce=.5*(P.pageX+fe.x),Me=.5*(P.pageY+fe.y);d.set(Ce,Me)}}function ke(P){if(E.length===1)x.set(P.pageX,P.pageY);else{const fe=ye(P),Ce=.5*(P.pageX+fe.x),Me=.5*(P.pageY+fe.y);x.set(Ce,Me)}}function st(P){const fe=ye(P),Ce=P.pageX-fe.x,Me=P.pageY-fe.y,se=Math.sqrt(Ce*Ce+Me*Me);u.set(0,se)}function j(P){i.enableZoom&&st(P),i.enablePan&&ke(P)}function Xt(P){i.enableZoom&&st(P),i.enableRotate&&Ye(P)}function Ne(P){if(E.length==1)h.set(P.pageX,P.pageY);else{const Ce=ye(P),Me=.5*(P.pageX+Ce.x),se=.5*(P.pageY+Ce.y);h.set(Me,se)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const fe=i.domElement;Y(2*Math.PI*m.x/fe.clientHeight),ie(2*Math.PI*m.y/fe.clientHeight),d.copy(h)}function Ve(P){if(E.length===1)y.set(P.pageX,P.pageY);else{const fe=ye(P),Ce=.5*(P.pageX+fe.x),Me=.5*(P.pageY+fe.y);y.set(Ce,Me)}p.subVectors(y,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(y)}function be(P){const fe=ye(P),Ce=P.pageX-fe.x,Me=P.pageY-fe.y,se=Math.sqrt(Ce*Ce+Me*Me);g.set(0,se),v.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),J(v.y),u.copy(g);const D=(P.pageX+fe.x)*.5,ue=(P.pageY+fe.y)*.5;G(D,ue)}function vt(P){i.enableZoom&&be(P),i.enablePan&&Ve(P)}function We(P){i.enableZoom&&be(P),i.enableRotate&&Ne(P)}function C(P){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",W)),$e(P),P.pointerType==="touch"?qe(P):ae(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?ne(P):oe(P))}function W(P){Ge(P),E.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",W)),i.dispatchEvent(n0),s=r.NONE}function ae(P){let fe;switch(P.button){case 0:fe=i.mouseButtons.LEFT;break;case 1:fe=i.mouseButtons.MIDDLE;break;case 2:fe=i.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case ms.DOLLY:if(i.enableZoom===!1)return;re(P),s=r.DOLLY;break;case ms.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Q(P),s=r.PAN}else{if(i.enableRotate===!1)return;ee(P),s=r.ROTATE}break;case ms.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ee(P),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function oe(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;te(P);break;case r.DOLLY:if(i.enableZoom===!1)return;he(P);break;case r.PAN:if(i.enablePan===!1)return;Se(P);break}}function le(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(yf),we(Ae(P)),i.dispatchEvent(n0))}function Ae(P){const fe=P.deltaMode,Ce={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(fe){case 1:Ce.deltaY*=16;break;case 2:Ce.deltaY*=100;break}return P.ctrlKey&&!S&&(Ce.deltaY*=10),Ce}function pe(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Ie(P){i.enabled===!1||i.enablePan===!1||je(P)}function qe(P){switch(Pe(P),E.length){case 1:switch(i.touches.ONE){case gs.ROTATE:if(i.enableRotate===!1)return;Ye(P),s=r.TOUCH_ROTATE;break;case gs.PAN:if(i.enablePan===!1)return;ke(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(P),s=r.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function ne(P){switch(Pe(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ne(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ve(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;vt(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;We(P),i.update();break;default:s=r.NONE}}function ot(P){i.enabled!==!1&&P.preventDefault()}function $e(P){E.push(P.pointerId)}function Ge(P){delete U[P.pointerId];for(let fe=0;fe<E.length;fe++)if(E[fe]==P.pointerId){E.splice(fe,1);return}}function Pe(P){let fe=U[P.pointerId];fe===void 0&&(fe=new de,U[P.pointerId]=fe),fe.set(P.pageX,P.pageY)}function ye(P){const fe=P.pointerId===E[0]?E[1]:E[0];return U[fe]}i.domElement.addEventListener("contextmenu",ot),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",W),i.domElement.addEventListener("wheel",le,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}const ay={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BA=new Xx(-1,1,1,-1,0,1);class HA extends Qt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const VA=new HA;class Uh{constructor(e){this._mesh=new Dt(VA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jo extends _o{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wa.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Uh(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class r0 extends _o{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class GA extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class WA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new de);this._width=i.width,this._height=i.height,n=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ci}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jo(ay),this.copyPass.material.blending=Ai,this.clock=new oy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}r0!==void 0&&(o instanceof r0?i=!0:o instanceof GA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jA extends _o{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const XA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class mo extends _o{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(s,o,{type:Ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Wn(s,o,{type:Ci});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Wn(s,o,{type:Ci});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=XA;this.highPassUniforms=wa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new de(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=ay;this.copyUniforms=wa.clone(f.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Ar,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Rn,this.fsQuad=new Uh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new de(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=mo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}mo.BlurDirectionX=new de(1,0);mo.BlurDirectionY=new de(0,1);const YA={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class qA extends _o{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Wn(1,1,{minFilter:Nt,magFilter:Nt,type:Ci}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Jx,this.materialDepth.depthPacking=Dx,this.materialDepth.blending=Ai;const a=YA,l=wa.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=n.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=n.near,l.farClip.value=n.far,this.materialBokeh=new Wt({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new Uh(this.materialBokeh),this._oldClearColor=new Te}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,n){this.materialBokeh.uniforms.aspect.value=e/n,this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}class $A{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=wi;const s=new ty,o=new bh;o.position.z=1;const a={passThruTexture:{value:null}},l=d(m(),a),c=new Dt(new $c(2,2),l);s.add(c),this.setDataType=function(x){return r=x,this},this.addVariable=function(x,y,p){const u=this.createShaderMaterial(y),g={name:x,initialValueTexture:p,material:u,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Nt,magFilter:Nt};return this.variables.push(g),g},this.setVariableDependencies=function(x,y){x.dependencies=y},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const y=this.variables[x];y.renderTargets[0]=this.createRenderTarget(e,n,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(e,n,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);const p=y.material,u=p.uniforms;if(y.dependencies!==null)for(let g=0;g<y.dependencies.length;g++){const v=y.dependencies[g];if(v.name!==y.name){let _=!1;for(let b=0;b<this.variables.length;b++)if(v.name===this.variables[b].name){_=!0;break}if(!_)return"Variable dependency not found. Variable="+y.name+", dependency="+v.name}u[v.name]={value:null},p.fragmentShader=`
uniform sampler2D `+v.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0;for(let p=0,u=this.variables.length;p<u;p++){const g=this.variables[p];if(g.dependencies!==null){const v=g.material.uniforms;for(let _=0,b=g.dependencies.length;_<b;_++){const T=g.dependencies[_];v[T.name].value=T.renderTargets[x].texture}}this.doRenderTarget(g.material,g.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const x=this.variables;for(let y=0;y<x.length;y++){const p=x[y];p.initialValueTexture&&p.initialValueTexture.dispose();const u=p.renderTargets;for(let g=0;g<u.length;g++)u[g].dispose()}};function f(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=f;function d(x,y){y=y||{};const p=new Wt({name:"GPUComputationShader",uniforms:y,vertexShader:h(),fragmentShader:x});return f(p),p}this.createShaderMaterial=d,this.createRenderTarget=function(x,y,p,u,g,v){return x=x||e,y=y||n,p=p||Bn,u=u||Bn,g=g||Nt,v=v||Nt,new Wn(x,y,{wrapS:p,wrapT:u,minFilter:g,magFilter:v,format:Hn,type:r,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*n*4),y=new mA(x,e,n,Hn,wi);return y.needsUpdate=!0,y},this.renderTexture=function(x,y){a.passThruTexture.value=x,this.doRenderTarget(l,y),a.passThruTexture.value=null},this.doRenderTarget=function(x,y){const p=i.getRenderTarget(),u=i.xr.enabled,g=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,c.material=x,i.setRenderTarget(y),i.render(s,o),c.material=l,i.xr.enabled=u,i.shadowMap.autoUpdate=g,i.setRenderTarget(p)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function m(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const KA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

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
	`},sn={"Northern Lights":{primary:"#00ffaa",secondary:"#00aaff",accent:"#aa55ff",highlight:"#ffffff",background:["#0a0a1a","#051515","#0a1a1a"]},"Deep Ocean":{primary:"#0055ff",secondary:"#00ffff",accent:"#8800ff",highlight:"#ffffff",background:["#000515","#001025","#000520"]},"Solar Corona":{primary:"#ff8800",secondary:"#ffff00",accent:"#ff2200",highlight:"#ffffff",background:["#1a0a00","#150500","#1a0500"]},Synthwave:{primary:"#ff00aa",secondary:"#00ffff",accent:"#aa00ff",highlight:"#ffaaff",background:["#0a0015","#150020","#0a0520"]},"Monochrome Zen":{primary:"#ffffff",secondary:"#aabbcc",accent:"#8899aa",highlight:"#ffffff",background:["#0a0a0f","#0f0f15","#0a0a12"]},"Ember & Ash":{primary:"#ff3300",secondary:"#ff8800",accent:"#ffaa00",highlight:"#ffffff",background:["#0a0505","#150a05","#0a0805"]}},s0={"Cosmic Dance":{description:"Ethereal deep ocean with swirling rings",palette:"Deep Ocean",background:"nebula",timeScale:.8,bloom:1.8,structures:[{type:"rings",scale:1.2,position:[0,0,0],rotationSpeed:.3},{type:"icosahedron",scale:.4,position:[0,0,0],rotationSpeed:.2}],ribbons:[{type:"toroidal",thickness:.06}],waveGrid:!0,waveAmplitude:1.5},"Solar Flare":{description:"Intense fiery energy burst",palette:"Solar Corona",background:"gradient",timeScale:1.3,bloom:2.2,structures:[{type:"torus",scale:.8,position:[0,0,0],rotationSpeed:.5}],ribbons:[{type:"spiral",thickness:.1},{type:"helix",thickness:.05}],waveGrid:!0,waveAmplitude:2},"Digital Dreams":{description:"Synthwave aesthetic with geometric precision",palette:"Synthwave",background:"nebula",timeScale:1,bloom:2,structures:[{type:"helix",scale:1.5,position:[0,0,0],rotationSpeed:.15},{type:"mobius",scale:.6,position:[2,0,0],rotationSpeed:.4}],ribbons:[{type:"lissajous",thickness:.08}],waveGrid:!0,waveAmplitude:.8},"Zen Garden":{description:"Minimal and meditative monochrome",palette:"Monochrome Zen",background:"gradient",timeScale:.5,bloom:1.2,structures:[{type:"icosahedron",scale:1,position:[0,0,0],rotationSpeed:.1}],ribbons:[],waveGrid:!0,waveAmplitude:.5},"Aurora Borealis":{description:"Northern lights dancing in the sky",palette:"Northern Lights",background:"nebula",timeScale:.7,bloom:1.5,structures:[{type:"rings",scale:1.8,position:[0,0,0],rotationSpeed:.08}],ribbons:[{type:"helix",thickness:.12},{type:"toroidal",thickness:.04}],waveGrid:!0,waveAmplitude:1.2},"Ember Storm":{description:"Fiery particles in chaotic motion",palette:"Ember & Ash",background:"gradient",timeScale:1.5,bloom:1.8,structures:[{type:"torus",scale:.6,position:[0,1,0],rotationSpeed:.8},{type:"torus",scale:.4,position:[0,-1,0],rotationSpeed:-.6}],ribbons:[{type:"spiral",thickness:.15}],waveGrid:!1,waveAmplitude:1},Murmuration:{description:"Flocking behavior - birds in synchronized flight",palette:"Northern Lights",background:"gradient",timeScale:1,bloom:1.4,simulationMode:"boids",boids:{separation:2,alignment:1.5,cohesion:1.2,neighborRadius:2.5,maxSpeed:5},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:1},Swarm:{description:"Dense flocking with high cohesion",palette:"Synthwave",background:"nebula",timeScale:.8,bloom:2,simulationMode:"boids",boids:{separation:.8,alignment:.8,cohesion:3,neighborRadius:3,maxSpeed:4},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:.5},"Solar System":{description:"Gravitational n-body simulation",palette:"Solar Corona",background:"gradient",timeScale:.6,bloom:2.2,simulationMode:"nbody",nbody:{gravConstant:.8,softening:.5,damping:.998},structures:[{type:"icosahedron",scale:1.5,position:[0,0,0],rotationSpeed:.1,mass:5},{type:"torus",scale:.8,position:[4,0,0],rotationSpeed:.3,mass:2},{type:"rings",scale:.6,position:[-3,2,0],rotationSpeed:.2,mass:1.5}],ribbons:[],waveGrid:!1,waveAmplitude:.8},Galaxy:{description:"Massive central body with orbiting particles",palette:"Deep Ocean",background:"nebula",timeScale:.5,bloom:1.8,simulationMode:"nbody",nbody:{gravConstant:1.2,softening:.8,damping:.999},structures:[{type:"icosahedron",scale:2,position:[0,0,0],rotationSpeed:.05,mass:10}],ribbons:[],waveGrid:!1,waveAmplitude:1}},QA={default:{position:[0,2,8],target:[0,0,0],fov:75},topDown:{position:[0,15,.1],target:[0,0,0],fov:60},side:{position:[12,0,0],target:[0,0,0],fov:70},closeUp:{position:[0,.5,3],target:[0,0,0],fov:50},wide:{position:[0,5,18],target:[0,0,0],fov:90},cinematic:{position:[6,4,6],target:[0,-1,0],fov:65},low:{position:[4,-2,4],target:[0,1,0],fov:80}},_f={" ":{action:"triggerPulse",description:"Trigger shockwave pulse"},r:{action:"randomize",description:"Randomize scene"},c:{action:"clearScene",description:"Clear all objects"},h:{action:"toggleUI",description:"Hide/show control panel"},f:{action:"toggleFullscreen",description:"Toggle fullscreen"},p:{action:"togglePause",description:"Pause/resume animation"},m:{action:"toggleMouseFollow",description:"Toggle mouse attraction"},g:{action:"toggleWaveGrid",description:"Toggle wave grid"},1:{action:"palette1",description:"Northern Lights palette"},2:{action:"palette2",description:"Deep Ocean palette"},3:{action:"palette3",description:"Solar Corona palette"},4:{action:"palette4",description:"Synthwave palette"},5:{action:"palette5",description:"Monochrome Zen palette"},6:{action:"palette6",description:"Ember & Ash palette"},"=":{action:"qualityUp",description:"Increase quality"},"-":{action:"qualityDown",description:"Decrease quality"},Escape:{action:"resetCamera",description:"Reset camera position"},"?":{action:"showHelp",description:"Show keyboard shortcuts"},"Shift+1":{action:"cameraTopDown",description:"Camera: Top-down view"},"Shift+2":{action:"cameraSide",description:"Camera: Side view"},"Shift+3":{action:"cameraCloseUp",description:"Camera: Close-up view"},"Shift+4":{action:"cameraWide",description:"Camera: Wide view"},"Shift+5":{action:"cameraCinematic",description:"Camera: Cinematic view"},"Shift+6":{action:"cameraLow",description:"Camera: Low angle view"}},ZA={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1.2}},vertexShader:`
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
  `},JA={uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.05}},vertexShader:`
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
  `},e2={uniforms:{tDiffuse:{value:null},uIntensity:{value:.003},uTime:{value:0}},vertexShader:`
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
  `},t2={"Northern Lights":{strength:1.5,radius:.6,threshold:.3},"Deep Ocean":{strength:1.8,radius:.5,threshold:.2},"Solar Corona":{strength:2.2,radius:.7,threshold:.1},Synthwave:{strength:2,radius:.5,threshold:.2},"Monochrome Zen":{strength:1.2,radius:.4,threshold:.4},"Ember & Ash":{strength:1.8,radius:.6,threshold:.2}};class n2{constructor(e,n,i=256){this.renderer=e,this.scene=n,this.SIZE=i,this.count=this.SIZE*this.SIZE,this.initComputeRenderer(),this.initParticles()}initComputeRenderer(){this.gpuCompute=new $A(this.SIZE,this.SIZE,this.renderer),this.renderer.capabilities.isWebGL2||console.warn("WebGL2 not supported, GPGPU may not work");const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",this.getPositionShader(),e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",this.getVelocityShader(),n),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.uTime={value:0},this.positionUniforms.uDelta={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uDelta={value:0},this.velocityUniforms.uNoiseScale={value:.5},this.velocityUniforms.uNoiseSpeed={value:.2},this.velocityUniforms.uSimulationMode={value:0},this.velocityUniforms.uFlowDamping={value:.98},this.velocityUniforms.uFlowMaxSpeed={value:8},this.velocityUniforms.uBoidsSeparation={value:1.5},this.velocityUniforms.uBoidsAlignment={value:1},this.velocityUniforms.uBoidsCohesion={value:1},this.velocityUniforms.uBoidsNeighborRadius={value:2},this.velocityUniforms.uBoidsMaxSpeed={value:4},this.velocityUniforms.uNbodyGravConstant={value:.5},this.velocityUniforms.uNbodySoftening={value:.5},this.velocityUniforms.uNbodyDamping={value:.999},this.velocityUniforms.uStructureMasses={value:new Array(8).fill(1)},this.velocityUniforms.uAttractorPositions={value:Array.from({length:16},()=>new R(0,0,0))},this.velocityUniforms.uAttractorStrengths={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorTypes={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorRadii={value:new Array(16).fill(3)},this.velocityUniforms.uAttractorCount={value:0},this.velocityUniforms.uGravityDir={value:new R(0,-1,0)},this.velocityUniforms.uGravityStrength={value:0},this.velocityUniforms.uShockwaveOrigins={value:Array.from({length:5},()=>new R(0,0,0))},this.velocityUniforms.uShockwaveRadii={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveStrengths={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveThicknesses={value:new Array(5).fill(2)},this.velocityUniforms.uShockwaveCount={value:0},this.velocityUniforms.uStructurePositions={value:Array.from({length:8},()=>new R(0,0,0))},this.velocityUniforms.uStructureRadii={value:new Array(8).fill(0)},this.velocityUniforms.uStructureCount={value:0};const i=this.gpuCompute.init();i!==null&&console.error("GPUComputationRenderer error:",i)}fillPositionTexture(e){const n=e.image.data,i=5;for(let r=0;r<n.length;r+=4){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=Math.cbrt(Math.random())*i;n[r+0]=a*Math.sin(o)*Math.cos(s),n[r+1]=a*Math.sin(o)*Math.sin(s),n[r+2]=a*Math.cos(o),n[r+3]=Math.random()*5+2}}fillVelocityTexture(e){const n=e.image.data;for(let i=0;i<n.length;i+=4)n[i+0]=(Math.random()-.5)*.5,n[i+1]=(Math.random()-.5)*.5,n[i+2]=(Math.random()-.5)*.5,n[i+3]=1}getPositionShader(){return`
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
    `}initParticles(){const e=new Qt,n=new Float32Array(this.count*3),i=new Float32Array(this.count*2);for(let s=0;s<this.count;s++){const o=s%this.SIZE/this.SIZE,a=Math.floor(s/this.SIZE)/this.SIZE;i[s*2+0]=o,i[s*2+1]=a,n[s*3+0]=0,n[s*3+1]=0,n[s*3+2]=0}e.setAttribute("position",new Fn(n,3)),e.setAttribute("reference",new Fn(i,2));const r=new Wt({uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uTime:{value:0},uColor1:{value:new Te(65450)},uColor2:{value:new Te(43775)},uColor3:{value:new Te(11163135)},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:4},uColorMode:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:Ar,depthWrite:!1});this.particles=new iy(e,r),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,n){const i=Math.min(e,.05);this.positionUniforms.uTime.value=n,this.positionUniforms.uDelta.value=i,this.velocityUniforms.uTime.value=n,this.velocityUniforms.uDelta.value=i,this.gpuCompute.compute(),this.particles.material.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.particles.material.uniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture,this.particles.material.uniforms.uTime.value=n}setAttractors(e){const n=Math.min(e.length,16);this.velocityUniforms.uAttractorCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uAttractorPositions.value[i].copy(r.position),this.velocityUniforms.uAttractorStrengths.value[i]=r.strength;const s={point:0,vortex:1,orbit:2,repulsor:3};this.velocityUniforms.uAttractorTypes.value[i]=s[r.type]||0,this.velocityUniforms.uAttractorRadii.value[i]=r.radius||3}for(let i=n;i<16;i++)this.velocityUniforms.uAttractorStrengths.value[i]=0}setGravity(e,n){this.velocityUniforms.uGravityDir.value.copy(e),this.velocityUniforms.uGravityStrength.value=n}setShockwaves(e){const n=Math.min(e.length,5);this.velocityUniforms.uShockwaveCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uShockwaveOrigins.value[i].copy(r.origin),this.velocityUniforms.uShockwaveRadii.value[i]=r.radius,this.velocityUniforms.uShockwaveStrengths.value[i]=r.strength,this.velocityUniforms.uShockwaveThicknesses.value[i]=r.thickness}for(let i=n;i<5;i++)this.velocityUniforms.uShockwaveStrengths.value[i]=0}setStructures(e){const n=Math.min(e.length,8);this.velocityUniforms.uStructureCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uStructurePositions.value[i].copy(r.position),this.velocityUniforms.uStructureRadii.value[i]=r.radius}for(let i=n;i<8;i++)this.velocityUniforms.uStructureRadii.value[i]=0}setColors(e,n,i){this.particles.material.uniforms.uColor1.value.set(e),this.particles.material.uniforms.uColor2.value.set(n),this.particles.material.uniforms.uColor3.value.set(i)}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}class o0{constructor(e,n,i="point"){this.position=e.clone(),this.strength=n,this.type=i,this.active=!0,this.radius=3,this.vortexAxis=new R(0,1,0)}setPosition(e){this.position.copy(e)}toUniformData(){const e={point:0,vortex:1,orbit:2,repulsor:3};return{position:this.position,strength:this.active?this.strength:0,type:e[this.type]||0,radius:this.radius}}}class i2{constructor(e=5){this.shockwaves=[],this.maxShockwaves=e}trigger(e,n=10,i=2,r=8){this.shockwaves.length>=this.maxShockwaves&&this.shockwaves.shift(),this.shockwaves.push({origin:e.clone(),radius:.1,strength:n,thickness:i,expansionSpeed:r,decay:.92,active:!0})}update(e){for(let n=this.shockwaves.length-1;n>=0;n--){const i=this.shockwaves[n];i.radius+=i.expansionSpeed*e,i.strength*=i.decay,(i.radius>25||i.strength<.05)&&this.shockwaves.splice(n,1)}}getActiveShockwave(){if(this.shockwaves.length===0)return{origin:new R(0,0,0),radius:0,strength:0,thickness:1};let e=this.shockwaves[0];for(const n of this.shockwaves)n.strength>e.strength&&(e=n);return e}getAllShockwaves(){return this.shockwaves}hasActive(){return this.shockwaves.length>0}clear(){this.shockwaves=[]}}class r2{constructor(e,n={}){this.scene=e,this.config={size:128,gridScale:20,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:"#00ffaa",color2:"#00aaff",color3:"#aa55ff",opacity:.6,particleSize:2,yOffset:-5,...n},this.time=0,this.visible=!0,this.createGrid(),this.scene.add(this.mesh)}createGrid(){const e=this.config.size,n=this.config.gridScale,i=new Qt,r=new Float32Array(e*e*3),s=new Float32Array(e*e*2);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=a*e+l;r[c*3+0]=(a/e-.5)*n,r[c*3+1]=0,r[c*3+2]=(l/e-.5)*n,s[c*2+0]=a/e,s[c*2+1]=l/e}i.setAttribute("position",new Fn(r,3)),i.setAttribute("uv",new Fn(s,2));const o=new Wt({uniforms:{uTime:{value:0},uWaveAmplitude:{value:this.config.waveAmplitude},uWaveFrequency:{value:this.config.waveFrequency},uWaveSpeed:{value:this.config.waveSpeed},uColor1:{value:new Te(this.config.color1)},uColor2:{value:new Te(this.config.color2)},uColor3:{value:new Te(this.config.color3)},uOpacity:{value:this.config.opacity},uSize:{value:this.config.particleSize},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uYOffset:{value:this.config.yOffset}},vertexShader:`
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
      `,transparent:!0,blending:Ar,depthWrite:!1});this.mesh=new iy(i,o),this.mesh.frustumCulled=!1}update(e,n=1){this.time+=e*n,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uTime.value=this.time)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e)}setColors(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uColor1.value.set(e),this.mesh.material.uniforms.uColor2.value.set(n),this.mesh.material.uniforms.uColor3.value.set(i))}setWaveParams(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uWaveAmplitude.value=e,this.mesh.material.uniforms.uWaveFrequency.value=n,this.mesh.material.uniforms.uWaveSpeed.value=i)}setOpacity(e){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uOpacity.value=e)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh))}}class s2{constructor(e){this.frameHistory=[],this.historyLength=60,this.currentQuality="high",this.onQualityChange=e,this.cooldown=0,this.enabled=!0,this.lastFps=60,this.presets={ultra:{particleSize:512,waveSize:192,bloom:!0,bloomStrength:2,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:55},high:{particleSize:384,waveSize:128,bloom:!0,bloomStrength:1.5,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:50},medium:{particleSize:256,waveSize:96,bloom:!0,bloomStrength:1.2,chromatic:!1,filmGrain:!1,fxaa:!0,targetFps:40},low:{particleSize:192,waveSize:64,bloom:!0,bloomStrength:1,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:30},potato:{particleSize:128,waveSize:48,bloom:!1,bloomStrength:0,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:25}},this.qualityLevels=["ultra","high","medium","low","potato"]}update(e){if(!this.enabled)return null;const n=e>0?Math.min(1/e,120):60;if(this.frameHistory.push(n),this.frameHistory.length>this.historyLength&&this.frameHistory.shift(),this.cooldown-=e,this.frameHistory.length===this.historyLength&&this.cooldown<=0){const i=this.frameHistory.reduce((s,o)=>s+o,0)/this.historyLength;this.lastFps=i;const r=this.presets[this.currentQuality];if(i<r.targetFps-10&&this.currentQuality!=="potato")return this.decreaseQuality();if(i>58&&this.currentQuality!=="ultra")return this.increaseQuality()}return null}decreaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e<this.qualityLevels.length-1?(this.currentQuality=this.qualityLevels[e+1],this.cooldown=3,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"decrease"}):null}increaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e>0?(this.currentQuality=this.qualityLevels[e-1],this.cooldown=5,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"increase"}):null}setQuality(e){return this.qualityLevels.includes(e)?(this.currentQuality=e,this.frameHistory=[],this.cooldown=2,this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),this.presets[this.currentQuality]):null}setEnabled(e){this.enabled=e}getCurrentPreset(){return this.presets[this.currentQuality]}getStats(){return{quality:this.currentQuality,fps:Math.round(this.lastFps),particleCount:Math.pow(this.presets[this.currentQuality].particleSize,2),cooldown:Math.max(0,this.cooldown).toFixed(1)}}}class Sf{constructor(e,n){this.scene=e,this.config={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:"#00ffaa",...n},this.group=new Ys,this.group.position.copy(this.config.position),this.time=Math.random()*100,this.energyOffset=Math.random()*Math.PI*2,this.createStructure(),this.scene.add(this.group)}createStructure(){for(;this.group.children.length;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}switch(this.config.type){case"icosahedron":this.createNestedIcosahedron();break;case"torus":this.createAnimatedTorus();break;case"rings":this.createConcentricRings();break;case"helix":this.createDNAHelix();break;case"mobius":this.createMobiusStrip();break;default:this.createNestedIcosahedron()}}createNestedIcosahedron(){const e=new Te(this.config.color),n=new Lh(1.5*this.config.scale,0),i=new zl(n);this.createGlowingEdges(i,e,1.5);const r=new Dh(.8*this.config.scale,this.config.complexity),s=new zl(r),o=this.createMaterial(e),a=new Dt(r,o);a.userData.isInner=!0,this.group.add(a),this.createGlowingEdges(s,e.clone().multiplyScalar(1.5),.8);const l=new Ta(.3*this.config.scale,16,16),c=new Rn({color:e,transparent:!0,opacity:.5}),f=new Dt(l,c);f.userData.isCore=!0,this.group.add(f)}createAnimatedTorus(){const e=new Te(this.config.color),n=new sa(1*this.config.scale,.3*this.config.scale,16,50),i=this.createMaterial(e),r=new Dt(n,i);this.group.add(r);for(let o=0;o<3;o++){const a=new sa(.5*this.config.scale,.05*this.config.scale,8,30),l=new Rn({color:e,transparent:!0,opacity:.8}),c=new Dt(a,l);c.rotation.x=o/3*Math.PI,c.userData.rotationOffset=o,this.group.add(c)}const s=new zl(n);this.createGlowingEdges(s,e,1)}createConcentricRings(){const e=new Te(this.config.color);for(let s=0;s<4;s++){const o=(.5+s*.4)*this.config.scale,a=new sa(o,.03*this.config.scale,8,64),l=new Rn({color:e,transparent:!0,opacity:.9-s*.15}),c=new Dt(a,l);c.userData.ringIndex=s,c.rotation.x=Math.PI/2+(s%2===0?0:Math.PI/4),c.rotation.y=s/4*Math.PI/2,this.group.add(c)}const n=new Ta(.2*this.config.scale,16,16),i=new Rn({color:e,transparent:!0,opacity:.8}),r=new Dt(n,i);r.userData.isCore=!0,this.group.add(r)}createDNAHelix(){const e=new Te(this.config.color),n=[],i=[],r=[],s=4*this.config.scale,o=.5*this.config.scale,a=2,l=100;for(let p=0;p<=l;p++){const u=p/l,g=(u-.5)*s,v=u*a*Math.PI*2;n.push(new R(Math.cos(v)*o,g,Math.sin(v)*o)),i.push(new R(Math.cos(v+Math.PI)*o,g,Math.sin(v+Math.PI)*o)),p%10===0&&p>0&&p<l&&r.push({start:n[n.length-1].clone(),end:i[i.length-1].clone()})}const c=new Rc(n),f=new Rc(i),d=new po(c,l,.05*this.config.scale,8,!1),h=new po(f,l,.05*this.config.scale,8,!1),m=new Rn({color:e,transparent:!0,opacity:.9}),x=new Dt(d,m),y=new Dt(h,m.clone());this.group.add(x),this.group.add(y),r.forEach((p,u)=>{const g=new Ph(.02*this.config.scale,.02*this.config.scale,p.start.distanceTo(p.end),8),v=new Rn({color:e.clone().multiplyScalar(.7),transparent:!0,opacity:.7}),_=new Dt(g,v),b=p.start.clone().add(p.end).multiplyScalar(.5);_.position.copy(b),_.lookAt(p.end),_.rotateX(Math.PI/2),_.userData.rungIndex=u,this.group.add(_)})}createMobiusStrip(){const e=new Te(this.config.color),n=new Qt,i=[],r=[],s=[],o=[],a=1*this.config.scale,l=.4*this.config.scale,c=100,f=10;for(let x=0;x<=c;x++){const y=x/c*Math.PI*2;for(let p=0;p<=f;p++){const u=(p/f-.5)*l,g=(a+u*Math.cos(y/2))*Math.cos(y),v=(a+u*Math.cos(y/2))*Math.sin(y),_=u*Math.sin(y/2);i.push(g,v,_);const b=Math.cos(y)*Math.cos(y/2),T=Math.sin(y)*Math.cos(y/2),E=Math.sin(y/2);r.push(b,T,E),s.push(x/c,p/f)}}for(let x=0;x<c;x++)for(let y=0;y<f;y++){const p=x*(f+1)+y,u=p+f+1,g=p+1,v=u+1;o.push(p,u,g),o.push(u,v,g)}n.setAttribute("position",new dt(i,3)),n.setAttribute("normal",new dt(r,3)),n.setAttribute("uv",new dt(s,2)),n.setIndex(o);const d=this.createMaterial(e);d.side=ei;const h=new Dt(n,d);this.group.add(h);const m=new zl(n,30);this.createGlowingEdges(m,e,1)}createGlowingEdges(e,n,i){e.attributes.position.array;for(let r=0;r<3;r++){const s=new ny({color:n,transparent:!0,opacity:.6-r*.15,linewidth:1,blending:Ar}),o=e.clone(),a=new vA(o,s);a.scale.setScalar(1+r*.02),a.userData.edgeLayer=r,this.group.add(a)}}createMaterial(e){switch(this.config.materialStyle){case"glass":return new Qg({color:e,transparent:!0,opacity:.3,roughness:.1,metalness:.1,transmission:.9,thickness:.5});case"holographic":return new Qg({color:e,transparent:!0,opacity:.4,roughness:.2,metalness:.8,iridescence:1,iridescenceIOR:1.5,sheen:1,sheenColor:e});case"solid":return new Rn({color:e,transparent:!0,opacity:.7});default:return new Rn({color:e,transparent:!0,opacity:.5})}}getBoundingRadius(){const e=this.config.scale||1,n=1+(this.config.pulseIntensity||.1),r={icosahedron:1.5,torus:1.3,rings:2.2,helix:2.5,mobius:1.2}[this.config.type]||1.5;return e*r*n}getPosition(){return this.group.position}update(e,n){this.time+=e*n,this.group.rotation.x+=this.config.rotationSpeed.x*e*n,this.group.rotation.y+=this.config.rotationSpeed.y*e*n,this.group.rotation.z+=this.config.rotationSpeed.z*e*n;const i=1+Math.sin(this.time*2)*this.config.pulseIntensity;this.group.scale.setScalar(i),this.group.children.forEach((r,s)=>{if(r.userData.isInner&&(r.rotation.y-=this.config.rotationSpeed.y*e*n*.5),r.userData.isCore){const o=1+Math.sin(this.time*4)*.2;r.scale.setScalar(o)}if(r.userData.ringIndex!==void 0){const o=r.userData.ringIndex*.5;r.rotation.z+=(.5+o*.2)*e*n}if(r.userData.rotationOffset!==void 0&&(r.rotation.x+=(1+r.userData.rotationOffset*.3)*e*n),r.userData.edgeLayer!==void 0){const o=Math.sin(this.time*3+this.energyOffset+r.userData.edgeLayer)*.3+.7;r.material.opacity=(.6-r.userData.edgeLayer*.15)*o}if(r.userData.rungIndex!==void 0){const o=Math.sin(this.time*5+r.userData.rungIndex*.5)*.3+.7;r.material.opacity=.7*o}})}setColor(e){this.config.color=e;const n=new Te(e);this.group.children.forEach(i=>{i.material&&(i.material.color&&i.material.color.set(n),i.material.sheenColor&&i.material.sheenColor.set(n))})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class Mf{constructor(e,n){this.scene=e,this.config={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.1,glowIntensity:1,color:"#00ffaa",trailFade:2,...n},this.time=Math.random()*100,this.group=new Ys,this.group.position.copy(this.config.position),this.createRibbon(),this.scene.add(this.group)}createRibbon(){for(;this.group.children.length;){const o=this.group.children[0];this.group.remove(o),o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}const e=this.generateCurvePoints();this.curve=new Rc(e);const n=new po(this.curve,200,this.config.thickness,8,!1),i=new Te(this.config.color),r=new Wt({uniforms:{color:{value:i},time:{value:0},glowIntensity:{value:this.config.glowIntensity}},vertexShader:`
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
      `,transparent:!0,blending:Ar,side:ei,depthWrite:!1}),s=new Dt(n,r);s.userData.isMainRibbon=!0,this.group.add(s);for(let o=0;o<2;o++){const a=new po(this.curve,100,this.config.thickness*(2+o),8,!1),l=new Rn({color:i,transparent:!0,opacity:.1-o*.03,blending:Ar,side:ei,depthWrite:!1}),c=new Dt(a,l);c.userData.glowLayer=o,this.group.add(c)}}generateCurvePoints(){const e=[];switch(this.config.type){case"helix":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*6,o=2+Math.sin(r*Math.PI*2)*.5;e.push(new R(Math.cos(s)*o,(r-.5)*6,Math.sin(s)*o))}break;case"lissajous":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2;e.push(new R(Math.sin(3*r)*2,Math.sin(2*r)*2,Math.sin(5*r)*2))}break;case"toroidal":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2,s=3,o=2,a=.5*(2+Math.cos(o*r));e.push(new R(a*Math.cos(s*r)*1.5,a*Math.sin(s*r)*1.5,-Math.sin(o*r)*1.5))}break;case"spiral":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*8,o=.5+r*2;e.push(new R(Math.cos(s)*o,(r-.5)*4,Math.sin(s)*o))}break;default:for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*4;e.push(new R(Math.cos(s)*2,(r-.5)*4,Math.sin(s)*2))}}return e}update(e,n){this.time+=e*n*this.config.animationSpeed,this.group.children.forEach(i=>{if(i.userData.isMainRibbon&&i.material.uniforms&&(i.material.uniforms.time.value=this.time),i.userData.glowLayer!==void 0){const r=Math.sin(this.time*2+i.userData.glowLayer)*.02+.08;i.material.opacity=r}}),this.group.rotation.y+=.1*e*n}setColor(e){this.config.color=e;const n=new Te(e);this.group.children.forEach(i=>{i.material.uniforms&&i.material.uniforms.color?i.material.uniforms.color.value=n:i.material.color&&i.material.color.set(n)})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class o2{constructor(e){this.scene=e,this.mesh=null,this.style="gradient",this.colors=["#0a0a1a","#051515","#0a1a1a"],this.createBackground()}createBackground(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());const e=new Ta(100,32,32);let n;switch(this.style){case"solid":n=new Rn({color:0,side:tn});break;case"gradient":n=new Wt({uniforms:{color1:{value:new Te(this.colors[0])},color2:{value:new Te(this.colors[1])},color3:{value:new Te(this.colors[2])},time:{value:0}},vertexShader:`
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
          `,side:tn});break;case"nebula":n=new Wt({uniforms:{color1:{value:new Te(this.colors[0])},color2:{value:new Te(this.colors[1])},color3:{value:new Te(this.colors[2]||this.colors[1])},time:{value:0}},vertexShader:`
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
          `,side:tn});break;default:n=new Rn({color:328976,side:tn})}this.mesh=new Dt(e,n),this.scene.add(this.mesh)}setStyle(e){this.style=e,this.createBackground()}setColors(e){this.colors=e,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.color1&&(this.mesh.material.uniforms.color1.value=new Te(e[0])),this.mesh.material.uniforms.color2&&(this.mesh.material.uniforms.color2.value=new Te(e[1])),this.mesh.material.uniforms.color3&&(this.mesh.material.uniforms.color3.value=new Te(e[2])))}update(e){this.mesh&&this.mesh.material.uniforms&&this.mesh.material.uniforms.time&&(this.mesh.material.uniforms.time.value=e)}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}}class a2{constructor(){this.audioContext=null,this.analyser=null,this.dataArray=null,this.source=null,this.active=!1,this.smoothing=.8}async connectMicrophone(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});return this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(e),this.source.connect(this.analyser),this.active=!0,{success:!0}}catch(e){return console.error("Failed to access microphone:",e),{success:!1,error:e.message}}}connectAudioElement(e){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaElementSource(e),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.active=!0}getFrequencyData(){return!this.active||!this.analyser?{bass:0,mid:0,high:0,overall:0}:(this.analyser.getByteFrequencyData(this.dataArray),{bass:this.getRange(0,10)/255,mid:this.getRange(10,50)/255,high:this.getRange(50,128)/255,overall:this.getOverallVolume()/255})}getRange(e,n){let i=0;for(let r=e;r<n&&r<this.dataArray.length;r++)i+=this.dataArray[r];return i/(n-e)}getOverallVolume(){let e=0;for(let n=0;n<this.dataArray.length;n++)e+=this.dataArray[n];return e/this.dataArray.length}detectBeat(e=.7){return this.getRange(0,10)/255>e}disconnect(){this.source&&this.source.disconnect(),this.audioContext&&this.audioContext.close(),this.active=!1}setSmoothing(e){this.smoothing=e,this.analyser&&(this.analyser.smoothingTimeConstant=e)}}function l2(){var rp;const t=z.useRef(null),e=z.useRef(null),n=z.useRef(null),i=z.useRef(null),r=z.useRef(null),s=z.useRef(null),o=z.useRef(new oy),a=z.useRef(null),l=z.useRef(null),c=z.useRef(null),f=z.useRef([]),d=z.useRef([]),h=z.useRef(null),m=z.useRef(null),x=z.useRef(null),y=z.useRef(null),p=z.useRef(null),u=z.useRef(null),g=z.useRef(null),v=z.useRef({active:!1,startPos:new R,endPos:new R,startTarget:new R,endTarget:new R,startFov:75,endFov:75,progress:0,duration:1.5}),_=z.useRef({intensity:0,decay:.9}),b=z.useRef(null),T=z.useRef(null),E=z.useRef(new OA),U=z.useRef(new de),S=z.useRef(0),w=z.useRef(null),B=z.useRef(!1),Y=z.useRef(new R),ie=z.useRef(null),N=z.useRef(0),V=z.useRef(null),q=z.useRef(null),J=z.useRef(null),I=z.useRef(!1),G=z.useRef(0),H=z.useRef(null),ee=z.useRef([]),re=z.useRef(!0),Q=z.useRef(!0),te=z.useRef(4),[he,Se]=z.useState(!0),[we,je]=z.useState(!1),[Ye,ke]=z.useState(!1),[st,j]=z.useState(!1),[Xt,Ne]=z.useState(!1),[Ve,be]=z.useState([]),vt=z.useRef(!1),[We,C]=z.useState(1),[M,W]=z.useState(1),[ae,oe]=z.useState("down"),[le,Ae]=z.useState(.5),[pe,_e]=z.useState(1.5),[Ie,qe]=z.useState("gradient"),[ne,ot]=z.useState("Northern Lights"),[$e,Ge]=z.useState(!0),[Pe,ye]=z.useState(.5),[P,fe]=z.useState(!1),[Ce,Me]=z.useState(!1),[se,D]=z.useState(!0),[ue,ve]=z.useState(.003),[Be,Fe]=z.useState(!0),[Ze,tt]=z.useState(!0),[yt,Pt]=z.useState(4),[at,At]=z.useState(!0),[xn,So]=z.useState(1),[us,fs]=z.useState(1),[Ri,Qi]=z.useState("high"),[oi,Mo]=z.useState(!0),[Eo,Zc]=z.useState(60),[Jc,A]=z.useState(65536),[O,$]=z.useState(null),[K,X]=z.useState(!1),[xe,Le]=z.useState(!1),[Oe,He]=z.useState(!1),[nt,Xe]=z.useState("none"),[Ke,Lt]=z.useState(0),[yn,Ht]=z.useState(0),[ai,Et]=z.useState(0),[Je,wo]=z.useState(.7),[ht,yi]=z.useState(!1),[Fa,ds]=z.useState(2),[To,rn]=z.useState(1.5),[Pi,Oa]=z.useState(8),[bn,za]=z.useState(.98),[eu,tu]=z.useState(.5),[ly,u2]=z.useState(.2),[f2,d2]=z.useState(8),[h2,p2]=z.useState(.5),[m2,g2]=z.useState(.5),[v2,x2]=z.useState(2.5),[cy,y2]=z.useState(.8),[uy,_2]=z.useState(0),[fy,S2]=z.useState(.03),[dy,M2]=z.useState(1.2),[E2,w2]=z.useState([]),[bo,Zi]=z.useState([]),[Nh,Lr]=z.useState([]),[nu,iu]=z.useState([]),[ru,hy]=z.useState("speed"),[Ji,su]=z.useState("flow"),[Ih,Fh]=z.useState(1.5),[Oh,zh]=z.useState(1),[kh,Bh]=z.useState(1),[Hh,Vh]=z.useState(2),[Gh,Wh]=z.useState(4),[jh,Xh]=z.useState(.5),[Yh,qh]=z.useState(.5),[$h,Kh]=z.useState(.999),[ka,py]=z.useState(!1),[Qh,my]=z.useState(8),[Zh,gy]=z.useState(.025),[Dr,vy]=z.useState({global:!0,emitters:!0,structures:!0,ribbons:!1,camera:!1,audio:!1,media:!1}),[Jh,xy]=z.useState({});z.useEffect(()=>{const F="ontouchstart"in window||navigator.maxTouchPoints>0;Le(F)},[]),z.useEffect(()=>{if(!t.current)return;const F=new ty;e.current=F;const k=new Jn(60,window.innerWidth/window.innerHeight,.1,1e3);k.position.set(0,2,8),r.current=k;const Z=new ey({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.toneMapping=Mx,Z.toneMappingExposure=1.2,t.current.appendChild(Z.domElement),n.current=Z;const ge=new kA(k,Z.domElement);ge.enableDamping=!0,ge.dampingFactor=.05,ge.autoRotate=!0,ge.autoRotateSpeed=.5,ge.minDistance=2,ge.maxDistance=50,s.current=ge;const De=new WA(Z),mt=new jA(F,k);De.addPass(mt);const _t=new qA(F,k,{focus:8,aperture:.025,maxblur:.01});_t.enabled=!1,De.addPass(_t),g.current=_t;const zt=new mo(new de(window.innerWidth,window.innerHeight),1.5,.4,.85);zt.threshold=0,zt.strength=1.5,zt.radius=.8,De.addPass(zt),u.current=zt;const Ir=new jo(e2);Ir.uniforms.uIntensity.value=.003,Ir.enabled=!0,De.addPass(Ir),x.current=Ir;const Ga=new jo(ZA);Ga.uniforms.offset.value=.95,Ga.uniforms.darkness.value=1.2,De.addPass(Ga),y.current=Ga;const Wa=new jo(JA);Wa.uniforms.intensity.value=.03,Wa.enabled=!1,De.addPass(Wa),m.current=Wa;const cu=new jo(KA);cu.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),De.addPass(cu),p.current=cu,i.current=De;const Ly=new o2(F);h.current=Ly;const Dy=new FA(4210752,.5);F.add(Dy),F.fog=new Ch(0,.02);const Uy=new n2(Z,F,256);l.current=Uy;const Ny=new i2(5);b.current=Ny;const Iy=new o0(new R(0,0,0),8,"point");T.current=Iy;const Fy=new s2((ze,Ue)=>{console.log(`Quality changed to: ${ze}`,Ue),Qi(ze),A(Ue.particleSize*Ue.particleSize),u.current&&(u.current.enabled=Ue.bloom,Ue.bloom&&(u.current.strength=Ue.bloomStrength)),x.current&&(x.current.enabled=Ue.chromatic),m.current&&(m.current.enabled=Ue.filmGrain),p.current&&(p.current.enabled=Ue.fxaa)});q.current=Fy;const Oy=new a2;J.current=Oy;const uu=sn["Northern Lights"],zy=new r2(F,{size:128,gridScale:25,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:uu.primary,color2:uu.secondary,color3:uu.accent,opacity:.5,particleSize:2.5,yOffset:-6});c.current=zy,yy();const sp=ze=>{const Ue=Z.domElement.getBoundingClientRect();U.current.x=(ze.clientX-Ue.left)/Ue.width*2-1,U.current.y=-((ze.clientY-Ue.top)/Ue.height)*2+1,E.current.setFromCamera(U.current,k);const Re=new Mn(new R(0,0,1),0),et=new R;E.current.ray.intersectPlane(Re,et),T.current&&et&&T.current.setPosition(et)},op=ze=>{var xt;const Ue=Z.domElement.getBoundingClientRect(),Re=new de((ze.clientX-Ue.left)/Ue.width*2-1,-((ze.clientY-Ue.top)/Ue.height)*2+1);E.current.setFromCamera(Re,k);const et=f.current.map(li=>li.group).filter(li=>li&&li.visible),it=E.current.intersectObjects(et,!0);if(it.length>0&&ze.shiftKey){const li=it[0].object.parent,ja=f.current.findIndex(ky=>ky.group===li);if(ja!==-1){$(ja),w.current=ja,Qe(`Selected ${((xt=bo[ja])==null?void 0:xt.type)||"structure"}`,"info");return}}const St=new Mn(new R(0,0,1),0),kt=new R;E.current.ray.intersectPlane(St,kt),b.current&&kt&&b.current.trigger(kt,15,2.5,10)},ap=ze=>{if(w.current!==null){const Ue=Z.domElement.getBoundingClientRect(),Re=new de((ze.clientX-Ue.left)/Ue.width*2-1,-((ze.clientY-Ue.top)/Ue.height)*2+1);E.current.setFromCamera(Re,k);const et=w.current;if(f.current[et]){const it=new Mn(new R(0,0,1),0),St=new R;if(E.current.ray.intersectPlane(it,St),St){B.current=!0,X(!0);const kt=f.current[et].group.position;Y.current.copy(St).sub(kt)}}}},lp=ze=>{B.current&&(B.current=!1,X(!1))},cp=ze=>{if(B.current&&w.current!==null){const Ue=Z.domElement.getBoundingClientRect(),Re=new de((ze.clientX-Ue.left)/Ue.width*2-1,-((ze.clientY-Ue.top)/Ue.height)*2+1);E.current.setFromCamera(Re,k);const et=new Mn(new R(0,0,1),0),it=new R;if(E.current.ray.intersectPlane(et,it),it&&f.current[w.current]){const St=it.sub(Y.current);f.current[w.current].group.position.copy(St),Zi(kt=>kt.map((xt,li)=>li===w.current?{...xt,position:St}:xt))}}},up=ze=>{const Ue=ze.touches[0],Re=Date.now();if(ie.current={x:Ue.clientX,y:Ue.clientY,time:Re},Re-N.current<300){const et=Z.domElement.getBoundingClientRect(),it=new de((Ue.clientX-et.left)/et.width*2-1,-((Ue.clientY-et.top)/et.height)*2+1);E.current.setFromCamera(it,k);const St=new Mn(new R(0,0,1),0),kt=new R;E.current.ray.intersectPlane(St,kt),kt&&(Ha(),Qe("Structure added","success"))}N.current=Re,ze.touches.length===2?V.current={type:"pinch",startDistance:Math.hypot(ze.touches[0].clientX-ze.touches[1].clientX,ze.touches[0].clientY-ze.touches[1].clientY)}:ze.touches.length===3&&(V.current={type:"three-finger"})},fp=ze=>{var Ue;if(ze.preventDefault(),ze.touches.length===1){const Re=ze.touches[0],et=Z.domElement.getBoundingClientRect();U.current.x=(Re.clientX-et.left)/et.width*2-1,U.current.y=-((Re.clientY-et.top)/et.height)*2+1,E.current.setFromCamera(U.current,k);const it=new Mn(new R(0,0,1),0),St=new R;E.current.ray.intersectPlane(it,St),T.current&&St&&T.current.setPosition(St)}else ze.touches.length===2&&((Ue=V.current)==null||Ue.type)},dp=ze=>{var Re;if(!ie.current)return;const Ue=Date.now()-ie.current.time;if(Ue>500&&ze.changedTouches.length===1){const et=ze.changedTouches[0],it=Z.domElement.getBoundingClientRect(),St=new de((et.clientX-it.left)/it.width*2-1,-((et.clientY-it.top)/it.height)*2+1);E.current.setFromCamera(St,k);const kt=new Mn(new R(0,0,1),0),xt=new R;E.current.ray.intersectPlane(kt,xt),xt&&b.current&&(b.current.trigger(xt,15,2.5,10),Qe("Shockwave triggered","success"))}if(ie.current&&ze.changedTouches.length===1){const et=ze.changedTouches[0],it=et.clientX-ie.current.x,St=et.clientY-ie.current.y;if(Math.abs(it)>100&&Math.abs(St)<50&&Ue<300){const kt=Object.keys(sn),xt=kt.indexOf(ne);it>0&&xt>0?(ot(kt[xt-1]),Qe(`Palette: ${kt[xt-1]}`,"success")):it<0&&xt<kt.length-1&&(ot(kt[xt+1]),Qe(`Palette: ${kt[xt+1]}`,"success"))}}((Re=V.current)==null?void 0:Re.type)==="three-finger"&&ze.changedTouches.length===3&&(Se(et=>!et),Qe(he?"UI hidden":"UI visible","info")),ie.current=null,V.current=null};Z.domElement.addEventListener("mousemove",sp),Z.domElement.addEventListener("mousemove",cp),Z.domElement.addEventListener("mousedown",ap),Z.domElement.addEventListener("mouseup",lp),Z.domElement.addEventListener("click",op),xe&&(Z.domElement.addEventListener("touchstart",up,{passive:!1}),Z.domElement.addEventListener("touchmove",fp,{passive:!1}),Z.domElement.addEventListener("touchend",dp));const hp=()=>{const ze=window.innerWidth,Ue=window.innerHeight;k.aspect=ze/Ue,k.updateProjectionMatrix(),Z.setSize(ze,Ue),De.setSize(ze,Ue),p.current&&p.current.uniforms.resolution.value.set(1/ze,1/Ue)};window.addEventListener("resize",hp);const pp=()=>{a.current=requestAnimationFrame(pp);const ze=o.current.getDelta(),Ue=o.current.getElapsedTime();if(v.current.active){const Re=v.current;Re.progress+=ze/Re.duration,Re.progress>=1&&(Re.progress=1,Re.active=!1);const et=Re.progress,it=et<.5?4*et*et*et:1-Math.pow(-2*et+2,3)/2;r.current.position.lerpVectors(Re.startPos,Re.endPos,it);const St=new R().lerpVectors(Re.startTarget,Re.endTarget,it);s.current.target.copy(St),r.current.fov=Re.startFov+(Re.endFov-Re.startFov)*it,r.current.updateProjectionMatrix()}if(_.current.intensity>.001){const Re=_.current,et=(Math.random()-.5)*Re.intensity,it=(Math.random()-.5)*Re.intensity,St=(Math.random()-.5)*Re.intensity;r.current.position.x+=et,r.current.position.y+=it,r.current.position.z+=St,Re.intensity*=Re.decay}if(s.current&&s.current.update(),b.current&&(b.current.update(ze),l.current)){const Re=b.current.getAllShockwaves();l.current.setShockwaves(Re)}if(l.current){const Re={flow:0,boids:1,nbody:2};l.current.velocityUniforms.uSimulationMode.value=Re[Ji]||0,l.current.velocityUniforms.uBoidsSeparation.value=Ih,l.current.velocityUniforms.uBoidsAlignment.value=Oh,l.current.velocityUniforms.uBoidsCohesion.value=kh,l.current.velocityUniforms.uBoidsNeighborRadius.value=Hh,l.current.velocityUniforms.uBoidsMaxSpeed.value=Gh,l.current.velocityUniforms.uNbodyGravConstant.value=jh,l.current.velocityUniforms.uNbodySoftening.value=Yh,l.current.velocityUniforms.uNbodyDamping.value=$h,bo.forEach((xt,li)=>{li<8&&(l.current.velocityUniforms.uStructureMasses.value[li]=xt.mass||1)});const et=[];re.current&&T.current&&et.push({position:T.current.position,strength:T.current.strength,type:"point",radius:3}),nu.forEach(xt=>{xt.active!==!1&&et.push({position:xt.position,strength:xt.strength,type:xt.type,radius:xt.radius||3})}),l.current.setAttractors(et);const St={down:new R(0,-1,0),up:new R(0,1,0),left:new R(-1,0,0),right:new R(1,0,0),forward:new R(0,0,-1),backward:new R(0,0,1)}[ae]||new R(0,-1,0);l.current.setGravity(St,M*.5);const kt=f.current.map(xt=>({position:xt.getPosition(),radius:xt.getBoundingRadius()}));l.current.setStructures(kt),l.current.velocityUniforms.uNoiseScale.value=eu,l.current.velocityUniforms.uNoiseSpeed.value=ly,l.current.velocityUniforms.uFlowDamping.value=bn,l.current.velocityUniforms.uFlowMaxSpeed.value=Pi,l.current.particles.material.uniforms.uSize.value=Fa,l.current.particles.material.uniforms.uGlowIntensity.value=To}if(b.current&&Q.current&&Ue-S.current>=te.current&&(b.current.trigger(new R(0,0,0),8,3,6),S.current=Ue),l.current&&l.current.update(ze,Ue),f.current.forEach(Re=>{Re.update(ze,We)}),d.current.forEach(Re=>{Re.update(ze,We)}),c.current&&c.current.update(ze,We),h.current&&h.current.update(Ue),m.current&&m.current.enabled&&(m.current.uniforms.time.value=Ue),x.current&&x.current.enabled&&(x.current.uniforms.uTime.value=Ue),g.current&&(g.current.enabled=ka,ka&&(g.current.uniforms.focus.value=Qh,g.current.uniforms.aperture.value=Zh)),u.current&&(u.current.strength=pe,u.current.radius=cy,u.current.threshold=uy),m.current&&m.current.enabled&&(m.current.uniforms.intensity.value=fy),x.current&&(x.current.uniforms.uIntensity.value=ue),y.current&&(y.current.uniforms.darkness.value=dy),J.current&&I.current){const Re=J.current.getFrequencyData();if(Math.floor(Ue*10)%5===0&&(Lt(Re.bass),Ht(Re.mid),Et(Re.high)),J.current.detectBeat(Je)&&Ue-G.current>.3&&(b.current&&b.current.trigger(new R(0,0,0),Re.bass*20,2,8),G.current=Ue),l.current){const it=Re.mid*2;l.current.velocityUniforms.uNoiseScale.value=.5+it}if(x.current&&x.current.enabled){const it=Re.high*.005;x.current.uniforms.uIntensity.value=ue+it}if(u.current&&u.current.enabled){const it=Re.overall*.5;u.current.strength=pe+it}if(c.current&&at){const it=Re.bass*1.5;c.current.setWaveParams(xn+it,.5,us)}f.current.forEach(it=>{if(it.config){const St=it.config.pulseIntensity||.1;it.config.pulseIntensity=St+Re.mid*.3}})}if(q.current&&oi&&(q.current.update(ze),Math.floor(Ue*2)%1===0)){const Re=q.current.getStats();Zc(Re.fps)}if(P&&r.current){const Re=Math.sin(Ue*.2)*.5;r.current.position.y+=Re*ze}i.current&&i.current.render()};return pp(),()=>{window.removeEventListener("resize",hp),Z.domElement.removeEventListener("mousemove",sp),Z.domElement.removeEventListener("mousemove",cp),Z.domElement.removeEventListener("mousedown",ap),Z.domElement.removeEventListener("mouseup",lp),Z.domElement.removeEventListener("click",op),xe&&(Z.domElement.removeEventListener("touchstart",up),Z.domElement.removeEventListener("touchmove",fp),Z.domElement.removeEventListener("touchend",dp)),a.current&&cancelAnimationFrame(a.current),b.current&&(b.current.clear(),b.current=null),T.current=null,J.current&&(J.current.disconnect(),J.current=null),H.current&&H.current.state==="recording"&&(H.current.stop(),H.current=null),l.current&&(l.current.dispose(),l.current=null),f.current.forEach(ze=>ze.dispose()),f.current=[],d.current.forEach(ze=>ze.dispose()),d.current=[],c.current&&(c.current.dispose(),c.current=null),h.current&&h.current.dispose(),n.current&&(n.current.dispose(),t.current&&n.current.domElement&&t.current.removeChild(n.current.domElement))}},[]),z.useEffect(()=>{const F=window.matchMedia("(prefers-reduced-motion: reduce)");F.matches&&(ke(!0),C(.3),tt(!1),D(!1),Qe("Reduced motion mode enabled","info"));const k=Z=>{Z.matches&&(ke(!0),C(.3),tt(!1),Qe("Reduced motion mode enabled","info"))};return F.addEventListener("change",k),()=>F.removeEventListener("change",k)},[]),z.useEffect(()=>{const F=k=>{if(k.target.tagName==="INPUT"||k.target.tagName==="TEXTAREA"||k.target.tagName==="SELECT")return;let Z=k.key.toLowerCase();k.shiftKey&&k.key!=="Shift"&&(Z=`Shift+${k.key}`);const ge=_f[Z]||_f[k.key];if(!ge)return;k.preventDefault();const De=Object.keys(sn);switch(ge.action){case"triggerPulse":Ey();break;case"randomize":au(),Qe("Scene randomized","success");break;case"clearScene":Ur(),Qe("Scene cleared","info");break;case"toggleUI":Se(_t=>!_t),Qe(he?"UI hidden":"UI visible","info");break;case"toggleFullscreen":wy();break;case"togglePause":Ty();break;case"toggleMouseFollow":Fe(_t=>{const zt=!_t;return Qe(zt?"Mouse follow ON":"Mouse follow OFF","info"),zt});break;case"toggleWaveGrid":At(_t=>{const zt=!_t;return Qe(zt?"Wave grid ON":"Wave grid OFF","info"),zt});break;case"palette1":case"palette2":case"palette3":case"palette4":case"palette5":case"palette6":const mt=parseInt(ge.action.slice(-1))-1;De[mt]&&(ot(De[mt]),Qe(`Palette: ${De[mt]}`,"success"));break;case"qualityUp":tp(1);break;case"qualityDown":tp(-1);break;case"resetCamera":lu(),Qe("Camera reset","info");break;case"cameraTopDown":An("topDown");break;case"cameraSide":An("side");break;case"cameraCloseUp":An("closeUp");break;case"cameraWide":An("wide");break;case"cameraCinematic":An("cinematic");break;case"cameraLow":An("low");break;case"showHelp":j(_t=>!_t);break}};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[he,au,Ur,lu,An]),z.useEffect(()=>{vt.current=we,o.current&&(we?o.current.stop():o.current.start())},[we]),z.useEffect(()=>{i.current&&i.current.passes[1]&&(i.current.passes[1].strength=pe)},[pe]),z.useEffect(()=>{s.current&&(s.current.autoRotate=$e,s.current.autoRotateSpeed=Pe)},[$e,Pe]),z.useEffect(()=>{h.current&&h.current.setStyle(Ie)},[Ie]),z.useEffect(()=>{m.current&&(m.current.enabled=Ce)},[Ce]),z.useEffect(()=>{re.current=Be},[Be]),z.useEffect(()=>{x.current&&(x.current.enabled=se)},[se]),z.useEffect(()=>{x.current&&(x.current.uniforms.uIntensity.value=ue)},[ue]),z.useEffect(()=>{Q.current=Ze},[Ze]),z.useEffect(()=>{te.current=yt},[yt]),z.useEffect(()=>{c.current&&c.current.setVisible(at)},[at]),z.useEffect(()=>{q.current&&q.current.setEnabled(oi)},[oi]),z.useEffect(()=>{if(q.current&&!oi){const F=q.current.setQuality(Ri);F&&A(F.particleSize*F.particleSize)}},[Ri,oi]),z.useEffect(()=>{c.current&&c.current.setWaveParams(xn,.5,us)},[xn,us]),z.useEffect(()=>{if(l.current&&l.current.particles){const F={speed:0,direction:1,acceleration:2};l.current.particles.material.uniforms.uColorMode.value=F[ru]||0}},[ru]),z.useEffect(()=>{const F=sn[ne];if(!F)return;h.current&&h.current.setColors(F.background),l.current&&l.current.setColors(F.primary,F.secondary,F.accent),c.current&&c.current.setColors(F.primary,F.secondary,F.accent);const k=t2[ne];k&&u.current&&(u.current.strength=k.strength,u.current.radius=k.radius,u.current.threshold=k.threshold),f.current.forEach(Z=>{Z.setColor(F.primary)}),d.current.forEach(Z=>{Z.setColor(F.secondary)}),Zi(Z=>Z.map(ge=>({...ge,color:F.primary}))),Lr(Z=>Z.map(ge=>({...ge,color:F.secondary})))},[ne]);const yy=z.useCallback(()=>{const F=sn[ne],k={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:F.primary},Z=new Sf(e.current,k);f.current.push(Z),Zi([{id:Date.now(),...k}]),l.current&&l.current.setColors(F.primary,F.secondary,F.accent);const ge={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:F.accent},De=new Mf(e.current,ge);d.current.push(De),Lr([{id:Date.now(),...ge}])},[ne]),Ba=z.useCallback((F="point")=>{const k=new o0(new R((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4),F==="repulsor"?-5:5,F);iu(Z=>[...Z,{id:Date.now(),type:F,position:k.position.clone(),strength:k.strength,radius:k.radius}]),Qe(`${F.charAt(0).toUpperCase()+F.slice(1)} attractor added`,"success")},[Qe]),_y=z.useCallback(F=>{iu(k=>k.filter((Z,ge)=>ge!==F))},[]),Ao=z.useCallback((F,k,Z)=>{iu(ge=>ge.map((De,mt)=>mt===F?{...De,[k]:Z}:De))},[]),Ha=z.useCallback((F="icosahedron")=>{const k=sn[ne],Z={type:F,position:new R((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6),rotationSpeed:{x:.1,y:.2,z:.05},scale:.5+Math.random()*.5,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:k.primary,mass:1},ge=new Sf(e.current,Z);f.current.push(ge),Zi(De=>[...De,{id:Date.now(),...Z}])},[ne]),Sy=z.useCallback(F=>{f.current[F]&&(f.current[F].dispose(),f.current.splice(F,1),Zi(k=>k.filter((Z,ge)=>ge!==F)))},[]),hs=z.useCallback((F,k,Z)=>{f.current[F]&&(k==="type"?(f.current[F].config.type=Z,f.current[F].createStructure()):k==="materialStyle"?(f.current[F].config.materialStyle=Z,f.current[F].createStructure()):f.current[F].config[k]=Z,Zi(ge=>ge.map((De,mt)=>mt===F?{...De,[k]:Z}:De)))},[]),ou=z.useCallback((F="helix")=>{const k=sn[ne],Z={type:F,position:new R((Math.random()-.5)*4,(Math.random()-.5)*2,(Math.random()-.5)*4),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:k.accent},ge=new Mf(e.current,Z);d.current.push(ge),Lr(De=>[...De,{id:Date.now(),...Z}])},[ne]),My=z.useCallback(F=>{d.current[F]&&(d.current[F].dispose(),d.current.splice(F,1),Lr(k=>k.filter((Z,ge)=>ge!==F)))},[]),Va=z.useCallback((F,k,Z)=>{d.current[F]&&(k==="type"?(d.current[F].config.type=Z,d.current[F].createRibbon()):d.current[F].config[k]=Z,Lr(ge=>ge.map((De,mt)=>mt===F?{...De,[k]:Z}:De)))},[]),Ur=z.useCallback(()=>{f.current.forEach(F=>F.dispose()),f.current=[],Zi([]),d.current.forEach(F=>F.dispose()),d.current=[],Lr([])},[]),au=z.useCallback(()=>{Ur();const F=Object.keys(sn),k=F[Math.floor(Math.random()*F.length)];ot(k);const Z=["icosahedron","torus","rings","helix","mobius"],ge=1+Math.floor(Math.random()*3);for(let _t=0;_t<ge;_t++){const zt=Z[Math.floor(Math.random()*Z.length)];setTimeout(()=>Ha(zt),_t*100)}const De=["helix","lissajous","toroidal","spiral"],mt=1+Math.floor(Math.random()*2);for(let _t=0;_t<mt;_t++){const zt=De[Math.floor(Math.random()*De.length)];setTimeout(()=>ou(zt),_t*100)}C(.5+Math.random()*1.5),_e(1+Math.random()*1.5),Ae(Math.random()*1.5)},[Ur,Ha,ou]),lu=z.useCallback(()=>{r.current&&s.current&&(r.current.position.set(0,2,8),s.current.target.set(0,0,0),s.current.update())},[]),ep=z.useCallback((F,k,Z,ge=1.5)=>{if(!r.current||!s.current)return;const De=v.current;De.startPos.copy(r.current.position),De.endPos.set(...F),De.startTarget.copy(s.current.target),De.endTarget.set(...k),De.startFov=r.current.fov,De.endFov=Z,De.progress=0,De.duration=ge,De.active=!0},[]),An=z.useCallback(F=>{const k=QA[F];k&&(ep(k.position,k.target,k.fov),Qe(`Camera: ${F}`,"info"))},[ep,Qe]),Qe=z.useCallback((F,k="info")=>{const Z=Date.now();be(ge=>[...ge,{id:Z,message:F,type:k}]),setTimeout(()=>{be(ge=>ge.filter(De=>De.id!==Z))},3e3)},[]),Ey=z.useCallback(()=>{b.current&&(b.current.trigger(new R(0,0,0),12,3,8),_.current.intensity=.15,Qe("Pulse triggered!","success"))},[Qe]),wy=z.useCallback(()=>{document.fullscreenElement?(document.exitFullscreen(),Qe("Fullscreen OFF","info")):(document.documentElement.requestFullscreen().catch(F=>{Qe("Could not enter fullscreen","error")}),Qe("Fullscreen ON","info"))},[Qe]),Ty=z.useCallback(()=>{je(F=>{const k=!F;return Qe(k?"Paused":"Resumed","info"),k})},[Qe]),tp=z.useCallback(F=>{const k=["ultra","high","medium","low","potato"],Z=k.indexOf(Ri),ge=Math.max(0,Math.min(k.length-1,Z-F));ge!==Z&&(Mo(!1),Qi(k[ge]),Qe(`Quality: ${k[ge]}`,"info"))},[Ri,Qe]),by=z.useCallback(async F=>{if(F==="microphone"&&J.current){const k=await J.current.connectMicrophone();k.success?(He(!0),Xe("microphone"),I.current=!0,Qe("Microphone connected","success")):Qe(`Microphone error: ${k.error}`,"error")}},[Qe]),Ay=z.useCallback(()=>{J.current&&(J.current.disconnect(),I.current=!1,He(!1),Xe("none"),Qe("Audio reactivity disabled","info"))},[Qe]),np=z.useCallback((F=2)=>{if(!n.current||!i.current)return;const k=new de;n.current.getSize(k);const Z=k.x*F,ge=k.y*F;n.current.setSize(Z,ge),i.current.setSize(Z,ge),i.current.render();const De=n.current.domElement.toDataURL("image/png");n.current.setSize(k.x,k.y),i.current.setSize(k.x,k.y);const mt=document.createElement("a");mt.download=`luminous-flow-${Date.now()}.png`,mt.href=De,mt.click(),Qe(`Screenshot saved (${Z}x${ge})`,"success")},[Qe]),Cy=z.useCallback(()=>{if(!(!n.current||ht))try{const F=n.current.domElement.captureStream(30),k=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm",Z=new MediaRecorder(F,{mimeType:k,videoBitsPerSecond:25e5});ee.current=[],Z.ondataavailable=ge=>{ge.data.size>0&&ee.current.push(ge.data)},Z.onstop=()=>{const ge=new Blob(ee.current,{type:k}),De=URL.createObjectURL(ge),mt=document.createElement("a");mt.download=`luminous-flow-${Date.now()}.webm`,mt.href=De,mt.click(),URL.revokeObjectURL(De),Qe("Recording saved","success")},Z.start(),H.current=Z,yi(!0),Qe("Recording started (30fps)","info")}catch(F){Qe(`Recording error: ${F.message}`,"error")}},[ht,Qe]),Ry=z.useCallback(()=>{H.current&&H.current.state==="recording"&&(H.current.stop(),H.current=null,yi(!1))},[]),Py=z.useCallback(F=>{const k=s0[F];k&&(Ur(),ot(k.palette),qe(k.background),C(k.timeScale),_e(k.bloom),At(k.waveGrid),So(k.waveAmplitude),k.simulationMode?(su(k.simulationMode),k.simulationMode==="boids"&&k.boids&&(Fh(k.boids.separation),zh(k.boids.alignment),Bh(k.boids.cohesion),Vh(k.boids.neighborRadius),Wh(k.boids.maxSpeed)),k.simulationMode==="nbody"&&k.nbody&&(Xh(k.nbody.gravConstant),qh(k.nbody.softening),Kh(k.nbody.damping))):su("flow"),k.structures.forEach((Z,ge)=>{setTimeout(()=>{const De={type:Z.type,position:new R(...Z.position||[0,0,0]),rotationSpeed:{x:(Z.rotationSpeed||.2)*.5,y:Z.rotationSpeed||.2,z:(Z.rotationSpeed||.2)*.25},scale:Z.scale||1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:sn[k.palette].primary,mass:Z.mass||1},mt=new Sf(e.current,De);f.current.push(mt),Zi(_t=>[..._t,{id:Date.now()+ge,...De}])},ge*100)}),k.ribbons.forEach((Z,ge)=>{setTimeout(()=>{const De={type:Z.type,position:new R(0,0,0),animationSpeed:1,thickness:Z.thickness||.08,glowIntensity:1.5,color:sn[k.palette].accent},mt=new Mf(e.current,De);d.current.push(mt),Lr(_t=>[..._t,{id:Date.now()+100+ge,...De}])},(k.structures.length+ge)*100)}),Qe(`Loaded: ${F}`,"success"),Ne(!1))},[Ur,Qe]),Nr=F=>{vy(k=>({...k,[F]:!k[F]}))},ip=F=>{xy(k=>({...k,[F]:!k[F]}))};return L.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[L.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),L.jsx("div",{style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px",pointerEvents:"none"},children:Ve.map(F=>L.jsx("div",{style:{padding:"12px 24px",borderRadius:"8px",background:F.type==="success"?"rgba(0, 200, 100, 0.9)":F.type==="error"?"rgba(200, 50, 50, 0.9)":"rgba(50, 50, 70, 0.9)",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",backdropFilter:"blur(10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)",animation:"slideUp 0.3s ease-out",pointerEvents:"auto"},children:F.message},F.id))}),st&&L.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>j(!1),children:L.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"500px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:F=>F.stopPropagation(),children:[L.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"KEYBOARD SHORTCUTS"}),L.jsx("div",{style:{display:"grid",gap:"8px"},children:Object.entries(_f).map(([F,{description:k}])=>L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px"},children:[L.jsx("span",{style:{fontSize:"13px",color:"#ccc",fontFamily:"system-ui, -apple-system, sans-serif"},children:k}),L.jsx("kbd",{style:{padding:"4px 10px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",color:"#00ffaa",border:"1px solid rgba(255, 255, 255, 0.2)"},children:F===" "?"Space":F})]},F))}),L.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Press ? or Escape to close"})]})}),Xt&&L.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>Ne(!1),children:L.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"700px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:F=>F.stopPropagation(),children:[L.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"SCENE PRESETS"}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"15px"},children:Object.entries(s0).map(([F,k])=>{var Z,ge,De,mt,_t;return L.jsxs("button",{onClick:()=>Py(F),style:{padding:"20px",background:`linear-gradient(135deg, ${((Z=sn[k.palette])==null?void 0:Z.background[0])||"#1a1a2e"}, ${((ge=sn[k.palette])==null?void 0:ge.background[1])||"#16213e"})`,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",position:"relative",overflow:"hidden"},onMouseEnter:zt=>{var Ir;zt.currentTarget.style.transform="scale(1.02)",zt.currentTarget.style.borderColor=((Ir=sn[k.palette])==null?void 0:Ir.primary)||"#00ffaa"},onMouseLeave:zt=>{zt.currentTarget.style.transform="scale(1)",zt.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)"},children:[L.jsx("div",{style:{fontSize:"14px",fontWeight:"500",color:((De=sn[k.palette])==null?void 0:De.primary)||"#00ffaa",marginBottom:"8px",fontFamily:"system-ui, -apple-system, sans-serif"},children:F}),L.jsx("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.4",fontFamily:"system-ui, -apple-system, sans-serif"},children:k.description}),L.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",width:"8px",height:"8px",borderRadius:"50%",background:((mt=sn[k.palette])==null?void 0:mt.primary)||"#00ffaa",boxShadow:`0 0 10px ${((_t=sn[k.palette])==null?void 0:_t.primary)||"#00ffaa"}`}})]},F)})}),L.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Click a preset to load it, or click outside to close"})]})}),he&&L.jsxs("div",{style:{position:"absolute",top:0,right:0,width:"320px",height:"100%",background:"rgba(10, 10, 20, 0.85)",backdropFilter:"blur(10px)",borderLeft:"1px solid rgba(255, 255, 255, 0.1)",overflowY:"auto",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"13px",color:"#fff"},children:[L.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(0, 0, 0, 0.3)"},children:[L.jsx("h1",{style:{margin:0,fontSize:"20px",fontWeight:"300",letterSpacing:"2px"},children:"LUMINOUS FLOW"}),L.jsx("p",{style:{margin:"5px 0 0",opacity:.6,fontSize:"11px"},children:"3D Particle & Light Sculpture Sandbox"})]}),L.jsxs("div",{style:{padding:"15px 20px",display:"flex",gap:"10px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[L.jsx("button",{onClick:au,style:Ct,children:"Randomize"}),L.jsx("button",{onClick:Ur,style:Ct,children:"Clear Scene"})]}),L.jsxs(Br,{title:"Global Controls",expanded:Dr.global,onToggle:()=>Nr("global"),children:[L.jsx(ft,{label:"Time Scale",value:We,onChange:C,min:.1,max:3,step:.1}),L.jsx(ft,{label:"Gravity",value:M,onChange:W,min:-2,max:2,step:.1}),L.jsx(ft,{label:"Turbulence",value:le,onChange:Ae,min:0,max:3,step:.1}),L.jsx(ft,{label:"Bloom Intensity",value:pe,onChange:_e,min:0,max:3,step:.1}),L.jsx(or,{label:"Background Style",value:Ie,onChange:qe,options:["solid","gradient","nebula"]}),L.jsx(or,{label:"Color Palette",value:ne,onChange:ot,options:Object.keys(sn)}),L.jsx(Fi,{label:"Film Grain",checked:Ce,onChange:Me}),L.jsx(Fi,{label:"Chromatic Aberration",checked:se,onChange:D}),se&&L.jsx(ft,{label:"Aberration Intensity",value:ue,onChange:ve,min:.001,max:.01,step:.001})]}),L.jsxs(Br,{title:"GPU Particles",expanded:Dr.emitters,onToggle:()=>Nr("emitters"),children:[L.jsxs("div",{style:{padding:"12px",background:"rgba(0, 255, 170, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 255, 170, 0.3)",marginBottom:"10px"},children:[L.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"6px",color:"#00ffaa"},children:"✓ GPU Particles Active"}),L.jsxs("div",{style:{fontSize:"11px",opacity:.8,lineHeight:"1.4"},children:["65,536 particles (256×256 texture)",L.jsx("br",{}),"GPU-computed positions & velocities",L.jsx("br",{}),"Curl noise + central attractor"]})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(100, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(100, 200, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#64c8ff"},children:"Simulation Mode"}),L.jsx(or,{label:"Mode",value:Ji,onChange:su,options:["flow","boids","nbody"]}),Ji==="boids"&&L.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[L.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"Boids Parameters"}),L.jsx(ft,{label:"Separation",value:Ih,onChange:Fh,min:0,max:5,step:.1}),L.jsx(ft,{label:"Alignment",value:Oh,onChange:zh,min:0,max:5,step:.1}),L.jsx(ft,{label:"Cohesion",value:kh,onChange:Bh,min:0,max:5,step:.1}),L.jsx(ft,{label:"Neighbor Radius",value:Hh,onChange:Vh,min:.5,max:5,step:.1}),L.jsx(ft,{label:"Max Speed",value:Gh,onChange:Wh,min:1,max:10,step:.5})]}),Ji==="nbody"&&L.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[L.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"N-Body Parameters"}),L.jsx(ft,{label:"Gravitational Constant",value:jh,onChange:Xh,min:.01,max:2,step:.01}),L.jsx(ft,{label:"Softening",value:Yh,onChange:qh,min:.1,max:2,step:.1}),L.jsx(ft,{label:"Damping",value:$h,onChange:Kh,min:.99,max:1,step:.001})]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:[Ji==="flow"&&"Default mode: curl noise + attractors + shockwaves",Ji==="boids"&&"Flocking behavior: particles avoid, align, and cohere",Ji==="nbody"&&"Gravitational simulation: structures as massive bodies"]})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 170, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 170, 0, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ffaa00"},children:"Interactivity"}),L.jsx(Fi,{label:"Mouse Follow (particles follow cursor)",checked:Be,onChange:Fe}),L.jsx(Fi,{label:"Auto Pulse (periodic shockwaves)",checked:Ze,onChange:tt}),Ze&&L.jsx(ft,{label:"Pulse Interval (seconds)",value:yt,onChange:Pt,min:1,max:10,step:.5}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Click anywhere to trigger a shockwave!"})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 170, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 170, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#00aaff"},children:"Wave Grid"}),L.jsx(Fi,{label:"Enable Wave Grid",checked:at,onChange:At}),at&&L.jsxs(L.Fragment,{children:[L.jsx(ft,{label:"Wave Amplitude",value:xn,onChange:So,min:.2,max:3,step:.1}),L.jsx(ft,{label:"Wave Speed",value:us,onChange:fs,min:.2,max:3,step:.1})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"16,384 particles in undulating grid below the scene"})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 85, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 85, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aa55ff"},children:"Performance"}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px",fontSize:"11px"},children:[L.jsxs("span",{children:["FPS: ",L.jsx("strong",{style:{color:Eo>50?"#00ff88":Eo>30?"#ffaa00":"#ff4444"},children:Eo})]}),L.jsxs("span",{children:["Quality: ",L.jsx("strong",{style:{color:"#aa55ff",textTransform:"capitalize"},children:Ri})]}),L.jsxs("span",{children:["Particles: ",L.jsxs("strong",{children:[(Jc/1e3).toFixed(0),"K"]})]})]}),L.jsx(Fi,{label:"Auto Quality (adjusts based on FPS)",checked:oi,onChange:Mo}),!oi&&L.jsx(or,{label:"Quality Level",value:Ri,onChange:Qi,options:["ultra","high","medium","low","potato"]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:oi?L.jsx(L.Fragment,{children:"Auto mode adjusts quality based on FPS. Target: 50-60fps."}):L.jsx(L.Fragment,{children:"Manual mode lets you choose quality level. Higher = more particles and effects."})})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 255, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 255, 0, 0.3)"},children:[L.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aaff00"},children:["Attractors (",nu.length,")"]}),L.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"10px",flexWrap:"wrap"},children:[L.jsx("button",{onClick:()=>Ba("point"),style:{...Ct,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Point"}),L.jsx("button",{onClick:()=>Ba("vortex"),style:{...Ct,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Vortex"}),L.jsx("button",{onClick:()=>Ba("orbit"),style:{...Ct,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Orbit"}),L.jsx("button",{onClick:()=>Ba("repulsor"),style:{...Ct,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Repulsor"})]}),nu.map((F,k)=>L.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"6px"},children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[L.jsx("span",{style:{fontSize:"11px",textTransform:"capitalize"},children:F.type}),L.jsx("button",{onClick:()=>_y(k),style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]}),L.jsx(ft,{label:"Strength",value:F.strength,onChange:Z=>Ao(k,"strength",Z),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position X",value:F.position.x,onChange:Z=>Ao(k,"position",new R(Z,F.position.y,F.position.z)),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position Y",value:F.position.y,onChange:Z=>Ao(k,"position",new R(F.position.x,Z,F.position.z)),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position Z",value:F.position.z,onChange:Z=>Ao(k,"position",new R(F.position.x,F.position.y,Z)),min:-10,max:10,step:.5}),F.type==="orbit"&&L.jsx(ft,{label:"Orbit Radius",value:F.radius,onChange:Z=>Ao(k,"radius",Z),min:.5,max:10,step:.5})]},F.id)),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Add attractors to create force fields. Point attracts, Vortex spins, Orbit maintains distance, Repulsor pushes away."})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 100, 200, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 100, 200, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff64c8"},children:"Velocity Coloring"}),L.jsx(or,{label:"Color Mode",value:ru,onChange:hy,options:["speed","direction","acceleration"]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Speed: color by velocity magnitude",L.jsx("br",{}),"Direction: hue based on movement direction",L.jsx("br",{}),"Acceleration: highlight sudden changes"]})]}),O!==null&&L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 200, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 200, 0, 0.3)"},children:[L.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#ffc800"},children:["Selected: ",((rp=bo[O])==null?void 0:rp.type)||"Structure"]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.4"},children:["Drag to move • Shift+Click to select",L.jsx("br",{}),"Click elsewhere to deselect"]}),L.jsx("button",{onClick:()=>{$(null),w.current=null},style:{...Ct,width:"100%",marginTop:"8px",fontSize:"11px"},children:"Deselect"})]}),xe&&L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 200, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#00c8ff"},children:"Touch Gestures"}),L.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.6"},children:["• Tap: Shockwave",L.jsx("br",{}),"• Double-tap: Add structure",L.jsx("br",{}),"• Long press: Strong shockwave",L.jsx("br",{}),"• Swipe left/right: Change palette",L.jsx("br",{}),"• 3-finger swipe: Toggle UI"]})]})]}),L.jsxs(Br,{title:`Structures (${bo.length})`,expanded:Dr.structures,onToggle:()=>Nr("structures"),children:[L.jsx("button",{onClick:()=>Ha(),style:{...Ct,width:"100%",marginBottom:"10px"},children:"+ Add Structure"}),bo.map((F,k)=>{var Z;return L.jsxs(a0,{title:`${F.type}`,expanded:Jh[F.id],onToggle:()=>ip(F.id),onDelete:()=>Sy(k),children:[L.jsx(or,{label:"Type",value:F.type,onChange:ge=>hs(k,"type",ge),options:["icosahedron","torus","rings","helix","mobius"]}),L.jsx(ft,{label:"Rotation Speed",value:((Z=F.rotationSpeed)==null?void 0:Z.y)||.2,onChange:ge=>hs(k,"rotationSpeed",{x:ge*.5,y:ge,z:ge*.25}),min:0,max:2,step:.1}),L.jsx(ft,{label:"Pulse Intensity",value:F.pulseIntensity,onChange:ge=>hs(k,"pulseIntensity",ge),min:0,max:.5,step:.05}),L.jsx(ft,{label:"Scale",value:F.scale,onChange:ge=>hs(k,"scale",ge),min:.2,max:3,step:.1}),L.jsx(or,{label:"Material",value:F.materialStyle,onChange:ge=>hs(k,"materialStyle",ge),options:["glass","holographic","solid"]}),Ji==="nbody"&&L.jsx(ft,{label:"Mass (N-Body)",value:F.mass||1,onChange:ge=>hs(k,"mass",ge),min:.1,max:10,step:.1})]},F.id)})]}),L.jsxs(Br,{title:`Ribbons (${Nh.length})`,expanded:Dr.ribbons,onToggle:()=>Nr("ribbons"),children:[L.jsx("button",{onClick:()=>ou(),style:{...Ct,width:"100%",marginBottom:"10px"},children:"+ Add Ribbon"}),Nh.map((F,k)=>L.jsxs(a0,{title:`${F.type} Ribbon`,expanded:Jh[F.id],onToggle:()=>ip(F.id),onDelete:()=>My(k),children:[L.jsx(or,{label:"Curve Type",value:F.type,onChange:Z=>Va(k,"type",Z),options:["helix","lissajous","toroidal","spiral"]}),L.jsx(ft,{label:"Animation Speed",value:F.animationSpeed,onChange:Z=>Va(k,"animationSpeed",Z),min:.1,max:3,step:.1}),L.jsx(ft,{label:"Thickness",value:F.thickness,onChange:Z=>Va(k,"thickness",Z),min:.02,max:.3,step:.01}),L.jsx(ft,{label:"Glow Intensity",value:F.glowIntensity,onChange:Z=>Va(k,"glowIntensity",Z),min:.5,max:3,step:.1})]},F.id))]}),L.jsxs(Br,{title:"Camera",expanded:Dr.camera,onToggle:()=>Nr("camera"),children:[L.jsxs("div",{style:{padding:"12px",background:"rgba(100, 150, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(100, 150, 255, 0.3)",marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#6496ff"},children:"Camera Presets"}),L.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[L.jsx("button",{onClick:()=>An("default"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Default"}),L.jsx("button",{onClick:()=>An("topDown"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Top-Down"}),L.jsx("button",{onClick:()=>An("side"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Side View"}),L.jsx("button",{onClick:()=>An("closeUp"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Close-Up"}),L.jsx("button",{onClick:()=>An("wide"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Wide"}),L.jsx("button",{onClick:()=>An("cinematic"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Cinematic"}),L.jsx("button",{onClick:()=>An("low"),style:{...Ct,fontSize:"10px",padding:"6px"},children:"Low Angle"})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Smooth camera transitions with Shift+1-6 shortcuts"})]}),L.jsxs("div",{style:{padding:"12px",background:"rgba(255, 150, 100, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 150, 100, 0.3)",marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff9664"},children:"Depth of Field"}),L.jsx(Fi,{label:"Enable DOF (Bokeh Effect)",checked:ka,onChange:py}),ka&&L.jsxs(L.Fragment,{children:[L.jsx(ft,{label:"Focus Distance",value:Qh,onChange:my,min:1,max:20,step:.5}),L.jsx(ft,{label:"Blur Amount (Aperture)",value:Zh,onChange:gy,min:.001,max:.1,step:.001})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Cinematic depth of field effect with bokeh blur"})]}),L.jsx(Fi,{label:"Auto Rotate",checked:$e,onChange:Ge}),$e&&L.jsx(ft,{label:"Rotation Speed",value:Pe,onChange:ye,min:.1,max:2,step:.1}),L.jsx(Fi,{label:"Immersion Mode",checked:P,onChange:fe}),L.jsx("button",{onClick:lu,style:{...Ct,width:"100%",marginTop:"10px"},children:"Reset Camera"})]}),L.jsxs(Br,{title:"Audio Reactivity",expanded:Dr.audio,onToggle:()=>Nr("audio"),children:[L.jsxs("div",{style:{padding:"12px",background:Oe?"rgba(0, 255, 100, 0.1)":"rgba(255, 100, 100, 0.1)",borderRadius:"4px",border:`1px solid ${Oe?"rgba(0, 255, 100, 0.3)":"rgba(255, 100, 100, 0.3)"}`,marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"8px",color:Oe?"#00ff64":"#ff6464"},children:Oe?"🎵 Audio Active":"🔇 Audio Inactive"}),Oe?L.jsx("button",{onClick:Ay,style:{...Ct,width:"100%",background:"rgba(255, 100, 100, 0.2)"},children:"Disconnect Audio"}):L.jsx("button",{onClick:()=>by("microphone"),style:{...Ct,width:"100%"},children:"Connect Microphone"}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Microphone permission required. Audio affects particles, shockwaves, bloom, and more."})]}),Oe&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px"},children:[L.jsx("div",{style:{fontSize:"11px",marginBottom:"6px",opacity:.7},children:"Frequency Levels"}),L.jsxs("div",{style:{display:"flex",gap:"8px",fontSize:"10px"},children:[L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Bass"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${Ke*100}%`,background:"#ff4444",transition:"width 0.1s"}})})]}),L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Mid"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${yn*100}%`,background:"#44ff44",transition:"width 0.1s"}})})]}),L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"High"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${ai*100}%`,background:"#4444ff",transition:"width 0.1s"}})})]})]})]}),L.jsx(ft,{label:"Beat Threshold",value:Je,onChange:wo,min:.3,max:.9,step:.05}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Mappings:",L.jsx("br",{}),"• Bass → Shockwaves + Structure pulse",L.jsx("br",{}),"• Mid → Particle turbulence",L.jsx("br",{}),"• High → Chromatic aberration",L.jsx("br",{}),"• Volume → Bloom + Wave amplitude"]})]})]}),L.jsxs(Br,{title:"Screenshot & Recording",expanded:Dr.media,onToggle:()=>Nr("media"),children:[L.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[L.jsx("button",{onClick:()=>np(2),style:{...Ct},children:"📸 Screenshot (2x)"}),L.jsx("button",{onClick:()=>np(4),style:{...Ct},children:"📸 HQ (4x)"})]}),L.jsxs("div",{style:{padding:"12px",background:ht?"rgba(255, 50, 50, 0.1)":"rgba(50, 50, 70, 0.1)",borderRadius:"4px",border:`1px solid ${ht?"rgba(255, 50, 50, 0.3)":"rgba(50, 50, 70, 0.3)"}`,marginBottom:"10px"},children:[ht?L.jsx("button",{onClick:Ry,style:{...Ct,width:"100%",background:"rgba(255, 50, 50, 0.3)",border:"1px solid rgba(255, 50, 50, 0.5)",animation:"pulse 1s infinite"},children:"⏹️ Stop Recording"}):L.jsx("button",{onClick:Cy,style:{...Ct,width:"100%",background:"rgba(255, 50, 50, 0.2)",border:"1px solid rgba(255, 50, 50, 0.4)"},children:"🔴 Start Recording"}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4",textAlign:"center"},children:ht?"Recording at 30fps...":"Capture WebM video at 30fps"})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,lineHeight:"1.4"},children:"Screenshots are saved at 2x or 4x native resolution for high quality prints and social media."})]}),L.jsx("div",{style:{padding:"15px 20px",textAlign:"center",opacity:.5,fontSize:"11px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:"Drag to orbit | Scroll to zoom | Press ? for help"}),L.jsx("div",{style:{padding:"10px 20px 20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:L.jsx("button",{onClick:()=>Ne(!0),style:{...Ct,width:"100%",background:"linear-gradient(135deg, rgba(0, 255, 170, 0.2), rgba(0, 170, 255, 0.2))",border:"1px solid rgba(0, 255, 170, 0.4)"},children:"Open Preset Gallery"})})]}),!he&&L.jsxs("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"10px",zIndex:100},children:[L.jsx("button",{onClick:()=>j(!0),style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"18px",cursor:"pointer",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Keyboard Shortcuts (?)",children:"?"}),L.jsx("button",{onClick:()=>Se(!0),style:{padding:"10px 20px",borderRadius:"20px",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"12px",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"system-ui, -apple-system, sans-serif"},title:"Show UI (H)",children:"Show UI"})]}),L.jsx("style",{children:`
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
      `})]})}const Ct={background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",padding:"8px 16px",cursor:"pointer",fontSize:"12px",transition:"all 0.2s",flex:1};function Br({title:t,expanded:e,onToggle:n,children:i}){return L.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[L.jsxs("div",{onClick:n,style:{padding:"12px 20px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255, 255, 255, 0.03)"},children:[L.jsx("span",{style:{fontWeight:"500",letterSpacing:"0.5px"},children:t}),L.jsx("span",{style:{opacity:.5},children:e?"−":"+"})]}),e&&L.jsx("div",{style:{padding:"10px 20px"},children:i})]})}function a0({title:t,expanded:e,onToggle:n,onDelete:i,children:r}){return L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"4px",marginBottom:"8px",overflow:"hidden"},children:[L.jsxs("div",{style:{padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:n,children:[L.jsx("span",{style:{fontSize:"12px",textTransform:"capitalize"},children:t}),L.jsxs("div",{style:{display:"flex",gap:"8px"},children:[L.jsx("span",{style:{opacity:.5,fontSize:"12px"},children:e?"−":"+"}),L.jsx("button",{onClick:s=>{s.stopPropagation(),i()},style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]})]}),e&&L.jsx("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:r})]})}function ft({label:t,value:e,onChange:n,min:i,max:r,step:s}){return L.jsxs("div",{style:{marginBottom:"12px"},children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",fontSize:"11px"},children:[L.jsx("span",{style:{opacity:.7},children:t}),L.jsx("span",{style:{opacity:.5},children:typeof e=="number"?e.toFixed(2):e})]}),L.jsx("input",{type:"range",value:e,onChange:o=>n(parseFloat(o.target.value)),min:i,max:r,step:s,style:{width:"100%",height:"4px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"2px",appearance:"none",cursor:"pointer"}})]})}function or({label:t,value:e,onChange:n,options:i}){return L.jsxs("div",{style:{marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"11px",opacity:.7,marginBottom:"4px"},children:t}),L.jsx("select",{value:e,onChange:r=>n(r.target.value),style:{width:"100%",padding:"6px 10px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",fontSize:"12px",cursor:"pointer"},children:i.map(r=>L.jsx("option",{value:r,style:{background:"#1a1a2e"},children:r},r))})]})}function Fi({label:t,checked:e,onChange:n}){return L.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",cursor:"pointer",fontSize:"12px"},children:[L.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{cursor:"pointer"}}),L.jsx("span",{style:{opacity:.8},children:t})]})}const c2=Ef.createRoot(document.getElementById("root"));c2.render(L.jsx(l2,{}));
