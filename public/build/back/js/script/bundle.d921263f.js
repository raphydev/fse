!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/back/",t(t.s="2tXX")}({"2tXX":function(e,t,n){n("efzA"),n("z8fz"),console.log("ready")},NoSp:function(e,t){jQuery.extend(jQuery.validator.messages,{required:"Veuillez renseigner ce champ",remote:"Please fix this field.",email:"Svp, Entrez une adresse email valide.",url:"Url invalide, Format Accepté: (http://www.exemple.com)",date:"Svp, Entrez une date. valide ",dateISO:"Svp, Entrez une date au format (ISO).",number:"Svp, Entrez un numero valide.",digits:"Svp, Entrez  only digits.",creditcard:"Svp, Entrez a valid credit card number.",equalTo:"Svp, Entrez the same value again.",accept:"Svp, Entrez une extension valide",maxlength:jQuery.validator.format("Svp, Entrez no more than {0} characters."),minlength:jQuery.validator.format("Svp, Entrez at least {0} characters."),rangelength:jQuery.validator.format("Svp, Entrez a value between {0} and {1} characters long."),range:jQuery.validator.format("Svp, Entrez a value between {0} and {1}."),max:jQuery.validator.format("Svp, Entrez a value less than or equal to {0}."),min:jQuery.validator.format("Svp, Entrez a value greater than or equal to {0}.")})},QsNM:function(e,t){e.exports={base_url:"",routes:{start_member:{tokens:[["text","/account/info-start"]],defaults:[],requirements:[],hosttokens:[],methods:["GET","POST"],schemes:["http"]},second_member:{tokens:[["text","/account/info-second"]],defaults:[],requirements:[],hosttokens:[],methods:["GET","POST"],schemes:["http"]},third_member:{tokens:[["text","/account/info-third"]],defaults:[],requirements:[],hosttokens:[],methods:["GET","POST"],schemes:["http"]},fourth_member:{tokens:[["text","/account/info-fourth"]],defaults:[],requirements:[],hosttokens:[],methods:["GET","POST"],schemes:["http"]},five_member:{tokens:[["text","/account/info-five"]],defaults:[],requirements:[],hosttokens:[],methods:["GET","POST"],schemes:["http"]}},prefix:"",host:"localhost",scheme:"http"}},Wfcm:function(e,t,n){var o,r,s,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,a){var u=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n="function"==typeof Symbol&&"symbol"==i(Symbol.iterator)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":i(e)},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function r(t,n){e(this,r),this.context_=t||{base_url:"",prefix:"",host:"",port:"",scheme:""},this.setRoutes(n||{})}return o(r,[{key:"setRoutingData",value:function(e){this.setBaseUrl(e.base_url),this.setRoutes(e.routes),"prefix"in e&&this.setPrefix(e.prefix),"port"in e&&this.setPort(e.port),this.setHost(e.host),this.setScheme(e.scheme)}},{key:"setRoutes",value:function(e){this.routes_=Object.freeze(e)}},{key:"getRoutes",value:function(){return this.routes_}},{key:"setBaseUrl",value:function(e){this.context_.base_url=e}},{key:"getBaseUrl",value:function(){return this.context_.base_url}},{key:"setPrefix",value:function(e){this.context_.prefix=e}},{key:"setScheme",value:function(e){this.context_.scheme=e}},{key:"getScheme",value:function(){return this.context_.scheme}},{key:"setHost",value:function(e){this.context_.host=e}},{key:"getHost",value:function(){return this.context_.host}},{key:"setPort",value:function(e){this.context_.port=e}},{key:"getPort",value:function(){return this.context_.port}},{key:"buildQueryParams",value:function(e,t,o){var r=this,s=void 0,i=new RegExp(/\[\]$/);if(t instanceof Array)t.forEach(function(t,s){i.test(e)?o(e,t):r.buildQueryParams(e+"["+("object"===(void 0===t?"undefined":n(t))?s:"")+"]",t,o)});else if("object"===(void 0===t?"undefined":n(t)))for(s in t)this.buildQueryParams(e+"["+s+"]",t[s],o);else o(e,t)}},{key:"getRoute",value:function(e){var t=this.context_.prefix+e;if(t in this.routes_)e=t;else if(!(e in this.routes_))throw new Error('The route "'+e+'" does not exist.');return this.routes_[e]}},{key:"generate",value:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.getRoute(e),s=n||{},i=t({},s),a="",u=!0,l="",c=void 0===this.getPort()||null===this.getPort()?"":this.getPort();if(r.tokens.forEach(function(t){if("text"===t[0])return a=t[1]+a,void(u=!1);if("variable"!==t[0])throw new Error('The token type "'+t[0]+'" is not supported.');var n=r.defaults&&t[3]in r.defaults;if(!1===u||!n||t[3]in s&&s[t[3]]!=r.defaults[t[3]]){var o=void 0;if(t[3]in s)o=s[t[3]],delete i[t[3]];else{if(!n){if(u)return;throw new Error('The route "'+e+'" requires the parameter "'+t[3]+'".')}o=r.defaults[t[3]]}if(!(!0===o||!1===o||""===o)||!u){var l=encodeURIComponent(o).replace(/%2F/g,"/");"null"===l&&null===o&&(l=""),a=t[1]+l+a}u=!1}else n&&t[3]in i&&delete i[t[3]]}),""===a&&(a="/"),r.hosttokens.forEach(function(e){var t=void 0;return"text"===e[0]?void(l=e[1]+l):void("variable"===e[0]&&(e[3]in s?(t=s[e[3]],delete i[e[3]]):r.defaults&&e[3]in r.defaults&&(t=r.defaults[e[3]]),l=e[1]+t+l))}),a=this.context_.base_url+a,r.requirements&&"_scheme"in r.requirements&&this.getScheme()!=r.requirements._scheme?a=r.requirements._scheme+"://"+(l||this.getHost())+a:void 0!==r.schemes&&void 0!==r.schemes[0]&&this.getScheme()!==r.schemes[0]?a=r.schemes[0]+"://"+(l||this.getHost())+a:l&&this.getHost()!==l+(""===c?"":":"+c)?a=this.getScheme()+"://"+l+(""===c?"":":"+c)+a:!0===o&&(a=this.getScheme()+"://"+this.getHost()+a),Object.keys(i).length>0){var f=void 0,d=[],m=function(e,t){t="function"==typeof t?t():t,t=null===t?"":t,d.push(encodeURIComponent(e)+"="+encodeURIComponent(t))};for(f in i)this.buildQueryParams(f,i[f],m);a=a+"?"+d.join("&").replace(/%20/g,"+")}return a}}],[{key:"getInstance",value:function(){return s}},{key:"setData",value:function(e){r.getInstance().setRoutingData(e)}}]),r}();r.Route,r.Context;var s=new r;return{Router:r,Routing:s}}();r=[],o=u.Routing,void 0!==(s="function"==typeof o?o.apply(t,r):o)&&(e.exports=s)}()},efzA:function(e,t,n){n("NoSp");var o=$("#company-steps-form"),r=$("#department-steps-form"),s=$("#shareholer-steps-form"),i=$("#positioning-steps-form"),a=document.getElementById("loader"),u=document.getElementById("steps-formBtn"),l=[o,r,s,i];$(document).ready(function(){$.validator.setDefaults({wrapper:"div",errorClass:"invalid-feedback",highlight:function(e){$(e).addClass("is-invalid").removeClass("success"),$(e.form).find("label[for="+e.id+"]").addClass("is-invalid")},unhighlight:function(e){$(e).removeClass("is-invalid").addClass("success"),$(e.form).find("label[for="+e.id+"]").removeClass("is-invalid")}}),l.map(function(e){e.validate({onkeyup:!1,submitHandler:function(e){c(a,u)}})})});var c=function(e,t){e.classList.remove("form-loader-hidden"),e.style.display="block",f(t)},f=function(e){return e.disabled=!0}},z8fz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Wfcm"),r=n.n(o),s=n("QsNM");r.a.setRoutingData(s);for(var i=document.getElementById("company-steps-form"),a=document.getElementById("department-steps-form"),u=document.getElementById("shareholer-steps-form"),l=document.getElementById("positioning-steps-form"),c=r.a.generate("start_member"),f=r.a.generate("second_member"),d=r.a.generate("third_member"),m=r.a.generate("fourth_member"),h=document.getElementById("steps-formBtn"),p=document.getElementById("loader"),v=document.getElementsByTagName("textarea"),y=[],g=0;g<v.length;g++)y.push(v[g].id);y.length>0&&y.map(function(e){_(e)}),i&&i.addEventListener("submit",function(e){e.preventDefault(),b(i,c).then(function(e){x(p,!1),S(e,i,"form-fse-steps",!0)}).catch(function(e){console.error(e)})}),a&&a.addEventListener("submit",function(e){e.preventDefault(),b(a,d).then(function(e){x(p,!1),S(e,a,"form-fse-steps",!1)}).catch(function(e){console.error(e)})}),u&&u.addEventListener("submit",function(e){e.preventDefault(),b(u,f).then(function(e){x(p,!1),S(e,u,"form-fse-steps",!1)}).catch(function(e){console.error(e)})}),l&&l.addEventListener("submit",function(e){e.preventDefault(),b(l,m).then(function(e){x(p,!1),S(e,l,"form-fse-steps",!1)}).catch(function(e){console.error(e)})});var b=function(e,t){return new Promise(function(n,o){var r=new XMLHttpRequest,s=new FormData(e);r.addEventListener("load",function(){4===this.readyState&&(200===this.status?(x(p,!1),n(JSON.parse(this.response))):(x(p,!1),o(this.status)))}),r.open("POST",t,!0),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.send(s)})},x=function(e,t){!0===t?(e.classList.remove("form-loader-hidden"),e.style.display="block"):(e.classList.add("form-loader-hidden"),e.style.display="none",E(h))},E=function(e){return e.disabled=!1},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];200===e.status?(k(e.info,"success",e.title,3e3),t.reset(),o&&!0===o&&(n&&(document.getElementById(n).style.display="none"),document.getElementById("preloader").style.display="block",window.location.href=e.response.url)):k(e.info,"error",e.title,3e3)},k=function(e,t,n,o){app.toast(e,{actionColor:t,actionTitle:n,duration:o});var r=document.querySelector(".toast");r.hasAttribute("style")&&(r.style.display="flex"),setTimeout(function(){r.style.display="none"},o)},_=function(e){document.getElementById(e).addEventListener("keyup",function(){this.style.overflow="hidden",this.style.height=0,this.style.height=this.scrollHeight+"px"},!1)}}});
//# sourceMappingURL=bundle.d921263f.js.map