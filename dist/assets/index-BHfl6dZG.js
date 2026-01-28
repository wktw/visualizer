(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var gg={exports:{}},gc={},vg={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),E_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),Ed=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=Ed&&t[Ed]||t["@@iterator"],typeof t=="function"?t:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,yg={};function so(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||_g}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sg(){}Sg.prototype=so.prototype;function rh(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||_g}var sh=rh.prototype=new Sg;sh.constructor=rh;xg(sh,so.prototype);sh.isPureReactComponent=!0;var wd=Array.isArray,Mg=Object.prototype.hasOwnProperty,oh={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:oh.current}}function I_(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function N_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Td=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N_(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Hc(o,0):i,wd(r)?(n="",t!=null&&(n=t.replace(Td,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(ah(r)&&(r=I_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Td,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Hc(s,a);o+=Tl(s,e,n,l,r)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Hc(s,a++),o+=Tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mn={current:null},Al={transition:null},F_={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:oh};function Tg(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=so;rt.Fragment=w_;rt.Profiler=A_;rt.PureComponent=rh;rt.StrictMode=T_;rt.Suspense=P_;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;rt.act=Tg;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};rt.createElement=wg;rt.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:R_,render:t}};rt.isValidElement=ah;rt.lazy=function(t){return{$$typeof:D_,_payload:{_status:-1,_result:t},_init:O_}};rt.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};rt.unstable_act=Tg;rt.useCallback=function(t,e){return Mn.current.useCallback(t,e)};rt.useContext=function(t){return Mn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return Mn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return Mn.current.useEffect(t,e)};rt.useId=function(){return Mn.current.useId()};rt.useImperativeHandle=function(t,e,n){return Mn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return Mn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return Mn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return Mn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return Mn.current.useReducer(t,e,n)};rt.useRef=function(t){return Mn.current.useRef(t)};rt.useState=function(t){return Mn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return Mn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return Mn.current.useTransition()};rt.version="18.3.1";vg.exports=rt;var Q=vg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=Q,k_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,V_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G_={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:t,key:s,ref:o,props:r,_owner:V_.current}}gc.Fragment=B_;gc.jsx=Ag;gc.jsxs=Ag;gg.exports=gc;var F=gg.exports,Zu={},bg={exports:{}},Gn={},Cg={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,B){var W=I.length;I.push(B);e:for(;0<W;){var J=W-1>>>1,ne=I[J];if(0<r(ne,B))I[J]=B,I[W]=ne,W=J;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var B=I[0],W=I.pop();if(W!==B){I[0]=W;e:for(var J=0,ne=I.length,K=ne>>>1;J<K;){var ee=2*(J+1)-1,pe=I[ee],Me=ee+1,we=I[Me];if(0>r(pe,W))Me<ne&&0>r(we,pe)?(I[J]=we,I[Me]=W,J=Me):(I[J]=pe,I[ee]=W,J=ee);else if(Me<ne&&0>r(we,W))I[J]=we,I[Me]=W,J=Me;else break e}}return B}function r(I,B){var W=I.sortIndex-B.sortIndex;return W!==0?W:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=I)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function y(I){if(x=!1,g(I),!_)if(n(l)!==null)_=!0,q(b);else{var B=n(c);B!==null&&Z(y,B.startTime-I)}}function b(I,B){_=!1,x&&(x=!1,u(D),D=-1),m=!0;var W=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||I&&!z());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var ne=J(h.expirationTime<=B);B=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),g(B)}else i(l);h=n(l)}if(h!==null)var K=!0;else{var ee=n(c);ee!==null&&Z(y,ee.startTime-B),K=!1}return K}finally{h=null,d=W,m=!1}}var E=!1,T=null,D=-1,S=5,w=-1;function z(){return!(t.unstable_now()-w<S)}function k(){if(T!==null){var I=t.unstable_now();w=I;var B=!0;try{B=T(!0,I)}finally{B?ie():(E=!1,T=null)}}else E=!1}var ie;if(typeof v=="function")ie=function(){v(k)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=k,ie=function(){H.postMessage(null)}}else ie=function(){p(k,0)};function q(I){T=I,E||(E=!0,ie())}function Z(I,B){D=p(function(){I(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,q(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var W=d;d=B;try{return I()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=d;d=I;try{return B()}finally{d=W}},t.unstable_scheduleCallback=function(I,B,W){var J=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,I){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=W+ne,I={id:f++,callback:B,priorityLevel:I,startTime:W,expirationTime:ne,sortIndex:-1},W>J?(I.sortIndex=W,e(c,I),n(l)===null&&I===n(c)&&(x?(u(D),D=-1):x=!0,Z(y,W-J))):(I.sortIndex=ne,e(l,I),_||m||(_=!0,q(b))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var B=d;return function(){var W=d;d=B;try{return I.apply(this,arguments)}finally{d=W}}}})(Rg);Cg.exports=Rg;var W_=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=Q,Vn=W_;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,Ko={};function Zr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Ko[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,j_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},bd={};function Y_(t){return Ju.call(bd,t)?!0:Ju.call(Ad,t)?!1:j_.test(t)?bd[t]=!0:(Ad[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function En(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new En(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new En(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new En(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new En(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new En(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new En(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new En(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new En(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new En(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,ch);ln[e]=new En(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,ch);ln[e]=new En(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,ch);ln[e]=new En(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new En(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new En("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new En(t,1,!1,t.toLowerCase(),null,!0,!0)});function uh(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Es=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Ug=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Vc;function Po(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Gc=!1;function Wc(t,e){if(!t||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Po(t):""}function $_(t){switch(t.tag){case 5:return Po(t.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Es:return"Portal";case ef:return"Profiler";case fh:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z_(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=Z_(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&uh(t,"checked",e,!1)}function of(t,e){Og(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ld(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Lo(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Fg(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,ks=null,Bs=null;function Ud(t){if(t=va(t)){if(typeof df!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Sc(e),df(t.stateNode,t.type,e))}}function Vg(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function Gg(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,Ud(t),e)for(t=0;t<e.length;t++)Ud(e[t])}}function Wg(t,e){return t(e)}function Xg(){}var Xc=!1;function jg(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return Wg(t,e,n)}finally{Xc=!1,(ks!==null||Bs!==null)&&(Xg(),Gg())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var pf=!1;if(Bi)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){pf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{pf=!1}function tx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Oo=!1,kl=null,Bl=!1,mf=null,nx={onError:function(t){Oo=!0,kl=t}};function ix(t,e,n,i,r,s,o,a,l){Oo=!1,kl=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,s,o,a,l){if(ix.apply(this,arguments),Oo){if(Oo){var c=kl;Oo=!1,kl=null}else throw Error(ue(198));Bl||(Bl=!0,mf=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Id(t){if(Jr(t)!==t)throw Error(ue(188))}function sx(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Id(r),t;if(s===i)return Id(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function qg(t){return t=sx(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var $g=Vn.unstable_scheduleCallback,Nd=Vn.unstable_cancelCallback,ox=Vn.unstable_shouldYield,ax=Vn.unstable_requestPaint,Ut=Vn.unstable_now,lx=Vn.unstable_getCurrentPriorityLevel,mh=Vn.unstable_ImmediatePriority,Qg=Vn.unstable_UserBlockingPriority,Hl=Vn.unstable_NormalPriority,cx=Vn.unstable_LowPriority,Zg=Vn.unstable_IdlePriority,vc=null,Mi=null;function ux(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:dx,fx=Math.log,hx=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(fx(t)/hx|0)|0}var Na=64,Oa=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=n&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jg(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function e0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t0,vh,n0,i0,r0,vf=!1,Fa=[],lr=null,cr=null,ur=null,Zo=new Map,Jo=new Map,ir=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Od(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return lr=_o(lr,t,e,n,i,r),!0;case"dragenter":return cr=_o(cr,t,e,n,i,r),!0;case"mouseover":return ur=_o(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,_o(Zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,_o(Jo.get(s)||null,t,e,n,i,r)),!0}return!1}function s0(t){var e=zr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Yg(n),e!==null){t.blockedOn=e,r0(t.priority,function(){n0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hf=i,n.target.dispatchEvent(i),hf=null}else return e=va(n),e!==null&&vh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fd(t,e,n){bl(t)&&n.delete(e)}function xx(){vf=!1,lr!==null&&bl(lr)&&(lr=null),cr!==null&&bl(cr)&&(cr=null),ur!==null&&bl(ur)&&(ur=null),Zo.forEach(Fd),Jo.forEach(Fd)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,xx)))}function ea(t){function e(r){return xo(r,t)}if(0<Fa.length){xo(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&xo(lr,t),cr!==null&&xo(cr,t),ur!==null&&xo(ur,t),Zo.forEach(e),Jo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&ir.shift()}var Hs=Xi.ReactCurrentBatchConfig,Gl=!0;function yx(t,e,n,i){var r=ht,s=Hs.transition;Hs.transition=null;try{ht=1,_h(t,e,n,i)}finally{ht=r,Hs.transition=s}}function Sx(t,e,n,i){var r=ht,s=Hs.transition;Hs.transition=null;try{ht=4,_h(t,e,n,i)}finally{ht=r,Hs.transition=s}}function _h(t,e,n,i){if(Gl){var r=_f(t,e,n,i);if(r===null)nu(t,e,i,Wl,n),Od(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(Od(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&t0(s),s=_f(t,e,n,i),s===null&&nu(t,e,i,Wl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nu(t,e,i,null,n)}}var Wl=null;function _f(t,e,n,i){if(Wl=null,t=ph(i),t=zr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wl=t,null}function o0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case mh:return 1;case Qg:return 4;case Hl:case cx:return 16;case Zg:return 536870912;default:return 16}default:return 16}}var sr=null,xh=null,Cl=null;function a0(){if(Cl)return Cl;var t,e=xh,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function zd(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:zd,this.isPropagationStopped=zd,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=Wn(oo),ga=Rt({},oo,{view:0,detail:0}),Mx=Wn(ga),Yc,qc,yo,_c=Rt({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Yc=t.screenX-yo.screenX,qc=t.screenY-yo.screenY):qc=Yc=0,yo=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),kd=Wn(_c),Ex=Rt({},_c,{dataTransfer:0}),wx=Wn(Ex),Tx=Rt({},ga,{relatedTarget:0}),Kc=Wn(Tx),Ax=Rt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=Wn(Ax),Cx=Rt({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=Wn(Cx),Px=Rt({},oo,{data:0}),Bd=Wn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function Sh(){return Ix}var Nx=Rt({},ga,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=Wn(Nx),Fx=Rt({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Wn(Fx),zx=Rt({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),kx=Wn(zx),Bx=Rt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Wn(Bx),Vx=Rt({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=Wn(Vx),Wx=[9,13,27,32],Mh=Bi&&"CompositionEvent"in window,Fo=null;Bi&&"documentMode"in document&&(Fo=document.documentMode);var Xx=Bi&&"TextEvent"in window&&!Fo,l0=Bi&&(!Mh||Fo&&8<Fo&&11>=Fo),Vd=" ",Gd=!1;function c0(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function jx(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(Gd=!0,Vd);case"textInput":return t=e.data,t===Vd&&Gd?null:t;default:return null}}function Yx(t,e){if(Ts)return t==="compositionend"||!Mh&&c0(t,e)?(t=a0(),Cl=xh=sr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l0&&e.locale!=="ko"?null:e.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qx[t.type]:e==="textarea"}function f0(t,e,n,i){Vg(i),e=Xl(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zo=null,ta=null;function Kx(t){M0(t,0)}function xc(t){var e=Cs(t);if(Ng(e))return t}function $x(t,e){if(t==="change")return e}var h0=!1;if(Bi){var $c;if(Bi){var Qc="oninput"in document;if(!Qc){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),Qc=typeof Xd.oninput=="function"}$c=Qc}else $c=!1;h0=$c&&(!document.documentMode||9<document.documentMode)}function jd(){zo&&(zo.detachEvent("onpropertychange",d0),ta=zo=null)}function d0(t){if(t.propertyName==="value"&&xc(ta)){var e=[];f0(e,ta,t,ph(t)),jg(Kx,e)}}function Qx(t,e,n){t==="focusin"?(jd(),zo=e,ta=n,zo.attachEvent("onpropertychange",d0)):t==="focusout"&&jd()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ta)}function Jx(t,e){if(t==="click")return xc(e)}function ey(t,e){if(t==="input"||t==="change")return xc(e)}function ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:ty;function na(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,e){var n=Yd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function p0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m0(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ny(t){var e=m0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(i!==null&&Eh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qd(n,s);var o=qd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iy=Bi&&"documentMode"in document&&11>=document.documentMode,As=null,xf=null,ko=null,yf=!1;function Kd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||As==null||As!==zl(i)||(i=As,"selectionStart"in i&&Eh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&na(ko,i)||(ko=i,i=Xl(xf,"onSelect"),0<i.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Zc={},g0={};Bi&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function yc(t){if(Zc[t])return Zc[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g0)return Zc[t]=e[n];return t}var v0=yc("animationend"),_0=yc("animationiteration"),x0=yc("animationstart"),y0=yc("transitionend"),S0=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){S0.set(t,e),Zr(e,[t])}for(var Jc=0;Jc<$d.length;Jc++){var eu=$d[Jc],ry=eu.toLowerCase(),sy=eu[0].toUpperCase()+eu.slice(1);Mr(ry,"on"+sy)}Mr(v0,"onAnimationEnd");Mr(_0,"onAnimationIteration");Mr(x0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(y0,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Qd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function M0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qd(r,a,c),s=l}}}if(Bl)throw t=mf,Bl=!1,mf=null,t}function yt(t,e){var n=e[Tf];n===void 0&&(n=e[Tf]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function tu(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Ba]){t[Ba]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,tu("selectionchange",!1,e))}}function E0(t,e,n,i){switch(o0(e)){case 1:var r=yx;break;case 4:r=Sx;break;default:r=_h}n=r.bind(null,e,n,t),r=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jg(function(){var c=s,f=ph(n),h=[];e:{var d=S0.get(t);if(d!==void 0){var m=yh,_=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":m=Ox;break;case"focusin":_="focus",m=Kc;break;case"focusout":_="blur",m=Kc;break;case"beforeblur":case"afterblur":m=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kx;break;case v0:case _0:case x0:m=bx;break;case y0:m=Hx;break;case"scroll":m=Mx;break;case"wheel":m=Gx;break;case"copy":case"cut":case"paste":m=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Hd}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=Qo(v,u),y!=null&&x.push(ra(v,y,g)))),p)break;v=v.return}0<x.length&&(d=new m(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==hf&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[Hi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?zr(_):null,_!==null&&(p=Jr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=kd,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hd,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?d:Cs(m),g=_==null?d:Cs(_),d=new x(y,v+"leave",m,n,f),d.target=p,d.relatedTarget=g,y=null,zr(f)===c&&(x=new x(u,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,y=x),p=y,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=rs(g))v++;for(g=0,y=u;y;y=rs(y))g++;for(;0<v-g;)x=rs(x),v--;for(;0<g-v;)u=rs(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=rs(x),u=rs(u)}x=null}else x=null;m!==null&&Zd(h,d,m,x,!1),_!==null&&p!==null&&Zd(h,p,_,x,!0)}}e:{if(d=c?Cs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=$x;else if(Wd(d))if(h0)b=ey;else{b=Zx;var E=Qx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Jx);if(b&&(b=b(t,c))){f0(h,b,n,f);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&af(d,"number",d.value)}switch(E=c?Cs(c):window,t){case"focusin":(Wd(E)||E.contentEditable==="true")&&(As=E,xf=c,ko=null);break;case"focusout":ko=xf=As=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Kd(h,n,f);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Kd(h,n,f)}var T;if(Mh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ts?c0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(l0&&n.locale!=="ko"&&(Ts||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ts&&(T=a0()):(sr=f,xh="value"in sr?sr.value:sr.textContent,Ts=!0)),E=Xl(c,D),0<E.length&&(D=new Bd(D,t,null,n,f),h.push({event:D,listeners:E}),T?D.data=T:(T=u0(n),T!==null&&(D.data=T)))),(T=Xx?jx(t,n):Yx(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(f=new Bd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}M0(h,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(ra(t,s,r)),s=Qo(t,e),s!=null&&i.push(ra(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(n,s),l!=null&&o.unshift(ra(n,l,a))):r||(l=Qo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ay=/\r\n?/g,ly=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(ly,"")}function Ha(t,e,n){if(e=Jd(e),Jd(t)!==e&&n)throw Error(ue(425))}function jl(){}var Sf=null,Mf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(fy)}:wf;function fy(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ea(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),yi="__reactFiber$"+ao,sa="__reactProps$"+ao,Hi="__reactContainer$"+ao,Tf="__reactEvents$"+ao,hy="__reactListeners$"+ao,dy="__reactHandles$"+ao;function zr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[yi])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[yi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Sc(t){return t[sa]||null}var Af=[],Rs=-1;function Er(t){return{current:t}}function Mt(t){0>Rs||(t.current=Af[Rs],Af[Rs]=null,Rs--)}function xt(t,e){Rs++,Af[Rs]=t.current,t.current=e}var xr={},vn=Er(xr),Rn=Er(!1),jr=xr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(t){return t=t.childContextTypes,t!=null}function Yl(){Mt(Rn),Mt(vn)}function np(t,e,n){if(vn.current!==xr)throw Error(ue(168));xt(vn,e),xt(Rn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Q_(t)||"Unknown",r));return Rt({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,jr=vn.current,xt(vn,t),xt(Rn,Rn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=w0(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,Mt(Rn),Mt(vn),xt(vn,t)):Mt(Rn),xt(Rn,n)}var Ui=null,Mc=!1,ru=!1;function T0(t){Ui===null?Ui=[t]:Ui.push(t)}function py(t){Mc=!0,T0(t)}function wr(){if(!ru&&Ui!==null){ru=!0;var t=0,e=ht;try{var n=Ui;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Mc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),$g(mh,wr),r}finally{ht=e,ru=!1}}return null}var Ps=[],Ls=0,Kl=null,$l=0,Yn=[],qn=0,Yr=null,Ii=1,Ni="";function Ur(t,e){Ps[Ls++]=$l,Ps[Ls++]=Kl,Kl=t,$l=e}function A0(t,e,n){Yn[qn++]=Ii,Yn[qn++]=Ni,Yn[qn++]=Yr,Yr=t;var i=Ii;t=Ni;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-pi(e)+r|n<<r|i,Ni=s+t}else Ii=1<<s|n<<r|i,Ni=t}function wh(t){t.return!==null&&(Ur(t,1),A0(t,1,0))}function Th(t){for(;t===Kl;)Kl=Ps[--Ls],Ps[Ls]=null,$l=Ps[--Ls],Ps[Ls]=null;for(;t===Yr;)Yr=Yn[--qn],Yn[qn]=null,Ni=Yn[--qn],Yn[qn]=null,Ii=Yn[--qn],Yn[qn]=null}var Hn=null,Bn=null,wt=!1,di=null;function b0(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Ii,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Bn=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(wt){var e=Bn;if(e){var n=e;if(!rp(t,e)){if(bf(t))throw Error(ue(418));e=fr(n.nextSibling);var i=Hn;e&&rp(t,e)?b0(i,n):(t.flags=t.flags&-4097|2,wt=!1,Hn=t)}}else{if(bf(t))throw Error(ue(418));t.flags=t.flags&-4097|2,wt=!1,Hn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Va(t){if(t!==Hn)return!1;if(!wt)return sp(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=Bn)){if(bf(t))throw C0(),Error(ue(418));for(;e;)b0(t,e),e=fr(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Hn?fr(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=Bn;t;)t=fr(t.nextSibling)}function qs(){Bn=Hn=null,wt=!1}function Ah(t){di===null?di=[t]:di.push(t)}var my=Xi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Ga(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function R0(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=mr(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,y){return v===null||v.tag!==6?(v=fu(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var b=g.type;return b===ws?f(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&op(b)===v.type)?(y=r(v,g.props),y.ref=So(u,v,g),y.return=u,y):(y=Ol(g.type,g.key,g.props,null,u.mode,y),y.ref=So(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=hu(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,y,b){return v===null||v.tag!==7?(v=Vr(g,u.mode,y,b),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fu(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return g=Ol(v.type,v.key,v.props,null,u.mode,g),g.ref=So(u,null,v),g.return=u,g;case Es:return v=hu(v,u.mode,g),v.return=u,v;case tr:var y=v._init;return h(u,y(v._payload),g)}if(Lo(v)||go(v))return v=Vr(v,u.mode,g,null),v.return=u,v;Ga(u,v)}return null}function d(u,v,g,y){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Da:return g.key===b?l(u,v,g,y):null;case Es:return g.key===b?c(u,v,g,y):null;case tr:return b=g._init,d(u,v,b(g._payload),y)}if(Lo(g)||go(g))return b!==null?null:f(u,v,g,y,null);Ga(u,g)}return null}function m(u,v,g,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,a(v,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,b);case Es:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,b);case tr:var E=y._init;return m(u,v,g,E(y._payload),b)}if(Lo(y)||go(y))return u=u.get(g)||null,f(v,u,y,b,null);Ga(v,y)}return null}function _(u,v,g,y){for(var b=null,E=null,T=v,D=v=0,S=null;T!==null&&D<g.length;D++){T.index>D?(S=T,T=null):S=T.sibling;var w=d(u,T,g[D],y);if(w===null){T===null&&(T=S);break}t&&T&&w.alternate===null&&e(u,T),v=s(w,v,D),E===null?b=w:E.sibling=w,E=w,T=S}if(D===g.length)return n(u,T),wt&&Ur(u,D),b;if(T===null){for(;D<g.length;D++)T=h(u,g[D],y),T!==null&&(v=s(T,v,D),E===null?b=T:E.sibling=T,E=T);return wt&&Ur(u,D),b}for(T=i(u,T);D<g.length;D++)S=m(T,u,D,g[D],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?D:S.key),v=s(S,v,D),E===null?b=S:E.sibling=S,E=S);return t&&T.forEach(function(z){return e(u,z)}),wt&&Ur(u,D),b}function x(u,v,g,y){var b=go(g);if(typeof b!="function")throw Error(ue(150));if(g=b.call(g),g==null)throw Error(ue(151));for(var E=b=null,T=v,D=v=0,S=null,w=g.next();T!==null&&!w.done;D++,w=g.next()){T.index>D?(S=T,T=null):S=T.sibling;var z=d(u,T,w.value,y);if(z===null){T===null&&(T=S);break}t&&T&&z.alternate===null&&e(u,T),v=s(z,v,D),E===null?b=z:E.sibling=z,E=z,T=S}if(w.done)return n(u,T),wt&&Ur(u,D),b;if(T===null){for(;!w.done;D++,w=g.next())w=h(u,w.value,y),w!==null&&(v=s(w,v,D),E===null?b=w:E.sibling=w,E=w);return wt&&Ur(u,D),b}for(T=i(u,T);!w.done;D++,w=g.next())w=m(T,u,D,w.value,y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?D:w.key),v=s(w,v,D),E===null?b=w:E.sibling=w,E=w);return t&&T.forEach(function(k){return e(u,k)}),wt&&Ur(u,D),b}function p(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===ws&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Da:e:{for(var b=g.key,E=v;E!==null;){if(E.key===b){if(b=g.type,b===ws){if(E.tag===7){n(u,E.sibling),v=r(E,g.props.children),v.return=u,u=v;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&op(b)===E.type){n(u,E.sibling),v=r(E,g.props),v.ref=So(u,E,g),v.return=u,u=v;break e}n(u,E);break}else e(u,E);E=E.sibling}g.type===ws?(v=Vr(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=Ol(g.type,g.key,g.props,null,u.mode,y),y.ref=So(u,v,g),y.return=u,u=y)}return o(u);case Es:e:{for(E=g.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=hu(g,u.mode,y),v.return=u,u=v}return o(u);case tr:return E=g._init,p(u,v,E(g._payload),y)}if(Lo(g))return _(u,v,g,y);if(go(g))return x(u,v,g,y);Ga(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=fu(g,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return p}var Ks=R0(!0),P0=R0(!1),Ql=Er(null),Zl=null,Ds=null,bh=null;function Ch(){bh=Ds=Zl=null}function Rh(t){var e=Ql.current;Mt(Ql),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){Zl=t,bh=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ii(t){var e=t._currentValue;if(bh!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Zl===null)throw Error(ue(308));Ds=t,Zl.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var kr=null;function Ph(t){kr===null?kr=[t]:kr.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gh(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=Rt({},h,d);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=h}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var _a={},Ei=Er(_a),oa=Er(_a),aa=Er(_a);function Br(t){if(t===_a)throw Error(ue(174));return t}function Dh(t,e){switch(xt(aa,e),xt(oa,t),xt(Ei,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}Mt(Ei),xt(Ei,e)}function $s(){Mt(Ei),Mt(oa),Mt(aa)}function U0(t){Br(aa.current);var e=Br(Ei.current),n=cf(e,t.type);e!==n&&(xt(oa,t),xt(Ei,n))}function Uh(t){oa.current===t&&(Mt(Ei),Mt(oa))}var bt=Er(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function Ih(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Ll=Xi.ReactCurrentDispatcher,ou=Xi.ReactCurrentBatchConfig,qr=0,Ct=null,Vt=null,Zt=null,tc=!1,Bo=!1,la=0,gy=0;function un(){throw Error(ue(321))}function Nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Oh(t,e,n,i,r,s){if(qr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?yy:Sy,t=n(i,r),Bo){s=0;do{if(Bo=!1,la=0,25<=s)throw Error(ue(301));s+=1,Zt=Vt=null,e.updateQueue=null,Ll.current=My,t=n(i,r)}while(Bo)}if(Ll.current=nc,e=Vt!==null&&Vt.next!==null,qr=0,Zt=Vt=Ct=null,tc=!1,e)throw Error(ue(300));return t}function Fh(){var t=la!==0;return la=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ct.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ri(){if(Vt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Zt===null?Ct.memoizedState:Zt.next;if(e!==null)Zt=e,Vt=t;else{if(t===null)throw Error(ue(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Zt===null?Ct.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ca(t,e){return typeof e=="function"?e(t):e}function au(t){var e=ri(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((qr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=f,Kr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=ri(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function I0(){}function N0(t,e){var n=Ct,i=ri(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,zh(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,ua(9,F0.bind(null,n,i,r,e),void 0,null),tn===null)throw Error(ue(349));qr&30||O0(n,e,r)}return r}function O0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,i){e.value=n,e.getSnapshot=i,k0(e)&&B0(t)}function z0(t,e,n){return n(function(){k0(e)&&B0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function B0(t){var e=Vi(t,1);e!==null&&mi(e,t,1,-1)}function cp(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=xy.bind(null,Ct,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H0(){return ri().memoizedState}function Dl(t,e,n,i){var r=_i();Ct.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Ec(t,e,n,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&Nh(i,o.deps)){r.memoizedState=ua(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=ua(1|e,n,s,i)}function up(t,e){return Dl(8390656,8,t,e)}function zh(t,e){return Ec(2048,8,t,e)}function V0(t,e){return Ec(4,2,t,e)}function G0(t,e){return Ec(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,W0.bind(null,e,t),n)}function kh(){}function j0(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return qr&21?(gi(n,e)||(n=Jg(),Ct.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function vy(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=ou.transition;ou.transition={};try{t(!1),e()}finally{ht=n,ou.transition=i}}function K0(){return ri().memoizedState}function _y(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$0(t))Q0(e,n);else if(n=L0(t,e,n,i),n!==null){var r=Sn();mi(n,t,i,r),Z0(n,e,i)}}function xy(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($0(t))Q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=Sn(),mi(n,t,i,r),Z0(n,e,i))}}function $0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Q0(t,e){Bo=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gh(t,n)}}var nc={readContext:ii,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},yy={readContext:ii,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:ii,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_y.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:kh,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=vy.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=_i();if(wt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),tn===null)throw Error(ue(349));qr&30||O0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(z0.bind(null,i,s,t),[t]),i.flags|=2048,ua(9,F0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=tn.identifierPrefix;if(wt){var n=Ni,i=Ii;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sy={readContext:ii,useCallback:j0,useContext:ii,useEffect:zh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:Y0,useReducer:au,useRef:H0,useState:function(){return au(ca)},useDebugValue:kh,useDeferredValue:function(t){var e=ri();return q0(e,Vt.memoizedState,t)},useTransition:function(){var t=au(ca)[0],e=ri().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:N0,useId:K0,unstable_isNewReconciler:!1},My={readContext:ii,useCallback:j0,useContext:ii,useEffect:zh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:Y0,useReducer:lu,useRef:H0,useState:function(){return lu(ca)},useDebugValue:kh,useDeferredValue:function(t){var e=ri();return Vt===null?e.memoizedState=t:q0(e,Vt.memoizedState,t)},useTransition:function(){var t=lu(ca)[0],e=ri().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:N0,useId:K0,unstable_isNewReconciler:!1};function fi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=pr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(mi(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=pr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(mi(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=pr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(mi(e,t,i,n),Pl(e,t,i))}};function fp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,i)||!na(r,s):!0}function J0(t,e,n){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=Pn(e)?jr:vn.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Lh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=Pn(e)?jr:vn.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),Jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=$_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ey=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){rc||(rc=!0,Vf=i),Df(t,e)},n}function tv(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fy.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var wy=Xi.ReactCurrentOwner,Cn=!1;function xn(t,e,n,i){e.child=t===null?P0(e,null,n,i):Ks(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Oh(t,e,n,i,s,r),n=Fh(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(wt&&n&&wh(e),e.flags|=1,xn(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(na(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return Uf(t,e,n,i,r)}function iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Is,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Is,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Is,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Is,Fn),Fn|=i;return xn(t,e,r,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=Pn(n)?jr:vn.current;return s=Ys(e,s),Vs(e,r),n=Oh(t,e,n,i,s,r),i=Fh(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(wt&&i&&wh(e),e.flags|=1,xn(t,e,n,r),e.child)}function _p(t,e,n,i,r){if(Pn(n)){var s=!0;ql(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Ul(t,e),J0(e,n,i),Lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=Pn(n)?jr:vn.current,c=Ys(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hp(e,o,i,c),nr=!1;var d=e.memoizedState;o.state=d,Jl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Rn.current||nr?(typeof f=="function"&&(Pf(e,n,f,i),l=e.memoizedState),(a=nr||fp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fi(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=Pn(n)?jr:vn.current,l=Ys(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hp(e,o,i,l),nr=!1,d=e.memoizedState,o.state=d,Jl(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||Rn.current||nr?(typeof m=="function"&&(Pf(e,n,m,i),_=e.memoizedState),(c=nr||fp(e,n,c,i,d,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return If(t,e,n,i,s,r)}function If(t,e,n,i,r,s){rv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ip(e,n,!1),Gi(t,e,s);i=e.stateNode,wy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):xn(t,e,a,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Dh(t,e.containerInfo)}function xp(t,e,n,i,r){return qs(),Ah(r),e.flags|=256,xn(t,e,n,i),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(bt,r&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Nf,t):Bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bh(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,i){return i!==null&&Ah(i),Ks(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cu(Error(ue(422))),Wa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Nf,s);if(!(e.mode&1))return Wa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=cu(s,i,void 0),Wa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Cn||a){if(i=tn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),mi(i,t,r,-1))}return jh(),i=cu(Error(ue(421))),Wa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=fr(r.nextSibling),Hn=e,wt=!0,di=null,t!==null&&(Yn[qn++]=Ii,Yn[qn++]=Ni,Yn[qn++]=Yr,Ii=t.id,Ni=t.overflow,Yr=e),e=Bh(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rf(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function av(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ay(t,e,n){switch(e.tag){case 3:sv(e),qs();break;case 5:U0(e);break;case 1:Pn(e.type)&&ql(e);break;case 4:Dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(xt(bt,bt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);xt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return Gi(t,e,n)}var lv,Ff,cv,uv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(Ei.current);var s=null;switch(n){case"input":r=sf(t,r),i=sf(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=lf(t,r),i=lf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jl)}uf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function by(t,e,n){var i=e.pendingProps;switch(Th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Pn(e.type)&&Yl(),fn(e),null;case 3:return i=e.stateNode,$s(),Mt(Rn),Mt(vn),Ih(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(Xf(di),di=null))),Ff(t,e),fn(e),null;case 5:Uh(e);var r=Br(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return fn(e),null}if(t=Br(Ei.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[sa]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)yt(Uo[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Rd(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Ld(i,s),yt("invalid",i)}uf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(n){case"input":Ua(i),Pd(i,s,!0);break;case"textarea":Ua(i),Dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[sa]=i,lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)yt(Uo[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Rd(t,i),r=sf(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":Ld(t,i),r=lf(t,i),yt("invalid",t);break;default:r=i}uf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&uh(t,s,l,o))}switch(n){case"input":Ua(t),Pd(t,i,!1);break;case"textarea":Ua(t),Dd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Br(aa.current),Br(Ei.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:Ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return fn(e),null;case 13:if(Mt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Bn!==null&&e.mode&1&&!(e.flags&128))C0(),qs(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[yi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else di!==null&&(Xf(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Gt===0&&(Gt=3):jh())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return $s(),Ff(t,e),t===null&&ia(e.stateNode.containerInfo),fn(e),null;case 10:return Rh(e.type._context),fn(e),null;case 17:return Pn(e.type)&&Yl(),fn(e),null;case 19:if(Mt(bt),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>Zs&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!wt)return fn(e),null}else 2*Ut()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=bt.current,xt(bt,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return Xh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Cy(t,e){switch(Th(e),e.tag){case 1:return Pn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Mt(Rn),Mt(vn),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(Mt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(bt),null;case 4:return $s(),null;case 10:return Rh(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var Xa=!1,mn=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function zf(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Sp=!1;function Py(t,e){if(Sf=Gl,t=m0(),Eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},Gl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:fi(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){Pt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=Sp,Sp=!1,_}function Ho(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,n,s)}r=r.next}while(r!==i)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[sa],delete e[Tf],delete e[hy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var rn=null,hi=!1;function qi(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:mn||Us(n,e);case 6:var i=rn,r=hi;rn=null,qi(t,e,n),rn=i,hi=r,rn!==null&&(hi?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(hi?(t=rn,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),ea(t)):iu(rn,n.stateNode));break;case 4:i=rn,r=hi,rn=n.stateNode.containerInfo,hi=!0,qi(t,e,n),rn=i,hi=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!mn&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(mn=(i=mn)||n.memoizedState!==null,qi(t,e,n),mn=i):qi(t,e,n);break;default:qi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ry),e.forEach(function(i){var r=ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,hi=!1;break e;case 3:rn=a.stateNode.containerInfo,hi=!0;break e;case 4:rn=a.stateNode.containerInfo,hi=!0;break e}a=a.return}if(rn===null)throw Error(ue(160));dv(s,o,r),rn=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(e,t),vi(t),i&4){try{Ho(3,t,t.return),Tc(3,t)}catch(x){Pt(t,t.return,x)}try{Ho(5,t,t.return)}catch(x){Pt(t,t.return,x)}}break;case 1:oi(e,t),vi(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(oi(e,t),vi(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{$o(r,"")}catch(x){Pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Og(r,s),ff(a,o);var c=ff(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Hg(r,h):f==="dangerouslySetInnerHTML"?kg(r,h):f==="children"?$o(r,h):uh(r,f,h,c)}switch(a){case"input":of(r,s);break;case"textarea":Fg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(x){Pt(t,t.return,x)}}break;case 6:if(oi(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Pt(t,t.return,x)}}break;case 3:if(oi(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(x){Pt(t,t.return,x)}break;case 4:oi(e,t),vi(t);break;case 13:oi(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gh=Ut())),i&4&&Ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(mn=(c=mn)||f,oi(e,t),mn=c):oi(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(h=Se=f;Se!==null;){switch(d=Se,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ho(4,d,d.return);break;case 1:Us(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Pt(i,n,x)}}break;case 5:Us(d,d.return);break;case 22:if(d.memoizedState!==null){Tp(h);continue}}m!==null?(m.return=d,Se=m):Tp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(x){Pt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Pt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:oi(e,t),vi(t),i&4&&Ep(t);break;case 21:break;default:oi(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=Mp(t);Hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mp(t);Bf(t,a,o);break;default:throw Error(ue(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ly(t,e,n){Se=t,mv(t)}function mv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mn;a=Xa;var c=mn;if(Xa=o,(mn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Ap(r):l!==null?(l.return=o,Se=l):Ap(r);for(;s!==null;)Se=s,mv(s),s=s.sibling;Se=r,Xa=a,mn=c}wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):wp(t)}}function wp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}mn||e.flags&512&&kf(e)}catch(d){Pt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Tp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Ap(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{kf(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{kf(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Dy=Math.ceil,ic=Xi.ReactCurrentDispatcher,Hh=Xi.ReactCurrentOwner,ti=Xi.ReactCurrentBatchConfig,lt=0,tn=null,kt=null,an=0,Fn=0,Is=Er(0),Gt=0,fa=null,Kr=0,Ac=0,Vh=0,Vo=null,bn=null,Gh=0,Zs=1/0,Di=null,rc=!1,Vf=null,dr=null,ja=!1,or=null,sc=0,Go=0,Gf=null,Il=-1,Nl=0;function Sn(){return lt&6?Ut():Il!==-1?Il:Il=Ut()}function pr(t){return t.mode&1?lt&2&&an!==0?an&-an:my.transition!==null?(Nl===0&&(Nl=Jg()),Nl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:o0(t.type)),t):1}function mi(t,e,n,i){if(50<Go)throw Go=0,Gf=null,Error(ue(185));ma(t,n,i),(!(lt&2)||t!==tn)&&(t===tn&&(!(lt&2)&&(Ac|=n),Gt===4&&rr(t,an)),Ln(t,i),n===1&&lt===0&&!(e.mode&1)&&(Zs=Ut()+500,Mc&&wr()))}function Ln(t,e){var n=t.callbackNode;mx(t,e);var i=Vl(t,t===tn?an:0);if(i===0)n!==null&&Nd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nd(n),e===1)t.tag===0?py(bp.bind(null,t)):T0(bp.bind(null,t)),uy(function(){!(lt&6)&&wr()}),n=null;else{switch(e0(i)){case 1:n=mh;break;case 4:n=Qg;break;case 16:n=Hl;break;case 536870912:n=Zg;break;default:n=Hl}n=Ev(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(Il=-1,Nl=0,lt&6)throw Error(ue(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=Vl(t,t===tn?an:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=oc(t,i);else{e=i;var r=lt;lt|=2;var s=_v();(tn!==t||an!==e)&&(Di=null,Zs=Ut()+500,Hr(t,e));do try{Ny();break}catch(a){vv(t,a)}while(!0);Ch(),ic.current=s,lt=r,kt!==null?e=0:(tn=null,an=0,e=Gt)}if(e!==0){if(e===2&&(r=gf(t),r!==0&&(i=r,e=Wf(t,r))),e===1)throw n=fa,Hr(t,0),rr(t,i),Ln(t,Ut()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Uy(r)&&(e=oc(t,i),e===2&&(s=gf(t),s!==0&&(i=s,e=Wf(t,s))),e===1))throw n=fa,Hr(t,0),rr(t,i),Ln(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Ir(t,bn,Di);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=Gh+500-Ut(),10<e)){if(Vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wf(Ir.bind(null,t,bn,Di),e);break}Ir(t,bn,Di);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dy(i/1960))-i,10<i){t.timeoutHandle=wf(Ir.bind(null,t,bn,Di),i);break}Ir(t,bn,Di);break;case 5:Ir(t,bn,Di);break;default:throw Error(ue(329))}}}return Ln(t,Ut()),t.callbackNode===n?gv.bind(null,t):null}function Wf(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=oc(t,e),t!==2&&(e=bn,bn=n,e!==null&&Xf(e)),t}function Xf(t){bn===null?bn=t:bn.push.apply(bn,t)}function Uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Vh,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(lt&6)throw Error(ue(327));Gs();var e=Vl(t,0);if(!(e&1))return Ln(t,Ut()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var i=gf(t);i!==0&&(e=i,n=Wf(t,i))}if(n===1)throw n=fa,Hr(t,0),rr(t,e),Ln(t,Ut()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,bn,Di),Ln(t,Ut()),null}function Wh(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Zs=Ut()+500,Mc&&wr())}}function $r(t){or!==null&&or.tag===0&&!(lt&6)&&Gs();var e=lt;lt|=1;var n=ti.transition,i=ht;try{if(ti.transition=null,ht=1,t)return t()}finally{ht=i,ti.transition=n,lt=e,!(lt&6)&&wr()}}function Xh(){Fn=Is.current,Mt(Is)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cy(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:$s(),Mt(Rn),Mt(vn),Ih();break;case 5:Uh(i);break;case 4:$s();break;case 13:Mt(bt);break;case 19:Mt(bt);break;case 10:Rh(i.type._context);break;case 22:case 23:Xh()}n=n.return}if(tn=t,kt=t=mr(t.current,null),an=Fn=e,Gt=0,fa=null,Vh=Ac=Kr=0,bn=Vo=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function vv(t,e){do{var n=kt;try{if(Ch(),Ll.current=nc,tc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tc=!1}if(qr=0,Zt=Vt=Ct=null,Bo=!1,la=0,Hh.current=null,n===null||n.return===null){Gt=1,fa=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=pp(o);if(m!==null){m.flags&=-257,mp(m,o,a,s,e),m.mode&1&&dp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){dp(s,c,e),jh();break e}l=Error(ue(426))}}else if(wt&&a.mode&1){var p=pp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),mp(p,o,a,s,e),Ah(Qs(l,a));break e}}s=l=Qs(l,a),Gt!==4&&(Gt=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ev(s,l,e);ap(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(dr===null||!dr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=tv(s,a,e);ap(s,y);break e}}s=s.return}while(s!==null)}yv(n)}catch(b){e=b,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function _v(){var t=ic.current;return ic.current=nc,t===null?nc:t}function jh(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),tn===null||!(Kr&268435455)&&!(Ac&268435455)||rr(tn,an)}function oc(t,e){var n=lt;lt|=2;var i=_v();(tn!==t||an!==e)&&(Di=null,Hr(t,e));do try{Iy();break}catch(r){vv(t,r)}while(!0);if(Ch(),lt=n,ic.current=i,kt!==null)throw Error(ue(261));return tn=null,an=0,Gt}function Iy(){for(;kt!==null;)xv(kt)}function Ny(){for(;kt!==null&&!ox();)xv(kt)}function xv(t){var e=Mv(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?yv(t):kt=e,Hh.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cy(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,kt=null;return}}else if(n=by(n,e,Fn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Ir(t,e,n){var i=ht,r=ti.transition;try{ti.transition=null,ht=1,Oy(t,e,n,i)}finally{ti.transition=r,ht=i}return null}function Oy(t,e,n,i){do Gs();while(or!==null);if(lt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(t,s),t===tn&&(kt=tn=null,an=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Ev(Hl,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=ht;ht=1;var a=lt;lt|=4,Hh.current=null,Py(t,n),pv(n,t),ny(Mf),Gl=!!Sf,Mf=Sf=null,t.current=n,Ly(n),ax(),lt=a,ht=o,ti.transition=s}else t.current=n;if(ja&&(ja=!1,or=t,sc=r),s=t.pendingLanes,s===0&&(dr=null),ux(n.stateNode),Ln(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(rc)throw rc=!1,t=Vf,Vf=null,t;return sc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===Gf?Go++:(Go=0,Gf=t):Go=0,wr(),null}function Gs(){if(or!==null){var t=e0(sc),e=ti.transition,n=ht;try{if(ti.transition=null,ht=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,sc=0,lt&6)throw Error(ue(331));var r=lt;for(lt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:Ho(8,f,s)}var h=f.child;if(h!==null)h.return=f,Se=h;else for(;Se!==null;){f=Se;var d=f.sibling,m=f.return;if(fv(f),f===c){Se=null;break}if(d!==null){d.return=m,Se=d;break}Se=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Se=g;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(b){Pt(a,a.return,b)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(lt=r,wr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(vc,t)}catch{}i=!0}return i}finally{ht=n,ti.transition=e}}return!1}function Cp(t,e,n){e=Qs(n,e),e=ev(t,e,1),t=hr(t,e,1),e=Sn(),t!==null&&(ma(t,1,e),Ln(t,e))}function Pt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Qs(n,t),t=tv(e,t,1),e=hr(e,t,1),t=Sn(),e!==null&&(ma(e,1,t),Ln(e,t));break}}e=e.return}}function Fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,tn===t&&(an&n)===n&&(Gt===4||Gt===3&&(an&130023424)===an&&500>Ut()-Gh?Hr(t,0):Vh|=n),Ln(t,e)}function Sv(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=Sn();t=Vi(t,e),t!==null&&(ma(t,e,n),Ln(t,n))}function zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sv(t,n)}function ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Sv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,Ay(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,wt&&e.flags&1048576&&A0(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Ys(e,vn.current);Vs(e,n),r=Oh(null,e,i,t,r,n);var s=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lh(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,Lf(e,i,t,n),e=If(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&wh(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hy(i),t=fi(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=_p(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=vp(null,e,i,fi(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),_p(t,e,i,r,n);case 3:e:{if(sv(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),Jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(ue(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(ue(424)),e),e=xp(t,e,i,n,r);break e}else for(Bn=fr(e.stateNode.containerInfo.firstChild),Hn=e,wt=!0,di=null,n=P0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Gi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return U0(e),t===null&&Cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ef(i,r)?o=null:s!==null&&Ef(i,s)&&(e.flags|=32),rv(t,e),xn(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return ov(t,e,n);case 4:return Dh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),gp(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(Ql,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Rn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=ii(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),vp(t,e,i,r,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Ul(t,e),e.tag=1,Pn(i)?(t=!0,ql(e)):t=!1,Vs(e,n),J0(e,i,r),Lf(e,i,r,n),If(null,e,i,!0,t,n);case 19:return av(t,e,n);case 22:return iv(t,e,n)}throw Error(ue(156,e.tag))};function Ev(t,e){return $g(t,e)}function By(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new By(t,e,n,i)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hh)return 11;if(t===dh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Vr(n.children,r,s,e);case fh:o=8,r|=8;break;case ef:return t=ei(12,n,e,r|2),t.elementType=ef,t.lanes=s,t;case tf:return t=ei(13,n,e,r),t.elementType=tf,t.lanes=s,t;case nf:return t=ei(19,n,e,r),t.elementType=nf,t.lanes=s,t;case Ug:return bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:o=10;break e;case Dg:o=9;break e;case hh:o=11;break e;case dh:o=14;break e;case tr:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function bc(t,e,n,i){return t=ei(22,t,i,e),t.elementType=Ug,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qh(t,e,n,i,r,s,o,a,l){return t=new Vy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(s),t}function Gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return xr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(Pn(n))return w0(t,n,e)}return e}function Tv(t,e,n,i,r,s,o,a,l){return t=qh(n,i,!0,t,r,s,o,a,l),t.context=wv(null),n=t.current,i=Sn(),r=pr(n),s=Fi(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,ma(t,r,i),Ln(t,i),t}function Cc(t,e,n,i){var r=e.current,s=Sn(),o=pr(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(mi(t,r,o,s),Pl(t,r,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kh(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function Wy(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function $h(t){this._internalRoot=t}Rc.prototype.render=$h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Cc(t,e,null,null)};Rc.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Cc(null,t,null,null)}),e[Hi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&s0(t)}};function Qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Xy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ac(o);s.call(c)}}var o=Tv(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=o,t[Hi]=o.current,ia(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ac(l);a.call(c)}}var l=qh(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Hi]=l.current,ia(t.nodeType===8?t.parentNode:t),$r(function(){Cc(e,l,n,i)}),l}function Lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ac(o);a.call(l)}}Cc(e,o,t,r)}else o=Xy(n,e,t,r,i);return ac(o)}t0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(gh(e,n|1),Ln(e,Ut()),!(lt&6)&&(Zs=Ut()+500,wr()))}break;case 13:$r(function(){var i=Vi(t,1);if(i!==null){var r=Sn();mi(i,t,1,r)}}),Kh(t,1)}};vh=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=Sn();mi(e,t,134217728,n)}Kh(t,134217728)}};n0=function(t){if(t.tag===13){var e=pr(t),n=Vi(t,e);if(n!==null){var i=Sn();mi(n,t,e,i)}Kh(t,e)}};i0=function(){return ht};r0=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};df=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(ue(90));Ng(i),of(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};Wg=Wh;Xg=$r;var jy={usingClientEntryPoint:!1,Events:[va,Cs,Sc,Vg,Gg,Wh]},Eo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qg(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{vc=Ya.inject(Yy),Mi=Ya}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(e))throw Error(ue(200));return Gy(t,e,null,n)};Gn.createRoot=function(t,e){if(!Qh(t))throw Error(ue(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qh(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,ia(t.nodeType===8?t.parentNode:t),new $h(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=qg(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return $r(t)};Gn.hydrate=function(t,e,n){if(!Pc(e))throw Error(ue(200));return Lc(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Qh(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};Gn.render=function(t,e,n){if(!Pc(e))throw Error(ue(200));return Lc(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(ue(40));return t._reactRootContainer?($r(function(){Lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Gn.unstable_batchedUpdates=Wh;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Lc(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),bg.exports=Gn;var qy=bg.exports,Lp=qy;Zu.createRoot=Lp.createRoot,Zu.hydrateRoot=Lp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="160",ss={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ky=0,Dp=1,$y=2,Cv=1,Qy=2,Li=3,yr=0,en=1,Zn=2,zi=0,Ws=1,Sr=2,Up=3,Ip=4,Zy=5,Or=100,Jy=101,eS=102,Np=103,Op=104,tS=200,nS=201,iS=202,rS=203,jf=204,Yf=205,sS=206,oS=207,aS=208,lS=209,cS=210,uS=211,fS=212,hS=213,dS=214,pS=0,mS=1,gS=2,lc=3,vS=4,_S=5,xS=6,yS=7,Rv=0,SS=1,MS=2,gr=0,ES=1,wS=2,TS=3,Pv=4,AS=5,bS=6,Lv=300,Js=301,eo=302,qf=303,Kf=304,Dc=306,$f=1e3,zn=1001,Qf=1002,Dt=1003,Fp=1004,du=1005,Kn=1006,CS=1007,ha=1008,vr=1009,RS=1010,PS=1011,Jh=1012,Dv=1013,ar=1014,Si=1015,ki=1016,Uv=1017,Iv=1018,Gr=1020,LS=1021,kn=1023,DS=1024,US=1025,Wr=1026,to=1027,IS=1028,Nv=1029,NS=1030,Ov=1031,Fv=1033,pu=33776,mu=33777,gu=33778,vu=33779,zp=35840,kp=35841,Bp=35842,Hp=35843,zv=36196,Vp=37492,Gp=37496,Wp=37808,Xp=37809,jp=37810,Yp=37811,qp=37812,Kp=37813,$p=37814,Qp=37815,Zp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,_u=36492,rm=36494,sm=36495,OS=36283,om=36284,am=36285,lm=36286,kv=3e3,Xr=3001,FS=3200,zS=3201,Bv=0,kS=1,Jn="",sn="srgb",Wi="srgb-linear",ed="display-p3",Uc="display-p3-linear",cc="linear",St="srgb",uc="rec709",fc="p3",as=7680,cm=519,BS=512,HS=513,VS=514,Hv=515,GS=516,WS=517,XS=518,jS=519,um=35044,fm="300 es",Zf=1035,Oi=2e3,hc=2001;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,Jf=180/Math.PI;function xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function hm(t){return(t&t-1)===0&&t!==0}function eh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qS={DEG2RAD:Wo};class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,n,i,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],y=r[7],b=r[2],E=r[5],T=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*p+a*g+l*E,s[6]=o*u+a*y+l*T,s[1]=c*x+f*v+h*b,s[4]=c*p+f*g+h*E,s[7]=c*u+f*y+h*T,s[2]=d*x+m*v+_*b,s[5]=d*p+m*g+_*E,s[8]=d*u+m*y+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new nt;function Vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KS(){const t=dc("canvas");return t.style.display="block",t}const dm={};function Xo(t){t in dm||(dm[t]=!0,console.warn(t))}const pm=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[Wi]:{transfer:cc,primaries:uc,toReference:t=>t,fromReference:t=>t},[sn]:{transfer:St,primaries:uc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uc]:{transfer:cc,primaries:fc,toReference:t=>t.applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm)},[ed]:{transfer:St,primaries:fc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm).convertLinearToSRGB()}},$S=new Set([Wi,Uc]),gt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$S.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qa[e].toReference,r=qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qa[t].primaries},getTransfer:function(t){return t===Jn?cc:qa[t].transfer}};function Xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class Gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=dc("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xs(n[i]/255)*255):n[i]=Xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QS=0;class Wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class Dn extends es{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,i=zn,r=zn,s=Kn,o=ha,a=kn,l=vr,c=Dn.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=xa(),this.name="",this.source=new Wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Xr?sn:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $f:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $f:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?Xr:kv}set encoding(e){Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?sn:Jn}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Lv;Dn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,i=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(m+1)/2,b=(u+1)/2,E=(f+d)/4,T=(h+x)/4,D=(_+p)/4;return g>y&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=T/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-x)/v,this.z=(d-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?sn:Jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xv extends Dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eM extends Dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||c!==m||f!==_){let p=1-a;const u=l*d+c*m+f*_+h*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),E=Math.atan2(b,u*v);p=Math.sin(p*E)/b,a=Math.sin(a*E)/b}const y=a*v;if(l=l*p+d*y,c=c*p+m*y,f=f*p+_*y,h=h*p+x*y,p===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*m-c*d,e[n+1]=l*_+f*d+c*h-a*m,e[n+2]=c*_+f*m+a*d-l*h,e[n+3]=f*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"YZX":this._x=d*f*h+c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h-d*m*_;break;case"XZY":this._x=d*f*h-c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new R,gm=new Qr;class ya{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),$a.subVectors(this.max,To),cs.subVectors(e.a,To),us.subVectors(e.b,To),fs.subVectors(e.c,To),Ki.subVectors(us,cs),$i.subVectors(fs,us),Cr.subVectors(cs,fs);let n=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-Cr.z,Cr.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,Cr.z,0,-Cr.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-Cr.y,Cr.x,0];return!wu(n,cs,us,fs,$a)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,cs,us,fs,$a))?!1:(Qa.crossVectors(Ki,$i),n=[Qa.x,Qa.y,Qa.z],wu(n,cs,us,fs,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new R,new R,new R,new R,new R,new R,new R,new R],ai=new R,Ka=new ya,cs=new R,us=new R,fs=new R,Ki=new R,$i=new R,Cr=new R,To=new R,$a=new R,Qa=new R,Rr=new R;function wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Rr.fromArray(t,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=n.dot(Rr),f=i.dot(Rr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const tM=new ya,Ao=new R,Tu=new R;class Sa{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Tu)),this.expandByPoint(Ao.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new R,Au=new R,Za=new R,Qi=new R,bu=new R,Ja=new R,Cu=new R;class Ma{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Za),a=Qi.dot(this.direction),l=-Qi.dot(Za),c=Qi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,_;if(f>0)if(h=o*l-a,d=o*a-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Au).addScaledVector(Za,d),m}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),Ja.subVectors(i,e),Cu.crossVectors(bu,Ja);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(Qi,Ja));if(l<0)return null;const c=a*this.direction.dot(bu.cross(Qi));if(c<0||l+c>o)return null;const f=-a*Qi.dot(Cu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,_,x,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,_,x,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,_=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=c*f,x=c*h;n[0]=d+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=c*f,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,_=a*f,x=a*h;n[0]=l*f,n[4]=_*c-m,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=o*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Zi.crossVectors(i,Nn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Zi.crossVectors(i,Nn)),Zi.normalize(),el.crossVectors(Nn,Zi),r[0]=Zi.x,r[4]=el.x,r[8]=Nn.x,r[1]=Zi.y,r[5]=el.y,r[9]=Nn.y,r[2]=Zi.z,r[6]=el.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],y=i[11],b=i[15],E=r[0],T=r[4],D=r[8],S=r[12],w=r[1],z=r[5],k=r[9],ie=r[13],U=r[2],H=r[6],q=r[10],Z=r[14],I=r[3],B=r[7],W=r[11],J=r[15];return s[0]=o*E+a*w+l*U+c*I,s[4]=o*T+a*z+l*H+c*B,s[8]=o*D+a*k+l*q+c*W,s[12]=o*S+a*ie+l*Z+c*J,s[1]=f*E+h*w+d*U+m*I,s[5]=f*T+h*z+d*H+m*B,s[9]=f*D+h*k+d*q+m*W,s[13]=f*S+h*ie+d*Z+m*J,s[2]=_*E+x*w+p*U+u*I,s[6]=_*T+x*z+p*H+u*B,s[10]=_*D+x*k+p*q+u*W,s[14]=_*S+x*ie+p*Z+u*J,s[3]=v*E+g*w+y*U+b*I,s[7]=v*T+g*z+y*H+b*B,s[11]=v*D+g*k+y*q+b*W,s[15]=v*S+g*ie+y*Z+b*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+x*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*f-s*l*f)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=h*p*c-x*d*c+x*l*m-a*p*m-h*l*u+a*d*u,g=_*d*c-f*p*c-_*l*m+o*p*m+f*l*u-o*d*u,y=f*x*c-_*h*c+_*a*m-o*x*m-f*a*u+o*h*u,b=_*h*l-f*x*l-_*a*d+o*x*d+f*a*p-o*h*p,E=n*v+i*g+r*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(x*d*s-h*p*s-x*r*m+i*p*m+h*r*u-i*d*u)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-_*d*s+_*r*m-n*p*m-f*r*u+n*d*u)*T,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*m+n*l*m)*T,e[8]=y*T,e[9]=(_*h*s-f*x*s-_*i*m+n*x*m+f*i*u-n*h*u)*T,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*m-n*a*m)*T,e[12]=b*T,e[13]=(f*x*r-_*h*r+_*i*d-n*x*d-f*i*p+n*h*p)*T,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,_=s*h,x=o*f,p=o*h,u=a*h,v=l*c,g=l*f,y=l*h,b=i.x,E=i.y,T=i.z;return r[0]=(1-(x+u))*b,r[1]=(m+y)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(m-y)*E,r[5]=(1-(d+u))*E,r[6]=(p+v)*E,r[7]=0,r[8]=(_+g)*T,r[9]=(p-v)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const c=1/s,f=1/o,h=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=f,li.elements[5]*=f,li.elements[6]*=f,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,n.setFromRotationMatrix(li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(a===Oi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,m=(i+r)*f;let _,x;if(a===Oi)_=(o+s)*h,x=-2*h;else if(a===hc)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hs=new R,li=new Bt,nM=new R(0,0,0),iM=new R(1,1,1),Zi=new R,el=new R,Nn=new R,vm=new Bt,_m=new Qr;class Ic{constructor(e=0,n=0,i=0,r=Ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ic.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const xm=new R,ds=new Qr,Ci=new Bt,tl=new R,bo=new R,sM=new R,oM=new Qr,ym=new R(1,0,0),Sm=new R(0,1,0),Mm=new R(0,0,1),aM={type:"added"},lM={type:"removed"};class gn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new R,n=new Ic,i=new Qr,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new nt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tl.copy(e):tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(bo,tl,this.up):Ci.lookAt(tl,bo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ci),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new R(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new R,Ri=new R,Ru=new R,Pi=new R,ps=new R,ms=new R,Em=new R,Pu=new R,Lu=new R,Du=new R;let nl=!1;class $n{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ci.subVectors(e,n),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ci.subVectors(r,n),Ri.subVectors(i,n),Ru.subVectors(e,n);const o=ci.dot(ci),a=ci.dot(Ri),l=ci.dot(Ru),c=Ri.dot(Ri),f=Ri.dot(Ru),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,_=(o*f-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(e,n,i,r){return ci.subVectors(i,n),Ri.subVectors(e,n),ci.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ci.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nl=!0),$n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),Pu.subVectors(e,i);const l=ps.dot(Pu),c=ms.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const f=ps.dot(Lu),h=ms.dot(Lu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ps,o);Du.subVectors(e,s);const m=ps.dot(Du),_=ms.dot(Du);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ms,a);const p=f*_-m*h;if(p<=0&&h-f>=0&&m-_>=0)return Em.subVectors(s,r),a=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(Em,a);const u=1/(p+x+d);return o=x*u,a=d*u,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},il={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Te{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=YS(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=sn){const i=jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return gt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Jt(dn.r*255,0,255))*65536+Math.round(Jt(dn.g*255,0,255))*256+Math.round(Jt(dn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=sn){gt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(il);const i=xu(Ji.h,il.h,n),r=xu(Ji.s,il.s,n),s=xu(Ji.l,il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Te;Te.NAMES=jv;let cM=0;class ts extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Ws,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Yf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new R,rl=new he;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class Yv extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qv extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ut extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uM=0;const jn=new Bt,Iu=new gn,gs=new R,On=new ya,Co=new ya,Qt=new R;class Yt extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?qv:Yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(On.min,Co.min),On.expandByPoint(Qt),Qt.addVectors(On.max,Co.max),On.expandByPoint(Qt)):(On.expandByPoint(Co.min),On.expandByPoint(Co.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Qt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Qt.add(gs)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new R,f[w]=new R;const h=new R,d=new R,m=new R,_=new he,x=new he,p=new he,u=new R,v=new R;function g(w,z,k){h.fromArray(r,w*3),d.fromArray(r,z*3),m.fromArray(r,k*3),_.fromArray(o,w*2),x.fromArray(o,z*2),p.fromArray(o,k*2),d.sub(h),m.sub(h),x.sub(_),p.sub(_);const ie=1/(x.x*p.y-p.x*x.y);isFinite(ie)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ie),v.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(ie),c[w].add(u),c[z].add(u),c[k].add(u),f[w].add(v),f[z].add(v),f[k].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,z=y.length;w<z;++w){const k=y[w],ie=k.start,U=k.count;for(let H=ie,q=ie+U;H<q;H+=3)g(i[H+0],i[H+1],i[H+2])}const b=new R,E=new R,T=new R,D=new R;function S(w){T.fromArray(s,w*3),D.copy(T);const z=c[w];b.copy(z),b.sub(T.multiplyScalar(T.dot(z))).normalize(),E.crossVectors(D,z);const ie=E.dot(f[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ie}for(let w=0,z=y.length;w<z;++w){const k=y[w],ie=k.start,U=k.count;for(let H=ie,q=ie+U;H<q;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R,h=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)d[_++]=c[m++]}return new Un(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Bt,Pr=new Ma,sl=new Sa,Tm=new R,vs=new R,_s=new R,xs=new R,Nu=new R,ol=new R,al=new he,ll=new he,cl=new he,Am=new R,bm=new R,Cm=new R,ul=new R,fl=new R;class At extends gn{constructor(e=new Yt,n=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Nu.fromBufferAttribute(h,e),o?ol.addScaledVector(Nu,f):ol.addScaledVector(Nu.sub(n),f))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(sl.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(sl,Tm)===null||Pr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=g;y<b;y+=3){const E=a.getX(y),T=a.getX(y+1),D=a.getX(y+2);r=hl(this,u,e,i,c,f,h,E,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=hl(this,o,e,i,c,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=g;y<b;y+=3){const E=y,T=y+1,D=y+2;r=hl(this,u,e,i,c,f,h,E,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,y=p+2;r=hl(this,o,e,i,c,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function fM(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;fl.copy(a),fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fl);return c<n.near||c>n.far?null:{distance:c,point:fl.clone(),object:t}}function hl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vs),t.getVertexPosition(l,_s),t.getVertexPosition(c,xs);const f=fM(t,e,n,i,vs,_s,xs,ul);if(f){r&&(al.fromBufferAttribute(r,a),ll.fromBufferAttribute(r,l),cl.fromBufferAttribute(r,c),f.uv=$n.getInterpolation(ul,vs,_s,xs,al,ll,cl,new he)),s&&(al.fromBufferAttribute(s,a),ll.fromBufferAttribute(s,l),cl.fromBufferAttribute(s,c),f.uv1=$n.getInterpolation(ul,vs,_s,xs,al,ll,cl,new he),f.uv2=f.uv1),o&&(Am.fromBufferAttribute(o,a),bm.fromBufferAttribute(o,l),Cm.fromBufferAttribute(o,c),f.normal=$n.getInterpolation(ul,vs,_s,xs,Am,bm,Cm,new R),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};$n.getNormal(vs,_s,xs,h.normal),f.face=h}return f}class Ea extends Yt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(h,2));function _(x,p,u,v,g,y,b,E,T,D,S){const w=y/T,z=b/D,k=y/2,ie=b/2,U=E/2,H=T+1,q=D+1;let Z=0,I=0;const B=new R;for(let W=0;W<q;W++){const J=W*z-ie;for(let ne=0;ne<H;ne++){const K=ne*w-k;B[x]=K*v,B[p]=J*g,B[u]=U,c.push(B.x,B.y,B.z),B[x]=0,B[p]=0,B[u]=E>0?1:-1,f.push(B.x,B.y,B.z),h.push(ne/T),h.push(1-W/D),Z+=1}}for(let W=0;W<D;W++)for(let J=0;J<T;J++){const ne=d+J+H*W,K=d+J+H*(W+1),ee=d+(J+1)+H*(W+1),pe=d+(J+1)+H*W;l.push(ne,K,pe),l.push(K,ee,pe),I+=6}a.addGroup(m,I,S),m+=I,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function hM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kv(t){return t.getRenderTarget()===null?t.outputColorSpace:gt.workingColorSpace}const pc={clone:no,merge:_n};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nd extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qn extends nd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class mM extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new Qn(ys,Ss,e,n);s.layers=this.layers,this.add(s);const o=new Qn(ys,Ss,e,n);o.layers=this.layers,this.add(o);const a=new Qn(ys,Ss,e,n);a.layers=this.layers,this.add(a);const l=new Qn(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new Qn(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $v extends Dn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gM extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?sn:Jn),this.texture=new $v(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ea(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:zi});s.uniforms.tEquirect.value=n;const o=new At(r,s),a=n.minFilter;return n.minFilter===ha&&(n.minFilter=Kn),new mM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ou=new R,vM=new R,_M=new nt;class yn{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ou.subVectors(i,n).cross(vM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(Ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Sa,dl=new R;class Qv{constructor(e=new yn,n=new yn,i=new yn,r=new yn,s=new yn,o=new yn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,p-m,y-u).normalize(),i[1].setComponents(l+s,d+c,p+m,y+u).normalize(),i[2].setComponents(l+o,d+f,p+_,y+v).normalize(),i[3].setComponents(l-o,d-f,p-_,y-v).normalize(),i[4].setComponents(l-a,d-h,p-x,y-g).normalize(),n===Oi)i[5].setComponents(l+a,d+h,p+x,y+g).normalize();else if(n===hc)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,m=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,h){const d=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&_.length===0&&t.bufferSubData(h,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class Nc extends Yt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<f;u++){const v=u*d-o;for(let g=0;g<c;g++){const y=g*h-s;_.push(y,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,y=v+c*(u+1),b=v+1+c*(u+1),E=v+1+c*u;m.push(g,y,E),m.push(y,b,E)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
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
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
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
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`
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
}`,ZM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,xE=`struct PhysicalMaterial {
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
}`,yE=`
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PE=`#if defined( USE_POINTS_UV )
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
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
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
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,b1=`#define DISTANCE
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
}`,C1=`#define DISTANCE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,I1=`uniform vec3 diffuse;
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
}`,N1=`#define LAMBERT
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
}`,O1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,G1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,j1=`#define TOON
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
}`,Y1=`uniform float size;
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
}`,q1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,$1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:wM,alphatest_pars_fragment:TM,aomap_fragment:AM,aomap_pars_fragment:bM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:PM,beginnormal_vertex:LM,bsdfs:DM,iridescence_fragment:UM,bumpmap_pars_fragment:IM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:zM,color_fragment:kM,color_pars_fragment:BM,color_pars_vertex:HM,color_vertex:VM,common:GM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:XM,displacementmap_pars_vertex:jM,displacementmap_vertex:YM,emissivemap_fragment:qM,emissivemap_pars_fragment:KM,colorspace_fragment:$M,colorspace_pars_fragment:QM,envmap_fragment:ZM,envmap_common_pars_fragment:JM,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:oE,gradientmap_pars_fragment:aE,lightmap_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:_E,lights_physical_pars_fragment:xE,lights_fragment_begin:yE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:bE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:PE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:DE,morphcolor_vertex:UE,morphnormal_vertex:IE,morphtarget_pars_vertex:NE,morphtarget_vertex:OE,normal_fragment_begin:FE,normal_fragment_maps:zE,normal_pars_fragment:kE,normal_pars_vertex:BE,normal_vertex:HE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:jE,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:KE,project_vertex:$E,dithering_fragment:QE,dithering_pars_fragment:ZE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:o1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:d1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:v1,worldpos_vertex:_1,background_vert:x1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:M1,cube_vert:E1,cube_frag:w1,depth_vert:T1,depth_frag:A1,distanceRGBA_vert:b1,distanceRGBA_frag:C1,equirect_vert:R1,equirect_frag:P1,linedashed_vert:L1,linedashed_frag:D1,meshbasic_vert:U1,meshbasic_frag:I1,meshlambert_vert:N1,meshlambert_frag:O1,meshmatcap_vert:F1,meshmatcap_frag:z1,meshnormal_vert:k1,meshnormal_frag:B1,meshphong_vert:H1,meshphong_frag:V1,meshphysical_vert:G1,meshphysical_frag:W1,meshtoon_vert:X1,meshtoon_frag:j1,points_vert:Y1,points_frag:q1,shadow_vert:K1,shadow_frag:$1,sprite_vert:Q1,sprite_frag:Z1},de={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},xi={basic:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:_n([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:_n([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:_n([de.points,de.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:_n([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:_n([de.common,de.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:_n([de.sprite,de.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:_n([de.common,de.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:_n([de.lights,de.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};xi.physical={uniforms:_n([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const pl={r:0,b:0,g:0};function J1(t,e,n,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,f,h=null,d=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Dc)?(f===void 0&&(f=new At(new Ea(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:no(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=gt.getTransfer(g.colorSpace)!==St,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new At(new Nc(2,2),new Wt({name:"BackgroundMaterial",uniforms:no(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=gt.getTransfer(g.colorSpace)!==St,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(pl,Kv(t)),i.buffers.color.setClear(pl.r,pl.g,pl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function ew(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(U,H,q,Z,I){let B=!1;if(o){const W=x(Z,q,H);c!==W&&(c=W,m(c.object)),B=u(U,Z,q,I),B&&v(U,Z,q,I)}else{const W=H.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==W)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=W,B=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,D(U,H,q,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function x(U,H,q){const Z=q.wireframe===!0;let I=a[U.id];I===void 0&&(I={},a[U.id]=I);let B=I[H.id];B===void 0&&(B={},I[H.id]=B);let W=B[Z];return W===void 0&&(W=p(d()),B[Z]=W),W}function p(U){const H=[],q=[],Z=[];for(let I=0;I<r;I++)H[I]=0,q[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:Z,object:U,attributes:{},index:null}}function u(U,H,q,Z){const I=c.attributes,B=H.attributes;let W=0;const J=q.getAttributes();for(const ne in J)if(J[ne].location>=0){const ee=I[ne];let pe=B[ne];if(pe===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;W++}return c.attributesNum!==W||c.index!==Z}function v(U,H,q,Z){const I={},B=H.attributes;let W=0;const J=q.getAttributes();for(const ne in J)if(J[ne].location>=0){let ee=B[ne];ee===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),I[ne]=pe,W++}c.attributes=I,c.attributesNum=W,c.index=Z}function g(){const U=c.newAttributes;for(let H=0,q=U.length;H<q;H++)U[H]=0}function y(U){b(U,0)}function b(U,H){const q=c.newAttributes,Z=c.enabledAttributes,I=c.attributeDivisors;q[U]=1,Z[U]===0&&(t.enableVertexAttribArray(U),Z[U]=1),I[U]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,H),I[U]=H)}function E(){const U=c.newAttributes,H=c.enabledAttributes;for(let q=0,Z=H.length;q<Z;q++)H[q]!==U[q]&&(t.disableVertexAttribArray(q),H[q]=0)}function T(U,H,q,Z,I,B,W){W===!0?t.vertexAttribIPointer(U,H,q,I,B):t.vertexAttribPointer(U,H,q,Z,I,B)}function D(U,H,q,Z){if(i.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=Z.attributes,B=q.getAttributes(),W=H.defaultAttributeValues;for(const J in B){const ne=B[J];if(ne.location>=0){let K=I[J];if(K===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){const ee=K.normalized,pe=K.itemSize,Me=n.get(K);if(Me===void 0)continue;const we=Me.buffer,Ge=Me.type,He=Me.bytesPerElement,De=i.isWebGL2===!0&&(Ge===t.INT||Ge===t.UNSIGNED_INT||K.gpuType===Dv);if(K.isInterleavedBufferAttribute){const et=K.data,V=et.stride,qt=K.offset;if(et.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ne.locationSize;Ie++)b(ne.location+Ie,et.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ie=0;Ie<ne.locationSize;Ie++)y(ne.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ie=0;Ie<ne.locationSize;Ie++)T(ne.location+Ie,pe/ne.locationSize,Ge,ee,V*He,(qt+pe/ne.locationSize*Ie)*He,De)}else{if(K.isInstancedBufferAttribute){for(let et=0;et<ne.locationSize;et++)b(ne.location+et,K.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let et=0;et<ne.locationSize;et++)y(ne.location+et);t.bindBuffer(t.ARRAY_BUFFER,we);for(let et=0;et<ne.locationSize;et++)T(ne.location+et,pe/ne.locationSize,Ge,ee,pe*He,pe/ne.locationSize*et*He,De)}}else if(W!==void 0){const ee=W[J];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(ne.location,ee);break;case 3:t.vertexAttrib3fv(ne.location,ee);break;case 4:t.vertexAttrib4fv(ne.location,ee);break;default:t.vertexAttrib1fv(ne.location,ee)}}}}E()}function S(){k();for(const U in a){const H=a[U];for(const q in H){const Z=H[q];for(const I in Z)_(Z[I].object),delete Z[I];delete H[q]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const H=a[U.id];for(const q in H){const Z=H[q];for(const I in Z)_(Z[I].object),delete Z[I];delete H[q]}delete a[U.id]}function z(U){for(const H in a){const q=a[H];if(q[U.id]===void 0)continue;const Z=q[U.id];for(const I in Z)_(Z[I].object),delete Z[I];delete q[U.id]}}function k(){ie(),f=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:y,disableUnusedAttributes:E}}function tw(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(f[_],h[_]);else{m.multiDrawArraysWEBGL(s,f,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),b=g&&y,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:E}}function iw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=f(_,d,g,m);for(let b=0;b!==g;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,y=m;g!==x;++g,y+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function rw(t){let e=new WeakMap;function n(o,a){return a===qf?o.mapping=Js:a===Kf&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qf||a===Kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jv extends nd{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Rm=[.125,.215,.35,.446,.526,.582],Fr=20,Fu=new Jv,Pm=new Te;let zu=null,ku=0,Bu=0;const Nr=(1+Math.sqrt(5))/2,Ms=1/Nr,Lm=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Nr,Ms),new R(0,Nr,-Ms),new R(Ms,0,Nr),new R(-Ms,0,Nr),new R(Nr,Ms,0),new R(-Nr,Ms,0)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,ku,Bu),e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:ki,format:kn,colorSpace:Wi,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sw(s)),this._blurMaterial=ow(s,e,n)}return r}_compileMaterial(e){const n=new At(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new Qn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Pm),f.toneMapping=gr,f.autoClear=!1;const m=new An({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new At(new Ea,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Pm),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;ml(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lm[(r-1)%Lm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new At(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):Fr;p>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const u=[];let v=0;for(let T=0;T<Fr;++T){const D=T/x,S=Math.exp(-D*D/2);u.push(S),T===0?v+=S:T<p&&(v+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const y=this._sizeLods[r],b=3*y*(r>g-Ns?r-g+Ns:0),E=4*(this._cubeSize-y);ml(n,b,E,3*y,2*y),l.setRenderTarget(n),l.render(h,Fu)}}function sw(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=Rm[o-t+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,D=E>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(S,x*_*E),g.set(d,p*_*E);const w=[E,E,E,E,E,E];y.set(w,u*_*E)}const b=new Yt;b.setAttribute("position",new Un(v,x)),b.setAttribute("uv",new Un(g,p)),b.setAttribute("faceIndex",new Un(y,u)),e.push(b),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ow(t,e,n){const i=new Float32Array(Fr),r=new R(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Im(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Nm(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function id(){return`

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
	`}function aw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qf||l===Kf,f=l===Js||l===eo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Dm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Dm(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,y=v.length;g<y;g+=3){const b=v[g+0],E=v[g+1],T=v[g+2];d.push(b,E,E,T,T,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const b=g+0,E=g+1,T=g+2;d.push(b,E,E,T,T,b)}}else return;const p=new(Vv(d)?qv:Yv)(d,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function uw(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function h(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,m*l,x),n.update(_,s,x)}function d(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hw(t,e){return t[0]-e[0]}function dw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new on,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let H=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),b===!0&&(S=3);let w=f.attributes.position.count*S,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const k=new Float32Array(w*z*4*x),ie=new Xv(k,w,z,x);ie.type=Si,ie.needsUpdate=!0;const U=S*4;for(let q=0;q<x;q++){const Z=E[q],I=T[q],B=D[q],W=w*z*4*q;for(let J=0;J<Z.count;J++){const ne=J*U;g===!0&&(o.fromBufferAttribute(Z,J),k[W+ne+0]=o.x,k[W+ne+1]=o.y,k[W+ne+2]=o.z,k[W+ne+3]=0),y===!0&&(o.fromBufferAttribute(I,J),k[W+ne+4]=o.x,k[W+ne+5]=o.y,k[W+ne+6]=o.z,k[W+ne+7]=0),b===!0&&(o.fromBufferAttribute(B,J),k[W+ne+8]=o.x,k[W+ne+9]=o.y,k[W+ne+10]=o.z,k[W+ne+11]=B.itemSize===4?o.w:1)}}p={count:x,texture:ie,size:new he(w,z)},s.set(f,p),f.addEventListener("dispose",H)}let u=0;for(let g=0;g<d.length;g++)u+=d[g];const v=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[f.id]=x}for(let y=0;y<_;y++){const b=x[y];b[0]=y,b[1]=d[y]}x.sort(dw);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(hw);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const b=a[y],E=b[0],T=b[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&f.getAttribute("morphTarget"+y)!==p[E]&&f.setAttribute("morphTarget"+y,p[E]),u&&f.getAttribute("morphNormal"+y)!==u[E]&&f.setAttribute("morphNormal"+y,u[E]),r[y]=T,v+=T):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class e_ extends Dn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Wr,f!==Wr&&f!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Wr&&(i=ar),i===void 0&&f===to&&(i=Gr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const t_=new Dn,n_=new e_(1,1);n_.compareFunction=Hv;const i_=new Xv,r_=new eM,s_=new $v,Om=[],Fm=[],zm=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Om[r];if(s===void 0&&(s=new Float32Array(r),Om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oc(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),jt(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;km.set(i),t.uniformMatrix3fv(this.addr,!1,km),jt(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Xt(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),jt(n,i)}}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?n_:t_;n.setTexture2D(e||s,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||r_,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||s_,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||i_,r)}function Nw(t){switch(t){case 5126:return gw;case 35664:return vw;case 35665:return _w;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return ww;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return bw;case 36294:return Cw;case 36295:return Rw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Ow(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function zw(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function kw(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function Bw(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hw(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vw(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function jw(t,e){t.uniform4iv(this.addr,e)}function Yw(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function $w(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||t_,s[o])}function Zw(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||r_,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||s_,s[o])}function eT(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||i_,s[o])}function tT(t){switch(t){case 5126:return Ow;case 35664:return Fw;case 35665:return zw;case 35666:return kw;case 35674:return Bw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return jw;case 5125:return Yw;case 36294:return qw;case 36295:return Kw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Nw(n.type)}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tT(n.type)}}class rT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function Hm(t,e){t.seq.push(e),t.map[e.id]=e}function sT(t,e,n){const i=t.name,r=i.length;for(Hu.lastIndex=0;;){const s=Hu.exec(i),o=Hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hm(n,c===void 0?new nT(a,t,e):new iT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new rT(a),Hm(n,h)),n=h}}}class Fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let aT=0;function lT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function cT(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===fc&&n===uc?i="LinearDisplayP3ToLinearSRGB":e===uc&&n===fc&&(i="LinearSRGBToLinearDisplayP3"),t){case Wi:case Uc:return[i,"LinearTransferOETF"];case sn:case ed:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lT(t.getShaderSource(e),o)}else return r}function uT(t,e){const n=cT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fT(t,e){let n;switch(e){case ES:n="Linear";break;case wS:n="Reinhard";break;case TS:n="OptimizedCineon";break;case Pv:n="ACESFilmic";break;case bS:n="AgX";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function dT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Os(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(gT,_T)}const vT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _T(t,e){let n=Je[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(t){return t.replace(xT,yT)}function yT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ST(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function wT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case SS:e="ENVMAP_BLENDING_MIX";break;case MS:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ST(n),c=MT(n),f=ET(n),h=wT(n),d=TT(n),m=n.isWebGL2?"":hT(n),_=dT(n),x=pT(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Os).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Os).join(`
`),v.length>0&&(v+=`
`)):(u=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),v=[m,Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Je.tonemapping_pars_fragment:"",n.toneMapping!==gr?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,uT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),o=th(o),o=Wm(o,n),o=Xm(o,n),a=th(a),a=Wm(a,n),a=Xm(a,n),o=jm(o),a=jm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+u+o,b=g+v+a,E=Vm(r,r.VERTEX_SHADER,y),T=Vm(r,r.FRAGMENT_SHADER,b);r.attachShader(p,E),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(k){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(T).trim();let q=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,E,T);else{const I=Gm(r,E,"vertex"),B=Gm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+I+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(U===""||H==="")&&(Z=!1);Z&&(k.diagnostics={runnable:q,programLog:ie,vertexShader:{log:U,prefix:u},fragmentShader:{log:H,prefix:v}})}r.deleteShader(E),r.deleteShader(T),S=new Fl(r,p),w=mT(r,p)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,oT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}let bT=0;class CT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RT(e),n.set(e,i)),i}}class RT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,s,o){const a=new td,l=new CT,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,w,z,k,ie){const U=k.fog,H=ie.geometry,q=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),I=Z&&Z.mapping===Dc?Z.image.height:null,B=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const W=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=W!==void 0?W.length:0;let ne=0;H.morphAttributes.position!==void 0&&(ne=1),H.morphAttributes.normal!==void 0&&(ne=2),H.morphAttributes.color!==void 0&&(ne=3);let K,ee,pe,Me;if(B){const ct=xi[B];K=ct.vertexShader,ee=ct.fragmentShader}else K=S.vertexShader,ee=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const we=t.getRenderTarget(),Ge=ie.isInstancedMesh===!0,He=ie.isBatchedMesh===!0,De=!!S.map,et=!!S.matcap,V=!!Z,qt=!!S.aoMap,Ie=!!S.lightMap,Ve=!!S.bumpMap,Ae=!!S.normalMap,ft=!!S.displacementMap,We=!!S.emissiveMap,C=!!S.metalnessMap,M=!!S.roughnessMap,O=S.anisotropy>0,se=S.clearcoat>0,re=S.iridescence>0,le=S.sheen>0,be=S.transmission>0,ge=O&&!!S.anisotropyMap,ye=se&&!!S.clearcoatMap,Ne=se&&!!S.clearcoatNormalMap,Xe=se&&!!S.clearcoatRoughnessMap,oe=re&&!!S.iridescenceMap,st=re&&!!S.iridescenceThicknessMap,Ke=le&&!!S.sheenColorMap,Be=le&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,ve=!!S.specularColorMap,P=!!S.specularIntensityMap,ce=be&&!!S.transmissionMap,Ce=be&&!!S.thicknessMap,xe=!!S.gradientMap,ae=!!S.alphaMap,L=S.alphaTest>0,fe=!!S.alphaHash,me=!!S.extensions,Fe=!!H.attributes.uv1,Le=!!H.attributes.uv2,tt=!!H.attributes.uv3;let Ye=gr;return S.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ye=t.toneMapping),{isWebGL2:f,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:ee,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:He,instancing:Ge,instancingColor:Ge&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Wi,map:De,matcap:et,envMap:V,envMapMode:V&&Z.mapping,envMapCubeUVHeight:I,aoMap:qt,lightMap:Ie,bumpMap:Ve,normalMap:Ae,displacementMap:d&&ft,emissiveMap:We,normalMapObjectSpace:Ae&&S.normalMapType===kS,normalMapTangentSpace:Ae&&S.normalMapType===Bv,metalnessMap:C,roughnessMap:M,anisotropy:O,anisotropyMap:ge,clearcoat:se,clearcoatMap:ye,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Xe,iridescence:re,iridescenceMap:oe,iridescenceThicknessMap:st,sheen:le,sheenColorMap:Ke,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ve,specularIntensityMap:P,transmission:be,transmissionMap:ce,thicknessMap:Ce,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Ws,alphaMap:ae,alphaTest:L,alphaHash:fe,combine:S.combine,mapUv:De&&x(S.map.channel),aoMapUv:qt&&x(S.aoMap.channel),lightMapUv:Ie&&x(S.lightMap.channel),bumpMapUv:Ve&&x(S.bumpMap.channel),normalMapUv:Ae&&x(S.normalMap.channel),displacementMapUv:ft&&x(S.displacementMap.channel),emissiveMapUv:We&&x(S.emissiveMap.channel),metalnessMapUv:C&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:ge&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:ve&&x(S.specularColorMap.channel),specularIntensityMapUv:P&&x(S.specularIntensityMap.channel),transmissionMapUv:ce&&x(S.transmissionMap.channel),thicknessMapUv:Ce&&x(S.thicknessMap.channel),alphaMapUv:ae&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ae||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Le,vertexUv3s:tt,pointsUvs:ie.isPoints===!0&&!!H.attributes.uv&&(De||ae),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,useLegacyLights:t._useLegacyLights,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(v(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=_[S.type];let z;if(w){const k=xi[w];z=pc.clone(k.uniforms)}else z=S.uniforms;return z}function b(S,w){let z;for(let k=0,ie=c.length;k<ie;k++){const U=c[k];if(U.cacheKey===w){z=U,++z.usedTimes;break}}return z===void 0&&(z=new AT(t,w,S,s),c.push(z)),z}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:D}}function LT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,_,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function a(h,d,m,_,x,p){const u=o(h,d,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,d,m,_,x,p){const u=o(h,d,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||DT),i.length>1&&i.sort(d||qm),r.length>1&&r.sort(d||qm)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function UT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Km,t.set(i,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new Te};break;case"SpotLight":n={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":n={color:new Te,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function NT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OT=0;function FT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zT(t,e){const n=new IT,i=NT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new R);const s=new R,o=new Bt,a=new Bt;function l(f,h){let d=0,m=0,_=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let x=0,p=0,u=0,v=0,g=0,y=0,b=0,E=0,T=0,D=0,S=0;f.sort(FT);const w=h===!0?Math.PI:1;for(let k=0,ie=f.length;k<ie;k++){const U=f[k],H=U.color,q=U.intensity,Z=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=H.r*q*w,m+=H.g*q*w,_+=H.b*q*w;else if(U.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(U.sh.coefficients[B],q);S++}else if(U.isDirectionalLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const W=U.shadow,J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=U.shadow.matrix,y++}r.directional[x]=B,x++}else if(U.isSpotLight){const B=n.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(H).multiplyScalar(q*w),B.distance=Z,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,r.spot[u]=B;const W=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,W.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[u]=W.matrix,U.castShadow){const J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=I,E++}u++}else if(U.isRectAreaLight){const B=n.get(U);B.color.copy(H).multiplyScalar(q),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=B,v++}else if(U.isPointLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*w),B.distance=U.distance,B.decay=U.decay,U.castShadow){const W=U.shadow,J=i.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=U.shadow.matrix,b++}r.point[p]=B,p++}else if(U.isHemisphereLight){const B=n.get(U);B.skyColor.copy(U.color).multiplyScalar(q*w),B.groundColor.copy(U.groundColor).multiplyScalar(q*w),r.hemi[g]=B,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==x||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==v||z.hemiLength!==g||z.numDirectionalShadows!==y||z.numPointShadows!==b||z.numSpotShadows!==E||z.numSpotMaps!==T||z.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=E+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,z.directionalLength=x,z.pointLength=p,z.spotLength=u,z.rectAreaLength=v,z.hemiLength=g,z.numDirectionalShadows=y,z.numPointShadows=b,z.numSpotShadows=E,z.numSpotMaps=T,z.numLightProbes=S,r.version=OT++)}function c(f,h){let d=0,m=0,_=0,x=0,p=0;const u=h.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const y=f[v];if(y.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),d++}else if(y.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(y.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function $m(t,e){const n=new zT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new $m(t,e),n.set(s,[l])):o>=a.length?(l=new $m(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class BT extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
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
}`;function WT(t,e,n){let i=new Qv;const r=new he,s=new he,o=new on,a=new BT({depthPacking:zS}),l=new HT,c={},f=n.maxTextureSize,h={[yr]:en,[en]:yr,[Zn]:Zn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:VT,fragmentShader:GT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let u=this.type;this.render=function(E,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),w=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ie=u!==Li&&this.type===Li,U=u===Li&&this.type!==Li;for(let H=0,q=E.length;H<q;H++){const Z=E[H],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const B=I.getFrameExtents();if(r.multiply(B),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,I.mapSize.y=s.y)),I.map===null||ie===!0||U===!0){const J=this.type!==Li?{minFilter:Dt,magFilter:Dt}:{};I.map!==null&&I.map.dispose(),I.map=new ni(r.x,r.y,J),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const W=I.getViewportCount();for(let J=0;J<W;J++){const ne=I.getViewport(J);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(o),I.updateMatrices(Z,J),i=I.getFrustum(),y(T,D,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===Li&&v(I,D),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,w,z)};function v(E,T){const D=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ni(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,D,d,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,D,m,x,null)}function g(E,T,D,S){let w=null;const z=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)w=z;else if(w=D.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=w.uuid,ie=T.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let H=U[ie];H===void 0&&(H=w.clone(),U[ie]=H,T.addEventListener("dispose",b)),w=H}if(w.visible=T.visible,w.wireframe=T.wireframe,S===Li?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=t.properties.get(w);k.light=D}return w}function y(E,T,D,S,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const ie=e.update(E),U=E.material;if(Array.isArray(U)){const H=ie.groups;for(let q=0,Z=H.length;q<Z;q++){const I=H[q],B=U[I.materialIndex];if(B&&B.visible){const W=g(E,B,S,w);E.onBeforeShadow(t,E,T,D,ie,W,I),t.renderBufferDirect(D,null,ie,W,E,I),E.onAfterShadow(t,E,T,D,ie,W,I)}}}else if(U.visible){const H=g(E,U,S,w);E.onBeforeShadow(t,E,T,D,ie,H,null),t.renderBufferDirect(D,null,ie,H,E,null),E.onAfterShadow(t,E,T,D,ie,H,null)}}const k=E.children;for(let ie=0,U=k.length;ie<U;ie++)y(k[ie],T,D,S,w)}function b(E){E.target.removeEventListener("dispose",b);for(const D in c){const S=c[D],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function XT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const fe=new on;let me=null;const Fe=new on(0,0,0,0);return{setMask:function(Le){me!==Le&&!L&&(t.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){L=Le},setClear:function(Le,tt,Ye,vt,ct){ct===!0&&(Le*=vt,tt*=vt,Ye*=vt),fe.set(Le,tt,Ye,vt),Fe.equals(fe)===!1&&(t.clearColor(Le,tt,Ye,vt),Fe.copy(fe))},reset:function(){L=!1,me=null,Fe.set(-1,0,0,0)}}}function s(){let L=!1,fe=null,me=null,Fe=null;return{setTest:function(Le){Le?He(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(Le){fe!==Le&&!L&&(t.depthMask(Le),fe=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case pS:t.depthFunc(t.NEVER);break;case mS:t.depthFunc(t.ALWAYS);break;case gS:t.depthFunc(t.LESS);break;case lc:t.depthFunc(t.LEQUAL);break;case vS:t.depthFunc(t.EQUAL);break;case _S:t.depthFunc(t.GEQUAL);break;case xS:t.depthFunc(t.GREATER);break;case yS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Le}},setLocked:function(Le){L=Le},setClear:function(Le){Fe!==Le&&(t.clearDepth(Le),Fe=Le)},reset:function(){L=!1,fe=null,me=null,Fe=null}}}function o(){let L=!1,fe=null,me=null,Fe=null,Le=null,tt=null,Ye=null,vt=null,ct=null;return{setTest:function(ot){L||(ot?He(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!L&&(t.stencilMask(ot),fe=ot)},setFunc:function(ot,Et,Xn){(me!==ot||Fe!==Et||Le!==Xn)&&(t.stencilFunc(ot,Et,Xn),me=ot,Fe=Et,Le=Xn)},setOp:function(ot,Et,Xn){(tt!==ot||Ye!==Et||vt!==Xn)&&(t.stencilOp(ot,Et,Xn),tt=ot,Ye=Et,vt=Xn)},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(t.clearStencil(ot),ct=ot)},reset:function(){L=!1,fe=null,me=null,Fe=null,Le=null,tt=null,Ye=null,vt=null,ct=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,y=null,b=null,E=null,T=null,D=null,S=new Te(0,0,0),w=0,z=!1,k=null,ie=null,U=null,H=null,q=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=B>=2);let J=null,ne={};const K=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),pe=new on().fromArray(K),Me=new on().fromArray(ee);function we(L,fe,me,Fe){const Le=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<me;Ye++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(fe+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return tt}const Ge={};Ge[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),Ge[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ge[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(t.DEPTH_TEST),l.setFunc(lc),We(!1),C(Dp),He(t.CULL_FACE),Ae(zi);function He(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function De(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function et(L,fe){return m[L]!==fe?(t.bindFramebuffer(L,fe),m[L]=fe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function V(L,fe){let me=x,Fe=!1;if(L)if(me=_.get(fe),me===void 0&&(me=[],_.set(fe,me)),L.isWebGLMultipleRenderTargets){const Le=L.texture;if(me.length!==Le.length||me[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,Ye=Le.length;tt<Ye;tt++)me[tt]=t.COLOR_ATTACHMENT0+tt;me.length=Le.length,Fe=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Fe=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Fe=!0);Fe&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function qt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Ie={[Or]:t.FUNC_ADD,[Jy]:t.FUNC_SUBTRACT,[eS]:t.FUNC_REVERSE_SUBTRACT};if(i)Ie[Np]=t.MIN,Ie[Op]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ie[Np]=L.MIN_EXT,Ie[Op]=L.MAX_EXT)}const Ve={[tS]:t.ZERO,[nS]:t.ONE,[iS]:t.SRC_COLOR,[jf]:t.SRC_ALPHA,[cS]:t.SRC_ALPHA_SATURATE,[aS]:t.DST_COLOR,[sS]:t.DST_ALPHA,[rS]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[lS]:t.ONE_MINUS_DST_COLOR,[oS]:t.ONE_MINUS_DST_ALPHA,[uS]:t.CONSTANT_COLOR,[fS]:t.ONE_MINUS_CONSTANT_COLOR,[hS]:t.CONSTANT_ALPHA,[dS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(L,fe,me,Fe,Le,tt,Ye,vt,ct,ot){if(L===zi){u===!0&&(De(t.BLEND),u=!1);return}if(u===!1&&(He(t.BLEND),u=!0),L!==Zy){if(L!==v||ot!==z){if((g!==Or||E!==Or)&&(t.blendEquation(t.FUNC_ADD),g=Or,E=Or),ot)switch(L){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sr:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sr:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,D=null,S.set(0,0,0),w=0,v=L,z=ot}return}Le=Le||fe,tt=tt||me,Ye=Ye||Fe,(fe!==g||Le!==E)&&(t.blendEquationSeparate(Ie[fe],Ie[Le]),g=fe,E=Le),(me!==y||Fe!==b||tt!==T||Ye!==D)&&(t.blendFuncSeparate(Ve[me],Ve[Fe],Ve[tt],Ve[Ye]),y=me,b=Fe,T=tt,D=Ye),(vt.equals(S)===!1||ct!==w)&&(t.blendColor(vt.r,vt.g,vt.b,ct),S.copy(vt),w=ct),v=L,z=!1}function ft(L,fe){L.side===Zn?De(t.CULL_FACE):He(t.CULL_FACE);let me=L.side===en;fe&&(me=!me),We(me),L.blending===Ws&&L.transparent===!1?Ae(zi):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Fe=L.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?He(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){k!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),k=L)}function C(L){L!==Ky?(He(t.CULL_FACE),L!==ie&&(L===Dp?t.cullFace(t.BACK):L===$y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),ie=L}function M(L){L!==U&&(I&&t.lineWidth(L),U=L)}function O(L,fe,me){L?(He(t.POLYGON_OFFSET_FILL),(H!==fe||q!==me)&&(t.polygonOffset(fe,me),H=fe,q=me)):De(t.POLYGON_OFFSET_FILL)}function se(L){L?He(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function re(L){L===void 0&&(L=t.TEXTURE0+Z-1),J!==L&&(t.activeTexture(L),J=L)}function le(L,fe,me){me===void 0&&(J===null?me=t.TEXTURE0+Z-1:me=J);let Fe=ne[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},ne[me]=Fe),(Fe.type!==L||Fe.texture!==fe)&&(J!==me&&(t.activeTexture(me),J=me),t.bindTexture(L,fe||Ge[L]),Fe.type=L,Fe.texture=fe)}function be(){const L=ne[J];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){pe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),pe.copy(L))}function ce(L){Me.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function Ce(L,fe){let me=h.get(fe);me===void 0&&(me=new WeakMap,h.set(fe,me));let Fe=me.get(L);Fe===void 0&&(Fe=t.getUniformBlockIndex(fe,L.name),me.set(L,Fe))}function xe(L,fe){const Fe=h.get(fe).get(L);f.get(fe)!==Fe&&(t.uniformBlockBinding(fe,Fe,L.__bindingPointIndex),f.set(fe,Fe))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,ne={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,y=null,b=null,E=null,T=null,D=null,S=new Te(0,0,0),w=0,z=!1,k=null,ie=null,U=null,H=null,q=null,pe.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:De,bindFramebuffer:et,drawBuffers:V,useProgram:qt,setBlending:Ae,setMaterial:ft,setFlipSided:We,setCullFace:C,setLineWidth:M,setPolygonOffset:O,setScissorTest:se,activeTexture:re,bindTexture:le,unbindTexture:be,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:ve,updateUBOMapping:Ce,uniformBlockBinding:xe,texStorage2D:Ke,texStorage3D:Be,texSubImage2D:Ne,texSubImage3D:Xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:st,scissor:P,viewport:ce,reset:ae}}function jT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):dc("canvas")}function x(C,M,O,se){let re=1;if((C.width>se||C.height>se)&&(re=se/Math.max(C.width,C.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=M?eh:Math.floor,be=le(re*C.width),ge=le(re*C.height);h===void 0&&(h=_(be,ge));const ye=O?_(be,ge):h;return ye.width=be,ye.height=ge,ye.getContext("2d").drawImage(C,0,0,be,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+ge+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return hm(C.width)&&hm(C.height)}function u(C){return a?!1:C.wrapS!==zn||C.wrapT!==zn||C.minFilter!==Dt&&C.minFilter!==Kn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==Dt&&C.minFilter!==Kn}function g(C){t.generateMipmap(C)}function y(C,M,O,se,re=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=M;if(M===t.RED&&(O===t.FLOAT&&(le=t.R32F),O===t.HALF_FLOAT&&(le=t.R16F),O===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(le=t.R8UI),O===t.UNSIGNED_SHORT&&(le=t.R16UI),O===t.UNSIGNED_INT&&(le=t.R32UI),O===t.BYTE&&(le=t.R8I),O===t.SHORT&&(le=t.R16I),O===t.INT&&(le=t.R32I)),M===t.RG&&(O===t.FLOAT&&(le=t.RG32F),O===t.HALF_FLOAT&&(le=t.RG16F),O===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const be=re?cc:gt.getTransfer(se);O===t.FLOAT&&(le=t.RGBA32F),O===t.HALF_FLOAT&&(le=t.RGBA16F),O===t.UNSIGNED_BYTE&&(le=be===St?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(C,M,O){return v(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===Dt||C===Fp||C===du?t.NEAREST:t.LINEAR}function T(C){const M=C.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&f.delete(M)}function D(C){const M=C.target;M.removeEventListener("dispose",D),z(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const O=C.source,se=d.get(O);if(se){const re=se[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(C),Object.keys(se).length===0&&d.delete(O)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const O=C.source,se=d.get(O);delete se[M.__cacheKey],o.memory.textures--}function z(C){const M=C.texture,O=i.get(C),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(O.__webglFramebuffer[re]))for(let le=0;le<O.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(O.__webglFramebuffer[re][le]);else t.deleteFramebuffer(O.__webglFramebuffer[re]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[re])}else{if(Array.isArray(O.__webglFramebuffer))for(let re=0;re<O.__webglFramebuffer.length;re++)t.deleteFramebuffer(O.__webglFramebuffer[re]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let re=0;re<O.__webglColorRenderbuffer.length;re++)O.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[re]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,le=M.length;re<le;re++){const be=i.get(M[re]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[re])}i.remove(M),i.remove(C)}let k=0;function ie(){k=0}function U(){const C=k;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),k+=1,C}function H(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const O=i.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(O,C,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function Z(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){pe(O,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function I(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){pe(O,C,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function B(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){Me(O,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const W={[$f]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},J={[Dt]:t.NEAREST,[Fp]:t.NEAREST_MIPMAP_NEAREST,[du]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[CS]:t.LINEAR_MIPMAP_NEAREST,[ha]:t.LINEAR_MIPMAP_LINEAR},ne={[BS]:t.NEVER,[jS]:t.ALWAYS,[HS]:t.LESS,[Hv]:t.LEQUAL,[VS]:t.EQUAL,[XS]:t.GEQUAL,[GS]:t.GREATER,[WS]:t.NOTEQUAL};function K(C,M,O){if(O?(t.texParameteri(C,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,W[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,J[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==zn||M.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,E(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Dt&&M.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Dt||M.minFilter!==du&&M.minFilter!==ha||M.type===Si&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ee(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const se=M.source;let re=d.get(se);re===void 0&&(re={},d.set(se,re));const le=H(M);if(le!==C.__cacheKey){re[le]===void 0&&(re[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),re[le].usedTimes++;const be=re[C.__cacheKey];be!==void 0&&(re[C.__cacheKey].usedTimes--,be.usedTimes===0&&w(M)),C.__cacheKey=le,C.__webglTexture=re[le].texture}return O}function pe(C,M,O){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const re=ee(C,M),le=M.source;n.bindTexture(se,C.__webglTexture,t.TEXTURE0+O);const be=i.get(le);if(le.version!==be.__version||re===!0){n.activeTexture(t.TEXTURE0+O);const ge=gt.getPrimaries(gt.workingColorSpace),ye=M.colorSpace===Jn?null:gt.getPrimaries(M.colorSpace),Ne=M.colorSpace===Jn||ge===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Xe=u(M)&&p(M.image)===!1;let oe=x(M.image,Xe,!1,r.maxTextureSize);oe=We(M,oe);const st=p(oe)||a,Ke=s.convert(M.format,M.colorSpace);let Be=s.convert(M.type),Pe=y(M.internalFormat,Ke,Be,M.colorSpace,M.isVideoTexture);K(se,M,st);let ve;const P=M.mipmaps,ce=a&&M.isVideoTexture!==!0&&Pe!==zv,Ce=be.__version===void 0||re===!0,xe=b(M,oe,st);if(M.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?M.type===Si?Pe=t.DEPTH_COMPONENT32F:M.type===ar?Pe=t.DEPTH_COMPONENT24:M.type===Gr?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:M.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wr&&Pe===t.DEPTH_COMPONENT&&M.type!==Jh&&M.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ar,Be=s.convert(M.type)),M.format===to&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,M.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Gr,Be=s.convert(M.type))),Ce&&(ce?n.texStorage2D(t.TEXTURE_2D,1,Pe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Ke,Be,null));else if(M.isDataTexture)if(P.length>0&&st){ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,xe,Pe,P[0].width,P[0].height);for(let ae=0,L=P.length;ae<L;ae++)ve=P[ae],ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ke,Be,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Pe,ve.width,ve.height,0,Ke,Be,ve.data);M.generateMipmaps=!1}else ce?(Ce&&n.texStorage2D(t.TEXTURE_2D,xe,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Ke,Be,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,Ke,Be,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ce&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Pe,P[0].width,P[0].height,oe.depth);for(let ae=0,L=P.length;ae<L;ae++)ve=P[ae],M.format!==kn?Ke!==null?ce?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,Ke,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Pe,ve.width,ve.height,oe.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,Ke,Be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Pe,ve.width,ve.height,oe.depth,0,Ke,Be,ve.data)}else{ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,xe,Pe,P[0].width,P[0].height);for(let ae=0,L=P.length;ae<L;ae++)ve=P[ae],M.format!==kn?Ke!==null?ce?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ke,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,Ke,Be,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Pe,ve.width,ve.height,0,Ke,Be,ve.data)}else if(M.isDataArrayTexture)ce?(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ke,Be,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,Ke,Be,oe.data);else if(M.isData3DTexture)ce?(Ce&&n.texStorage3D(t.TEXTURE_3D,xe,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ke,Be,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,Ke,Be,oe.data);else if(M.isFramebufferTexture){if(Ce)if(ce)n.texStorage2D(t.TEXTURE_2D,xe,Pe,oe.width,oe.height);else{let ae=oe.width,L=oe.height;for(let fe=0;fe<xe;fe++)n.texImage2D(t.TEXTURE_2D,fe,Pe,ae,L,0,Ke,Be,null),ae>>=1,L>>=1}}else if(P.length>0&&st){ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,xe,Pe,P[0].width,P[0].height);for(let ae=0,L=P.length;ae<L;ae++)ve=P[ae],ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Ke,Be,ve):n.texImage2D(t.TEXTURE_2D,ae,Pe,Ke,Be,ve);M.generateMipmaps=!1}else ce?(Ce&&n.texStorage2D(t.TEXTURE_2D,xe,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ke,Be,oe)):n.texImage2D(t.TEXTURE_2D,0,Pe,Ke,Be,oe);v(M,st)&&g(se),be.__version=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Me(C,M,O){if(M.image.length!==6)return;const se=ee(C,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const le=i.get(re);if(re.version!==le.__version||se===!0){n.activeTexture(t.TEXTURE0+O);const be=gt.getPrimaries(gt.workingColorSpace),ge=M.colorSpace===Jn?null:gt.getPrimaries(M.colorSpace),ye=M.colorSpace===Jn||be===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Xe=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ae=0;ae<6;ae++)!Ne&&!Xe?oe[ae]=x(M.image[ae],!1,!0,r.maxCubemapSize):oe[ae]=Xe?M.image[ae].image:M.image[ae],oe[ae]=We(M,oe[ae]);const st=oe[0],Ke=p(st)||a,Be=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),ve=y(M.internalFormat,Be,Pe,M.colorSpace),P=a&&M.isVideoTexture!==!0,ce=le.__version===void 0||se===!0;let Ce=b(M,st,Ke);K(t.TEXTURE_CUBE_MAP,M,Ke);let xe;if(Ne){P&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ve,st.width,st.height);for(let ae=0;ae<6;ae++){xe=oe[ae].mipmaps;for(let L=0;L<xe.length;L++){const fe=xe[L];M.format!==kn?Be!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,fe.width,fe.height,Be,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,fe.width,fe.height,Be,Pe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,ve,fe.width,fe.height,0,Be,Pe,fe.data)}}}else{xe=M.mipmaps,P&&ce&&(xe.length>0&&Ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ve,oe[0].width,oe[0].height));for(let ae=0;ae<6;ae++)if(Xe){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,oe[ae].width,oe[ae].height,Be,Pe,oe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,oe[ae].width,oe[ae].height,0,Be,Pe,oe[ae].data);for(let L=0;L<xe.length;L++){const me=xe[L].image[ae].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,me.width,me.height,Be,Pe,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,ve,me.width,me.height,0,Be,Pe,me.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,Pe,oe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ve,Be,Pe,oe[ae]);for(let L=0;L<xe.length;L++){const fe=xe[L];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,Be,Pe,fe.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,ve,Be,Pe,fe.image[ae])}}}v(M,Ke)&&g(t.TEXTURE_CUBE_MAP),le.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function we(C,M,O,se,re,le){const be=s.convert(O.format,O.colorSpace),ge=s.convert(O.type),ye=y(O.internalFormat,be,ge,O.colorSpace);if(!i.get(M).__hasExternalTextures){const Xe=Math.max(1,M.width>>le),oe=Math.max(1,M.height>>le);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,le,ye,Xe,oe,M.depth,0,be,ge,null):n.texImage2D(re,le,ye,Xe,oe,0,be,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ae(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,re,i.get(O).__webglTexture,0,Ve(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,re,i.get(O).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(C,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||Ae(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===Si?se=t.DEPTH_COMPONENT32F:re.type===ar&&(se=t.DEPTH_COMPONENT24));const le=Ve(M);Ae(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const se=Ve(M);O&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):Ae(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<se.length;re++){const le=se[re],be=s.convert(le.format,le.colorSpace),ge=s.convert(le.type),ye=y(le.internalFormat,be,ge,le.colorSpace),Ne=Ve(M);O&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ye,M.width,M.height):Ae(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,re=Ve(M);if(M.depthTexture.format===Wr)Ae(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===to)Ae(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function De(C){const M=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");He(M.__webglFramebuffer,C)}else if(O){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),Ge(M.__webglDepthbuffer[se],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ge(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(C,M,O){const se=i.get(C);M!==void 0&&we(se.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&De(C)}function V(C){const M=C.texture,O=i.get(C),se=i.get(M);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,be=p(C)||a;if(re){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let ye=0;ye<M.mipmaps.length;ye++)O.__webglFramebuffer[ge][ye]=t.createFramebuffer()}else O.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)O.__webglFramebuffer[ge]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ge=C.texture;for(let ye=0,Ne=ge.length;ye<Ne;ye++){const Xe=i.get(ge[ye]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ae(C)===!1){const ge=le?M:[M];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Ne=ge[ye];O.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);const Xe=s.convert(Ne.format,Ne.colorSpace),oe=s.convert(Ne.type),st=y(Ne.internalFormat,Xe,oe,Ne.colorSpace,C.isXRRenderTarget===!0),Ke=Ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,st,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),K(t.TEXTURE_CUBE_MAP,M,be);for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)we(O.__webglFramebuffer[ge][ye],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else we(O.__webglFramebuffer[ge],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(M,be)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ge=C.texture;for(let ye=0,Ne=ge.length;ye<Ne;ye++){const Xe=ge[ye],oe=i.get(Xe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),K(t.TEXTURE_2D,Xe,be),we(O.__webglFramebuffer,C,Xe,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),v(Xe,be)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ge=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,se.__webglTexture),K(ge,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)we(O.__webglFramebuffer[ye],C,M,t.COLOR_ATTACHMENT0,ge,ye);else we(O.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ge,0);v(M,be)&&g(ge),n.unbindTexture()}C.depthBuffer&&De(C)}function qt(C){const M=p(C)||a,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,re=O.length;se<re;se++){const le=O[se];if(v(le,M)){const be=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(le).__webglTexture;n.bindTexture(be,ge),g(be),n.unbindTexture()}}}function Ie(C){if(a&&C.samples>0&&Ae(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,se=C.height;let re=t.COLOR_BUFFER_BIT;const le=[],be=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(C),ye=C.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ne=0;Ne<M.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){le.push(t.COLOR_ATTACHMENT0+Ne),C.depthBuffer&&le.push(be);const Xe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Xe===!1&&(C.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),ye){const oe=i.get(M[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,O,se,0,0,O,se,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Ne=0;Ne<M.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]);const Xe=i.get(M[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function Ae(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function We(C,M){const O=C.colorSpace,se=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Zf||O!==Wi&&O!==Jn&&(gt.getTransfer(O)===St?a===!1?e.has("EXT_sRGB")===!0&&se===kn?(C.format=Zf,C.minFilter=Kn,C.generateMipmaps=!1):M=Gv.sRGBToLinear(M):(se!==kn||re!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=U,this.resetTextureUnits=ie,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=I,this.setTextureCube=B,this.rebindTextures=et,this.setupRenderTarget=V,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ae}function YT(t,e,n){const i=n.isWebGL2;function r(s,o=Jn){let a;const l=gt.getTransfer(o);if(s===vr)return t.UNSIGNED_BYTE;if(s===Uv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Iv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===RS)return t.BYTE;if(s===PS)return t.SHORT;if(s===Jh)return t.UNSIGNED_SHORT;if(s===Dv)return t.INT;if(s===ar)return t.UNSIGNED_INT;if(s===Si)return t.FLOAT;if(s===ki)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===LS)return t.ALPHA;if(s===kn)return t.RGBA;if(s===DS)return t.LUMINANCE;if(s===US)return t.LUMINANCE_ALPHA;if(s===Wr)return t.DEPTH_COMPONENT;if(s===to)return t.DEPTH_STENCIL;if(s===Zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===IS)return t.RED;if(s===Nv)return t.RED_INTEGER;if(s===NS)return t.RG;if(s===Ov)return t.RG_INTEGER;if(s===Fv)return t.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===vu)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zp||s===kp||s===Bp||s===Hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Gp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vp)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wp||s===Xp||s===jp||s===Yp||s===qp||s===Kp||s===$p||s===Qp||s===Zp||s===Jp||s===em||s===tm||s===nm||s===im)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$p)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tm)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nm)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===im)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u||s===rm||s===sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_u)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===OS||s===om||s===am||s===lm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===om)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===am)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qT extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $T extends es{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,_=null;const x=n.getContextAttributes();let p=null,u=null;const v=[],g=[],y=new he;let b=null;const E=new Qn;E.layers.enable(1),E.viewport=new on;const T=new Qn;T.layers.enable(2),T.viewport=new on;const D=[E,T],S=new qT;S.layers.enable(1),S.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=v[K];return ee===void 0&&(ee=new Vu,v[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=v[K];return ee===void 0&&(ee=new Vu,v[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=v[K];return ee===void 0&&(ee=new Vu,v[K]=ee),ee.getHandSpace()};function k(K){const ee=g.indexOf(K.inputSource);if(ee===-1)return;const pe=v[ee];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function ie(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",U);for(let K=0;K<v.length;K++){const ee=g[K];ee!==null&&(g[K]=null,v[K].disconnect(ee))}w=null,z=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,u=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ni(m.framebufferWidth,m.framebufferHeight,{format:kn,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,pe=null,Me=null;x.depth&&(Me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=x.stencil?to:Wr,pe=x.stencil?Gr:ar);const we={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new ni(d.textureWidth,d.textureHeight,{format:kn,type:vr,depthTexture:new e_(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ge=e.properties.get(u);Ge.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(K){for(let ee=0;ee<K.removed.length;ee++){const pe=K.removed[ee],Me=g.indexOf(pe);Me>=0&&(g[Me]=null,v[Me].disconnect(pe))}for(let ee=0;ee<K.added.length;ee++){const pe=K.added[ee];let Me=g.indexOf(pe);if(Me===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=g.length){g.push(pe),Me=Ge;break}else if(g[Ge]===null){g[Ge]=pe,Me=Ge;break}if(Me===-1)break}const we=v[Me];we&&we.connect(pe)}}const H=new R,q=new R;function Z(K,ee,pe){H.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const Me=H.distanceTo(q),we=ee.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,He=we[14]/(we[10]-1),De=we[14]/(we[10]+1),et=(we[9]+1)/we[5],V=(we[9]-1)/we[5],qt=(we[8]-1)/we[0],Ie=(Ge[8]+1)/Ge[0],Ve=He*qt,Ae=He*Ie,ft=Me/(-qt+Ie),We=ft*-qt;ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=He+ft,M=De+ft,O=Ve-We,se=Ae+(Me-We),re=et*De/M*C,le=V*De/M*C;K.projectionMatrix.makePerspective(O,se,re,le,C,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function I(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;S.near=T.near=E.near=K.near,S.far=T.far=E.far=K.far,(w!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far);const ee=K.parent,pe=S.cameras;I(S,ee);for(let Me=0;Me<pe.length;Me++)I(pe[Me],ee);pe.length===2?Z(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),B(K,S,ee)};function B(K,ee,pe){pe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)};let W=null;function J(K,ee){if(f=ee.getViewerPose(c||o),_=ee,f!==null){const pe=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Me=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,Me=!0);for(let we=0;we<pe.length;we++){const Ge=pe[we];let He=null;if(m!==null)He=m.getViewport(Ge);else{const et=h.getViewSubImage(d,Ge);He=et.viewport,we===0&&(e.setRenderTargetTextures(u,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(u))}let De=D[we];De===void 0&&(De=new Qn,De.layers.enable(we),De.viewport=new on,D[we]=De),De.matrix.fromArray(Ge.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ge.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(He.x,He.y,He.width,He.height),we===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Me===!0&&S.cameras.push(De)}}for(let pe=0;pe<v.length;pe++){const Me=g[pe],we=v[pe];Me!==null&&we!==void 0&&we.update(Me,ee,c||o)}W&&W(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const ne=new Zv;ne.setAnimationLoop(J),this.setAnimationLoop=function(K){W=K},this.dispose=function(){}}}function QT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Kv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===en&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===en&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(_(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function f(v){const g=h();v.__bindingPointIndex=g;const y=t.createBuffer(),b=v.__size,E=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],y=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let E=0,T=y.length;E<T;E++){const D=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,w=D.length;S<w;S++){const z=D[S];if(m(z,E,S,b)===!0){const k=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let U=0;for(let H=0;H<ie.length;H++){const q=ie[H],Z=x(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,k+U,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y,b){const E=v.value,T=g+"_"+y;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const D=b[T];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return b[T]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function _(v){const g=v.uniforms;let y=0;const b=16;for(let T=0,D=g.length;T<D;T++){const S=Array.isArray(g[T])?g[T]:[g[T]];for(let w=0,z=S.length;w<z;w++){const k=S[w],ie=Array.isArray(k.value)?k.value:[k.value];for(let U=0,H=ie.length;U<H;U++){const q=ie[U],Z=x(q),I=y%b;I!==0&&b-I<Z.boundary&&(y+=b-I),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Z.storage}}}const E=y%b;return E>0&&(y+=b-E),v.__size=y,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class o_{constructor(e={}){const{canvas:n=KS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const g=this;let y=!1,b=0,E=0,T=null,D=-1,S=null;const w=new on,z=new on;let k=null;const ie=new Te(0);let U=0,H=n.width,q=n.height,Z=1,I=null,B=null;const W=new on(0,0,H,q),J=new on(0,0,H,q);let ne=!1;const K=new Qv;let ee=!1,pe=!1,Me=null;const we=new Bt,Ge=new he,He=new R,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return T===null?Z:1}let V=i;function qt(A,N){for(let X=0;X<A.length;X++){const j=A[X],G=n.getContext(j,N);if(G!==null)return G}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zh}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",fe,!1),V===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),V=qt(N,A),V===null)throw qt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,Ve,Ae,ft,We,C,M,O,se,re,le,be,ge,ye,Ne,Xe,oe,st,Ke,Be,Pe,ve,P,ce;function Ce(){Ie=new lw(V),Ve=new nw(V,Ie,e),Ie.init(Ve),ve=new YT(V,Ie,Ve),Ae=new XT(V,Ie,Ve),ft=new fw(V),We=new LT,C=new jT(V,Ie,Ae,We,Ve,ve,ft),M=new rw(g),O=new aw(g),se=new xM(V,Ve),P=new ew(V,Ie,se,Ve),re=new cw(V,se,ft,P),le=new mw(V,re,se,ft),Ke=new pw(V,Ve,C),Xe=new iw(We),be=new PT(g,M,O,Ie,Ve,P,Xe),ge=new QT(g,We),ye=new UT,Ne=new kT(Ie,Ve),st=new J1(g,M,O,Ae,le,d,l),oe=new WT(g,le,Ve),ce=new ZT(V,ft,Ve,Ae),Be=new tw(V,Ie,ft,Ve),Pe=new uw(V,Ie,ft,Ve),ft.programs=be.programs,g.capabilities=Ve,g.extensions=Ie,g.properties=We,g.renderLists=ye,g.shadowMap=oe,g.state=Ae,g.info=ft}Ce();const xe=new $T(g,V);this.xr=xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(H,q,!1))},this.getSize=function(A){return A.set(H,q)},this.setSize=function(A,N,X=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,q=N,n.width=Math.floor(A*Z),n.height=Math.floor(N*Z),X===!0&&(n.style.width=A+"px",n.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(H*Z,q*Z).floor()},this.setDrawingBufferSize=function(A,N,X){H=A,q=N,Z=X,n.width=Math.floor(A*X),n.height=Math.floor(N*X),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,N,X,j){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,N,X,j),Ae.viewport(w.copy(W).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,N,X,j){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,N,X,j),Ae.scissor(z.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){Ae.setScissorTest(ne=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(A=!0,N=!0,X=!0){let j=0;if(A){let G=!1;if(T!==null){const _e=T.texture.format;G=_e===Fv||_e===Ov||_e===Nv}if(G){const _e=T.texture.type,Re=_e===vr||_e===ar||_e===Jh||_e===Gr||_e===Uv||_e===Iv,ke=st.getClearColor(),ze=st.getClearAlpha(),$e=ke.r,je=ke.g,qe=ke.b;Re?(m[0]=$e,m[1]=je,m[2]=qe,m[3]=ze,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=$e,_[1]=je,_[2]=qe,_[3]=ze,V.clearBufferiv(V.COLOR,0,_))}else j|=V.COLOR_BUFFER_BIT}N&&(j|=V.DEPTH_BUFFER_BIT),X&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ye.dispose(),Ne.dispose(),We.dispose(),M.dispose(),O.dispose(),le.dispose(),P.dispose(),ce.dispose(),be.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ct),xe.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),Et.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ft.autoReset,N=oe.enabled,X=oe.autoUpdate,j=oe.needsUpdate,G=oe.type;Ce(),ft.autoReset=A,oe.enabled=N,oe.autoUpdate=X,oe.needsUpdate=j,oe.type=G}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const N=A.target;N.removeEventListener("dispose",me),Fe(N)}function Fe(A){Le(A),We.remove(A)}function Le(A){const N=We.get(A).programs;N!==void 0&&(N.forEach(function(X){be.releaseProgram(X)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,X,j,G,_e){N===null&&(N=De);const Re=G.isMesh&&G.matrixWorld.determinant()<0,ke=zc(A,N,X,j,G);Ae.setMaterial(j,Re);let ze=X.index,$e=1;if(j.wireframe===!0){if(ze=re.getWireframeAttribute(X),ze===void 0)return;$e=2}const je=X.drawRange,qe=X.attributes.position;let Tt=je.start*$e,Kt=(je.start+je.count)*$e;_e!==null&&(Tt=Math.max(Tt,_e.start*$e),Kt=Math.min(Kt,(_e.start+_e.count)*$e)),ze!==null?(Tt=Math.max(Tt,0),Kt=Math.min(Kt,ze.count)):qe!=null&&(Tt=Math.max(Tt,0),Kt=Math.min(Kt,qe.count));const It=Kt-Tt;if(It<0||It===1/0)return;P.setup(G,j,ke,X,ze);let si,dt=Be;if(ze!==null&&(si=se.get(ze),dt=Pe,dt.setIndex(si)),G.isMesh)j.wireframe===!0?(Ae.setLineWidth(j.wireframeLinewidth*et()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(G.isLine){let Ze=j.linewidth;Ze===void 0&&(Ze=1),Ae.setLineWidth(Ze*et()),G.isLineSegments?dt.setMode(V.LINES):G.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else G.isPoints?dt.setMode(V.POINTS):G.isSprite&&dt.setMode(V.TRIANGLES);if(G.isBatchedMesh)dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)dt.renderInstances(Tt,It,G.count);else if(X.isInstancedBufferGeometry){const Ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wi=Math.min(X.instanceCount,Ze);dt.renderInstances(Tt,It,wi)}else dt.render(Tt,It)};function tt(A,N,X){A.transparent===!0&&A.side===Zn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,uo(A,N,X),A.side=yr,A.needsUpdate=!0,uo(A,N,X),A.side=Zn):uo(A,N,X)}this.compile=function(A,N,X=null){X===null&&(X=A),p=Ne.get(X),p.init(),v.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==X&&A.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(g._useLegacyLights);const j=new Set;return A.traverse(function(G){const _e=G.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const ke=_e[Re];tt(ke,X,G),j.add(ke)}else tt(_e,X,G),j.add(_e)}),v.pop(),p=null,j},this.compileAsync=function(A,N,X=null){const j=this.compile(A,N,X);return new Promise(G=>{function _e(){if(j.forEach(function(Re){We.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){G(A);return}setTimeout(_e,10)}Ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ye=null;function vt(A){Ye&&Ye(A)}function ct(){Et.stop()}function ot(){Et.start()}const Et=new Zv;Et.setAnimationLoop(vt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(A){Ye=A,xe.setAnimationLoop(A),A===null?Et.stop():Et.start()},xe.addEventListener("sessionstart",ct),xe.addEventListener("sessionend",ot),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,N,T),p=Ne.get(A,v.length),p.init(),v.push(p),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(we),pe=this.localClippingEnabled,ee=Xe.init(this.clippingPlanes,pe),x=ye.get(A,u.length),x.init(),u.push(x),Xn(A,N,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,B),this.info.render.frame++,ee===!0&&Xe.beginShadows();const X=p.state.shadowsArray;if(oe.render(X,A,N),ee===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(x,A),p.setupLights(g._useLegacyLights),N.isArrayCamera){const j=N.cameras;for(let G=0,_e=j.length;G<_e;G++){const Re=j[G];Ta(x,A,Re,Re.viewport)}}else Ta(x,A,N);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,N),P.resetDefaultState(),D=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Xn(A,N,X,j){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){j&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=le.update(A),ke=A.material;ke.visible&&x.push(A,Re,ke,X,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Re=le.update(A),ke=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(ke)){const ze=Re.groups;for(let $e=0,je=ze.length;$e<je;$e++){const qe=ze[$e],Tt=ke[qe.materialIndex];Tt&&Tt.visible&&x.push(A,Re,Tt,X,He.z,qe)}}else ke.visible&&x.push(A,Re,ke,X,He.z,null)}}const _e=A.children;for(let Re=0,ke=_e.length;Re<ke;Re++)Xn(_e[Re],N,X,j)}function Ta(A,N,X,j){const G=A.opaque,_e=A.transmissive,Re=A.transparent;p.setupLightsView(X),ee===!0&&Xe.setGlobalState(g.clippingPlanes,X),_e.length>0&&Aa(G,_e,N,X),j&&Ae.viewport(w.copy(j)),G.length>0&&Tr(G,N,X),_e.length>0&&Tr(_e,N,X),Re.length>0&&Tr(Re,N,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Aa(A,N,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const _e=Ve.isWebGL2;Me===null&&(Me=new ni(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?ki:vr,minFilter:ha,samples:_e?4:0})),g.getDrawingBufferSize(Ge),_e?Me.setSize(Ge.x,Ge.y):Me.setSize(eh(Ge.x),eh(Ge.y));const Re=g.getRenderTarget();g.setRenderTarget(Me),g.getClearColor(ie),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear();const ke=g.toneMapping;g.toneMapping=gr,Tr(A,X,j),C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me);let ze=!1;for(let $e=0,je=N.length;$e<je;$e++){const qe=N[$e],Tt=qe.object,Kt=qe.geometry,It=qe.material,si=qe.group;if(It.side===Zn&&Tt.layers.test(j.layers)){const dt=It.side;It.side=en,It.needsUpdate=!0,co(Tt,X,j,Kt,It,si),It.side=dt,It.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me)),g.setRenderTarget(Re),g.setClearColor(ie,U),g.toneMapping=ke}function Tr(A,N,X){const j=N.isScene===!0?N.overrideMaterial:null;for(let G=0,_e=A.length;G<_e;G++){const Re=A[G],ke=Re.object,ze=Re.geometry,$e=j===null?Re.material:j,je=Re.group;ke.layers.test(X.layers)&&co(ke,N,X,ze,$e,je)}}function co(A,N,X,j,G,_e){A.onBeforeRender(g,N,X,j,G,_e),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(g,N,X,j,A,_e),G.transparent===!0&&G.side===Zn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,g.renderBufferDirect(X,N,j,G,A,_e),G.side=yr,G.needsUpdate=!0,g.renderBufferDirect(X,N,j,G,A,_e),G.side=Zn):g.renderBufferDirect(X,N,j,G,A,_e),A.onAfterRender(g,N,X,j,G,_e)}function uo(A,N,X){N.isScene!==!0&&(N=De);const j=We.get(A),G=p.state.lights,_e=p.state.shadowsArray,Re=G.state.version,ke=be.getParameters(A,G.state,_e,N,X),ze=be.getProgramCacheKey(ke);let $e=j.programs;j.environment=A.isMeshStandardMaterial?N.environment:null,j.fog=N.fog,j.envMap=(A.isMeshStandardMaterial?O:M).get(A.envMap||j.environment),$e===void 0&&(A.addEventListener("dispose",me),$e=new Map,j.programs=$e);let je=$e.get(ze);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Re)return ns(A,ke),je}else ke.uniforms=be.getUniforms(A),A.onBuild(X,ke,g),A.onBeforeCompile(ke,g),je=be.acquireProgram(ke,ze),$e.set(ze,je),j.uniforms=ke.uniforms;const qe=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Xe.uniform),ns(A,ke),j.needsLights=ud(A),j.lightsStateVersion=Re,j.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function fo(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Fl.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function ns(A,N){const X=We.get(A);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function zc(A,N,X,j,G){N.isScene!==!0&&(N=De),C.resetTextureUnits();const _e=N.fog,Re=j.isMeshStandardMaterial?N.environment:null,ke=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wi,ze=(j.isMeshStandardMaterial?O:M).get(j.envMap||Re),$e=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),qe=!!X.morphAttributes.position,Tt=!!X.morphAttributes.normal,Kt=!!X.morphAttributes.color;let It=gr;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=g.toneMapping);const si=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=si!==void 0?si.length:0,Ze=We.get(j),wi=p.state.lights;if(ee===!0&&(pe===!0||A!==S)){const wn=A===S&&j.id===D;Xe.setState(j,A,wn)}let _t=!1;j.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==wi.state.version||Ze.outputColorSpace!==ke||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||Ze.envMap!==ze||j.fog===!0&&Ze.fog!==_e||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Xe.numPlanes||Ze.numIntersection!==Xe.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==je||Ze.morphTargets!==qe||Ze.morphNormals!==Tt||Ze.morphColors!==Kt||Ze.toneMapping!==It||Ve.isWebGL2===!0&&Ze.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Ze.__version=j.version);let Ti=Ze.currentProgram;_t===!0&&(Ti=uo(j,N,G));let Ar=!1,In=!1,br=!1;const Nt=Ti.getUniforms(),it=Ze.uniforms;if(Ae.useProgram(Ti.program)&&(Ar=!0,In=!0,br=!0),j.id!==D&&(D=j.id,In=!0),Ar||S!==A){Nt.setValue(V,"projectionMatrix",A.projectionMatrix),Nt.setValue(V,"viewMatrix",A.matrixWorldInverse);const wn=Nt.map.cameraPosition;wn!==void 0&&wn.setValue(V,He.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,In=!0,br=!0)}if(G.isSkinnedMesh){Nt.setOptional(V,G,"bindMatrix"),Nt.setOptional(V,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(Ve.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Nt.setValue(V,"boneTexture",wn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Nt.setOptional(V,G,"batchingTexture"),Nt.setValue(V,"batchingTexture",G._matricesTexture,C));const ho=X.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&Ve.isWebGL2===!0)&&Ke.update(G,X,Ti),(In||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,Nt.setValue(V,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(it.envMap.value=ze,it.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),In&&(Nt.setValue(V,"toneMappingExposure",g.toneMappingExposure),Ze.needsLights&&cd(it,br),_e&&j.fog===!0&&ge.refreshFogUniforms(it,_e),ge.refreshMaterialUniforms(it,j,Z,q,Me),Fl.upload(V,fo(Ze),it,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fl.upload(V,fo(Ze),it,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Nt.setValue(V,"center",G.center),Nt.setValue(V,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(V,"normalMatrix",G.normalMatrix),Nt.setValue(V,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const wn=j.uniformsGroups;for(let po=0,ba=wn.length;po<ba;po++)if(Ve.isWebGL2){const Ca=wn[po];ce.update(Ca,Ti),ce.bind(Ca,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function cd(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ud(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,N,X){We.get(A.texture).__webglTexture=N,We.get(A.depthTexture).__webglTexture=X;const j=We.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const X=We.get(A);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,X=0){T=A,b=N,E=X;let j=!0,G=null,_e=!1,Re=!1;if(A){const ze=We.get(A);ze.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):ze.__webglFramebuffer===void 0?C.setupRenderTarget(A):ze.__hasExternalTextures&&C.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[N])?G=je[N][X]:G=je[N],_e=!0):Ve.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?G=We.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[X]:G=je,w.copy(A.viewport),z.copy(A.scissor),k=A.scissorTest}else w.copy(W).multiplyScalar(Z).floor(),z.copy(J).multiplyScalar(Z).floor(),k=ne;if(Ae.bindFramebuffer(V.FRAMEBUFFER,G)&&Ve.drawBuffers&&j&&Ae.drawBuffers(A,G),Ae.viewport(w),Ae.scissor(z),Ae.setScissorTest(k),_e){const ze=We.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+N,ze.__webglTexture,X)}else if(Re){const ze=We.get(A.texture),$e=N||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.__webglTexture,X||0,$e)}D=-1},this.readRenderTargetPixels=function(A,N,X,j,G,_e,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){Ae.bindFramebuffer(V.FRAMEBUFFER,ke);try{const ze=A.texture,$e=ze.format,je=ze.type;if($e!==kn&&ve.convert($e)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=je===ki&&(Ie.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(je!==vr&&ve.convert(je)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Si&&(Ve.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-j&&X>=0&&X<=A.height-G&&V.readPixels(N,X,j,G,ve.convert($e),ve.convert(je),_e)}finally{const ze=T!==null?We.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(A,N,X=0){const j=Math.pow(2,-X),G=Math.floor(N.image.width*j),_e=Math.floor(N.image.height*j);C.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,A.x,A.y,G,_e),Ae.unbindTexture()},this.copyTextureToTexture=function(A,N,X,j=0){const G=N.image.width,_e=N.image.height,Re=ve.convert(X.format),ke=ve.convert(X.type);C.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,A.x,A.y,G,_e,Re,ke,N.image.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,Re,N.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,A.x,A.y,Re,ke,N.image),j===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,N,X,j,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,ze=ve.convert(j.format),$e=ve.convert(j.type);let je;if(j.isData3DTexture)C.setTexture3D(j,0),je=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),je=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const qe=V.getParameter(V.UNPACK_ROW_LENGTH),Tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Kt=V.getParameter(V.UNPACK_SKIP_PIXELS),It=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[G]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(je,G,N.x,N.y,N.z,_e,Re,ke,ze,$e,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(je,G,N.x,N.y,N.z,_e,Re,ke,ze,dt.data)):V.texSubImage3D(je,G,N.x,N.y,N.z,_e,Re,ke,ze,$e,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,It),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),G===0&&j.generateMipmaps&&V.generateMipmap(je),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,Ae.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ed?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Uc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?Xr:kv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?sn:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JT extends o_{}JT.prototype.isWebGL1Renderer=!0;class rd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=n}clone(){return new rd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class a_ extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class eA extends Dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Dt,f=Dt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l_ extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qm=new R,Zm=new R,Jm=new Bt,Gu=new Ma,gl=new Sa;class tA extends gn{constructor(e=new Yt,n=new l_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Qm.fromBufferAttribute(n,r-1),Zm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qm.distanceTo(Zm);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Jm.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(Jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,f=new R,h=new R,d=new R,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=u,y=v-1;g<y;g+=m){const b=_.getX(g),E=_.getX(g+1);if(c.fromBufferAttribute(p,b),f.fromBufferAttribute(p,E),Gu.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||n.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let g=u,y=v-1;g<y;g+=m){if(c.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),Gu.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||n.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const eg=new R,tg=new R;class nA extends tA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)eg.fromBufferAttribute(n,r),tg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+eg.distanceTo(tg);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iA extends ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ng=new Bt,nh=new Ma,vl=new Sa,_l=new R;class c_ extends gn{constructor(e=new Yt,n=new iA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;ng.copy(r).invert(),nh.copy(e.ray).applyMatrix4(ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,x=m;_<x;_++){const p=c.getX(_);_l.fromBufferAttribute(h,p),ig(_l,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m;_<x;_++)_l.fromBufferAttribute(h,_),ig(_l,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ig(t,e,n,i,r,s,o){const a=nh.distanceSqToPoint(t);if(a<n){const l=new R;nh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,m=(o-f)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new Bt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Jt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Jt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class u_ extends ji{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*h+this.aX,c=d*h+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rA extends u_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,m*=f,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const xl=new R,Wu=new sd,Xu=new sd,ju=new sd;class mc extends ji{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(xl.subVectors(r[0],r[1]).add(r[0]),c=xl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(xl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=xl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(f),m);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Wu.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,_,x,p),Xu.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,_,x,p),ju.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,_,x,p)}else this.curveType==="catmullrom"&&(Wu.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),Xu.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),ju.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return i.set(Wu.calc(l),Xu.calc(l),ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function sA(t,e){const n=1-t;return n*n*e}function oA(t,e){return 2*(1-t)*t*e}function aA(t,e){return t*t*e}function jo(t,e,n,i){return sA(t,e)+oA(t,n)+aA(t,i)}function lA(t,e){const n=1-t;return n*n*n*e}function cA(t,e){const n=1-t;return 3*n*n*t*e}function uA(t,e){return 3*(1-t)*t*t*e}function fA(t,e){return t*t*t*e}function Yo(t,e,n,i,r){return lA(t,e)+cA(t,n)+uA(t,i)+fA(t,r)}class hA extends ji{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yo(e,r.x,s.x,o.x,a.x),Yo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dA extends ji{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yo(e,r.x,s.x,o.x,a.x),Yo(e,r.y,s.y,o.y,a.y),Yo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pA extends ji{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mA extends ji{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gA extends ji{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f_ extends ji{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y),jo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vA extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(rg(a,l.x,c.x,f.x,h.x),rg(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var _A=Object.freeze({__proto__:null,ArcCurve:rA,CatmullRomCurve3:mc,CubicBezierCurve:hA,CubicBezierCurve3:dA,EllipseCurve:u_,LineCurve:pA,LineCurve3:mA,QuadraticBezierCurve:gA,QuadraticBezierCurve3:f_,SplineCurve:vA});class od extends Yt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let _=0;const x=[],p=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2));function v(){const y=new R,b=new R;let E=0;const T=(n-e)/i;for(let D=0;D<=s;D++){const S=[],w=D/s,z=w*(n-e)+e;for(let k=0;k<=r;k++){const ie=k/r,U=ie*l+a,H=Math.sin(U),q=Math.cos(U);b.x=z*H,b.y=-w*i+p,b.z=z*q,h.push(b.x,b.y,b.z),y.set(H,T,q).normalize(),d.push(y.x,y.y,y.z),m.push(ie,1-w),S.push(_++)}x.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const w=x[S][D],z=x[S+1][D],k=x[S+1][D+1],ie=x[S][D+1];f.push(w,z,ie),f.push(z,k,ie),E+=6}c.addGroup(u,E,0),u+=E}function g(y){const b=_,E=new he,T=new R;let D=0;const S=y===!0?e:n,w=y===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),_++;const z=_;for(let k=0;k<=r;k++){const U=k/r*l+a,H=Math.cos(U),q=Math.sin(U);T.x=S*q,T.y=p*w,T.z=S*H,h.push(T.x,T.y,T.z),d.push(0,w,0),E.x=H*.5+.5,E.y=q*.5*w+.5,m.push(E.x,E.y),_++}for(let k=0;k<r;k++){const ie=b+k,U=z+k;y===!0?f.push(U,U+1,ie):f.push(U+1,U,ie),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fc extends Yt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new R,y=new R,b=new R;for(let E=0;E<n.length;E+=3)m(n[E+0],g),m(n[E+1],y),m(n[E+2],b),l(g,y,b,v)}function l(v,g,y,b){const E=b+1,T=[];for(let D=0;D<=E;D++){T[D]=[];const S=v.clone().lerp(y,D/E),w=g.clone().lerp(y,D/E),z=E-D;for(let k=0;k<=z;k++)k===0&&D===E?T[D][k]=S:T[D][k]=S.clone().lerp(w,k/z)}for(let D=0;D<E;D++)for(let S=0;S<2*(E-D)-1;S++){const w=Math.floor(S/2);S%2===0?(d(T[D][w+1]),d(T[D+1][w]),d(T[D][w])):(d(T[D][w+1]),d(T[D+1][w+1]),d(T[D+1][w]))}}function c(v){const g=new R;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(v),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function f(){const v=new R;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const y=p(v)/2/Math.PI+.5,b=u(v)/Math.PI+.5;o.push(y,1-b)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const g=o[v+0],y=o[v+2],b=o[v+4],E=Math.max(g,y,b),T=Math.min(g,y,b);E>.9&&T<.1&&(g<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,g){const y=v*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function _(){const v=new R,g=new R,y=new R,b=new R,E=new he,T=new he,D=new he;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),b.copy(v).add(g).add(y).divideScalar(3);const z=p(b);x(E,w+0,v,z),x(T,w+2,g,z),x(D,w+4,y,z)}}function x(v,g,y,b){b<0&&v.x===1&&(o[g]=v.x-1),y.x===0&&y.z===0&&(o[g]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.vertices,e.indices,e.radius,e.details)}}class ad extends Fc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ad(e.radius,e.detail)}}const yl=new R,Sl=new R,Yu=new R,Ml=new $n;class El extends Yt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Wo*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),d={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:p,c:u}=Ml;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Ml.getNormal(Yu),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const g=(v+1)%3,y=h[v],b=h[g],E=Ml[f[v]],T=Ml[f[g]],D=`${y}_${b}`,S=`${b}_${y}`;S in d&&d[S]?(Yu.dot(d[S].normal)<=s&&(m.push(E.x,E.y,E.z),m.push(T.x,T.y,T.z)),d[S]=null):D in d||(d[D]={index0:c[v],index1:c[g],normal:Yu.clone()})}}for(const _ in d)if(d[_]){const{index0:x,index1:p}=d[_];yl.fromBufferAttribute(a,x),Sl.fromBufferAttribute(a,p),m.push(yl.x,yl.y,yl.z),m.push(Sl.x,Sl.y,Sl.z)}this.setAttribute("position",new ut(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ld extends Fc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ld(e.radius,e.detail)}}class da extends Yt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new R,d=new R,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const E=b/n;h.x=-e*Math.cos(r+E*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+g*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(E+y,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],y=f[u][v],b=f[u+1][v],E=f[u+1][v+1];(u!==0||o>0)&&m.push(g,y,E),(u!==i-1||l<Math.PI)&&m.push(y,b,E)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qo extends Yt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new R,h=new R,d=new R;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const x=_/r*s,p=m/i*Math.PI*2;h.x=(e+n*Math.cos(p))*Math.cos(x),h.y=(e+n*Math.cos(p))*Math.sin(x),h.z=n*Math.sin(p),a.push(h.x,h.y,h.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const x=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,v=(r+1)*m+_;o.push(x,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class io extends Yt{constructor(e=new f_(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new he;let f=new R;const h=[],d=[],m=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2));function x(){for(let g=0;g<n;g++)p(g);p(s===!1?n:0),v(),u()}function p(g){f=e.getPointAt(g/n,f);const y=o.normals[g],b=o.binormals[g];for(let E=0;E<=r;E++){const T=E/r*Math.PI*2,D=Math.sin(T),S=-Math.cos(T);l.x=S*y.x+D*b.x,l.y=S*y.y+D*b.y,l.z=S*y.z+D*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,h.push(a.x,a.y,a.z)}}function u(){for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){const b=(r+1)*(g-1)+(y-1),E=(r+1)*g+(y-1),T=(r+1)*g+y,D=(r+1)*(g-1)+y;_.push(b,E,D),_.push(E,T,D)}}function v(){for(let g=0;g<=n;g++)for(let y=0;y<=r;y++)c.x=g/n,c.y=y/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new io(new _A[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xA extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bv,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sg extends xA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yA extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class SA extends yA{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class h_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=og(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=og();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function og(){return(typeof performance>"u"?Date:performance).now()}class MA{constructor(e,n,i=0,r=1/0){this.ray=new Ma(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new td,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return ih(e,this,i,n),i.sort(ag),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ih(e[r],this,i,n);return i.sort(ag),i}}function ag(t,e){return t.distance-e.distance}function ih(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)ih(r[s],e,n,!0)}}class lg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);const cg={type:"change"},qu={type:"start"},ug={type:"end"},wl=new Ma,fg=new yn,EA=Math.cos(70*qS.DEG2RAD);class wA extends es{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ne),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cg),i.update(),s=r.NONE},this.update=function(){const P=new R,ce=new Qr().setFromUnitVectors(e.up,new R(0,1,0)),Ce=ce.clone().invert(),xe=new R,ae=new Qr,L=new R,fe=2*Math.PI;return function(Fe=null){const Le=i.object.position;P.copy(Le).sub(i.target),P.applyQuaternion(ce),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&k(w(Fe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let tt=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;isFinite(tt)&&isFinite(Ye)&&(tt<-Math.PI?tt+=fe:tt>Math.PI&&(tt-=fe),Ye<-Math.PI?Ye+=fe:Ye>Math.PI&&(Ye-=fe),tt<=Ye?a.theta=Math.max(tt,Math.min(Ye,a.theta)):a.theta=a.theta>(tt+Ye)/2?Math.max(tt,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&E||i.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ce),Le.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let vt=!1;if(i.zoomToCursor&&E){let ct=null;if(i.object.isPerspectiveCamera){const ot=P.length();ct=W(ot*c);const Et=ot-ct;i.object.position.addScaledVector(y,Et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ot=new R(b.x,b.y,0);ot.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0;const Et=new R(b.x,b.y,0);Et.unproject(i.object),i.object.position.sub(Et).add(ot),i.object.updateMatrixWorld(),ct=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ct).add(i.object.position):(wl.origin.copy(i.object.position),wl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(wl.direction))<EA?e.lookAt(i.target):(fg.setFromNormalAndCoplanarPoint(i.object.up,i.target),wl.intersectPlane(fg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0);return c=1,E=!1,vt||xe.distanceToSquared(i.object.position)>o||8*(1-ae.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(cg),xe.copy(i.object.position),ae.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",st),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",O),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new lg,l=new lg;let c=1;const f=new R,h=new he,d=new he,m=new he,_=new he,x=new he,p=new he,u=new he,v=new he,g=new he,y=new R,b=new he;let E=!1;const T=[],D={};let S=!1;function w(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function z(P){const ce=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*ce)}function k(P){l.theta-=P}function ie(P){l.phi-=P}const U=function(){const P=new R;return function(Ce,xe){P.setFromMatrixColumn(xe,0),P.multiplyScalar(-Ce),f.add(P)}}(),H=function(){const P=new R;return function(Ce,xe){i.screenSpacePanning===!0?P.setFromMatrixColumn(xe,1):(P.setFromMatrixColumn(xe,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ce),f.add(P)}}(),q=function(){const P=new R;return function(Ce,xe){const ae=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let fe=P.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),U(2*Ce*fe/ae.clientHeight,i.object.matrix),H(2*xe*fe/ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(Ce*(i.object.right-i.object.left)/i.object.zoom/ae.clientWidth,i.object.matrix),H(xe*(i.object.top-i.object.bottom)/i.object.zoom/ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(P,ce){if(!i.zoomToCursor)return;E=!0;const Ce=i.domElement.getBoundingClientRect(),xe=P-Ce.left,ae=ce-Ce.top,L=Ce.width,fe=Ce.height;b.x=xe/L*2-1,b.y=-(ae/fe)*2+1,y.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function W(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function J(P){h.set(P.clientX,P.clientY)}function ne(P){B(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function K(P){_.set(P.clientX,P.clientY)}function ee(P){d.set(P.clientX,P.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ce=i.domElement;k(2*Math.PI*m.x/ce.clientHeight),ie(2*Math.PI*m.y/ce.clientHeight),h.copy(d),i.update()}function pe(P){v.set(P.clientX,P.clientY),g.subVectors(v,u),g.y>0?Z(z(g.y)):g.y<0&&I(z(g.y)),u.copy(v),i.update()}function Me(P){x.set(P.clientX,P.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),q(p.x,p.y),_.copy(x),i.update()}function we(P){B(P.clientX,P.clientY),P.deltaY<0?I(z(P.deltaY)):P.deltaY>0&&Z(z(P.deltaY)),i.update()}function Ge(P){let ce=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),ce=!0;break}ce&&(P.preventDefault(),i.update())}function He(P){if(T.length===1)h.set(P.pageX,P.pageY);else{const ce=ve(P),Ce=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);h.set(Ce,xe)}}function De(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const ce=ve(P),Ce=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);_.set(Ce,xe)}}function et(P){const ce=ve(P),Ce=P.pageX-ce.x,xe=P.pageY-ce.y,ae=Math.sqrt(Ce*Ce+xe*xe);u.set(0,ae)}function V(P){i.enableZoom&&et(P),i.enablePan&&De(P)}function qt(P){i.enableZoom&&et(P),i.enableRotate&&He(P)}function Ie(P){if(T.length==1)d.set(P.pageX,P.pageY);else{const Ce=ve(P),xe=.5*(P.pageX+Ce.x),ae=.5*(P.pageY+Ce.y);d.set(xe,ae)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ce=i.domElement;k(2*Math.PI*m.x/ce.clientHeight),ie(2*Math.PI*m.y/ce.clientHeight),h.copy(d)}function Ve(P){if(T.length===1)x.set(P.pageX,P.pageY);else{const ce=ve(P),Ce=.5*(P.pageX+ce.x),xe=.5*(P.pageY+ce.y);x.set(Ce,xe)}p.subVectors(x,_).multiplyScalar(i.panSpeed),q(p.x,p.y),_.copy(x)}function Ae(P){const ce=ve(P),Ce=P.pageX-ce.x,xe=P.pageY-ce.y,ae=Math.sqrt(Ce*Ce+xe*xe);v.set(0,ae),g.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),Z(g.y),u.copy(v);const L=(P.pageX+ce.x)*.5,fe=(P.pageY+ce.y)*.5;B(L,fe)}function ft(P){i.enableZoom&&Ae(P),i.enablePan&&Ve(P)}function We(P){i.enableZoom&&Ae(P),i.enableRotate&&Ie(P)}function C(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",O)),Ke(P),P.pointerType==="touch"?Xe(P):se(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?oe(P):re(P))}function O(P){Be(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",O)),i.dispatchEvent(ug),s=r.NONE}function se(P){let ce;switch(P.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case ss.DOLLY:if(i.enableZoom===!1)return;ne(P),s=r.DOLLY;break;case ss.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;K(P),s=r.PAN}else{if(i.enableRotate===!1)return;J(P),s=r.ROTATE}break;case ss.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;J(P),s=r.ROTATE}else{if(i.enablePan===!1)return;K(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qu)}function re(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ee(P);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(P);break;case r.PAN:if(i.enablePan===!1)return;Me(P);break}}function le(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(qu),we(be(P)),i.dispatchEvent(ug))}function be(P){const ce=P.deltaMode,Ce={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ce){case 1:Ce.deltaY*=16;break;case 2:Ce.deltaY*=100;break}return P.ctrlKey&&!S&&(Ce.deltaY*=10),Ce}function ge(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Ne(P){i.enabled===!1||i.enablePan===!1||Ge(P)}function Xe(P){switch(Pe(P),T.length){case 1:switch(i.touches.ONE){case os.ROTATE:if(i.enableRotate===!1)return;He(P),s=r.TOUCH_ROTATE;break;case os.PAN:if(i.enablePan===!1)return;De(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case os.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(P),s=r.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;qt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qu)}function oe(P){switch(Pe(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ve(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ft(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;We(P),i.update();break;default:s=r.NONE}}function st(P){i.enabled!==!1&&P.preventDefault()}function Ke(P){T.push(P.pointerId)}function Be(P){delete D[P.pointerId];for(let ce=0;ce<T.length;ce++)if(T[ce]==P.pointerId){T.splice(ce,1);return}}function Pe(P){let ce=D[P.pointerId];ce===void 0&&(ce=new he,D[P.pointerId]=ce),ce.set(P.pageX,P.pageY)}function ve(P){const ce=P.pointerId===T[0]?T[1]:T[0];return D[ce]}i.domElement.addEventListener("contextmenu",st),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",O),i.domElement.addEventListener("wheel",le,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const d_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const TA=new Jv(-1,1,1,-1,0,1);class AA extends Yt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const bA=new AA;class p_{constructor(e){this._mesh=new At(bA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Io extends wa{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pc.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new p_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hg extends wa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class CA extends wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new he);this._width=i.width,this._height=i.height,n=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ki}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(d_),this.copyPass.material.blending=zi,this.clock=new h_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hg!==void 0&&(o instanceof hg?i=!0:o instanceof CA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PA extends wa{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const LA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ro extends wa{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(s,o,{type:ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ni(s,o,{type:ki});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new ni(s,o,{type:ki});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=LA;this.highPassUniforms=pc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=d_;this.copyUniforms=pc.clone(f.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Sr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new p_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ro.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ro.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}ro.BlurDirectionX=new he(1,0);ro.BlurDirectionY=new he(0,1);class DA{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=Si;const s=new a_,o=new nd;o.position.z=1;const a={passThruTexture:{value:null}},l=h(m(),a),c=new At(new Nc(2,2),l);s.add(c),this.setDataType=function(_){return r=_,this},this.addVariable=function(_,x,p){const u=this.createShaderMaterial(x),v={name:_,initialValueTexture:p,material:u,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Dt,magFilter:Dt};return this.variables.push(v),v},this.setVariableDependencies=function(_,x){_.dependencies=x},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let _=0;_<this.variables.length;_++){const x=this.variables[_];x.renderTargets[0]=this.createRenderTarget(e,n,x.wrapS,x.wrapT,x.minFilter,x.magFilter),x.renderTargets[1]=this.createRenderTarget(e,n,x.wrapS,x.wrapT,x.minFilter,x.magFilter),this.renderTexture(x.initialValueTexture,x.renderTargets[0]),this.renderTexture(x.initialValueTexture,x.renderTargets[1]);const p=x.material,u=p.uniforms;if(x.dependencies!==null)for(let v=0;v<x.dependencies.length;v++){const g=x.dependencies[v];if(g.name!==x.name){let y=!1;for(let b=0;b<this.variables.length;b++)if(g.name===this.variables[b].name){y=!0;break}if(!y)return"Variable dependency not found. Variable="+x.name+", dependency="+g.name}u[g.name]={value:null},p.fragmentShader=`
uniform sampler2D `+g.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const _=this.currentTextureIndex,x=this.currentTextureIndex===0?1:0;for(let p=0,u=this.variables.length;p<u;p++){const v=this.variables[p];if(v.dependencies!==null){const g=v.material.uniforms;for(let y=0,b=v.dependencies.length;y<b;y++){const E=v.dependencies[y];g[E.name].value=E.renderTargets[_].texture}}this.doRenderTarget(v.material,v.renderTargets[x])}this.currentTextureIndex=x},this.getCurrentRenderTarget=function(_){return _.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(_){return _.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const _=this.variables;for(let x=0;x<_.length;x++){const p=_[x];p.initialValueTexture&&p.initialValueTexture.dispose();const u=p.renderTargets;for(let v=0;v<u.length;v++)u[v].dispose()}};function f(_){_.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=f;function h(_,x){x=x||{};const p=new Wt({name:"GPUComputationShader",uniforms:x,vertexShader:d(),fragmentShader:_});return f(p),p}this.createShaderMaterial=h,this.createRenderTarget=function(_,x,p,u,v,g){return _=_||e,x=x||n,p=p||zn,u=u||zn,v=v||Dt,g=g||Dt,new ni(_,x,{wrapS:p,wrapT:u,minFilter:v,magFilter:g,format:kn,type:r,depthBuffer:!1})},this.createTexture=function(){const _=new Float32Array(e*n*4),x=new eA(_,e,n,kn,Si);return x.needsUpdate=!0,x},this.renderTexture=function(_,x){a.passThruTexture.value=_,this.doRenderTarget(l,x),a.passThruTexture.value=null},this.doRenderTarget=function(_,x){const p=i.getRenderTarget(),u=i.xr.enabled,v=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,c.material=_,i.setRenderTarget(x),i.render(s,o),c.material=l,i.xr.enabled=u,i.shadowMap.autoUpdate=v,i.setRenderTarget(p)};function d(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function m(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const UA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

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
	`},nn={"Northern Lights":{primary:"#00ffaa",secondary:"#00aaff",accent:"#aa55ff",highlight:"#ffffff",background:["#0a0a1a","#051515","#0a1a1a"]},"Deep Ocean":{primary:"#0055ff",secondary:"#00ffff",accent:"#8800ff",highlight:"#ffffff",background:["#000515","#001025","#000520"]},"Solar Corona":{primary:"#ff8800",secondary:"#ffff00",accent:"#ff2200",highlight:"#ffffff",background:["#1a0a00","#150500","#1a0500"]},Synthwave:{primary:"#ff00aa",secondary:"#00ffff",accent:"#aa00ff",highlight:"#ffaaff",background:["#0a0015","#150020","#0a0520"]},"Monochrome Zen":{primary:"#ffffff",secondary:"#aabbcc",accent:"#8899aa",highlight:"#ffffff",background:["#0a0a0f","#0f0f15","#0a0a12"]},"Ember & Ash":{primary:"#ff3300",secondary:"#ff8800",accent:"#ffaa00",highlight:"#ffffff",background:["#0a0505","#150a05","#0a0805"]}},dg={"Cosmic Dance":{description:"Ethereal deep ocean with swirling rings",palette:"Deep Ocean",background:"nebula",timeScale:.8,bloom:1.8,structures:[{type:"rings",scale:1.2,position:[0,0,0],rotationSpeed:.3},{type:"icosahedron",scale:.4,position:[0,0,0],rotationSpeed:.2}],ribbons:[{type:"toroidal",thickness:.06}],waveGrid:!0,waveAmplitude:1.5},"Solar Flare":{description:"Intense fiery energy burst",palette:"Solar Corona",background:"gradient",timeScale:1.3,bloom:2.2,structures:[{type:"torus",scale:.8,position:[0,0,0],rotationSpeed:.5}],ribbons:[{type:"spiral",thickness:.1},{type:"helix",thickness:.05}],waveGrid:!0,waveAmplitude:2},"Digital Dreams":{description:"Synthwave aesthetic with geometric precision",palette:"Synthwave",background:"nebula",timeScale:1,bloom:2,structures:[{type:"helix",scale:1.5,position:[0,0,0],rotationSpeed:.15},{type:"mobius",scale:.6,position:[2,0,0],rotationSpeed:.4}],ribbons:[{type:"lissajous",thickness:.08}],waveGrid:!0,waveAmplitude:.8},"Zen Garden":{description:"Minimal and meditative monochrome",palette:"Monochrome Zen",background:"gradient",timeScale:.5,bloom:1.2,structures:[{type:"icosahedron",scale:1,position:[0,0,0],rotationSpeed:.1}],ribbons:[],waveGrid:!0,waveAmplitude:.5},"Aurora Borealis":{description:"Northern lights dancing in the sky",palette:"Northern Lights",background:"nebula",timeScale:.7,bloom:1.5,structures:[{type:"rings",scale:1.8,position:[0,0,0],rotationSpeed:.08}],ribbons:[{type:"helix",thickness:.12},{type:"toroidal",thickness:.04}],waveGrid:!0,waveAmplitude:1.2},"Ember Storm":{description:"Fiery particles in chaotic motion",palette:"Ember & Ash",background:"gradient",timeScale:1.5,bloom:1.8,structures:[{type:"torus",scale:.6,position:[0,1,0],rotationSpeed:.8},{type:"torus",scale:.4,position:[0,-1,0],rotationSpeed:-.6}],ribbons:[{type:"spiral",thickness:.15}],waveGrid:!1,waveAmplitude:1}},Ku={" ":{action:"triggerPulse",description:"Trigger shockwave pulse"},r:{action:"randomize",description:"Randomize scene"},c:{action:"clearScene",description:"Clear all objects"},h:{action:"toggleUI",description:"Hide/show control panel"},f:{action:"toggleFullscreen",description:"Toggle fullscreen"},p:{action:"togglePause",description:"Pause/resume animation"},m:{action:"toggleMouseFollow",description:"Toggle mouse attraction"},g:{action:"toggleWaveGrid",description:"Toggle wave grid"},1:{action:"palette1",description:"Northern Lights palette"},2:{action:"palette2",description:"Deep Ocean palette"},3:{action:"palette3",description:"Solar Corona palette"},4:{action:"palette4",description:"Synthwave palette"},5:{action:"palette5",description:"Monochrome Zen palette"},6:{action:"palette6",description:"Ember & Ash palette"},"=":{action:"qualityUp",description:"Increase quality"},"-":{action:"qualityDown",description:"Decrease quality"},Escape:{action:"resetCamera",description:"Reset camera position"},"?":{action:"showHelp",description:"Show keyboard shortcuts"}},IA={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1.2}},vertexShader:`
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
  `},NA={uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.05}},vertexShader:`
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
  `},OA={uniforms:{tDiffuse:{value:null},uIntensity:{value:.003},uTime:{value:0}},vertexShader:`
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
  `},FA={"Northern Lights":{strength:1.5,radius:.6,threshold:.3},"Deep Ocean":{strength:1.8,radius:.5,threshold:.2},"Solar Corona":{strength:2.2,radius:.7,threshold:.1},Synthwave:{strength:2,radius:.5,threshold:.2},"Monochrome Zen":{strength:1.2,radius:.4,threshold:.4},"Ember & Ash":{strength:1.8,radius:.6,threshold:.2}};class zA{constructor(e,n,i=256){this.renderer=e,this.scene=n,this.SIZE=i,this.count=this.SIZE*this.SIZE,this.initComputeRenderer(),this.initParticles()}initComputeRenderer(){this.gpuCompute=new DA(this.SIZE,this.SIZE,this.renderer),this.renderer.capabilities.isWebGL2||console.warn("WebGL2 not supported, GPGPU may not work");const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",this.getPositionShader(),e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",this.getVelocityShader(),n),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.uTime={value:0},this.positionUniforms.uDelta={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uDelta={value:0},this.velocityUniforms.uAttractorPos={value:new R(0,0,0)},this.velocityUniforms.uAttractorStrength={value:3},this.velocityUniforms.uNoiseScale={value:.5},this.velocityUniforms.uNoiseSpeed={value:.2},this.velocityUniforms.uMouseAttractorPos={value:new R(0,0,0)},this.velocityUniforms.uMouseAttractorStrength={value:0},this.velocityUniforms.uMouseAttractorActive={value:0},this.velocityUniforms.uShockwaveOrigin={value:new R(0,0,0)},this.velocityUniforms.uShockwaveRadius={value:0},this.velocityUniforms.uShockwaveStrength={value:0},this.velocityUniforms.uShockwaveThickness={value:2};const i=this.gpuCompute.init();i!==null&&console.error("GPUComputationRenderer error:",i)}fillPositionTexture(e){const n=e.image.data,i=5;for(let r=0;r<n.length;r+=4){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=Math.cbrt(Math.random())*i;n[r+0]=a*Math.sin(o)*Math.cos(s),n[r+1]=a*Math.sin(o)*Math.sin(s),n[r+2]=a*Math.cos(o),n[r+3]=Math.random()*5+2}}fillVelocityTexture(e){const n=e.image.data;for(let i=0;i<n.length;i+=4)n[i+0]=(Math.random()-.5)*.5,n[i+1]=(Math.random()-.5)*.5,n[i+2]=(Math.random()-.5)*.5,n[i+3]=1}getPositionShader(){return`
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
      uniform vec3 uAttractorPos;
      uniform float uAttractorStrength;
      uniform float uNoiseScale;
      uniform float uNoiseSpeed;
      
      // Mouse attractor uniforms
      uniform vec3 uMouseAttractorPos;
      uniform float uMouseAttractorStrength;
      uniform float uMouseAttractorActive;
      
      // Shockwave uniforms
      uniform vec3 uShockwaveOrigin;
      uniform float uShockwaveRadius;
      uniform float uShockwaveStrength;
      uniform float uShockwaveThickness;

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

        // Central attractor force
        vec3 toAttractor = uAttractorPos - pos.xyz;
        float dist = length(toAttractor);
        if (dist > 0.1) {
          acceleration += normalize(toAttractor) * uAttractorStrength / (dist * dist + 1.0);
        }
        
        // Mouse attractor force (when active)
        if (uMouseAttractorActive > 0.5) {
          vec3 toMouse = uMouseAttractorPos - pos.xyz;
          float mouseDist = length(toMouse);
          if (mouseDist > 0.1) {
            // Smooth falloff for mouse attractor
            float falloff = 1.0 / (mouseDist * mouseDist * 0.5 + 1.0);
            acceleration += normalize(toMouse) * uMouseAttractorStrength * falloff;
          }
        }
        
        // Shockwave force - spherical expanding wave
        if (uShockwaveStrength > 0.01) {
          vec3 toParticle = pos.xyz - uShockwaveOrigin;
          float particleDist = length(toParticle);
          
          // Calculate distance from shockwave shell
          float shellDist = abs(particleDist - uShockwaveRadius);
          
          // Particles within the shockwave thickness are affected
          if (shellDist < uShockwaveThickness) {
            // Falloff based on distance from shell center
            float shellFalloff = 1.0 - (shellDist / uShockwaveThickness);
            shellFalloff = shellFalloff * shellFalloff; // Quadratic falloff
            
            // Push particles outward from shockwave origin
            vec3 pushDir = normalize(toParticle);
            
            // Add tangential swirl for more interesting motion
            vec3 tangent = normalize(cross(pushDir, vec3(0.0, 1.0, 0.0)));
            if (length(tangent) < 0.1) {
              tangent = normalize(cross(pushDir, vec3(1.0, 0.0, 0.0)));
            }
            
            // Combine radial push with slight swirl
            vec3 shockForce = pushDir * uShockwaveStrength * shellFalloff;
            shockForce += tangent * uShockwaveStrength * shellFalloff * 0.3;
            
            acceleration += shockForce;
          }
        }

        // Curl noise for organic movement
        vec3 noisePos = pos.xyz * uNoiseScale + uTime * uNoiseSpeed;
        vec3 curl = curlNoise(noisePos);
        acceleration += curl * 2.0;

        // Apply acceleration
        vel.xyz += acceleration * uDelta;

        // Damping
        vel.xyz *= 0.98;

        // Speed limit (increased to allow shockwave bursts)
        float speed = length(vel.xyz);
        float maxSpeed = 8.0;
        if (speed > maxSpeed) {
          vel.xyz = normalize(vel.xyz) * maxSpeed;
        }

        // Reset velocity if particle respawned
        if (pos.w <= 0.0) {
          vel.xyz = vec3(0.0);
        }

        gl_FragColor = vel;
      }
    `}initParticles(){const e=new Yt,n=new Float32Array(this.count*3),i=new Float32Array(this.count*2);for(let s=0;s<this.count;s++){const o=s%this.SIZE/this.SIZE,a=Math.floor(s/this.SIZE)/this.SIZE;i[s*2+0]=o,i[s*2+1]=a,n[s*3+0]=0,n[s*3+1]=0,n[s*3+2]=0}e.setAttribute("position",new Un(n,3)),e.setAttribute("reference",new Un(i,2));const r=new Wt({uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uTime:{value:0},uColor1:{value:new Te(65450)},uColor2:{value:new Te(43775)},uColor3:{value:new Te(11163135)},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:4},uColorMode:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:Sr,depthWrite:!1});this.particles=new c_(e,r),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,n){const i=Math.min(e,.05);this.positionUniforms.uTime.value=n,this.positionUniforms.uDelta.value=i,this.velocityUniforms.uTime.value=n,this.velocityUniforms.uDelta.value=i,this.gpuCompute.compute(),this.particles.material.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.particles.material.uniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture,this.particles.material.uniforms.uTime.value=n}setAttractor(e,n){this.velocityUniforms.uAttractorPos.value.copy(e),this.velocityUniforms.uAttractorStrength.value=n}setMouseAttractor(e,n,i){this.velocityUniforms.uMouseAttractorPos.value.copy(e),this.velocityUniforms.uMouseAttractorStrength.value=n,this.velocityUniforms.uMouseAttractorActive.value=i?1:0}setShockwave(e,n,i,r){this.velocityUniforms.uShockwaveOrigin.value.copy(e),this.velocityUniforms.uShockwaveRadius.value=n,this.velocityUniforms.uShockwaveStrength.value=i,this.velocityUniforms.uShockwaveThickness.value=r}setColors(e,n,i){this.particles.material.uniforms.uColor1.value.set(e),this.particles.material.uniforms.uColor2.value.set(n),this.particles.material.uniforms.uColor3.value.set(i)}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}class pg{constructor(e,n,i="point"){this.position=e.clone(),this.strength=n,this.type=i,this.active=!0,this.radius=3,this.vortexAxis=new R(0,1,0)}setPosition(e){this.position.copy(e)}toUniformData(){return{position:this.position,strength:this.active?this.strength:0,type:this.type==="point"?0:this.type==="vortex"?1:2,radius:this.radius}}}class kA{constructor(e=5){this.shockwaves=[],this.maxShockwaves=e}trigger(e,n=10,i=2,r=8){this.shockwaves.length>=this.maxShockwaves&&this.shockwaves.shift(),this.shockwaves.push({origin:e.clone(),radius:.1,strength:n,thickness:i,expansionSpeed:r,decay:.92,active:!0})}update(e){for(let n=this.shockwaves.length-1;n>=0;n--){const i=this.shockwaves[n];i.radius+=i.expansionSpeed*e,i.strength*=i.decay,(i.radius>25||i.strength<.05)&&this.shockwaves.splice(n,1)}}getActiveShockwave(){if(this.shockwaves.length===0)return{origin:new R(0,0,0),radius:0,strength:0,thickness:1};let e=this.shockwaves[0];for(const n of this.shockwaves)n.strength>e.strength&&(e=n);return e}hasActive(){return this.shockwaves.length>0}clear(){this.shockwaves=[]}}class BA{constructor(e,n={}){this.scene=e,this.config={size:128,gridScale:20,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:"#00ffaa",color2:"#00aaff",color3:"#aa55ff",opacity:.6,particleSize:2,yOffset:-5,...n},this.time=0,this.visible=!0,this.createGrid(),this.scene.add(this.mesh)}createGrid(){const e=this.config.size,n=this.config.gridScale,i=new Yt,r=new Float32Array(e*e*3),s=new Float32Array(e*e*2);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=a*e+l;r[c*3+0]=(a/e-.5)*n,r[c*3+1]=0,r[c*3+2]=(l/e-.5)*n,s[c*2+0]=a/e,s[c*2+1]=l/e}i.setAttribute("position",new Un(r,3)),i.setAttribute("uv",new Un(s,2));const o=new Wt({uniforms:{uTime:{value:0},uWaveAmplitude:{value:this.config.waveAmplitude},uWaveFrequency:{value:this.config.waveFrequency},uWaveSpeed:{value:this.config.waveSpeed},uColor1:{value:new Te(this.config.color1)},uColor2:{value:new Te(this.config.color2)},uColor3:{value:new Te(this.config.color3)},uOpacity:{value:this.config.opacity},uSize:{value:this.config.particleSize},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uYOffset:{value:this.config.yOffset}},vertexShader:`
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
      `,transparent:!0,blending:Sr,depthWrite:!1});this.mesh=new c_(i,o),this.mesh.frustumCulled=!1}update(e,n=1){this.time+=e*n,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uTime.value=this.time)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e)}setColors(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uColor1.value.set(e),this.mesh.material.uniforms.uColor2.value.set(n),this.mesh.material.uniforms.uColor3.value.set(i))}setWaveParams(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uWaveAmplitude.value=e,this.mesh.material.uniforms.uWaveFrequency.value=n,this.mesh.material.uniforms.uWaveSpeed.value=i)}setOpacity(e){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uOpacity.value=e)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh))}}class HA{constructor(e){this.frameHistory=[],this.historyLength=60,this.currentQuality="high",this.onQualityChange=e,this.cooldown=0,this.enabled=!0,this.lastFps=60,this.presets={ultra:{particleSize:512,waveSize:192,bloom:!0,bloomStrength:2,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:55},high:{particleSize:384,waveSize:128,bloom:!0,bloomStrength:1.5,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:50},medium:{particleSize:256,waveSize:96,bloom:!0,bloomStrength:1.2,chromatic:!1,filmGrain:!1,fxaa:!0,targetFps:40},low:{particleSize:192,waveSize:64,bloom:!0,bloomStrength:1,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:30},potato:{particleSize:128,waveSize:48,bloom:!1,bloomStrength:0,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:25}},this.qualityLevels=["ultra","high","medium","low","potato"]}update(e){if(!this.enabled)return null;const n=e>0?Math.min(1/e,120):60;if(this.frameHistory.push(n),this.frameHistory.length>this.historyLength&&this.frameHistory.shift(),this.cooldown-=e,this.frameHistory.length===this.historyLength&&this.cooldown<=0){const i=this.frameHistory.reduce((s,o)=>s+o,0)/this.historyLength;this.lastFps=i;const r=this.presets[this.currentQuality];if(i<r.targetFps-10&&this.currentQuality!=="potato")return this.decreaseQuality();if(i>58&&this.currentQuality!=="ultra")return this.increaseQuality()}return null}decreaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e<this.qualityLevels.length-1?(this.currentQuality=this.qualityLevels[e+1],this.cooldown=3,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"decrease"}):null}increaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e>0?(this.currentQuality=this.qualityLevels[e-1],this.cooldown=5,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"increase"}):null}setQuality(e){return this.qualityLevels.includes(e)?(this.currentQuality=e,this.frameHistory=[],this.cooldown=2,this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),this.presets[this.currentQuality]):null}setEnabled(e){this.enabled=e}getCurrentPreset(){return this.presets[this.currentQuality]}getStats(){return{quality:this.currentQuality,fps:Math.round(this.lastFps),particleCount:Math.pow(this.presets[this.currentQuality].particleSize,2),cooldown:Math.max(0,this.cooldown).toFixed(1)}}}class $u{constructor(e,n){this.scene=e,this.config={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:"#00ffaa",...n},this.group=new Fs,this.group.position.copy(this.config.position),this.time=Math.random()*100,this.energyOffset=Math.random()*Math.PI*2,this.createStructure(),this.scene.add(this.group)}createStructure(){for(;this.group.children.length;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}switch(this.config.type){case"icosahedron":this.createNestedIcosahedron();break;case"torus":this.createAnimatedTorus();break;case"rings":this.createConcentricRings();break;case"helix":this.createDNAHelix();break;case"mobius":this.createMobiusStrip();break;default:this.createNestedIcosahedron()}}createNestedIcosahedron(){const e=new Te(this.config.color),n=new ad(1.5*this.config.scale,0),i=new El(n);this.createGlowingEdges(i,e,1.5);const r=new ld(.8*this.config.scale,this.config.complexity),s=new El(r),o=this.createMaterial(e),a=new At(r,o);a.userData.isInner=!0,this.group.add(a),this.createGlowingEdges(s,e.clone().multiplyScalar(1.5),.8);const l=new da(.3*this.config.scale,16,16),c=new An({color:e,transparent:!0,opacity:.5}),f=new At(l,c);f.userData.isCore=!0,this.group.add(f)}createAnimatedTorus(){const e=new Te(this.config.color),n=new qo(1*this.config.scale,.3*this.config.scale,16,50),i=this.createMaterial(e),r=new At(n,i);this.group.add(r);for(let o=0;o<3;o++){const a=new qo(.5*this.config.scale,.05*this.config.scale,8,30),l=new An({color:e,transparent:!0,opacity:.8}),c=new At(a,l);c.rotation.x=o/3*Math.PI,c.userData.rotationOffset=o,this.group.add(c)}const s=new El(n);this.createGlowingEdges(s,e,1)}createConcentricRings(){const e=new Te(this.config.color);for(let s=0;s<4;s++){const o=(.5+s*.4)*this.config.scale,a=new qo(o,.03*this.config.scale,8,64),l=new An({color:e,transparent:!0,opacity:.9-s*.15}),c=new At(a,l);c.userData.ringIndex=s,c.rotation.x=Math.PI/2+(s%2===0?0:Math.PI/4),c.rotation.y=s/4*Math.PI/2,this.group.add(c)}const n=new da(.2*this.config.scale,16,16),i=new An({color:e,transparent:!0,opacity:.8}),r=new At(n,i);r.userData.isCore=!0,this.group.add(r)}createDNAHelix(){const e=new Te(this.config.color),n=[],i=[],r=[],s=4*this.config.scale,o=.5*this.config.scale,a=2,l=100;for(let p=0;p<=l;p++){const u=p/l,v=(u-.5)*s,g=u*a*Math.PI*2;n.push(new R(Math.cos(g)*o,v,Math.sin(g)*o)),i.push(new R(Math.cos(g+Math.PI)*o,v,Math.sin(g+Math.PI)*o)),p%10===0&&p>0&&p<l&&r.push({start:n[n.length-1].clone(),end:i[i.length-1].clone()})}const c=new mc(n),f=new mc(i),h=new io(c,l,.05*this.config.scale,8,!1),d=new io(f,l,.05*this.config.scale,8,!1),m=new An({color:e,transparent:!0,opacity:.9}),_=new At(h,m),x=new At(d,m.clone());this.group.add(_),this.group.add(x),r.forEach((p,u)=>{const v=new od(.02*this.config.scale,.02*this.config.scale,p.start.distanceTo(p.end),8),g=new An({color:e.clone().multiplyScalar(.7),transparent:!0,opacity:.7}),y=new At(v,g),b=p.start.clone().add(p.end).multiplyScalar(.5);y.position.copy(b),y.lookAt(p.end),y.rotateX(Math.PI/2),y.userData.rungIndex=u,this.group.add(y)})}createMobiusStrip(){const e=new Te(this.config.color),n=new Yt,i=[],r=[],s=[],o=[],a=1*this.config.scale,l=.4*this.config.scale,c=100,f=10;for(let _=0;_<=c;_++){const x=_/c*Math.PI*2;for(let p=0;p<=f;p++){const u=(p/f-.5)*l,v=(a+u*Math.cos(x/2))*Math.cos(x),g=(a+u*Math.cos(x/2))*Math.sin(x),y=u*Math.sin(x/2);i.push(v,g,y);const b=Math.cos(x)*Math.cos(x/2),E=Math.sin(x)*Math.cos(x/2),T=Math.sin(x/2);r.push(b,E,T),s.push(_/c,p/f)}}for(let _=0;_<c;_++)for(let x=0;x<f;x++){const p=_*(f+1)+x,u=p+f+1,v=p+1,g=u+1;o.push(p,u,v),o.push(u,g,v)}n.setAttribute("position",new ut(i,3)),n.setAttribute("normal",new ut(r,3)),n.setAttribute("uv",new ut(s,2)),n.setIndex(o);const h=this.createMaterial(e);h.side=Zn;const d=new At(n,h);this.group.add(d);const m=new El(n,30);this.createGlowingEdges(m,e,1)}createGlowingEdges(e,n,i){e.attributes.position.array;for(let r=0;r<3;r++){const s=new l_({color:n,transparent:!0,opacity:.6-r*.15,linewidth:1,blending:Sr}),o=e.clone(),a=new nA(o,s);a.scale.setScalar(1+r*.02),a.userData.edgeLayer=r,this.group.add(a)}}createMaterial(e){switch(this.config.materialStyle){case"glass":return new sg({color:e,transparent:!0,opacity:.3,roughness:.1,metalness:.1,transmission:.9,thickness:.5});case"holographic":return new sg({color:e,transparent:!0,opacity:.4,roughness:.2,metalness:.8,iridescence:1,iridescenceIOR:1.5,sheen:1,sheenColor:e});case"solid":return new An({color:e,transparent:!0,opacity:.7});default:return new An({color:e,transparent:!0,opacity:.5})}}update(e,n){this.time+=e*n,this.group.rotation.x+=this.config.rotationSpeed.x*e*n,this.group.rotation.y+=this.config.rotationSpeed.y*e*n,this.group.rotation.z+=this.config.rotationSpeed.z*e*n;const i=1+Math.sin(this.time*2)*this.config.pulseIntensity;this.group.scale.setScalar(i),this.group.children.forEach((r,s)=>{if(r.userData.isInner&&(r.rotation.y-=this.config.rotationSpeed.y*e*n*.5),r.userData.isCore){const o=1+Math.sin(this.time*4)*.2;r.scale.setScalar(o)}if(r.userData.ringIndex!==void 0){const o=r.userData.ringIndex*.5;r.rotation.z+=(.5+o*.2)*e*n}if(r.userData.rotationOffset!==void 0&&(r.rotation.x+=(1+r.userData.rotationOffset*.3)*e*n),r.userData.edgeLayer!==void 0){const o=Math.sin(this.time*3+this.energyOffset+r.userData.edgeLayer)*.3+.7;r.material.opacity=(.6-r.userData.edgeLayer*.15)*o}if(r.userData.rungIndex!==void 0){const o=Math.sin(this.time*5+r.userData.rungIndex*.5)*.3+.7;r.material.opacity=.7*o}})}setColor(e){this.config.color=e;const n=new Te(e);this.group.children.forEach(i=>{i.material&&(i.material.color&&i.material.color.set(n),i.material.sheenColor&&i.material.sheenColor.set(n))})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class Qu{constructor(e,n){this.scene=e,this.config={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.1,glowIntensity:1,color:"#00ffaa",trailFade:2,...n},this.time=Math.random()*100,this.group=new Fs,this.group.position.copy(this.config.position),this.createRibbon(),this.scene.add(this.group)}createRibbon(){for(;this.group.children.length;){const o=this.group.children[0];this.group.remove(o),o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}const e=this.generateCurvePoints();this.curve=new mc(e);const n=new io(this.curve,200,this.config.thickness,8,!1),i=new Te(this.config.color),r=new Wt({uniforms:{color:{value:i},time:{value:0},glowIntensity:{value:this.config.glowIntensity}},vertexShader:`
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
      `,transparent:!0,blending:Sr,side:Zn,depthWrite:!1}),s=new At(n,r);s.userData.isMainRibbon=!0,this.group.add(s);for(let o=0;o<2;o++){const a=new io(this.curve,100,this.config.thickness*(2+o),8,!1),l=new An({color:i,transparent:!0,opacity:.1-o*.03,blending:Sr,side:Zn,depthWrite:!1}),c=new At(a,l);c.userData.glowLayer=o,this.group.add(c)}}generateCurvePoints(){const e=[];switch(this.config.type){case"helix":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*6,o=2+Math.sin(r*Math.PI*2)*.5;e.push(new R(Math.cos(s)*o,(r-.5)*6,Math.sin(s)*o))}break;case"lissajous":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2;e.push(new R(Math.sin(3*r)*2,Math.sin(2*r)*2,Math.sin(5*r)*2))}break;case"toroidal":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2,s=3,o=2,a=.5*(2+Math.cos(o*r));e.push(new R(a*Math.cos(s*r)*1.5,a*Math.sin(s*r)*1.5,-Math.sin(o*r)*1.5))}break;case"spiral":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*8,o=.5+r*2;e.push(new R(Math.cos(s)*o,(r-.5)*4,Math.sin(s)*o))}break;default:for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*4;e.push(new R(Math.cos(s)*2,(r-.5)*4,Math.sin(s)*2))}}return e}update(e,n){this.time+=e*n*this.config.animationSpeed,this.group.children.forEach(i=>{if(i.userData.isMainRibbon&&i.material.uniforms&&(i.material.uniforms.time.value=this.time),i.userData.glowLayer!==void 0){const r=Math.sin(this.time*2+i.userData.glowLayer)*.02+.08;i.material.opacity=r}}),this.group.rotation.y+=.1*e*n}setColor(e){this.config.color=e;const n=new Te(e);this.group.children.forEach(i=>{i.material.uniforms&&i.material.uniforms.color?i.material.uniforms.color.value=n:i.material.color&&i.material.color.set(n)})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class VA{constructor(e){this.scene=e,this.mesh=null,this.style="gradient",this.colors=["#0a0a1a","#051515","#0a1a1a"],this.createBackground()}createBackground(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());const e=new da(100,32,32);let n;switch(this.style){case"solid":n=new An({color:0,side:en});break;case"gradient":n=new Wt({uniforms:{color1:{value:new Te(this.colors[0])},color2:{value:new Te(this.colors[1])},color3:{value:new Te(this.colors[2])},time:{value:0}},vertexShader:`
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
          `,side:en});break;case"nebula":n=new Wt({uniforms:{color1:{value:new Te(this.colors[0])},color2:{value:new Te(this.colors[1])},color3:{value:new Te(this.colors[2]||this.colors[1])},time:{value:0}},vertexShader:`
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
          `,side:en});break;default:n=new An({color:328976,side:en})}this.mesh=new At(e,n),this.scene.add(this.mesh)}setStyle(e){this.style=e,this.createBackground()}setColors(e){this.colors=e,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.color1&&(this.mesh.material.uniforms.color1.value=new Te(e[0])),this.mesh.material.uniforms.color2&&(this.mesh.material.uniforms.color2.value=new Te(e[1])),this.mesh.material.uniforms.color3&&(this.mesh.material.uniforms.color3.value=new Te(e[2])))}update(e){this.mesh&&this.mesh.material.uniforms&&this.mesh.material.uniforms.time&&(this.mesh.material.uniforms.time.value=e)}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}}function GA(){var hd;const t=Q.useRef(null),e=Q.useRef(null),n=Q.useRef(null),i=Q.useRef(null),r=Q.useRef(null),s=Q.useRef(null),o=Q.useRef(new h_),a=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(null),f=Q.useRef([]),h=Q.useRef([]),d=Q.useRef(null),m=Q.useRef(null),_=Q.useRef(null),x=Q.useRef(null),p=Q.useRef(null),u=Q.useRef(null),v=Q.useRef(null),g=Q.useRef(new MA),y=Q.useRef(new he),b=Q.useRef(0),E=Q.useRef(null),T=Q.useRef(!1),D=Q.useRef(new R),S=Q.useRef(null),w=Q.useRef(0),z=Q.useRef(null),k=Q.useRef(null),ie=Q.useRef(!0),U=Q.useRef(!0),H=Q.useRef(4),[q,Z]=Q.useState(!0),[I,B]=Q.useState(!1),[W,J]=Q.useState(!1),[ne,K]=Q.useState(!1),[ee,pe]=Q.useState(!1),[Me,we]=Q.useState([]),Ge=Q.useRef(!1),[He,De]=Q.useState(1),[et,V]=Q.useState(1),[qt,Ie]=Q.useState("down"),[Ve,Ae]=Q.useState(.5),[ft,We]=Q.useState(1.5),[C,M]=Q.useState("gradient"),[O,se]=Q.useState("Northern Lights"),[re,le]=Q.useState(!0),[be,ge]=Q.useState(.5),[ye,Ne]=Q.useState(!1),[Xe,oe]=Q.useState(!1),[st,Ke]=Q.useState(!0),[Be,Pe]=Q.useState(.003),[ve,P]=Q.useState(!0),[ce,Ce]=Q.useState(!0),[xe,ae]=Q.useState(4),[L,fe]=Q.useState(!0),[me,Fe]=Q.useState(1),[Le,tt]=Q.useState(1),[Ye,vt]=Q.useState("high"),[ct,ot]=Q.useState(!0),[Et,Xn]=Q.useState(60),[Ta,Aa]=Q.useState(65536),[Tr,co]=Q.useState(null),[uo,fo]=Q.useState(!1),[ns,zc]=Q.useState(!1),[cd,ud]=Q.useState([]),[A,N]=Q.useState([]),[X,j]=Q.useState([]),[G,_e]=Q.useState([]),[Re,ke]=Q.useState("speed"),[ze,$e]=Q.useState({global:!0,emitters:!0,structures:!0,ribbons:!1,camera:!1}),[je,qe]=Q.useState({});Q.useEffect(()=>{const Y="ontouchstart"in window||navigator.maxTouchPoints>0;zc(Y)},[]),Q.useEffect(()=>{if(!t.current)return;const Y=new a_;e.current=Y;const $=new Qn(60,window.innerWidth/window.innerHeight,.1,1e3);$.position.set(0,2,8),r.current=$;const te=new o_({antialias:!0,alpha:!0});te.setSize(window.innerWidth,window.innerHeight),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.toneMapping=Pv,te.toneMappingExposure=1.2,t.current.appendChild(te.domElement),n.current=te;const Ee=new wA($,te.domElement);Ee.enableDamping=!0,Ee.dampingFactor=.05,Ee.autoRotate=!0,Ee.autoRotateSpeed=.5,Ee.minDistance=2,Ee.maxDistance=50,s.current=Ee;const Qe=new RA(te),Ot=new PA(Y,$);Qe.addPass(Ot);const pt=new ro(new he(window.innerWidth,window.innerHeight),1.5,.4,.85);pt.threshold=0,pt.strength=1.5,pt.radius=.8,Qe.addPass(pt),p.current=pt;const Ft=new Io(OA);Ft.uniforms.uIntensity.value=.003,Ft.enabled=!0,Qe.addPass(Ft),_.current=Ft;const is=new Io(IA);is.uniforms.offset.value=.95,is.uniforms.darkness.value=1.2,Qe.addPass(is);const Ra=new Io(NA);Ra.uniforms.intensity.value=.03,Ra.enabled=!1,Qe.addPass(Ra),m.current=Ra;const kc=new Io(UA);kc.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),Qe.addPass(kc),x.current=kc,i.current=Qe;const m_=new VA(Y);d.current=m_;const g_=new SA(4210752,.5);Y.add(g_),Y.fog=new rd(0,.02);const v_=new zA(te,Y,256);l.current=v_;const __=new kA(5);u.current=__;const x_=new pg(new R(0,0,0),8,"point");v.current=x_;const y_=new HA((Oe,Ue)=>{console.log(`Quality changed to: ${Oe}`,Ue),vt(Oe),Aa(Ue.particleSize*Ue.particleSize),p.current&&(p.current.enabled=Ue.bloom,Ue.bloom&&(p.current.strength=Ue.bloomStrength)),_.current&&(_.current.enabled=Ue.chromatic),m.current&&(m.current.enabled=Ue.filmGrain),x.current&&(x.current.enabled=Ue.fxaa)});k.current=y_;const Bc=nn["Northern Lights"],S_=new BA(Y,{size:128,gridScale:25,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:Bc.primary,color2:Bc.secondary,color3:Bc.accent,opacity:.5,particleSize:2.5,yOffset:-6});c.current=S_,Tt();const dd=Oe=>{const Ue=te.domElement.getBoundingClientRect();y.current.x=(Oe.clientX-Ue.left)/Ue.width*2-1,y.current.y=-((Oe.clientY-Ue.top)/Ue.height)*2+1,g.current.setFromCamera(y.current,$);const at=new yn(new R(0,0,1),0),mt=new R;g.current.ray.intersectPlane(at,mt),v.current&&mt&&v.current.setPosition(mt)},pd=Oe=>{var cn;const Ue=te.domElement.getBoundingClientRect(),at=new he((Oe.clientX-Ue.left)/Ue.width*2-1,-((Oe.clientY-Ue.top)/Ue.height)*2+1);g.current.setFromCamera(at,$);const mt=f.current.map(Yi=>Yi.group).filter(Yi=>Yi&&Yi.visible),Lt=g.current.intersectObjects(mt,!0);if(Lt.length>0&&Oe.shiftKey){const Yi=Lt[0].object.parent,Pa=f.current.findIndex(M_=>M_.group===Yi);if(Pa!==-1){co(Pa),E.current=Pa,it(`Selected ${((cn=A[Pa])==null?void 0:cn.type)||"structure"}`,"info");return}}const $t=new yn(new R(0,0,1),0),Ht=new R;g.current.ray.intersectPlane($t,Ht),u.current&&Ht&&u.current.trigger(Ht,15,2.5,10)},md=Oe=>{if(E.current!==null){const Ue=te.domElement.getBoundingClientRect(),at=new he((Oe.clientX-Ue.left)/Ue.width*2-1,-((Oe.clientY-Ue.top)/Ue.height)*2+1);g.current.setFromCamera(at,$);const mt=E.current;if(f.current[mt]){const Lt=new yn(new R(0,0,1),0),$t=new R;if(g.current.ray.intersectPlane(Lt,$t),$t){T.current=!0,fo(!0);const Ht=f.current[mt].group.position;D.current.copy($t).sub(Ht)}}}},gd=Oe=>{T.current&&(T.current=!1,fo(!1))},vd=Oe=>{if(T.current&&E.current!==null){const Ue=te.domElement.getBoundingClientRect(),at=new he((Oe.clientX-Ue.left)/Ue.width*2-1,-((Oe.clientY-Ue.top)/Ue.height)*2+1);g.current.setFromCamera(at,$);const mt=new yn(new R(0,0,1),0),Lt=new R;if(g.current.ray.intersectPlane(mt,Lt),Lt&&f.current[E.current]){const $t=Lt.sub(D.current);f.current[E.current].group.position.copy($t),N(Ht=>Ht.map((cn,Yi)=>Yi===E.current?{...cn,position:$t}:cn))}}},_d=Oe=>{const Ue=Oe.touches[0],at=Date.now();if(S.current={x:Ue.clientX,y:Ue.clientY,time:at},at-w.current<300){const mt=te.domElement.getBoundingClientRect(),Lt=new he((Ue.clientX-mt.left)/mt.width*2-1,-((Ue.clientY-mt.top)/mt.height)*2+1);g.current.setFromCamera(Lt,$);const $t=new yn(new R(0,0,1),0),Ht=new R;g.current.ray.intersectPlane($t,Ht),Ht&&(dt(),it("Structure added","success"))}w.current=at,Oe.touches.length===2?z.current={type:"pinch",startDistance:Math.hypot(Oe.touches[0].clientX-Oe.touches[1].clientX,Oe.touches[0].clientY-Oe.touches[1].clientY)}:Oe.touches.length===3&&(z.current={type:"three-finger"})},xd=Oe=>{var Ue;if(Oe.preventDefault(),Oe.touches.length===1){const at=Oe.touches[0],mt=te.domElement.getBoundingClientRect();y.current.x=(at.clientX-mt.left)/mt.width*2-1,y.current.y=-((at.clientY-mt.top)/mt.height)*2+1,g.current.setFromCamera(y.current,$);const Lt=new yn(new R(0,0,1),0),$t=new R;g.current.ray.intersectPlane(Lt,$t),v.current&&$t&&v.current.setPosition($t)}else Oe.touches.length===2&&((Ue=z.current)==null||Ue.type)},yd=Oe=>{var at;if(!S.current)return;const Ue=Date.now()-S.current.time;if(Ue>500&&Oe.changedTouches.length===1){const mt=Oe.changedTouches[0],Lt=te.domElement.getBoundingClientRect(),$t=new he((mt.clientX-Lt.left)/Lt.width*2-1,-((mt.clientY-Lt.top)/Lt.height)*2+1);g.current.setFromCamera($t,$);const Ht=new yn(new R(0,0,1),0),cn=new R;g.current.ray.intersectPlane(Ht,cn),cn&&u.current&&(u.current.trigger(cn,15,2.5,10),it("Shockwave triggered","success"))}if(S.current&&Oe.changedTouches.length===1){const mt=Oe.changedTouches[0],Lt=mt.clientX-S.current.x,$t=mt.clientY-S.current.y;if(Math.abs(Lt)>100&&Math.abs($t)<50&&Ue<300){const Ht=Object.keys(nn),cn=Ht.indexOf(O);Lt>0&&cn>0?(se(Ht[cn-1]),it(`Palette: ${Ht[cn-1]}`,"success")):Lt<0&&cn<Ht.length-1&&(se(Ht[cn+1]),it(`Palette: ${Ht[cn+1]}`,"success"))}}((at=z.current)==null?void 0:at.type)==="three-finger"&&Oe.changedTouches.length===3&&(Z(mt=>!mt),it(q?"UI hidden":"UI visible","info")),S.current=null,z.current=null};te.domElement.addEventListener("mousemove",dd),te.domElement.addEventListener("mousemove",vd),te.domElement.addEventListener("mousedown",md),te.domElement.addEventListener("mouseup",gd),te.domElement.addEventListener("click",pd),ns&&(te.domElement.addEventListener("touchstart",_d,{passive:!1}),te.domElement.addEventListener("touchmove",xd,{passive:!1}),te.domElement.addEventListener("touchend",yd));const Sd=()=>{const Oe=window.innerWidth,Ue=window.innerHeight;$.aspect=Oe/Ue,$.updateProjectionMatrix(),te.setSize(Oe,Ue),Qe.setSize(Oe,Ue),x.current&&x.current.uniforms.resolution.value.set(1/Oe,1/Ue)};window.addEventListener("resize",Sd);const Md=()=>{a.current=requestAnimationFrame(Md);const Oe=o.current.getDelta(),Ue=o.current.getElapsedTime();if(s.current&&s.current.update(),u.current&&(u.current.update(Oe),l.current)){const at=u.current.getActiveShockwave();l.current.setShockwave(at.origin,at.radius,at.strength,at.thickness)}if(v.current&&l.current){const at=v.current;l.current.setMouseAttractor(at.position,at.strength,ie.current)}if(u.current&&U.current&&Ue-b.current>=H.current&&(u.current.trigger(new R(0,0,0),8,3,6),b.current=Ue),l.current&&l.current.update(Oe,Ue),f.current.forEach(at=>{at.update(Oe,He)}),h.current.forEach(at=>{at.update(Oe,He)}),c.current&&c.current.update(Oe,He),d.current&&d.current.update(Ue),m.current&&m.current.enabled&&(m.current.uniforms.time.value=Ue),_.current&&_.current.enabled&&(_.current.uniforms.uTime.value=Ue),k.current&&ct&&(k.current.update(Oe),Math.floor(Ue*2)%1===0)){const at=k.current.getStats();Xn(at.fps)}if(ye&&r.current){const at=Math.sin(Ue*.2)*.5;r.current.position.y+=at*Oe}i.current&&i.current.render()};return Md(),()=>{window.removeEventListener("resize",Sd),te.domElement.removeEventListener("mousemove",dd),te.domElement.removeEventListener("mousemove",vd),te.domElement.removeEventListener("mousedown",md),te.domElement.removeEventListener("mouseup",gd),te.domElement.removeEventListener("click",pd),ns&&(te.domElement.removeEventListener("touchstart",_d),te.domElement.removeEventListener("touchmove",xd),te.domElement.removeEventListener("touchend",yd)),a.current&&cancelAnimationFrame(a.current),u.current&&(u.current.clear(),u.current=null),v.current=null,l.current&&(l.current.dispose(),l.current=null),f.current.forEach(Oe=>Oe.dispose()),f.current=[],h.current.forEach(Oe=>Oe.dispose()),h.current=[],c.current&&(c.current.dispose(),c.current=null),d.current&&d.current.dispose(),n.current&&(n.current.dispose(),t.current&&n.current.domElement&&t.current.removeChild(n.current.domElement))}},[]),Q.useEffect(()=>{const Y=window.matchMedia("(prefers-reduced-motion: reduce)");Y.matches&&(J(!0),De(.3),Ce(!1),Ke(!1),it("Reduced motion mode enabled","info"));const $=te=>{te.matches&&(J(!0),De(.3),Ce(!1),it("Reduced motion mode enabled","info"))};return Y.addEventListener("change",$),()=>Y.removeEventListener("change",$)},[]),Q.useEffect(()=>{const Y=$=>{if($.target.tagName==="INPUT"||$.target.tagName==="TEXTAREA"||$.target.tagName==="SELECT")return;const te=$.key.toLowerCase(),Ee=Ku[te]||Ku[$.key];if(!Ee)return;$.preventDefault();const Qe=Object.keys(nn);switch(Ee.action){case"triggerPulse":ho();break;case"randomize":br(),it("Scene randomized","success");break;case"clearScene":In(),it("Scene cleared","info");break;case"toggleUI":Z(pt=>!pt),it(q?"UI hidden":"UI visible","info");break;case"toggleFullscreen":wn();break;case"togglePause":po();break;case"toggleMouseFollow":P(pt=>{const Ft=!pt;return it(Ft?"Mouse follow ON":"Mouse follow OFF","info"),Ft});break;case"toggleWaveGrid":fe(pt=>{const Ft=!pt;return it(Ft?"Wave grid ON":"Wave grid OFF","info"),Ft});break;case"palette1":case"palette2":case"palette3":case"palette4":case"palette5":case"palette6":const Ot=parseInt(Ee.action.slice(-1))-1;Qe[Ot]&&(se(Qe[Ot]),it(`Palette: ${Qe[Ot]}`,"success"));break;case"qualityUp":ba(1);break;case"qualityDown":ba(-1);break;case"resetCamera":Nt(),it("Camera reset","info");break;case"showHelp":K(pt=>!pt);break}};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[q,br,In,Nt]),Q.useEffect(()=>{Ge.current=I,o.current&&(I?o.current.stop():o.current.start())},[I]),Q.useEffect(()=>{i.current&&i.current.passes[1]&&(i.current.passes[1].strength=ft)},[ft]),Q.useEffect(()=>{s.current&&(s.current.autoRotate=re,s.current.autoRotateSpeed=be)},[re,be]),Q.useEffect(()=>{d.current&&d.current.setStyle(C)},[C]),Q.useEffect(()=>{m.current&&(m.current.enabled=Xe)},[Xe]),Q.useEffect(()=>{ie.current=ve},[ve]),Q.useEffect(()=>{_.current&&(_.current.enabled=st)},[st]),Q.useEffect(()=>{_.current&&(_.current.uniforms.uIntensity.value=Be)},[Be]),Q.useEffect(()=>{U.current=ce},[ce]),Q.useEffect(()=>{H.current=xe},[xe]),Q.useEffect(()=>{c.current&&c.current.setVisible(L)},[L]),Q.useEffect(()=>{k.current&&k.current.setEnabled(ct)},[ct]),Q.useEffect(()=>{if(k.current&&!ct){const Y=k.current.setQuality(Ye);Y&&Aa(Y.particleSize*Y.particleSize)}},[Ye,ct]),Q.useEffect(()=>{c.current&&c.current.setWaveParams(me,.5,Le)},[me,Le]),Q.useEffect(()=>{if(l.current&&l.current.particles){const Y={speed:0,direction:1,acceleration:2};l.current.particles.material.uniforms.uColorMode.value=Y[Re]||0}},[Re]),Q.useEffect(()=>{const Y=nn[O];if(!Y)return;d.current&&d.current.setColors(Y.background),l.current&&l.current.setColors(Y.primary,Y.secondary,Y.accent),c.current&&c.current.setColors(Y.primary,Y.secondary,Y.accent);const $=FA[O];$&&p.current&&(p.current.strength=$.strength,p.current.radius=$.radius,p.current.threshold=$.threshold),f.current.forEach(te=>{te.setColor(Y.primary)}),h.current.forEach(te=>{te.setColor(Y.secondary)}),N(te=>te.map(Ee=>({...Ee,color:Y.primary}))),j(te=>te.map(Ee=>({...Ee,color:Y.secondary})))},[O]);const Tt=Q.useCallback(()=>{const Y=nn[O],$={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:Y.primary},te=new $u(e.current,$);f.current.push(te),N([{id:Date.now(),...$}]),l.current&&l.current.setColors(Y.primary,Y.secondary,Y.accent);const Ee={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:Y.accent},Qe=new Qu(e.current,Ee);h.current.push(Qe),j([{id:Date.now(),...Ee}])},[O]),Kt=Q.useCallback((Y="point")=>{const $=new pg(new R((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4),Y==="repulsor"?-5:5,Y);_e(te=>[...te,{id:Date.now(),type:Y,position:$.position.clone(),strength:$.strength,radius:$.radius}]),it(`${Y.charAt(0).toUpperCase()+Y.slice(1)} attractor added`,"success")},[it]),It=Q.useCallback(Y=>{_e($=>$.filter((te,Ee)=>Ee!==Y))},[]),si=Q.useCallback((Y,$,te)=>{_e(Ee=>Ee.map((Qe,Ot)=>Ot===Y?{...Qe,[$]:te}:Qe))},[]),dt=Q.useCallback((Y="icosahedron")=>{const $=nn[O],te={type:Y,position:new R((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6),rotationSpeed:{x:.1,y:.2,z:.05},scale:.5+Math.random()*.5,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:$.primary},Ee=new $u(e.current,te);f.current.push(Ee),N(Qe=>[...Qe,{id:Date.now(),...te}])},[O]),Ze=Q.useCallback(Y=>{f.current[Y]&&(f.current[Y].dispose(),f.current.splice(Y,1),N($=>$.filter((te,Ee)=>Ee!==Y)))},[]),wi=Q.useCallback((Y,$,te)=>{f.current[Y]&&($==="type"?(f.current[Y].config.type=te,f.current[Y].createStructure()):$==="materialStyle"?(f.current[Y].config.materialStyle=te,f.current[Y].createStructure()):f.current[Y].config[$]=te,N(Ee=>Ee.map((Qe,Ot)=>Ot===Y?{...Qe,[$]:te}:Qe)))},[]),_t=Q.useCallback((Y="helix")=>{const $=nn[O],te={type:Y,position:new R((Math.random()-.5)*4,(Math.random()-.5)*2,(Math.random()-.5)*4),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:$.accent},Ee=new Qu(e.current,te);h.current.push(Ee),j(Qe=>[...Qe,{id:Date.now(),...te}])},[O]),Ti=Q.useCallback(Y=>{h.current[Y]&&(h.current[Y].dispose(),h.current.splice(Y,1),j($=>$.filter((te,Ee)=>Ee!==Y)))},[]),Ar=Q.useCallback((Y,$,te)=>{h.current[Y]&&($==="type"?(h.current[Y].config.type=te,h.current[Y].createRibbon()):h.current[Y].config[$]=te,j(Ee=>Ee.map((Qe,Ot)=>Ot===Y?{...Qe,[$]:te}:Qe)))},[]),In=Q.useCallback(()=>{f.current.forEach(Y=>Y.dispose()),f.current=[],N([]),h.current.forEach(Y=>Y.dispose()),h.current=[],j([])},[]),br=Q.useCallback(()=>{In();const Y=Object.keys(nn),$=Y[Math.floor(Math.random()*Y.length)];se($);const te=["icosahedron","torus","rings","helix","mobius"],Ee=1+Math.floor(Math.random()*3);for(let pt=0;pt<Ee;pt++){const Ft=te[Math.floor(Math.random()*te.length)];setTimeout(()=>dt(Ft),pt*100)}const Qe=["helix","lissajous","toroidal","spiral"],Ot=1+Math.floor(Math.random()*2);for(let pt=0;pt<Ot;pt++){const Ft=Qe[Math.floor(Math.random()*Qe.length)];setTimeout(()=>_t(Ft),pt*100)}De(.5+Math.random()*1.5),We(1+Math.random()*1.5),Ae(Math.random()*1.5)},[In,dt,_t]),Nt=Q.useCallback(()=>{r.current&&s.current&&(r.current.position.set(0,2,8),s.current.target.set(0,0,0),s.current.update())},[]),it=Q.useCallback((Y,$="info")=>{const te=Date.now();we(Ee=>[...Ee,{id:te,message:Y,type:$}]),setTimeout(()=>{we(Ee=>Ee.filter(Qe=>Qe.id!==te))},3e3)},[]),ho=Q.useCallback(()=>{u.current&&(u.current.trigger(new R(0,0,0),12,3,8),it("Pulse triggered!","success"))},[it]),wn=Q.useCallback(()=>{document.fullscreenElement?(document.exitFullscreen(),it("Fullscreen OFF","info")):(document.documentElement.requestFullscreen().catch(Y=>{it("Could not enter fullscreen","error")}),it("Fullscreen ON","info"))},[it]),po=Q.useCallback(()=>{B(Y=>{const $=!Y;return it($?"Paused":"Resumed","info"),$})},[it]),ba=Q.useCallback(Y=>{const $=["ultra","high","medium","low","potato"],te=$.indexOf(Ye),Ee=Math.max(0,Math.min($.length-1,te-Y));Ee!==te&&(ot(!1),vt($[Ee]),it(`Quality: ${$[Ee]}`,"info"))},[Ye,it]),Ca=Q.useCallback(Y=>{const $=dg[Y];$&&(In(),se($.palette),M($.background),De($.timeScale),We($.bloom),fe($.waveGrid),Fe($.waveAmplitude),$.structures.forEach((te,Ee)=>{setTimeout(()=>{const Qe={type:te.type,position:new R(...te.position||[0,0,0]),rotationSpeed:{x:(te.rotationSpeed||.2)*.5,y:te.rotationSpeed||.2,z:(te.rotationSpeed||.2)*.25},scale:te.scale||1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:nn[$.palette].primary},Ot=new $u(e.current,Qe);f.current.push(Ot),N(pt=>[...pt,{id:Date.now()+Ee,...Qe}])},Ee*100)}),$.ribbons.forEach((te,Ee)=>{setTimeout(()=>{const Qe={type:te.type,position:new R(0,0,0),animationSpeed:1,thickness:te.thickness||.08,glowIntensity:1.5,color:nn[$.palette].accent},Ot=new Qu(e.current,Qe);h.current.push(Ot),j(pt=>[...pt,{id:Date.now()+100+Ee,...Qe}])},($.structures.length+Ee)*100)}),it(`Loaded: ${Y}`,"success"),pe(!1))},[In,it]),mo=Y=>{$e($=>({...$,[Y]:!$[Y]}))},fd=Y=>{qe($=>({...$,[Y]:!$[Y]}))};return F.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[F.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),F.jsx("div",{style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px",pointerEvents:"none"},children:Me.map(Y=>F.jsx("div",{style:{padding:"12px 24px",borderRadius:"8px",background:Y.type==="success"?"rgba(0, 200, 100, 0.9)":Y.type==="error"?"rgba(200, 50, 50, 0.9)":"rgba(50, 50, 70, 0.9)",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",backdropFilter:"blur(10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)",animation:"slideUp 0.3s ease-out",pointerEvents:"auto"},children:Y.message},Y.id))}),ne&&F.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>K(!1),children:F.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"500px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:Y=>Y.stopPropagation(),children:[F.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"KEYBOARD SHORTCUTS"}),F.jsx("div",{style:{display:"grid",gap:"8px"},children:Object.entries(Ku).map(([Y,{description:$}])=>F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px"},children:[F.jsx("span",{style:{fontSize:"13px",color:"#ccc",fontFamily:"system-ui, -apple-system, sans-serif"},children:$}),F.jsx("kbd",{style:{padding:"4px 10px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",color:"#00ffaa",border:"1px solid rgba(255, 255, 255, 0.2)"},children:Y===" "?"Space":Y})]},Y))}),F.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Press ? or Escape to close"})]})}),ee&&F.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>pe(!1),children:F.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"700px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:Y=>Y.stopPropagation(),children:[F.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"SCENE PRESETS"}),F.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"15px"},children:Object.entries(dg).map(([Y,$])=>{var te,Ee,Qe,Ot,pt;return F.jsxs("button",{onClick:()=>Ca(Y),style:{padding:"20px",background:`linear-gradient(135deg, ${((te=nn[$.palette])==null?void 0:te.background[0])||"#1a1a2e"}, ${((Ee=nn[$.palette])==null?void 0:Ee.background[1])||"#16213e"})`,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",position:"relative",overflow:"hidden"},onMouseEnter:Ft=>{var is;Ft.currentTarget.style.transform="scale(1.02)",Ft.currentTarget.style.borderColor=((is=nn[$.palette])==null?void 0:is.primary)||"#00ffaa"},onMouseLeave:Ft=>{Ft.currentTarget.style.transform="scale(1)",Ft.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)"},children:[F.jsx("div",{style:{fontSize:"14px",fontWeight:"500",color:((Qe=nn[$.palette])==null?void 0:Qe.primary)||"#00ffaa",marginBottom:"8px",fontFamily:"system-ui, -apple-system, sans-serif"},children:Y}),F.jsx("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.4",fontFamily:"system-ui, -apple-system, sans-serif"},children:$.description}),F.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",width:"8px",height:"8px",borderRadius:"50%",background:((Ot=nn[$.palette])==null?void 0:Ot.primary)||"#00ffaa",boxShadow:`0 0 10px ${((pt=nn[$.palette])==null?void 0:pt.primary)||"#00ffaa"}`}})]},Y)})}),F.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Click a preset to load it, or click outside to close"})]})}),q&&F.jsxs("div",{style:{position:"absolute",top:0,right:0,width:"320px",height:"100%",background:"rgba(10, 10, 20, 0.85)",backdropFilter:"blur(10px)",borderLeft:"1px solid rgba(255, 255, 255, 0.1)",overflowY:"auto",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"13px",color:"#fff"},children:[F.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(0, 0, 0, 0.3)"},children:[F.jsx("h1",{style:{margin:0,fontSize:"20px",fontWeight:"300",letterSpacing:"2px"},children:"LUMINOUS FLOW"}),F.jsx("p",{style:{margin:"5px 0 0",opacity:.6,fontSize:"11px"},children:"3D Particle & Light Sculpture Sandbox"})]}),F.jsxs("div",{style:{padding:"15px 20px",display:"flex",gap:"10px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[F.jsx("button",{onClick:br,style:ui,children:"Randomize"}),F.jsx("button",{onClick:In,style:ui,children:"Clear Scene"})]}),F.jsxs(Ro,{title:"Global Controls",expanded:ze.global,onToggle:()=>mo("global"),children:[F.jsx(pn,{label:"Time Scale",value:He,onChange:De,min:.1,max:3,step:.1}),F.jsx(pn,{label:"Gravity",value:et,onChange:V,min:-2,max:2,step:.1}),F.jsx(pn,{label:"Turbulence",value:Ve,onChange:Ae,min:0,max:3,step:.1}),F.jsx(pn,{label:"Bloom Intensity",value:ft,onChange:We,min:0,max:3,step:.1}),F.jsx(Dr,{label:"Background Style",value:C,onChange:M,options:["solid","gradient","nebula"]}),F.jsx(Dr,{label:"Color Palette",value:O,onChange:se,options:Object.keys(nn)}),F.jsx(er,{label:"Film Grain",checked:Xe,onChange:oe}),F.jsx(er,{label:"Chromatic Aberration",checked:st,onChange:Ke}),st&&F.jsx(pn,{label:"Aberration Intensity",value:Be,onChange:Pe,min:.001,max:.01,step:.001})]}),F.jsxs(Ro,{title:"GPU Particles",expanded:ze.emitters,onToggle:()=>mo("emitters"),children:[F.jsxs("div",{style:{padding:"12px",background:"rgba(0, 255, 170, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 255, 170, 0.3)",marginBottom:"10px"},children:[F.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"6px",color:"#00ffaa"},children:"✓ GPU Particles Active"}),F.jsxs("div",{style:{fontSize:"11px",opacity:.8,lineHeight:"1.4"},children:["65,536 particles (256×256 texture)",F.jsx("br",{}),"GPU-computed positions & velocities",F.jsx("br",{}),"Curl noise + central attractor"]})]}),F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 170, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 170, 0, 0.3)"},children:[F.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ffaa00"},children:"Interactivity"}),F.jsx(er,{label:"Mouse Follow (particles follow cursor)",checked:ve,onChange:P}),F.jsx(er,{label:"Auto Pulse (periodic shockwaves)",checked:ce,onChange:Ce}),ce&&F.jsx(pn,{label:"Pulse Interval (seconds)",value:xe,onChange:ae,min:1,max:10,step:.5}),F.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Click anywhere to trigger a shockwave!"})]}),F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 170, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 170, 255, 0.3)"},children:[F.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#00aaff"},children:"Wave Grid"}),F.jsx(er,{label:"Enable Wave Grid",checked:L,onChange:fe}),L&&F.jsxs(F.Fragment,{children:[F.jsx(pn,{label:"Wave Amplitude",value:me,onChange:Fe,min:.2,max:3,step:.1}),F.jsx(pn,{label:"Wave Speed",value:Le,onChange:tt,min:.2,max:3,step:.1})]}),F.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"16,384 particles in undulating grid below the scene"})]}),F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 85, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 85, 255, 0.3)"},children:[F.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aa55ff"},children:"Performance"}),F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px",fontSize:"11px"},children:[F.jsxs("span",{children:["FPS: ",F.jsx("strong",{style:{color:Et>50?"#00ff88":Et>30?"#ffaa00":"#ff4444"},children:Et})]}),F.jsxs("span",{children:["Quality: ",F.jsx("strong",{style:{color:"#aa55ff",textTransform:"capitalize"},children:Ye})]}),F.jsxs("span",{children:["Particles: ",F.jsxs("strong",{children:[(Ta/1e3).toFixed(0),"K"]})]})]}),F.jsx(er,{label:"Auto Quality (adjusts based on FPS)",checked:ct,onChange:ot}),!ct&&F.jsx(Dr,{label:"Quality Level",value:Ye,onChange:vt,options:["ultra","high","medium","low","potato"]}),F.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:ct?F.jsx(F.Fragment,{children:"Auto mode adjusts quality based on FPS. Target: 50-60fps."}):F.jsx(F.Fragment,{children:"Manual mode lets you choose quality level. Higher = more particles and effects."})})]}),F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 255, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 255, 0, 0.3)"},children:[F.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aaff00"},children:["Attractors (",G.length,")"]}),F.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"10px",flexWrap:"wrap"},children:[F.jsx("button",{onClick:()=>Kt("point"),style:{...ui,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Point"}),F.jsx("button",{onClick:()=>Kt("vortex"),style:{...ui,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Vortex"}),F.jsx("button",{onClick:()=>Kt("orbit"),style:{...ui,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Orbit"}),F.jsx("button",{onClick:()=>Kt("repulsor"),style:{...ui,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Repulsor"})]}),G.map((Y,$)=>F.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"6px"},children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[F.jsx("span",{style:{fontSize:"11px",textTransform:"capitalize"},children:Y.type}),F.jsx("button",{onClick:()=>It($),style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]}),F.jsx(pn,{label:"Strength",value:Y.strength,onChange:te=>si($,"strength",te),min:-10,max:10,step:.5})]},Y.id)),F.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Add attractors to create force fields. Point attracts, Vortex spins, Orbit maintains distance, Repulsor pushes away."})]}),F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 100, 200, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 100, 200, 0.3)"},children:[F.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff64c8"},children:"Velocity Coloring"}),F.jsx(Dr,{label:"Color Mode",value:Re,onChange:ke,options:["speed","direction","acceleration"]}),F.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Speed: color by velocity magnitude",F.jsx("br",{}),"Direction: hue based on movement direction",F.jsx("br",{}),"Acceleration: highlight sudden changes"]})]}),Tr!==null&&F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 200, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 200, 0, 0.3)"},children:[F.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#ffc800"},children:["Selected: ",((hd=A[Tr])==null?void 0:hd.type)||"Structure"]}),F.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.4"},children:["Drag to move • Shift+Click to select",F.jsx("br",{}),"Click elsewhere to deselect"]}),F.jsx("button",{onClick:()=>{co(null),E.current=null},style:{...ui,width:"100%",marginTop:"8px",fontSize:"11px"},children:"Deselect"})]}),ns&&F.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 200, 255, 0.3)"},children:[F.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#00c8ff"},children:"Touch Gestures"}),F.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.6"},children:["• Tap: Shockwave",F.jsx("br",{}),"• Double-tap: Add structure",F.jsx("br",{}),"• Long press: Strong shockwave",F.jsx("br",{}),"• Swipe left/right: Change palette",F.jsx("br",{}),"• 3-finger swipe: Toggle UI"]})]})]}),F.jsxs(Ro,{title:`Structures (${A.length})`,expanded:ze.structures,onToggle:()=>mo("structures"),children:[F.jsx("button",{onClick:()=>dt(),style:{...ui,width:"100%",marginBottom:"10px"},children:"+ Add Structure"}),A.map((Y,$)=>{var te;return F.jsxs(mg,{title:`${Y.type}`,expanded:je[Y.id],onToggle:()=>fd(Y.id),onDelete:()=>Ze($),children:[F.jsx(Dr,{label:"Type",value:Y.type,onChange:Ee=>wi($,"type",Ee),options:["icosahedron","torus","rings","helix","mobius"]}),F.jsx(pn,{label:"Rotation Speed",value:((te=Y.rotationSpeed)==null?void 0:te.y)||.2,onChange:Ee=>wi($,"rotationSpeed",{x:Ee*.5,y:Ee,z:Ee*.25}),min:0,max:2,step:.1}),F.jsx(pn,{label:"Pulse Intensity",value:Y.pulseIntensity,onChange:Ee=>wi($,"pulseIntensity",Ee),min:0,max:.5,step:.05}),F.jsx(pn,{label:"Scale",value:Y.scale,onChange:Ee=>wi($,"scale",Ee),min:.2,max:3,step:.1}),F.jsx(Dr,{label:"Material",value:Y.materialStyle,onChange:Ee=>wi($,"materialStyle",Ee),options:["glass","holographic","solid"]})]},Y.id)})]}),F.jsxs(Ro,{title:`Ribbons (${X.length})`,expanded:ze.ribbons,onToggle:()=>mo("ribbons"),children:[F.jsx("button",{onClick:()=>_t(),style:{...ui,width:"100%",marginBottom:"10px"},children:"+ Add Ribbon"}),X.map((Y,$)=>F.jsxs(mg,{title:`${Y.type} Ribbon`,expanded:je[Y.id],onToggle:()=>fd(Y.id),onDelete:()=>Ti($),children:[F.jsx(Dr,{label:"Curve Type",value:Y.type,onChange:te=>Ar($,"type",te),options:["helix","lissajous","toroidal","spiral"]}),F.jsx(pn,{label:"Animation Speed",value:Y.animationSpeed,onChange:te=>Ar($,"animationSpeed",te),min:.1,max:3,step:.1}),F.jsx(pn,{label:"Thickness",value:Y.thickness,onChange:te=>Ar($,"thickness",te),min:.02,max:.3,step:.01}),F.jsx(pn,{label:"Glow Intensity",value:Y.glowIntensity,onChange:te=>Ar($,"glowIntensity",te),min:.5,max:3,step:.1})]},Y.id))]}),F.jsxs(Ro,{title:"Camera",expanded:ze.camera,onToggle:()=>mo("camera"),children:[F.jsx(er,{label:"Auto Rotate",checked:re,onChange:le}),re&&F.jsx(pn,{label:"Rotation Speed",value:be,onChange:ge,min:.1,max:2,step:.1}),F.jsx(er,{label:"Immersion Mode",checked:ye,onChange:Ne}),F.jsx("button",{onClick:Nt,style:{...ui,width:"100%",marginTop:"10px"},children:"Reset Camera"})]}),F.jsx("div",{style:{padding:"15px 20px",textAlign:"center",opacity:.5,fontSize:"11px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:"Drag to orbit | Scroll to zoom | Press ? for help"}),F.jsx("div",{style:{padding:"10px 20px 20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:F.jsx("button",{onClick:()=>pe(!0),style:{...ui,width:"100%",background:"linear-gradient(135deg, rgba(0, 255, 170, 0.2), rgba(0, 170, 255, 0.2))",border:"1px solid rgba(0, 255, 170, 0.4)"},children:"Open Preset Gallery"})})]}),!q&&F.jsxs("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"10px",zIndex:100},children:[F.jsx("button",{onClick:()=>K(!0),style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"18px",cursor:"pointer",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Keyboard Shortcuts (?)",children:"?"}),F.jsx("button",{onClick:()=>Z(!0),style:{padding:"10px 20px",borderRadius:"20px",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"12px",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"system-ui, -apple-system, sans-serif"},title:"Show UI (H)",children:"Show UI"})]}),F.jsx("style",{children:`
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
      `})]})}const ui={background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",padding:"8px 16px",cursor:"pointer",fontSize:"12px",transition:"all 0.2s",flex:1};function Ro({title:t,expanded:e,onToggle:n,children:i}){return F.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[F.jsxs("div",{onClick:n,style:{padding:"12px 20px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255, 255, 255, 0.03)"},children:[F.jsx("span",{style:{fontWeight:"500",letterSpacing:"0.5px"},children:t}),F.jsx("span",{style:{opacity:.5},children:e?"−":"+"})]}),e&&F.jsx("div",{style:{padding:"10px 20px"},children:i})]})}function mg({title:t,expanded:e,onToggle:n,onDelete:i,children:r}){return F.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"4px",marginBottom:"8px",overflow:"hidden"},children:[F.jsxs("div",{style:{padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:n,children:[F.jsx("span",{style:{fontSize:"12px",textTransform:"capitalize"},children:t}),F.jsxs("div",{style:{display:"flex",gap:"8px"},children:[F.jsx("span",{style:{opacity:.5,fontSize:"12px"},children:e?"−":"+"}),F.jsx("button",{onClick:s=>{s.stopPropagation(),i()},style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]})]}),e&&F.jsx("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:r})]})}function pn({label:t,value:e,onChange:n,min:i,max:r,step:s}){return F.jsxs("div",{style:{marginBottom:"12px"},children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",fontSize:"11px"},children:[F.jsx("span",{style:{opacity:.7},children:t}),F.jsx("span",{style:{opacity:.5},children:typeof e=="number"?e.toFixed(2):e})]}),F.jsx("input",{type:"range",value:e,onChange:o=>n(parseFloat(o.target.value)),min:i,max:r,step:s,style:{width:"100%",height:"4px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"2px",appearance:"none",cursor:"pointer"}})]})}function Dr({label:t,value:e,onChange:n,options:i}){return F.jsxs("div",{style:{marginBottom:"12px"},children:[F.jsx("div",{style:{fontSize:"11px",opacity:.7,marginBottom:"4px"},children:t}),F.jsx("select",{value:e,onChange:r=>n(r.target.value),style:{width:"100%",padding:"6px 10px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",fontSize:"12px",cursor:"pointer"},children:i.map(r=>F.jsx("option",{value:r,style:{background:"#1a1a2e"},children:r},r))})]})}function er({label:t,checked:e,onChange:n}){return F.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",cursor:"pointer",fontSize:"12px"},children:[F.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{cursor:"pointer"}}),F.jsx("span",{style:{opacity:.8},children:t})]})}const WA=Zu.createRoot(document.getElementById("root"));WA.render(F.jsx(GA,{}));
