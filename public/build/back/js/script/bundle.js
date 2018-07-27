/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/back/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/back/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/back/js/app-bundle.js":
/*!**************************************!*\
  !*** ./assets/back/js/app-bundle.js ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min__);

var routes = __webpack_require__(/*! ./fos_js_routes.json */ "./assets/back/js/fos_js_routes.json");

__WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.setRoutingData(routes);

var companyForm = document.getElementById('company-steps-form');
var button = document.getElementById('steps-formBtn');
var loader = document.getElementById('loader');
var urlCompany = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('start_member');

if (companyForm) {
    companyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var formData = new FormData(companyForm);
            xhr.addEventListener('load', function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        StateLoader(loader, false);
                        resolve(JSON.parse(this.response));
                    } else {
                        StateLoader(loader, false);
                        reject(this.status);
                    }
                }
            });
            xhr.open("POST", urlCompany, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.send(formData);
        }).then(function (data) {
            StateLoader(loader, false);
            processData(data, companyForm, "form-fse-company");
        }).catch(function (error) {
            console.error(error);
        });
    });
}

function StateLoader(element, state) {
    if (state === true) {
        element.classList.remove("form-loader-hidden");
        element.style.display = "block";
    } else {
        element.classList.add("form-loader-hidden");
        element.style.display = "none";
        enableBtn(button);
    }
}

var enableBtn = function enableBtn(elementBtn) {
    return elementBtn.disabled = false;
};

var processData = function processData(data, elem) {
    var wrapper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (data.status === 200) {
        elem.reset();
        if (wrapper) document.getElementById(wrapper).style.display = "none";
        document.getElementById('preloader').style.display = "block";
        window.location.href = data.response.url;
    } else {
        console.log(data);
    }
};

/***/ }),

/***/ "./assets/back/js/appFormValidate.js":
/*!*******************************************!*\
  !*** ./assets/back/js/appFormValidate.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./jquery-message-validate */ "./assets/back/js/jquery-message-validate.js");

// initial variable
var companyForm = $('#company-steps-form');
var departmentForm = $('#department-steps-form');
var errorClass = 'is-invalid';
var validClass = 'success';
var loader = document.getElementById('loader');
var button = document.getElementById('steps-formBtn');

var container = [companyForm, departmentForm];

$(document).ready(function () {
    // init default setting validator
    $.validator.setDefaults({
        wrapper: 'div',
        errorClass: 'invalid-feedback',
        highlight: function highlight(element) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]").addClass(errorClass);
        },
        unhighlight: function unhighlight(element) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
        }
    });
    // init validator with form
    container.map(function (elt) {
        elt.validate({
            onkeyup: false,
            submitHandler: function submitHandler(form) {
                StateLoader(loader, button);
            }
        });
    });
});

function StateLoader(element, elementBtn) {
    element.classList.remove("form-loader-hidden");
    element.style.display = "block";
    disableBtn(elementBtn);
}

var disableBtn = function disableBtn(elementBtn) {
    return elementBtn.disabled = true;
};

/***/ }),

/***/ "./assets/back/js/bundle.js":
/*!**********************************!*\
  !*** ./assets/back/js/bundle.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./appFormValidate */ "./assets/back/js/appFormValidate.js");
__webpack_require__(/*! ./app-bundle */ "./assets/back/js/app-bundle.js");
console.log('ready');

/***/ }),

/***/ "./assets/back/js/fos_js_routes.json":
/*!*******************************************!*\
  !*** ./assets/back/js/fos_js_routes.json ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"base_url":"","routes":{"start_member":{"tokens":[["text","/account/info-start"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]}},"prefix":"","host":"localhost","scheme":"http"}

/***/ }),

/***/ "./assets/back/js/jquery-message-validate.js":
/*!***************************************************!*\
  !*** ./assets/back/js/jquery-message-validate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

jQuery.extend(jQuery.validator.messages, {
    required: "Veuillez renseigner ce champ",
    remote: "Please fix this field.",
    email: "Svp, Entrez une adresse email valide.",
    url: "Url invalide, Format Accepté: (http://www.exemple.com)",
    date: "Svp, Entrez une date. valide ",
    dateISO: "Svp, Entrez une date au format (ISO).",
    number: "Svp, Entrez un numero valide.",
    digits: "Svp, Entrez  only digits.",
    creditcard: "Svp, Entrez a valid credit card number.",
    equalTo: "Svp, Entrez the same value again.",
    accept: "Svp, Entrez une extension valide",
    maxlength: jQuery.validator.format("Svp, Entrez no more than {0} characters."),
    minlength: jQuery.validator.format("Svp, Entrez at least {0} characters."),
    rangelength: jQuery.validator.format("Svp, Entrez a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Svp, Entrez a value between {0} and {1}."),
    max: jQuery.validator.format("Svp, Entrez a value less than or equal to {0}."),
    min: jQuery.validator.format("Svp, Entrez a value greater than or equal to {0}.")
});

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  var n = t(); true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n.Routing : (e.Routing = n.Routing, e.fos = { Router: n.Router });
}(this, function () {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || { base_url: "", prefix: "", host: "", scheme: "" }, this.setRoutes(n || {});
    }return o(i, [{ key: "setRoutingData", value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), this.setHost(e.host), this.setScheme(e.scheme);
      } }, { key: "setRoutes", value: function value(e) {
        this.routes_ = Object.freeze(e);
      } }, { key: "getRoutes", value: function value() {
        return this.routes_;
      } }, { key: "setBaseUrl", value: function value(e) {
        this.context_.base_url = e;
      } }, { key: "getBaseUrl", value: function value() {
        return this.context_.base_url;
      } }, { key: "setPrefix", value: function value(e) {
        this.context_.prefix = e;
      } }, { key: "setScheme", value: function value(e) {
        this.context_.scheme = e;
      } }, { key: "getScheme", value: function value() {
        return this.context_.scheme;
      } }, { key: "setHost", value: function value(e) {
        this.context_.host = e;
      } }, { key: "getHost", value: function value() {
        return this.context_.host;
      } }, { key: "buildQueryParams", value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      } }, { key: "getRoute", value: function value(e) {
        var t = this.context_.prefix + e;if (t in this.routes_) e = t;else if (!(e in this.routes_)) throw new Error('The route "' + e + '" does not exist.');return this.routes_[e];
      } }, { key: "generate", value: function value(e, n, o) {
        var i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            f = !0,
            a = "";if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (f = !1);{
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');var n = i.defaults && t[3] in i.defaults;if (!1 === f || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (f) return;throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }o = i.defaults[t[3]];
              }var a = !0 === o || !1 === o || "" === o;if (!a || !f) {
                var c = encodeURIComponent(o).replace(/%2F/g, "/");"null" === c && null === o && (c = ""), u = t[1] + c + u;
              }f = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + u : a && this.getHost() !== a ? u = this.getScheme() + "://" + a + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + u), Object.keys(s).length > 0) {
          var c = void 0,
              l = [],
              h = function h(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, l.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };for (c in s) {
            this.buildQueryParams(c, s[c], h);
          }u = u + "?" + l.join("&").replace(/%20/g, "+");
        }return u;
      } }], [{ key: "getInstance", value: function value() {
        return r;
      } }, { key: "setData", value: function value(e) {
        var t = i.getInstance();t.setRoutingData(e);
      } }]), i;
  }();i.Route, i.Context;var r = new i();return { Router: i, Routing: r };
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2ExMjRhNDA0YjQ0ZThkN2RjYzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYXBwLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiY29tcGFueUZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uIiwibG9hZGVyIiwidXJsQ29tcGFueSIsImdlbmVyYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJTdGF0ZUxvYWRlciIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwidGhlbiIsImRhdGEiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZWxlbWVudCIsInN0YXRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkIiwiZW5hYmxlQnRuIiwiZWxlbWVudEJ0biIsImRpc2FibGVkIiwiZWxlbSIsIndyYXBwZXIiLCJyZXNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsImxvZyIsIiQiLCJkZXBhcnRtZW50Rm9ybSIsImVycm9yQ2xhc3MiLCJ2YWxpZENsYXNzIiwiY29udGFpbmVyIiwicmVhZHkiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmb3JtIiwiZmluZCIsImlkIiwidW5oaWdobGlnaHQiLCJtYXAiLCJlbHQiLCJ2YWxpZGF0ZSIsIm9ua2V5dXAiLCJzdWJtaXRIYW5kbGVyIiwiZGlzYWJsZUJ0biIsImpRdWVyeSIsImV4dGVuZCIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJyZW1vdGUiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiY3JlZGl0Y2FyZCIsImVxdWFsVG8iLCJhY2NlcHQiLCJtYXhsZW5ndGgiLCJmb3JtYXQiLCJtaW5sZW5ndGgiLCJyYW5nZWxlbmd0aCIsInJhbmdlIiwibWF4IiwibWluIiwiZSIsInQiLCJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcyIsIlJvdXRlciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJzY2hlbWUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImYiLCJhIiwidG9rZW5zIiwiZGVmYXVsdHMiLCJjIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpRUFBUixDQUFmOztBQUVBLGdIQUFBQyxDQUFRQyxjQUFSLENBQXVCSCxNQUF2Qjs7QUFFQSxJQUFJSSxjQUFjQyxTQUFTQyxjQUFULENBQXdCLG9CQUF4QixDQUFsQjtBQUNBLElBQUlDLFNBQVNGLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBYjtBQUNBLElBQUlFLFNBQVNILFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlHLGFBQWEsZ0hBQUFQLENBQVFRLFFBQVIsQ0FBaUIsY0FBakIsQ0FBakI7O0FBRUEsSUFBSU4sV0FBSixFQUFpQjtBQUNiQSxnQkFBWU8sZ0JBQVosQ0FBNkIs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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9iYWNrL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvYmFjay9qcy9idW5kbGUuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2ExMjRhNDA0YjQ0ZThkN2RjYzUiLCJpbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbic7XG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5cbmxldCBjb21wYW55Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcHMtZm9ybUJ0bicpO1xubGV0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcbmxldCB1cmxDb21wYW55ID0gUm91dGluZy5nZW5lcmF0ZSgnc3RhcnRfbWVtYmVyJyk7XG5cbmlmIChjb21wYW55Rm9ybSkge1xuICAgIGNvbXBhbnlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjb21wYW55Rm9ybSk7XG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybENvbXBhbnksIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGEoZGF0YSwgY29tcGFueUZvcm0sIFwiZm9ybS1mc2UtY29tcGFueVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBTdGF0ZUxvYWRlcihlbGVtZW50LCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWxvYWRlci1oaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tbG9hZGVyLWhpZGRlblwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVuYWJsZUJ0bihidXR0b24pO1xuICAgIH1cbn1cblxuY29uc3QgZW5hYmxlQnRuID0gZWxlbWVudEJ0biA9PiBlbGVtZW50QnRuLmRpc2FibGVkID0gZmFsc2U7XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKGRhdGEsIGVsZW0sIHdyYXBwZXIgPSBudWxsKSA9PiB7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgZWxlbS5yZXNldCgpO1xuICAgICAgICBpZiAod3JhcHBlcikgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod3JhcHBlcikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlc3BvbnNlLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9hcHAtYnVuZGxlLmpzIiwicmVxdWlyZSgnLi9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZScpO1xuXG4vLyBpbml0aWFsIHZhcmlhYmxlXG5jb25zdCBjb21wYW55Rm9ybSA9ICQoJyNjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmNvbnN0IGRlcGFydG1lbnRGb3JtID0gJCgnI2RlcGFydG1lbnQtc3RlcHMtZm9ybScpO1xubGV0IGVycm9yQ2xhc3MgPSAnaXMtaW52YWxpZCc7XG5sZXQgdmFsaWRDbGFzcyA9ICdzdWNjZXNzJztcbmxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzLWZvcm1CdG4nKTtcblxubGV0IGNvbnRhaW5lciA9IFtjb21wYW55Rm9ybSwgZGVwYXJ0bWVudEZvcm1dO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbml0IGRlZmF1bHQgc2V0dGluZyB2YWxpZGF0b3JcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIHdyYXBwZXI6ICdkaXYnLFxuICAgICAgICBlcnJvckNsYXNzOidpbnZhbGlkLWZlZWRiYWNrJyxcbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgJChlbGVtZW50LmZvcm0pLmZpbmQoXCJsYWJlbFtmb3I9XCIgKyBlbGVtZW50LmlkICsgXCJdXCIpLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICAgICB9LFxuICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKS5hZGRDbGFzcyh2YWxpZENsYXNzKTtcbiAgICAgICAgICAgICQoZWxlbWVudC5mb3JtKS5maW5kKFwibGFiZWxbZm9yPVwiICsgZWxlbWVudC5pZCArIFwiXVwiKS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGluaXQgdmFsaWRhdG9yIHdpdGggZm9ybVxuICAgIGNvbnRhaW5lci5tYXAoKGVsdCkgPT4ge1xuICAgICAgICBlbHQudmFsaWRhdGUoe1xuICAgICAgICAgICAgb25rZXl1cDogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgYnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pO1xuXG5mdW5jdGlvbiBTdGF0ZUxvYWRlcihlbGVtZW50LCBlbGVtZW50QnRuKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS1sb2FkZXItaGlkZGVuXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkaXNhYmxlQnRuKGVsZW1lbnRCdG4pO1xufVxuXG5jb25zdCBkaXNhYmxlQnRuID0gZWxlbWVudEJ0biA9PiBlbGVtZW50QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJyZXF1aXJlKCcuL2FwcEZvcm1WYWxpZGF0ZScpO1xucmVxdWlyZSgnLi9hcHAtYnVuZGxlJyk7XG5jb25zb2xlLmxvZygncmVhZHknKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9idW5kbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VfdXJsXCI6XCJcIixcInJvdXRlc1wiOntcInN0YXJ0X21lbWJlclwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWNjb3VudC9pbmZvLXN0YXJ0XCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W1wiaHR0cFwiXX19LFwicHJlZml4XCI6XCJcIixcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwic2NoZW1lXCI6XCJodHRwXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYmFjay9qcy9mb3NfanNfcm91dGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2JhY2svanMvZm9zX2pzX3JvdXRlcy5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImpRdWVyeS5leHRlbmQoalF1ZXJ5LnZhbGlkYXRvci5tZXNzYWdlcywge1xuICAgIHJlcXVpcmVkOiBcIlZldWlsbGV6IHJlbnNlaWduZXIgY2UgY2hhbXBcIixcbiAgICByZW1vdGU6IFwiUGxlYXNlIGZpeCB0aGlzIGZpZWxkLlwiLFxuICAgIGVtYWlsOiBcIlN2cCwgRW50cmV6IHVuZSBhZHJlc3NlIGVtYWlsIHZhbGlkZS5cIixcbiAgICB1cmw6IFwiVXJsIGludmFsaWRlLCBGb3JtYXQgQWNjZXB0w6k6IChodHRwOi8vd3d3LmV4ZW1wbGUuY29tKVwiLFxuICAgIGRhdGU6IFwiU3ZwLCBFbnRyZXogdW5lIGRhdGUuIHZhbGlkZSBcIixcbiAgICBkYXRlSVNPOiBcIlN2cCwgRW50cmV6IHVuZSBkYXRlIGF1IGZvcm1hdCAoSVNPKS5cIixcbiAgICBudW1iZXI6IFwiU3ZwLCBFbnRyZXogdW4gbnVtZXJvIHZhbGlkZS5cIixcbiAgICBkaWdpdHM6IFwiU3ZwLCBFbnRyZXogIG9ubHkgZGlnaXRzLlwiLFxuICAgIGNyZWRpdGNhcmQ6IFwiU3ZwLCBFbnRyZXogYSB2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIuXCIsXG4gICAgZXF1YWxUbzogXCJTdnAsIEVudHJleiB0aGUgc2FtZSB2YWx1ZSBhZ2Fpbi5cIixcbiAgICBhY2NlcHQ6IFwiU3ZwLCBFbnRyZXogdW5lIGV4dGVuc2lvbiB2YWxpZGVcIixcbiAgICBtYXhsZW5ndGg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLlwiKSxcbiAgICBtaW5sZW5ndGg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMuXCIpLFxuICAgIHJhbmdlbGVuZ3RoOiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIpLFxuICAgIHJhbmdlOiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS5cIiksXG4gICAgbWF4OiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiksXG4gICAgbWluOiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIilcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2pxdWVyeS1tZXNzYWdlLXZhbGlkYXRlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIsc2NoZW1lOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2U7aWYodCBpbiB0aGlzLnJvdXRlc18pZT10O2Vsc2UgaWYoIShlIGluIHRoaXMucm91dGVzXykpdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpO3JldHVybiB0aGlzLnJvdXRlc19bZV19fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4sbyl7dmFyIGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsZj0hMCxhPVwiXCI7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoZj0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWZ8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihmKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWYpe3ZhciBjPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1jJiZudWxsPT09byYmKGM9XCJcIiksdT10WzFdK2MrdX1mPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGM9dm9pZCAwLGw9W10saD1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxsLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihjIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGMsc1tjXSxoKTt1PXUrXCI/XCIrbC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiXSwic291cmNlUm9vdCI6IiJ9