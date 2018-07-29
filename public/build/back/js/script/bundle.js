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

// form url binding
var urlCompany = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('start_member');
var urlDepartment = __WEBPACK_IMPORTED_MODULE_0__vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min___default.a.generate('second_member');

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
        console.log(data);
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

//Error
var errorClass = 'is-invalid';
var validClass = 'success';

// components
var loader = document.getElementById('loader');
var button = document.getElementById('steps-formBtn');

// array.map class form
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjIzMDkzMDliMDI3ZmE5Nzc0YzciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYXBwLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiY29tcGFueUZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVwYXJ0bWVudEZvcm0iLCJ1cmxDb21wYW55IiwiZ2VuZXJhdGUiLCJ1cmxEZXBhcnRtZW50IiwiYnV0dG9uIiwibG9hZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBamF4Q2FsbFBvc3RNZXRob2QiLCJ0aGVuIiwiZGF0YSIsIlN0YXRlTG9hZGVyIiwicHJvY2Vzc0RhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImZvcm1FbGVtZW50IiwiRm9ybUVsZW1lbnRVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVsZW1lbnQiLCJzdGF0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwiZGlzcGxheSIsImFkZCIsImVuYWJsZUJ0biIsImVsZW1lbnRCdG4iLCJkaXNhYmxlZCIsImVsZW0iLCJ3cmFwcGVyIiwicmVkaXJlY3QiLCJhcHBBbGVydCIsImluZm8iLCJ0aXRsZSIsInJlc2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwibG9nIiwiJG1lc3NhZ2UiLCIkdHlwZSIsIiR0aXRsZSIsIiRkdXJhdGlvbiIsImFwcCIsInRvYXN0IiwiYWN0aW9uQ29sb3IiLCJhY3Rpb25UaXRsZSIsImR1cmF0aW9uIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0VGltZW91dCIsIiQiLCJlcnJvckNsYXNzIiwidmFsaWRDbGFzcyIsImNvbnRhaW5lciIsInJlYWR5IiwidmFsaWRhdG9yIiwic2V0RGVmYXVsdHMiLCJoaWdobGlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZm9ybSIsImZpbmQiLCJpZCIsInVuaGlnaGxpZ2h0IiwibWFwIiwiZWx0IiwidmFsaWRhdGUiLCJvbmtleXVwIiwic3VibWl0SGFuZGxlciIsImRpc2FibGVCdG4iLCJqUXVlcnkiLCJleHRlbmQiLCJtZXNzYWdlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiZW1haWwiLCJkYXRlIiwiZGF0ZUlTTyIsIm51bWJlciIsImRpZ2l0cyIsImNyZWRpdGNhcmQiLCJlcXVhbFRvIiwiYWNjZXB0IiwibWF4bGVuZ3RoIiwiZm9ybWF0IiwibWlubGVuZ3RoIiwicmFuZ2VsZW5ndGgiLCJyYW5nZSIsIm1heCIsIm1pbiIsImUiLCJ0IiwibiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3MiLCJSb3V0ZXIiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiaSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0Iiwic2NoZW1lIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJmIiwiYSIsInRva2VucyIsImRlZmF1bHRzIiwiYyIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImdldEhvc3QiLCJzY2hlbWVzIiwia2V5cyIsImwiLCJoIiwicHVzaCIsImpvaW4iLCJnZXRJbnN0YW5jZSIsIlJvdXRlIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLElBQU1BLFNBQVMsbUJBQUFDLENBQVEsaUVBQVIsQ0FBZjtBQUNBLGdIQUFBQyxDQUFRQyxjQUFSLENBQXVCSCxNQUF2Qjs7QUFFQTs7Ozs7O0FBTUE7QUFDQSxJQUFJSSxjQUFjQyxTQUFTQyxjQUFULENBQXdCLG9CQUF4QixDQUFsQjtBQUNBLElBQUlDLGlCQUFpQkYsU0FBU0MsY0FBVCxDQUF3Qix1QkFBeEIsQ0FBckI7O0FBRUE7QUFDQSxJQUFJRSxhQUFhLGdIQUFBTixDQUFRTyxRQUFSLENBQWlCLGNBQWpCLENBQWpCO0FBQ0EsSUFBSUMsZ0JBQWdCLGdIQUFBUixDQUFRTyxRQUFSLENBQWlCLGVBQWpCLENBQXBCOztBQUVBO0FBQ0EsSUFBSUUsU0FBU04sU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUFiO0FBQ0EsSUFBSU0sU0FBU1AsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFiOztBQUVBOzs7Ozs7QUFNQSxJQUFJRixXQUFKLEVBQWlCO0FBQ2JBLGdCQUFZUyxnQkFBWixDQUE2QixRQUE3QixFQUF1QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BEQSxjQUFNQyxjQUFOO0FBQ0FDLDJCQUFtQlosV0FBbkIsRUFBZ0NJLFVBQWhDLEVBQ0tTLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDWkMsd0JBQVlQLE1BQVosRUFBb0IsS0FBcEI7QUFDQVEsd0JBQVlGLElBQVosRUFBa0JkLFdBQWxCLEVBQStCLGdCQUEvQixFQUFpRCxJQUFqRDtBQUNILFNBSkwsRUFLS2lCLEtBTEwsQ0FLVyxVQUFDQyxLQUFELEVBQVc7QUFDZEMsb0JBQVFELEtBQVIsQ0FBY0EsS0FBZDtBQUNILFNBUEw7QUFRSCxLQVZEO0FBV0g7O0FBRUQsSUFBSWYsY0FBSixFQUFvQjtBQUNoQkEsbUJBQWVNLGdCQUFmLENBQWdDLFFBQWhDLEVBQTBDLFVBQVVDLEtBQVYsRUFBaUI7QUFDdkRBLGNBQU1DLGNBQU47QUFDQUMsMkJBQW1CVCxjQUFuQixFQUFtQ0csYUFBbkMsRUFDS08sSUFETCxDQUNVLFVBQUNDLElBQUQsRUFBVTtBQUNaQyx3QkFBWVAsTUFBWixFQUFvQixLQUFwQjtBQUNBUSx3QkFBWUYsSUFBWixFQUFrQlgsY0FBbEIsRUFBa0MsZ0JBQWxDLEVBQW9ELEtBQXBEO0FBQ0gsU0FKTCxFQUtLYyxLQUxMLENBS1csVUFBQ0MsS0FBRCxFQUFXO0FBQ2RDLG9CQUFRRCxLQUFSLENBQWNBLEtBQWQ7QUFDSCxTQVBMO0FBUUgsS0FWRDtBQVdIOztBQUVEOzs7Ozs7QUFPQTs7Ozs7OztBQU9BLElBQU1OLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNRLFdBQUQsRUFBY0MsY0FBZCxFQUFpQztBQUN4RCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUMxQyxZQUFJQyxNQUFNLElBQUlDLGNBQUosRUFBVjtBQUNBLFlBQUlDLFdBQVcsSUFBSUMsUUFBSixDQUFhUixXQUFiLENBQWY7QUFDQUssWUFBSWhCLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQzdCO0FBQ0ksZ0JBQUksS0FBS29CLFVBQUwsS0FBb0IsQ0FBeEIsRUFBNEI7QUFDeEIsb0JBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUNyQmYsZ0NBQVlQLE1BQVosRUFBb0IsS0FBcEI7QUFDQWUsNEJBQVFRLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxRQUFoQixDQUFSO0FBQ0gsaUJBSEQsTUFHTztBQUNIbEIsZ0NBQVlQLE1BQVosRUFBb0IsS0FBcEI7QUFDQWdCLDJCQUFPLEtBQUtNLE1BQVo7QUFDSDtBQUNKO0FBQ0osU0FYRDtBQVlBTCxZQUFJUyxJQUFKLENBQVMsTUFBVCxFQUFpQmIsY0FBakIsRUFBaUMsSUFBakM7QUFDQUksWUFBSVUsZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6QztBQUNBVixZQUFJVyxJQUFKLENBQVNULFFBQVQ7QUFDSCxLQWxCTSxDQUFQO0FBbUJILENBcEJEOztBQXVCQTs7Ozs7O0FBTUEsSUFBTVosY0FBYyxTQUFkQSxXQUFjLENBQUNzQixPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDcEMsUUFBSUEsVUFBVSxJQUFkLEVBQW9CO0FBQ2hCRCxnQkFBUUUsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsb0JBQXpCO0FBQ0FILGdCQUFRSSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDSCxLQUhELE1BR007QUFDRkwsZ0JBQVFFLFNBQVIsQ0FBa0JJLEdBQWxCLENBQXNCLG9CQUF0QjtBQUNBTixnQkFBUUksS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0FFLGtCQUFVckMsTUFBVjtBQUNIO0FBQ0osQ0FURDs7QUFXQTs7Ozs7QUFLQSxJQUFNcUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsV0FBY0MsV0FBV0MsUUFBWCxHQUFzQixLQUFwQztBQUFBLENBQWxCOztBQUVBOzs7Ozs7O0FBT0EsSUFBTTlCLGNBQWMsU0FBZEEsV0FBYyxDQUFDRixJQUFELEVBQU9pQyxJQUFQLEVBQWlEO0FBQUEsUUFBcENDLE9BQW9DLHVFQUExQixJQUEwQjtBQUFBLFFBQXBCQyxRQUFvQix1RUFBVCxJQUFTOztBQUNqRSxRQUFJbkMsS0FBS2dCLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDckJvQixpQkFBU3BDLEtBQUtxQyxJQUFkLEVBQW9CLFNBQXBCLEVBQStCckMsS0FBS3NDLEtBQXBDLEVBQTJDLElBQTNDO0FBQ0FMLGFBQUtNLEtBQUw7QUFDQSxZQUFJSixZQUFZQSxhQUFhLElBQTdCLEVBQW1DO0FBQy9CLGdCQUFJRCxPQUFKLEVBQWEvQyxTQUFTQyxjQUFULENBQXdCOEMsT0FBeEIsRUFBaUNQLEtBQWpDLENBQXVDQyxPQUF2QyxHQUFpRCxNQUFqRDtBQUNiO0FBQ0F6QyxxQkFBU0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ3VDLEtBQXJDLENBQTJDQyxPQUEzQyxHQUFxRCxPQUFyRDtBQUNBWSxtQkFBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIxQyxLQUFLbUIsUUFBTCxDQUFjd0IsR0FBckM7QUFDSDtBQUNKLEtBVEQsTUFTTztBQUNIdEMsZ0JBQVF1QyxHQUFSLENBQVk1QyxJQUFaO0FBQ0g7QUFDSixDQWJEOztBQWVBLElBQU1vQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ1MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxNQUFsQixFQUEwQkMsU0FBMUIsRUFBd0M7QUFDckRDLFFBQUlDLEtBQUosQ0FBVUwsUUFBVixFQUFvQjtBQUNoQk0scUJBQWFMLEtBREc7QUFFaEJNLHFCQUFhTCxNQUZHO0FBR2hCTSxrQkFBVUw7QUFITSxLQUFwQjtBQUtBO0FBQ0QsUUFBSU0sS0FBS25FLFNBQVNvRSxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQSxRQUFJRCxHQUFHRSxZQUFILENBQWdCLE9BQWhCLENBQUosRUFBOEI7QUFDMUJGLFdBQUczQixLQUFILENBQVNDLE9BQVQsR0FBbUIsTUFBbkI7QUFDSDtBQUNBNkIsZUFBVyxZQUFVO0FBQ2pCSCxXQUFHM0IsS0FBSCxDQUFTQyxPQUFULEdBQW1CLE1BQW5CO0FBQ0gsS0FGRCxFQUVHb0IsU0FGSDtBQUdILENBZEQsQzs7Ozs7Ozs7Ozs7O0FDM0lBLG1CQUFBakUsQ0FBUSw4RUFBUjs7QUFFQTtBQUNBO0FBQ0EsSUFBTUcsY0FBY3dFLEVBQUUscUJBQUYsQ0FBcEI7QUFDQSxJQUFNckUsaUJBQWlCcUUsRUFBRSx3QkFBRixDQUF2Qjs7QUFFQTtBQUNBLElBQUlDLGFBQWEsWUFBakI7QUFDQSxJQUFJQyxhQUFhLFNBQWpCOztBQUVBO0FBQ0EsSUFBSWxFLFNBQVNQLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlLLFNBQVNOLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBYjs7QUFFQTtBQUNBLElBQUl5RSxZQUFZLENBQUMzRSxXQUFELEVBQWNHLGNBQWQsQ0FBaEI7O0FBR0FxRSxFQUFFdkUsUUFBRixFQUFZMkUsS0FBWixDQUFrQixZQUFZO0FBQzFCO0FBQ0FKLE1BQUVLLFNBQUYsQ0FBWUMsV0FBWixDQUF3QjtBQUNwQjlCLGlCQUFTLEtBRFc7QUFFcEJ5QixvQkFBVyxrQkFGUztBQUdwQk0sbUJBQVcsbUJBQVMxQyxPQUFULEVBQWtCO0FBQ3pCbUMsY0FBRW5DLE9BQUYsRUFBVzJDLFFBQVgsQ0FBb0JQLFVBQXBCLEVBQWdDUSxXQUFoQyxDQUE0Q1AsVUFBNUM7QUFDQUYsY0FBRW5DLFFBQVE2QyxJQUFWLEVBQWdCQyxJQUFoQixDQUFxQixlQUFlOUMsUUFBUStDLEVBQXZCLEdBQTRCLEdBQWpELEVBQXNESixRQUF0RCxDQUErRFAsVUFBL0Q7QUFDSCxTQU5tQjtBQU9wQlkscUJBQWEscUJBQVNoRCxPQUFULEVBQWtCO0FBQzNCbUMsY0FBRW5DLE9BQUYsRUFBVzRDLFdBQVgsQ0FBdUJSLFVBQXZCLEVBQW1DTyxRQUFuQyxDQUE0Q04sVUFBNUM7QUFDQUYsY0FBRW5DLFFBQVE2QyxJQUFWLEVBQWdCQyxJQUFoQixDQUFxQixlQUFlOUMsUUFBUStDLEVBQXZCLEdBQTRCLEdBQWpELEVBQXNESCxXQUF0RCxDQUFrRVIsVUFBbEU7QUFDSDtBQVZtQixLQUF4QjtBQVlBO0FBQ0FFLGNBQVVXLEdBQVYsQ0FBYyxVQUFDQyxHQUFELEVBQVM7QUFDbkJBLFlBQUlDLFFBQUosQ0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLDJCQUFlLHVCQUFVUixJQUFWLEVBQWdCO0FBQzNCbkUsNEJBQVlQLE1BQVosRUFBb0JELE1BQXBCO0FBQ0g7QUFKUSxTQUFiO0FBTUgsS0FQRDtBQVNILENBeEJEOztBQTBCQSxJQUFNUSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ3NCLE9BQUQsRUFBVVEsVUFBVixFQUF5QjtBQUN6Q1IsWUFBUUUsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsb0JBQXpCO0FBQ0FILFlBQVFJLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBaUQsZUFBVzlDLFVBQVg7QUFDSCxDQUpEOztBQU1BLElBQU04QyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxXQUFjOUMsV0FBV0MsUUFBWCxHQUFzQixJQUFwQztBQUFBLENBQW5CLEM7Ozs7Ozs7Ozs7OztBQ25EQSxtQkFBQWpELENBQVEsOERBQVI7QUFDQSxtQkFBQUEsQ0FBUSxvREFBUjtBQUNBc0IsUUFBUXVDLEdBQVIsQ0FBWSxPQUFaLEU7Ozs7Ozs7Ozs7OztBQ0ZBLGtCQUFrQix3QkFBd0IsZ0JBQWdCLHNJQUFzSSxrQkFBa0IsdUlBQXVJLGlCQUFpQix1SUFBdUksZ0Q7Ozs7Ozs7Ozs7OztBQ0FqZmtDLE9BQU9DLE1BQVAsQ0FBY0QsT0FBT2YsU0FBUCxDQUFpQmlCLFFBQS9CLEVBQXlDO0FBQ3JDQyxjQUFVLDhCQUQyQjtBQUVyQ0MsWUFBUSx3QkFGNkI7QUFHckNDLFdBQU8sdUNBSDhCO0FBSXJDeEMsU0FBSyx3REFKZ0M7QUFLckN5QyxVQUFNLCtCQUwrQjtBQU1yQ0MsYUFBUyx1Q0FONEI7QUFPckNDLFlBQVEsK0JBUDZCO0FBUXJDQyxZQUFRLDJCQVI2QjtBQVNyQ0MsZ0JBQVkseUNBVHlCO0FBVXJDQyxhQUFTLG1DQVY0QjtBQVdyQ0MsWUFBUSxrQ0FYNkI7QUFZckNDLGVBQVdiLE9BQU9mLFNBQVAsQ0FBaUI2QixNQUFqQixDQUF3QiwwQ0FBeEIsQ0FaMEI7QUFhckNDLGVBQVdmLE9BQU9mLFNBQVAsQ0FBaUI2QixNQUFqQixDQUF3QixzQ0FBeEIsQ0FiMEI7QUFjckNFLGlCQUFhaEIsT0FBT2YsU0FBUCxDQUFpQjZCLE1BQWpCLENBQXdCLDBEQUF4QixDQWR3QjtBQWVyQ0csV0FBT2pCLE9BQU9mLFNBQVAsQ0FBaUI2QixNQUFqQixDQUF3QiwwQ0FBeEIsQ0FmOEI7QUFnQnJDSSxTQUFLbEIsT0FBT2YsU0FBUCxDQUFpQjZCLE1BQWpCLENBQXdCLGdEQUF4QixDQWhCZ0M7QUFpQnJDSyxTQUFLbkIsT0FBT2YsU0FBUCxDQUFpQjZCLE1BQWpCLENBQXdCLG1EQUF4QjtBQWpCZ0MsQ0FBekMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFVBQVNNLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsTUFBSUMsSUFBRUQsR0FBTixDQUFVLFFBQXNDLGlDQUFPLEVBQVAsb0NBQVVDLEVBQUVwSCxPQUFaO0FBQUE7QUFBQTtBQUFBLG9HQUF0QyxHQUEyRCxvQkFBaUJxSCxNQUFqQix5Q0FBaUJBLE1BQWpCLE1BQXlCQSxPQUFPQyxPQUFoQyxHQUF3Q0QsT0FBT0MsT0FBUCxHQUFlRixFQUFFcEgsT0FBekQsSUFBa0VrSCxFQUFFbEgsT0FBRixHQUFVb0gsRUFBRXBILE9BQVosRUFBb0JrSCxFQUFFSyxHQUFGLEdBQU0sRUFBQ0MsUUFBT0osRUFBRUksTUFBVixFQUE1RixDQUEzRDtBQUEwSyxDQUFsTSxDQUFtTSxJQUFuTSxFQUF3TSxZQUFVO0FBQUM7QUFBYSxXQUFTTixDQUFULENBQVdBLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsUUFBRyxFQUFFRCxhQUFhQyxDQUFmLENBQUgsRUFBcUIsTUFBTSxJQUFJTSxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUF5RCxPQUFJTixJQUFFTyxPQUFPQyxNQUFQLElBQWUsVUFBU1QsQ0FBVCxFQUFXO0FBQUMsU0FBSSxJQUFJQyxJQUFFLENBQVYsRUFBWUEsSUFBRVMsVUFBVUMsTUFBeEIsRUFBK0JWLEdBQS9CLEVBQW1DO0FBQUMsVUFBSUMsSUFBRVEsVUFBVVQsQ0FBVixDQUFOLENBQW1CLEtBQUksSUFBSVcsQ0FBUixJQUFhVixDQUFiO0FBQWVNLGVBQU9LLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2IsQ0FBckMsRUFBdUNVLENBQXZDLE1BQTRDWixFQUFFWSxDQUFGLElBQUtWLEVBQUVVLENBQUYsQ0FBakQ7QUFBZjtBQUFzRSxZQUFPWixDQUFQO0FBQVMsR0FBdks7QUFBQSxNQUF3S0UsSUFBRSxjQUFZLE9BQU9jLE1BQW5CLElBQTJCLG9CQUFpQkEsT0FBT0MsUUFBeEIsQ0FBM0IsR0FBNEQsVUFBU2pCLENBQVQsRUFBVztBQUFDLGtCQUFjQSxDQUFkLHlDQUFjQSxDQUFkO0FBQWdCLEdBQXhGLEdBQXlGLFVBQVNBLENBQVQsRUFBVztBQUFDLFdBQU9BLEtBQUcsY0FBWSxPQUFPZ0IsTUFBdEIsSUFBOEJoQixFQUFFa0IsV0FBRixLQUFnQkYsTUFBOUMsSUFBc0RoQixNQUFJZ0IsT0FBT0gsU0FBakUsR0FBMkUsUUFBM0UsVUFBMkZiLENBQTNGLHlDQUEyRkEsQ0FBM0YsQ0FBUDtBQUFvRyxHQUFuWDtBQUFBLE1BQW9YWSxJQUFFLFlBQVU7QUFBQyxhQUFTWixDQUFULENBQVdBLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsV0FBSSxJQUFJQyxJQUFFLENBQVYsRUFBWUEsSUFBRUQsRUFBRVUsTUFBaEIsRUFBdUJULEdBQXZCLEVBQTJCO0FBQUMsWUFBSVUsSUFBRVgsRUFBRUMsQ0FBRixDQUFOLENBQVdVLEVBQUVPLFVBQUYsR0FBYVAsRUFBRU8sVUFBRixJQUFjLENBQUMsQ0FBNUIsRUFBOEJQLEVBQUVRLFlBQUYsR0FBZSxDQUFDLENBQTlDLEVBQWdELFdBQVVSLENBQVYsS0FBY0EsRUFBRVMsUUFBRixHQUFXLENBQUMsQ0FBMUIsQ0FBaEQsRUFBNkViLE9BQU9jLGNBQVAsQ0FBc0J0QixDQUF0QixFQUF3QlksRUFBRVcsR0FBMUIsRUFBOEJYLENBQTlCLENBQTdFO0FBQThHO0FBQUMsWUFBTyxVQUFTWCxDQUFULEVBQVdDLENBQVgsRUFBYVUsQ0FBYixFQUFlO0FBQUMsYUFBT1YsS0FBR0YsRUFBRUMsRUFBRVksU0FBSixFQUFjWCxDQUFkLENBQUgsRUFBb0JVLEtBQUdaLEVBQUVDLENBQUYsRUFBSVcsQ0FBSixDQUF2QixFQUE4QlgsQ0FBckM7QUFBdUMsS0FBOUQ7QUFBK0QsR0FBaFAsRUFBdFg7QUFBQSxNQUF5bUJ1QixJQUFFLFlBQVU7QUFBQyxhQUFTQSxDQUFULENBQVd2QixDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDRixRQUFFLElBQUYsRUFBT3dCLENBQVAsR0FBVSxLQUFLQyxRQUFMLEdBQWN4QixLQUFHLEVBQUN5QixVQUFTLEVBQVYsRUFBYUMsUUFBTyxFQUFwQixFQUF1QkMsTUFBSyxFQUE1QixFQUErQkMsUUFBTyxFQUF0QyxFQUEzQixFQUFxRSxLQUFLQyxTQUFMLENBQWU1QixLQUFHLEVBQWxCLENBQXJFO0FBQTJGLFlBQU9VLEVBQUVZLENBQUYsRUFBSSxDQUFDLEVBQUNELEtBQUksZ0JBQUwsRUFBc0JRLE9BQU0sZUFBUy9CLENBQVQsRUFBVztBQUFDLGFBQUtnQyxVQUFMLENBQWdCaEMsRUFBRTBCLFFBQWxCLEdBQTRCLEtBQUtJLFNBQUwsQ0FBZTlCLEVBQUVwSCxNQUFqQixDQUE1QixFQUFxRCxZQUFXb0gsQ0FBWCxJQUFjLEtBQUtpQyxTQUFMLENBQWVqQyxFQUFFMkIsTUFBakIsQ0FBbkUsRUFBNEYsS0FBS08sT0FBTCxDQUFhbEMsRUFBRTRCLElBQWYsQ0FBNUYsRUFBaUgsS0FBS08sU0FBTCxDQUFlbkMsRUFBRTZCLE1BQWpCLENBQWpIO0FBQTBJLE9BQWxMLEVBQUQsRUFBcUwsRUFBQ04sS0FBSSxXQUFMLEVBQWlCUSxPQUFNLGVBQVMvQixDQUFULEVBQVc7QUFBQyxhQUFLb0MsT0FBTCxHQUFhNUIsT0FBTzZCLE1BQVAsQ0FBY3JDLENBQWQsQ0FBYjtBQUE4QixPQUFqRSxFQUFyTCxFQUF3UCxFQUFDdUIsS0FBSSxXQUFMLEVBQWlCUSxPQUFNLGlCQUFVO0FBQUMsZUFBTyxLQUFLSyxPQUFaO0FBQW9CLE9BQXRELEVBQXhQLEVBQWdULEVBQUNiLEtBQUksWUFBTCxFQUFrQlEsT0FBTSxlQUFTL0IsQ0FBVCxFQUFXO0FBQUMsYUFBS3lCLFFBQUwsQ0FBY0MsUUFBZCxHQUF1QjFCLENBQXZCO0FBQXlCLE9BQTdELEVBQWhULEVBQStXLEVBQUN1QixLQUFJLFlBQUwsRUFBa0JRLE9BQU0saUJBQVU7QUFBQyxlQUFPLEtBQUtOLFFBQUwsQ0FBY0MsUUFBckI7QUFBOEIsT0FBakUsRUFBL1csRUFBa2IsRUFBQ0gsS0FBSSxXQUFMLEVBQWlCUSxPQUFNLGVBQVMvQixDQUFULEVBQVc7QUFBQyxhQUFLeUIsUUFBTCxDQUFjRSxNQUFkLEdBQXFCM0IsQ0FBckI7QUFBdUIsT0FBMUQsRUFBbGIsRUFBOGUsRUFBQ3VCLEtBQUksV0FBTCxFQUFpQlEsT0FBTSxlQUFTL0IsQ0FBVCxFQUFXO0FBQUMsYUFBS3lCLFFBQUwsQ0FBY0ksTUFBZCxHQUFxQjdCLENBQXJCO0FBQXVCLE9BQTFELEVBQTllLEVBQTBpQixFQUFDdUIsS0FBSSxXQUFMLEVBQWlCUSxPQUFNLGlCQUFVO0FBQUMsZUFBTyxLQUFLTixRQUFMLENBQWNJLE1BQXJCO0FBQTRCLE9BQTlELEVBQTFpQixFQUEwbUIsRUFBQ04sS0FBSSxTQUFMLEVBQWVRLE9BQU0sZUFBUy9CLENBQVQsRUFBVztBQUFDLGFBQUt5QixRQUFMLENBQWNHLElBQWQsR0FBbUI1QixDQUFuQjtBQUFxQixPQUF0RCxFQUExbUIsRUFBa3FCLEVBQUN1QixLQUFJLFNBQUwsRUFBZVEsT0FBTSxpQkFBVTtBQUFDLGVBQU8sS0FBS04sUUFBTCxDQUFjRyxJQUFyQjtBQUEwQixPQUExRCxFQUFscUIsRUFBOHRCLEVBQUNMLEtBQUksa0JBQUwsRUFBd0JRLE9BQU0sZUFBUy9CLENBQVQsRUFBV0MsQ0FBWCxFQUFhVyxDQUFiLEVBQWU7QUFBQyxZQUFJWSxJQUFFLElBQU47QUFBQSxZQUFXYyxJQUFFLEtBQUssQ0FBbEI7QUFBQSxZQUFvQkMsSUFBRSxJQUFJQyxNQUFKLENBQVcsT0FBWCxDQUF0QixDQUEwQyxJQUFHdkMsYUFBYXdDLEtBQWhCLEVBQXNCeEMsRUFBRXlDLE9BQUYsQ0FBVSxVQUFTekMsQ0FBVCxFQUFXcUMsQ0FBWCxFQUFhO0FBQUNDLFlBQUVJLElBQUYsQ0FBTzNDLENBQVAsSUFBVVksRUFBRVosQ0FBRixFQUFJQyxDQUFKLENBQVYsR0FBaUJ1QixFQUFFb0IsZ0JBQUYsQ0FBbUI1QyxJQUFFLEdBQUYsSUFBTyxjQUFZLGVBQWEsT0FBT0MsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NDLEVBQUVELENBQUYsQ0FBOUMsSUFBb0RxQyxDQUFwRCxHQUFzRCxFQUE3RCxJQUFpRSxHQUFwRixFQUF3RnJDLENBQXhGLEVBQTBGVyxDQUExRixDQUFqQjtBQUE4RyxTQUF0SSxFQUF0QixLQUFtSyxJQUFHLGNBQVksZUFBYSxPQUFPWCxDQUFwQixHQUFzQixXQUF0QixHQUFrQ0MsRUFBRUQsQ0FBRixDQUE5QyxDQUFILEVBQXVELEtBQUlxQyxDQUFKLElBQVNyQyxDQUFUO0FBQVcsZUFBSzJDLGdCQUFMLENBQXNCNUMsSUFBRSxHQUFGLEdBQU1zQyxDQUFOLEdBQVEsR0FBOUIsRUFBa0NyQyxFQUFFcUMsQ0FBRixDQUFsQyxFQUF1QzFCLENBQXZDO0FBQVgsU0FBdkQsTUFBaUhBLEVBQUVaLENBQUYsRUFBSUMsQ0FBSjtBQUFPLE9BQW5YLEVBQTl0QixFQUFtbEMsRUFBQ3NCLEtBQUksVUFBTCxFQUFnQlEsT0FBTSxlQUFTL0IsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsSUFBRSxLQUFLd0IsUUFBTCxDQUFjRSxNQUFkLEdBQXFCM0IsQ0FBM0IsQ0FBNkIsSUFBR0MsS0FBSyxLQUFLbUMsT0FBYixFQUFxQnBDLElBQUVDLENBQUYsQ0FBckIsS0FBOEIsSUFBRyxFQUFFRCxLQUFLLEtBQUtvQyxPQUFaLENBQUgsRUFBd0IsTUFBTSxJQUFJUyxLQUFKLENBQVUsZ0JBQWM3QyxDQUFkLEdBQWdCLG1CQUExQixDQUFOLENBQXFELE9BQU8sS0FBS29DLE9BQUwsQ0FBYXBDLENBQWIsQ0FBUDtBQUF1QixPQUFqTSxFQUFubEMsRUFBc3hDLEVBQUN1QixLQUFJLFVBQUwsRUFBZ0JRLE9BQU0sZUFBUy9CLENBQVQsRUFBV0UsQ0FBWCxFQUFhVSxDQUFiLEVBQWU7QUFBQyxZQUFJWSxJQUFFLEtBQUtzQixRQUFMLENBQWM5QyxDQUFkLENBQU47QUFBQSxZQUF1QnNDLElBQUVwQyxLQUFHLEVBQTVCO0FBQUEsWUFBK0JxQyxJQUFFdEMsRUFBRSxFQUFGLEVBQUtxQyxDQUFMLENBQWpDO0FBQUEsWUFBeUNTLElBQUUsRUFBM0M7QUFBQSxZQUE4Q0MsSUFBRSxDQUFDLENBQWpEO0FBQUEsWUFBbURDLElBQUUsRUFBckQsQ0FBd0QsSUFBR3pCLEVBQUUwQixNQUFGLENBQVNSLE9BQVQsQ0FBaUIsVUFBU3pDLENBQVQsRUFBVztBQUFDLGNBQUcsV0FBU0EsRUFBRSxDQUFGLENBQVosRUFBaUIsT0FBTzhDLElBQUU5QyxFQUFFLENBQUYsSUFBSzhDLENBQVAsRUFBUyxNQUFLQyxJQUFFLENBQUMsQ0FBUixDQUFoQixDQUEyQjtBQUFDLGdCQUFHLGVBQWEvQyxFQUFFLENBQUYsQ0FBaEIsRUFBcUIsTUFBTSxJQUFJNEMsS0FBSixDQUFVLHFCQUFtQjVDLEVBQUUsQ0FBRixDQUFuQixHQUF3QixxQkFBbEMsQ0FBTixDQUErRCxJQUFJQyxJQUFFc0IsRUFBRTJCLFFBQUYsSUFBWWxELEVBQUUsQ0FBRixLQUFPdUIsRUFBRTJCLFFBQTNCLENBQW9DLElBQUcsQ0FBQyxDQUFELEtBQUtILENBQUwsSUFBUSxDQUFDOUMsQ0FBVCxJQUFZRCxFQUFFLENBQUYsS0FBT3FDLENBQVAsSUFBVUEsRUFBRXJDLEVBQUUsQ0FBRixDQUFGLEtBQVN1QixFQUFFMkIsUUFBRixDQUFXbEQsRUFBRSxDQUFGLENBQVgsQ0FBbEMsRUFBbUQ7QUFBQyxrQkFBSVcsSUFBRSxLQUFLLENBQVgsQ0FBYSxJQUFHWCxFQUFFLENBQUYsS0FBT3FDLENBQVYsRUFBWTFCLElBQUUwQixFQUFFckMsRUFBRSxDQUFGLENBQUYsQ0FBRixFQUFVLE9BQU9zQyxFQUFFdEMsRUFBRSxDQUFGLENBQUYsQ0FBakIsQ0FBWixLQUF5QztBQUFDLG9CQUFHLENBQUNDLENBQUosRUFBTTtBQUFDLHNCQUFHOEMsQ0FBSCxFQUFLLE9BQU8sTUFBTSxJQUFJSCxLQUFKLENBQVUsZ0JBQWM3QyxDQUFkLEdBQWdCLDRCQUFoQixHQUE2Q0MsRUFBRSxDQUFGLENBQTdDLEdBQWtELElBQTVELENBQU47QUFBd0UscUJBQUV1QixFQUFFMkIsUUFBRixDQUFXbEQsRUFBRSxDQUFGLENBQVgsQ0FBRjtBQUFtQixtQkFBSWdELElBQUUsQ0FBQyxDQUFELEtBQUtyQyxDQUFMLElBQVEsQ0FBQyxDQUFELEtBQUtBLENBQWIsSUFBZ0IsT0FBS0EsQ0FBM0IsQ0FBNkIsSUFBRyxDQUFDcUMsQ0FBRCxJQUFJLENBQUNELENBQVIsRUFBVTtBQUFDLG9CQUFJSSxJQUFFQyxtQkFBbUJ6QyxDQUFuQixFQUFzQjBDLE9BQXRCLENBQThCLE1BQTlCLEVBQXFDLEdBQXJDLENBQU4sQ0FBZ0QsV0FBU0YsQ0FBVCxJQUFZLFNBQU94QyxDQUFuQixLQUF1QndDLElBQUUsRUFBekIsR0FBNkJMLElBQUU5QyxFQUFFLENBQUYsSUFBS21ELENBQUwsR0FBT0wsQ0FBdEM7QUFBd0MsbUJBQUUsQ0FBQyxDQUFIO0FBQUssYUFBOVYsTUFBbVc3QyxLQUFHRCxFQUFFLENBQUYsS0FBT3NDLENBQVYsSUFBYSxPQUFPQSxFQUFFdEMsRUFBRSxDQUFGLENBQUYsQ0FBcEI7QUFBNEI7QUFBQyxTQUFsa0IsR0FBb2tCLE9BQUs4QyxDQUFMLEtBQVNBLElBQUUsR0FBWCxDQUFwa0IsRUFBb2xCdkIsRUFBRStCLFVBQUYsQ0FBYWIsT0FBYixDQUFxQixVQUFTMUMsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsSUFBRSxLQUFLLENBQVgsQ0FBYSxPQUFNLFdBQVNELEVBQUUsQ0FBRixDQUFULEdBQWMsTUFBS2lELElBQUVqRCxFQUFFLENBQUYsSUFBS2lELENBQVosQ0FBZCxHQUE2QixNQUFLLGVBQWFqRCxFQUFFLENBQUYsQ0FBYixLQUFvQkEsRUFBRSxDQUFGLEtBQU9zQyxDQUFQLElBQVVyQyxJQUFFcUMsRUFBRXRDLEVBQUUsQ0FBRixDQUFGLENBQUYsRUFBVSxPQUFPdUMsRUFBRXZDLEVBQUUsQ0FBRixDQUFGLENBQTNCLElBQW9Dd0IsRUFBRTJCLFFBQUYsSUFBWW5ELEVBQUUsQ0FBRixLQUFPd0IsRUFBRTJCLFFBQXJCLEtBQWdDbEQsSUFBRXVCLEVBQUUyQixRQUFGLENBQVduRCxFQUFFLENBQUYsQ0FBWCxDQUFsQyxDQUFwQyxFQUF3RmlELElBQUVqRCxFQUFFLENBQUYsSUFBS0MsQ0FBTCxHQUFPZ0QsQ0FBckgsQ0FBTCxDQUFuQztBQUFpSyxTQUEvTSxDQUFwbEIsRUFBcXlCRixJQUFFLEtBQUt0QixRQUFMLENBQWNDLFFBQWQsR0FBdUJxQixDQUE5ekIsRUFBZzBCdkIsRUFBRWdDLFlBQUYsSUFBZ0IsYUFBWWhDLEVBQUVnQyxZQUE5QixJQUE0QyxLQUFLQyxTQUFMLE1BQWtCakMsRUFBRWdDLFlBQUYsQ0FBZUUsT0FBN0UsR0FBcUZYLElBQUV2QixFQUFFZ0MsWUFBRixDQUFlRSxPQUFmLEdBQXVCLEtBQXZCLElBQThCVCxLQUFHLEtBQUtVLE9BQUwsRUFBakMsSUFBaURaLENBQXhJLEdBQTBJLGVBQWEsT0FBT3ZCLEVBQUVvQyxPQUF0QixJQUErQixlQUFhLE9BQU9wQyxFQUFFb0MsT0FBRixDQUFVLENBQVYsQ0FBbkQsSUFBaUUsS0FBS0gsU0FBTCxPQUFtQmpDLEVBQUVvQyxPQUFGLENBQVUsQ0FBVixDQUFwRixHQUFpR2IsSUFBRXZCLEVBQUVvQyxPQUFGLENBQVUsQ0FBVixJQUFhLEtBQWIsSUFBb0JYLEtBQUcsS0FBS1UsT0FBTCxFQUF2QixJQUF1Q1osQ0FBMUksR0FBNElFLEtBQUcsS0FBS1UsT0FBTCxPQUFpQlYsQ0FBcEIsR0FBc0JGLElBQUUsS0FBS1UsU0FBTCxLQUFpQixLQUFqQixHQUF1QlIsQ0FBdkIsR0FBeUJGLENBQWpELEdBQW1EbkMsTUFBSSxDQUFDLENBQUwsS0FBU21DLElBQUUsS0FBS1UsU0FBTCxLQUFpQixLQUFqQixHQUF1QixLQUFLRSxPQUFMLEVBQXZCLEdBQXNDWixDQUFqRCxDQUF6b0MsRUFBNnJDdkMsT0FBT3FELElBQVAsQ0FBWXRCLENBQVosRUFBZTVCLE1BQWYsR0FBc0IsQ0FBdHRDLEVBQXd0QztBQUFDLGNBQUl5QyxJQUFFLEtBQUssQ0FBWDtBQUFBLGNBQWFVLElBQUUsRUFBZjtBQUFBLGNBQWtCQyxJQUFFLFNBQUZBLENBQUUsQ0FBUy9ELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUNBLGdCQUFFLGNBQVksT0FBT0EsQ0FBbkIsR0FBcUJBLEdBQXJCLEdBQXlCQSxDQUEzQixFQUE2QkEsSUFBRSxTQUFPQSxDQUFQLEdBQVMsRUFBVCxHQUFZQSxDQUEzQyxFQUE2QzZELEVBQUVFLElBQUYsQ0FBT1gsbUJBQW1CckQsQ0FBbkIsSUFBc0IsR0FBdEIsR0FBMEJxRCxtQkFBbUJwRCxDQUFuQixDQUFqQyxDQUE3QztBQUFxRyxXQUF2SSxDQUF3SSxLQUFJbUQsQ0FBSixJQUFTYixDQUFUO0FBQVcsaUJBQUtLLGdCQUFMLENBQXNCUSxDQUF0QixFQUF3QmIsRUFBRWEsQ0FBRixDQUF4QixFQUE2QlcsQ0FBN0I7QUFBWCxXQUEyQ2hCLElBQUVBLElBQUUsR0FBRixHQUFNZSxFQUFFRyxJQUFGLENBQU8sR0FBUCxFQUFZWCxPQUFaLENBQW9CLE1BQXBCLEVBQTJCLEdBQTNCLENBQVI7QUFBd0MsZ0JBQU9QLENBQVA7QUFBUyxPQUEzaEQsRUFBdHhDLENBQUosRUFBd3pGLENBQUMsRUFBQ3hCLEtBQUksYUFBTCxFQUFtQlEsT0FBTSxpQkFBVTtBQUFDLGVBQU9PLENBQVA7QUFBUyxPQUE3QyxFQUFELEVBQWdELEVBQUNmLEtBQUksU0FBTCxFQUFlUSxPQUFNLGVBQVMvQixDQUFULEVBQVc7QUFBQyxZQUFJQyxJQUFFdUIsRUFBRTBDLFdBQUYsRUFBTixDQUFzQmpFLEVBQUVsSCxjQUFGLENBQWlCaUgsQ0FBakI7QUFBb0IsT0FBM0UsRUFBaEQsQ0FBeHpGLEdBQXU3RndCLENBQTk3RjtBQUFnOEYsR0FBdGpHLEVBQTNtQixDQUFvcUhBLEVBQUUyQyxLQUFGLEVBQVEzQyxFQUFFNEMsT0FBVixDQUFrQixJQUFJOUIsSUFBRSxJQUFJZCxDQUFKLEVBQU4sQ0FBWSxPQUFNLEVBQUNsQixRQUFPa0IsQ0FBUixFQUFVMUksU0FBUXdKLENBQWxCLEVBQU47QUFBMkIsQ0FBM2hJLENBQUQsQyIsImZpbGUiOiJqcy9zY3JpcHQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2JhY2svXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9iYWNrL2pzL2J1bmRsZS5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MjMwOTMwOWIwMjdmYTk3NzRjNyIsImltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluJztcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4vZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgR2xvYmFsIEZpbGUgY29uc3RhbmNlXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8vIGZvcm0gaWRlbnRpZnlcbmxldCBjb21wYW55Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmxldCBkZXBhcnRtZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXBhcnRtZW50LXN0ZXBzLWZvcm0nKTtcblxuLy8gZm9ybSB1cmwgYmluZGluZ1xubGV0IHVybENvbXBhbnkgPSBSb3V0aW5nLmdlbmVyYXRlKCdzdGFydF9tZW1iZXInKTtcbmxldCB1cmxEZXBhcnRtZW50ID0gUm91dGluZy5nZW5lcmF0ZSgnc2Vjb25kX21lbWJlcicpO1xuXG4vLyBjb21wb25lbnRzXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBzLWZvcm1CdG4nKTtcbmxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQWpheCBDYWxsaW5nIEZ1bmN0aW9uXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmlmIChjb21wYW55Rm9ybSkge1xuICAgIGNvbXBhbnlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBamF4Q2FsbFBvc3RNZXRob2QoY29tcGFueUZvcm0sIHVybENvbXBhbnkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhKGRhdGEsIGNvbXBhbnlGb3JtLCBcImZvcm0tZnNlLXN0ZXBzXCIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmlmIChkZXBhcnRtZW50Rm9ybSkge1xuICAgIGRlcGFydG1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBamF4Q2FsbFBvc3RNZXRob2QoZGVwYXJ0bWVudEZvcm0sIHVybERlcGFydG1lbnQpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhKGRhdGEsIGRlcGFydG1lbnRGb3JtLCBcImZvcm0tZnNlLXN0ZXBzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEZ1bmN0aW9uXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cblxuLyoqXG4gKiBBamF4IGNhbGxpbmcgRm9yIFBvc3QgTWV0aG9kXG4gKiBAcGFyYW0gZm9ybUVsZW1lbnRcbiAqIEBwYXJhbSBGb3JtRWxlbWVudFVybFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBamF4Q2FsbFBvc3RNZXRob2QgPSAoZm9ybUVsZW1lbnQsIEZvcm1FbGVtZW50VXJsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBTdGF0ZUxvYWRlcihsb2FkZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlTG9hZGVyKGxvYWRlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5zdGF0dXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIEZvcm1FbGVtZW50VXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pXG59O1xuXG5cbi8qKlxuICogTG9hZGVyIHByb2Nlc3NcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGF0ZUxvYWRlciA9IChlbGVtZW50LCBzdGF0ZSkgPT4ge1xuICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWxvYWRlci1oaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tbG9hZGVyLWhpZGRlblwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVuYWJsZUJ0bihidXR0b24pO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnV0dG9uIEVuYWJsZVxuICogQHBhcmFtIGVsZW1lbnRCdG5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmFibGVCdG4gPSBlbGVtZW50QnRuID0+IGVsZW1lbnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBEYXRhIHJlc3BvbnNlIHByb2Nlc3NcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gZWxlbVxuICogQHBhcmFtIHdyYXBwZXJcbiAqIEBwYXJhbSByZWRpcmVjdFxuICovXG5jb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhLCBlbGVtLCB3cmFwcGVyID0gbnVsbCwgcmVkaXJlY3QgPSB0cnVlKSA9PiB7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgYXBwQWxlcnQoZGF0YS5pbmZvLCAnc3VjY2VzcycsIGRhdGEudGl0bGUsIDMwMDApO1xuICAgICAgICBlbGVtLnJlc2V0KCk7XG4gICAgICAgIGlmIChyZWRpcmVjdCAmJiByZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdyYXBwZXIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vIFByZWxvYWQgaXMgY2xhc3MgTG9hZGVyIGZvciBQYXJlbnQgTGF5b3V0XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5yZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG59O1xuXG5jb25zdCBhcHBBbGVydCA9ICgkbWVzc2FnZSwgJHR5cGUsICR0aXRsZSwgJGR1cmF0aW9uKSA9PiB7XG4gICAgYXBwLnRvYXN0KCRtZXNzYWdlLCB7XG4gICAgICAgIGFjdGlvbkNvbG9yOiAkdHlwZSxcbiAgICAgICAgYWN0aW9uVGl0bGU6ICR0aXRsZSxcbiAgICAgICAgZHVyYXRpb246ICRkdXJhdGlvblxuICAgIH0pO1xuICAgIC8vIGhlcmUgZGVjbGFyZSBsZXQgZWwgYWZ0ZXIgZWxlbWVudCBjcmVhdGUgYnV0IGJlZm9yZSBkb2Vzbid0IG5vdCBleGlzdFxuICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jyk7XG4gICBpZiAoZWwuaGFzQXR0cmlidXRlKFwic3R5bGVcIikpIHtcbiAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAkZHVyYXRpb24pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9hcHAtYnVuZGxlLmpzIiwicmVxdWlyZSgnLi9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZScpO1xuXG4vLyBpbml0aWFsIHZhcmlhYmxlXG4vLyBmb3JtXG5jb25zdCBjb21wYW55Rm9ybSA9ICQoJyNjb21wYW55LXN0ZXBzLWZvcm0nKTtcbmNvbnN0IGRlcGFydG1lbnRGb3JtID0gJCgnI2RlcGFydG1lbnQtc3RlcHMtZm9ybScpO1xuXG4vL0Vycm9yXG5sZXQgZXJyb3JDbGFzcyA9ICdpcy1pbnZhbGlkJztcbmxldCB2YWxpZENsYXNzID0gJ3N1Y2Nlc3MnO1xuXG4vLyBjb21wb25lbnRzXG5sZXQgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpO1xubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwcy1mb3JtQnRuJyk7XG5cbi8vIGFycmF5Lm1hcCBjbGFzcyBmb3JtXG5sZXQgY29udGFpbmVyID0gW2NvbXBhbnlGb3JtLCBkZXBhcnRtZW50Rm9ybV07XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIGluaXQgZGVmYXVsdCBzZXR0aW5nIHZhbGlkYXRvclxuICAgICQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcbiAgICAgICAgd3JhcHBlcjogJ2RpdicsXG4gICAgICAgIGVycm9yQ2xhc3M6J2ludmFsaWQtZmVlZGJhY2snLFxuICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoZXJyb3JDbGFzcykucmVtb3ZlQ2xhc3ModmFsaWRDbGFzcyk7XG4gICAgICAgICAgICAkKGVsZW1lbnQuZm9ybSkuZmluZChcImxhYmVsW2Zvcj1cIiArIGVsZW1lbnQuaWQgKyBcIl1cIikuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpLmFkZENsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgJChlbGVtZW50LmZvcm0pLmZpbmQoXCJsYWJlbFtmb3I9XCIgKyBlbGVtZW50LmlkICsgXCJdXCIpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gaW5pdCB2YWxpZGF0b3Igd2l0aCBmb3JtXG4gICAgY29udGFpbmVyLm1hcCgoZWx0KSA9PiB7XG4gICAgICAgIGVsdC52YWxpZGF0ZSh7XG4gICAgICAgICAgICBvbmtleXVwOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgU3RhdGVMb2FkZXIobG9hZGVyLCBidXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSk7XG5cbmNvbnN0IFN0YXRlTG9hZGVyID0gKGVsZW1lbnQsIGVsZW1lbnRCdG4pID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWxvYWRlci1oaWRkZW5cIik7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRpc2FibGVCdG4oZWxlbWVudEJ0bik7XG59O1xuXG5jb25zdCBkaXNhYmxlQnRuID0gZWxlbWVudEJ0biA9PiBlbGVtZW50QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9hcHBGb3JtVmFsaWRhdGUuanMiLCJyZXF1aXJlKCcuL2FwcEZvcm1WYWxpZGF0ZScpO1xucmVxdWlyZSgnLi9hcHAtYnVuZGxlJyk7XG5jb25zb2xlLmxvZygncmVhZHknKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9idW5kbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VfdXJsXCI6XCJcIixcInJvdXRlc1wiOntcInN0YXJ0X21lbWJlclwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWNjb3VudC9pbmZvLXN0YXJ0XCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W1wiaHR0cFwiXX0sXCJzZWNvbmRfbWVtYmVyXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9hY2NvdW50L2luZm8tc2Vjb25kXCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W1wiaHR0cFwiXX0sXCJ0aGlyZF9tZW1iZXJcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2FjY291bnQvaW5mby10aGlyZFwiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJQT1NUXCJdLFwic2NoZW1lc1wiOltcImh0dHBcIl19fSxcInByZWZpeFwiOlwiXCIsXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInNjaGVtZVwiOlwiaHR0cFwifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2JhY2svanMvZm9zX2pzX3JvdXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9iYWNrL2pzL2Zvc19qc19yb3V0ZXMuanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJqUXVlcnkuZXh0ZW5kKGpRdWVyeS52YWxpZGF0b3IubWVzc2FnZXMsIHtcbiAgICByZXF1aXJlZDogXCJWZXVpbGxleiByZW5zZWlnbmVyIGNlIGNoYW1wXCIsXG4gICAgcmVtb3RlOiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcbiAgICBlbWFpbDogXCJTdnAsIEVudHJleiB1bmUgYWRyZXNzZSBlbWFpbCB2YWxpZGUuXCIsXG4gICAgdXJsOiBcIlVybCBpbnZhbGlkZSwgRm9ybWF0IEFjY2VwdMOpOiAoaHR0cDovL3d3dy5leGVtcGxlLmNvbSlcIixcbiAgICBkYXRlOiBcIlN2cCwgRW50cmV6IHVuZSBkYXRlLiB2YWxpZGUgXCIsXG4gICAgZGF0ZUlTTzogXCJTdnAsIEVudHJleiB1bmUgZGF0ZSBhdSBmb3JtYXQgKElTTykuXCIsXG4gICAgbnVtYmVyOiBcIlN2cCwgRW50cmV6IHVuIG51bWVybyB2YWxpZGUuXCIsXG4gICAgZGlnaXRzOiBcIlN2cCwgRW50cmV6ICBvbmx5IGRpZ2l0cy5cIixcbiAgICBjcmVkaXRjYXJkOiBcIlN2cCwgRW50cmV6IGEgdmFsaWQgY3JlZGl0IGNhcmQgbnVtYmVyLlwiLFxuICAgIGVxdWFsVG86IFwiU3ZwLCBFbnRyZXogdGhlIHNhbWUgdmFsdWUgYWdhaW4uXCIsXG4gICAgYWNjZXB0OiBcIlN2cCwgRW50cmV6IHVuZSBleHRlbnNpb24gdmFsaWRlXCIsXG4gICAgbWF4bGVuZ3RoOiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiksXG4gICAgbWlubGVuZ3RoOiBqUXVlcnkudmFsaWRhdG9yLmZvcm1hdChcIlN2cCwgRW50cmV6IGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLlwiKSxcbiAgICByYW5nZWxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLlwiKSxcbiAgICByYW5nZTogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIpLFxuICAgIG1heDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLFxuICAgIG1pbjogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCJTdnAsIEVudHJleiBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvYmFjay9qcy9qcXVlcnktbWVzc2FnZS12YWxpZGF0ZS5qcyIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKHQsbil7ZSh0aGlzLGkpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHNjaGVtZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlO2lmKHQgaW4gdGhpcy5yb3V0ZXNfKWU9dDtlbHNlIGlmKCEoZSBpbiB0aGlzLnJvdXRlc18pKXRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKTtyZXR1cm4gdGhpcy5yb3V0ZXNfW2VdfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuLG8pe3ZhciBpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGY9ITAsYT1cIlwiO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGY9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1mfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoZilyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFmKXt2YXIgYz1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09YyYmbnVsbD09PW8mJihjPVwiXCIpLHU9dFsxXStjK3V9Zj0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBjPXZvaWQgMCxsPVtdLGg9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsbC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IoYyBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhjLHNbY10saCk7dT11K1wiP1wiK2wuam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==