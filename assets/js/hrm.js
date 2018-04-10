/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["wpSpearHrm"];
/******/ 	window["wpSpearHrm"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		40: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "chunk/" + {"2":"6d49d2bfb608100e23e1","3":"4b2bc396f4a473d79d65","4":"63fc42f602eff49ca7e5","5":"3f1f7994e8e8b33fe074","6":"c7f199fd64515e31d8a2","7":"a3b576faf1810df0c462","8":"6a787e81822372127374","9":"3e190cff075416d45686","10":"3bf49529a43dc2e6363b","11":"c9bc969fffd9a388fc9c","12":"c90097000c77e6f9d9c4","13":"b228ffcc8f9424e979c1","14":"8578aea737e6246753e9","15":"6d63124c3956a22f8824","16":"24df703ee426d2357e0a","17":"4a9a095b53d7022483ec","18":"0fceb3f281031bad304e","19":"3aaaf4b9f460dc89257c","20":"45d525aeadf4b86e3ad4","21":"fc3bf7437fc7f3809f17","22":"5a54207f213b141e25f6","23":"84de227ea26eeada731a","24":"bd527df1164024537104","25":"66a322645df0c4ecd90c","26":"4c5a98a2ee60081d8c5e","27":"f706832004d1bbb6b8ab","28":"a996dcca1e3b7c9e3524","30":"457f2c2db85179038564","31":"bd890410a1d3e5337819"}[chunkId] + ".chunk-bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {};
	},

	computed: {
		incomeFormulas() {
			var dbfomulas = this.$store.state.formula.records;

			return dbfomulas.filter(function (formula) {
				return formula.type == 'income';
			});
		},

		deductionFormulas() {
			var dbfomulas = this.$store.state.formula.records;

			return dbfomulas.filter(function (formula) {
				return formula.type == 'deduction';
			});
		}
	},
	methods: {
		getFormulas(args) {
			var self = this;
			args = args || {};

			var form_data = {
				data: {},

				beforeSend() {
					self.loadingStart('hrm-payroll-loader');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit('formula/setRecords', res.data);
					self.$store.commit('formula/setPagination', res.meta.pagination);
					self.loadingStop('hrm-payroll-loader');
					self.isFetchRecord = true;

					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback !== 'function') {
						callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_get_formula', form_data);
		},

		recordMeta(record) {
			record.editMode = false;
		},

		groupRecordMeta(record) {
			record.editMode = false;
		},

		getSalaryGroupRecords(args) {
			var self = this;
			args = args || {};
			this.$route.query['page'] = this.$route.params.current_page_number;
			this.$route.query['employee_id'] = this.$route.params.employeeId;

			var form_data = {
				data: this.$route.query,

				beforeSend() {
					self.loadingStart('hrm-list-table');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.groupRecordMeta(record);
					});

					self.$store.commit('group/setRecords', res.data);
					self.$store.commit('group/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof args.callback !== 'undefined') {
						args.callback(true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_group_filter', form_data);
		}
	}

});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(188)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'group',
			modelName: 'Salary_Group',
			modelTransformer: 'Salary_Group_Transformer',
			isFetchRecord: false
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: this.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback(deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback(true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');

					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback !== 'undefined') {
						args.callback(true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': this.modelName,
				'method': 'gets',
				'transformers': this.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		filter(callback) {},

		editFormValidation(fields, postData) {
			var isFormValidate = true;

			fields.forEach(function (val) {
				if (val.editable !== false && val.required === true && !postData[val.name]) {
					hrm.Toastr.error(val.label + ' is required!');
					isFormValidate = false;
				}
			});

			return isFormValidate;
		}
	}
});

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(9);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(4)))

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__general_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__location_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__notice_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organization_vue__ = __webpack_require__(154);





let menu = [{
    path: 'organization',
    component: __WEBPACK_IMPORTED_MODULE_3__organization_vue__["a" /* default */],
    name: 'organization',
    children: HRMGetRegisterChildrenRoute('organization'),
    meta: {
        label: 'Organization',
        order: 2
    }
}];

HRMRegisterChildrenRoute('hrm_root', menu);

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'formula',
			isFetchRecord: false
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: 'Formula',
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback(deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_formula', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-formula-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', {
						id: args.data.id,
						record: res.data

					});
					self.loadingStop('hrm-formula-form');

					if (typeof args.callback === 'function') {
						args.callback(true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_update_formula', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-formula-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');

					self.loadingStop('hrm-formula-form');

					if (typeof args.callback === 'function') {
						args.callback(true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': 'Formula',
				'method': 'gets',
				'transformers': 'Formula_Transformer',
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		editFormValidation(fields, postData) {
			var isFormValidate = true;

			fields.forEach(function (val) {
				if (val.editable !== false && val.required === true && !postData[val.name]) {
					hrm.Toastr.error(val.label + ' is required!');
					isFormValidate = false;
				}
			});

			return isFormValidate;
		}
	}
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__salary_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formula_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__revision_router__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payroll_vue__ = __webpack_require__(160);







let menu = [{
    path: 'payroll',
    name: 'payroll',
    component: __WEBPACK_IMPORTED_MODULE_4__payroll_vue__["a" /* default */],
    children: HRMGetRegisterChildrenRoute('payroll'),
    meta: {
        label: 'Payroll',
        order: 2
    },
    redirect: {
        name: 'salary_components'
    }
}];

HRMRegisterChildrenRoute('hrm_root', menu);

/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'salary'
		};
	},
	methods: {}
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
	methods: {
		updateSettings(args) {
			var request = {
				data: args.data,
				success(res) {
					hrm.Toastr.success('Udpate settings successfully!');
					if (typeof args.callback === 'function') {
						args.callback(res);
					}
				}
			};

			this.httpRequest('update_settings', request);
		},

		getSettings(key, pre_define) {

			var pre_define = pre_define || false,
			    settings = HRM_Vars.settings;

			if (!HRM_Vars.settings[key]) {
				return pre_define;
			}

			return HRM_Vars.settings[key];
		}
	}
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_vue__ = __webpack_require__(162);
HRMRegisterModule('settings', 'settings');



HRMMixin.settings = __WEBPACK_IMPORTED_MODULE_0__mixin__["default"];



const Hrm_Settings = resolve => {

	__webpack_require__.e/* require.ensure */(15).then((() => {
		resolve(__webpack_require__(81));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let settingsMenu = [{
	path: 'settings',
	component: __WEBPACK_IMPORTED_MODULE_1__settings_vue__["a" /* default */],
	name: 'hrm_setting',

	children: HRMGetRegisterChildrenRoute('hrm_setting', [{
		path: 'general',
		component: Hrm_Settings,
		name: 'hrm_general_settings',
		meta: {
			label: 'General'
		}
	}])

}];

if (hrm_user_can('manage_settings')) {
	HRMRegisterChildrenRoute('hrm_root', settingsMenu);
}

/* harmony default export */ __webpack_exports__["a"] = (settingsMenu);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    created() {

        this.registerModule();
    },
    methods: {
        registerModule() {
            let self = this;

            HRMModules.forEach(function (module) {

                let mixin = __webpack_require__(83)("./" + module.path + '/mixin.js');
                let store = __webpack_require__(84)("./" + module.path + '/store.js');

                HRMMixin[module.name] = mixin.default;

                self.registerStore(module.name, store.default);
            });

            HRM_Store.forEach(function (store) {
                var state = store.store.state;
                var mutations = store.store.mutations;

                self.$store.registerModule(store.name, {
                    namespaced: true,
                    state,
                    mutations
                });
            });
        }
    }

});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {
		this.matchDefaultRoute();
	},

	watch: {
		'$route'() {
			this.matchDefaultRoute();
		}
	},

	methods: {
		matchDefaultRoute() {
			if (this.$route.path == '/attendance' && this.$route.name == 'attendance') {
				this.$router.push({
					name: 'attendance_records'
				});
			}
		}
	}
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['value', 'dependency'],
    mounted: function () {
        var self = this,
            limit_date = self.dependency == 'pm-datepickter-from' ? "minDate" : "maxDate";

        jQuery(self.$el).datepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function (selectedDate) {
                jQuery("." + self.dependency).datepicker("option", limit_date, selectedDate);
            },
            onSelect: function (dateText) {
                self.$emit('input', dateText);
            }
        });
    }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_dist_vue_esm_js__ = __webpack_require__(189);


function HRMGetComponents() {
    var components = {};

    HRM_Components.map(function (obj, key) {
        if (obj.property.mixins) {
            obj.property.mixins.push(mixin);
        }

        components[obj.component] = obj.property;
    });

    return components;
}

var action = {
    props: {
        hook: {
            type: String,
            required: true
        },

        actionData: {
            type: [Object, Array, String, Number],

            default: function () {
                return {};
            }
        }
    },

    components: HRMGetComponents(),

    render(h) {
        this.$options.components = HRMGetComponents();

        var components = [],
            self = this;

        HRM_Components.map(function (obj, key) {

            if (obj.hook == self.hook) {
                components.push(__WEBPACK_IMPORTED_MODULE_0_vue_dist_vue_esm_js__["a" /* default */].compile('<' + obj.component + ' :actionData="actionData"></' + obj.component + '>').render.call(self));
            }
        });

        return h('span', {}, components);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (action);

// if (obj.hook == self.hook) {
//     components.push(h(obj.component));
// }

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	props: {
		field: {
			type: [Object],
			default() {
				return {};
			}
		},
		record: {
			type: [Object],
			description() {
				return {};
			}
		}
	},

	data() {
		return {
			files: [],
			deleted_files: []
		};
	},

	components: {
		'hrm-multiselect': hrm.Multiselect.Multiselect
	},

	computed: {
		selected: {
			get() {
				var field = this.field;
				var record = this.record;

				if (typeof field.filterComputedGet != 'undefined') {
					return field.filterComputedGet(record[field.name], this);
				} else {
					return record[field.name];
				}
			},

			set(select_val) {
				var field = this.field;
				var record = this.record;

				if (typeof field.filterComputedSet != 'undefined') {
					this.record[this.field.name] = field.filterComputedSet(select_val);
				} else {

					this.record[this.field.name] = select_val;
				}
			}
		}
	},

	created() {},

	methods: {

		filter(record, field) {
			// if(typeof field.filterEditFieldData === 'undefined') {
			// 	return record[field.name];
			// }

			//return field.filterEditFieldData(record[field.name]);
		}
	},
	filters: {
		filterEditValue(val) {
			console.log(val);
		}
	}
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {
		if (this.$route.path == '/' && this.$route.name == 'hrm_root') {
			this.$router.push({
				name: 'dashboard'
			});
		}
	}
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Register a global custom directive called v-hrm-popup-box
hrm.Vue.directive('hrm-uploader', {
    inserted: function (el, binding, vnode) {
        new HRM_Uploader('hrm-upload-pickfiles', 'hrm-upload-container', vnode.context);
    },

    update: function (el, binding, vnode) {
        //new HRM_Uploader('hrm-upload-pickfiles', 'hrm-upload-container', vnode.context );
    }
});

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        files: {
            type: [Array],
            default() {
                return [];
            }
        },
        delete: {
            type: [Array],
            default() {
                return [];
            }
        },
        multiple: {
            type: [Boolean],
            defalut() {
                return false;
            }
        },

        attr: {
            type: [Object],
            default() {
                return {
                    height: '80px',
                    width: '80px'
                };
            }
        },

        defaults: {
            type: [Array],
            default() {
                return [];
            }
        }
    },

    methods: {
        /**
         * Set the uploaded file
         *
         * @param  object file_res
         *
         * @return void
         */
        fileUploaded: function (file_res) {

            if (typeof this.files == 'undefined') {
                this.files = [];
            }

            this.files.push(file_res.res.file);
        },

        /**
         * Delete file
         *
         * @param  object file_id
         *
         * @return void
         */
        deletefile: function (file_id) {
            if (!confirm('Are you suer!')) {
                return;
            }
            var self = this;
            var index = self.getIndex(self.files, file_id, 'id');

            if (index !== false) {
                self.files.splice(index, 1);
                this.delete.push(file_id);
            }
        },
        test() {}
    }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	props: {
		fields: {
			type: [Array],
			default() {
				return [];
			}
		}
	},

	data() {
		return {
			files: [],
			deleted_files: []
		};
	},

	components: {
		'hrm-multiselect': hrm.Multiselect.Multiselect
	}
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['total_pages', 'component_name'],

    data() {
        return {
            route_query: this.$route.query
        };
    },

    watch: {
        '$route'(url) {
            this.route_query = url.query;
        }
    },

    computed: {
        current_page_number() {
            return this.$route.params.current_page_number;
        }
    },

    methods: {
        pageClass: function (page) {
            if (page == this.current_page_number) {
                return 'page-numbers current';
            }

            return 'page-numbers';
        }
    }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {
		this.matchDefaultRoute();
	},

	watch: {
		'$route'() {
			this.matchDefaultRoute();
		}
	},

	methods: {
		matchDefaultRoute() {
			if (this.$route.path == '/leave' && this.$route.name == 'leave') {
				this.$router.push({
					name: 'leave_records'
				});
			}

			if (this.$route.path == '/leave/leave-request' && this.$route.name == 'leave_request') {
				this.$router.push({
					name: 'leave_pending'
				});
			}

			if (this.$route.path == '/leave/leave-configuration' && this.$route.name == 'leave_configuration') {
				this.$router.push({
					name: 'leave_type'
				});
			}
		}
	}
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Menu = [];

new Promise(function(resolve) { resolve(); }).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; (function (script) {
    Menu = script.default[0].children;
}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

var Hrm_Leave_Header = {

    data: function () {
        return {
            menu: Menu
        };
    },

    methods: {
        childrens() {
            let root_menu = this.$route.matched[1].name;
            let index = this.getIndex(this.menu, root_menu, 'name');

            if (index === false) {
                return [];
            }

            if (this.menu[index].hasOwnProperty('children')) {
                if (this.menu[index].children.length) {
                    return this.menu[index].children;
                }
            } else {
                return [];
            }
        },
        is_it_child: function () {

            if (this.$route.matched.length > 1) {
                return true;
            }
        },
        has_child_menu: function () {
            var path = this.$route.path,
                has_submenu = false;

            jQuery.each(this.header, function (key, val) {

                if (val.url == path) {
                    if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                        has_submenu = true;
                    }
                }
            });

            return has_submenu;
        },
        get_child_menu: function () {
            var path = this.$route.path,
                submenu = [];

            if (this.is_it_child()) {
                var partent_name = this.$route.matched[0].name;

                jQuery.each(this.header, function (key, val) {
                    if (val.name == partent_name) {
                        if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                            submenu = val.submenu;
                        }
                    }
                });

                return submenu;
            }

            jQuery.each(this.header, function (key, val) {
                if (val.url == path) {
                    if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                        submenu = val.submenu;
                    }
                }
            });

            return submenu;
        },
        getHeader: function () {
            var request_data = {
                _wpnonce: HRM_Vars.nonce
            },
                self = this;

            wp.ajax.send('leave_header', {
                data: request_data,
                success: function (res) {
                    self.header = res.header;
                    //self.$store.commit( 'header', {'header': res.header} );
                },

                error: function (res) {}
            });
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Hrm_Leave_Header);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_vue__ = __webpack_require__(153);
//
//
//
//
//
//



hrm.Vue.component('organization-menu', __WEBPACK_IMPORTED_MODULE_0__menu_vue__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {

		if ('/organization' === this.$route.path) {
			this.$router.push({
				name: 'general_information'
			});
		}
	},

	watch: {
		'$route'() {
			if ('/organization' === this.$route.path) {
				this.$router.push({
					name: 'general_information'
				});
			}
		}
	}
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	} else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}

function setCaretToPos(input, pos) {
	setSelectionRange(input, pos, pos);
}




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["default"], __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__["default"]],

	data() {

		return {
			isFetchRecord: false,
			canSubmit: true,
			formulaID: false,
			formula: '',
			name: '',
			type: '',
			description: '',
			functions: {
				abs: {
					label: 'ABS(x)',
					fun: 'ABS()'
				},
				ceil: {
					label: 'CEIL(x)',
					fun: 'CEIL()'
				},
				floor: {
					label: 'FLOOR(x)',
					fun: 'FLOOR()'
				},
				greatest: {
					label: 'GREATEST(a1, a2,...,an)',
					fun: 'GREATEST()'
				},
				least: {
					label: 'LEAST(a1, a2,...,an)',
					fun: 'LEAST()'
				},
				if: {
					label: 'IF(exp, true value, false value)',
					fun: 'IF()'
				},
				mod: {
					label: 'MOD(x, y)',
					fun: 'MOD()'
				},
				prorate: {
					label: 'PRORATE()',
					fun: 'PRORATE()'
				},
				round: {
					label: 'ROUND(x)',
					fun: 'ROUND()'
				},
				sqrt: {
					label: 'SQRT(x)',
					fun: 'SQRT()'
				},
				sum: {
					label: 'SUM(a1, a2,...,an)',
					fun: 'SUM()'
				}
			},

			operators: {
				plus: '+',
				minus: '-',
				multiple: '*',
				divided: '/',
				percent: '%',
				or: 'OR',
				and: 'AND',
				notEqual: '!=',
				equal: '==',
				less: '<',
				greater: '>',
				lessOrequal: '<=',
				greaterOrequal: '>=',
				not: '!',
				power: '^'
			}

			// variables: {
			// 	monthly_salary: {
			// 		description: 'monthly_salary',
			// 		name: 'monthly_salary'
			// 	},

			// 	yearly_salary: {
			// 		description: 'yearly_salary',
			// 		name: 'yearly_salary'
			// 	}
			// }
		};
	},

	watch: {
		formula(val) {}
	},

	created() {
		this.getFormulas();
	},

	computed: {
		variables() {
			var self = this;
			var dbfomulas = this.$store.state[this.nameSpace].records;
			var formula = {};

			dbfomulas.forEach(function (dbformula) {
				formula[dbformula.name] = {
					description: dbformula.description,
					name: dbformula.name
				};
			});

			formula['monthly_salary'] = {
				description: 'Monthly Salary',
				name: 'monthly_salary'
			};

			formula['annual_salary'] = {
				description: 'Annual Salary',
				name: 'annual_salary'
			};

			return formula;
		}
	},
	components: {},

	methods: {

		setFunction(fun) {
			var txtarea = jQuery('#component-textarea'),
			    rowSelector = document.getElementById("component-textarea"),
			    start = txtarea.prop('selectionStart'),
			    replaceVal = this.functions[fun].fun;

			var v = txtarea.val();
			var textBefore = v.substring(0, start);
			var textAfter = v.substring(start, v.length);
			this.formula = textBefore + replaceVal + textAfter;

			hrm.Vue.nextTick(function () {
				var end = txtarea.prop('selectionEnd'),
				    cursor = start + replaceVal.length - 1;

				setCaretToPos(rowSelector, cursor);
			});
		},

		setOperator(ope) {
			var txtarea = jQuery('#component-textarea'),
			    rowSelector = document.getElementById("component-textarea"),
			    start = txtarea.prop('selectionStart'),
			    replaceVal = this.operators[ope];

			var v = txtarea.val();
			var textBefore = v.substring(0, start);
			var textAfter = v.substring(start, v.length);
			this.formula = textBefore + replaceVal + textAfter;

			hrm.Vue.nextTick(function () {
				var end = txtarea.prop('selectionEnd'),
				    cursor = start + replaceVal.length;

				setCaretToPos(rowSelector, cursor);
			});
		},

		setVariable(variable) {
			var txtarea = jQuery('#component-textarea'),
			    rowSelector = document.getElementById("component-textarea"),
			    start = txtarea.prop('selectionStart'),
			    replaceVal = this.variables[variable].name;

			var v = txtarea.val();
			var textBefore = v.substring(0, start);
			var textAfter = v.substring(start, v.length);
			this.formula = textBefore + replaceVal + textAfter;

			hrm.Vue.nextTick(function () {
				var end = txtarea.prop('selectionEnd'),
				    cursor = start + replaceVal.length;

				setCaretToPos(rowSelector, cursor);
			});
		},

		checkValidName(name) {
			var re = /^\w+$/;
			if (!re.test(name)) {
				return false;
			}

			return true;
		},

		CreateFormula() {
			if (!this.checkValidName(this.name)) {
				hrm.Toastr.error('Name should start with an alphabet and can contain only alphabets, digits and under score');
				return;
			}

			if (!this.description) {
				hrm.Toastr.error('Description required!');
				return;
			}

			if (!this.type) {
				hrm.Toastr.error('Salary type required!');
				return;
			}
			if (!this.formula) {
				hrm.Toastr.error('Formula is required!');
				return;
			}

			var self = this;

			if (!this.canSubmit) {
				return false;
			}

			self.loading = true;
			self.canSubmit = false;

			var postData = {
				class: 'Formula',
				method: 'create',
				transformers: 'Formula_Transformer',
				name: self.name,
				formula: self.formula,
				status: 'enable',
				type: self.type,
				description: self.description
			};

			if (this.formulaID) {
				postData.method = 'update';
				postData.id = parseInt(this.formulaID);
			}

			var args = {
				data: postData,

				callback(success, res) {
					self.loading = false;
					self.canSubmit = true;
					self.name = '';
					self.formula = '';
					self.type = '';
					self.description = '';
					self.formulaID = false;
				}
			};
			if (this.formulaID) {
				this.updateRecord(args);
			} else {
				this.addNewRecord(args);
			}
		},

		setEditDate(formula) {
			this.formula = formula.formula;
			this.name = formula.name;
			this.type = formula.type;
			this.description = formula.description;
			this.formulaID = formula.id;
		},

		cancelUpdate() {
			this.formula = '';
			this.name = '';
			this.type = '';
			this.description = '';
			this.formulaID = false;
		},

		deleteFormula(formula) {
			if (!confirm('Are you sure!')) {
				return;
			}
			this.recordDelete([formula.id]);
		},

		checkFormulaValidity() {}
	}
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__["default"], __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__["default"]],
	props: {
		deleteCheckbox: {
			type: [Boolean],
			default() {
				return true;
			}
		},
		fields: {
			type: [Array],
			default() {
				return [];
			}
		}
	},

	data() {
		return {
			canSubmit: true,
			loading: false,
			deleteAllStatus: false,
			deletedId: [],
			isFetchRecord: false
		};
	},

	created() {
		this.getSalaryGroupRecords();
	},

	computed: {
		records() {
			return this.$store.state[this.nameSpace].records;
		},

		formulas() {
			return this.$store.state.formula.records;
		}
	},

	watch: {
		deletedId() {
			this.$store.commit(this.nameSpace + '/setDeletedId', this.deletedId);
		},
		'$route'(to, from) {
			this.getSalaryGroupRecords();
		}
	},
	methods: {
		filterEditField(fields) {
			return fields.filter(function (field) {
				return field.editable ? true : false;
			});
		},
		filterHeader(fields) {
			return fields.filter(function (field) {
				return typeof field.tableHead === 'undefined' ? false : true;
			});
		},
		printCellData(record, field) {
			if (typeof field.filterPrintData == 'undefined') {
				return record[field.name];
			}

			return field.filterPrintData(record[field.name], this);
		},

		recordEditForm(record, status) {
			status = status || 'toggle';
			this.$store.commit(this.nameSpace + '/showHideEditForm', {
				id: record.id,
				status: status
			});
		},

		selfUpdate(record) {

			var self = this,
			    data = {};

			data['class'] = self.modelName;
			data['method'] = 'update';
			data['transformers'] = self.modelTransformer;
			data['id'] = record.id;

			self.fields.forEach(function (field) {
				if (!field.editable) {
					return;
				}

				if (typeof field.filterEditingData != 'undefined') {
					data[field.name] = field.filterEditingData(record[field.name]);
				} else {
					data[field.name] = record[field.name];
				}
			});

			var args = {
				data: data,
				callback() {
					self.canSubmit = true;
					self.loading = false;
				}
			};

			if (!this.editFormValidation(self.fields, args.data)) {
				return false;
			}

			self.canSubmit = false;
			self.loading = true;
			this.updateRecord(args);
		},
		selfDelete(record) {
			var self = this;
			this.recordDelete([record.id], function () {
				var hasRecords = self.$store.state[self.nameSpace].records.length;
				var page = self.$route.params.current_page_number;
				if (!hasRecords && page > 1) {
					self.$router.push({
						params: {
							current_page_number: page - 1
						},
						query: self.$route.query
					});
				}

				if (!hasRecords && typeof self.pagination != 'undefined' && self.pagination.total_pages > 1) {
					self.getSalaryGroupRecords();
				}
			});
		},
		deleteAll() {
			if (this.deleteAllStatus) {
				var deleted_id = [];

				this.$store.state[this.nameSpace].records.map(function (record) {
					deleted_id.push(record.id);
				});

				this.deletedId = deleted_id;
			} else {
				this.deletedId = [];
			}
		},

		actionCheckbox() {
			let records = this.$store.state[this.nameSpace].records;

			if (records.length == this.deletedId.length) {
				this.deleteAllStatus = true;
			} else {
				this.deleteAllStatus = false;
			}
		},

		getClass(header) {
			if (header.tbRowAction === true) {
				return 'hrm-row-action-header';
			}

			return '';
		},
		getIncomeLabel(income) {
			var index = this.getIndex(this.formulas, income, 'id');

			if (index === false) {
				return '&#8211 &#8211';
			}

			return this.formulas[index].description;
		},

		getDeductionLabel(deduction) {
			var index = this.getIndex(this.formulas, deduction, 'id');

			if (index === false) {
				return '&#8211 &#8211';
			}

			return this.formulas[index].description;
		}
	}

});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_table_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_group_form_vue__ = __webpack_require__(158);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
	data() {

		return {
			isFetchFormula: false,
			search: {
				filter: 'active',
				name: this.$route.query.name,
				from: this.$route.query.from,
				to: this.$route.query.to
			},
			bulkAction: -1,
			fields: [{
				type: 'text',
				model: '',
				label: 'Name',
				name: 'name',
				required: true,
				tableHead: 'Name',
				tbRowAction: true,
				editable: true
			}, {
				type: 'multiSelect',
				model: '',
				options: [],
				label: 'Income Components',
				optionLabel: 'description',
				placeholder: 'Select Components',
				name: 'income',
				tableHead: 'Income Components',
				trackBy: 'id',
				editable: true,
				required: true,
				//Filter submited new data
				filterSubmited(val) {
					var ids = [];
					val.forEach(function (obj) {
						ids.push(obj.id);
					});
					return ids;
				},

				//Table print data
				filterPrintData(val) {
					if (!val) {
						return '&#8211 &#8211';
					}
					return val.id;
				},

				// Filter edit form field data
				filterComputedGet(val, self) {
					var formulas = [];
					var soter = self.$store.state.formula.records;
					val.forEach(function (id) {
						var index = self.getIndex(soter, id, 'id');

						if (index !== false) {
							formulas.push(soter[index]);
						}
					});

					return formulas;
				},

				// Filter edit form field data
				filterComputedSet(val, self) {
					var formulas = [];

					val.forEach(function (obj) {
						formulas.push(obj.id);
					});

					return formulas;
				}

			}, {
				type: 'multiSelect',
				model: '',
				options: [],
				label: 'Deduction Components',
				optionLabel: 'description',
				placeholder: 'Select Components',
				name: 'deduction',
				tableHead: 'Deduction Components',
				trackBy: 'id',
				editable: true,
				required: true,
				//Filter submited new data
				filterSubmited(val) {
					var ids = [];
					val.forEach(function (obj) {
						ids.push(obj.id);
					});
					return ids;
				},

				//Table print data
				filterPrintData(val) {
					if (!val) {
						return '&#8211 &#8211';
					}
					return val.id;
				},

				// Filter edit form field data
				filterComputedGet(val, self) {
					var formulas = [];
					var soter = self.$store.state.formula.records;
					val.forEach(function (id) {
						var index = self.getIndex(soter, id, 'id');

						if (index !== false) {
							formulas.push(soter[index]);
						}
					});

					return formulas;
				},

				// Filter edit form field data
				filterComputedSet(val, self) {
					var formulas = [];

					val.forEach(function (obj) {
						formulas.push(obj.id);
					});

					return formulas;
				}

			}]
		};
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__["default"], __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__["default"]],

	created() {

		var self = this;

		this.getFormulas({
			callback(res) {
				var index = self.getIndex(self.fields, 'income', 'name');
				self.fields[index].options = self.incomeFormulas;

				var index = self.getIndex(self.fields, 'deduction', 'name');
				self.fields[index].options = self.deductionFormulas;

				self.isFetchFormula = true;
			}
		});
	},

	computed: {
		isNewRecordFormActive() {
			return this.$store.state[this.nameSpace].isNewRecordFormActive;
		},

		total_experiance_page() {
			return 10;
		},

		pagination() {
			return this.$store.state[this.nameSpace].pagination;
		}
	},
	components: {
		'hrm-table': __WEBPACK_IMPORTED_MODULE_2__group_table_vue__["a" /* default */],
		'add-new-record-form': __WEBPACK_IMPORTED_MODULE_3__new_group_form_vue__["a" /* default */]
	},

	methods: {

		selfBulkAction() {
			var self = this;
			switch (this.bulkAction) {
				case 'delete':
					this.recordDelete(self.$store.state[self.nameSpace].deletedId, function () {
						var hasRecords = self.$store.state[self.nameSpace].records.length;
						var page = self.$route.params.current_page_number;

						if (!hasRecords && page > 1) {
							self.$router.push({
								params: {
									current_page_number: page - 1
								},
								query: self.$route.query
							});
						}
						if (!hasRecords && self.pagination.total_pages > 1) {
							self.getSalaryGroupRecords();
						}
					});
					break;

				default:

					break;
			}
		},

		recordSearch() {
			this.$router.push({ query: this.search });
			this.getSalaryGroupRecords();
		},

		getIncomeComponents() {
			return this.incomeFormulas;
		},
		getDeductionComponents() {
			return this.deductionFormulas;
		}
	}
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__components_payroll_group_mixin__["default"], __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__["default"]],
	props: {
		fields: {
			type: [Array]
		}
	},

	data() {
		return {
			loading: false,
			canSubmit: true
		};
	},

	computed: {},

	methods: {
		selfNewRecord() {
			var self = this;

			if (!this.canSubmit) {
				return false;
			}

			var postData = this.generateFieldData(this.fields);
			postData['employee_id'] = this.$route.params.employeeId;
			postData['class'] = this.modelName;
			postData['method'] = 'create';
			postData['transformers'] = this.modelTransformer;

			if (!this.formValidation(this.fields, postData)) {
				return false;
			}

			var args = {
				data: postData,

				callback(success, res) {
					self.loading = false;
					self.canSubmit = true;
					self.showHideNewRecordForm(false);
					self.makeEmptyField(self.fields);
				}
			};

			self.loading = true;
			self.canSubmit = false;

			this.addNewRecord(args);
		},

		generateFieldData(data) {
			var formated = {};

			data.forEach(function (val) {
				if (typeof val.filterSubmited !== 'undefined') {
					formated[val.name] = val.filterSubmited(val.model);
				} else {
					formated[val.name] = val.model;
				}
			});

			return formated;
		},
		makeEmptyField(data) {
			data.forEach(function (val) {
				val.model = [];
			});
		}
	}
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(22);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var Hrm_Leave_Header = {

    data: function () {
        return {
            menu: []
        };
    },

    created() {
        this.menu = __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */];
    },

    methods: {
        childrens() {
            if (!this.menu.length) {
                return [];
            }
            let root_menu = this.$route.matched[1].name;

            let index = this.getIndex(this.menu[0].children, root_menu, 'name');

            if (index === false) {
                return [];
            }

            if (this.menu[index].hasOwnProperty('children')) {
                if (this.menu[index].children.length) {
                    return this.menu[index].children;
                }
            } else {
                return [];
            }
        },
        filterChildren(children) {
            var menu = [];

            children.forEach(function (child) {
                if (typeof child.meta != 'undefined' && typeof child.meta.label != 'undefined') {
                    menu.push(child);
                }
            });

            return menu;
        }
        // is_it_child: function() {

        //     if( this.$route.matched.length > 1 ) {
        //         return true;
        //     }
        // },
        // has_child_menu: function() {
        //     var path = this.$route.path,
        //         has_submenu = false;

        //     jQuery.each( this.header, function(key, val ) {

        //         if (val.url == path) {
        //             if( typeof val.submenu != 'undefined' && jQuery(val.submenu).length ) {
        //                 has_submenu = true;
        //             }
        //         }
        //     });

        //     return has_submenu;
        // },
        // get_child_menu: function() {
        //     var path = this.$route.path,
        //         submenu = [];

        //     if ( this.is_it_child() ) {
        //         var partent_name = this.$route.matched[0].name;

        //         jQuery.each( this.header, function(key, val ) {
        //             if (val.name == partent_name) {
        //                 if( typeof val.submenu != 'undefined' && jQuery(val.submenu).length ) {
        //                     submenu = val.submenu;
        //                 }
        //             }
        //         });

        //         return submenu;
        //     }


        //     jQuery.each( this.header, function(key, val ) {
        //         if (val.url == path) {
        //             if( typeof val.submenu != 'undefined' && jQuery(val.submenu).length ) {
        //                 submenu = val.submenu;
        //             }
        //         }
        //     });

        //     return submenu;
        // },
        // getHeader: function() {
        //     var request_data = {
        //         _wpnonce: HRM_Vars.nonce,
        //     },
        //     self  = this;

        //     wp.ajax.send( 'leave_header', {
        //         data: request_data,
        //         success: function(res) {
        //             self.header = res.header;
        //             //self.$store.commit( 'header', {'header': res.header} );

        //         },

        //         error: function(res) {

        //         }
        //     });
        // }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Hrm_Leave_Header);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_vue__ = __webpack_require__(159);
//
//
//
//
//
//



hrm.Vue.component('payroll-menu', __WEBPACK_IMPORTED_MODULE_0__menu_vue__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {

		if ('/payroll' === this.$route.path) {
			this.$router.push({
				name: 'salary_components'
			});
		}
	},

	watch: {
		'$route'() {
			if ('/payroll' === this.$route.path) {
				this.$router.push({
					name: 'salary_components'
				});
			}
		}
	}
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["default"], __WEBPACK_IMPORTED_MODULE_1__components_payroll_mixin__["default"]],
	data() {
		return {
			categoryId: '',
			salary: '',
			salaryType: 'designation',
			salaryDay: '',
			salaryComponentGroup: '',
			salaryPeriod: 'monthly',
			isUpdate: false
		};
	},

	components: {
		'hrm-multiselect': hrm.Multiselect.Multiselect
	},

	created() {
		var self = this;
		this.getEmployess();
		this.getDesignation();

		this.getSalaryGroupRecords({});

		this.getSelfFromulas();

		// setTimeout(function() {
		// 	self.getEmpSalary();
		// }, 1000);
	},

	watch: {
		categoryId(newVal) {
			this.fetchStatement();
		},

		salaryDay(newVal) {
			this.fetchStatement();
		}
	},

	computed: {
		employees() {
			return this.$store.state[this.nameSpace].employees;
		},

		designation() {
			return this.$store.state[this.nameSpace].designation;
		},

		componentGroup() {
			var group = [];
			group.push({
				id: '',
				name: 'All'
			});

			this.$store.state.group.records.forEach(function (grp) {
				group.push(grp);
			});

			return group;
		},

		incomeFormulas() {
			var dbfomulas = this.$store.state.salary.formulas;

			return dbfomulas.filter(function (formula) {
				return formula.type == 'income';
			});
		},

		deductionFormulas() {
			var dbfomulas = this.$store.state.salary.formulas;

			return dbfomulas.filter(function (formula) {
				return formula.type == 'deduction';
			});
		},

		meta() {
			return this.$store.state.salary.meta;
		}
	},

	methods: {
		getEmployess() {
			var self = this;

			var form_data = {
				data: {
					number: -1
				},

				success: function (res) {
					self.$store.commit(self.nameSpace + '/setEmployees', res.data);
				},

				error: function (res) {}
			};

			this.httpRequest('hrm_employee_filter', form_data);
		},

		getDesignation() {
			var self = this;

			var postData = {
				'class': 'Designation',
				'method': 'gets',
				'transformers': 'Designation_Transformer',
				'page': 1,
				'per_page': 1000
			};

			var request_data = {
				data: postData,
				success: function (res) {
					self.$store.commit(self.nameSpace + '/setDesignation', res.data);
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		executeFormula(statement) {
			if (!statement.amount) {
				return 0;
			}

			return statement.amount;
		},

		generateSalaryStatement(save) {
			var self = this;

			var form_data = {
				data: {
					salary: self.salary,
					group: self.salaryComponentGroup.id,
					salary_period: self.salaryPeriod,
					month: self.salaryDay,
					category: self.salaryType,
					category_id: self.categoryId.id,
					isUpdate: self.isUpdate,
					save: save

				},

				success: function (res) {

					if (save) {
						self.categoryId = '';
						self.salary = '';
						self.salaryType = 'designation';
						self.salaryDay = '';
						self.salaryComponentGroup = '';
						self.salaryPeriod = 'monthly';

						self.$store.commit('salary/setFormulas', []);
						self.$store.commit('salary/setOthers', {
							salaryMeta: {
								others: false,
								incomeTotal: 0,
								deductionTotal: 0,
								employeeGet: 0
							}
						});

						hrm.Toastr.success('Salary has been saved!');
					} else {
						self.$store.commit('salary/setFormulas', res.data);
						self.$store.commit('salary/setOthers', res.meta);
					}
				},

				error: function (res) {}
			};

			this.httpRequest('hrm_generate_salary_statement', form_data);
		},

		// getEmpSalary () {
		// 	var query = this.$route.query;
		// 	var self = this;

		// 	if ( 
		// 		typeof query.update == 'undefined'
		// 			||
		// 		typeof query.salary == 'undefined'
		// 	) {
		// 		return;
		// 	}

		// 	var self = this;
		// 	self.isUpdate = true;

		// 	var postData = {
		// 		salary_id: query.salary
		// 	};

		//           var request_data = {
		//               data: postData,
		//               success: function(res) {
		//               	self.id = query.salary;

		//               	if (res.data.category == 'designation') {
		//               		let index = self.getIndex(self.designation, res.data.category_id, 'id');
		//               		self.categoryId = self.designation[index];
		//               	} else {
		//               		let index = self.getIndex(self.employees, res.data.category_id, 'id');
		//               		self.categoryId = self.employees[index];
		//               	}

		//               	if(res.data.group_id) {
		//               		let index = self.getIndex(self.componentGroup, res.data.group_id, 'id');
		//               		self.salaryComponentGroup = self.componentGroup[index];
		//               	}

		// 			self.salary     = res.data.salary;
		// 			self.salaryType = res.data.category;
		// 			self.salaryDay  = res.data.month;
		// 			self.salaryPeriod =  res.data.type;

		// 			self.$store.commit( 'salary/setUpdateData', res.data.info );

		//               }
		//           };

		//           self.httpRequest('hrm_get_employee_salary', request_data);
		// },

		getSelfFromulas() {
			var self = this;
			this.getFormulas({
				callback(res) {

					self.$store.commit('salary/setFormulas', res.data);
				}
			});
		},

		fetchStatement() {

			var self = this;
			if (self.salaryDay == '') {
				return;
			}
			if (self.categoryId == '') {
				return;
			}
			var request_data = {
				data: {
					type: self.salaryType,
					id: self.categoryId.id,
					salaryDay: self.salaryDay
				},
				success: function (res) {

					if (typeof res == 'undefined') {
						self.$store.commit('salary/setFormulas', []);
						self.$store.commit('salary/setOthers', {
							salaryMeta: {
								others: false,
								incomeTotal: 0,
								deductionTotal: 0,
								employeeGet: 0
							}
						});
						self.isUpdate = false;
						return;
					}

					self.salary = res.data.salary;
					self.salaryDay = res.data.month;

					if (res.data.group_id) {
						let index = self.getIndex(self.componentGroup, res.data.group_id, 'id');
						self.salaryComponentGroup = self.componentGroup[index];
					}
					self.isUpdate = true;
					self.salaryPeriod = res.data.type;
					self.$store.commit('salary/setFormulas', res.data.info.data);
					self.$store.commit('salary/setOthers', res.data.info.meta);
				}
			};

			self.httpRequest('hrm_fetch_statement', request_data);
		}
	}
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Hrm_Settings_Header = {
    mixins: [HRMMixin.settings],

    data: function () {
        return {
            menu: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]
        };
    },

    methods: {
        childrens() {
            let root_menu = this.$route.matched[1].name;

            let index = this.getIndex(this.menu[0].children, root_menu, 'name');

            if (index === false) {
                return [];
            }

            if (this.menu[0].children[index].hasOwnProperty('children')) {
                if (this.menu[0].children[index].children.length) {
                    return this.menu[0].children[index].children;
                }
            } else {
                return [];
            }
        },
        is_it_child: function () {

            if (this.$route.matched.length > 1) {
                return true;
            }
        },
        has_child_menu: function () {
            var path = this.$route.path,
                has_submenu = false;

            jQuery.each(this.header, function (key, val) {

                if (val.url == path) {
                    if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                        has_submenu = true;
                    }
                }
            });

            return has_submenu;
        },
        get_child_menu: function () {
            var path = this.$route.path,
                submenu = [];

            if (this.is_it_child()) {
                var partent_name = this.$route.matched[0].name;

                jQuery.each(this.header, function (key, val) {
                    if (val.name == partent_name) {
                        if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                            submenu = val.submenu;
                        }
                    }
                });

                return submenu;
            }

            jQuery.each(this.header, function (key, val) {
                if (val.url == path) {
                    if (typeof val.submenu != 'undefined' && jQuery(val.submenu).length) {
                        submenu = val.submenu;
                    }
                }
            });

            return submenu;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Hrm_Settings_Header);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	created() {
		if (this.$route.name === 'hrm_setting') {
			this.$router.push({
				name: 'hrm_general_settings'
			});
		};
	}
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_mixin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__directives_directives__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_common_components__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_menu_fix__ = __webpack_require__(134);
__webpack_require__.p = HRM_Vars.hrm_url + '/assets/js/';









var wpspear_hrm = {
	el: '#wpspear-hrm',
	store: __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* default */],
	router: __WEBPACK_IMPORTED_MODULE_1__router_router__["a" /* default */],
	render: h => h(__WEBPACK_IMPORTED_MODULE_5__App_vue__["a" /* default */])
};

new hrm.Vue(wpspear_hrm);

// fix the admin menu for the slug "vue-app"
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_menu_fix__["a" /* default */])('hr_management');

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empty_vue__ = __webpack_require__(152);
HRMRegisterModule('leave', 'leave');

let Hrm_Leave_Records = resolve => {
    __webpack_require__.e/* require.ensure */(2).then((() => {
        resolve(__webpack_require__(68));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_Configuration = resolve => {
    __webpack_require__.e/* require.ensure */(19).then((() => {
        resolve(__webpack_require__(64));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
let Hrm_Leave_Type = resolve => {
    __webpack_require__.e/* require.ensure */(4).then((() => {
        resolve(__webpack_require__(70));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
let Hrm_Leave_Work_Week = resolve => {
    __webpack_require__.e/* require.ensure */(17).then((() => {
        resolve(__webpack_require__(71));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
let Hrm_Leave_Holidays = resolve => {
    __webpack_require__.e/* require.ensure */(5).then((() => {
        resolve(__webpack_require__(66));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_form_settings = resolve => {
    __webpack_require__.e/* require.ensure */(14).then((() => {
        resolve(__webpack_require__(65));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_Requests = resolve => {
    __webpack_require__.e/* require.ensure */(18).then((() => {
        resolve(__webpack_require__(69));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_Pending = resolve => {
    __webpack_require__.e/* require.ensure */(25).then((() => {
        resolve(__webpack_require__(67));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_Cancel = resolve => {
    __webpack_require__.e/* require.ensure */(26).then((() => {
        resolve(__webpack_require__(63));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let Hrm_Leave_Approve = resolve => {
    __webpack_require__.e/* require.ensure */(27).then((() => {
        resolve(__webpack_require__(62));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

function HRM_URM_Params(self, params) {
    let employeeId = self.$route.params.employeeId ? self.$route.params.employeeId : HRM_Vars.current_user.data.ID;

    return {
        employeeId: employeeId
    };
}



let menu = [{
    path: 'leave',
    component: __WEBPACK_IMPORTED_MODULE_0__empty_vue__["a" /* default */],
    name: 'leave',
    meta: {
        label: 'Leave',
        order: 8
    },

    children: [{
        path: 'records',
        component: Hrm_Leave_Records,
        name: 'leave_records',
        meta: {
            label: 'Leave',
            params(self, params) {
                return HRM_URM_Params(self, params);
            }
        }
    }, {
        path: 'leave-request',
        component: Hrm_Leave_Requests,
        name: 'leave_request',
        meta: {
            label: 'Requested Leave',
            params(self, params) {
                return HRM_URM_Params(self, params);
            }
        },

        children: [{
            path: 'pending',
            component: Hrm_Leave_Pending,
            name: 'leave_pending',
            meta: {
                label: 'Pending'
            }
        }, {
            path: 'approve',
            component: Hrm_Leave_Approve,
            name: 'leave_approve',
            meta: {
                label: 'Approve'
            }
        }, {
            path: 'cancel',
            component: Hrm_Leave_Cancel,
            name: 'leave_cancel',
            meta: {
                label: 'Cancel'
            }
        }]
    }]
}];

if (hrm_user_can('manage_leave')) {
    menu[0].children.push({
        path: 'leave-configuration',
        component: Hrm_Leave_Configuration,
        name: 'leave_configuration',
        meta: {
            label: 'Configuration'
        },

        children: [{
            path: 'type',
            component: Hrm_Leave_Type,
            name: 'leave_type',
            meta: {
                label: 'Type'
            }
        }, {
            path: 'work-week',
            component: Hrm_Leave_Work_Week,
            name: 'leave_week',
            meta: {
                label: 'Work Week'
            }
        }, {
            path: 'holidays',
            component: Hrm_Leave_Holidays,
            name: 'leave_holidays',
            meta: {
                label: 'Holiday'
            }
        }, {
            path: 'form',
            component: Hrm_Leave_form_settings,
            name: 'leave_form_settings',
            meta: {
                label: 'Leave Form'
            }
        }]
    });
}

HRMRegisterChildrenRoute('hrm_root', menu);

/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empty_vue__ = __webpack_require__(145);

HRMRegisterModule('attendance', 'attendance');

let hrm_attendace_records = resolve => {
    __webpack_require__.e/* require.ensure */(6).then((() => {
        resolve(__webpack_require__(56));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let hrm_attendace_user_search = resolve => {
    __webpack_require__.e/* require.ensure */(31).then((() => {
        resolve(__webpack_require__(50));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let hrm_attendace_configuration = resolve => {
    __webpack_require__.e/* require.ensure */(20).then((() => {
        resolve(__webpack_require__(55));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};



let menu = [{
    path: 'attendance',
    component: __WEBPACK_IMPORTED_MODULE_0__empty_vue__["a" /* default */],
    name: 'attendance',
    meta: {
        label: 'Attendance',
        order: 7
    },

    children: [{
        path: 'records',
        component: hrm_attendace_records,
        name: 'attendance_records',
        meta: {
            label: 'Attendance'
        }
    }, {
        path: 'search',
        component: hrm_attendace_user_search,
        name: 'attendance_search',
        meta: {
            label: false
        }
    }]

}];

if (hrm_user_can('manage_attendance')) {
    menu[0].children.push({
        path: 'attendance-configuration',
        component: hrm_attendace_configuration,
        name: 'attendance_configuration',
        meta: {
            label: 'Configuration'
        }
    });
}

HRMRegisterChildrenRoute('hrm_root', menu);

/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_experience_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_experience_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__work_experience_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__education_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__education_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__education_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skill_router__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skill_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__skill_router__);

HRMRegisterModule('profile', 'profile');





let personalInformation = resolve => {
    __webpack_require__.e/* require.ensure */(23).then((() => {
        resolve(__webpack_require__(77));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let jobLocation = resolve => {
    __webpack_require__.e/* require.ensure */(21).then((() => {
        resolve(__webpack_require__(76));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let profile = resolve => {
    __webpack_require__.e/* require.ensure */(16).then((() => {
        resolve(__webpack_require__(78));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

function HRM_URM_Params(self, params) {
    let employeeId = self.$route.params.employeeId ? self.$route.params.employeeId : HRM_Vars.current_user.data.ID;

    return {
        employeeId: employeeId
    };
}

let menu = [{
    path: 'employees',
    component: profile,
    name: 'profile',
    meta: {
        label: 'Profile',
        order: 6
    },

    children: HRMGetRegisterChildrenRoute('profile', [{
        path: ':employeeId/general-information',
        component: personalInformation,
        name: 'employee_general_information',
        meta: {
            label: 'General Information',
            params(self, params) {
                return HRM_URM_Params(self, params);
            }
        }
    }, {
        path: ':employeeId/job-location',
        component: jobLocation,
        name: 'job_location',
        meta: {
            label: 'Job Loaction',
            params(self, params) {
                return HRM_URM_Params(self, params);
            }
        }
    }])
}];

HRMRegisterChildrenRoute('hrm_root', menu);

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_picker_vue__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28643299_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_picker_vue__ = __webpack_require__(170);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_picker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28643299_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/date-picker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28643299", Component.options)
  } else {
    hotAPI.reload("data-v-28643299", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2429d80e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__(167);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2429d80e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/settings/header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2429d80e", Component.options)
  } else {
    hotAPI.reload("data-v-2429d80e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./addons/mixin.js": 85,
	"./attendance/mixin.js": 88,
	"./dashboard/mixin.js": 90,
	"./departments/mixin.js": 93,
	"./designation/mixin.js": 96,
	"./employee/mixin.js": 99,
	"./leave/mixin.js": 102,
	"./organization/general/mixin.js": 104,
	"./organization/location/mixin.js": 107,
	"./organization/notice/mixin.js": 110,
	"./payroll/formula/mixin.js": 21,
	"./payroll/group/mixin.js": 6,
	"./payroll/mixin.js": 1,
	"./payroll/revision/mixin.js": 548,
	"./payroll/salary/mixin.js": 23,
	"./profile/education/mixin.js": 119,
	"./profile/mixin.js": 122,
	"./profile/skill/mixin.js": 123,
	"./profile/work-experience/mixin.js": 127,
	"./settings/mixin.js": 24
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 83;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./addons/store.js": 87,
	"./attendance/store.js": 89,
	"./dashboard/store.js": 92,
	"./departments/store.js": 95,
	"./designation/store.js": 98,
	"./employee/store.js": 101,
	"./leave/store.js": 103,
	"./organization/general/store.js": 106,
	"./organization/location/store.js": 109,
	"./organization/notice/store.js": 112,
	"./payroll/formula/store.js": 114,
	"./payroll/group/store.js": 116,
	"./payroll/revision/store.js": 549,
	"./payroll/salary/store.js": 118,
	"./profile/education/store.js": 121,
	"./profile/skill/store.js": 125,
	"./profile/store.js": 126,
	"./profile/work-experience/store.js": 129,
	"./settings/store.js": 130
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 84;

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'designation',
			modelName: 'Designation',
			modelTransformer: 'Designation_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);

					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');

					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			if (self.$route.query.filter == 'active') {
				self.filter(args);
			} else {
				self.fetchRecords(args);
			}
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;

			var form_data = {
				data: this.$route.query,

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_experiance_filter', form_data);
		},

		manageDesignation() {
			return hrm_user_can('manage_designation');
		}
	}
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('addons', 'addons');

let addons = resolve => {

    __webpack_require__.e/* require.ensure */(28).then((() => {
        resolve(__webpack_require__(54));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('hrm_root', [{
    path: 'addons',
    component: addons,
    name: 'addons'
}]);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        getAttendance: function () {

            var request_data = {
                _wpnonce: HRM_Vars.nonce,
                search: this.$route.query
            },
                self = this;

            wp.ajax.send('get_attendance', {
                data: request_data,
                beforeSend() {
                    self.loadingStart('hrm-list-table');
                },
                success: function (res) {

                    self.$store.commit('attendance/setAttendance', {
                        records: res.attendance,
                        punch_in_formated_date: res.punch_in_formated_date,
                        punch_out_formated_date: res.punch_out_formated_date,
                        punch_in_date: res.punch_in_date,
                        punch_out_date: res.punch_out_date,
                        totalOfficeTime: res.total_time

                    });
                    self.loadingStop('hrm-list-table');
                    self.isFetchRecord = true;
                },

                error: function (res) {}
            });
        }
    }
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		attendance: [],
		search_mode: false,
		punch_in_date: '',
		punch_out_date: '',
		search_user_id: '-1',
		punch_in_status: 'disable',
		punch_in_formated_date: '',
		punch_out_formated_date: '',
		hrm_is_multi_attendance: 0,
		office_start: '',
		office_closed: '',
		office_start_with_date_time: '',
		office_closed_with_date_time: '',
		allow_ip: '',
		employessDropDown: [],
		totalOfficeTime: 0
	},

	mutations: {
		setInitVal: function (state, res) {
			state.punch_out_date = res.punch_out_date;
			state.punch_in_date = res.punch_in_date;
			//state.search_user_id               = res.search_user_id;
			state.punch_in_status = res.punch_in;
			state.punch_in_formated_date = res.punch_in_formated_date;
			state.punch_out_formated_date = res.punch_out_formated_date;
			state.hrm_is_multi_attendance = res.hrm_is_multi_attendance;
			state.office_start = res.office_start;
			state.office_closed = res.office_closed;
			state.office_start_with_date_time = res.office_start_with_date_time;
			state.office_closed_with_date_time = res.office_closed_with_date_time;
			state.employessDropDown = res.employees_dropdown;
			state.allow_ip = res.allow_ip;
		},
		setAttendance: function (state, records) {

			state.attendance = records.records;
			state.totalOfficeTime = records.totalOfficeTime;

			if (typeof records.punch_in_formated_date != 'undefined') {
				state.punch_in_formated_date = records.punch_in_formated_date;
				state.punch_out_formated_date = records.punch_out_formated_date;
				state.punch_in_date = records.punch_in_date, state.punch_out_date = records.punch_out_date;
			}
		},

		searchMode: function (state, search) {
			state.search_mode = search.status;
		},
		setPunchInDate: function (state, date) {
			state.punch_in_date = date.date.date;
		},
		setPunchOutDate: function (state, date) {
			state.punch_out_date = date.date.date;
		},
		setSearchUserId: function (state, user_id) {
			state.search_user_id = user_id;
		},
		office_start: function (state, date_time) {
			state.office_start_with_date_time = date_time.date_time;
		},
		office_closed: function (state, date_time) {
			state.office_closed_with_date_time = date_time.date_time;
		},
		setMultiAttendance: function (state, multi) {
			state.hrm_is_multi_attendance = multi;
		},
		punch_in: function (state, status) {
			state.punch_in_status = status.status;
		},
		setAllowIP: function (state, ip) {
			state.allow_ip = ip;
		}
	}
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {};
	},
	methods: {
		getHeaderBlock(args) {
			var self = this;

			var form_data = {
				data: {},
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			this.httpRequest('hrm_get_dashboard_header_block', form_data);
		},

		getDashboardAttendance(args) {
			var self = this;
			args = args || {};

			var form_data = {
				data: {},
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			this.httpRequest('hrm_get_dashboard_attendance', form_data);
		},

		getDashboardLeaves(args) {
			var self = this;
			args = args || {};

			var form_data = {
				data: {},
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			this.httpRequest('hrm_get_dashboard_leaves', form_data);
		},

		getDashboardNotices(args) {
			var self = this;

			var postData = {
				'class': 'Notice',
				'method': 'gets',
				'transformers': 'Notice_Transformer',
				'page': 1
			};

			var request_data = {
				data: postData,
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		getDashboardBirthdays(args) {
			var self = this;
			args = args || {};

			var form_data = {
				data: {},
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			this.httpRequest('hrm_get_dashboard_birthdays', form_data);
		}
	}
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('dashboard', 'dashboard');

let dashboard = resolve => {

    __webpack_require__.e/* require.ensure */(22).then((() => {
        resolve(__webpack_require__(58));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('hrm_root', [{
    path: 'dashboard',
    component: dashboard,
    name: 'dashboard',
    meta: {
        label: 'Dashboard',
        order: 1
    }
}]);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {},

	mutations: {}
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            isFetchRecord: false
        };
    },
    methods: {
        showHideDepartmentForm(status, department) {
            var department = department || false,
                department = jQuery.isEmptyObject(department) ? false : department;

            if (department) {
                if (status === 'toggle') {
                    department.edit_mode = department.edit_mode ? false : true;
                } else {
                    department.edit_mode = status;
                }
            } else {
                this.$store.commit('departments/showHideDepartmentForm', status);
            }
        },

        manageDepartment() {
            return hrm_user_can('manage_department');
        },

        getDepartments: function () {
            var request_data = {
                _wpnonce: HRM_Vars.nonce
            },
                self = this;

            wp.ajax.send('get_departments', {
                data: request_data,
                beforeSend() {
                    self.loadingStart('hrm-department-tbl-wrap');
                },
                success: function (res) {
                    self.$store.commit('departments/setDepartments', {
                        departments: res.departments
                    });
                    self.isFetchRecord = true;
                    self.loadingStop('hrm-department-tbl-wrap');
                },

                error: function (res) {}
            });
        }

    }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('departments', 'departments');

let departments = resolve => {

    __webpack_require__.e/* require.ensure */(3).then((() => {
        resolve(__webpack_require__(59));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

let pagination = resolve => {

    __webpack_require__.e/* require.ensure */(30).then((() => {
        resolve(__webpack_require__(51));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('hrm_root', [{
    path: 'departments',
    component: departments,
    name: 'departments',
    meta: {
        label: 'Department',
        order: 3
    },

    children: [{
        path: 'page/:page_number',
        component: pagination,
        name: 'department_pagination'
    }]
}]);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		is_department_form_active: false,
		departments: [],
		department_id: false,
		del_dept: [],
		dept_pagination: {
			total: 0,
			limit: 5,
			page_number: 1
		},
		dept_drop_down: []
	},

	mutations: {
		showHideDepartmentForm: function (state, status) {
			if (status === 'toggle') {
				state.is_department_form_active = state.is_department_form_active ? false : true;
			} else {
				state.is_department_form_active = status;
			}
		},

		setDepartments: function (state, departments) {
			state.departments = departments.departments;
			state.dept_pagination.total = departments.total_dept;
			state.dept_drop_down = departments.dept_drop_down;
		},

		department_edit_id: function (state, department) {
			state.department_id = department.department_id;
		},

		updateDepartment: function (state, department) {
			if (department.is_update) {
				state.departments = department.departments;
			} else {
				state.departments = department.departments;
			}

			state.dept_drop_down = department.dept_drop_down;
		},

		departmentDelId: function (state, del_dept) {
			state.del_dept = del_dept.del_dept;
		},
		afterDeleteDept: function (state, deleted_dept) {
			state.departments.splice(deleted_dept.target_del_dept, 1);
			state.dept_drop_down = deleted_dept.dept_drop_down;
		}
	}
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'designation',
			modelName: 'Designation',
			modelTransformer: 'Designation_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);

					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');

					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			if (self.$route.query.filter == 'active') {
				self.filter(args);
			} else {
				self.fetchRecords(args);
			}
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;

			var form_data = {
				data: this.$route.query,

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_experiance_filter', form_data);
		},

		manageDesignation() {
			return hrm_user_can('manage_designation');
		}
	}
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('designation', 'designation');

let designation = resolve => {

    __webpack_require__.e/* require.ensure */(13).then((() => {
        resolve(__webpack_require__(60));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('hrm_root', [{
    path: 'designation',
    component: designation,
    name: 'designation',
    meta: {
        label: 'Designation',
        order: 4
    },

    children: [{
        path: 'pages/:current_page_number',
        component: designation,
        name: 'designation_pagination'
    }]
}]);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'employee',
			modelName: '',
			modelTransformer: '',
			isFetchRecord: false
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {
				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			deletedId.forEach(function (id) {
				jQuery('tr[data-recordId="' + id + '"]').fadeOut();
			});

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_employee', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},
				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_employee', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,
				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},
				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Vue.nextTick(function () {
						var tr = jQuery('.wp-list-table').find('tbody tr:first-child');

						self.newRecordEffect(tr);
					});

					// hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_employee', form_data);
		},

		getRecords(args) {
			var self = this;

			if (self.$route.query.filter == 'active') {
				self.filter(args);
			} else {
				self.fetchRecords(args);
			}
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'page': typeof this.$route.params.current_page_number == 'undefined' ? '1' : this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-employee-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-employee-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_employees', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;

			var form_data = {
				data: this.$route.query,
				beforeSend() {
					self.loadingStart('hrm-employee-list-table');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}

					self.loadingStop('hrm-employee-list-table');
					self.isFetchRecord = true;
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_employee_filter', form_data);
		},

		getDesignations(args) {
			var self = this;

			var postData = {
				'class': 'Designation',
				'method': 'gets',
				'transformers': 'designation_Transformer',
				'per_page': '1000'
			};

			var request_data = {
				data: postData,
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		getLocations(args) {
			var self = this;

			var postData = {
				'class': 'Location',
				'method': 'gets',
				'transformers': 'Location_Transformer',
				'per_page': '1000'
			};

			var request_data = {
				data: postData,
				success: function (res) {
					if (typeof args.callback != 'undefined') {
						args.callback(res);
					}
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		manageEmployee() {
			return hrm_user_can('manage_employee');
		},

		editFormValidation(fields, postData) {
			var isFormValidate = true;

			fields.forEach(function (val) {
				if (val.editable !== false && val.required === true && !postData[val.name]) {
					hrm.Toastr.error(val.label + ' is required!');
					isFormValidate = false;
				}
			});

			return isFormValidate;
		}
	}
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('employee', 'employee');

let employee = resolve => {

    __webpack_require__.e/* require.ensure */(8).then((() => {
        resolve(__webpack_require__(61));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('hrm_root', [{
    path: 'employee',
    component: employee,
    name: 'employee',
    meta: {
        label: 'Employees',
        order: 5
    },

    children: [{
        path: 'pages/:current_page_number',
        component: employee,
        name: 'employee_pagination'
    }]
}]);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {

			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');
			var self = this;
			state.editSlideUp(record.id, function () {
				state.records.splice(index, 1, record);

				hrm.Vue.nextTick(function () {
					var tr = jQuery('tr[data-recordId="' + record.id + '"]');
					self._vm.updateRecordEffect(tr);
				});
			});
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            isFetchRecord: false
        };
    },
    methods: {
        employeeLeaveSummery(args) {
            var self = this;
            var pre_define = {};

            var data = jQuery.extend(true, pre_define, args.data);

            var request_data = {
                data: { employee_id: data.employee_id },
                beforeSend() {},
                success(res) {

                    self.$store.commit('leave/afterEmployeeLeaveSummery', {
                        res: res,
                        row_id: data.row_id,
                        type: data.type
                    });

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                }
            };

            self.httpRequest('get_employee_leave_summery', request_data);
        },
        processRoles(role_object) {
            var roles = [];
            jQuery.each(role_object, function (id, name) {
                roles.push({
                    id: id,
                    name: name
                });
            });

            return roles;
        },
        processLeaveTypes(settings, roles) {
            if (!settings) {
                return [];
            }
            settings.leave_types = settings.leave_types || [];

            var leave_types = [];

            jQuery.each(roles, function (id, name) {
                if (settings.leave_types.indexOf(id) !== -1) {
                    leave_types.push({
                        id: id,
                        name: name
                    });
                }
            });

            return leave_types;
        },
        showHideLeaveRecordsForm(status, leave) {
            var leave = leave || false,
                leave = jQuery.isEmptyObject(leave) ? false : leave;

            if (leave) {
                if (status === 'toggle') {
                    leave.edit_mode = leave.edit_mode ? false : true;
                } else {
                    leave.edit_mode = status;
                }
            } else {
                this.$store.commit('leave/showHideleaveForm', status);
            }
        },

        showHideLeaveTypeUpdateForm(status, type) {
            var type = type || false,
                type = jQuery.isEmptyObject(type) ? false : type;

            if (type) {
                if (status === 'toggle') {
                    status = type.editMode ? false : true;
                }

                if (status === false) {
                    jQuery('#hrm-edit-' + type.id).find('form').slideUp(function () {

                        type.editMode = status;
                    });
                } else {
                    type.editMode = status;
                    hrm.Vue.nextTick(function () {
                        var node = jQuery('#hrm-edit-' + type.id);

                        node.find('form').css({
                            display: 'none'
                        });

                        node.find('form').slideDown(400);
                    });
                }
            }
        },

        showHideHolidayUpdateForm(status, holiday) {
            var holiday = holiday || false,
                holiday = jQuery.isEmptyObject(holiday) ? false : holiday;

            if (holiday) {
                if (status === 'toggle') {
                    holiday.editMode = holiday.editMode ? false : true;
                } else {
                    holiday.editMode = status;
                }
            }
        },

        getLeaveRecords(args) {
            var self = this;
            var pre_define = {};

            var data = jQuery.extend(true, pre_define, args.data);

            var request_data = {
                data: data,
                beforeSend() {
                    self.loadingStart('hrm-leave-record-wrap');
                },
                success(res) {
                    res.data.forEach(function (leave) {
                        self.setLeaveRecoredsMeta(leave);
                    });

                    self.$store.commit('leave/getLeaveRecords', res);

                    self.isFetchRecord = true;
                    self.loadingStop('hrm-leave-record-wrap');

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                }
            };

            self.httpRequest('get_leaves', request_data);
        },

        setLeaveRecoredsMeta(leave) {
            leave.metaSummery = [];
            leave.metaSummeryDisplay = false;
        },

        updateLeave(args) {
            if (this.is_leave_btn_disable) {
                return false;
            }

            var self = this;

            var form_data = {
                data: args.data,

                beforSend: function (xhr) {

                    self.show_spinner = true;
                    self.is_leave_btn_disable = true;
                },

                success: function (res) {
                    self.show_spinner = false;
                    // Display a success toast, with a title
                    //hrm.Toastr.success(res.success);

                    if (typeof args.callback === 'function') {
                        args.callback(res.data);
                    }
                },

                error: function (res) {
                    self.show_spinner = false;
                    // Showing error
                    res.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                }
            };

            //jQuery('.wp-list-table').find('tr[data-recordId="'+args.data.id+'"]').fadeOut();
            this.httpRequest('update_leave', form_data);
        },

        updateLeaveStatus(pendingLeave, status) {
            var self = this;

            var args = {
                data: {
                    id: pendingLeave.id,
                    status: status,
                    class: 'Leave',
                    method: 'update'
                },

                callback: function (res) {}
            };

            self.updateLeave(args);
        },

        deleteLeave(args) {
            if (!confirm('Are you sure')) {
                return;
            }
            var self = this;

            jQuery('tr[data-recordId="' + args.data.leave_id + '"]').fadeOut();

            var request_data = {
                data: {
                    leave_id: args.data.leave_id
                },
                success: function (res) {
                    self.$store.commit('leave/afterDeleteLeave', args.data.leave_id);

                    if (typeof args.callback === 'function') {
                        args.callback();
                    }
                }
            };

            self.httpRequest('delete_leave', request_data);
        },

        updateLeaveType(args) {
            // Exit from this function, If submit button disabled 
            if (this.submit_disabled) {
                //return;
            }

            var self = this;
            var pre_define = {};
            var args = jQuery.extend(true, pre_define, args);

            // Disable submit button for preventing multiple click
            this.submit_disabled = true;

            // Showing loading option 
            this.show_spinner = true;

            var request_data = {
                data: args.data,
                success(res) {
                    self.show_spinner = false;
                    // Display a success toast, with a title
                    hrm.Toastr.success(res.success);
                    self.addLeaveTypeMeta(res.leave_type.data);
                    self.submit_disabled = false;

                    self.$store.commit('leave/afterUpdateLeaveType', res.leave_type.data);

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                },

                error(res) {
                    self.show_spinner = false;

                    // Showing error
                    res.data.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                    self.submit_disabled = false;
                }
            };

            self.httpRequest('create_new_leave_type', request_data);
        },

        addLeaveTypeMeta(type) {
            type.editMode = false;
        },

        addHolidayMeta(holiday) {
            holiday.editMode = false;
        },

        deleteLeaveType(args) {

            if (!confirm('Are you sure')) {
                return;
            }
            var self = this;
            var pre_define = {
                id: false,
                callback: false
            };

            var args = jQuery.extend(true, pre_define, args);

            var request_data = {
                data: {
                    'id': args.id
                },
                success: function () {

                    self.$store.commit('leave/afterDeleteLeaveType', args.id);

                    if (typeof args.callback === 'function') {
                        args.callback();
                    }
                },
                error: function (res) {

                    self.show_spinner = false;
                    // Showing error
                    res.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                }
            };

            self.httpRequest('delete_leave_type', request_data);
        },
        updateHoliday(args) {
            // Exit from this function, If submit button disabled 
            if (this.submit_disabled) {
                return;
            }

            var self = this;
            var pre_define = {};
            var args = jQuery.extend(true, pre_define, args);

            // Disable submit button for preventing multiple click
            this.submit_disabled = true;

            // Showing loading option 
            this.show_spinner = true;

            var request_data = {
                data: args.data,
                beforeSend() {
                    self.loadingStart('hrm-edit-' + args.data.id, { animationClass: 'preloader-update-animation' });
                },
                success(res) {
                    self.show_spinner = false;
                    // Display a success toast, with a title
                    hrm.Toastr.success(res.success);
                    self.addHolidayMeta(res.holiday);
                    self.submit_disabled = false;
                    self.loadingStop('hrm-edit-' + args.data.id);

                    self.$store.commit('leave/afterUpdateHoliday', res.holiday);

                    if (typeof args.callback === 'function') {
                        args.callback(res.data);
                    }
                },

                error(res) {
                    self.show_spinner = false;

                    // Showing error
                    res.data.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                    self.submit_disabled = false;
                }
            };

            self.httpRequest('create_new_holidays', request_data);
        },

        deleteHoliday(args) {
            if (!confirm('Are you sure')) {
                return;
            }
            // Exit from this function, If submit button disabled 
            if (this.submit_disabled) {
                return;
            }

            let self = this;
            let pre_define = {};
            args = jQuery.extend(true, pre_define, args);

            // Disable submit button for preventing multiple click
            this.submit_disabled = true;

            // Showing loading option 
            this.show_spinner = true;

            var request_data = {
                data: {
                    'id': args.id
                },
                success: function (res) {
                    self.$store.commit('leave/afterDeleteHoliday', args.id);
                    if (typeof args.callback === 'function') {
                        args.callback();
                    }
                },
                error: function (res) {

                    self.show_spinner = false;
                    // Showing error
                    res.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                }
            };

            self.httpRequest('delete_holiday', request_data);
        },
        canManamgeLeave() {
            if (hrm_user_can('manage_leave')) {
                return true;
            }

            return false;
        },

        totalEntitlement(types) {
            let total = this.totalSummery(types);

            return total.entitlement;
        },

        totalTakeLeave(types) {
            let total = this.totalSummery(types);

            return total.taken_leave;
        },

        totalRemainLeave(types) {
            let total = this.totalSummery(types);

            return total.remain_leave;
        },

        totalSummery(types) {
            var total_extra = 0;

            var total = {
                entitlement: 0,
                taken_leave: 0,
                remain_leave: 0
            };

            types.forEach(function (type, index) {
                total.entitlement = parseInt(type.entitlement) + total.entitlement;
                total.taken_leave = parseInt(type.count) + total.taken_leave;

                if (type.id === 1) {
                    total_extra = total_extra + parseInt(type.count);
                }
            });

            total.remain_leave = total.entitlement - total.taken_leave + total_extra;

            return total;
        },

        showHideSummery(showHideSummery, type, status) {
            var self = this;
            jQuery('#hrm-toggle-' + showHideSummery.id).slideUp(400, function () {
                status = status || 'toggle';
                self.$store.commit('leave/showHideSummery', {
                    id: showHideSummery.id,
                    status: status,
                    type: type
                });
            });
        },

        getEmployeeDropDown(args) {
            var self = this;
            var request_data = {
                data: {},
                success: function (res) {
                    self.$store.commit('leave/setEmployeeDropDown', res);
                    if (typeof args.callback === 'function') {
                        args.callback();
                    }
                },
                error: function (res) {

                    self.show_spinner = false;
                    // Showing error
                    res.error.map(function (value, index) {
                        hrm.Toastr.error(value);
                    });
                }
            };

            this.httpRequest('get_employee_dropdown', request_data);
        },
        showHideNewLeaveTypeForm: function () {
            this.$store.commit('leave/isNewLeaveTypeFormVisible', { is_visible: true });
        }
    }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
let HRM_Leave_Store = {
	state: {
		header: {},
		is_new_leave_type_form_visible: false,
		is_new_holiday_form_visible: false,
		is_new_leave_records_form_visible: false,
		is_leave_form_active: false,
		leave_records: [],
		leave_meta: {},
		current_emp_current_month_leaves: [],
		pending_leaves: [],
		departmentDropDown: [],
		holidays: [],
		leaveTypes: [],
		approvedLeaves: [],
		cancelLeaves: [],
		employeeDropDown: [],
		getIndex: function (itemList, id, slug) {
			var index = false;

			itemList.forEach(function (item, key) {
				if (item[slug] == id) {
					index = key;
				}
			});

			return index;
		},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});
			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		afterUpdateLeaveType(state, type) {
			let index = state.getIndex(state.leaveTypes, type.id, 'id');

			state.editSlideUp(type.id, function () {
				state.leaveTypes.splice(index, 1, type);
			});
		},
		afterEmployeeLeaveSummery(state, data) {
			if (data.type == 'pending') {
				let index = state.getIndex(state.pending_leaves, data.row_id, 'id');
				state.pending_leaves[index].metaSummery = data.res;
				state.pending_leaves[index].metaSummeryDisplay = true;

				// hrm.Vue.nextTick(function() {
				// 	state.slideDwon();
				// });
			}
		},
		showHideSummery(state, data) {
			var status = data.status;

			if (data.type == 'pending') {
				let index = state.getIndex(state.pending_leaves, data.id, 'id');

				if (data.status === 'toggle') {
					status = state.pending_leaves[index].metaSummeryDisplay ? false : true;
				}

				if (status === false) {
					state.pending_leaves[index].metaSummeryDisplay = status;
					// state.slideUp(function() {
					// 	state.pending_leaves[index].metaSummeryDisplay = status;
					// });
				} else {
					state.pending_leaves[index].metaSummeryDisplay = status;
					// hrm.Vue.nextTick(function() {
					// 	state.slideDwon();
					// });
				}

				// if ( data.status == 'toggle' ) {
				// 	state.pending_leaves[index].metaSummeryDisplay = 
				// 		state.pending_leaves[index].metaSummeryDisplay
				// 		? false : true;
				// } else {
				// 	state.pending_leaves[index].metaSummeryDisplay = status;
				// }
			}
		},
		setCancelLeaves(state, calcelLeaves) {
			state.cancelLeaves = calcelLeaves;
		},
		setApprovalLeaves(state, approvedLeaves) {
			state.approvedLeaves = approvedLeaves;
		},
		header(state, header) {
			state.header = header.header;
		},
		isNewLeaveTypeFormVisible(state, is_visible) {
			state.is_new_leave_type_form_visible = is_visible.is_visible;
		},
		isNewLeaveRecordsFormVisible(state, is_visible) {
			state.is_new_leave_records_form_visible = is_visible.is_visible;
		},

		isNewHolidayFormVisible(state, is_visible) {
			state.is_new_holiday_form_visible = is_visible.is_visible;
		},

		showHideleaveForm(state, status) {
			if (status === 'toggle') {
				status = state.is_leave_form_active ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.is_leave_form_active = status;
				});
			} else {
				state.is_leave_form_active = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}

			// if ( status === 'toggle' ) {
			//              state.is_leave_form_active = state.is_leave_form_active ? false : true;
			//          } else {
			//              state.is_leave_form_active = status;
			//          }
		},

		getLeaveRecords(state, leave_records) {
			state.leave_records = leave_records.data;
			state.leave_meta = leave_records.meta;
		},

		setPendingLeaves(state, pending_leaves) {
			state.pending_leaves = pending_leaves;
		},

		afterDeleteLeave(state, id) {
			var index = state.getIndex(state.leave_records, id, 'id');
			state.leave_records.splice(index, 1);
		},
		setDepartment(state, dropDown) {
			state.departmentDropDown = dropDown;
		},
		setHoliday(state, holidays) {
			state.holidays = holidays;
		},
		updateHolidays(state, holidays) {
			state.holidays.push(holidays);
		},
		afterUpdateHoliday(state, holiday) {
			var index = state.getIndex(state.holidays, holiday.id, 'id');
			state.holidays.splice(index, 1, holiday);
		},
		afterDeleteHoliday(state, id) {
			var index = state.getIndex(state.holidays, id, 'id');
			state.holidays.splice(index, 1);
		},
		setLeaveTypes(state, leaveTypes) {
			state.leaveTypes = leaveTypes;
		},
		setNewLeaveType(state, leaveType) {
			state.leaveTypes.push(leaveType);
		},

		afterDeleteLeaveType(state, id) {
			var index = state.getIndex(state.leaveTypes, id, 'id');
			state.leaveTypes.splice(index, 1);
		},
		afterUpdateStatus(state, data) {

			if (data.section == 1) {
				let index = state.getIndex(state.pending_leaves, data.record.id, 'id');
				state.pending_leaves.splice(index, 1);
			} else if (data.section == 2) {
				let index = state.getIndex(state.approvedLeaves, data.record.id, 'id');
				state.approvedLeaves.splice(index, 1);
			} else if (data.section == 3) {
				let index = state.getIndex(state.cancelLeaves, data.record.id, 'id');
				state.cancelLeaves.splice(index, 1);
			}

			if (data.record.status == 1) {
				state.pending_leaves.push(data.record);
			} else if (data.record.status == 2) {
				state.approvedLeaves.push(data.record);
			} else if (data.record.status == 3) {
				state.cancelLeaves.push(data.record);
			}
		},

		afterCreateNewLeave(state, leaves) {
			leaves.forEach(function (leave) {
				state.leave_records.push(leave.data);
			});
		},
		setEmployeeDropDown(state, employees) {
			state.employeeDropDown = employees;
		}
	}
};

/* harmony default export */ __webpack_exports__["default"] = (HRM_Leave_Store);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

HRMRegisterModule('general', 'organization/general');

let general = resolve => {

    __webpack_require__.e/* require.ensure */(24).then((() => {
        resolve(__webpack_require__(72));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('organization', [{
    path: 'general-information',
    component: general,
    name: 'general_information',
    meta: {
        label: 'General Information'
    }
}]);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		organizationinfo: {},
		countries: []
	},

	mutations: {
		setOrganizationInfo(state, organizationinfo) {
			state.organizationinfo = organizationinfo;
		},
		setCountries(state, countries) {
			state.countries = countries;
		}
	}
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'location',
			modelName: 'Location',
			modelTransformer: 'Location_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,
				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			if (self.$route.query.filter == 'active') {
				self.filter(args);
			} else {
				self.fetchRecords(args);
			}
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;

			var form_data = {
				data: this.$route.query,

				beforeSend() {
					self.loadingStart('hrm-list-table');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_organization_location_filter', form_data);
		}
	}
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

HRMRegisterModule('location', 'organization/location');

let location = resolve => {

    __webpack_require__.e/* require.ensure */(7).then((() => {
        resolve(__webpack_require__(73));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('organization', [{
    path: 'location',
    component: location,
    name: 'location',
    meta: {
        label: 'Location'
    },

    children: [{
        path: 'pages/:current_page_number',
        component: location,
        name: 'location_pagination'
    }]
}]);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'notice',
			modelName: 'Notice',
			modelTransformer: 'Notice_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			if (self.$route.query.filter == 'active') {
				self.filter(args);
			} else {
				self.fetchRecords(args);
			}
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;

			var form_data = {
				data: this.$route.query,

				beforeSend() {
					self.loadingStart('hrm-list-table');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_notice_filter', form_data);
		}
	}
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

HRMRegisterModule('notice', 'organization/notice');

let notice = resolve => {

    __webpack_require__.e/* require.ensure */(12).then((() => {
        resolve(__webpack_require__(74));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

HRMRegisterChildrenRoute('organization', [{
    path: 'notice',
    component: notice,
    name: 'notice',
    meta: {
        label: 'Notice'
    },

    children: [{
        path: 'pages/:current_page_number',
        component: notice,
        name: 'notice_pagination'
    }]
}]);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formula_vue__ = __webpack_require__(155);
HRMRegisterModule('formula', 'payroll/formula');



HRMRegisterChildrenRoute('payroll', [{
    path: 'salary-components',
    component: __WEBPACK_IMPORTED_MODULE_0__formula_vue__["a" /* default */],
    name: 'salary_components',
    meta: {
        label: 'Salary Components'
    }
}]);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	getters: {
		incomeFormulas(state) {
			if (!state.records.length) {
				return [];
			}

			return state.records.filter(function (formul) {
				return formula.type == 'income';
			});
		},

		deductionFormuls(state) {
			if (!state.records.length) {
				return [];
			}

			return state.records.filter(function (formul) {
				return formula.type == 'deduction';
			});
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record.record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_vue__ = __webpack_require__(157);
HRMRegisterModule('group', 'payroll/group');



HRMRegisterChildrenRoute('payroll', [{
    path: 'group',
    component: __WEBPACK_IMPORTED_MODULE_0__group_vue__["a" /* default */],
    name: 'group',
    meta: {
        label: 'Component Group'
    },
    children: [{
        path: 'pages/:current_page_number',
        component: __WEBPACK_IMPORTED_MODULE_0__group_vue__["a" /* default */],
        name: 'group_pagination'
    }]
}]);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__salary_vue__ = __webpack_require__(161);
HRMRegisterModule('salary', 'payroll/salary');



HRMRegisterChildrenRoute('payroll', [{
    path: 'salary',
    component: __WEBPACK_IMPORTED_MODULE_0__salary_vue__["a" /* default */],
    name: 'salary',
    meta: {
        label: 'Salary'
    }
}, {
    path: 'salary/employees/:employee_id',
    component: __WEBPACK_IMPORTED_MODULE_0__salary_vue__["a" /* default */],
    name: 'salary_update'
}]);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		employees: [],
		designation: [],
		formulas: [],
		meta: {
			others: false,
			incomeTotal: 0,
			deductionTotal: 0,
			employeeGet: 0
		}
	},

	mutations: {
		setEmployees(state, employees) {
			state.employees = employees;
		},

		setDesignation(state, designation) {
			state.designation = designation;
		},

		setFormulas(state, formulas) {
			state.formulas = formulas;
		},

		setOthers(state, meta) {
			state.meta = meta.salaryMeta;
		},
		setUpdateData(state, data) {
			state.formulas = data.data;
			state.meta = data.meta.salaryMeta;
		}
	}
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'education',
			modelName: 'Education',
			modelTransformer: 'Education_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,
				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},
				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			//if (self.$route.query.filter == 'active') {
			self.filter(args);
			// } else {
			// 	self.fetchRecords(args);
			// }
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;
			this.$route.query['employee_id'] = this.$route.params.employeeId;

			var form_data = {
				data: this.$route.query,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);

					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_education_filter', form_data);
		}
	}
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('education', 'profile/education');

let education = resolve => {
    __webpack_require__.e/* require.ensure */(11).then((() => {
        resolve(__webpack_require__(75));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

function HRM_URM_Params(self, params) {
    let employeeId = self.$route.params.employeeId ? self.$route.params.employeeId : HRM_Vars.current_user.data.ID;

    return {
        employeeId: employeeId
    };
}

HRMRegisterChildrenRoute('profile', [{
    path: ':employeeId/education',
    component: education,
    name: 'education',
    meta: {
        label: 'Education',
        params(self, params) {
            return HRM_URM_Params(self, params);
        }
    },

    children: [{
        path: 'pages/:current_page_number',
        component: education,
        name: 'education_pagination'
    }]
}]);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        getPersonalInfo(args) {
            var self = this;

            var request_data = {
                data: {
                    employee_id: args.employee_id
                },
                beforeSend() {
                    self.loadingStart('hrm-general-info');
                },
                success: function (res) {
                    self.$store.commit('profile/setPersonalInfo', res);
                    self.loadingStop('hrm-general-info');
                    self.isFetchRecord = true;

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                }
            };

            self.httpRequest('hrm_get_personal_info', request_data);
        },

        getJobLocation(args) {
            var self = this;

            var request_data = {
                data: {
                    employee_id: args.employee_id
                },
                beforeSend() {
                    self.loadingStart('hrm-location-wrap');
                },
                success: function (res) {
                    self.$store.commit('profile/setJobLocation', res.data);
                    self.loadingStop('hrm-location-wrap');
                    self.isFetchRecord = true;

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                }
            };

            self.httpRequest('hrm_get_employee_job_location', request_data);
        }
    }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'skill',
			modelName: 'Skill',
			modelTransformer: 'Skill_Transformer'
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: self.modelName,
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback.call(self, deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,
				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},
				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback.call(self, true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			//if (self.$route.query.filter == 'active') {
			self.filter(args);
			// } else {
			// 	self.fetchRecords(args);
			// }
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': self.modelName,
				'method': 'gets',
				'transformers': self.modelTransformer,
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record['editMode'] = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;
			this.$route.query['employee_id'] = this.$route.params.employeeId;

			var form_data = {
				data: this.$route.query,
				beforeSend() {
					self.loadingStart('hrm-list-table');
				},
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof callback === 'function') {
						callback.call(self, true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback.call(self, false, res);
					}
				}
			};

			this.httpRequest('hrm_skill_filter', form_data);
		}
	}
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('skill', 'profile/skill');

let skill = resolve => {

    __webpack_require__.e/* require.ensure */(10).then((() => {
        resolve(__webpack_require__(79));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

function HRM_URM_Params(self, params) {
    let employeeId = self.$route.params.employeeId ? self.$route.params.employeeId : HRM_Vars.current_user.data.ID;

    return {
        employeeId: employeeId
    };
}

HRMRegisterChildrenRoute('profile', [{
    path: ':employeeId/skill',
    component: skill,
    name: 'skill',
    meta: {
        label: 'Skill',
        params(self, params) {
            return HRM_URM_Params(self, params);
        }
    },

    children: [{
        path: 'pages/:current_page_number',
        component: skill,
        name: 'skill_pagination'
    }]
}]);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		personalInfo: {
			country_list: []
		},

		jobLocation: {}
	},

	mutations: {
		setPersonalInfo(state, personalInfo) {
			state.personalInfo = personalInfo;
		},

		setJobLocation(state, jobLocation) {
			state.jobLocation = jobLocation;
		}
	}
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			nameSpace: 'workExperience',
			isFetchRecord: false
		};
	},
	methods: {
		showHideNewRecordForm(status, experiance) {
			var experiance = experiance || false,
			    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

			if (experiance) {
				if (status === 'toggle') {
					experiance.editMode = experiance.editMode ? false : true;
				} else {
					experiance.editMode = status;
				}
			} else {

				this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
			}
		},

		recordDelete(deletedId, callback) {
			var self = this;

			var form_data = {
				data: {
					delete: deletedId,
					class: 'Work_Experience',
					method: 'delete'
				},

				success: function (res) {

					self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
					if (typeof callback === 'function') {
						callback(deletedId);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});
				}
			};

			this.httpRequest('hrm_delete_record', form_data);
		},

		updateRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);

					self.$store.commit(self.nameSpace + '/updateRecord', res.data);
					self.loadingStop('hrm-edit-form-' + res.data.id);

					if (typeof args.callback === 'function') {
						args.callback(true, res);
					}
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_update_record', form_data);
		},

		addNewRecord(args) {
			var self = this;

			var form_data = {
				data: args.data,

				beforeSend() {
					self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
				},

				success: function (res) {
					self.recordMeta(res.data);
					self.$store.commit(self.nameSpace + '/setRecord', res.data);
					self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');

					self.loadingStop('hrm-hidden-form');

					if (typeof args.callback === 'function') {
						args.callback(true, res);
					}

					hrm.Toastr.success(res.message);
				},

				error: function (res) {

					// Showing error
					res.error.map(function (value, index) {
						hrm.Toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						args.callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_insert_record', form_data);
		},

		getRecords(args) {
			var self = this;

			//if (self.$route.query.filter == 'active') {
			self.filter(args);
			// } else {
			// 	self.fetchRecords(args);
			// }
		},

		fetchRecords() {
			var self = this;

			var postData = {
				'class': 'Work_Experience',
				'method': 'gets',
				'transformers': 'Work_Experiance_Transformer',
				'page': this.$route.params.current_page_number
			};

			var request_data = {
				data: postData,
				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
				}
			};

			self.httpRequest('hrm_get_records', request_data);
		},

		recordMeta(record) {
			record.editMode = false;
		},

		filter(callback) {
			var self = this;
			this.$route.query['page'] = this.$route.params.current_page_number;
			this.$route.query['employee_id'] = this.$route.params.employeeId;

			var form_data = {
				data: this.$route.query,

				beforeSend() {
					self.loadingStart('hrm-list-table');
				},

				success: function (res) {
					res.data.forEach(function (record) {
						self.recordMeta(record);
					});

					self.$store.commit(self.nameSpace + '/setRecords', res.data);
					self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
					self.loadingStop('hrm-list-table');
					self.isFetchRecord = true;

					if (typeof callback === 'function') {
						callback(true, res);
					}
				},

				error: function (res) {
					self.show_spinner = false;
					// Showing error
					res.error.map(function (value, index) {
						hrm.toastr.error(value);
					});

					if (typeof args.callback === 'function') {
						callback(false, res);
					}
				}
			};

			this.httpRequest('hrm_experiance_filter', form_data);
		},

		editFormValidation(fields, postData) {
			var isFormValidate = true;

			fields.forEach(function (val) {
				if (val.editable !== false && val.required === true && !postData[val.name]) {
					hrm.Toastr.error(val.label + ' is required!');
					isFormValidate = false;
				}
			});

			return isFormValidate;
		}
	}
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


HRMRegisterModule('workExperience', 'profile/work-experience');

let workExperience = resolve => {
    __webpack_require__.e/* require.ensure */(9).then((() => {
        resolve(__webpack_require__(80));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

function HRM_URM_Params(self, params) {
    let employeeId = self.$route.params.employeeId ? self.$route.params.employeeId : HRM_Vars.current_user.data.ID;

    return {
        employeeId: employeeId
    };
}

HRMRegisterChildrenRoute('profile', [{
    path: ':employeeId/work-experience',
    component: workExperience,
    name: 'work_experience',
    meta: {
        label: 'Work Experience',
        params(self, params) {
            return HRM_URM_Params(self, params);
        }
    },

    children: [{
        path: 'pages/:current_page_number',
        component: workExperience,
        name: 'work_experiance_pagination'
    }]
}]);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
let HRM_Settings_Store = {
	state: {},

	mutations: {}
};

/* harmony default export */ __webpack_exports__["default"] = (HRM_Settings_Store);

/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Required jQuery methods 
 * 
 * @type Object
 */
var HRM_Admin = {
    init: function () {
        this.datepicker();
    },

    datepicker: function (el, vnodeContext) {

        jQuery('.hrm-date-field').datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '-50:+5',
            onSelect: function (dateText) {
                vnodeContext.$emit('hrm_date_picker', { field: 'datepicker', date: dateText });
            }
        });

        jQuery(".hrm-date-picker-from").datepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function (selectedDate) {
                jQuery(".hrm-date-picker-to").datepicker("option", "minDate", selectedDate);
            },
            onSelect: function (dateText) {
                vnodeContext.$emit('hrm_date_picker', { field: 'datepicker_from', date: dateText, self: this });
            }
        });

        jQuery(".hrm-date-picker-to").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            onClose: function (selectedDate) {
                jQuery(".hrm-date-picker-from").datepicker("option", "maxDate", selectedDate);
            },
            onSelect: function (dateText) {
                vnodeContext.$emit('hrm_date_picker', { field: 'datepicker_to', date: dateText });
            }
        });

        jQuery(".hrm-date-time-picker-from").datetimepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function (selectedDate) {
                jQuery(".hrm-date-time-picker-to").datetimepicker("option", "minDate", selectedDate);
            },
            onSelect: function (dateText) {
                vnodeContext.$emit('hrm_date_picker', { field: 'datetimepicker_from', date_time: dateText });
            }
        });

        jQuery(".hrm-date-time-picker-to").datetimepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            onClose: function (selectedDate) {
                jQuery(".hrm-date-time-picker-from").datetimepicker("option", "maxDate", selectedDate);
            },
            onSelect: function (dateText) {
                vnodeContext.$emit('hrm_date_picker', { field: 'datetimepicker_to', date_time: dateText });
            }
        });
    }

    // Register a global custom directive called v-cpm-datepicker
};hrm.Vue.directive('hrm-datepicker', {
    inserted: function (el, binding, vnode) {
        HRM_Admin.datepicker(el, vnode.context);
    }
});

hrm.Vue.directive('hrm-slide-down', {
    inserted: function (el) {
        var node = jQuery(el);
        node.css({
            display: 'none'
        });

        node.slideDown(400);
    }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_do_action_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_header_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_date_picker_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_form_fields_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_pagination_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_file_uploader_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_edit_fields_vue__ = __webpack_require__(147);








hrm.Vue.component('hrm-do-action', __WEBPACK_IMPORTED_MODULE_0__components_common_do_action_vue__["a" /* default */]);
hrm.Vue.component('hrm-settings-header', __WEBPACK_IMPORTED_MODULE_1__components_settings_header_vue__["a" /* default */]);
hrm.Vue.component('hrm-date-picker', __WEBPACK_IMPORTED_MODULE_2__components_common_date_picker_vue__["a" /* default */]);
hrm.Vue.component('hrm-form-fields', __WEBPACK_IMPORTED_MODULE_3__components_common_form_fields_vue__["a" /* default */]);
hrm.Vue.component('hrm-pagination', __WEBPACK_IMPORTED_MODULE_4__components_common_pagination_vue__["a" /* default */]);
hrm.Vue.component('hrm-file-uploader', __WEBPACK_IMPORTED_MODULE_5__components_common_file_uploader_vue__["a" /* default */]);
hrm.Vue.component('hrm-edit-field', __WEBPACK_IMPORTED_MODULE_6__components_common_edit_fields_vue__["a" /* default */]);

/***/ }),
/* 133 */,
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
    var $ = jQuery;

    let menuRoot = $('#toplevel_page_' + slug);
    let currentUrl = window.location.href;
    let currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

    menuRoot.on('click', 'a', function () {
        var self = $(this);

        $('ul.wp-submenu li', menuRoot).removeClass('current');

        if (self.hasClass('wp-has-submenu')) {
            $('li.wp-first-item', menuRoot).addClass('current');
        } else {
            self.parents('li').addClass('current');
        }
    });

    $('ul.wp-submenu a', menuRoot).each(function (index, el) {
        if ($(el).attr('href') === currentPath) {
            $(el).parent().addClass('current');
            return;
        }
    });
}

/* harmony default export */ __webpack_exports__["a"] = (menuFix);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (hrm.Vue.mixin({
    methods: {
        registerStore(module_name, store) {
            if (typeof store === 'undefined') {
                return false;
            }

            var self = this;
            if (typeof store !== 'undefined') {
                var mutations = store.mutations || {}; //self.$options.mutations;
                var state = store.state || {}; //self.$options.state;
            }

            // register a module `myModule`

            self.$store.registerModule(module_name, {
                namespaced: true,
                state,
                mutations
            });
        },
        httpRequest(hook, property) {
            var before = function (xhr) {
                xhr.setRequestHeader("Authorization_name", btoa('asaquzzaman')); //btoa js encoding base64_encode
                xhr.setRequestHeader("Authorization_password", btoa(12345678)); //atob js decode base64_decode
            };

            property.beforeSend = typeof property.beforeSend === 'undefined' ? before : property.beforeSend;
            property.data._wpnonce = HRM_Vars.nonce;

            wp.ajax.send(hook, property);
        },
        slideUp(target_el, callback) {
            var node = jQuery(target_el).closest('.hrm-slide-up');

            node.slideUp(400, function () {
                callback();
            });
        },

        /**
            * Get index from array object element
            * 
            * @param   array 
            * @param   id    
            * 
            * @return  int      
            */
        getIndex(array, id, slug) {
            var target = false;

            array.forEach(function (content, index) {
                if (content[slug] == id) {
                    target = index;
                }
            });

            return target;
        },

        getDepartments(args) {
            var self = this;
            var pre_define = {
                _wpnonce: HRM_Vars.nonce,
                page_number: typeof this.$route.params.page_number !== 'undefined' ? this.$route.params.page_number : 1
            };

            var request_data = jQuery.extend(true, pre_define, args.data);

            wp.ajax.send('get_departments', {
                data: request_data,
                success(res) {
                    // self.$store.commit( 'departments/setDepartments', { 
                    //     departments: res.departments, 
                    //     'total_dept': res.total_dept,
                    //     'dept_drop_down': res.dept_drop_down
                    // });

                    if (typeof args.callback === 'function') {
                        args.callback(res);
                    }
                },

                error(res) {}
            });
        },
        /**
               * WP settings date format convert to hrm.Moment date format with time zone
               * 
               * @param  string date 
               * 
               * @return string      
               */
        dateFormat: function (date) {
            if (typeof date === 'undefined') {
                date = hrm.Moment().format();
            }

            // hrm.Moment.tz.add(HRM_Vars.time_zones);
            // hrm.Moment.tz.link(HRM_Vars.time_links);

            date = new Date(date);
            date = hrm.Moment(date).format('YYYY-MM-DD');

            var format = 'MMMM DD YYYY';

            if (HRM_Vars.wp_date_format == 'Y-m-d') {
                format = 'YYYY-MM-DD';
            } else if (HRM_Vars.wp_date_format == 'm/d/Y') {
                format = 'MM/DD/YYYY';
            } else if (HRM_Vars.wp_date_format == 'd/m/Y') {
                format = 'DD/MM/YYYY';
            }

            return hrm.Moment(date).format(format);
        },

        currentDate() {
            return this.dateFormat();
        },

        pad(d) {
            if (typeof d === 'undefined') {
                return d;
            }
            return d < 10 ? '0' + d.toString() : d.toString();
        },

        onOff(key, status) {
            var status = status || 'no';

            if (status === 'no') {
                this[key] = this[key] ? false : true;
            } else {
                this[key] = status;
            }
            this.leave_type = '';
            this.change_leve_type_statue();
        },

        loadingStart(id, args) {
            var pre_define = {
                // loading text
                text: '',

                // from 0 to 100 
                percent: '',

                // duration in ms
                duration: '',

                // z-index property
                zIndex: '9999',

                // sets relative position to preloader's parent
                setRelative: false,

                animationClass: 'preloader-animation'

            };
            var args = jQuery.extend(true, pre_define, args);

            hrm.Vue.nextTick(function () {
                jQuery('#' + id).css({
                    position: 'relative'
                });
                jQuery('#' + id).preloader(args);
            });
        },

        loadingStop(id) {
            jQuery('#' + id).preloader('remove');
        },

        dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        },

        manageOrganization() {
            return hrm_user_can('manage_organization');
        },

        getEmployeeId() {

            if (typeof this.$route.params.employeeId == 'undefined') {
                return parseInt(HRM_Vars.current_user.ID);
            }

            return parseInt(this.$route.params.employeeId);
        },

        newRecordEffect(selector) {
            selector.css({ display: 'none' });
            selector.addClass('new-records');
            selector.fadeIn(1000);

            setTimeout(function () {
                selector.removeClass('new-records');
            }, 3000);
        },

        updateRecordEffect(selector) {
            //selector.css({ display: 'none' });
            selector.addClass('new-records');
            //selector.fadeIn(1000);

            setTimeout(function () {
                selector.removeClass('new-records');
            }, 3000);
        },

        formValidation(fields, postData) {
            var isFormValidate = true;

            fields.forEach(function (val) {
                if (val.required === true && !postData[val.name]) {
                    hrm.Toastr.error(val.label + ' is required!');
                    isFormValidate = false;
                }
            });

            return isFormValidate;
        },

        editFormValidation(fields, postData) {
            var isFormValidate = true;

            fields.forEach(function (val) {
                if (val.editable !== false && val.required === true && !postData[val.name]) {
                    hrm.Toastr.error(val.label + ' is required!');
                    isFormValidate = false;
                }
            });

            return isFormValidate;
        }
    }
}));

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_profile_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_organization_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_designation_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_designation_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_designation_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_dashboard_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_departments_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_departments_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_departments_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_attendance_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_leave_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_employee_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_employee_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_employee_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_addons_router__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_addons_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_addons_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_payroll_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_common_empty_vue__ = __webpack_require__(148);














HRM_Routers.push({
	path: '/',
	component: __WEBPACK_IMPORTED_MODULE_11__components_common_empty_vue__["a" /* default */],
	name: 'hrm_root',

	children: HRMGetRegisterChildrenRoute('hrm_root')
});

var router = new hrm.VueRouter({
	routes: HRM_Routers
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = HRM_Vars.hrm_url + '/assets/js/';

hrmPromise.then(function (result) {
    __webpack_require__(47);
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Make sure to call Vue.use(Vuex) first if using a vuex module system
 */
/* harmony default export */ __webpack_exports__["a"] = (new hrm.Vuex.Store({

	state: {},

	mutations: {}

}));

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.hrm-bulk-wrap, .hrm-filter-wrap {\n\tfloat: left;\n}\n.hrm-tbl-action-wrap {\n\tmargin-top: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.alignright {\n\tfloat: right;\n}\n.hrm-spinner {\n\tmargin-right: 10px;\n\tmargin-top: 6px;\n}\n", ""]);

// exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.hrm .hrm-pagination-btn,\n#hrm .hrm-pagination-btn {\n    display: inline-block;\n    text-decoration: none;\n    font-size: 13px;\n    line-height: 26px;\n    height: 28px;\n    margin: 0;\n    padding: 0 10px 1px;\n    cursor: pointer;\n    border-width: 1px;\n    border-style: solid;\n    -webkit-appearance: none;\n    border-radius: 3px;\n    white-space: nowrap;\n    box-sizing: border-box;\n    color: #555;\n    border-color: #ccc;\n    background: #f7f7f7;\n    vertical-align: top;\n    margin-right: 3px;\n}\n.hrm .router-link-exact-active,\n#hrm .router-link-exact-active {\n    background: #f1f1f1;\n}\n.hrm-pagination-wrap {\n    margin-top: 8px;\n}\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.hrm-salary .tb-child {\n  padding-left: 5%;\n}\n.hrm-salary .tr-main {\n  background: #eee;\n}\n.hrm-salary .tb-main {\n  font-weight: 600;\n}\n.hrm-salary .action {\n  margin-top: 20px;\n}\n.hrm-salary .total {\n  font-weight: 600;\n}\n.hrm-salary .total-tr {\n  background: #f9f9f9;\n}\n.hrm-salary .wp-list-table {\n  margin-top: 10px;\n}\n.hrm-salary .amount {\n  width: 79% !important;\n  margin: 0 !important;\n  float: none !important;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.page-payroll {\n  width: 100%;\n}\n.page-payroll .help-text {\n  font-style: italic;\n  font-size: 12px;\n}\n.page-payroll .header-text {\n  font-size: 1.2em;\n}\n.page-payroll .submi-btn-wrap {\n  display: block;\n  margin-top: 10px;\n}\n.page-payroll .delete-btn {\n  margin-right: 5px;\n  font-size: 11px;\n  color: #ab4141;\n}\n.page-payroll .formula-display-name {\n  text-decoration: none;\n}\n.page-payroll .hrm-left,\n.page-payroll .hrm-right,\n.page-payroll .component-operator,\n.page-payroll .component-function {\n  float: left;\n}\n.page-payroll .operator-link {\n  text-decoration: none;\n}\n.page-payroll .hrm-left {\n  width: 29%;\n}\n.page-payroll .hrm-left .gross-childred-li {\n  padding-left: 15px;\n  padding-top: 5px;\n}\n.page-payroll .hrm-left .gross-item-ul,\n.page-payroll .hrm-left .deductions-item-ul {\n  padding-left: 15px;\n  padding-top: 5px;\n}\n.page-payroll .hrm-right {\n  width: 65%;\n  margin-left: 5%;\n}\n.page-payroll .hrm-right .component-operator {\n  width: 28%;\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n.page-payroll .hrm-right .component-function {\n  width: 28%;\n  border: 1px solid #ddd;\n  margin-left: 15px;\n  padding: 8px;\n}\n.page-payroll .hrm-right .field-wrap {\n  display: block;\n  margin-bottom: 10px;\n}\n.page-payroll .hrm-right .field-wrap label {\n  width: 25%;\n  display: inline-block;\n  padding: 10px;\n  padding-left: 0;\n}\n.page-payroll .hrm-right .field-wrap .label {\n  word-wrap: break-word;\n}\n.page-payroll .hrm-right .field-wrap .field {\n  width: 70%;\n}\n.page-payroll .hrm-right .field-wrap .field,\n.page-payroll .hrm-right .field-wrap .label {\n  float: left;\n}\n.page-payroll .hrm-right .field-wrap .component-textarea {\n  width: 100%;\n  min-height: 160px;\n}\n.page-payroll .hrm-right .functions-ul,\n.page-payroll .hrm-right .operator-ul {\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31ad00d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(172);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31ad00d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31ad00d8", Component.options)
  } else {
    hotAPI.reload("data-v-31ad00d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59d7c2d7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__ = __webpack_require__(176);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59d7c2d7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/attendance/empty.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59d7c2d7", Component.options)
  } else {
    hotAPI.reload("data-v-59d7c2d7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_do_action_vue__ = __webpack_require__(29);
/* unused harmony namespace reexport */
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_do_action_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/do-action.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18ba2f78", Component.options)
  } else {
    hotAPI.reload("data-v-18ba2f78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_fields_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58786930_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_fields_vue__ = __webpack_require__(175);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_fields_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58786930_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_fields_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/edit-fields.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58786930", Component.options)
  } else {
    hotAPI.reload("data-v-58786930", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2147fb59_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__ = __webpack_require__(165);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2147fb59_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/empty.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2147fb59", Component.options)
  } else {
    hotAPI.reload("data-v-2147fb59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_uploader_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78ef60ab_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_uploader_vue__ = __webpack_require__(179);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_uploader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78ef60ab_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_uploader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/file-uploader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78ef60ab", Component.options)
  } else {
    hotAPI.reload("data-v-78ef60ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_fields_vue__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ee6946e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_fields_vue__ = __webpack_require__(164);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_fields_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ee6946e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_fields_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/form-fields.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ee6946e", Component.options)
  } else {
    hotAPI.reload("data-v-0ee6946e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dcf73be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dcf73be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/common/pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dcf73be", Component.options)
  } else {
    hotAPI.reload("data-v-2dcf73be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab469816_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__ = __webpack_require__(181);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab469816_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_empty_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/leave/empty.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab469816", Component.options)
  } else {
    hotAPI.reload("data-v-ab469816", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70d99fbb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(178);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70d99fbb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/organization/menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70d99fbb", Component.options)
  } else {
    hotAPI.reload("data-v-70d99fbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_organization_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f1e98f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_organization_vue__ = __webpack_require__(173);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_organization_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f1e98f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_organization_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/organization/organization.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33f1e98f", Component.options)
  } else {
    hotAPI.reload("data-v-33f1e98f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_formula_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b538e45a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_formula_vue__ = __webpack_require__(182);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_formula_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b538e45a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_formula_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/formula/formula.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b538e45a", Component.options)
  } else {
    hotAPI.reload("data-v-b538e45a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_table_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26341286_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_table_vue__ = __webpack_require__(169);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26341286_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/group/group-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26341286", Component.options)
  } else {
    hotAPI.reload("data-v-26341286", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2280d105_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2280d105_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/group/group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2280d105", Component.options)
  } else {
    hotAPI.reload("data-v-2280d105", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_group_form_vue__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55ffb509_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_group_form_vue__ = __webpack_require__(174);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_new_group_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55ffb509_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_new_group_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/group/new-group-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55ffb509", Component.options)
  } else {
    hotAPI.reload("data-v-55ffb509", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f922b39_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(177);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f922b39_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f922b39", Component.options)
  } else {
    hotAPI.reload("data-v-5f922b39", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_payroll_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2477fb3b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_payroll_vue__ = __webpack_require__(168);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_payroll_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2477fb3b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_payroll_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/payroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2477fb3b", Component.options)
  } else {
    hotAPI.reload("data-v-2477fb3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_salary_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9efd8776_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_salary_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_salary_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9efd8776_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_salary_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/salary/salary.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9efd8776", Component.options)
  } else {
    hotAPI.reload("data-v-9efd8776", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_06b82d8f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__ = __webpack_require__(163);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_06b82d8f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/settings/settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06b82d8f", Component.options)
  } else {
    hotAPI.reload("data-v-06b82d8f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06b82d8f", esExports)
  }
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.fields, function(field, field_index) {
      return _c("div", { staticClass: "hrm-form-field" }, [
        field.type == "template"
          ? _c("div", [
              _c("label", { attrs: { for: "title" } }, [
                _vm._v("\n\t                " + _vm._s(field.label)),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-descriptive-wrap" }, [
                _c("div", {
                  staticClass: "hrm-descriptive-content",
                  domProps: { innerHTML: _vm._s(field.model) }
                })
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        field.type == "text"
          ? _c("div", [
              _c("label", { attrs: { for: "title" } }, [
                _vm._v("\n\t                " + _vm._s(field.label)),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: field.model,
                    expression: "field.model"
                  }
                ],
                attrs: { type: "text", required: field.required },
                domProps: { value: field.model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(field, "model", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "hrm-clear" }),
              _vm._v(" "),
              _c("span", { staticClass: "description" })
            ])
          : _vm._e(),
        _vm._v(" "),
        field.type == "email"
          ? _c("div", [
              _c("label", { attrs: { for: "title" } }, [
                _vm._v("\n\t                " + _vm._s(field.label)),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: field.model,
                    expression: "field.model"
                  }
                ],
                attrs: { type: "email", required: field.required },
                domProps: { value: field.model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(field, "model", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "hrm-clear" }),
              _vm._v(" "),
              _c("span", { staticClass: "description" })
            ])
          : _vm._e(),
        _vm._v(" "),
        field.type == "datePickerFrom"
          ? _c(
              "div",
              [
                _c("label", { attrs: { for: "title" } }, [
                  _vm._v("\n\t                " + _vm._s(field.label) + " "),
                  field.required ? _c("em", [_vm._v("*")]) : _vm._e()
                ]),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-to",
                  attrs: {
                    placeholder: "From",
                    required: field.required,
                    dependency: "pm-datepickter-from"
                  },
                  model: {
                    value: field.model,
                    callback: function($$v) {
                      _vm.$set(field, "model", $$v)
                    },
                    expression: "field.model"
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "hrm-clear" }),
                _vm._v(" "),
                _c("span", { staticClass: "description" })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        field.type == "datePickerTo"
          ? _c(
              "div",
              [
                _c("label", { attrs: { for: "title" } }, [
                  _vm._v("\n\t                " + _vm._s(field.label)),
                  field.required ? _c("em", [_vm._v("*")]) : _vm._e()
                ]),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-to",
                  attrs: {
                    required: field.required,
                    placeholder: "To",
                    dependency: "pm-datepickter-from"
                  },
                  model: {
                    value: field.model,
                    callback: function($$v) {
                      _vm.$set(field, "model", $$v)
                    },
                    expression: "field.model"
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "hrm-clear" }),
                _vm._v(" "),
                _c("span", { staticClass: "description" })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        field.type == "textarea"
          ? _c("div", [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + " "),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: field.model,
                    expression: "field.model"
                  }
                ],
                staticClass: "hrm-des-field",
                attrs: {
                  required: field.required,
                  name: "description",
                  id: "description"
                },
                domProps: { value: field.model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(field, "model", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "hrm-clear" }),
              _vm._v(" "),
              _c("span", { staticClass: "description" })
            ])
          : _vm._e(),
        _vm._v(" "),
        field.type == "file"
          ? _c(
              "div",
              [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + " "),
                  field.required ? _c("em", [_vm._v("*")]) : _vm._e()
                ]),
                _vm._v(" "),
                _c("hrm-file-uploader", {
                  attrs: {
                    defaults: field.default,
                    files: field.model,
                    multiple: field.multiple,
                    attr: field.attr,
                    delete: field.deleted_files
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "hrm-clear" }),
                _vm._v(" "),
                _c("span", { staticClass: "description" })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        field.type == "radio"
          ? _c(
              "div",
              [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + " "),
                  field.required ? _c("em", [_vm._v("*")]) : _vm._e()
                ]),
                _vm._v(" "),
                _vm._l(field.options, function(option, optKey) {
                  return _c(
                    "span",
                    { key: optKey, staticClass: "hrm-radio-wrap" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: field.model,
                            expression: "field.model"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          required: field.required,
                          id: option.name
                        },
                        domProps: {
                          value: option.value,
                          checked: _vm._q(field.model, option.value)
                        },
                        on: {
                          change: function($event) {
                            _vm.$set(field, "model", option.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "hrm-radio",
                          attrs: { for: option.name }
                        },
                        [_vm._v(_vm._s(option.label))]
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c("span", { staticClass: "hrm-clear" }),
                _vm._v(" "),
                _c("span", { staticClass: "description" })
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        field.type == "checkbox"
          ? _c(
              "div",
              [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + " "),
                  field.required ? _c("em", [_vm._v("*")]) : _vm._e()
                ]),
                _vm._v(" "),
                _vm._l(field.options, function(option, optKey) {
                  return _c(
                    "span",
                    { key: optKey, staticClass: "hrm-checkbox-wrap" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: field.model,
                            expression: "field.model"
                          }
                        ],
                        attrs: {
                          type: "checkbox",
                          required: field.required,
                          id: option.name
                        },
                        domProps: {
                          value: option.value,
                          checked: Array.isArray(field.model)
                            ? _vm._i(field.model, option.value) > -1
                            : field.model
                        },
                        on: {
                          change: function($event) {
                            var $$a = field.model,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = option.value,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (field.model = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (field.model = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.$set(field, "model", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "hrm-checkbox",
                          attrs: { for: option.name }
                        },
                        [_vm._v(_vm._s(option.label))]
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c("span", { staticClass: "hrm-clear" }),
                _vm._v(" "),
                _c("span", { staticClass: "description" })
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        field.type == "multiSelect"
          ? _c("div", { staticClass: "hrm-form-field hrm-leave-type-wrap" }, [
              _c("label", [
                _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + "\n\t\t\t\t\t"),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hrm-multiselect" },
                [
                  _c("hrm-multiselect", {
                    attrs: {
                      options: field.options,
                      multiple: true,
                      "close-on-select": true,
                      "clear-on-select": true,
                      "hide-selected": false,
                      "show-labels": true,
                      placeholder: field.placeholder,
                      "select-label": "",
                      "selected-label": "selected",
                      "deselect-label": "",
                      taggable: false,
                      label: field.optionLabel,
                      "track-by": field.trackBy,
                      "allow-empty": true
                    },
                    model: {
                      value: field.model,
                      callback: function($$v) {
                        _vm.$set(field, "model", $$v)
                      },
                      expression: "field.model"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-clear" }),
              _vm._v(" "),
              _c("span", { staticClass: "description" })
            ])
          : _vm._e(),
        _vm._v(" "),
        field.type == "select"
          ? _c("div", { staticClass: "hrm-form-field hrm-leave-type-wrap" }, [
              _c("label", [
                _vm._v("\n\t\t\t\t\t" + _vm._s(field.label) + "\n\t\t\t\t\t"),
                field.required ? _c("em", [_vm._v("*")]) : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hrm-multiselect" },
                [
                  _c("hrm-multiselect", {
                    attrs: {
                      options: field.options,
                      multiple: false,
                      "close-on-select": true,
                      "clear-on-select": true,
                      "hide-selected": false,
                      "show-labels": true,
                      placeholder: field.placeholder,
                      "select-label": "",
                      "selected-label": "selected",
                      "deselect-label": "",
                      "track-by": field.trackBy,
                      taggable: false,
                      label: field.optionLabel,
                      "allow-empty": false
                    },
                    model: {
                      value: field.model,
                      callback: function($$v) {
                        _vm.$set(field, "model", $$v)
                      },
                      expression: "field.model"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-clear" }),
              _vm._v(" "),
              field.helpText
                ? _c("span", {
                    staticClass: "description",
                    domProps: { innerHTML: _vm._s(field.helpText) }
                  })
                : _vm._e()
            ])
          : _vm._e()
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ee6946e", esExports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2147fb59", esExports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", { staticClass: "wp-heading-inline" }, [
        _vm._v("Salary Component Group")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "page-title-action",
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.showHideNewRecordForm("toggle")
            }
          }
        },
        [_vm._v("Add New")]
      ),
      _vm._v(" "),
      _c("payroll-menu"),
      _vm._v(" "),
      _c("div", { attrs: { id: "hrm-group-loading" } }, [
        _vm.isFetchFormula
          ? _c(
              "div",
              [
                _vm.isNewRecordFormActive
                  ? _c("add-new-record-form", {
                      staticClass: "hrm-toggle",
                      attrs: { fields: _vm.fields }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "hrm-tbl-action-wrap" }, [
                  _c("div", { staticClass: "hrm-table-action hrm-bulk-wrap" }, [
                    _c(
                      "label",
                      {
                        staticClass: "screen-reader-text",
                        attrs: { for: "bulk-action-selector-top" }
                      },
                      [_vm._v("\n\t\t\t\t\t\tSelect bulk action\n\t\t\t\t\t")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bulkAction,
                            expression: "bulkAction"
                          }
                        ],
                        attrs: {
                          name: "action",
                          id: "bulk-action-selector-top"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.bulkAction = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "-1" } }, [
                          _vm._v("Bulk Actions")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "delete" } }, [
                          _vm._v("Delete")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "button hrm-button-secondary button-secondary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.selfBulkAction()
                          }
                        }
                      },
                      [_vm._v("Apply")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "hrm-table-action hrm-filter-wrap" },
                    [
                      _c("div", { staticClass: "alignleft actions" }, [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                _vm.recordSearch()
                              }
                            }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.name,
                                  expression: "search.name"
                                }
                              ],
                              attrs: { placeholder: "Title", type: "text" },
                              domProps: { value: _vm.search.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.search,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass:
                                "button hrm-button-secondary button-secondary",
                              attrs: { type: "submit", value: "Filter" }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "hrm-clear" })
                ]),
                _vm._v(" "),
                _c("hrm-table", { attrs: { fields: _vm.fields } }),
                _vm._v(" "),
                _c("hrm-pagination", {
                  attrs: {
                    total_pages: _vm.pagination.total_pages,
                    component_name: "group_pagination"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2280d105", esExports)
  }
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h2",
      { staticClass: "nav-tab-wrapper" },
      _vm._l(_vm.menu[0].children, function(item, index) {
        return _c(
          "router-link",
          {
            key: index,
            staticClass: "nav-tab",
            attrs: { to: { name: item.name } }
          },
          [_vm._v(_vm._s(item.meta.label))]
        )
      })
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "hrm-sub-nav" }, [
      _c(
        "ul",
        { staticClass: "hrm-subsubsub" },
        _vm._l(_vm.childrens(), function(children) {
          return children.meta.label
            ? _c(
                "li",
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: children.name } } },
                    [_vm._v(_vm._s(children.meta.label))]
                  ),
                  _vm._v(" |  \n            ")
                ],
                1
              )
            : _vm._e()
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2429d80e", esExports)
  }
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2477fb3b", esExports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "hrm-list-table" } }, [
    _vm.isFetchRecord
      ? _c(
          "table",
          { staticClass: "wp-list-table widefat fixed striped pages" },
          [
            _c("thead", [
              _c(
                "tr",
                [
                  _vm.manageOrganization()
                    ? _c(
                        "td",
                        {
                          staticClass: "manage-column column-cb check-column",
                          attrs: { id: "cb" }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.deleteAllStatus,
                                expression: "deleteAllStatus"
                              }
                            ],
                            attrs: { id: "cb-select-all-1", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.deleteAllStatus)
                                ? _vm._i(_vm.deleteAllStatus, null) > -1
                                : _vm.deleteAllStatus
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$a = _vm.deleteAllStatus,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.deleteAllStatus = $$a.concat([
                                          $$v
                                        ]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.deleteAllStatus = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.deleteAllStatus = $$c
                                  }
                                },
                                function($event) {
                                  $event.preventDefault()
                                  _vm.deleteAll()
                                }
                              ]
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.filterHeader(_vm.fields), function(
                    header,
                    header_index
                  ) {
                    return _c(
                      "th",
                      { key: header_index, class: _vm.getClass(header) },
                      [
                        _vm._v(
                          "\n                    \t" +
                            _vm._s(header.tableHead) +
                            "\n                    "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.records, function(record, record_index) {
                  return !record.editMode
                    ? _c("tr", { key: record_index }, [
                        _vm.manageOrganization()
                          ? _c(
                              "th",
                              {
                                staticClass: "check-column",
                                attrs: { scope: "row" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.deletedId,
                                      expression: "deletedId"
                                    }
                                  ],
                                  attrs: {
                                    id: "cb-select-7",
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    value: record.id,
                                    checked: Array.isArray(_vm.deletedId)
                                      ? _vm._i(_vm.deletedId, record.id) > -1
                                      : _vm.deletedId
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$a = _vm.deletedId,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = record.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.deletedId = $$a.concat([
                                                $$v
                                              ]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.deletedId = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.deletedId = $$c
                                        }
                                      },
                                      function($event) {
                                        _vm.actionCheckbox()
                                      }
                                    ]
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", {
                            domProps: { innerHTML: _vm._s(record.name) }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "row-actions" }, [
                            _c("span", { staticClass: "edit" }, [
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.recordEditForm(record)
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" | ")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "trash" }, [
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selfDelete(record)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "ul",
                            _vm._l(record.income, function(income) {
                              return _c("li", [
                                _vm._v(_vm._s(_vm.getIncomeLabel(income)))
                              ])
                            })
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "ul",
                            _vm._l(record.deduction, function(deduction) {
                              return _c("li", [
                                _vm._v(_vm._s(_vm.getDeductionLabel(deduction)))
                              ])
                            })
                          )
                        ])
                      ])
                    : _c(
                        "tr",
                        {
                          staticClass: "inline-edit-row hrm-edit-toggle",
                          attrs: {
                            id: "hrm-edit-" + record.id,
                            "data-recordId": record.id
                          }
                        },
                        [
                          _c(
                            "td",
                            {
                              staticClass: "colspanchange",
                              attrs: { colspan: _vm.fields.length + 1 }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "hrm-edit-form",
                                  attrs: {
                                    id: "hrm-edit-form-" + record.id,
                                    action: ""
                                  },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      _vm.selfUpdate(record)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "fieldset",
                                    { staticClass: "inline-edit-col-left" },
                                    [
                                      _c(
                                        "legend",
                                        { staticClass: "inline-edit-legend" },
                                        [_vm._v("Quick Edit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "inline-edit-col" },
                                        _vm._l(
                                          _vm.filterEditField(_vm.fields),
                                          function(field, field_index) {
                                            return _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "hrm-edit-field-wrap"
                                              },
                                              [
                                                _c("label", [
                                                  _c(
                                                    "span",
                                                    { staticClass: "title" },
                                                    [
                                                      _vm._v(
                                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                          _vm._s(field.label)
                                                      ),
                                                      field.required
                                                        ? _c("em", [
                                                            _vm._v("*")
                                                          ])
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-text-wrap"
                                                  },
                                                  [
                                                    _c("hrm-edit-field", {
                                                      attrs: {
                                                        record: record,
                                                        field: field
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("div", {
                                                  staticClass: "hrm-clear"
                                                })
                                              ]
                                            )
                                          }
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "submit inline-edit-save" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button hrm-button-secondary cancel alignleft",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              _vm.recordEditForm(record, false)
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass:
                                          "button hrm-button-primary button-primary save alignright",
                                        attrs: {
                                          disabled: !_vm.canSubmit,
                                          type: "submit",
                                          value: "Update"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.loading
                                        ? _c("div", {
                                            staticClass:
                                              "hrm-spinner alignright"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("br", { staticClass: "clear" })
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                }),
                _vm._v(" "),
                !_vm.records.length
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: _vm.fields.length + 1 } }, [
                        _vm._v("\n\t\t\t\t\t\tNo result found!\n\t\t\t\t\t")
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("fieldset", { staticClass: "inline-edit-col-right" }, [
      _c("div", { staticClass: "inline-edit-col" })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26341286", esExports)
  }
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    attrs: { type: "text" },
    domProps: { value: _vm.value }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28643299", esExports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.total_pages > 1
    ? _c("div", { staticClass: "hrm-pagination-wrap" }, [
        _c(
          "div",
          { staticClass: "hrm-pagination-inner" },
          [
            parseInt(_vm.current_page_number) > 1
              ? _c(
                  "router-link",
                  {
                    staticClass: "hrm-pagination-btn prev page-numbers",
                    attrs: {
                      to: {
                        name: _vm.component_name,
                        params: {
                          current_page_number: _vm.current_page_number - 1
                        },
                        query: _vm.route_query
                      }
                    }
                  },
                  [_vm._v("\n            «\n        ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.total_pages, function(page) {
              return _c(
                "router-link",
                {
                  key: page,
                  class: _vm.pageClass(page) + " hrm-pagination-btn",
                  attrs: {
                    to: {
                      name: _vm.component_name,
                      params: {
                        current_page_number: page
                      },
                      query: _vm.route_query
                    }
                  }
                },
                [_vm._v("\n            " + _vm._s(page) + "\n        ")]
              )
            }),
            _vm._v(" "),
            parseInt(_vm.current_page_number) < parseInt(_vm.total_pages)
              ? _c(
                  "router-link",
                  {
                    staticClass: "hrm-pagination-btn next page-numbers",
                    attrs: {
                      to: {
                        name: _vm.component_name,
                        params: {
                          current_page_number: _vm.current_page_number + 1
                        },
                        query: _vm.route_query
                      }
                    }
                  },
                  [_vm._v("\n            »\n        ")]
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2dcf73be", esExports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrap", attrs: { id: "hrm" } },
    [
      _c("hrm-do-action", { attrs: { hook: "hrm-before-router-view" } }),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("hrm-do-action", { attrs: { hook: "hrm-after-router-view" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31ad00d8", esExports)
  }
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33f1e98f", esExports)
  }
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "metabox-holder" }, [
    _c(
      "div",
      { staticClass: "postbox", attrs: { id: "hrm-hidden-form-warp" } },
      [
        _c("h2", { staticClass: "hndle" }, [_vm._v("Work Experiance")]),
        _vm._v(" "),
        _c("div", { staticClass: "inside" }, [
          _c(
            "form",
            {
              attrs: { id: "hrm-hidden-form", action: "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.selfNewRecord()
                }
              }
            },
            [
              _c(
                "div",
                { attrs: { id: "hrm-form-field" } },
                [_c("hrm-form-fields", { attrs: { fields: _vm.fields } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-action-wrap" }, [
                _c("input", {
                  staticClass: "button hrm-button-primary button-primary",
                  attrs: {
                    disabled: !_vm.canSubmit,
                    type: "submit",
                    name: "requst",
                    value: "Submit"
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "button hrm-button-secondary",
                    attrs: { target: "_blank", href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.showHideNewRecordForm(false)
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm.loading
                  ? _c("div", { staticClass: "hrm-spinner" }, [
                      _vm._v("Saving....")
                    ])
                  : _vm._e()
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-55ffb509", esExports)
  }
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _vm.field.type == "template"
        ? _c("div", { staticClass: "hrm-descriptive-wrap" }, [
            _c("div", {
              staticClass: "hrm-descriptive-content",
              domProps: { innerHTML: _vm._s(_vm.record[_vm.field.name]) }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "text"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.record[_vm.field.name],
                expression: "record[field.name]"
              }
            ],
            attrs: { required: _vm.field.required, type: "text" },
            domProps: { value: _vm.record[_vm.field.name] },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.record, _vm.field.name, $event.target.value)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "datePickerFrom"
        ? _c("hrm-date-picker", {
            staticClass: "pm-datepickter-to",
            attrs: {
              required: _vm.field.required,
              placeholder: "From",
              dependency: "pm-datepickter-from"
            },
            model: {
              value: _vm.record[_vm.field.name],
              callback: function($$v) {
                _vm.$set(_vm.record, _vm.field.name, $$v)
              },
              expression: "record[field.name]"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "datePickerTo"
        ? _c("hrm-date-picker", {
            staticClass: "pm-datepickter-to",
            attrs: {
              required: _vm.field.required,
              placeholder: "To",
              dependency: "pm-datepickter-from"
            },
            model: {
              value: _vm.record[_vm.field.name],
              callback: function($$v) {
                _vm.$set(_vm.record, _vm.field.name, $$v)
              },
              expression: "record[field.name]"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "textarea"
        ? _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.record[_vm.field.name],
                expression: "record[field.name]"
              }
            ],
            staticClass: "hrm-des-field",
            attrs: {
              required: _vm.field.required,
              name: "description",
              id: "description"
            },
            domProps: { value: _vm.record[_vm.field.name] },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.record, _vm.field.name, $event.target.value)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "file"
        ? _c("hrm-file-uploader", {
            attrs: {
              files: _vm.record[_vm.field.name],
              multiple: _vm.field.multiple,
              attr: _vm.field.attr,
              delete: _vm.field.deleted_files
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.field.options, function(option, optKey) {
        return _vm.field.type == "radio"
          ? _c("span", { key: optKey, staticClass: "hrm-radio-wrap" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.record[_vm.field.name],
                    expression: "record[field.name]"
                  }
                ],
                attrs: {
                  required: _vm.field.required,
                  type: "radio",
                  id: option.name
                },
                domProps: {
                  value: option.value,
                  checked: _vm._q(_vm.record[_vm.field.name], option.value)
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.record, _vm.field.name, option.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "hrm-radio", attrs: { for: option.name } },
                [_vm._v(_vm._s(option.label))]
              )
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._l(_vm.field.options, function(option, optKey) {
        return _vm.field.type == "checkbox"
          ? _c("span", { key: optKey, staticClass: "hrm-checkbox-wrap" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.record[_vm.field.name],
                    expression: "record[field.name]"
                  }
                ],
                attrs: {
                  required: _vm.field.required,
                  type: "checkbox",
                  id: option.name
                },
                domProps: {
                  value: option.value,
                  checked: Array.isArray(_vm.record[_vm.field.name])
                    ? _vm._i(_vm.record[_vm.field.name], option.value) > -1
                    : _vm.record[_vm.field.name]
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.record[_vm.field.name],
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = option.value,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          (_vm.record[_vm.field.name] = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.record[_vm.field.name] = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.$set(_vm.record, _vm.field.name, $$c)
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "hrm-checkbox", attrs: { for: option.name } },
                [_vm._v(_vm._s(option.label))]
              )
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.field.type == "multiSelect"
        ? _c(
            "div",
            { staticClass: "hrm-multiselect" },
            [
              _c("hrm-multiselect", {
                attrs: {
                  options: _vm.field.options,
                  multiple: true,
                  "close-on-select": true,
                  "clear-on-select": true,
                  "hide-selected": false,
                  "show-labels": true,
                  placeholder: _vm.field.placeholder,
                  "select-label": "",
                  "selected-label": "selected",
                  "deselect-label": "",
                  taggable: false,
                  label: _vm.field.optionLabel,
                  "track-by": _vm.field.trackBy,
                  "allow-empty": true
                },
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.field.type == "select"
        ? _c(
            "div",
            { staticClass: "hrm-multiselect" },
            [
              _c("hrm-multiselect", {
                attrs: {
                  options: _vm.field.options,
                  multiple: false,
                  "close-on-select": true,
                  "clear-on-select": true,
                  "hide-selected": false,
                  "show-labels": true,
                  placeholder: _vm.field.placeholder,
                  "select-label": "",
                  "selected-label": "selected",
                  "deselect-label": "",
                  taggable: false,
                  label: _vm.field.optionLabel,
                  "allow-empty": true
                },
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58786930", esExports)
  }
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59d7c2d7", esExports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.menu.length
    ? _c("div", [
        _c(
          "h2",
          { staticClass: "nav-tab-wrapper" },
          _vm._l(_vm.filterChildren(_vm.menu[0].children), function(
            item,
            index
          ) {
            return _c(
              "router-link",
              {
                key: index,
                staticClass: "nav-tab",
                attrs: { to: { name: item.name } }
              },
              [_vm._v(_vm._s(item.meta.label))]
            )
          })
        ),
        _vm._v(" "),
        _c("h3", { staticClass: "hrm-sub-nav" }, [
          _c(
            "ul",
            { staticClass: "hrm-subsubsub" },
            _vm._l(_vm.childrens(), function(children) {
              return _c(
                "li",
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: children.name } } },
                    [_vm._v(_vm._s(children.meta.label))]
                  ),
                  _vm._v(" |  \n            ")
                ],
                1
              )
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f922b39", esExports)
  }
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.menu
    ? _c("div", [
        _c(
          "h2",
          { staticClass: "nav-tab-wrapper" },
          _vm._l(_vm.menu, function(item, index) {
            return _c(
              "router-link",
              {
                key: index,
                staticClass: "nav-tab",
                attrs: { to: { name: item.name } }
              },
              [_vm._v(_vm._s(item.meta.label))]
            )
          })
        ),
        _vm._v(" "),
        _c("h3", { staticClass: "hrm-sub-nav" }, [
          _c(
            "ul",
            { staticClass: "hrm-subsubsub" },
            _vm._l(_vm.childrens(), function(children) {
              return _c(
                "li",
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: children.name } } },
                    [_vm._v(_vm._s(children.meta.label))]
                  ),
                  _vm._v(" |  \n            ")
                ],
                1
              )
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-70d99fbb", esExports)
  }
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hrm-attachment-area" }, [
    _c(
      "div",
      {
        directives: [{ name: "hrm-uploader", rawName: "v-hrm-uploader" }],
        attrs: { id: "hrm-upload-container" }
      },
      [
        _c(
          "div",
          { staticClass: "hrm-upload-filelist" },
          [
            _vm._l(_vm.files, function(file) {
              return _vm.files.length
                ? _c(
                    "div",
                    { key: file.id, staticClass: "hrm-uploaded-item" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "hrm-uploaded-img",
                          attrs: { href: file.url, target: "_blank" }
                        },
                        [
                          _c("img", {
                            staticClass: "hrm-uploaded-file",
                            style:
                              "height:" +
                              _vm.attr.height +
                              "; width:" +
                              _vm.attr.width +
                              ";",
                            attrs: { src: file.thumb, alt: file.name }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "button",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.deletefile(file.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ]
                  )
                : _vm._e()
            }),
            _vm._v(" "),
            _vm._l(_vm.defaults, function(file) {
              return !_vm.files.length
                ? _c("div", { staticClass: "hrm-uploaded-item" }, [
                    _c("img", {
                      staticClass: "hrm-uploaded-file",
                      style:
                        "height:" +
                        _vm.attr.height +
                        "; width:" +
                        _vm.attr.width +
                        ";",
                      attrs: { src: file.url, alt: file.name }
                    })
                  ])
                : _vm._e()
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("To attach, "),
      _c("a", { attrs: { id: "hrm-upload-pickfiles", href: "#" } }, [
        _vm._v("select files")
      ]),
      _vm._v(" from your computer.")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78ef60ab", esExports)
  }
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "hrm-salary" },
    [
      _c("payroll-menu"),
      _vm._v(" "),
      _c("div", { staticClass: "metabox-holder" }, [
        _c(
          "div",
          { staticClass: "postbox", attrs: { id: "hrm-hidden-form-warp" } },
          [
            _c("h2", { staticClass: "hndle" }, [_vm._v("Salary")]),
            _vm._v(" "),
            _c("div", { staticClass: "inside" }, [
              _c(
                "form",
                {
                  attrs: { id: "hrm-hidden-form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.generateSalaryStatement(true)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "hrm-form-field" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("hrm-date-picker", {
                        staticClass: "pm-datepickter-to",
                        attrs: {
                          required: true,
                          placeholder: "From",
                          dependency: "pm-datepickter-from"
                        },
                        model: {
                          value: _vm.salaryDay,
                          callback: function($$v) {
                            _vm.salaryDay = $$v
                          },
                          expression: "salaryDay"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "hrm-clear" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "description" })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "hrm-form-field" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salaryType,
                            expression: "salaryType"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.salaryType = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "designation" } }, [
                          _vm._v("Designation")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "employee" } }, [
                          _vm._v("Employee")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "hrm-clear" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "description" }, [
                      _vm._v("Salary will goes to")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.salaryType == "employee"
                    ? _c("div", { staticClass: "hrm-form-field" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "hrm-multiselect" },
                          [
                            _c("hrm-multiselect", {
                              attrs: {
                                options: _vm.employees,
                                multiple: false,
                                "close-on-select": true,
                                "clear-on-select": true,
                                "hide-selected": false,
                                "show-labels": true,
                                placeholder: "Employees",
                                "select-label": "",
                                "selected-label": "selected",
                                "deselect-label": "",
                                taggable: false,
                                label: "display_name",
                                "allow-empty": true
                              },
                              model: {
                                value: _vm.categoryId,
                                callback: function($$v) {
                                  _vm.categoryId = $$v
                                },
                                expression: "categoryId"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "hrm-clear" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "description" }, [
                          _vm._v("Select employee")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.salaryType == "designation"
                    ? _c("div", { staticClass: "hrm-form-field" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "hrm-multiselect" },
                          [
                            _c("hrm-multiselect", {
                              attrs: {
                                options: _vm.designation,
                                multiple: false,
                                "close-on-select": true,
                                "clear-on-select": true,
                                "hide-selected": false,
                                "show-labels": true,
                                placeholder: "Designation",
                                "select-label": "",
                                "selected-label": "selected",
                                "deselect-label": "",
                                taggable: false,
                                label: "title",
                                "track-by": "id",
                                "allow-empty": true
                              },
                              model: {
                                value: _vm.categoryId,
                                callback: function($$v) {
                                  _vm.categoryId = $$v
                                },
                                expression: "categoryId"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "hrm-clear" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "description" }, [
                          _vm._v("Select designation")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "hrm-form-field" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "hrm-multiselect" },
                      [
                        _c("hrm-multiselect", {
                          attrs: {
                            options: _vm.componentGroup,
                            multiple: false,
                            "close-on-select": true,
                            "clear-on-select": true,
                            "hide-selected": false,
                            "show-labels": true,
                            placeholder: "Component Group",
                            "select-label": "",
                            "selected-label": "selected",
                            "deselect-label": "",
                            taggable: false,
                            label: "name",
                            "track-by": "id",
                            "allow-empty": true
                          },
                          model: {
                            value: _vm.salaryComponentGroup,
                            callback: function($$v) {
                              _vm.salaryComponentGroup = $$v
                            },
                            expression: "salaryComponentGroup"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "hrm-clear" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "description" }, [
                      _vm._v("Select salary component group")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    {
                      staticClass: "wp-list-table widefat fixed striped pages"
                    },
                    [
                      _c(
                        "thead",
                        [
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._l(_vm.incomeFormulas, function(incomeFormula) {
                            return _c("tr", [
                              _c("td", { staticClass: "tb-child" }, [
                                _vm._v(_vm._s(incomeFormula.description))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.executeFormula(incomeFormula))
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(incomeFormula.formula))])
                            ])
                          }),
                          _vm._v(" "),
                          _vm.meta.others
                            ? _c("tr", [
                                _c("td", { staticClass: "tb-child" }, [
                                  _vm._v("Othres")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.meta.others))]),
                                _vm._v(" "),
                                _c("td")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("tr", { staticClass: "total-tr" }, [
                            _c("td", { staticClass: "tb-child total" }, [
                              _vm._v("Gross Total")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.meta.incomeTotal))]),
                            _vm._v(" "),
                            _c("td")
                          ]),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _vm._l(_vm.deductionFormulas, function(
                            deductionFormula
                          ) {
                            return _c("tr", [
                              _c("td", { staticClass: "tb-child" }, [
                                _vm._v(_vm._s(deductionFormula.description))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "-" +
                                    _vm._s(_vm.executeFormula(deductionFormula))
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(deductionFormula.formula))
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _c("tr", { staticClass: "total-tr" }, [
                            _c("td", { staticClass: "tb-child total" }, [
                              _vm._v("Deduction Total")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("-" + _vm._s(_vm.meta.deductionTotal))
                            ]),
                            _vm._v(" "),
                            _c("td")
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "total-tr" }, [
                            _c("td", { staticClass: "tb-child total" }, [
                              _vm._v("Net Pay")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.meta.employeeGet))]),
                            _vm._v(" "),
                            _c("td")
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "tr-main" }, [
                            _c("td", { staticClass: "tb-main" }, [
                              _vm._v("Salary")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.salary,
                                    expression: "salary"
                                  }
                                ],
                                staticClass: "amount",
                                attrs: {
                                  type: "number",
                                  placeholder: "Monthly/Annual salary",
                                  step: "any"
                                },
                                domProps: { value: _vm.salary },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.salary = $event.target.value
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.salaryPeriod,
                                      expression: "salaryPeriod"
                                    }
                                  ],
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.salaryPeriod = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "monthly" } },
                                    [_vm._v("Monthly")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "annual" } }, [
                                    _vm._v("Annual")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "action" }, [
                    !_vm.isUpdate
                      ? _c("input", {
                          staticClass:
                            "button button-primary hrm-button-primary",
                          attrs: { type: "submit", value: "Save" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isUpdate
                      ? _c("input", {
                          staticClass:
                            "button button-primary hrm-button-primary",
                          attrs: { type: "submit", value: "Update" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "button button-secondary hrm-button-secondary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.generateSalaryStatement(false)
                          }
                        }
                      },
                      [_vm._v("Generate")]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n\t\t\t\t\t\t\t\tSalary Day\n\t\t\t\t\t\t\t\t"),
      _c("em", [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n\t\t\t\t\t\t\t\tSalary Type\n\t\t\t\t\t\t\t\t"),
      _c("em", [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n\t\t\t\t\t\t\t\tEmployee\n\t\t\t\t\t\t\t\t"),
      _c("em", [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n\t\t\t\t\t\t\t\tDesignation\n\t\t\t\t\t\t\t\t"),
      _c("em", [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n\t\t\t\t\t\t\t\tSalary Component Group\n\t\t\t\t\t\t\t\t"),
      _c("em")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tr-main" }, [
      _c("td", { staticClass: "tb-main" }, [_vm._v("Income")]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tr-main" }, [
      _c("td", { staticClass: "tb-main" }, [_vm._v("Deduction")]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9efd8776", esExports)
  }
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab469816", esExports)
  }
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-payroll metabox-holder" },
    [
      _c("payroll-menu"),
      _vm._v(" "),
      _c("div", { attrs: { id: "hrm-payroll-loader" } }, [
        _vm.isFetchRecord
          ? _c("div", [
              _c("div", { staticClass: "hrm-left postbox" }, [
                _c("h2", { staticClass: "hndle" }, [_vm._v("Components")]),
                _vm._v(" "),
                _c("div", { staticClass: "inside" }, [
                  _c("ul", { staticClass: "net-pay" }, [
                    _c("li", [
                      _vm._v("\n\t\t\t\t\t\t\tNet Pay\n\t\t\t\t\t\t\t"),
                      _c("ul", { staticClass: "gross-childred-li" }, [
                        _c("li", { staticClass: "gross-li" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tGross\n\t\t\t\t\t\t\t\t\t"
                          ),
                          _c(
                            "ul",
                            { staticClass: "gross-item-ul" },
                            _vm._l(_vm.incomeFormulas, function(incomeFormula) {
                              return _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "delete-btn",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.deleteFormula(incomeFormula)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "far fa-trash-alt" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "formula-display-name",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.setEditDate(incomeFormula)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(incomeFormula.description) +
                                        "\n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ])
                            })
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "deducations-li" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tTotal Deductions\n\t\t\t\t\t\t\t\t\t"
                          ),
                          _c(
                            "ul",
                            { staticClass: "deductions-item-ul" },
                            _vm._l(_vm.deductionFormulas, function(
                              deductionFormula
                            ) {
                              return _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "delete-btn",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.deleteFormula(deductionFormula)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "far fa-trash-alt" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "formula-display-name",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.setEditDate(deductionFormula)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(deductionFormula.description) +
                                        "\n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ])
                            })
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-right postbox" }, [
                _c("h2", { staticClass: "hndle" }, [_vm._v("Calculation")]),
                _vm._v(" "),
                _c("div", { staticClass: "inside" }, [
                  _c(
                    "form",
                    {
                      attrs: { id: "hrm-formula-form" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.CreateFormula()
                        }
                      }
                    },
                    [
                      _c("div", [
                        _c("div", { staticClass: "field-wrap" }, [
                          _c("label", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "field-wrap" }, [
                          _c("label", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.description,
                                expression: "description"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: _vm.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.description = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "field-wrap" }, [
                          _c("label", [_vm._v("Salary Type")]),
                          _vm._v(" "),
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.type,
                                  expression: "type"
                                }
                              ],
                              attrs: { value: "income", type: "radio" },
                              domProps: { checked: _vm._q(_vm.type, "income") },
                              on: {
                                change: function($event) {
                                  _vm.type = "income"
                                }
                              }
                            }),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\tIncome\n\t\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.type,
                                  expression: "type"
                                }
                              ],
                              attrs: { value: "deduction", type: "radio" },
                              domProps: {
                                checked: _vm._q(_vm.type, "deduction")
                              },
                              on: {
                                change: function($event) {
                                  _vm.type = "deduction"
                                }
                              }
                            }),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\tDeduction\n\t\t\t\t\t\t\t\t"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "field-wrap" }, [
                          _c("label", { staticClass: "label" }, [
                            _vm._v(_vm._s(_vm.name) + "  =")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "field" }, [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formula,
                                  expression: "formula"
                                }
                              ],
                              staticClass: "component-textarea",
                              attrs: {
                                id: "component-textarea",
                                placeholder: "Create formula"
                              },
                              domProps: { value: _vm.formula },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.formula = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "help-text" }, [
                              _vm._v(
                                "Create formula by click the under following function and operators"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "hrm-clear" })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "component-operator" }, [
                            _c("div", { staticClass: "header-text" }, [
                              _vm._v("Functions")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(_vm.functions, function(functionEl, key) {
                                return _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "operator-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.setFunction(key)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(functionEl.label))]
                                  )
                                ])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "component-function" }, [
                            _c("div", { staticClass: "header-text" }, [
                              _vm._v("Operator")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(_vm.operators, function(operator, key) {
                                return _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "operator-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.setOperator(key)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(operator))]
                                  )
                                ])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "component-function" }, [
                            _c("div", { staticClass: "header-text" }, [
                              _vm._v("Variable")
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(_vm.variables, function(variable, key) {
                                return _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "operator-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.setVariable(key)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(variable.name))]
                                  )
                                ])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "hrm-clear" })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "submi-btn-wrap" }, [
                          !_vm.formulaID
                            ? _c("input", {
                                staticClass:
                                  "button button-primary hrm-button-primary",
                                attrs: {
                                  disabled: !_vm.canSubmit,
                                  type: "submit",
                                  value: "Save Change"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.formulaID
                            ? _c("input", {
                                staticClass:
                                  "button button-primary hrm-button-primary",
                                attrs: {
                                  disabled: !_vm.canSubmit,
                                  type: "submit",
                                  value: "Update"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.formulaID
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "button button-secondary hrm-button-secondary",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.cancelUpdate()
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "button button-secondary hrm-button-secondary",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.checkFormulaValidity()
                                }
                              }
                            },
                            [_vm._v("Check Formula Validity")]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "hrm-clear" })
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b538e45a", esExports)
  }
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("55f96db4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2280d105\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2280d105\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("636606a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26341286\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26341286\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a712e646", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2dcf73be\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2dcf73be\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("52f02f50", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9efd8776\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./salary.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9efd8776\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./salary.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("461c0bfd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b538e45a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formula.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b538e45a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formula.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}

function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(5), __webpack_require__(8).setImmediate))

/***/ }),
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
				data() {
								return {
												nameSpace: 'revision',
												modelName: 'Salary',
												modelTransformer: 'Salary_Transformer'
								};
				},
				methods: {
								showHideNewRecordForm(status, experiance) {
												var experiance = experiance || false,
												    experiance = jQuery.isEmptyObject(experiance) ? false : experiance;

												if (experiance) {
																if (status === 'toggle') {
																				experiance.editMode = experiance.editMode ? false : true;
																} else {
																				experiance.editMode = status;
																}
												} else {

																this.$store.commit(this.nameSpace + '/showHideNewRecordForm', status);
												}
								},

								recordDelete(deletedId, callback) {
												var self = this;

												var form_data = {
																data: {
																				delete: deletedId,
																				class: self.modelName,
																				method: 'delete'
																},

																success: function (res) {

																				self.$store.commit(self.nameSpace + '/afterDelete', deletedId);
																				if (typeof callback === 'function') {
																								callback.call(self, deletedId);
																				}
																},

																error: function (res) {
																				self.show_spinner = false;
																				// Showing error
																				res.error.map(function (value, index) {
																								hrm.toastr.error(value);
																				});
																}
												};

												this.httpRequest('hrm_delete_record', form_data);
								},

								updateRecord(args) {
												var self = this;

												var form_data = {
																data: args.data,

																beforeSend() {
																				self.loadingStart('hrm-edit-form-' + args.data.id, { animationClass: 'preloader-update-animation' });
																},

																success: function (res) {
																				self.recordMeta(res.data);

																				self.$store.commit(self.nameSpace + '/updateRecord', res.data);
																				self.loadingStop('hrm-edit-form-' + res.data.id);

																				if (typeof args.callback === 'function') {
																								args.callback.call(self, true, res);
																				}
																},

																error: function (res) {

																				// Showing error
																				res.error.map(function (value, index) {
																								hrm.toastr.error(value);
																				});

																				if (typeof args.callback === 'function') {
																								args.callback.call(self, false, res);
																				}
																}
												};

												this.httpRequest('hrm_update_record', form_data);
								},

								addNewRecord(args) {
												var self = this;

												var form_data = {
																data: args.data,

																beforeSend() {
																				self.loadingStart('hrm-hidden-form', { animationClass: 'preloader-update-animation' });
																},

																success: function (res) {
																				self.$store.commit(self.nameSpace + '/setRecord', res.data);
																				self.$store.commit(self.nameSpace + '/updatePaginationAfterNewRecord');
																				self.loadingStop('hrm-hidden-form');

																				if (typeof args.callback === 'function') {
																								args.callback.call(self, true, res);
																				}

																				hrm.Toastr.success(res.message);
																},

																error: function (res) {

																				// Showing error
																				res.error.map(function (value, index) {
																								hrm.Toastr.error(value);
																				});

																				if (typeof args.callback === 'function') {
																								args.callback.call(self, false, res);
																				}
																}
												};

												this.httpRequest('hrm_insert_record', form_data);
								},

								getRecords(args) {
												var self = this;
												var postData = {
																'page': this.$route.params.current_page_number
												};

												var request_data = {
																data: postData,
																beforeSend() {
																				self.loadingStart('hrm-list-table');
																},
																success: function (res) {
																				res.data.forEach(function (record) {
																								self.recordMeta(record);
																				});

																				self.$store.commit(self.nameSpace + '/setRecords', res.data);
																				self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
																				self.loadingStop('hrm-list-table');
																				self.isFetchRecord = true;
																}
												};

												self.httpRequest('hrm_get_salary', request_data);
								},

								fetchRecords() {
												var self = this;

												var postData = {
																'class': self.modelName,
																'method': 'gets',
																'transformers': self.modelTransformer,
																'page': this.$route.params.current_page_number
												};

												var request_data = {
																data: postData,
																beforeSend() {
																				self.loadingStart('hrm-list-table');
																},
																success: function (res) {
																				res.data.forEach(function (record) {
																								self.recordMeta(record);
																				});

																				self.$store.commit(self.nameSpace + '/setRecords', res.data);
																				self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
																				self.loadingStop('hrm-list-table');
																				self.isFetchRecord = true;
																}
												};

												self.httpRequest('hrm_get_records', request_data);
								},

								recordMeta(record) {
												record['editMode'] = false;
								},

								filter(callback) {
												var self = this;
												this.$route.query['page'] = this.$route.params.current_page_number;

												var form_data = {
																data: this.$route.query,

																beforeSend() {
																				self.loadingStart('hrm-list-table');
																},

																success: function (res) {
																				res.data.forEach(function (record) {
																								self.recordMeta(record);
																				});

																				self.$store.commit(self.nameSpace + '/setRecords', res.data);
																				self.$store.commit(self.nameSpace + '/setPagination', res.meta.pagination);
																				self.loadingStop('hrm-list-table');
																				self.isFetchRecord = true;

																				if (typeof callback === 'function') {
																								callback.call(self, true, res);
																				}
																},

																error: function (res) {
																				self.show_spinner = false;
																				// Showing error
																				res.error.map(function (value, index) {
																								hrm.toastr.error(value);
																				});

																				if (typeof args.callback === 'function') {
																								callback.call(self, false, res);
																				}
																}
												};

												this.httpRequest('hrm_notice_filter', form_data);
								}
				}
});

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	state: {
		isNewRecordFormActive: false,
		records: [],
		getIndex: function (itemList, id, slug) {
			return itemList.findIndex(x => x[slug] == id);
		},
		deletedId: [],
		pagination: {},
		slideUp(callBack) {
			jQuery('.hrm-toggle').slideUp(400, function () {
				callBack();
			});
		},
		slideDwon() {
			var node = jQuery('.hrm-toggle');
			node.css({
				display: 'none'
			});

			node.slideDown(400);
		},
		editSlideUp(id, callBack) {
			jQuery('#hrm-edit-' + id).find('form').slideUp(400, function () {
				callBack();
			});
		},
		editSlideDwon(id) {
			var node = jQuery('#hrm-edit-' + id);

			node.find('form').css({
				display: 'none'
			});

			node.find('form').slideDown(400);
		}
	},

	mutations: {
		showHideNewRecordForm(state, status) {
			if (status === 'toggle') {
				status = state.isNewRecordFormActive ? false : true;
			}

			if (status === false) {
				state.slideUp(function () {
					state.isNewRecordFormActive = status;
				});
			} else {
				state.isNewRecordFormActive = status;
				hrm.Vue.nextTick(function () {
					state.slideDwon();
				});
			}
		},

		setRecords(state, records) {
			state.records = records;
		},

		setRecord(state, record) {
			var per_page = state.pagination.per_page,
			    length = state.records.length;

			if (per_page <= length) {
				state.records.splice(0, 0, record);
				state.records.pop();
			} else {
				state.records.splice(0, 0, record);
			}
		},

		updateRecord(state, record) {
			let index = state.getIndex(state.records, record.id, 'id');

			state.records.splice(index, 1, record);
		},

		showHideEditForm(state, data) {
			var index = state.getIndex(state.records, data.id, 'id'),
			    status = data.status,
			    id = state.records[index].id;

			if (data.status == 'toggle') {
				status = state.records[index].editMode ? false : true;
			}

			if (status === false) {
				state.editSlideUp(id, function () {
					state.records[index].editMode = status;
				});
			} else {
				state.records[index].editMode = status;
				hrm.Vue.nextTick(function () {
					state.editSlideDwon(id);
				});
			}
		},

		setDeletedId(state, deletedId) {
			state.deletedId = deletedId;
		},

		setPagination(state, pagination) {
			state.pagination = pagination;
		},

		updatePaginationAfterNewRecord(state) {
			state.pagination.total = state.pagination.total + 1;
			state.pagination.total_pages = Math.ceil(state.pagination.total / state.pagination.per_page);
		},

		afterDelete(state, deletedId) {
			deletedId.forEach(function (id) {
				let index = state.getIndex(state.records, id, 'id');

				state.records.splice(index, 1);
			});
		},

		setSearchResults(state, records) {}
	}
});

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__revision_table_vue__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin__ = __webpack_require__(548);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin__["default"]],

	data() {

		return {
			search: {
				filter: 'active',
				title: this.$route.query.title,
				from: this.$route.query.from,
				to: this.$route.query.to
			},
			bulkAction: -1
		};
	},

	computed: {
		isNewRecordFormActive() {
			return this.$store.state[this.nameSpace].isNewRecordFormActive;
		},

		total_experiance_page() {
			return 10;
		},

		pagination() {
			return this.$store.state[this.nameSpace].pagination;
		}
	},
	components: {
		'hrm-table': __WEBPACK_IMPORTED_MODULE_0__revision_table_vue__["a" /* default */]
	},

	methods: {

		selfBulkAction() {
			var self = this;
			switch (this.bulkAction) {
				case 'delete':
					this.recordDelete(self.$store.state[self.nameSpace].deletedId, function () {
						var hasRecords = self.$store.state[self.nameSpace].records.length;
						var page = self.$route.params.current_page_number;

						if (!hasRecords && page > 1) {
							self.$router.push({
								params: {
									current_page_number: page - 1
								},
								query: self.$route.query
							});
						}
						if (!hasRecords && self.pagination.total_pages > 1) {
							self.getRecords();
						}
					});
					break;

				default:

					break;
			}
		},

		recordSearch() {
			this.$router.push({ query: this.search });
			this.getRecords();
		}
	}
});

/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__revision_vue__ = __webpack_require__(553);
HRMRegisterModule('revision', 'payroll/revision');



HRMRegisterChildrenRoute('payroll', [{
    path: 'revision',
    component: __WEBPACK_IMPORTED_MODULE_0__revision_vue__["a" /* default */],
    name: 'revision',
    meta: {
        label: 'Revision'
    },
    children: [{
        path: 'pages/:current_page_number',
        component: __WEBPACK_IMPORTED_MODULE_0__revision_vue__["a" /* default */],
        name: 'revision_pagination'
    }]
}]);

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.hrm-bulk-wrap, .hrm-filter-wrap {\n\tfloat: left;\n}\n.hrm-tbl-action-wrap {\n\tmargin-top: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_revision_vue__ = __webpack_require__(550);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c63989b6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_revision_vue__ = __webpack_require__(554);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(555)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_revision_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c63989b6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_revision_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/revision/revision.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c63989b6", Component.options)
  } else {
    hotAPI.reload("data-v-c63989b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-organization" },
    [
      _c("payroll-menu"),
      _vm._v(" "),
      _c("div", { staticClass: "hrm-tbl-action-wrap" }, [
        _vm.manageOrganization()
          ? _c("div", { staticClass: "hrm-table-action  hrm-bulk-wrap" }, [
              _c(
                "label",
                {
                  staticClass: "screen-reader-text",
                  attrs: { for: "bulk-action-selector-top" }
                },
                [_vm._v("\n\t\t\t\t\tSelect bulk action\n\t\t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bulkAction,
                      expression: "bulkAction"
                    }
                  ],
                  attrs: { name: "action", id: "bulk-action-selector-top" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.bulkAction = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "-1" } }, [
                    _vm._v("Bulk Actions")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "delete" } }, [
                    _vm._v("Delete")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "button hrm-button-secondary button-secondary",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.selfBulkAction()
                    }
                  }
                },
                [_vm._v("Apply")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-table-action  hrm-filter-wrap" }, [
          _c("div", { staticClass: "alignleft actions" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.recordSearch()
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search.title,
                      expression: "search.title"
                    }
                  ],
                  attrs: { placeholder: "Title", type: "text" },
                  domProps: { value: _vm.search.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.search, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-to",
                  attrs: {
                    placeholder: "From",
                    dependency: "pm-datepickter-from"
                  },
                  model: {
                    value: _vm.search.from,
                    callback: function($$v) {
                      _vm.$set(_vm.search, "from", $$v)
                    },
                    expression: "search.from"
                  }
                }),
                _vm._v(" "),
                _c("hrm-date-picker", {
                  staticClass: "pm-datepickter-from",
                  attrs: { placeholder: "To", dependency: "pm-datepickter-to" },
                  model: {
                    value: _vm.search.to,
                    callback: function($$v) {
                      _vm.$set(_vm.search, "to", $$v)
                    },
                    expression: "search.to"
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "button hrm-button-secondary button-secondary",
                  attrs: { type: "submit", value: "Filter" }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hrm-clear" })
      ]),
      _vm._v(" "),
      _c("hrm-table"),
      _vm._v(" "),
      _c("hrm-pagination", {
        attrs: {
          total_pages: _vm.pagination.total_pages,
          component_name: "notice_pagination"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c63989b6", esExports)
  }
}

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("73e07d5a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c63989b6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./revision.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c63989b6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./revision.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin__ = __webpack_require__(548);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin__["default"]],
	props: {
		deleteCheckbox: {
			type: [Boolean],
			default() {
				return true;
			}
		},
		fields: {
			type: [Array],
			default() {
				return [];
			}
		}
	},

	data() {
		return {
			canSubmit: true,
			loading: false,
			deleteAllStatus: false,
			deletedId: [],
			isFetchRecord: false
		};
	},

	created() {
		this.getRecords();
	},

	computed: {
		records() {
			return this.$store.state[this.nameSpace].records;
		}
	},

	watch: {
		deletedId() {
			this.$store.commit(this.nameSpace + '/setDeletedId', this.deletedId);
		},
		'$route'(to, from) {
			this.getRecords();
		}
	},
	methods: {
		filterEditField(fields) {
			return fields.filter(function (field) {
				return field.editable ? true : false;
			});
		},
		filterHeader(fields) {
			return fields.filter(function (field) {
				return typeof field.tableHead === 'undefined' ? false : true;
			});
		},
		printCellData(record, field) {
			if (typeof field.filterPrintData == 'undefined') {
				return record[field.name];
			}

			return field.filterPrintData(record[field.name]);
		},

		recordEditForm(record, status) {
			status = status || 'toggle';
			this.$store.commit(this.nameSpace + '/showHideEditForm', {
				id: record.id,
				status: status
			});
		},

		selfUpdate(record) {

			var self = this,
			    data = {};

			data['class'] = self.modelName;
			data['method'] = 'update';
			data['transformers'] = self.modelTransformer;
			data['id'] = record.id;

			self.fields.forEach(function (field) {
				if (!field.editable) {
					return;
				}

				if (typeof field.filterEditingData != 'undefined') {
					data[field.name] = field.filterEditingData(record[field.name]);
				} else {
					data[field.name] = record[field.name];
				}
			});

			var args = {
				data: data,
				callback() {
					self.canSubmit = true;
					self.loading = false;
				}
			};
			if (!this.editFormValidation(self.fields, args.data)) {
				return false;
			}
			self.canSubmit = false;
			self.loading = true;

			this.updateRecord(args);
		},
		selfDelete(record) {
			var self = this;
			this.recordDelete([record.id], function () {
				var hasRecords = self.$store.state[self.nameSpace].records.length;
				var page = self.$route.params.current_page_number;
				if (!hasRecords && page > 1) {
					self.$router.push({
						params: {
							current_page_number: page - 1
						},
						query: self.$route.query
					});
				}

				if (!hasRecords && typeof self.pagination != 'undefined' && self.pagination.total_pages > 1) {
					self.getRecords();
				}
			});
		},
		deleteAll() {
			if (this.deleteAllStatus) {
				var deleted_id = [];

				this.$store.state[this.nameSpace].records.map(function (record) {
					deleted_id.push(record.id);
				});

				this.deletedId = deleted_id;
			} else {
				this.deletedId = [];
			}
		},

		actionCheckbox() {
			let records = this.$store.state[this.nameSpace].records;

			if (records.length == this.deletedId.length) {
				this.deleteAllStatus = true;
			} else {
				this.deleteAllStatus = false;
			}
		}
	}

});

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.alignright {\n\tfloat: right;\n}\n.hrm-spinner {\n\tmargin-right: 10px;\n\tmargin-top: 6px;\n}\n", ""]);

// exports


/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_revision_table_vue__ = __webpack_require__(556);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f3336b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_revision_table_vue__ = __webpack_require__(559);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(560)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_revision_table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f3336b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_revision_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/components/payroll/revision/revision-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f3336b4", Component.options)
  } else {
    hotAPI.reload("data-v-7f3336b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "hrm-list-table" } }, [
    _vm.isFetchRecord
      ? _c(
          "table",
          { staticClass: "wp-list-table widefat fixed striped pages" },
          [
            _c("thead", [
              _c("tr", [
                _vm.manageOrganization()
                  ? _c(
                      "td",
                      {
                        staticClass: "manage-column column-cb check-column",
                        attrs: { id: "cb" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.deleteAllStatus,
                              expression: "deleteAllStatus"
                            }
                          ],
                          attrs: { id: "cb-select-all-1", type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.deleteAllStatus)
                              ? _vm._i(_vm.deleteAllStatus, null) > -1
                              : _vm.deleteAllStatus
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.deleteAllStatus,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.deleteAllStatus = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.deleteAllStatus = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.deleteAllStatus = $$c
                                }
                              },
                              function($event) {
                                $event.preventDefault()
                                _vm.deleteAll()
                              }
                            ]
                          }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    "\n                    \tEmployee Name\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v("\n                    \tDate\n                    ")
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v("\n                    \tGross\n                    ")
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    "\n                    \tDeduction\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    "\n                    \tNet Pay\n                    "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.records, function(record, record_index) {
                  return !record.editMode
                    ? _c("tr", { key: record_index }, [
                        _vm.manageOrganization()
                          ? _c(
                              "th",
                              {
                                staticClass: "check-column",
                                attrs: { scope: "row" }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.deletedId,
                                      expression: "deletedId"
                                    }
                                  ],
                                  attrs: {
                                    id: "cb-select-7",
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    value: record.id,
                                    checked: Array.isArray(_vm.deletedId)
                                      ? _vm._i(_vm.deletedId, record.id) > -1
                                      : _vm.deletedId
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$a = _vm.deletedId,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = record.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.deletedId = $$a.concat([
                                                $$v
                                              ]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.deletedId = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.deletedId = $$c
                                        }
                                      },
                                      function($event) {
                                        _vm.actionCheckbox()
                                      }
                                    ]
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", [
                            _vm._v(_vm._s(record.employee.data.display_name))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row-actions" }, [
                            _c("span", { staticClass: "trash" }, [
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selfDelete(record)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                    \t" +
                              _vm._s(record.month) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                    \t" +
                              _vm._s(record.info.meta.salaryMeta.incomeTotal) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                    \t(-)" +
                              _vm._s(
                                record.info.meta.salaryMeta.deductionTotal
                              ) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                    \t" +
                              _vm._s(record.info.meta.salaryMeta.employeeGet) +
                              "\n                    "
                          )
                        ])
                      ])
                    : _vm._e()
                }),
                _vm._v(" "),
                !_vm.records.length
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: _vm.fields.length + 1 } }, [
                        _vm._v("\n\t\t\t\t\t\tNo result found!\n\t\t\t\t\t")
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f3336b4", esExports)
  }
}

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(557);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e43a6e5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f3336b4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./revision-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f3336b4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./revision-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);