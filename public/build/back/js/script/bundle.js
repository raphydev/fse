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
var positioningForm = document.getElementById('positioning-steps-form');

// form url binding
var urlCompany = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('start_member');
var urlShareholder = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('second_member');
var urlDepartment = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('third_member');
var urlPositioning = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('fourth_member');

// components
var button = document.getElementById('steps-formBtn');
var loader = document.getElementById('loader');
var text = document.getElementsByTagName("textarea");

var textArray = [];
for (var i = 0; i < text.length; i++) {
    textArray.push(text[i].id);
}

if (textArray.length > 0) {
    textArray.map(function (elt) {
        expandTextarea(elt);
    });
}

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

if (positioningForm) {
    positioningForm.addEventListener('submit', function (event) {
        event.preventDefault();
        AjaxCallPostMethod(positioningForm, urlPositioning).then(function (data) {
            StateLoader(loader, false);
            processData(data, positioningForm, "form-fse-steps", false);
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

var expandTextarea = function expandTextarea(id) {
    document.getElementById(id).addEventListener('keyup', function () {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
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
var positioningForm = $('#positioning-steps-form');

//Error
var errorClass = 'is-invalid';
var validClass = 'success';

// components
var loader = document.getElementById('loader');
var button = document.getElementById('steps-formBtn');

// array.map class form sending ajax in app-bundle.js
var container = [companyForm, departmentForm, shareholderForm, positioningForm];

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

module.exports = {"base_url":"","routes":{"start_member":{"tokens":[["text","/account/info-start"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"second_member":{"tokens":[["text","/account/info-second"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"third_member":{"tokens":[["text","/account/info-third"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"fourth_member":{"tokens":[["text","/account/info-fourth"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]},"five_member":{"tokens":[["text","/account/info-five"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":["http"]}},"prefix":"","host":"localhost","scheme":"http"}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDE4OGQ4NWM3ZmJlMDBiYjY1YTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYXBwLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiY29tcGFueUZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVwYXJ0bWVudEZvcm0iLCJzaGFyZWhvbGRlckZvcm0iLCJwb3NpdGlvbmluZ0Zvcm0iLCJ1cmxDb21wYW55IiwiZ2VuZXJhdGUiLCJ1cmxTaGFyZWhvbGRlciIsInVybERlcGFydG1lbnQiLCJ1cmxQb3NpdGlvbmluZyIsImJ1dHRvbiIsImxvYWRlciIsInRleHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRleHRBcnJheSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiaWQiLCJtYXAiLCJlbHQiLCJleHBhbmRUZXh0YXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiQWpheENhbGxQb3N0TWV0aG9kIiwidGhlbiIsImRhdGEiLCJTdGF0ZUxvYWRlciIsInByb2Nlc3NEYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJmb3JtRWxlbWVudCIsIkZvcm1FbGVtZW50VXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJlbGVtZW50Iiwic3RhdGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGQiLCJlbmFibGVCdG4iLCJlbGVtZW50QnRuIiwiZGlzYWJsZWQiLCJlbGVtIiwid3JhcHBlciIsInJlZGlyZWN0IiwiYXBwQWxlcnQiLCJpbmZvIiwidGl0bGUiLCJyZXNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIiRtZXNzYWdlIiwiJHR5cGUiLCIkdGl0bGUiLCIkZHVyYXRpb24iLCJhcHAiLCJ0b2FzdCIsImFjdGlvbkNvbG9yIiwiYWN0aW9uVGl0bGUiLCJkdXJhdGlvbiIsImVsIiwicXVlcnlTZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJvdmVyZmxvdyIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsIiQiLCJlcnJvckNsYXNzIiwidmFsaWRDbGFzcyIsImNvbnRhaW5lciIsInJlYWR5IiwidmFsaWRhdG9yIiwic2V0RGVmYXVsdHMiLCJoaWdobGlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZm9ybSIsImZpbmQiLCJ1bmhpZ2hsaWdodCIsInZhbGlkYXRlIiwib25rZXl1cCIsInN1Ym1pdEhhbmRsZXIiLCJkaXNhYmxlQnRuIiwibG9nIiwialF1ZXJ5IiwiZXh0ZW5kIiwibWVzc2FnZXMiLCJyZXF1aXJlZCIsInJlbW90ZSIsImVtYWlsIiwiZGF0ZSIsImRhdGVJU08iLCJudW1iZXIiLCJkaWdpdHMiLCJjcmVkaXRjYXJkIiwiZXF1YWxUbyIsImFjY2VwdCIsIm1heGxlbmd0aCIsImZvcm1hdCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJtYXgiLCJtaW4iLCJlIiwidCIsIm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiUm91dGVyIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0Iiwic2NoZW1lIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJmIiwiYSIsInRva2VucyIsImRlZmF1bHRzIiwiYyIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImdldEhvc3QiLCJzY2hlbWVzIiwia2V5cyIsImwiLCJoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpRUFBUixDQUFmO0FBQ0EsZ0hBQUFDLENBQVFDLGNBQVIsQ0FBdUJILE1BQXZCOztBQUVBOzs7Ozs7QUFNQTtBQUNBLElBQUlJLGNBQWNDLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQWxCO0FBQ0EsSUFBSUMsaUJBQWlCRixTQUFTQyxjQUFULENBQXdCLHVCQUF4QixDQUFyQjtBQUNBLElBQUlFLGtCQUFrQkgsU0FBU0MsY0FBVCxDQUF3Qix1QkFBeEIsQ0FBdEI7QUFDQSxJQUFJRyxrQkFBa0JKLFNBQVNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQXRCOztBQUdBO0FBQ0EsSUFBSUksYUFBYSxnSEFBQVIsQ0FBUVMsUUFBUixDQUFpQixjQUFqQixDQUFqQjtBQUNBLElBQUlDLGlCQUFpQixnSEFBQVYsQ0FBUVMsUUFBUixDQUFpQixlQUFqQixDQUFyQjtBQUNBLElBQUlFLGdCQUFnQixnSEFBQVgsQ0FBUVMsUUFBUixDQUFpQixjQUFqQixDQUFwQjtBQUNBLElBQUlHLGlCQUFpQixnSEFBQVosQ0FBUVMsUUFBUixDQUFpQixlQUFqQixDQUFyQjs7QUFHQTtBQUNBLElBQUlJLFNBQVNWLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBYjtBQUNBLElBQUlVLFNBQVNYLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlXLE9BQU9aLFNBQVNhLG9CQUFULENBQThCLFVBQTlCLENBQVg7O0FBRUEsSUFBSUMsWUFBWSxFQUFoQjtBQUNBLEtBQUssSUFBSUMsSUFBRSxDQUFYLEVBQWNBLElBQUlILEtBQUtJLE1BQXZCLEVBQStCRCxHQUEvQixFQUFvQztBQUNoQ0QsY0FBVUcsSUFBVixDQUFlTCxLQUFLRyxDQUFMLEVBQVFHLEVBQXZCO0FBQ0g7O0FBRUQsSUFBSUosVUFBVUUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QkYsY0FBVUssR0FBVixDQUFjLFVBQUNDLEdBQUQsRUFBUztBQUNuQkMsdUJBQWVELEdBQWY7QUFDSCxLQUZEO0FBR0g7O0FBRUQ7Ozs7OztBQU1BLElBQUlyQixXQUFKLEVBQWlCO0FBQ2JBLGdCQUFZdUIsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsVUFBVUMsS0FBVixFQUFpQjtBQUNwREEsY0FBTUMsY0FBTjtBQUNBQywyQkFBbUIxQixXQUFuQixFQUFnQ00sVUFBaEMsRUFDS3FCLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDWkMsd0JBQVlqQixNQUFaLEVBQW9CLEtBQXBCO0FBQ0FrQix3QkFBWUYsSUFBWixFQUFrQjVCLFdBQWxCLEVBQStCLGdCQUEvQixFQUFpRCxJQUFqRDtBQUNILFNBSkwsRUFLSytCLEtBTEwsQ0FLVyxVQUFDQyxLQUFELEVBQVc7QUFDZEMsb0JBQVFELEtBQVIsQ0FBY0EsS0FBZDtBQUNILFNBUEw7QUFRSCxLQVZEO0FBV0g7O0FBRUQsSUFBSTdCLGNBQUosRUFBb0I7QUFDaEJBLG1CQUFlb0IsZ0JBQWYsQ0FBZ0MsUUFBaEMsRUFBMEMsVUFBVUMsS0FBVixFQUFpQjtBQUN2REEsY0FBTUMsY0FBTjtBQUNBQywyQkFBbUJ2QixjQUFuQixFQUFtQ00sYUFBbkMsRUFDS2tCLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDWkMsd0JBQVlqQixNQUFaLEVBQW9CLEtBQXBCO0FBQ0FrQix3QkFBWUYsSUFBWixFQUFrQnpCLGNBQWxCLEVBQWtDLGdCQUFsQyxFQUFvRCxLQUFwRDtBQUNILFNBSkwsRUFLSzRCLEtBTEwsQ0FLVyxVQUFDQyxLQUFELEVBQVc7QUFDZEMsb0JBQVFELEtBQVIsQ0FBY0EsS0FBZDtBQUNILFNBUEw7QUFRSCxLQVZEO0FBV0g7O0FBRUQsSUFBSTVCLGVBQUosRUFBcUI7QUFDakJBLG9CQUFnQm1CLGdCQUFoQixDQUFpQyxRQUFqQyxFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hEQSxjQUFNQyxjQUFOO0FBQ0FDLDJCQUFtQnRCLGVBQW5CLEVBQW9DSSxjQUFwQyxFQUNLbUIsSUFETCxDQUNVLFVBQUNDLElBQUQsRUFBVTtBQUNaQyx3QkFBWWpCLE1BQVosRUFBb0IsS0FBcEI7QUFDQWtCLHdCQUFZRixJQUFaLEVBQWtCeEIsZUFBbEIsRUFBbUMsZ0JBQW5DLEVBQXFELEtBQXJEO0FBQ0gsU0FKTCxFQUtLMkIsS0FMTCxDQUtXLFVBQUNDLEtBQUQsRUFBVztBQUNkQyxvQkFBUUQsS0FBUixDQUFjQSxLQUFkO0FBQ0gsU0FQTDtBQVFILEtBVkQ7QUFXSDs7QUFFRCxJQUFJM0IsZUFBSixFQUFxQjtBQUNqQkEsb0JBQWdCa0IsZ0JBQWhCLENBQWlDLFFBQWpDLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDeERBLGNBQU1DLGNBQU47QUFDQUMsMkJBQW1CckIsZUFBbkIsRUFBb0NLLGNBQXBDLEVBQ0tpQixJQURMLENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FBQ1pDLHdCQUFZakIsTUFBWixFQUFvQixLQUFwQjtBQUNBa0Isd0JBQVlGLElBQVosRUFBa0J2QixlQUFsQixFQUFtQyxnQkFBbkMsRUFBcUQsS0FBckQ7QUFDSCxTQUpMLEVBS0swQixLQUxMLENBS1csVUFBQ0MsS0FBRCxFQUFXO0FBQ2RDLG9CQUFRRCxLQUFSLENBQWNBLEtBQWQ7QUFDSCxTQVBMO0FBUUgsS0FWRDtBQVdIOztBQUdEOzs7Ozs7QUFPQTs7Ozs7OztBQU9BLElBQU1OLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNRLFdBQUQsRUFBY0MsY0FBZCxFQUFpQztBQUN4RCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUMxQyxZQUFJQyxNQUFNLElBQUlDLGNBQUosRUFBVjtBQUNBLFlBQUlDLFdBQVcsSUFBSUMsUUFBSixDQUFhUixXQUFiLENBQWY7QUFDQUssWUFBSWhCLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQzdCO0FBQ0ksZ0JBQUksS0FBS29CLFVBQUwsS0FBb0IsQ0FBeEIsRUFBNEI7QUFDeEIsb0JBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQmYsZ0NBQVlqQixNQUFaLEVBQW9CLEtBQXBCO0FBQ0F5Qiw0QkFBUVEsS0FBS0MsS0FBTCxDQUFXLEtBQUtDLFFBQWhCLENBQVI7QUFDSCxpQkFIRCxNQUdPO0FBQ0hsQixnQ0FBWWpCLE1BQVosRUFBb0IsS0FBcEI7QUFDQTBCLDJCQUFPLEtBQUtNLE1BQVo7QUFDSDtBQUNKO0FBQ0osU0FYRDtBQVlBTCxZQUFJUyxJQUFKLENBQVMsTUFBVCxFQUFpQmIsY0FBakIsRUFBaUMsSUFBakM7QUFDQUksWUFBSVUsZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6QztBQUNBVixZQUFJVyxJQUFKLENBQVNULFFBQVQ7QUFDSCxLQWxCTSxDQUFQO0FBbUJILENBcEJEOztBQXVCQTs7Ozs7O0FBTUEsSUFBTVosY0FBYyxTQUFkQSxXQUFjLENBQUNzQixPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDcEMsUUFBSUEsVUFBVSxJQUFkLEVBQW9CO0FBQ2hCRCxnQkFBUUUsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsb0JBQXpCO0FBQ0FILGdCQUFRSSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDSCxLQUhELE1BR007QUFDRkwsZ0JBQVFFLFNBQVIsQ0FBa0JJLEdBQWxCLENBQXNCLG9CQUF0QjtBQUNBTixnQkFBUUksS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0FFLGtCQUFVL0MsTUFBVjtBQUNIO0FBQ0osQ0FURDs7QUFXQTs7Ozs7QUFLQSxJQUFNK0MsWUFBWSxTQUFaQSxTQUFZO0FBQUEsV0FBY0MsV0FBV0MsUUFBWCxHQUFzQixLQUFwQztBQUFBLENBQWxCOztBQUVBOzs7Ozs7O0FBT0EsSUFBTTlCLGNBQWMsU0FBZEEsV0FBYyxDQUFDRixJQUFELEVBQU9pQyxJQUFQLEVBQWlEO0FBQUEsUUFBcENDLE9BQW9DLHVFQUExQixJQUEwQjtBQUFBLFFBQXBCQyxRQUFvQix1RUFBVCxJQUFTOztBQUNqRSxRQUFJbkMsS0FBS2dCLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDckJvQixpQkFBU3BDLEtBQUtxQyxJQUFkLEVBQW9CLFNBQXBCLEVBQStCckMsS0FBS3NDLEtBQXBDLEVBQTJDLElBQTNDO0FBQ0FMLGFBQUtNLEtBQUw7QUFDQSxZQUFJSixZQUFZQSxhQUFhLElBQTdCLEVBQW1DO0FBQy9CLGdCQUFJRCxPQUFKLEVBQWE3RCxTQUFTQyxjQUFULENBQXdCNEQsT0FBeEIsRUFBaUNQLEtBQWpDLENBQXVDQyxPQUF2QyxHQUFpRCxNQUFqRDtBQUNiO0FBQ0F2RCxxQkFBU0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ3FELEtBQXJDLENBQTJDQyxPQUEzQyxHQUFxRCxPQUFyRDtBQUNBWSxtQkFBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIxQyxLQUFLbUIsUUFBTCxDQUFjd0IsR0FBckM7QUFDSDtBQUNKLEtBVEQsTUFTTztBQUNIUCxpQkFBU3BDLEtBQUtxQyxJQUFkLEVBQW9CLE9BQXBCLEVBQTZCckMsS0FBS3NDLEtBQWxDLEVBQXlDLElBQXpDO0FBQ0g7QUFDSixDQWJEOztBQWVBLElBQU1GLFdBQVcsU0FBWEEsUUFBVyxDQUFDUSxRQUFELEVBQVdDLEtBQVgsRUFBa0JDLE1BQWxCLEVBQTBCQyxTQUExQixFQUF3QztBQUNyREMsUUFBSUMsS0FBSixDQUFVTCxRQUFWLEVBQW9CO0FBQ2hCTSxxQkFBYUwsS0FERztBQUVoQk0scUJBQWFMLE1BRkc7QUFHaEJNLGtCQUFVTDtBQUhNLEtBQXBCO0FBS0E7QUFDRCxRQUFJTSxLQUFLaEYsU0FBU2lGLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBLFFBQUlELEdBQUdFLFlBQUgsQ0FBZ0IsT0FBaEIsQ0FBSixFQUE4QjtBQUMxQkYsV0FBRzFCLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixNQUFuQjtBQUNIO0FBQ0E0QixlQUFXLFlBQVU7QUFDakJILFdBQUcxQixLQUFILENBQVNDLE9BQVQsR0FBbUIsTUFBbkI7QUFDSCxLQUZELEVBRUdtQixTQUZIO0FBR0gsQ0FkRDs7QUFpQkEsSUFBTXJELGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0gsRUFBRCxFQUFRO0FBQzNCbEIsYUFBU0MsY0FBVCxDQUF3QmlCLEVBQXhCLEVBQTRCSSxnQkFBNUIsQ0FBNkMsT0FBN0MsRUFBc0QsWUFBVztBQUM3RCxhQUFLZ0MsS0FBTCxDQUFXOEIsUUFBWCxHQUFzQixRQUF0QjtBQUNBLGFBQUs5QixLQUFMLENBQVcrQixNQUFYLEdBQW9CLENBQXBCO0FBQ0EsYUFBSy9CLEtBQUwsQ0FBVytCLE1BQVgsR0FBb0IsS0FBS0MsWUFBTCxHQUFvQixJQUF4QztBQUNILEtBSkQsRUFJRyxLQUpIO0FBS0gsQ0FORCxDOzs7Ozs7Ozs7Ozs7QUMzTUEsbUJBQUExRixDQUFRLDhFQUFSOztBQUVBO0FBQ0E7QUFDQSxJQUFNRyxjQUFjd0YsRUFBRSxxQkFBRixDQUFwQjtBQUNBLElBQU1yRixpQkFBaUJxRixFQUFFLHdCQUFGLENBQXZCO0FBQ0EsSUFBTXBGLGtCQUFrQm9GLEVBQUUsd0JBQUYsQ0FBeEI7QUFDQSxJQUFNbkYsa0JBQWtCbUYsRUFBRSx5QkFBRixDQUF4Qjs7QUFFQTtBQUNBLElBQUlDLGFBQWEsWUFBakI7QUFDQSxJQUFJQyxhQUFhLFNBQWpCOztBQUVBO0FBQ0EsSUFBSTlFLFNBQVNYLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlTLFNBQVNWLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBYjs7QUFFQTtBQUNBLElBQUl5RixZQUFZLENBQUMzRixXQUFELEVBQWNHLGNBQWQsRUFBOEJDLGVBQTlCLEVBQStDQyxlQUEvQyxDQUFoQjs7QUFHQW1GLEVBQUV2RixRQUFGLEVBQVkyRixLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQUosTUFBRUssU0FBRixDQUFZQyxXQUFaLENBQXdCO0FBQ3BCaEMsaUJBQVMsS0FEVztBQUVwQjJCLG9CQUFXLGtCQUZTO0FBR3BCTSxtQkFBVyxtQkFBUzVDLE9BQVQsRUFBa0I7QUFDekJxQyxjQUFFckMsT0FBRixFQUFXNkMsUUFBWCxDQUFvQlAsVUFBcEIsRUFBZ0NRLFdBQWhDLENBQTRDUCxVQUE1QztBQUNBRixjQUFFckMsUUFBUStDLElBQVYsRUFBZ0JDLElBQWhCLENBQXFCLGVBQWVoRCxRQUFRaEMsRUFBdkIsR0FBNEIsR0FBakQsRUFBc0Q2RSxRQUF0RCxDQUErRFAsVUFBL0Q7QUFDSCxTQU5tQjtBQU9wQlcscUJBQWEscUJBQVNqRCxPQUFULEVBQWtCO0FBQzNCcUMsY0FBRXJDLE9BQUYsRUFBVzhDLFdBQVgsQ0FBdUJSLFVBQXZCLEVBQW1DTyxRQUFuQyxDQUE0Q04sVUFBNUM7QUFDQUYsY0FBRXJDLFFBQVErQyxJQUFWLEVBQWdCQyxJQUFoQixDQUFxQixlQUFlaEQsUUFBUWhDLEVBQXZCLEdBQTRCLEdBQWpELEVBQXNEOEUsV0FBdEQsQ0FBa0VSLFVBQWxFO0FBQ0g7QUFWbUIsS0FBeEI7QUFZQTtBQUNBRSxjQUFVdkUsR0FBVixDQUFjLFVBQUNDLEdBQUQsRUFBUztBQUNuQkEsWUFBSWdGLFFBQUosQ0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLDJCQUFlLHVCQUFVTCxJQUFWLEVBQWdCO0FBQzNCckUsNEJBQVlqQixNQUFaLEVBQW9CRCxNQUFwQjtBQUNIO0FBSlEsU0FBYjtBQU1ILEtBUEQ7QUFTSCxDQXhCRDs7QUEwQkEsSUFBTWtCLGNBQWMsU0FBZEEsV0FBYyxDQUFDc0IsT0FBRCxFQUFVUSxVQUFWLEVBQXlCO0FBQ3pDUixZQUFRRSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixvQkFBekI7QUFDQUgsWUFBUUksS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0FnRCxlQUFXN0MsVUFBWDtBQUNILENBSkQ7O0FBTUEsSUFBTTZDLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFdBQWM3QyxXQUFXQyxRQUFYLEdBQXNCLElBQXBDO0FBQUEsQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDckRBLG1CQUFBL0QsQ0FBUSw4REFBUjtBQUNBLG1CQUFBQSxDQUFRLG9EQUFSO0FBQ0FvQyxRQUFRd0UsR0FBUixDQUFZLE9BQVosRTs7Ozs7Ozs7Ozs7O0FDRkEsa0JBQWtCLHdCQUF3QixnQkFBZ0Isc0lBQXNJLGtCQUFrQix1SUFBdUksaUJBQWlCLHNJQUFzSSxrQkFBa0IsdUlBQXVJLGdCQUFnQixzSUFBc0ksZ0Q7Ozs7Ozs7Ozs7OztBQ0EveEJDLE9BQU9DLE1BQVAsQ0FBY0QsT0FBT2IsU0FBUCxDQUFpQmUsUUFBL0IsRUFBeUM7QUFDckNDLGNBQVUsOEJBRDJCO0FBRXJDQyxZQUFRLHdCQUY2QjtBQUdyQ0MsV0FBTyx1Q0FIOEI7QUFJckN4QyxTQUFLLHdEQUpnQztBQUtyQ3lDLFVBQU0sK0JBTCtCO0FBTXJDQyxhQUFTLHVDQU40QjtBQU9yQ0MsWUFBUSwrQkFQNkI7QUFRckNDLFlBQVEsMkJBUjZCO0FBU3JDQyxnQkFBWSx5Q0FUeUI7QUFVckNDLGFBQVMsbUNBVjRCO0FBV3JDQyxZQUFRLGtDQVg2QjtBQVlyQ0MsZUFBV2IsT0FBT2IsU0FBUCxDQUFpQjJCLE1BQWpCLENBQXdCLDBDQUF4QixDQVowQjtBQWFyQ0MsZUFBV2YsT0FBT2IsU0FBUCxDQUFpQjJCLE1BQWpCLENBQXdCLHNDQUF4QixDQWIwQjtBQWNyQ0UsaUJBQWFoQixPQUFPYixTQUFQLENBQWlCMkIsTUFBakIsQ0FBd0IsMERBQXhCLENBZHdCO0FBZXJDRyxXQUFPakIsT0FBT2IsU0FBUCxDQUFpQjJCLE1BQWpCLENBQXdCLDBDQUF4QixDQWY4QjtBQWdCckNJLFNBQUtsQixPQUFPYixTQUFQLENBQWlCMkIsTUFBakIsQ0FBd0IsZ0RBQXhCLENBaEJnQztBQWlCckNLLFNBQUtuQixPQUFPYixTQUFQLENBQWlCMkIsTUFBakIsQ0FBd0IsbURBQXhCO0FBakJnQyxDQUF6QyxFOzs7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsVUFBU00sQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxNQUFJQyxJQUFFRCxHQUFOLENBQVUsUUFBc0MsaUNBQU8sRUFBUCxvQ0FBVUMsRUFBRWxJLE9BQVo7QUFBQTtBQUFBO0FBQUEsb0dBQXRDLEdBQTJELG9CQUFpQm1JLE1BQWpCLHlDQUFpQkEsTUFBakIsTUFBeUJBLE9BQU9DLE9BQWhDLEdBQXdDRCxPQUFPQyxPQUFQLEdBQWVGLEVBQUVsSSxPQUF6RCxJQUFrRWdJLEVBQUVoSSxPQUFGLEdBQVVrSSxFQUFFbEksT0FBWixFQUFvQmdJLEVBQUVLLEdBQUYsR0FBTSxFQUFDQyxRQUFPSixFQUFFSSxNQUFWLEVBQTVGLENBQTNEO0FBQTBLLENBQWxNLENBQW1NLElBQW5NLEVBQXdNLFlBQVU7QUFBQztBQUFhLFdBQVNOLENBQVQsQ0FBV0EsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFHLEVBQUVELGFBQWFDLENBQWYsQ0FBSCxFQUFxQixNQUFNLElBQUlNLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlELE9BQUlOLElBQUVPLE9BQU9DLE1BQVAsSUFBZSxVQUFTVCxDQUFULEVBQVc7QUFBQyxTQUFJLElBQUlDLElBQUUsQ0FBVixFQUFZQSxJQUFFUyxVQUFVdkgsTUFBeEIsRUFBK0I4RyxHQUEvQixFQUFtQztBQUFDLFVBQUlDLElBQUVRLFVBQVVULENBQVYsQ0FBTixDQUFtQixLQUFJLElBQUlVLENBQVIsSUFBYVQsQ0FBYjtBQUFlTSxlQUFPSSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNaLENBQXJDLEVBQXVDUyxDQUF2QyxNQUE0Q1gsRUFBRVcsQ0FBRixJQUFLVCxFQUFFUyxDQUFGLENBQWpEO0FBQWY7QUFBc0UsWUFBT1gsQ0FBUDtBQUFTLEdBQXZLO0FBQUEsTUFBd0tFLElBQUUsY0FBWSxPQUFPYSxNQUFuQixJQUEyQixvQkFBaUJBLE9BQU9DLFFBQXhCLENBQTNCLEdBQTRELFVBQVNoQixDQUFULEVBQVc7QUFBQyxrQkFBY0EsQ0FBZCx5Q0FBY0EsQ0FBZDtBQUFnQixHQUF4RixHQUF5RixVQUFTQSxDQUFULEVBQVc7QUFBQyxXQUFPQSxLQUFHLGNBQVksT0FBT2UsTUFBdEIsSUFBOEJmLEVBQUVpQixXQUFGLEtBQWdCRixNQUE5QyxJQUFzRGYsTUFBSWUsT0FBT0gsU0FBakUsR0FBMkUsUUFBM0UsVUFBMkZaLENBQTNGLHlDQUEyRkEsQ0FBM0YsQ0FBUDtBQUFvRyxHQUFuWDtBQUFBLE1BQW9YVyxJQUFFLFlBQVU7QUFBQyxhQUFTWCxDQUFULENBQVdBLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsV0FBSSxJQUFJQyxJQUFFLENBQVYsRUFBWUEsSUFBRUQsRUFBRTlHLE1BQWhCLEVBQXVCK0csR0FBdkIsRUFBMkI7QUFBQyxZQUFJUyxJQUFFVixFQUFFQyxDQUFGLENBQU4sQ0FBV1MsRUFBRU8sVUFBRixHQUFhUCxFQUFFTyxVQUFGLElBQWMsQ0FBQyxDQUE1QixFQUE4QlAsRUFBRVEsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVVIsQ0FBVixLQUFjQSxFQUFFUyxRQUFGLEdBQVcsQ0FBQyxDQUExQixDQUFoRCxFQUE2RVosT0FBT2EsY0FBUCxDQUFzQnJCLENBQXRCLEVBQXdCVyxFQUFFVyxHQUExQixFQUE4QlgsQ0FBOUIsQ0FBN0U7QUFBOEc7QUFBQyxZQUFPLFVBQVNWLENBQVQsRUFBV0MsQ0FBWCxFQUFhUyxDQUFiLEVBQWU7QUFBQyxhQUFPVCxLQUFHRixFQUFFQyxFQUFFVyxTQUFKLEVBQWNWLENBQWQsQ0FBSCxFQUFvQlMsS0FBR1gsRUFBRUMsQ0FBRixFQUFJVSxDQUFKLENBQXZCLEVBQThCVixDQUFyQztBQUF1QyxLQUE5RDtBQUErRCxHQUFoUCxFQUF0WDtBQUFBLE1BQXltQi9HLElBQUUsWUFBVTtBQUFDLGFBQVNBLENBQVQsQ0FBVytHLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNGLFFBQUUsSUFBRixFQUFPOUcsQ0FBUCxHQUFVLEtBQUtxSSxRQUFMLEdBQWN0QixLQUFHLEVBQUN1QixVQUFTLEVBQVYsRUFBYUMsUUFBTyxFQUFwQixFQUF1QkMsTUFBSyxFQUE1QixFQUErQkMsUUFBTyxFQUF0QyxFQUEzQixFQUFxRSxLQUFLQyxTQUFMLENBQWUxQixLQUFHLEVBQWxCLENBQXJFO0FBQTJGLFlBQU9TLEVBQUV6SCxDQUFGLEVBQUksQ0FBQyxFQUFDb0ksS0FBSSxnQkFBTCxFQUFzQk8sT0FBTSxlQUFTN0IsQ0FBVCxFQUFXO0FBQUMsYUFBSzhCLFVBQUwsQ0FBZ0I5QixFQUFFd0IsUUFBbEIsR0FBNEIsS0FBS0ksU0FBTCxDQUFlNUIsRUFBRWxJLE1BQWpCLENBQTVCLEVBQXFELFlBQVdrSSxDQUFYLElBQWMsS0FBSytCLFNBQUwsQ0FBZS9CLEVBQUV5QixNQUFqQixDQUFuRSxFQUE0RixLQUFLTyxPQUFMLENBQWFoQyxFQUFFMEIsSUFBZixDQUE1RixFQUFpSCxLQUFLTyxTQUFMLENBQWVqQyxFQUFFMkIsTUFBakIsQ0FBakg7QUFBMEksT0FBbEwsRUFBRCxFQUFxTCxFQUFDTCxLQUFJLFdBQUwsRUFBaUJPLE9BQU0sZUFBUzdCLENBQVQsRUFBVztBQUFDLGFBQUtrQyxPQUFMLEdBQWExQixPQUFPMkIsTUFBUCxDQUFjbkMsQ0FBZCxDQUFiO0FBQThCLE9BQWpFLEVBQXJMLEVBQXdQLEVBQUNzQixLQUFJLFdBQUwsRUFBaUJPLE9BQU0saUJBQVU7QUFBQyxlQUFPLEtBQUtLLE9BQVo7QUFBb0IsT0FBdEQsRUFBeFAsRUFBZ1QsRUFBQ1osS0FBSSxZQUFMLEVBQWtCTyxPQUFNLGVBQVM3QixDQUFULEVBQVc7QUFBQyxhQUFLdUIsUUFBTCxDQUFjQyxRQUFkLEdBQXVCeEIsQ0FBdkI7QUFBeUIsT0FBN0QsRUFBaFQsRUFBK1csRUFBQ3NCLEtBQUksWUFBTCxFQUFrQk8sT0FBTSxpQkFBVTtBQUFDLGVBQU8sS0FBS04sUUFBTCxDQUFjQyxRQUFyQjtBQUE4QixPQUFqRSxFQUEvVyxFQUFrYixFQUFDRixLQUFJLFdBQUwsRUFBaUJPLE9BQU0sZUFBUzdCLENBQVQsRUFBVztBQUFDLGFBQUt1QixRQUFMLENBQWNFLE1BQWQsR0FBcUJ6QixDQUFyQjtBQUF1QixPQUExRCxFQUFsYixFQUE4ZSxFQUFDc0IsS0FBSSxXQUFMLEVBQWlCTyxPQUFNLGVBQVM3QixDQUFULEVBQVc7QUFBQyxhQUFLdUIsUUFBTCxDQUFjSSxNQUFkLEdBQXFCM0IsQ0FBckI7QUFBdUIsT0FBMUQsRUFBOWUsRUFBMGlCLEVBQUNzQixLQUFJLFdBQUwsRUFBaUJPLE9BQU0saUJBQVU7QUFBQyxlQUFPLEtBQUtOLFFBQUwsQ0FBY0ksTUFBckI7QUFBNEIsT0FBOUQsRUFBMWlCLEVBQTBtQixFQUFDTCxLQUFJLFNBQUwsRUFBZU8sT0FBTSxlQUFTN0IsQ0FBVCxFQUFXO0FBQUMsYUFBS3VCLFFBQUwsQ0FBY0csSUFBZCxHQUFtQjFCLENBQW5CO0FBQXFCLE9BQXRELEVBQTFtQixFQUFrcUIsRUFBQ3NCLEtBQUksU0FBTCxFQUFlTyxPQUFNLGlCQUFVO0FBQUMsZUFBTyxLQUFLTixRQUFMLENBQWNHLElBQXJCO0FBQTBCLE9BQTFELEVBQWxxQixFQUE4dEIsRUFBQ0osS0FBSSxrQkFBTCxFQUF3Qk8sT0FBTSxlQUFTN0IsQ0FBVCxFQUFXQyxDQUFYLEVBQWFVLENBQWIsRUFBZTtBQUFDLFlBQUl6SCxJQUFFLElBQU47QUFBQSxZQUFXa0osSUFBRSxLQUFLLENBQWxCO0FBQUEsWUFBb0JDLElBQUUsSUFBSUMsTUFBSixDQUFXLE9BQVgsQ0FBdEIsQ0FBMEMsSUFBR3JDLGFBQWFzQyxLQUFoQixFQUFzQnRDLEVBQUV1QyxPQUFGLENBQVUsVUFBU3ZDLENBQVQsRUFBV21DLENBQVgsRUFBYTtBQUFDQyxZQUFFSSxJQUFGLENBQU96QyxDQUFQLElBQVVXLEVBQUVYLENBQUYsRUFBSUMsQ0FBSixDQUFWLEdBQWlCL0csRUFBRXdKLGdCQUFGLENBQW1CMUMsSUFBRSxHQUFGLElBQU8sY0FBWSxlQUFhLE9BQU9DLENBQXBCLEdBQXNCLFdBQXRCLEdBQWtDQyxFQUFFRCxDQUFGLENBQTlDLElBQW9EbUMsQ0FBcEQsR0FBc0QsRUFBN0QsSUFBaUUsR0FBcEYsRUFBd0ZuQyxDQUF4RixFQUEwRlUsQ0FBMUYsQ0FBakI7QUFBOEcsU0FBdEksRUFBdEIsS0FBbUssSUFBRyxjQUFZLGVBQWEsT0FBT1YsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NDLEVBQUVELENBQUYsQ0FBOUMsQ0FBSCxFQUF1RCxLQUFJbUMsQ0FBSixJQUFTbkMsQ0FBVDtBQUFXLGVBQUt5QyxnQkFBTCxDQUFzQjFDLElBQUUsR0FBRixHQUFNb0MsQ0FBTixHQUFRLEdBQTlCLEVBQWtDbkMsRUFBRW1DLENBQUYsQ0FBbEMsRUFBdUN6QixDQUF2QztBQUFYLFNBQXZELE1BQWlIQSxFQUFFWCxDQUFGLEVBQUlDLENBQUo7QUFBTyxPQUFuWCxFQUE5dEIsRUFBbWxDLEVBQUNxQixLQUFJLFVBQUwsRUFBZ0JPLE9BQU0sZUFBUzdCLENBQVQsRUFBVztBQUFDLFlBQUlDLElBQUUsS0FBS3NCLFFBQUwsQ0FBY0UsTUFBZCxHQUFxQnpCLENBQTNCLENBQTZCLElBQUdDLEtBQUssS0FBS2lDLE9BQWIsRUFBcUJsQyxJQUFFQyxDQUFGLENBQXJCLEtBQThCLElBQUcsRUFBRUQsS0FBSyxLQUFLa0MsT0FBWixDQUFILEVBQXdCLE1BQU0sSUFBSVMsS0FBSixDQUFVLGdCQUFjM0MsQ0FBZCxHQUFnQixtQkFBMUIsQ0FBTixDQUFxRCxPQUFPLEtBQUtrQyxPQUFMLENBQWFsQyxDQUFiLENBQVA7QUFBdUIsT0FBak0sRUFBbmxDLEVBQXN4QyxFQUFDc0IsS0FBSSxVQUFMLEVBQWdCTyxPQUFNLGVBQVM3QixDQUFULEVBQVdFLENBQVgsRUFBYVMsQ0FBYixFQUFlO0FBQUMsWUFBSXpILElBQUUsS0FBSzBKLFFBQUwsQ0FBYzVDLENBQWQsQ0FBTjtBQUFBLFlBQXVCb0MsSUFBRWxDLEtBQUcsRUFBNUI7QUFBQSxZQUErQm1DLElBQUVwQyxFQUFFLEVBQUYsRUFBS21DLENBQUwsQ0FBakM7QUFBQSxZQUF5Q1MsSUFBRSxFQUEzQztBQUFBLFlBQThDQyxJQUFFLENBQUMsQ0FBakQ7QUFBQSxZQUFtREMsSUFBRSxFQUFyRCxDQUF3RCxJQUFHN0osRUFBRThKLE1BQUYsQ0FBU1IsT0FBVCxDQUFpQixVQUFTdkMsQ0FBVCxFQUFXO0FBQUMsY0FBRyxXQUFTQSxFQUFFLENBQUYsQ0FBWixFQUFpQixPQUFPNEMsSUFBRTVDLEVBQUUsQ0FBRixJQUFLNEMsQ0FBUCxFQUFTLE1BQUtDLElBQUUsQ0FBQyxDQUFSLENBQWhCLENBQTJCO0FBQUMsZ0JBQUcsZUFBYTdDLEVBQUUsQ0FBRixDQUFoQixFQUFxQixNQUFNLElBQUkwQyxLQUFKLENBQVUscUJBQW1CMUMsRUFBRSxDQUFGLENBQW5CLEdBQXdCLHFCQUFsQyxDQUFOLENBQStELElBQUlDLElBQUVoSCxFQUFFK0osUUFBRixJQUFZaEQsRUFBRSxDQUFGLEtBQU8vRyxFQUFFK0osUUFBM0IsQ0FBb0MsSUFBRyxDQUFDLENBQUQsS0FBS0gsQ0FBTCxJQUFRLENBQUM1QyxDQUFULElBQVlELEVBQUUsQ0FBRixLQUFPbUMsQ0FBUCxJQUFVQSxFQUFFbkMsRUFBRSxDQUFGLENBQUYsS0FBUy9HLEVBQUUrSixRQUFGLENBQVdoRCxFQUFFLENBQUYsQ0FBWCxDQUFsQyxFQUFtRDtBQUFDLGtCQUFJVSxJQUFFLEtBQUssQ0FBWCxDQUFhLElBQUdWLEVBQUUsQ0FBRixLQUFPbUMsQ0FBVixFQUFZekIsSUFBRXlCLEVBQUVuQyxFQUFFLENBQUYsQ0FBRixDQUFGLEVBQVUsT0FBT29DLEVBQUVwQyxFQUFFLENBQUYsQ0FBRixDQUFqQixDQUFaLEtBQXlDO0FBQUMsb0JBQUcsQ0FBQ0MsQ0FBSixFQUFNO0FBQUMsc0JBQUc0QyxDQUFILEVBQUssT0FBTyxNQUFNLElBQUlILEtBQUosQ0FBVSxnQkFBYzNDLENBQWQsR0FBZ0IsNEJBQWhCLEdBQTZDQyxFQUFFLENBQUYsQ0FBN0MsR0FBa0QsSUFBNUQsQ0FBTjtBQUF3RSxxQkFBRS9HLEVBQUUrSixRQUFGLENBQVdoRCxFQUFFLENBQUYsQ0FBWCxDQUFGO0FBQW1CLG1CQUFJOEMsSUFBRSxDQUFDLENBQUQsS0FBS3BDLENBQUwsSUFBUSxDQUFDLENBQUQsS0FBS0EsQ0FBYixJQUFnQixPQUFLQSxDQUEzQixDQUE2QixJQUFHLENBQUNvQyxDQUFELElBQUksQ0FBQ0QsQ0FBUixFQUFVO0FBQUMsb0JBQUlJLElBQUVDLG1CQUFtQnhDLENBQW5CLEVBQXNCeUMsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBcUMsR0FBckMsQ0FBTixDQUFnRCxXQUFTRixDQUFULElBQVksU0FBT3ZDLENBQW5CLEtBQXVCdUMsSUFBRSxFQUF6QixHQUE2QkwsSUFBRTVDLEVBQUUsQ0FBRixJQUFLaUQsQ0FBTCxHQUFPTCxDQUF0QztBQUF3QyxtQkFBRSxDQUFDLENBQUg7QUFBSyxhQUE5VixNQUFtVzNDLEtBQUdELEVBQUUsQ0FBRixLQUFPb0MsQ0FBVixJQUFhLE9BQU9BLEVBQUVwQyxFQUFFLENBQUYsQ0FBRixDQUFwQjtBQUE0QjtBQUFDLFNBQWxrQixHQUFva0IsT0FBSzRDLENBQUwsS0FBU0EsSUFBRSxHQUFYLENBQXBrQixFQUFvbEIzSixFQUFFbUssVUFBRixDQUFhYixPQUFiLENBQXFCLFVBQVN4QyxDQUFULEVBQVc7QUFBQyxjQUFJQyxJQUFFLEtBQUssQ0FBWCxDQUFhLE9BQU0sV0FBU0QsRUFBRSxDQUFGLENBQVQsR0FBYyxNQUFLK0MsSUFBRS9DLEVBQUUsQ0FBRixJQUFLK0MsQ0FBWixDQUFkLEdBQTZCLE1BQUssZUFBYS9DLEVBQUUsQ0FBRixDQUFiLEtBQW9CQSxFQUFFLENBQUYsS0FBT29DLENBQVAsSUFBVW5DLElBQUVtQyxFQUFFcEMsRUFBRSxDQUFGLENBQUYsQ0FBRixFQUFVLE9BQU9xQyxFQUFFckMsRUFBRSxDQUFGLENBQUYsQ0FBM0IsSUFBb0M5RyxFQUFFK0osUUFBRixJQUFZakQsRUFBRSxDQUFGLEtBQU85RyxFQUFFK0osUUFBckIsS0FBZ0NoRCxJQUFFL0csRUFBRStKLFFBQUYsQ0FBV2pELEVBQUUsQ0FBRixDQUFYLENBQWxDLENBQXBDLEVBQXdGK0MsSUFBRS9DLEVBQUUsQ0FBRixJQUFLQyxDQUFMLEdBQU84QyxDQUFySCxDQUFMLENBQW5DO0FBQWlLLFNBQS9NLENBQXBsQixFQUFxeUJGLElBQUUsS0FBS3RCLFFBQUwsQ0FBY0MsUUFBZCxHQUF1QnFCLENBQTl6QixFQUFnMEIzSixFQUFFb0ssWUFBRixJQUFnQixhQUFZcEssRUFBRW9LLFlBQTlCLElBQTRDLEtBQUtDLFNBQUwsTUFBa0JySyxFQUFFb0ssWUFBRixDQUFlRSxPQUE3RSxHQUFxRlgsSUFBRTNKLEVBQUVvSyxZQUFGLENBQWVFLE9BQWYsR0FBdUIsS0FBdkIsSUFBOEJULEtBQUcsS0FBS1UsT0FBTCxFQUFqQyxJQUFpRFosQ0FBeEksR0FBMEksZUFBYSxPQUFPM0osRUFBRXdLLE9BQXRCLElBQStCLGVBQWEsT0FBT3hLLEVBQUV3SyxPQUFGLENBQVUsQ0FBVixDQUFuRCxJQUFpRSxLQUFLSCxTQUFMLE9BQW1CckssRUFBRXdLLE9BQUYsQ0FBVSxDQUFWLENBQXBGLEdBQWlHYixJQUFFM0osRUFBRXdLLE9BQUYsQ0FBVSxDQUFWLElBQWEsS0FBYixJQUFvQlgsS0FBRyxLQUFLVSxPQUFMLEVBQXZCLElBQXVDWixDQUExSSxHQUE0SUUsS0FBRyxLQUFLVSxPQUFMLE9BQWlCVixDQUFwQixHQUFzQkYsSUFBRSxLQUFLVSxTQUFMLEtBQWlCLEtBQWpCLEdBQXVCUixDQUF2QixHQUF5QkYsQ0FBakQsR0FBbURsQyxNQUFJLENBQUMsQ0FBTCxLQUFTa0MsSUFBRSxLQUFLVSxTQUFMLEtBQWlCLEtBQWpCLEdBQXVCLEtBQUtFLE9BQUwsRUFBdkIsR0FBc0NaLENBQWpELENBQXpvQyxFQUE2ckNyQyxPQUFPbUQsSUFBUCxDQUFZdEIsQ0FBWixFQUFlbEosTUFBZixHQUFzQixDQUF0dEMsRUFBd3RDO0FBQUMsY0FBSStKLElBQUUsS0FBSyxDQUFYO0FBQUEsY0FBYVUsSUFBRSxFQUFmO0FBQUEsY0FBa0JDLElBQUUsU0FBRkEsQ0FBRSxDQUFTN0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0EsZ0JBQUUsY0FBWSxPQUFPQSxDQUFuQixHQUFxQkEsR0FBckIsR0FBeUJBLENBQTNCLEVBQTZCQSxJQUFFLFNBQU9BLENBQVAsR0FBUyxFQUFULEdBQVlBLENBQTNDLEVBQTZDMkQsRUFBRXhLLElBQUYsQ0FBTytKLG1CQUFtQm5ELENBQW5CLElBQXNCLEdBQXRCLEdBQTBCbUQsbUJBQW1CbEQsQ0FBbkIsQ0FBakMsQ0FBN0M7QUFBcUcsV0FBdkksQ0FBd0ksS0FBSWlELENBQUosSUFBU2IsQ0FBVDtBQUFXLGlCQUFLSyxnQkFBTCxDQUFzQlEsQ0FBdEIsRUFBd0JiLEVBQUVhLENBQUYsQ0FBeEIsRUFBNkJXLENBQTdCO0FBQVgsV0FBMkNoQixJQUFFQSxJQUFFLEdBQUYsR0FBTWUsRUFBRUUsSUFBRixDQUFPLEdBQVAsRUFBWVYsT0FBWixDQUFvQixNQUFwQixFQUEyQixHQUEzQixDQUFSO0FBQXdDLGdCQUFPUCxDQUFQO0FBQVMsT0FBM2hELEVBQXR4QyxDQUFKLEVBQXd6RixDQUFDLEVBQUN2QixLQUFJLGFBQUwsRUFBbUJPLE9BQU0saUJBQVU7QUFBQyxlQUFPTyxDQUFQO0FBQVMsT0FBN0MsRUFBRCxFQUFnRCxFQUFDZCxLQUFJLFNBQUwsRUFBZU8sT0FBTSxlQUFTN0IsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsSUFBRS9HLEVBQUU2SyxXQUFGLEVBQU4sQ0FBc0I5RCxFQUFFaEksY0FBRixDQUFpQitILENBQWpCO0FBQW9CLE9BQTNFLEVBQWhELENBQXh6RixHQUF1N0Y5RyxDQUE5N0Y7QUFBZzhGLEdBQXRqRyxFQUEzbUIsQ0FBb3FIQSxFQUFFOEssS0FBRixFQUFROUssRUFBRStLLE9BQVYsQ0FBa0IsSUFBSTdCLElBQUUsSUFBSWxKLENBQUosRUFBTixDQUFZLE9BQU0sRUFBQ29ILFFBQU9wSCxDQUFSLEVBQVVsQixTQUFRb0ssQ0FBbEIsRUFBTjtBQUEyQixDQUEzaEksQ0FBRCxDIiwiZmlsZSI6ImpzL3NjcmlwdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYmFjay9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxODhkODVjN2ZiZTAwYmI2NWE5IiwiaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4nO1xuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi9mb3NfanNfcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBHbG9iYWwgRmlsZSBjb25zdGFuY2VcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gZm9ybSBpZGVudGlmeVxubGV0IGNvbXBhbnlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktc3RlcHMtZm9ybScpO1xubGV0IGRlcGFydG1lbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcGFydG1lbnQtc3RlcHMtZm9ybScpO1xubGV0IHNoYXJlaG9sZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZWhvbGVyLXN0ZXBzLWZvcm0nKTtcbmxldCBwb3NpdGlvbmluZ0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zaXRpb25pbmctc3RlcHMtZm9ybScpO1xuXG5cbi8vIGZvcm0gdXJsIGJpbmRpbmdcbmxldCB1cmxDb21wYW55ID0gUm91dGluZy5nZW5lcmF0ZSgnc3RhcnRfbWVtYmVyJyk7XG5sZXQgdXJsU2hhcmVob2xkZXIgPSBSb3V0aW5nLmdlbmVyYXRlKCdzZWNvbmRfbWVtYmVyJyk7XG5sZXQgdXJsRGVwYXJ0bWVudCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RoaXJkX21lbWJlcicpO1xubGV0IHVybFBvc2l0aW9uaW5nID0gUm91dGluZy5nZW5lcmF0ZSgnZm91cnRoX21lbWJlcicpO1xuXG5cbi8vIGNvbXBvbmVudHNcbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcHMtZm9ybUJ0bicpO1xubGV0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcbmxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKTtcblxubGV0IHRleHRBcnJheSA9IFtdO1xuZm9yIChsZXQgaT0wOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgIHRleHRBcnJheS5wdXNoKHRleHRbaV0uaWQpO1xufVxuXG5pZiAodGV4dEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICB0ZXh0QXJyYXkubWFwKChlbHQpID0+IHtcbiAgICAgICAgZXhwYW5kVGV4dGFyZWEoZWx0KTtcbiAgICB9KTtcbn1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBBamF4IENhbGxpbmcgRnVuY3Rpb25cbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuaWYgKGNvbXBhbnlGb3JtKSB7XG4gICAgY29tcGFueUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIEFqYXhDYWxsUG9zdE1ldGhvZChjb21wYW55Rm9ybSwgdXJsQ29tcGFueSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGEoZGF0YSwgY29tcGFueUZvcm0sIFwiZm9ybS1mc2Utc3RlcHNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuaWYgKGRlcGFydG1lbnRGb3JtKSB7XG4gICAgZGVwYXJ0bWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIEFqYXhDYWxsUG9zdE1ldGhvZChkZXBhcnRtZW50Rm9ybSwgdXJsRGVwYXJ0bWVudClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGEoZGF0YSwgZGVwYXJ0bWVudEZvcm0sIFwiZm9ybS1mc2Utc3RlcHNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmlmIChzaGFyZWhvbGRlckZvcm0pIHtcbiAgICBzaGFyZWhvbGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIEFqYXhDYWxsUG9zdE1ldGhvZChzaGFyZWhvbGRlckZvcm0sIHVybFNoYXJlaG9sZGVyKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YShkYXRhLCBzaGFyZWhvbGRlckZvcm0sIFwiZm9ybS1mc2Utc3RlcHNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmlmIChwb3NpdGlvbmluZ0Zvcm0pIHtcbiAgICBwb3NpdGlvbmluZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIEFqYXhDYWxsUG9zdE1ldGhvZChwb3NpdGlvbmluZ0Zvcm0sIHVybFBvc2l0aW9uaW5nKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YShkYXRhLCBwb3NpdGlvbmluZ0Zvcm0sIFwiZm9ybS1mc2Utc3RlcHNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBGdW5jdGlvblxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5cbi8qKlxuICogQWpheCBjYWxsaW5nIEZvciBQb3N0IE1ldGhvZFxuICogQHBhcmFtIGZvcm1FbGVtZW50XG4gKiBAcGFyYW0gRm9ybUVsZW1lbnRVcmxcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQWpheENhbGxQb3N0TWV0aG9kID0gKGZvcm1FbGVtZW50LCBGb3JtRWxlbWVudFVybCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuc3RhdHVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBGb3JtRWxlbWVudFVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KVxufTtcblxuXG4vKipcbiAqIExvYWRlciBwcm9jZXNzXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIHN0YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RhdGVMb2FkZXIgPSAoZWxlbWVudCwgc3RhdGUpID0+IHtcbiAgICBpZiAoc3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS1sb2FkZXItaGlkZGVuXCIpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfWVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxvYWRlci1oaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbmFibGVCdG4oYnV0dG9uKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEJ1dHRvbiBFbmFibGVcbiAqIEBwYXJhbSBlbGVtZW50QnRuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5hYmxlQnRuID0gZWxlbWVudEJ0biA9PiBlbGVtZW50QnRuLmRpc2FibGVkID0gZmFsc2U7XG5cbi8qKlxuICogRGF0YSByZXNwb25zZSBwcm9jZXNzXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIGVsZW1cbiAqIEBwYXJhbSB3cmFwcGVyXG4gKiBAcGFyYW0gcmVkaXJlY3RcbiAqL1xuY29uc3QgcHJvY2Vzc0RhdGEgPSAoZGF0YSwgZWxlbSwgd3JhcHBlciA9IG51bGwsIHJlZGlyZWN0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGFwcEFsZXJ0KGRhdGEuaW5mbywgJ3N1Y2Nlc3MnLCBkYXRhLnRpdGxlLCAzMDAwKTtcbiAgICAgICAgZWxlbS5yZXNldCgpO1xuICAgICAgICBpZiAocmVkaXJlY3QgJiYgcmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3cmFwcGVyKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAvLyBQcmVsb2FkIGlzIGNsYXNzIExvYWRlciBmb3IgUGFyZW50IExheW91dFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVzcG9uc2UudXJsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXBwQWxlcnQoZGF0YS5pbmZvLCAnZXJyb3InLCBkYXRhLnRpdGxlLCAzMDAwKTtcbiAgICB9XG59O1xuXG5jb25zdCBhcHBBbGVydCA9ICgkbWVzc2FnZSwgJHR5cGUsICR0aXRsZSwgJGR1cmF0aW9uKSA9PiB7XG4gICAgYXBwLnRvYXN0KCRtZXNzYWdlLCB7XG4gICAgICAgIGFjdGlvbkNvbG9yOiAkdHlwZSxcbiAgICAgICAgYWN0aW9uVGl0bGU6ICR0aXRsZSxcbiAgICAgICAgZHVyYXRpb246ICRkdXJhdGlvblxuICAgIH0pO1xuICAgIC8vIGhlcmUgZGVjbGFyZSBsZXQgZWwgYWZ0ZXIgZWxlbWVudCBjcmVhdGUgYnV0IGJlZm9yZSBkb2Vzbid0IG5vdCBleGlzdFxuICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jyk7XG4gICBpZiAoZWwuaGFzQXR0cmlidXRlKFwic3R5bGVcIikpIHtcbiAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAkZHVyYXRpb24pO1xufTtcblxuXG5jb25zdCBleHBhbmRUZXh0YXJlYSA9IChpZCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgfSwgZmFsc2UpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9hcHAtYnVuZGxlLmpzIiwicmVxdWlyZSgnLi9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZScpO1xuXG4vLyBpbml0aWFsIHZhcmlhYmxlXG4vLyBmb3JtXG5jb25zdCBjb21wYW55Rm9ybSA9ICQoJyNjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmNvbnN0IGRlcGFydG1lbnRGb3JtID0gJCgnI2RlcGFydG1lbnQtc3RlcHMtZm9ybScpO1xuY29uc3Qgc2hhcmVob2xkZXJGb3JtID0gJCgnI3NoYXJlaG9sZXItc3RlcHMtZm9ybScpO1xuY29uc3QgcG9zaXRpb25pbmdGb3JtID0gJCgnI3Bvc2l0aW9uaW5nLXN0ZXBzLWZvcm0nKTtcblxuLy9FcnJvclxubGV0IGVycm9yQ2xhc3MgPSAnaXMtaW52YWxpZCc7XG5sZXQgdmFsaWRDbGFzcyA9ICdzdWNjZXNzJztcblxuLy8gY29tcG9uZW50c1xubGV0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcHMtZm9ybUJ0bicpO1xuXG4vLyBhcnJheS5tYXAgY2xhc3MgZm9ybSBzZW5kaW5nIGFqYXggaW4gYXBwLWJ1bmRsZS5qc1xubGV0IGNvbnRhaW5lciA9IFtjb21wYW55Rm9ybSwgZGVwYXJ0bWVudEZvcm0sIHNoYXJlaG9sZGVyRm9ybSwgcG9zaXRpb25pbmdGb3JtXTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gaW5pdCBkZWZhdWx0IHNldHRpbmcgdmFsaWRhdG9yXG4gICAgJC52YWxpZGF0b3Iuc2V0RGVmYXVsdHMoe1xuICAgICAgICB3cmFwcGVyOiAnZGl2JyxcbiAgICAgICAgZXJyb3JDbGFzczonaW52YWxpZC1mZWVkYmFjaycsXG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhlcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh2YWxpZENsYXNzKTtcbiAgICAgICAgICAgICQoZWxlbWVudC5mb3JtKS5maW5kKFwibGFiZWxbZm9yPVwiICsgZWxlbWVudC5pZCArIFwiXVwiKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcykuYWRkQ2xhc3ModmFsaWRDbGFzcyk7XG4gICAgICAgICAgICAkKGVsZW1lbnQuZm9ybSkuZmluZChcImxhYmVsW2Zvcj1cIiArIGVsZW1lbnQuaWQgKyBcIl1cIikucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpbml0IHZhbGlkYXRvciB3aXRoIGZvcm1cbiAgICBjb250YWluZXIubWFwKChlbHQpID0+IHtcbiAgICAgICAgZWx0LnZhbGlkYXRlKHtcbiAgICAgICAgICAgIG9ua2V5dXA6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTtcblxuY29uc3QgU3RhdGVMb2FkZXIgPSAoZWxlbWVudCwgZWxlbWVudEJ0bikgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tbG9hZGVyLWhpZGRlblwiKTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGlzYWJsZUJ0bihlbGVtZW50QnRuKTtcbn07XG5cbmNvbnN0IGRpc2FibGVCdG4gPSBlbGVtZW50QnRuID0+IGVsZW1lbnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2FwcEZvcm1WYWxpZGF0ZS5qcyIsInJlcXVpcmUoJy4vYXBwRm9ybVZhbGlkYXRlJyk7XG5yZXF1aXJlKCcuL2FwcC1idW5kbGUnKTtcbmNvbnNvbGUubG9nKCdyZWFkeScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2J1bmRsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYmFzZV91cmxcIjpcIlwiLFwicm91dGVzXCI6e1wic3RhcnRfbWVtYmVyXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9hY2NvdW50L2luZm8tc3RhcnRcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiUE9TVFwiXSxcInNjaGVtZXNcIjpbXCJodHRwXCJdfSxcInNlY29uZF9tZW1iZXJcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2FjY291bnQvaW5mby1zZWNvbmRcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiUE9TVFwiXSxcInNjaGVtZXNcIjpbXCJodHRwXCJdfSxcInRoaXJkX21lbWJlclwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWNjb3VudC9pbmZvLXRoaXJkXCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W1wiaHR0cFwiXX0sXCJmb3VydGhfbWVtYmVyXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9hY2NvdW50L2luZm8tZm91cnRoXCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W1wiaHR0cFwiXX0sXCJmaXZlX21lbWJlclwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWNjb3VudC9pbmZvLWZpdmVcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiUE9TVFwiXSxcInNjaGVtZXNcIjpbXCJodHRwXCJdfX0sXCJwcmVmaXhcIjpcIlwiLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJzY2hlbWVcIjpcImh0dHBcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvYmFjay9qcy9mb3NfanNfcm91dGVzLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwialF1ZXJ5LmV4dGVuZChqUXVlcnkudmFsaWRhdG9yLm1lc3NhZ2VzLCB7XG4gICAgcmVxdWlyZWQ6IFwiVmV1aWxsZXogcmVuc2VpZ25lciBjZSBjaGFtcFwiLFxuICAgIHJlbW90ZTogXCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsXG4gICAgZW1haWw6IFwiU3ZwLCBFbnRyZXogdW5lIGFkcmVzc2UgZW1haWwgdmFsaWRlLlwiLFxuICAgIHVybDogXCJVcmwgaW52YWxpZGUsIEZvcm1hdCBBY2NlcHTDqTogKGh0dHA6Ly93d3cuZXhlbXBsZS5jb20pXCIsXG4gICAgZGF0ZTogXCJTdnAsIEVudHJleiB1bmUgZGF0ZS4gdmFsaWRlIFwiLFxuICAgIGRhdGVJU086IFwiU3ZwLCBFbnRyZXogdW5lIGRhdGUgYXUgZm9ybWF0IChJU08pLlwiLFxuICAgIG51bWJlcjogXCJTdnAsIEVudHJleiB1biBudW1lcm8gdmFsaWRlLlwiLFxuICAgIGRpZ2l0czogXCJTdnAsIEVudHJleiAgb25seSBkaWdpdHMuXCIsXG4gICAgY3JlZGl0Y2FyZDogXCJTdnAsIEVudHJleiBhIHZhbGlkIGNyZWRpdCBjYXJkIG51bWJlci5cIixcbiAgICBlcXVhbFRvOiBcIlN2cCwgRW50cmV6IHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxuICAgIGFjY2VwdDogXCJTdnAsIEVudHJleiB1bmUgZXh0ZW5zaW9uIHZhbGlkZVwiLFxuICAgIG1heGxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuXCIpLFxuICAgIG1pbmxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIiksXG4gICAgcmFuZ2VsZW5ndGg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy5cIiksXG4gICAgcmFuZ2U6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LlwiKSxcbiAgICBtYXg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxcbiAgICBtaW46IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwiU3ZwLCBFbnRyZXogYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2JhY2svanMvanF1ZXJ5LW1lc3NhZ2UtdmFsaWRhdGUuanMiLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixzY2hlbWU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZTtpZih0IGluIHRoaXMucm91dGVzXyllPXQ7ZWxzZSBpZighKGUgaW4gdGhpcy5yb3V0ZXNfKSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyk7cmV0dXJuIHRoaXMucm91dGVzX1tlXX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbixvKXt2YXIgaT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixmPSEwLGE9XCJcIjtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChmPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Znx8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGYpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhZil7dmFyIGM9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWMmJm51bGw9PT1vJiYoYz1cIlwiKSx1PXRbMV0rYyt1fWY9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWE/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgYz12b2lkIDAsbD1bXSxoPWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGwucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGMgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoYyxzW2NdLGgpO3U9dStcIj9cIitsLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=