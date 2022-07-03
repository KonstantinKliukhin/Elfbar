// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/bundle.js":[function(require,module,exports) {
!function () {
  "use strict";

  function e(e, n, l, i, r) {
    const a = r,
          t = a.querySelector(e),
          o = a.querySelector(n),
          c = a.querySelector(l),
          s = a.querySelectorAll(i).length,
          d = m(window.getComputedStyle(c).width),
          u = d * s;

    function m(e) {
      return +e.replace(/\D/g, "");
    }

    a.addEventListener("click", e => {
      t == e.target && function (e) {
        let n = e.style.transform;
        console.log(d), n && (n = m(n)), e.style = u == n + d ? "transform: translateX(0px);" : `transform: translateX(${-n - d}px)`;
      }(c), o == e.target && function (e) {
        let n = e.style.transform;
        n && (n = m(n)), e.style = 0 != n && n ? `transform: translateX(${-n + d}px);` : `transform: translateX(${-u + d}px);`;
      }(c);
    });
  }

  var n = e;
  window.addEventListener("DOMContentLoaded", () => {
    var l, i, r, a;
    (function (e, n) {
      const l = document.querySelector(e),
            i = document.querySelector(n),
            r = l.querySelectorAll(".nav__item");

      function a() {
        l.style = "transform: translateY(0);", document.body.removeAttribute("style"), setTimeout(() => {
          i.classList.remove("nav__burger-icon-active"), l.classList.remove("nav__burger-menu"), l.removeAttribute("style");
        }, 800);
      }

      i.addEventListener("click", () => {
        i.classList.contains("nav__burger-icon-active") ? a() : (i.classList.add("nav__burger-icon-active"), l.classList.add("nav__burger-menu"), document.body.style.overflow = "hidden");
      }), r.forEach(e => {
        e.addEventListener("click", () => {
          i.classList.contains("nav__burger-icon-active") && a();
        });
      });
    })("header", ".nav__burger-icon"), l = ".arrow-right", i = ".arrow-left", r = ".slider", a = ".slider__image", document.querySelectorAll(".products__card").forEach(n => {
      e(l, i, r, a, n);
    }), function (e, n, l, i) {
      const r = document.querySelectorAll(e),
            a = document.querySelector(n),
            t = document.body,
            o = document.querySelector(l),
            c = document.querySelector(i);

      function s() {
        a.classList.add("hidden"), t.removeAttribute("style");
      }

      r.forEach(e => {
        e.addEventListener("click", () => {
          !function (e) {
            switch (a.classList.remove("hidden"), t.style.overflow = "hidden", e) {
              case r[0]:
                c.innerHTML = "\n                    <li>Red Bull Strawberry</li>\n                    <li>Banana Ice</li>\n                    <li>Grape</li>\n                    <li>Watermelon</li>\n                    <li>Peach Mango Guava</li>\n                    <li>Strawberry Grape</li>\n                    <li>Pineapple Peach Mango</li>\n                    <li>Sour Apple</li>\n                    <li>Coffee Tobacco</li>\n                    <li>Banana Milk</li>\n                    <li>Blueberry</li>\n                    <li>Mango Peach Watermelon</li>\n                    <li>Red Bull Grapes</li>\n                    <li>Kiwi Passionfruit Guava</li>\n                    <li>Strawberry Banana</li>\n                    <li>Pink Lemonade</li>\n                    <li>Mango</li>\n                    <li>Red Bull Strawberry</li>\n                ";
                break;

              case r[1]:
                c.innerHTML = "\n                    <li>Banana Milk</li>\n                    <li>Blue Razz Lemonade</li>\n                    <li>Pink Lemonade</li>\n                    <li>Strawberry Ice Cream</li>\n                    <li>Peach Ice</li>\n                    <li>Sour Apple</li>\n                    <li>Coconut Melon</li>\n                    <li>Kiwi Passionfruit Guava</li>\n                    <li>Mango Peach Watermelon</li>\n                    <li>Strawberry Energy</li>\n                    ";
                break;

              case r[2]:
                c.innerHTML = "\n                    <li>Coffee Tobacco</li>\n                    <li>Pineapple Ice</li>\n                    <li>Banana Milk</li>\n                    <li>Sour Apple</li>\n                    <li>Strawberry Grape</li>\n                    <li>Peach Mango Guava</li>\n                    <li>Juicy Peaches</li>\n                    <li>Grape Energy</li>\n                    <li>Watermelon Lemon</li>\n                    <li>Mango Peach Watermelon</li>\n                    ";
                break;

              case r[3]:
                c.innerHTML = "\n                    <li>Strawberry Kiwi</li>\n                    <li>Banana</li>\n                    <li>Pineapple</li>\n                    <li>Candy</li>\n                    <li>Cherry Lemon Peach</li>\n                    <li>Blueberry</li>\n                    <li>Mango Peach Pineapple</li>\n                    <li>Melon Strawberry Apple</li>\n                    <li>Apple Juice</li>\n                    <li>Watermelon</li>\n                    <li>Mango</li>\n                    <li>Lychee Ice</li>\n                ";
            }
          }(e);
        });
      }), o.addEventListener("click", s), document.addEventListener("keydown", e => {
        "Escape" != e.code || a.classList.contains("hidden") || s();
      });
    }("button.card__btn", ".modal", ".modal__cancel", ".modal__list"), function (e, l, i, r) {
      const a = document.querySelector(".comments__slider");
      n(e, l, i, r, a);
    }(".arrow-right", ".arrow-left", ".slider", ".slider__image");
  });
}();
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51915" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/bundle.js"], null)
//# sourceMappingURL=/bundle.1715513c.js.map