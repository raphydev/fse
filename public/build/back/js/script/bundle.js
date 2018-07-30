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

/*
|--------------------------------------------------------------------------
| Global File constance
|--------------------------------------------------------------------------
*/

// form identify
var companyForm = document.getElementById('company-steps-form');
var departmentForm = document.getElementById('department-steps-form');
var shareholderForm = document.getElementById('shareholer-steps-form');

// form url binding
var urlCompany = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('start_member');
var urlDepartment = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('second_member');
var urlShareholder = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('third_member');

// components
var button = document.getElementById('steps-formBtn');
var loader = document.getElementById('loader');

/*
|--------------------------------------------------------------------------
| Ajax Calling Function
|--------------------------------------------------------------------------
*/

if (companyForm) {
    companyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        AjaxCallPostMethod(companyForm, urlCompany).then(function (data) {
            StateLoader(loader, false);
            processData(data, companyForm, "form-fse-steps", true);
        }).catch(function (error) {
            console.error(error);
        });
    });
}

if (departmentForm) {
    departmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        AjaxCallPostMethod(departmentForm, urlDepartment).then(function (data) {
            StateLoader(loader, false);
            processData(data, departmentForm, "form-fse-steps", false);
        }).catch(function (error) {
            console.error(error);
        });
    });
}

if (shareholderForm) {
    shareholderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        AjaxCallPostMethod(shareholderForm, urlShareholder).then(function (data) {
            StateLoader(loader, false);
            processData(data, shareholderForm, "form-fse-steps", false);
        }).catch(function (error) {
            console.error(error);
        });
    });
}

/*
|--------------------------------------------------------------------------
| Function
|--------------------------------------------------------------------------
*/

/**
 * Ajax calling For Post Method
 * @param formElement
 * @param FormElementUrl
 * @returns {Promise<any>}
 * @constructor
 */
var AjaxCallPostMethod = function AjaxCallPostMethod(formElement, FormElementUrl) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var formData = new FormData(formElement);
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
        xhr.open("POST", FormElementUrl, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(formData);
    });
};

/**
 * Loader process
 * @param element
 * @param state
 * @constructor
 */
var StateLoader = function StateLoader(element, state) {
    if (state === true) {
        element.classList.remove("form-loader-hidden");
        element.style.display = "block";
    } else {
        element.classList.add("form-loader-hidden");
        element.style.display = "none";
        enableBtn(button);
    }
};

/**
 * Button Enable
 * @param elementBtn
 * @returns {boolean}
 */
var enableBtn = function enableBtn(elementBtn) {
    return elementBtn.disabled = false;
};

/**
 * Data response process
 * @param data
 * @param elem
 * @param wrapper
 * @param redirect
 */
var processData = function processData(data, elem) {
    var wrapper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var redirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (data.status === 200) {
        appAlert(data.info, 'success', data.title, 3000);
        elem.reset();
        if (redirect && redirect === true) {
            if (wrapper) document.getElementById(wrapper).style.display = "none";
            // Preload is class Loader for Parent Layout
            document.getElementById('preloader').style.display = "block";
            window.location.href = data.response.url;
        }
    } else {
        appAlert(data.info, 'error', data.title, 3000);
    }
};

var appAlert = function appAlert($message, $type, $title, $duration) {
    app.toast($message, {
        actionColor: $type,
        actionTitle: $title,
        duration: $duration
    });
    // here declare let el after element create but before doesn't not exist
    var el = document.querySelector('.toast');
    if (el.hasAttribute("style")) {
        el.style.display = 'flex';
    }
    setTimeout(function () {
        el.style.display = 'none';
    }, $duration);
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
// form
var companyForm = $('#company-steps-form');
var departmentForm = $('#department-steps-form');
var shareholderForm = $('#shareholer-steps-form');

//Error
var errorClass = 'is-invalid';
var validClass = 'success';

// components
var loader = document.getElementById('loader');
var button = document.getElementById('steps-formBtn');

// array.map class form sending ajax in app-bundle.js
var container = [companyForm, departmentForm, shareholderForm];

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

var StateLoader = function StateLoader(element, elementBtn) {
    element.classList.remove("form-loader-hidden");
    element.style.display = "block";
    disableBtn(elementBtn);
};

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

module.exports = {"base_url":"","routes":{"start_member":{"tokens":[["text","/account/info-start"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"second_member":{"tokens":[["text","/account/info-second"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"third_member":{"tokens":[["text","/account/info-third"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]}},"prefix":"","host":"localhost","scheme":"http"}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmVhZDVhZWVlYjE0MzM5N2RhNzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYXBwLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiY29tcGFueUZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVwYXJ0bWVudEZvcm0iLCJzaGFyZWhvbGRlckZvcm0iLCJ1cmxDb21wYW55IiwiZ2VuZXJhdGUiLCJ1cmxEZXBhcnRtZW50IiwidXJsU2hhcmVob2xkZXIiLCJidXR0b24iLCJsb2FkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFqYXhDYWxsUG9zdE1ldGhvZCIsInRoZW4iLCJkYXRhIiwiU3RhdGVMb2FkZXIiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZm9ybUVsZW1lbnQiLCJGb3JtRWxlbWVudFVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZWxlbWVudCIsInN0YXRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkIiwiZW5hYmxlQnRuIiwiZWxlbWVudEJ0biIsImRpc2FibGVkIiwiZWxlbSIsIndyYXBwZXIiLCJyZWRpcmVjdCIsImFwcEFsZXJ0IiwiaW5mbyIsInRpdGxlIiwicmVzZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmwiLCIkbWVzc2FnZSIsIiR0eXBlIiwiJHRpdGxlIiwiJGR1cmF0aW9uIiwiYXBwIiwidG9hc3QiLCJhY3Rpb25Db2xvciIsImFjdGlvblRpdGxlIiwiZHVyYXRpb24iLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiJCIsImVycm9yQ2xhc3MiLCJ2YWxpZENsYXNzIiwiY29udGFpbmVyIiwicmVhZHkiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmb3JtIiwiZmluZCIsImlkIiwidW5oaWdobGlnaHQiLCJtYXAiLCJlbHQiLCJ2YWxpZGF0ZSIsIm9ua2V5dXAiLCJzdWJtaXRIYW5kbGVyIiwiZGlzYWJsZUJ0biIsImxvZyIsImpRdWVyeSIsImV4dGVuZCIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJyZW1vdGUiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiY3JlZGl0Y2FyZCIsImVxdWFsVG8iLCJhY2NlcHQiLCJtYXhsZW5ndGgiLCJmb3JtYXQiLCJtaW5sZW5ndGgiLCJyYW5nZWxlbmd0aCIsInJhbmdlIiwibWF4IiwibWluIiwiZSIsInQiLCJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcyIsIlJvdXRlciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJzY2hlbWUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImYiLCJhIiwidG9rZW5zIiwiZGVmYXVsdHMiLCJjIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpRUFB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LEVBQVc7QUFBQyxZQUFJQyxJQUFFdUIsRUFBRTBDLFdBQUYsRUFBTixDQUFzQmpFLEVBQUVwSCxjQUFGLENBQWlCbUgsQ0FBakI7QUFBb0IsT0FBM0UsRUFBaEQsQ0FBeHpGLEdBQXU3RndCLENBQTk3RjtBQUFnOEYsR0FBdGpHLEVBQTNtQixDQUFvcUhBLEVBQUUyQyxLQUFGLEVBQVEzQyxFQUFFNEMsT0FBVixDQUFrQixJQUFJOUIsSUFBRSxJQUFJZCxDQUFKLEVBQU4sQ0FBWSxPQUFNLEVBQUNsQixRQUFPa0IsQ0FBUixFQUFVNUksU0FBUTBKLENBQWxCLEVBQU47QUFBMkIsQ0FBM2hJLENBQUQsQyIsImZpbGUiOiJqcy9zY3JpcHQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2JhY2svXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9iYWNrL2pzL2J1bmRsZS5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZWFkNWFlZWViMTQzMzk3ZGE3OCIsImltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluJztcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4vZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgR2xvYmFsIEZpbGUgY29uc3RhbmNlXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8vIGZvcm0gaWRlbnRpZnlcbmxldCBjb21wYW55Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmxldCBkZXBhcnRtZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXBhcnRtZW50LXN0ZXBzLWZvcm0nKTtcbmxldCBzaGFyZWhvbGRlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmVob2xlci1zdGVwcy1mb3JtJyk7XG5cbi8vIGZvcm0gdXJsIGJpbmRpbmdcbmxldCB1cmxDb21wYW55ID0gUm91dGluZy5nZW5lcmF0ZSgnc3RhcnRfbWVtYmVyJyk7XG5sZXQgdXJsRGVwYXJ0bWVudCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3NlY29uZF9tZW1iZXInKTtcbmxldCB1cmxTaGFyZWhvbGRlciA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RoaXJkX21lbWJlcicpO1xuXG4vLyBjb21wb25lbnRzXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzLWZvcm1CdG4nKTtcbmxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQWpheCBDYWxsaW5nIEZ1bmN0aW9uXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmlmIChjb21wYW55Rm9ybSkge1xuICAgIGNvbXBhbnlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBamF4Q2FsbFBvc3RNZXRob2QoY29tcGFueUZvcm0sIHVybENvbXBhbnkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhKGRhdGEsIGNvbXBhbnlGb3JtLCBcImZvcm0tZnNlLXN0ZXBzXCIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmlmIChkZXBhcnRtZW50Rm9ybSkge1xuICAgIGRlcGFydG1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBamF4Q2FsbFBvc3RNZXRob2QoZGVwYXJ0bWVudEZvcm0sIHVybERlcGFydG1lbnQpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhKGRhdGEsIGRlcGFydG1lbnRGb3JtLCBcImZvcm0tZnNlLXN0ZXBzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5pZiAoc2hhcmVob2xkZXJGb3JtKSB7XG4gICAgc2hhcmVob2xkZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBamF4Q2FsbFBvc3RNZXRob2Qoc2hhcmVob2xkZXJGb3JtLCB1cmxTaGFyZWhvbGRlcilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGEoZGF0YSwgc2hhcmVob2xkZXJGb3JtLCBcImZvcm0tZnNlLXN0ZXBzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEZ1bmN0aW9uXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cblxuLyoqXG4gKiBBamF4IGNhbGxpbmcgRm9yIFBvc3QgTWV0aG9kXG4gKiBAcGFyYW0gZm9ybUVsZW1lbnRcbiAqIEBwYXJhbSBGb3JtRWxlbWVudFVybFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBamF4Q2FsbFBvc3RNZXRob2QgPSAoZm9ybUVsZW1lbnQsIEZvcm1FbGVtZW50VXJsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5zdGF0dXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIEZvcm1FbGVtZW50VXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pXG59O1xuXG5cbi8qKlxuICogTG9hZGVyIHByb2Nlc3NcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGF0ZUxvYWRlciA9IChlbGVtZW50LCBzdGF0ZSkgPT4ge1xuICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWxvYWRlci1oaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tbG9hZGVyLWhpZGRlblwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVuYWJsZUJ0bihidXR0b24pO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnV0dG9uIEVuYWJsZVxuICogQHBhcmFtIGVsZW1lbnRCdG5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmFibGVCdG4gPSBlbGVtZW50QnRuID0+IGVsZW1lbnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBEYXRhIHJlc3BvbnNlIHByb2Nlc3NcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gZWxlbVxuICogQHBhcmFtIHdyYXBwZXJcbiAqIEBwYXJhbSByZWRpcmVjdFxuICovXG5jb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhLCBlbGVtLCB3cmFwcGVyID0gbnVsbCwgcmVkaXJlY3QgPSB0cnVlKSA9PiB7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgYXBwQWxlcnQoZGF0YS5pbmZvLCAnc3VjY2VzcycsIGRhdGEudGl0bGUsIDMwMDApO1xuICAgICAgICBlbGVtLnJlc2V0KCk7XG4gICAgICAgIGlmIChyZWRpcmVjdCAmJiByZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdyYXBwZXIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vIFByZWxvYWQgaXMgY2xhc3MgTG9hZGVyIGZvciBQYXJlbnQgTGF5b3V0XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5yZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhcHBBbGVydChkYXRhLmluZm8sICdlcnJvcicsIGRhdGEudGl0bGUsIDMwMDApO1xuICAgIH1cbn07XG5cbmNvbnN0IGFwcEFsZXJ0ID0gKCRtZXNzYWdlLCAkdHlwZSwgJHRpdGxlLCAkZHVyYXRpb24pID0+IHtcbiAgICBhcHAudG9hc3QoJG1lc3NhZ2UsIHtcbiAgICAgICAgYWN0aW9uQ29sb3I6ICR0eXBlLFxuICAgICAgICBhY3Rpb25UaXRsZTogJHRpdGxlLFxuICAgICAgICBkdXJhdGlvbjogJGR1cmF0aW9uXG4gICAgfSk7XG4gICAgLy8gaGVyZSBkZWNsYXJlIGxldCBlbCBhZnRlciBlbGVtZW50IGNyZWF0ZSBidXQgYmVmb3JlIGRvZXNuJ3Qgbm90IGV4aXN0XG4gICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QnKTtcbiAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJzdHlsZVwiKSkge1xuICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sICRkdXJhdGlvbik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2FwcC1idW5kbGUuanMiLCJyZXF1aXJlKCcuL2pxdWVyeS1tZXNzYWdlLXZhbGlkYXRlJyk7XG5cbi8vIGluaXRpYWwgdmFyaWFibGVcbi8vIGZvcm1cbmNvbnN0IGNvbXBhbnlGb3JtID0gJCgnI2NvbXBhbnktc3RlcHMtZm9ybScpO1xuY29uc3QgZGVwYXJ0bWVudEZvcm0gPSAkKCcjZGVwYXJ0bWVudC1zdGVwcy1mb3JtJyk7XG5jb25zdCBzaGFyZWhvbGRlckZvcm0gPSAkKCcjc2hhcmVob2xlci1zdGVwcy1mb3JtJyk7XG5cbi8vRXJyb3JcbmxldCBlcnJvckNsYXNzID0gJ2lzLWludmFsaWQnO1xubGV0IHZhbGlkQ2xhc3MgPSAnc3VjY2Vzcyc7XG5cbi8vIGNvbXBvbmVudHNcbmxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzLWZvcm1CdG4nKTtcblxuLy8gYXJyYXkubWFwIGNsYXNzIGZvcm0gc2VuZGluZyBhamF4IGluIGFwcC1idW5kbGUuanNcbmxldCBjb250YWluZXIgPSBbY29tcGFueUZvcm0sIGRlcGFydG1lbnRGb3JtLCBzaGFyZWhvbGRlckZvcm1dO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbml0IGRlZmF1bHQgc2V0dGluZyB2YWxpZGF0b3JcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIHdyYXBwZXI6ICdkaXYnLFxuICAgICAgICBlcnJvckNsYXNzOidpbnZhbGlkLWZlZWRiYWNrJyxcbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgJChlbGVtZW50LmZvcm0pLmZpbmQoXCJsYWJlbFtmb3I9XCIgKyBlbGVtZW50LmlkICsgXCJdXCIpLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICAgICB9LFxuICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKS5hZGRDbGFzcyh2YWxpZENsYXNzKTtcbiAgICAgICAgICAgICQoZWxlbWVudC5mb3JtKS5maW5kKFwibGFiZWxbZm9yPVwiICsgZWxlbWVudC5pZCArIFwiXVwiKS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGluaXQgdmFsaWRhdG9yIHdpdGggZm9ybVxuICAgIGNvbnRhaW5lci5tYXAoKGVsdCkgPT4ge1xuICAgICAgICBlbHQudmFsaWRhdGUoe1xuICAgICAgICAgICAgb25rZXl1cDogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgYnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pO1xuXG5jb25zdCBTdGF0ZUxvYWRlciA9IChlbGVtZW50LCBlbGVtZW50QnRuKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS1sb2FkZXItaGlkZGVuXCIpO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkaXNhYmxlQnRuKGVsZW1lbnRCdG4pO1xufTtcblxuY29uc3QgZGlzYWJsZUJ0biA9IGVsZW1lbnRCdG4gPT4gZWxlbWVudEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2JhY2svanMvYXBwRm9ybVZhbGlkYXRlLmpzIiwicmVxdWlyZSgnLi9hcHBGb3JtVmFsaWRhdGUnKTtcbnJlcXVpcmUoJy4vYXBwLWJ1bmRsZScpO1xuY29uc29sZS5sb2coJ3JlYWR5Jyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJiYXNlX3VybFwiOlwiXCIsXCJyb3V0ZXNcIjp7XCJzdGFydF9tZW1iZXJcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2FjY291bnQvaW5mby1zdGFydFwiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJQT1NUXCJdLFwic2NoZW1lc1wiOltcImh0dHBcIl19LFwic2Vjb25kX21lbWJlclwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWNjb3VudC9pbmZvLXNlY29uZFwiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJQT1NUXCJdLFwic2NoZW1lc1wiOltcImh0dHBcIl19LFwidGhpcmRfbWVtYmVyXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9hY2NvdW50L2luZm8tdGhpcmRcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiUE9TVFwiXSxcInNjaGVtZXNcIjpbXCJodHRwXCJdfX0sXCJwcmVmaXhcIjpcIlwiLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJzY2hlbWVcIjpcImh0dHBcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvYmFjay9qcy9mb3NfanNfcm91dGVzLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwialF1ZXJ5LmV4dGVuZChqUXVlcnkudmFsaWRhdG9yLm1lc3NhZ2VzLCB7XG4gICAgcmVxdWlyZWQ6IFwiVmV1aWxsZXogcmVuc2VpZ25lciBjZSBjaGFtcFwiLFxuICAgIHJlbW90ZTogXCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsXG4gICAgZW1haWw6IFwiU3ZwLCBFbnRyZXogdW5lIGFkcmVzc2UgZW1haWwgdmFsaWRlLlwiLFxuICAgIHVybDogXCJVcmwgaW52YWxpZGUsIEZvcm1hdCBBY2NlcHTDqTogKGh0dHA6Ly93d3cuZXhlbXBsZS5jb20pXCIsXG4gICAgZGF0ZTogXCJTdnAsIEVudHJleiB1bmUgZGF0ZS4gdmFsaWRlIFwiLFxuICAgIGRhdGVJU086IFwiU3ZwLCBFbnRyZXogdW5lIGRhdGUgYXUgZm9ybWF0IChJU08pLlwiLFxuICAgIG51bWJlcjogXCJTdnAsIEVudHJleiB1biBudW1lcm8gdmFsaWRlLlwiLFxuICAgIGRpZ2l0czogXCJTdnAsIEVudHJleiAgb25seSBkaWdpdHMuXCIsXG4gICAgY3JlZGl0Y2FyZDogXCJTdnAsIEVudHJleiBhIHZhbGlkIGNyZWRpdCBjYXJkIG51bWJlci5cIixcbiAgICBlcXVhbFRvOiBcIlN2cCwgRW50cmV6IHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxuICAgIGFjY2VwdDogXCJTdnAsIEVudHJleiB1bmUgZXh0ZW5zaW9uIHZhbGlkZVwiLFxuICAgIG1heGxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuXCIpLFxuICAgIG1pbmxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIiksXG4gICAgcmFuZ2VsZW5ndGg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy5cIiksXG4gICAgcmFuZ2U6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LlwiKSxcbiAgICBtYXg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxcbiAgICBtaW46IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2JhY2svanMvanF1ZXJ5LW1lc3NhZ2UtdmFsaWRhdGUuanMiLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixzY2hlbWU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZTtpZih0IGluIHRoaXMucm91dGVzXyllPXQ7ZWxzZSBpZighKGUgaW4gdGhpcy5yb3V0ZXNfKSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyk7cmV0dXJuIHRoaXMucm91dGVzX1tlXX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbixvKXt2YXIgaT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixmPSEwLGE9XCJcIjtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChmPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Znx8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGYpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhZil7dmFyIGM9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWMmJm51bGw9PT1vJiYoYz1cIlwiKSx1PXRbMV0rYyt1fWY9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWE/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgYz12b2lkIDAsbD1bXSxoPWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGwucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGMgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoYyxzW2NdLGgpO3U9dStcIj9cIitsLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=