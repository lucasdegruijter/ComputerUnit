/*! For license information please see stripe-alipay.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}({"+keB":function(e,t){var n,r,o,u;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"setupStripe",(function(){return r.stripe=Stripe(r.key),r.stripeConnect&&(r.stripe.stripeAccount=r.stripeConnect),r})),i(this,"handle",(function(){var e={type:"alipay",amount:document.querySelector('meta[name="amount"]').content,currency:document.querySelector('meta[name="currency"]').content,redirect:{return_url:document.querySelector('meta[name="return-url"]').content}};document.getElementById("pay-now").addEventListener("click",(function(t){document.getElementById("pay-now").disabled=!0,document.querySelector("#pay-now > svg").classList.add("hidden"),document.querySelector("#pay-now > span").classList.remove("hidden"),r.stripe.createSource(e).then((function(e){if(e.hasOwnProperty("source"))return window.location=e.source.redirect.url;document.getElementById("pay-now").disabled=!1,document.querySelector("#pay-now > svg").classList.remove("hidden"),document.querySelector("#pay-now > span").classList.add("hidden"),this.errors.textContent="",this.errors.textContent=e.error.message,this.errors.hidden=!1}))}))})),this.key=t,this.stripeConnect=n,this.errors=document.getElementById("errors")}(null!==(n=null===(r=document.querySelector('meta[name="stripe-publishable-key"]'))||void 0===r?void 0:r.content)&&void 0!==n?n:"",null!==(o=null===(u=document.querySelector('meta[name="stripe-account-id"]'))||void 0===u?void 0:u.content)&&void 0!==o?o:"").setupStripe().handle()},7:function(e,t,n){e.exports=n("+keB")}});