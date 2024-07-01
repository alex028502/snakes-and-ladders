(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/workbox-core/_version.js
  var init_version = __esm({
    "node_modules/workbox-core/_version.js"() {
      "use strict";
      try {
        self["workbox:core:6.4.1"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-core/models/messages/messages.js
  var messages;
  var init_messages = __esm({
    "node_modules/workbox-core/models/messages/messages.js"() {
      init_version();
      messages = {
        "invalid-value": ({ paramName, validValueDescription, value }) => {
          if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
        },
        "not-an-array": ({ moduleName, className, funcName, paramName }) => {
          if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
        },
        "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          const classNameStr = className ? `${className}.` : "";
          return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
        },
        "incorrect-class": ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
          if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          const classNameStr = className ? `${className}.` : "";
          if (isReturnValueProblem) {
            return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
        },
        "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
          if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
        },
        "add-to-cache-list-unexpected-type": ({ entry }) => {
          return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
        },
        "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
          if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
          }
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
        },
        "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
          if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
          }
          return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
        },
        "invalid-cache-name": ({ cacheNameId, value }) => {
          if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
        },
        "unregister-route-but-not-found-with-method": ({ method }) => {
          if (!method) {
            throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
          }
          return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
        },
        "unregister-route-route-not-registered": () => {
          return `The route you're trying to unregister was not previously registered.`;
        },
        "queue-replay-failed": ({ name }) => {
          return `Replaying the background sync queue '${name}' failed.`;
        },
        "duplicate-queue-name": ({ name }) => {
          return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
        },
        "expired-test-without-max-age": ({ methodName, paramName }) => {
          return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
        },
        "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
        },
        "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
        },
        "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
          return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
        },
        "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
          return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
        },
        "invalid-string": ({ moduleName, funcName, paramName }) => {
          if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
        },
        "channel-name-required": () => {
          return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
        },
        "invalid-responses-are-same-args": () => {
          return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
        },
        "expire-custom-caches-only": () => {
          return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
        },
        "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "single-range-only": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "invalid-range-values": ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "no-range-header": () => {
          return `No Range header was found in the Request provided.`;
        },
        "range-not-satisfiable": ({ size, start, end }) => {
          return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
        },
        "attempt-to-cache-non-get-request": ({ url, method }) => {
          return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
        },
        "cache-put-with-no-response": ({ url }) => {
          return `There was an attempt to cache '${url}' but the response was not defined.`;
        },
        "no-response": ({ url, error }) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
            message += ` The underlying error is ${error}.`;
          }
          return message;
        },
        "bad-precaching-response": ({ url, status }) => {
          return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
        },
        "non-precached-url": ({ url }) => {
          return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
        },
        "add-to-cache-list-conflicting-integrities": ({ url }) => {
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
        },
        "missing-precache-entry": ({ cacheName, url }) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
        },
        "cross-origin-copy-response": ({ origin }) => {
          return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
        }
      };
    }
  });

  // node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction, messageGenerator;
  var init_messageGenerator = __esm({
    "node_modules/workbox-core/models/messages/messageGenerator.js"() {
      init_messages();
      init_version();
      generatorFunction = (code, details = {}) => {
        const message = messages[code];
        if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
        }
        return message(details);
      };
      messageGenerator = false ? fallback : generatorFunction;
    }
  });

  // node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError;
  var init_WorkboxError = __esm({
    "node_modules/workbox-core/_private/WorkboxError.js"() {
      init_messageGenerator();
      init_version();
      WorkboxError = class extends Error {
        constructor(errorCode, details) {
          const message = messageGenerator(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
        }
      };
    }
  });

  // node_modules/workbox-core/_private/assert.js
  var isArray, hasMethod, isType, isInstance, isOneOf, isArrayOfClass, finalAssertExports;
  var init_assert = __esm({
    "node_modules/workbox-core/_private/assert.js"() {
      init_WorkboxError();
      init_version();
      isArray = (value, details) => {
        if (!Array.isArray(value)) {
          throw new WorkboxError("not-an-array", details);
        }
      };
      hasMethod = (object, expectedMethod, details) => {
        const type = typeof object[expectedMethod];
        if (type !== "function") {
          details["expectedMethod"] = expectedMethod;
          throw new WorkboxError("missing-a-method", details);
        }
      };
      isType = (object, expectedType, details) => {
        if (typeof object !== expectedType) {
          details["expectedType"] = expectedType;
          throw new WorkboxError("incorrect-type", details);
        }
      };
      isInstance = (object, expectedClass, details) => {
        if (!(object instanceof expectedClass)) {
          details["expectedClassName"] = expectedClass.name;
          throw new WorkboxError("incorrect-class", details);
        }
      };
      isOneOf = (value, validValues, details) => {
        if (!validValues.includes(value)) {
          details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError("invalid-value", details);
        }
      };
      isArrayOfClass = (value, expectedClass, details) => {
        const error = new WorkboxError("not-array-of-class", details);
        if (!Array.isArray(value)) {
          throw error;
        }
        for (const item of value) {
          if (!(item instanceof expectedClass)) {
            throw error;
          }
        }
      };
      finalAssertExports = false ? null : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass
      };
    }
  });

  // node_modules/workbox-core/_private/logger.js
  var logger;
  var init_logger = __esm({
    "node_modules/workbox-core/_private/logger.js"() {
      init_version();
      logger = false ? null : (() => {
        if (!("__WB_DISABLE_DEV_LOGS" in self)) {
          self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
          debug: `#7f8c8d`,
          log: `#2ecc71`,
          warn: `#f39c12`,
          error: `#c0392b`,
          groupCollapsed: `#3498db`,
          groupEnd: null
        };
        const print = function(method, args) {
          if (self.__WB_DISABLE_DEV_LOGS) {
            return;
          }
          if (method === "groupCollapsed") {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              console[method](...args);
              return;
            }
          }
          const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`
          ];
          const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
          console[method](...logPrefix, ...args);
          if (method === "groupCollapsed") {
            inGroup = true;
          }
          if (method === "groupEnd") {
            inGroup = false;
          }
        };
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
          const method = key;
          api[method] = (...args) => {
            print(method, args);
          };
        }
        return api;
      })();
    }
  });

  // node_modules/workbox-routing/_version.js
  var init_version2 = __esm({
    "node_modules/workbox-routing/_version.js"() {
      "use strict";
      try {
        self["workbox:routing:6.4.1"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-routing/utils/constants.js
  var defaultMethod, validMethods;
  var init_constants = __esm({
    "node_modules/workbox-routing/utils/constants.js"() {
      init_version2();
      defaultMethod = "GET";
      validMethods = [
        "DELETE",
        "GET",
        "HEAD",
        "PATCH",
        "POST",
        "PUT"
      ];
    }
  });

  // node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler;
  var init_normalizeHandler = __esm({
    "node_modules/workbox-routing/utils/normalizeHandler.js"() {
      init_assert();
      init_version2();
      normalizeHandler = (handler) => {
        if (handler && typeof handler === "object") {
          if (true) {
            finalAssertExports.hasMethod(handler, "handle", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return handler;
        } else {
          if (true) {
            finalAssertExports.isType(handler, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return { handle: handler };
        }
      };
    }
  });

  // node_modules/workbox-routing/Route.js
  var Route;
  var init_Route = __esm({
    "node_modules/workbox-routing/Route.js"() {
      init_assert();
      init_constants();
      init_normalizeHandler();
      init_version2();
      Route = class {
        constructor(match, handler, method = defaultMethod) {
          if (true) {
            finalAssertExports.isType(match, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "match"
            });
            if (method) {
              finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
            }
          }
          this.handler = normalizeHandler(handler);
          this.match = match;
          this.method = method;
        }
        setCatchHandler(handler) {
          this.catchHandler = normalizeHandler(handler);
        }
      };
    }
  });

  // node_modules/workbox-routing/NavigationRoute.js
  var NavigationRoute;
  var init_NavigationRoute = __esm({
    "node_modules/workbox-routing/NavigationRoute.js"() {
      init_assert();
      init_logger();
      init_Route();
      init_version2();
      NavigationRoute = class extends Route {
        constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
          if (true) {
            finalAssertExports.isArrayOfClass(allowlist, RegExp, {
              moduleName: "workbox-routing",
              className: "NavigationRoute",
              funcName: "constructor",
              paramName: "options.allowlist"
            });
            finalAssertExports.isArrayOfClass(denylist, RegExp, {
              moduleName: "workbox-routing",
              className: "NavigationRoute",
              funcName: "constructor",
              paramName: "options.denylist"
            });
          }
          super((options) => this._match(options), handler);
          this._allowlist = allowlist;
          this._denylist = denylist;
        }
        _match({ url, request }) {
          if (request && request.mode !== "navigate") {
            return false;
          }
          const pathnameAndSearch = url.pathname + url.search;
          for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
              if (true) {
                logger.log(`The navigation route ${pathnameAndSearch} is not being used, since the URL matches this denylist pattern: ${regExp.toString()}`);
              }
              return false;
            }
          }
          if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (true) {
              logger.debug(`The navigation route ${pathnameAndSearch} is being used.`);
            }
            return true;
          }
          if (true) {
            logger.log(`The navigation route ${pathnameAndSearch} is not being used, since the URL being navigated to doesn't match the allowlist.`);
          }
          return false;
        }
      };
    }
  });

  // node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute;
  var init_RegExpRoute = __esm({
    "node_modules/workbox-routing/RegExpRoute.js"() {
      init_assert();
      init_logger();
      init_Route();
      init_version2();
      RegExpRoute = class extends Route {
        constructor(regExp, handler, method) {
          if (true) {
            finalAssertExports.isInstance(regExp, RegExp, {
              moduleName: "workbox-routing",
              className: "RegExpRoute",
              funcName: "constructor",
              paramName: "pattern"
            });
          }
          const match = ({ url }) => {
            const result = regExp.exec(url.href);
            if (!result) {
              return;
            }
            if (url.origin !== location.origin && result.index !== 0) {
              if (true) {
                logger.debug(`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
              }
              return;
            }
            return result.slice(1);
          };
          super(match, handler, method);
        }
      };
    }
  });

  // node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL;
  var init_getFriendlyURL = __esm({
    "node_modules/workbox-core/_private/getFriendlyURL.js"() {
      init_version();
      getFriendlyURL = (url) => {
        const urlObj = new URL(String(url), location.href);
        return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
      };
    }
  });

  // node_modules/workbox-routing/Router.js
  var Router;
  var init_Router = __esm({
    "node_modules/workbox-routing/Router.js"() {
      init_assert();
      init_getFriendlyURL();
      init_constants();
      init_logger();
      init_normalizeHandler();
      init_WorkboxError();
      init_version2();
      Router = class {
        constructor() {
          this._routes = /* @__PURE__ */ new Map();
          this._defaultHandlerMap = /* @__PURE__ */ new Map();
        }
        get routes() {
          return this._routes;
        }
        addFetchListener() {
          self.addEventListener("fetch", (event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
              event.respondWith(responsePromise);
            }
          });
        }
        addCacheListener() {
          self.addEventListener("message", (event) => {
            if (event.data && event.data.type === "CACHE_URLS") {
              const { payload } = event.data;
              if (true) {
                logger.debug(`Caching URLs from the window`, payload.urlsToCache);
              }
              const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                if (typeof entry === "string") {
                  entry = [entry];
                }
                const request = new Request(...entry);
                return this.handleRequest({ request, event });
              }));
              event.waitUntil(requestPromises);
              if (event.ports && event.ports[0]) {
                void requestPromises.then(() => event.ports[0].postMessage(true));
              }
            }
          });
        }
        handleRequest({ request, event }) {
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "handleRequest",
              paramName: "options.request"
            });
          }
          const url = new URL(request.url, location.href);
          if (!url.protocol.startsWith("http")) {
            if (true) {
              logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
          }
          const sameOrigin = url.origin === location.origin;
          const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url
          });
          let handler = route && route.handler;
          const debugMessages = [];
          if (true) {
            if (handler) {
              debugMessages.push([`Found a route to handle this request:`, route]);
              if (params) {
                debugMessages.push([
                  `Passing the following params to the route's handler:`,
                  params
                ]);
              }
            }
          }
          const method = request.method;
          if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
              debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
          }
          if (!handler) {
            if (true) {
              logger.debug(`No route found for: ${getFriendlyURL(url)}`);
            }
            return;
          }
          if (true) {
            logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
            debugMessages.forEach((msg) => {
              if (Array.isArray(msg)) {
                logger.log(...msg);
              } else {
                logger.log(msg);
              }
            });
            logger.groupEnd();
          }
          let responsePromise;
          try {
            responsePromise = handler.handle({ url, request, event, params });
          } catch (err) {
            responsePromise = Promise.reject(err);
          }
          const catchHandler = route && route.catchHandler;
          if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
              if (catchHandler) {
                if (true) {
                  logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
                  logger.error(`Error thrown by:`, route);
                  logger.error(err);
                  logger.groupEnd();
                }
                try {
                  return await catchHandler.handle({ url, request, event, params });
                } catch (catchErr) {
                  if (catchErr instanceof Error) {
                    err = catchErr;
                  }
                }
              }
              if (this._catchHandler) {
                if (true) {
                  logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
                  logger.error(`Error thrown by:`, route);
                  logger.error(err);
                  logger.groupEnd();
                }
                return this._catchHandler.handle({ url, request, event });
              }
              throw err;
            });
          }
          return responsePromise;
        }
        findMatchingRoute({ url, sameOrigin, request, event }) {
          const routes = this._routes.get(request.method) || [];
          for (const route of routes) {
            let params;
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
              if (true) {
                if (matchResult instanceof Promise) {
                  logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
                }
              }
              params = matchResult;
              if (Array.isArray(params) && params.length === 0) {
                params = void 0;
              } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
                params = void 0;
              } else if (typeof matchResult === "boolean") {
                params = void 0;
              }
              return { route, params };
            }
          }
          return {};
        }
        setDefaultHandler(handler, method = defaultMethod) {
          this._defaultHandlerMap.set(method, normalizeHandler(handler));
        }
        setCatchHandler(handler) {
          this._catchHandler = normalizeHandler(handler);
        }
        registerRoute(route) {
          if (true) {
            finalAssertExports.isType(route, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route, "match", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.isType(route.handler, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route.handler, "handle", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.handler"
            });
            finalAssertExports.isType(route.method, "string", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.method"
            });
          }
          if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
          }
          this._routes.get(route.method).push(route);
        }
        unregisterRoute(route) {
          if (!this._routes.has(route.method)) {
            throw new WorkboxError("unregister-route-but-not-found-with-method", {
              method: route.method
            });
          }
          const routeIndex = this._routes.get(route.method).indexOf(route);
          if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
          } else {
            throw new WorkboxError("unregister-route-route-not-registered");
          }
        }
      };
    }
  });

  // node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter, getOrCreateDefaultRouter;
  var init_getOrCreateDefaultRouter = __esm({
    "node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"() {
      init_Router();
      init_version2();
      getOrCreateDefaultRouter = () => {
        if (!defaultRouter) {
          defaultRouter = new Router();
          defaultRouter.addFetchListener();
          defaultRouter.addCacheListener();
        }
        return defaultRouter;
      };
    }
  });

  // node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }
  var init_registerRoute = __esm({
    "node_modules/workbox-routing/registerRoute.js"() {
      init_logger();
      init_WorkboxError();
      init_Route();
      init_RegExpRoute();
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/setCatchHandler.js
  function setCatchHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setCatchHandler(handler);
  }
  var init_setCatchHandler = __esm({
    "node_modules/workbox-routing/setCatchHandler.js"() {
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/setDefaultHandler.js
  function setDefaultHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setDefaultHandler(handler);
  }
  var init_setDefaultHandler = __esm({
    "node_modules/workbox-routing/setDefaultHandler.js"() {
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/index.js
  var workbox_routing_exports = {};
  __export(workbox_routing_exports, {
    NavigationRoute: () => NavigationRoute,
    RegExpRoute: () => RegExpRoute,
    Route: () => Route,
    Router: () => Router,
    registerRoute: () => registerRoute,
    setCatchHandler: () => setCatchHandler,
    setDefaultHandler: () => setDefaultHandler
  });
  var init_workbox_routing = __esm({
    "node_modules/workbox-routing/index.js"() {
      init_NavigationRoute();
      init_RegExpRoute();
      init_registerRoute();
      init_Route();
      init_Router();
      init_setCatchHandler();
      init_setDefaultHandler();
      init_version2();
    }
  });

  // node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails, _createCacheName, eachCacheNameDetail, cacheNames;
  var init_cacheNames = __esm({
    "node_modules/workbox-core/_private/cacheNames.js"() {
      init_version();
      _cacheNameDetails = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration !== "undefined" ? registration.scope : ""
      };
      _createCacheName = (cacheName) => {
        return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
      };
      eachCacheNameDetail = (fn) => {
        for (const key of Object.keys(_cacheNameDetails)) {
          fn(key);
        }
      };
      cacheNames = {
        updateDetails: (details) => {
          eachCacheNameDetail((key) => {
            if (typeof details[key] === "string") {
              _cacheNameDetails[key] = details[key];
            }
          });
        },
        getGoogleAnalyticsName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
        },
        getPrecacheName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.precache);
        },
        getPrefix: () => {
          return _cacheNameDetails.prefix;
        },
        getRuntimeName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.runtime);
        },
        getSuffix: () => {
          return _cacheNameDetails.suffix;
        }
      };
    }
  });

  // node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }
  var init_cacheMatchIgnoreParams = __esm({
    "node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"() {
      init_version();
    }
  });

  // node_modules/workbox-core/_private/Deferred.js
  var Deferred;
  var init_Deferred = __esm({
    "node_modules/workbox-core/_private/Deferred.js"() {
      init_version();
      Deferred = class {
        constructor() {
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
      };
    }
  });

  // node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks;
  var init_quotaErrorCallbacks = __esm({
    "node_modules/workbox-core/models/quotaErrorCallbacks.js"() {
      init_version();
      quotaErrorCallbacks = /* @__PURE__ */ new Set();
    }
  });

  // node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }
  var init_executeQuotaErrorCallbacks = __esm({
    "node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"() {
      init_logger();
      init_quotaErrorCallbacks();
      init_version();
    }
  });

  // node_modules/workbox-core/_private/timeout.js
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  var init_timeout = __esm({
    "node_modules/workbox-core/_private/timeout.js"() {
      init_version();
    }
  });

  // node_modules/workbox-strategies/_version.js
  var init_version3 = __esm({
    "node_modules/workbox-strategies/_version.js"() {
      "use strict";
      try {
        self["workbox:strategies:6.4.1"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-strategies/StrategyHandler.js
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler;
  var init_StrategyHandler = __esm({
    "node_modules/workbox-strategies/StrategyHandler.js"() {
      init_assert();
      init_cacheMatchIgnoreParams();
      init_Deferred();
      init_executeQuotaErrorCallbacks();
      init_getFriendlyURL();
      init_logger();
      init_timeout();
      init_WorkboxError();
      init_version3();
      StrategyHandler = class {
        constructor(strategy, options) {
          this._cacheKeys = {};
          if (true) {
            finalAssertExports.isInstance(options.event, ExtendableEvent, {
              moduleName: "workbox-strategies",
              className: "StrategyHandler",
              funcName: "constructor",
              paramName: "options.event"
            });
          }
          Object.assign(this, options);
          this.event = options.event;
          this._strategy = strategy;
          this._handlerDeferred = new Deferred();
          this._extendLifetimePromises = [];
          this._plugins = [...strategy.plugins];
          this._pluginStateMap = /* @__PURE__ */ new Map();
          for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
          }
          this.event.waitUntil(this._handlerDeferred.promise);
        }
        async fetch(input) {
          const { event } = this;
          let request = toRequest(input);
          if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
            const possiblePreloadResponse = await event.preloadResponse;
            if (possiblePreloadResponse) {
              if (true) {
                logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
              }
              return possiblePreloadResponse;
            }
          }
          const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
          try {
            for (const cb of this.iterateCallbacks("requestWillFetch")) {
              request = await cb({ request: request.clone(), event });
            }
          } catch (err) {
            if (err instanceof Error) {
              throw new WorkboxError("plugin-error-request-will-fetch", {
                thrownErrorMessage: err.message
              });
            }
          }
          const pluginFilteredRequest = request.clone();
          try {
            let fetchResponse;
            fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
            if (true) {
              logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
              fetchResponse = await callback({
                event,
                request: pluginFilteredRequest,
                response: fetchResponse
              });
            }
            return fetchResponse;
          } catch (error) {
            if (true) {
              logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
            }
            if (originalRequest) {
              await this.runCallbacks("fetchDidFail", {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone()
              });
            }
            throw error;
          }
        }
        async fetchAndCachePut(input) {
          const response = await this.fetch(input);
          const responseClone = response.clone();
          void this.waitUntil(this.cachePut(input, responseClone));
          return response;
        }
        async cacheMatch(key) {
          const request = toRequest(key);
          let cachedResponse;
          const { cacheName, matchOptions } = this._strategy;
          const effectiveRequest = await this.getCacheKey(request, "read");
          const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
          cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
          if (true) {
            if (cachedResponse) {
              logger.debug(`Found a cached response in '${cacheName}'.`);
            } else {
              logger.debug(`No cached response found in '${cacheName}'.`);
            }
          }
          for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
            cachedResponse = await callback({
              cacheName,
              matchOptions,
              cachedResponse,
              request: effectiveRequest,
              event: this.event
            }) || void 0;
          }
          return cachedResponse;
        }
        async cachePut(key, response) {
          const request = toRequest(key);
          await timeout(0);
          const effectiveRequest = await this.getCacheKey(request, "write");
          if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== "GET") {
              throw new WorkboxError("attempt-to-cache-non-get-request", {
                url: getFriendlyURL(effectiveRequest.url),
                method: effectiveRequest.method
              });
            }
            const vary = response.headers.get("Vary");
            if (vary) {
              logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
            }
          }
          if (!response) {
            if (true) {
              logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
            }
            throw new WorkboxError("cache-put-with-no-response", {
              url: getFriendlyURL(effectiveRequest.url)
            });
          }
          const responseToCache = await this._ensureResponseSafeToCache(response);
          if (!responseToCache) {
            if (true) {
              logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
            }
            return false;
          }
          const { cacheName, matchOptions } = this._strategy;
          const cache = await self.caches.open(cacheName);
          const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
          const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(cache, effectiveRequest.clone(), ["__WB_REVISION__"], matchOptions) : null;
          if (true) {
            logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
          }
          try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
          } catch (error) {
            if (error instanceof Error) {
              if (error.name === "QuotaExceededError") {
                await executeQuotaErrorCallbacks();
              }
              throw error;
            }
          }
          for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
            await callback({
              cacheName,
              oldResponse,
              newResponse: responseToCache.clone(),
              request: effectiveRequest,
              event: this.event
            });
          }
          return true;
        }
        async getCacheKey(request, mode) {
          const key = `${request.url} | ${mode}`;
          if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
              effectiveRequest = toRequest(await callback({
                mode,
                request: effectiveRequest,
                event: this.event,
                params: this.params
              }));
            }
            this._cacheKeys[key] = effectiveRequest;
          }
          return this._cacheKeys[key];
        }
        hasCallback(name) {
          for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
              return true;
            }
          }
          return false;
        }
        async runCallbacks(name, param) {
          for (const callback of this.iterateCallbacks(name)) {
            await callback(param);
          }
        }
        *iterateCallbacks(name) {
          for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === "function") {
              const state = this._pluginStateMap.get(plugin);
              const statefulCallback = (param) => {
                const statefulParam = Object.assign(Object.assign({}, param), { state });
                return plugin[name](statefulParam);
              };
              yield statefulCallback;
            }
          }
        }
        waitUntil(promise) {
          this._extendLifetimePromises.push(promise);
          return promise;
        }
        async doneWaiting() {
          let promise;
          while (promise = this._extendLifetimePromises.shift()) {
            await promise;
          }
        }
        destroy() {
          this._handlerDeferred.resolve(null);
        }
        async _ensureResponseSafeToCache(response) {
          let responseToCache = response;
          let pluginsUsed = false;
          for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
            responseToCache = await callback({
              request: this.request,
              response: responseToCache,
              event: this.event
            }) || void 0;
            pluginsUsed = true;
            if (!responseToCache) {
              break;
            }
          }
          if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
              responseToCache = void 0;
            }
            if (true) {
              if (responseToCache) {
                if (responseToCache.status !== 200) {
                  if (responseToCache.status === 0) {
                    logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
                  } else {
                    logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
                  }
                }
              }
            }
          }
          return responseToCache;
        }
      };
    }
  });

  // node_modules/workbox-strategies/Strategy.js
  var Strategy;
  var init_Strategy = __esm({
    "node_modules/workbox-strategies/Strategy.js"() {
      init_cacheNames();
      init_WorkboxError();
      init_logger();
      init_getFriendlyURL();
      init_StrategyHandler();
      init_version3();
      Strategy = class {
        constructor(options = {}) {
          this.cacheName = cacheNames.getRuntimeName(options.cacheName);
          this.plugins = options.plugins || [];
          this.fetchOptions = options.fetchOptions;
          this.matchOptions = options.matchOptions;
        }
        handle(options) {
          const [responseDone] = this.handleAll(options);
          return responseDone;
        }
        handleAll(options) {
          if (options instanceof FetchEvent) {
            options = {
              event: options,
              request: options.request
            };
          }
          const event = options.event;
          const request = typeof options.request === "string" ? new Request(options.request) : options.request;
          const params = "params" in options ? options.params : void 0;
          const handler = new StrategyHandler(this, { event, request, params });
          const responseDone = this._getResponse(handler, request, event);
          const handlerDone = this._awaitComplete(responseDone, handler, request, event);
          return [responseDone, handlerDone];
        }
        async _getResponse(handler, request, event) {
          await handler.runCallbacks("handlerWillStart", { event, request });
          let response = void 0;
          try {
            response = await this._handle(request, handler);
            if (!response || response.type === "error") {
              throw new WorkboxError("no-response", { url: request.url });
            }
          } catch (error) {
            if (error instanceof Error) {
              for (const callback of handler.iterateCallbacks("handlerDidError")) {
                response = await callback({ error, event, request });
                if (response) {
                  break;
                }
              }
            }
            if (!response) {
              throw error;
            } else if (true) {
              logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
            }
          }
          for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
            response = await callback({ event, request, response });
          }
          return response;
        }
        async _awaitComplete(responseDone, handler, request, event) {
          let response;
          let error;
          try {
            response = await responseDone;
          } catch (error2) {
          }
          try {
            await handler.runCallbacks("handlerDidRespond", {
              event,
              request,
              response
            });
            await handler.doneWaiting();
          } catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
              error = waitUntilError;
            }
          }
          await handler.runCallbacks("handlerDidComplete", {
            event,
            request,
            response,
            error
          });
          handler.destroy();
          if (error) {
            throw error;
          }
        }
      };
    }
  });

  // node_modules/workbox-strategies/utils/messages.js
  var messages2;
  var init_messages2 = __esm({
    "node_modules/workbox-strategies/utils/messages.js"() {
      init_logger();
      init_getFriendlyURL();
      init_version3();
      messages2 = {
        strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
        printFinalResponse: (response) => {
          if (response) {
            logger.groupCollapsed(`View the final response here.`);
            logger.log(response || "[No response returned]");
            logger.groupEnd();
          }
        }
      };
    }
  });

  // node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst;
  var init_CacheFirst = __esm({
    "node_modules/workbox-strategies/CacheFirst.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version3();
      CacheFirst = class extends Strategy {
        async _handle(request, handler) {
          const logs = [];
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "makeRequest",
              paramName: "request"
            });
          }
          let response = await handler.cacheMatch(request);
          let error = void 0;
          if (!response) {
            if (true) {
              logs.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
            }
            try {
              response = await handler.fetchAndCachePut(request);
            } catch (err) {
              if (err instanceof Error) {
                error = err;
              }
            }
            if (true) {
              if (response) {
                logs.push(`Got response from network.`);
              } else {
                logs.push(`Unable to get a response from the network.`);
              }
            }
          } else {
            if (true) {
              logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
            }
          }
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url, error });
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/CacheOnly.js
  var CacheOnly;
  var init_CacheOnly = __esm({
    "node_modules/workbox-strategies/CacheOnly.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version3();
      CacheOnly = class extends Strategy {
        async _handle(request, handler) {
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "makeRequest",
              paramName: "request"
            });
          }
          const response = await handler.cacheMatch(request);
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            if (response) {
              logger.log(`Found a cached response in the '${this.cacheName}' cache.`);
              messages2.printFinalResponse(response);
            } else {
              logger.log(`No response found in the '${this.cacheName}' cache.`);
            }
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url });
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin;
  var init_cacheOkAndOpaquePlugin = __esm({
    "node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js"() {
      init_version3();
      cacheOkAndOpaquePlugin = {
        cacheWillUpdate: async ({ response }) => {
          if (response.status === 200 || response.status === 0) {
            return response;
          }
          return null;
        }
      };
    }
  });

  // node_modules/workbox-strategies/NetworkFirst.js
  var NetworkFirst;
  var init_NetworkFirst = __esm({
    "node_modules/workbox-strategies/NetworkFirst.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_cacheOkAndOpaquePlugin();
      init_Strategy();
      init_messages2();
      init_version3();
      NetworkFirst = class extends Strategy {
        constructor(options = {}) {
          super(options);
          if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
            this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
          if (true) {
            if (this._networkTimeoutSeconds) {
              finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
                moduleName: "workbox-strategies",
                className: this.constructor.name,
                funcName: "constructor",
                paramName: "networkTimeoutSeconds"
              });
            }
          }
        }
        async _handle(request, handler) {
          const logs = [];
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "handle",
              paramName: "makeRequest"
            });
          }
          const promises = [];
          let timeoutId;
          if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
            timeoutId = id;
            promises.push(promise);
          }
          const networkPromise = this._getNetworkPromise({
            timeoutId,
            request,
            logs,
            handler
          });
          promises.push(networkPromise);
          const response = await handler.waitUntil((async () => {
            return await handler.waitUntil(Promise.race(promises)) || await networkPromise;
          })());
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url });
          }
          return response;
        }
        _getTimeoutPromise({ request, logs, handler }) {
          let timeoutId;
          const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
              if (true) {
                logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
              }
              resolve(await handler.cacheMatch(request));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
          });
          return {
            promise: timeoutPromise,
            id: timeoutId
          };
        }
        async _getNetworkPromise({ timeoutId, request, logs, handler }) {
          let error;
          let response;
          try {
            response = await handler.fetchAndCachePut(request);
          } catch (fetchError) {
            if (fetchError instanceof Error) {
              error = fetchError;
            }
          }
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (true) {
            if (response) {
              logs.push(`Got response from network.`);
            } else {
              logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
            }
          }
          if (error || !response) {
            response = await handler.cacheMatch(request);
            if (true) {
              if (response) {
                logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
              } else {
                logs.push(`No response found in the '${this.cacheName}' cache.`);
              }
            }
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/NetworkOnly.js
  var NetworkOnly;
  var init_NetworkOnly = __esm({
    "node_modules/workbox-strategies/NetworkOnly.js"() {
      init_assert();
      init_logger();
      init_timeout();
      init_WorkboxError();
      init_Strategy();
      init_messages2();
      init_version3();
      NetworkOnly = class extends Strategy {
        constructor(options = {}) {
          super(options);
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        }
        async _handle(request, handler) {
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "_handle",
              paramName: "request"
            });
          }
          let error = void 0;
          let response;
          try {
            const promises = [
              handler.fetch(request)
            ];
            if (this._networkTimeoutSeconds) {
              const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
              promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
              throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
            }
          } catch (err) {
            if (err instanceof Error) {
              error = err;
            }
          }
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            if (response) {
              logger.log(`Got response from network.`);
            } else {
              logger.log(`Unable to get a response from the network.`);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url, error });
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate;
  var init_StaleWhileRevalidate = __esm({
    "node_modules/workbox-strategies/StaleWhileRevalidate.js"() {
      init_assert();
      init_logger();
      init_WorkboxError();
      init_cacheOkAndOpaquePlugin();
      init_Strategy();
      init_messages2();
      init_version3();
      StaleWhileRevalidate = class extends Strategy {
        constructor(options = {}) {
          super(options);
          if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
            this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
        }
        async _handle(request, handler) {
          const logs = [];
          if (true) {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: this.constructor.name,
              funcName: "handle",
              paramName: "request"
            });
          }
          const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
          });
          let response = await handler.cacheMatch(request);
          let error;
          if (response) {
            if (true) {
              logs.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
            }
          } else {
            if (true) {
              logs.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
            }
            try {
              response = await fetchAndCachePromise;
            } catch (err) {
              if (err instanceof Error) {
                error = err;
              }
            }
          }
          if (true) {
            logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", { url: request.url, error });
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/index.js
  var workbox_strategies_exports = {};
  __export(workbox_strategies_exports, {
    CacheFirst: () => CacheFirst,
    CacheOnly: () => CacheOnly,
    NetworkFirst: () => NetworkFirst,
    NetworkOnly: () => NetworkOnly,
    StaleWhileRevalidate: () => StaleWhileRevalidate,
    Strategy: () => Strategy,
    StrategyHandler: () => StrategyHandler
  });
  var init_workbox_strategies = __esm({
    "node_modules/workbox-strategies/index.js"() {
      init_CacheFirst();
      init_CacheOnly();
      init_NetworkFirst();
      init_NetworkOnly();
      init_StaleWhileRevalidate();
      init_Strategy();
      init_StrategyHandler();
      init_version3();
    }
  });

  // src/sw.js
  var { registerRoute: registerRoute2 } = (init_workbox_routing(), __toCommonJS(workbox_routing_exports));
  var { NetworkFirst: NetworkFirst2 } = (init_workbox_strategies(), __toCommonJS(workbox_strategies_exports));
  registerRoute2(({ url }) => url.pathname.startsWith("/"), new NetworkFirst2());
})();
//# sourceMappingURL=service-worker.js.map