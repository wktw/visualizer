(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Wg={exports:{}},bc={},jg={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),h_=Symbol.for("react.portal"),d_=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),__=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),S_=Symbol.for("react.lazy"),Qd=Symbol.iterator;function M_(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var Xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,qg={};function po(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Xg}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=po.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Xg}var vh=gh.prototype=new $g;vh.constructor=gh;Yg(vh,po.prototype);vh.isPureReactComponent=!0;var Zd=Array.isArray,Kg=Object.prototype.hasOwnProperty,xh={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kg.call(e,i)&&!Qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:s,ref:o,props:r,_owner:xh.current}}function E_(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _h(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jd=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case h_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jc(o,0):i,Zd(r)?(n="",t!=null&&(n=t.replace(Jd,"$&/")+"/"),Il(r,e,n,"",function(c){return c})):r!=null&&(_h(r)&&(r=E_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jc(s,a);o+=Il(s,e,n,l,r)}else if(l=M_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jc(s,a++),o+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function T_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var An={current:null},Ol={transition:null},b_={ReactCurrentDispatcher:An,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:xh};function Jg(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!_h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=po;ot.Fragment=d_;ot.Profiler=m_;ot.PureComponent=gh;ot.StrictMode=p_;ot.Suspense=__;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_;ot.act=Jg;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kg.call(e,l)&&!Qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:v_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g_,_context:t},t.Consumer=t};ot.createElement=Zg;ot.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:x_,render:t}};ot.isValidElement=_h;ot.lazy=function(t){return{$$typeof:S_,_payload:{_status:-1,_result:t},_init:T_}};ot.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};ot.unstable_act=Jg;ot.useCallback=function(t,e){return An.current.useCallback(t,e)};ot.useContext=function(t){return An.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return An.current.useDeferredValue(t)};ot.useEffect=function(t,e){return An.current.useEffect(t,e)};ot.useId=function(){return An.current.useId()};ot.useImperativeHandle=function(t,e,n){return An.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return An.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return An.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return An.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return An.current.useReducer(t,e,n)};ot.useRef=function(t){return An.current.useRef(t)};ot.useState=function(t){return An.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return An.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return An.current.useTransition()};ot.version="18.3.1";jg.exports=ot;var K=jg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=K,C_=Symbol.for("react.element"),R_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,L_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D_={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)P_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:C_,type:t,key:s,ref:o,props:r,_owner:L_.current}}bc.Fragment=R_;bc.jsx=e0;bc.jsxs=e0;Wg.exports=bc;var L=Wg.exports,ff={},t0={exports:{}},Yn={},n0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,k){var j=I.length;I.push(k);e:for(;0<j;){var J=j-1>>>1,ie=I[J];if(0<r(ie,k))I[J]=k,I[j]=ie,j=J;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],j=I.pop();if(j!==k){I[0]=j;e:for(var J=0,ie=I.length,Q=ie>>>1;J<Q;){var ne=2*(J+1)-1,ve=I[ne],Me=ne+1,Te=I[Me];if(0>r(ve,j))Me<ie&&0>r(Te,ve)?(I[J]=Te,I[Me]=j,J=Me):(I[J]=ve,I[ne]=j,J=ne);else if(Me<ie&&0>r(Te,j))I[J]=Te,I[Me]=j,J=Me;else break e}}return k}function r(I,k){var j=I.sortIndex-k.sortIndex;return j!==0?j:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=I)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(I){if(_=!1,g(I),!x)if(n(l)!==null)x=!0,Y(A);else{var k=n(c);k!==null&&ee(y,k.startTime-I)}}function A(I,k){x=!1,_&&(_=!1,u(U),U=-1),m=!0;var j=d;try{for(g(k),h=n(l);h!==null&&(!(h.expirationTime>k)||I&&!z());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var ie=J(h.expirationTime<=k);k=t.unstable_now(),typeof ie=="function"?h.callback=ie:h===n(l)&&i(l),g(k)}else i(l);h=n(l)}if(h!==null)var Q=!0;else{var ne=n(c);ne!==null&&ee(y,ne.startTime-k),Q=!1}return Q}finally{h=null,d=j,m=!1}}var E=!1,T=null,U=-1,S=5,w=-1;function z(){return!(t.unstable_now()-w<S)}function H(){if(T!==null){var I=t.unstable_now();w=I;var k=!0;try{k=T(!0,I)}finally{k?te():(E=!1,T=null)}}else E=!1}var te;if(typeof v=="function")te=function(){v(H)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=H,te=function(){V.postMessage(null)}}else te=function(){p(H,0)};function Y(I){T=I,E||(E=!0,te())}function ee(I,k){U=p(function(){I(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Y(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var j=d;d=k;try{return I()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=d;d=I;try{return k()}finally{d=j}},t.unstable_scheduleCallback=function(I,k,j){var J=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=j+ie,I={id:f++,callback:k,priorityLevel:I,startTime:j,expirationTime:ie,sortIndex:-1},j>J?(I.sortIndex=j,e(c,I),n(l)===null&&I===n(c)&&(_?(u(U),U=-1):_=!0,ee(y,j-J))):(I.sortIndex=ie,e(l,I),x||m||(x=!0,Y(A))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var k=d;return function(){var j=d;d=k;try{return I.apply(this,arguments)}finally{d=j}}}})(i0);n0.exports=i0;var U_=n0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=K,Xn=U_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r0=new Set,ta={};function is(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ta[t]=e,t=0;t<e.length;t++)r0.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,I_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ep={},tp={};function O_(t){return hf.call(tp,t)?!0:hf.call(ep,t)?!1:I_.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function F_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z_(t,e,n,i){if(e===null||typeof e>"u"||F_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){hn[t]=new Cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];hn[e]=new Cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){hn[t]=new Cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){hn[t]=new Cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){hn[t]=new Cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){hn[t]=new Cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){hn[t]=new Cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){hn[t]=new Cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){hn[t]=new Cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yh=/[\-:]([a-z])/g;function Sh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yh,Sh);hn[e]=new Cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yh,Sh);hn[e]=new Cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yh,Sh);hn[e]=new Cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){hn[t]=new Cn(t,1,!1,t.toLowerCase(),null,!1,!1)});hn.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){hn[t]=new Cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mh(t,e,n,i){var r=hn.hasOwnProperty(e)?hn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),np=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Object.assign,eu;function Oo(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function k_(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case df:return"Profiler";case Eh:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case s0:return(t._context.displayName||"Context")+".Provider";case wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Th:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function B_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===Eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H_(t){var e=l0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=H_(t))}function c0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=l0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return Dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u0(t,e){e=e.checked,e!=null&&Mh(t,"checked",e,!1)}function xf(t,e){u0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Fo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function f0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,d0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V_=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){V_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function p0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function m0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=p0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G_=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(G_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tf=null,Ys=null,qs=null;function ap(t){if(t=Ea(t)){if(typeof Tf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Lc(e),Tf(t.stateNode,t.type,e))}}function g0(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function v0(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function x0(t,e){return t(e)}function _0(){}var iu=!1;function y0(t,e,n){if(iu)return t(e,n);iu=!0;try{return x0(t,e,n)}finally{iu=!1,(Ys!==null||qs!==null)&&(_0(),v0())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var bf=!1;if(Vi)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{bf=!1}function W_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,$l=null,Kl=!1,Af=null,j_={onError:function(t){Vo=!0,$l=t}};function X_(t,e,n,i,r,s,o,a,l){Vo=!1,$l=null,W_.apply(j_,arguments)}function Y_(t,e,n,i,r,s,o,a,l){if(X_.apply(this,arguments),Vo){if(Vo){var c=$l;Vo=!1,$l=null}else throw Error(ce(198));Kl||(Kl=!0,Af=c)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(rs(t)!==t)throw Error(ce(188))}function q_(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lp(r),t;if(s===i)return lp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function M0(t){return t=q_(t),t!==null?E0(t):null}function E0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E0(t);if(e!==null)return e;t=t.sibling}return null}var w0=Xn.unstable_scheduleCallback,cp=Xn.unstable_cancelCallback,$_=Xn.unstable_shouldYield,K_=Xn.unstable_requestPaint,kt=Xn.unstable_now,Q_=Xn.unstable_getCurrentPriorityLevel,Ah=Xn.unstable_ImmediatePriority,T0=Xn.unstable_UserBlockingPriority,Ql=Xn.unstable_NormalPriority,Z_=Xn.unstable_LowPriority,b0=Xn.unstable_IdlePriority,Ac=null,bi=null;function J_(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var ja=64,Xa=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A0(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function C0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R0,Rh,P0,L0,D0,Rf=!1,Ya=[],ur=null,fr=null,hr=null,ra=new Map,sa=new Map,sr=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&Rh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ay(t,e,n,i,r){switch(e){case"focusin":return ur=To(ur,t,e,n,i,r),!0;case"dragenter":return fr=To(fr,t,e,n,i,r),!0;case"mouseover":return hr=To(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,To(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,To(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function U0(t){var e=Gr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=S0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){P0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wf=i,n.target.dispatchEvent(i),wf=null}else return e=Ea(n),e!==null&&Rh(e),t.blockedOn=n,!1;e.shift()}return!0}function fp(t,e,n){Fl(t)&&n.delete(e)}function ly(){Rf=!1,ur!==null&&Fl(ur)&&(ur=null),fr!==null&&Fl(fr)&&(fr=null),hr!==null&&Fl(hr)&&(hr=null),ra.forEach(fp),sa.forEach(fp)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,ly)))}function oa(t){function e(r){return bo(r,t)}if(0<Ya.length){bo(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ur!==null&&bo(ur,t),fr!==null&&bo(fr,t),hr!==null&&bo(hr,t),ra.forEach(e),sa.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&sr.shift()}var $s=Yi.ReactCurrentBatchConfig,Jl=!0;function cy(t,e,n,i){var r=dt,s=$s.transition;$s.transition=null;try{dt=1,Ph(t,e,n,i)}finally{dt=r,$s.transition=s}}function uy(t,e,n,i){var r=dt,s=$s.transition;$s.transition=null;try{dt=4,Ph(t,e,n,i)}finally{dt=r,$s.transition=s}}function Ph(t,e,n,i){if(Jl){var r=Pf(t,e,n,i);if(r===null)pu(t,e,i,ec,n),up(t,i);else if(ay(r,t,e,n,i))i.stopPropagation();else if(up(t,i),e&4&&-1<oy.indexOf(t)){for(;r!==null;){var s=Ea(r);if(s!==null&&R0(s),s=Pf(t,e,n,i),s===null&&pu(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var ec=null;function Pf(t,e,n,i){if(ec=null,t=bh(i),t=Gr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function N0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case Ah:return 1;case T0:return 4;case Ql:case Z_:return 16;case b0:return 536870912;default:return 16}default:return 16}}var ar=null,Lh=null,zl=null;function I0(){if(zl)return zl;var t,e=Lh,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function hp(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:hp,this.isPropagationStopped=hp,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=qn(mo),Ma=Dt({},mo,{view:0,detail:0}),fy=qn(Ma),su,ou,Ao,Cc=Dt({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(su=t.screenX-Ao.screenX,ou=t.screenY-Ao.screenY):ou=su=0,Ao=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),dp=qn(Cc),hy=Dt({},Cc,{dataTransfer:0}),dy=qn(hy),py=Dt({},Ma,{relatedTarget:0}),au=qn(py),my=Dt({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=qn(my),vy=Dt({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=qn(vy),_y=Dt({},mo,{data:0}),pp=qn(_y),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=My[t])?!!e[t]:!1}function Uh(){return Ey}var wy=Dt({},Ma,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uh,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ty=qn(wy),by=Dt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=qn(by),Ay=Dt({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uh}),Cy=qn(Ay),Ry=Dt({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=qn(Ry),Ly=Dt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=qn(Ly),Uy=[9,13,27,32],Nh=Vi&&"CompositionEvent"in window,Go=null;Vi&&"documentMode"in document&&(Go=document.documentMode);var Ny=Vi&&"TextEvent"in window&&!Go,O0=Vi&&(!Nh||Go&&8<Go&&11>=Go),gp=" ",vp=!1;function F0(t,e){switch(t){case"keyup":return Uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Iy(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(vp=!0,gp);case"textInput":return t=e.data,t===gp&&vp?null:t;default:return null}}function Oy(t,e){if(Us)return t==="compositionend"||!Nh&&F0(t,e)?(t=I0(),zl=Lh=ar=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fy[t.type]:e==="textarea"}function k0(t,e,n,i){g0(i),e=tc(e,"onChange"),0<e.length&&(n=new Dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,aa=null;function zy(t){K0(t,0)}function Rc(t){var e=Os(t);if(c0(e))return t}function ky(t,e){if(t==="change")return e}var B0=!1;if(Vi){var lu;if(Vi){var cu="oninput"in document;if(!cu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),cu=typeof _p.oninput=="function"}lu=cu}else lu=!1;B0=lu&&(!document.documentMode||9<document.documentMode)}function yp(){Wo&&(Wo.detachEvent("onpropertychange",H0),aa=Wo=null)}function H0(t){if(t.propertyName==="value"&&Rc(aa)){var e=[];k0(e,aa,t,bh(t)),y0(zy,e)}}function By(t,e,n){t==="focusin"?(yp(),Wo=e,aa=n,Wo.attachEvent("onpropertychange",H0)):t==="focusout"&&yp()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(aa)}function Vy(t,e){if(t==="click")return Rc(e)}function Gy(t,e){if(t==="input"||t==="change")return Rc(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:Wy;function la(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hf.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,e){var n=Sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sp(n)}}function V0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jy(t){var e=G0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V0(n.ownerDocument.documentElement,n)){if(i!==null&&Ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mp(n,s);var o=Mp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xy=Vi&&"documentMode"in document&&11>=document.documentMode,Ns=null,Lf=null,jo=null,Df=!1;function Ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Ns==null||Ns!==ql(i)||(i=Ns,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&la(jo,i)||(jo=i,i=tc(Lf,"onSelect"),0<i.length&&(e=new Dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},uu={},W0={};Vi&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Pc(t){if(uu[t])return uu[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W0)return uu[t]=e[n];return t}var j0=Pc("animationend"),X0=Pc("animationiteration"),Y0=Pc("animationstart"),q0=Pc("transitionend"),$0=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){$0.set(t,e),is(e,[t])}for(var fu=0;fu<wp.length;fu++){var hu=wp[fu],Yy=hu.toLowerCase(),qy=hu[0].toUpperCase()+hu.slice(1);wr(Yy,"on"+qy)}wr(j0,"onAnimationEnd");wr(X0,"onAnimationIteration");wr(Y0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(q0,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y_(i,e,void 0,t),t.currentTarget=null}function K0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}}}if(Kl)throw t=Af,Kl=!1,Af=null,t}function Et(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var i=t+"__bubble";n.has(i)||(Q0(e,t,2,!1),n.add(i))}function du(t,e,n){var i=0;e&&(i|=4),Q0(n,t,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Ka]){t[Ka]=!0,r0.forEach(function(n){n!=="selectionchange"&&($y.has(n)||du(n,!1,t),du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,du("selectionchange",!1,e))}}function Q0(t,e,n,i){switch(N0(e)){case 1:var r=cy;break;case 4:r=uy;break;default:r=Ph}n=r.bind(null,e,n,t),r=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}y0(function(){var c=s,f=bh(n),h=[];e:{var d=$0.get(t);if(d!==void 0){var m=Dh,x=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":m=Ty;break;case"focusin":x="focus",m=au;break;case"focusout":x="blur",m=au;break;case"beforeblur":case"afterblur":m=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Cy;break;case j0:case X0:case Y0:m=gy;break;case q0:m=Py;break;case"scroll":m=fy;break;case"wheel":m=Dy;break;case"copy":case"cut":case"paste":m=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mp}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=ia(v,u),y!=null&&_.push(ua(v,y,g)))),p)break;v=v.return}0<_.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==wf&&(x=n.relatedTarget||n.fromElement)&&(Gr(x)||x[Gi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Gr(x):null,x!==null&&(p=rs(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=dp,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=mp,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?d:Os(m),g=x==null?d:Os(x),d=new _(y,v+"leave",m,n,f),d.target=p,d.relatedTarget=g,y=null,Gr(f)===c&&(_=new _(u,v+"enter",x,n,f),_.target=g,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,u=x,v=0,g=_;g;g=hs(g))v++;for(g=0,y=u;y;y=hs(y))g++;for(;0<v-g;)_=hs(_),v--;for(;0<g-v;)u=hs(u),g--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=hs(_),u=hs(u)}_=null}else _=null;m!==null&&bp(h,d,m,_,!1),x!==null&&p!==null&&bp(h,p,x,_,!0)}}e:{if(d=c?Os(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=ky;else if(xp(d))if(B0)A=Gy;else{A=Hy;var E=By}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Vy);if(A&&(A=A(t,c))){k0(h,A,n,f);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&_f(d,"number",d.value)}switch(E=c?Os(c):window,t){case"focusin":(xp(E)||E.contentEditable==="true")&&(Ns=E,Lf=c,jo=null);break;case"focusout":jo=Lf=Ns=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Ep(h,n,f);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":Ep(h,n,f)}var T;if(Nh)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Us?F0(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(O0&&n.locale!=="ko"&&(Us||U!=="onCompositionStart"?U==="onCompositionEnd"&&Us&&(T=I0()):(ar=f,Lh="value"in ar?ar.value:ar.textContent,Us=!0)),E=tc(c,U),0<E.length&&(U=new pp(U,t,null,n,f),h.push({event:U,listeners:E}),T?U.data=T:(T=z0(n),T!==null&&(U.data=T)))),(T=Ny?Iy(t,n):Oy(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(f=new pp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}K0(h,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Qy,"")}function Qa(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(ce(425))}function nc(){}var Uf=null,Nf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(eS)}:Of;function eS(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),wi="__reactFiber$"+go,fa="__reactProps$"+go,Gi="__reactContainer$"+go,Ff="__reactEvents$"+go,tS="__reactListeners$"+go,nS="__reactHandles$"+go;function Gr(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rp(t);t!==null;){if(n=t[wi])return n;t=Rp(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[wi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Lc(t){return t[fa]||null}var zf=[],Fs=-1;function Tr(t){return{current:t}}function Tt(t){0>Fs||(t.current=zf[Fs],zf[Fs]=null,Fs--)}function Mt(t,e){Fs++,zf[Fs]=t.current,t.current=e}var Sr={},Mn=Tr(Sr),Un=Tr(!1),Qr=Sr;function to(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function ic(){Tt(Un),Tt(Mn)}function Pp(t,e,n){if(Mn.current!==Sr)throw Error(ce(168));Mt(Mn,e),Mt(Un,n)}function Z0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,B_(t)||"Unknown",r));return Dt({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Qr=Mn.current,Mt(Mn,t),Mt(Un,Un.current),!0}function Lp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Z0(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,Tt(Un),Tt(Mn),Mt(Mn,t)):Tt(Un),Mt(Un,n)}var Ii=null,Dc=!1,gu=!1;function J0(t){Ii===null?Ii=[t]:Ii.push(t)}function iS(t){Dc=!0,J0(t)}function br(){if(!gu&&Ii!==null){gu=!0;var t=0,e=dt;try{var n=Ii;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Dc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),w0(Ah,br),r}finally{dt=e,gu=!1}}return null}var zs=[],ks=0,sc=null,oc=0,Kn=[],Qn=0,Zr=null,Oi=1,Fi="";function zr(t,e){zs[ks++]=oc,zs[ks++]=sc,sc=t,oc=e}function ev(t,e,n){Kn[Qn++]=Oi,Kn[Qn++]=Fi,Kn[Qn++]=Zr,Zr=t;var i=Oi;t=Fi;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-vi(e)+r|n<<r|i,Fi=s+t}else Oi=1<<s|n<<r|i,Fi=t}function Oh(t){t.return!==null&&(zr(t,1),ev(t,1,0))}function Fh(t){for(;t===sc;)sc=zs[--ks],zs[ks]=null,oc=zs[--ks],zs[ks]=null;for(;t===Zr;)Zr=Kn[--Qn],Kn[Qn]=null,Fi=Kn[--Qn],Kn[Qn]=null,Oi=Kn[--Qn],Kn[Qn]=null}var jn=null,Wn=null,At=!1,gi=null;function tv(t,e){var n=ii(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jn=t,Wn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jn=t,Wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Oi,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ii(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jn=t,Wn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(At){var e=Wn;if(e){var n=e;if(!Dp(t,e)){if(kf(t))throw Error(ce(418));e=dr(n.nextSibling);var i=jn;e&&Dp(t,e)?tv(i,n):(t.flags=t.flags&-4097|2,At=!1,jn=t)}}else{if(kf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,At=!1,jn=t}}}function Up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function Za(t){if(t!==jn)return!1;if(!At)return Up(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=Wn)){if(kf(t))throw nv(),Error(ce(418));for(;e;)tv(t,e),e=dr(e.nextSibling)}if(Up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wn=null}}else Wn=jn?dr(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=Wn;t;)t=dr(t.nextSibling)}function no(){Wn=jn=null,At=!1}function zh(t){gi===null?gi=[t]:gi.push(t)}var rS=Yi.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function iv(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=vr(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,y){return v===null||v.tag!==6?(v=Eu(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var A=g.type;return A===Ds?f(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ir&&Np(A)===v.type)?(y=r(v,g.props),y.ref=Co(u,v,g),y.return=u,y):(y=Xl(g.type,g.key,g.props,null,u.mode,y),y.ref=Co(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=wu(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,y,A){return v===null||v.tag!==7?(v=Yr(g,u.mode,y,A),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Eu(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return g=Xl(v.type,v.key,v.props,null,u.mode,g),g.ref=Co(u,null,v),g.return=u,g;case Ls:return v=wu(v,u.mode,g),v.return=u,v;case ir:var y=v._init;return h(u,y(v._payload),g)}if(Fo(v)||Eo(v))return v=Yr(v,u.mode,g,null),v.return=u,v;Ja(u,v)}return null}function d(u,v,g,y){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:return g.key===A?l(u,v,g,y):null;case Ls:return g.key===A?c(u,v,g,y):null;case ir:return A=g._init,d(u,v,A(g._payload),y)}if(Fo(g)||Eo(g))return A!==null?null:f(u,v,g,y,null);Ja(u,g)}return null}function m(u,v,g,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,a(v,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,A);case Ls:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,A);case ir:var E=y._init;return m(u,v,g,E(y._payload),A)}if(Fo(y)||Eo(y))return u=u.get(g)||null,f(v,u,y,A,null);Ja(v,y)}return null}function x(u,v,g,y){for(var A=null,E=null,T=v,U=v=0,S=null;T!==null&&U<g.length;U++){T.index>U?(S=T,T=null):S=T.sibling;var w=d(u,T,g[U],y);if(w===null){T===null&&(T=S);break}t&&T&&w.alternate===null&&e(u,T),v=s(w,v,U),E===null?A=w:E.sibling=w,E=w,T=S}if(U===g.length)return n(u,T),At&&zr(u,U),A;if(T===null){for(;U<g.length;U++)T=h(u,g[U],y),T!==null&&(v=s(T,v,U),E===null?A=T:E.sibling=T,E=T);return At&&zr(u,U),A}for(T=i(u,T);U<g.length;U++)S=m(T,u,U,g[U],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?U:S.key),v=s(S,v,U),E===null?A=S:E.sibling=S,E=S);return t&&T.forEach(function(z){return e(u,z)}),At&&zr(u,U),A}function _(u,v,g,y){var A=Eo(g);if(typeof A!="function")throw Error(ce(150));if(g=A.call(g),g==null)throw Error(ce(151));for(var E=A=null,T=v,U=v=0,S=null,w=g.next();T!==null&&!w.done;U++,w=g.next()){T.index>U?(S=T,T=null):S=T.sibling;var z=d(u,T,w.value,y);if(z===null){T===null&&(T=S);break}t&&T&&z.alternate===null&&e(u,T),v=s(z,v,U),E===null?A=z:E.sibling=z,E=z,T=S}if(w.done)return n(u,T),At&&zr(u,U),A;if(T===null){for(;!w.done;U++,w=g.next())w=h(u,w.value,y),w!==null&&(v=s(w,v,U),E===null?A=w:E.sibling=w,E=w);return At&&zr(u,U),A}for(T=i(u,T);!w.done;U++,w=g.next())w=m(T,u,U,w.value,y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?U:w.key),v=s(w,v,U),E===null?A=w:E.sibling=w,E=w);return t&&T.forEach(function(H){return e(u,H)}),At&&zr(u,U),A}function p(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===Ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:e:{for(var A=g.key,E=v;E!==null;){if(E.key===A){if(A=g.type,A===Ds){if(E.tag===7){n(u,E.sibling),v=r(E,g.props.children),v.return=u,u=v;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ir&&Np(A)===E.type){n(u,E.sibling),v=r(E,g.props),v.ref=Co(u,E,g),v.return=u,u=v;break e}n(u,E);break}else e(u,E);E=E.sibling}g.type===Ds?(v=Yr(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=Xl(g.type,g.key,g.props,null,u.mode,y),y.ref=Co(u,v,g),y.return=u,u=y)}return o(u);case Ls:e:{for(E=g.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=wu(g,u.mode,y),v.return=u,u=v}return o(u);case ir:return E=g._init,p(u,v,E(g._payload),y)}if(Fo(g))return x(u,v,g,y);if(Eo(g))return _(u,v,g,y);Ja(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Eu(g,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return p}var io=iv(!0),rv=iv(!1),ac=Tr(null),lc=null,Bs=null,kh=null;function Bh(){kh=Bs=lc=null}function Hh(t){var e=ac.current;Tt(ac),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){lc=t,kh=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dn=!0),t.firstContext=null)}function oi(t){var e=t._currentValue;if(kh!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(lc===null)throw Error(ce(308));Bs=t,lc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Wr=null;function Vh(t){Wr===null?Wr=[t]:Wr.push(t)}function sv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ov(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Vh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ch(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(d=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=Dt({},h,d);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=h}}function Op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var wa={},Ai=Tr(wa),ha=Tr(wa),da=Tr(wa);function jr(t){if(t===wa)throw Error(ce(174));return t}function Wh(t,e){switch(Mt(da,e),Mt(ha,t),Mt(Ai,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}Tt(Ai),Mt(Ai,e)}function ro(){Tt(Ai),Tt(ha),Tt(da)}function av(t){jr(da.current);var e=jr(Ai.current),n=Sf(e,t.type);e!==n&&(Mt(ha,t),Mt(Ai,n))}function jh(t){ha.current===t&&(Tt(Ai),Tt(ha))}var Pt=Tr(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Xh(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Hl=Yi.ReactCurrentDispatcher,xu=Yi.ReactCurrentBatchConfig,Jr=0,Lt=null,Yt=null,en=null,fc=!1,Xo=!1,pa=0,sS=0;function gn(){throw Error(ce(321))}function Yh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function qh(t,e,n,i,r,s){if(Jr=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?cS:uS,t=n(i,r),Xo){s=0;do{if(Xo=!1,pa=0,25<=s)throw Error(ce(301));s+=1,en=Yt=null,e.updateQueue=null,Hl.current=fS,t=n(i,r)}while(Xo)}if(Hl.current=hc,e=Yt!==null&&Yt.next!==null,Jr=0,en=Yt=Lt=null,fc=!1,e)throw Error(ce(300));return t}function $h(){var t=pa!==0;return pa=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Lt.memoizedState=en=t:en=en.next=t,en}function ai(){if(Yt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=en===null?Lt.memoizedState:en.next;if(e!==null)en=e,Yt=t;else{if(t===null)throw Error(ce(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},en===null?Lt.memoizedState=en=t:en=en.next=t}return en}function ma(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=ai(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Jr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Lt.lanes|=f,es|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(Dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=ai(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(Dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function lv(){}function cv(t,e){var n=Lt,i=ai(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,Dn=!0),i=i.queue,Kh(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||en!==null&&en.memoizedState.tag&1){if(n.flags|=2048,ga(9,fv.bind(null,n,i,r,e),void 0,null),rn===null)throw Error(ce(349));Jr&30||uv(n,e,r)}return r}function uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,i){e.value=n,e.getSnapshot=i,dv(e)&&pv(t)}function hv(t,e,n){return n(function(){dv(e)&&pv(t)})}function dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function pv(t){var e=Wi(t,1);e!==null&&xi(e,t,1,-1)}function Fp(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=lS.bind(null,Lt,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mv(){return ai().memoizedState}function Vl(t,e,n,i){var r=Mi();Lt.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=ai();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var o=Yt.memoizedState;if(s=o.destroy,i!==null&&Yh(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function zp(t,e){return Vl(8390656,8,t,e)}function Kh(t,e){return Uc(2048,8,t,e)}function gv(t,e){return Uc(4,2,t,e)}function vv(t,e){return Uc(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _v(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,xv.bind(null,e,t),n)}function Qh(){}function yv(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sv(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mv(t,e,n){return Jr&21?(_i(n,e)||(n=A0(),Lt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=n)}function oS(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{dt=n,xu.transition=i}}function Ev(){return ai().memoizedState}function aS(t,e,n){var i=gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wv(t))Tv(e,n);else if(n=sv(t,e,n,i),n!==null){var r=bn();xi(n,t,i,r),bv(n,e,i)}}function lS(t,e,n){var i=gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wv(t))Tv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Vh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=sv(t,e,r,i),n!==null&&(r=bn(),xi(n,t,i,r),bv(n,e,i))}}function wv(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function Tv(t,e){Xo=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ch(t,n)}}var hc={readContext:oi,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},cS={readContext:oi,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:oi,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aS.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:Fp,useDebugValue:Qh,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Fp(!1),e=t[0];return t=oS.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=Mi();if(At){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),rn===null)throw Error(ce(349));Jr&30||uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zp(hv.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,fv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Mi(),e=rn.identifierPrefix;if(At){var n=Fi,i=Oi;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:oi,useCallback:yv,useContext:oi,useEffect:Kh,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:_u,useRef:mv,useState:function(){return _u(ma)},useDebugValue:Qh,useDeferredValue:function(t){var e=ai();return Mv(e,Yt.memoizedState,t)},useTransition:function(){var t=_u(ma)[0],e=ai().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:cv,useId:Ev,unstable_isNewReconciler:!1},fS={readContext:oi,useCallback:yv,useContext:oi,useEffect:Kh,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:yu,useRef:mv,useState:function(){return yu(ma)},useDebugValue:Qh,useDeferredValue:function(t){var e=ai();return Yt===null?e.memoizedState=t:Mv(e,Yt.memoizedState,t)},useTransition:function(){var t=yu(ma)[0],e=ai().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:cv,useId:Ev,unstable_isNewReconciler:!1};function pi(t,e){if(t&&t.defaultProps){e=Dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=bn(),r=gr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(xi(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=bn(),r=gr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,r),e!==null&&(xi(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bn(),i=gr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=pr(t,r,i),e!==null&&(xi(e,t,i,n),Bl(e,t,i))}};function kp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function Av(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=Nn(e)?Qr:Mn.current,i=e.contextTypes,s=(i=i!=null)?to(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=Nn(e)?Qr:Mn.current,r.context=to(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",i=e;do n+=k_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hS=typeof WeakMap=="function"?WeakMap:Map;function Cv(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,eh=i),Wf(t,e)},n}function Rv(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof i!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bS.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var dS=Yi.ReactCurrentOwner,Dn=!1;function wn(t,e,n,i){e.child=t===null?rv(e,null,n,i):io(e,t.child,n,i)}function Wp(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=qh(t,e,n,i,s,r),n=$h(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(At&&n&&Oh(e),e.flags|=1,wn(t,e,i,r),e.child)}function jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pv(t,e,s,i,r)):(t=Xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Pv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(Dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Dn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return jf(t,e,n,i,r)}function Lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(Vs,Hn),Hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(Vs,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(Vs,Hn),Hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(Vs,Hn),Hn|=i;return wn(t,e,r,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jf(t,e,n,i,r){var s=Nn(n)?Qr:Mn.current;return s=to(e,s),Ks(e,r),n=qh(t,e,n,i,s,r),i=$h(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(At&&i&&Oh(e),e.flags|=1,wn(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(Nn(n)){var s=!0;rc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Gl(t,e),Av(e,n,i),Gf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=oi(c):(c=Nn(n)?Qr:Mn.current,c=to(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bp(e,o,i,c),rr=!1;var d=e.memoizedState;o.state=d,cc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Un.current||rr?(typeof f=="function"&&(Vf(e,n,f,i),l=e.memoizedState),(a=rr||kp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ov(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pi(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=Nn(n)?Qr:Mn.current,l=to(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Bp(e,o,i,l),rr=!1,d=e.memoizedState,o.state=d,cc(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Un.current||rr?(typeof m=="function"&&(Vf(e,n,m,i),x=e.memoizedState),(c=rr||kp(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Xf(t,e,n,i,s,r)}function Xf(t,e,n,i,r,s){Dv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lp(e,n,!1),ji(t,e,s);i=e.stateNode,dS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):wn(t,e,a,s),e.memoizedState=i.state,r&&Lp(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),Wh(t,e.containerInfo)}function Yp(t,e,n,i,r){return no(),zh(r),e.flags|=256,wn(t,e,n,i),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var i=e.pendingProps,r=Pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Pt,r&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Yf,t):Zh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zh(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&zh(i),io(e,t.child,null,n),t=Zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(ce(422))),el(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return el(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Su(s,i,void 0),el(t,e,o,i)}if(a=(o&t.childLanes)!==0,Dn||a){if(i=rn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),xi(i,t,r,-1))}return rd(),i=Su(Error(ce(421))),el(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=AS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Wn=dr(r.nextSibling),jn=e,At=!0,gi=null,t!==null&&(Kn[Qn++]=Oi,Kn[Qn++]=Fi,Kn[Qn++]=Zr,Oi=t.id,Fi=t.overflow,Zr=e),e=Zh(e,i.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hf(t.return,e,n)}function Mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(wn(t,e,i.children,n),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mS(t,e,n){switch(e.tag){case 3:Uv(e),no();break;case 5:av(e);break;case 1:Nn(e.type)&&rc(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Pt,Pt.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(Mt(Pt,Pt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);Mt(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Lv(t,e,n)}return ji(t,e,n)}var Ov,$f,Fv,zv;Ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};Fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(Ai.current);var s=null;switch(n){case"input":r=vf(t,r),i=vf(t,i),s=[];break;case"select":r=Dt({},r,{value:void 0}),i=Dt({},i,{value:void 0}),s=[];break;case"textarea":r=yf(t,r),i=yf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}Mf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gS(t,e,n){var i=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(e),null;case 1:return Nn(e.type)&&ic(),vn(e),null;case 3:return i=e.stateNode,ro(),Tt(Un),Tt(Mn),Xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(ih(gi),gi=null))),$f(t,e),vn(e),null;case 5:jh(e);var r=jr(da.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return vn(e),null}if(t=jr(Ai.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[fa]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)Et(ko[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":ip(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":sp(i,s),Et("invalid",i)}Mf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Ga(i),rp(i,s,!0);break;case"textarea":Ga(i),op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[wi]=e,t[fa]=i,Ov(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)Et(ko[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":ip(t,i),r=vf(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Dt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":sp(t,i),r=yf(t,i),Et("invalid",t);break;default:r=i}Mf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?m0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Mh(t,s,l,o))}switch(n){case"input":Ga(t),rp(t,i,!1);break;case"textarea":Ga(t),op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vn(e),null;case 6:if(t&&e.stateNode!=null)zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=jr(da.current),jr(Ai.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=jn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return vn(e),null;case 13:if(Tt(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Wn!==null&&e.mode&1&&!(e.flags&128))nv(),no(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[wi]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vn(e),s=!1}else gi!==null&&(ih(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?qt===0&&(qt=3):rd())),e.updateQueue!==null&&(e.flags|=4),vn(e),null);case 4:return ro(),$f(t,e),t===null&&ca(e.stateNode.containerInfo),vn(e),null;case 10:return Hh(e.type._context),vn(e),null;case 17:return Nn(e.type)&&ic(),vn(e),null;case 19:if(Tt(Pt),s=e.memoizedState,s===null)return vn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Pt,Pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>oo&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return vn(e),null}else 2*kt()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Pt.current,Mt(Pt,i?n&1|2:n&1),e):(vn(e),null);case 22:case 23:return id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Hn&1073741824&&(vn(e),e.subtreeFlags&6&&(e.flags|=8192)):vn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function vS(t,e){switch(Fh(e),e.tag){case 1:return Nn(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),Tt(Un),Tt(Mn),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(Tt(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Pt),null;case 4:return ro(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var tl=!1,yn=!1,xS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function Kf(t,e,n){try{n()}catch(i){It(t,e,i)}}var $p=!1;function _S(t,e){if(Uf=Jl,t=G0(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Jl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:pi(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){It(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=$p,$p=!1,x}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kf(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[fa],delete e[Ff],delete e[tS],delete e[nS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bv(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var ln=null,mi=!1;function $i(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:yn||Hs(n,e);case 6:var i=ln,r=mi;ln=null,$i(t,e,n),ln=i,mi=r,ln!==null&&(mi?(t=ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ln.removeChild(n.stateNode));break;case 18:ln!==null&&(mi?(t=ln,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),oa(t)):mu(ln,n.stateNode));break;case 4:i=ln,r=mi,ln=n.stateNode.containerInfo,mi=!0,$i(t,e,n),ln=i,mi=r;break;case 0:case 11:case 14:case 15:if(!yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!yn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){It(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(yn=(i=yn)||n.memoizedState!==null,$i(t,e,n),yn=i):$i(t,e,n);break;default:$i(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xS),e.forEach(function(i){var r=CS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ui(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ln=a.stateNode,mi=!1;break e;case 3:ln=a.stateNode.containerInfo,mi=!0;break e;case 4:ln=a.stateNode.containerInfo,mi=!0;break e}a=a.return}if(ln===null)throw Error(ce(160));Hv(s,o,r),ln=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(e,t),Si(t),i&4){try{Yo(3,t,t.return),Ic(3,t)}catch(_){It(t,t.return,_)}try{Yo(5,t,t.return)}catch(_){It(t,t.return,_)}}break;case 1:ui(e,t),Si(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(ui(e,t),Si(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(_){It(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&u0(r,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?m0(r,h):f==="dangerouslySetInnerHTML"?d0(r,h):f==="children"?na(r,h):Mh(r,f,h,c)}switch(a){case"input":xf(r,s);break;case"textarea":f0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Xs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(_){It(t,t.return,_)}}break;case 6:if(ui(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){It(t,t.return,_)}}break;case 3:if(ui(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(_){It(t,t.return,_)}break;case 4:ui(e,t),Si(t);break;case 13:ui(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(td=kt())),i&4&&Qp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yn=(c=yn)||f,ui(e,t),yn=c):ui(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(h=Ee=f;Ee!==null;){switch(d=Ee,m=d.child,d.tag){case 0:case 11:case 14:case 15:Yo(4,d,d.return);break;case 1:Hs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){It(i,n,_)}}break;case 5:Hs(d,d.return);break;case 22:if(d.memoizedState!==null){Jp(h);continue}}m!==null?(m.return=d,Ee=m):Jp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p0("display",o))}catch(_){It(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){It(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ui(e,t),Si(t),i&4&&Qp(t);break;case 21:break;default:ui(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=Kp(t);Jf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kp(t);Zf(t,a,o);break;default:throw Error(ce(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){Ee=t,Gv(t)}function Gv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||yn;a=tl;var c=yn;if(tl=o,(yn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?em(r):l!==null?(l.return=o,Ee=l):em(r);for(;s!==null;)Ee=s,Gv(s),s=s.sibling;Ee=r,tl=a,yn=c}Zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Zp(t)}}function Zp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:pi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Op(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Op(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&oa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}yn||e.flags&512&&Qf(e)}catch(d){It(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Jp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function em(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(l){It(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Qf(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Qf(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var SS=Math.ceil,dc=Yi.ReactCurrentDispatcher,Jh=Yi.ReactCurrentOwner,ri=Yi.ReactCurrentBatchConfig,ut=0,rn=null,Wt=null,fn=0,Hn=0,Vs=Tr(0),qt=0,va=null,es=0,Oc=0,ed=0,qo=null,Ln=null,td=0,oo=1/0,Ni=null,pc=!1,eh=null,mr=null,nl=!1,lr=null,mc=0,$o=0,th=null,Wl=-1,jl=0;function bn(){return ut&6?kt():Wl!==-1?Wl:Wl=kt()}function gr(t){return t.mode&1?ut&2&&fn!==0?fn&-fn:rS.transition!==null?(jl===0&&(jl=A0()),jl):(t=dt,t!==0||(t=window.event,t=t===void 0?16:N0(t.type)),t):1}function xi(t,e,n,i){if(50<$o)throw $o=0,th=null,Error(ce(185));Sa(t,n,i),(!(ut&2)||t!==rn)&&(t===rn&&(!(ut&2)&&(Oc|=n),qt===4&&or(t,fn)),In(t,i),n===1&&ut===0&&!(e.mode&1)&&(oo=kt()+500,Dc&&br()))}function In(t,e){var n=t.callbackNode;ry(t,e);var i=Zl(t,t===rn?fn:0);if(i===0)n!==null&&cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cp(n),e===1)t.tag===0?iS(tm.bind(null,t)):J0(tm.bind(null,t)),Jy(function(){!(ut&6)&&br()}),n=null;else{switch(C0(i)){case 1:n=Ah;break;case 4:n=T0;break;case 16:n=Ql;break;case 536870912:n=b0;break;default:n=Ql}n=Qv(n,Wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wv(t,e){if(Wl=-1,jl=0,ut&6)throw Error(ce(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Zl(t,t===rn?fn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=ut;ut|=2;var s=Xv();(rn!==t||fn!==e)&&(Ni=null,oo=kt()+500,Xr(t,e));do try{wS();break}catch(a){jv(t,a)}while(!0);Bh(),dc.current=s,ut=r,Wt!==null?e=0:(rn=null,fn=0,e=qt)}if(e!==0){if(e===2&&(r=Cf(t),r!==0&&(i=r,e=nh(t,r))),e===1)throw n=va,Xr(t,0),or(t,i),In(t,kt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!MS(r)&&(e=gc(t,i),e===2&&(s=Cf(t),s!==0&&(i=s,e=nh(t,s))),e===1))throw n=va,Xr(t,0),or(t,i),In(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:kr(t,Ln,Ni);break;case 3:if(or(t,i),(i&130023424)===i&&(e=td+500-kt(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){bn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Of(kr.bind(null,t,Ln,Ni),e);break}kr(t,Ln,Ni);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SS(i/1960))-i,10<i){t.timeoutHandle=Of(kr.bind(null,t,Ln,Ni),i);break}kr(t,Ln,Ni);break;case 5:kr(t,Ln,Ni);break;default:throw Error(ce(329))}}}return In(t,kt()),t.callbackNode===n?Wv.bind(null,t):null}function nh(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=gc(t,e),t!==2&&(e=Ln,Ln=n,e!==null&&ih(e)),t}function ih(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~ed,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function tm(t){if(ut&6)throw Error(ce(327));Qs();var e=Zl(t,0);if(!(e&1))return In(t,kt()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Cf(t);i!==0&&(e=i,n=nh(t,i))}if(n===1)throw n=va,Xr(t,0),or(t,e),In(t,kt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,Ln,Ni),In(t,kt()),null}function nd(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(oo=kt()+500,Dc&&br())}}function ts(t){lr!==null&&lr.tag===0&&!(ut&6)&&Qs();var e=ut;ut|=1;var n=ri.transition,i=dt;try{if(ri.transition=null,dt=1,t)return t()}finally{dt=i,ri.transition=n,ut=e,!(ut&6)&&br()}}function id(){Hn=Vs.current,Tt(Vs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zy(n)),Wt!==null)for(n=Wt.return;n!==null;){var i=n;switch(Fh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:ro(),Tt(Un),Tt(Mn),Xh();break;case 5:jh(i);break;case 4:ro();break;case 13:Tt(Pt);break;case 19:Tt(Pt);break;case 10:Hh(i.type._context);break;case 22:case 23:id()}n=n.return}if(rn=t,Wt=t=vr(t.current,null),fn=Hn=e,qt=0,va=null,ed=Oc=es=0,Ln=qo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function jv(t,e){do{var n=Wt;try{if(Bh(),Hl.current=hc,fc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fc=!1}if(Jr=0,en=Yt=Lt=null,Xo=!1,pa=0,Jh.current=null,n===null||n.return===null){qt=1,va=e,Wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=fn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Vp(o);if(m!==null){m.flags&=-257,Gp(m,o,a,s,e),m.mode&1&&Hp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Hp(s,c,e),rd();break e}l=Error(ce(426))}}else if(At&&a.mode&1){var p=Vp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Gp(p,o,a,s,e),zh(so(l,a));break e}}s=l=so(l,a),qt!==4&&(qt=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Cv(s,l,e);Ip(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mr===null||!mr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Rv(s,a,e);Ip(s,y);break e}}s=s.return}while(s!==null)}qv(n)}catch(A){e=A,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function Xv(){var t=dc.current;return dc.current=hc,t===null?hc:t}function rd(){(qt===0||qt===3||qt===2)&&(qt=4),rn===null||!(es&268435455)&&!(Oc&268435455)||or(rn,fn)}function gc(t,e){var n=ut;ut|=2;var i=Xv();(rn!==t||fn!==e)&&(Ni=null,Xr(t,e));do try{ES();break}catch(r){jv(t,r)}while(!0);if(Bh(),ut=n,dc.current=i,Wt!==null)throw Error(ce(261));return rn=null,fn=0,qt}function ES(){for(;Wt!==null;)Yv(Wt)}function wS(){for(;Wt!==null&&!$_();)Yv(Wt)}function Yv(t){var e=Kv(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?qv(t):Wt=e,Jh.current=null}function qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vS(n,e),n!==null){n.flags&=32767,Wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Wt=null;return}}else if(n=gS(n,e,Hn),n!==null){Wt=n;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=t}while(e!==null);qt===0&&(qt=5)}function kr(t,e,n){var i=dt,r=ri.transition;try{ri.transition=null,dt=1,TS(t,e,n,i)}finally{ri.transition=r,dt=i}return null}function TS(t,e,n,i){do Qs();while(lr!==null);if(ut&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sy(t,s),t===rn&&(Wt=rn=null,fn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Qv(Ql,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ri.transition,ri.transition=null;var o=dt;dt=1;var a=ut;ut|=4,Jh.current=null,_S(t,n),Vv(n,t),jy(Nf),Jl=!!Uf,Nf=Uf=null,t.current=n,yS(n),K_(),ut=a,dt=o,ri.transition=s}else t.current=n;if(nl&&(nl=!1,lr=t,mc=r),s=t.pendingLanes,s===0&&(mr=null),J_(n.stateNode),In(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=eh,eh=null,t;return mc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===th?$o++:($o=0,th=t):$o=0,br(),null}function Qs(){if(lr!==null){var t=C0(mc),e=ri.transition,n=dt;try{if(ri.transition=null,dt=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,mc=0,ut&6)throw Error(ce(331));var r=ut;for(ut|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Yo(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ee=h;else for(;Ee!==null;){f=Ee;var d=f.sibling,m=f.return;if(kv(f),f===c){Ee=null;break}if(d!==null){d.return=m,Ee=d;break}Ee=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Ee=g;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(A){It(a,a.return,A)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(ut=r,br(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Ac,t)}catch{}i=!0}return i}finally{dt=n,ri.transition=e}}return!1}function nm(t,e,n){e=so(n,e),e=Cv(t,e,1),t=pr(t,e,1),e=bn(),t!==null&&(Sa(t,1,e),In(t,e))}function It(t,e,n){if(t.tag===3)nm(t,t,n);else for(;e!==null;){if(e.tag===3){nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(mr===null||!mr.has(i))){t=so(n,t),t=Rv(e,t,1),e=pr(e,t,1),t=bn(),e!==null&&(Sa(e,1,t),In(e,t));break}}e=e.return}}function bS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=bn(),t.pingedLanes|=t.suspendedLanes&n,rn===t&&(fn&n)===n&&(qt===4||qt===3&&(fn&130023424)===fn&&500>kt()-td?Xr(t,0):ed|=n),In(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=bn();t=Wi(t,e),t!==null&&(Sa(t,e,n),In(t,n))}function AS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function CS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),$v(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Un.current)Dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dn=!1,mS(t,e,n);Dn=!!(t.flags&131072)}else Dn=!1,At&&e.flags&1048576&&ev(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(t,e),t=e.pendingProps;var r=to(e,Mn.current);Ks(e,n),r=qh(null,e,i,t,r,n);var s=$h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gh(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,Gf(e,i,t,n),e=Xf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&Oh(e),wn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PS(i),t=pi(i,t),r){case 0:e=jf(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=Wp(null,e,i,t,n);break e;case 14:e=jp(null,e,i,pi(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),jf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Xp(t,e,i,r,n);case 3:e:{if(Uv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ov(t,e),cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(ce(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=so(Error(ce(424)),e),e=Yp(t,e,i,n,r);break e}else for(Wn=dr(e.stateNode.containerInfo.firstChild),jn=e,At=!0,gi=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),i===r){e=ji(t,e,n);break e}wn(t,e,i,n)}e=e.child}return e;case 5:return av(e),t===null&&Bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,If(i,r)?o=null:s!==null&&If(i,s)&&(e.flags|=32),Dv(t,e),wn(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return Nv(t,e,n);case 4:return Wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=io(e,null,i,n):wn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Wp(t,e,i,r,n);case 7:return wn(t,e,e.pendingProps,n),e.child;case 8:return wn(t,e,e.pendingProps.children,n),e.child;case 12:return wn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(ac,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!Un.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=oi(r),i=i(r),e.flags|=1,wn(t,e,i,n),e.child;case 14:return i=e.type,r=pi(i,e.pendingProps),r=pi(i.type,r),jp(t,e,i,r,n);case 15:return Pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Gl(t,e),e.tag=1,Nn(i)?(t=!0,rc(e)):t=!1,Ks(e,n),Av(e,i,r),Gf(e,i,r,n),Xf(null,e,i,!0,t,n);case 19:return Iv(t,e,n);case 22:return Lv(t,e,n)}throw Error(ce(156,e.tag))};function Qv(t,e){return w0(t,e)}function RS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,e,n,i){return new RS(t,e,n,i)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PS(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wh)return 11;if(t===Th)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=ii(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Yr(n.children,r,s,e);case Eh:o=8,r|=8;break;case df:return t=ii(12,n,e,r|2),t.elementType=df,t.lanes=s,t;case pf:return t=ii(13,n,e,r),t.elementType=pf,t.lanes=s,t;case mf:return t=ii(19,n,e,r),t.elementType=mf,t.lanes=s,t;case a0:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s0:o=10;break e;case o0:o=9;break e;case wh:o=11;break e;case Th:o=14;break e;case ir:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ii(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=ii(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=ii(22,t,i,e),t.elementType=a0,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=ii(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=ii(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function od(t,e,n,i,r,s,o,a,l){return t=new LS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ii(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(s),t}function DS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zv(t){if(!t)return Sr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Nn(n))return Z0(t,n,e)}return e}function Jv(t,e,n,i,r,s,o,a,l){return t=od(n,i,!0,t,r,s,o,a,l),t.context=Zv(null),n=t.current,i=bn(),r=gr(n),s=ki(i,r),s.callback=e??null,pr(n,s,r),t.current.lanes=r,Sa(t,r,i),In(t,i),t}function zc(t,e,n,i){var r=e.current,s=bn(),o=gr(r);return n=Zv(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=pr(r,e,o),t!==null&&(xi(t,r,o,s),Bl(t,r,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ad(t,e){im(t,e),(t=t.alternate)&&im(t,e)}function US(){return null}var ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}kc.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));zc(t,e,null,null)};kc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){zc(null,t,null,null)}),e[Gi]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=L0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&U0(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function NS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(o);s.call(c)}}var o=Jv(e,i,t,0,null,!1,!1,"",rm);return t._reactRootContainer=o,t[Gi]=o.current,ca(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=vc(l);a.call(c)}}var l=od(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=l,t[Gi]=l.current,ca(t.nodeType===8?t.parentNode:t),ts(function(){zc(e,l,n,i)}),l}function Hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}zc(e,o,t,r)}else o=NS(n,e,t,r,i);return vc(o)}R0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(Ch(e,n|1),In(e,kt()),!(ut&6)&&(oo=kt()+500,br()))}break;case 13:ts(function(){var i=Wi(t,1);if(i!==null){var r=bn();xi(i,t,1,r)}}),ad(t,1)}};Rh=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=bn();xi(e,t,134217728,n)}ad(t,134217728)}};P0=function(t){if(t.tag===13){var e=gr(t),n=Wi(t,e);if(n!==null){var i=bn();xi(n,t,e,i)}ad(t,e)}};L0=function(){return dt};D0=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Tf=function(t,e,n){switch(e){case"input":if(xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(ce(90));c0(i),xf(i,r)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};x0=nd;_0=ts;var IS={usingClientEntryPoint:!1,Events:[Ea,Os,Lc,g0,v0,nd]},Po={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M0(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Ac=il.inject(OS),bi=il}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(ce(200));return DS(t,e,null,n)};Yn.createRoot=function(t,e){if(!cd(t))throw Error(ce(299));var n=!1,i="",r=ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,ca(t.nodeType===8?t.parentNode:t),new ld(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=M0(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return ts(t)};Yn.hydrate=function(t,e,n){if(!Bc(e))throw Error(ce(200));return Hc(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};Yn.render=function(t,e,n){if(!Bc(e))throw Error(ce(200));return Hc(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(ce(40));return t._reactRootContainer?(ts(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Yn.unstable_batchedUpdates=nd;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Hc(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx)}catch(t){console.error(t)}}tx(),t0.exports=Yn;var FS=t0.exports,sm=FS;ff.createRoot=sm.createRoot,ff.hydrateRoot=sm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="160",ds={ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zS=0,om=1,kS=2,nx=1,BS=2,Ui=3,Mr=0,nn=1,ti=2,Bi=0,Zs=1,Er=2,am=3,lm=4,HS=5,Hr=100,VS=101,GS=102,cm=103,um=104,WS=200,jS=201,XS=202,YS=203,rh=204,sh=205,qS=206,$S=207,KS=208,QS=209,ZS=210,JS=211,eM=212,tM=213,nM=214,iM=0,rM=1,sM=2,xc=3,oM=4,aM=5,lM=6,cM=7,ix=0,uM=1,fM=2,xr=0,hM=1,dM=2,pM=3,rx=4,mM=5,gM=6,sx=300,ao=301,lo=302,oh=303,ah=304,Vc=306,lh=1e3,Vn=1001,ch=1002,zt=1003,fm=1004,Tu=1005,Zn=1006,vM=1007,xa=1008,_r=1009,xM=1010,_M=1011,fd=1012,ox=1013,cr=1014,Ti=1015,Hi=1016,ax=1017,lx=1018,qr=1020,yM=1021,Gn=1023,SM=1024,MM=1025,$r=1026,co=1027,EM=1028,cx=1029,wM=1030,ux=1031,fx=1033,bu=33776,Au=33777,Cu=33778,Ru=33779,hm=35840,dm=35841,pm=35842,mm=35843,hx=36196,gm=37492,vm=37496,xm=37808,_m=37809,ym=37810,Sm=37811,Mm=37812,Em=37813,wm=37814,Tm=37815,bm=37816,Am=37817,Cm=37818,Rm=37819,Pm=37820,Lm=37821,Pu=36492,Dm=36494,Um=36495,TM=36283,Nm=36284,Im=36285,Om=36286,dx=3e3,Kr=3001,bM=3200,AM=3201,px=0,CM=1,ni="",cn="srgb",Xi="srgb-linear",hd="display-p3",Gc="display-p3-linear",_c="linear",wt="srgb",yc="rec709",Sc="p3",ms=7680,Fm=519,RM=512,PM=513,LM=514,mx=515,DM=516,UM=517,NM=518,IM=519,zm=35044,km="300 es",uh=1035,zi=2e3,Mc=2001;class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,fh=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function OM(t,e){return(t%e+e)%e}function Lu(t,e,n){return(1-n)*t+n*e}function Bm(t){return(t&t-1)===0&&t!==0}function hh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const FM={DEG2RAD:Ko};class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],_=r[0],p=r[3],u=r[6],v=r[1],g=r[4],y=r[7],A=r[2],E=r[5],T=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*p+a*g+l*E,s[6]=o*u+a*y+l*T,s[1]=c*_+f*v+h*A,s[4]=c*p+f*g+h*E,s[7]=c*u+f*y+h*T,s[2]=d*_+m*v+x*A,s[5]=d*p+m*g+x*E,s[8]=d*u+m*y+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Du.makeScale(e,n)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new rt;function gx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zM(){const t=Ec("canvas");return t.style.display="block",t}const Hm={};function Qo(t){t in Hm||(Hm[t]=!0,console.warn(t))}const Vm=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gm=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[Xi]:{transfer:_c,primaries:yc,toReference:t=>t,fromReference:t=>t},[cn]:{transfer:wt,primaries:yc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gc]:{transfer:_c,primaries:Sc,toReference:t=>t.applyMatrix3(Gm),fromReference:t=>t.applyMatrix3(Vm)},[hd]:{transfer:wt,primaries:Sc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gm),fromReference:t=>t.applyMatrix3(Vm).convertLinearToSRGB()}},kM=new Set([Xi,Gc]),vt={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=rl[e].toReference,r=rl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return rl[t].primaries},getTransfer:function(t){return t===ni?_c:rl[t].transfer}};function Js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class vx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Ec("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BM=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nu(r[o].image)):s.push(Nu(r[o]))}else s=Nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HM=0;class On extends ss{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,i=Vn,r=Vn,s=Zn,o=xa,a=Gn,l=_r,c=On.DEFAULT_ANISOTROPY,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ta(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Kr?cn:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===cn?Kr:dx}set encoding(e){Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kr?cn:ni}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=sx;On.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,n=0,i=0,r=1){un.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(m+1)/2,A=(u+1)/2,E=(f+d)/4,T=(h+_)/4,U=(x+p)/4;return g>y&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=T/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-_)/v,this.z=(d-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VM extends ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new un(0,0,e,n),this.scissorTest=!1,this.viewport=new un(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kr?cn:ni),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends VM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _x extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GM extends On{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==d||c!==m||f!==x){let p=1-a;const u=l*d+c*m+f*x+h*_,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const A=Math.sqrt(g),E=Math.atan2(A,u*v);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const y=a*v;if(l=l*p+d*y,c=c*p+m*y,f=f*p+x*y,h=h*p+_*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=A,c*=A,f*=A,h*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-c*d,e[n+1]=l*x+f*d+c*h-a*m,e[n+2]=c*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"YZX":this._x=d*f*h+c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h-d*m*x;break;case"XZY":this._x=d*f*h-c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new R,Wm=new ns;class ba{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ol.subVectors(this.max,Do),vs.subVectors(e.a,Do),xs.subVectors(e.b,Do),_s.subVectors(e.c,Do),Ki.subVectors(xs,vs),Qi.subVectors(_s,xs),Ur.subVectors(vs,_s);let n=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-Ur.z,Ur.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,Ur.z,0,-Ur.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-Ur.y,Ur.x,0];return!Ou(n,vs,xs,_s,ol)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,vs,xs,_s,ol))?!1:(al.crossVectors(Ki,Qi),n=[al.x,al.y,al.z],Ou(n,vs,xs,_s,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new R,new R,new R,new R,new R,new R,new R,new R],fi=new R,sl=new ba,vs=new R,xs=new R,_s=new R,Ki=new R,Qi=new R,Ur=new R,Do=new R,ol=new R,al=new R,Nr=new R;function Ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),f=i.dot(Nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const WM=new ba,Uo=new R,Fu=new R;class Aa{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Fu)),this.expandByPoint(Uo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new R,zu=new R,ll=new R,Zi=new R,ku=new R,cl=new R,Bu=new R;class Ca{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=Zi.dot(this.direction),l=-Zi.dot(ll),c=Zi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const _=1/f;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zu).addScaledVector(ll,d),m}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){ku.subVectors(n,e),cl.subVectors(i,e),Bu.crossVectors(ku,cl);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(Zi,cl));if(l<0)return null;const c=a*this.direction.dot(ku.cross(Zi));if(c<0||l+c>o)return null;const f=-a*Zi.dot(Bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,x,_,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,_,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,_=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=c*f,_=c*h;n[0]=d+_*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=c*f,_=c*h;n[0]=d-_*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,_=a*h;n[0]=l*f,n[4]=x*c-m,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*f,n[4]=_-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+x,n[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+_,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jM,e,XM)}lookAt(e,n,i){const r=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Ji.crossVectors(i,kn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Ji.crossVectors(i,kn)),Ji.normalize(),ul.crossVectors(kn,Ji),r[0]=Ji.x,r[4]=ul.x,r[8]=kn.x,r[1]=Ji.y,r[5]=ul.y,r[9]=kn.y,r[2]=Ji.z,r[6]=ul.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],v=i[3],g=i[7],y=i[11],A=i[15],E=r[0],T=r[4],U=r[8],S=r[12],w=r[1],z=r[5],H=r[9],te=r[13],N=r[2],V=r[6],Y=r[10],ee=r[14],I=r[3],k=r[7],j=r[11],J=r[15];return s[0]=o*E+a*w+l*N+c*I,s[4]=o*T+a*z+l*V+c*k,s[8]=o*U+a*H+l*Y+c*j,s[12]=o*S+a*te+l*ee+c*J,s[1]=f*E+h*w+d*N+m*I,s[5]=f*T+h*z+d*V+m*k,s[9]=f*U+h*H+d*Y+m*j,s[13]=f*S+h*te+d*ee+m*J,s[2]=x*E+_*w+p*N+u*I,s[6]=x*T+_*z+p*V+u*k,s[10]=x*U+_*H+p*Y+u*j,s[14]=x*S+_*te+p*ee+u*J,s[3]=v*E+g*w+y*N+A*I,s[7]=v*T+g*z+y*V+A*k,s[11]=v*U+g*H+y*Y+A*j,s[15]=v*S+g*te+y*ee+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+_*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*f-s*l*f)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],v=h*p*c-_*d*c+_*l*m-a*p*m-h*l*u+a*d*u,g=x*d*c-f*p*c-x*l*m+o*p*m+f*l*u-o*d*u,y=f*_*c-x*h*c+x*a*m-o*_*m-f*a*u+o*h*u,A=x*h*l-f*_*l-x*a*d+o*_*d+f*a*p-o*h*p,E=n*v+i*g+r*y+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(_*d*s-h*p*s-_*r*m+i*p*m+h*r*u-i*d*u)*T,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*u+n*d*u)*T,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*m+n*l*m)*T,e[8]=y*T,e[9]=(x*h*s-f*_*s-x*i*m+n*_*m+f*i*u-n*h*u)*T,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*m-n*a*m)*T,e[12]=A*T,e[13]=(f*_*r-x*h*r+x*i*d-n*_*d-f*i*p+n*h*p)*T,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,x=s*h,_=o*f,p=o*h,u=a*h,v=l*c,g=l*f,y=l*h,A=i.x,E=i.y,T=i.z;return r[0]=(1-(_+u))*A,r[1]=(m+y)*A,r[2]=(x-g)*A,r[3]=0,r[4]=(m-y)*E,r[5]=(1-(d+u))*E,r[6]=(p+v)*E,r[7]=0,r[8]=(x+g)*T,r[9]=(p-v)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const c=1/s,f=1/o,h=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=f,hi.elements[5]*=f,hi.elements[6]*=f,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,n.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(a===zi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Mc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,m=(i+r)*f;let x,_;if(a===zi)x=(o+s)*h,_=-2*h;else if(a===Mc)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new R,hi=new jt,jM=new R(0,0,0),XM=new R(1,1,1),Ji=new R,ul=new R,kn=new R,jm=new jt,Xm=new ns;class Wc{constructor(e=0,n=0,i=0,r=Wc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wc.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const Ym=new R,Ss=new ns,Pi=new jt,fl=new R,No=new R,qM=new R,$M=new ns,qm=new R(1,0,0),$m=new R(0,1,0),Km=new R(0,0,1),KM={type:"added"},QM={type:"removed"};class Sn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new R,n=new Wc,i=new ns,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new rt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fl.copy(e):fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(No,fl,this.up):Pi.lookAt(fl,No,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(KM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,qM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new R(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new R,Li=new R,Hu=new R,Di=new R,Ms=new R,Es=new R,Qm=new R,Vu=new R,Gu=new R,Wu=new R;let hl=!1;class Jn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),Li.subVectors(i,n),Hu.subVectors(e,n);const o=di.dot(di),a=di.dot(Li),l=di.dot(Hu),c=Li.dot(Li),f=Li.dot(Hu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,i,r,s,o,a,l){return hl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),Li.subVectors(e,n),di.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),di.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return hl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hl=!0),Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),Vu.subVectors(e,i);const l=Ms.dot(Vu),c=Es.dot(Vu);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const f=Ms.dot(Gu),h=Es.dot(Gu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ms,o);Wu.subVectors(e,s);const m=Ms.dot(Wu),x=Es.dot(Wu);if(x>=0&&m<=x)return n.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Es,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return Qm.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(Qm,a);const u=1/(p+_+d);return o=_*u,a=d*u,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},dl={h:0,s:0,l:0};function ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vt.workingColorSpace){return this.r=e,this.g=n,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vt.workingColorSpace){if(e=OM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ju(o,s,e+1/3),this.g=ju(o,s,e),this.b=ju(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,n=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=cn){const i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=Uu(e.r),this.g=Uu(e.g),this.b=Uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return vt.fromWorkingColorSpace(_n.copy(this),e),Math.round(tn(_n.r*255,0,255))*65536+Math.round(tn(_n.g*255,0,255))*256+Math.round(tn(_n.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(_n.copy(this),n);const i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=cn){vt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,r=_n.b;return e!==cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(dl);const i=Lu(er.h,dl.h,n),r=Lu(er.s,dl.s,n),s=Lu(er.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new we;we.NAMES=yx;let ZM=0;class os extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new R,pl=new de;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zm&&(e.usage=this.usage),e}}class Sx extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mx extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ht extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let JM=0;const $n=new jt,Xu=new Sn,ws=new R,Bn=new ba,Io=new ba,Jt=new R;class Zt extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?Mx:Sx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,i){return $n.makeTranslation(e,n,i),this.applyMatrix4($n),this}scale(e,n,i){return $n.makeScale(e,n,i),this.applyMatrix4($n),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Bn.min,Io.min),Bn.expandByPoint(Jt),Jt.addVectors(Bn.max,Io.max),Bn.expandByPoint(Jt)):(Bn.expandByPoint(Io.min),Bn.expandByPoint(Io.max))}Bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Jt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Jt.add(ws)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new R,f[w]=new R;const h=new R,d=new R,m=new R,x=new de,_=new de,p=new de,u=new R,v=new R;function g(w,z,H){h.fromArray(r,w*3),d.fromArray(r,z*3),m.fromArray(r,H*3),x.fromArray(o,w*2),_.fromArray(o,z*2),p.fromArray(o,H*2),d.sub(h),m.sub(h),_.sub(x),p.sub(x);const te=1/(_.x*p.y-p.x*_.y);isFinite(te)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(te),v.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(te),c[w].add(u),c[z].add(u),c[H].add(u),f[w].add(v),f[z].add(v),f[H].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,z=y.length;w<z;++w){const H=y[w],te=H.start,N=H.count;for(let V=te,Y=te+N;V<Y;V+=3)g(i[V+0],i[V+1],i[V+2])}const A=new R,E=new R,T=new R,U=new R;function S(w){T.fromArray(s,w*3),U.copy(T);const z=c[w];A.copy(z),A.sub(T.multiplyScalar(T.dot(z))).normalize(),E.crossVectors(U,z);const te=E.dot(f[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=te}for(let w=0,z=y.length;w<z;++w){const H=y[w],te=H.start,N=H.count;for(let V=te,Y=te+N;V<Y;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R,h=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*f;for(let u=0;u<f;u++)d[x++]=c[m++]}return new Fn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new jt,Ir=new Ca,ml=new Aa,Jm=new R,Ts=new R,bs=new R,As=new R,Yu=new R,gl=new R,vl=new de,xl=new de,_l=new de,eg=new R,tg=new R,ng=new R,yl=new R,Sl=new R;class Rt extends Sn{constructor(e=new Zt,n=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Yu.fromBufferAttribute(h,e),o?gl.addScaledVector(Yu,f):gl.addScaledVector(Yu.sub(n),f))}n.add(gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(ml.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ml,Jm)===null||Ir.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Zm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Zm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const p=d[x],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=g;y<A;y+=3){const E=a.getX(y),T=a.getX(y+1),U=a.getX(y+2);r=Ml(this,u,e,i,c,f,h,E,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=Ml(this,o,e,i,c,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const p=d[x],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=g;y<A;y+=3){const E=y,T=y+1,U=y+2;r=Ml(this,u,e,i,c,f,h,E,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=p,g=p+1,y=p+2;r=Ml(this,o,e,i,c,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function e1(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ts),t.getVertexPosition(l,bs),t.getVertexPosition(c,As);const f=e1(t,e,n,i,Ts,bs,As,yl);if(f){r&&(vl.fromBufferAttribute(r,a),xl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,c),f.uv=Jn.getInterpolation(yl,Ts,bs,As,vl,xl,_l,new de)),s&&(vl.fromBufferAttribute(s,a),xl.fromBufferAttribute(s,l),_l.fromBufferAttribute(s,c),f.uv1=Jn.getInterpolation(yl,Ts,bs,As,vl,xl,_l,new de),f.uv2=f.uv1),o&&(eg.fromBufferAttribute(o,a),tg.fromBufferAttribute(o,l),ng.fromBufferAttribute(o,c),f.normal=Jn.getInterpolation(yl,Ts,bs,As,eg,tg,ng,new R),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};Jn.getNormal(Ts,bs,As,h.normal),f.face=h}return f}class Ra extends Zt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(h,2));function x(_,p,u,v,g,y,A,E,T,U,S){const w=y/T,z=A/U,H=y/2,te=A/2,N=E/2,V=T+1,Y=U+1;let ee=0,I=0;const k=new R;for(let j=0;j<Y;j++){const J=j*z-te;for(let ie=0;ie<V;ie++){const Q=ie*w-H;k[_]=Q*v,k[p]=J*g,k[u]=N,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[u]=E>0?1:-1,f.push(k.x,k.y,k.z),h.push(ie/T),h.push(1-j/U),ee+=1}}for(let j=0;j<U;j++)for(let J=0;J<T;J++){const ie=d+J+V*j,Q=d+J+V*(j+1),ne=d+(J+1)+V*(j+1),ve=d+(J+1)+V*j;l.push(ie,Q,ve),l.push(Q,ne,ve),I+=6}a.addGroup(m,I,S),m+=I,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function En(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function t1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ex(t){return t.getRenderTarget()===null?t.outputColorSpace:vt.workingColorSpace}const wc={clone:uo,merge:En};var n1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n1,this.fragmentShader=i1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=t1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pd extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ei extends pd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class r1 extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new ei(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new ei(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new ei(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new ei(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new ei(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class wx extends On{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ao,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s1 extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kr?cn:ni),this.texture=new wx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ra(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Bi});s.uniforms.tEquirect.value=n;const o=new Rt(r,s),a=n.minFilter;return n.minFilter===xa&&(n.minFilter=Zn),new r1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const qu=new R,o1=new R,a1=new rt;class Tn{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross(o1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||a1.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Aa,El=new R;class Tx{constructor(e=new Tn,n=new Tn,i=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,p-m,y-u).normalize(),i[1].setComponents(l+s,d+c,p+m,y+u).normalize(),i[2].setComponents(l+o,d+f,p+x,y+v).normalize(),i[3].setComponents(l-o,d-f,p-x,y-v).normalize(),i[4].setComponents(l-a,d-h,p-_,y-g).normalize(),n===zi)i[5].setComponents(l+a,d+h,p+_,y+g).normalize();else if(n===Mc)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function l1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,m=h.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,h){const d=f.array,m=f._updateRange,x=f.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&x.length===0&&t.bufferSubData(h,0,d),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class jc extends Zt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],_=[],p=[];for(let u=0;u<f;u++){const v=u*d-o;for(let g=0;g<c;g++){const y=g*h-s;x.push(y,-v,0),_.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,y=v+c*(u+1),A=v+1+c*(u+1),E=v+1+c*u;m.push(g,y,E),m.push(y,A,E)}this.setIndex(m),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}var c1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m1=`#ifdef USE_AOMAP
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
#endif`,g1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`
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
}`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
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
#endif`,lE=`struct PhysicalMaterial {
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
}`,cE=`
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_E=`#if defined( USE_POINTS_UV )
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
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
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
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YE=`float getShadowMask() {
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
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
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
}`,mw=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,vw=`#define DISTANCE
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
}`,bw=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Cw=`#define NORMAL
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
}`,Rw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,Lw=`#define PHONG
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
}`,Dw=`#define STANDARD
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
}`,Uw=`#define STANDARD
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
}`,Nw=`#define TOON
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
}`,Iw=`#define TOON
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
}`,Ow=`uniform float size;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,Bw=`uniform float rotation;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:c1,alphahash_pars_fragment:u1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:d1,alphatest_pars_fragment:p1,aomap_fragment:m1,aomap_pars_fragment:g1,batching_pars_vertex:v1,batching_vertex:x1,begin_vertex:_1,beginnormal_vertex:y1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:b1,clipping_planes_vertex:A1,color_fragment:C1,color_pars_fragment:R1,color_pars_vertex:P1,color_vertex:L1,common:D1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:N1,displacementmap_pars_vertex:I1,displacementmap_vertex:O1,emissivemap_fragment:F1,emissivemap_pars_fragment:z1,colorspace_fragment:k1,colorspace_pars_fragment:B1,envmap_fragment:H1,envmap_common_pars_fragment:V1,envmap_pars_fragment:G1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:nE,envmap_vertex:j1,fog_vertex:X1,fog_pars_vertex:Y1,fog_fragment:q1,fog_pars_fragment:$1,gradientmap_pars_fragment:K1,lightmap_fragment:Q1,lightmap_pars_fragment:Z1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:iE,lights_toon_pars_fragment:rE,lights_phong_fragment:sE,lights_phong_pars_fragment:oE,lights_physical_fragment:aE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:_E,metalnessmap_fragment:yE,metalnessmap_pars_fragment:SE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:IE,opaque_fragment:OE,packing:FE,premultiplied_alpha_fragment:zE,project_vertex:kE,dithering_fragment:BE,dithering_pars_fragment:HE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:jE,shadowmap_vertex:XE,shadowmask_pars_fragment:YE,skinbase_vertex:qE,skinning_pars_vertex:$E,skinning_vertex:KE,skinnormal_vertex:QE,specularmap_fragment:ZE,specularmap_pars_fragment:JE,tonemapping_fragment:ew,tonemapping_pars_fragment:tw,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:rw,uv_pars_vertex:sw,uv_vertex:ow,worldpos_vertex:aw,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:dw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:vw,equirect_vert:xw,equirect_frag:_w,linedashed_vert:yw,linedashed_frag:Sw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:ww,meshlambert_frag:Tw,meshmatcap_vert:bw,meshmatcap_frag:Aw,meshnormal_vert:Cw,meshnormal_frag:Rw,meshphong_vert:Pw,meshphong_frag:Lw,meshphysical_vert:Dw,meshphysical_frag:Uw,meshtoon_vert:Nw,meshtoon_frag:Iw,points_vert:Ow,points_frag:Fw,shadow_vert:zw,shadow_frag:kw,sprite_vert:Bw,sprite_frag:Hw},pe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ei={basic:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:En([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:En([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:En([pe.points,pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:En([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:En([pe.common,pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:En([pe.sprite,pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:En([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:En([pe.lights,pe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ei.physical={uniforms:En([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const wl={r:0,b:0,g:0};function Vw(t,e,n,i,r,s,o){const a=new we(0);let l=s===!0?0:1,c,f,h=null,d=0,m=null;function x(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Vc)?(f===void 0&&(f=new Rt(new Ra(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:uo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=vt.getTransfer(g.colorSpace)!==wt,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Rt(new jc(2,2),new $t({name:"BackgroundMaterial",uniforms:uo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=vt.getTransfer(g.colorSpace)!==wt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(wl,Ex(t)),i.buffers.color.setClear(wl.r,wl.g,wl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function Gw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(N,V,Y,ee,I){let k=!1;if(o){const j=_(ee,Y,V);c!==j&&(c=j,m(c.object)),k=u(N,ee,Y,I),k&&v(N,ee,Y,I)}else{const j=V.wireframe===!0;(c.geometry!==ee.id||c.program!==Y.id||c.wireframe!==j)&&(c.geometry=ee.id,c.program=Y.id,c.wireframe=j,k=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(k||f)&&(f=!1,U(N,V,Y,ee),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,V,Y){const ee=Y.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let k=I[V.id];k===void 0&&(k={},I[V.id]=k);let j=k[ee];return j===void 0&&(j=p(d()),k[ee]=j),j}function p(N){const V=[],Y=[],ee=[];for(let I=0;I<r;I++)V[I]=0,Y[I]=0,ee[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:ee,object:N,attributes:{},index:null}}function u(N,V,Y,ee){const I=c.attributes,k=V.attributes;let j=0;const J=Y.getAttributes();for(const ie in J)if(J[ie].location>=0){const ne=I[ie];let ve=k[ie];if(ve===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;j++}return c.attributesNum!==j||c.index!==ee}function v(N,V,Y,ee){const I={},k=V.attributes;let j=0;const J=Y.getAttributes();for(const ie in J)if(J[ie].location>=0){let ne=k[ie];ne===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),I[ie]=ve,j++}c.attributes=I,c.attributesNum=j,c.index=ee}function g(){const N=c.newAttributes;for(let V=0,Y=N.length;V<Y;V++)N[V]=0}function y(N){A(N,0)}function A(N,V){const Y=c.newAttributes,ee=c.enabledAttributes,I=c.attributeDivisors;Y[N]=1,ee[N]===0&&(t.enableVertexAttribArray(N),ee[N]=1),I[N]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),I[N]=V)}function E(){const N=c.newAttributes,V=c.enabledAttributes;for(let Y=0,ee=V.length;Y<ee;Y++)V[Y]!==N[Y]&&(t.disableVertexAttribArray(Y),V[Y]=0)}function T(N,V,Y,ee,I,k,j){j===!0?t.vertexAttribIPointer(N,V,Y,I,k):t.vertexAttribPointer(N,V,Y,ee,I,k)}function U(N,V,Y,ee){if(i.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=ee.attributes,k=Y.getAttributes(),j=V.defaultAttributeValues;for(const J in k){const ie=k[J];if(ie.location>=0){let Q=I[J];if(Q===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const ne=Q.normalized,ve=Q.itemSize,Me=n.get(Q);if(Me===void 0)continue;const Te=Me.buffer,Be=Me.type,We=Me.bytesPerElement,Ie=i.isWebGL2===!0&&(Be===t.INT||Be===t.UNSIGNED_INT||Q.gpuType===ox);if(Q.isInterleavedBufferAttribute){const it=Q.data,G=it.stride,Xt=Q.offset;if(it.isInstancedInterleavedBuffer){for(let Le=0;Le<ie.locationSize;Le++)A(ie.location+Le,it.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Le=0;Le<ie.locationSize;Le++)y(ie.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Le=0;Le<ie.locationSize;Le++)T(ie.location+Le,ve/ie.locationSize,Be,ne,G*We,(Xt+ve/ie.locationSize*Le)*We,Ie)}else{if(Q.isInstancedBufferAttribute){for(let it=0;it<ie.locationSize;it++)A(ie.location+it,Q.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let it=0;it<ie.locationSize;it++)y(ie.location+it);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let it=0;it<ie.locationSize;it++)T(ie.location+it,ve/ie.locationSize,Be,ne,ve*We,ve/ie.locationSize*it*We,Ie)}}else if(j!==void 0){const ne=j[J];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(ie.location,ne);break;case 3:t.vertexAttrib3fv(ie.location,ne);break;case 4:t.vertexAttrib4fv(ie.location,ne);break;default:t.vertexAttrib1fv(ie.location,ne)}}}}E()}function S(){H();for(const N in a){const V=a[N];for(const Y in V){const ee=V[Y];for(const I in ee)x(ee[I].object),delete ee[I];delete V[Y]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const Y in V){const ee=V[Y];for(const I in ee)x(ee[I].object),delete ee[I];delete V[Y]}delete a[N.id]}function z(N){for(const V in a){const Y=a[V];if(Y[N.id]===void 0)continue;const ee=Y[N.id];for(const I in ee)x(ee[I].object),delete ee[I];delete Y[N.id]}}function H(){te(),f=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:y,disableUnusedAttributes:E}}function Ww(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(f[x],h[x]);else{m.multiDrawArraysWEBGL(s,f,0,h,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),A=g&&y,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:E}}function Xw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=f(x,d,g,m);for(let A=0;A!==g;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,y=m;g!==_;++g,y+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Yw(t){let e=new WeakMap;function n(o,a){return a===oh?o.mapping=ao:a===ah&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oh||a===ah)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new s1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ax extends pd{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,ig=[.125,.215,.35,.446,.526,.582],Vr=20,$u=new Ax,rg=new we;let Ku=null,Qu=0,Zu=0;const Br=(1+Math.sqrt(5))/2,Ps=1/Br,sg=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Br,Ps),new R(0,Br,-Ps),new R(Ps,0,Br),new R(-Ps,0,Br),new R(Br,Ps,0),new R(-Br,Ps,0)];class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Qu,Zu),e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Hi,format:Gn,colorSpace:Xi,depthBuffer:!1},r=ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(s)),this._blurMaterial=$w(s,e,n)}return r}_compileMaterial(e){const n=new Rt(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,i,r){const a=new ei(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(rg),f.toneMapping=xr,f.autoClear=!1;const m=new Pn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Rt(new Ra,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(rg),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Tl(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ao||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sg[(r-1)%sg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Rt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vr-1),_=s/x,p=isFinite(s)?1+Math.floor(f*_):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const u=[];let v=0;for(let T=0;T<Vr;++T){const U=T/_,S=Math.exp(-U*U/2);u.push(S),T===0?v+=S:T<p&&(v+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const y=this._sizeLods[r],A=3*y*(r>g-Gs?r-g+Gs:0),E=4*(this._cubeSize-y);Tl(n,A,E,3*y,2*y),l.setRenderTarget(n),l.render(h,$u)}}function qw(t){const e=[],n=[],i=[];let r=t;const s=t-Gs+1+ig.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Gs?l=ig[o-t+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,_=3,p=2,u=1,v=new Float32Array(_*x*m),g=new Float32Array(p*x*m),y=new Float32Array(u*x*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,U=E>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];v.set(S,_*x*E),g.set(d,p*x*E);const w=[E,E,E,E,E,E];y.set(w,u*x*E)}const A=new Zt;A.setAttribute("position",new Fn(v,_)),A.setAttribute("uv",new Fn(g,p)),A.setAttribute("faceIndex",new Fn(y,u)),e.push(A),r>Gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ag(t,e,n){const i=new si(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $w(t,e,n){const i=new Float32Array(Vr),r=new R(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lg(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function cg(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function Kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oh||l===ah,f=l===ao||l===lo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new og(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new og(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Qw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,y=v.length;g<y;g+=3){const A=v[g+0],E=v[g+1],T=v[g+2];d.push(A,E,E,T,T,A)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const A=g+0,E=g+1,T=g+2;d.push(A,E,E,T,T,A)}}else return;const p=new(gx(d)?Mx:Sx)(d,1);p.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Jw(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function h(m,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,m*l,_),n.update(x,s,_)}function d(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let u=0;for(let v=0;v<_;v++)u+=x[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function eT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tT(t,e){return t[0]-e[0]}function nT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function iT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new un,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let V=function(){te.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),A===!0&&(S=3);let w=f.attributes.position.count*S,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*z*4*_),te=new _x(H,w,z,_);te.type=Ti,te.needsUpdate=!0;const N=S*4;for(let Y=0;Y<_;Y++){const ee=E[Y],I=T[Y],k=U[Y],j=w*z*4*Y;for(let J=0;J<ee.count;J++){const ie=J*N;g===!0&&(o.fromBufferAttribute(ee,J),H[j+ie+0]=o.x,H[j+ie+1]=o.y,H[j+ie+2]=o.z,H[j+ie+3]=0),y===!0&&(o.fromBufferAttribute(I,J),H[j+ie+4]=o.x,H[j+ie+5]=o.y,H[j+ie+6]=o.z,H[j+ie+7]=0),A===!0&&(o.fromBufferAttribute(k,J),H[j+ie+8]=o.x,H[j+ie+9]=o.y,H[j+ie+10]=o.z,H[j+ie+11]=k.itemSize===4?o.w:1)}}p={count:_,texture:te,size:new de(w,z)},s.set(f,p),f.addEventListener("dispose",V)}let u=0;for(let g=0;g<d.length;g++)u+=d[g];const v=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[f.id]=_}for(let y=0;y<x;y++){const A=_[y];A[0]=y,A[1]=d[y]}_.sort(nT);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(tT);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const A=a[y],E=A[0],T=A[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&f.getAttribute("morphTarget"+y)!==p[E]&&f.setAttribute("morphTarget"+y,p[E]),u&&f.getAttribute("morphNormal"+y)!==u[E]&&f.setAttribute("morphNormal"+y,u[E]),r[y]=T,v+=T):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function rT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Cx extends On{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:$r,f!==$r&&f!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===$r&&(i=cr),i===void 0&&f===co&&(i=qr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rx=new On,Px=new Cx(1,1);Px.compareFunction=mx;const Lx=new _x,Dx=new GM,Ux=new wx,ug=[],fg=[],hg=new Float32Array(16),dg=new Float32Array(9),pg=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ug[r];if(s===void 0&&(s=new Float32Array(r),ug[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;pg.set(i),t.uniformMatrix2fv(this.addr,!1,pg),Qt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;dg.set(i),t.uniformMatrix3fv(this.addr,!1,dg),Qt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;hg.set(i),t.uniformMatrix4fv(this.addr,!1,hg),Qt(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function gT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Px:Rx;n.setTexture2D(e||s,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dx,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ux,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lx,r)}function wT(t){switch(t){case 5126:return sT;case 35664:return oT;case 35665:return aT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return xT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function AT(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function CT(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function RT(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PT(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LT(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function FT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function kT(t,e){t.uniform4uiv(this.addr,e)}function BT(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rx,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dx,s[o])}function VT(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ux,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lx,s[o])}function WT(t){switch(t){case 5126:return TT;case 35664:return bT;case 35665:return AT;case 35666:return CT;case 35674:return RT;case 35675:return PT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return IT;case 5125:return OT;case 36294:return FT;case 36295:return zT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return GT}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function mg(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mg(n,c===void 0?new jT(a,t,e):new XT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new YT(a),mg(n,h)),n=h}}}class Yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $T=37297;let KT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZT(t){const e=vt.getPrimaries(vt.workingColorSpace),n=vt.getPrimaries(t);let i;switch(e===n?i="":e===Sc&&n===yc?i="LinearDisplayP3ToLinearSRGB":e===yc&&n===Sc&&(i="LinearSRGBToLinearDisplayP3"),t){case Xi:case Gc:return[i,"LinearTransferOETF"];case cn:case hd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+QT(t.getShaderSource(e),o)}else return r}function JT(t,e){const n=ZT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function eb(t,e){let n;switch(e){case hM:n="Linear";break;case dM:n="Reinhard";break;case pM:n="OptimizedCineon";break;case rx:n="ACESFilmic";break;case gM:n="AgX";break;case mM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function nb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ws).join(`
`)}function ib(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function xg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(t){return t.replace(sb,ab)}const ob=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ab(t,e){let n=tt[e];if(n===void 0){const i=ob.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(n)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(t){return t.replace(lb,cb)}function cb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ub(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function db(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case uM:e="ENVMAP_BLENDING_MIX";break;case fM:e="ENVMAP_BLENDING_ADD";break}return e}function pb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ub(n),c=fb(n),f=hb(n),h=db(n),d=pb(n),m=n.isWebGL2?"":tb(n),x=nb(n),_=ib(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),v.length>0&&(v+=`
`)):(u=[Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),v=[m,Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?tt.tonemapping_pars_fragment:"",n.toneMapping!==xr?eb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=dh(o),o=xg(o,n),o=_g(o,n),a=dh(a),a=xg(a,n),a=_g(a,n),o=yg(o),a=yg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+u+o,A=g+v+a,E=gg(r,r.VERTEX_SHADER,y),T=gg(r,r.FRAGMENT_SHADER,A);r.attachShader(p,E),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(H){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(E).trim(),V=r.getShaderInfoLog(T).trim();let Y=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,E,T);else{const I=vg(r,E,"vertex"),k=vg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+I+`
`+k)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||V==="")&&(ee=!1);ee&&(H.diagnostics={runnable:Y,programLog:te,vertexShader:{log:N,prefix:u},fragmentShader:{log:V,prefix:v}})}r.deleteShader(E),r.deleteShader(T),S=new Yl(r,p),w=rb(r,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,$T)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}let gb=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xb(e),n.set(e,i)),i}}class xb{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}}function _b(t,e,n,i,r,s,o){const a=new dd,l=new vb,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,z,H,te){const N=H.fog,V=te.geometry,Y=S.isMeshStandardMaterial?H.environment:null,ee=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),I=ee&&ee.mapping===Vc?ee.image.height:null,k=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=j!==void 0?j.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let Q,ne,ve,Me;if(k){const bt=Ei[k];Q=bt.vertexShader,ne=bt.fragmentShader}else Q=S.vertexShader,ne=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const Te=t.getRenderTarget(),Be=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,Ie=!!S.map,it=!!S.matcap,G=!!ee,Xt=!!S.aoMap,Le=!!S.lightMap,ze=!!S.bumpMap,be=!!S.normalMap,xt=!!S.displacementMap,Xe=!!S.emissiveMap,C=!!S.metalnessMap,M=!!S.roughnessMap,B=S.anisotropy>0,ae=S.clearcoat>0,se=S.iridescence>0,le=S.sheen>0,Ce=S.transmission>0,he=B&&!!S.anisotropyMap,xe=ae&&!!S.clearcoatMap,Ue=ae&&!!S.clearcoatNormalMap,Ye=ae&&!!S.clearcoatRoughnessMap,re=se&&!!S.iridescenceMap,lt=se&&!!S.iridescenceThicknessMap,$e=le&&!!S.sheenColorMap,He=le&&!!S.sheenRoughnessMap,Re=!!S.specularMap,_e=!!S.specularColorMap,P=!!S.specularIntensityMap,ue=Ce&&!!S.transmissionMap,Ae=Ce&&!!S.thicknessMap,Se=!!S.gradientMap,oe=!!S.alphaMap,D=S.alphaTest>0,fe=!!S.alphaHash,me=!!S.extensions,Oe=!!V.attributes.uv1,Ne=!!V.attributes.uv2,Ke=!!V.attributes.uv3;let Ze=xr;return S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:f,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:ne,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:We,instancing:Be,instancingColor:Be&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Xi,map:Ie,matcap:it,envMap:G,envMapMode:G&&ee.mapping,envMapCubeUVHeight:I,aoMap:Xt,lightMap:Le,bumpMap:ze,normalMap:be,displacementMap:d&&xt,emissiveMap:Xe,normalMapObjectSpace:be&&S.normalMapType===CM,normalMapTangentSpace:be&&S.normalMapType===px,metalnessMap:C,roughnessMap:M,anisotropy:B,anisotropyMap:he,clearcoat:ae,clearcoatMap:xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ye,iridescence:se,iridescenceMap:re,iridescenceThicknessMap:lt,sheen:le,sheenColorMap:$e,sheenRoughnessMap:He,specularMap:Re,specularColorMap:_e,specularIntensityMap:P,transmission:Ce,transmissionMap:ue,thicknessMap:Ae,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Zs,alphaMap:oe,alphaTest:D,alphaHash:fe,combine:S.combine,mapUv:Ie&&_(S.map.channel),aoMapUv:Xt&&_(S.aoMap.channel),lightMapUv:Le&&_(S.lightMap.channel),bumpMapUv:ze&&_(S.bumpMap.channel),normalMapUv:be&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:C&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:he&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(S.sheenRoughnessMap.channel),specularMapUv:Re&&_(S.specularMap.channel),specularColorMapUv:_e&&_(S.specularColorMap.channel),specularIntensityMapUv:P&&_(S.specularIntensityMap.channel),transmissionMapUv:ue&&_(S.transmissionMap.channel),thicknessMapUv:Ae&&_(S.thicknessMap.channel),alphaMapUv:oe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ne,vertexUv3s:Ke,pointsUvs:te.isPoints===!0&&!!V.attributes.uv&&(Ie||oe),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(v(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=x[S.type];let z;if(w){const H=Ei[w];z=wc.clone(H.uniforms)}else z=S.uniforms;return z}function A(S,w){let z;for(let H=0,te=c.length;H<te;H++){const N=c[H];if(N.cacheKey===w){z=N,++z.usedTimes;break}}return z===void 0&&(z=new mb(t,w,S,s),c.push(z)),z}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:U}}function yb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Sb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,x,_,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function a(h,d,m,x,_,p){const u=o(h,d,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,d,m,x,_,p){const u=o(h,d,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||Sb),i.length>1&&i.sort(d||Mg),r.length>1&&r.sort(d||Mg)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function Mb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Eg,t.set(i,[o])):r>=s.length?(o=new Eg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new we};break;case"SpotLight":n={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Tb=0;function bb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ab(t,e){const n=new Eb,i=wb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new R);const s=new R,o=new jt,a=new jt;function l(f,h){let d=0,m=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,u=0,v=0,g=0,y=0,A=0,E=0,T=0,U=0,S=0;f.sort(bb);const w=h===!0?Math.PI:1;for(let H=0,te=f.length;H<te;H++){const N=f[H],V=N.color,Y=N.intensity,ee=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*Y*w,m+=V.g*Y*w,x+=V.b*Y*w;else if(N.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(N.sh.coefficients[k],Y);S++}else if(N.isDirectionalLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const j=N.shadow,J=i.get(N);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=I,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=k,_++}else if(N.isSpotLight){const k=n.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(V).multiplyScalar(Y*w),k.distance=ee,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,r.spot[u]=k;const j=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,j.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[u]=j.matrix,N.castShadow){const J=i.get(N);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=I,E++}u++}else if(N.isRectAreaLight){const k=n.get(N);k.color.copy(V).multiplyScalar(Y),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=k,v++}else if(N.isPointLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),k.distance=N.distance,k.decay=N.decay,N.castShadow){const j=N.shadow,J=i.get(N);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=k,p++}else if(N.isHemisphereLight){const k=n.get(N);k.skyColor.copy(N.color).multiplyScalar(Y*w),k.groundColor.copy(N.groundColor).multiplyScalar(Y*w),r.hemi[g]=k,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==v||z.hemiLength!==g||z.numDirectionalShadows!==y||z.numPointShadows!==A||z.numSpotShadows!==E||z.numSpotMaps!==T||z.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=E+T-U,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=S,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=v,z.hemiLength=g,z.numDirectionalShadows=y,z.numPointShadows=A,z.numSpotShadows=E,z.numSpotMaps=T,z.numLightProbes=S,r.version=Tb++)}function c(f,h){let d=0,m=0,x=0,_=0,p=0;const u=h.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const y=f[v];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),d++}else if(y.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function wg(t,e){const n=new Ab(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new wg(t,e),n.set(s,[l])):o>=a.length?(l=new wg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Rb extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pb extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`;function Ub(t,e,n){let i=new Tx;const r=new de,s=new de,o=new un,a=new Rb({depthPacking:AM}),l=new Pb,c={},f=n.maxTextureSize,h={[Mr]:nn,[nn]:Mr,[ti]:ti},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Zt;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nx;let u=this.type;this.render=function(E,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),w=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const te=u!==Ui&&this.type===Ui,N=u===Ui&&this.type!==Ui;for(let V=0,Y=E.length;V<Y;V++){const ee=E[V],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null||te===!0||N===!0){const J=this.type!==Ui?{minFilter:zt,magFilter:zt}:{};I.map!==null&&I.map.dispose(),I.map=new si(r.x,r.y,J),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let J=0;J<j;J++){const ie=I.getViewport(J);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),H.viewport(o),I.updateMatrices(ee,J),i=I.getFrustum(),y(T,U,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===Ui&&v(I,U),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,w,z)};function v(E,T){const U=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,U,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,U,m,_,null)}function g(E,T,U,S){let w=null;const z=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)w=z;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=w.uuid,te=T.uuid;let N=c[H];N===void 0&&(N={},c[H]=N);let V=N[te];V===void 0&&(V=w.clone(),N[te]=V,T.addEventListener("dispose",A)),w=V}if(w.visible=T.visible,w.wireframe=T.wireframe,S===Ui?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=t.properties.get(w);H.light=U}return w}function y(E,T,U,S,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ui)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const te=e.update(E),N=E.material;if(Array.isArray(N)){const V=te.groups;for(let Y=0,ee=V.length;Y<ee;Y++){const I=V[Y],k=N[I.materialIndex];if(k&&k.visible){const j=g(E,k,S,w);E.onBeforeShadow(t,E,T,U,te,j,I),t.renderBufferDirect(U,null,te,j,E,I),E.onAfterShadow(t,E,T,U,te,j,I)}}}else if(N.visible){const V=g(E,N,S,w);E.onBeforeShadow(t,E,T,U,te,V,null),t.renderBufferDirect(U,null,te,V,E,null),E.onAfterShadow(t,E,T,U,te,V,null)}}const H=E.children;for(let te=0,N=H.length;te<N;te++)y(H[te],T,U,S,w)}function A(E){E.target.removeEventListener("dispose",A);for(const U in c){const S=c[U],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function Nb(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const fe=new un;let me=null;const Oe=new un(0,0,0,0);return{setMask:function(Ne){me!==Ne&&!D&&(t.colorMask(Ne,Ne,Ne,Ne),me=Ne)},setLocked:function(Ne){D=Ne},setClear:function(Ne,Ke,Ze,_t,bt){bt===!0&&(Ne*=_t,Ke*=_t,Ze*=_t),fe.set(Ne,Ke,Ze,_t),Oe.equals(fe)===!1&&(t.clearColor(Ne,Ke,Ze,_t),Oe.copy(fe))},reset:function(){D=!1,me=null,Oe.set(-1,0,0,0)}}}function s(){let D=!1,fe=null,me=null,Oe=null;return{setTest:function(Ne){Ne?We(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!D&&(t.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(me!==Ne){switch(Ne){case iM:t.depthFunc(t.NEVER);break;case rM:t.depthFunc(t.ALWAYS);break;case sM:t.depthFunc(t.LESS);break;case xc:t.depthFunc(t.LEQUAL);break;case oM:t.depthFunc(t.EQUAL);break;case aM:t.depthFunc(t.GEQUAL);break;case lM:t.depthFunc(t.GREATER);break;case cM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ne}},setLocked:function(Ne){D=Ne},setClear:function(Ne){Oe!==Ne&&(t.clearDepth(Ne),Oe=Ne)},reset:function(){D=!1,fe=null,me=null,Oe=null}}}function o(){let D=!1,fe=null,me=null,Oe=null,Ne=null,Ke=null,Ze=null,_t=null,bt=null;return{setTest:function(st){D||(st?We(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(st){fe!==st&&!D&&(t.stencilMask(st),fe=st)},setFunc:function(st,Ut,sn){(me!==st||Oe!==Ut||Ne!==sn)&&(t.stencilFunc(st,Ut,sn),me=st,Oe=Ut,Ne=sn)},setOp:function(st,Ut,sn){(Ke!==st||Ze!==Ut||_t!==sn)&&(t.stencilOp(st,Ut,sn),Ke=st,Ze=Ut,_t=sn)},setLocked:function(st){D=st},setClear:function(st){bt!==st&&(t.clearStencil(st),bt=st)},reset:function(){D=!1,fe=null,me=null,Oe=null,Ne=null,Ke=null,Ze=null,_t=null,bt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,A=null,E=null,T=null,U=null,S=new we(0,0,0),w=0,z=!1,H=null,te=null,N=null,V=null,Y=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=k>=2);let J=null,ie={};const Q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ve=new un().fromArray(Q),Me=new un().fromArray(ne);function Te(D,fe,me,Oe){const Ne=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(D,Ke),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<me;Ze++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(fe+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return Ke}const Be={};Be[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Be[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Be[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(t.DEPTH_TEST),l.setFunc(xc),Xe(!1),C(om),We(t.CULL_FACE),be(Bi);function We(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Ie(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function it(D,fe){return m[D]!==fe?(t.bindFramebuffer(D,fe),m[D]=fe,i&&(D===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function G(D,fe){let me=_,Oe=!1;if(D)if(me=x.get(fe),me===void 0&&(me=[],x.set(fe,me)),D.isWebGLMultipleRenderTargets){const Ne=D.texture;if(me.length!==Ne.length||me[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=Ne.length;Ke<Ze;Ke++)me[Ke]=t.COLOR_ATTACHMENT0+Ke;me.length=Ne.length,Oe=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Oe=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Oe=!0);Oe&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Xt(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Le={[Hr]:t.FUNC_ADD,[VS]:t.FUNC_SUBTRACT,[GS]:t.FUNC_REVERSE_SUBTRACT};if(i)Le[cm]=t.MIN,Le[um]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Le[cm]=D.MIN_EXT,Le[um]=D.MAX_EXT)}const ze={[WS]:t.ZERO,[jS]:t.ONE,[XS]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[ZS]:t.SRC_ALPHA_SATURATE,[KS]:t.DST_COLOR,[qS]:t.DST_ALPHA,[YS]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[QS]:t.ONE_MINUS_DST_COLOR,[$S]:t.ONE_MINUS_DST_ALPHA,[JS]:t.CONSTANT_COLOR,[eM]:t.ONE_MINUS_CONSTANT_COLOR,[tM]:t.CONSTANT_ALPHA,[nM]:t.ONE_MINUS_CONSTANT_ALPHA};function be(D,fe,me,Oe,Ne,Ke,Ze,_t,bt,st){if(D===Bi){u===!0&&(Ie(t.BLEND),u=!1);return}if(u===!1&&(We(t.BLEND),u=!0),D!==HS){if(D!==v||st!==z){if((g!==Hr||E!==Hr)&&(t.blendEquation(t.FUNC_ADD),g=Hr,E=Hr),st)switch(D){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Er:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Er:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,A=null,T=null,U=null,S.set(0,0,0),w=0,v=D,z=st}return}Ne=Ne||fe,Ke=Ke||me,Ze=Ze||Oe,(fe!==g||Ne!==E)&&(t.blendEquationSeparate(Le[fe],Le[Ne]),g=fe,E=Ne),(me!==y||Oe!==A||Ke!==T||Ze!==U)&&(t.blendFuncSeparate(ze[me],ze[Oe],ze[Ke],ze[Ze]),y=me,A=Oe,T=Ke,U=Ze),(_t.equals(S)===!1||bt!==w)&&(t.blendColor(_t.r,_t.g,_t.b,bt),S.copy(_t),w=bt),v=D,z=!1}function xt(D,fe){D.side===ti?Ie(t.CULL_FACE):We(t.CULL_FACE);let me=D.side===nn;fe&&(me=!me),Xe(me),D.blending===Zs&&D.transparent===!1?be(Bi):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Oe=D.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?We(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){H!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),H=D)}function C(D){D!==zS?(We(t.CULL_FACE),D!==te&&(D===om?t.cullFace(t.BACK):D===kS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),te=D}function M(D){D!==N&&(I&&t.lineWidth(D),N=D)}function B(D,fe,me){D?(We(t.POLYGON_OFFSET_FILL),(V!==fe||Y!==me)&&(t.polygonOffset(fe,me),V=fe,Y=me)):Ie(t.POLYGON_OFFSET_FILL)}function ae(D){D?We(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function se(D){D===void 0&&(D=t.TEXTURE0+ee-1),J!==D&&(t.activeTexture(D),J=D)}function le(D,fe,me){me===void 0&&(J===null?me=t.TEXTURE0+ee-1:me=J);let Oe=ie[me];Oe===void 0&&(Oe={type:void 0,texture:void 0},ie[me]=Oe),(Oe.type!==D||Oe.texture!==fe)&&(J!==me&&(t.activeTexture(me),J=me),t.bindTexture(D,fe||Be[D]),Oe.type=D,Oe.texture=fe)}function Ce(){const D=ie[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){ve.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function ue(D){Me.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Me.copy(D))}function Ae(D,fe){let me=h.get(fe);me===void 0&&(me=new WeakMap,h.set(fe,me));let Oe=me.get(D);Oe===void 0&&(Oe=t.getUniformBlockIndex(fe,D.name),me.set(D,Oe))}function Se(D,fe){const Oe=h.get(fe).get(D);f.get(fe)!==Oe&&(t.uniformBlockBinding(fe,Oe,D.__bindingPointIndex),f.set(fe,Oe))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,ie={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,A=null,E=null,T=null,U=null,S=new we(0,0,0),w=0,z=!1,H=null,te=null,N=null,V=null,Y=null,ve.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:We,disable:Ie,bindFramebuffer:it,drawBuffers:G,useProgram:Xt,setBlending:be,setMaterial:xt,setFlipSided:Xe,setCullFace:C,setLineWidth:M,setPolygonOffset:B,setScissorTest:ae,activeTexture:se,bindTexture:le,unbindTexture:Ce,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:Re,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:Se,texStorage2D:$e,texStorage3D:He,texSubImage2D:Ue,texSubImage3D:Ye,compressedTexSubImage2D:re,compressedTexSubImage3D:lt,scissor:P,viewport:ue,reset:oe}}function Ib(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return m?new OffscreenCanvas(C,M):Ec("canvas")}function _(C,M,B,ae){let se=1;if((C.width>ae||C.height>ae)&&(se=ae/Math.max(C.width,C.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=M?hh:Math.floor,Ce=le(se*C.width),he=le(se*C.height);h===void 0&&(h=x(Ce,he));const xe=B?x(Ce,he):h;return xe.width=Ce,xe.height=he,xe.getContext("2d").drawImage(C,0,0,Ce,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ce+"x"+he+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Bm(C.width)&&Bm(C.height)}function u(C){return a?!1:C.wrapS!==Vn||C.wrapT!==Vn||C.minFilter!==zt&&C.minFilter!==Zn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==zt&&C.minFilter!==Zn}function g(C){t.generateMipmap(C)}function y(C,M,B,ae,se=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=M;if(M===t.RED&&(B===t.FLOAT&&(le=t.R32F),B===t.HALF_FLOAT&&(le=t.R16F),B===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(le=t.R8UI),B===t.UNSIGNED_SHORT&&(le=t.R16UI),B===t.UNSIGNED_INT&&(le=t.R32UI),B===t.BYTE&&(le=t.R8I),B===t.SHORT&&(le=t.R16I),B===t.INT&&(le=t.R32I)),M===t.RG&&(B===t.FLOAT&&(le=t.RG32F),B===t.HALF_FLOAT&&(le=t.RG16F),B===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const Ce=se?_c:vt.getTransfer(ae);B===t.FLOAT&&(le=t.RGBA32F),B===t.HALF_FLOAT&&(le=t.RGBA16F),B===t.UNSIGNED_BYTE&&(le=Ce===wt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(C,M,B){return v(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===zt||C===fm||C===Tu?t.NEAREST:t.LINEAR}function T(C){const M=C.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&f.delete(M)}function U(C){const M=C.target;M.removeEventListener("dispose",U),z(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const B=C.source,ae=d.get(B);if(ae){const se=ae[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(C),Object.keys(ae).length===0&&d.delete(B)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const B=C.source,ae=d.get(B);delete ae[M.__cacheKey],o.memory.textures--}function z(C){const M=C.texture,B=i.get(C),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(B.__webglFramebuffer[se]))for(let le=0;le<B.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(B.__webglFramebuffer[se][le]);else t.deleteFramebuffer(B.__webglFramebuffer[se]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[se])}else{if(Array.isArray(B.__webglFramebuffer))for(let se=0;se<B.__webglFramebuffer.length;se++)t.deleteFramebuffer(B.__webglFramebuffer[se]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let se=0,le=M.length;se<le;se++){const Ce=i.get(M[se]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(C)}let H=0;function te(){H=0}function N(){const C=H;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),H+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const B=i.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function ee(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){ve(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function I(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){ve(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function k(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Me(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const j={[lh]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[ch]:t.MIRRORED_REPEAT},J={[zt]:t.NEAREST,[fm]:t.NEAREST_MIPMAP_NEAREST,[Tu]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[vM]:t.LINEAR_MIPMAP_NEAREST,[xa]:t.LINEAR_MIPMAP_LINEAR},ie={[RM]:t.NEVER,[IM]:t.ALWAYS,[PM]:t.LESS,[mx]:t.LEQUAL,[LM]:t.EQUAL,[NM]:t.GEQUAL,[DM]:t.GREATER,[UM]:t.NOTEQUAL};function Q(C,M,B){if(B?(t.texParameteri(C,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,j[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,J[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,E(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==zt&&M.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===zt||M.minFilter!==Tu&&M.minFilter!==xa||M.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ne(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const ae=M.source;let se=d.get(ae);se===void 0&&(se={},d.set(ae,se));const le=V(M);if(le!==C.__cacheKey){se[le]===void 0&&(se[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[le].usedTimes++;const Ce=se[C.__cacheKey];Ce!==void 0&&(se[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),C.__cacheKey=le,C.__webglTexture=se[le].texture}return B}function ve(C,M,B){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const se=ne(C,M),le=M.source;n.bindTexture(ae,C.__webglTexture,t.TEXTURE0+B);const Ce=i.get(le);if(le.version!==Ce.__version||se===!0){n.activeTexture(t.TEXTURE0+B);const he=vt.getPrimaries(vt.workingColorSpace),xe=M.colorSpace===ni?null:vt.getPrimaries(M.colorSpace),Ue=M.colorSpace===ni||he===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ye=u(M)&&p(M.image)===!1;let re=_(M.image,Ye,!1,r.maxTextureSize);re=Xe(M,re);const lt=p(re)||a,$e=s.convert(M.format,M.colorSpace);let He=s.convert(M.type),Re=y(M.internalFormat,$e,He,M.colorSpace,M.isVideoTexture);Q(ae,M,lt);let _e;const P=M.mipmaps,ue=a&&M.isVideoTexture!==!0&&Re!==hx,Ae=Ce.__version===void 0||se===!0,Se=A(M,re,lt);if(M.isDepthTexture)Re=t.DEPTH_COMPONENT,a?M.type===Ti?Re=t.DEPTH_COMPONENT32F:M.type===cr?Re=t.DEPTH_COMPONENT24:M.type===qr?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:M.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$r&&Re===t.DEPTH_COMPONENT&&M.type!==fd&&M.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=cr,He=s.convert(M.type)),M.format===co&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,M.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=qr,He=s.convert(M.type))),Ae&&(ue?n.texStorage2D(t.TEXTURE_2D,1,Re,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Re,re.width,re.height,0,$e,He,null));else if(M.isDataTexture)if(P.length>0&&lt){ue&&Ae&&n.texStorage2D(t.TEXTURE_2D,Se,Re,P[0].width,P[0].height);for(let oe=0,D=P.length;oe<D;oe++)_e=P[oe],ue?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,$e,He,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Re,_e.width,_e.height,0,$e,He,_e.data);M.generateMipmaps=!1}else ue?(Ae&&n.texStorage2D(t.TEXTURE_2D,Se,Re,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,$e,He,re.data)):n.texImage2D(t.TEXTURE_2D,0,Re,re.width,re.height,0,$e,He,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Re,P[0].width,P[0].height,re.depth);for(let oe=0,D=P.length;oe<D;oe++)_e=P[oe],M.format!==Gn?$e!==null?ue?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,re.depth,$e,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Re,_e.width,_e.height,re.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,re.depth,$e,He,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Re,_e.width,_e.height,re.depth,0,$e,He,_e.data)}else{ue&&Ae&&n.texStorage2D(t.TEXTURE_2D,Se,Re,P[0].width,P[0].height);for(let oe=0,D=P.length;oe<D;oe++)_e=P[oe],M.format!==Gn?$e!==null?ue?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,$e,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,$e,He,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Re,_e.width,_e.height,0,$e,He,_e.data)}else if(M.isDataArrayTexture)ue?(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Re,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,$e,He,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,$e,He,re.data);else if(M.isData3DTexture)ue?(Ae&&n.texStorage3D(t.TEXTURE_3D,Se,Re,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,$e,He,re.data)):n.texImage3D(t.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,$e,He,re.data);else if(M.isFramebufferTexture){if(Ae)if(ue)n.texStorage2D(t.TEXTURE_2D,Se,Re,re.width,re.height);else{let oe=re.width,D=re.height;for(let fe=0;fe<Se;fe++)n.texImage2D(t.TEXTURE_2D,fe,Re,oe,D,0,$e,He,null),oe>>=1,D>>=1}}else if(P.length>0&&lt){ue&&Ae&&n.texStorage2D(t.TEXTURE_2D,Se,Re,P[0].width,P[0].height);for(let oe=0,D=P.length;oe<D;oe++)_e=P[oe],ue?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,$e,He,_e):n.texImage2D(t.TEXTURE_2D,oe,Re,$e,He,_e);M.generateMipmaps=!1}else ue?(Ae&&n.texStorage2D(t.TEXTURE_2D,Se,Re,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$e,He,re)):n.texImage2D(t.TEXTURE_2D,0,Re,$e,He,re);v(M,lt)&&g(ae),Ce.__version=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Me(C,M,B){if(M.image.length!==6)return;const ae=ne(C,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const le=i.get(se);if(se.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const Ce=vt.getPrimaries(vt.workingColorSpace),he=M.colorSpace===ni?null:vt.getPrimaries(M.colorSpace),xe=M.colorSpace===ni||Ce===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,re=[];for(let oe=0;oe<6;oe++)!Ue&&!Ye?re[oe]=_(M.image[oe],!1,!0,r.maxCubemapSize):re[oe]=Ye?M.image[oe].image:M.image[oe],re[oe]=Xe(M,re[oe]);const lt=re[0],$e=p(lt)||a,He=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),_e=y(M.internalFormat,He,Re,M.colorSpace),P=a&&M.isVideoTexture!==!0,ue=le.__version===void 0||ae===!0;let Ae=A(M,lt,$e);Q(t.TEXTURE_CUBE_MAP,M,$e);let Se;if(Ue){P&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,_e,lt.width,lt.height);for(let oe=0;oe<6;oe++){Se=re[oe].mipmaps;for(let D=0;D<Se.length;D++){const fe=Se[D];M.format!==Gn?He!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,fe.width,fe.height,He,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,fe.width,fe.height,He,Re,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,fe.width,fe.height,0,He,Re,fe.data)}}}else{Se=M.mipmaps,P&&ue&&(Se.length>0&&Ae++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,_e,re[0].width,re[0].height));for(let oe=0;oe<6;oe++)if(Ye){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,re[oe].width,re[oe].height,He,Re,re[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,re[oe].width,re[oe].height,0,He,Re,re[oe].data);for(let D=0;D<Se.length;D++){const me=Se[D].image[oe].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,me.width,me.height,He,Re,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,me.width,me.height,0,He,Re,me.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,Re,re[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,He,Re,re[oe]);for(let D=0;D<Se.length;D++){const fe=Se[D];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,He,Re,fe.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,He,Re,fe.image[oe])}}}v(M,$e)&&g(t.TEXTURE_CUBE_MAP),le.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Te(C,M,B,ae,se,le){const Ce=s.convert(B.format,B.colorSpace),he=s.convert(B.type),xe=y(B.internalFormat,Ce,he,B.colorSpace);if(!i.get(M).__hasExternalTextures){const Ye=Math.max(1,M.width>>le),re=Math.max(1,M.height>>le);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,le,xe,Ye,re,M.depth,0,Ce,he,null):n.texImage2D(se,le,xe,Ye,re,0,Ce,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,se,i.get(B).__webglTexture,0,ze(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,se,i.get(B).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||be(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Ti?ae=t.DEPTH_COMPONENT32F:se.type===cr&&(ae=t.DEPTH_COMPONENT24));const le=ze(M);be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ae=ze(M);B&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ae.length;se++){const le=ae[se],Ce=s.convert(le.format,le.colorSpace),he=s.convert(le.type),xe=y(le.internalFormat,Ce,he,le.colorSpace),Ue=ze(M);B&&be(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,xe,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,se=ze(M);if(M.depthTexture.format===$r)be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===co)be(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),Be(M.__webglDepthbuffer[ae],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Be(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(C,M,B){const ae=i.get(C);M!==void 0&&Te(ae.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ie(C)}function G(C){const M=C.texture,B=i.get(C),ae=i.get(M);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,o.memory.textures++);const se=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Ce=p(C)||a;if(se){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let xe=0;xe<M.mipmaps.length;xe++)B.__webglFramebuffer[he][xe]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const he=C.texture;for(let xe=0,Ue=he.length;xe<Ue;xe++){const Ye=i.get(he[xe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&be(C)===!1){const he=le?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Ue=he[xe];B.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const Ye=s.convert(Ue.format,Ue.colorSpace),re=s.convert(Ue.type),lt=y(Ue.internalFormat,Ye,re,Ue.colorSpace,C.isXRRenderTarget===!0),$e=ze(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,lt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M,Ce);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Te(B.__webglFramebuffer[he][xe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else Te(B.__webglFramebuffer[he],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,Ce)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const he=C.texture;for(let xe=0,Ue=he.length;xe<Ue;xe++){const Ye=he[xe],re=i.get(Ye);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),Q(t.TEXTURE_2D,Ye,Ce),Te(B.__webglFramebuffer,C,Ye,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),v(Ye,Ce)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,ae.__webglTexture),Q(he,M,Ce),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Te(B.__webglFramebuffer[xe],C,M,t.COLOR_ATTACHMENT0,he,xe);else Te(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,he,0);v(M,Ce)&&g(he),n.unbindTexture()}C.depthBuffer&&Ie(C)}function Xt(C){const M=p(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,se=B.length;ae<se;ae++){const le=B[ae];if(v(le,M)){const Ce=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(le).__webglTexture;n.bindTexture(Ce,he),g(Ce),n.unbindTexture()}}}function Le(C){if(a&&C.samples>0&&be(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,ae=C.height;let se=t.COLOR_BUFFER_BIT;const le=[],Ce=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(C),xe=C.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ue=0;Ue<M.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){le.push(t.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&le.push(Ce);const Ye=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ye===!1&&(C.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ue]),Ye===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ce])),xe){const re=i.get(M[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,B,ae,0,0,B,ae,se,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ue=0;Ue<M.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ue]);const Ye=i.get(M[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(r.maxSamples,C.samples)}function be(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Xe(C,M){const B=C.colorSpace,ae=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===uh||B!==Xi&&B!==ni&&(vt.getTransfer(B)===wt?a===!1?e.has("EXT_sRGB")===!0&&ae===Gn?(C.format=uh,C.minFilter=Zn,C.generateMipmaps=!1):M=vx.sRGBToLinear(M):(ae!==Gn||se!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=N,this.resetTextureUnits=te,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=it,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=be}function Ob(t,e,n){const i=n.isWebGL2;function r(s,o=ni){let a;const l=vt.getTransfer(o);if(s===_r)return t.UNSIGNED_BYTE;if(s===ax)return t.UNSIGNED_SHORT_4_4_4_4;if(s===lx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===xM)return t.BYTE;if(s===_M)return t.SHORT;if(s===fd)return t.UNSIGNED_SHORT;if(s===ox)return t.INT;if(s===cr)return t.UNSIGNED_INT;if(s===Ti)return t.FLOAT;if(s===Hi)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yM)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===SM)return t.LUMINANCE;if(s===MM)return t.LUMINANCE_ALPHA;if(s===$r)return t.DEPTH_COMPONENT;if(s===co)return t.DEPTH_STENCIL;if(s===uh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===EM)return t.RED;if(s===cx)return t.RED_INTEGER;if(s===wM)return t.RG;if(s===ux)return t.RG_INTEGER;if(s===fx)return t.RGBA_INTEGER;if(s===bu||s===Au||s===Cu||s===Ru)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===bu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===bu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Au)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hm||s===dm||s===pm||s===mm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gm||s===vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gm)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xm||s===_m||s===ym||s===Sm||s===Mm||s===Em||s===wm||s===Tm||s===bm||s===Am||s===Cm||s===Rm||s===Pm||s===Lm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_m)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ym)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Em)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Am)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pu||s===Dm||s===Um)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pu)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===TM||s===Nm||s===Im||s===Om)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Im)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Om)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Fb extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class js extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class kb extends ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],g=[],y=new de;let A=null;const E=new ei;E.layers.enable(1),E.viewport=new un;const T=new ei;T.layers.enable(2),T.viewport=new un;const U=[E,T],S=new Fb;S.layers.enable(1),S.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=v[Q];return ne===void 0&&(ne=new ef,v[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=v[Q];return ne===void 0&&(ne=new ef,v[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=v[Q];return ne===void 0&&(ne=new ef,v[Q]=ne),ne.getHandSpace()};function H(Q){const ne=g.indexOf(Q.inputSource);if(ne===-1)return;const ve=v[ne];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||o),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",N);for(let Q=0;Q<v.length;Q++){const ne=g[Q];ne!==null&&(g[Q]=null,v[Q].disconnect(ne))}w=null,z=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,u=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",te),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new si(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,ve=null,Me=null;_.depth&&(Me=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=_.stencil?co:$r,ve=_.stencil?qr:cr);const Te={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new si(d.textureWidth,d.textureHeight,{format:Gn,type:_r,depthTexture:new Cx(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Be=e.properties.get(u);Be.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(Q){for(let ne=0;ne<Q.removed.length;ne++){const ve=Q.removed[ne],Me=g.indexOf(ve);Me>=0&&(g[Me]=null,v[Me].disconnect(ve))}for(let ne=0;ne<Q.added.length;ne++){const ve=Q.added[ne];let Me=g.indexOf(ve);if(Me===-1){for(let Be=0;Be<v.length;Be++)if(Be>=g.length){g.push(ve),Me=Be;break}else if(g[Be]===null){g[Be]=ve,Me=Be;break}if(Me===-1)break}const Te=v[Me];Te&&Te.connect(ve)}}const V=new R,Y=new R;function ee(Q,ne,ve){V.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const Me=V.distanceTo(Y),Te=ne.projectionMatrix.elements,Be=ve.projectionMatrix.elements,We=Te[14]/(Te[10]-1),Ie=Te[14]/(Te[10]+1),it=(Te[9]+1)/Te[5],G=(Te[9]-1)/Te[5],Xt=(Te[8]-1)/Te[0],Le=(Be[8]+1)/Be[0],ze=We*Xt,be=We*Le,xt=Me/(-Xt+Le),Xe=xt*-Xt;ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const C=We+xt,M=Ie+xt,B=ze-Xe,ae=be+(Me-Xe),se=it*Ie/M*C,le=G*Ie/M*C;Q.projectionMatrix.makePerspective(B,ae,se,le,C,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function I(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;S.near=T.near=E.near=Q.near,S.far=T.far=E.far=Q.far,(w!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far);const ne=Q.parent,ve=S.cameras;I(S,ne);for(let Me=0;Me<ve.length;Me++)I(ve[Me],ne);ve.length===2?ee(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),k(Q,S,ne)};function k(Q,ne,ve){ve===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let j=null;function J(Q,ne){if(f=ne.getViewerPose(c||o),x=ne,f!==null){const ve=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Me=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,Me=!0);for(let Te=0;Te<ve.length;Te++){const Be=ve[Te];let We=null;if(m!==null)We=m.getViewport(Be);else{const it=h.getViewSubImage(d,Be);We=it.viewport,Te===0&&(e.setRenderTargetTextures(u,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(u))}let Ie=U[Te];Ie===void 0&&(Ie=new ei,Ie.layers.enable(Te),Ie.viewport=new un,U[Te]=Ie),Ie.matrix.fromArray(Be.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Be.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Me===!0&&S.cameras.push(Ie)}}for(let ve=0;ve<v.length;ve++){const Me=g[ve],Te=v[ve];Me!==null&&Te!==void 0&&Te.update(Me,ne,c||o)}j&&j(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const ie=new bx;ie.setAnimationLoop(J),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}}function Bb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Ex(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(x(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",p));const A=g.program;i.updateUBOMapping(v,A);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function f(v){const g=h();v.__bindingPointIndex=g;const y=t.createBuffer(),A=v.__size,E=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],y=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let E=0,T=y.length;E<T;E++){const U=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,w=U.length;S<w;S++){const z=U[S];if(m(z,E,S,A)===!0){const H=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let N=0;for(let V=0;V<te.length;V++){const Y=te[V],ee=_(Y);typeof Y=="number"||typeof Y=="boolean"?(z.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,H+N,z.__data)):Y.isMatrix3?(z.__data[0]=Y.elements[0],z.__data[1]=Y.elements[1],z.__data[2]=Y.elements[2],z.__data[3]=0,z.__data[4]=Y.elements[3],z.__data[5]=Y.elements[4],z.__data[6]=Y.elements[5],z.__data[7]=0,z.__data[8]=Y.elements[6],z.__data[9]=Y.elements[7],z.__data[10]=Y.elements[8],z.__data[11]=0):(Y.toArray(z.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y,A){const E=v.value,T=g+"_"+y;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const U=A[T];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return A[T]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function x(v){const g=v.uniforms;let y=0;const A=16;for(let T=0,U=g.length;T<U;T++){const S=Array.isArray(g[T])?g[T]:[g[T]];for(let w=0,z=S.length;w<z;w++){const H=S[w],te=Array.isArray(H.value)?H.value:[H.value];for(let N=0,V=te.length;N<V;N++){const Y=te[N],ee=_(Y),I=y%A;I!==0&&A-I<ee.boundary&&(y+=A-I),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ee.storage}}}const E=y%A;return E>0&&(y+=A-E),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Nx{constructor(e={}){const{canvas:n=zM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const g=this;let y=!1,A=0,E=0,T=null,U=-1,S=null;const w=new un,z=new un;let H=null;const te=new we(0);let N=0,V=n.width,Y=n.height,ee=1,I=null,k=null;const j=new un(0,0,V,Y),J=new un(0,0,V,Y);let ie=!1;const Q=new Tx;let ne=!1,ve=!1,Me=null;const Te=new jt,Be=new de,We=new R,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return T===null?ee:1}let G=i;function Xt(b,O){for(let q=0;q<b.length;q++){const $=b[q],X=n.getContext($,O);if(X!==null)return X}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ud}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",fe,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),G=Xt(O,b),G===null)throw Xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,ze,be,xt,Xe,C,M,B,ae,se,le,Ce,he,xe,Ue,Ye,re,lt,$e,He,Re,_e,P,ue;function Ae(){Le=new Qw(G),ze=new jw(G,Le,e),Le.init(ze),_e=new Ob(G,Le,ze),be=new Nb(G,Le,ze),xt=new eT(G),Xe=new yb,C=new Ib(G,Le,be,Xe,ze,_e,xt),M=new Yw(g),B=new Kw(g),ae=new l1(G,ze),P=new Gw(G,Le,ae,ze),se=new Zw(G,ae,xt,P),le=new rT(G,se,ae,xt),$e=new iT(G,ze,C),Ye=new Xw(Xe),Ce=new _b(g,M,B,Le,ze,P,Ye),he=new Bb(g,Xe),xe=new Mb,Ue=new Cb(Le,ze),lt=new Vw(g,M,B,be,le,d,l),re=new Ub(g,le,ze),ue=new Hb(G,xt,ze,be),He=new Ww(G,Le,xt,ze),Re=new Jw(G,Le,xt,ze),xt.programs=Ce.programs,g.capabilities=ze,g.extensions=Le,g.properties=Xe,g.renderLists=xe,g.shadowMap=re,g.state=be,g.info=xt}Ae();const Se=new kb(g,G);this.xr=Se,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(V,Y,!1))},this.getSize=function(b){return b.set(V,Y)},this.setSize=function(b,O,q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Y=O,n.width=Math.floor(b*ee),n.height=Math.floor(O*ee),q===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(V*ee,Y*ee).floor()},this.setDrawingBufferSize=function(b,O,q){V=b,Y=O,ee=q,n.width=Math.floor(b*q),n.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,O,q,$){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,O,q,$),be.viewport(w.copy(j).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,O,q,$){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,q,$),be.scissor(z.copy(J).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){be.setScissorTest(ie=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(b=!0,O=!0,q=!0){let $=0;if(b){let X=!1;if(T!==null){const ye=T.texture.format;X=ye===fx||ye===ux||ye===cx}if(X){const ye=T.texture.type,Pe=ye===_r||ye===cr||ye===fd||ye===qr||ye===ax||ye===lx,ke=lt.getClearColor(),Ve=lt.getClearAlpha(),Qe=ke.r,je=ke.g,qe=ke.b;Pe?(m[0]=Qe,m[1]=je,m[2]=qe,m[3]=Ve,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=Qe,x[1]=je,x[2]=qe,x[3]=Ve,G.clearBufferiv(G.COLOR,0,x))}else $|=G.COLOR_BUFFER_BIT}O&&($|=G.DEPTH_BUFFER_BIT),q&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),Ue.dispose(),Xe.dispose(),M.dispose(),B.dispose(),le.dispose(),P.dispose(),ue.dispose(),Ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",bt),Se.removeEventListener("sessionend",st),Me&&(Me.dispose(),Me=null),Ut.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=xt.autoReset,O=re.enabled,q=re.autoUpdate,$=re.needsUpdate,X=re.type;Ae(),xt.autoReset=b,re.enabled=O,re.autoUpdate=q,re.needsUpdate=$,re.type=X}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){const O=b.target;O.removeEventListener("dispose",me),Oe(O)}function Oe(b){Ne(b),Xe.remove(b)}function Ne(b){const O=Xe.get(b).programs;O!==void 0&&(O.forEach(function(q){Ce.releaseProgram(q)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,$,X,ye){O===null&&(O=Ie);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,ke=Da(b,O,q,$,X);be.setMaterial($,Pe);let Ve=q.index,Qe=1;if($.wireframe===!0){if(Ve=se.getWireframeAttribute(q),Ve===void 0)return;Qe=2}const je=q.drawRange,qe=q.attributes.position;let Ct=je.start*Qe,dn=(je.start+je.count)*Qe;ye!==null&&(Ct=Math.max(Ct,ye.start*Qe),dn=Math.min(dn,(ye.start+ye.count)*Qe)),Ve!==null?(Ct=Math.max(Ct,0),dn=Math.min(dn,Ve.count)):qe!=null&&(Ct=Math.max(Ct,0),dn=Math.min(dn,qe.count));const Bt=dn-Ct;if(Bt<0||Bt===1/0)return;P.setup(X,$,ke,q,Ve);let pn,St=He;if(Ve!==null&&(pn=ae.get(Ve),St=Re,St.setIndex(pn)),X.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*it()),St.setMode(G.LINES)):St.setMode(G.TRIANGLES);else if(X.isLine){let nt=$.linewidth;nt===void 0&&(nt=1),be.setLineWidth(nt*it()),X.isLineSegments?St.setMode(G.LINES):X.isLineLoop?St.setMode(G.LINE_LOOP):St.setMode(G.LINE_STRIP)}else X.isPoints?St.setMode(G.POINTS):X.isSprite&&St.setMode(G.TRIANGLES);if(X.isBatchedMesh)St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)St.renderInstances(Ct,Bt,X.count);else if(q.isInstancedBufferGeometry){const nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Na=Math.min(q.instanceCount,nt);St.renderInstances(Ct,Bt,Na)}else St.render(Ct,Bt)};function Ke(b,O,q){b.transparent===!0&&b.side===ti&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,cs(b,O,q),b.side=Mr,b.needsUpdate=!0,cs(b,O,q),b.side=ti):cs(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),p=Ue.get(q),p.init(),v.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(g._useLegacyLights);const $=new Set;return b.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const ke=ye[Pe];Ke(ke,q,X),$.add(ke)}else Ke(ye,q,X),$.add(ye)}),v.pop(),p=null,$},this.compileAsync=function(b,O,q=null){const $=this.compile(b,O,q);return new Promise(X=>{function ye(){if($.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){X(b);return}setTimeout(ye,10)}Le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ze=null;function _t(b){Ze&&Ze(b)}function bt(){Ut.stop()}function st(){Ut.start()}const Ut=new bx;Ut.setAnimationLoop(_t),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){Ze=b,Se.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},Se.addEventListener("sessionstart",bt),Se.addEventListener("sessionend",st),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,O,T),p=Ue.get(b,v.length),p.init(),v.push(p),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,ne=Ye.init(this.clippingPlanes,ve),_=xe.get(b,u.length),_.init(),u.push(_),sn(b,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(I,k),this.info.render.frame++,ne===!0&&Ye.beginShadows();const q=p.state.shadowsArray;if(re.render(q,b,O),ne===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,b),p.setupLights(g._useLegacyLights),O.isArrayCamera){const $=O.cameras;for(let X=0,ye=$.length;X<ye;X++){const Pe=$[X];as(_,b,Pe,Pe.viewport)}}else as(_,b,O);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(g,b,O),P.resetDefaultState(),U=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function sn(b,O,q,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){$&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const Pe=le.update(b),ke=b.material;ke.visible&&_.push(b,Pe,ke,q,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Pe=le.update(b),ke=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(ke)){const Ve=Pe.groups;for(let Qe=0,je=Ve.length;Qe<je;Qe++){const qe=Ve[Qe],Ct=ke[qe.materialIndex];Ct&&Ct.visible&&_.push(b,Pe,Ct,q,We.z,qe)}}else ke.visible&&_.push(b,Pe,ke,q,We.z,null)}}const ye=b.children;for(let Pe=0,ke=ye.length;Pe<ke;Pe++)sn(ye[Pe],O,q,$)}function as(b,O,q,$){const X=b.opaque,ye=b.transmissive,Pe=b.transparent;p.setupLightsView(q),ne===!0&&Ye.setGlobalState(g.clippingPlanes,q),ye.length>0&&yi(X,ye,O,q),$&&be.viewport(w.copy($)),X.length>0&&Ar(X,O,q),ye.length>0&&Ar(ye,O,q),Pe.length>0&&Ar(Pe,O,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function yi(b,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ye=ze.isWebGL2;Me===null&&(Me=new si(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Hi:_r,minFilter:xa,samples:ye?4:0})),g.getDrawingBufferSize(Be),ye?Me.setSize(Be.x,Be.y):Me.setSize(hh(Be.x),hh(Be.y));const Pe=g.getRenderTarget();g.setRenderTarget(Me),g.getClearColor(te),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const ke=g.toneMapping;g.toneMapping=xr,Ar(b,q,$),C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me);let Ve=!1;for(let Qe=0,je=O.length;Qe<je;Qe++){const qe=O[Qe],Ct=qe.object,dn=qe.geometry,Bt=qe.material,pn=qe.group;if(Bt.side===ti&&Ct.layers.test($.layers)){const St=Bt.side;Bt.side=nn,Bt.needsUpdate=!0,ls(Ct,q,$,dn,Bt,pn),Bt.side=St,Bt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me)),g.setRenderTarget(Pe),g.setClearColor(te,N),g.toneMapping=ke}function Ar(b,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ye=b.length;X<ye;X++){const Pe=b[X],ke=Pe.object,Ve=Pe.geometry,Qe=$===null?Pe.material:$,je=Pe.group;ke.layers.test(q.layers)&&ls(ke,O,q,Ve,Qe,je)}}function ls(b,O,q,$,X,ye){b.onBeforeRender(g,O,q,$,X,ye),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(g,O,q,$,b,ye),X.transparent===!0&&X.side===ti&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,g.renderBufferDirect(q,O,$,X,b,ye),X.side=Mr,X.needsUpdate=!0,g.renderBufferDirect(q,O,$,X,b,ye),X.side=ti):g.renderBufferDirect(q,O,$,X,b,ye),b.onAfterRender(g,O,q,$,X,ye)}function cs(b,O,q){O.isScene!==!0&&(O=Ie);const $=Xe.get(b),X=p.state.lights,ye=p.state.shadowsArray,Pe=X.state.version,ke=Ce.getParameters(b,X.state,ye,O,q),Ve=Ce.getProgramCacheKey(ke);let Qe=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||$.environment),Qe===void 0&&(b.addEventListener("dispose",me),Qe=new Map,$.programs=Qe);let je=Qe.get(Ve);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Pe)return xo(b,ke),je}else ke.uniforms=Ce.getUniforms(b),b.onBuild(q,ke,g),b.onBeforeCompile(ke,g),je=Ce.acquireProgram(ke,Ve),Qe.set(Ve,je),$.uniforms=ke.uniforms;const qe=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=Ye.uniform),xo(b,ke),$.needsLights=Sd(b),$.lightsStateVersion=Pe,$.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function La(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Yl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function xo(b,O){const q=Xe.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Da(b,O,q,$,X){O.isScene!==!0&&(O=Ie),C.resetTextureUnits();const ye=O.fog,Pe=$.isMeshStandardMaterial?O.environment:null,ke=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,Ve=($.isMeshStandardMaterial?B:M).get($.envMap||Pe),Qe=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!q.morphAttributes.position,Ct=!!q.morphAttributes.normal,dn=!!q.morphAttributes.color;let Bt=xr;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Bt=g.toneMapping);const pn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=pn!==void 0?pn.length:0,nt=Xe.get($),Na=p.state.lights;if(ne===!0&&(ve===!0||b!==S)){const Ot=b===S&&$.id===U;Ye.setState($,b,Ot)}let pt=!1;$.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Na.state.version||nt.outputColorSpace!==ke||X.isBatchedMesh&&nt.batching===!1||!X.isBatchedMesh&&nt.batching===!0||X.isInstancedMesh&&nt.instancing===!1||!X.isInstancedMesh&&nt.instancing===!0||X.isSkinnedMesh&&nt.skinning===!1||!X.isSkinnedMesh&&nt.skinning===!0||X.isInstancedMesh&&nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&nt.instancingColor===!1&&X.instanceColor!==null||nt.envMap!==Ve||$.fog===!0&&nt.fog!==ye||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ye.numPlanes||nt.numIntersection!==Ye.numIntersection)||nt.vertexAlphas!==Qe||nt.vertexTangents!==je||nt.morphTargets!==qe||nt.morphNormals!==Ct||nt.morphColors!==dn||nt.toneMapping!==Bt||ze.isWebGL2===!0&&nt.morphTargetsCount!==St)&&(pt=!0):(pt=!0,nt.__version=$.version);let mn=nt.currentProgram;pt===!0&&(mn=cs($,O,X));let _o=!1,zn=!1,Cr=!1;const Ht=mn.getUniforms(),li=nt.uniforms;if(be.useProgram(mn.program)&&(_o=!0,zn=!0,Cr=!0),$.id!==U&&(U=$.id,zn=!0),_o||S!==b){Ht.setValue(G,"projectionMatrix",b.projectionMatrix),Ht.setValue(G,"viewMatrix",b.matrixWorldInverse);const Ot=Ht.map.cameraPosition;Ot!==void 0&&Ot.setValue(G,We.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&Ht.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,zn=!0,Cr=!0)}if(X.isSkinnedMesh){Ht.setOptional(G,X,"bindMatrix"),Ht.setOptional(G,X,"bindMatrixInverse");const Ot=X.skeleton;Ot&&(ze.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ht.setValue(G,"boneTexture",Ot.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ht.setOptional(G,X,"batchingTexture"),Ht.setValue(G,"batchingTexture",X._matricesTexture,C));const yo=q.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&ze.isWebGL2===!0)&&$e.update(X,q,mn),(zn||nt.receiveShadow!==X.receiveShadow)&&(nt.receiveShadow=X.receiveShadow,Ht.setValue(G,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(li.envMap.value=Ve,li.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),zn&&(Ht.setValue(G,"toneMappingExposure",g.toneMappingExposure),nt.needsLights&&Ua(li,Cr),ye&&$.fog===!0&&he.refreshFogUniforms(li,ye),he.refreshMaterialUniforms(li,$,ee,Y,Me),Yl.upload(G,La(nt),li,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yl.upload(G,La(nt),li,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(G,"center",X.center),Ht.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(G,"normalMatrix",X.normalMatrix),Ht.setValue(G,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ot=$.uniformsGroups;for(let Rr=0,Ia=Ot.length;Rr<Ia;Rr++)if(ze.isWebGL2){const So=Ot[Rr];ue.update(So,mn),ue.bind(So,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function Ua(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Sd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,q){Xe.get(b.texture).__webglTexture=O,Xe.get(b.depthTexture).__webglTexture=q;const $=Xe.get(b);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const q=Xe.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){T=b,A=O,E=q;let $=!0,X=null,ye=!1,Pe=!1;if(b){const Ve=Xe.get(b);Ve.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):Ve.__webglFramebuffer===void 0?C.setupRenderTarget(b):Ve.__hasExternalTextures&&C.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Pe=!0);const je=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[O])?X=je[O][q]:X=je[O],ye=!0):ze.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?X=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?X=je[q]:X=je,w.copy(b.viewport),z.copy(b.scissor),H=b.scissorTest}else w.copy(j).multiplyScalar(ee).floor(),z.copy(J).multiplyScalar(ee).floor(),H=ie;if(be.bindFramebuffer(G.FRAMEBUFFER,X)&&ze.drawBuffers&&$&&be.drawBuffers(b,X),be.viewport(w),be.scissor(z),be.setScissorTest(H),ye){const Ve=Xe.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ve.__webglTexture,q)}else if(Pe){const Ve=Xe.get(b.texture),Qe=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ve.__webglTexture,q||0,Qe)}U=-1},this.readRenderTargetPixels=function(b,O,q,$,X,ye,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke){be.bindFramebuffer(G.FRAMEBUFFER,ke);try{const Ve=b.texture,Qe=Ve.format,je=Ve.type;if(Qe!==Gn&&_e.convert(Qe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=je===Hi&&(Le.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Le.has("EXT_color_buffer_float"));if(je!==_r&&_e.convert(je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Ti&&(ze.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&q>=0&&q<=b.height-X&&G.readPixels(O,q,$,X,_e.convert(Qe),_e.convert(je),ye)}finally{const Ve=T!==null?Xe.get(T).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(b,O,q=0){const $=Math.pow(2,-q),X=Math.floor(O.image.width*$),ye=Math.floor(O.image.height*$);C.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,b.x,b.y,X,ye),be.unbindTexture()},this.copyTextureToTexture=function(b,O,q,$=0){const X=O.image.width,ye=O.image.height,Pe=_e.convert(q.format),ke=_e.convert(q.type);C.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,b.x,b.y,X,ye,Pe,ke,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Pe,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,b.x,b.y,Pe,ke,O.image),$===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q,$,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,ke=b.max.z-b.min.z+1,Ve=_e.convert($.format),Qe=_e.convert($.type);let je;if($.isData3DTexture)C.setTexture3D($,0),je=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)C.setTexture2DArray($,0),je=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const qe=G.getParameter(G.UNPACK_ROW_LENGTH),Ct=G.getParameter(G.UNPACK_IMAGE_HEIGHT),dn=G.getParameter(G.UNPACK_SKIP_PIXELS),Bt=G.getParameter(G.UNPACK_SKIP_ROWS),pn=G.getParameter(G.UNPACK_SKIP_IMAGES),St=q.isCompressedTexture?q.mipmaps[X]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(je,X,O.x,O.y,O.z,ye,Pe,ke,Ve,Qe,St.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(je,X,O.x,O.y,O.z,ye,Pe,ke,Ve,St.data)):G.texSubImage3D(je,X,O.x,O.y,O.z,ye,Pe,ke,Ve,Qe,St),G.pixelStorei(G.UNPACK_ROW_LENGTH,qe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct),G.pixelStorei(G.UNPACK_SKIP_PIXELS,dn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Bt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pn),X===0&&$.generateMipmaps&&G.generateMipmap(je),be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,be.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===hd?"display-p3":"srgb",n.unpackColorSpace=vt.workingColorSpace===Gc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===cn?Kr:dx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kr?cn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vb extends Nx{}Vb.prototype.isWebGL1Renderer=!0;class gd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=n}clone(){return new gd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ix extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Gb extends On{constructor(e=null,n=1,i=1,r,s,o,a,l,c=zt,f=zt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ox extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tg=new R,bg=new R,Ag=new jt,tf=new Ca,bl=new Aa;class Wb extends Sn{constructor(e=new Zt,n=new Ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tg.fromBufferAttribute(n,r-1),bg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tg.distanceTo(bg);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Ag.copy(r).invert(),tf.copy(e.ray).applyMatrix4(Ag);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,f=new R,h=new R,d=new R,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let g=u,y=v-1;g<y;g+=m){const A=x.getX(g),E=x.getX(g+1);if(c.fromBufferAttribute(p,A),f.fromBufferAttribute(p,E),tf.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||n.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let g=u,y=v-1;g<y;g+=m){if(c.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),tf.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||n.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Cg=new R,Rg=new R;class jb extends Wb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Cg.fromBufferAttribute(n,r),Rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cg.distanceTo(Rg);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xb extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pg=new jt,ph=new Ca,Al=new Aa,Cl=new R;class Fx extends Sn{constructor(e=new Zt,n=new Xb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;Pg.copy(r).invert(),ph.copy(e.ray).applyMatrix4(Pg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=d,_=m;x<_;x++){const p=c.getX(x);Cl.fromBufferAttribute(h,p),Lg(Cl,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,_=m;x<_;x++)Cl.fromBufferAttribute(h,x),Lg(Cl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lg(t,e,n,i,r,s,o){const a=ph.distanceSqToPoint(t);if(a<n){const l=new R;ph.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,m=(o-f)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new jt;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(tn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(tn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zx extends qi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*h+this.aX,c=d*h+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yb extends zx{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,m*=f,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Rl=new R,nf=new vd,rf=new vd,sf=new vd;class Tc extends qi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Rl.subVectors(r[0],r[1]).add(r[0]),c=Rl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Rl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(f),m);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),nf.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,x,_,p),rf.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,x,_,p),sf.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,x,_,p)}else this.curveType==="catmullrom"&&(nf.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),rf.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),sf.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return i.set(nf.calc(l),rf.calc(l),sf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function qb(t,e){const n=1-t;return n*n*e}function $b(t,e){return 2*(1-t)*t*e}function Kb(t,e){return t*t*e}function Zo(t,e,n,i){return qb(t,e)+$b(t,n)+Kb(t,i)}function Qb(t,e){const n=1-t;return n*n*n*e}function Zb(t,e){const n=1-t;return 3*n*n*t*e}function Jb(t,e){return 3*(1-t)*t*t*e}function eA(t,e){return t*t*t*e}function Jo(t,e,n,i,r){return Qb(t,e)+Zb(t,n)+Jb(t,i)+eA(t,r)}class tA extends qi{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jo(e,r.x,s.x,o.x,a.x),Jo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nA extends qi{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Jo(e,r.x,s.x,o.x,a.x),Jo(e,r.y,s.y,o.y,a.y),Jo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iA extends qi{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rA extends qi{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sA extends qi{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Zo(e,r.x,s.x,o.x),Zo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kx extends qi{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Zo(e,r.x,s.x,o.x),Zo(e,r.y,s.y,o.y),Zo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oA extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Dg(a,l.x,c.x,f.x,h.x),Dg(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var aA=Object.freeze({__proto__:null,ArcCurve:Yb,CatmullRomCurve3:Tc,CubicBezierCurve:tA,CubicBezierCurve3:nA,EllipseCurve:zx,LineCurve:iA,LineCurve3:rA,QuadraticBezierCurve:sA,QuadraticBezierCurve3:kx,SplineCurve:oA});class xd extends Zt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let x=0;const _=[],p=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(m,2));function v(){const y=new R,A=new R;let E=0;const T=(n-e)/i;for(let U=0;U<=s;U++){const S=[],w=U/s,z=w*(n-e)+e;for(let H=0;H<=r;H++){const te=H/r,N=te*l+a,V=Math.sin(N),Y=Math.cos(N);A.x=z*V,A.y=-w*i+p,A.z=z*Y,h.push(A.x,A.y,A.z),y.set(V,T,Y).normalize(),d.push(y.x,y.y,y.z),m.push(te,1-w),S.push(x++)}_.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const w=_[S][U],z=_[S+1][U],H=_[S+1][U+1],te=_[S][U+1];f.push(w,z,te),f.push(z,H,te),E+=6}c.addGroup(u,E,0),u+=E}function g(y){const A=x,E=new de,T=new R;let U=0;const S=y===!0?e:n,w=y===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),x++;const z=x;for(let H=0;H<=r;H++){const N=H/r*l+a,V=Math.cos(N),Y=Math.sin(N);T.x=S*Y,T.y=p*w,T.z=S*V,h.push(T.x,T.y,T.z),d.push(0,w,0),E.x=V*.5+.5,E.y=Y*.5*w+.5,m.push(E.x,E.y),x++}for(let H=0;H<r;H++){const te=A+H,N=z+H;y===!0?f.push(N,N+1,te):f.push(N+1,N,te),U+=3}c.addGroup(u,U,y===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yc extends Zt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new R,y=new R,A=new R;for(let E=0;E<n.length;E+=3)m(n[E+0],g),m(n[E+1],y),m(n[E+2],A),l(g,y,A,v)}function l(v,g,y,A){const E=A+1,T=[];for(let U=0;U<=E;U++){T[U]=[];const S=v.clone().lerp(y,U/E),w=g.clone().lerp(y,U/E),z=E-U;for(let H=0;H<=z;H++)H===0&&U===E?T[U][H]=S:T[U][H]=S.clone().lerp(w,H/z)}for(let U=0;U<E;U++)for(let S=0;S<2*(E-U)-1;S++){const w=Math.floor(S/2);S%2===0?(d(T[U][w+1]),d(T[U+1][w]),d(T[U][w])):(d(T[U][w+1]),d(T[U+1][w+1]),d(T[U+1][w]))}}function c(v){const g=new R;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(v),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function f(){const v=new R;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const y=p(v)/2/Math.PI+.5,A=u(v)/Math.PI+.5;o.push(y,1-A)}x(),h()}function h(){for(let v=0;v<o.length;v+=6){const g=o[v+0],y=o[v+2],A=o[v+4],E=Math.max(g,y,A),T=Math.min(g,y,A);E>.9&&T<.1&&(g<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,g){const y=v*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function x(){const v=new R,g=new R,y=new R,A=new R,E=new de,T=new de,U=new de;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),A.copy(v).add(g).add(y).divideScalar(3);const z=p(A);_(E,w+0,v,z),_(T,w+2,g,z),_(U,w+4,y,z)}}function _(v,g,y,A){A<0&&v.x===1&&(o[g]=v.x-1),y.x===0&&y.z===0&&(o[g]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.vertices,e.indices,e.radius,e.details)}}class _d extends Yc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _d(e.radius,e.detail)}}const Pl=new R,Ll=new R,of=new R,Dl=new Jn;class Ul extends Zt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ko*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),d={},m=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:p,c:u}=Dl;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Dl.getNormal(of),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const g=(v+1)%3,y=h[v],A=h[g],E=Dl[f[v]],T=Dl[f[g]],U=`${y}_${A}`,S=`${A}_${y}`;S in d&&d[S]?(of.dot(d[S].normal)<=s&&(m.push(E.x,E.y,E.z),m.push(T.x,T.y,T.z)),d[S]=null):U in d||(d[U]={index0:c[v],index1:c[g],normal:of.clone()})}}for(const x in d)if(d[x]){const{index0:_,index1:p}=d[x];Pl.fromBufferAttribute(a,_),Ll.fromBufferAttribute(a,p),m.push(Pl.x,Pl.y,Pl.z),m.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new ht(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yd extends Yc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yd(e.radius,e.detail)}}class _a extends Zt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new R,d=new R,m=[],x=[],_=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const E=A/n;h.x=-e*Math.cos(r+E*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+g*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(E+y,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],y=f[u][v],A=f[u+1][v],E=f[u+1][v+1];(u!==0||o>0)&&m.push(g,y,E),(u!==i-1||l<Math.PI)&&m.push(y,A,E)}this.setIndex(m),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ea extends Zt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new R,h=new R,d=new R;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const _=x/r*s,p=m/i*Math.PI*2;h.x=(e+n*Math.cos(p))*Math.cos(_),h.y=(e+n*Math.cos(p))*Math.sin(_),h.z=n*Math.sin(p),a.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const _=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,u=(r+1)*(m-1)+x,v=(r+1)*m+x;o.push(_,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fo extends Zt{constructor(e=new kx(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new de;let f=new R;const h=[],d=[],m=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(m,2));function _(){for(let g=0;g<n;g++)p(g);p(s===!1?n:0),v(),u()}function p(g){f=e.getPointAt(g/n,f);const y=o.normals[g],A=o.binormals[g];for(let E=0;E<=r;E++){const T=E/r*Math.PI*2,U=Math.sin(T),S=-Math.cos(T);l.x=S*y.x+U*A.x,l.y=S*y.y+U*A.y,l.z=S*y.z+U*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,h.push(a.x,a.y,a.z)}}function u(){for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){const A=(r+1)*(g-1)+(y-1),E=(r+1)*g+(y-1),T=(r+1)*g+y,U=(r+1)*(g-1)+y;x.push(A,E,U),x.push(E,T,U)}}function v(){for(let g=0;g<=n;g++)for(let y=0;y<=r;y++)c.x=g/n,c.y=y/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fo(new aA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class lA extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ug extends lA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cA extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class uA extends cA{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ng(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ng();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ng(){return(typeof performance>"u"?Date:performance).now()}class fA{constructor(e,n,i=0,r=1/0){this.ray=new Ca(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return mh(e,this,i,n),i.sort(Ig),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mh(e[r],this,i,n);return i.sort(Ig),i}}function Ig(t,e){return t.distance-e.distance}function mh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)mh(r[s],e,n,!0)}}class Og{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);const Fg={type:"change"},af={type:"start"},zg={type:"end"},Nl=new Ca,kg=new Tn,hA=Math.cos(70*FM.DEG2RAD);class dA extends ss{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ue),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Fg),i.update(),s=r.NONE},this.update=function(){const P=new R,ue=new ns().setFromUnitVectors(e.up,new R(0,1,0)),Ae=ue.clone().invert(),Se=new R,oe=new ns,D=new R,fe=2*Math.PI;return function(Oe=null){const Ne=i.object.position;P.copy(Ne).sub(i.target),P.applyQuaternion(ue),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&H(w(Oe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ke=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite(Ke)&&isFinite(Ze)&&(Ke<-Math.PI?Ke+=fe:Ke>Math.PI&&(Ke-=fe),Ze<-Math.PI?Ze+=fe:Ze>Math.PI&&(Ze-=fe),Ke<=Ze?a.theta=Math.max(Ke,Math.min(Ze,a.theta)):a.theta=a.theta>(Ke+Ze)/2?Math.max(Ke,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&E||i.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ae),Ne.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let _t=!1;if(i.zoomToCursor&&E){let bt=null;if(i.object.isPerspectiveCamera){const st=P.length();bt=j(st*c);const Ut=st-bt;i.object.position.addScaledVector(y,Ut),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const st=new R(A.x,A.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0;const Ut=new R(A.x,A.y,0);Ut.unproject(i.object),i.object.position.sub(Ut).add(st),i.object.updateMatrixWorld(),bt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(bt).add(i.object.position):(Nl.origin.copy(i.object.position),Nl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Nl.direction))<hA?e.lookAt(i.target):(kg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Nl.intersectPlane(kg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0);return c=1,E=!1,_t||Se.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o||D.distanceToSquared(i.target)>0?(i.dispatchEvent(Fg),Se.copy(i.object.position),oe.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",lt),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Og,l=new Og;let c=1;const f=new R,h=new de,d=new de,m=new de,x=new de,_=new de,p=new de,u=new de,v=new de,g=new de,y=new R,A=new de;let E=!1;const T=[],U={};let S=!1;function w(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function z(P){const ue=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*ue)}function H(P){l.theta-=P}function te(P){l.phi-=P}const N=function(){const P=new R;return function(Ae,Se){P.setFromMatrixColumn(Se,0),P.multiplyScalar(-Ae),f.add(P)}}(),V=function(){const P=new R;return function(Ae,Se){i.screenSpacePanning===!0?P.setFromMatrixColumn(Se,1):(P.setFromMatrixColumn(Se,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ae),f.add(P)}}(),Y=function(){const P=new R;return function(Ae,Se){const oe=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;P.copy(D).sub(i.target);let fe=P.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ae*fe/oe.clientHeight,i.object.matrix),V(2*Se*fe/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ae*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),V(Se*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(P,ue){if(!i.zoomToCursor)return;E=!0;const Ae=i.domElement.getBoundingClientRect(),Se=P-Ae.left,oe=ue-Ae.top,D=Ae.width,fe=Ae.height;A.x=Se/D*2-1,A.y=-(oe/fe)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function J(P){h.set(P.clientX,P.clientY)}function ie(P){k(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function Q(P){x.set(P.clientX,P.clientY)}function ne(P){d.set(P.clientX,P.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;H(2*Math.PI*m.x/ue.clientHeight),te(2*Math.PI*m.y/ue.clientHeight),h.copy(d),i.update()}function ve(P){v.set(P.clientX,P.clientY),g.subVectors(v,u),g.y>0?ee(z(g.y)):g.y<0&&I(z(g.y)),u.copy(v),i.update()}function Me(P){_.set(P.clientX,P.clientY),p.subVectors(_,x).multiplyScalar(i.panSpeed),Y(p.x,p.y),x.copy(_),i.update()}function Te(P){k(P.clientX,P.clientY),P.deltaY<0?I(z(P.deltaY)):P.deltaY>0&&ee(z(P.deltaY)),i.update()}function Be(P){let ue=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?te(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?te(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),ue=!0;break}ue&&(P.preventDefault(),i.update())}function We(P){if(T.length===1)h.set(P.pageX,P.pageY);else{const ue=_e(P),Ae=.5*(P.pageX+ue.x),Se=.5*(P.pageY+ue.y);h.set(Ae,Se)}}function Ie(P){if(T.length===1)x.set(P.pageX,P.pageY);else{const ue=_e(P),Ae=.5*(P.pageX+ue.x),Se=.5*(P.pageY+ue.y);x.set(Ae,Se)}}function it(P){const ue=_e(P),Ae=P.pageX-ue.x,Se=P.pageY-ue.y,oe=Math.sqrt(Ae*Ae+Se*Se);u.set(0,oe)}function G(P){i.enableZoom&&it(P),i.enablePan&&Ie(P)}function Xt(P){i.enableZoom&&it(P),i.enableRotate&&We(P)}function Le(P){if(T.length==1)d.set(P.pageX,P.pageY);else{const Ae=_e(P),Se=.5*(P.pageX+Ae.x),oe=.5*(P.pageY+Ae.y);d.set(Se,oe)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;H(2*Math.PI*m.x/ue.clientHeight),te(2*Math.PI*m.y/ue.clientHeight),h.copy(d)}function ze(P){if(T.length===1)_.set(P.pageX,P.pageY);else{const ue=_e(P),Ae=.5*(P.pageX+ue.x),Se=.5*(P.pageY+ue.y);_.set(Ae,Se)}p.subVectors(_,x).multiplyScalar(i.panSpeed),Y(p.x,p.y),x.copy(_)}function be(P){const ue=_e(P),Ae=P.pageX-ue.x,Se=P.pageY-ue.y,oe=Math.sqrt(Ae*Ae+Se*Se);v.set(0,oe),g.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),ee(g.y),u.copy(v);const D=(P.pageX+ue.x)*.5,fe=(P.pageY+ue.y)*.5;k(D,fe)}function xt(P){i.enableZoom&&be(P),i.enablePan&&ze(P)}function Xe(P){i.enableZoom&&be(P),i.enableRotate&&Le(P)}function C(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",B)),$e(P),P.pointerType==="touch"?Ye(P):ae(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?re(P):se(P))}function B(P){He(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(zg),s=r.NONE}function ae(P){let ue;switch(P.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case ds.DOLLY:if(i.enableZoom===!1)return;ie(P),s=r.DOLLY;break;case ds.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Q(P),s=r.PAN}else{if(i.enableRotate===!1)return;J(P),s=r.ROTATE}break;case ds.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;J(P),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(af)}function se(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ne(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ve(P);break;case r.PAN:if(i.enablePan===!1)return;Me(P);break}}function le(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(af),Te(Ce(P)),i.dispatchEvent(zg))}function Ce(P){const ue=P.deltaMode,Ae={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ue){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return P.ctrlKey&&!S&&(Ae.deltaY*=10),Ae}function he(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ue(P){i.enabled===!1||i.enablePan===!1||Be(P)}function Ye(P){switch(Re(P),T.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;We(P),s=r.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;Ie(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(af)}function re(P){switch(Re(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Le(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ze(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xt(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xe(P),i.update();break;default:s=r.NONE}}function lt(P){i.enabled!==!1&&P.preventDefault()}function $e(P){T.push(P.pointerId)}function He(P){delete U[P.pointerId];for(let ue=0;ue<T.length;ue++)if(T[ue]==P.pointerId){T.splice(ue,1);return}}function Re(P){let ue=U[P.pointerId];ue===void 0&&(ue=new de,U[P.pointerId]=ue),ue.set(P.pageX,P.pageY)}function _e(P){const ue=P.pointerId===T[0]?T[1]:T[0];return U[ue]}i.domElement.addEventListener("contextmenu",lt),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",le,{passive:!1}),document.addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const Hx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Pa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pA=new Ax(-1,1,1,-1,0,1);class mA extends Zt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const gA=new mA;class Vx{constructor(e){this._mesh=new Rt(gA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bo extends Pa{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wc.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vx(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bg extends Pa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class vA extends Pa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new de);this._width=i.width,this._height=i.height,n=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bo(Hx),this.copyPass.material.blending=Bi,this.clock=new Bx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bg!==void 0&&(o instanceof Bg?i=!0:o instanceof vA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _A extends Pa{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const yA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ho extends Pa{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,o,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new si(s,o,{type:Hi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new si(s,o,{type:Hi});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=yA;this.highPassUniforms=wc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Hx;this.copyUniforms=wc.clone(f.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Er,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new Pn,this.fsQuad=new Vx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new de(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ho.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ho.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ho.BlurDirectionX=new de(1,0);ho.BlurDirectionY=new de(0,1);class SA{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=Ti;const s=new Ix,o=new pd;o.position.z=1;const a={passThruTexture:{value:null}},l=h(m(),a),c=new Rt(new jc(2,2),l);s.add(c),this.setDataType=function(x){return r=x,this},this.addVariable=function(x,_,p){const u=this.createShaderMaterial(_),v={name:x,initialValueTexture:p,material:u,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:zt,magFilter:zt};return this.variables.push(v),v},this.setVariableDependencies=function(x,_){x.dependencies=_},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const _=this.variables[x];_.renderTargets[0]=this.createRenderTarget(e,n,_.wrapS,_.wrapT,_.minFilter,_.magFilter),_.renderTargets[1]=this.createRenderTarget(e,n,_.wrapS,_.wrapT,_.minFilter,_.magFilter),this.renderTexture(_.initialValueTexture,_.renderTargets[0]),this.renderTexture(_.initialValueTexture,_.renderTargets[1]);const p=_.material,u=p.uniforms;if(_.dependencies!==null)for(let v=0;v<_.dependencies.length;v++){const g=_.dependencies[v];if(g.name!==_.name){let y=!1;for(let A=0;A<this.variables.length;A++)if(g.name===this.variables[A].name){y=!0;break}if(!y)return"Variable dependency not found. Variable="+_.name+", dependency="+g.name}u[g.name]={value:null},p.fragmentShader=`
uniform sampler2D `+g.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,_=this.currentTextureIndex===0?1:0;for(let p=0,u=this.variables.length;p<u;p++){const v=this.variables[p];if(v.dependencies!==null){const g=v.material.uniforms;for(let y=0,A=v.dependencies.length;y<A;y++){const E=v.dependencies[y];g[E.name].value=E.renderTargets[x].texture}}this.doRenderTarget(v.material,v.renderTargets[_])}this.currentTextureIndex=_},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const x=this.variables;for(let _=0;_<x.length;_++){const p=x[_];p.initialValueTexture&&p.initialValueTexture.dispose();const u=p.renderTargets;for(let v=0;v<u.length;v++)u[v].dispose()}};function f(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=f;function h(x,_){_=_||{};const p=new $t({name:"GPUComputationShader",uniforms:_,vertexShader:d(),fragmentShader:x});return f(p),p}this.createShaderMaterial=h,this.createRenderTarget=function(x,_,p,u,v,g){return x=x||e,_=_||n,p=p||Vn,u=u||Vn,v=v||zt,g=g||zt,new si(x,_,{wrapS:p,wrapT:u,minFilter:v,magFilter:g,format:Gn,type:r,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*n*4),_=new Gb(x,e,n,Gn,Ti);return _.needsUpdate=!0,_},this.renderTexture=function(x,_){a.passThruTexture.value=x,this.doRenderTarget(l,_),a.passThruTexture.value=null},this.doRenderTarget=function(x,_){const p=i.getRenderTarget(),u=i.xr.enabled,v=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,c.material=x,i.setRenderTarget(_),i.render(s,o),c.material=l,i.xr.enabled=u,i.shadowMap.autoUpdate=v,i.setRenderTarget(p)};function d(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function m(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const MA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

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
	`},on={"Northern Lights":{primary:"#00ffaa",secondary:"#00aaff",accent:"#aa55ff",highlight:"#ffffff",background:["#0a0a1a","#051515","#0a1a1a"]},"Deep Ocean":{primary:"#0055ff",secondary:"#00ffff",accent:"#8800ff",highlight:"#ffffff",background:["#000515","#001025","#000520"]},"Solar Corona":{primary:"#ff8800",secondary:"#ffff00",accent:"#ff2200",highlight:"#ffffff",background:["#1a0a00","#150500","#1a0500"]},Synthwave:{primary:"#ff00aa",secondary:"#00ffff",accent:"#aa00ff",highlight:"#ffaaff",background:["#0a0015","#150020","#0a0520"]},"Monochrome Zen":{primary:"#ffffff",secondary:"#aabbcc",accent:"#8899aa",highlight:"#ffffff",background:["#0a0a0f","#0f0f15","#0a0a12"]},"Ember & Ash":{primary:"#ff3300",secondary:"#ff8800",accent:"#ffaa00",highlight:"#ffffff",background:["#0a0505","#150a05","#0a0805"]}},Hg={"Cosmic Dance":{description:"Ethereal deep ocean with swirling rings",palette:"Deep Ocean",background:"nebula",timeScale:.8,bloom:1.8,structures:[{type:"rings",scale:1.2,position:[0,0,0],rotationSpeed:.3},{type:"icosahedron",scale:.4,position:[0,0,0],rotationSpeed:.2}],ribbons:[{type:"toroidal",thickness:.06}],waveGrid:!0,waveAmplitude:1.5},"Solar Flare":{description:"Intense fiery energy burst",palette:"Solar Corona",background:"gradient",timeScale:1.3,bloom:2.2,structures:[{type:"torus",scale:.8,position:[0,0,0],rotationSpeed:.5}],ribbons:[{type:"spiral",thickness:.1},{type:"helix",thickness:.05}],waveGrid:!0,waveAmplitude:2},"Digital Dreams":{description:"Synthwave aesthetic with geometric precision",palette:"Synthwave",background:"nebula",timeScale:1,bloom:2,structures:[{type:"helix",scale:1.5,position:[0,0,0],rotationSpeed:.15},{type:"mobius",scale:.6,position:[2,0,0],rotationSpeed:.4}],ribbons:[{type:"lissajous",thickness:.08}],waveGrid:!0,waveAmplitude:.8},"Zen Garden":{description:"Minimal and meditative monochrome",palette:"Monochrome Zen",background:"gradient",timeScale:.5,bloom:1.2,structures:[{type:"icosahedron",scale:1,position:[0,0,0],rotationSpeed:.1}],ribbons:[],waveGrid:!0,waveAmplitude:.5},"Aurora Borealis":{description:"Northern lights dancing in the sky",palette:"Northern Lights",background:"nebula",timeScale:.7,bloom:1.5,structures:[{type:"rings",scale:1.8,position:[0,0,0],rotationSpeed:.08}],ribbons:[{type:"helix",thickness:.12},{type:"toroidal",thickness:.04}],waveGrid:!0,waveAmplitude:1.2},"Ember Storm":{description:"Fiery particles in chaotic motion",palette:"Ember & Ash",background:"gradient",timeScale:1.5,bloom:1.8,structures:[{type:"torus",scale:.6,position:[0,1,0],rotationSpeed:.8},{type:"torus",scale:.4,position:[0,-1,0],rotationSpeed:-.6}],ribbons:[{type:"spiral",thickness:.15}],waveGrid:!1,waveAmplitude:1},Murmuration:{description:"Flocking behavior - birds in synchronized flight",palette:"Northern Lights",background:"gradient",timeScale:1,bloom:1.4,simulationMode:"boids",boids:{separation:2,alignment:1.5,cohesion:1.2,neighborRadius:2.5,maxSpeed:5},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:1},Swarm:{description:"Dense flocking with high cohesion",palette:"Synthwave",background:"nebula",timeScale:.8,bloom:2,simulationMode:"boids",boids:{separation:.8,alignment:.8,cohesion:3,neighborRadius:3,maxSpeed:4},structures:[],ribbons:[],waveGrid:!1,waveAmplitude:.5},"Solar System":{description:"Gravitational n-body simulation",palette:"Solar Corona",background:"gradient",timeScale:.6,bloom:2.2,simulationMode:"nbody",nbody:{gravConstant:.8,softening:.5,damping:.998},structures:[{type:"icosahedron",scale:1.5,position:[0,0,0],rotationSpeed:.1,mass:5},{type:"torus",scale:.8,position:[4,0,0],rotationSpeed:.3,mass:2},{type:"rings",scale:.6,position:[-3,2,0],rotationSpeed:.2,mass:1.5}],ribbons:[],waveGrid:!1,waveAmplitude:.8},Galaxy:{description:"Massive central body with orbiting particles",palette:"Deep Ocean",background:"nebula",timeScale:.5,bloom:1.8,simulationMode:"nbody",nbody:{gravConstant:1.2,softening:.8,damping:.999},structures:[{type:"icosahedron",scale:2,position:[0,0,0],rotationSpeed:.05,mass:10}],ribbons:[],waveGrid:!1,waveAmplitude:1}},lf={" ":{action:"triggerPulse",description:"Trigger shockwave pulse"},r:{action:"randomize",description:"Randomize scene"},c:{action:"clearScene",description:"Clear all objects"},h:{action:"toggleUI",description:"Hide/show control panel"},f:{action:"toggleFullscreen",description:"Toggle fullscreen"},p:{action:"togglePause",description:"Pause/resume animation"},m:{action:"toggleMouseFollow",description:"Toggle mouse attraction"},g:{action:"toggleWaveGrid",description:"Toggle wave grid"},1:{action:"palette1",description:"Northern Lights palette"},2:{action:"palette2",description:"Deep Ocean palette"},3:{action:"palette3",description:"Solar Corona palette"},4:{action:"palette4",description:"Synthwave palette"},5:{action:"palette5",description:"Monochrome Zen palette"},6:{action:"palette6",description:"Ember & Ash palette"},"=":{action:"qualityUp",description:"Increase quality"},"-":{action:"qualityDown",description:"Decrease quality"},Escape:{action:"resetCamera",description:"Reset camera position"},"?":{action:"showHelp",description:"Show keyboard shortcuts"}},EA={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1.2}},vertexShader:`
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
  `},wA={uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.05}},vertexShader:`
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
  `},TA={uniforms:{tDiffuse:{value:null},uIntensity:{value:.003},uTime:{value:0}},vertexShader:`
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
  `},bA={"Northern Lights":{strength:1.5,radius:.6,threshold:.3},"Deep Ocean":{strength:1.8,radius:.5,threshold:.2},"Solar Corona":{strength:2.2,radius:.7,threshold:.1},Synthwave:{strength:2,radius:.5,threshold:.2},"Monochrome Zen":{strength:1.2,radius:.4,threshold:.4},"Ember & Ash":{strength:1.8,radius:.6,threshold:.2}};class AA{constructor(e,n,i=256){this.renderer=e,this.scene=n,this.SIZE=i,this.count=this.SIZE*this.SIZE,this.initComputeRenderer(),this.initParticles()}initComputeRenderer(){this.gpuCompute=new SA(this.SIZE,this.SIZE,this.renderer),this.renderer.capabilities.isWebGL2||console.warn("WebGL2 not supported, GPGPU may not work");const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",this.getPositionShader(),e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",this.getVelocityShader(),n),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.uTime={value:0},this.positionUniforms.uDelta={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uDelta={value:0},this.velocityUniforms.uNoiseScale={value:.5},this.velocityUniforms.uNoiseSpeed={value:.2},this.velocityUniforms.uSimulationMode={value:0},this.velocityUniforms.uBoidsSeparation={value:1.5},this.velocityUniforms.uBoidsAlignment={value:1},this.velocityUniforms.uBoidsCohesion={value:1},this.velocityUniforms.uBoidsNeighborRadius={value:2},this.velocityUniforms.uBoidsMaxSpeed={value:4},this.velocityUniforms.uNbodyGravConstant={value:.5},this.velocityUniforms.uNbodySoftening={value:.5},this.velocityUniforms.uNbodyDamping={value:.999},this.velocityUniforms.uStructureMasses={value:new Array(8).fill(1)},this.velocityUniforms.uAttractorPositions={value:Array.from({length:16},()=>new R(0,0,0))},this.velocityUniforms.uAttractorStrengths={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorTypes={value:new Array(16).fill(0)},this.velocityUniforms.uAttractorRadii={value:new Array(16).fill(3)},this.velocityUniforms.uAttractorCount={value:0},this.velocityUniforms.uGravityDir={value:new R(0,-1,0)},this.velocityUniforms.uGravityStrength={value:0},this.velocityUniforms.uShockwaveOrigins={value:Array.from({length:5},()=>new R(0,0,0))},this.velocityUniforms.uShockwaveRadii={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveStrengths={value:new Array(5).fill(0)},this.velocityUniforms.uShockwaveThicknesses={value:new Array(5).fill(2)},this.velocityUniforms.uShockwaveCount={value:0},this.velocityUniforms.uStructurePositions={value:Array.from({length:8},()=>new R(0,0,0))},this.velocityUniforms.uStructureRadii={value:new Array(8).fill(0)},this.velocityUniforms.uStructureCount={value:0};const i=this.gpuCompute.init();i!==null&&console.error("GPUComputationRenderer error:",i)}fillPositionTexture(e){const n=e.image.data,i=5;for(let r=0;r<n.length;r+=4){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=Math.cbrt(Math.random())*i;n[r+0]=a*Math.sin(o)*Math.cos(s),n[r+1]=a*Math.sin(o)*Math.sin(s),n[r+2]=a*Math.cos(o),n[r+3]=Math.random()*5+2}}fillVelocityTexture(e){const n=e.image.data;for(let i=0;i<n.length;i+=4)n[i+0]=(Math.random()-.5)*.5,n[i+1]=(Math.random()-.5)*.5,n[i+2]=(Math.random()-.5)*.5,n[i+3]=1}getPositionShader(){return`
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
        float damping = 0.98;
        float maxSpeed = 8.0;

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
    `}initParticles(){const e=new Zt,n=new Float32Array(this.count*3),i=new Float32Array(this.count*2);for(let s=0;s<this.count;s++){const o=s%this.SIZE/this.SIZE,a=Math.floor(s/this.SIZE)/this.SIZE;i[s*2+0]=o,i[s*2+1]=a,n[s*3+0]=0,n[s*3+1]=0,n[s*3+2]=0}e.setAttribute("position",new Fn(n,3)),e.setAttribute("reference",new Fn(i,2));const r=new $t({uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uTime:{value:0},uColor1:{value:new we(65450)},uColor2:{value:new we(43775)},uColor3:{value:new we(11163135)},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:4},uColorMode:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:Er,depthWrite:!1});this.particles=new Fx(e,r),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,n){const i=Math.min(e,.05);this.positionUniforms.uTime.value=n,this.positionUniforms.uDelta.value=i,this.velocityUniforms.uTime.value=n,this.velocityUniforms.uDelta.value=i,this.gpuCompute.compute(),this.particles.material.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.particles.material.uniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture,this.particles.material.uniforms.uTime.value=n}setAttractors(e){const n=Math.min(e.length,16);this.velocityUniforms.uAttractorCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uAttractorPositions.value[i].copy(r.position),this.velocityUniforms.uAttractorStrengths.value[i]=r.strength;const s={point:0,vortex:1,orbit:2,repulsor:3};this.velocityUniforms.uAttractorTypes.value[i]=s[r.type]||0,this.velocityUniforms.uAttractorRadii.value[i]=r.radius||3}for(let i=n;i<16;i++)this.velocityUniforms.uAttractorStrengths.value[i]=0}setGravity(e,n){this.velocityUniforms.uGravityDir.value.copy(e),this.velocityUniforms.uGravityStrength.value=n}setShockwaves(e){const n=Math.min(e.length,5);this.velocityUniforms.uShockwaveCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uShockwaveOrigins.value[i].copy(r.origin),this.velocityUniforms.uShockwaveRadii.value[i]=r.radius,this.velocityUniforms.uShockwaveStrengths.value[i]=r.strength,this.velocityUniforms.uShockwaveThicknesses.value[i]=r.thickness}for(let i=n;i<5;i++)this.velocityUniforms.uShockwaveStrengths.value[i]=0}setStructures(e){const n=Math.min(e.length,8);this.velocityUniforms.uStructureCount.value=n;for(let i=0;i<n;i++){const r=e[i];this.velocityUniforms.uStructurePositions.value[i].copy(r.position),this.velocityUniforms.uStructureRadii.value[i]=r.radius}for(let i=n;i<8;i++)this.velocityUniforms.uStructureRadii.value[i]=0}setColors(e,n,i){this.particles.material.uniforms.uColor1.value.set(e),this.particles.material.uniforms.uColor2.value.set(n),this.particles.material.uniforms.uColor3.value.set(i)}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}class Vg{constructor(e,n,i="point"){this.position=e.clone(),this.strength=n,this.type=i,this.active=!0,this.radius=3,this.vortexAxis=new R(0,1,0)}setPosition(e){this.position.copy(e)}toUniformData(){const e={point:0,vortex:1,orbit:2,repulsor:3};return{position:this.position,strength:this.active?this.strength:0,type:e[this.type]||0,radius:this.radius}}}class CA{constructor(e=5){this.shockwaves=[],this.maxShockwaves=e}trigger(e,n=10,i=2,r=8){this.shockwaves.length>=this.maxShockwaves&&this.shockwaves.shift(),this.shockwaves.push({origin:e.clone(),radius:.1,strength:n,thickness:i,expansionSpeed:r,decay:.92,active:!0})}update(e){for(let n=this.shockwaves.length-1;n>=0;n--){const i=this.shockwaves[n];i.radius+=i.expansionSpeed*e,i.strength*=i.decay,(i.radius>25||i.strength<.05)&&this.shockwaves.splice(n,1)}}getActiveShockwave(){if(this.shockwaves.length===0)return{origin:new R(0,0,0),radius:0,strength:0,thickness:1};let e=this.shockwaves[0];for(const n of this.shockwaves)n.strength>e.strength&&(e=n);return e}getAllShockwaves(){return this.shockwaves}hasActive(){return this.shockwaves.length>0}clear(){this.shockwaves=[]}}class RA{constructor(e,n={}){this.scene=e,this.config={size:128,gridScale:20,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:"#00ffaa",color2:"#00aaff",color3:"#aa55ff",opacity:.6,particleSize:2,yOffset:-5,...n},this.time=0,this.visible=!0,this.createGrid(),this.scene.add(this.mesh)}createGrid(){const e=this.config.size,n=this.config.gridScale,i=new Zt,r=new Float32Array(e*e*3),s=new Float32Array(e*e*2);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=a*e+l;r[c*3+0]=(a/e-.5)*n,r[c*3+1]=0,r[c*3+2]=(l/e-.5)*n,s[c*2+0]=a/e,s[c*2+1]=l/e}i.setAttribute("position",new Fn(r,3)),i.setAttribute("uv",new Fn(s,2));const o=new $t({uniforms:{uTime:{value:0},uWaveAmplitude:{value:this.config.waveAmplitude},uWaveFrequency:{value:this.config.waveFrequency},uWaveSpeed:{value:this.config.waveSpeed},uColor1:{value:new we(this.config.color1)},uColor2:{value:new we(this.config.color2)},uColor3:{value:new we(this.config.color3)},uOpacity:{value:this.config.opacity},uSize:{value:this.config.particleSize},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uYOffset:{value:this.config.yOffset}},vertexShader:`
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
      `,transparent:!0,blending:Er,depthWrite:!1});this.mesh=new Fx(i,o),this.mesh.frustumCulled=!1}update(e,n=1){this.time+=e*n,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uTime.value=this.time)}setVisible(e){this.visible=e,this.mesh&&(this.mesh.visible=e)}setColors(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uColor1.value.set(e),this.mesh.material.uniforms.uColor2.value.set(n),this.mesh.material.uniforms.uColor3.value.set(i))}setWaveParams(e,n,i){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uWaveAmplitude.value=e,this.mesh.material.uniforms.uWaveFrequency.value=n,this.mesh.material.uniforms.uWaveSpeed.value=i)}setOpacity(e){this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.uOpacity.value=e)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh))}}class PA{constructor(e){this.frameHistory=[],this.historyLength=60,this.currentQuality="high",this.onQualityChange=e,this.cooldown=0,this.enabled=!0,this.lastFps=60,this.presets={ultra:{particleSize:512,waveSize:192,bloom:!0,bloomStrength:2,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:55},high:{particleSize:384,waveSize:128,bloom:!0,bloomStrength:1.5,chromatic:!0,filmGrain:!0,fxaa:!0,targetFps:50},medium:{particleSize:256,waveSize:96,bloom:!0,bloomStrength:1.2,chromatic:!1,filmGrain:!1,fxaa:!0,targetFps:40},low:{particleSize:192,waveSize:64,bloom:!0,bloomStrength:1,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:30},potato:{particleSize:128,waveSize:48,bloom:!1,bloomStrength:0,chromatic:!1,filmGrain:!1,fxaa:!1,targetFps:25}},this.qualityLevels=["ultra","high","medium","low","potato"]}update(e){if(!this.enabled)return null;const n=e>0?Math.min(1/e,120):60;if(this.frameHistory.push(n),this.frameHistory.length>this.historyLength&&this.frameHistory.shift(),this.cooldown-=e,this.frameHistory.length===this.historyLength&&this.cooldown<=0){const i=this.frameHistory.reduce((s,o)=>s+o,0)/this.historyLength;this.lastFps=i;const r=this.presets[this.currentQuality];if(i<r.targetFps-10&&this.currentQuality!=="potato")return this.decreaseQuality();if(i>58&&this.currentQuality!=="ultra")return this.increaseQuality()}return null}decreaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e<this.qualityLevels.length-1?(this.currentQuality=this.qualityLevels[e+1],this.cooldown=3,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"decrease"}):null}increaseQuality(){const e=this.qualityLevels.indexOf(this.currentQuality);return e>0?(this.currentQuality=this.qualityLevels[e-1],this.cooldown=5,this.frameHistory=[],this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),{quality:this.currentQuality,preset:this.presets[this.currentQuality],direction:"increase"}):null}setQuality(e){return this.qualityLevels.includes(e)?(this.currentQuality=e,this.frameHistory=[],this.cooldown=2,this.onQualityChange&&this.onQualityChange(this.currentQuality,this.presets[this.currentQuality]),this.presets[this.currentQuality]):null}setEnabled(e){this.enabled=e}getCurrentPreset(){return this.presets[this.currentQuality]}getStats(){return{quality:this.currentQuality,fps:Math.round(this.lastFps),particleCount:Math.pow(this.presets[this.currentQuality].particleSize,2),cooldown:Math.max(0,this.cooldown).toFixed(1)}}}class cf{constructor(e,n){this.scene=e,this.config={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:"#00ffaa",...n},this.group=new js,this.group.position.copy(this.config.position),this.time=Math.random()*100,this.energyOffset=Math.random()*Math.PI*2,this.createStructure(),this.scene.add(this.group)}createStructure(){for(;this.group.children.length;){const e=this.group.children[0];this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}switch(this.config.type){case"icosahedron":this.createNestedIcosahedron();break;case"torus":this.createAnimatedTorus();break;case"rings":this.createConcentricRings();break;case"helix":this.createDNAHelix();break;case"mobius":this.createMobiusStrip();break;default:this.createNestedIcosahedron()}}createNestedIcosahedron(){const e=new we(this.config.color),n=new _d(1.5*this.config.scale,0),i=new Ul(n);this.createGlowingEdges(i,e,1.5);const r=new yd(.8*this.config.scale,this.config.complexity),s=new Ul(r),o=this.createMaterial(e),a=new Rt(r,o);a.userData.isInner=!0,this.group.add(a),this.createGlowingEdges(s,e.clone().multiplyScalar(1.5),.8);const l=new _a(.3*this.config.scale,16,16),c=new Pn({color:e,transparent:!0,opacity:.5}),f=new Rt(l,c);f.userData.isCore=!0,this.group.add(f)}createAnimatedTorus(){const e=new we(this.config.color),n=new ea(1*this.config.scale,.3*this.config.scale,16,50),i=this.createMaterial(e),r=new Rt(n,i);this.group.add(r);for(let o=0;o<3;o++){const a=new ea(.5*this.config.scale,.05*this.config.scale,8,30),l=new Pn({color:e,transparent:!0,opacity:.8}),c=new Rt(a,l);c.rotation.x=o/3*Math.PI,c.userData.rotationOffset=o,this.group.add(c)}const s=new Ul(n);this.createGlowingEdges(s,e,1)}createConcentricRings(){const e=new we(this.config.color);for(let s=0;s<4;s++){const o=(.5+s*.4)*this.config.scale,a=new ea(o,.03*this.config.scale,8,64),l=new Pn({color:e,transparent:!0,opacity:.9-s*.15}),c=new Rt(a,l);c.userData.ringIndex=s,c.rotation.x=Math.PI/2+(s%2===0?0:Math.PI/4),c.rotation.y=s/4*Math.PI/2,this.group.add(c)}const n=new _a(.2*this.config.scale,16,16),i=new Pn({color:e,transparent:!0,opacity:.8}),r=new Rt(n,i);r.userData.isCore=!0,this.group.add(r)}createDNAHelix(){const e=new we(this.config.color),n=[],i=[],r=[],s=4*this.config.scale,o=.5*this.config.scale,a=2,l=100;for(let p=0;p<=l;p++){const u=p/l,v=(u-.5)*s,g=u*a*Math.PI*2;n.push(new R(Math.cos(g)*o,v,Math.sin(g)*o)),i.push(new R(Math.cos(g+Math.PI)*o,v,Math.sin(g+Math.PI)*o)),p%10===0&&p>0&&p<l&&r.push({start:n[n.length-1].clone(),end:i[i.length-1].clone()})}const c=new Tc(n),f=new Tc(i),h=new fo(c,l,.05*this.config.scale,8,!1),d=new fo(f,l,.05*this.config.scale,8,!1),m=new Pn({color:e,transparent:!0,opacity:.9}),x=new Rt(h,m),_=new Rt(d,m.clone());this.group.add(x),this.group.add(_),r.forEach((p,u)=>{const v=new xd(.02*this.config.scale,.02*this.config.scale,p.start.distanceTo(p.end),8),g=new Pn({color:e.clone().multiplyScalar(.7),transparent:!0,opacity:.7}),y=new Rt(v,g),A=p.start.clone().add(p.end).multiplyScalar(.5);y.position.copy(A),y.lookAt(p.end),y.rotateX(Math.PI/2),y.userData.rungIndex=u,this.group.add(y)})}createMobiusStrip(){const e=new we(this.config.color),n=new Zt,i=[],r=[],s=[],o=[],a=1*this.config.scale,l=.4*this.config.scale,c=100,f=10;for(let x=0;x<=c;x++){const _=x/c*Math.PI*2;for(let p=0;p<=f;p++){const u=(p/f-.5)*l,v=(a+u*Math.cos(_/2))*Math.cos(_),g=(a+u*Math.cos(_/2))*Math.sin(_),y=u*Math.sin(_/2);i.push(v,g,y);const A=Math.cos(_)*Math.cos(_/2),E=Math.sin(_)*Math.cos(_/2),T=Math.sin(_/2);r.push(A,E,T),s.push(x/c,p/f)}}for(let x=0;x<c;x++)for(let _=0;_<f;_++){const p=x*(f+1)+_,u=p+f+1,v=p+1,g=u+1;o.push(p,u,v),o.push(u,g,v)}n.setAttribute("position",new ht(i,3)),n.setAttribute("normal",new ht(r,3)),n.setAttribute("uv",new ht(s,2)),n.setIndex(o);const h=this.createMaterial(e);h.side=ti;const d=new Rt(n,h);this.group.add(d);const m=new Ul(n,30);this.createGlowingEdges(m,e,1)}createGlowingEdges(e,n,i){e.attributes.position.array;for(let r=0;r<3;r++){const s=new Ox({color:n,transparent:!0,opacity:.6-r*.15,linewidth:1,blending:Er}),o=e.clone(),a=new jb(o,s);a.scale.setScalar(1+r*.02),a.userData.edgeLayer=r,this.group.add(a)}}createMaterial(e){switch(this.config.materialStyle){case"glass":return new Ug({color:e,transparent:!0,opacity:.3,roughness:.1,metalness:.1,transmission:.9,thickness:.5});case"holographic":return new Ug({color:e,transparent:!0,opacity:.4,roughness:.2,metalness:.8,iridescence:1,iridescenceIOR:1.5,sheen:1,sheenColor:e});case"solid":return new Pn({color:e,transparent:!0,opacity:.7});default:return new Pn({color:e,transparent:!0,opacity:.5})}}getBoundingRadius(){const e=this.config.scale||1,n=1+(this.config.pulseIntensity||.1),r={icosahedron:1.5,torus:1.3,rings:2.2,helix:2.5,mobius:1.2}[this.config.type]||1.5;return e*r*n}getPosition(){return this.group.position}update(e,n){this.time+=e*n,this.group.rotation.x+=this.config.rotationSpeed.x*e*n,this.group.rotation.y+=this.config.rotationSpeed.y*e*n,this.group.rotation.z+=this.config.rotationSpeed.z*e*n;const i=1+Math.sin(this.time*2)*this.config.pulseIntensity;this.group.scale.setScalar(i),this.group.children.forEach((r,s)=>{if(r.userData.isInner&&(r.rotation.y-=this.config.rotationSpeed.y*e*n*.5),r.userData.isCore){const o=1+Math.sin(this.time*4)*.2;r.scale.setScalar(o)}if(r.userData.ringIndex!==void 0){const o=r.userData.ringIndex*.5;r.rotation.z+=(.5+o*.2)*e*n}if(r.userData.rotationOffset!==void 0&&(r.rotation.x+=(1+r.userData.rotationOffset*.3)*e*n),r.userData.edgeLayer!==void 0){const o=Math.sin(this.time*3+this.energyOffset+r.userData.edgeLayer)*.3+.7;r.material.opacity=(.6-r.userData.edgeLayer*.15)*o}if(r.userData.rungIndex!==void 0){const o=Math.sin(this.time*5+r.userData.rungIndex*.5)*.3+.7;r.material.opacity=.7*o}})}setColor(e){this.config.color=e;const n=new we(e);this.group.children.forEach(i=>{i.material&&(i.material.color&&i.material.color.set(n),i.material.sheenColor&&i.material.sheenColor.set(n))})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class uf{constructor(e,n){this.scene=e,this.config={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.1,glowIntensity:1,color:"#00ffaa",trailFade:2,...n},this.time=Math.random()*100,this.group=new js,this.group.position.copy(this.config.position),this.createRibbon(),this.scene.add(this.group)}createRibbon(){for(;this.group.children.length;){const o=this.group.children[0];this.group.remove(o),o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}const e=this.generateCurvePoints();this.curve=new Tc(e);const n=new fo(this.curve,200,this.config.thickness,8,!1),i=new we(this.config.color),r=new $t({uniforms:{color:{value:i},time:{value:0},glowIntensity:{value:this.config.glowIntensity}},vertexShader:`
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
      `,transparent:!0,blending:Er,side:ti,depthWrite:!1}),s=new Rt(n,r);s.userData.isMainRibbon=!0,this.group.add(s);for(let o=0;o<2;o++){const a=new fo(this.curve,100,this.config.thickness*(2+o),8,!1),l=new Pn({color:i,transparent:!0,opacity:.1-o*.03,blending:Er,side:ti,depthWrite:!1}),c=new Rt(a,l);c.userData.glowLayer=o,this.group.add(c)}}generateCurvePoints(){const e=[];switch(this.config.type){case"helix":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*6,o=2+Math.sin(r*Math.PI*2)*.5;e.push(new R(Math.cos(s)*o,(r-.5)*6,Math.sin(s)*o))}break;case"lissajous":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2;e.push(new R(Math.sin(3*r)*2,Math.sin(2*r)*2,Math.sin(5*r)*2))}break;case"toroidal":for(let i=0;i<=100;i++){const r=i/100*Math.PI*2,s=3,o=2,a=.5*(2+Math.cos(o*r));e.push(new R(a*Math.cos(s*r)*1.5,a*Math.sin(s*r)*1.5,-Math.sin(o*r)*1.5))}break;case"spiral":for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*8,o=.5+r*2;e.push(new R(Math.cos(s)*o,(r-.5)*4,Math.sin(s)*o))}break;default:for(let i=0;i<=100;i++){const r=i/100,s=r*Math.PI*4;e.push(new R(Math.cos(s)*2,(r-.5)*4,Math.sin(s)*2))}}return e}update(e,n){this.time+=e*n*this.config.animationSpeed,this.group.children.forEach(i=>{if(i.userData.isMainRibbon&&i.material.uniforms&&(i.material.uniforms.time.value=this.time),i.userData.glowLayer!==void 0){const r=Math.sin(this.time*2+i.userData.glowLayer)*.02+.08;i.material.opacity=r}}),this.group.rotation.y+=.1*e*n}setColor(e){this.config.color=e;const n=new we(e);this.group.children.forEach(i=>{i.material.uniforms&&i.material.uniforms.color?i.material.uniforms.color.value=n:i.material.color&&i.material.color.set(n)})}dispose(){this.group.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}}class LA{constructor(e){this.scene=e,this.mesh=null,this.style="gradient",this.colors=["#0a0a1a","#051515","#0a1a1a"],this.createBackground()}createBackground(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose());const e=new _a(100,32,32);let n;switch(this.style){case"solid":n=new Pn({color:0,side:nn});break;case"gradient":n=new $t({uniforms:{color1:{value:new we(this.colors[0])},color2:{value:new we(this.colors[1])},color3:{value:new we(this.colors[2])},time:{value:0}},vertexShader:`
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
          `,side:nn});break;case"nebula":n=new $t({uniforms:{color1:{value:new we(this.colors[0])},color2:{value:new we(this.colors[1])},color3:{value:new we(this.colors[2]||this.colors[1])},time:{value:0}},vertexShader:`
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
          `,side:nn});break;default:n=new Pn({color:328976,side:nn})}this.mesh=new Rt(e,n),this.scene.add(this.mesh)}setStyle(e){this.style=e,this.createBackground()}setColors(e){this.colors=e,this.mesh&&this.mesh.material.uniforms&&(this.mesh.material.uniforms.color1&&(this.mesh.material.uniforms.color1.value=new we(e[0])),this.mesh.material.uniforms.color2&&(this.mesh.material.uniforms.color2.value=new we(e[1])),this.mesh.material.uniforms.color3&&(this.mesh.material.uniforms.color3.value=new we(e[2])))}update(e){this.mesh&&this.mesh.material.uniforms&&this.mesh.material.uniforms.time&&(this.mesh.material.uniforms.time.value=e)}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose())}}class DA{constructor(){this.audioContext=null,this.analyser=null,this.dataArray=null,this.source=null,this.active=!1,this.smoothing=.8}async connectMicrophone(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});return this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(e),this.source.connect(this.analyser),this.active=!0,{success:!0}}catch(e){return console.error("Failed to access microphone:",e),{success:!1,error:e.message}}}connectAudioElement(e){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=this.smoothing,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaElementSource(e),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.active=!0}getFrequencyData(){return!this.active||!this.analyser?{bass:0,mid:0,high:0,overall:0}:(this.analyser.getByteFrequencyData(this.dataArray),{bass:this.getRange(0,10)/255,mid:this.getRange(10,50)/255,high:this.getRange(50,128)/255,overall:this.getOverallVolume()/255})}getRange(e,n){let i=0;for(let r=e;r<n&&r<this.dataArray.length;r++)i+=this.dataArray[r];return i/(n-e)}getOverallVolume(){let e=0;for(let n=0;n<this.dataArray.length;n++)e+=this.dataArray[n];return e/this.dataArray.length}detectBeat(e=.7){return this.getRange(0,10)/255>e}disconnect(){this.source&&this.source.disconnect(),this.audioContext&&this.audioContext.close(),this.active=!1}setSmoothing(e){this.smoothing=e,this.analyser&&(this.analyser.smoothingTimeConstant=e)}}function UA(){var Bd;const t=K.useRef(null),e=K.useRef(null),n=K.useRef(null),i=K.useRef(null),r=K.useRef(null),s=K.useRef(null),o=K.useRef(new Bx),a=K.useRef(null),l=K.useRef(null),c=K.useRef(null),f=K.useRef([]),h=K.useRef([]),d=K.useRef(null),m=K.useRef(null),x=K.useRef(null),_=K.useRef(null),p=K.useRef(null),u=K.useRef(null),v=K.useRef(null),g=K.useRef(new fA),y=K.useRef(new de),A=K.useRef(0),E=K.useRef(null),T=K.useRef(!1),U=K.useRef(new R),S=K.useRef(null),w=K.useRef(0),z=K.useRef(null),H=K.useRef(null),te=K.useRef(null),N=K.useRef(!1),V=K.useRef(0),Y=K.useRef(null),ee=K.useRef([]),I=K.useRef(!0),k=K.useRef(!0),j=K.useRef(4),[J,ie]=K.useState(!0),[Q,ne]=K.useState(!1),[ve,Me]=K.useState(!1),[Te,Be]=K.useState(!1),[We,Ie]=K.useState(!1),[it,G]=K.useState([]),Xt=K.useRef(!1),[Le,ze]=K.useState(1),[be,xt]=K.useState(1),[Xe,C]=K.useState("down"),[M,B]=K.useState(.5),[ae,se]=K.useState(1.5),[le,Ce]=K.useState("gradient"),[he,xe]=K.useState("Northern Lights"),[Ue,Ye]=K.useState(!0),[re,lt]=K.useState(.5),[$e,He]=K.useState(!1),[Re,_e]=K.useState(!1),[P,ue]=K.useState(!0),[Ae,Se]=K.useState(.003),[oe,D]=K.useState(!0),[fe,me]=K.useState(!0),[Oe,Ne]=K.useState(4),[Ke,Ze]=K.useState(!0),[_t,bt]=K.useState(1),[st,Ut]=K.useState(1),[sn,as]=K.useState("high"),[yi,Ar]=K.useState(!0),[ls,cs]=K.useState(60),[La,xo]=K.useState(65536),[Da,Ua]=K.useState(null),[Sd,b]=K.useState(!1),[O,q]=K.useState(!1),[$,X]=K.useState(!1),[ye,Pe]=K.useState("none"),[ke,Ve]=K.useState(0),[Qe,je]=K.useState(0),[qe,Ct]=K.useState(0),[dn,Bt]=K.useState(.7),[pn,St]=K.useState(!1),[nt,Na]=K.useState([]),[pt,mn]=K.useState([]),[_o,zn]=K.useState([]),[Cr,Ht]=K.useState([]),[li,yo]=K.useState("speed"),[Ot,Rr]=K.useState("flow"),[Ia,So]=K.useState(1.5),[Md,Ed]=K.useState(1),[wd,Td]=K.useState(1),[bd,Ad]=K.useState(2),[Cd,Rd]=K.useState(4),[Pd,Ld]=K.useState(.5),[Dd,Ud]=K.useState(.5),[Nd,Id]=K.useState(.999),[Pr,Gx]=K.useState({global:!0,emitters:!0,structures:!0,ribbons:!1,camera:!1,audio:!1,media:!1}),[Od,Wx]=K.useState({});K.useEffect(()=>{const F="ontouchstart"in window||navigator.maxTouchPoints>0;q(F)},[]),K.useEffect(()=>{if(!t.current)return;const F=new Ix;e.current=F;const W=new ei(60,window.innerWidth/window.innerHeight,.1,1e3);W.position.set(0,2,8),r.current=W;const Z=new Nx({antialias:!0,alpha:!0});Z.setSize(window.innerWidth,window.innerHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.toneMapping=rx,Z.toneMappingExposure=1.2,t.current.appendChild(Z.domElement),n.current=Z;const ge=new dA(W,Z.domElement);ge.enableDamping=!0,ge.dampingFactor=.05,ge.autoRotate=!0,ge.autoRotateSpeed=.5,ge.minDistance=2,ge.maxDistance=50,s.current=ge;const Ge=new xA(Z),mt=new _A(F,W);Ge.addPass(mt);const gt=new ho(new de(window.innerWidth,window.innerHeight),1.5,.4,.85);gt.threshold=0,gt.strength=1.5,gt.radius=.8,Ge.addPass(gt),p.current=gt;const Vt=new Bo(TA);Vt.uniforms.uIntensity.value=.003,Vt.enabled=!0,Ge.addPass(Vt),x.current=Vt;const fs=new Bo(EA);fs.uniforms.offset.value=.95,fs.uniforms.darkness.value=1.2,Ge.addPass(fs);const ka=new Bo(wA);ka.uniforms.intensity.value=.03,ka.enabled=!1,Ge.addPass(ka),m.current=ka;const Qc=new Bo(MA);Qc.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),Ge.addPass(Qc),_.current=Qc,i.current=Ge;const i_=new LA(F);d.current=i_;const r_=new uA(4210752,.5);F.add(r_),F.fog=new gd(0,.02);const s_=new AA(Z,F,256);l.current=s_;const o_=new CA(5);u.current=o_;const a_=new Vg(new R(0,0,0),8,"point");v.current=a_;const l_=new PA((Fe,De)=>{console.log(`Quality changed to: ${Fe}`,De),as(Fe),xo(De.particleSize*De.particleSize),p.current&&(p.current.enabled=De.bloom,De.bloom&&(p.current.strength=De.bloomStrength)),x.current&&(x.current.enabled=De.chromatic),m.current&&(m.current.enabled=De.filmGrain),_.current&&(_.current.enabled=De.fxaa)});H.current=l_;const c_=new DA;te.current=c_;const Zc=on["Northern Lights"],u_=new RA(F,{size:128,gridScale:25,waveAmplitude:1,waveFrequency:.5,waveSpeed:1,color1:Zc.primary,color2:Zc.secondary,color3:Zc.accent,opacity:.5,particleSize:2.5,yOffset:-6});c.current=u_,jx();const Hd=Fe=>{const De=Z.domElement.getBoundingClientRect();y.current.x=(Fe.clientX-De.left)/De.width*2-1,y.current.y=-((Fe.clientY-De.top)/De.height)*2+1,g.current.setFromCamera(y.current,W);const et=new Tn(new R(0,0,1),0),ct=new R;g.current.ray.intersectPlane(et,ct),v.current&&ct&&v.current.setPosition(ct)},Vd=Fe=>{var yt;const De=Z.domElement.getBoundingClientRect(),et=new de((Fe.clientX-De.left)/De.width*2-1,-((Fe.clientY-De.top)/De.height)*2+1);g.current.setFromCamera(et,W);const ct=f.current.map(ci=>ci.group).filter(ci=>ci&&ci.visible),at=g.current.intersectObjects(ct,!0);if(at.length>0&&Fe.shiftKey){const ci=at[0].object.parent,Ba=f.current.findIndex(f_=>f_.group===ci);if(Ba!==-1){Ua(Ba),E.current=Ba,Je(`Selected ${((yt=pt[Ba])==null?void 0:yt.type)||"structure"}`,"info");return}}const Nt=new Tn(new R(0,0,1),0),Ft=new R;g.current.ray.intersectPlane(Nt,Ft),u.current&&Ft&&u.current.trigger(Ft,15,2.5,10)},Gd=Fe=>{if(E.current!==null){const De=Z.domElement.getBoundingClientRect(),et=new de((Fe.clientX-De.left)/De.width*2-1,-((Fe.clientY-De.top)/De.height)*2+1);g.current.setFromCamera(et,W);const ct=E.current;if(f.current[ct]){const at=new Tn(new R(0,0,1),0),Nt=new R;if(g.current.ray.intersectPlane(at,Nt),Nt){T.current=!0,b(!0);const Ft=f.current[ct].group.position;U.current.copy(Nt).sub(Ft)}}}},Wd=Fe=>{T.current&&(T.current=!1,b(!1))},jd=Fe=>{if(T.current&&E.current!==null){const De=Z.domElement.getBoundingClientRect(),et=new de((Fe.clientX-De.left)/De.width*2-1,-((Fe.clientY-De.top)/De.height)*2+1);g.current.setFromCamera(et,W);const ct=new Tn(new R(0,0,1),0),at=new R;if(g.current.ray.intersectPlane(ct,at),at&&f.current[E.current]){const Nt=at.sub(U.current);f.current[E.current].group.position.copy(Nt),mn(Ft=>Ft.map((yt,ci)=>ci===E.current?{...yt,position:Nt}:yt))}}},Xd=Fe=>{const De=Fe.touches[0],et=Date.now();if(S.current={x:De.clientX,y:De.clientY,time:et},et-w.current<300){const ct=Z.domElement.getBoundingClientRect(),at=new de((De.clientX-ct.left)/ct.width*2-1,-((De.clientY-ct.top)/ct.height)*2+1);g.current.setFromCamera(at,W);const Nt=new Tn(new R(0,0,1),0),Ft=new R;g.current.ray.intersectPlane(Nt,Ft),Ft&&(Fa(),Je("Structure added","success"))}w.current=et,Fe.touches.length===2?z.current={type:"pinch",startDistance:Math.hypot(Fe.touches[0].clientX-Fe.touches[1].clientX,Fe.touches[0].clientY-Fe.touches[1].clientY)}:Fe.touches.length===3&&(z.current={type:"three-finger"})},Yd=Fe=>{var De;if(Fe.preventDefault(),Fe.touches.length===1){const et=Fe.touches[0],ct=Z.domElement.getBoundingClientRect();y.current.x=(et.clientX-ct.left)/ct.width*2-1,y.current.y=-((et.clientY-ct.top)/ct.height)*2+1,g.current.setFromCamera(y.current,W);const at=new Tn(new R(0,0,1),0),Nt=new R;g.current.ray.intersectPlane(at,Nt),v.current&&Nt&&v.current.setPosition(Nt)}else Fe.touches.length===2&&((De=z.current)==null||De.type)},qd=Fe=>{var et;if(!S.current)return;const De=Date.now()-S.current.time;if(De>500&&Fe.changedTouches.length===1){const ct=Fe.changedTouches[0],at=Z.domElement.getBoundingClientRect(),Nt=new de((ct.clientX-at.left)/at.width*2-1,-((ct.clientY-at.top)/at.height)*2+1);g.current.setFromCamera(Nt,W);const Ft=new Tn(new R(0,0,1),0),yt=new R;g.current.ray.intersectPlane(Ft,yt),yt&&u.current&&(u.current.trigger(yt,15,2.5,10),Je("Shockwave triggered","success"))}if(S.current&&Fe.changedTouches.length===1){const ct=Fe.changedTouches[0],at=ct.clientX-S.current.x,Nt=ct.clientY-S.current.y;if(Math.abs(at)>100&&Math.abs(Nt)<50&&De<300){const Ft=Object.keys(on),yt=Ft.indexOf(he);at>0&&yt>0?(xe(Ft[yt-1]),Je(`Palette: ${Ft[yt-1]}`,"success")):at<0&&yt<Ft.length-1&&(xe(Ft[yt+1]),Je(`Palette: ${Ft[yt+1]}`,"success"))}}((et=z.current)==null?void 0:et.type)==="three-finger"&&Fe.changedTouches.length===3&&(ie(ct=>!ct),Je(J?"UI hidden":"UI visible","info")),S.current=null,z.current=null};Z.domElement.addEventListener("mousemove",Hd),Z.domElement.addEventListener("mousemove",jd),Z.domElement.addEventListener("mousedown",Gd),Z.domElement.addEventListener("mouseup",Wd),Z.domElement.addEventListener("click",Vd),O&&(Z.domElement.addEventListener("touchstart",Xd,{passive:!1}),Z.domElement.addEventListener("touchmove",Yd,{passive:!1}),Z.domElement.addEventListener("touchend",qd));const $d=()=>{const Fe=window.innerWidth,De=window.innerHeight;W.aspect=Fe/De,W.updateProjectionMatrix(),Z.setSize(Fe,De),Ge.setSize(Fe,De),_.current&&_.current.uniforms.resolution.value.set(1/Fe,1/De)};window.addEventListener("resize",$d);const Kd=()=>{a.current=requestAnimationFrame(Kd);const Fe=o.current.getDelta(),De=o.current.getElapsedTime();if(s.current&&s.current.update(),u.current&&(u.current.update(Fe),l.current)){const et=u.current.getAllShockwaves();l.current.setShockwaves(et)}if(l.current){const et={flow:0,boids:1,nbody:2};l.current.velocityUniforms.uSimulationMode.value=et[Ot]||0,l.current.velocityUniforms.uBoidsSeparation.value=Ia,l.current.velocityUniforms.uBoidsAlignment.value=Md,l.current.velocityUniforms.uBoidsCohesion.value=wd,l.current.velocityUniforms.uBoidsNeighborRadius.value=bd,l.current.velocityUniforms.uBoidsMaxSpeed.value=Cd,l.current.velocityUniforms.uNbodyGravConstant.value=Pd,l.current.velocityUniforms.uNbodySoftening.value=Dd,l.current.velocityUniforms.uNbodyDamping.value=Nd,pt.forEach((yt,ci)=>{ci<8&&(l.current.velocityUniforms.uStructureMasses.value[ci]=yt.mass||1)});const ct=[];I.current&&v.current&&ct.push({position:v.current.position,strength:v.current.strength,type:"point",radius:3}),Cr.forEach(yt=>{yt.active!==!1&&ct.push({position:yt.position,strength:yt.strength,type:yt.type,radius:yt.radius||3})}),l.current.setAttractors(ct);const Nt={down:new R(0,-1,0),up:new R(0,1,0),left:new R(-1,0,0),right:new R(1,0,0),forward:new R(0,0,-1),backward:new R(0,0,1)}[Xe]||new R(0,-1,0);l.current.setGravity(Nt,be*.5);const Ft=f.current.map(yt=>({position:yt.getPosition(),radius:yt.getBoundingRadius()}));l.current.setStructures(Ft)}if(u.current&&k.current&&De-A.current>=j.current&&(u.current.trigger(new R(0,0,0),8,3,6),A.current=De),l.current&&l.current.update(Fe,De),f.current.forEach(et=>{et.update(Fe,Le)}),h.current.forEach(et=>{et.update(Fe,Le)}),c.current&&c.current.update(Fe,Le),d.current&&d.current.update(De),m.current&&m.current.enabled&&(m.current.uniforms.time.value=De),x.current&&x.current.enabled&&(x.current.uniforms.uTime.value=De),te.current&&N.current){const et=te.current.getFrequencyData();if(Math.floor(De*10)%5===0&&(Ve(et.bass),je(et.mid),Ct(et.high)),te.current.detectBeat(dn)&&De-V.current>.3&&(u.current&&u.current.trigger(new R(0,0,0),et.bass*20,2,8),V.current=De),l.current){const at=et.mid*2;l.current.velocityUniforms.uNoiseScale.value=.5+at}if(x.current&&x.current.enabled){const at=et.high*.005;x.current.uniforms.uIntensity.value=Ae+at}if(p.current&&p.current.enabled){const at=et.overall*.5;p.current.strength=ae+at}if(c.current&&Ke){const at=et.bass*1.5;c.current.setWaveParams(_t+at,.5,st)}f.current.forEach(at=>{if(at.config){const Nt=at.config.pulseIntensity||.1;at.config.pulseIntensity=Nt+et.mid*.3}})}if(H.current&&yi&&(H.current.update(Fe),Math.floor(De*2)%1===0)){const et=H.current.getStats();cs(et.fps)}if($e&&r.current){const et=Math.sin(De*.2)*.5;r.current.position.y+=et*Fe}i.current&&i.current.render()};return Kd(),()=>{window.removeEventListener("resize",$d),Z.domElement.removeEventListener("mousemove",Hd),Z.domElement.removeEventListener("mousemove",jd),Z.domElement.removeEventListener("mousedown",Gd),Z.domElement.removeEventListener("mouseup",Wd),Z.domElement.removeEventListener("click",Vd),O&&(Z.domElement.removeEventListener("touchstart",Xd),Z.domElement.removeEventListener("touchmove",Yd),Z.domElement.removeEventListener("touchend",qd)),a.current&&cancelAnimationFrame(a.current),u.current&&(u.current.clear(),u.current=null),v.current=null,te.current&&(te.current.disconnect(),te.current=null),Y.current&&Y.current.state==="recording"&&(Y.current.stop(),Y.current=null),l.current&&(l.current.dispose(),l.current=null),f.current.forEach(Fe=>Fe.dispose()),f.current=[],h.current.forEach(Fe=>Fe.dispose()),h.current=[],c.current&&(c.current.dispose(),c.current=null),d.current&&d.current.dispose(),n.current&&(n.current.dispose(),t.current&&n.current.domElement&&t.current.removeChild(n.current.domElement))}},[]),K.useEffect(()=>{const F=window.matchMedia("(prefers-reduced-motion: reduce)");F.matches&&(Me(!0),ze(.3),me(!1),ue(!1),Je("Reduced motion mode enabled","info"));const W=Z=>{Z.matches&&(Me(!0),ze(.3),me(!1),Je("Reduced motion mode enabled","info"))};return F.addEventListener("change",W),()=>F.removeEventListener("change",W)},[]),K.useEffect(()=>{const F=W=>{if(W.target.tagName==="INPUT"||W.target.tagName==="TEXTAREA"||W.target.tagName==="SELECT")return;const Z=W.key.toLowerCase(),ge=lf[Z]||lf[W.key];if(!ge)return;W.preventDefault();const Ge=Object.keys(on);switch(ge.action){case"triggerPulse":$x();break;case"randomize":$c(),Je("Scene randomized","success");break;case"clearScene":Lr(),Je("Scene cleared","info");break;case"toggleUI":ie(gt=>!gt),Je(J?"UI hidden":"UI visible","info");break;case"toggleFullscreen":Kx();break;case"togglePause":Qx();break;case"toggleMouseFollow":D(gt=>{const Vt=!gt;return Je(Vt?"Mouse follow ON":"Mouse follow OFF","info"),Vt});break;case"toggleWaveGrid":Ze(gt=>{const Vt=!gt;return Je(Vt?"Wave grid ON":"Wave grid OFF","info"),Vt});break;case"palette1":case"palette2":case"palette3":case"palette4":case"palette5":case"palette6":const mt=parseInt(ge.action.slice(-1))-1;Ge[mt]&&(xe(Ge[mt]),Je(`Palette: ${Ge[mt]}`,"success"));break;case"qualityUp":Fd(1);break;case"qualityDown":Fd(-1);break;case"resetCamera":Kc(),Je("Camera reset","info");break;case"showHelp":Be(gt=>!gt);break}};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[J,$c,Lr,Kc]),K.useEffect(()=>{Xt.current=Q,o.current&&(Q?o.current.stop():o.current.start())},[Q]),K.useEffect(()=>{i.current&&i.current.passes[1]&&(i.current.passes[1].strength=ae)},[ae]),K.useEffect(()=>{s.current&&(s.current.autoRotate=Ue,s.current.autoRotateSpeed=re)},[Ue,re]),K.useEffect(()=>{d.current&&d.current.setStyle(le)},[le]),K.useEffect(()=>{m.current&&(m.current.enabled=Re)},[Re]),K.useEffect(()=>{I.current=oe},[oe]),K.useEffect(()=>{x.current&&(x.current.enabled=P)},[P]),K.useEffect(()=>{x.current&&(x.current.uniforms.uIntensity.value=Ae)},[Ae]),K.useEffect(()=>{k.current=fe},[fe]),K.useEffect(()=>{j.current=Oe},[Oe]),K.useEffect(()=>{c.current&&c.current.setVisible(Ke)},[Ke]),K.useEffect(()=>{H.current&&H.current.setEnabled(yi)},[yi]),K.useEffect(()=>{if(H.current&&!yi){const F=H.current.setQuality(sn);F&&xo(F.particleSize*F.particleSize)}},[sn,yi]),K.useEffect(()=>{c.current&&c.current.setWaveParams(_t,.5,st)},[_t,st]),K.useEffect(()=>{if(l.current&&l.current.particles){const F={speed:0,direction:1,acceleration:2};l.current.particles.material.uniforms.uColorMode.value=F[li]||0}},[li]),K.useEffect(()=>{const F=on[he];if(!F)return;d.current&&d.current.setColors(F.background),l.current&&l.current.setColors(F.primary,F.secondary,F.accent),c.current&&c.current.setColors(F.primary,F.secondary,F.accent);const W=bA[he];W&&p.current&&(p.current.strength=W.strength,p.current.radius=W.radius,p.current.threshold=W.threshold),f.current.forEach(Z=>{Z.setColor(F.primary)}),h.current.forEach(Z=>{Z.setColor(F.secondary)}),mn(Z=>Z.map(ge=>({...ge,color:F.primary}))),zn(Z=>Z.map(ge=>({...ge,color:F.secondary})))},[he]);const jx=K.useCallback(()=>{const F=on[he],W={type:"icosahedron",position:new R(0,0,0),rotationSpeed:{x:.1,y:.2,z:.05},scale:1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:F.primary},Z=new cf(e.current,W);f.current.push(Z),mn([{id:Date.now(),...W}]),l.current&&l.current.setColors(F.primary,F.secondary,F.accent);const ge={type:"helix",position:new R(0,0,0),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:F.accent},Ge=new uf(e.current,ge);h.current.push(Ge),zn([{id:Date.now(),...ge}])},[he]),Oa=K.useCallback((F="point")=>{const W=new Vg(new R((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4),F==="repulsor"?-5:5,F);Ht(Z=>[...Z,{id:Date.now(),type:F,position:W.position.clone(),strength:W.strength,radius:W.radius}]),Je(`${F.charAt(0).toUpperCase()+F.slice(1)} attractor added`,"success")},[Je]),Xx=K.useCallback(F=>{Ht(W=>W.filter((Z,ge)=>ge!==F))},[]),Mo=K.useCallback((F,W,Z)=>{Ht(ge=>ge.map((Ge,mt)=>mt===F?{...Ge,[W]:Z}:Ge))},[]),Fa=K.useCallback((F="icosahedron")=>{const W=on[he],Z={type:F,position:new R((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6),rotationSpeed:{x:.1,y:.2,z:.05},scale:.5+Math.random()*.5,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:W.primary,mass:1},ge=new cf(e.current,Z);f.current.push(ge),mn(Ge=>[...Ge,{id:Date.now(),...Z}])},[he]),Yx=K.useCallback(F=>{f.current[F]&&(f.current[F].dispose(),f.current.splice(F,1),mn(W=>W.filter((Z,ge)=>ge!==F)))},[]),us=K.useCallback((F,W,Z)=>{f.current[F]&&(W==="type"?(f.current[F].config.type=Z,f.current[F].createStructure()):W==="materialStyle"?(f.current[F].config.materialStyle=Z,f.current[F].createStructure()):f.current[F].config[W]=Z,mn(ge=>ge.map((Ge,mt)=>mt===F?{...Ge,[W]:Z}:Ge)))},[]),qc=K.useCallback((F="helix")=>{const W=on[he],Z={type:F,position:new R((Math.random()-.5)*4,(Math.random()-.5)*2,(Math.random()-.5)*4),animationSpeed:1,thickness:.08,glowIntensity:1.5,color:W.accent},ge=new uf(e.current,Z);h.current.push(ge),zn(Ge=>[...Ge,{id:Date.now(),...Z}])},[he]),qx=K.useCallback(F=>{h.current[F]&&(h.current[F].dispose(),h.current.splice(F,1),zn(W=>W.filter((Z,ge)=>ge!==F)))},[]),za=K.useCallback((F,W,Z)=>{h.current[F]&&(W==="type"?(h.current[F].config.type=Z,h.current[F].createRibbon()):h.current[F].config[W]=Z,zn(ge=>ge.map((Ge,mt)=>mt===F?{...Ge,[W]:Z}:Ge)))},[]),Lr=K.useCallback(()=>{f.current.forEach(F=>F.dispose()),f.current=[],mn([]),h.current.forEach(F=>F.dispose()),h.current=[],zn([])},[]),$c=K.useCallback(()=>{Lr();const F=Object.keys(on),W=F[Math.floor(Math.random()*F.length)];xe(W);const Z=["icosahedron","torus","rings","helix","mobius"],ge=1+Math.floor(Math.random()*3);for(let gt=0;gt<ge;gt++){const Vt=Z[Math.floor(Math.random()*Z.length)];setTimeout(()=>Fa(Vt),gt*100)}const Ge=["helix","lissajous","toroidal","spiral"],mt=1+Math.floor(Math.random()*2);for(let gt=0;gt<mt;gt++){const Vt=Ge[Math.floor(Math.random()*Ge.length)];setTimeout(()=>qc(Vt),gt*100)}ze(.5+Math.random()*1.5),se(1+Math.random()*1.5),B(Math.random()*1.5)},[Lr,Fa,qc]),Kc=K.useCallback(()=>{r.current&&s.current&&(r.current.position.set(0,2,8),s.current.target.set(0,0,0),s.current.update())},[]),Je=K.useCallback((F,W="info")=>{const Z=Date.now();G(ge=>[...ge,{id:Z,message:F,type:W}]),setTimeout(()=>{G(ge=>ge.filter(Ge=>Ge.id!==Z))},3e3)},[]),$x=K.useCallback(()=>{u.current&&(u.current.trigger(new R(0,0,0),12,3,8),Je("Pulse triggered!","success"))},[Je]),Kx=K.useCallback(()=>{document.fullscreenElement?(document.exitFullscreen(),Je("Fullscreen OFF","info")):(document.documentElement.requestFullscreen().catch(F=>{Je("Could not enter fullscreen","error")}),Je("Fullscreen ON","info"))},[Je]),Qx=K.useCallback(()=>{ne(F=>{const W=!F;return Je(W?"Paused":"Resumed","info"),W})},[Je]),Fd=K.useCallback(F=>{const W=["ultra","high","medium","low","potato"],Z=W.indexOf(sn),ge=Math.max(0,Math.min(W.length-1,Z-F));ge!==Z&&(Ar(!1),as(W[ge]),Je(`Quality: ${W[ge]}`,"info"))},[sn,Je]),Zx=K.useCallback(async F=>{if(F==="microphone"&&te.current){const W=await te.current.connectMicrophone();W.success?(X(!0),Pe("microphone"),N.current=!0,Je("Microphone connected","success")):Je(`Microphone error: ${W.error}`,"error")}},[Je]),Jx=K.useCallback(()=>{te.current&&(te.current.disconnect(),N.current=!1,X(!1),Pe("none"),Je("Audio reactivity disabled","info"))},[Je]),zd=K.useCallback((F=2)=>{if(!n.current||!i.current)return;const W=new de;n.current.getSize(W);const Z=W.x*F,ge=W.y*F;n.current.setSize(Z,ge),i.current.setSize(Z,ge),i.current.render();const Ge=n.current.domElement.toDataURL("image/png");n.current.setSize(W.x,W.y),i.current.setSize(W.x,W.y);const mt=document.createElement("a");mt.download=`luminous-flow-${Date.now()}.png`,mt.href=Ge,mt.click(),Je(`Screenshot saved (${Z}x${ge})`,"success")},[Je]),e_=K.useCallback(()=>{if(!(!n.current||pn))try{const F=n.current.domElement.captureStream(30),W=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm",Z=new MediaRecorder(F,{mimeType:W,videoBitsPerSecond:25e5});ee.current=[],Z.ondataavailable=ge=>{ge.data.size>0&&ee.current.push(ge.data)},Z.onstop=()=>{const ge=new Blob(ee.current,{type:W}),Ge=URL.createObjectURL(ge),mt=document.createElement("a");mt.download=`luminous-flow-${Date.now()}.webm`,mt.href=Ge,mt.click(),URL.revokeObjectURL(Ge),Je("Recording saved","success")},Z.start(),Y.current=Z,St(!0),Je("Recording started (30fps)","info")}catch(F){Je(`Recording error: ${F.message}`,"error")}},[pn,Je]),t_=K.useCallback(()=>{Y.current&&Y.current.state==="recording"&&(Y.current.stop(),Y.current=null,St(!1))},[]),n_=K.useCallback(F=>{const W=Hg[F];W&&(Lr(),xe(W.palette),Ce(W.background),ze(W.timeScale),se(W.bloom),Ze(W.waveGrid),bt(W.waveAmplitude),W.simulationMode?(Rr(W.simulationMode),W.simulationMode==="boids"&&W.boids&&(So(W.boids.separation),Ed(W.boids.alignment),Td(W.boids.cohesion),Ad(W.boids.neighborRadius),Rd(W.boids.maxSpeed)),W.simulationMode==="nbody"&&W.nbody&&(Ld(W.nbody.gravConstant),Ud(W.nbody.softening),Id(W.nbody.damping))):Rr("flow"),W.structures.forEach((Z,ge)=>{setTimeout(()=>{const Ge={type:Z.type,position:new R(...Z.position||[0,0,0]),rotationSpeed:{x:(Z.rotationSpeed||.2)*.5,y:Z.rotationSpeed||.2,z:(Z.rotationSpeed||.2)*.25},scale:Z.scale||1,pulseIntensity:.1,materialStyle:"holographic",complexity:1,color:on[W.palette].primary,mass:Z.mass||1},mt=new cf(e.current,Ge);f.current.push(mt),mn(gt=>[...gt,{id:Date.now()+ge,...Ge}])},ge*100)}),W.ribbons.forEach((Z,ge)=>{setTimeout(()=>{const Ge={type:Z.type,position:new R(0,0,0),animationSpeed:1,thickness:Z.thickness||.08,glowIntensity:1.5,color:on[W.palette].accent},mt=new uf(e.current,Ge);h.current.push(mt),zn(gt=>[...gt,{id:Date.now()+100+ge,...Ge}])},(W.structures.length+ge)*100)}),Je(`Loaded: ${F}`,"success"),Ie(!1))},[Lr,Je]),Dr=F=>{Gx(W=>({...W,[F]:!W[F]}))},kd=F=>{Wx(W=>({...W,[F]:!W[F]}))};return L.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[L.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),L.jsx("div",{style:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px",pointerEvents:"none"},children:it.map(F=>L.jsx("div",{style:{padding:"12px 24px",borderRadius:"8px",background:F.type==="success"?"rgba(0, 200, 100, 0.9)":F.type==="error"?"rgba(200, 50, 50, 0.9)":"rgba(50, 50, 70, 0.9)",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",backdropFilter:"blur(10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)",animation:"slideUp 0.3s ease-out",pointerEvents:"auto"},children:F.message},F.id))}),Te&&L.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>Be(!1),children:L.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"500px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:F=>F.stopPropagation(),children:[L.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"KEYBOARD SHORTCUTS"}),L.jsx("div",{style:{display:"grid",gap:"8px"},children:Object.entries(lf).map(([F,{description:W}])=>L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px"},children:[L.jsx("span",{style:{fontSize:"13px",color:"#ccc",fontFamily:"system-ui, -apple-system, sans-serif"},children:W}),L.jsx("kbd",{style:{padding:"4px 10px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",fontSize:"12px",fontFamily:"monospace",color:"#00ffaa",border:"1px solid rgba(255, 255, 255, 0.2)"},children:F===" "?"Space":F})]},F))}),L.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Press ? or Escape to close"})]})}),We&&L.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1001},onClick:()=>Ie(!1),children:L.jsxs("div",{style:{background:"rgba(20, 20, 35, 0.95)",borderRadius:"12px",padding:"30px",maxWidth:"700px",width:"90%",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.1)"},onClick:F=>F.stopPropagation(),children:[L.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"20px",fontWeight:"300",letterSpacing:"2px",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"SCENE PRESETS"}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"15px"},children:Object.entries(Hg).map(([F,W])=>{var Z,ge,Ge,mt,gt;return L.jsxs("button",{onClick:()=>n_(F),style:{padding:"20px",background:`linear-gradient(135deg, ${((Z=on[W.palette])==null?void 0:Z.background[0])||"#1a1a2e"}, ${((ge=on[W.palette])==null?void 0:ge.background[1])||"#16213e"})`,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",position:"relative",overflow:"hidden"},onMouseEnter:Vt=>{var fs;Vt.currentTarget.style.transform="scale(1.02)",Vt.currentTarget.style.borderColor=((fs=on[W.palette])==null?void 0:fs.primary)||"#00ffaa"},onMouseLeave:Vt=>{Vt.currentTarget.style.transform="scale(1)",Vt.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)"},children:[L.jsx("div",{style:{fontSize:"14px",fontWeight:"500",color:((Ge=on[W.palette])==null?void 0:Ge.primary)||"#00ffaa",marginBottom:"8px",fontFamily:"system-ui, -apple-system, sans-serif"},children:F}),L.jsx("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.4",fontFamily:"system-ui, -apple-system, sans-serif"},children:W.description}),L.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",width:"8px",height:"8px",borderRadius:"50%",background:((mt=on[W.palette])==null?void 0:mt.primary)||"#00ffaa",boxShadow:`0 0 10px ${((gt=on[W.palette])==null?void 0:gt.primary)||"#00ffaa"}`}})]},F)})}),L.jsx("p",{style:{marginTop:"20px",fontSize:"12px",opacity:.5,textAlign:"center",color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif"},children:"Click a preset to load it, or click outside to close"})]})}),J&&L.jsxs("div",{style:{position:"absolute",top:0,right:0,width:"320px",height:"100%",background:"rgba(10, 10, 20, 0.85)",backdropFilter:"blur(10px)",borderLeft:"1px solid rgba(255, 255, 255, 0.1)",overflowY:"auto",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"13px",color:"#fff"},children:[L.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(0, 0, 0, 0.3)"},children:[L.jsx("h1",{style:{margin:0,fontSize:"20px",fontWeight:"300",letterSpacing:"2px"},children:"LUMINOUS FLOW"}),L.jsx("p",{style:{margin:"5px 0 0",opacity:.6,fontSize:"11px"},children:"3D Particle & Light Sculpture Sandbox"})]}),L.jsxs("div",{style:{padding:"15px 20px",display:"flex",gap:"10px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[L.jsx("button",{onClick:$c,style:an,children:"Randomize"}),L.jsx("button",{onClick:Lr,style:an,children:"Clear Scene"})]}),L.jsxs(Fr,{title:"Global Controls",expanded:Pr.global,onToggle:()=>Dr("global"),children:[L.jsx(ft,{label:"Time Scale",value:Le,onChange:ze,min:.1,max:3,step:.1}),L.jsx(ft,{label:"Gravity",value:be,onChange:xt,min:-2,max:2,step:.1}),L.jsx(ft,{label:"Turbulence",value:M,onChange:B,min:0,max:3,step:.1}),L.jsx(ft,{label:"Bloom Intensity",value:ae,onChange:se,min:0,max:3,step:.1}),L.jsx(tr,{label:"Background Style",value:le,onChange:Ce,options:["solid","gradient","nebula"]}),L.jsx(tr,{label:"Color Palette",value:he,onChange:xe,options:Object.keys(on)}),L.jsx(nr,{label:"Film Grain",checked:Re,onChange:_e}),L.jsx(nr,{label:"Chromatic Aberration",checked:P,onChange:ue}),P&&L.jsx(ft,{label:"Aberration Intensity",value:Ae,onChange:Se,min:.001,max:.01,step:.001})]}),L.jsxs(Fr,{title:"GPU Particles",expanded:Pr.emitters,onToggle:()=>Dr("emitters"),children:[L.jsxs("div",{style:{padding:"12px",background:"rgba(0, 255, 170, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 255, 170, 0.3)",marginBottom:"10px"},children:[L.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"6px",color:"#00ffaa"},children:"✓ GPU Particles Active"}),L.jsxs("div",{style:{fontSize:"11px",opacity:.8,lineHeight:"1.4"},children:["65,536 particles (256×256 texture)",L.jsx("br",{}),"GPU-computed positions & velocities",L.jsx("br",{}),"Curl noise + central attractor"]})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(100, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(100, 200, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#64c8ff"},children:"Simulation Mode"}),L.jsx(tr,{label:"Mode",value:Ot,onChange:Rr,options:["flow","boids","nbody"]}),Ot==="boids"&&L.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[L.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"Boids Parameters"}),L.jsx(ft,{label:"Separation",value:Ia,onChange:So,min:0,max:5,step:.1}),L.jsx(ft,{label:"Alignment",value:Md,onChange:Ed,min:0,max:5,step:.1}),L.jsx(ft,{label:"Cohesion",value:wd,onChange:Td,min:0,max:5,step:.1}),L.jsx(ft,{label:"Neighbor Radius",value:bd,onChange:Ad,min:.5,max:5,step:.1}),L.jsx(ft,{label:"Max Speed",value:Cd,onChange:Rd,min:1,max:10,step:.5})]}),Ot==="nbody"&&L.jsxs("div",{style:{marginTop:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px"},children:[L.jsx("div",{style:{fontSize:"11px",fontWeight:"500",marginBottom:"6px"},children:"N-Body Parameters"}),L.jsx(ft,{label:"Gravitational Constant",value:Pd,onChange:Ld,min:.01,max:2,step:.01}),L.jsx(ft,{label:"Softening",value:Dd,onChange:Ud,min:.1,max:2,step:.1}),L.jsx(ft,{label:"Damping",value:Nd,onChange:Id,min:.99,max:1,step:.001})]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:[Ot==="flow"&&"Default mode: curl noise + attractors + shockwaves",Ot==="boids"&&"Flocking behavior: particles avoid, align, and cohere",Ot==="nbody"&&"Gravitational simulation: structures as massive bodies"]})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 170, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 170, 0, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ffaa00"},children:"Interactivity"}),L.jsx(nr,{label:"Mouse Follow (particles follow cursor)",checked:oe,onChange:D}),L.jsx(nr,{label:"Auto Pulse (periodic shockwaves)",checked:fe,onChange:me}),fe&&L.jsx(ft,{label:"Pulse Interval (seconds)",value:Oe,onChange:Ne,min:1,max:10,step:.5}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Click anywhere to trigger a shockwave!"})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 170, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 170, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#00aaff"},children:"Wave Grid"}),L.jsx(nr,{label:"Enable Wave Grid",checked:Ke,onChange:Ze}),Ke&&L.jsxs(L.Fragment,{children:[L.jsx(ft,{label:"Wave Amplitude",value:_t,onChange:bt,min:.2,max:3,step:.1}),L.jsx(ft,{label:"Wave Speed",value:st,onChange:Ut,min:.2,max:3,step:.1})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"16,384 particles in undulating grid below the scene"})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 85, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 85, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aa55ff"},children:"Performance"}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px",fontSize:"11px"},children:[L.jsxs("span",{children:["FPS: ",L.jsx("strong",{style:{color:ls>50?"#00ff88":ls>30?"#ffaa00":"#ff4444"},children:ls})]}),L.jsxs("span",{children:["Quality: ",L.jsx("strong",{style:{color:"#aa55ff",textTransform:"capitalize"},children:sn})]}),L.jsxs("span",{children:["Particles: ",L.jsxs("strong",{children:[(La/1e3).toFixed(0),"K"]})]})]}),L.jsx(nr,{label:"Auto Quality (adjusts based on FPS)",checked:yi,onChange:Ar}),!yi&&L.jsx(tr,{label:"Quality Level",value:sn,onChange:as,options:["ultra","high","medium","low","potato"]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:yi?L.jsx(L.Fragment,{children:"Auto mode adjusts quality based on FPS. Target: 50-60fps."}):L.jsx(L.Fragment,{children:"Manual mode lets you choose quality level. Higher = more particles and effects."})})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(170, 255, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(170, 255, 0, 0.3)"},children:[L.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#aaff00"},children:["Attractors (",Cr.length,")"]}),L.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"10px",flexWrap:"wrap"},children:[L.jsx("button",{onClick:()=>Oa("point"),style:{...an,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Point"}),L.jsx("button",{onClick:()=>Oa("vortex"),style:{...an,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Vortex"}),L.jsx("button",{onClick:()=>Oa("orbit"),style:{...an,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Orbit"}),L.jsx("button",{onClick:()=>Oa("repulsor"),style:{...an,flex:"1 1 45%",fontSize:"10px",padding:"6px"},children:"+ Repulsor"})]}),Cr.map((F,W)=>L.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"6px"},children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[L.jsx("span",{style:{fontSize:"11px",textTransform:"capitalize"},children:F.type}),L.jsx("button",{onClick:()=>Xx(W),style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]}),L.jsx(ft,{label:"Strength",value:F.strength,onChange:Z=>Mo(W,"strength",Z),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position X",value:F.position.x,onChange:Z=>Mo(W,"position",new R(Z,F.position.y,F.position.z)),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position Y",value:F.position.y,onChange:Z=>Mo(W,"position",new R(F.position.x,Z,F.position.z)),min:-10,max:10,step:.5}),L.jsx(ft,{label:"Position Z",value:F.position.z,onChange:Z=>Mo(W,"position",new R(F.position.x,F.position.y,Z)),min:-10,max:10,step:.5}),F.type==="orbit"&&L.jsx(ft,{label:"Orbit Radius",value:F.radius,onChange:Z=>Mo(W,"radius",Z),min:.5,max:10,step:.5})]},F.id)),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Add attractors to create force fields. Point attracts, Vortex spins, Orbit maintains distance, Repulsor pushes away."})]}),L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 100, 200, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 100, 200, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"10px",color:"#ff64c8"},children:"Velocity Coloring"}),L.jsx(tr,{label:"Color Mode",value:li,onChange:yo,options:["speed","direction","acceleration"]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Speed: color by velocity magnitude",L.jsx("br",{}),"Direction: hue based on movement direction",L.jsx("br",{}),"Acceleration: highlight sudden changes"]})]}),Da!==null&&L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(255, 200, 0, 0.1)",borderRadius:"4px",border:"1px solid rgba(255, 200, 0, 0.3)"},children:[L.jsxs("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#ffc800"},children:["Selected: ",((Bd=pt[Da])==null?void 0:Bd.type)||"Structure"]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.4"},children:["Drag to move • Shift+Click to select",L.jsx("br",{}),"Click elsewhere to deselect"]}),L.jsx("button",{onClick:()=>{Ua(null),E.current=null},style:{...an,width:"100%",marginTop:"8px",fontSize:"11px"},children:"Deselect"})]}),O&&L.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"rgba(0, 200, 255, 0.1)",borderRadius:"4px",border:"1px solid rgba(0, 200, 255, 0.3)"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"6px",color:"#00c8ff"},children:"Touch Gestures"}),L.jsxs("div",{style:{fontSize:"10px",opacity:.8,lineHeight:"1.6"},children:["• Tap: Shockwave",L.jsx("br",{}),"• Double-tap: Add structure",L.jsx("br",{}),"• Long press: Strong shockwave",L.jsx("br",{}),"• Swipe left/right: Change palette",L.jsx("br",{}),"• 3-finger swipe: Toggle UI"]})]})]}),L.jsxs(Fr,{title:`Structures (${pt.length})`,expanded:Pr.structures,onToggle:()=>Dr("structures"),children:[L.jsx("button",{onClick:()=>Fa(),style:{...an,width:"100%",marginBottom:"10px"},children:"+ Add Structure"}),pt.map((F,W)=>{var Z;return L.jsxs(Gg,{title:`${F.type}`,expanded:Od[F.id],onToggle:()=>kd(F.id),onDelete:()=>Yx(W),children:[L.jsx(tr,{label:"Type",value:F.type,onChange:ge=>us(W,"type",ge),options:["icosahedron","torus","rings","helix","mobius"]}),L.jsx(ft,{label:"Rotation Speed",value:((Z=F.rotationSpeed)==null?void 0:Z.y)||.2,onChange:ge=>us(W,"rotationSpeed",{x:ge*.5,y:ge,z:ge*.25}),min:0,max:2,step:.1}),L.jsx(ft,{label:"Pulse Intensity",value:F.pulseIntensity,onChange:ge=>us(W,"pulseIntensity",ge),min:0,max:.5,step:.05}),L.jsx(ft,{label:"Scale",value:F.scale,onChange:ge=>us(W,"scale",ge),min:.2,max:3,step:.1}),L.jsx(tr,{label:"Material",value:F.materialStyle,onChange:ge=>us(W,"materialStyle",ge),options:["glass","holographic","solid"]}),Ot==="nbody"&&L.jsx(ft,{label:"Mass (N-Body)",value:F.mass||1,onChange:ge=>us(W,"mass",ge),min:.1,max:10,step:.1})]},F.id)})]}),L.jsxs(Fr,{title:`Ribbons (${_o.length})`,expanded:Pr.ribbons,onToggle:()=>Dr("ribbons"),children:[L.jsx("button",{onClick:()=>qc(),style:{...an,width:"100%",marginBottom:"10px"},children:"+ Add Ribbon"}),_o.map((F,W)=>L.jsxs(Gg,{title:`${F.type} Ribbon`,expanded:Od[F.id],onToggle:()=>kd(F.id),onDelete:()=>qx(W),children:[L.jsx(tr,{label:"Curve Type",value:F.type,onChange:Z=>za(W,"type",Z),options:["helix","lissajous","toroidal","spiral"]}),L.jsx(ft,{label:"Animation Speed",value:F.animationSpeed,onChange:Z=>za(W,"animationSpeed",Z),min:.1,max:3,step:.1}),L.jsx(ft,{label:"Thickness",value:F.thickness,onChange:Z=>za(W,"thickness",Z),min:.02,max:.3,step:.01}),L.jsx(ft,{label:"Glow Intensity",value:F.glowIntensity,onChange:Z=>za(W,"glowIntensity",Z),min:.5,max:3,step:.1})]},F.id))]}),L.jsxs(Fr,{title:"Camera",expanded:Pr.camera,onToggle:()=>Dr("camera"),children:[L.jsx(nr,{label:"Auto Rotate",checked:Ue,onChange:Ye}),Ue&&L.jsx(ft,{label:"Rotation Speed",value:re,onChange:lt,min:.1,max:2,step:.1}),L.jsx(nr,{label:"Immersion Mode",checked:$e,onChange:He}),L.jsx("button",{onClick:Kc,style:{...an,width:"100%",marginTop:"10px"},children:"Reset Camera"})]}),L.jsxs(Fr,{title:"Audio Reactivity",expanded:Pr.audio,onToggle:()=>Dr("audio"),children:[L.jsxs("div",{style:{padding:"12px",background:$?"rgba(0, 255, 100, 0.1)":"rgba(255, 100, 100, 0.1)",borderRadius:"4px",border:`1px solid ${$?"rgba(0, 255, 100, 0.3)":"rgba(255, 100, 100, 0.3)"}`,marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"12px",fontWeight:"500",marginBottom:"8px",color:$?"#00ff64":"#ff6464"},children:$?"🎵 Audio Active":"🔇 Audio Inactive"}),$?L.jsx("button",{onClick:Jx,style:{...an,width:"100%",background:"rgba(255, 100, 100, 0.2)"},children:"Disconnect Audio"}):L.jsx("button",{onClick:()=>Zx("microphone"),style:{...an,width:"100%"},children:"Connect Microphone"}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:"Microphone permission required. Audio affects particles, shockwaves, bloom, and more."})]}),$&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{style:{padding:"8px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"4px",marginBottom:"10px"},children:[L.jsx("div",{style:{fontSize:"11px",marginBottom:"6px",opacity:.7},children:"Frequency Levels"}),L.jsxs("div",{style:{display:"flex",gap:"8px",fontSize:"10px"},children:[L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Bass"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${ke*100}%`,background:"#ff4444",transition:"width 0.1s"}})})]}),L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"Mid"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${Qe*100}%`,background:"#44ff44",transition:"width 0.1s"}})})]}),L.jsxs("div",{style:{flex:1},children:[L.jsx("div",{style:{opacity:.5,marginBottom:"2px"},children:"High"}),L.jsx("div",{style:{height:"4px",background:"rgba(255, 255, 255, 0.1)",borderRadius:"2px",overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${qe*100}%`,background:"#4444ff",transition:"width 0.1s"}})})]})]})]}),L.jsx(ft,{label:"Beat Threshold",value:dn,onChange:Bt,min:.3,max:.9,step:.05}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4"},children:["Mappings:",L.jsx("br",{}),"• Bass → Shockwaves + Structure pulse",L.jsx("br",{}),"• Mid → Particle turbulence",L.jsx("br",{}),"• High → Chromatic aberration",L.jsx("br",{}),"• Volume → Bloom + Wave amplitude"]})]})]}),L.jsxs(Fr,{title:"Screenshot & Recording",expanded:Pr.media,onToggle:()=>Dr("media"),children:[L.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[L.jsx("button",{onClick:()=>zd(2),style:{...an},children:"📸 Screenshot (2x)"}),L.jsx("button",{onClick:()=>zd(4),style:{...an},children:"📸 HQ (4x)"})]}),L.jsxs("div",{style:{padding:"12px",background:pn?"rgba(255, 50, 50, 0.1)":"rgba(50, 50, 70, 0.1)",borderRadius:"4px",border:`1px solid ${pn?"rgba(255, 50, 50, 0.3)":"rgba(50, 50, 70, 0.3)"}`,marginBottom:"10px"},children:[pn?L.jsx("button",{onClick:t_,style:{...an,width:"100%",background:"rgba(255, 50, 50, 0.3)",border:"1px solid rgba(255, 50, 50, 0.5)",animation:"pulse 1s infinite"},children:"⏹️ Stop Recording"}):L.jsx("button",{onClick:e_,style:{...an,width:"100%",background:"rgba(255, 50, 50, 0.2)",border:"1px solid rgba(255, 50, 50, 0.4)"},children:"🔴 Start Recording"}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,marginTop:"8px",lineHeight:"1.4",textAlign:"center"},children:pn?"Recording at 30fps...":"Capture WebM video at 30fps"})]}),L.jsx("div",{style:{fontSize:"10px",opacity:.6,lineHeight:"1.4"},children:"Screenshots are saved at 2x or 4x native resolution for high quality prints and social media."})]}),L.jsx("div",{style:{padding:"15px 20px",textAlign:"center",opacity:.5,fontSize:"11px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:"Drag to orbit | Scroll to zoom | Press ? for help"}),L.jsx("div",{style:{padding:"10px 20px 20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:L.jsx("button",{onClick:()=>Ie(!0),style:{...an,width:"100%",background:"linear-gradient(135deg, rgba(0, 255, 170, 0.2), rgba(0, 170, 255, 0.2))",border:"1px solid rgba(0, 255, 170, 0.4)"},children:"Open Preset Gallery"})})]}),!J&&L.jsxs("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"10px",zIndex:100},children:[L.jsx("button",{onClick:()=>Be(!0),style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"18px",cursor:"pointer",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Keyboard Shortcuts (?)",children:"?"}),L.jsx("button",{onClick:()=>ie(!0),style:{padding:"10px 20px",borderRadius:"20px",background:"rgba(10, 10, 20, 0.8)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",fontSize:"12px",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"system-ui, -apple-system, sans-serif"},title:"Show UI (H)",children:"Show UI"})]}),L.jsx("style",{children:`
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
      `})]})}const an={background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",padding:"8px 16px",cursor:"pointer",fontSize:"12px",transition:"all 0.2s",flex:1};function Fr({title:t,expanded:e,onToggle:n,children:i}){return L.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[L.jsxs("div",{onClick:n,style:{padding:"12px 20px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255, 255, 255, 0.03)"},children:[L.jsx("span",{style:{fontWeight:"500",letterSpacing:"0.5px"},children:t}),L.jsx("span",{style:{opacity:.5},children:e?"−":"+"})]}),e&&L.jsx("div",{style:{padding:"10px 20px"},children:i})]})}function Gg({title:t,expanded:e,onToggle:n,onDelete:i,children:r}){return L.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"4px",marginBottom:"8px",overflow:"hidden"},children:[L.jsxs("div",{style:{padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:n,children:[L.jsx("span",{style:{fontSize:"12px",textTransform:"capitalize"},children:t}),L.jsxs("div",{style:{display:"flex",gap:"8px"},children:[L.jsx("span",{style:{opacity:.5,fontSize:"12px"},children:e?"−":"+"}),L.jsx("button",{onClick:s=>{s.stopPropagation(),i()},style:{background:"none",border:"none",color:"#ff6666",cursor:"pointer",padding:"0",fontSize:"14px"},children:"×"})]})]}),e&&L.jsx("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:r})]})}function ft({label:t,value:e,onChange:n,min:i,max:r,step:s}){return L.jsxs("div",{style:{marginBottom:"12px"},children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",fontSize:"11px"},children:[L.jsx("span",{style:{opacity:.7},children:t}),L.jsx("span",{style:{opacity:.5},children:typeof e=="number"?e.toFixed(2):e})]}),L.jsx("input",{type:"range",value:e,onChange:o=>n(parseFloat(o.target.value)),min:i,max:r,step:s,style:{width:"100%",height:"4px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"2px",appearance:"none",cursor:"pointer"}})]})}function tr({label:t,value:e,onChange:n,options:i}){return L.jsxs("div",{style:{marginBottom:"12px"},children:[L.jsx("div",{style:{fontSize:"11px",opacity:.7,marginBottom:"4px"},children:t}),L.jsx("select",{value:e,onChange:r=>n(r.target.value),style:{width:"100%",padding:"6px 10px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",color:"#fff",fontSize:"12px",cursor:"pointer"},children:i.map(r=>L.jsx("option",{value:r,style:{background:"#1a1a2e"},children:r},r))})]})}function nr({label:t,checked:e,onChange:n}){return L.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",cursor:"pointer",fontSize:"12px"},children:[L.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{cursor:"pointer"}}),L.jsx("span",{style:{opacity:.8},children:t})]})}const NA=ff.createRoot(document.getElementById("root"));NA.render(L.jsx(UA,{}));
