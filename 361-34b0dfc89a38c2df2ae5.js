(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{3349:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=u(a(0)),l=u(a(862));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(){return t.default.createElement(l.default,{id:"progressbar",valueText:"15%",value:15})};r.default=o},862:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ProgressBarHeightSize=r.default=void 0;var t=s(a(0)),l=s(a(3)),u=s(a(4)),o=s(a(890));function s(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},u=Object.keys(e);for(t=0;t<u.length;t++)a=u[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)a=u[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=u.default.bind(o.default);r.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var _={heightSize:l.default.oneOf(["tiny","small","medium","large","huge"]),value:l.default.number.isRequired,max:l.default.number,valueText:l.default.string,colorClass:l.default.string},f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},c=function(e){var r=e.heightSize,a=e.value,l=e.max,u=e.valueText,o=e.colorClass,s=i(e,["heightSize","value","max","valueText","colorClass"]),_=d(["progress-bar",r,o,s.className]),f=a/l*100;return t.default.createElement("progress",n({},s,{className:_,max:100,value:f,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,"aria-valuetext":u,tabIndex:"-1"}))};c.propTypes=_,c.defaultProps=f;var g=c;r.default=g},890:function(e,r,a){e.exports={"progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}}}]);
//# sourceMappingURL=361-34b0dfc89a38c2df2ae5.js.map