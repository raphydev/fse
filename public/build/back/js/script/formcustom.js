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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/back/js/formcustom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/back/js/formcustom.js":
/*!**************************************!*\
  !*** ./assets/back/js/formcustom.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// setup an "add a tag" link
var $addTagLink = $('<a href="#" class="btn btn-primary">Ajouter un actionnaire</a>');
var $newLinkLi = $('<div></div>').append($addTagLink);

var $addTagLink2 = $('<a href="#" class="btn btn-primary">Ajouter les pôles clés de votre entreprise</a>');
var $newLinkLi2 = $('<div></div>').append($addTagLink2);

jQuery(document).ready(function () {
    // Get the ul that holds the collection of tags
    var $collectionHolder = $('div.act');
    var $collectionHolder2 = $('div.dep');

    $(".col-form-label").remove();
    // add the "add a tag" anchor and li to the tags ul
    $collectionHolder.append($newLinkLi);
    $collectionHolder2.append($newLinkLi2);

    // count the current form inputs we have (e.g. 2), use that as the new
    // index when inserting a new item (e.g. 2)
    $collectionHolder.data('index', $collectionHolder.find(':input').length);
    $collectionHolder2.data('index', $collectionHolder2.find(':input').length);

    $addTagLink.on('click', function (e) {
        // prevent the link from creating a "#" on the URL
        e.preventDefault();

        // add a new tag form (see code block below)
        addTagForm($collectionHolder, $newLinkLi);
    });
    $addTagLink2.on('click', function (e) {
        // prevent the link from creating a "#" on the URL
        e.preventDefault();

        // add a new tag form (see code block below)
        addTagForm2($collectionHolder2, $newLinkLi2);
    });
});

function addTagForm2($collectionHolder2, $newLinkL2) {
    // Get the data-prototype explained earlier
    var prototype = $collectionHolder2.data('prototype');

    // get the new index
    var index = $collectionHolder2.data('index');

    // Replace '$$name$$' in the prototype's HTML to
    // instead be a number based on how many items we have
    var newForm = prototype.replace(/__name__/g, index);

    // increase the index with one for the next item
    $collectionHolder2.data('index', index + 1);

    // Display the form in the page in an li, before the "Add a tag" link li
    var $newFormLi = $('<div></div>').append(newForm);

    // also add a remove button, just for this example
    $newFormLi.append('<a href="#" class="btn btn-square btn-danger mb-10 remove-dep"><i class="ti-trash"></i></a>');
    $newLinkL2.before($newFormLi);

    // handle the removal, just for this example
    $('.remove-dep').click(function (e) {
        e.preventDefault();

        $(this).parent().remove();

        return false;
    });
}

function addTagForm($collectionHolder, $newLinkLi) {
    // Get the data-prototype explained earlier
    var prototype = $collectionHolder.data('prototype');

    // get the new index
    var index = $collectionHolder.data('index');

    // Replace '$$name$$' in the prototype's HTML to
    // instead be a number based on how many items we have
    var newForm = prototype.replace(/__name__/g, index);

    // increase the index with one for the next item
    $collectionHolder.data('index', index + 1);

    // Display the form in the page in an li, before the "Add a tag" link li
    var $newFormLi = $('<div></div>').append(newForm);

    // also add a remove button, just for this example
    $newFormLi.append('<a href="#" class="btn btn-square btn-danger mb-10 remove-act"><i class="ti-trash"></i></a>');
    $newLinkLi.before($newFormLi);

    // handle the removal, just for this example
    $('.remove-act').click(function (e) {
        e.preventDefault();

        $(this).parent().remove();

        return false;
    });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAxNjg0NmQyYTFiYWRkZGFmOWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvZm9ybWN1c3RvbS5qcyJdLCJuYW1lcyI6WyIkYWRkVGFnTGluayIsIiQiLCIkbmV3TGlua0xpIiwiYXBwZW5kIiwiJGFkZFRhZ0xpbmsyIiwiJG5ld0xpbmtMaTIiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJGNvbGxlY3Rpb25Ib2xkZXIiLCIkY29sbGVjdGlvbkhvbGRlcjIiLCJyZW1vdmUiLCJkYXRhIiwiZmluZCIsImxlbmd0aCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnRm9ybSIsImFkZFRhZ0Zvcm0yIiwiJG5ld0xpbmtMMiIsInByb3RvdHlwZSIsImluZGV4IiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkbmV3Rm9ybUxpIiwiYmVmb3JlIiwiY2xpY2siLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLElBQU1BLGNBQWNDLEVBQUUsZ0VBQUYsQ0FBcEI7QUFDQSxJQUFNQyxhQUFhRCxFQUFFLGFBQUYsRUFBaUJFLE1BQWpCLENBQXdCSCxXQUF4QixDQUFuQjs7QUFFQSxJQUFNSSxlQUFlSCxF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RSxJQUFGLEVBQVEyQixNQUFSLEdBQWlCakIsTUFBakI7O0FBRUEsZUFBTyxLQUFQO0FBQ0gsS0FORDtBQU9ILEMiLCJmaWxlIjoianMvc2NyaXB0L2Zvcm1jdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYmFjay9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2JhY2svanMvZm9ybWN1c3RvbS5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMDE2ODQ2ZDJhMWJhZGRkYWY5YSIsIi8vIHNldHVwIGFuIFwiYWRkIGEgdGFnXCIgbGlua1xuY29uc3QgJGFkZFRhZ0xpbmsgPSAkKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWpvdXRlciB1biBhY3Rpb25uYWlyZTwvYT4nKTtcbmNvbnN0ICRuZXdMaW5rTGkgPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZCgkYWRkVGFnTGluayk7XG5cbmNvbnN0ICRhZGRUYWdMaW5rMiA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Bam91dGVyIGxlcyBww7RsZXMgY2zDqXMgZGUgdm90cmUgZW50cmVwcmlzZTwvYT4nKTtcbmNvbnN0ICRuZXdMaW5rTGkyID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQoJGFkZFRhZ0xpbmsyKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBHZXQgdGhlIHVsIHRoYXQgaG9sZHMgdGhlIGNvbGxlY3Rpb24gb2YgdGFnc1xuICAgIGNvbnN0ICRjb2xsZWN0aW9uSG9sZGVyID0gJCgnZGl2LmFjdCcpO1xuICAgIGNvbnN0ICRjb2xsZWN0aW9uSG9sZGVyMiA9ICQoJ2Rpdi5kZXAnKTtcblxuICAgICQoXCIuY29sLWZvcm0tbGFiZWxcIikucmVtb3ZlKCk7XG4gICAgLy8gYWRkIHRoZSBcImFkZCBhIHRhZ1wiIGFuY2hvciBhbmQgbGkgdG8gdGhlIHRhZ3MgdWxcbiAgICAkY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld0xpbmtMaSk7XG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIyLmFwcGVuZCgkbmV3TGlua0xpMik7XG5cbiAgICAvLyBjb3VudCB0aGUgY3VycmVudCBmb3JtIGlucHV0cyB3ZSBoYXZlIChlLmcuIDIpLCB1c2UgdGhhdCBhcyB0aGUgbmV3XG4gICAgLy8gaW5kZXggd2hlbiBpbnNlcnRpbmcgYSBuZXcgaXRlbSAoZS5nLiAyKVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcbiAgICAkY29sbGVjdGlvbkhvbGRlcjIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlcjIuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcblxuICAgICRhZGRUYWdMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcHJldmVudCB0aGUgbGluayBmcm9tIGNyZWF0aW5nIGEgXCIjXCIgb24gdGhlIFVSTFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gYWRkIGEgbmV3IHRhZyBmb3JtIChzZWUgY29kZSBibG9jayBiZWxvdylcbiAgICAgICAgYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJG5ld0xpbmtMaSk7XG4gICAgfSk7XG4gICAgJGFkZFRhZ0xpbmsyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcHJldmVudCB0aGUgbGluayBmcm9tIGNyZWF0aW5nIGEgXCIjXCIgb24gdGhlIFVSTFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gYWRkIGEgbmV3IHRhZyBmb3JtIChzZWUgY29kZSBibG9jayBiZWxvdylcbiAgICAgICAgYWRkVGFnRm9ybTIoJGNvbGxlY3Rpb25Ib2xkZXIyLCAkbmV3TGlua0xpMik7XG4gICAgfSk7XG5cblxufSk7XG5cblxuZnVuY3Rpb24gYWRkVGFnRm9ybTIoJGNvbGxlY3Rpb25Ib2xkZXIyLCAkbmV3TGlua0wyKSB7XG4gICAgLy8gR2V0IHRoZSBkYXRhLXByb3RvdHlwZSBleHBsYWluZWQgZWFybGllclxuICAgIGNvbnN0IHByb3RvdHlwZSA9ICRjb2xsZWN0aW9uSG9sZGVyMi5kYXRhKCdwcm90b3R5cGUnKTtcblxuXG4gICAgLy8gZ2V0IHRoZSBuZXcgaW5kZXhcbiAgICBjb25zdCBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyMi5kYXRhKCdpbmRleCcpO1xuXG4gICAgLy8gUmVwbGFjZSAnJCRuYW1lJCQnIGluIHRoZSBwcm90b3R5cGUncyBIVE1MIHRvXG4gICAgLy8gaW5zdGVhZCBiZSBhIG51bWJlciBiYXNlZCBvbiBob3cgbWFueSBpdGVtcyB3ZSBoYXZlXG4gICAgY29uc3QgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG5cbiAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2l0aCBvbmUgZm9yIHRoZSBuZXh0IGl0ZW1cbiAgICAkY29sbGVjdGlvbkhvbGRlcjIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgZm9ybSBpbiB0aGUgcGFnZSBpbiBhbiBsaSwgYmVmb3JlIHRoZSBcIkFkZCBhIHRhZ1wiIGxpbmsgbGlcbiAgICBjb25zdCAkbmV3Rm9ybUxpID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQobmV3Rm9ybSk7XG5cbiAgICAvLyBhbHNvIGFkZCBhIHJlbW92ZSBidXR0b24sIGp1c3QgZm9yIHRoaXMgZXhhbXBsZVxuICAgICRuZXdGb3JtTGkuYXBwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLWRhbmdlciBtYi0xMCByZW1vdmUtZGVwXCI+PGkgY2xhc3M9XCJ0aS10cmFzaFwiPjwvaT48L2E+Jyk7XG4gICAgJG5ld0xpbmtMMi5iZWZvcmUoJG5ld0Zvcm1MaSk7XG5cbiAgICAvLyBoYW5kbGUgdGhlIHJlbW92YWwsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZVxuICAgICQoJy5yZW1vdmUtZGVwJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJG5ld0xpbmtMaSkge1xuICAgIC8vIEdldCB0aGUgZGF0YS1wcm90b3R5cGUgZXhwbGFpbmVkIGVhcmxpZXJcbiAgICBjb25zdCBwcm90b3R5cGUgPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcblxuXG4gICAgLy8gZ2V0IHRoZSBuZXcgaW5kZXhcbiAgICBjb25zdCBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAvLyBSZXBsYWNlICckJG5hbWUkJCcgaW4gdGhlIHByb3RvdHlwZSdzIEhUTUwgdG9cbiAgICAvLyBpbnN0ZWFkIGJlIGEgbnVtYmVyIGJhc2VkIG9uIGhvdyBtYW55IGl0ZW1zIHdlIGhhdmVcbiAgICBjb25zdCBuZXdGb3JtID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aXRoIG9uZSBmb3IgdGhlIG5leHQgaXRlbVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gaW4gdGhlIHBhZ2UgaW4gYW4gbGksIGJlZm9yZSB0aGUgXCJBZGQgYSB0YWdcIiBsaW5rIGxpXG4gICAgY29uc3QgJG5ld0Zvcm1MaSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKG5ld0Zvcm0pO1xuXG4gICAgLy8gYWxzbyBhZGQgYSByZW1vdmUgYnV0dG9uLCBqdXN0IGZvciB0aGlzIGV4YW1wbGVcbiAgICAkbmV3Rm9ybUxpLmFwcGVuZCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1kYW5nZXIgbWItMTAgcmVtb3ZlLWFjdFwiPjxpIGNsYXNzPVwidGktdHJhc2hcIj48L2k+PC9hPicpO1xuICAgICRuZXdMaW5rTGkuYmVmb3JlKCRuZXdGb3JtTGkpO1xuXG4gICAgLy8gaGFuZGxlIHRoZSByZW1vdmFsLCBqdXN0IGZvciB0aGlzIGV4YW1wbGVcbiAgICAkKCcucmVtb3ZlLWFjdCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9iYWNrL2pzL2Zvcm1jdXN0b20uanMiXSwic291cmNlUm9vdCI6IiJ9