!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),a={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};function c(e,n){return new Promise((function(t,o){var r=Math.random()>.3;e+=1,setTimeout((function(){r?t("".concat(e," in ").concat(n,"ms")):o("".concat(e," in ").concat(n,"ms"))}),n)}))}a.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=a.delay.value,o=a.step.value,r=a.amount.value,i=0;i<r;i++){var l=i;console.log(i);var f=Number(t)+i*o;console.log("delay",f),c(l,f).then((function(n,t){e(u).Notify.success("✅ Fulfilled promise ".concat(n))})).catch((function(n,t){e(u).Notify.failure("❌ Rejected promise ".concat(n))}))}n.target.reset()}))}();
//# sourceMappingURL=03-promises.f08369ce.js.map
