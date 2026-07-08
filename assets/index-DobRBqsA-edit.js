function jE(e, n) {
    for (var i = 0; i < n.length; i++) {
        const r = n[i];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const c = Object.getOwnPropertyDescriptor(r, l);
                    c && Object.defineProperty(e, l, c.get ? c : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const c = i(l);
        fetch(l.href, c)
    }
})();

function Eb(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pd = {
        exports: {}
    },
    eo = {};
var Dv;

function DE() {
    if (Dv) return eo;
    Dv = 1;
    var e = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.fragment");

    function i(r, l, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
            c = {};
            for (var d in l) d !== "key" && (c[d] = l[d])
        } else c = l;
        return l = c.ref, {
            $$typeof: e,
            type: r,
            key: f,
            ref: l !== void 0 ? l : null,
            props: c
        }
    }
    return eo.Fragment = n, eo.jsx = i, eo.jsxs = i, eo
}
var Mv;

function ME() {
    return Mv || (Mv = 1, pd.exports = DE()), pd.exports
}
var g = ME(),
    yd = {
        exports: {}
    },
    to = {},
    gd = {
        exports: {}
    },
    vd = {};
var kv;

function kE() {
    return kv || (kv = 1, (function(e) {
        function n(V, Z) {
            var K = V.length;
            V.push(Z);
            e: for (; 0 < K;) {
                var re = K - 1 >>> 1,
                    T = V[re];
                if (0 < l(T, Z)) V[re] = Z, V[K] = T, K = re;
                else break e
            }
        }

        function i(V) {
            return V.length === 0 ? null : V[0]
        }

        function r(V) {
            if (V.length === 0) return null;
            var Z = V[0],
                K = V.pop();
            if (K !== Z) {
                V[0] = K;
                e: for (var re = 0, T = V.length, X = T >>> 1; re < X;) {
                    var ae = 2 * (re + 1) - 1,
                        se = V[ae],
                        xe = ae + 1,
                        Ae = V[xe];
                    if (0 > l(se, K)) xe < T && 0 > l(Ae, se) ? (V[re] = Ae, V[xe] = K, re = xe) : (V[re] = se, V[ae] = K, re = ae);
                    else if (xe < T && 0 > l(Ae, K)) V[re] = Ae, V[xe] = K, re = xe;
                    else break e
                }
            }
            return Z
        }

        function l(V, Z) {
            var K = V.sortIndex - Z.sortIndex;
            return K !== 0 ? K : V.id - Z.id
        }
        if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            e.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date,
                d = f.now();
            e.unstable_now = function() {
                return f.now() - d
            }
        }
        var m = [],
            p = [],
            y = 1,
            x = null,
            b = 3,
            S = !1,
            E = !1,
            _ = !1,
            R = !1,
            D = typeof setTimeout == "function" ? setTimeout : null,
            j = typeof clearTimeout == "function" ? clearTimeout : null,
            M = typeof setImmediate < "u" ? setImmediate : null;

        function H(V) {
            for (var Z = i(p); Z !== null;) {
                if (Z.callback === null) r(p);
                else if (Z.startTime <= V) r(p), Z.sortIndex = Z.expirationTime, n(m, Z);
                else break;
                Z = i(p)
            }
        }

        function z(V) {
            if (_ = !1, H(V), !E)
                if (i(m) !== null) E = !0, I || (I = !0, ne());
                else {
                    var Z = i(p);
                    Z !== null && de(z, Z.startTime - V)
                }
        }
        var I = !1,
            W = -1,
            F = 5,
            le = -1;

        function ve() {
            return R ? !0 : !(e.unstable_now() - le < F)
        }

        function Re() {
            if (R = !1, I) {
                var V = e.unstable_now();
                le = V;
                var Z = !0;
                try {
                    e: {
                        E = !1,
                        _ && (_ = !1, j(W), W = -1),
                        S = !0;
                        var K = b;
                        try {
                            t: {
                                for (H(V), x = i(m); x !== null && !(x.expirationTime > V && ve());) {
                                    var re = x.callback;
                                    if (typeof re == "function") {
                                        x.callback = null, b = x.priorityLevel;
                                        var T = re(x.expirationTime <= V);
                                        if (V = e.unstable_now(), typeof T == "function") {
                                            x.callback = T, H(V), Z = !0;
                                            break t
                                        }
                                        x === i(m) && r(m), H(V)
                                    } else r(m);
                                    x = i(m)
                                }
                                if (x !== null) Z = !0;
                                else {
                                    var X = i(p);
                                    X !== null && de(z, X.startTime - V), Z = !1
                                }
                            }
                            break e
                        }
                        finally {
                            x = null, b = K, S = !1
                        }
                        Z = void 0
                    }
                }
                finally {
                    Z ? ne() : I = !1
                }
            }
        }
        var ne;
        if (typeof M == "function") ne = function() {
            M(Re)
        };
        else if (typeof MessageChannel < "u") {
            var fe = new MessageChannel,
                ee = fe.port2;
            fe.port1.onmessage = Re, ne = function() {
                ee.postMessage(null)
            }
        } else ne = function() {
            D(Re, 0)
        };

        function de(V, Z) {
            W = D(function() {
                V(e.unstable_now())
            }, Z)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(V) {
            V.callback = null
        }, e.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < V ? Math.floor(1e3 / V) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return b
        }, e.unstable_next = function(V) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                    var Z = 3;
                    break;
                default:
                    Z = b
            }
            var K = b;
            b = Z;
            try {
                return V()
            } finally {
                b = K
            }
        }, e.unstable_requestPaint = function() {
            R = !0
        }, e.unstable_runWithPriority = function(V, Z) {
            switch (V) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    V = 3
            }
            var K = b;
            b = V;
            try {
                return Z()
            } finally {
                b = K
            }
        }, e.unstable_scheduleCallback = function(V, Z, K) {
            var re = e.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? re + K : re) : K = re, V) {
                case 1:
                    var T = -1;
                    break;
                case 2:
                    T = 250;
                    break;
                case 5:
                    T = 1073741823;
                    break;
                case 4:
                    T = 1e4;
                    break;
                default:
                    T = 5e3
            }
            return T = K + T, V = {
                id: y++,
                callback: Z,
                priorityLevel: V,
                startTime: K,
                expirationTime: T,
                sortIndex: -1
            }, K > re ? (V.sortIndex = K, n(p, V), i(m) === null && V === i(p) && (_ ? (j(W), W = -1) : _ = !0, de(z, K - re))) : (V.sortIndex = T, n(m, V), E || S || (E = !0, I || (I = !0, ne()))), V
        }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(V) {
            var Z = b;
            return function() {
                var K = b;
                b = Z;
                try {
                    return V.apply(this, arguments)
                } finally {
                    b = K
                }
            }
        }
    })(vd)), vd
}
var Vv;

function VE() {
    return Vv || (Vv = 1, gd.exports = kE()), gd.exports
}
var xd = {
        exports: {}
    },
    De = {};
var zv;

function zE() {
    if (zv) return De;
    zv = 1;
    var e = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        c = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        x = Symbol.iterator;

    function b(T) {
        return T === null || typeof T != "object" ? null : (T = x && T[x] || T["@@iterator"], typeof T == "function" ? T : null)
    }
    var S = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        E = Object.assign,
        _ = {};

    function R(T, X, ae) {
        this.props = T, this.context = X, this.refs = _, this.updater = ae || S
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(T, X) {
        if (typeof T != "object" && typeof T != "function" && T != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, X, "setState")
    }, R.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    };

    function D() {}
    D.prototype = R.prototype;

    function j(T, X, ae) {
        this.props = T, this.context = X, this.refs = _, this.updater = ae || S
    }
    var M = j.prototype = new D;
    M.constructor = j, E(M, R.prototype), M.isPureReactComponent = !0;
    var H = Array.isArray,
        z = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        I = Object.prototype.hasOwnProperty;

    function W(T, X, ae, se, xe, Ae) {
        return ae = Ae.ref, {
            $$typeof: e,
            type: T,
            key: X,
            ref: ae !== void 0 ? ae : null,
            props: Ae
        }
    }

    function F(T, X) {
        return W(T.type, X, void 0, void 0, void 0, T.props)
    }

    function le(T) {
        return typeof T == "object" && T !== null && T.$$typeof === e
    }

    function ve(T) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(ae) {
            return X[ae]
        })
    }
    var Re = /\/+/g;

    function ne(T, X) {
        return typeof T == "object" && T !== null && T.key != null ? ve("" + T.key) : X.toString(36)
    }

    function fe() {}

    function ee(T) {
        switch (T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason;
            default:
                switch (typeof T.status == "string" ? T.then(fe, fe) : (T.status = "pending", T.then(function(X) {
                        T.status === "pending" && (T.status = "fulfilled", T.value = X)
                    }, function(X) {
                        T.status === "pending" && (T.status = "rejected", T.reason = X)
                    })), T.status) {
                    case "fulfilled":
                        return T.value;
                    case "rejected":
                        throw T.reason
                }
        }
        throw T
    }

    function de(T, X, ae, se, xe) {
        var Ae = typeof T;
        (Ae === "undefined" || Ae === "boolean") && (T = null);
        var he = !1;
        if (T === null) he = !0;
        else switch (Ae) {
            case "bigint":
            case "string":
            case "number":
                he = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                    case e:
                    case n:
                        he = !0;
                        break;
                    case y:
                        return he = T._init, de(he(T._payload), X, ae, se, xe)
                }
        }
        if (he) return xe = xe(T), he = se === "" ? "." + ne(T, 0) : se, H(xe) ? (ae = "", he != null && (ae = he.replace(Re, "$&/") + "/"), de(xe, X, ae, "", function(Ye) {
            return Ye
        })) : xe != null && (le(xe) && (xe = F(xe, ae + (xe.key == null || T && T.key === xe.key ? "" : ("" + xe.key).replace(Re, "$&/") + "/") + he)), X.push(xe)), 1;
        he = 0;
        var tt = se === "" ? "." : se + ":";
        if (H(T))
            for (var He = 0; He < T.length; He++) se = T[He], Ae = tt + ne(se, He), he += de(se, X, ae, Ae, xe);
        else if (He = b(T), typeof He == "function")
            for (T = He.call(T), He = 0; !(se = T.next()).done;) se = se.value, Ae = tt + ne(se, He++), he += de(se, X, ae, Ae, xe);
        else if (Ae === "object") {
            if (typeof T.then == "function") return de(ee(T), X, ae, se, xe);
            throw X = String(T), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return he
    }

    function V(T, X, ae) {
        if (T == null) return T;
        var se = [],
            xe = 0;
        return de(T, se, "", "", function(Ae) {
            return X.call(ae, Ae, xe++)
        }), se
    }

    function Z(T) {
        if (T._status === -1) {
            var X = T._result;
            X = X(), X.then(function(ae) {
                (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ae)
            }, function(ae) {
                (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ae)
            }), T._status === -1 && (T._status = 0, T._result = X)
        }
        if (T._status === 1) return T._result.default;
        throw T._result
    }
    var K = typeof reportError == "function" ? reportError : function(T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(X)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    };

    function re() {}
    return De.Children = {
        map: V,
        forEach: function(T, X, ae) {
            V(T, function() {
                X.apply(this, arguments)
            }, ae)
        },
        count: function(T) {
            var X = 0;
            return V(T, function() {
                X++
            }), X
        },
        toArray: function(T) {
            return V(T, function(X) {
                return X
            }) || []
        },
        only: function(T) {
            if (!le(T)) throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    }, De.Component = R, De.Fragment = i, De.Profiler = l, De.PureComponent = j, De.StrictMode = r, De.Suspense = m, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, De.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(T) {
            return z.H.useMemoCache(T)
        }
    }, De.cache = function(T) {
        return function() {
            return T.apply(null, arguments)
        }
    }, De.cloneElement = function(T, X, ae) {
        if (T == null) throw Error("The argument must be a React element, but you passed " + T + ".");
        var se = E({}, T.props),
            xe = T.key,
            Ae = void 0;
        if (X != null)
            for (he in X.ref !== void 0 && (Ae = void 0), X.key !== void 0 && (xe = "" + X.key), X) !I.call(X, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && X.ref === void 0 || (se[he] = X[he]);
        var he = arguments.length - 2;
        if (he === 1) se.children = ae;
        else if (1 < he) {
            for (var tt = Array(he), He = 0; He < he; He++) tt[He] = arguments[He + 2];
            se.children = tt
        }
        return W(T.type, xe, void 0, void 0, Ae, se)
    }, De.createContext = function(T) {
        return T = {
            $$typeof: f,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, T.Provider = T, T.Consumer = {
            $$typeof: c,
            _context: T
        }, T
    }, De.createElement = function(T, X, ae) {
        var se, xe = {},
            Ae = null;
        if (X != null)
            for (se in X.key !== void 0 && (Ae = "" + X.key), X) I.call(X, se) && se !== "key" && se !== "__self" && se !== "__source" && (xe[se] = X[se]);
        var he = arguments.length - 2;
        if (he === 1) xe.children = ae;
        else if (1 < he) {
            for (var tt = Array(he), He = 0; He < he; He++) tt[He] = arguments[He + 2];
            xe.children = tt
        }
        if (T && T.defaultProps)
            for (se in he = T.defaultProps, he) xe[se] === void 0 && (xe[se] = he[se]);
        return W(T, Ae, void 0, void 0, null, xe)
    }, De.createRef = function() {
        return {
            current: null
        }
    }, De.forwardRef = function(T) {
        return {
            $$typeof: d,
            render: T
        }
    }, De.isValidElement = le, De.lazy = function(T) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: Z
        }
    }, De.memo = function(T, X) {
        return {
            $$typeof: p,
            type: T,
            compare: X === void 0 ? null : X
        }
    }, De.startTransition = function(T) {
        var X = z.T,
            ae = {};
        z.T = ae;
        try {
            var se = T(),
                xe = z.S;
            xe !== null && xe(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(re, K)
        } catch (Ae) {
            K(Ae)
        } finally {
            z.T = X
        }
    }, De.unstable_useCacheRefresh = function() {
        return z.H.useCacheRefresh()
    }, De.use = function(T) {
        return z.H.use(T)
    }, De.useActionState = function(T, X, ae) {
        return z.H.useActionState(T, X, ae)
    }, De.useCallback = function(T, X) {
        return z.H.useCallback(T, X)
    }, De.useContext = function(T) {
        return z.H.useContext(T)
    }, De.useDebugValue = function() {}, De.useDeferredValue = function(T, X) {
        return z.H.useDeferredValue(T, X)
    }, De.useEffect = function(T, X, ae) {
        var se = z.H;
        if (typeof ae == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return se.useEffect(T, X)
    }, De.useId = function() {
        return z.H.useId()
    }, De.useImperativeHandle = function(T, X, ae) {
        return z.H.useImperativeHandle(T, X, ae)
    }, De.useInsertionEffect = function(T, X) {
        return z.H.useInsertionEffect(T, X)
    }, De.useLayoutEffect = function(T, X) {
        return z.H.useLayoutEffect(T, X)
    }, De.useMemo = function(T, X) {
        return z.H.useMemo(T, X)
    }, De.useOptimistic = function(T, X) {
        return z.H.useOptimistic(T, X)
    }, De.useReducer = function(T, X, ae) {
        return z.H.useReducer(T, X, ae)
    }, De.useRef = function(T) {
        return z.H.useRef(T)
    }, De.useState = function(T) {
        return z.H.useState(T)
    }, De.useSyncExternalStore = function(T, X, ae) {
        return z.H.useSyncExternalStore(T, X, ae)
    }, De.useTransition = function() {
        return z.H.useTransition()
    }, De.version = "19.1.0", De
}
var Lv;

function zc() {
    return Lv || (Lv = 1, xd.exports = zE()), xd.exports
}
var bd = {
        exports: {}
    },
    Pt = {};
var Bv;

function LE() {
    if (Bv) return Pt;
    Bv = 1;
    var e = zc();

    function n(m) {
        var p = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++) p += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function i() {}
    var r = {
            d: {
                f: i,
                r: function() {
                    throw Error(n(522))
                },
                D: i,
                C: i,
                L: i,
                m: i,
                X: i,
                S: i,
                M: i
            },
            p: 0,
            findDOMNode: null
        },
        l = Symbol.for("react.portal");

    function c(m, p, y) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: l,
            key: x == null ? null : "" + x,
            children: m,
            containerInfo: p,
            implementation: y
        }
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function d(m, p) {
        if (m === "font") return "";
        if (typeof p == "string") return p === "use-credentials" ? p : ""
    }
    return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pt.createPortal = function(m, p) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(n(299));
        return c(m, p, null, y)
    }, Pt.flushSync = function(m) {
        var p = f.T,
            y = r.p;
        try {
            if (f.T = null, r.p = 2, m) return m()
        } finally {
            f.T = p, r.p = y, r.d.f()
        }
    }, Pt.preconnect = function(m, p) {
        typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(m, p))
    }, Pt.prefetchDNS = function(m) {
        typeof m == "string" && r.d.D(m)
    }, Pt.preinit = function(m, p) {
        if (typeof m == "string" && p && typeof p.as == "string") {
            var y = p.as,
                x = d(y, p.crossOrigin),
                b = typeof p.integrity == "string" ? p.integrity : void 0,
                S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            y === "style" ? r.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: x,
                integrity: b,
                fetchPriority: S
            }) : y === "script" && r.d.X(m, {
                crossOrigin: x,
                integrity: b,
                fetchPriority: S,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }, Pt.preinitModule = function(m, p) {
        if (typeof m == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var y = d(p.as, p.crossOrigin);
                    r.d.M(m, {
                        crossOrigin: y,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else p == null && r.d.M(m)
    }, Pt.preload = function(m, p) {
        if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var y = p.as,
                x = d(y, p.crossOrigin);
            r.d.L(m, y, {
                crossOrigin: x,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }, Pt.preloadModule = function(m, p) {
        if (typeof m == "string")
            if (p) {
                var y = d(p.as, p.crossOrigin);
                r.d.m(m, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: y,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else r.d.m(m)
    }, Pt.requestFormReset = function(m) {
        r.d.r(m)
    }, Pt.unstable_batchedUpdates = function(m, p) {
        return m(p)
    }, Pt.useFormState = function(m, p, y) {
        return f.H.useFormState(m, p, y)
    }, Pt.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }, Pt.version = "19.1.0", Pt
}
var Pv;

function _b() {
    if (Pv) return bd.exports;
    Pv = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (n) {
            console.error(n)
        }
    }
    return e(), bd.exports = LE(), bd.exports
}
var Uv;

function BE() {
    if (Uv) return to;
    Uv = 1;
    var e = VE(),
        n = zc(),
        i = _b();

    function r(t) {
        var s = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            s += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) s += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function l(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function c(t) {
        var s = t,
            a = t;
        if (t.alternate)
            for (; s.return;) s = s.return;
        else {
            t = s;
            do s = t, (s.flags & 4098) !== 0 && (a = s.return), t = s.return; while (t)
        }
        return s.tag === 3 ? a : null
    }

    function f(t) {
        if (t.tag === 13) {
            var s = t.memoizedState;
            if (s === null && (t = t.alternate, t !== null && (s = t.memoizedState)), s !== null) return s.dehydrated
        }
        return null
    }

    function d(t) {
        if (c(t) !== t) throw Error(r(188))
    }

    function m(t) {
        var s = t.alternate;
        if (!s) {
            if (s = c(t), s === null) throw Error(r(188));
            return s !== t ? null : t
        }
        for (var a = t, o = s;;) {
            var u = a.return;
            if (u === null) break;
            var h = u.alternate;
            if (h === null) {
                if (o = u.return, o !== null) {
                    a = o;
                    continue
                }
                break
            }
            if (u.child === h.child) {
                for (h = u.child; h;) {
                    if (h === a) return d(u), t;
                    if (h === o) return d(u), s;
                    h = h.sibling
                }
                throw Error(r(188))
            }
            if (a.return !== o.return) a = u, o = h;
            else {
                for (var v = !1, w = u.child; w;) {
                    if (w === a) {
                        v = !0, a = u, o = h;
                        break
                    }
                    if (w === o) {
                        v = !0, o = u, a = h;
                        break
                    }
                    w = w.sibling
                }
                if (!v) {
                    for (w = h.child; w;) {
                        if (w === a) {
                            v = !0, a = h, o = u;
                            break
                        }
                        if (w === o) {
                            v = !0, o = h, a = u;
                            break
                        }
                        w = w.sibling
                    }
                    if (!v) throw Error(r(189))
                }
            }
            if (a.alternate !== o) throw Error(r(190))
        }
        if (a.tag !== 3) throw Error(r(188));
        return a.stateNode.current === a ? t : s
    }

    function p(t) {
        var s = t.tag;
        if (s === 5 || s === 26 || s === 27 || s === 6) return t;
        for (t = t.child; t !== null;) {
            if (s = p(t), s !== null) return s;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign,
        x = Symbol.for("react.element"),
        b = Symbol.for("react.transitional.element"),
        S = Symbol.for("react.portal"),
        E = Symbol.for("react.fragment"),
        _ = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        D = Symbol.for("react.provider"),
        j = Symbol.for("react.consumer"),
        M = Symbol.for("react.context"),
        H = Symbol.for("react.forward_ref"),
        z = Symbol.for("react.suspense"),
        I = Symbol.for("react.suspense_list"),
        W = Symbol.for("react.memo"),
        F = Symbol.for("react.lazy"),
        le = Symbol.for("react.activity"),
        ve = Symbol.for("react.memo_cache_sentinel"),
        Re = Symbol.iterator;

    function ne(t) {
        return t === null || typeof t != "object" ? null : (t = Re && t[Re] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var fe = Symbol.for("react.client.reference");

    function ee(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === fe ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case E:
                return "Fragment";
            case R:
                return "Profiler";
            case _:
                return "StrictMode";
            case z:
                return "Suspense";
            case I:
                return "SuspenseList";
            case le:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case S:
                return "Portal";
            case M:
                return (t.displayName || "Context") + ".Provider";
            case j:
                return (t._context.displayName || "Context") + ".Consumer";
            case H:
                var s = t.render;
                return t = t.displayName, t || (t = s.displayName || s.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case W:
                return s = t.displayName || null, s !== null ? s : ee(t.type) || "Memo";
            case F:
                s = t._payload, t = t._init;
                try {
                    return ee(t(s))
                } catch {}
        }
        return null
    }
    var de = Array.isArray,
        V = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Z = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        K = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        re = [],
        T = -1;

    function X(t) {
        return {
            current: t
        }
    }

    function ae(t) {
        0 > T || (t.current = re[T], re[T] = null, T--)
    }

    function se(t, s) {
        T++, re[T] = t.current, t.current = s
    }
    var xe = X(null),
        Ae = X(null),
        he = X(null),
        tt = X(null);

    function He(t, s) {
        switch (se(he, s), se(Ae, t), se(xe, null), s.nodeType) {
            case 9:
            case 11:
                t = (t = s.documentElement) && (t = t.namespaceURI) ? rv(t) : 0;
                break;
            default:
                if (t = s.tagName, s = s.namespaceURI) s = rv(s), t = ov(s, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        ae(xe), se(xe, t)
    }

    function Ye() {
        ae(xe), ae(Ae), ae(he)
    }

    function mn(t) {
        t.memoizedState !== null && se(tt, t);
        var s = xe.current,
            a = ov(s, t.type);
        s !== a && (se(Ae, t), se(xe, a))
    }

    function Ht(t) {
        Ae.current === t && (ae(xe), ae(Ae)), tt.current === t && (ae(tt), Qr._currentValue = K)
    }
    var pn = Object.prototype.hasOwnProperty,
        qt = e.unstable_scheduleCallback,
        Yn = e.unstable_cancelCallback,
        Vo = e.unstable_shouldYield,
        zo = e.unstable_requestPaint,
        yn = e.unstable_now,
        eu = e.unstable_getCurrentPriorityLevel,
        tu = e.unstable_ImmediatePriority,
        sr = e.unstable_UserBlockingPriority,
        N = e.unstable_NormalPriority,
        B = e.unstable_LowPriority,
        Y = e.unstable_IdlePriority,
        oe = e.log,
        ie = e.unstable_setDisableYieldValue,
        J = null,
        ue = null;

    function Ve(t) {
        if (typeof oe == "function" && ie(t), ue && typeof ue.setStrictMode == "function") try {
            ue.setStrictMode(J, t)
        } catch {}
    }
    var je = Math.clz32 ? Math.clz32 : Gn,
        jt = Math.log,
        as = Math.LN2;

    function Gn(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (jt(t) / as | 0) | 0
    }
    var Xi = 256,
        Rs = 4194304;

    function On(t) {
        var s = t & 42;
        if (s !== 0) return s;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function Ki(t, s, a) {
        var o = t.pendingLanes;
        if (o === 0) return 0;
        var u = 0,
            h = t.suspendedLanes,
            v = t.pingedLanes;
        t = t.warmLanes;
        var w = o & 134217727;
        return w !== 0 ? (o = w & ~h, o !== 0 ? u = On(o) : (v &= w, v !== 0 ? u = On(v) : a || (a = w & ~t, a !== 0 && (u = On(a))))) : (w = o & ~h, w !== 0 ? u = On(w) : v !== 0 ? u = On(v) : a || (a = o & ~t, a !== 0 && (u = On(a)))), u === 0 ? 0 : s !== 0 && s !== u && (s & h) === 0 && (h = u & -u, a = s & -s, h >= a || h === 32 && (a & 4194048) !== 0) ? s : u
    }

    function Ns(t, s) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & s) === 0
    }

    function nu(t, s) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return s + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return s + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function ir() {
        var t = Xi;
        return Xi <<= 1, (Xi & 4194048) === 0 && (Xi = 256), t
    }

    function Ym() {
        var t = Rs;
        return Rs <<= 1, (Rs & 62914560) === 0 && (Rs = 4194304), t
    }

    function su(t) {
        for (var s = [], a = 0; 31 > a; a++) s.push(t);
        return s
    }

    function ar(t, s) {
        t.pendingLanes |= s, s !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function xT(t, s, a, o, u, h) {
        var v = t.pendingLanes;
        t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
        var w = t.entanglements,
            C = t.expirationTimes,
            P = t.hiddenUpdates;
        for (a = v & ~a; 0 < a;) {
            var G = 31 - je(a),
                $ = 1 << G;
            w[G] = 0, C[G] = -1;
            var U = P[G];
            if (U !== null)
                for (P[G] = null, G = 0; G < U.length; G++) {
                    var q = U[G];
                    q !== null && (q.lane &= -536870913)
                }
            a &= ~$
        }
        o !== 0 && Gm(t, o, 0), h !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(v & ~s))
    }

    function Gm(t, s, a) {
        t.pendingLanes |= s, t.suspendedLanes &= ~s;
        var o = 31 - je(s);
        t.entangledLanes |= s, t.entanglements[o] = t.entanglements[o] | 1073741824 | a & 4194090
    }

    function Zm(t, s) {
        var a = t.entangledLanes |= s;
        for (t = t.entanglements; a;) {
            var o = 31 - je(a),
                u = 1 << o;
            u & s | t[o] & s && (t[o] |= s), a &= ~u
        }
    }

    function iu(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function au(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Xm() {
        var t = Z.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : _v(t.type))
    }

    function bT(t, s) {
        var a = Z.p;
        try {
            return Z.p = t, s()
        } finally {
            Z.p = a
        }
    }
    var Os = Math.random().toString(36).slice(2),
        Lt = "__reactFiber$" + Os,
        Qt = "__reactProps$" + Os,
        Qi = "__reactContainer$" + Os,
        ru = "__reactEvents$" + Os,
        wT = "__reactListeners$" + Os,
        ST = "__reactHandles$" + Os,
        Km = "__reactResources$" + Os,
        rr = "__reactMarker$" + Os;

    function ou(t) {
        delete t[Lt], delete t[Qt], delete t[ru], delete t[wT], delete t[ST]
    }

    function Ii(t) {
        var s = t[Lt];
        if (s) return s;
        for (var a = t.parentNode; a;) {
            if (s = a[Qi] || a[Lt]) {
                if (a = s.alternate, s.child !== null || a !== null && a.child !== null)
                    for (t = fv(t); t !== null;) {
                        if (a = t[Lt]) return a;
                        t = fv(t)
                    }
                return s
            }
            t = a, a = t.parentNode
        }
        return null
    }

    function $i(t) {
        if (t = t[Lt] || t[Qi]) {
            var s = t.tag;
            if (s === 5 || s === 6 || s === 13 || s === 26 || s === 27 || s === 3) return t
        }
        return null
    }

    function or(t) {
        var s = t.tag;
        if (s === 5 || s === 26 || s === 27 || s === 6) return t.stateNode;
        throw Error(r(33))
    }

    function Wi(t) {
        var s = t[Km];
        return s || (s = t[Km] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), s
    }

    function Ct(t) {
        t[rr] = !0
    }
    var Qm = new Set,
        Im = {};

    function xi(t, s) {
        Ji(t, s), Ji(t + "Capture", s)
    }

    function Ji(t, s) {
        for (Im[t] = s, t = 0; t < s.length; t++) Qm.add(s[t])
    }
    var TT = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        $m = {},
        Wm = {};

    function AT(t) {
        return pn.call(Wm, t) ? !0 : pn.call($m, t) ? !1 : TT.test(t) ? Wm[t] = !0 : ($m[t] = !0, !1)
    }

    function Lo(t, s, a) {
        if (AT(s))
            if (a === null) t.removeAttribute(s);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(s);
                        return;
                    case "boolean":
                        var o = s.toLowerCase().slice(0, 5);
                        if (o !== "data-" && o !== "aria-") {
                            t.removeAttribute(s);
                            return
                        }
                }
                t.setAttribute(s, "" + a)
            }
    }

    function Bo(t, s, a) {
        if (a === null) t.removeAttribute(s);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(s);
                    return
            }
            t.setAttribute(s, "" + a)
        }
    }

    function rs(t, s, a, o) {
        if (o === null) t.removeAttribute(a);
        else {
            switch (typeof o) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return
            }
            t.setAttributeNS(s, a, "" + o)
        }
    }
    var lu, Jm;

    function ea(t) {
        if (lu === void 0) try {
            throw Error()
        } catch (a) {
            var s = a.stack.trim().match(/\n( *(at )?)/);
            lu = s && s[1] || "", Jm = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + lu + t + Jm
    }
    var cu = !1;

    function uu(t, s) {
        if (!t || cu) return "";
        cu = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var o = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (s) {
                            var $ = function() {
                                throw Error()
                            };
                            if (Object.defineProperty($.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct($, [])
                                } catch (q) {
                                    var U = q
                                }
                                Reflect.construct(t, [], $)
                            } else {
                                try {
                                    $.call()
                                } catch (q) {
                                    U = q
                                }
                                t.call($.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (q) {
                                U = q
                            }($ = t()) && typeof $.catch == "function" && $.catch(function() {})
                        }
                    } catch (q) {
                        if (q && U && typeof q.stack == "string") return [q.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var h = o.DetermineComponentFrameRoot(),
                v = h[0],
                w = h[1];
            if (v && w) {
                var C = v.split(`
`),
                    P = w.split(`
`);
                for (u = o = 0; o < C.length && !C[o].includes("DetermineComponentFrameRoot");) o++;
                for (; u < P.length && !P[u].includes("DetermineComponentFrameRoot");) u++;
                if (o === C.length || u === P.length)
                    for (o = C.length - 1, u = P.length - 1; 1 <= o && 0 <= u && C[o] !== P[u];) u--;
                for (; 1 <= o && 0 <= u; o--, u--)
                    if (C[o] !== P[u]) {
                        if (o !== 1 || u !== 1)
                            do
                                if (o--, u--, 0 > u || C[o] !== P[u]) {
                                    var G = `
` + C[o].replace(" at new ", " at ");
                                    return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)), G
                                } while (1 <= o && 0 <= u);
                        break
                    }
            }
        } finally {
            cu = !1, Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? ea(a) : ""
    }

    function ET(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return ea(t.type);
            case 16:
                return ea("Lazy");
            case 13:
                return ea("Suspense");
            case 19:
                return ea("SuspenseList");
            case 0:
            case 15:
                return uu(t.type, !1);
            case 11:
                return uu(t.type.render, !1);
            case 1:
                return uu(t.type, !0);
            case 31:
                return ea("Activity");
            default:
                return ""
        }
    }

    function ep(t) {
        try {
            var s = "";
            do s += ET(t), t = t.return; while (t);
            return s
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function gn(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function tp(t) {
        var s = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }

    function _T(t) {
        var s = tp(t) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(t.constructor.prototype, s),
            o = "" + t[s];
        if (!t.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get,
                h = a.set;
            return Object.defineProperty(t, s, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(v) {
                    o = "" + v, h.call(this, v)
                }
            }), Object.defineProperty(t, s, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return o
                },
                setValue: function(v) {
                    o = "" + v
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[s]
                }
            }
        }
    }

    function Po(t) {
        t._valueTracker || (t._valueTracker = _T(t))
    }

    function np(t) {
        if (!t) return !1;
        var s = t._valueTracker;
        if (!s) return !0;
        var a = s.getValue(),
            o = "";
        return t && (o = tp(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== a ? (s.setValue(t), !0) : !1
    }

    function Uo(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var CT = /[\n"\\]/g;

    function vn(t) {
        return t.replace(CT, function(s) {
            return "\\" + s.charCodeAt(0).toString(16) + " "
        })
    }

    function fu(t, s, a, o, u, h, v, w) {
        t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), s != null ? v === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + gn(s)) : t.value !== "" + gn(s) && (t.value = "" + gn(s)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), s != null ? du(t, v, gn(s)) : a != null ? du(t, v, gn(a)) : o != null && t.removeAttribute("value"), u == null && h != null && (t.defaultChecked = !!h), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? t.name = "" + gn(w) : t.removeAttribute("name")
    }

    function sp(t, s, a, o, u, h, v, w) {
        if (h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.type = h), s != null || a != null) {
            if (!(h !== "submit" && h !== "reset" || s != null)) return;
            a = a != null ? "" + gn(a) : "", s = s != null ? "" + gn(s) : a, w || s === t.value || (t.value = s), t.defaultValue = s
        }
        o = o ?? u, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = w ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v)
    }

    function du(t, s, a) {
        s === "number" && Uo(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }

    function ta(t, s, a, o) {
        if (t = t.options, s) {
            s = {};
            for (var u = 0; u < a.length; u++) s["$" + a[u]] = !0;
            for (a = 0; a < t.length; a++) u = s.hasOwnProperty("$" + t[a].value), t[a].selected !== u && (t[a].selected = u), u && o && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + gn(a), s = null, u = 0; u < t.length; u++) {
                if (t[u].value === a) {
                    t[u].selected = !0, o && (t[u].defaultSelected = !0);
                    return
                }
                s !== null || t[u].disabled || (s = t[u])
            }
            s !== null && (s.selected = !0)
        }
    }

    function ip(t, s, a) {
        if (s != null && (s = "" + gn(s), s !== t.value && (t.value = s), a == null)) {
            t.defaultValue !== s && (t.defaultValue = s);
            return
        }
        t.defaultValue = a != null ? "" + gn(a) : ""
    }

    function ap(t, s, a, o) {
        if (s == null) {
            if (o != null) {
                if (a != null) throw Error(r(92));
                if (de(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                a = o
            }
            a == null && (a = ""), s = a
        }
        a = gn(s), t.defaultValue = a, o = t.textContent, o === a && o !== "" && o !== null && (t.value = o)
    }

    function na(t, s) {
        if (s) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = s;
                return
            }
        }
        t.textContent = s
    }
    var RT = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function rp(t, s, a) {
        var o = s.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? o ? t.setProperty(s, "") : s === "float" ? t.cssFloat = "" : t[s] = "" : o ? t.setProperty(s, a) : typeof a != "number" || a === 0 || RT.has(s) ? s === "float" ? t.cssFloat = a : t[s] = ("" + a).trim() : t[s] = a + "px"
    }

    function op(t, s, a) {
        if (s != null && typeof s != "object") throw Error(r(62));
        if (t = t.style, a != null) {
            for (var o in a) !a.hasOwnProperty(o) || s != null && s.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
            for (var u in s) o = s[u], s.hasOwnProperty(u) && a[u] !== o && rp(t, u, o)
        } else
            for (var h in s) s.hasOwnProperty(h) && rp(t, h, s[h])
    }

    function hu(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var NT = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        OT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Ho(t) {
        return OT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var mu = null;

    function pu(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var sa = null,
        ia = null;

    function lp(t) {
        var s = $i(t);
        if (s && (t = s.stateNode)) {
            var a = t[Qt] || null;
            e: switch (t = s.stateNode, s.type) {
                case "input":
                    if (fu(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), s = a.name, a.type === "radio" && s != null) {
                        for (a = t; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + vn("" + s) + '"][type="radio"]'), s = 0; s < a.length; s++) {
                            var o = a[s];
                            if (o !== t && o.form === t.form) {
                                var u = o[Qt] || null;
                                if (!u) throw Error(r(90));
                                fu(o, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (s = 0; s < a.length; s++) o = a[s], o.form === t.form && np(o)
                    }
                    break e;
                case "textarea":
                    ip(t, a.value, a.defaultValue);
                    break e;
                case "select":
                    s = a.value, s != null && ta(t, !!a.multiple, s, !1)
            }
        }
    }
    var yu = !1;

    function cp(t, s, a) {
        if (yu) return t(s, a);
        yu = !0;
        try {
            var o = t(s);
            return o
        } finally {
            if (yu = !1, (sa !== null || ia !== null) && (_l(), sa && (s = sa, t = ia, ia = sa = null, lp(s), t)))
                for (s = 0; s < t.length; s++) lp(t[s])
        }
    }

    function lr(t, s) {
        var a = t.stateNode;
        if (a === null) return null;
        var o = a[Qt] || null;
        if (o === null) return null;
        a = o[s];
        e: switch (s) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
                break e;
            default:
                t = !1
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(r(231, s, typeof a));
        return a
    }
    var os = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        gu = !1;
    if (os) try {
        var cr = {};
        Object.defineProperty(cr, "passive", {
            get: function() {
                gu = !0
            }
        }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr)
    } catch {
        gu = !1
    }
    var js = null,
        vu = null,
        qo = null;

    function up() {
        if (qo) return qo;
        var t, s = vu,
            a = s.length,
            o, u = "value" in js ? js.value : js.textContent,
            h = u.length;
        for (t = 0; t < a && s[t] === u[t]; t++);
        var v = a - t;
        for (o = 1; o <= v && s[a - o] === u[h - o]; o++);
        return qo = u.slice(t, 1 < o ? 1 - o : void 0)
    }

    function Fo(t) {
        var s = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && s === 13 && (t = 13)) : t = s, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Yo() {
        return !0
    }

    function fp() {
        return !1
    }

    function It(t) {
        function s(a, o, u, h, v) {
            this._reactName = a, this._targetInst = u, this.type = o, this.nativeEvent = h, this.target = v, this.currentTarget = null;
            for (var w in t) t.hasOwnProperty(w) && (a = t[w], this[w] = a ? a(h) : h[w]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Yo : fp, this.isPropagationStopped = fp, this
        }
        return y(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Yo)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Yo)
            },
            persist: function() {},
            isPersistent: Yo
        }), s
    }
    var bi = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Go = It(bi),
        ur = y({}, bi, {
            view: 0,
            detail: 0
        }),
        jT = It(ur),
        xu, bu, fr, Zo = y({}, ur, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Su,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== fr && (fr && t.type === "mousemove" ? (xu = t.screenX - fr.screenX, bu = t.screenY - fr.screenY) : bu = xu = 0, fr = t), xu)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : bu
            }
        }),
        dp = It(Zo),
        DT = y({}, Zo, {
            dataTransfer: 0
        }),
        MT = It(DT),
        kT = y({}, ur, {
            relatedTarget: 0
        }),
        wu = It(kT),
        VT = y({}, bi, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        zT = It(VT),
        LT = y({}, bi, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        BT = It(LT),
        PT = y({}, bi, {
            data: 0
        }),
        hp = It(PT),
        UT = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        HT = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        qT = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function FT(t) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(t) : (t = qT[t]) ? !!s[t] : !1
    }

    function Su() {
        return FT
    }
    var YT = y({}, ur, {
            key: function(t) {
                if (t.key) {
                    var s = UT[t.key] || t.key;
                    if (s !== "Unidentified") return s
                }
                return t.type === "keypress" ? (t = Fo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? HT[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Su,
            charCode: function(t) {
                return t.type === "keypress" ? Fo(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? Fo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        GT = It(YT),
        ZT = y({}, Zo, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        mp = It(ZT),
        XT = y({}, ur, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Su
        }),
        KT = It(XT),
        QT = y({}, bi, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        IT = It(QT),
        $T = y({}, Zo, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        WT = It($T),
        JT = y({}, bi, {
            newState: 0,
            oldState: 0
        }),
        eA = It(JT),
        tA = [9, 13, 27, 32],
        Tu = os && "CompositionEvent" in window,
        dr = null;
    os && "documentMode" in document && (dr = document.documentMode);
    var nA = os && "TextEvent" in window && !dr,
        pp = os && (!Tu || dr && 8 < dr && 11 >= dr),
        yp = " ",
        gp = !1;

    function vp(t, s) {
        switch (t) {
            case "keyup":
                return tA.indexOf(s.keyCode) !== -1;
            case "keydown":
                return s.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function xp(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var aa = !1;

    function sA(t, s) {
        switch (t) {
            case "compositionend":
                return xp(s);
            case "keypress":
                return s.which !== 32 ? null : (gp = !0, yp);
            case "textInput":
                return t = s.data, t === yp && gp ? null : t;
            default:
                return null
        }
    }

    function iA(t, s) {
        if (aa) return t === "compositionend" || !Tu && vp(t, s) ? (t = up(), qo = vu = js = null, aa = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                    if (s.char && 1 < s.char.length) return s.char;
                    if (s.which) return String.fromCharCode(s.which)
                }
                return null;
            case "compositionend":
                return pp && s.locale !== "ko" ? null : s.data;
            default:
                return null
        }
    }
    var aA = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function bp(t) {
        var s = t && t.nodeName && t.nodeName.toLowerCase();
        return s === "input" ? !!aA[t.type] : s === "textarea"
    }

    function wp(t, s, a, o) {
        sa ? ia ? ia.push(o) : ia = [o] : sa = o, s = Dl(s, "onChange"), 0 < s.length && (a = new Go("onChange", "change", null, a, o), t.push({
            event: a,
            listeners: s
        }))
    }
    var hr = null,
        mr = null;

    function rA(t) {
        tv(t, 0)
    }

    function Xo(t) {
        var s = or(t);
        if (np(s)) return t
    }

    function Sp(t, s) {
        if (t === "change") return s
    }
    var Tp = !1;
    if (os) {
        var Au;
        if (os) {
            var Eu = "oninput" in document;
            if (!Eu) {
                var Ap = document.createElement("div");
                Ap.setAttribute("oninput", "return;"), Eu = typeof Ap.oninput == "function"
            }
            Au = Eu
        } else Au = !1;
        Tp = Au && (!document.documentMode || 9 < document.documentMode)
    }

    function Ep() {
        hr && (hr.detachEvent("onpropertychange", _p), mr = hr = null)
    }

    function _p(t) {
        if (t.propertyName === "value" && Xo(mr)) {
            var s = [];
            wp(s, mr, t, pu(t)), cp(rA, s)
        }
    }

    function oA(t, s, a) {
        t === "focusin" ? (Ep(), hr = s, mr = a, hr.attachEvent("onpropertychange", _p)) : t === "focusout" && Ep()
    }

    function lA(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Xo(mr)
    }

    function cA(t, s) {
        if (t === "click") return Xo(s)
    }

    function uA(t, s) {
        if (t === "input" || t === "change") return Xo(s)
    }

    function fA(t, s) {
        return t === s && (t !== 0 || 1 / t === 1 / s) || t !== t && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : fA;

    function pr(t, s) {
        if (nn(t, s)) return !0;
        if (typeof t != "object" || t === null || typeof s != "object" || s === null) return !1;
        var a = Object.keys(t),
            o = Object.keys(s);
        if (a.length !== o.length) return !1;
        for (o = 0; o < a.length; o++) {
            var u = a[o];
            if (!pn.call(s, u) || !nn(t[u], s[u])) return !1
        }
        return !0
    }

    function Cp(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function Rp(t, s) {
        var a = Cp(t);
        t = 0;
        for (var o; a;) {
            if (a.nodeType === 3) {
                if (o = t + a.textContent.length, t <= s && o >= s) return {
                    node: a,
                    offset: s - t
                };
                t = o
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Cp(a)
        }
    }

    function Np(t, s) {
        return t && s ? t === s ? !0 : t && t.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Np(t, s.parentNode) : "contains" in t ? t.contains(s) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(s) & 16) : !1 : !1
    }

    function Op(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var s = Uo(t.document); s instanceof t.HTMLIFrameElement;) {
            try {
                var a = typeof s.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) t = s.contentWindow;
            else break;
            s = Uo(t.document)
        }
        return s
    }

    function _u(t) {
        var s = t && t.nodeName && t.nodeName.toLowerCase();
        return s && (s === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || s === "textarea" || t.contentEditable === "true")
    }
    var dA = os && "documentMode" in document && 11 >= document.documentMode,
        ra = null,
        Cu = null,
        yr = null,
        Ru = !1;

    function jp(t, s, a) {
        var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Ru || ra == null || ra !== Uo(o) || (o = ra, "selectionStart" in o && _u(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }), yr && pr(yr, o) || (yr = o, o = Dl(Cu, "onSelect"), 0 < o.length && (s = new Go("onSelect", "select", null, s, a), t.push({
            event: s,
            listeners: o
        }), s.target = ra)))
    }

    function wi(t, s) {
        var a = {};
        return a[t.toLowerCase()] = s.toLowerCase(), a["Webkit" + t] = "webkit" + s, a["Moz" + t] = "moz" + s, a
    }
    var oa = {
            animationend: wi("Animation", "AnimationEnd"),
            animationiteration: wi("Animation", "AnimationIteration"),
            animationstart: wi("Animation", "AnimationStart"),
            transitionrun: wi("Transition", "TransitionRun"),
            transitionstart: wi("Transition", "TransitionStart"),
            transitioncancel: wi("Transition", "TransitionCancel"),
            transitionend: wi("Transition", "TransitionEnd")
        },
        Nu = {},
        Dp = {};
    os && (Dp = document.createElement("div").style, "AnimationEvent" in window || (delete oa.animationend.animation, delete oa.animationiteration.animation, delete oa.animationstart.animation), "TransitionEvent" in window || delete oa.transitionend.transition);

    function Si(t) {
        if (Nu[t]) return Nu[t];
        if (!oa[t]) return t;
        var s = oa[t],
            a;
        for (a in s)
            if (s.hasOwnProperty(a) && a in Dp) return Nu[t] = s[a];
        return t
    }
    var Mp = Si("animationend"),
        kp = Si("animationiteration"),
        Vp = Si("animationstart"),
        hA = Si("transitionrun"),
        mA = Si("transitionstart"),
        pA = Si("transitioncancel"),
        zp = Si("transitionend"),
        Lp = new Map,
        Ou = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ou.push("scrollEnd");

    function jn(t, s) {
        Lp.set(t, s), xi(s, [t])
    }
    var Bp = new WeakMap;

    function xn(t, s) {
        if (typeof t == "object" && t !== null) {
            var a = Bp.get(t);
            return a !== void 0 ? a : (s = {
                value: t,
                source: s,
                stack: ep(s)
            }, Bp.set(t, s), s)
        }
        return {
            value: t,
            source: s,
            stack: ep(s)
        }
    }
    var bn = [],
        la = 0,
        ju = 0;

    function Ko() {
        for (var t = la, s = ju = la = 0; s < t;) {
            var a = bn[s];
            bn[s++] = null;
            var o = bn[s];
            bn[s++] = null;
            var u = bn[s];
            bn[s++] = null;
            var h = bn[s];
            if (bn[s++] = null, o !== null && u !== null) {
                var v = o.pending;
                v === null ? u.next = u : (u.next = v.next, v.next = u), o.pending = u
            }
            h !== 0 && Pp(a, u, h)
        }
    }

    function Qo(t, s, a, o) {
        bn[la++] = t, bn[la++] = s, bn[la++] = a, bn[la++] = o, ju |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o)
    }

    function Du(t, s, a, o) {
        return Qo(t, s, a, o), Io(t)
    }

    function ca(t, s) {
        return Qo(t, null, null, s), Io(t)
    }

    function Pp(t, s, a) {
        t.lanes |= a;
        var o = t.alternate;
        o !== null && (o.lanes |= a);
        for (var u = !1, h = t.return; h !== null;) h.childLanes |= a, o = h.alternate, o !== null && (o.childLanes |= a), h.tag === 22 && (t = h.stateNode, t === null || t._visibility & 1 || (u = !0)), t = h, h = h.return;
        return t.tag === 3 ? (h = t.stateNode, u && s !== null && (u = 31 - je(a), t = h.hiddenUpdates, o = t[u], o === null ? t[u] = [s] : o.push(s), s.lane = a | 536870912), h) : null
    }

    function Io(t) {
        if (50 < Hr) throw Hr = 0, Pf = null, Error(r(185));
        for (var s = t.return; s !== null;) t = s, s = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var ua = {};

    function yA(t, s, a, o) {
        this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function sn(t, s, a, o) {
        return new yA(t, s, a, o)
    }

    function Mu(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function ls(t, s) {
        var a = t.alternate;
        return a === null ? (a = sn(t.tag, s, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = s, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, s = t.dependencies, a.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a
    }

    function Up(t, s) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0, t.lanes = s, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, s = a.dependencies, t.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }), t
    }

    function $o(t, s, a, o, u, h) {
        var v = 0;
        if (o = t, typeof t == "function") Mu(t) && (v = 1);
        else if (typeof t == "string") v = vE(t, a, xe.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else e: switch (t) {
            case le:
                return t = sn(31, a, s, u), t.elementType = le, t.lanes = h, t;
            case E:
                return Ti(a.children, u, h, s);
            case _:
                v = 8, u |= 24;
                break;
            case R:
                return t = sn(12, a, s, u | 2), t.elementType = R, t.lanes = h, t;
            case z:
                return t = sn(13, a, s, u), t.elementType = z, t.lanes = h, t;
            case I:
                return t = sn(19, a, s, u), t.elementType = I, t.lanes = h, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case D:
                    case M:
                        v = 10;
                        break e;
                    case j:
                        v = 9;
                        break e;
                    case H:
                        v = 11;
                        break e;
                    case W:
                        v = 14;
                        break e;
                    case F:
                        v = 16, o = null;
                        break e
                }
                v = 29, a = Error(r(130, t === null ? "null" : typeof t, "")), o = null
        }
        return s = sn(v, a, s, u), s.elementType = t, s.type = o, s.lanes = h, s
    }

    function Ti(t, s, a, o) {
        return t = sn(7, t, o, s), t.lanes = a, t
    }

    function ku(t, s, a) {
        return t = sn(6, t, null, s), t.lanes = a, t
    }

    function Vu(t, s, a) {
        return s = sn(4, t.children !== null ? t.children : [], t.key, s), s.lanes = a, s.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, s
    }
    var fa = [],
        da = 0,
        Wo = null,
        Jo = 0,
        wn = [],
        Sn = 0,
        Ai = null,
        cs = 1,
        us = "";

    function Ei(t, s) {
        fa[da++] = Jo, fa[da++] = Wo, Wo = t, Jo = s
    }

    function Hp(t, s, a) {
        wn[Sn++] = cs, wn[Sn++] = us, wn[Sn++] = Ai, Ai = t;
        var o = cs;
        t = us;
        var u = 32 - je(o) - 1;
        o &= ~(1 << u), a += 1;
        var h = 32 - je(s) + u;
        if (30 < h) {
            var v = u - u % 5;
            h = (o & (1 << v) - 1).toString(32), o >>= v, u -= v, cs = 1 << 32 - je(s) + u | a << u | o, us = h + t
        } else cs = 1 << h | a << u | o, us = t
    }

    function zu(t) {
        t.return !== null && (Ei(t, 1), Hp(t, 1, 0))
    }

    function Lu(t) {
        for (; t === Wo;) Wo = fa[--da], fa[da] = null, Jo = fa[--da], fa[da] = null;
        for (; t === Ai;) Ai = wn[--Sn], wn[Sn] = null, us = wn[--Sn], wn[Sn] = null, cs = wn[--Sn], wn[Sn] = null
    }
    var Ft = null,
        ct = null,
        Xe = !1,
        _i = null,
        Zn = !1,
        Bu = Error(r(519));

    function Ci(t) {
        var s = Error(r(418, ""));
        throw xr(xn(s, t)), Bu
    }

    function qp(t) {
        var s = t.stateNode,
            a = t.type,
            o = t.memoizedProps;
        switch (s[Lt] = t, s[Qt] = o, a) {
            case "dialog":
                Pe("cancel", s), Pe("close", s);
                break;
            case "iframe":
            case "object":
            case "embed":
                Pe("load", s);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Fr.length; a++) Pe(Fr[a], s);
                break;
            case "source":
                Pe("error", s);
                break;
            case "img":
            case "image":
            case "link":
                Pe("error", s), Pe("load", s);
                break;
            case "details":
                Pe("toggle", s);
                break;
            case "input":
                Pe("invalid", s), sp(s, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0), Po(s);
                break;
            case "select":
                Pe("invalid", s);
                break;
            case "textarea":
                Pe("invalid", s), ap(s, o.value, o.defaultValue, o.children), Po(s)
        }
        a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || s.textContent === "" + a || o.suppressHydrationWarning === !0 || av(s.textContent, a) ? (o.popover != null && (Pe("beforetoggle", s), Pe("toggle", s)), o.onScroll != null && Pe("scroll", s), o.onScrollEnd != null && Pe("scrollend", s), o.onClick != null && (s.onclick = Ml), s = !0) : s = !1, s || Ci(t)
    }

    function Fp(t) {
        for (Ft = t.return; Ft;) switch (Ft.tag) {
            case 5:
            case 13:
                Zn = !1;
                return;
            case 27:
            case 3:
                Zn = !0;
                return;
            default:
                Ft = Ft.return
        }
    }

    function gr(t) {
        if (t !== Ft) return !1;
        if (!Xe) return Fp(t), Xe = !0, !1;
        var s = t.tag,
            a;
        if ((a = s !== 3 && s !== 27) && ((a = s === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || td(t.type, t.memoizedProps)), a = !a), a && ct && Ci(t), Fp(t), s === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            e: {
                for (t = t.nextSibling, s = 0; t;) {
                    if (t.nodeType === 8)
                        if (a = t.data, a === "/$") {
                            if (s === 0) {
                                ct = Mn(t.nextSibling);
                                break e
                            }
                            s--
                        } else a !== "$" && a !== "$!" && a !== "$?" || s++;
                    t = t.nextSibling
                }
                ct = null
            }
        } else s === 27 ? (s = ct, Xs(t.type) ? (t = ad, ad = null, ct = t) : ct = s) : ct = Ft ? Mn(t.stateNode.nextSibling) : null;
        return !0
    }

    function vr() {
        ct = Ft = null, Xe = !1
    }

    function Yp() {
        var t = _i;
        return t !== null && (Jt === null ? Jt = t : Jt.push.apply(Jt, t), _i = null), t
    }

    function xr(t) {
        _i === null ? _i = [t] : _i.push(t)
    }
    var Pu = X(null),
        Ri = null,
        fs = null;

    function Ds(t, s, a) {
        se(Pu, s._currentValue), s._currentValue = a
    }

    function ds(t) {
        t._currentValue = Pu.current, ae(Pu)
    }

    function Uu(t, s, a) {
        for (; t !== null;) {
            var o = t.alternate;
            if ((t.childLanes & s) !== s ? (t.childLanes |= s, o !== null && (o.childLanes |= s)) : o !== null && (o.childLanes & s) !== s && (o.childLanes |= s), t === a) break;
            t = t.return
        }
    }

    function Hu(t, s, a, o) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null;) {
            var h = u.dependencies;
            if (h !== null) {
                var v = u.child;
                h = h.firstContext;
                e: for (; h !== null;) {
                    var w = h;
                    h = u;
                    for (var C = 0; C < s.length; C++)
                        if (w.context === s[C]) {
                            h.lanes |= a, w = h.alternate, w !== null && (w.lanes |= a), Uu(h.return, a, t), o || (v = null);
                            break e
                        } h = w.next
                }
            } else if (u.tag === 18) {
                if (v = u.return, v === null) throw Error(r(341));
                v.lanes |= a, h = v.alternate, h !== null && (h.lanes |= a), Uu(v, a, t), v = null
            } else v = u.child;
            if (v !== null) v.return = u;
            else
                for (v = u; v !== null;) {
                    if (v === t) {
                        v = null;
                        break
                    }
                    if (u = v.sibling, u !== null) {
                        u.return = v.return, v = u;
                        break
                    }
                    v = v.return
                }
            u = v
        }
    }

    function br(t, s, a, o) {
        t = null;
        for (var u = s, h = !1; u !== null;) {
            if (!h) {
                if ((u.flags & 524288) !== 0) h = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var v = u.alternate;
                if (v === null) throw Error(r(387));
                if (v = v.memoizedProps, v !== null) {
                    var w = u.type;
                    nn(u.pendingProps.value, v.value) || (t !== null ? t.push(w) : t = [w])
                }
            } else if (u === tt.current) {
                if (v = u.alternate, v === null) throw Error(r(387));
                v.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Qr) : t = [Qr])
            }
            u = u.return
        }
        t !== null && Hu(s, t, a, o), s.flags |= 262144
    }

    function el(t) {
        for (t = t.firstContext; t !== null;) {
            if (!nn(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Ni(t) {
        Ri = t, fs = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function Bt(t) {
        return Gp(Ri, t)
    }

    function tl(t, s) {
        return Ri === null && Ni(t), Gp(t, s)
    }

    function Gp(t, s) {
        var a = s._currentValue;
        if (s = {
                context: s,
                memoizedValue: a,
                next: null
            }, fs === null) {
            if (t === null) throw Error(r(308));
            fs = s, t.dependencies = {
                lanes: 0,
                firstContext: s
            }, t.flags |= 524288
        } else fs = fs.next = s;
        return a
    }
    var gA = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                s = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, o) {
                        t.push(o)
                    }
                };
            this.abort = function() {
                s.aborted = !0, t.forEach(function(a) {
                    return a()
                })
            }
        },
        vA = e.unstable_scheduleCallback,
        xA = e.unstable_NormalPriority,
        wt = {
            $$typeof: M,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function qu() {
        return {
            controller: new gA,
            data: new Map,
            refCount: 0
        }
    }

    function wr(t) {
        t.refCount--, t.refCount === 0 && vA(xA, function() {
            t.controller.abort()
        })
    }
    var Sr = null,
        Fu = 0,
        ha = 0,
        ma = null;

    function bA(t, s) {
        if (Sr === null) {
            var a = Sr = [];
            Fu = 0, ha = Zf(), ma = {
                status: "pending",
                value: void 0,
                then: function(o) {
                    a.push(o)
                }
            }
        }
        return Fu++, s.then(Zp, Zp), s
    }

    function Zp() {
        if (--Fu === 0 && Sr !== null) {
            ma !== null && (ma.status = "fulfilled");
            var t = Sr;
            Sr = null, ha = 0, ma = null;
            for (var s = 0; s < t.length; s++)(0, t[s])()
        }
    }

    function wA(t, s) {
        var a = [],
            o = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    a.push(u)
                }
            };
        return t.then(function() {
            o.status = "fulfilled", o.value = s;
            for (var u = 0; u < a.length; u++)(0, a[u])(s)
        }, function(u) {
            for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)(0, a[u])(void 0)
        }), o
    }
    var Xp = V.S;
    V.S = function(t, s) {
        typeof s == "object" && s !== null && typeof s.then == "function" && bA(t, s), Xp !== null && Xp(t, s)
    };
    var Oi = X(null);

    function Yu() {
        var t = Oi.current;
        return t !== null ? t : nt.pooledCache
    }

    function nl(t, s) {
        s === null ? se(Oi, Oi.current) : se(Oi, s.pool)
    }

    function Kp() {
        var t = Yu();
        return t === null ? null : {
            parent: wt._currentValue,
            pool: t
        }
    }
    var Tr = Error(r(460)),
        Qp = Error(r(474)),
        sl = Error(r(542)),
        Gu = {
            then: function() {}
        };

    function Ip(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function il() {}

    function $p(t, s, a) {
        switch (a = t[a], a === void 0 ? t.push(s) : a !== s && (s.then(il, il), s = a), s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw t = s.reason, Jp(t), t;
            default:
                if (typeof s.status == "string") s.then(il, il);
                else {
                    if (t = nt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
                    t = s, t.status = "pending", t.then(function(o) {
                        if (s.status === "pending") {
                            var u = s;
                            u.status = "fulfilled", u.value = o
                        }
                    }, function(o) {
                        if (s.status === "pending") {
                            var u = s;
                            u.status = "rejected", u.reason = o
                        }
                    })
                }
                switch (s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw t = s.reason, Jp(t), t
                }
                throw Ar = s, Tr
        }
    }
    var Ar = null;

    function Wp() {
        if (Ar === null) throw Error(r(459));
        var t = Ar;
        return Ar = null, t
    }

    function Jp(t) {
        if (t === Tr || t === sl) throw Error(r(483))
    }
    var Ms = !1;

    function Zu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Xu(t, s) {
        t = t.updateQueue, s.updateQueue === t && (s.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function ks(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Vs(t, s, a) {
        var o = t.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (Ke & 2) !== 0) {
            var u = o.pending;
            return u === null ? s.next = s : (s.next = u.next, u.next = s), o.pending = s, s = Io(t), Pp(t, null, a), s
        }
        return Qo(t, o, s, a), Io(t)
    }

    function Er(t, s, a) {
        if (s = s.updateQueue, s !== null && (s = s.shared, (a & 4194048) !== 0)) {
            var o = s.lanes;
            o &= t.pendingLanes, a |= o, s.lanes = a, Zm(t, a)
        }
    }

    function Ku(t, s) {
        var a = t.updateQueue,
            o = t.alternate;
        if (o !== null && (o = o.updateQueue, a === o)) {
            var u = null,
                h = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var v = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    h === null ? u = h = v : h = h.next = v, a = a.next
                } while (a !== null);
                h === null ? u = h = s : h = h.next = s
            } else u = h = s;
            a = {
                baseState: o.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: h,
                shared: o.shared,
                callbacks: o.callbacks
            }, t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = s : t.next = s, a.lastBaseUpdate = s
    }
    var Qu = !1;

    function _r() {
        if (Qu) {
            var t = ma;
            if (t !== null) throw t
        }
    }

    function Cr(t, s, a, o) {
        Qu = !1;
        var u = t.updateQueue;
        Ms = !1;
        var h = u.firstBaseUpdate,
            v = u.lastBaseUpdate,
            w = u.shared.pending;
        if (w !== null) {
            u.shared.pending = null;
            var C = w,
                P = C.next;
            C.next = null, v === null ? h = P : v.next = P, v = C;
            var G = t.alternate;
            G !== null && (G = G.updateQueue, w = G.lastBaseUpdate, w !== v && (w === null ? G.firstBaseUpdate = P : w.next = P, G.lastBaseUpdate = C))
        }
        if (h !== null) {
            var $ = u.baseState;
            v = 0, G = P = C = null, w = h;
            do {
                var U = w.lane & -536870913,
                    q = U !== w.lane;
                if (q ? (qe & U) === U : (o & U) === U) {
                    U !== 0 && U === ha && (Qu = !0), G !== null && (G = G.next = {
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Ce = t,
                            Ee = w;U = s;
                        var We = a;
                        switch (Ee.tag) {
                            case 1:
                                if (Ce = Ee.payload, typeof Ce == "function") {
                                    $ = Ce.call(We, $, U);
                                    break e
                                }
                                $ = Ce;
                                break e;
                            case 3:
                                Ce.flags = Ce.flags & -65537 | 128;
                            case 0:
                                if (Ce = Ee.payload, U = typeof Ce == "function" ? Ce.call(We, $, U) : Ce, U == null) break e;
                                $ = y({}, $, U);
                                break e;
                            case 2:
                                Ms = !0
                        }
                    }
                    U = w.callback, U !== null && (t.flags |= 64, q && (t.flags |= 8192), q = u.callbacks, q === null ? u.callbacks = [U] : q.push(U))
                } else q = {
                    lane: U,
                    tag: w.tag,
                    payload: w.payload,
                    callback: w.callback,
                    next: null
                }, G === null ? (P = G = q, C = $) : G = G.next = q, v |= U;
                if (w = w.next, w === null) {
                    if (w = u.shared.pending, w === null) break;
                    q = w, w = q.next, q.next = null, u.lastBaseUpdate = q, u.shared.pending = null
                }
            } while (!0);
            G === null && (C = $), u.baseState = C, u.firstBaseUpdate = P, u.lastBaseUpdate = G, h === null && (u.shared.lanes = 0), Fs |= v, t.lanes = v, t.memoizedState = $
        }
    }

    function ey(t, s) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(s)
    }

    function ty(t, s) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null, t = 0; t < a.length; t++) ey(a[t], s)
    }
    var pa = X(null),
        al = X(0);

    function ny(t, s) {
        t = xs, se(al, t), se(pa, s), xs = t | s.baseLanes
    }

    function Iu() {
        se(al, xs), se(pa, pa.current)
    }

    function $u() {
        xs = al.current, ae(pa), ae(al)
    }
    var zs = 0,
        Me = null,
        Ie = null,
        pt = null,
        rl = !1,
        ya = !1,
        ji = !1,
        ol = 0,
        Rr = 0,
        ga = null,
        SA = 0;

    function dt() {
        throw Error(r(321))
    }

    function Wu(t, s) {
        if (s === null) return !1;
        for (var a = 0; a < s.length && a < t.length; a++)
            if (!nn(t[a], s[a])) return !1;
        return !0
    }

    function Ju(t, s, a, o, u, h) {
        return zs = h, Me = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, V.H = t === null || t.memoizedState === null ? Py : Uy, ji = !1, h = a(o, u), ji = !1, ya && (h = iy(s, a, o, u)), sy(t), h
    }

    function sy(t) {
        V.H = hl;
        var s = Ie !== null && Ie.next !== null;
        if (zs = 0, pt = Ie = Me = null, rl = !1, Rr = 0, ga = null, s) throw Error(r(300));
        t === null || Rt || (t = t.dependencies, t !== null && el(t) && (Rt = !0))
    }

    function iy(t, s, a, o) {
        Me = t;
        var u = 0;
        do {
            if (ya && (ga = null), Rr = 0, ya = !1, 25 <= u) throw Error(r(301));
            if (u += 1, pt = Ie = null, t.updateQueue != null) {
                var h = t.updateQueue;
                h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0)
            }
            V.H = NA, h = s(a, o)
        } while (ya);
        return h
    }

    function TA() {
        var t = V.H,
            s = t.useState()[0];
        return s = typeof s.then == "function" ? Nr(s) : s, t = t.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t && (Me.flags |= 1024), s
    }

    function ef() {
        var t = ol !== 0;
        return ol = 0, t
    }

    function tf(t, s, a) {
        s.updateQueue = t.updateQueue, s.flags &= -2053, t.lanes &= ~a
    }

    function nf(t) {
        if (rl) {
            for (t = t.memoizedState; t !== null;) {
                var s = t.queue;
                s !== null && (s.pending = null), t = t.next
            }
            rl = !1
        }
        zs = 0, pt = Ie = Me = null, ya = !1, Rr = ol = 0, ga = null
    }

    function $t() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pt === null ? Me.memoizedState = pt = t : pt = pt.next = t, pt
    }

    function yt() {
        if (Ie === null) {
            var t = Me.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Ie.next;
        var s = pt === null ? Me.memoizedState : pt.next;
        if (s !== null) pt = s, Ie = t;
        else {
            if (t === null) throw Me.alternate === null ? Error(r(467)) : Error(r(310));
            Ie = t, t = {
                memoizedState: Ie.memoizedState,
                baseState: Ie.baseState,
                baseQueue: Ie.baseQueue,
                queue: Ie.queue,
                next: null
            }, pt === null ? Me.memoizedState = pt = t : pt = pt.next = t
        }
        return pt
    }

    function sf() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Nr(t) {
        var s = Rr;
        return Rr += 1, ga === null && (ga = []), t = $p(ga, t, s), s = Me, (pt === null ? s.memoizedState : pt.next) === null && (s = s.alternate, V.H = s === null || s.memoizedState === null ? Py : Uy), t
    }

    function ll(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Nr(t);
            if (t.$$typeof === M) return Bt(t)
        }
        throw Error(r(438, String(t)))
    }

    function af(t) {
        var s = null,
            a = Me.updateQueue;
        if (a !== null && (s = a.memoCache), s == null) {
            var o = Me.alternate;
            o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (s = {
                data: o.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (s == null && (s = {
                data: [],
                index: 0
            }), a === null && (a = sf(), Me.updateQueue = a), a.memoCache = s, a = s.data[s.index], a === void 0)
            for (a = s.data[s.index] = Array(t), o = 0; o < t; o++) a[o] = ve;
        return s.index++, a
    }

    function hs(t, s) {
        return typeof s == "function" ? s(t) : s
    }

    function cl(t) {
        var s = yt();
        return rf(s, Ie, t)
    }

    function rf(t, s, a) {
        var o = t.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = a;
        var u = t.baseQueue,
            h = o.pending;
        if (h !== null) {
            if (u !== null) {
                var v = u.next;
                u.next = h.next, h.next = v
            }
            s.baseQueue = u = h, o.pending = null
        }
        if (h = t.baseState, u === null) t.memoizedState = h;
        else {
            s = u.next;
            var w = v = null,
                C = null,
                P = s,
                G = !1;
            do {
                var $ = P.lane & -536870913;
                if ($ !== P.lane ? (qe & $) === $ : (zs & $) === $) {
                    var U = P.revertLane;
                    if (U === 0) C !== null && (C = C.next = {
                        lane: 0,
                        revertLane: 0,
                        action: P.action,
                        hasEagerState: P.hasEagerState,
                        eagerState: P.eagerState,
                        next: null
                    }), $ === ha && (G = !0);
                    else if ((zs & U) === U) {
                        P = P.next, U === ha && (G = !0);
                        continue
                    } else $ = {
                        lane: 0,
                        revertLane: P.revertLane,
                        action: P.action,
                        hasEagerState: P.hasEagerState,
                        eagerState: P.eagerState,
                        next: null
                    }, C === null ? (w = C = $, v = h) : C = C.next = $, Me.lanes |= U, Fs |= U;
                    $ = P.action, ji && a(h, $), h = P.hasEagerState ? P.eagerState : a(h, $)
                } else U = {
                    lane: $,
                    revertLane: P.revertLane,
                    action: P.action,
                    hasEagerState: P.hasEagerState,
                    eagerState: P.eagerState,
                    next: null
                }, C === null ? (w = C = U, v = h) : C = C.next = U, Me.lanes |= $, Fs |= $;
                P = P.next
            } while (P !== null && P !== s);
            if (C === null ? v = h : C.next = w, !nn(h, t.memoizedState) && (Rt = !0, G && (a = ma, a !== null))) throw a;
            t.memoizedState = h, t.baseState = v, t.baseQueue = C, o.lastRenderedState = h
        }
        return u === null && (o.lanes = 0), [t.memoizedState, o.dispatch]
    }

    function of(t) {
        var s = yt(),
            a = s.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = t;
        var o = a.dispatch,
            u = a.pending,
            h = s.memoizedState;
        if (u !== null) {
            a.pending = null;
            var v = u = u.next;
            do h = t(h, v.action), v = v.next; while (v !== u);
            nn(h, s.memoizedState) || (Rt = !0), s.memoizedState = h, s.baseQueue === null && (s.baseState = h), a.lastRenderedState = h
        }
        return [h, o]
    }

    function ay(t, s, a) {
        var o = Me,
            u = yt(),
            h = Xe;
        if (h) {
            if (a === void 0) throw Error(r(407));
            a = a()
        } else a = s();
        var v = !nn((Ie || u).memoizedState, a);
        v && (u.memoizedState = a, Rt = !0), u = u.queue;
        var w = ly.bind(null, o, u, t);
        if (Or(2048, 8, w, [t]), u.getSnapshot !== s || v || pt !== null && pt.memoizedState.tag & 1) {
            if (o.flags |= 2048, va(9, ul(), oy.bind(null, o, u, a, s), null), nt === null) throw Error(r(349));
            h || (zs & 124) !== 0 || ry(o, s, a)
        }
        return a
    }

    function ry(t, s, a) {
        t.flags |= 16384, t = {
            getSnapshot: s,
            value: a
        }, s = Me.updateQueue, s === null ? (s = sf(), Me.updateQueue = s, s.stores = [t]) : (a = s.stores, a === null ? s.stores = [t] : a.push(t))
    }

    function oy(t, s, a, o) {
        s.value = a, s.getSnapshot = o, cy(s) && uy(t)
    }

    function ly(t, s, a) {
        return a(function() {
            cy(s) && uy(t)
        })
    }

    function cy(t) {
        var s = t.getSnapshot;
        t = t.value;
        try {
            var a = s();
            return !nn(t, a)
        } catch {
            return !0
        }
    }

    function uy(t) {
        var s = ca(t, 2);
        s !== null && cn(s, t, 2)
    }

    function lf(t) {
        var s = $t();
        if (typeof t == "function") {
            var a = t;
            if (t = a(), ji) {
                Ve(!0);
                try {
                    a()
                } finally {
                    Ve(!1)
                }
            }
        }
        return s.memoizedState = s.baseState = t, s.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hs,
            lastRenderedState: t
        }, s
    }

    function fy(t, s, a, o) {
        return t.baseState = a, rf(t, Ie, typeof o == "function" ? o : hs)
    }

    function AA(t, s, a, o, u) {
        if (dl(t)) throw Error(r(485));
        if (t = s.action, t !== null) {
            var h = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(v) {
                    h.listeners.push(v)
                }
            };
            V.T !== null ? a(!0) : h.isTransition = !1, o(h), a = s.pending, a === null ? (h.next = s.pending = h, dy(s, h)) : (h.next = a.next, s.pending = a.next = h)
        }
    }

    function dy(t, s) {
        var a = s.action,
            o = s.payload,
            u = t.state;
        if (s.isTransition) {
            var h = V.T,
                v = {};
            V.T = v;
            try {
                var w = a(u, o),
                    C = V.S;
                C !== null && C(v, w), hy(t, s, w)
            } catch (P) {
                cf(t, s, P)
            } finally {
                V.T = h
            }
        } else try {
            h = a(u, o), hy(t, s, h)
        } catch (P) {
            cf(t, s, P)
        }
    }

    function hy(t, s, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(o) {
            my(t, s, o)
        }, function(o) {
            return cf(t, s, o)
        }) : my(t, s, a)
    }

    function my(t, s, a) {
        s.status = "fulfilled", s.value = a, py(s), t.state = a, s = t.pending, s !== null && (a = s.next, a === s ? t.pending = null : (a = a.next, s.next = a, dy(t, a)))
    }

    function cf(t, s, a) {
        var o = t.pending;
        if (t.pending = null, o !== null) {
            o = o.next;
            do s.status = "rejected", s.reason = a, py(s), s = s.next; while (s !== o)
        }
        t.action = null
    }

    function py(t) {
        t = t.listeners;
        for (var s = 0; s < t.length; s++)(0, t[s])()
    }

    function yy(t, s) {
        return s
    }

    function gy(t, s) {
        if (Xe) {
            var a = nt.formState;
            if (a !== null) {
                e: {
                    var o = Me;
                    if (Xe) {
                        if (ct) {
                            t: {
                                for (var u = ct, h = Zn; u.nodeType !== 8;) {
                                    if (!h) {
                                        u = null;
                                        break t
                                    }
                                    if (u = Mn(u.nextSibling), u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                h = u.data,
                                u = h === "F!" || h === "F" ? u : null
                            }
                            if (u) {
                                ct = Mn(u.nextSibling), o = u.data === "F!";
                                break e
                            }
                        }
                        Ci(o)
                    }
                    o = !1
                }
                o && (s = a[0])
            }
        }
        return a = $t(), a.memoizedState = a.baseState = s, o = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: yy,
            lastRenderedState: s
        }, a.queue = o, a = zy.bind(null, Me, o), o.dispatch = a, o = lf(!1), h = mf.bind(null, Me, !1, o.queue), o = $t(), u = {
            state: s,
            dispatch: null,
            action: t,
            pending: null
        }, o.queue = u, a = AA.bind(null, Me, u, h, a), u.dispatch = a, o.memoizedState = t, [s, a, !1]
    }

    function vy(t) {
        var s = yt();
        return xy(s, Ie, t)
    }

    function xy(t, s, a) {
        if (s = rf(t, s, yy)[0], t = cl(hs)[0], typeof s == "object" && s !== null && typeof s.then == "function") try {
            var o = Nr(s)
        } catch (v) {
            throw v === Tr ? sl : v
        } else o = s;
        s = yt();
        var u = s.queue,
            h = u.dispatch;
        return a !== s.memoizedState && (Me.flags |= 2048, va(9, ul(), EA.bind(null, u, a), null)), [o, h, t]
    }

    function EA(t, s) {
        t.action = s
    }

    function by(t) {
        var s = yt(),
            a = Ie;
        if (a !== null) return xy(s, a, t);
        yt(), s = s.memoizedState, a = yt();
        var o = a.queue.dispatch;
        return a.memoizedState = t, [s, o, !1]
    }

    function va(t, s, a, o) {
        return t = {
            tag: t,
            create: a,
            deps: o,
            inst: s,
            next: null
        }, s = Me.updateQueue, s === null && (s = sf(), Me.updateQueue = s), a = s.lastEffect, a === null ? s.lastEffect = t.next = t : (o = a.next, a.next = t, t.next = o, s.lastEffect = t), t
    }

    function ul() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function wy() {
        return yt().memoizedState
    }

    function fl(t, s, a, o) {
        var u = $t();
        o = o === void 0 ? null : o, Me.flags |= t, u.memoizedState = va(1 | s, ul(), a, o)
    }

    function Or(t, s, a, o) {
        var u = yt();
        o = o === void 0 ? null : o;
        var h = u.memoizedState.inst;
        Ie !== null && o !== null && Wu(o, Ie.memoizedState.deps) ? u.memoizedState = va(s, h, a, o) : (Me.flags |= t, u.memoizedState = va(1 | s, h, a, o))
    }

    function Sy(t, s) {
        fl(8390656, 8, t, s)
    }

    function Ty(t, s) {
        Or(2048, 8, t, s)
    }

    function Ay(t, s) {
        return Or(4, 2, t, s)
    }

    function Ey(t, s) {
        return Or(4, 4, t, s)
    }

    function _y(t, s) {
        if (typeof s == "function") {
            t = t();
            var a = s(t);
            return function() {
                typeof a == "function" ? a() : s(null)
            }
        }
        if (s != null) return t = t(), s.current = t,
            function() {
                s.current = null
            }
    }

    function Cy(t, s, a) {
        a = a != null ? a.concat([t]) : null, Or(4, 4, _y.bind(null, s, t), a)
    }

    function uf() {}

    function Ry(t, s) {
        var a = yt();
        s = s === void 0 ? null : s;
        var o = a.memoizedState;
        return s !== null && Wu(s, o[1]) ? o[0] : (a.memoizedState = [t, s], t)
    }

    function Ny(t, s) {
        var a = yt();
        s = s === void 0 ? null : s;
        var o = a.memoizedState;
        if (s !== null && Wu(s, o[1])) return o[0];
        if (o = t(), ji) {
            Ve(!0);
            try {
                t()
            } finally {
                Ve(!1)
            }
        }
        return a.memoizedState = [o, s], o
    }

    function ff(t, s, a) {
        return a === void 0 || (zs & 1073741824) !== 0 ? t.memoizedState = s : (t.memoizedState = a, t = Dg(), Me.lanes |= t, Fs |= t, a)
    }

    function Oy(t, s, a, o) {
        return nn(a, s) ? a : pa.current !== null ? (t = ff(t, a, o), nn(t, s) || (Rt = !0), t) : (zs & 42) === 0 ? (Rt = !0, t.memoizedState = a) : (t = Dg(), Me.lanes |= t, Fs |= t, s)
    }

    function jy(t, s, a, o, u) {
        var h = Z.p;
        Z.p = h !== 0 && 8 > h ? h : 8;
        var v = V.T,
            w = {};
        V.T = w, mf(t, !1, s, a);
        try {
            var C = u(),
                P = V.S;
            if (P !== null && P(w, C), C !== null && typeof C == "object" && typeof C.then == "function") {
                var G = wA(C, o);
                jr(t, s, G, ln(t))
            } else jr(t, s, o, ln(t))
        } catch ($) {
            jr(t, s, {
                then: function() {},
                status: "rejected",
                reason: $
            }, ln())
        } finally {
            Z.p = h, V.T = v
        }
    }

    function _A() {}

    function df(t, s, a, o) {
        if (t.tag !== 5) throw Error(r(476));
        var u = Dy(t).queue;
        jy(t, u, s, K, a === null ? _A : function() {
            return My(t), a(o)
        })
    }

    function Dy(t) {
        var s = t.memoizedState;
        if (s !== null) return s;
        s = {
            memoizedState: K,
            baseState: K,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hs,
                lastRenderedState: K
            },
            next: null
        };
        var a = {};
        return s.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hs,
                lastRenderedState: a
            },
            next: null
        }, t.memoizedState = s, t = t.alternate, t !== null && (t.memoizedState = s), s
    }

    function My(t) {
        var s = Dy(t).next.queue;
        jr(t, s, {}, ln())
    }

    function hf() {
        return Bt(Qr)
    }

    function ky() {
        return yt().memoizedState
    }

    function Vy() {
        return yt().memoizedState
    }

    function CA(t) {
        for (var s = t.return; s !== null;) {
            switch (s.tag) {
                case 24:
                case 3:
                    var a = ln();
                    t = ks(a);
                    var o = Vs(s, t, a);
                    o !== null && (cn(o, s, a), Er(o, s, a)), s = {
                        cache: qu()
                    }, t.payload = s;
                    return
            }
            s = s.return
        }
    }

    function RA(t, s, a) {
        var o = ln();
        a = {
            lane: o,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, dl(t) ? Ly(s, a) : (a = Du(t, s, a, o), a !== null && (cn(a, t, o), By(a, s, o)))
    }

    function zy(t, s, a) {
        var o = ln();
        jr(t, s, a, o)
    }

    function jr(t, s, a, o) {
        var u = {
            lane: o,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (dl(t)) Ly(s, u);
        else {
            var h = t.alternate;
            if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = s.lastRenderedReducer, h !== null)) try {
                var v = s.lastRenderedState,
                    w = h(v, a);
                if (u.hasEagerState = !0, u.eagerState = w, nn(w, v)) return Qo(t, s, u, 0), nt === null && Ko(), !1
            } catch {}
            if (a = Du(t, s, u, o), a !== null) return cn(a, t, o), By(a, s, o), !0
        }
        return !1
    }

    function mf(t, s, a, o) {
        if (o = {
                lane: 2,
                revertLane: Zf(),
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, dl(t)) {
            if (s) throw Error(r(479))
        } else s = Du(t, a, o, 2), s !== null && cn(s, t, 2)
    }

    function dl(t) {
        var s = t.alternate;
        return t === Me || s !== null && s === Me
    }

    function Ly(t, s) {
        ya = rl = !0;
        var a = t.pending;
        a === null ? s.next = s : (s.next = a.next, a.next = s), t.pending = s
    }

    function By(t, s, a) {
        if ((a & 4194048) !== 0) {
            var o = s.lanes;
            o &= t.pendingLanes, a |= o, s.lanes = a, Zm(t, a)
        }
    }
    var hl = {
            readContext: Bt,
            use: ll,
            useCallback: dt,
            useContext: dt,
            useEffect: dt,
            useImperativeHandle: dt,
            useLayoutEffect: dt,
            useInsertionEffect: dt,
            useMemo: dt,
            useReducer: dt,
            useRef: dt,
            useState: dt,
            useDebugValue: dt,
            useDeferredValue: dt,
            useTransition: dt,
            useSyncExternalStore: dt,
            useId: dt,
            useHostTransitionStatus: dt,
            useFormState: dt,
            useActionState: dt,
            useOptimistic: dt,
            useMemoCache: dt,
            useCacheRefresh: dt
        },
        Py = {
            readContext: Bt,
            use: ll,
            useCallback: function(t, s) {
                return $t().memoizedState = [t, s === void 0 ? null : s], t
            },
            useContext: Bt,
            useEffect: Sy,
            useImperativeHandle: function(t, s, a) {
                a = a != null ? a.concat([t]) : null, fl(4194308, 4, _y.bind(null, s, t), a)
            },
            useLayoutEffect: function(t, s) {
                return fl(4194308, 4, t, s)
            },
            useInsertionEffect: function(t, s) {
                fl(4, 2, t, s)
            },
            useMemo: function(t, s) {
                var a = $t();
                s = s === void 0 ? null : s;
                var o = t();
                if (ji) {
                    Ve(!0);
                    try {
                        t()
                    } finally {
                        Ve(!1)
                    }
                }
                return a.memoizedState = [o, s], o
            },
            useReducer: function(t, s, a) {
                var o = $t();
                if (a !== void 0) {
                    var u = a(s);
                    if (ji) {
                        Ve(!0);
                        try {
                            a(s)
                        } finally {
                            Ve(!1)
                        }
                    }
                } else u = s;
                return o.memoizedState = o.baseState = u, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: u
                }, o.queue = t, t = t.dispatch = RA.bind(null, Me, t), [o.memoizedState, t]
            },
            useRef: function(t) {
                var s = $t();
                return t = {
                    current: t
                }, s.memoizedState = t
            },
            useState: function(t) {
                t = lf(t);
                var s = t.queue,
                    a = zy.bind(null, Me, s);
                return s.dispatch = a, [t.memoizedState, a]
            },
            useDebugValue: uf,
            useDeferredValue: function(t, s) {
                var a = $t();
                return ff(a, t, s)
            },
            useTransition: function() {
                var t = lf(!1);
                return t = jy.bind(null, Me, t.queue, !0, !1), $t().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, s, a) {
                var o = Me,
                    u = $t();
                if (Xe) {
                    if (a === void 0) throw Error(r(407));
                    a = a()
                } else {
                    if (a = s(), nt === null) throw Error(r(349));
                    (qe & 124) !== 0 || ry(o, s, a)
                }
                u.memoizedState = a;
                var h = {
                    value: a,
                    getSnapshot: s
                };
                return u.queue = h, Sy(ly.bind(null, o, h, t), [t]), o.flags |= 2048, va(9, ul(), oy.bind(null, o, h, a, s), null), a
            },
            useId: function() {
                var t = $t(),
                    s = nt.identifierPrefix;
                if (Xe) {
                    var a = us,
                        o = cs;
                    a = (o & ~(1 << 32 - je(o) - 1)).toString(32) + a, s = "«" + s + "R" + a, a = ol++, 0 < a && (s += "H" + a.toString(32)), s += "»"
                } else a = SA++, s = "«" + s + "r" + a.toString(32) + "»";
                return t.memoizedState = s
            },
            useHostTransitionStatus: hf,
            useFormState: gy,
            useActionState: gy,
            useOptimistic: function(t) {
                var s = $t();
                s.memoizedState = s.baseState = t;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return s.queue = a, s = mf.bind(null, Me, !0, a), a.dispatch = s, [t, s]
            },
            useMemoCache: af,
            useCacheRefresh: function() {
                return $t().memoizedState = CA.bind(null, Me)
            }
        },
        Uy = {
            readContext: Bt,
            use: ll,
            useCallback: Ry,
            useContext: Bt,
            useEffect: Ty,
            useImperativeHandle: Cy,
            useInsertionEffect: Ay,
            useLayoutEffect: Ey,
            useMemo: Ny,
            useReducer: cl,
            useRef: wy,
            useState: function() {
                return cl(hs)
            },
            useDebugValue: uf,
            useDeferredValue: function(t, s) {
                var a = yt();
                return Oy(a, Ie.memoizedState, t, s)
            },
            useTransition: function() {
                var t = cl(hs)[0],
                    s = yt().memoizedState;
                return [typeof t == "boolean" ? t : Nr(t), s]
            },
            useSyncExternalStore: ay,
            useId: ky,
            useHostTransitionStatus: hf,
            useFormState: vy,
            useActionState: vy,
            useOptimistic: function(t, s) {
                var a = yt();
                return fy(a, Ie, t, s)
            },
            useMemoCache: af,
            useCacheRefresh: Vy
        },
        NA = {
            readContext: Bt,
            use: ll,
            useCallback: Ry,
            useContext: Bt,
            useEffect: Ty,
            useImperativeHandle: Cy,
            useInsertionEffect: Ay,
            useLayoutEffect: Ey,
            useMemo: Ny,
            useReducer: of,
            useRef: wy,
            useState: function() {
                return of(hs)
            },
            useDebugValue: uf,
            useDeferredValue: function(t, s) {
                var a = yt();
                return Ie === null ? ff(a, t, s) : Oy(a, Ie.memoizedState, t, s)
            },
            useTransition: function() {
                var t = of(hs)[0],
                    s = yt().memoizedState;
                return [typeof t == "boolean" ? t : Nr(t), s]
            },
            useSyncExternalStore: ay,
            useId: ky,
            useHostTransitionStatus: hf,
            useFormState: by,
            useActionState: by,
            useOptimistic: function(t, s) {
                var a = yt();
                return Ie !== null ? fy(a, Ie, t, s) : (a.baseState = t, [t, a.queue.dispatch])
            },
            useMemoCache: af,
            useCacheRefresh: Vy
        },
        xa = null,
        Dr = 0;

    function ml(t) {
        var s = Dr;
        return Dr += 1, xa === null && (xa = []), $p(xa, t, s)
    }

    function Mr(t, s) {
        s = s.props.ref, t.ref = s !== void 0 ? s : null
    }

    function pl(t, s) {
        throw s.$$typeof === x ? Error(r(525)) : (t = Object.prototype.toString.call(s), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : t)))
    }

    function Hy(t) {
        var s = t._init;
        return s(t._payload)
    }

    function qy(t) {
        function s(k, O) {
            if (t) {
                var L = k.deletions;
                L === null ? (k.deletions = [O], k.flags |= 16) : L.push(O)
            }
        }

        function a(k, O) {
            if (!t) return null;
            for (; O !== null;) s(k, O), O = O.sibling;
            return null
        }

        function o(k) {
            for (var O = new Map; k !== null;) k.key !== null ? O.set(k.key, k) : O.set(k.index, k), k = k.sibling;
            return O
        }

        function u(k, O) {
            return k = ls(k, O), k.index = 0, k.sibling = null, k
        }

        function h(k, O, L) {
            return k.index = L, t ? (L = k.alternate, L !== null ? (L = L.index, L < O ? (k.flags |= 67108866, O) : L) : (k.flags |= 67108866, O)) : (k.flags |= 1048576, O)
        }

        function v(k) {
            return t && k.alternate === null && (k.flags |= 67108866), k
        }

        function w(k, O, L, Q) {
            return O === null || O.tag !== 6 ? (O = ku(L, k.mode, Q), O.return = k, O) : (O = u(O, L), O.return = k, O)
        }

        function C(k, O, L, Q) {
            var me = L.type;
            return me === E ? G(k, O, L.props.children, Q, L.key) : O !== null && (O.elementType === me || typeof me == "object" && me !== null && me.$$typeof === F && Hy(me) === O.type) ? (O = u(O, L.props), Mr(O, L), O.return = k, O) : (O = $o(L.type, L.key, L.props, null, k.mode, Q), Mr(O, L), O.return = k, O)
        }

        function P(k, O, L, Q) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== L.containerInfo || O.stateNode.implementation !== L.implementation ? (O = Vu(L, k.mode, Q), O.return = k, O) : (O = u(O, L.children || []), O.return = k, O)
        }

        function G(k, O, L, Q, me) {
            return O === null || O.tag !== 7 ? (O = Ti(L, k.mode, Q, me), O.return = k, O) : (O = u(O, L), O.return = k, O)
        }

        function $(k, O, L) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = ku("" + O, k.mode, L), O.return = k, O;
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case b:
                        return L = $o(O.type, O.key, O.props, null, k.mode, L), Mr(L, O), L.return = k, L;
                    case S:
                        return O = Vu(O, k.mode, L), O.return = k, O;
                    case F:
                        var Q = O._init;
                        return O = Q(O._payload), $(k, O, L)
                }
                if (de(O) || ne(O)) return O = Ti(O, k.mode, L, null), O.return = k, O;
                if (typeof O.then == "function") return $(k, ml(O), L);
                if (O.$$typeof === M) return $(k, tl(k, O), L);
                pl(k, O)
            }
            return null
        }

        function U(k, O, L, Q) {
            var me = O !== null ? O.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return me !== null ? null : w(k, O, "" + L, Q);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case b:
                        return L.key === me ? C(k, O, L, Q) : null;
                    case S:
                        return L.key === me ? P(k, O, L, Q) : null;
                    case F:
                        return me = L._init, L = me(L._payload), U(k, O, L, Q)
                }
                if (de(L) || ne(L)) return me !== null ? null : G(k, O, L, Q, null);
                if (typeof L.then == "function") return U(k, O, ml(L), Q);
                if (L.$$typeof === M) return U(k, O, tl(k, L), Q);
                pl(k, L)
            }
            return null
        }

        function q(k, O, L, Q, me) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return k = k.get(L) || null, w(O, k, "" + Q, me);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case b:
                        return k = k.get(Q.key === null ? L : Q.key) || null, C(O, k, Q, me);
                    case S:
                        return k = k.get(Q.key === null ? L : Q.key) || null, P(O, k, Q, me);
                    case F:
                        var ze = Q._init;
                        return Q = ze(Q._payload), q(k, O, L, Q, me)
                }
                if (de(Q) || ne(Q)) return k = k.get(L) || null, G(O, k, Q, me, null);
                if (typeof Q.then == "function") return q(k, O, L, ml(Q), me);
                if (Q.$$typeof === M) return q(k, O, L, tl(O, Q), me);
                pl(O, Q)
            }
            return null
        }

        function Ce(k, O, L, Q) {
            for (var me = null, ze = null, Te = O, _e = O = 0, Ot = null; Te !== null && _e < L.length; _e++) {
                Te.index > _e ? (Ot = Te, Te = null) : Ot = Te.sibling;
                var Ge = U(k, Te, L[_e], Q);
                if (Ge === null) {
                    Te === null && (Te = Ot);
                    break
                }
                t && Te && Ge.alternate === null && s(k, Te), O = h(Ge, O, _e), ze === null ? me = Ge : ze.sibling = Ge, ze = Ge, Te = Ot
            }
            if (_e === L.length) return a(k, Te), Xe && Ei(k, _e), me;
            if (Te === null) {
                for (; _e < L.length; _e++) Te = $(k, L[_e], Q), Te !== null && (O = h(Te, O, _e), ze === null ? me = Te : ze.sibling = Te, ze = Te);
                return Xe && Ei(k, _e), me
            }
            for (Te = o(Te); _e < L.length; _e++) Ot = q(Te, k, _e, L[_e], Q), Ot !== null && (t && Ot.alternate !== null && Te.delete(Ot.key === null ? _e : Ot.key), O = h(Ot, O, _e), ze === null ? me = Ot : ze.sibling = Ot, ze = Ot);
            return t && Te.forEach(function(Ws) {
                return s(k, Ws)
            }), Xe && Ei(k, _e), me
        }

        function Ee(k, O, L, Q) {
            if (L == null) throw Error(r(151));
            for (var me = null, ze = null, Te = O, _e = O = 0, Ot = null, Ge = L.next(); Te !== null && !Ge.done; _e++, Ge = L.next()) {
                Te.index > _e ? (Ot = Te, Te = null) : Ot = Te.sibling;
                var Ws = U(k, Te, Ge.value, Q);
                if (Ws === null) {
                    Te === null && (Te = Ot);
                    break
                }
                t && Te && Ws.alternate === null && s(k, Te), O = h(Ws, O, _e), ze === null ? me = Ws : ze.sibling = Ws, ze = Ws, Te = Ot
            }
            if (Ge.done) return a(k, Te), Xe && Ei(k, _e), me;
            if (Te === null) {
                for (; !Ge.done; _e++, Ge = L.next()) Ge = $(k, Ge.value, Q), Ge !== null && (O = h(Ge, O, _e), ze === null ? me = Ge : ze.sibling = Ge, ze = Ge);
                return Xe && Ei(k, _e), me
            }
            for (Te = o(Te); !Ge.done; _e++, Ge = L.next()) Ge = q(Te, k, _e, Ge.value, Q), Ge !== null && (t && Ge.alternate !== null && Te.delete(Ge.key === null ? _e : Ge.key), O = h(Ge, O, _e), ze === null ? me = Ge : ze.sibling = Ge, ze = Ge);
            return t && Te.forEach(function(OE) {
                return s(k, OE)
            }), Xe && Ei(k, _e), me
        }

        function We(k, O, L, Q) {
            if (typeof L == "object" && L !== null && L.type === E && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case b:
                        e: {
                            for (var me = L.key; O !== null;) {
                                if (O.key === me) {
                                    if (me = L.type, me === E) {
                                        if (O.tag === 7) {
                                            a(k, O.sibling), Q = u(O, L.props.children), Q.return = k, k = Q;
                                            break e
                                        }
                                    } else if (O.elementType === me || typeof me == "object" && me !== null && me.$$typeof === F && Hy(me) === O.type) {
                                        a(k, O.sibling), Q = u(O, L.props), Mr(Q, L), Q.return = k, k = Q;
                                        break e
                                    }
                                    a(k, O);
                                    break
                                } else s(k, O);
                                O = O.sibling
                            }
                            L.type === E ? (Q = Ti(L.props.children, k.mode, Q, L.key), Q.return = k, k = Q) : (Q = $o(L.type, L.key, L.props, null, k.mode, Q), Mr(Q, L), Q.return = k, k = Q)
                        }
                        return v(k);
                    case S:
                        e: {
                            for (me = L.key; O !== null;) {
                                if (O.key === me)
                                    if (O.tag === 4 && O.stateNode.containerInfo === L.containerInfo && O.stateNode.implementation === L.implementation) {
                                        a(k, O.sibling), Q = u(O, L.children || []), Q.return = k, k = Q;
                                        break e
                                    } else {
                                        a(k, O);
                                        break
                                    }
                                else s(k, O);
                                O = O.sibling
                            }
                            Q = Vu(L, k.mode, Q),
                            Q.return = k,
                            k = Q
                        }
                        return v(k);
                    case F:
                        return me = L._init, L = me(L._payload), We(k, O, L, Q)
                }
                if (de(L)) return Ce(k, O, L, Q);
                if (ne(L)) {
                    if (me = ne(L), typeof me != "function") throw Error(r(150));
                    return L = me.call(L), Ee(k, O, L, Q)
                }
                if (typeof L.then == "function") return We(k, O, ml(L), Q);
                if (L.$$typeof === M) return We(k, O, tl(k, L), Q);
                pl(k, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, O !== null && O.tag === 6 ? (a(k, O.sibling), Q = u(O, L), Q.return = k, k = Q) : (a(k, O), Q = ku(L, k.mode, Q), Q.return = k, k = Q), v(k)) : a(k, O)
        }
        return function(k, O, L, Q) {
            try {
                Dr = 0;
                var me = We(k, O, L, Q);
                return xa = null, me
            } catch (Te) {
                if (Te === Tr || Te === sl) throw Te;
                var ze = sn(29, Te, null, k.mode);
                return ze.lanes = Q, ze.return = k, ze
            }
        }
    }
    var ba = qy(!0),
        Fy = qy(!1),
        Tn = X(null),
        Xn = null;

    function Ls(t) {
        var s = t.alternate;
        se(St, St.current & 1), se(Tn, t), Xn === null && (s === null || pa.current !== null || s.memoizedState !== null) && (Xn = t)
    }

    function Yy(t) {
        if (t.tag === 22) {
            if (se(St, St.current), se(Tn, t), Xn === null) {
                var s = t.alternate;
                s !== null && s.memoizedState !== null && (Xn = t)
            }
        } else Bs()
    }

    function Bs() {
        se(St, St.current), se(Tn, Tn.current)
    }

    function ms(t) {
        ae(Tn), Xn === t && (Xn = null), ae(St)
    }
    var St = X(0);

    function yl(t) {
        for (var s = t; s !== null;) {
            if (s.tag === 13) {
                var a = s.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || id(a))) return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0) return s
            } else if (s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === t) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === t) return null;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
        return null
    }

    function pf(t, s, a, o) {
        s = t.memoizedState, a = a(o, s), a = a == null ? s : y({}, s, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var yf = {
        enqueueSetState: function(t, s, a) {
            t = t._reactInternals;
            var o = ln(),
                u = ks(o);
            u.payload = s, a != null && (u.callback = a), s = Vs(t, u, o), s !== null && (cn(s, t, o), Er(s, t, o))
        },
        enqueueReplaceState: function(t, s, a) {
            t = t._reactInternals;
            var o = ln(),
                u = ks(o);
            u.tag = 1, u.payload = s, a != null && (u.callback = a), s = Vs(t, u, o), s !== null && (cn(s, t, o), Er(s, t, o))
        },
        enqueueForceUpdate: function(t, s) {
            t = t._reactInternals;
            var a = ln(),
                o = ks(a);
            o.tag = 2, s != null && (o.callback = s), s = Vs(t, o, a), s !== null && (cn(s, t, a), Er(s, t, a))
        }
    };

    function Gy(t, s, a, o, u, h, v) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, h, v) : s.prototype && s.prototype.isPureReactComponent ? !pr(a, o) || !pr(u, h) : !0
    }

    function Zy(t, s, a, o) {
        t = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, o), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, o), s.state !== t && yf.enqueueReplaceState(s, s.state, null)
    }

    function Di(t, s) {
        var a = s;
        if ("ref" in s) {
            a = {};
            for (var o in s) o !== "ref" && (a[o] = s[o])
        }
        if (t = t.defaultProps) {
            a === s && (a = y({}, a));
            for (var u in t) a[u] === void 0 && (a[u] = t[u])
        }
        return a
    }
    var gl = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var s = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(s)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function Xy(t) {
        gl(t)
    }

    function Ky(t) {
        console.error(t)
    }

    function Qy(t) {
        gl(t)
    }

    function vl(t, s) {
        try {
            var a = t.onUncaughtError;
            a(s.value, {
                componentStack: s.stack
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }

    function Iy(t, s, a) {
        try {
            var o = t.onCaughtError;
            o(a.value, {
                componentStack: a.stack,
                errorBoundary: s.tag === 1 ? s.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function gf(t, s, a) {
        return a = ks(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            vl(t, s)
        }, a
    }

    function $y(t) {
        return t = ks(t), t.tag = 3, t
    }

    function Wy(t, s, a, o) {
        var u = a.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var h = o.value;
            t.payload = function() {
                return u(h)
            }, t.callback = function() {
                Iy(s, a, o)
            }
        }
        var v = a.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
            Iy(s, a, o), typeof u != "function" && (Ys === null ? Ys = new Set([this]) : Ys.add(this));
            var w = o.stack;
            this.componentDidCatch(o.value, {
                componentStack: w !== null ? w : ""
            })
        })
    }

    function OA(t, s, a, o, u) {
        if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
            if (s = a.alternate, s !== null && br(s, a, u, !0), a = Tn.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return Xn === null ? Hf() : a.alternate === null && ut === 0 && (ut = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, o === Gu ? a.flags |= 16384 : (s = a.updateQueue, s === null ? a.updateQueue = new Set([o]) : s.add(o), Ff(t, o, u)), !1;
                    case 22:
                        return a.flags |= 65536, o === Gu ? a.flags |= 16384 : (s = a.updateQueue, s === null ? (s = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([o])
                        }, a.updateQueue = s) : (a = s.retryQueue, a === null ? s.retryQueue = new Set([o]) : a.add(o)), Ff(t, o, u)), !1
                }
                throw Error(r(435, a.tag))
            }
            return Ff(t, o, u), Hf(), !1
        }
        if (Xe) return s = Tn.current, s !== null ? ((s.flags & 65536) === 0 && (s.flags |= 256), s.flags |= 65536, s.lanes = u, o !== Bu && (t = Error(r(422), {
            cause: o
        }), xr(xn(t, a)))) : (o !== Bu && (s = Error(r(423), {
            cause: o
        }), xr(xn(s, a))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, o = xn(o, a), u = gf(t.stateNode, o, u), Ku(t, u), ut !== 4 && (ut = 2)), !1;
        var h = Error(r(520), {
            cause: o
        });
        if (h = xn(h, a), Ur === null ? Ur = [h] : Ur.push(h), ut !== 4 && (ut = 2), s === null) return !0;
        o = xn(o, a), a = s;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, t = u & -u, a.lanes |= t, t = gf(a.stateNode, o, t), Ku(a, t), !1;
                case 1:
                    if (s = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ys === null || !Ys.has(h)))) return a.flags |= 65536, u &= -u, a.lanes |= u, u = $y(u), Wy(u, t, a, o), Ku(a, u), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Jy = Error(r(461)),
        Rt = !1;

    function Dt(t, s, a, o) {
        s.child = t === null ? Fy(s, null, a, o) : ba(s, t.child, a, o)
    }

    function eg(t, s, a, o, u) {
        a = a.render;
        var h = s.ref;
        if ("ref" in o) {
            var v = {};
            for (var w in o) w !== "ref" && (v[w] = o[w])
        } else v = o;
        return Ni(s), o = Ju(t, s, a, v, h, u), w = ef(), t !== null && !Rt ? (tf(t, s, u), ps(t, s, u)) : (Xe && w && zu(s), s.flags |= 1, Dt(t, s, o, u), s.child)
    }

    function tg(t, s, a, o, u) {
        if (t === null) {
            var h = a.type;
            return typeof h == "function" && !Mu(h) && h.defaultProps === void 0 && a.compare === null ? (s.tag = 15, s.type = h, ng(t, s, h, o, u)) : (t = $o(a.type, null, o, s, s.mode, u), t.ref = s.ref, t.return = s, s.child = t)
        }
        if (h = t.child, !Ef(t, u)) {
            var v = h.memoizedProps;
            if (a = a.compare, a = a !== null ? a : pr, a(v, o) && t.ref === s.ref) return ps(t, s, u)
        }
        return s.flags |= 1, t = ls(h, o), t.ref = s.ref, t.return = s, s.child = t
    }

    function ng(t, s, a, o, u) {
        if (t !== null) {
            var h = t.memoizedProps;
            if (pr(h, o) && t.ref === s.ref)
                if (Rt = !1, s.pendingProps = o = h, Ef(t, u))(t.flags & 131072) !== 0 && (Rt = !0);
                else return s.lanes = t.lanes, ps(t, s, u)
        }
        return vf(t, s, a, o, u)
    }

    function sg(t, s, a) {
        var o = s.pendingProps,
            u = o.children,
            h = t !== null ? t.memoizedState : null;
        if (o.mode === "hidden") {
            if ((s.flags & 128) !== 0) {
                if (o = h !== null ? h.baseLanes | a : a, t !== null) {
                    for (u = s.child = t.child, h = 0; u !== null;) h = h | u.lanes | u.childLanes, u = u.sibling;
                    s.childLanes = h & ~o
                } else s.childLanes = 0, s.child = null;
                return ig(t, s, o, a)
            }
            if ((a & 536870912) !== 0) s.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && nl(s, h !== null ? h.cachePool : null), h !== null ? ny(s, h) : Iu(), Yy(s);
            else return s.lanes = s.childLanes = 536870912, ig(t, s, h !== null ? h.baseLanes | a : a, a)
        } else h !== null ? (nl(s, h.cachePool), ny(s, h), Bs(), s.memoizedState = null) : (t !== null && nl(s, null), Iu(), Bs());
        return Dt(t, s, u, a), s.child
    }

    function ig(t, s, a, o) {
        var u = Yu();
        return u = u === null ? null : {
            parent: wt._currentValue,
            pool: u
        }, s.memoizedState = {
            baseLanes: a,
            cachePool: u
        }, t !== null && nl(s, null), Iu(), Yy(s), t !== null && br(t, s, o, !0), null
    }

    function xl(t, s) {
        var a = s.ref;
        if (a === null) t !== null && t.ref !== null && (s.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(r(284));
            (t === null || t.ref !== a) && (s.flags |= 4194816)
        }
    }

    function vf(t, s, a, o, u) {
        return Ni(s), a = Ju(t, s, a, o, void 0, u), o = ef(), t !== null && !Rt ? (tf(t, s, u), ps(t, s, u)) : (Xe && o && zu(s), s.flags |= 1, Dt(t, s, a, u), s.child)
    }

    function ag(t, s, a, o, u, h) {
        return Ni(s), s.updateQueue = null, a = iy(s, o, a, u), sy(t), o = ef(), t !== null && !Rt ? (tf(t, s, h), ps(t, s, h)) : (Xe && o && zu(s), s.flags |= 1, Dt(t, s, a, h), s.child)
    }

    function rg(t, s, a, o, u) {
        if (Ni(s), s.stateNode === null) {
            var h = ua,
                v = a.contextType;
            typeof v == "object" && v !== null && (h = Bt(v)), h = new a(o, h), s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = yf, s.stateNode = h, h._reactInternals = s, h = s.stateNode, h.props = o, h.state = s.memoizedState, h.refs = {}, Zu(s), v = a.contextType, h.context = typeof v == "object" && v !== null ? Bt(v) : ua, h.state = s.memoizedState, v = a.getDerivedStateFromProps, typeof v == "function" && (pf(s, a, v, o), h.state = s.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (v = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), v !== h.state && yf.enqueueReplaceState(h, h.state, null), Cr(s, o, h, u), _r(), h.state = s.memoizedState), typeof h.componentDidMount == "function" && (s.flags |= 4194308), o = !0
        } else if (t === null) {
            h = s.stateNode;
            var w = s.memoizedProps,
                C = Di(a, w);
            h.props = C;
            var P = h.context,
                G = a.contextType;
            v = ua, typeof G == "object" && G !== null && (v = Bt(G));
            var $ = a.getDerivedStateFromProps;
            G = typeof $ == "function" || typeof h.getSnapshotBeforeUpdate == "function", w = s.pendingProps !== w, G || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (w || P !== v) && Zy(s, h, o, v), Ms = !1;
            var U = s.memoizedState;
            h.state = U, Cr(s, o, h, u), _r(), P = s.memoizedState, w || U !== P || Ms ? (typeof $ == "function" && (pf(s, a, $, o), P = s.memoizedState), (C = Ms || Gy(s, a, C, o, U, P, v)) ? (G || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = o, s.memoizedState = P), h.props = o, h.state = P, h.context = v, o = C) : (typeof h.componentDidMount == "function" && (s.flags |= 4194308), o = !1)
        } else {
            h = s.stateNode, Xu(t, s), v = s.memoizedProps, G = Di(a, v), h.props = G, $ = s.pendingProps, U = h.context, P = a.contextType, C = ua, typeof P == "object" && P !== null && (C = Bt(P)), w = a.getDerivedStateFromProps, (P = typeof w == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (v !== $ || U !== C) && Zy(s, h, o, C), Ms = !1, U = s.memoizedState, h.state = U, Cr(s, o, h, u), _r();
            var q = s.memoizedState;
            v !== $ || U !== q || Ms || t !== null && t.dependencies !== null && el(t.dependencies) ? (typeof w == "function" && (pf(s, a, w, o), q = s.memoizedState), (G = Ms || Gy(s, a, G, o, U, q, C) || t !== null && t.dependencies !== null && el(t.dependencies)) ? (P || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, q, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, q, C)), typeof h.componentDidUpdate == "function" && (s.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (s.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (s.flags |= 1024), s.memoizedProps = o, s.memoizedState = q), h.props = o, h.state = q, h.context = C, o = G) : (typeof h.componentDidUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (s.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (s.flags |= 1024), o = !1)
        }
        return h = o, xl(t, s), o = (s.flags & 128) !== 0, h || o ? (h = s.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : h.render(), s.flags |= 1, t !== null && o ? (s.child = ba(s, t.child, null, u), s.child = ba(s, null, a, u)) : Dt(t, s, a, u), s.memoizedState = h.state, t = s.child) : t = ps(t, s, u), t
    }

    function og(t, s, a, o) {
        return vr(), s.flags |= 256, Dt(t, s, a, o), s.child
    }
    var xf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function bf(t) {
        return {
            baseLanes: t,
            cachePool: Kp()
        }
    }

    function wf(t, s, a) {
        return t = t !== null ? t.childLanes & ~a : 0, s && (t |= An), t
    }

    function lg(t, s, a) {
        var o = s.pendingProps,
            u = !1,
            h = (s.flags & 128) !== 0,
            v;
        if ((v = h) || (v = t !== null && t.memoizedState === null ? !1 : (St.current & 2) !== 0), v && (u = !0, s.flags &= -129), v = (s.flags & 32) !== 0, s.flags &= -33, t === null) {
            if (Xe) {
                if (u ? Ls(s) : Bs(), Xe) {
                    var w = ct,
                        C;
                    if (C = w) {
                        e: {
                            for (C = w, w = Zn; C.nodeType !== 8;) {
                                if (!w) {
                                    w = null;
                                    break e
                                }
                                if (C = Mn(C.nextSibling), C === null) {
                                    w = null;
                                    break e
                                }
                            }
                            w = C
                        }
                        w !== null ? (s.memoizedState = {
                            dehydrated: w,
                            treeContext: Ai !== null ? {
                                id: cs,
                                overflow: us
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, C = sn(18, null, null, 0), C.stateNode = w, C.return = s, s.child = C, Ft = s, ct = null, C = !0) : C = !1
                    }
                    C || Ci(s)
                }
                if (w = s.memoizedState, w !== null && (w = w.dehydrated, w !== null)) return id(w) ? s.lanes = 32 : s.lanes = 536870912, null;
                ms(s)
            }
            return w = o.children, o = o.fallback, u ? (Bs(), u = s.mode, w = bl({
                mode: "hidden",
                children: w
            }, u), o = Ti(o, u, a, null), w.return = s, o.return = s, w.sibling = o, s.child = w, u = s.child, u.memoizedState = bf(a), u.childLanes = wf(t, v, a), s.memoizedState = xf, o) : (Ls(s), Sf(s, w))
        }
        if (C = t.memoizedState, C !== null && (w = C.dehydrated, w !== null)) {
            if (h) s.flags & 256 ? (Ls(s), s.flags &= -257, s = Tf(t, s, a)) : s.memoizedState !== null ? (Bs(), s.child = t.child, s.flags |= 128, s = null) : (Bs(), u = o.fallback, w = s.mode, o = bl({
                mode: "visible",
                children: o.children
            }, w), u = Ti(u, w, a, null), u.flags |= 2, o.return = s, u.return = s, o.sibling = u, s.child = o, ba(s, t.child, null, a), o = s.child, o.memoizedState = bf(a), o.childLanes = wf(t, v, a), s.memoizedState = xf, s = u);
            else if (Ls(s), id(w)) {
                if (v = w.nextSibling && w.nextSibling.dataset, v) var P = v.dgst;
                v = P, o = Error(r(419)), o.stack = "", o.digest = v, xr({
                    value: o,
                    source: null,
                    stack: null
                }), s = Tf(t, s, a)
            } else if (Rt || br(t, s, a, !1), v = (a & t.childLanes) !== 0, Rt || v) {
                if (v = nt, v !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : iu(o), o = (o & (v.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== C.retryLane)) throw C.retryLane = o, ca(t, o), cn(v, t, o), Jy;
                w.data === "$?" || Hf(), s = Tf(t, s, a)
            } else w.data === "$?" ? (s.flags |= 192, s.child = t.child, s = null) : (t = C.treeContext, ct = Mn(w.nextSibling), Ft = s, Xe = !0, _i = null, Zn = !1, t !== null && (wn[Sn++] = cs, wn[Sn++] = us, wn[Sn++] = Ai, cs = t.id, us = t.overflow, Ai = s), s = Sf(s, o.children), s.flags |= 4096);
            return s
        }
        return u ? (Bs(), u = o.fallback, w = s.mode, C = t.child, P = C.sibling, o = ls(C, {
            mode: "hidden",
            children: o.children
        }), o.subtreeFlags = C.subtreeFlags & 65011712, P !== null ? u = ls(P, u) : (u = Ti(u, w, a, null), u.flags |= 2), u.return = s, o.return = s, o.sibling = u, s.child = o, o = u, u = s.child, w = t.child.memoizedState, w === null ? w = bf(a) : (C = w.cachePool, C !== null ? (P = wt._currentValue, C = C.parent !== P ? {
            parent: P,
            pool: P
        } : C) : C = Kp(), w = {
            baseLanes: w.baseLanes | a,
            cachePool: C
        }), u.memoizedState = w, u.childLanes = wf(t, v, a), s.memoizedState = xf, o) : (Ls(s), a = t.child, t = a.sibling, a = ls(a, {
            mode: "visible",
            children: o.children
        }), a.return = s, a.sibling = null, t !== null && (v = s.deletions, v === null ? (s.deletions = [t], s.flags |= 16) : v.push(t)), s.child = a, s.memoizedState = null, a)
    }

    function Sf(t, s) {
        return s = bl({
            mode: "visible",
            children: s
        }, t.mode), s.return = t, t.child = s
    }

    function bl(t, s) {
        return t = sn(22, t, null, s), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }

    function Tf(t, s, a) {
        return ba(s, t.child, null, a), t = Sf(s, s.pendingProps.children), t.flags |= 2, s.memoizedState = null, t
    }

    function cg(t, s, a) {
        t.lanes |= s;
        var o = t.alternate;
        o !== null && (o.lanes |= s), Uu(t.return, s, a)
    }

    function Af(t, s, a, o, u) {
        var h = t.memoizedState;
        h === null ? t.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: a,
            tailMode: u
        } : (h.isBackwards = s, h.rendering = null, h.renderingStartTime = 0, h.last = o, h.tail = a, h.tailMode = u)
    }

    function ug(t, s, a) {
        var o = s.pendingProps,
            u = o.revealOrder,
            h = o.tail;
        if (Dt(t, s, o.children, a), o = St.current, (o & 2) !== 0) o = o & 1 | 2, s.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) e: for (t = s.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && cg(t, a, s);
                else if (t.tag === 19) cg(t, a, s);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === s) break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === s) break e;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            o &= 1
        }
        switch (se(St, o), u) {
            case "forwards":
                for (a = s.child, u = null; a !== null;) t = a.alternate, t !== null && yl(t) === null && (u = a), a = a.sibling;
                a = u, a === null ? (u = s.child, s.child = null) : (u = a.sibling, a.sibling = null), Af(s, !1, u, a, h);
                break;
            case "backwards":
                for (a = null, u = s.child, s.child = null; u !== null;) {
                    if (t = u.alternate, t !== null && yl(t) === null) {
                        s.child = u;
                        break
                    }
                    t = u.sibling, u.sibling = a, a = u, u = t
                }
                Af(s, !0, a, null, h);
                break;
            case "together":
                Af(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
        }
        return s.child
    }

    function ps(t, s, a) {
        if (t !== null && (s.dependencies = t.dependencies), Fs |= s.lanes, (a & s.childLanes) === 0)
            if (t !== null) {
                if (br(t, s, a, !1), (a & s.childLanes) === 0) return null
            } else return null;
        if (t !== null && s.child !== t.child) throw Error(r(153));
        if (s.child !== null) {
            for (t = s.child, a = ls(t, t.pendingProps), s.child = a, a.return = s; t.sibling !== null;) t = t.sibling, a = a.sibling = ls(t, t.pendingProps), a.return = s;
            a.sibling = null
        }
        return s.child
    }

    function Ef(t, s) {
        return (t.lanes & s) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && el(t)))
    }

    function jA(t, s, a) {
        switch (s.tag) {
            case 3:
                He(s, s.stateNode.containerInfo), Ds(s, wt, t.memoizedState.cache), vr();
                break;
            case 27:
            case 5:
                mn(s);
                break;
            case 4:
                He(s, s.stateNode.containerInfo);
                break;
            case 10:
                Ds(s, s.type, s.memoizedProps.value);
                break;
            case 13:
                var o = s.memoizedState;
                if (o !== null) return o.dehydrated !== null ? (Ls(s), s.flags |= 128, null) : (a & s.child.childLanes) !== 0 ? lg(t, s, a) : (Ls(s), t = ps(t, s, a), t !== null ? t.sibling : null);
                Ls(s);
                break;
            case 19:
                var u = (t.flags & 128) !== 0;
                if (o = (a & s.childLanes) !== 0, o || (br(t, s, a, !1), o = (a & s.childLanes) !== 0), u) {
                    if (o) return ug(t, s, a);
                    s.flags |= 128
                }
                if (u = s.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), se(St, St.current), o) break;
                return null;
            case 22:
            case 23:
                return s.lanes = 0, sg(t, s, a);
            case 24:
                Ds(s, wt, t.memoizedState.cache)
        }
        return ps(t, s, a)
    }

    function fg(t, s, a) {
        if (t !== null)
            if (t.memoizedProps !== s.pendingProps) Rt = !0;
            else {
                if (!Ef(t, a) && (s.flags & 128) === 0) return Rt = !1, jA(t, s, a);
                Rt = (t.flags & 131072) !== 0
            }
        else Rt = !1, Xe && (s.flags & 1048576) !== 0 && Hp(s, Jo, s.index);
        switch (s.lanes = 0, s.tag) {
            case 16:
                e: {
                    t = s.pendingProps;
                    var o = s.elementType,
                        u = o._init;
                    if (o = u(o._payload), s.type = o, typeof o == "function") Mu(o) ? (t = Di(o, t), s.tag = 1, s = rg(null, s, o, t, a)) : (s.tag = 0, s = vf(null, s, o, t, a));
                    else {
                        if (o != null) {
                            if (u = o.$$typeof, u === H) {
                                s.tag = 11, s = eg(null, s, o, t, a);
                                break e
                            } else if (u === W) {
                                s.tag = 14, s = tg(null, s, o, t, a);
                                break e
                            }
                        }
                        throw s = ee(o) || o, Error(r(306, s, ""))
                    }
                }
                return s;
            case 0:
                return vf(t, s, s.type, s.pendingProps, a);
            case 1:
                return o = s.type, u = Di(o, s.pendingProps), rg(t, s, o, u, a);
            case 3:
                e: {
                    if (He(s, s.stateNode.containerInfo), t === null) throw Error(r(387));o = s.pendingProps;
                    var h = s.memoizedState;u = h.element,
                    Xu(t, s),
                    Cr(s, o, null, a);
                    var v = s.memoizedState;
                    if (o = v.cache, Ds(s, wt, o), o !== h.cache && Hu(s, [wt], a, !0), _r(), o = v.element, h.isDehydrated)
                        if (h = {
                                element: o,
                                isDehydrated: !1,
                                cache: v.cache
                            }, s.updateQueue.baseState = h, s.memoizedState = h, s.flags & 256) {
                            s = og(t, s, o, a);
                            break e
                        } else if (o !== u) {
                        u = xn(Error(r(424)), s), xr(u), s = og(t, s, o, a);
                        break e
                    } else
                        for (t = s.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, ct = Mn(t.firstChild), Ft = s, Xe = !0, _i = null, Zn = !0, a = Fy(s, null, o, a), s.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (vr(), o === u) {
                            s = ps(t, s, a);
                            break e
                        }
                        Dt(t, s, o, a)
                    }
                    s = s.child
                }
                return s;
            case 26:
                return xl(t, s), t === null ? (a = pv(s.type, null, s.pendingProps, null)) ? s.memoizedState = a : Xe || (a = s.type, t = s.pendingProps, o = kl(he.current).createElement(a), o[Lt] = s, o[Qt] = t, kt(o, a, t), Ct(o), s.stateNode = o) : s.memoizedState = pv(s.type, t.memoizedProps, s.pendingProps, t.memoizedState), null;
            case 27:
                return mn(s), t === null && Xe && (o = s.stateNode = dv(s.type, s.pendingProps, he.current), Ft = s, Zn = !0, u = ct, Xs(s.type) ? (ad = u, ct = Mn(o.firstChild)) : ct = u), Dt(t, s, s.pendingProps.children, a), xl(t, s), t === null && (s.flags |= 4194304), s.child;
            case 5:
                return t === null && Xe && ((u = o = ct) && (o = aE(o, s.type, s.pendingProps, Zn), o !== null ? (s.stateNode = o, Ft = s, ct = Mn(o.firstChild), Zn = !1, u = !0) : u = !1), u || Ci(s)), mn(s), u = s.type, h = s.pendingProps, v = t !== null ? t.memoizedProps : null, o = h.children, td(u, h) ? o = null : v !== null && td(u, v) && (s.flags |= 32), s.memoizedState !== null && (u = Ju(t, s, TA, null, null, a), Qr._currentValue = u), xl(t, s), Dt(t, s, o, a), s.child;
            case 6:
                return t === null && Xe && ((t = a = ct) && (a = rE(a, s.pendingProps, Zn), a !== null ? (s.stateNode = a, Ft = s, ct = null, t = !0) : t = !1), t || Ci(s)), null;
            case 13:
                return lg(t, s, a);
            case 4:
                return He(s, s.stateNode.containerInfo), o = s.pendingProps, t === null ? s.child = ba(s, null, o, a) : Dt(t, s, o, a), s.child;
            case 11:
                return eg(t, s, s.type, s.pendingProps, a);
            case 7:
                return Dt(t, s, s.pendingProps, a), s.child;
            case 8:
                return Dt(t, s, s.pendingProps.children, a), s.child;
            case 12:
                return Dt(t, s, s.pendingProps.children, a), s.child;
            case 10:
                return o = s.pendingProps, Ds(s, s.type, o.value), Dt(t, s, o.children, a), s.child;
            case 9:
                return u = s.type._context, o = s.pendingProps.children, Ni(s), u = Bt(u), o = o(u), s.flags |= 1, Dt(t, s, o, a), s.child;
            case 14:
                return tg(t, s, s.type, s.pendingProps, a);
            case 15:
                return ng(t, s, s.type, s.pendingProps, a);
            case 19:
                return ug(t, s, a);
            case 31:
                return o = s.pendingProps, a = s.mode, o = {
                    mode: o.mode,
                    children: o.children
                }, t === null ? (a = bl(o, a), a.ref = s.ref, s.child = a, a.return = s, s = a) : (a = ls(t.child, o), a.ref = s.ref, s.child = a, a.return = s, s = a), s;
            case 22:
                return sg(t, s, a);
            case 24:
                return Ni(s), o = Bt(wt), t === null ? (u = Yu(), u === null && (u = nt, h = qu(), u.pooledCache = h, h.refCount++, h !== null && (u.pooledCacheLanes |= a), u = h), s.memoizedState = {
                    parent: o,
                    cache: u
                }, Zu(s), Ds(s, wt, u)) : ((t.lanes & a) !== 0 && (Xu(t, s), Cr(s, null, null, a), _r()), u = t.memoizedState, h = s.memoizedState, u.parent !== o ? (u = {
                    parent: o,
                    cache: o
                }, s.memoizedState = u, s.lanes === 0 && (s.memoizedState = s.updateQueue.baseState = u), Ds(s, wt, o)) : (o = h.cache, Ds(s, wt, o), o !== u.cache && Hu(s, [wt], a, !0))), Dt(t, s, s.pendingProps.children, a), s.child;
            case 29:
                throw s.pendingProps
        }
        throw Error(r(156, s.tag))
    }

    function ys(t) {
        t.flags |= 4
    }

    function dg(t, s) {
        if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !bv(s)) {
            if (s = Tn.current, s !== null && ((qe & 4194048) === qe ? Xn !== null : (qe & 62914560) !== qe && (qe & 536870912) === 0 || s !== Xn)) throw Ar = Gu, Qp;
            t.flags |= 8192
        }
    }

    function wl(t, s) {
        s !== null && (t.flags |= 4), t.flags & 16384 && (s = t.tag !== 22 ? Ym() : 536870912, t.lanes |= s, Aa |= s)
    }

    function kr(t, s) {
        if (!Xe) switch (t.tailMode) {
            case "hidden":
                s = t.tail;
                for (var a = null; s !== null;) s.alternate !== null && (a = s), s = s.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var o = null; a !== null;) a.alternate !== null && (o = a), a = a.sibling;
                o === null ? s || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null
        }
    }

    function at(t) {
        var s = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            o = 0;
        if (s)
            for (var u = t.child; u !== null;) a |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = t, u = u.sibling;
        else
            for (u = t.child; u !== null;) a |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= o, t.childLanes = a, s
    }

    function DA(t, s, a) {
        var o = s.pendingProps;
        switch (Lu(s), s.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return at(s), null;
            case 1:
                return at(s), null;
            case 3:
                return a = s.stateNode, o = null, t !== null && (o = t.memoizedState.cache), s.memoizedState.cache !== o && (s.flags |= 2048), ds(wt), Ye(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (gr(s) ? ys(s) : t === null || t.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, Yp())), at(s), null;
            case 26:
                return a = s.memoizedState, t === null ? (ys(s), a !== null ? (at(s), dg(s, a)) : (at(s), s.flags &= -16777217)) : a ? a !== t.memoizedState ? (ys(s), at(s), dg(s, a)) : (at(s), s.flags &= -16777217) : (t.memoizedProps !== o && ys(s), at(s), s.flags &= -16777217), null;
            case 27:
                Ht(s), a = he.current;
                var u = s.type;
                if (t !== null && s.stateNode != null) t.memoizedProps !== o && ys(s);
                else {
                    if (!o) {
                        if (s.stateNode === null) throw Error(r(166));
                        return at(s), null
                    }
                    t = xe.current, gr(s) ? qp(s) : (t = dv(u, o, a), s.stateNode = t, ys(s))
                }
                return at(s), null;
            case 5:
                if (Ht(s), a = s.type, t !== null && s.stateNode != null) t.memoizedProps !== o && ys(s);
                else {
                    if (!o) {
                        if (s.stateNode === null) throw Error(r(166));
                        return at(s), null
                    }
                    if (t = xe.current, gr(s)) qp(s);
                    else {
                        switch (u = kl(he.current), t) {
                            case 1:
                                t = u.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        t = u.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof o.is == "string" ? u.createElement("select", {
                                            is: o.is
                                        }) : u.createElement("select"), o.multiple ? t.multiple = !0 : o.size && (t.size = o.size);
                                        break;
                                    default:
                                        t = typeof o.is == "string" ? u.createElement(a, {
                                            is: o.is
                                        }) : u.createElement(a)
                                }
                        }
                        t[Lt] = s, t[Qt] = o;
                        e: for (u = s.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === s) break e;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === s) break e;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        s.stateNode = t;
                        e: switch (kt(t, a, o), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!o.autoFocus;
                                break e;
                            case "img":
                                t = !0;
                                break e;
                            default:
                                t = !1
                        }
                        t && ys(s)
                    }
                }
                return at(s), s.flags &= -16777217, null;
            case 6:
                if (t && s.stateNode != null) t.memoizedProps !== o && ys(s);
                else {
                    if (typeof o != "string" && s.stateNode === null) throw Error(r(166));
                    if (t = he.current, gr(s)) {
                        if (t = s.stateNode, a = s.memoizedProps, o = null, u = Ft, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                o = u.memoizedProps
                        }
                        t[Lt] = s, t = !!(t.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || av(t.nodeValue, a)), t || Ci(s)
                    } else t = kl(t).createTextNode(o), t[Lt] = s, s.stateNode = t
                }
                return at(s), null;
            case 13:
                if (o = s.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (u = gr(s), o !== null && o.dehydrated !== null) {
                        if (t === null) {
                            if (!u) throw Error(r(318));
                            if (u = s.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
                            u[Lt] = s
                        } else vr(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                        at(s), u = !1
                    } else u = Yp(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return s.flags & 256 ? (ms(s), s) : (ms(s), null)
                }
                if (ms(s), (s.flags & 128) !== 0) return s.lanes = a, s;
                if (a = o !== null, t = t !== null && t.memoizedState !== null, a) {
                    o = s.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool);
                    var h = null;
                    o.memoizedState !== null && o.memoizedState.cachePool !== null && (h = o.memoizedState.cachePool.pool), h !== u && (o.flags |= 2048)
                }
                return a !== t && a && (s.child.flags |= 8192), wl(s, s.updateQueue), at(s), null;
            case 4:
                return Ye(), t === null && If(s.stateNode.containerInfo), at(s), null;
            case 10:
                return ds(s.type), at(s), null;
            case 19:
                if (ae(St), u = s.memoizedState, u === null) return at(s), null;
                if (o = (s.flags & 128) !== 0, h = u.rendering, h === null)
                    if (o) kr(u, !1);
                    else {
                        if (ut !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = s.child; t !== null;) {
                                if (h = yl(t), h !== null) {
                                    for (s.flags |= 128, kr(u, !1), t = h.updateQueue, s.updateQueue = t, wl(s, t), s.subtreeFlags = 0, t = a, a = s.child; a !== null;) Up(a, t), a = a.sibling;
                                    return se(St, St.current & 1 | 2), s.child
                                }
                                t = t.sibling
                            }
                        u.tail !== null && yn() > Al && (s.flags |= 128, o = !0, kr(u, !1), s.lanes = 4194304)
                    }
                else {
                    if (!o)
                        if (t = yl(h), t !== null) {
                            if (s.flags |= 128, o = !0, t = t.updateQueue, s.updateQueue = t, wl(s, t), kr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !Xe) return at(s), null
                        } else 2 * yn() - u.renderingStartTime > Al && a !== 536870912 && (s.flags |= 128, o = !0, kr(u, !1), s.lanes = 4194304);
                    u.isBackwards ? (h.sibling = s.child, s.child = h) : (t = u.last, t !== null ? t.sibling = h : s.child = h, u.last = h)
                }
                return u.tail !== null ? (s = u.tail, u.rendering = s, u.tail = s.sibling, u.renderingStartTime = yn(), s.sibling = null, t = St.current, se(St, o ? t & 1 | 2 : t & 1), s) : (at(s), null);
            case 22:
            case 23:
                return ms(s), $u(), o = s.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (s.flags |= 8192) : o && (s.flags |= 8192), o ? (a & 536870912) !== 0 && (s.flags & 128) === 0 && (at(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : at(s), a = s.updateQueue, a !== null && wl(s, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), o = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (o = s.memoizedState.cachePool.pool), o !== a && (s.flags |= 2048), t !== null && ae(Oi), null;
            case 24:
                return a = null, t !== null && (a = t.memoizedState.cache), s.memoizedState.cache !== a && (s.flags |= 2048), ds(wt), at(s), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, s.tag))
    }

    function MA(t, s) {
        switch (Lu(s), s.tag) {
            case 1:
                return t = s.flags, t & 65536 ? (s.flags = t & -65537 | 128, s) : null;
            case 3:
                return ds(wt), Ye(), t = s.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (s.flags = t & -65537 | 128, s) : null;
            case 26:
            case 27:
            case 5:
                return Ht(s), null;
            case 13:
                if (ms(s), t = s.memoizedState, t !== null && t.dehydrated !== null) {
                    if (s.alternate === null) throw Error(r(340));
                    vr()
                }
                return t = s.flags, t & 65536 ? (s.flags = t & -65537 | 128, s) : null;
            case 19:
                return ae(St), null;
            case 4:
                return Ye(), null;
            case 10:
                return ds(s.type), null;
            case 22:
            case 23:
                return ms(s), $u(), t !== null && ae(Oi), t = s.flags, t & 65536 ? (s.flags = t & -65537 | 128, s) : null;
            case 24:
                return ds(wt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function hg(t, s) {
        switch (Lu(s), s.tag) {
            case 3:
                ds(wt), Ye();
                break;
            case 26:
            case 27:
            case 5:
                Ht(s);
                break;
            case 4:
                Ye();
                break;
            case 13:
                ms(s);
                break;
            case 19:
                ae(St);
                break;
            case 10:
                ds(s.type);
                break;
            case 22:
            case 23:
                ms(s), $u(), t !== null && ae(Oi);
                break;
            case 24:
                ds(wt)
        }
    }

    function Vr(t, s) {
        try {
            var a = s.updateQueue,
                o = a !== null ? a.lastEffect : null;
            if (o !== null) {
                var u = o.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        o = void 0;
                        var h = a.create,
                            v = a.inst;
                        o = h(), v.destroy = o
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (w) {
            Je(s, s.return, w)
        }
    }

    function Ps(t, s, a) {
        try {
            var o = s.updateQueue,
                u = o !== null ? o.lastEffect : null;
            if (u !== null) {
                var h = u.next;
                o = h;
                do {
                    if ((o.tag & t) === t) {
                        var v = o.inst,
                            w = v.destroy;
                        if (w !== void 0) {
                            v.destroy = void 0, u = s;
                            var C = a,
                                P = w;
                            try {
                                P()
                            } catch (G) {
                                Je(u, C, G)
                            }
                        }
                    }
                    o = o.next
                } while (o !== h)
            }
        } catch (G) {
            Je(s, s.return, G)
        }
    }

    function mg(t) {
        var s = t.updateQueue;
        if (s !== null) {
            var a = t.stateNode;
            try {
                ty(s, a)
            } catch (o) {
                Je(t, t.return, o)
            }
        }
    }

    function pg(t, s, a) {
        a.props = Di(t.type, t.memoizedProps), a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (o) {
            Je(t, s, o)
        }
    }

    function zr(t, s) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var o = t.stateNode;
                        break;
                    case 30:
                        o = t.stateNode;
                        break;
                    default:
                        o = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(o) : a.current = o
            }
        } catch (u) {
            Je(t, s, u)
        }
    }

    function Kn(t, s) {
        var a = t.ref,
            o = t.refCleanup;
        if (a !== null)
            if (typeof o == "function") try {
                o()
            } catch (u) {
                Je(t, s, u)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (u) {
                Je(t, s, u)
            } else a.current = null
    }

    function yg(t) {
        var s = t.type,
            a = t.memoizedProps,
            o = t.stateNode;
        try {
            e: switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && o.focus();
                    break e;
                case "img":
                    a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet)
            }
        }
        catch (u) {
            Je(t, t.return, u)
        }
    }

    function _f(t, s, a) {
        try {
            var o = t.stateNode;
            eE(o, t.type, a, s), o[Qt] = s
        } catch (u) {
            Je(t, t.return, u)
        }
    }

    function gg(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Xs(t.type) || t.tag === 4
    }

    function Cf(t) {
        e: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || gg(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Xs(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Rf(t, s, a) {
        var o = t.tag;
        if (o === 5 || o === 6) t = t.stateNode, s ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, s) : (s = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, s.appendChild(t), a = a._reactRootContainer, a != null || s.onclick !== null || (s.onclick = Ml));
        else if (o !== 4 && (o === 27 && Xs(t.type) && (a = t.stateNode, s = null), t = t.child, t !== null))
            for (Rf(t, s, a), t = t.sibling; t !== null;) Rf(t, s, a), t = t.sibling
    }

    function Sl(t, s, a) {
        var o = t.tag;
        if (o === 5 || o === 6) t = t.stateNode, s ? a.insertBefore(t, s) : a.appendChild(t);
        else if (o !== 4 && (o === 27 && Xs(t.type) && (a = t.stateNode), t = t.child, t !== null))
            for (Sl(t, s, a), t = t.sibling; t !== null;) Sl(t, s, a), t = t.sibling
    }

    function vg(t) {
        var s = t.stateNode,
            a = t.memoizedProps;
        try {
            for (var o = t.type, u = s.attributes; u.length;) s.removeAttributeNode(u[0]);
            kt(s, o, a), s[Lt] = t, s[Qt] = a
        } catch (h) {
            Je(t, t.return, h)
        }
    }
    var gs = !1,
        ht = !1,
        Nf = !1,
        xg = typeof WeakSet == "function" ? WeakSet : Set,
        Nt = null;

    function kA(t, s) {
        if (t = t.containerInfo, Jf = Ul, t = Op(t), _u(t)) {
            if ("selectionStart" in t) var a = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else e: {
                a = (a = t.ownerDocument) && a.defaultView || window;
                var o = a.getSelection && a.getSelection();
                if (o && o.rangeCount !== 0) {
                    a = o.anchorNode;
                    var u = o.anchorOffset,
                        h = o.focusNode;
                    o = o.focusOffset;
                    try {
                        a.nodeType, h.nodeType
                    } catch {
                        a = null;
                        break e
                    }
                    var v = 0,
                        w = -1,
                        C = -1,
                        P = 0,
                        G = 0,
                        $ = t,
                        U = null;
                    t: for (;;) {
                        for (var q; $ !== a || u !== 0 && $.nodeType !== 3 || (w = v + u), $ !== h || o !== 0 && $.nodeType !== 3 || (C = v + o), $.nodeType === 3 && (v += $.nodeValue.length), (q = $.firstChild) !== null;) U = $, $ = q;
                        for (;;) {
                            if ($ === t) break t;
                            if (U === a && ++P === u && (w = v), U === h && ++G === o && (C = v), (q = $.nextSibling) !== null) break;
                            $ = U, U = $.parentNode
                        }
                        $ = q
                    }
                    a = w === -1 || C === -1 ? null : {
                        start: w,
                        end: C
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (ed = {
                focusedElem: t,
                selectionRange: a
            }, Ul = !1, Nt = s; Nt !== null;)
            if (s = Nt, t = s.child, (s.subtreeFlags & 1024) !== 0 && t !== null) t.return = s, Nt = t;
            else
                for (; Nt !== null;) {
                    switch (s = Nt, h = s.alternate, t = s.flags, s.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && h !== null) {
                                t = void 0, a = s, u = h.memoizedProps, h = h.memoizedState, o = a.stateNode;
                                try {
                                    var Ce = Di(a.type, u, a.elementType === a.type);
                                    t = o.getSnapshotBeforeUpdate(Ce, h), o.__reactInternalSnapshotBeforeUpdate = t
                                } catch (Ee) {
                                    Je(a, a.return, Ee)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = s.stateNode.containerInfo, a = t.nodeType, a === 9) sd(t);
                                else if (a === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        sd(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(r(163))
                    }
                    if (t = s.sibling, t !== null) {
                        t.return = s.return, Nt = t;
                        break
                    }
                    Nt = s.return
                }
    }

    function bg(t, s, a) {
        var o = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Us(t, a), o & 4 && Vr(5, a);
                break;
            case 1:
                if (Us(t, a), o & 4)
                    if (t = a.stateNode, s === null) try {
                        t.componentDidMount()
                    } catch (v) {
                        Je(a, a.return, v)
                    } else {
                        var u = Di(a.type, s.memoizedProps);
                        s = s.memoizedState;
                        try {
                            t.componentDidUpdate(u, s, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (v) {
                            Je(a, a.return, v)
                        }
                    }
                o & 64 && mg(a), o & 512 && zr(a, a.return);
                break;
            case 3:
                if (Us(t, a), o & 64 && (t = a.updateQueue, t !== null)) {
                    if (s = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            s = a.child.stateNode;
                            break;
                        case 1:
                            s = a.child.stateNode
                    }
                    try {
                        ty(t, s)
                    } catch (v) {
                        Je(a, a.return, v)
                    }
                }
                break;
            case 27:
                s === null && o & 4 && vg(a);
            case 26:
            case 5:
                Us(t, a), s === null && o & 4 && yg(a), o & 512 && zr(a, a.return);
                break;
            case 12:
                Us(t, a);
                break;
            case 13:
                Us(t, a), o & 4 && Tg(t, a), o & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = FA.bind(null, a), oE(t, a))));
                break;
            case 22:
                if (o = a.memoizedState !== null || gs, !o) {
                    s = s !== null && s.memoizedState !== null || ht, u = gs;
                    var h = ht;
                    gs = o, (ht = s) && !h ? Hs(t, a, (a.subtreeFlags & 8772) !== 0) : Us(t, a), gs = u, ht = h
                }
                break;
            case 30:
                break;
            default:
                Us(t, a)
        }
    }

    function wg(t) {
        var s = t.alternate;
        s !== null && (t.alternate = null, wg(s)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (s = t.stateNode, s !== null && ou(s)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var it = null,
        Wt = !1;

    function vs(t, s, a) {
        for (a = a.child; a !== null;) Sg(t, s, a), a = a.sibling
    }

    function Sg(t, s, a) {
        if (ue && typeof ue.onCommitFiberUnmount == "function") try {
            ue.onCommitFiberUnmount(J, a)
        } catch {}
        switch (a.tag) {
            case 26:
                ht || Kn(a, s), vs(t, s, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                ht || Kn(a, s);
                var o = it,
                    u = Wt;
                Xs(a.type) && (it = a.stateNode, Wt = !1), vs(t, s, a), Gr(a.stateNode), it = o, Wt = u;
                break;
            case 5:
                ht || Kn(a, s);
            case 6:
                if (o = it, u = Wt, it = null, vs(t, s, a), it = o, Wt = u, it !== null)
                    if (Wt) try {
                        (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(a.stateNode)
                    } catch (h) {
                        Je(a, s, h)
                    } else try {
                        it.removeChild(a.stateNode)
                    } catch (h) {
                        Je(a, s, h)
                    }
                break;
            case 18:
                it !== null && (Wt ? (t = it, uv(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), Jr(t)) : uv(it, a.stateNode));
                break;
            case 4:
                o = it, u = Wt, it = a.stateNode.containerInfo, Wt = !0, vs(t, s, a), it = o, Wt = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ht || Ps(2, a, s), ht || Ps(4, a, s), vs(t, s, a);
                break;
            case 1:
                ht || (Kn(a, s), o = a.stateNode, typeof o.componentWillUnmount == "function" && pg(a, s, o)), vs(t, s, a);
                break;
            case 21:
                vs(t, s, a);
                break;
            case 22:
                ht = (o = ht) || a.memoizedState !== null, vs(t, s, a), ht = o;
                break;
            default:
                vs(t, s, a)
        }
    }

    function Tg(t, s) {
        if (s.memoizedState === null && (t = s.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Jr(t)
        } catch (a) {
            Je(s, s.return, a)
        }
    }

    function VA(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var s = t.stateNode;
                return s === null && (s = t.stateNode = new xg), s;
            case 22:
                return t = t.stateNode, s = t._retryCache, s === null && (s = t._retryCache = new xg), s;
            default:
                throw Error(r(435, t.tag))
        }
    }

    function Of(t, s) {
        var a = VA(t);
        s.forEach(function(o) {
            var u = YA.bind(null, t, o);
            a.has(o) || (a.add(o), o.then(u, u))
        })
    }

    function an(t, s) {
        var a = s.deletions;
        if (a !== null)
            for (var o = 0; o < a.length; o++) {
                var u = a[o],
                    h = t,
                    v = s,
                    w = v;
                e: for (; w !== null;) {
                    switch (w.tag) {
                        case 27:
                            if (Xs(w.type)) {
                                it = w.stateNode, Wt = !1;
                                break e
                            }
                            break;
                        case 5:
                            it = w.stateNode, Wt = !1;
                            break e;
                        case 3:
                        case 4:
                            it = w.stateNode.containerInfo, Wt = !0;
                            break e
                    }
                    w = w.return
                }
                if (it === null) throw Error(r(160));
                Sg(h, v, u), it = null, Wt = !1, h = u.alternate, h !== null && (h.return = null), u.return = null
            }
        if (s.subtreeFlags & 13878)
            for (s = s.child; s !== null;) Ag(s, t), s = s.sibling
    }
    var Dn = null;

    function Ag(t, s) {
        var a = t.alternate,
            o = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                an(s, t), rn(t), o & 4 && (Ps(3, t, t.return), Vr(3, t), Ps(5, t, t.return));
                break;
            case 1:
                an(s, t), rn(t), o & 512 && (ht || a === null || Kn(a, a.return)), o & 64 && gs && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
                break;
            case 26:
                var u = Dn;
                if (an(s, t), rn(t), o & 512 && (ht || a === null || Kn(a, a.return)), o & 4) {
                    var h = a !== null ? a.memoizedState : null;
                    if (o = t.memoizedState, a === null)
                        if (o === null)
                            if (t.stateNode === null) {
                                e: {
                                    o = t.type,
                                    a = t.memoizedProps,
                                    u = u.ownerDocument || u;t: switch (o) {
                                        case "title":
                                            h = u.getElementsByTagName("title")[0], (!h || h[rr] || h[Lt] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) && (h = u.createElement(o), u.head.insertBefore(h, u.querySelector("head > title"))), kt(h, o, a), h[Lt] = t, Ct(h), o = h;
                                            break e;
                                        case "link":
                                            var v = vv("link", "href", u).get(o + (a.href || ""));
                                            if (v) {
                                                for (var w = 0; w < v.length; w++)
                                                    if (h = v[w], h.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && h.getAttribute("rel") === (a.rel == null ? null : a.rel) && h.getAttribute("title") === (a.title == null ? null : a.title) && h.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        v.splice(w, 1);
                                                        break t
                                                    }
                                            }
                                            h = u.createElement(o), kt(h, o, a), u.head.appendChild(h);
                                            break;
                                        case "meta":
                                            if (v = vv("meta", "content", u).get(o + (a.content || ""))) {
                                                for (w = 0; w < v.length; w++)
                                                    if (h = v[w], h.getAttribute("content") === (a.content == null ? null : "" + a.content) && h.getAttribute("name") === (a.name == null ? null : a.name) && h.getAttribute("property") === (a.property == null ? null : a.property) && h.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && h.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        v.splice(w, 1);
                                                        break t
                                                    }
                                            }
                                            h = u.createElement(o), kt(h, o, a), u.head.appendChild(h);
                                            break;
                                        default:
                                            throw Error(r(468, o))
                                    }
                                    h[Lt] = t,
                                    Ct(h),
                                    o = h
                                }
                                t.stateNode = o
                            }
                    else xv(u, t.type, t.stateNode);
                    else t.stateNode = gv(u, o, t.memoizedProps);
                    else h !== o ? (h === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : h.count--, o === null ? xv(u, t.type, t.stateNode) : gv(u, o, t.memoizedProps)) : o === null && t.stateNode !== null && _f(t, t.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                an(s, t), rn(t), o & 512 && (ht || a === null || Kn(a, a.return)), a !== null && o & 4 && _f(t, t.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (an(s, t), rn(t), o & 512 && (ht || a === null || Kn(a, a.return)), t.flags & 32) {
                    u = t.stateNode;
                    try {
                        na(u, "")
                    } catch (q) {
                        Je(t, t.return, q)
                    }
                }
                o & 4 && t.stateNode != null && (u = t.memoizedProps, _f(t, u, a !== null ? a.memoizedProps : u)), o & 1024 && (Nf = !0);
                break;
            case 6:
                if (an(s, t), rn(t), o & 4) {
                    if (t.stateNode === null) throw Error(r(162));
                    o = t.memoizedProps, a = t.stateNode;
                    try {
                        a.nodeValue = o
                    } catch (q) {
                        Je(t, t.return, q)
                    }
                }
                break;
            case 3:
                if (Ll = null, u = Dn, Dn = Vl(s.containerInfo), an(s, t), Dn = u, rn(t), o & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    Jr(s.containerInfo)
                } catch (q) {
                    Je(t, t.return, q)
                }
                Nf && (Nf = !1, Eg(t));
                break;
            case 4:
                o = Dn, Dn = Vl(t.stateNode.containerInfo), an(s, t), rn(t), Dn = o;
                break;
            case 12:
                an(s, t), rn(t);
                break;
            case 13:
                an(s, t), rn(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (zf = yn()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Of(t, o)));
                break;
            case 22:
                u = t.memoizedState !== null;
                var C = a !== null && a.memoizedState !== null,
                    P = gs,
                    G = ht;
                if (gs = P || u, ht = G || C, an(s, t), ht = G, gs = P, rn(t), o & 8192) e: for (s = t.stateNode, s._visibility = u ? s._visibility & -2 : s._visibility | 1, u && (a === null || C || gs || ht || Mi(t)), a = null, s = t;;) {
                    if (s.tag === 5 || s.tag === 26) {
                        if (a === null) {
                            C = a = s;
                            try {
                                if (h = C.stateNode, u) v = h.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                                else {
                                    w = C.stateNode;
                                    var $ = C.memoizedProps.style,
                                        U = $ != null && $.hasOwnProperty("display") ? $.display : null;
                                    w.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (q) {
                                Je(C, C.return, q)
                            }
                        }
                    } else if (s.tag === 6) {
                        if (a === null) {
                            C = s;
                            try {
                                C.stateNode.nodeValue = u ? "" : C.memoizedProps
                            } catch (q) {
                                Je(C, C.return, q)
                            }
                        }
                    } else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === t) && s.child !== null) {
                        s.child.return = s, s = s.child;
                        continue
                    }
                    if (s === t) break e;
                    for (; s.sibling === null;) {
                        if (s.return === null || s.return === t) break e;
                        a === s && (a = null), s = s.return
                    }
                    a === s && (a = null), s.sibling.return = s.return, s = s.sibling
                }
                o & 4 && (o = t.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, Of(t, a))));
                break;
            case 19:
                an(s, t), rn(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Of(t, o)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                an(s, t), rn(t)
        }
    }

    function rn(t) {
        var s = t.flags;
        if (s & 2) {
            try {
                for (var a, o = t.return; o !== null;) {
                    if (gg(o)) {
                        a = o;
                        break
                    }
                    o = o.return
                }
                if (a == null) throw Error(r(160));
                switch (a.tag) {
                    case 27:
                        var u = a.stateNode,
                            h = Cf(t);
                        Sl(t, h, u);
                        break;
                    case 5:
                        var v = a.stateNode;
                        a.flags & 32 && (na(v, ""), a.flags &= -33);
                        var w = Cf(t);
                        Sl(t, w, v);
                        break;
                    case 3:
                    case 4:
                        var C = a.stateNode.containerInfo,
                            P = Cf(t);
                        Rf(t, P, C);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (G) {
                Je(t, t.return, G)
            }
            t.flags &= -3
        }
        s & 4096 && (t.flags &= -4097)
    }

    function Eg(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var s = t;
                Eg(s), s.tag === 5 && s.flags & 1024 && s.stateNode.reset(), t = t.sibling
            }
    }

    function Us(t, s) {
        if (s.subtreeFlags & 8772)
            for (s = s.child; s !== null;) bg(t, s.alternate, s), s = s.sibling
    }

    function Mi(t) {
        for (t = t.child; t !== null;) {
            var s = t;
            switch (s.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Ps(4, s, s.return), Mi(s);
                    break;
                case 1:
                    Kn(s, s.return);
                    var a = s.stateNode;
                    typeof a.componentWillUnmount == "function" && pg(s, s.return, a), Mi(s);
                    break;
                case 27:
                    Gr(s.stateNode);
                case 26:
                case 5:
                    Kn(s, s.return), Mi(s);
                    break;
                case 22:
                    s.memoizedState === null && Mi(s);
                    break;
                case 30:
                    Mi(s);
                    break;
                default:
                    Mi(s)
            }
            t = t.sibling
        }
    }

    function Hs(t, s, a) {
        for (a = a && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null;) {
            var o = s.alternate,
                u = t,
                h = s,
                v = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    Hs(u, h, a), Vr(4, h);
                    break;
                case 1:
                    if (Hs(u, h, a), o = h, u = o.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (P) {
                        Je(o, o.return, P)
                    }
                    if (o = h, u = o.updateQueue, u !== null) {
                        var w = o.stateNode;
                        try {
                            var C = u.shared.hiddenCallbacks;
                            if (C !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++) ey(C[u], w)
                        } catch (P) {
                            Je(o, o.return, P)
                        }
                    }
                    a && v & 64 && mg(h), zr(h, h.return);
                    break;
                case 27:
                    vg(h);
                case 26:
                case 5:
                    Hs(u, h, a), a && o === null && v & 4 && yg(h), zr(h, h.return);
                    break;
                case 12:
                    Hs(u, h, a);
                    break;
                case 13:
                    Hs(u, h, a), a && v & 4 && Tg(u, h);
                    break;
                case 22:
                    h.memoizedState === null && Hs(u, h, a), zr(h, h.return);
                    break;
                case 30:
                    break;
                default:
                    Hs(u, h, a)
            }
            s = s.sibling
        }
    }

    function jf(t, s) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (t = s.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && wr(a))
    }

    function Df(t, s) {
        t = null, s.alternate !== null && (t = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== t && (s.refCount++, t != null && wr(t))
    }

    function Qn(t, s, a, o) {
        if (s.subtreeFlags & 10256)
            for (s = s.child; s !== null;) _g(t, s, a, o), s = s.sibling
    }

    function _g(t, s, a, o) {
        var u = s.flags;
        switch (s.tag) {
            case 0:
            case 11:
            case 15:
                Qn(t, s, a, o), u & 2048 && Vr(9, s);
                break;
            case 1:
                Qn(t, s, a, o);
                break;
            case 3:
                Qn(t, s, a, o), u & 2048 && (t = null, s.alternate !== null && (t = s.alternate.memoizedState.cache), s = s.memoizedState.cache, s !== t && (s.refCount++, t != null && wr(t)));
                break;
            case 12:
                if (u & 2048) {
                    Qn(t, s, a, o), t = s.stateNode;
                    try {
                        var h = s.memoizedProps,
                            v = h.id,
                            w = h.onPostCommit;
                        typeof w == "function" && w(v, s.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (C) {
                        Je(s, s.return, C)
                    }
                } else Qn(t, s, a, o);
                break;
            case 13:
                Qn(t, s, a, o);
                break;
            case 23:
                break;
            case 22:
                h = s.stateNode, v = s.alternate, s.memoizedState !== null ? h._visibility & 2 ? Qn(t, s, a, o) : Lr(t, s) : h._visibility & 2 ? Qn(t, s, a, o) : (h._visibility |= 2, wa(t, s, a, o, (s.subtreeFlags & 10256) !== 0)), u & 2048 && jf(v, s);
                break;
            case 24:
                Qn(t, s, a, o), u & 2048 && Df(s.alternate, s);
                break;
            default:
                Qn(t, s, a, o)
        }
    }

    function wa(t, s, a, o, u) {
        for (u = u && (s.subtreeFlags & 10256) !== 0, s = s.child; s !== null;) {
            var h = t,
                v = s,
                w = a,
                C = o,
                P = v.flags;
            switch (v.tag) {
                case 0:
                case 11:
                case 15:
                    wa(h, v, w, C, u), Vr(8, v);
                    break;
                case 23:
                    break;
                case 22:
                    var G = v.stateNode;
                    v.memoizedState !== null ? G._visibility & 2 ? wa(h, v, w, C, u) : Lr(h, v) : (G._visibility |= 2, wa(h, v, w, C, u)), u && P & 2048 && jf(v.alternate, v);
                    break;
                case 24:
                    wa(h, v, w, C, u), u && P & 2048 && Df(v.alternate, v);
                    break;
                default:
                    wa(h, v, w, C, u)
            }
            s = s.sibling
        }
    }

    function Lr(t, s) {
        if (s.subtreeFlags & 10256)
            for (s = s.child; s !== null;) {
                var a = t,
                    o = s,
                    u = o.flags;
                switch (o.tag) {
                    case 22:
                        Lr(a, o), u & 2048 && jf(o.alternate, o);
                        break;
                    case 24:
                        Lr(a, o), u & 2048 && Df(o.alternate, o);
                        break;
                    default:
                        Lr(a, o)
                }
                s = s.sibling
            }
    }
    var Br = 8192;

    function Sa(t) {
        if (t.subtreeFlags & Br)
            for (t = t.child; t !== null;) Cg(t), t = t.sibling
    }

    function Cg(t) {
        switch (t.tag) {
            case 26:
                Sa(t), t.flags & Br && t.memoizedState !== null && bE(Dn, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Sa(t);
                break;
            case 3:
            case 4:
                var s = Dn;
                Dn = Vl(t.stateNode.containerInfo), Sa(t), Dn = s;
                break;
            case 22:
                t.memoizedState === null && (s = t.alternate, s !== null && s.memoizedState !== null ? (s = Br, Br = 16777216, Sa(t), Br = s) : Sa(t));
                break;
            default:
                Sa(t)
        }
    }

    function Rg(t) {
        var s = t.alternate;
        if (s !== null && (t = s.child, t !== null)) {
            s.child = null;
            do s = t.sibling, t.sibling = null, t = s; while (t !== null)
        }
    }

    function Pr(t) {
        var s = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (s !== null)
                for (var a = 0; a < s.length; a++) {
                    var o = s[a];
                    Nt = o, Og(o, t)
                }
            Rg(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Ng(t), t = t.sibling
    }

    function Ng(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Pr(t), t.flags & 2048 && Ps(9, t, t.return);
                break;
            case 3:
                Pr(t);
                break;
            case 12:
                Pr(t);
                break;
            case 22:
                var s = t.stateNode;
                t.memoizedState !== null && s._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (s._visibility &= -3, Tl(t)) : Pr(t);
                break;
            default:
                Pr(t)
        }
    }

    function Tl(t) {
        var s = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (s !== null)
                for (var a = 0; a < s.length; a++) {
                    var o = s[a];
                    Nt = o, Og(o, t)
                }
            Rg(t)
        }
        for (t = t.child; t !== null;) {
            switch (s = t, s.tag) {
                case 0:
                case 11:
                case 15:
                    Ps(8, s, s.return), Tl(s);
                    break;
                case 22:
                    a = s.stateNode, a._visibility & 2 && (a._visibility &= -3, Tl(s));
                    break;
                default:
                    Tl(s)
            }
            t = t.sibling
        }
    }

    function Og(t, s) {
        for (; Nt !== null;) {
            var a = Nt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Ps(8, a, s);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var o = a.memoizedState.cachePool.pool;
                        o != null && o.refCount++
                    }
                    break;
                case 24:
                    wr(a.memoizedState.cache)
            }
            if (o = a.child, o !== null) o.return = a, Nt = o;
            else e: for (a = t; Nt !== null;) {
                o = Nt;
                var u = o.sibling,
                    h = o.return;
                if (wg(o), o === a) {
                    Nt = null;
                    break e
                }
                if (u !== null) {
                    u.return = h, Nt = u;
                    break e
                }
                Nt = h
            }
        }
    }
    var zA = {
            getCacheForType: function(t) {
                var s = Bt(wt),
                    a = s.data.get(t);
                return a === void 0 && (a = t(), s.data.set(t, a)), a
            }
        },
        LA = typeof WeakMap == "function" ? WeakMap : Map,
        Ke = 0,
        nt = null,
        Be = null,
        qe = 0,
        Qe = 0,
        on = null,
        qs = !1,
        Ta = !1,
        Mf = !1,
        xs = 0,
        ut = 0,
        Fs = 0,
        ki = 0,
        kf = 0,
        An = 0,
        Aa = 0,
        Ur = null,
        Jt = null,
        Vf = !1,
        zf = 0,
        Al = 1 / 0,
        El = null,
        Ys = null,
        Mt = 0,
        Gs = null,
        Ea = null,
        _a = 0,
        Lf = 0,
        Bf = null,
        jg = null,
        Hr = 0,
        Pf = null;

    function ln() {
        if ((Ke & 2) !== 0 && qe !== 0) return qe & -qe;
        if (V.T !== null) {
            var t = ha;
            return t !== 0 ? t : Zf()
        }
        return Xm()
    }

    function Dg() {
        An === 0 && (An = (qe & 536870912) === 0 || Xe ? ir() : 536870912);
        var t = Tn.current;
        return t !== null && (t.flags |= 32), An
    }

    function cn(t, s, a) {
        (t === nt && (Qe === 2 || Qe === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0), Zs(t, qe, An, !1)), ar(t, a), ((Ke & 2) === 0 || t !== nt) && (t === nt && ((Ke & 2) === 0 && (ki |= a), ut === 4 && Zs(t, qe, An, !1)), In(t))
    }

    function Mg(t, s, a) {
        if ((Ke & 6) !== 0) throw Error(r(327));
        var o = !a && (s & 124) === 0 && (s & t.expiredLanes) === 0 || Ns(t, s),
            u = o ? UA(t, s) : qf(t, s, !0),
            h = o;
        do {
            if (u === 0) {
                Ta && !o && Zs(t, s, 0, !1);
                break
            } else {
                if (a = t.current.alternate, h && !BA(a)) {
                    u = qf(t, s, !1), h = !1;
                    continue
                }
                if (u === 2) {
                    if (h = s, t.errorRecoveryDisabledLanes & h) var v = 0;
                    else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
                    if (v !== 0) {
                        s = v;
                        e: {
                            var w = t;u = Ur;
                            var C = w.current.memoizedState.isDehydrated;
                            if (C && (Ca(w, v).flags |= 256), v = qf(w, v, !1), v !== 2) {
                                if (Mf && !C) {
                                    w.errorRecoveryDisabledLanes |= h, ki |= h, u = 4;
                                    break e
                                }
                                h = Jt, Jt = u, h !== null && (Jt === null ? Jt = h : Jt.push.apply(Jt, h))
                            }
                            u = v
                        }
                        if (h = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    Ca(t, 0), Zs(t, s, 0, !0);
                    break
                }
                e: {
                    switch (o = t, h = u, h) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((s & 4194048) !== s) break;
                        case 6:
                            Zs(o, s, An, !qs);
                            break e;
                        case 2:
                            Jt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((s & 62914560) === s && (u = zf + 300 - yn(), 10 < u)) {
                        if (Zs(o, s, An, !qs), Ki(o, 0, !0) !== 0) break e;
                        o.timeoutHandle = lv(kg.bind(null, o, a, Jt, El, Vf, s, An, ki, Aa, qs, h, 2, -0, 0), u);
                        break e
                    }
                    kg(o, a, Jt, El, Vf, s, An, ki, Aa, qs, h, 0, -0, 0)
                }
            }
            break
        } while (!0);
        In(t)
    }

    function kg(t, s, a, o, u, h, v, w, C, P, G, $, U, q) {
        if (t.timeoutHandle = -1, $ = s.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (Kr = {
                stylesheets: null,
                count: 0,
                unsuspend: xE
            }, Cg(s), $ = wE(), $ !== null)) {
            t.cancelPendingCommit = $(Hg.bind(null, t, s, h, a, o, u, v, w, C, G, 1, U, q)), Zs(t, h, v, !P);
            return
        }
        Hg(t, s, h, a, o, u, v, w, C)
    }

    function BA(t) {
        for (var s = t;;) {
            var a = s.tag;
            if ((a === 0 || a === 11 || a === 15) && s.flags & 16384 && (a = s.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var o = 0; o < a.length; o++) {
                    var u = a[o],
                        h = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!nn(h(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = s.child, s.subtreeFlags & 16384 && a !== null) a.return = s, s = a;
            else {
                if (s === t) break;
                for (; s.sibling === null;) {
                    if (s.return === null || s.return === t) return !0;
                    s = s.return
                }
                s.sibling.return = s.return, s = s.sibling
            }
        }
        return !0
    }

    function Zs(t, s, a, o) {
        s &= ~kf, s &= ~ki, t.suspendedLanes |= s, t.pingedLanes &= ~s, o && (t.warmLanes |= s), o = t.expirationTimes;
        for (var u = s; 0 < u;) {
            var h = 31 - je(u),
                v = 1 << h;
            o[h] = -1, u &= ~v
        }
        a !== 0 && Gm(t, a, s)
    }

    function _l() {
        return (Ke & 6) === 0 ? (qr(0), !1) : !0
    }

    function Uf() {
        if (Be !== null) {
            if (Qe === 0) var t = Be.return;
            else t = Be, fs = Ri = null, nf(t), xa = null, Dr = 0, t = Be;
            for (; t !== null;) hg(t.alternate, t), t = t.return;
            Be = null
        }
    }

    function Ca(t, s) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1, nE(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Uf(), nt = t, Be = a = ls(t.current, null), qe = s, Qe = 0, on = null, qs = !1, Ta = Ns(t, s), Mf = !1, Aa = An = kf = ki = Fs = ut = 0, Jt = Ur = null, Vf = !1, (s & 8) !== 0 && (s |= s & 32);
        var o = t.entangledLanes;
        if (o !== 0)
            for (t = t.entanglements, o &= s; 0 < o;) {
                var u = 31 - je(o),
                    h = 1 << u;
                s |= t[u], o &= ~h
            }
        return xs = s, Ko(), a
    }

    function Vg(t, s) {
        Me = null, V.H = hl, s === Tr || s === sl ? (s = Wp(), Qe = 3) : s === Qp ? (s = Wp(), Qe = 4) : Qe = s === Jy ? 8 : s !== null && typeof s == "object" && typeof s.then == "function" ? 6 : 1, on = s, Be === null && (ut = 1, vl(t, xn(s, t.current)))
    }

    function zg() {
        var t = V.H;
        return V.H = hl, t === null ? hl : t
    }

    function Lg() {
        var t = V.A;
        return V.A = zA, t
    }

    function Hf() {
        ut = 4, qs || (qe & 4194048) !== qe && Tn.current !== null || (Ta = !0), (Fs & 134217727) === 0 && (ki & 134217727) === 0 || nt === null || Zs(nt, qe, An, !1)
    }

    function qf(t, s, a) {
        var o = Ke;
        Ke |= 2;
        var u = zg(),
            h = Lg();
        (nt !== t || qe !== s) && (El = null, Ca(t, s)), s = !1;
        var v = ut;
        e: do try {
                if (Qe !== 0 && Be !== null) {
                    var w = Be,
                        C = on;
                    switch (Qe) {
                        case 8:
                            Uf(), v = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Tn.current === null && (s = !0);
                            var P = Qe;
                            if (Qe = 0, on = null, Ra(t, w, C, P), a && Ta) {
                                v = 0;
                                break e
                            }
                            break;
                        default:
                            P = Qe, Qe = 0, on = null, Ra(t, w, C, P)
                    }
                }
                PA(), v = ut;
                break
            } catch (G) {
                Vg(t, G)
            }
            while (!0);
            return s && t.shellSuspendCounter++, fs = Ri = null, Ke = o, V.H = u, V.A = h, Be === null && (nt = null, qe = 0, Ko()), v
    }

    function PA() {
        for (; Be !== null;) Bg(Be)
    }

    function UA(t, s) {
        var a = Ke;
        Ke |= 2;
        var o = zg(),
            u = Lg();
        nt !== t || qe !== s ? (El = null, Al = yn() + 500, Ca(t, s)) : Ta = Ns(t, s);
        e: do try {
                if (Qe !== 0 && Be !== null) {
                    s = Be;
                    var h = on;
                    t: switch (Qe) {
                        case 1:
                            Qe = 0, on = null, Ra(t, s, h, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ip(h)) {
                                Qe = 0, on = null, Pg(s);
                                break
                            }
                            s = function() {
                                Qe !== 2 && Qe !== 9 || nt !== t || (Qe = 7), In(t)
                            }, h.then(s, s);
                            break e;
                        case 3:
                            Qe = 7;
                            break e;
                        case 4:
                            Qe = 5;
                            break e;
                        case 7:
                            Ip(h) ? (Qe = 0, on = null, Pg(s)) : (Qe = 0, on = null, Ra(t, s, h, 7));
                            break;
                        case 5:
                            var v = null;
                            switch (Be.tag) {
                                case 26:
                                    v = Be.memoizedState;
                                case 5:
                                case 27:
                                    var w = Be;
                                    if (!v || bv(v)) {
                                        Qe = 0, on = null;
                                        var C = w.sibling;
                                        if (C !== null) Be = C;
                                        else {
                                            var P = w.return;
                                            P !== null ? (Be = P, Cl(P)) : Be = null
                                        }
                                        break t
                                    }
                            }
                            Qe = 0, on = null, Ra(t, s, h, 5);
                            break;
                        case 6:
                            Qe = 0, on = null, Ra(t, s, h, 6);
                            break;
                        case 8:
                            Uf(), ut = 6;
                            break e;
                        default:
                            throw Error(r(462))
                    }
                }
                HA();
                break
            } catch (G) {
                Vg(t, G)
            }
            while (!0);
            return fs = Ri = null, V.H = o, V.A = u, Ke = a, Be !== null ? 0 : (nt = null, qe = 0, Ko(), ut)
    }

    function HA() {
        for (; Be !== null && !Vo();) Bg(Be)
    }

    function Bg(t) {
        var s = fg(t.alternate, t, xs);
        t.memoizedProps = t.pendingProps, s === null ? Cl(t) : Be = s
    }

    function Pg(t) {
        var s = t,
            a = s.alternate;
        switch (s.tag) {
            case 15:
            case 0:
                s = ag(a, s, s.pendingProps, s.type, void 0, qe);
                break;
            case 11:
                s = ag(a, s, s.pendingProps, s.type.render, s.ref, qe);
                break;
            case 5:
                nf(s);
            default:
                hg(a, s), s = Be = Up(s, xs), s = fg(a, s, xs)
        }
        t.memoizedProps = t.pendingProps, s === null ? Cl(t) : Be = s
    }

    function Ra(t, s, a, o) {
        fs = Ri = null, nf(s), xa = null, Dr = 0;
        var u = s.return;
        try {
            if (OA(t, u, s, a, qe)) {
                ut = 1, vl(t, xn(a, t.current)), Be = null;
                return
            }
        } catch (h) {
            if (u !== null) throw Be = u, h;
            ut = 1, vl(t, xn(a, t.current)), Be = null;
            return
        }
        s.flags & 32768 ? (Xe || o === 1 ? t = !0 : Ta || (qe & 536870912) !== 0 ? t = !1 : (qs = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Tn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Ug(s, t)) : Cl(s)
    }

    function Cl(t) {
        var s = t;
        do {
            if ((s.flags & 32768) !== 0) {
                Ug(s, qs);
                return
            }
            t = s.return;
            var a = DA(s.alternate, s, xs);
            if (a !== null) {
                Be = a;
                return
            }
            if (s = s.sibling, s !== null) {
                Be = s;
                return
            }
            Be = s = t
        } while (s !== null);
        ut === 0 && (ut = 5)
    }

    function Ug(t, s) {
        do {
            var a = MA(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767, Be = a;
                return
            }
            if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !s && (t = t.sibling, t !== null)) {
                Be = t;
                return
            }
            Be = t = a
        } while (t !== null);
        ut = 6, Be = null
    }

    function Hg(t, s, a, o, u, h, v, w, C) {
        t.cancelPendingCommit = null;
        do Rl(); while (Mt !== 0);
        if ((Ke & 6) !== 0) throw Error(r(327));
        if (s !== null) {
            if (s === t.current) throw Error(r(177));
            if (h = s.lanes | s.childLanes, h |= ju, xT(t, a, h, v, w, C), t === nt && (Be = nt = null, qe = 0), Ea = s, Gs = t, _a = a, Lf = h, Bf = u, jg = o, (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, GA(N, function() {
                    return Zg(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), o = (s.flags & 13878) !== 0, (s.subtreeFlags & 13878) !== 0 || o) {
                o = V.T, V.T = null, u = Z.p, Z.p = 2, v = Ke, Ke |= 4;
                try {
                    kA(t, s, a)
                } finally {
                    Ke = v, Z.p = u, V.T = o
                }
            }
            Mt = 1, qg(), Fg(), Yg()
        }
    }

    function qg() {
        if (Mt === 1) {
            Mt = 0;
            var t = Gs,
                s = Ea,
                a = (s.flags & 13878) !== 0;
            if ((s.subtreeFlags & 13878) !== 0 || a) {
                a = V.T, V.T = null;
                var o = Z.p;
                Z.p = 2;
                var u = Ke;
                Ke |= 4;
                try {
                    Ag(s, t);
                    var h = ed,
                        v = Op(t.containerInfo),
                        w = h.focusedElem,
                        C = h.selectionRange;
                    if (v !== w && w && w.ownerDocument && Np(w.ownerDocument.documentElement, w)) {
                        if (C !== null && _u(w)) {
                            var P = C.start,
                                G = C.end;
                            if (G === void 0 && (G = P), "selectionStart" in w) w.selectionStart = P, w.selectionEnd = Math.min(G, w.value.length);
                            else {
                                var $ = w.ownerDocument || document,
                                    U = $ && $.defaultView || window;
                                if (U.getSelection) {
                                    var q = U.getSelection(),
                                        Ce = w.textContent.length,
                                        Ee = Math.min(C.start, Ce),
                                        We = C.end === void 0 ? Ee : Math.min(C.end, Ce);
                                    !q.extend && Ee > We && (v = We, We = Ee, Ee = v);
                                    var k = Rp(w, Ee),
                                        O = Rp(w, We);
                                    if (k && O && (q.rangeCount !== 1 || q.anchorNode !== k.node || q.anchorOffset !== k.offset || q.focusNode !== O.node || q.focusOffset !== O.offset)) {
                                        var L = $.createRange();
                                        L.setStart(k.node, k.offset), q.removeAllRanges(), Ee > We ? (q.addRange(L), q.extend(O.node, O.offset)) : (L.setEnd(O.node, O.offset), q.addRange(L))
                                    }
                                }
                            }
                        }
                        for ($ = [], q = w; q = q.parentNode;) q.nodeType === 1 && $.push({
                            element: q,
                            left: q.scrollLeft,
                            top: q.scrollTop
                        });
                        for (typeof w.focus == "function" && w.focus(), w = 0; w < $.length; w++) {
                            var Q = $[w];
                            Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top
                        }
                    }
                    Ul = !!Jf, ed = Jf = null
                } finally {
                    Ke = u, Z.p = o, V.T = a
                }
            }
            t.current = s, Mt = 2
        }
    }

    function Fg() {
        if (Mt === 2) {
            Mt = 0;
            var t = Gs,
                s = Ea,
                a = (s.flags & 8772) !== 0;
            if ((s.subtreeFlags & 8772) !== 0 || a) {
                a = V.T, V.T = null;
                var o = Z.p;
                Z.p = 2;
                var u = Ke;
                Ke |= 4;
                try {
                    bg(t, s.alternate, s)
                } finally {
                    Ke = u, Z.p = o, V.T = a
                }
            }
            Mt = 3
        }
    }

    function Yg() {
        if (Mt === 4 || Mt === 3) {
            Mt = 0, zo();
            var t = Gs,
                s = Ea,
                a = _a,
                o = jg;
            (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0 ? Mt = 5 : (Mt = 0, Ea = Gs = null, Gg(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (Ys = null), au(a), s = s.stateNode, ue && typeof ue.onCommitFiberRoot == "function") try {
                ue.onCommitFiberRoot(J, s, void 0, (s.current.flags & 128) === 128)
            } catch {}
            if (o !== null) {
                s = V.T, u = Z.p, Z.p = 2, V.T = null;
                try {
                    for (var h = t.onRecoverableError, v = 0; v < o.length; v++) {
                        var w = o[v];
                        h(w.value, {
                            componentStack: w.stack
                        })
                    }
                } finally {
                    V.T = s, Z.p = u
                }
            }(_a & 3) !== 0 && Rl(), In(t), u = t.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? t === Pf ? Hr++ : (Hr = 0, Pf = t) : Hr = 0, qr(0)
        }
    }

    function Gg(t, s) {
        (t.pooledCacheLanes &= s) === 0 && (s = t.pooledCache, s != null && (t.pooledCache = null, wr(s)))
    }

    function Rl(t) {
        return qg(), Fg(), Yg(), Zg()
    }

    function Zg() {
        if (Mt !== 5) return !1;
        var t = Gs,
            s = Lf;
        Lf = 0;
        var a = au(_a),
            o = V.T,
            u = Z.p;
        try {
            Z.p = 32 > a ? 32 : a, V.T = null, a = Bf, Bf = null;
            var h = Gs,
                v = _a;
            if (Mt = 0, Ea = Gs = null, _a = 0, (Ke & 6) !== 0) throw Error(r(331));
            var w = Ke;
            if (Ke |= 4, Ng(h.current), _g(h, h.current, v, a), Ke = w, qr(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function") try {
                ue.onPostCommitFiberRoot(J, h)
            } catch {}
            return !0
        } finally {
            Z.p = u, V.T = o, Gg(t, s)
        }
    }

    function Xg(t, s, a) {
        s = xn(a, s), s = gf(t.stateNode, s, 2), t = Vs(t, s, 2), t !== null && (ar(t, 2), In(t))
    }

    function Je(t, s, a) {
        if (t.tag === 3) Xg(t, t, a);
        else
            for (; s !== null;) {
                if (s.tag === 3) {
                    Xg(s, t, a);
                    break
                } else if (s.tag === 1) {
                    var o = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ys === null || !Ys.has(o))) {
                        t = xn(a, t), a = $y(2), o = Vs(s, a, 2), o !== null && (Wy(a, o, s, t), ar(o, 2), In(o));
                        break
                    }
                }
                s = s.return
            }
    }

    function Ff(t, s, a) {
        var o = t.pingCache;
        if (o === null) {
            o = t.pingCache = new LA;
            var u = new Set;
            o.set(s, u)
        } else u = o.get(s), u === void 0 && (u = new Set, o.set(s, u));
        u.has(a) || (Mf = !0, u.add(a), t = qA.bind(null, t, s, a), s.then(t, t))
    }

    function qA(t, s, a) {
        var o = t.pingCache;
        o !== null && o.delete(s), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, nt === t && (qe & a) === a && (ut === 4 || ut === 3 && (qe & 62914560) === qe && 300 > yn() - zf ? (Ke & 2) === 0 && Ca(t, 0) : kf |= a, Aa === qe && (Aa = 0)), In(t)
    }

    function Kg(t, s) {
        s === 0 && (s = Ym()), t = ca(t, s), t !== null && (ar(t, s), In(t))
    }

    function FA(t) {
        var s = t.memoizedState,
            a = 0;
        s !== null && (a = s.retryLane), Kg(t, a)
    }

    function YA(t, s) {
        var a = 0;
        switch (t.tag) {
            case 13:
                var o = t.stateNode,
                    u = t.memoizedState;
                u !== null && (a = u.retryLane);
                break;
            case 19:
                o = t.stateNode;
                break;
            case 22:
                o = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        o !== null && o.delete(s), Kg(t, a)
    }

    function GA(t, s) {
        return qt(t, s)
    }
    var Nl = null,
        Na = null,
        Yf = !1,
        Ol = !1,
        Gf = !1,
        Vi = 0;

    function In(t) {
        t !== Na && t.next === null && (Na === null ? Nl = Na = t : Na = Na.next = t), Ol = !0, Yf || (Yf = !0, XA())
    }

    function qr(t, s) {
        if (!Gf && Ol) {
            Gf = !0;
            do
                for (var a = !1, o = Nl; o !== null;) {
                    if (t !== 0) {
                        var u = o.pendingLanes;
                        if (u === 0) var h = 0;
                        else {
                            var v = o.suspendedLanes,
                                w = o.pingedLanes;
                            h = (1 << 31 - je(42 | t) + 1) - 1, h &= u & ~(v & ~w), h = h & 201326741 ? h & 201326741 | 1 : h ? h | 2 : 0
                        }
                        h !== 0 && (a = !0, Wg(o, h))
                    } else h = qe, h = Ki(o, o === nt ? h : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (h & 3) === 0 || Ns(o, h) || (a = !0, Wg(o, h));
                    o = o.next
                }
            while (a);
            Gf = !1
        }
    }

    function ZA() {
        Qg()
    }

    function Qg() {
        Ol = Yf = !1;
        var t = 0;
        Vi !== 0 && (tE() && (t = Vi), Vi = 0);
        for (var s = yn(), a = null, o = Nl; o !== null;) {
            var u = o.next,
                h = Ig(o, s);
            h === 0 ? (o.next = null, a === null ? Nl = u : a.next = u, u === null && (Na = a)) : (a = o, (t !== 0 || (h & 3) !== 0) && (Ol = !0)), o = u
        }
        qr(t)
    }

    function Ig(t, s) {
        for (var a = t.suspendedLanes, o = t.pingedLanes, u = t.expirationTimes, h = t.pendingLanes & -62914561; 0 < h;) {
            var v = 31 - je(h),
                w = 1 << v,
                C = u[v];
            C === -1 ? ((w & a) === 0 || (w & o) !== 0) && (u[v] = nu(w, s)) : C <= s && (t.expiredLanes |= w), h &= ~w
        }
        if (s = nt, a = qe, a = Ki(t, t === s ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o = t.callbackNode, a === 0 || t === s && (Qe === 2 || Qe === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && Yn(o), t.callbackNode = null, t.callbackPriority = 0;
        if ((a & 3) === 0 || Ns(t, a)) {
            if (s = a & -a, s === t.callbackPriority) return s;
            switch (o !== null && Yn(o), au(a)) {
                case 2:
                case 8:
                    a = sr;
                    break;
                case 32:
                    a = N;
                    break;
                case 268435456:
                    a = Y;
                    break;
                default:
                    a = N
            }
            return o = $g.bind(null, t), a = qt(a, o), t.callbackPriority = s, t.callbackNode = a, s
        }
        return o !== null && o !== null && Yn(o), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function $g(t, s) {
        if (Mt !== 0 && Mt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var a = t.callbackNode;
        if (Rl() && t.callbackNode !== a) return null;
        var o = qe;
        return o = Ki(t, t === nt ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o === 0 ? null : (Mg(t, o, s), Ig(t, yn()), t.callbackNode != null && t.callbackNode === a ? $g.bind(null, t) : null)
    }

    function Wg(t, s) {
        if (Rl()) return null;
        Mg(t, s, !0)
    }

    function XA() {
        sE(function() {
            (Ke & 6) !== 0 ? qt(tu, ZA) : Qg()
        })
    }

    function Zf() {
        return Vi === 0 && (Vi = ir()), Vi
    }

    function Jg(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ho("" + t)
    }

    function ev(t, s) {
        var a = s.ownerDocument.createElement("input");
        return a.name = s.name, a.value = s.value, t.id && a.setAttribute("form", t.id), s.parentNode.insertBefore(a, s), t = new FormData(t), a.parentNode.removeChild(a), t
    }

    function KA(t, s, a, o, u) {
        if (s === "submit" && a && a.stateNode === u) {
            var h = Jg((u[Qt] || null).action),
                v = o.submitter;
            v && (s = (s = v[Qt] || null) ? Jg(s.formAction) : v.getAttribute("formAction"), s !== null && (h = s, v = null));
            var w = new Go("action", "action", null, o, u);
            t.push({
                event: w,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (o.defaultPrevented) {
                            if (Vi !== 0) {
                                var C = v ? ev(u, v) : new FormData(u);
                                df(a, {
                                    pending: !0,
                                    data: C,
                                    method: u.method,
                                    action: h
                                }, null, C)
                            }
                        } else typeof h == "function" && (w.preventDefault(), C = v ? ev(u, v) : new FormData(u), df(a, {
                            pending: !0,
                            data: C,
                            method: u.method,
                            action: h
                        }, h, C))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Xf = 0; Xf < Ou.length; Xf++) {
        var Kf = Ou[Xf],
            QA = Kf.toLowerCase(),
            IA = Kf[0].toUpperCase() + Kf.slice(1);
        jn(QA, "on" + IA)
    }
    jn(Mp, "onAnimationEnd"), jn(kp, "onAnimationIteration"), jn(Vp, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(hA, "onTransitionRun"), jn(mA, "onTransitionStart"), jn(pA, "onTransitionCancel"), jn(zp, "onTransitionEnd"), Ji("onMouseEnter", ["mouseout", "mouseover"]), Ji("onMouseLeave", ["mouseout", "mouseover"]), Ji("onPointerEnter", ["pointerout", "pointerover"]), Ji("onPointerLeave", ["pointerout", "pointerover"]), xi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), xi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), xi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), xi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), xi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), xi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        $A = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fr));

    function tv(t, s) {
        s = (s & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var o = t[a],
                u = o.event;
            o = o.listeners;
            e: {
                var h = void 0;
                if (s)
                    for (var v = o.length - 1; 0 <= v; v--) {
                        var w = o[v],
                            C = w.instance,
                            P = w.currentTarget;
                        if (w = w.listener, C !== h && u.isPropagationStopped()) break e;
                        h = w, u.currentTarget = P;
                        try {
                            h(u)
                        } catch (G) {
                            gl(G)
                        }
                        u.currentTarget = null, h = C
                    } else
                        for (v = 0; v < o.length; v++) {
                            if (w = o[v], C = w.instance, P = w.currentTarget, w = w.listener, C !== h && u.isPropagationStopped()) break e;
                            h = w, u.currentTarget = P;
                            try {
                                h(u)
                            } catch (G) {
                                gl(G)
                            }
                            u.currentTarget = null, h = C
                        }
            }
        }
    }

    function Pe(t, s) {
        var a = s[ru];
        a === void 0 && (a = s[ru] = new Set);
        var o = t + "__bubble";
        a.has(o) || (nv(s, t, 2, !1), a.add(o))
    }

    function Qf(t, s, a) {
        var o = 0;
        s && (o |= 4), nv(a, t, o, s)
    }
    var jl = "_reactListening" + Math.random().toString(36).slice(2);

    function If(t) {
        if (!t[jl]) {
            t[jl] = !0, Qm.forEach(function(a) {
                a !== "selectionchange" && ($A.has(a) || Qf(a, !1, t), Qf(a, !0, t))
            });
            var s = t.nodeType === 9 ? t : t.ownerDocument;
            s === null || s[jl] || (s[jl] = !0, Qf("selectionchange", !1, s))
        }
    }

    function nv(t, s, a, o) {
        switch (_v(s)) {
            case 2:
                var u = AE;
                break;
            case 8:
                u = EE;
                break;
            default:
                u = ud
        }
        a = u.bind(null, s, a, t), u = void 0, !gu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (u = !0), o ? u !== void 0 ? t.addEventListener(s, a, {
            capture: !0,
            passive: u
        }) : t.addEventListener(s, a, !0) : u !== void 0 ? t.addEventListener(s, a, {
            passive: u
        }) : t.addEventListener(s, a, !1)
    }

    function $f(t, s, a, o, u) {
        var h = o;
        if ((s & 1) === 0 && (s & 2) === 0 && o !== null) e: for (;;) {
            if (o === null) return;
            var v = o.tag;
            if (v === 3 || v === 4) {
                var w = o.stateNode.containerInfo;
                if (w === u) break;
                if (v === 4)
                    for (v = o.return; v !== null;) {
                        var C = v.tag;
                        if ((C === 3 || C === 4) && v.stateNode.containerInfo === u) return;
                        v = v.return
                    }
                for (; w !== null;) {
                    if (v = Ii(w), v === null) return;
                    if (C = v.tag, C === 5 || C === 6 || C === 26 || C === 27) {
                        o = h = v;
                        continue e
                    }
                    w = w.parentNode
                }
            }
            o = o.return
        }
        cp(function() {
            var P = h,
                G = pu(a),
                $ = [];
            e: {
                var U = Lp.get(t);
                if (U !== void 0) {
                    var q = Go,
                        Ce = t;
                    switch (t) {
                        case "keypress":
                            if (Fo(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            q = GT;
                            break;
                        case "focusin":
                            Ce = "focus", q = wu;
                            break;
                        case "focusout":
                            Ce = "blur", q = wu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            q = wu;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            q = dp;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            q = MT;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            q = KT;
                            break;
                        case Mp:
                        case kp:
                        case Vp:
                            q = zT;
                            break;
                        case zp:
                            q = IT;
                            break;
                        case "scroll":
                        case "scrollend":
                            q = jT;
                            break;
                        case "wheel":
                            q = WT;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            q = BT;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            q = mp;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            q = eA
                    }
                    var Ee = (s & 4) !== 0,
                        We = !Ee && (t === "scroll" || t === "scrollend"),
                        k = Ee ? U !== null ? U + "Capture" : null : U;
                    Ee = [];
                    for (var O = P, L; O !== null;) {
                        var Q = O;
                        if (L = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || L === null || k === null || (Q = lr(O, k), Q != null && Ee.push(Yr(O, Q, L))), We) break;
                        O = O.return
                    }
                    0 < Ee.length && (U = new q(U, Ce, null, a, G), $.push({
                        event: U,
                        listeners: Ee
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (U = t === "mouseover" || t === "pointerover", q = t === "mouseout" || t === "pointerout", U && a !== mu && (Ce = a.relatedTarget || a.fromElement) && (Ii(Ce) || Ce[Qi])) break e;
                    if ((q || U) && (U = G.window === G ? G : (U = G.ownerDocument) ? U.defaultView || U.parentWindow : window, q ? (Ce = a.relatedTarget || a.toElement, q = P, Ce = Ce ? Ii(Ce) : null, Ce !== null && (We = c(Ce), Ee = Ce.tag, Ce !== We || Ee !== 5 && Ee !== 27 && Ee !== 6) && (Ce = null)) : (q = null, Ce = P), q !== Ce)) {
                        if (Ee = dp, Q = "onMouseLeave", k = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (Ee = mp, Q = "onPointerLeave", k = "onPointerEnter", O = "pointer"), We = q == null ? U : or(q), L = Ce == null ? U : or(Ce), U = new Ee(Q, O + "leave", q, a, G), U.target = We, U.relatedTarget = L, Q = null, Ii(G) === P && (Ee = new Ee(k, O + "enter", Ce, a, G), Ee.target = L, Ee.relatedTarget = We, Q = Ee), We = Q, q && Ce) t: {
                            for (Ee = q, k = Ce, O = 0, L = Ee; L; L = Oa(L)) O++;
                            for (L = 0, Q = k; Q; Q = Oa(Q)) L++;
                            for (; 0 < O - L;) Ee = Oa(Ee),
                            O--;
                            for (; 0 < L - O;) k = Oa(k),
                            L--;
                            for (; O--;) {
                                if (Ee === k || k !== null && Ee === k.alternate) break t;
                                Ee = Oa(Ee), k = Oa(k)
                            }
                            Ee = null
                        }
                        else Ee = null;
                        q !== null && sv($, U, q, Ee, !1), Ce !== null && We !== null && sv($, We, Ce, Ee, !0)
                    }
                }
                e: {
                    if (U = P ? or(P) : window, q = U.nodeName && U.nodeName.toLowerCase(), q === "select" || q === "input" && U.type === "file") var me = Sp;
                    else if (bp(U))
                        if (Tp) me = uA;
                        else {
                            me = lA;
                            var ze = oA
                        }
                    else q = U.nodeName,
                    !q || q.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? P && hu(P.elementType) && (me = Sp) : me = cA;
                    if (me && (me = me(t, P))) {
                        wp($, me, a, G);
                        break e
                    }
                    ze && ze(t, U, P),
                    t === "focusout" && P && U.type === "number" && P.memoizedProps.value != null && du(U, "number", U.value)
                }
                switch (ze = P ? or(P) : window, t) {
                    case "focusin":
                        (bp(ze) || ze.contentEditable === "true") && (ra = ze, Cu = P, yr = null);
                        break;
                    case "focusout":
                        yr = Cu = ra = null;
                        break;
                    case "mousedown":
                        Ru = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ru = !1, jp($, a, G);
                        break;
                    case "selectionchange":
                        if (dA) break;
                    case "keydown":
                    case "keyup":
                        jp($, a, G)
                }
                var Te;
                if (Tu) e: {
                    switch (t) {
                        case "compositionstart":
                            var _e = "onCompositionStart";
                            break e;
                        case "compositionend":
                            _e = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            _e = "onCompositionUpdate";
                            break e
                    }
                    _e = void 0
                }
                else aa ? vp(t, a) && (_e = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (_e = "onCompositionStart");_e && (pp && a.locale !== "ko" && (aa || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && aa && (Te = up()) : (js = G, vu = "value" in js ? js.value : js.textContent, aa = !0)), ze = Dl(P, _e), 0 < ze.length && (_e = new hp(_e, t, null, a, G), $.push({
                    event: _e,
                    listeners: ze
                }), Te ? _e.data = Te : (Te = xp(a), Te !== null && (_e.data = Te)))),
                (Te = nA ? sA(t, a) : iA(t, a)) && (_e = Dl(P, "onBeforeInput"), 0 < _e.length && (ze = new hp("onBeforeInput", "beforeinput", null, a, G), $.push({
                    event: ze,
                    listeners: _e
                }), ze.data = Te)),
                KA($, t, P, a, G)
            }
            tv($, s)
        })
    }

    function Yr(t, s, a) {
        return {
            instance: t,
            listener: s,
            currentTarget: a
        }
    }

    function Dl(t, s) {
        for (var a = s + "Capture", o = []; t !== null;) {
            var u = t,
                h = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || h === null || (u = lr(t, a), u != null && o.unshift(Yr(t, u, h)), u = lr(t, s), u != null && o.push(Yr(t, u, h))), t.tag === 3) return o;
            t = t.return
        }
        return []
    }

    function Oa(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function sv(t, s, a, o, u) {
        for (var h = s._reactName, v = []; a !== null && a !== o;) {
            var w = a,
                C = w.alternate,
                P = w.stateNode;
            if (w = w.tag, C !== null && C === o) break;
            w !== 5 && w !== 26 && w !== 27 || P === null || (C = P, u ? (P = lr(a, h), P != null && v.unshift(Yr(a, P, C))) : u || (P = lr(a, h), P != null && v.push(Yr(a, P, C)))), a = a.return
        }
        v.length !== 0 && t.push({
            event: s,
            listeners: v
        })
    }
    var WA = /\r\n?/g,
        JA = /\u0000|\uFFFD/g;

    function iv(t) {
        return (typeof t == "string" ? t : "" + t).replace(WA, `
`).replace(JA, "")
    }

    function av(t, s) {
        return s = iv(s), iv(t) === s
    }

    function Ml() {}

    function $e(t, s, a, o, u, h) {
        switch (a) {
            case "children":
                typeof o == "string" ? s === "body" || s === "textarea" && o === "" || na(t, o) : (typeof o == "number" || typeof o == "bigint") && s !== "body" && na(t, "" + o);
                break;
            case "className":
                Bo(t, "class", o);
                break;
            case "tabIndex":
                Bo(t, "tabindex", o);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Bo(t, a, o);
                break;
            case "style":
                op(t, o, h);
                break;
            case "data":
                if (s !== "object") {
                    Bo(t, "data", o);
                    break
                }
            case "src":
            case "href":
                if (o === "" && (s !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break
                }
                if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                o = Ho("" + o), t.setAttribute(a, o);
                break;
            case "action":
            case "formAction":
                if (typeof o == "function") {
                    t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof h == "function" && (a === "formAction" ? (s !== "input" && $e(t, s, "name", u.name, u, null), $e(t, s, "formEncType", u.formEncType, u, null), $e(t, s, "formMethod", u.formMethod, u, null), $e(t, s, "formTarget", u.formTarget, u, null)) : ($e(t, s, "encType", u.encType, u, null), $e(t, s, "method", u.method, u, null), $e(t, s, "target", u.target, u, null)));
                if (o == null || typeof o == "symbol" || typeof o == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                o = Ho("" + o), t.setAttribute(a, o);
                break;
            case "onClick":
                o != null && (t.onclick = Ml);
                break;
            case "onScroll":
                o != null && Pe("scroll", t);
                break;
            case "onScrollEnd":
                o != null && Pe("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
                    if (a = o.__html, a != null) {
                        if (u.children != null) throw Error(r(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "multiple":
                t.multiple = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "muted":
                t.muted = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                a = Ho("" + o), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(a, "" + o) : t.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                o === !0 ? t.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(a, o) : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(a, o) : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(a) : t.setAttribute(a, o);
                break;
            case "popover":
                Pe("beforetoggle", t), Pe("toggle", t), Lo(t, "popover", o);
                break;
            case "xlinkActuate":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
                break;
            case "xlinkArcrole":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
                break;
            case "xlinkRole":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
                break;
            case "xlinkShow":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
                break;
            case "xlinkTitle":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
                break;
            case "xlinkType":
                rs(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
                break;
            case "xmlBase":
                rs(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
                break;
            case "xmlLang":
                rs(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
                break;
            case "xmlSpace":
                rs(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
                break;
            case "is":
                Lo(t, "is", o);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = NT.get(a) || a, Lo(t, a, o))
        }
    }

    function Wf(t, s, a, o, u, h) {
        switch (a) {
            case "style":
                op(t, o, h);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
                    if (a = o.__html, a != null) {
                        if (u.children != null) throw Error(r(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof o == "string" ? na(t, o) : (typeof o == "number" || typeof o == "bigint") && na(t, "" + o);
                break;
            case "onScroll":
                o != null && Pe("scroll", t);
                break;
            case "onScrollEnd":
                o != null && Pe("scrollend", t);
                break;
            case "onClick":
                o != null && (t.onclick = Ml);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Im.hasOwnProperty(a)) e: {
                    if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), s = a.slice(2, u ? a.length - 7 : void 0), h = t[Qt] || null, h = h != null ? h[a] : null, typeof h == "function" && t.removeEventListener(s, h, u), typeof o == "function")) {
                        typeof h != "function" && h !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(s, o, u);
                        break e
                    }
                    a in t ? t[a] = o : o === !0 ? t.setAttribute(a, "") : Lo(t, a, o)
                }
        }
    }

    function kt(t, s, a) {
        switch (s) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Pe("error", t), Pe("load", t);
                var o = !1,
                    u = !1,
                    h;
                for (h in a)
                    if (a.hasOwnProperty(h)) {
                        var v = a[h];
                        if (v != null) switch (h) {
                            case "src":
                                o = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, s));
                            default:
                                $e(t, s, h, v, a, null)
                        }
                    } u && $e(t, s, "srcSet", a.srcSet, a, null), o && $e(t, s, "src", a.src, a, null);
                return;
            case "input":
                Pe("invalid", t);
                var w = h = v = u = null,
                    C = null,
                    P = null;
                for (o in a)
                    if (a.hasOwnProperty(o)) {
                        var G = a[o];
                        if (G != null) switch (o) {
                            case "name":
                                u = G;
                                break;
                            case "type":
                                v = G;
                                break;
                            case "checked":
                                C = G;
                                break;
                            case "defaultChecked":
                                P = G;
                                break;
                            case "value":
                                h = G;
                                break;
                            case "defaultValue":
                                w = G;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (G != null) throw Error(r(137, s));
                                break;
                            default:
                                $e(t, s, o, G, a, null)
                        }
                    } sp(t, h, w, C, P, v, u, !1), Po(t);
                return;
            case "select":
                Pe("invalid", t), o = v = h = null;
                for (u in a)
                    if (a.hasOwnProperty(u) && (w = a[u], w != null)) switch (u) {
                        case "value":
                            h = w;
                            break;
                        case "defaultValue":
                            v = w;
                            break;
                        case "multiple":
                            o = w;
                        default:
                            $e(t, s, u, w, a, null)
                    }
                s = h, a = v, t.multiple = !!o, s != null ? ta(t, !!o, s, !1) : a != null && ta(t, !!o, a, !0);
                return;
            case "textarea":
                Pe("invalid", t), h = u = o = null;
                for (v in a)
                    if (a.hasOwnProperty(v) && (w = a[v], w != null)) switch (v) {
                        case "value":
                            o = w;
                            break;
                        case "defaultValue":
                            u = w;
                            break;
                        case "children":
                            h = w;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (w != null) throw Error(r(91));
                            break;
                        default:
                            $e(t, s, v, w, a, null)
                    }
                ap(t, o, u, h), Po(t);
                return;
            case "option":
                for (C in a) a.hasOwnProperty(C) && (o = a[C], o != null) && (C === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol" : $e(t, s, C, o, a, null));
                return;
            case "dialog":
                Pe("beforetoggle", t), Pe("toggle", t), Pe("cancel", t), Pe("close", t);
                break;
            case "iframe":
            case "object":
                Pe("load", t);
                break;
            case "video":
            case "audio":
                for (o = 0; o < Fr.length; o++) Pe(Fr[o], t);
                break;
            case "image":
                Pe("error", t), Pe("load", t);
                break;
            case "details":
                Pe("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                Pe("error", t), Pe("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (P in a)
                    if (a.hasOwnProperty(P) && (o = a[P], o != null)) switch (P) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, s));
                        default:
                            $e(t, s, P, o, a, null)
                    }
                return;
            default:
                if (hu(s)) {
                    for (G in a) a.hasOwnProperty(G) && (o = a[G], o !== void 0 && Wf(t, s, G, o, a, void 0));
                    return
                }
        }
        for (w in a) a.hasOwnProperty(w) && (o = a[w], o != null && $e(t, s, w, o, a, null))
    }

    function eE(t, s, a, o) {
        switch (s) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var u = null,
                    h = null,
                    v = null,
                    w = null,
                    C = null,
                    P = null,
                    G = null;
                for (q in a) {
                    var $ = a[q];
                    if (a.hasOwnProperty(q) && $ != null) switch (q) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            C = $;
                        default:
                            o.hasOwnProperty(q) || $e(t, s, q, null, o, $)
                    }
                }
                for (var U in o) {
                    var q = o[U];
                    if ($ = a[U], o.hasOwnProperty(U) && (q != null || $ != null)) switch (U) {
                        case "type":
                            h = q;
                            break;
                        case "name":
                            u = q;
                            break;
                        case "checked":
                            P = q;
                            break;
                        case "defaultChecked":
                            G = q;
                            break;
                        case "value":
                            v = q;
                            break;
                        case "defaultValue":
                            w = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null) throw Error(r(137, s));
                            break;
                        default:
                            q !== $ && $e(t, s, U, q, o, $)
                    }
                }
                fu(t, v, w, C, P, G, h, u);
                return;
            case "select":
                q = v = w = U = null;
                for (h in a)
                    if (C = a[h], a.hasOwnProperty(h) && C != null) switch (h) {
                        case "value":
                            break;
                        case "multiple":
                            q = C;
                        default:
                            o.hasOwnProperty(h) || $e(t, s, h, null, o, C)
                    }
                for (u in o)
                    if (h = o[u], C = a[u], o.hasOwnProperty(u) && (h != null || C != null)) switch (u) {
                        case "value":
                            U = h;
                            break;
                        case "defaultValue":
                            w = h;
                            break;
                        case "multiple":
                            v = h;
                        default:
                            h !== C && $e(t, s, u, h, o, C)
                    }
                s = w, a = v, o = q, U != null ? ta(t, !!a, U, !1) : !!o != !!a && (s != null ? ta(t, !!a, s, !0) : ta(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                q = U = null;
                for (w in a)
                    if (u = a[w], a.hasOwnProperty(w) && u != null && !o.hasOwnProperty(w)) switch (w) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            $e(t, s, w, null, o, u)
                    }
                for (v in o)
                    if (u = o[v], h = a[v], o.hasOwnProperty(v) && (u != null || h != null)) switch (v) {
                        case "value":
                            U = u;
                            break;
                        case "defaultValue":
                            q = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(r(91));
                            break;
                        default:
                            u !== h && $e(t, s, v, u, o, h)
                    }
                ip(t, U, q);
                return;
            case "option":
                for (var Ce in a) U = a[Ce], a.hasOwnProperty(Ce) && U != null && !o.hasOwnProperty(Ce) && (Ce === "selected" ? t.selected = !1 : $e(t, s, Ce, null, o, U));
                for (C in o) U = o[C], q = a[C], o.hasOwnProperty(C) && U !== q && (U != null || q != null) && (C === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : $e(t, s, C, U, o, q));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Ee in a) U = a[Ee], a.hasOwnProperty(Ee) && U != null && !o.hasOwnProperty(Ee) && $e(t, s, Ee, null, o, U);
                for (P in o)
                    if (U = o[P], q = a[P], o.hasOwnProperty(P) && U !== q && (U != null || q != null)) switch (P) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null) throw Error(r(137, s));
                            break;
                        default:
                            $e(t, s, P, U, o, q)
                    }
                return;
            default:
                if (hu(s)) {
                    for (var We in a) U = a[We], a.hasOwnProperty(We) && U !== void 0 && !o.hasOwnProperty(We) && Wf(t, s, We, void 0, o, U);
                    for (G in o) U = o[G], q = a[G], !o.hasOwnProperty(G) || U === q || U === void 0 && q === void 0 || Wf(t, s, G, U, o, q);
                    return
                }
        }
        for (var k in a) U = a[k], a.hasOwnProperty(k) && U != null && !o.hasOwnProperty(k) && $e(t, s, k, null, o, U);
        for ($ in o) U = o[$], q = a[$], !o.hasOwnProperty($) || U === q || U == null && q == null || $e(t, s, $, U, o, q)
    }
    var Jf = null,
        ed = null;

    function kl(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function rv(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function ov(t, s) {
        if (t === 0) switch (s) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && s === "foreignObject" ? 0 : t
    }

    function td(t, s) {
        return t === "textarea" || t === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.children == "bigint" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var nd = null;

    function tE() {
        var t = window.event;
        return t && t.type === "popstate" ? t === nd ? !1 : (nd = t, !0) : (nd = null, !1)
    }
    var lv = typeof setTimeout == "function" ? setTimeout : void 0,
        nE = typeof clearTimeout == "function" ? clearTimeout : void 0,
        cv = typeof Promise == "function" ? Promise : void 0,
        sE = typeof queueMicrotask == "function" ? queueMicrotask : typeof cv < "u" ? function(t) {
            return cv.resolve(null).then(t).catch(iE)
        } : lv;

    function iE(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Xs(t) {
        return t === "head"
    }

    function uv(t, s) {
        var a = s,
            o = 0,
            u = 0;
        do {
            var h = a.nextSibling;
            if (t.removeChild(a), h && h.nodeType === 8)
                if (a = h.data, a === "/$") {
                    if (0 < o && 8 > o) {
                        a = o;
                        var v = t.ownerDocument;
                        if (a & 1 && Gr(v.documentElement), a & 2 && Gr(v.body), a & 4)
                            for (a = v.head, Gr(a), v = a.firstChild; v;) {
                                var w = v.nextSibling,
                                    C = v.nodeName;
                                v[rr] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && v.rel.toLowerCase() === "stylesheet" || a.removeChild(v), v = w
                            }
                    }
                    if (u === 0) {
                        t.removeChild(h), Jr(s);
                        return
                    }
                    u--
                } else a === "$" || a === "$?" || a === "$!" ? u++ : o = a.charCodeAt(0) - 48;
            else o = 0;
            a = h
        } while (a);
        Jr(s)
    }

    function sd(t) {
        var s = t.firstChild;
        for (s && s.nodeType === 10 && (s = s.nextSibling); s;) {
            var a = s;
            switch (s = s.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    sd(a), ou(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(a)
        }
    }

    function aE(t, s, a, o) {
        for (; t.nodeType === 1;) {
            var u = a;
            if (t.nodeName.toLowerCase() !== s.toLowerCase()) {
                if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (o) {
                if (!t[rr]) switch (s) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (h = t.getAttribute("rel"), h === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (h !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (h = t.getAttribute("src"), (h !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && h && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (s === "input" && t.type === "hidden") {
                var h = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === h) return t
            } else return t;
            if (t = Mn(t.nextSibling), t === null) break
        }
        return null
    }

    function rE(t, s, a) {
        if (s === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Mn(t.nextSibling), t === null)) return null;
        return t
    }

    function id(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }

    function oE(t, s) {
        var a = t.ownerDocument;
        if (t.data !== "$?" || a.readyState === "complete") s();
        else {
            var o = function() {
                s(), a.removeEventListener("DOMContentLoaded", o)
            };
            a.addEventListener("DOMContentLoaded", o), t._reactRetry = o
        }
    }

    function Mn(t) {
        for (; t != null; t = t.nextSibling) {
            var s = t.nodeType;
            if (s === 1 || s === 3) break;
            if (s === 8) {
                if (s = t.data, s === "$" || s === "$!" || s === "$?" || s === "F!" || s === "F") break;
                if (s === "/$") return null
            }
        }
        return t
    }
    var ad = null;

    function fv(t) {
        t = t.previousSibling;
        for (var s = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (s === 0) return t;
                    s--
                } else a === "/$" && s++
            }
            t = t.previousSibling
        }
        return null
    }

    function dv(t, s, a) {
        switch (s = kl(a), t) {
            case "html":
                if (t = s.documentElement, !t) throw Error(r(452));
                return t;
            case "head":
                if (t = s.head, !t) throw Error(r(453));
                return t;
            case "body":
                if (t = s.body, !t) throw Error(r(454));
                return t;
            default:
                throw Error(r(451))
        }
    }

    function Gr(t) {
        for (var s = t.attributes; s.length;) t.removeAttributeNode(s[0]);
        ou(t)
    }
    var En = new Map,
        hv = new Set;

    function Vl(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var bs = Z.d;
    Z.d = {
        f: lE,
        r: cE,
        D: uE,
        C: fE,
        L: dE,
        m: hE,
        X: pE,
        S: mE,
        M: yE
    };

    function lE() {
        var t = bs.f(),
            s = _l();
        return t || s
    }

    function cE(t) {
        var s = $i(t);
        s !== null && s.tag === 5 && s.type === "form" ? My(s) : bs.r(t)
    }
    var ja = typeof document > "u" ? null : document;

    function mv(t, s, a) {
        var o = ja;
        if (o && typeof s == "string" && s) {
            var u = vn(s);
            u = 'link[rel="' + t + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), hv.has(u) || (hv.add(u), t = {
                rel: t,
                crossOrigin: a,
                href: s
            }, o.querySelector(u) === null && (s = o.createElement("link"), kt(s, "link", t), Ct(s), o.head.appendChild(s)))
        }
    }

    function uE(t) {
        bs.D(t), mv("dns-prefetch", t, null)
    }

    function fE(t, s) {
        bs.C(t, s), mv("preconnect", t, s)
    }

    function dE(t, s, a) {
        bs.L(t, s, a);
        var o = ja;
        if (o && t && s) {
            var u = 'link[rel="preload"][as="' + vn(s) + '"]';
            s === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + vn(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + vn(a.imageSizes) + '"]')) : u += '[href="' + vn(t) + '"]';
            var h = u;
            switch (s) {
                case "style":
                    h = Da(t);
                    break;
                case "script":
                    h = Ma(t)
            }
            En.has(h) || (t = y({
                rel: "preload",
                href: s === "image" && a && a.imageSrcSet ? void 0 : t,
                as: s
            }, a), En.set(h, t), o.querySelector(u) !== null || s === "style" && o.querySelector(Zr(h)) || s === "script" && o.querySelector(Xr(h)) || (s = o.createElement("link"), kt(s, "link", t), Ct(s), o.head.appendChild(s)))
        }
    }

    function hE(t, s) {
        bs.m(t, s);
        var a = ja;
        if (a && t) {
            var o = s && typeof s.as == "string" ? s.as : "script",
                u = 'link[rel="modulepreload"][as="' + vn(o) + '"][href="' + vn(t) + '"]',
                h = u;
            switch (o) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    h = Ma(t)
            }
            if (!En.has(h) && (t = y({
                    rel: "modulepreload",
                    href: t
                }, s), En.set(h, t), a.querySelector(u) === null)) {
                switch (o) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Xr(h))) return
                }
                o = a.createElement("link"), kt(o, "link", t), Ct(o), a.head.appendChild(o)
            }
        }
    }

    function mE(t, s, a) {
        bs.S(t, s, a);
        var o = ja;
        if (o && t) {
            var u = Wi(o).hoistableStyles,
                h = Da(t);
            s = s || "default";
            var v = u.get(h);
            if (!v) {
                var w = {
                    loading: 0,
                    preload: null
                };
                if (v = o.querySelector(Zr(h))) w.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": s
                    }, a), (a = En.get(h)) && rd(t, a);
                    var C = v = o.createElement("link");
                    Ct(C), kt(C, "link", t), C._p = new Promise(function(P, G) {
                        C.onload = P, C.onerror = G
                    }), C.addEventListener("load", function() {
                        w.loading |= 1
                    }), C.addEventListener("error", function() {
                        w.loading |= 2
                    }), w.loading |= 4, zl(v, s, o)
                }
                v = {
                    type: "stylesheet",
                    instance: v,
                    count: 1,
                    state: w
                }, u.set(h, v)
            }
        }
    }

    function pE(t, s) {
        bs.X(t, s);
        var a = ja;
        if (a && t) {
            var o = Wi(a).hoistableScripts,
                u = Ma(t),
                h = o.get(u);
            h || (h = a.querySelector(Xr(u)), h || (t = y({
                src: t,
                async: !0
            }, s), (s = En.get(u)) && od(t, s), h = a.createElement("script"), Ct(h), kt(h, "link", t), a.head.appendChild(h)), h = {
                type: "script",
                instance: h,
                count: 1,
                state: null
            }, o.set(u, h))
        }
    }

    function yE(t, s) {
        bs.M(t, s);
        var a = ja;
        if (a && t) {
            var o = Wi(a).hoistableScripts,
                u = Ma(t),
                h = o.get(u);
            h || (h = a.querySelector(Xr(u)), h || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, s), (s = En.get(u)) && od(t, s), h = a.createElement("script"), Ct(h), kt(h, "link", t), a.head.appendChild(h)), h = {
                type: "script",
                instance: h,
                count: 1,
                state: null
            }, o.set(u, h))
        }
    }

    function pv(t, s, a, o) {
        var u = (u = he.current) ? Vl(u) : null;
        if (!u) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (s = Da(a.href), a = Wi(u).hoistableStyles, o = a.get(s), o || (o = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(s, o)), o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = Da(a.href);
                    var h = Wi(u).hoistableStyles,
                        v = h.get(t);
                    if (v || (u = u.ownerDocument || u, v = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, h.set(t, v), (h = u.querySelector(Zr(t))) && !h._p && (v.instance = h, v.state.loading = 5), En.has(t) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, En.set(t, a), h || gE(u, t, a, v.state))), s && o === null) throw Error(r(528, ""));
                    return v
                }
                if (s && o !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return s = a.async, a = a.src, typeof a == "string" && s && typeof s != "function" && typeof s != "symbol" ? (s = Ma(a), a = Wi(u).hoistableScripts, o = a.get(s), o || (o = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(s, o)), o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, t))
        }
    }

    function Da(t) {
        return 'href="' + vn(t) + '"'
    }

    function Zr(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function yv(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function gE(t, s, a, o) {
        t.querySelector('link[rel="preload"][as="style"][' + s + "]") ? o.loading = 1 : (s = t.createElement("link"), o.preload = s, s.addEventListener("load", function() {
            return o.loading |= 1
        }), s.addEventListener("error", function() {
            return o.loading |= 2
        }), kt(s, "link", a), Ct(s), t.head.appendChild(s))
    }

    function Ma(t) {
        return '[src="' + vn(t) + '"]'
    }

    function Xr(t) {
        return "script[async]" + t
    }

    function gv(t, s, a) {
        if (s.count++, s.instance === null) switch (s.type) {
            case "style":
                var o = t.querySelector('style[data-href~="' + vn(a.href) + '"]');
                if (o) return s.instance = o, Ct(o), o;
                var u = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return o = (t.ownerDocument || t).createElement("style"), Ct(o), kt(o, "style", u), zl(o, a.precedence, t), s.instance = o;
            case "stylesheet":
                u = Da(a.href);
                var h = t.querySelector(Zr(u));
                if (h) return s.state.loading |= 4, s.instance = h, Ct(h), h;
                o = yv(a), (u = En.get(u)) && rd(o, u), h = (t.ownerDocument || t).createElement("link"), Ct(h);
                var v = h;
                return v._p = new Promise(function(w, C) {
                    v.onload = w, v.onerror = C
                }), kt(h, "link", o), s.state.loading |= 4, zl(h, a.precedence, t), s.instance = h;
            case "script":
                return h = Ma(a.src), (u = t.querySelector(Xr(h))) ? (s.instance = u, Ct(u), u) : (o = a, (u = En.get(h)) && (o = y({}, a), od(o, u)), t = t.ownerDocument || t, u = t.createElement("script"), Ct(u), kt(u, "link", o), t.head.appendChild(u), s.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, s.type))
        } else s.type === "stylesheet" && (s.state.loading & 4) === 0 && (o = s.instance, s.state.loading |= 4, zl(o, a.precedence, t));
        return s.instance
    }

    function zl(t, s, a) {
        for (var o = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = o.length ? o[o.length - 1] : null, h = u, v = 0; v < o.length; v++) {
            var w = o[v];
            if (w.dataset.precedence === s) h = w;
            else if (h !== u) break
        }
        h ? h.parentNode.insertBefore(t, h.nextSibling) : (s = a.nodeType === 9 ? a.head : a, s.insertBefore(t, s.firstChild))
    }

    function rd(t, s) {
        t.crossOrigin == null && (t.crossOrigin = s.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = s.referrerPolicy), t.title == null && (t.title = s.title)
    }

    function od(t, s) {
        t.crossOrigin == null && (t.crossOrigin = s.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = s.referrerPolicy), t.integrity == null && (t.integrity = s.integrity)
    }
    var Ll = null;

    function vv(t, s, a) {
        if (Ll === null) {
            var o = new Map,
                u = Ll = new Map;
            u.set(a, o)
        } else u = Ll, o = u.get(a), o || (o = new Map, u.set(a, o));
        if (o.has(t)) return o;
        for (o.set(t, null), a = a.getElementsByTagName(t), u = 0; u < a.length; u++) {
            var h = a[u];
            if (!(h[rr] || h[Lt] || t === "link" && h.getAttribute("rel") === "stylesheet") && h.namespaceURI !== "http://www.w3.org/2000/svg") {
                var v = h.getAttribute(s) || "";
                v = t + v;
                var w = o.get(v);
                w ? w.push(h) : o.set(v, [h])
            }
        }
        return o
    }

    function xv(t, s, a) {
        t = t.ownerDocument || t, t.head.insertBefore(a, s === "title" ? t.querySelector("head > title") : null)
    }

    function vE(t, s, a) {
        if (a === 1 || s.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof s.precedence != "string" || typeof s.href != "string" || s.href === "") break;
                return !0;
            case "link":
                if (typeof s.rel != "string" || typeof s.href != "string" || s.href === "" || s.onLoad || s.onError) break;
                return s.rel === "stylesheet" ? (t = s.disabled, typeof s.precedence == "string" && t == null) : !0;
            case "script":
                if (s.async && typeof s.async != "function" && typeof s.async != "symbol" && !s.onLoad && !s.onError && s.src && typeof s.src == "string") return !0
        }
        return !1
    }

    function bv(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Kr = null;

    function xE() {}

    function bE(t, s, a) {
        if (Kr === null) throw Error(r(475));
        var o = Kr;
        if (s.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (s.state.loading & 4) === 0) {
            if (s.instance === null) {
                var u = Da(a.href),
                    h = t.querySelector(Zr(u));
                if (h) {
                    t = h._p, t !== null && typeof t == "object" && typeof t.then == "function" && (o.count++, o = Bl.bind(o), t.then(o, o)), s.state.loading |= 4, s.instance = h, Ct(h);
                    return
                }
                h = t.ownerDocument || t, a = yv(a), (u = En.get(u)) && rd(a, u), h = h.createElement("link"), Ct(h);
                var v = h;
                v._p = new Promise(function(w, C) {
                    v.onload = w, v.onerror = C
                }), kt(h, "link", a), s.instance = h
            }
            o.stylesheets === null && (o.stylesheets = new Map), o.stylesheets.set(s, t), (t = s.state.preload) && (s.state.loading & 3) === 0 && (o.count++, s = Bl.bind(o), t.addEventListener("load", s), t.addEventListener("error", s))
        }
    }

    function wE() {
        if (Kr === null) throw Error(r(475));
        var t = Kr;
        return t.stylesheets && t.count === 0 && ld(t, t.stylesheets), 0 < t.count ? function(s) {
            var a = setTimeout(function() {
                if (t.stylesheets && ld(t, t.stylesheets), t.unsuspend) {
                    var o = t.unsuspend;
                    t.unsuspend = null, o()
                }
            }, 6e4);
            return t.unsuspend = s,
                function() {
                    t.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function Bl() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) ld(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var Pl = null;

    function ld(t, s) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, Pl = new Map, s.forEach(SE, t), Pl = null, Bl.call(t))
    }

    function SE(t, s) {
        if (!(s.state.loading & 4)) {
            var a = Pl.get(t);
            if (a) var o = a.get(null);
            else {
                a = new Map, Pl.set(t, a);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < u.length; h++) {
                    var v = u[h];
                    (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (a.set(v.dataset.precedence, v), o = v)
                }
                o && a.set(null, o)
            }
            u = s.instance, v = u.getAttribute("data-precedence"), h = a.get(v) || o, h === o && a.set(null, u), a.set(v, u), this.count++, o = Bl.bind(this), u.addEventListener("load", o), u.addEventListener("error", o), h ? h.parentNode.insertBefore(u, h.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), s.state.loading |= 4
        }
    }
    var Qr = {
        $$typeof: M,
        Provider: null,
        Consumer: null,
        _currentValue: K,
        _currentValue2: K,
        _threadCount: 0
    };

    function TE(t, s, a, o, u, h, v, w) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = su(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = su(0), this.hiddenUpdates = su(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = h, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map
    }

    function wv(t, s, a, o, u, h, v, w, C, P, G, $) {
        return t = new TE(t, s, a, v, w, C, P, $), s = 1, h === !0 && (s |= 24), h = sn(3, null, null, s), t.current = h, h.stateNode = t, s = qu(), s.refCount++, t.pooledCache = s, s.refCount++, h.memoizedState = {
            element: o,
            isDehydrated: a,
            cache: s
        }, Zu(h), t
    }

    function Sv(t) {
        return t ? (t = ua, t) : ua
    }

    function Tv(t, s, a, o, u, h) {
        u = Sv(u), o.context === null ? o.context = u : o.pendingContext = u, o = ks(s), o.payload = {
            element: a
        }, h = h === void 0 ? null : h, h !== null && (o.callback = h), a = Vs(t, o, s), a !== null && (cn(a, t, s), Er(a, t, s))
    }

    function Av(t, s) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < s ? a : s
        }
    }

    function cd(t, s) {
        Av(t, s), (t = t.alternate) && Av(t, s)
    }

    function Ev(t) {
        if (t.tag === 13) {
            var s = ca(t, 67108864);
            s !== null && cn(s, t, 67108864), cd(t, 67108864)
        }
    }
    var Ul = !0;

    function AE(t, s, a, o) {
        var u = V.T;
        V.T = null;
        var h = Z.p;
        try {
            Z.p = 2, ud(t, s, a, o)
        } finally {
            Z.p = h, V.T = u
        }
    }

    function EE(t, s, a, o) {
        var u = V.T;
        V.T = null;
        var h = Z.p;
        try {
            Z.p = 8, ud(t, s, a, o)
        } finally {
            Z.p = h, V.T = u
        }
    }

    function ud(t, s, a, o) {
        if (Ul) {
            var u = fd(o);
            if (u === null) $f(t, s, o, Hl, a), Cv(t, o);
            else if (CE(u, t, s, a, o)) o.stopPropagation();
            else if (Cv(t, o), s & 4 && -1 < _E.indexOf(t)) {
                for (; u !== null;) {
                    var h = $i(u);
                    if (h !== null) switch (h.tag) {
                        case 3:
                            if (h = h.stateNode, h.current.memoizedState.isDehydrated) {
                                var v = On(h.pendingLanes);
                                if (v !== 0) {
                                    var w = h;
                                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v;) {
                                        var C = 1 << 31 - je(v);
                                        w.entanglements[1] |= C, v &= ~C
                                    }
                                    In(h), (Ke & 6) === 0 && (Al = yn() + 500, qr(0))
                                }
                            }
                            break;
                        case 13:
                            w = ca(h, 2), w !== null && cn(w, h, 2), _l(), cd(h, 2)
                    }
                    if (h = fd(o), h === null && $f(t, s, o, Hl, a), h === u) break;
                    u = h
                }
                u !== null && o.stopPropagation()
            } else $f(t, s, o, null, a)
        }
    }

    function fd(t) {
        return t = pu(t), dd(t)
    }
    var Hl = null;

    function dd(t) {
        if (Hl = null, t = Ii(t), t !== null) {
            var s = c(t);
            if (s === null) t = null;
            else {
                var a = s.tag;
                if (a === 13) {
                    if (t = f(s), t !== null) return t;
                    t = null
                } else if (a === 3) {
                    if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
                    t = null
                } else s !== t && (t = null)
            }
        }
        return Hl = t, null
    }

    function _v(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (eu()) {
                    case tu:
                        return 2;
                    case sr:
                        return 8;
                    case N:
                    case B:
                        return 32;
                    case Y:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var hd = !1,
        Ks = null,
        Qs = null,
        Is = null,
        Ir = new Map,
        $r = new Map,
        $s = [],
        _E = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Cv(t, s) {
        switch (t) {
            case "focusin":
            case "focusout":
                Ks = null;
                break;
            case "dragenter":
            case "dragleave":
                Qs = null;
                break;
            case "mouseover":
            case "mouseout":
                Is = null;
                break;
            case "pointerover":
            case "pointerout":
                Ir.delete(s.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                $r.delete(s.pointerId)
        }
    }

    function Wr(t, s, a, o, u, h) {
        return t === null || t.nativeEvent !== h ? (t = {
            blockedOn: s,
            domEventName: a,
            eventSystemFlags: o,
            nativeEvent: h,
            targetContainers: [u]
        }, s !== null && (s = $i(s), s !== null && Ev(s)), t) : (t.eventSystemFlags |= o, s = t.targetContainers, u !== null && s.indexOf(u) === -1 && s.push(u), t)
    }

    function CE(t, s, a, o, u) {
        switch (s) {
            case "focusin":
                return Ks = Wr(Ks, t, s, a, o, u), !0;
            case "dragenter":
                return Qs = Wr(Qs, t, s, a, o, u), !0;
            case "mouseover":
                return Is = Wr(Is, t, s, a, o, u), !0;
            case "pointerover":
                var h = u.pointerId;
                return Ir.set(h, Wr(Ir.get(h) || null, t, s, a, o, u)), !0;
            case "gotpointercapture":
                return h = u.pointerId, $r.set(h, Wr($r.get(h) || null, t, s, a, o, u)), !0
        }
        return !1
    }

    function Rv(t) {
        var s = Ii(t.target);
        if (s !== null) {
            var a = c(s);
            if (a !== null) {
                if (s = a.tag, s === 13) {
                    if (s = f(a), s !== null) {
                        t.blockedOn = s, bT(t.priority, function() {
                            if (a.tag === 13) {
                                var o = ln();
                                o = iu(o);
                                var u = ca(a, o);
                                u !== null && cn(u, a, o), cd(a, o)
                            }
                        });
                        return
                    }
                } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function ql(t) {
        if (t.blockedOn !== null) return !1;
        for (var s = t.targetContainers; 0 < s.length;) {
            var a = fd(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var o = new a.constructor(a.type, a);
                mu = o, a.target.dispatchEvent(o), mu = null
            } else return s = $i(a), s !== null && Ev(s), t.blockedOn = a, !1;
            s.shift()
        }
        return !0
    }

    function Nv(t, s, a) {
        ql(t) && a.delete(s)
    }

    function RE() {
        hd = !1, Ks !== null && ql(Ks) && (Ks = null), Qs !== null && ql(Qs) && (Qs = null), Is !== null && ql(Is) && (Is = null), Ir.forEach(Nv), $r.forEach(Nv)
    }

    function Fl(t, s) {
        t.blockedOn === s && (t.blockedOn = null, hd || (hd = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, RE)))
    }
    var Yl = null;

    function Ov(t) {
        Yl !== t && (Yl = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            Yl === t && (Yl = null);
            for (var s = 0; s < t.length; s += 3) {
                var a = t[s],
                    o = t[s + 1],
                    u = t[s + 2];
                if (typeof o != "function") {
                    if (dd(o || a) === null) continue;
                    break
                }
                var h = $i(a);
                h !== null && (t.splice(s, 3), s -= 3, df(h, {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: o
                }, o, u))
            }
        }))
    }

    function Jr(t) {
        function s(C) {
            return Fl(C, t)
        }
        Ks !== null && Fl(Ks, t), Qs !== null && Fl(Qs, t), Is !== null && Fl(Is, t), Ir.forEach(s), $r.forEach(s);
        for (var a = 0; a < $s.length; a++) {
            var o = $s[a];
            o.blockedOn === t && (o.blockedOn = null)
        }
        for (; 0 < $s.length && (a = $s[0], a.blockedOn === null);) Rv(a), a.blockedOn === null && $s.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
            for (o = 0; o < a.length; o += 3) {
                var u = a[o],
                    h = a[o + 1],
                    v = u[Qt] || null;
                if (typeof h == "function") v || Ov(a);
                else if (v) {
                    var w = null;
                    if (h && h.hasAttribute("formAction")) {
                        if (u = h, v = h[Qt] || null) w = v.formAction;
                        else if (dd(u) !== null) continue
                    } else w = v.action;
                    typeof w == "function" ? a[o + 1] = w : (a.splice(o, 3), o -= 3), Ov(a)
                }
            }
    }

    function md(t) {
        this._internalRoot = t
    }
    Gl.prototype.render = md.prototype.render = function(t) {
        var s = this._internalRoot;
        if (s === null) throw Error(r(409));
        var a = s.current,
            o = ln();
        Tv(a, o, t, s, null, null)
    }, Gl.prototype.unmount = md.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var s = t.containerInfo;
            Tv(t.current, 2, null, t, null, null), _l(), s[Qi] = null
        }
    };

    function Gl(t) {
        this._internalRoot = t
    }
    Gl.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var s = Xm();
            t = {
                blockedOn: null,
                target: t,
                priority: s
            };
            for (var a = 0; a < $s.length && s !== 0 && s < $s[a].priority; a++);
            $s.splice(a, 0, t), a === 0 && Rv(t)
        }
    };
    var jv = n.version;
    if (jv !== "19.1.0") throw Error(r(527, jv, "19.1.0"));
    Z.findDOMNode = function(t) {
        var s = t._reactInternals;
        if (s === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
        return t = m(s), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t
    };
    var NE = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: V,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zl.isDisabled && Zl.supportsFiber) try {
            J = Zl.inject(NE), ue = Zl
        } catch {}
    }
    return to.createRoot = function(t, s) {
        if (!l(t)) throw Error(r(299));
        var a = !1,
            o = "",
            u = Xy,
            h = Ky,
            v = Qy,
            w = null;
        return s != null && (s.unstable_strictMode === !0 && (a = !0), s.identifierPrefix !== void 0 && (o = s.identifierPrefix), s.onUncaughtError !== void 0 && (u = s.onUncaughtError), s.onCaughtError !== void 0 && (h = s.onCaughtError), s.onRecoverableError !== void 0 && (v = s.onRecoverableError), s.unstable_transitionCallbacks !== void 0 && (w = s.unstable_transitionCallbacks)), s = wv(t, 1, !1, null, null, a, o, u, h, v, w, null), t[Qi] = s.current, If(t), new md(s)
    }, to.hydrateRoot = function(t, s, a) {
        if (!l(t)) throw Error(r(299));
        var o = !1,
            u = "",
            h = Xy,
            v = Ky,
            w = Qy,
            C = null,
            P = null;
        return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (h = a.onUncaughtError), a.onCaughtError !== void 0 && (v = a.onCaughtError), a.onRecoverableError !== void 0 && (w = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (C = a.unstable_transitionCallbacks), a.formState !== void 0 && (P = a.formState)), s = wv(t, 1, !0, s, a ?? null, o, u, h, v, w, C, P), s.context = Sv(null), a = s.current, o = ln(), o = iu(o), u = ks(o), u.callback = null, Vs(a, u, o), a = o, s.current.lanes = a, ar(s, a), In(s), t[Qi] = s.current, If(t), new Gl(s)
    }, to.version = "19.1.0", to
}
var Hv;

function PE() {
    if (Hv) return yd.exports;
    Hv = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (n) {
            console.error(n)
        }
    }
    return e(), yd.exports = BE(), yd.exports
}
var UE = PE();

function HE(e, n) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var i, r, l, c, f = [],
        d = "",
        m = e.split("/");
    for (m[0] || m.shift(); l = m.shift();) i = l[0], i === "*" ? (f.push(i), d += l[1] === "?" ? "(?:/(.*))?" : "/(.*)") : i === ":" ? (r = l.indexOf("?", 1), c = l.indexOf(".", 1), f.push(l.substring(1, ~r ? r : ~c ? c : l.length)), d += ~r && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)", ~c && (d += (~r ? "?" : "") + "\\" + l.substring(c))) : d += "/" + l;
    return {
        keys: f,
        pattern: new RegExp("^" + d + (n ? "(?=$|/)" : "/?$"), "i")
    }
}
var A = zc();
const rt = Eb(A),
    Cb = jE({
        __proto__: null,
        default: rt
    }, [A]);
var wd = {
        exports: {}
    },
    Sd = {};
var qv;

function qE() {
    if (qv) return Sd;
    qv = 1;
    var e = zc();

    function n(x, b) {
        return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b
    }
    var i = typeof Object.is == "function" ? Object.is : n,
        r = e.useState,
        l = e.useEffect,
        c = e.useLayoutEffect,
        f = e.useDebugValue;

    function d(x, b) {
        var S = b(),
            E = r({
                inst: {
                    value: S,
                    getSnapshot: b
                }
            }),
            _ = E[0].inst,
            R = E[1];
        return c(function() {
            _.value = S, _.getSnapshot = b, m(_) && R({
                inst: _
            })
        }, [x, S, b]), l(function() {
            return m(_) && R({
                inst: _
            }), x(function() {
                m(_) && R({
                    inst: _
                })
            })
        }, [x]), f(S), S
    }

    function m(x) {
        var b = x.getSnapshot;
        x = x.value;
        try {
            var S = b();
            return !i(x, S)
        } catch {
            return !0
        }
    }

    function p(x, b) {
        return b()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : d;
    return Sd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y, Sd
}
var Fv;

function FE() {
    return Fv || (Fv = 1, wd.exports = qE()), wd.exports
}
var YE = FE();
const GE = Cb.useInsertionEffect,
    ZE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    XE = ZE ? A.useLayoutEffect : A.useEffect,
    KE = GE || XE,
    Rb = e => {
        const n = A.useRef([e, (...i) => n[0](...i)]).current;
        return KE(() => {
            n[0] = e
        }), n[1]
    },
    QE = "popstate",
    Uh = "pushState",
    Hh = "replaceState",
    IE = "hashchange",
    Yv = [QE, Uh, Hh, IE],
    $E = e => {
        for (const n of Yv) addEventListener(n, e);
        return () => {
            for (const n of Yv) removeEventListener(n, e)
        }
    },
    Nb = (e, n) => YE.useSyncExternalStore($E, e, n),
    Gv = () => location.search,
    WE = ({
        ssrSearch: e
    } = {}) => Nb(Gv, e != null ? () => e : Gv),
    Zv = () => location.pathname,
    JE = ({
        ssrPath: e
    } = {}) => Nb(Zv, e != null ? () => e : Zv),
    e2 = (e, {
        replace: n = !1,
        state: i = null
    } = {}) => history[n ? Hh : Uh](i, "", e),
    t2 = (e = {}) => [JE(e), e2],
    Xv = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Xv] > "u") {
    for (const e of [Uh, Hh]) {
        const n = history[e];
        history[e] = function() {
            const i = n.apply(this, arguments),
                r = new Event(e);
            return r.arguments = arguments, dispatchEvent(r), i
        }
    }
    Object.defineProperty(window, Xv, {
        value: !0
    })
}
const n2 = (e, n) => n.toLowerCase().indexOf(e.toLowerCase()) ? "~" + n : n.slice(e.length) || "/",
    Ob = (e = "") => e === "/" ? "" : e,
    s2 = (e, n) => e[0] === "~" ? e.slice(1) : Ob(n) + e,
    i2 = (e = "", n) => n2(Kv(Ob(e)), Kv(n)),
    Kv = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    jb = {
        hook: t2,
        searchHook: WE,
        parser: HE,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        ssrContext: void 0,
        hrefs: e => e,
        aroundNav: (e, n, i) => e(n, i)
    },
    Db = A.createContext(jb),
    _o = () => A.useContext(Db),
    Mb = {},
    kb = A.createContext(Mb),
    a2 = () => A.useContext(kb),
    Lc = e => {
        const [n, i] = e.hook(e);
        return [i2(e.base, n), Rb((r, l) => e.aroundNav(i, s2(r, e.base), l))]
    },
    r2 = () => Lc(_o()),
    Vb = (e, n, i, r) => {
        const {
            pattern: l,
            keys: c
        } = n instanceof RegExp ? {
            keys: !1,
            pattern: n
        } : e(n || "*", r), f = l.exec(i) || [], [d, ...m] = f;
        return d !== void 0 ? [!0, (() => {
            const p = c !== !1 ? Object.fromEntries(c.map((x, b) => [x, m[b]])) : f.groups;
            let y = {
                ...m
            };
            return p && Object.assign(y, p), y
        })(), ...r ? [d] : []] : [!1, null]
    },
    zb = ({
        children: e,
        ...n
    }) => {
        const i = _o(),
            r = n.hook ? jb : i;
        let l = r;
        const [c, f = n.ssrSearch ?? ""] = n.ssrPath?.split("?") ?? [];
        c && (n.ssrSearch = f, n.ssrPath = c), n.hrefs = n.hrefs ?? n.hook?.hrefs, n.searchHook = n.searchHook ?? n.hook?.searchHook;
        let d = A.useRef({}),
            m = d.current,
            p = m;
        for (let y in r) {
            const x = y === "base" ? r[y] + (n[y] ?? "") : n[y] ?? r[y];
            m === p && x !== p[y] && (d.current = p = {
                ...p
            }), p[y] = x, (x !== r[y] || x !== l[y]) && (l = p)
        }
        return A.createElement(Db.Provider, {
            value: l,
            children: e
        })
    },
    Qv = ({
        children: e,
        component: n
    }, i) => n ? A.createElement(n, {
        params: i
    }) : typeof e == "function" ? e(i) : e,
    o2 = e => {
        let n = A.useRef(Mb);
        const i = n.current;
        return n.current = Object.keys(e).length !== Object.keys(i).length || Object.entries(e).some(([r, l]) => l !== i[r]) ? e : i
    },
    Js = ({
        path: e,
        nest: n,
        match: i,
        ...r
    }) => {
        const l = _o(),
            [c] = Lc(l),
            [f, d, m] = i ?? Vb(l.parser, e, c, n),
            p = o2({
                ...a2(),
                ...d
            });
        if (!f) return null;
        const y = m ? A.createElement(zb, {
            base: m
        }, Qv(r, p)) : Qv(r, p);
        return A.createElement(kb.Provider, {
            value: p,
            children: y
        })
    },
    _n = A.forwardRef((e, n) => {
        const i = _o(),
            [r, l] = Lc(i),
            {
                to: c = "",
                href: f = c,
                onClick: d,
                asChild: m,
                children: p,
                className: y,
                replace: x,
                state: b,
                transition: S,
                ...E
            } = e,
            _ = Rb(D => {
                D.ctrlKey || D.metaKey || D.altKey || D.shiftKey || D.button !== 0 || (d?.(D), D.defaultPrevented || (D.preventDefault(), l(f, e)))
            }),
            R = i.hrefs(f[0] === "~" ? f.slice(1) : i.base + f, i);
        return m && A.isValidElement(p) ? A.cloneElement(p, {
            onClick: _,
            href: R
        }) : A.createElement("a", {
            ...E,
            onClick: _,
            href: R,
            className: y?.call ? y(r === f) : y,
            children: p,
            ref: n
        })
    }),
    Lb = e => Array.isArray(e) ? e.flatMap(n => Lb(n && n.type === A.Fragment ? n.props.children : n)) : [e],
    l2 = ({
        children: e,
        location: n
    }) => {
        const i = _o(),
            [r] = Lc(i);
        for (const l of Lb(e)) {
            let c = 0;
            if (A.isValidElement(l) && (c = Vb(i.parser, l.props.path, n || r, l.props.nest))[0]) return A.cloneElement(l, {
                match: c
            })
        }
        return null
    };
var Bc = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    c2 = {
        setTimeout: (e, n) => setTimeout(e, n),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, n) => setInterval(e, n),
        clearInterval: e => clearInterval(e)
    },
    u2 = class {
        #e = c2;
        #n = !1;
        setTimeoutProvider(e) {
            this.#e = e
        }
        setTimeout(e, n) {
            return this.#e.setTimeout(e, n)
        }
        clearTimeout(e) {
            this.#e.clearTimeout(e)
        }
        setInterval(e, n) {
            return this.#e.setInterval(e, n)
        }
        clearInterval(e) {
            this.#e.clearInterval(e)
        }
    },
    Id = new u2;

function f2(e) {
    setTimeout(e, 0)
}
var Pc = typeof window > "u" || "Deno" in globalThis;

function zn() {}

function d2(e, n) {
    return typeof e == "function" ? e(n) : e
}

function h2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function m2(e, n) {
    return Math.max(e + (n || 0) - Date.now(), 0)
}

function $d(e, n) {
    return typeof e == "function" ? e(n) : e
}

function p2(e, n) {
    return typeof e == "function" ? e(n) : e
}

function Iv(e, n) {
    const {
        type: i = "all",
        exact: r,
        fetchStatus: l,
        predicate: c,
        queryKey: f,
        stale: d
    } = e;
    if (f) {
        if (r) {
            if (n.queryHash !== qh(f, n.options)) return !1
        } else if (!yo(n.queryKey, f)) return !1
    }
    if (i !== "all") {
        const m = n.isActive();
        if (i === "active" && !m || i === "inactive" && m) return !1
    }
    return !(typeof d == "boolean" && n.isStale() !== d || l && l !== n.state.fetchStatus || c && !c(n))
}

function $v(e, n) {
    const {
        exact: i,
        status: r,
        predicate: l,
        mutationKey: c
    } = e;
    if (c) {
        if (!n.options.mutationKey) return !1;
        if (i) {
            if (po(n.options.mutationKey) !== po(c)) return !1
        } else if (!yo(n.options.mutationKey, c)) return !1
    }
    return !(r && n.state.status !== r || l && !l(n))
}

function qh(e, n) {
    return (n?.queryKeyHashFn || po)(e)
}

function po(e) {
    return JSON.stringify(e, (n, i) => Wd(i) ? Object.keys(i).sort().reduce((r, l) => (r[l] = i[l], r), {}) : i)
}

function yo(e, n) {
    return e === n ? !0 : typeof e != typeof n ? !1 : e && n && typeof e == "object" && typeof n == "object" ? Object.keys(n).every(i => yo(e[i], n[i])) : !1
}
var y2 = Object.prototype.hasOwnProperty;

function Bb(e, n, i = 0) {
    if (e === n) return e;
    if (i > 500) return n;
    const r = Wv(e) && Wv(n);
    if (!r && !(Wd(e) && Wd(n))) return n;
    const c = (r ? e : Object.keys(e)).length,
        f = r ? n : Object.keys(n),
        d = f.length,
        m = r ? new Array(d) : {};
    let p = 0;
    for (let y = 0; y < d; y++) {
        const x = r ? y : f[y],
            b = e[x],
            S = n[x];
        if (b === S) {
            m[x] = b, (r ? y < c : y2.call(e, x)) && p++;
            continue
        }
        if (b === null || S === null || typeof b != "object" || typeof S != "object") {
            m[x] = S;
            continue
        }
        const E = Bb(b, S, i + 1);
        m[x] = E, E === b && p++
    }
    return c === d && p === c ? e : m
}

function Wv(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Wd(e) {
    if (!Jv(e)) return !1;
    const n = e.constructor;
    if (n === void 0) return !0;
    const i = n.prototype;
    return !(!Jv(i) || !i.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Jv(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function g2(e) {
    return new Promise(n => {
        Id.setTimeout(n, e)
    })
}

function v2(e, n, i) {
    return typeof i.structuralSharing == "function" ? i.structuralSharing(e, n) : i.structuralSharing !== !1 ? Bb(e, n) : n
}

function x2(e, n, i = 0) {
    const r = [...e, n];
    return i && r.length > i ? r.slice(1) : r
}

function b2(e, n, i = 0) {
    const r = [n, ...e];
    return i && r.length > i ? r.slice(0, -1) : r
}
var Fh = Symbol();

function Pb(e, n) {
    return !e.queryFn && n?.initialPromise ? () => n.initialPromise : !e.queryFn || e.queryFn === Fh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function w2(e, n, i) {
    let r = !1,
        l;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (l ??= n(), r || (r = !0, l.aborted ? i() : l.addEventListener("abort", i, {
            once: !0
        })), l)
    }), e
}
var S2 = class extends Bc {
        #e;
        #n;
        #t;
        constructor() {
            super(), this.#t = e => {
                if (!Pc && window.addEventListener) {
                    const n = () => e();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#t)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), this.#n = void 0)
        }
        setEventListener(e) {
            this.#t = e, this.#n?.(), this.#n = e(n => {
                typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(n => {
                n(e)
            })
        }
        isFocused() {
            return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
        }
    },
    Ub = new S2;

function T2() {
    let e, n;
    const i = new Promise((l, c) => {
        e = l, n = c
    });
    i.status = "pending", i.catch(() => {});

    function r(l) {
        Object.assign(i, l), delete i.resolve, delete i.reject
    }
    return i.resolve = l => {
        r({
            status: "fulfilled",
            value: l
        }), e(l)
    }, i.reject = l => {
        r({
            status: "rejected",
            reason: l
        }), n(l)
    }, i
}
var A2 = f2;

function E2() {
    let e = [],
        n = 0,
        i = d => {
            d()
        },
        r = d => {
            d()
        },
        l = A2;
    const c = d => {
            n ? e.push(d) : l(() => {
                i(d)
            })
        },
        f = () => {
            const d = e;
            e = [], d.length && l(() => {
                r(() => {
                    d.forEach(m => {
                        i(m)
                    })
                })
            })
        };
    return {
        batch: d => {
            let m;
            n++;
            try {
                m = d()
            } finally {
                n--, n || f()
            }
            return m
        },
        batchCalls: d => (...m) => {
            c(() => {
                d(...m)
            })
        },
        schedule: c,
        setNotifyFunction: d => {
            i = d
        },
        setBatchNotifyFunction: d => {
            r = d
        },
        setScheduler: d => {
            l = d
        }
    }
}
var Gt = E2(),
    _2 = class extends Bc {
        #e = !0;
        #n;
        #t;
        constructor() {
            super(), this.#t = e => {
                if (!Pc && window.addEventListener) {
                    const n = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", i)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#t)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), this.#n = void 0)
        }
        setEventListener(e) {
            this.#t = e, this.#n?.(), this.#n = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return this.#e
        }
    },
    pc = new _2;

function C2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Hb(e) {
    return (e ?? "online") === "online" ? pc.isOnline() : !0
}
var Jd = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
    }
};

function qb(e) {
    let n = !1,
        i = 0,
        r;
    const l = T2(),
        c = () => l.status !== "pending",
        f = _ => {
            if (!c()) {
                const R = new Jd(_);
                b(R), e.onCancel?.(R)
            }
        },
        d = () => {
            n = !0
        },
        m = () => {
            n = !1
        },
        p = () => Ub.isFocused() && (e.networkMode === "always" || pc.isOnline()) && e.canRun(),
        y = () => Hb(e.networkMode) && e.canRun(),
        x = _ => {
            c() || (r?.(), l.resolve(_))
        },
        b = _ => {
            c() || (r?.(), l.reject(_))
        },
        S = () => new Promise(_ => {
            r = R => {
                (c() || p()) && _(R)
            }, e.onPause?.()
        }).then(() => {
            r = void 0, c() || e.onContinue?.()
        }),
        E = () => {
            if (c()) return;
            let _;
            const R = i === 0 ? e.initialPromise : void 0;
            try {
                _ = R ?? e.fn()
            } catch (D) {
                _ = Promise.reject(D)
            }
            Promise.resolve(_).then(x).catch(D => {
                if (c()) return;
                const j = e.retry ?? (Pc ? 0 : 3),
                    M = e.retryDelay ?? C2,
                    H = typeof M == "function" ? M(i, D) : M,
                    z = j === !0 || typeof j == "number" && i < j || typeof j == "function" && j(i, D);
                if (n || !z) {
                    b(D);
                    return
                }
                i++, e.onFail?.(i, D), g2(H).then(() => p() ? void 0 : S()).then(() => {
                    n ? b(D) : E()
                })
            })
        };
    return {
        promise: l,
        status: () => l.status,
        cancel: f,
        continue: () => (r?.(), l),
        cancelRetry: d,
        continueRetry: m,
        canStart: y,
        start: () => (y() ? E() : S().then(E), l)
    }
}
var Fb = class {
        #e;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), h2(this.gcTime) && (this.#e = Id.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (Pc ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            this.#e && (Id.clearTimeout(this.#e), this.#e = void 0)
        }
    },
    R2 = class extends Fb {
        #e;
        #n;
        #t;
        #i;
        #s;
        #r;
        #o;
        constructor(e) {
            super(), this.#o = !1, this.#r = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#t = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = tx(this.options), this.state = e.state ?? this.#e, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#s?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#r,
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const n = tx(this.options);
                n.data !== void 0 && (this.setState(ex(n.data, n.dataUpdatedAt)), this.#e = n)
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#t.remove(this)
        }
        setData(e, n) {
            const i = v2(this.state.data, e, this.options);
            return this.#a({
                data: i,
                type: "success",
                dataUpdatedAt: n?.updatedAt,
                manual: n?.manual
            }), i
        }
        setState(e, n) {
            this.#a({
                type: "setState",
                state: e,
                setStateOptions: n
            })
        }
        cancel(e) {
            const n = this.#s?.promise;
            return this.#s?.cancel(e), n ? n.then(zn).catch(zn) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#e)
        }
        isActive() {
            return this.observers.some(e => p2(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Fh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => $d(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !m2(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(n => n.shouldFetchOnWindowFocus())?.refetch({
                cancelRefetch: !1
            }), this.#s?.continue()
        }
        onOnline() {
            this.observers.find(n => n.shouldFetchOnReconnect())?.refetch({
                cancelRefetch: !1
            }), this.#s?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#t.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e), this.observers.length || (this.#s && (this.#o ? this.#s.cancel({
                revert: !0
            }) : this.#s.cancelRetry()), this.scheduleGc()), this.#t.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#a({
                type: "invalidate"
            })
        }
        async fetch(e, n) {
            if (this.state.fetchStatus !== "idle" && this.#s?.status() !== "rejected") {
                if (this.state.data !== void 0 && n?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#s) return this.#s.continueRetry(), this.#s.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const d = this.observers.find(m => m.options.queryFn);
                d && this.setOptions(d.options)
            }
            const i = new AbortController,
                r = d => {
                    Object.defineProperty(d, "signal", {
                        enumerable: !0,
                        get: () => (this.#o = !0, i.signal)
                    })
                },
                l = () => {
                    const d = Pb(this.options, n),
                        p = (() => {
                            const y = {
                                client: this.#i,
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return r(y), y
                        })();
                    return this.#o = !1, this.options.persister ? this.options.persister(d, p, this) : d(p)
                },
                f = (() => {
                    const d = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: this.#i,
                        state: this.state,
                        fetchFn: l
                    };
                    return r(d), d
                })();
            this.options.behavior?.onFetch(f, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions?.meta) && this.#a({
                type: "fetch",
                meta: f.fetchOptions?.meta
            }), this.#s = qb({
                initialPromise: n?.initialPromise,
                fn: f.fetchFn,
                onCancel: d => {
                    d instanceof Jd && d.revert && this.setState({
                        ...this.#n,
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (d, m) => {
                    this.#a({
                        type: "failed",
                        failureCount: d,
                        error: m
                    })
                },
                onPause: () => {
                    this.#a({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#a({
                        type: "continue"
                    })
                },
                retry: f.options.retry,
                retryDelay: f.options.retryDelay,
                networkMode: f.options.networkMode,
                canRun: () => !0
            });
            try {
                const d = await this.#s.start();
                if (d === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(d), this.#t.config.onSuccess?.(d, this), this.#t.config.onSettled?.(d, this.state.error, this), d
            } catch (d) {
                if (d instanceof Jd) {
                    if (d.silent) return this.#s.promise;
                    if (d.revert) {
                        if (this.state.data === void 0) throw d;
                        return this.state.data
                    }
                }
                throw this.#a({
                    type: "error",
                    error: d
                }), this.#t.config.onError?.(d, this), this.#t.config.onSettled?.(this.state.data, d, this), d
            } finally {
                this.scheduleGc()
            }
        }
        #a(e) {
            const n = i => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...i, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...i, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...i, ...N2(i.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        const r = {
                            ...i,
                            ...ex(e.data, e.dataUpdatedAt),
                            dataUpdateCount: i.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#n = e.manual ? r : void 0, r;
                    case "error":
                        const l = e.error;
                        return {
                            ...i, error: l, errorUpdateCount: i.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: i.fetchFailureCount + 1, fetchFailureReason: l, fetchStatus: "idle", status: "error", isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...i, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...i, ...e.state
                        }
                }
            };
            this.state = n(this.state), Gt.batch(() => {
                this.observers.forEach(i => {
                    i.onQueryUpdate()
                }), this.#t.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function N2(e, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Hb(n.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function ex(e, n) {
    return {
        data: e,
        dataUpdatedAt: n ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function tx(e) {
    const n = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        i = n !== void 0,
        r = i ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: i ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: i ? "success" : "pending",
        fetchStatus: "idle"
    }
}

function nx(e) {
    return {
        onFetch: (n, i) => {
            const r = n.options,
                l = n.fetchOptions?.meta?.fetchMore?.direction,
                c = n.state.data?.pages || [],
                f = n.state.data?.pageParams || [];
            let d = {
                    pages: [],
                    pageParams: []
                },
                m = 0;
            const p = async () => {
                let y = !1;
                const x = E => {
                        w2(E, () => n.signal, () => y = !0)
                    },
                    b = Pb(n.options, n.fetchOptions),
                    S = async (E, _, R) => {
                        if (y) return Promise.reject();
                        if (_ == null && E.pages.length) return Promise.resolve(E);
                        const j = (() => {
                                const I = {
                                    client: n.client,
                                    queryKey: n.queryKey,
                                    pageParam: _,
                                    direction: R ? "backward" : "forward",
                                    meta: n.options.meta
                                };
                                return x(I), I
                            })(),
                            M = await b(j),
                            {
                                maxPages: H
                            } = n.options,
                            z = R ? b2 : x2;
                        return {
                            pages: z(E.pages, M, H),
                            pageParams: z(E.pageParams, _, H)
                        }
                    };
                if (l && c.length) {
                    const E = l === "backward",
                        _ = E ? O2 : sx,
                        R = {
                            pages: c,
                            pageParams: f
                        },
                        D = _(r, R);
                    d = await S(R, D, E)
                } else {
                    const E = e ?? c.length;
                    do {
                        const _ = m === 0 ? f[0] ?? r.initialPageParam : sx(r, d);
                        if (m > 0 && _ == null) break;
                        d = await S(d, _), m++
                    } while (m < E)
                }
                return d
            };
            n.options.persister ? n.fetchFn = () => n.options.persister?.(p, {
                client: n.client,
                queryKey: n.queryKey,
                meta: n.options.meta,
                signal: n.signal
            }, i) : n.fetchFn = p
        }
    }
}

function sx(e, {
    pages: n,
    pageParams: i
}) {
    const r = n.length - 1;
    return n.length > 0 ? e.getNextPageParam(n[r], n, i[r], i) : void 0
}

function O2(e, {
    pages: n,
    pageParams: i
}) {
    return n.length > 0 ? e.getPreviousPageParam?.(n[0], n, i[0], i) : void 0
}
var j2 = class extends Fb {
    #e;
    #n;
    #t;
    #i;
    constructor(e) {
        super(), this.#e = e.client, this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#n = [], this.state = e.state || D2(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#n.includes(e) || (this.#n.push(e), this.clearGcTimeout(), this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#n = this.#n.filter(n => n !== e), this.scheduleGc(), this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue () {
        return this.#i?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        const n = () => {
                this.#s({
                    type: "continue"
                })
            },
            i = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        this.#i = qb({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (c, f) => {
                this.#s({
                    type: "failed",
                    failureCount: c,
                    error: f
                })
            },
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const r = this.state.status === "pending",
            l = !this.#i.canStart();
        try {
            if (r) n();
            else {
                this.#s({
                    type: "pending",
                    variables: e,
                    isPaused: l
                }), this.#t.config.onMutate && await this.#t.config.onMutate(e, this, i);
                const f = await this.options.onMutate?.(e, i);
                f !== this.state.context && this.#s({
                    type: "pending",
                    context: f,
                    variables: e,
                    isPaused: l
                })
            }
            const c = await this.#i.start();
            return await this.#t.config.onSuccess?.(c, e, this.state.context, this, i), await this.options.onSuccess?.(c, e, this.state.context, i), await this.#t.config.onSettled?.(c, null, this.state.variables, this.state.context, this, i), await this.options.onSettled?.(c, null, e, this.state.context, i), this.#s({
                type: "success",
                data: c
            }), c
        } catch (c) {
            try {
                await this.#t.config.onError?.(c, e, this.state.context, this, i)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onError?.(c, e, this.state.context, i)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.#t.config.onSettled?.(void 0, c, this.state.variables, this.state.context, this, i)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onSettled?.(void 0, c, e, this.state.context, i)
            } catch (f) {
                Promise.reject(f)
            }
            throw this.#s({
                type: "error",
                error: c
            }), c
        } finally {
            this.#t.runNext(this)
        }
    }
    #s(e) {
        const n = i => {
            switch (e.type) {
                case "failed":
                    return {
                        ...i, failureCount: e.failureCount, failureReason: e.error
                    };
                case "pause":
                    return {
                        ...i, isPaused: !0
                    };
                case "continue":
                    return {
                        ...i, isPaused: !1
                    };
                case "pending":
                    return {
                        ...i, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...i, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                    };
                case "error":
                    return {
                        ...i, data: void 0, error: e.error, failureCount: i.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
                    }
            }
        };
        this.state = n(this.state), Gt.batch(() => {
            this.#n.forEach(i => {
                i.onMutationUpdate(e)
            }), this.#t.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }
};

function D2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var M2 = class extends Bc {
    constructor(e = {}) {
        super(), this.config = e, this.#e = new Set, this.#n = new Map, this.#t = 0
    }
    #e;
    #n;
    #t;
    build(e, n, i) {
        const r = new j2({
            client: e,
            mutationCache: this,
            mutationId: ++this.#t,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(r), r
    }
    add(e) {
        this.#e.add(e);
        const n = Xl(e);
        if (typeof n == "string") {
            const i = this.#n.get(n);
            i ? i.push(e) : this.#n.set(n, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#e.delete(e)) {
            const n = Xl(e);
            if (typeof n == "string") {
                const i = this.#n.get(n);
                if (i)
                    if (i.length > 1) {
                        const r = i.indexOf(e);
                        r !== -1 && i.splice(r, 1)
                    } else i[0] === e && this.#n.delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = Xl(e);
        if (typeof n == "string") {
            const r = this.#n.get(n)?.find(l => l.state.status === "pending");
            return !r || r === e
        } else return !0
    }
    runNext(e) {
        const n = Xl(e);
        return typeof n == "string" ? this.#n.get(n)?.find(r => r !== e && r.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Gt.batch(() => {
            this.#e.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), this.#e.clear(), this.#n.clear()
        })
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => $v(n, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(n => $v(e, n))
    }
    notify(e) {
        Gt.batch(() => {
            this.listeners.forEach(n => {
                n(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return Gt.batch(() => Promise.all(e.map(n => n.continue().catch(zn))))
    }
};

function Xl(e) {
    return e.options.scope?.id
}
var k2 = class extends Bc {
        constructor(e = {}) {
            super(), this.config = e, this.#e = new Map
        }
        #e;
        build(e, n, i) {
            const r = n.queryKey,
                l = n.queryHash ?? qh(r, n);
            let c = this.get(l);
            return c || (c = new R2({
                client: e,
                queryKey: r,
                queryHash: l,
                options: e.defaultQueryOptions(n),
                state: i,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(c)), c
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const n = this.#e.get(e.queryHash);
            n && (e.destroy(), n === e && this.#e.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            Gt.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#e.get(e)
        }
        getAll() {
            return [...this.#e.values()]
        }
        find(e) {
            const n = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => Iv(n, i))
        }
        findAll(e = {}) {
            const n = this.getAll();
            return Object.keys(e).length > 0 ? n.filter(i => Iv(e, i)) : n
        }
        notify(e) {
            Gt.batch(() => {
                this.listeners.forEach(n => {
                    n(e)
                })
            })
        }
        onFocus() {
            Gt.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            Gt.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    V2 = class {
        #e;
        #n;
        #t;
        #i;
        #s;
        #r;
        #o;
        #a;
        constructor(e = {}) {
            this.#e = e.queryCache || new k2, this.#n = e.mutationCache || new M2, this.#t = e.defaultOptions || {}, this.#i = new Map, this.#s = new Map, this.#r = 0
        }
        mount() {
            this.#r++, this.#r === 1 && (this.#o = Ub.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onFocus())
            }), this.#a = pc.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onOnline())
            }))
        }
        unmount() {
            this.#r--, this.#r === 0 && (this.#o?.(), this.#o = void 0, this.#a?.(), this.#a = void 0)
        }
        isFetching(e) {
            return this.#e.findAll({
                ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#n.findAll({
                ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const n = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(n.queryHash)?.state.data
        }
        ensureQueryData(e) {
            const n = this.defaultQueryOptions(e),
                i = this.#e.build(this, n),
                r = i.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && i.isStaleByTime($d(n.staleTime, i)) && this.prefetchQuery(n), Promise.resolve(r))
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({
                queryKey: n,
                state: i
            }) => {
                const r = i.data;
                return [n, r]
            })
        }
        setQueryData(e, n, i) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                c = this.#e.get(r.queryHash)?.state.data,
                f = d2(n, c);
            if (f !== void 0) return this.#e.build(this, r).setData(f, {
                ...i,
                manual: !0
            })
        }
        setQueriesData(e, n, i) {
            return Gt.batch(() => this.#e.findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, n, i)]))
        }
        getQueryState(e) {
            const n = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(n.queryHash)?.state
        }
        removeQueries(e) {
            const n = this.#e;
            Gt.batch(() => {
                n.findAll(e).forEach(i => {
                    n.remove(i)
                })
            })
        }
        resetQueries(e, n) {
            const i = this.#e;
            return Gt.batch(() => (i.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, n)))
        }
        cancelQueries(e, n = {}) {
            const i = {
                    revert: !0,
                    ...n
                },
                r = Gt.batch(() => this.#e.findAll(e).map(l => l.cancel(i)));
            return Promise.all(r).then(zn).catch(zn)
        }
        invalidateQueries(e, n = {}) {
            return Gt.batch(() => (this.#e.findAll(e).forEach(i => {
                i.invalidate()
            }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                ...e,
                type: e?.refetchType ?? e?.type ?? "active"
            }, n)))
        }
        refetchQueries(e, n = {}) {
            const i = {
                    ...n,
                    cancelRefetch: n.cancelRefetch ?? !0
                },
                r = Gt.batch(() => this.#e.findAll(e).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
                    let c = l.fetch(void 0, i);
                    return i.throwOnError || (c = c.catch(zn)), l.state.fetchStatus === "paused" ? Promise.resolve() : c
                }));
            return Promise.all(r).then(zn)
        }
        fetchQuery(e) {
            const n = this.defaultQueryOptions(e);
            n.retry === void 0 && (n.retry = !1);
            const i = this.#e.build(this, n);
            return i.isStaleByTime($d(n.staleTime, i)) ? i.fetch(n) : Promise.resolve(i.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(zn).catch(zn)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = nx(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(zn).catch(zn)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = nx(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return pc.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#e
        }
        getMutationCache() {
            return this.#n
        }
        getDefaultOptions() {
            return this.#t
        }
        setDefaultOptions(e) {
            this.#t = e
        }
        setQueryDefaults(e, n) {
            this.#i.set(po(e), {
                queryKey: e,
                defaultOptions: n
            })
        }
        getQueryDefaults(e) {
            const n = [...this.#i.values()],
                i = {};
            return n.forEach(r => {
                yo(e, r.queryKey) && Object.assign(i, r.defaultOptions)
            }), i
        }
        setMutationDefaults(e, n) {
            this.#s.set(po(e), {
                mutationKey: e,
                defaultOptions: n
            })
        }
        getMutationDefaults(e) {
            const n = [...this.#s.values()],
                i = {};
            return n.forEach(r => {
                yo(e, r.mutationKey) && Object.assign(i, r.defaultOptions)
            }), i
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const n = {
                ...this.#t.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = qh(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.queryFn === Fh && (n.enabled = !1), n
        }
        defaultMutationOptions(e) {
            return e?._defaulted ? e : {
                ...this.#t.mutations,
                ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            this.#e.clear(), this.#n.clear()
        }
    },
    z2 = A.createContext(void 0),
    L2 = ({
        client: e,
        children: n
    }) => (A.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), g.jsx(z2.Provider, {
        value: e,
        children: n
    }));
const B2 = 1,
    P2 = 1e6;
let Td = 0;

function U2() {
    return Td = (Td + 1) % Number.MAX_SAFE_INTEGER, Td.toString()
}
const Ad = new Map,
    ix = e => {
        if (Ad.has(e)) return;
        const n = setTimeout(() => {
            Ad.delete(e), oo({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, P2);
        Ad.set(e, n)
    },
    H2 = (e, n) => {
        switch (n.type) {
            case "ADD_TOAST":
                return {
                    ...e, toasts: [n.toast, ...e.toasts].slice(0, B2)
                };
            case "UPDATE_TOAST":
                return {
                    ...e, toasts: e.toasts.map(i => i.id === n.toast.id ? {
                        ...i,
                        ...n.toast
                    } : i)
                };
            case "DISMISS_TOAST": {
                const {
                    toastId: i
                } = n;
                return i ? ix(i) : e.toasts.forEach(r => {
                    ix(r.id)
                }), {
                    ...e,
                    toasts: e.toasts.map(r => r.id === i || i === void 0 ? {
                        ...r,
                        open: !1
                    } : r)
                }
            }
            case "REMOVE_TOAST":
                return n.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(i => i.id !== n.toastId)
                }
        }
    },
    sc = [];
let ic = {
    toasts: []
};

function oo(e) {
    ic = H2(ic, e), sc.forEach(n => {
        n(ic)
    })
}

function q2({
    ...e
}) {
    const n = U2(),
        i = l => oo({
            type: "UPDATE_TOAST",
            toast: {
                ...l,
                id: n
            }
        }),
        r = () => oo({
            type: "DISMISS_TOAST",
            toastId: n
        });
    return oo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: n,
            open: !0,
            onOpenChange: l => {
                l || r()
            }
        }
    }), {
        id: n,
        dismiss: r,
        update: i
    }
}

function Yb() {
    const [e, n] = A.useState(ic);
    return A.useEffect(() => (sc.push(n), () => {
        const i = sc.indexOf(n);
        i > -1 && sc.splice(i, 1)
    }), [e]), {
        ...e,
        toast: q2,
        dismiss: i => oo({
            type: "DISMISS_TOAST",
            toastId: i
        })
    }
}
var Uc = _b();
const F2 = Eb(Uc);

function _t(e, n, {
    checkForDefaultPrevented: i = !0
} = {}) {
    return function(l) {
        if (e?.(l), i === !1 || !l.defaultPrevented) return n?.(l)
    }
}

function ax(e, n) {
    if (typeof e == "function") return e(n);
    e != null && (e.current = n)
}

function Gb(...e) {
    return n => {
        let i = !1;
        const r = e.map(l => {
            const c = ax(l, n);
            return !i && typeof c == "function" && (i = !0), c
        });
        if (i) return () => {
            for (let l = 0; l < r.length; l++) {
                const c = r[l];
                typeof c == "function" ? c() : ax(e[l], null)
            }
        }
    }
}

function Hn(...e) {
    return A.useCallback(Gb(...e), e)
}

function Hc(e, n = []) {
    let i = [];

    function r(c, f) {
        const d = A.createContext(f),
            m = i.length;
        i = [...i, f];
        const p = x => {
            const {
                scope: b,
                children: S,
                ...E
            } = x, _ = b?.[e]?.[m] || d, R = A.useMemo(() => E, Object.values(E));
            return g.jsx(_.Provider, {
                value: R,
                children: S
            })
        };
        p.displayName = c + "Provider";

        function y(x, b) {
            const S = b?.[e]?.[m] || d,
                E = A.useContext(S);
            if (E) return E;
            if (f !== void 0) return f;
            throw new Error(`\`${x}\` must be used within \`${c}\``)
        }
        return [p, y]
    }
    const l = () => {
        const c = i.map(f => A.createContext(f));
        return function(d) {
            const m = d?.[e] || c;
            return A.useMemo(() => ({
                [`__scope${e}`]: {
                    ...d,
                    [e]: m
                }
            }), [d, m])
        }
    };
    return l.scopeName = e, [r, Y2(l, ...n)]
}

function Y2(...e) {
    const n = e[0];
    if (e.length === 1) return n;
    const i = () => {
        const r = e.map(l => ({
            useScope: l(),
            scopeName: l.scopeName
        }));
        return function(c) {
            const f = r.reduce((d, {
                useScope: m,
                scopeName: p
            }) => {
                const x = m(c)[`__scope${p}`];
                return {
                    ...d,
                    ...x
                }
            }, {});
            return A.useMemo(() => ({
                [`__scope${n.scopeName}`]: f
            }), [f])
        }
    };
    return i.scopeName = n.scopeName, i
}

function eh(e) {
    const n = G2(e),
        i = A.forwardRef((r, l) => {
            const {
                children: c,
                ...f
            } = r, d = A.Children.toArray(c), m = d.find(X2);
            if (m) {
                const p = m.props.children,
                    y = d.map(x => x === m ? A.Children.count(p) > 1 ? A.Children.only(null) : A.isValidElement(p) ? p.props.children : null : x);
                return g.jsx(n, {
                    ...f,
                    ref: l,
                    children: A.isValidElement(p) ? A.cloneElement(p, void 0, y) : null
                })
            }
            return g.jsx(n, {
                ...f,
                ref: l,
                children: c
            })
        });
    return i.displayName = `${e}.Slot`, i
}

function G2(e) {
    const n = A.forwardRef((i, r) => {
        const {
            children: l,
            ...c
        } = i;
        if (A.isValidElement(l)) {
            const f = Q2(l),
                d = K2(c, l.props);
            return l.type !== A.Fragment && (d.ref = r ? Gb(r, f) : f), A.cloneElement(l, d)
        }
        return A.Children.count(l) > 1 ? A.Children.only(null) : null
    });
    return n.displayName = `${e}.SlotClone`, n
}
var Zb = Symbol("radix.slottable");

function Z2(e) {
    const n = ({
        children: i
    }) => g.jsx(g.Fragment, {
        children: i
    });
    return n.displayName = `${e}.Slottable`, n.__radixId = Zb, n
}

function X2(e) {
    return A.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zb
}

function K2(e, n) {
    const i = {
        ...n
    };
    for (const r in n) {
        const l = e[r],
            c = n[r];
        /^on[A-Z]/.test(r) ? l && c ? i[r] = (...d) => {
            const m = c(...d);
            return l(...d), m
        } : l && (i[r] = l) : r === "style" ? i[r] = {
            ...l,
            ...c
        } : r === "className" && (i[r] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...i
    }
}

function Q2(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        i = n && "isReactWarning" in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}

function I2(e) {
    const n = e + "CollectionProvider",
        [i, r] = Hc(n),
        [l, c] = i(n, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        f = _ => {
            const {
                scope: R,
                children: D
            } = _, j = rt.useRef(null), M = rt.useRef(new Map).current;
            return g.jsx(l, {
                scope: R,
                itemMap: M,
                collectionRef: j,
                children: D
            })
        };
    f.displayName = n;
    const d = e + "CollectionSlot",
        m = eh(d),
        p = rt.forwardRef((_, R) => {
            const {
                scope: D,
                children: j
            } = _, M = c(d, D), H = Hn(R, M.collectionRef);
            return g.jsx(m, {
                ref: H,
                children: j
            })
        });
    p.displayName = d;
    const y = e + "CollectionItemSlot",
        x = "data-radix-collection-item",
        b = eh(y),
        S = rt.forwardRef((_, R) => {
            const {
                scope: D,
                children: j,
                ...M
            } = _, H = rt.useRef(null), z = Hn(R, H), I = c(y, D);
            return rt.useEffect(() => (I.itemMap.set(H, {
                ref: H,
                ...M
            }), () => {
                I.itemMap.delete(H)
            })), g.jsx(b, {
                [x]: "",
                ref: z,
                children: j
            })
        });
    S.displayName = y;

    function E(_) {
        const R = c(e + "CollectionConsumer", _);
        return rt.useCallback(() => {
            const j = R.collectionRef.current;
            if (!j) return [];
            const M = Array.from(j.querySelectorAll(`[${x}]`));
            return Array.from(R.itemMap.values()).sort((I, W) => M.indexOf(I.ref.current) - M.indexOf(W.ref.current))
        }, [R.collectionRef, R.itemMap])
    }
    return [{
        Provider: f,
        Slot: p,
        ItemSlot: S
    }, E, r]
}
var $2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    tn = $2.reduce((e, n) => {
        const i = eh(`Primitive.${n}`),
            r = A.forwardRef((l, c) => {
                const {
                    asChild: f,
                    ...d
                } = l, m = f ? i : n;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), g.jsx(m, {
                    ...d,
                    ref: c
                })
            });
        return r.displayName = `Primitive.${n}`, {
            ...e,
            [n]: r
        }
    }, {});

function Xb(e, n) {
    e && Uc.flushSync(() => e.dispatchEvent(n))
}

function li(e) {
    const n = A.useRef(e);
    return A.useEffect(() => {
        n.current = e
    }), A.useMemo(() => (...i) => n.current?.(...i), [])
}

function W2(e, n = globalThis?.document) {
    const i = li(e);
    A.useEffect(() => {
        const r = l => {
            l.key === "Escape" && i(l)
        };
        return n.addEventListener("keydown", r, {
            capture: !0
        }), () => n.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [i, n])
}
var J2 = "DismissableLayer",
    th = "dismissableLayer.update",
    e_ = "dismissableLayer.pointerDownOutside",
    t_ = "dismissableLayer.focusOutside",
    rx, Kb = A.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Yh = A.forwardRef((e, n) => {
        const {
            disableOutsidePointerEvents: i = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: f,
            onDismiss: d,
            ...m
        } = e, p = A.useContext(Kb), [y, x] = A.useState(null), b = y?.ownerDocument ?? globalThis?.document, [, S] = A.useState({}), E = Hn(n, W => x(W)), _ = Array.from(p.layers), [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), D = _.indexOf(R), j = y ? _.indexOf(y) : -1, M = p.layersWithOutsidePointerEventsDisabled.size > 0, H = j >= D, z = s_(W => {
            const F = W.target,
                le = [...p.branches].some(ve => ve.contains(F));
            !H || le || (l?.(W), f?.(W), W.defaultPrevented || d?.())
        }, b), I = i_(W => {
            const F = W.target;
            [...p.branches].some(ve => ve.contains(F)) || (c?.(W), f?.(W), W.defaultPrevented || d?.())
        }, b);
        return W2(W => {
            j === p.layers.size - 1 && (r?.(W), !W.defaultPrevented && d && (W.preventDefault(), d()))
        }, b), A.useEffect(() => {
            if (y) return i && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (rx = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(y)), p.layers.add(y), ox(), () => {
                i && p.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = rx)
            }
        }, [y, b, i, p]), A.useEffect(() => () => {
            y && (p.layers.delete(y), p.layersWithOutsidePointerEventsDisabled.delete(y), ox())
        }, [y, p]), A.useEffect(() => {
            const W = () => S({});
            return document.addEventListener(th, W), () => document.removeEventListener(th, W)
        }, []), g.jsx(tn.div, {
            ...m,
            ref: E,
            style: {
                pointerEvents: M ? H ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: _t(e.onFocusCapture, I.onFocusCapture),
            onBlurCapture: _t(e.onBlurCapture, I.onBlurCapture),
            onPointerDownCapture: _t(e.onPointerDownCapture, z.onPointerDownCapture)
        })
    });
Yh.displayName = J2;
var n_ = "DismissableLayerBranch",
    Qb = A.forwardRef((e, n) => {
        const i = A.useContext(Kb),
            r = A.useRef(null),
            l = Hn(n, r);
        return A.useEffect(() => {
            const c = r.current;
            if (c) return i.branches.add(c), () => {
                i.branches.delete(c)
            }
        }, [i.branches]), g.jsx(tn.div, {
            ...e,
            ref: l
        })
    });
Qb.displayName = n_;

function s_(e, n = globalThis?.document) {
    const i = li(e),
        r = A.useRef(!1),
        l = A.useRef(() => {});
    return A.useEffect(() => {
        const c = d => {
                if (d.target && !r.current) {
                    let m = function() {
                        Ib(e_, i, p, {
                            discrete: !0
                        })
                    };
                    const p = {
                        originalEvent: d
                    };
                    d.pointerType === "touch" ? (n.removeEventListener("click", l.current), l.current = m, n.addEventListener("click", l.current, {
                        once: !0
                    })) : m()
                } else n.removeEventListener("click", l.current);
                r.current = !1
            },
            f = window.setTimeout(() => {
                n.addEventListener("pointerdown", c)
            }, 0);
        return () => {
            window.clearTimeout(f), n.removeEventListener("pointerdown", c), n.removeEventListener("click", l.current)
        }
    }, [n, i]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function i_(e, n = globalThis?.document) {
    const i = li(e),
        r = A.useRef(!1);
    return A.useEffect(() => {
        const l = c => {
            c.target && !r.current && Ib(t_, i, {
                originalEvent: c
            }, {
                discrete: !1
            })
        };
        return n.addEventListener("focusin", l), () => n.removeEventListener("focusin", l)
    }, [n, i]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function ox() {
    const e = new CustomEvent(th);
    document.dispatchEvent(e)
}

function Ib(e, n, i, {
    discrete: r
}) {
    const l = i.originalEvent.target,
        c = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: i
        });
    n && l.addEventListener(e, n, {
        once: !0
    }), r ? Xb(l, c) : l.dispatchEvent(c)
}
var a_ = Yh,
    r_ = Qb,
    ci = globalThis?.document ? A.useLayoutEffect : () => {},
    o_ = "Portal",
    Gh = A.forwardRef((e, n) => {
        const {
            container: i,
            ...r
        } = e, [l, c] = A.useState(!1);
        ci(() => c(!0), []);
        const f = i || l && globalThis?.document?.body;
        return f ? F2.createPortal(g.jsx(tn.div, {
            ...r,
            ref: n
        }), f) : null
    });
Gh.displayName = o_;

function l_(e, n) {
    return A.useReducer((i, r) => n[i][r] ?? i, e)
}
var qc = e => {
    const {
        present: n,
        children: i
    } = e, r = c_(n), l = typeof i == "function" ? i({
        present: r.isPresent
    }) : A.Children.only(i), c = Hn(r.ref, u_(l));
    return typeof i == "function" || r.isPresent ? A.cloneElement(l, {
        ref: c
    }) : null
};
qc.displayName = "Presence";

function c_(e) {
    const [n, i] = A.useState(), r = A.useRef(null), l = A.useRef(e), c = A.useRef("none"), f = e ? "mounted" : "unmounted", [d, m] = l_(f, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return A.useEffect(() => {
        const p = Kl(r.current);
        c.current = d === "mounted" ? p : "none"
    }, [d]), ci(() => {
        const p = r.current,
            y = l.current;
        if (y !== e) {
            const b = c.current,
                S = Kl(p);
            e ? m("MOUNT") : S === "none" || p?.display === "none" ? m("UNMOUNT") : m(y && b !== S ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e
        }
    }, [e, m]), ci(() => {
        if (n) {
            let p;
            const y = n.ownerDocument.defaultView ?? window,
                x = S => {
                    const _ = Kl(r.current).includes(CSS.escape(S.animationName));
                    if (S.target === n && _ && (m("ANIMATION_END"), !l.current)) {
                        const R = n.style.animationFillMode;
                        n.style.animationFillMode = "forwards", p = y.setTimeout(() => {
                            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = R)
                        })
                    }
                },
                b = S => {
                    S.target === n && (c.current = Kl(r.current))
                };
            return n.addEventListener("animationstart", b), n.addEventListener("animationcancel", x), n.addEventListener("animationend", x), () => {
                y.clearTimeout(p), n.removeEventListener("animationstart", b), n.removeEventListener("animationcancel", x), n.removeEventListener("animationend", x)
            }
        } else m("ANIMATION_END")
    }, [n, m]), {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: A.useCallback(p => {
            r.current = p ? getComputedStyle(p) : null, i(p)
        }, [])
    }
}

function Kl(e) {
    return e?.animationName || "none"
}

function u_(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
        i = n && "isReactWarning" in n && n.isReactWarning;
    return i ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = n && "isReactWarning" in n && n.isReactWarning, i ? e.props.ref : e.props.ref || e.ref)
}
var f_ = Cb[" useInsertionEffect ".trim().toString()] || ci;

function d_({
    prop: e,
    defaultProp: n,
    onChange: i = () => {},
    caller: r
}) {
    const [l, c, f] = h_({
        defaultProp: n,
        onChange: i
    }), d = e !== void 0, m = d ? e : l;
    {
        const y = A.useRef(e !== void 0);
        A.useEffect(() => {
            const x = y.current;
            x !== d && console.warn(`${r} is changing from ${x ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), y.current = d
        }, [d, r])
    }
    const p = A.useCallback(y => {
        if (d) {
            const x = m_(y) ? y(e) : y;
            x !== e && f.current?.(x)
        } else c(y)
    }, [d, e, c, f]);
    return [m, p]
}

function h_({
    defaultProp: e,
    onChange: n
}) {
    const [i, r] = A.useState(e), l = A.useRef(i), c = A.useRef(n);
    return f_(() => {
        c.current = n
    }, [n]), A.useEffect(() => {
        l.current !== i && (c.current?.(i), l.current = i)
    }, [i, l]), [i, r, c]
}

function m_(e) {
    return typeof e == "function"
}
var p_ = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    y_ = "VisuallyHidden",
    Fc = A.forwardRef((e, n) => g.jsx(tn.span, {
        ...e,
        ref: n,
        style: {
            ...p_,
            ...e.style
        }
    }));
Fc.displayName = y_;
var g_ = Fc,
    Zh = "ToastProvider",
    [Xh, v_, x_] = I2("Toast"),
    [$b] = Hc("Toast", [x_]),
    [b_, Yc] = $b(Zh),
    Wb = e => {
        const {
            __scopeToast: n,
            label: i = "Notification",
            duration: r = 5e3,
            swipeDirection: l = "right",
            swipeThreshold: c = 50,
            children: f
        } = e, [d, m] = A.useState(null), [p, y] = A.useState(0), x = A.useRef(!1), b = A.useRef(!1);
        return i.trim() || console.error(`Invalid prop \`label\` supplied to \`${Zh}\`. Expected non-empty \`string\`.`), g.jsx(Xh.Provider, {
            scope: n,
            children: g.jsx(b_, {
                scope: n,
                label: i,
                duration: r,
                swipeDirection: l,
                swipeThreshold: c,
                toastCount: p,
                viewport: d,
                onViewportChange: m,
                onToastAdd: A.useCallback(() => y(S => S + 1), []),
                onToastRemove: A.useCallback(() => y(S => S - 1), []),
                isFocusedToastEscapeKeyDownRef: x,
                isClosePausedRef: b,
                children: f
            })
        })
    };
Wb.displayName = Zh;
var Jb = "ToastViewport",
    w_ = ["F8"],
    nh = "toast.viewportPause",
    sh = "toast.viewportResume",
    e1 = A.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            hotkey: r = w_,
            label: l = "Notifications ({hotkey})",
            ...c
        } = e, f = Yc(Jb, i), d = v_(i), m = A.useRef(null), p = A.useRef(null), y = A.useRef(null), x = A.useRef(null), b = Hn(n, x, f.onViewportChange), S = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), E = f.toastCount > 0;
        A.useEffect(() => {
            const R = D => {
                r.length !== 0 && r.every(M => D[M] || D.code === M) && x.current?.focus()
            };
            return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R)
        }, [r]), A.useEffect(() => {
            const R = m.current,
                D = x.current;
            if (E && R && D) {
                const j = () => {
                        if (!f.isClosePausedRef.current) {
                            const I = new CustomEvent(nh);
                            D.dispatchEvent(I), f.isClosePausedRef.current = !0
                        }
                    },
                    M = () => {
                        if (f.isClosePausedRef.current) {
                            const I = new CustomEvent(sh);
                            D.dispatchEvent(I), f.isClosePausedRef.current = !1
                        }
                    },
                    H = I => {
                        !R.contains(I.relatedTarget) && M()
                    },
                    z = () => {
                        R.contains(document.activeElement) || M()
                    };
                return R.addEventListener("focusin", j), R.addEventListener("focusout", H), R.addEventListener("pointermove", j), R.addEventListener("pointerleave", z), window.addEventListener("blur", j), window.addEventListener("focus", M), () => {
                    R.removeEventListener("focusin", j), R.removeEventListener("focusout", H), R.removeEventListener("pointermove", j), R.removeEventListener("pointerleave", z), window.removeEventListener("blur", j), window.removeEventListener("focus", M)
                }
            }
        }, [E, f.isClosePausedRef]);
        const _ = A.useCallback(({
            tabbingDirection: R
        }) => {
            const j = d().map(M => {
                const H = M.ref.current,
                    z = [H, ...k_(H)];
                return R === "forwards" ? z : z.reverse()
            });
            return (R === "forwards" ? j.reverse() : j).flat()
        }, [d]);
        return A.useEffect(() => {
            const R = x.current;
            if (R) {
                const D = j => {
                    const M = j.altKey || j.ctrlKey || j.metaKey;
                    if (j.key === "Tab" && !M) {
                        const z = document.activeElement,
                            I = j.shiftKey;
                        if (j.target === R && I) {
                            p.current?.focus();
                            return
                        }
                        const le = _({
                                tabbingDirection: I ? "backwards" : "forwards"
                            }),
                            ve = le.findIndex(Re => Re === z);
                        Ed(le.slice(ve + 1)) ? j.preventDefault() : I ? p.current?.focus() : y.current?.focus()
                    }
                };
                return R.addEventListener("keydown", D), () => R.removeEventListener("keydown", D)
            }
        }, [d, _]), g.jsxs(r_, {
            ref: m,
            role: "region",
            "aria-label": l.replace("{hotkey}", S),
            tabIndex: -1,
            style: {
                pointerEvents: E ? void 0 : "none"
            },
            children: [E && g.jsx(ih, {
                ref: p,
                onFocusFromOutsideViewport: () => {
                    const R = _({
                        tabbingDirection: "forwards"
                    });
                    Ed(R)
                }
            }), g.jsx(Xh.Slot, {
                scope: i,
                children: g.jsx(tn.ol, {
                    tabIndex: -1,
                    ...c,
                    ref: b
                })
            }), E && g.jsx(ih, {
                ref: y,
                onFocusFromOutsideViewport: () => {
                    const R = _({
                        tabbingDirection: "backwards"
                    });
                    Ed(R)
                }
            })]
        })
    });
e1.displayName = Jb;
var t1 = "ToastFocusProxy",
    ih = A.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            onFocusFromOutsideViewport: r,
            ...l
        } = e, c = Yc(t1, i);
        return g.jsx(Fc, {
            tabIndex: 0,
            ...l,
            ref: n,
            style: {
                position: "fixed"
            },
            onFocus: f => {
                const d = f.relatedTarget;
                !c.viewport?.contains(d) && r()
            }
        })
    });
ih.displayName = t1;
var Co = "Toast",
    S_ = "toast.swipeStart",
    T_ = "toast.swipeMove",
    A_ = "toast.swipeCancel",
    E_ = "toast.swipeEnd",
    n1 = A.forwardRef((e, n) => {
        const {
            forceMount: i,
            open: r,
            defaultOpen: l,
            onOpenChange: c,
            ...f
        } = e, [d, m] = d_({
            prop: r,
            defaultProp: l ?? !0,
            onChange: c,
            caller: Co
        });
        return g.jsx(qc, {
            present: i || d,
            children: g.jsx(R_, {
                open: d,
                ...f,
                ref: n,
                onClose: () => m(!1),
                onPause: li(e.onPause),
                onResume: li(e.onResume),
                onSwipeStart: _t(e.onSwipeStart, p => {
                    p.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: _t(e.onSwipeMove, p => {
                    const {
                        x: y,
                        y: x
                    } = p.detail.delta;
                    p.currentTarget.setAttribute("data-swipe", "move"), p.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${y}px`), p.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${x}px`)
                }),
                onSwipeCancel: _t(e.onSwipeCancel, p => {
                    p.currentTarget.setAttribute("data-swipe", "cancel"), p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: _t(e.onSwipeEnd, p => {
                    const {
                        x: y,
                        y: x
                    } = p.detail.delta;
                    p.currentTarget.setAttribute("data-swipe", "end"), p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), p.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${y}px`), p.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${x}px`), m(!1)
                })
            })
        })
    });
n1.displayName = Co;
var [__, C_] = $b(Co, {
    onClose() {}
}), R_ = A.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        type: r = "foreground",
        duration: l,
        open: c,
        onClose: f,
        onEscapeKeyDown: d,
        onPause: m,
        onResume: p,
        onSwipeStart: y,
        onSwipeMove: x,
        onSwipeCancel: b,
        onSwipeEnd: S,
        ...E
    } = e, _ = Yc(Co, i), [R, D] = A.useState(null), j = Hn(n, ee => D(ee)), M = A.useRef(null), H = A.useRef(null), z = l || _.duration, I = A.useRef(0), W = A.useRef(z), F = A.useRef(0), {
        onToastAdd: le,
        onToastRemove: ve
    } = _, Re = li(() => {
        R?.contains(document.activeElement) && _.viewport?.focus(), f()
    }), ne = A.useCallback(ee => {
        !ee || ee === 1 / 0 || (window.clearTimeout(F.current), I.current = new Date().getTime(), F.current = window.setTimeout(Re, ee))
    }, [Re]);
    A.useEffect(() => {
        const ee = _.viewport;
        if (ee) {
            const de = () => {
                    ne(W.current), p?.()
                },
                V = () => {
                    const Z = new Date().getTime() - I.current;
                    W.current = W.current - Z, window.clearTimeout(F.current), m?.()
                };
            return ee.addEventListener(nh, V), ee.addEventListener(sh, de), () => {
                ee.removeEventListener(nh, V), ee.removeEventListener(sh, de)
            }
        }
    }, [_.viewport, z, m, p, ne]), A.useEffect(() => {
        c && !_.isClosePausedRef.current && ne(z)
    }, [c, z, _.isClosePausedRef, ne]), A.useEffect(() => (le(), () => ve()), [le, ve]);
    const fe = A.useMemo(() => R ? c1(R) : null, [R]);
    return _.viewport ? g.jsxs(g.Fragment, {
        children: [fe && g.jsx(N_, {
            __scopeToast: i,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            children: fe
        }), g.jsx(__, {
            scope: i,
            onClose: Re,
            children: Uc.createPortal(g.jsx(Xh.ItemSlot, {
                scope: i,
                children: g.jsx(a_, {
                    asChild: !0,
                    onEscapeKeyDown: _t(d, () => {
                        _.isFocusedToastEscapeKeyDownRef.current || Re(), _.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: g.jsx(tn.li, {
                        tabIndex: 0,
                        "data-state": c ? "open" : "closed",
                        "data-swipe-direction": _.swipeDirection,
                        ...E,
                        ref: j,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: _t(e.onKeyDown, ee => {
                            ee.key === "Escape" && (d?.(ee.nativeEvent), ee.nativeEvent.defaultPrevented || (_.isFocusedToastEscapeKeyDownRef.current = !0, Re()))
                        }),
                        onPointerDown: _t(e.onPointerDown, ee => {
                            ee.button === 0 && (M.current = {
                                x: ee.clientX,
                                y: ee.clientY
                            })
                        }),
                        onPointerMove: _t(e.onPointerMove, ee => {
                            if (!M.current) return;
                            const de = ee.clientX - M.current.x,
                                V = ee.clientY - M.current.y,
                                Z = !!H.current,
                                K = ["left", "right"].includes(_.swipeDirection),
                                re = ["left", "up"].includes(_.swipeDirection) ? Math.min : Math.max,
                                T = K ? re(0, de) : 0,
                                X = K ? 0 : re(0, V),
                                ae = ee.pointerType === "touch" ? 10 : 2,
                                se = {
                                    x: T,
                                    y: X
                                },
                                xe = {
                                    originalEvent: ee,
                                    delta: se
                                };
                            Z ? (H.current = se, Ql(T_, x, xe, {
                                discrete: !1
                            })) : lx(se, _.swipeDirection, ae) ? (H.current = se, Ql(S_, y, xe, {
                                discrete: !1
                            }), ee.target.setPointerCapture(ee.pointerId)) : (Math.abs(de) > ae || Math.abs(V) > ae) && (M.current = null)
                        }),
                        onPointerUp: _t(e.onPointerUp, ee => {
                            const de = H.current,
                                V = ee.target;
                            if (V.hasPointerCapture(ee.pointerId) && V.releasePointerCapture(ee.pointerId), H.current = null, M.current = null, de) {
                                const Z = ee.currentTarget,
                                    K = {
                                        originalEvent: ee,
                                        delta: de
                                    };
                                lx(de, _.swipeDirection, _.swipeThreshold) ? Ql(E_, S, K, {
                                    discrete: !0
                                }) : Ql(A_, b, K, {
                                    discrete: !0
                                }), Z.addEventListener("click", re => re.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), _.viewport)
        })]
    }) : null
}), N_ = e => {
    const {
        __scopeToast: n,
        children: i,
        ...r
    } = e, l = Yc(Co, n), [c, f] = A.useState(!1), [d, m] = A.useState(!1);
    return D_(() => f(!0)), A.useEffect(() => {
        const p = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(p)
    }, []), d ? null : g.jsx(Gh, {
        asChild: !0,
        children: g.jsx(Fc, {
            ...r,
            children: c && g.jsxs(g.Fragment, {
                children: [l.label, " ", i]
            })
        })
    })
}, O_ = "ToastTitle", s1 = A.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        ...r
    } = e;
    return g.jsx(tn.div, {
        ...r,
        ref: n
    })
});
s1.displayName = O_;
var j_ = "ToastDescription",
    i1 = A.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            ...r
        } = e;
        return g.jsx(tn.div, {
            ...r,
            ref: n
        })
    });
i1.displayName = j_;
var a1 = "ToastAction",
    r1 = A.forwardRef((e, n) => {
        const {
            altText: i,
            ...r
        } = e;
        return i.trim() ? g.jsx(l1, {
            altText: i,
            asChild: !0,
            children: g.jsx(Kh, {
                ...r,
                ref: n
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${a1}\`. Expected non-empty \`string\`.`), null)
    });
r1.displayName = a1;
var o1 = "ToastClose",
    Kh = A.forwardRef((e, n) => {
        const {
            __scopeToast: i,
            ...r
        } = e, l = C_(o1, i);
        return g.jsx(l1, {
            asChild: !0,
            children: g.jsx(tn.button, {
                type: "button",
                ...r,
                ref: n,
                onClick: _t(e.onClick, l.onClose)
            })
        })
    });
Kh.displayName = o1;
var l1 = A.forwardRef((e, n) => {
    const {
        __scopeToast: i,
        altText: r,
        ...l
    } = e;
    return g.jsx(tn.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...l,
        ref: n
    })
});

function c1(e) {
    const n = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && n.push(r.textContent), M_(r)) {
            const l = r.ariaHidden || r.hidden || r.style.display === "none",
                c = r.dataset.radixToastAnnounceExclude === "";
            if (!l)
                if (c) {
                    const f = r.dataset.radixToastAnnounceAlt;
                    f && n.push(f)
                } else n.push(...c1(r))
        }
    }), n
}

function Ql(e, n, i, {
    discrete: r
}) {
    const l = i.originalEvent.currentTarget,
        c = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: i
        });
    n && l.addEventListener(e, n, {
        once: !0
    }), r ? Xb(l, c) : l.dispatchEvent(c)
}
var lx = (e, n, i = 0) => {
    const r = Math.abs(e.x),
        l = Math.abs(e.y),
        c = r > l;
    return n === "left" || n === "right" ? c && r > i : !c && l > i
};

function D_(e = () => {}) {
    const n = li(e);
    ci(() => {
        let i = 0,
            r = 0;
        return i = window.requestAnimationFrame(() => r = window.requestAnimationFrame(n)), () => {
            window.cancelAnimationFrame(i), window.cancelAnimationFrame(r)
        }
    }, [n])
}

function M_(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function k_(e) {
    const n = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const l = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || l ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; i.nextNode();) n.push(i.currentNode);
    return n
}

function Ed(e) {
    const n = document.activeElement;
    return e.some(i => i === n ? !0 : (i.focus(), document.activeElement !== n))
}
var V_ = Wb,
    u1 = e1,
    f1 = n1,
    d1 = s1,
    h1 = i1,
    m1 = r1,
    p1 = Kh;

function y1(e) {
    var n, i, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var l = e.length;
            for (n = 0; n < l; n++) e[n] && (i = y1(e[n])) && (r && (r += " "), r += i)
        } else
            for (i in e) e[i] && (r && (r += " "), r += i);
    return r
}

function g1() {
    for (var e, n, i = 0, r = "", l = arguments.length; i < l; i++)(e = arguments[i]) && (n = y1(e)) && (r && (r += " "), r += n);
    return r
}
const cx = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    ux = g1,
    z_ = (e, n) => i => {
        var r;
        if (n?.variants == null) return ux(e, i?.class, i?.className);
        const {
            variants: l,
            defaultVariants: c
        } = n, f = Object.keys(l).map(p => {
            const y = i?.[p],
                x = c?.[p];
            if (y === null) return null;
            const b = cx(y) || cx(x);
            return l[p][b]
        }), d = i && Object.entries(i).reduce((p, y) => {
            let [x, b] = y;
            return b === void 0 || (p[x] = b), p
        }, {}), m = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((p, y) => {
            let {
                class: x,
                className: b,
                ...S
            } = y;
            return Object.entries(S).every(E => {
                let [_, R] = E;
                return Array.isArray(R) ? R.includes({
                    ...c,
                    ...d
                } [_]) : {
                    ...c,
                    ...d
                } [_] === R
            }) ? [...p, x, b] : p
        }, []);
        return ux(e, f, m, i?.class, i?.className)
    };
const L_ = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    B_ = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, i, r) => r ? r.toUpperCase() : i.toLowerCase()),
    fx = e => {
        const n = B_(e);
        return n.charAt(0).toUpperCase() + n.slice(1)
    },
    v1 = (...e) => e.filter((n, i, r) => !!n && n.trim() !== "" && r.indexOf(n) === i).join(" ").trim(),
    P_ = e => {
        for (const n in e)
            if (n.startsWith("aria-") || n === "role" || n === "title") return !0
    };
var U_ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const H_ = A.forwardRef(({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: c,
    iconNode: f,
    ...d
}, m) => A.createElement("svg", {
    ref: m,
    ...U_,
    width: n,
    height: n,
    stroke: e,
    strokeWidth: r ? Number(i) * 24 / Number(n) : i,
    className: v1("lucide", l),
    ...!c && !P_(d) && {
        "aria-hidden": "true"
    },
    ...d
}, [...f.map(([p, y]) => A.createElement(p, y)), ...Array.isArray(c) ? c : [c]]));
const Kt = (e, n) => {
    const i = A.forwardRef(({
        className: r,
        ...l
    }, c) => A.createElement(H_, {
        ref: c,
        iconNode: n,
        className: v1(`lucide-${L_(fx(e))}`, `lucide-${e}`, r),
        ...l
    }));
    return i.displayName = fx(e), i
};
const q_ = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    F_ = Kt("arrow-right", q_);
const Y_ = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    x1 = Kt("check", Y_);
const G_ = [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ],
    dx = Kt("chevron-left", G_);
const Z_ = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ],
    hx = Kt("chevron-right", Z_);
const X_ = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]
    ],
    K_ = Kt("circle-alert", X_);
const Q_ = [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }]
    ],
    I_ = Kt("credit-card", Q_);
const $_ = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    mx = Kt("lock", $_);
const W_ = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    J_ = Kt("mail", W_);
const eC = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    b1 = Kt("map-pin", eC);
const tC = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "m21 3-7 7",
            key: "1l2asr"
        }],
        ["path", {
            d: "m3 21 7-7",
            key: "tjx5ai"
        }],
        ["path", {
            d: "M9 21H3v-6",
            key: "wtvkvv"
        }]
    ],
    nC = Kt("maximize-2", tC);
const sC = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    iC = Kt("menu", sC);
const aC = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    rC = Kt("phone", aC);
const oC = [
        ["circle", {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }],
        ["circle", {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }],
        ["path", {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }]
    ],
    ac = Kt("shopping-cart", oC);
const lC = [
        ["path", {
            d: "M10 11v6",
            key: "nco0om"
        }],
        ["path", {
            d: "M14 11v6",
            key: "outv1u"
        }],
        ["path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }],
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }]
    ],
    cC = Kt("trash-2", lC);
const uC = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Qh = Kt("x", uC),
    fC = (e, n) => {
        const i = new Array(e.length + n.length);
        for (let r = 0; r < e.length; r++) i[r] = e[r];
        for (let r = 0; r < n.length; r++) i[e.length + r] = n[r];
        return i
    },
    dC = (e, n) => ({
        classGroupId: e,
        validator: n
    }),
    w1 = (e = new Map, n = null, i) => ({
        nextPart: e,
        validators: n,
        classGroupId: i
    }),
    yc = "-",
    px = [],
    hC = "arbitrary..",
    mC = e => {
        const n = yC(e),
            {
                conflictingClassGroups: i,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: f => {
                if (f.startsWith("[") && f.endsWith("]")) return pC(f);
                const d = f.split(yc),
                    m = d[0] === "" && d.length > 1 ? 1 : 0;
                return S1(d, m, n)
            },
            getConflictingClassGroupIds: (f, d) => {
                if (d) {
                    const m = r[f],
                        p = i[f];
                    return m ? p ? fC(p, m) : m : p || px
                }
                return i[f] || px
            }
        }
    },
    S1 = (e, n, i) => {
        if (e.length - n === 0) return i.classGroupId;
        const l = e[n],
            c = i.nextPart.get(l);
        if (c) {
            const p = S1(e, n + 1, c);
            if (p) return p
        }
        const f = i.validators;
        if (f === null) return;
        const d = n === 0 ? e.join(yc) : e.slice(n).join(yc),
            m = f.length;
        for (let p = 0; p < m; p++) {
            const y = f[p];
            if (y.validator(d)) return y.classGroupId
        }
    },
    pC = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const n = e.slice(1, -1),
            i = n.indexOf(":"),
            r = n.slice(0, i);
        return r ? hC + r : void 0
    })(),
    yC = e => {
        const {
            theme: n,
            classGroups: i
        } = e;
        return gC(i, n)
    },
    gC = (e, n) => {
        const i = w1();
        for (const r in e) {
            const l = e[r];
            Ih(l, i, r, n)
        }
        return i
    },
    Ih = (e, n, i, r) => {
        const l = e.length;
        for (let c = 0; c < l; c++) {
            const f = e[c];
            vC(f, n, i, r)
        }
    },
    vC = (e, n, i, r) => {
        if (typeof e == "string") {
            xC(e, n, i);
            return
        }
        if (typeof e == "function") {
            bC(e, n, i, r);
            return
        }
        wC(e, n, i, r)
    },
    xC = (e, n, i) => {
        const r = e === "" ? n : T1(n, e);
        r.classGroupId = i
    },
    bC = (e, n, i, r) => {
        if (SC(e)) {
            Ih(e(r), n, i, r);
            return
        }
        n.validators === null && (n.validators = []), n.validators.push(dC(i, e))
    },
    wC = (e, n, i, r) => {
        const l = Object.entries(e),
            c = l.length;
        for (let f = 0; f < c; f++) {
            const [d, m] = l[f];
            Ih(m, T1(n, d), i, r)
        }
    },
    T1 = (e, n) => {
        let i = e;
        const r = n.split(yc),
            l = r.length;
        for (let c = 0; c < l; c++) {
            const f = r[c];
            let d = i.nextPart.get(f);
            d || (d = w1(), i.nextPart.set(f, d)), i = d
        }
        return i
    },
    SC = e => "isThemeGetter" in e && e.isThemeGetter === !0,
    TC = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let n = 0,
            i = Object.create(null),
            r = Object.create(null);
        const l = (c, f) => {
            i[c] = f, n++, n > e && (n = 0, r = i, i = Object.create(null))
        };
        return {
            get(c) {
                let f = i[c];
                if (f !== void 0) return f;
                if ((f = r[c]) !== void 0) return l(c, f), f
            },
            set(c, f) {
                c in i ? i[c] = f : l(c, f)
            }
        }
    },
    ah = "!",
    yx = ":",
    AC = [],
    gx = (e, n, i, r, l) => ({
        modifiers: e,
        hasImportantModifier: n,
        baseClassName: i,
        maybePostfixModifierPosition: r,
        isExternal: l
    }),
    EC = e => {
        const {
            prefix: n,
            experimentalParseClassName: i
        } = e;
        let r = l => {
            const c = [];
            let f = 0,
                d = 0,
                m = 0,
                p;
            const y = l.length;
            for (let _ = 0; _ < y; _++) {
                const R = l[_];
                if (f === 0 && d === 0) {
                    if (R === yx) {
                        c.push(l.slice(m, _)), m = _ + 1;
                        continue
                    }
                    if (R === "/") {
                        p = _;
                        continue
                    }
                }
                R === "[" ? f++ : R === "]" ? f-- : R === "(" ? d++ : R === ")" && d--
            }
            const x = c.length === 0 ? l : l.slice(m);
            let b = x,
                S = !1;
            x.endsWith(ah) ? (b = x.slice(0, -1), S = !0) : x.startsWith(ah) && (b = x.slice(1), S = !0);
            const E = p && p > m ? p - m : void 0;
            return gx(c, S, b, E)
        };
        if (n) {
            const l = n + yx,
                c = r;
            r = f => f.startsWith(l) ? c(f.slice(l.length)) : gx(AC, !1, f, void 0, !0)
        }
        if (i) {
            const l = r;
            r = c => i({
                className: c,
                parseClassName: l
            })
        }
        return r
    },
    _C = e => {
        const n = new Map;
        return e.orderSensitiveModifiers.forEach((i, r) => {
            n.set(i, 1e6 + r)
        }), i => {
            const r = [];
            let l = [];
            for (let c = 0; c < i.length; c++) {
                const f = i[c],
                    d = f[0] === "[",
                    m = n.has(f);
                d || m ? (l.length > 0 && (l.sort(), r.push(...l), l = []), r.push(f)) : l.push(f)
            }
            return l.length > 0 && (l.sort(), r.push(...l)), r
        }
    },
    CC = e => ({
        cache: TC(e.cacheSize),
        parseClassName: EC(e),
        sortModifiers: _C(e),
        ...mC(e)
    }),
    RC = /\s+/,
    NC = (e, n) => {
        const {
            parseClassName: i,
            getClassGroupId: r,
            getConflictingClassGroupIds: l,
            sortModifiers: c
        } = n, f = [], d = e.trim().split(RC);
        let m = "";
        for (let p = d.length - 1; p >= 0; p -= 1) {
            const y = d[p],
                {
                    isExternal: x,
                    modifiers: b,
                    hasImportantModifier: S,
                    baseClassName: E,
                    maybePostfixModifierPosition: _
                } = i(y);
            if (x) {
                m = y + (m.length > 0 ? " " + m : m);
                continue
            }
            let R = !!_,
                D = r(R ? E.substring(0, _) : E);
            if (!D) {
                if (!R) {
                    m = y + (m.length > 0 ? " " + m : m);
                    continue
                }
                if (D = r(E), !D) {
                    m = y + (m.length > 0 ? " " + m : m);
                    continue
                }
                R = !1
            }
            const j = b.length === 0 ? "" : b.length === 1 ? b[0] : c(b).join(":"),
                M = S ? j + ah : j,
                H = M + D;
            if (f.indexOf(H) > -1) continue;
            f.push(H);
            const z = l(D, R);
            for (let I = 0; I < z.length; ++I) {
                const W = z[I];
                f.push(M + W)
            }
            m = y + (m.length > 0 ? " " + m : m)
        }
        return m
    },
    OC = (...e) => {
        let n = 0,
            i, r, l = "";
        for (; n < e.length;)(i = e[n++]) && (r = A1(i)) && (l && (l += " "), l += r);
        return l
    },
    A1 = e => {
        if (typeof e == "string") return e;
        let n, i = "";
        for (let r = 0; r < e.length; r++) e[r] && (n = A1(e[r])) && (i && (i += " "), i += n);
        return i
    },
    jC = (e, ...n) => {
        let i, r, l, c;
        const f = m => {
                const p = n.reduce((y, x) => x(y), e());
                return i = CC(p), r = i.cache.get, l = i.cache.set, c = d, d(m)
            },
            d = m => {
                const p = r(m);
                if (p) return p;
                const y = NC(m, i);
                return l(m, y), y
            };
        return c = f, (...m) => c(OC(...m))
    },
    DC = [],
    Tt = e => {
        const n = i => i[e] || DC;
        return n.isThemeGetter = !0, n
    },
    E1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    _1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    MC = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    kC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    VC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    zC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    LC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    BC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ei = e => MC.test(e),
    ke = e => !!e && !Number.isNaN(Number(e)),
    ti = e => !!e && Number.isInteger(Number(e)),
    _d = e => e.endsWith("%") && ke(e.slice(0, -1)),
    ws = e => kC.test(e),
    C1 = () => !0,
    PC = e => VC.test(e) && !zC.test(e),
    $h = () => !1,
    UC = e => LC.test(e),
    HC = e => BC.test(e),
    qC = e => !pe(e) && !be(e),
    FC = e => gi(e, O1, $h),
    pe = e => E1.test(e),
    zi = e => gi(e, j1, PC),
    vx = e => gi(e, $C, ke),
    YC = e => gi(e, M1, C1),
    GC = e => gi(e, D1, $h),
    xx = e => gi(e, R1, $h),
    ZC = e => gi(e, N1, HC),
    Il = e => gi(e, k1, UC),
    be = e => _1.test(e),
    no = e => Zi(e, j1),
    XC = e => Zi(e, D1),
    bx = e => Zi(e, R1),
    KC = e => Zi(e, O1),
    QC = e => Zi(e, N1),
    $l = e => Zi(e, k1, !0),
    IC = e => Zi(e, M1, !0),
    gi = (e, n, i) => {
        const r = E1.exec(e);
        return r ? r[1] ? n(r[1]) : i(r[2]) : !1
    },
    Zi = (e, n, i = !1) => {
        const r = _1.exec(e);
        return r ? r[1] ? n(r[1]) : i : !1
    },
    R1 = e => e === "position" || e === "percentage",
    N1 = e => e === "image" || e === "url",
    O1 = e => e === "length" || e === "size" || e === "bg-size",
    j1 = e => e === "length",
    $C = e => e === "number",
    D1 = e => e === "family-name",
    M1 = e => e === "number" || e === "weight",
    k1 = e => e === "shadow",
    WC = () => {
        const e = Tt("color"),
            n = Tt("font"),
            i = Tt("text"),
            r = Tt("font-weight"),
            l = Tt("tracking"),
            c = Tt("leading"),
            f = Tt("breakpoint"),
            d = Tt("container"),
            m = Tt("spacing"),
            p = Tt("radius"),
            y = Tt("shadow"),
            x = Tt("inset-shadow"),
            b = Tt("text-shadow"),
            S = Tt("drop-shadow"),
            E = Tt("blur"),
            _ = Tt("perspective"),
            R = Tt("aspect"),
            D = Tt("ease"),
            j = Tt("animate"),
            M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            H = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            z = () => [...H(), be, pe],
            I = () => ["auto", "hidden", "clip", "visible", "scroll"],
            W = () => ["auto", "contain", "none"],
            F = () => [be, pe, m],
            le = () => [ei, "full", "auto", ...F()],
            ve = () => [ti, "none", "subgrid", be, pe],
            Re = () => ["auto", {
                span: ["full", ti, be, pe]
            }, ti, be, pe],
            ne = () => [ti, "auto", be, pe],
            fe = () => ["auto", "min", "max", "fr", be, pe],
            ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            de = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            V = () => ["auto", ...F()],
            Z = () => [ei, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()],
            K = () => [ei, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...F()],
            re = () => [ei, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...F()],
            T = () => [e, be, pe],
            X = () => [...H(), bx, xx, {
                position: [be, pe]
            }],
            ae = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            se = () => ["auto", "cover", "contain", KC, FC, {
                size: [be, pe]
            }],
            xe = () => [_d, no, zi],
            Ae = () => ["", "none", "full", p, be, pe],
            he = () => ["", ke, no, zi],
            tt = () => ["solid", "dashed", "dotted", "double"],
            He = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            Ye = () => [ke, _d, bx, xx],
            mn = () => ["", "none", E, be, pe],
            Ht = () => ["none", ke, be, pe],
            pn = () => ["none", ke, be, pe],
            qt = () => [ke, be, pe],
            Yn = () => [ei, "full", ...F()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [ws],
                breakpoint: [ws],
                color: [C1],
                container: [ws],
                "drop-shadow": [ws],
                ease: ["in", "out", "in-out"],
                font: [qC],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [ws],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [ws],
                shadow: [ws],
                spacing: ["px", ke],
                text: [ws],
                "text-shadow": [ws],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", ei, pe, be, R]
                }],
                container: ["container"],
                columns: [{
                    columns: [ke, pe, be, d]
                }],
                "break-after": [{
                    "break-after": M()
                }],
                "break-before": [{
                    "break-before": M()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: z()
                }],
                overflow: [{
                    overflow: I()
                }],
                "overflow-x": [{
                    "overflow-x": I()
                }],
                "overflow-y": [{
                    "overflow-y": I()
                }],
                overscroll: [{
                    overscroll: W()
                }],
                "overscroll-x": [{
                    "overscroll-x": W()
                }],
                "overscroll-y": [{
                    "overscroll-y": W()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: le()
                }],
                "inset-x": [{
                    "inset-x": le()
                }],
                "inset-y": [{
                    "inset-y": le()
                }],
                start: [{
                    "inset-s": le(),
                    start: le()
                }],
                end: [{
                    "inset-e": le(),
                    end: le()
                }],
                "inset-bs": [{
                    "inset-bs": le()
                }],
                "inset-be": [{
                    "inset-be": le()
                }],
                top: [{
                    top: le()
                }],
                right: [{
                    right: le()
                }],
                bottom: [{
                    bottom: le()
                }],
                left: [{
                    left: le()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [ti, "auto", be, pe]
                }],
                basis: [{
                    basis: [ei, "full", "auto", d, ...F()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [ke, ei, "auto", "initial", "none", pe]
                }],
                grow: [{
                    grow: ["", ke, be, pe]
                }],
                shrink: [{
                    shrink: ["", ke, be, pe]
                }],
                order: [{
                    order: [ti, "first", "last", "none", be, pe]
                }],
                "grid-cols": [{
                    "grid-cols": ve()
                }],
                "col-start-end": [{
                    col: Re()
                }],
                "col-start": [{
                    "col-start": ne()
                }],
                "col-end": [{
                    "col-end": ne()
                }],
                "grid-rows": [{
                    "grid-rows": ve()
                }],
                "row-start-end": [{
                    row: Re()
                }],
                "row-start": [{
                    "row-start": ne()
                }],
                "row-end": [{
                    "row-end": ne()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": fe()
                }],
                "auto-rows": [{
                    "auto-rows": fe()
                }],
                gap: [{
                    gap: F()
                }],
                "gap-x": [{
                    "gap-x": F()
                }],
                "gap-y": [{
                    "gap-y": F()
                }],
                "justify-content": [{
                    justify: [...ee(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...de(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...de()]
                }],
                "align-content": [{
                    content: ["normal", ...ee()]
                }],
                "align-items": [{
                    items: [...de(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...de(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": ee()
                }],
                "place-items": [{
                    "place-items": [...de(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...de()]
                }],
                p: [{
                    p: F()
                }],
                px: [{
                    px: F()
                }],
                py: [{
                    py: F()
                }],
                ps: [{
                    ps: F()
                }],
                pe: [{
                    pe: F()
                }],
                pbs: [{
                    pbs: F()
                }],
                pbe: [{
                    pbe: F()
                }],
                pt: [{
                    pt: F()
                }],
                pr: [{
                    pr: F()
                }],
                pb: [{
                    pb: F()
                }],
                pl: [{
                    pl: F()
                }],
                m: [{
                    m: V()
                }],
                mx: [{
                    mx: V()
                }],
                my: [{
                    my: V()
                }],
                ms: [{
                    ms: V()
                }],
                me: [{
                    me: V()
                }],
                mbs: [{
                    mbs: V()
                }],
                mbe: [{
                    mbe: V()
                }],
                mt: [{
                    mt: V()
                }],
                mr: [{
                    mr: V()
                }],
                mb: [{
                    mb: V()
                }],
                ml: [{
                    ml: V()
                }],
                "space-x": [{
                    "space-x": F()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": F()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: Z()
                }],
                "inline-size": [{
                    inline: ["auto", ...K()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...K()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...K()]
                }],
                "block-size": [{
                    block: ["auto", ...re()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...re()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...re()]
                }],
                w: [{
                    w: [d, "screen", ...Z()]
                }],
                "min-w": [{
                    "min-w": [d, "screen", "none", ...Z()]
                }],
                "max-w": [{
                    "max-w": [d, "screen", "none", "prose", {
                        screen: [f]
                    }, ...Z()]
                }],
                h: [{
                    h: ["screen", "lh", ...Z()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...Z()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...Z()]
                }],
                "font-size": [{
                    text: ["base", i, no, zi]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [r, IC, YC]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", _d, pe]
                }],
                "font-family": [{
                    font: [XC, GC, n]
                }],
                "font-features": [{
                    "font-features": [pe]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [l, be, pe]
                }],
                "line-clamp": [{
                    "line-clamp": [ke, "none", be, vx]
                }],
                leading: [{
                    leading: [c, ...F()]
                }],
                "list-image": [{
                    "list-image": ["none", be, pe]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", be, pe]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: T()
                }],
                "text-color": [{
                    text: T()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...tt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [ke, "from-font", "auto", be, zi]
                }],
                "text-decoration-color": [{
                    decoration: T()
                }],
                "underline-offset": [{
                    "underline-offset": [ke, "auto", be, pe]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: F()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, pe]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", be, pe]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: X()
                }],
                "bg-repeat": [{
                    bg: ae()
                }],
                "bg-size": [{
                    bg: se()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, ti, be, pe],
                        radial: ["", be, pe],
                        conic: [ti, be, pe]
                    }, QC, ZC]
                }],
                "bg-color": [{
                    bg: T()
                }],
                "gradient-from-pos": [{
                    from: xe()
                }],
                "gradient-via-pos": [{
                    via: xe()
                }],
                "gradient-to-pos": [{
                    to: xe()
                }],
                "gradient-from": [{
                    from: T()
                }],
                "gradient-via": [{
                    via: T()
                }],
                "gradient-to": [{
                    to: T()
                }],
                rounded: [{
                    rounded: Ae()
                }],
                "rounded-s": [{
                    "rounded-s": Ae()
                }],
                "rounded-e": [{
                    "rounded-e": Ae()
                }],
                "rounded-t": [{
                    "rounded-t": Ae()
                }],
                "rounded-r": [{
                    "rounded-r": Ae()
                }],
                "rounded-b": [{
                    "rounded-b": Ae()
                }],
                "rounded-l": [{
                    "rounded-l": Ae()
                }],
                "rounded-ss": [{
                    "rounded-ss": Ae()
                }],
                "rounded-se": [{
                    "rounded-se": Ae()
                }],
                "rounded-ee": [{
                    "rounded-ee": Ae()
                }],
                "rounded-es": [{
                    "rounded-es": Ae()
                }],
                "rounded-tl": [{
                    "rounded-tl": Ae()
                }],
                "rounded-tr": [{
                    "rounded-tr": Ae()
                }],
                "rounded-br": [{
                    "rounded-br": Ae()
                }],
                "rounded-bl": [{
                    "rounded-bl": Ae()
                }],
                "border-w": [{
                    border: he()
                }],
                "border-w-x": [{
                    "border-x": he()
                }],
                "border-w-y": [{
                    "border-y": he()
                }],
                "border-w-s": [{
                    "border-s": he()
                }],
                "border-w-e": [{
                    "border-e": he()
                }],
                "border-w-bs": [{
                    "border-bs": he()
                }],
                "border-w-be": [{
                    "border-be": he()
                }],
                "border-w-t": [{
                    "border-t": he()
                }],
                "border-w-r": [{
                    "border-r": he()
                }],
                "border-w-b": [{
                    "border-b": he()
                }],
                "border-w-l": [{
                    "border-l": he()
                }],
                "divide-x": [{
                    "divide-x": he()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": he()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...tt(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...tt(), "hidden", "none"]
                }],
                "border-color": [{
                    border: T()
                }],
                "border-color-x": [{
                    "border-x": T()
                }],
                "border-color-y": [{
                    "border-y": T()
                }],
                "border-color-s": [{
                    "border-s": T()
                }],
                "border-color-e": [{
                    "border-e": T()
                }],
                "border-color-bs": [{
                    "border-bs": T()
                }],
                "border-color-be": [{
                    "border-be": T()
                }],
                "border-color-t": [{
                    "border-t": T()
                }],
                "border-color-r": [{
                    "border-r": T()
                }],
                "border-color-b": [{
                    "border-b": T()
                }],
                "border-color-l": [{
                    "border-l": T()
                }],
                "divide-color": [{
                    divide: T()
                }],
                "outline-style": [{
                    outline: [...tt(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [ke, be, pe]
                }],
                "outline-w": [{
                    outline: ["", ke, no, zi]
                }],
                "outline-color": [{
                    outline: T()
                }],
                shadow: [{
                    shadow: ["", "none", y, $l, Il]
                }],
                "shadow-color": [{
                    shadow: T()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", x, $l, Il]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": T()
                }],
                "ring-w": [{
                    ring: he()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: T()
                }],
                "ring-offset-w": [{
                    "ring-offset": [ke, zi]
                }],
                "ring-offset-color": [{
                    "ring-offset": T()
                }],
                "inset-ring-w": [{
                    "inset-ring": he()
                }],
                "inset-ring-color": [{
                    "inset-ring": T()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", b, $l, Il]
                }],
                "text-shadow-color": [{
                    "text-shadow": T()
                }],
                opacity: [{
                    opacity: [ke, be, pe]
                }],
                "mix-blend": [{
                    "mix-blend": [...He(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": He()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [ke]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": Ye()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": Ye()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": T()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": T()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": Ye()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": Ye()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": T()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": T()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": Ye()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": Ye()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": T()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": T()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": Ye()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": Ye()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": T()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": T()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": Ye()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": Ye()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": T()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": T()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": Ye()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": Ye()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": T()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": T()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": Ye()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": Ye()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": T()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": T()
                }],
                "mask-image-radial": [{
                    "mask-radial": [be, pe]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": Ye()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": Ye()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": T()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": T()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": H()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [ke]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": Ye()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": Ye()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": T()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": T()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: X()
                }],
                "mask-repeat": [{
                    mask: ae()
                }],
                "mask-size": [{
                    mask: se()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", be, pe]
                }],
                filter: [{
                    filter: ["", "none", be, pe]
                }],
                blur: [{
                    blur: mn()
                }],
                brightness: [{
                    brightness: [ke, be, pe]
                }],
                contrast: [{
                    contrast: [ke, be, pe]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", S, $l, Il]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": T()
                }],
                grayscale: [{
                    grayscale: ["", ke, be, pe]
                }],
                "hue-rotate": [{
                    "hue-rotate": [ke, be, pe]
                }],
                invert: [{
                    invert: ["", ke, be, pe]
                }],
                saturate: [{
                    saturate: [ke, be, pe]
                }],
                sepia: [{
                    sepia: ["", ke, be, pe]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", be, pe]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": mn()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [ke, be, pe]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [ke, be, pe]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", ke, be, pe]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [ke, be, pe]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", ke, be, pe]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [ke, be, pe]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [ke, be, pe]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", ke, be, pe]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": F()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": F()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": F()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, pe]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [ke, "initial", be, pe]
                }],
                ease: [{
                    ease: ["linear", "initial", D, be, pe]
                }],
                delay: [{
                    delay: [ke, be, pe]
                }],
                animate: [{
                    animate: ["none", j, be, pe]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [_, be, pe]
                }],
                "perspective-origin": [{
                    "perspective-origin": z()
                }],
                rotate: [{
                    rotate: Ht()
                }],
                "rotate-x": [{
                    "rotate-x": Ht()
                }],
                "rotate-y": [{
                    "rotate-y": Ht()
                }],
                "rotate-z": [{
                    "rotate-z": Ht()
                }],
                scale: [{
                    scale: pn()
                }],
                "scale-x": [{
                    "scale-x": pn()
                }],
                "scale-y": [{
                    "scale-y": pn()
                }],
                "scale-z": [{
                    "scale-z": pn()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: qt()
                }],
                "skew-x": [{
                    "skew-x": qt()
                }],
                "skew-y": [{
                    "skew-y": qt()
                }],
                transform: [{
                    transform: [be, pe, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: z()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Yn()
                }],
                "translate-x": [{
                    "translate-x": Yn()
                }],
                "translate-y": [{
                    "translate-y": Yn()
                }],
                "translate-z": [{
                    "translate-z": Yn()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: T()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: T()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, pe]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": F()
                }],
                "scroll-mx": [{
                    "scroll-mx": F()
                }],
                "scroll-my": [{
                    "scroll-my": F()
                }],
                "scroll-ms": [{
                    "scroll-ms": F()
                }],
                "scroll-me": [{
                    "scroll-me": F()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": F()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": F()
                }],
                "scroll-mt": [{
                    "scroll-mt": F()
                }],
                "scroll-mr": [{
                    "scroll-mr": F()
                }],
                "scroll-mb": [{
                    "scroll-mb": F()
                }],
                "scroll-ml": [{
                    "scroll-ml": F()
                }],
                "scroll-p": [{
                    "scroll-p": F()
                }],
                "scroll-px": [{
                    "scroll-px": F()
                }],
                "scroll-py": [{
                    "scroll-py": F()
                }],
                "scroll-ps": [{
                    "scroll-ps": F()
                }],
                "scroll-pe": [{
                    "scroll-pe": F()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": F()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": F()
                }],
                "scroll-pt": [{
                    "scroll-pt": F()
                }],
                "scroll-pr": [{
                    "scroll-pr": F()
                }],
                "scroll-pb": [{
                    "scroll-pb": F()
                }],
                "scroll-pl": [{
                    "scroll-pl": F()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", be, pe]
                }],
                fill: [{
                    fill: ["none", ...T()]
                }],
                "stroke-w": [{
                    stroke: [ke, no, zi, vx]
                }],
                stroke: [{
                    stroke: ["none", ...T()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    JC = jC(WC);

function mt(...e) {
    return JC(g1(e))
}
const eR = V_,
    V1 = A.forwardRef(({
        className: e,
        ...n
    }, i) => g.jsx(u1, {
        ref: i,
        className: mt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...n
    }));
V1.displayName = u1.displayName;
const tR = z_("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    z1 = A.forwardRef(({
        className: e,
        variant: n,
        ...i
    }, r) => g.jsx(f1, {
        ref: r,
        className: mt(tR({
            variant: n
        }), e),
        ...i
    }));
z1.displayName = f1.displayName;
const nR = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx(m1, {
    ref: i,
    className: mt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...n
}));
nR.displayName = m1.displayName;
const L1 = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx(p1, {
    ref: i,
    className: mt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...n,
    children: g.jsx(Qh, {
        className: "h-4 w-4"
    })
}));
L1.displayName = p1.displayName;
const B1 = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx(d1, {
    ref: i,
    className: mt("text-sm font-semibold", e),
    ...n
}));
B1.displayName = d1.displayName;
const P1 = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx(h1, {
    ref: i,
    className: mt("text-sm opacity-90", e),
    ...n
}));
P1.displayName = h1.displayName;

function sR() {
    const {
        toasts: e
    } = Yb();
    return g.jsxs(eR, {
        children: [e.map(function({
            id: n,
            title: i,
            description: r,
            action: l,
            ...c
        }) {
            return g.jsxs(z1, {
                ...c,
                children: [g.jsxs("div", {
                    className: "grid gap-1",
                    children: [i && g.jsx(B1, {
                        children: i
                    }), r && g.jsx(P1, {
                        children: r
                    })]
                }), l, g.jsx(L1, {})]
            }, n)
        }), g.jsx(V1, {})]
    })
}
const iR = ["top", "right", "bottom", "left"],
    ui = Math.min,
    un = Math.max,
    gc = Math.round,
    Wl = Math.floor,
    es = e => ({
        x: e,
        y: e
    }),
    aR = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function rh(e, n, i) {
    return un(e, ui(n, i))
}

function Ts(e, n) {
    return typeof e == "function" ? e(n) : e
}

function As(e) {
    return e.split("-")[0]
}

function Wa(e) {
    return e.split("-")[1]
}

function Wh(e) {
    return e === "x" ? "y" : "x"
}

function Jh(e) {
    return e === "y" ? "height" : "width"
}

function Jn(e) {
    const n = e[0];
    return n === "t" || n === "b" ? "y" : "x"
}

function em(e) {
    return Wh(Jn(e))
}

function rR(e, n, i) {
    i === void 0 && (i = !1);
    const r = Wa(e),
        l = em(e),
        c = Jh(l);
    let f = l === "x" ? r === (i ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return n.reference[c] > n.floating[c] && (f = vc(f)), [f, vc(f)]
}

function oR(e) {
    const n = vc(e);
    return [oh(e), n, oh(n)]
}

function oh(e) {
    return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
}
const wx = ["left", "right"],
    Sx = ["right", "left"],
    lR = ["top", "bottom"],
    cR = ["bottom", "top"];

function uR(e, n, i) {
    switch (e) {
        case "top":
        case "bottom":
            return i ? n ? Sx : wx : n ? wx : Sx;
        case "left":
        case "right":
            return n ? lR : cR;
        default:
            return []
    }
}

function fR(e, n, i, r) {
    const l = Wa(e);
    let c = uR(As(e), i === "start", r);
    return l && (c = c.map(f => f + "-" + l), n && (c = c.concat(c.map(oh)))), c
}

function vc(e) {
    const n = As(e);
    return aR[n] + e.slice(n.length)
}

function dR(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function U1(e) {
    return typeof e != "number" ? dR(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function xc(e) {
    const {
        x: n,
        y: i,
        width: r,
        height: l
    } = e;
    return {
        width: r,
        height: l,
        top: i,
        left: n,
        right: n + r,
        bottom: i + l,
        x: n,
        y: i
    }
}

function Tx(e, n, i) {
    let {
        reference: r,
        floating: l
    } = e;
    const c = Jn(n),
        f = em(n),
        d = Jh(f),
        m = As(n),
        p = c === "y",
        y = r.x + r.width / 2 - l.width / 2,
        x = r.y + r.height / 2 - l.height / 2,
        b = r[d] / 2 - l[d] / 2;
    let S;
    switch (m) {
        case "top":
            S = {
                x: y,
                y: r.y - l.height
            };
            break;
        case "bottom":
            S = {
                x: y,
                y: r.y + r.height
            };
            break;
        case "right":
            S = {
                x: r.x + r.width,
                y: x
            };
            break;
        case "left":
            S = {
                x: r.x - l.width,
                y: x
            };
            break;
        default:
            S = {
                x: r.x,
                y: r.y
            }
    }
    switch (Wa(n)) {
        case "start":
            S[f] -= b * (i && p ? -1 : 1);
            break;
        case "end":
            S[f] += b * (i && p ? -1 : 1);
            break
    }
    return S
}
async function hR(e, n) {
    var i;
    n === void 0 && (n = {});
    const {
        x: r,
        y: l,
        platform: c,
        rects: f,
        elements: d,
        strategy: m
    } = e, {
        boundary: p = "clippingAncestors",
        rootBoundary: y = "viewport",
        elementContext: x = "floating",
        altBoundary: b = !1,
        padding: S = 0
    } = Ts(n, e), E = U1(S), R = d[b ? x === "floating" ? "reference" : "floating" : x], D = xc(await c.getClippingRect({
        element: (i = await (c.isElement == null ? void 0 : c.isElement(R))) == null || i ? R : R.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(d.floating)),
        boundary: p,
        rootBoundary: y,
        strategy: m
    })), j = x === "floating" ? {
        x: r,
        y: l,
        width: f.floating.width,
        height: f.floating.height
    } : f.reference, M = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d.floating)), H = await (c.isElement == null ? void 0 : c.isElement(M)) ? await (c.getScale == null ? void 0 : c.getScale(M)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, z = xc(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: j,
        offsetParent: M,
        strategy: m
    }) : j);
    return {
        top: (D.top - z.top + E.top) / H.y,
        bottom: (z.bottom - D.bottom + E.bottom) / H.y,
        left: (D.left - z.left + E.left) / H.x,
        right: (z.right - D.right + E.right) / H.x
    }
}
const mR = 50,
    pR = async (e, n, i) => {
        const {
            placement: r = "bottom",
            strategy: l = "absolute",
            middleware: c = [],
            platform: f
        } = i, d = f.detectOverflow ? f : {
            ...f,
            detectOverflow: hR
        }, m = await (f.isRTL == null ? void 0 : f.isRTL(n));
        let p = await f.getElementRects({
                reference: e,
                floating: n,
                strategy: l
            }),
            {
                x: y,
                y: x
            } = Tx(p, r, m),
            b = r,
            S = 0;
        const E = {};
        for (let _ = 0; _ < c.length; _++) {
            const R = c[_];
            if (!R) continue;
            const {
                name: D,
                fn: j
            } = R, {
                x: M,
                y: H,
                data: z,
                reset: I
            } = await j({
                x: y,
                y: x,
                initialPlacement: r,
                placement: b,
                strategy: l,
                middlewareData: E,
                rects: p,
                platform: d,
                elements: {
                    reference: e,
                    floating: n
                }
            });
            y = M ?? y, x = H ?? x, E[D] = {
                ...E[D],
                ...z
            }, I && S < mR && (S++, typeof I == "object" && (I.placement && (b = I.placement), I.rects && (p = I.rects === !0 ? await f.getElementRects({
                reference: e,
                floating: n,
                strategy: l
            }) : I.rects), {
                x: y,
                y: x
            } = Tx(p, b, m)), _ = -1)
        }
        return {
            x: y,
            y: x,
            placement: b,
            strategy: l,
            middlewareData: E
        }
    }, yR = e => ({
        name: "arrow",
        options: e,
        async fn(n) {
            const {
                x: i,
                y: r,
                placement: l,
                rects: c,
                platform: f,
                elements: d,
                middlewareData: m
            } = n, {
                element: p,
                padding: y = 0
            } = Ts(e, n) || {};
            if (p == null) return {};
            const x = U1(y),
                b = {
                    x: i,
                    y: r
                },
                S = em(l),
                E = Jh(S),
                _ = await f.getDimensions(p),
                R = S === "y",
                D = R ? "top" : "left",
                j = R ? "bottom" : "right",
                M = R ? "clientHeight" : "clientWidth",
                H = c.reference[E] + c.reference[S] - b[S] - c.floating[E],
                z = b[S] - c.reference[S],
                I = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
            let W = I ? I[M] : 0;
            (!W || !await (f.isElement == null ? void 0 : f.isElement(I))) && (W = d.floating[M] || c.floating[E]);
            const F = H / 2 - z / 2,
                le = W / 2 - _[E] / 2 - 1,
                ve = ui(x[D], le),
                Re = ui(x[j], le),
                ne = ve,
                fe = W - _[E] - Re,
                ee = W / 2 - _[E] / 2 + F,
                de = rh(ne, ee, fe),
                V = !m.arrow && Wa(l) != null && ee !== de && c.reference[E] / 2 - (ee < ne ? ve : Re) - _[E] / 2 < 0,
                Z = V ? ee < ne ? ee - ne : ee - fe : 0;
            return {
                [S]: b[S] + Z,
                data: {
                    [S]: de,
                    centerOffset: ee - de - Z,
                    ...V && {
                        alignmentOffset: Z
                    }
                },
                reset: V
            }
        }
    }), gR = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(n) {
                var i, r;
                const {
                    placement: l,
                    middlewareData: c,
                    rects: f,
                    initialPlacement: d,
                    platform: m,
                    elements: p
                } = n, {
                    mainAxis: y = !0,
                    crossAxis: x = !0,
                    fallbackPlacements: b,
                    fallbackStrategy: S = "bestFit",
                    fallbackAxisSideDirection: E = "none",
                    flipAlignment: _ = !0,
                    ...R
                } = Ts(e, n);
                if ((i = c.arrow) != null && i.alignmentOffset) return {};
                const D = As(l),
                    j = Jn(d),
                    M = As(d) === d,
                    H = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)),
                    z = b || (M || !_ ? [vc(d)] : oR(d)),
                    I = E !== "none";
                !b && I && z.push(...fR(d, _, E, H));
                const W = [d, ...z],
                    F = await m.detectOverflow(n, R),
                    le = [];
                let ve = ((r = c.flip) == null ? void 0 : r.overflows) || [];
                if (y && le.push(F[D]), x) {
                    const ee = rR(l, f, H);
                    le.push(F[ee[0]], F[ee[1]])
                }
                if (ve = [...ve, {
                        placement: l,
                        overflows: le
                    }], !le.every(ee => ee <= 0)) {
                    var Re, ne;
                    const ee = (((Re = c.flip) == null ? void 0 : Re.index) || 0) + 1,
                        de = W[ee];
                    if (de && (!(x === "alignment" ? j !== Jn(de) : !1) || ve.every(K => Jn(K.placement) === j ? K.overflows[0] > 0 : !0))) return {
                        data: {
                            index: ee,
                            overflows: ve
                        },
                        reset: {
                            placement: de
                        }
                    };
                    let V = (ne = ve.filter(Z => Z.overflows[0] <= 0).sort((Z, K) => Z.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ne.placement;
                    if (!V) switch (S) {
                        case "bestFit": {
                            var fe;
                            const Z = (fe = ve.filter(K => {
                                if (I) {
                                    const re = Jn(K.placement);
                                    return re === j || re === "y"
                                }
                                return !0
                            }).map(K => [K.placement, K.overflows.filter(re => re > 0).reduce((re, T) => re + T, 0)]).sort((K, re) => K[1] - re[1])[0]) == null ? void 0 : fe[0];
                            Z && (V = Z);
                            break
                        }
                        case "initialPlacement":
                            V = d;
                            break
                    }
                    if (l !== V) return {
                        reset: {
                            placement: V
                        }
                    }
                }
                return {}
            }
        }
    };

function Ax(e, n) {
    return {
        top: e.top - n.height,
        right: e.right - n.width,
        bottom: e.bottom - n.height,
        left: e.left - n.width
    }
}

function Ex(e) {
    return iR.some(n => e[n] >= 0)
}
const vR = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(n) {
                const {
                    rects: i,
                    platform: r
                } = n, {
                    strategy: l = "referenceHidden",
                    ...c
                } = Ts(e, n);
                switch (l) {
                    case "referenceHidden": {
                        const f = await r.detectOverflow(n, {
                                ...c,
                                elementContext: "reference"
                            }),
                            d = Ax(f, i.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: d,
                                referenceHidden: Ex(d)
                            }
                        }
                    }
                    case "escaped": {
                        const f = await r.detectOverflow(n, {
                                ...c,
                                altBoundary: !0
                            }),
                            d = Ax(f, i.floating);
                        return {
                            data: {
                                escapedOffsets: d,
                                escaped: Ex(d)
                            }
                        }
                    }
                    default:
                        return {}
                }
            }
        }
    },
    H1 = new Set(["left", "top"]);
async function xR(e, n) {
    const {
        placement: i,
        platform: r,
        elements: l
    } = e, c = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), f = As(i), d = Wa(i), m = Jn(i) === "y", p = H1.has(f) ? -1 : 1, y = c && m ? -1 : 1, x = Ts(n, e);
    let {
        mainAxis: b,
        crossAxis: S,
        alignmentAxis: E
    } = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis
    };
    return d && typeof E == "number" && (S = d === "end" ? E * -1 : E), m ? {
        x: S * y,
        y: b * p
    } : {
        x: b * p,
        y: S * y
    }
}
const bR = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(n) {
                var i, r;
                const {
                    x: l,
                    y: c,
                    placement: f,
                    middlewareData: d
                } = n, m = await xR(n, e);
                return f === ((i = d.offset) == null ? void 0 : i.placement) && (r = d.arrow) != null && r.alignmentOffset ? {} : {
                    x: l + m.x,
                    y: c + m.y,
                    data: {
                        ...m,
                        placement: f
                    }
                }
            }
        }
    },
    wR = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(n) {
                const {
                    x: i,
                    y: r,
                    placement: l,
                    platform: c
                } = n, {
                    mainAxis: f = !0,
                    crossAxis: d = !1,
                    limiter: m = {
                        fn: D => {
                            let {
                                x: j,
                                y: M
                            } = D;
                            return {
                                x: j,
                                y: M
                            }
                        }
                    },
                    ...p
                } = Ts(e, n), y = {
                    x: i,
                    y: r
                }, x = await c.detectOverflow(n, p), b = Jn(As(l)), S = Wh(b);
                let E = y[S],
                    _ = y[b];
                if (f) {
                    const D = S === "y" ? "top" : "left",
                        j = S === "y" ? "bottom" : "right",
                        M = E + x[D],
                        H = E - x[j];
                    E = rh(M, E, H)
                }
                if (d) {
                    const D = b === "y" ? "top" : "left",
                        j = b === "y" ? "bottom" : "right",
                        M = _ + x[D],
                        H = _ - x[j];
                    _ = rh(M, _, H)
                }
                const R = m.fn({
                    ...n,
                    [S]: E,
                    [b]: _
                });
                return {
                    ...R,
                    data: {
                        x: R.x - i,
                        y: R.y - r,
                        enabled: {
                            [S]: f,
                            [b]: d
                        }
                    }
                }
            }
        }
    },
    SR = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(n) {
                const {
                    x: i,
                    y: r,
                    placement: l,
                    rects: c,
                    middlewareData: f
                } = n, {
                    offset: d = 0,
                    mainAxis: m = !0,
                    crossAxis: p = !0
                } = Ts(e, n), y = {
                    x: i,
                    y: r
                }, x = Jn(l), b = Wh(x);
                let S = y[b],
                    E = y[x];
                const _ = Ts(d, n),
                    R = typeof _ == "number" ? {
                        mainAxis: _,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ..._
                    };
                if (m) {
                    const M = b === "y" ? "height" : "width",
                        H = c.reference[b] - c.floating[M] + R.mainAxis,
                        z = c.reference[b] + c.reference[M] - R.mainAxis;
                    S < H ? S = H : S > z && (S = z)
                }
                if (p) {
                    var D, j;
                    const M = b === "y" ? "width" : "height",
                        H = H1.has(As(l)),
                        z = c.reference[x] - c.floating[M] + (H && ((D = f.offset) == null ? void 0 : D[x]) || 0) + (H ? 0 : R.crossAxis),
                        I = c.reference[x] + c.reference[M] + (H ? 0 : ((j = f.offset) == null ? void 0 : j[x]) || 0) - (H ? R.crossAxis : 0);
                    E < z ? E = z : E > I && (E = I)
                }
                return {
                    [b]: S,
                    [x]: E
                }
            }
        }
    },
    TR = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(n) {
                var i, r;
                const {
                    placement: l,
                    rects: c,
                    platform: f,
                    elements: d
                } = n, {
                    apply: m = () => {},
                    ...p
                } = Ts(e, n), y = await f.detectOverflow(n, p), x = As(l), b = Wa(l), S = Jn(l) === "y", {
                    width: E,
                    height: _
                } = c.floating;
                let R, D;
                x === "top" || x === "bottom" ? (R = x, D = b === (await (f.isRTL == null ? void 0 : f.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (D = x, R = b === "end" ? "top" : "bottom");
                const j = _ - y.top - y.bottom,
                    M = E - y.left - y.right,
                    H = ui(_ - y[R], j),
                    z = ui(E - y[D], M),
                    I = !n.middlewareData.shift;
                let W = H,
                    F = z;
                if ((i = n.middlewareData.shift) != null && i.enabled.x && (F = M), (r = n.middlewareData.shift) != null && r.enabled.y && (W = j), I && !b) {
                    const ve = un(y.left, 0),
                        Re = un(y.right, 0),
                        ne = un(y.top, 0),
                        fe = un(y.bottom, 0);
                    S ? F = E - 2 * (ve !== 0 || Re !== 0 ? ve + Re : un(y.left, y.right)) : W = _ - 2 * (ne !== 0 || fe !== 0 ? ne + fe : un(y.top, y.bottom))
                }
                await m({
                    ...n,
                    availableWidth: F,
                    availableHeight: W
                });
                const le = await f.getDimensions(d.floating);
                return E !== le.width || _ !== le.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Gc() {
    return typeof window < "u"
}

function Ja(e) {
    return q1(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function dn(e) {
    var n;
    return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window
}

function is(e) {
    var n;
    return (n = (q1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement
}

function q1(e) {
    return Gc() ? e instanceof Node || e instanceof dn(e).Node : !1
}

function qn(e) {
    return Gc() ? e instanceof Element || e instanceof dn(e).Element : !1
}

function Cs(e) {
    return Gc() ? e instanceof HTMLElement || e instanceof dn(e).HTMLElement : !1
}

function _x(e) {
    return !Gc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dn(e).ShadowRoot
}

function Ro(e) {
    const {
        overflow: n,
        overflowX: i,
        overflowY: r,
        display: l
    } = Fn(e);
    return /auto|scroll|overlay|hidden|clip/.test(n + r + i) && l !== "inline" && l !== "contents"
}

function AR(e) {
    return /^(table|td|th)$/.test(Ja(e))
}

function Zc(e) {
    try {
        if (e.matches(":popover-open")) return !0
    } catch {}
    try {
        return e.matches(":modal")
    } catch {
        return !1
    }
}
const ER = /transform|translate|scale|rotate|perspective|filter/,
    _R = /paint|layout|strict|content/,
    Li = e => !!e && e !== "none";
let Cd;

function tm(e) {
    const n = qn(e) ? Fn(e) : e;
    return Li(n.transform) || Li(n.translate) || Li(n.scale) || Li(n.rotate) || Li(n.perspective) || !nm() && (Li(n.backdropFilter) || Li(n.filter)) || ER.test(n.willChange || "") || _R.test(n.contain || "")
}

function CR(e) {
    let n = fi(e);
    for (; Cs(n) && !Ga(n);) {
        if (tm(n)) return n;
        if (Zc(n)) return null;
        n = fi(n)
    }
    return null
}

function nm() {
    return Cd == null && (Cd = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Cd
}

function Ga(e) {
    return /^(html|body|#document)$/.test(Ja(e))
}

function Fn(e) {
    return dn(e).getComputedStyle(e)
}

function Xc(e) {
    return qn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function fi(e) {
    if (Ja(e) === "html") return e;
    const n = e.assignedSlot || e.parentNode || _x(e) && e.host || is(e);
    return _x(n) ? n.host : n
}

function F1(e) {
    const n = fi(e);
    return Ga(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Cs(n) && Ro(n) ? n : F1(n)
}

function go(e, n, i) {
    var r;
    n === void 0 && (n = []), i === void 0 && (i = !0);
    const l = F1(e),
        c = l === ((r = e.ownerDocument) == null ? void 0 : r.body),
        f = dn(l);
    if (c) {
        const d = lh(f);
        return n.concat(f, f.visualViewport || [], Ro(l) ? l : [], d && i ? go(d) : [])
    } else return n.concat(l, go(l, [], i))
}

function lh(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Y1(e) {
    const n = Fn(e);
    let i = parseFloat(n.width) || 0,
        r = parseFloat(n.height) || 0;
    const l = Cs(e),
        c = l ? e.offsetWidth : i,
        f = l ? e.offsetHeight : r,
        d = gc(i) !== c || gc(r) !== f;
    return d && (i = c, r = f), {
        width: i,
        height: r,
        $: d
    }
}

function sm(e) {
    return qn(e) ? e : e.contextElement
}

function Fa(e) {
    const n = sm(e);
    if (!Cs(n)) return es(1);
    const i = n.getBoundingClientRect(),
        {
            width: r,
            height: l,
            $: c
        } = Y1(n);
    let f = (c ? gc(i.width) : i.width) / r,
        d = (c ? gc(i.height) : i.height) / l;
    return (!f || !Number.isFinite(f)) && (f = 1), (!d || !Number.isFinite(d)) && (d = 1), {
        x: f,
        y: d
    }
}
const RR = es(0);

function G1(e) {
    const n = dn(e);
    return !nm() || !n.visualViewport ? RR : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}

function NR(e, n, i) {
    return n === void 0 && (n = !1), !i || n && i !== dn(e) ? !1 : n
}

function Yi(e, n, i, r) {
    n === void 0 && (n = !1), i === void 0 && (i = !1);
    const l = e.getBoundingClientRect(),
        c = sm(e);
    let f = es(1);
    n && (r ? qn(r) && (f = Fa(r)) : f = Fa(e));
    const d = NR(c, i, r) ? G1(c) : es(0);
    let m = (l.left + d.x) / f.x,
        p = (l.top + d.y) / f.y,
        y = l.width / f.x,
        x = l.height / f.y;
    if (c) {
        const b = dn(c),
            S = r && qn(r) ? dn(r) : r;
        let E = b,
            _ = lh(E);
        for (; _ && r && S !== E;) {
            const R = Fa(_),
                D = _.getBoundingClientRect(),
                j = Fn(_),
                M = D.left + (_.clientLeft + parseFloat(j.paddingLeft)) * R.x,
                H = D.top + (_.clientTop + parseFloat(j.paddingTop)) * R.y;
            m *= R.x, p *= R.y, y *= R.x, x *= R.y, m += M, p += H, E = dn(_), _ = lh(E)
        }
    }
    return xc({
        width: y,
        height: x,
        x: m,
        y: p
    })
}

function Kc(e, n) {
    const i = Xc(e).scrollLeft;
    return n ? n.left + i : Yi(is(e)).left + i
}

function Z1(e, n) {
    const i = e.getBoundingClientRect(),
        r = i.left + n.scrollLeft - Kc(e, i),
        l = i.top + n.scrollTop;
    return {
        x: r,
        y: l
    }
}

function OR(e) {
    let {
        elements: n,
        rect: i,
        offsetParent: r,
        strategy: l
    } = e;
    const c = l === "fixed",
        f = is(r),
        d = n ? Zc(n.floating) : !1;
    if (r === f || d && c) return i;
    let m = {
            scrollLeft: 0,
            scrollTop: 0
        },
        p = es(1);
    const y = es(0),
        x = Cs(r);
    if ((x || !x && !c) && ((Ja(r) !== "body" || Ro(f)) && (m = Xc(r)), x)) {
        const S = Yi(r);
        p = Fa(r), y.x = S.x + r.clientLeft, y.y = S.y + r.clientTop
    }
    const b = f && !x && !c ? Z1(f, m) : es(0);
    return {
        width: i.width * p.x,
        height: i.height * p.y,
        x: i.x * p.x - m.scrollLeft * p.x + y.x + b.x,
        y: i.y * p.y - m.scrollTop * p.y + y.y + b.y
    }
}

function jR(e) {
    return Array.from(e.getClientRects())
}

function DR(e) {
    const n = is(e),
        i = Xc(e),
        r = e.ownerDocument.body,
        l = un(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth),
        c = un(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
    let f = -i.scrollLeft + Kc(e);
    const d = -i.scrollTop;
    return Fn(r).direction === "rtl" && (f += un(n.clientWidth, r.clientWidth) - l), {
        width: l,
        height: c,
        x: f,
        y: d
    }
}
const Cx = 25;

function MR(e, n) {
    const i = dn(e),
        r = is(e),
        l = i.visualViewport;
    let c = r.clientWidth,
        f = r.clientHeight,
        d = 0,
        m = 0;
    if (l) {
        c = l.width, f = l.height;
        const y = nm();
        (!y || y && n === "fixed") && (d = l.offsetLeft, m = l.offsetTop)
    }
    const p = Kc(r);
    if (p <= 0) {
        const y = r.ownerDocument,
            x = y.body,
            b = getComputedStyle(x),
            S = y.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0,
            E = Math.abs(r.clientWidth - x.clientWidth - S);
        E <= Cx && (c -= E)
    } else p <= Cx && (c += p);
    return {
        width: c,
        height: f,
        x: d,
        y: m
    }
}

function kR(e, n) {
    const i = Yi(e, !0, n === "fixed"),
        r = i.top + e.clientTop,
        l = i.left + e.clientLeft,
        c = Cs(e) ? Fa(e) : es(1),
        f = e.clientWidth * c.x,
        d = e.clientHeight * c.y,
        m = l * c.x,
        p = r * c.y;
    return {
        width: f,
        height: d,
        x: m,
        y: p
    }
}

function Rx(e, n, i) {
    let r;
    if (n === "viewport") r = MR(e, i);
    else if (n === "document") r = DR(is(e));
    else if (qn(n)) r = kR(n, i);
    else {
        const l = G1(e);
        r = {
            x: n.x - l.x,
            y: n.y - l.y,
            width: n.width,
            height: n.height
        }
    }
    return xc(r)
}

function X1(e, n) {
    const i = fi(e);
    return i === n || !qn(i) || Ga(i) ? !1 : Fn(i).position === "fixed" || X1(i, n)
}

function VR(e, n) {
    const i = n.get(e);
    if (i) return i;
    let r = go(e, [], !1).filter(d => qn(d) && Ja(d) !== "body"),
        l = null;
    const c = Fn(e).position === "fixed";
    let f = c ? fi(e) : e;
    for (; qn(f) && !Ga(f);) {
        const d = Fn(f),
            m = tm(f);
        !m && d.position === "fixed" && (l = null), (c ? !m && !l : !m && d.position === "static" && !!l && (l.position === "absolute" || l.position === "fixed") || Ro(f) && !m && X1(e, f)) ? r = r.filter(y => y !== f) : l = d, f = fi(f)
    }
    return n.set(e, r), r
}

function zR(e) {
    let {
        element: n,
        boundary: i,
        rootBoundary: r,
        strategy: l
    } = e;
    const f = [...i === "clippingAncestors" ? Zc(n) ? [] : VR(n, this._c) : [].concat(i), r],
        d = Rx(n, f[0], l);
    let m = d.top,
        p = d.right,
        y = d.bottom,
        x = d.left;
    for (let b = 1; b < f.length; b++) {
        const S = Rx(n, f[b], l);
        m = un(S.top, m), p = ui(S.right, p), y = ui(S.bottom, y), x = un(S.left, x)
    }
    return {
        width: p - x,
        height: y - m,
        x,
        y: m
    }
}

function LR(e) {
    const {
        width: n,
        height: i
    } = Y1(e);
    return {
        width: n,
        height: i
    }
}

function BR(e, n, i) {
    const r = Cs(n),
        l = is(n),
        c = i === "fixed",
        f = Yi(e, !0, c, n);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const m = es(0);

    function p() {
        m.x = Kc(l)
    }
    if (r || !r && !c)
        if ((Ja(n) !== "body" || Ro(l)) && (d = Xc(n)), r) {
            const S = Yi(n, !0, c, n);
            m.x = S.x + n.clientLeft, m.y = S.y + n.clientTop
        } else l && p();
    c && !r && l && p();
    const y = l && !r && !c ? Z1(l, d) : es(0),
        x = f.left + d.scrollLeft - m.x - y.x,
        b = f.top + d.scrollTop - m.y - y.y;
    return {
        x,
        y: b,
        width: f.width,
        height: f.height
    }
}

function Rd(e) {
    return Fn(e).position === "static"
}

function Nx(e, n) {
    if (!Cs(e) || Fn(e).position === "fixed") return null;
    if (n) return n(e);
    let i = e.offsetParent;
    return is(e) === i && (i = i.ownerDocument.body), i
}

function K1(e, n) {
    const i = dn(e);
    if (Zc(e)) return i;
    if (!Cs(e)) {
        let l = fi(e);
        for (; l && !Ga(l);) {
            if (qn(l) && !Rd(l)) return l;
            l = fi(l)
        }
        return i
    }
    let r = Nx(e, n);
    for (; r && AR(r) && Rd(r);) r = Nx(r, n);
    return r && Ga(r) && Rd(r) && !tm(r) ? i : r || CR(e) || i
}
const PR = async function(e) {
    const n = this.getOffsetParent || K1,
        i = this.getDimensions,
        r = await i(e.floating);
    return {
        reference: BR(e.reference, await n(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function UR(e) {
    return Fn(e).direction === "rtl"
}
const HR = {
    convertOffsetParentRelativeRectToViewportRelativeRect: OR,
    getDocumentElement: is,
    getClippingRect: zR,
    getOffsetParent: K1,
    getElementRects: PR,
    getClientRects: jR,
    getDimensions: LR,
    getScale: Fa,
    isElement: qn,
    isRTL: UR
};

function Q1(e, n) {
    return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
}

function qR(e, n) {
    let i = null,
        r;
    const l = is(e);

    function c() {
        var d;
        clearTimeout(r), (d = i) == null || d.disconnect(), i = null
    }

    function f(d, m) {
        d === void 0 && (d = !1), m === void 0 && (m = 1), c();
        const p = e.getBoundingClientRect(),
            {
                left: y,
                top: x,
                width: b,
                height: S
            } = p;
        if (d || n(), !b || !S) return;
        const E = Wl(x),
            _ = Wl(l.clientWidth - (y + b)),
            R = Wl(l.clientHeight - (x + S)),
            D = Wl(y),
            M = {
                rootMargin: -E + "px " + -_ + "px " + -R + "px " + -D + "px",
                threshold: un(0, ui(1, m)) || 1
            };
        let H = !0;

        function z(I) {
            const W = I[0].intersectionRatio;
            if (W !== m) {
                if (!H) return f();
                W ? f(!1, W) : r = setTimeout(() => {
                    f(!1, 1e-7)
                }, 1e3)
            }
            W === 1 && !Q1(p, e.getBoundingClientRect()) && f(), H = !1
        }
        try {
            i = new IntersectionObserver(z, {
                ...M,
                root: l.ownerDocument
            })
        } catch {
            i = new IntersectionObserver(z, M)
        }
        i.observe(e)
    }
    return f(!0), c
}

function FR(e, n, i, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: l = !0,
        ancestorResize: c = !0,
        elementResize: f = typeof ResizeObserver == "function",
        layoutShift: d = typeof IntersectionObserver == "function",
        animationFrame: m = !1
    } = r, p = sm(e), y = l || c ? [...p ? go(p) : [], ...n ? go(n) : []] : [];
    y.forEach(D => {
        l && D.addEventListener("scroll", i, {
            passive: !0
        }), c && D.addEventListener("resize", i)
    });
    const x = p && d ? qR(p, i) : null;
    let b = -1,
        S = null;
    f && (S = new ResizeObserver(D => {
        let [j] = D;
        j && j.target === p && S && n && (S.unobserve(n), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
            var M;
            (M = S) == null || M.observe(n)
        })), i()
    }), p && !m && S.observe(p), n && S.observe(n));
    let E, _ = m ? Yi(e) : null;
    m && R();

    function R() {
        const D = Yi(e);
        _ && !Q1(_, D) && i(), _ = D, E = requestAnimationFrame(R)
    }
    return i(), () => {
        var D;
        y.forEach(j => {
            l && j.removeEventListener("scroll", i), c && j.removeEventListener("resize", i)
        }), x?.(), (D = S) == null || D.disconnect(), S = null, m && cancelAnimationFrame(E)
    }
}
const YR = bR,
    GR = wR,
    ZR = gR,
    XR = TR,
    KR = vR,
    Ox = yR,
    QR = SR,
    IR = (e, n, i) => {
        const r = new Map,
            l = {
                platform: HR,
                ...i
            },
            c = {
                ...l.platform,
                _c: r
            };
        return pR(e, n, {
            ...l,
            platform: c
        })
    };
var $R = typeof document < "u",
    WR = function() {},
    rc = $R ? A.useLayoutEffect : WR;

function bc(e, n) {
    if (e === n) return !0;
    if (typeof e != typeof n) return !1;
    if (typeof e == "function" && e.toString() === n.toString()) return !0;
    let i, r, l;
    if (e && n && typeof e == "object") {
        if (Array.isArray(e)) {
            if (i = e.length, i !== n.length) return !1;
            for (r = i; r-- !== 0;)
                if (!bc(e[r], n[r])) return !1;
            return !0
        }
        if (l = Object.keys(e), i = l.length, i !== Object.keys(n).length) return !1;
        for (r = i; r-- !== 0;)
            if (!{}.hasOwnProperty.call(n, l[r])) return !1;
        for (r = i; r-- !== 0;) {
            const c = l[r];
            if (!(c === "_owner" && e.$$typeof) && !bc(e[c], n[c])) return !1
        }
        return !0
    }
    return e !== e && n !== n
}

function I1(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function jx(e, n) {
    const i = I1(e);
    return Math.round(n * i) / i
}

function Nd(e) {
    const n = A.useRef(e);
    return rc(() => {
        n.current = e
    }), n
}

function JR(e) {
    e === void 0 && (e = {});
    const {
        placement: n = "bottom",
        strategy: i = "absolute",
        middleware: r = [],
        platform: l,
        elements: {
            reference: c,
            floating: f
        } = {},
        transform: d = !0,
        whileElementsMounted: m,
        open: p
    } = e, [y, x] = A.useState({
        x: 0,
        y: 0,
        strategy: i,
        placement: n,
        middlewareData: {},
        isPositioned: !1
    }), [b, S] = A.useState(r);
    bc(b, r) || S(r);
    const [E, _] = A.useState(null), [R, D] = A.useState(null), j = A.useCallback(K => {
        K !== I.current && (I.current = K, _(K))
    }, []), M = A.useCallback(K => {
        K !== W.current && (W.current = K, D(K))
    }, []), H = c || E, z = f || R, I = A.useRef(null), W = A.useRef(null), F = A.useRef(y), le = m != null, ve = Nd(m), Re = Nd(l), ne = Nd(p), fe = A.useCallback(() => {
        if (!I.current || !W.current) return;
        const K = {
            placement: n,
            strategy: i,
            middleware: b
        };
        Re.current && (K.platform = Re.current), IR(I.current, W.current, K).then(re => {
            const T = {
                ...re,
                isPositioned: ne.current !== !1
            };
            ee.current && !bc(F.current, T) && (F.current = T, Uc.flushSync(() => {
                x(T)
            }))
        })
    }, [b, n, i, Re, ne]);
    rc(() => {
        p === !1 && F.current.isPositioned && (F.current.isPositioned = !1, x(K => ({
            ...K,
            isPositioned: !1
        })))
    }, [p]);
    const ee = A.useRef(!1);
    rc(() => (ee.current = !0, () => {
        ee.current = !1
    }), []), rc(() => {
        if (H && (I.current = H), z && (W.current = z), H && z) {
            if (ve.current) return ve.current(H, z, fe);
            fe()
        }
    }, [H, z, fe, ve, le]);
    const de = A.useMemo(() => ({
            reference: I,
            floating: W,
            setReference: j,
            setFloating: M
        }), [j, M]),
        V = A.useMemo(() => ({
            reference: H,
            floating: z
        }), [H, z]),
        Z = A.useMemo(() => {
            const K = {
                position: i,
                left: 0,
                top: 0
            };
            if (!V.floating) return K;
            const re = jx(V.floating, y.x),
                T = jx(V.floating, y.y);
            return d ? {
                ...K,
                transform: "translate(" + re + "px, " + T + "px)",
                ...I1(V.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: i,
                left: re,
                top: T
            }
        }, [i, d, V.floating, y.x, y.y]);
    return A.useMemo(() => ({
        ...y,
        update: fe,
        refs: de,
        elements: V,
        floatingStyles: Z
    }), [y, fe, de, V, Z])
}
const eN = e => {
        function n(i) {
            return {}.hasOwnProperty.call(i, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(i) {
                const {
                    element: r,
                    padding: l
                } = typeof e == "function" ? e(i) : e;
                return r && n(r) ? r.current != null ? Ox({
                    element: r.current,
                    padding: l
                }).fn(i) : {} : r ? Ox({
                    element: r,
                    padding: l
                }).fn(i) : {}
            }
        }
    },
    tN = (e, n) => {
        const i = YR(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    },
    nN = (e, n) => {
        const i = GR(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    },
    sN = (e, n) => ({
        fn: QR(e).fn,
        options: [e, n]
    }),
    iN = (e, n) => {
        const i = ZR(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    },
    aN = (e, n) => {
        const i = XR(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    },
    rN = (e, n) => {
        const i = KR(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    },
    oN = (e, n) => {
        const i = eN(e);
        return {
            name: i.name,
            fn: i.fn,
            options: [e, n]
        }
    };
var lN = "Arrow",
    $1 = A.forwardRef((e, n) => {
        const {
            children: i,
            width: r = 10,
            height: l = 5,
            ...c
        } = e;
        return g.jsx(tn.svg, {
            ...c,
            ref: n,
            width: r,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? i : g.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
$1.displayName = lN;
var cN = $1;

function uN(e) {
    const [n, i] = A.useState(void 0);
    return ci(() => {
        if (e) {
            i({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(l => {
                if (!Array.isArray(l) || !l.length) return;
                const c = l[0];
                let f, d;
                if ("borderBoxSize" in c) {
                    const m = c.borderBoxSize,
                        p = Array.isArray(m) ? m[0] : m;
                    f = p.inlineSize, d = p.blockSize
                } else f = e.offsetWidth, d = e.offsetHeight;
                i({
                    width: f,
                    height: d
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else i(void 0)
    }, [e]), n
}
var W1 = "Popper",
    [J1, ew] = Hc(W1),
    [m3, tw] = J1(W1),
    nw = "PopperAnchor",
    sw = A.forwardRef((e, n) => {
        const {
            __scopePopper: i,
            virtualRef: r,
            ...l
        } = e, c = tw(nw, i), f = A.useRef(null), d = Hn(n, f), m = A.useRef(null);
        return A.useEffect(() => {
            const p = m.current;
            m.current = r?.current || f.current, p !== m.current && c.onAnchorChange(m.current)
        }), r ? null : g.jsx(tn.div, {
            ...l,
            ref: d
        })
    });
sw.displayName = nw;
var im = "PopperContent",
    [fN, dN] = J1(im),
    iw = A.forwardRef((e, n) => {
        const {
            __scopePopper: i,
            side: r = "bottom",
            sideOffset: l = 0,
            align: c = "center",
            alignOffset: f = 0,
            arrowPadding: d = 0,
            avoidCollisions: m = !0,
            collisionBoundary: p = [],
            collisionPadding: y = 0,
            sticky: x = "partial",
            hideWhenDetached: b = !1,
            updatePositionStrategy: S = "optimized",
            onPlaced: E,
            ..._
        } = e, R = tw(im, i), [D, j] = A.useState(null), M = Hn(n, tt => j(tt)), [H, z] = A.useState(null), I = uN(H), W = I?.width ?? 0, F = I?.height ?? 0, le = r + (c !== "center" ? "-" + c : ""), ve = typeof y == "number" ? y : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...y
        }, Re = Array.isArray(p) ? p : [p], ne = Re.length > 0, fe = {
            padding: ve,
            boundary: Re.filter(mN),
            altBoundary: ne
        }, {
            refs: ee,
            floatingStyles: de,
            placement: V,
            isPositioned: Z,
            middlewareData: K
        } = JR({
            strategy: "fixed",
            placement: le,
            whileElementsMounted: (...tt) => FR(...tt, {
                animationFrame: S === "always"
            }),
            elements: {
                reference: R.anchor
            },
            middleware: [tN({
                mainAxis: l + F,
                alignmentAxis: f
            }), m && nN({
                mainAxis: !0,
                crossAxis: !1,
                limiter: x === "partial" ? sN() : void 0,
                ...fe
            }), m && iN({
                ...fe
            }), aN({
                ...fe,
                apply: ({
                    elements: tt,
                    rects: He,
                    availableWidth: Ye,
                    availableHeight: mn
                }) => {
                    const {
                        width: Ht,
                        height: pn
                    } = He.reference, qt = tt.floating.style;
                    qt.setProperty("--radix-popper-available-width", `${Ye}px`), qt.setProperty("--radix-popper-available-height", `${mn}px`), qt.setProperty("--radix-popper-anchor-width", `${Ht}px`), qt.setProperty("--radix-popper-anchor-height", `${pn}px`)
                }
            }), H && oN({
                element: H,
                padding: d
            }), pN({
                arrowWidth: W,
                arrowHeight: F
            }), b && rN({
                strategy: "referenceHidden",
                ...fe
            })]
        }), [re, T] = ow(V), X = li(E);
        ci(() => {
            Z && X?.()
        }, [Z, X]);
        const ae = K.arrow?.x,
            se = K.arrow?.y,
            xe = K.arrow?.centerOffset !== 0,
            [Ae, he] = A.useState();
        return ci(() => {
            D && he(window.getComputedStyle(D).zIndex)
        }, [D]), g.jsx("div", {
            ref: ee.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...de,
                transform: Z ? de.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Ae,
                "--radix-popper-transform-origin": [K.transformOrigin?.x, K.transformOrigin?.y].join(" "),
                ...K.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: g.jsx(fN, {
                scope: i,
                placedSide: re,
                onArrowChange: z,
                arrowX: ae,
                arrowY: se,
                shouldHideArrow: xe,
                children: g.jsx(tn.div, {
                    "data-side": re,
                    "data-align": T,
                    ..._,
                    ref: M,
                    style: {
                        ..._.style,
                        animation: Z ? void 0 : "none"
                    }
                })
            })
        })
    });
iw.displayName = im;
var aw = "PopperArrow",
    hN = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    rw = A.forwardRef(function(n, i) {
        const {
            __scopePopper: r,
            ...l
        } = n, c = dN(aw, r), f = hN[c.placedSide];
        return g.jsx("span", {
            ref: c.onArrowChange,
            style: {
                position: "absolute",
                left: c.arrowX,
                top: c.arrowY,
                [f]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [c.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [c.placedSide],
                visibility: c.shouldHideArrow ? "hidden" : void 0
            },
            children: g.jsx(cN, {
                ...l,
                ref: i,
                style: {
                    ...l.style,
                    display: "block"
                }
            })
        })
    });
rw.displayName = aw;

function mN(e) {
    return e !== null
}
var pN = e => ({
    name: "transformOrigin",
    options: e,
    fn(n) {
        const {
            placement: i,
            rects: r,
            middlewareData: l
        } = n, f = l.arrow?.centerOffset !== 0, d = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [p, y] = ow(i), x = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [y], b = (l.arrow?.x ?? 0) + d / 2, S = (l.arrow?.y ?? 0) + m / 2;
        let E = "",
            _ = "";
        return p === "bottom" ? (E = f ? x : `${b}px`, _ = `${-m}px`) : p === "top" ? (E = f ? x : `${b}px`, _ = `${r.floating.height + m}px`) : p === "right" ? (E = `${-m}px`, _ = f ? x : `${S}px`) : p === "left" && (E = `${r.floating.width + m}px`, _ = f ? x : `${S}px`), {
            data: {
                x: E,
                y: _
            }
        }
    }
});

function ow(e) {
    const [n, i = "center"] = e.split("-");
    return [n, i]
}
var yN = sw,
    gN = iw,
    vN = rw,
    [Qc] = Hc("Tooltip", [ew]),
    am = ew(),
    lw = "TooltipProvider",
    xN = 700,
    Dx = "tooltip.open",
    [bN, cw] = Qc(lw),
    uw = e => {
        const {
            __scopeTooltip: n,
            delayDuration: i = xN,
            skipDelayDuration: r = 300,
            disableHoverableContent: l = !1,
            children: c
        } = e, f = A.useRef(!0), d = A.useRef(!1), m = A.useRef(0);
        return A.useEffect(() => {
            const p = m.current;
            return () => window.clearTimeout(p)
        }, []), g.jsx(bN, {
            scope: n,
            isOpenDelayedRef: f,
            delayDuration: i,
            onOpen: A.useCallback(() => {
                window.clearTimeout(m.current), f.current = !1
            }, []),
            onClose: A.useCallback(() => {
                window.clearTimeout(m.current), m.current = window.setTimeout(() => f.current = !0, r)
            }, [r]),
            isPointerInTransitRef: d,
            onPointerInTransitChange: A.useCallback(p => {
                d.current = p
            }, []),
            disableHoverableContent: l,
            children: c
        })
    };
uw.displayName = lw;
var fw = "Tooltip",
    [p3, No] = Qc(fw),
    ch = "TooltipTrigger",
    wN = A.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            ...r
        } = e, l = No(ch, i), c = cw(ch, i), f = am(i), d = A.useRef(null), m = Hn(n, d, l.onTriggerChange), p = A.useRef(!1), y = A.useRef(!1), x = A.useCallback(() => p.current = !1, []);
        return A.useEffect(() => () => document.removeEventListener("pointerup", x), [x]), g.jsx(yN, {
            asChild: !0,
            ...f,
            children: g.jsx(tn.button, {
                "aria-describedby": l.open ? l.contentId : void 0,
                "data-state": l.stateAttribute,
                ...r,
                ref: m,
                onPointerMove: _t(e.onPointerMove, b => {
                    b.pointerType !== "touch" && !y.current && !c.isPointerInTransitRef.current && (l.onTriggerEnter(), y.current = !0)
                }),
                onPointerLeave: _t(e.onPointerLeave, () => {
                    l.onTriggerLeave(), y.current = !1
                }),
                onPointerDown: _t(e.onPointerDown, () => {
                    l.open && l.onClose(), p.current = !0, document.addEventListener("pointerup", x, {
                        once: !0
                    })
                }),
                onFocus: _t(e.onFocus, () => {
                    p.current || l.onOpen()
                }),
                onBlur: _t(e.onBlur, l.onClose),
                onClick: _t(e.onClick, l.onClose)
            })
        })
    });
wN.displayName = ch;
var rm = "TooltipPortal",
    [SN, TN] = Qc(rm, {
        forceMount: void 0
    }),
    dw = e => {
        const {
            __scopeTooltip: n,
            forceMount: i,
            children: r,
            container: l
        } = e, c = No(rm, n);
        return g.jsx(SN, {
            scope: n,
            forceMount: i,
            children: g.jsx(qc, {
                present: i || c.open,
                children: g.jsx(Gh, {
                    asChild: !0,
                    container: l,
                    children: r
                })
            })
        })
    };
dw.displayName = rm;
var Za = "TooltipContent",
    hw = A.forwardRef((e, n) => {
        const i = TN(Za, e.__scopeTooltip),
            {
                forceMount: r = i.forceMount,
                side: l = "top",
                ...c
            } = e,
            f = No(Za, e.__scopeTooltip);
        return g.jsx(qc, {
            present: r || f.open,
            children: f.disableHoverableContent ? g.jsx(mw, {
                side: l,
                ...c,
                ref: n
            }) : g.jsx(AN, {
                side: l,
                ...c,
                ref: n
            })
        })
    }),
    AN = A.forwardRef((e, n) => {
        const i = No(Za, e.__scopeTooltip),
            r = cw(Za, e.__scopeTooltip),
            l = A.useRef(null),
            c = Hn(n, l),
            [f, d] = A.useState(null),
            {
                trigger: m,
                onClose: p
            } = i,
            y = l.current,
            {
                onPointerInTransitChange: x
            } = r,
            b = A.useCallback(() => {
                d(null), x(!1)
            }, [x]),
            S = A.useCallback((E, _) => {
                const R = E.currentTarget,
                    D = {
                        x: E.clientX,
                        y: E.clientY
                    },
                    j = NN(D, R.getBoundingClientRect()),
                    M = ON(D, j),
                    H = jN(_.getBoundingClientRect()),
                    z = MN([...M, ...H]);
                d(z), x(!0)
            }, [x]);
        return A.useEffect(() => () => b(), [b]), A.useEffect(() => {
            if (m && y) {
                const E = R => S(R, y),
                    _ = R => S(R, m);
                return m.addEventListener("pointerleave", E), y.addEventListener("pointerleave", _), () => {
                    m.removeEventListener("pointerleave", E), y.removeEventListener("pointerleave", _)
                }
            }
        }, [m, y, S, b]), A.useEffect(() => {
            if (f) {
                const E = _ => {
                    const R = _.target,
                        D = {
                            x: _.clientX,
                            y: _.clientY
                        },
                        j = m?.contains(R) || y?.contains(R),
                        M = !DN(D, f);
                    j ? b() : M && (b(), p())
                };
                return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E)
            }
        }, [m, y, f, p, b]), g.jsx(mw, {
            ...e,
            ref: c
        })
    }),
    [EN, _N] = Qc(fw, {
        isInside: !1
    }),
    CN = Z2("TooltipContent"),
    mw = A.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            children: r,
            "aria-label": l,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            ...d
        } = e, m = No(Za, i), p = am(i), {
            onClose: y
        } = m;
        return A.useEffect(() => (document.addEventListener(Dx, y), () => document.removeEventListener(Dx, y)), [y]), A.useEffect(() => {
            if (m.trigger) {
                const x = b => {
                    b.target?.contains(m.trigger) && y()
                };
                return window.addEventListener("scroll", x, {
                    capture: !0
                }), () => window.removeEventListener("scroll", x, {
                    capture: !0
                })
            }
        }, [m.trigger, y]), g.jsx(Yh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            onFocusOutside: x => x.preventDefault(),
            onDismiss: y,
            children: g.jsxs(gN, {
                "data-state": m.stateAttribute,
                ...p,
                ...d,
                ref: n,
                style: {
                    ...d.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [g.jsx(CN, {
                    children: r
                }), g.jsx(EN, {
                    scope: i,
                    isInside: !0,
                    children: g.jsx(g_, {
                        id: m.contentId,
                        role: "tooltip",
                        children: l || r
                    })
                })]
            })
        })
    });
hw.displayName = Za;
var pw = "TooltipArrow",
    RN = A.forwardRef((e, n) => {
        const {
            __scopeTooltip: i,
            ...r
        } = e, l = am(i);
        return _N(pw, i).isInside ? null : g.jsx(vN, {
            ...l,
            ...r,
            ref: n
        })
    });
RN.displayName = pw;

function NN(e, n) {
    const i = Math.abs(n.top - e.y),
        r = Math.abs(n.bottom - e.y),
        l = Math.abs(n.right - e.x),
        c = Math.abs(n.left - e.x);
    switch (Math.min(i, r, l, c)) {
        case c:
            return "left";
        case l:
            return "right";
        case i:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function ON(e, n, i = 5) {
    const r = [];
    switch (n) {
        case "top":
            r.push({
                x: e.x - i,
                y: e.y + i
            }, {
                x: e.x + i,
                y: e.y + i
            });
            break;
        case "bottom":
            r.push({
                x: e.x - i,
                y: e.y - i
            }, {
                x: e.x + i,
                y: e.y - i
            });
            break;
        case "left":
            r.push({
                x: e.x + i,
                y: e.y - i
            }, {
                x: e.x + i,
                y: e.y + i
            });
            break;
        case "right":
            r.push({
                x: e.x - i,
                y: e.y - i
            }, {
                x: e.x - i,
                y: e.y + i
            });
            break
    }
    return r
}

function jN(e) {
    const {
        top: n,
        right: i,
        bottom: r,
        left: l
    } = e;
    return [{
        x: l,
        y: n
    }, {
        x: i,
        y: n
    }, {
        x: i,
        y: r
    }, {
        x: l,
        y: r
    }]
}

function DN(e, n) {
    const {
        x: i,
        y: r
    } = e;
    let l = !1;
    for (let c = 0, f = n.length - 1; c < n.length; f = c++) {
        const d = n[c],
            m = n[f],
            p = d.x,
            y = d.y,
            x = m.x,
            b = m.y;
        y > r != b > r && i < (x - p) * (r - y) / (b - y) + p && (l = !l)
    }
    return l
}

function MN(e) {
    const n = e.slice();
    return n.sort((i, r) => i.x < r.x ? -1 : i.x > r.x ? 1 : i.y < r.y ? -1 : i.y > r.y ? 1 : 0), kN(n)
}

function kN(e) {
    if (e.length <= 1) return e.slice();
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const l = e[r];
        for (; n.length >= 2;) {
            const c = n[n.length - 1],
                f = n[n.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) n.pop();
            else break
        }
        n.push(l)
    }
    n.pop();
    const i = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const l = e[r];
        for (; i.length >= 2;) {
            const c = i[i.length - 1],
                f = i[i.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) i.pop();
            else break
        }
        i.push(l)
    }
    return i.pop(), n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i)
}
var VN = uw,
    zN = dw,
    yw = hw;
const LN = VN,
    BN = A.forwardRef(({
        className: e,
        sideOffset: n = 4,
        ...i
    }, r) => g.jsx(zN, {
        children: g.jsx(yw, {
            ref: r,
            sideOffset: n,
            className: mt("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
            ...i
        })
    }));
BN.displayName = yw.displayName;
const gw = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("rounded-xl border bg-card text-card-foreground shadow", e),
    ...n
}));
gw.displayName = "Card";
const PN = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("flex flex-col space-y-1.5 p-6", e),
    ...n
}));
PN.displayName = "CardHeader";
const UN = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("font-semibold leading-none tracking-tight", e),
    ...n
}));
UN.displayName = "CardTitle";
const HN = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("text-sm text-muted-foreground", e),
    ...n
}));
HN.displayName = "CardDescription";
const vw = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("p-6 pt-0", e),
    ...n
}));
vw.displayName = "CardContent";
const qN = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("div", {
    ref: i,
    className: mt("flex items-center p-6 pt-0", e),
    ...n
}));
qN.displayName = "CardFooter";

function FN() {
    return g.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: g.jsx(gw, {
            className: "w-full max-w-md mx-4",
            children: g.jsxs(vw, {
                className: "pt-6",
                children: [g.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [g.jsx(K_, {
                        className: "h-8 w-8 text-red-500"
                    }), g.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), g.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
const Mx = [{
        name: "Home",
        href: "/"
    }, {
        name: "Portfolio",
        href: "/portfolio"
    }, {
        name: "Shop",
        href: "/shop"
    }, {
        name: "Contact Us",
        href: "/contact"
    }],
    kx = [{
        icon: rC,
        label: "+1 (212) 555-0190",
        href: "tel:+12125550190"
    }, {
        icon: J_,
        label: "studio@vantageinteriors.com",
        href: "mailto:studio@vantageinteriors.com"
    }, {
        icon: b1,
        label: "Lagos, Nigeria",
        href: "#"
    }];

function di() {
    const [e, n] = A.useState(!1), [i, r] = A.useState(!1), [l] = r2();
    A.useEffect(() => {
        const m = () => n(window.scrollY > 50);
        return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m)
    }, []), A.useEffect(() => {
        r(!1)
    }, [l]);
    const c = m => l === m,
        d = !(l === "/") || e || i;
    return g.jsxs(g.Fragment, {
        children: [g.jsxs("div", {
            className: "fixed top-0 inset-x-0 z-50 flex flex-col",
            children: [g.jsx("div", {
                className: "hidden md:block bg-[#222222] border-b border-white/10",
                children: g.jsx("div", {
                    className: "container mx-auto px-6 md:px-12 flex items-center justify-end gap-8 py-2",
                    children: kx.map(({
                        icon: m,
                        label: p,
                        href: y
                    }) => g.jsxs("a", {
                        href: y,
                        className: "flex items-center gap-2 text-white/60 hover:text-[#C19A6B] transition-colors duration-300 text-xs tracking-wide",
                        children: [g.jsx(m, {
                            size: 12
                        }), g.jsx("span", {
                            children: p
                        })]
                    }, p))
                })
            }), g.jsx("header", {
                className: mt("transition-all duration-500", d ? "bg-[#4B4540]/97 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"),
                children: g.jsxs("div", {
                    className: "container mx-auto px-6 md:px-12 flex items-center justify-between",
                    children: [g.jsx(_n, {
                        href: "/",
                        className: "font-serif text-2xl tracking-widest text-white hover:text-[#C19A6B] transition-colors duration-300",
                        children: "VANTAGE"
                    }), g.jsxs("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [g.jsx("ul", {
                            className: "flex items-center gap-7",
                            children: Mx.map(m => g.jsx("li", {
                                children: g.jsx(_n, {
                                    href: m.href,
                                    className: mt("text-xs uppercase tracking-widest font-medium transition-all duration-300 relative", "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#C19A6B] after:transition-all after:duration-300", c(m.href) ? "text-[#C19A6B] after:w-full" : "text-white/80 hover:text-[#C19A6B] after:w-0 hover:after:w-full"),
                                    children: m.name
                                })
                            }, m.name))
                        }), g.jsxs(_n, {
                            href: "/cart",
                            className: mt("relative flex items-center gap-1.5 text-xs uppercase tracking-widest transition-all duration-300 border px-4 py-2", c("/cart") ? "border-[#C19A6B] text-[#C19A6B]" : "border-white/40 text-white/80 hover:border-[#C19A6B] hover:text-[#C19A6B]"),
                            children: [g.jsx(ac, {
                                size: 14
                            }), "Cart"]
                        })]
                    }), g.jsxs("div", {
                        className: "md:hidden flex items-center gap-4",
                        children: [g.jsx(_n, {
                            href: "/cart",
                            className: "text-white hover:text-[#C19A6B] transition-colors",
                            children: g.jsx(ac, {
                                size: 20
                            })
                        }), g.jsx("button", {
                            className: "p-1 text-white z-[60] relative",
                            "aria-label": i ? "Close menu" : "Open menu",
                            onClick: () => r(m => !m),
                            children: i ? g.jsx(Qh, {
                                size: 24
                            }) : g.jsx(iC, {
                                size: 24
                            })
                        })]
                    })]
                })
            })]
        }), g.jsxs("div", {
            className: mt("fixed inset-0 z-40 bg-[#4B4540] flex flex-col items-center justify-center transition-all duration-500 md:hidden", i ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"),
            children: [g.jsxs("ul", {
                className: "flex flex-col items-center gap-8 mb-14",
                children: [Mx.map(m => g.jsx("li", {
                    children: g.jsx(_n, {
                        href: m.href,
                        className: mt("text-2xl font-serif tracking-widest transition-colors", c(m.href) ? "text-[#C19A6B]" : "text-white hover:text-[#C19A6B]"),
                        children: m.name
                    })
                }, m.name)), g.jsx("li", {
                    children: g.jsxs(_n, {
                        href: "/cart",
                        className: "flex items-center gap-2 text-2xl font-serif tracking-widest text-white hover:text-[#C19A6B] transition-colors",
                        children: [g.jsx(ac, {
                            size: 20
                        }), " Cart"]
                    })
                })]
            }), g.jsx("div", {
                className: "flex flex-col items-center gap-4 border-t border-white/20 pt-8",
                children: kx.map(({
                    icon: m,
                    label: p,
                    href: y
                }) => g.jsxs("a", {
                    href: y,
                    className: "flex items-center gap-3 text-white/70 hover:text-[#C19A6B] transition-colors text-sm",
                    children: [g.jsx(m, {
                        size: 13,
                        className: "text-[#C19A6B]"
                    }), g.jsx("span", {
                        children: p
                    })]
                }, p))
            })]
        })]
    })
}
const om = A.forwardRef(({
    className: e,
    variant: n = "default",
    size: i = "default",
    asChild: r = !1,
    ...l
}, c) => g.jsx("button", {
    className: mt("inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
        "bg-gold text-charcoal hover:bg-gold/90 hover:scale-[1.02] shadow-sm": n === "default",
        "border border-input bg-transparent hover:bg-taupe hover:text-offwhite": n === "outline",
        "hover:bg-taupe/10": n === "ghost",
        "text-gold underline-offset-4 hover:underline": n === "link",
        "h-12 px-8 py-3 uppercase tracking-widest text-xs": i === "default",
        "h-10 px-4 text-xs": i === "sm",
        "h-14 px-10 text-sm": i === "lg",
        "h-12 w-12": i === "icon"
    }, e),
    ref: c,
    ...l
}));
om.displayName = "Button";
const xw = A.createContext({});

function YN(e) {
    const n = A.useRef(null);
    return n.current === null && (n.current = e()), n.current
}
const GN = typeof window < "u",
    ZN = GN ? A.useLayoutEffect : A.useEffect,
    lm = A.createContext(null);

function cm(e, n) {
    e.indexOf(n) === -1 && e.push(n)
}

function wc(e, n) {
    const i = e.indexOf(n);
    i > -1 && e.splice(i, 1)
}
const ss = (e, n, i) => i > n ? n : i < e ? e : i;
let um = () => {};
const Es = {},
    bw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function ww(e) {
    return typeof e == "object" && e !== null
}
const Sw = e => /^0[^.\s]+$/u.test(e);

function Tw(e) {
    let n;
    return () => (n === void 0 && (n = e()), n)
}
const Rn = e => e,
    XN = (e, n) => i => n(e(i)),
    Oo = (...e) => e.reduce(XN),
    vo = (e, n, i) => {
        const r = n - e;
        return r === 0 ? 1 : (i - e) / r
    };
class fm {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return cm(this.subscriptions, n), () => wc(this.subscriptions, n)
    }
    notify(n, i, r) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](n, i, r);
            else
                for (let c = 0; c < l; c++) {
                    const f = this.subscriptions[c];
                    f && f(n, i, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Pn = e => e * 1e3,
    Cn = e => e / 1e3;

function Aw(e, n) {
    return n ? e * (1e3 / n) : 0
}
const Ew = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e,
    KN = 1e-7,
    QN = 12;

function IN(e, n, i, r, l) {
    let c, f, d = 0;
    do f = n + (i - n) / 2, c = Ew(f, r, l) - e, c > 0 ? i = f : n = f; while (Math.abs(c) > KN && ++d < QN);
    return f
}

function jo(e, n, i, r) {
    if (e === n && i === r) return Rn;
    const l = c => IN(c, 0, 1, e, i);
    return c => c === 0 || c === 1 ? c : Ew(l(c), n, r)
}
const _w = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
    Cw = e => n => 1 - e(1 - n),
    Rw = jo(.33, 1.53, .69, .99),
    dm = Cw(Rw),
    Nw = _w(dm),
    Ow = e => (e *= 2) < 1 ? .5 * dm(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    hm = e => 1 - Math.sin(Math.acos(e)),
    jw = Cw(hm),
    Dw = _w(hm),
    $N = jo(.42, 0, 1, 1),
    WN = jo(0, 0, .58, 1),
    Mw = jo(.42, 0, .58, 1),
    JN = e => Array.isArray(e) && typeof e[0] != "number",
    kw = e => Array.isArray(e) && typeof e[0] == "number",
    eO = {
        linear: Rn,
        easeIn: $N,
        easeInOut: Mw,
        easeOut: WN,
        circIn: hm,
        circInOut: Dw,
        circOut: jw,
        backIn: dm,
        backInOut: Nw,
        backOut: Rw,
        anticipate: Ow
    },
    tO = e => typeof e == "string",
    Vx = e => {
        if (kw(e)) {
            um(e.length === 4);
            const [n, i, r, l] = e;
            return jo(n, i, r, l)
        } else if (tO(e)) return eO[e];
        return e
    },
    Jl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function nO(e, n) {
    let i = new Set,
        r = new Set,
        l = !1,
        c = !1;
    const f = new WeakSet;
    let d = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function m(y) {
        f.has(y) && (p.schedule(y), e()), y(d)
    }
    const p = {
        schedule: (y, x = !1, b = !1) => {
            const E = b && l ? i : r;
            return x && f.add(y), E.has(y) || E.add(y), y
        },
        cancel: y => {
            r.delete(y), f.delete(y)
        },
        process: y => {
            if (d = y, l) {
                c = !0;
                return
            }
            l = !0, [i, r] = [r, i], i.forEach(m), i.clear(), l = !1, c && (c = !1, p.process(y))
        }
    };
    return p
}
const sO = 40;

function Vw(e, n) {
    let i = !1,
        r = !0;
    const l = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => i = !0,
        f = Jl.reduce((M, H) => (M[H] = nO(c), M), {}),
        {
            setup: d,
            read: m,
            resolveKeyframes: p,
            preUpdate: y,
            update: x,
            preRender: b,
            render: S,
            postRender: E
        } = f,
        _ = () => {
            const M = Es.useManualTiming ? l.timestamp : performance.now();
            i = !1, Es.useManualTiming || (l.delta = r ? 1e3 / 60 : Math.max(Math.min(M - l.timestamp, sO), 1)), l.timestamp = M, l.isProcessing = !0, d.process(l), m.process(l), p.process(l), y.process(l), x.process(l), b.process(l), S.process(l), E.process(l), l.isProcessing = !1, i && n && (r = !1, e(_))
        },
        R = () => {
            i = !0, r = !0, l.isProcessing || e(_)
        };
    return {
        schedule: Jl.reduce((M, H) => {
            const z = f[H];
            return M[H] = (I, W = !1, F = !1) => (i || R(), z.schedule(I, W, F)), M
        }, {}),
        cancel: M => {
            for (let H = 0; H < Jl.length; H++) f[Jl[H]].cancel(M)
        },
        state: l,
        steps: f
    }
}
const {
    schedule: st,
    cancel: hi,
    state: zt,
    steps: Od
} = Vw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Rn, !0);
let oc;

function iO() {
    oc = void 0
}
const Zt = {
        now: () => (oc === void 0 && Zt.set(zt.isProcessing || Es.useManualTiming ? zt.timestamp : performance.now()), oc),
        set: e => {
            oc = e, queueMicrotask(iO)
        }
    },
    zw = e => n => typeof n == "string" && n.startsWith(e),
    Lw = zw("--"),
    aO = zw("var(--"),
    mm = e => aO(e) ? rO.test(e.split("/*")[0].trim()) : !1,
    rO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function zx(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const er = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    xo = {
        ...er,
        transform: e => ss(0, 1, e)
    },
    ec = {
        ...er,
        default: 1
    },
    lo = e => Math.round(e * 1e5) / 1e5,
    pm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function oO(e) {
    return e == null
}
const lO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    ym = (e, n) => i => !!(typeof i == "string" && lO.test(i) && i.startsWith(e) || n && !oO(i) && Object.prototype.hasOwnProperty.call(i, n)),
    Bw = (e, n, i) => r => {
        if (typeof r != "string") return r;
        const [l, c, f, d] = r.match(pm);
        return {
            [e]: parseFloat(l),
            [n]: parseFloat(c),
            [i]: parseFloat(f),
            alpha: d !== void 0 ? parseFloat(d) : 1
        }
    },
    cO = e => ss(0, 255, e),
    jd = {
        ...er,
        transform: e => Math.round(cO(e))
    },
    Ui = {
        test: ym("rgb", "red"),
        parse: Bw("red", "green", "blue"),
        transform: ({
            red: e,
            green: n,
            blue: i,
            alpha: r = 1
        }) => "rgba(" + jd.transform(e) + ", " + jd.transform(n) + ", " + jd.transform(i) + ", " + lo(xo.transform(r)) + ")"
    };

function uO(e) {
    let n = "",
        i = "",
        r = "",
        l = "";
    return e.length > 5 ? (n = e.substring(1, 3), i = e.substring(3, 5), r = e.substring(5, 7), l = e.substring(7, 9)) : (n = e.substring(1, 2), i = e.substring(2, 3), r = e.substring(3, 4), l = e.substring(4, 5), n += n, i += i, r += r, l += l), {
        red: parseInt(n, 16),
        green: parseInt(i, 16),
        blue: parseInt(r, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const uh = {
        test: ym("#"),
        parse: uO,
        transform: Ui.transform
    },
    Do = e => ({
        test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
        parse: parseFloat,
        transform: n => `${n}${e}`
    }),
    ni = Do("deg"),
    ts = Do("%"),
    ge = Do("px"),
    fO = Do("vh"),
    dO = Do("vw"),
    Lx = {
        ...ts,
        parse: e => ts.parse(e) / 100,
        transform: e => ts.transform(e * 100)
    },
    Ba = {
        test: ym("hsl", "hue"),
        parse: Bw("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: n,
            lightness: i,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + ts.transform(lo(n)) + ", " + ts.transform(lo(i)) + ", " + lo(xo.transform(r)) + ")"
    },
    vt = {
        test: e => Ui.test(e) || uh.test(e) || Ba.test(e),
        parse: e => Ui.test(e) ? Ui.parse(e) : Ba.test(e) ? Ba.parse(e) : uh.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ui.transform(e) : Ba.transform(e),
        getAnimatableNone: e => {
            const n = vt.parse(e);
            return n.alpha = 0, vt.transform(n)
        }
    },
    hO = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function mO(e) {
    return isNaN(e) && typeof e == "string" && (e.match(pm)?.length || 0) + (e.match(hO)?.length || 0) > 0
}
const Pw = "number",
    Uw = "color",
    pO = "var",
    yO = "var(",
    Bx = "${}",
    gO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bo(e) {
    const n = e.toString(),
        i = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        l = [];
    let c = 0;
    const d = n.replace(gO, m => (vt.test(m) ? (r.color.push(c), l.push(Uw), i.push(vt.parse(m))) : m.startsWith(yO) ? (r.var.push(c), l.push(pO), i.push(m)) : (r.number.push(c), l.push(Pw), i.push(parseFloat(m))), ++c, Bx)).split(Bx);
    return {
        values: i,
        split: d,
        indexes: r,
        types: l
    }
}

function Hw(e) {
    return bo(e).values
}

function qw(e) {
    const {
        split: n,
        types: i
    } = bo(e), r = n.length;
    return l => {
        let c = "";
        for (let f = 0; f < r; f++)
            if (c += n[f], l[f] !== void 0) {
                const d = i[f];
                d === Pw ? c += lo(l[f]) : d === Uw ? c += vt.transform(l[f]) : c += l[f]
            } return c
    }
}
const vO = e => typeof e == "number" ? 0 : vt.test(e) ? vt.getAnimatableNone(e) : e;

function xO(e) {
    const n = Hw(e);
    return qw(e)(n.map(vO))
}
const Un = {
    test: mO,
    parse: Hw,
    createTransformer: qw,
    getAnimatableNone: xO
};

function Dd(e, n, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
}

function bO({
    hue: e,
    saturation: n,
    lightness: i,
    alpha: r
}) {
    e /= 360, n /= 100, i /= 100;
    let l = 0,
        c = 0,
        f = 0;
    if (!n) l = c = f = i;
    else {
        const d = i < .5 ? i * (1 + n) : i + n - i * n,
            m = 2 * i - d;
        l = Dd(m, d, e + 1 / 3), c = Dd(m, d, e), f = Dd(m, d, e - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: r
    }
}

function Sc(e, n) {
    return i => i > 0 ? n : e
}
const lt = (e, n, i) => e + (n - e) * i,
    Md = (e, n, i) => {
        const r = e * e,
            l = i * (n * n - r) + r;
        return l < 0 ? 0 : Math.sqrt(l)
    },
    wO = [uh, Ui, Ba],
    SO = e => wO.find(n => n.test(e));

function Px(e) {
    const n = SO(e);
    if (!n) return !1;
    let i = n.parse(e);
    return n === Ba && (i = bO(i)), i
}
const Ux = (e, n) => {
        const i = Px(e),
            r = Px(n);
        if (!i || !r) return Sc(e, n);
        const l = {
            ...i
        };
        return c => (l.red = Md(i.red, r.red, c), l.green = Md(i.green, r.green, c), l.blue = Md(i.blue, r.blue, c), l.alpha = lt(i.alpha, r.alpha, c), Ui.transform(l))
    },
    fh = new Set(["none", "hidden"]);

function TO(e, n) {
    return fh.has(e) ? i => i <= 0 ? e : n : i => i >= 1 ? n : e
}

function AO(e, n) {
    return i => lt(e, n, i)
}

function gm(e) {
    return typeof e == "number" ? AO : typeof e == "string" ? mm(e) ? Sc : vt.test(e) ? Ux : CO : Array.isArray(e) ? Fw : typeof e == "object" ? vt.test(e) ? Ux : EO : Sc
}

function Fw(e, n) {
    const i = [...e],
        r = i.length,
        l = e.map((c, f) => gm(c)(c, n[f]));
    return c => {
        for (let f = 0; f < r; f++) i[f] = l[f](c);
        return i
    }
}

function EO(e, n) {
    const i = {
            ...e,
            ...n
        },
        r = {};
    for (const l in i) e[l] !== void 0 && n[l] !== void 0 && (r[l] = gm(e[l])(e[l], n[l]));
    return l => {
        for (const c in r) i[c] = r[c](l);
        return i
    }
}

function _O(e, n) {
    const i = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < n.values.length; l++) {
        const c = n.types[l],
            f = e.indexes[c][r[c]],
            d = e.values[f] ?? 0;
        i[l] = d, r[c]++
    }
    return i
}
const CO = (e, n) => {
    const i = Un.createTransformer(n),
        r = bo(e),
        l = bo(n);
    return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r.indexes.number.length >= l.indexes.number.length ? fh.has(e) && !l.values.length || fh.has(n) && !r.values.length ? TO(e, n) : Oo(Fw(_O(r, l), l.values), i) : Sc(e, n)
};

function Yw(e, n, i) {
    return typeof e == "number" && typeof n == "number" && typeof i == "number" ? lt(e, n, i) : gm(e)(e, n)
}
const RO = e => {
        const n = ({
            timestamp: i
        }) => e(i);
        return {
            start: (i = !0) => st.update(n, i),
            stop: () => hi(n),
            now: () => zt.isProcessing ? zt.timestamp : Zt.now()
        }
    },
    Gw = (e, n, i = 10) => {
        let r = "";
        const l = Math.max(Math.round(n / i), 2);
        for (let c = 0; c < l; c++) r += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`
    },
    Tc = 2e4;

function vm(e) {
    let n = 0;
    const i = 50;
    let r = e.next(n);
    for (; !r.done && n < Tc;) n += i, r = e.next(n);
    return n >= Tc ? 1 / 0 : n
}

function NO(e, n = 100, i) {
    const r = i({
            ...e,
            keyframes: [0, n]
        }),
        l = Math.min(vm(r), Tc);
    return {
        type: "keyframes",
        ease: c => r.next(l * c).value / n,
        duration: Cn(l)
    }
}
const OO = 5;

function Zw(e, n, i) {
    const r = Math.max(n - OO, 0);
    return Aw(i - e(r), n - r)
}
const ft = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    kd = .001;

function jO({
    duration: e = ft.duration,
    bounce: n = ft.bounce,
    velocity: i = ft.velocity,
    mass: r = ft.mass
}) {
    let l, c, f = 1 - n;
    f = ss(ft.minDamping, ft.maxDamping, f), e = ss(ft.minDuration, ft.maxDuration, Cn(e)), f < 1 ? (l = p => {
        const y = p * f,
            x = y * e,
            b = y - i,
            S = dh(p, f),
            E = Math.exp(-x);
        return kd - b / S * E
    }, c = p => {
        const x = p * f * e,
            b = x * i + i,
            S = Math.pow(f, 2) * Math.pow(p, 2) * e,
            E = Math.exp(-x),
            _ = dh(Math.pow(p, 2), f);
        return (-l(p) + kd > 0 ? -1 : 1) * ((b - S) * E) / _
    }) : (l = p => {
        const y = Math.exp(-p * e),
            x = (p - i) * e + 1;
        return -kd + y * x
    }, c = p => {
        const y = Math.exp(-p * e),
            x = (i - p) * (e * e);
        return y * x
    });
    const d = 5 / e,
        m = MO(l, c, d);
    if (e = Pn(e), isNaN(m)) return {
        stiffness: ft.stiffness,
        damping: ft.damping,
        duration: e
    };
    {
        const p = Math.pow(m, 2) * r;
        return {
            stiffness: p,
            damping: f * 2 * Math.sqrt(r * p),
            duration: e
        }
    }
}
const DO = 12;

function MO(e, n, i) {
    let r = i;
    for (let l = 1; l < DO; l++) r = r - e(r) / n(r);
    return r
}

function dh(e, n) {
    return e * Math.sqrt(1 - n * n)
}
const kO = ["duration", "bounce"],
    VO = ["stiffness", "damping", "mass"];

function Hx(e, n) {
    return n.some(i => e[i] !== void 0)
}

function zO(e) {
    let n = {
        velocity: ft.velocity,
        stiffness: ft.stiffness,
        damping: ft.damping,
        mass: ft.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Hx(e, VO) && Hx(e, kO))
        if (n.velocity = 0, e.visualDuration) {
            const i = e.visualDuration,
                r = 2 * Math.PI / (i * 1.2),
                l = r * r,
                c = 2 * ss(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
            n = {
                ...n,
                mass: ft.mass,
                stiffness: l,
                damping: c
            }
        } else {
            const i = jO({
                ...e,
                velocity: 0
            });
            n = {
                ...n,
                ...i,
                mass: ft.mass
            }, n.isResolvedFromDuration = !0
        } return n
}

function Ac(e = ft.visualDuration, n = ft.bounce) {
    const i = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
    } : e;
    let {
        restSpeed: r,
        restDelta: l
    } = i;
    const c = i.keyframes[0],
        f = i.keyframes[i.keyframes.length - 1],
        d = {
            done: !1,
            value: c
        },
        {
            stiffness: m,
            damping: p,
            mass: y,
            duration: x,
            velocity: b,
            isResolvedFromDuration: S
        } = zO({
            ...i,
            velocity: -Cn(i.velocity || 0)
        }),
        E = b || 0,
        _ = p / (2 * Math.sqrt(m * y)),
        R = f - c,
        D = Cn(Math.sqrt(m / y)),
        j = Math.abs(R) < 5;
    r || (r = j ? ft.restSpeed.granular : ft.restSpeed.default), l || (l = j ? ft.restDelta.granular : ft.restDelta.default);
    let M;
    if (_ < 1) {
        const z = dh(D, _);
        M = I => {
            const W = Math.exp(-_ * D * I);
            return f - W * ((E + _ * D * R) / z * Math.sin(z * I) + R * Math.cos(z * I))
        }
    } else if (_ === 1) M = z => f - Math.exp(-D * z) * (R + (E + D * R) * z);
    else {
        const z = D * Math.sqrt(_ * _ - 1);
        M = I => {
            const W = Math.exp(-_ * D * I),
                F = Math.min(z * I, 300);
            return f - W * ((E + _ * D * R) * Math.sinh(F) + z * R * Math.cosh(F)) / z
        }
    }
    const H = {
        calculatedDuration: S && x || null,
        next: z => {
            const I = M(z);
            if (S) d.done = z >= x;
            else {
                let W = z === 0 ? E : 0;
                _ < 1 && (W = z === 0 ? Pn(E) : Zw(M, z, I));
                const F = Math.abs(W) <= r,
                    le = Math.abs(f - I) <= l;
                d.done = F && le
            }
            return d.value = d.done ? f : I, d
        },
        toString: () => {
            const z = Math.min(vm(H), Tc),
                I = Gw(W => H.next(z * W).value, z, 30);
            return z + "ms " + I
        },
        toTransition: () => {}
    };
    return H
}
Ac.applyToOptions = e => {
    const n = NO(e, 100, Ac);
    return e.ease = n.ease, e.duration = Pn(n.duration), e.type = "keyframes", e
};

function hh({
    keyframes: e,
    velocity: n = 0,
    power: i = .8,
    timeConstant: r = 325,
    bounceDamping: l = 10,
    bounceStiffness: c = 500,
    modifyTarget: f,
    min: d,
    max: m,
    restDelta: p = .5,
    restSpeed: y
}) {
    const x = e[0],
        b = {
            done: !1,
            value: x
        },
        S = F => d !== void 0 && F < d || m !== void 0 && F > m,
        E = F => d === void 0 ? m : m === void 0 || Math.abs(d - F) < Math.abs(m - F) ? d : m;
    let _ = i * n;
    const R = x + _,
        D = f === void 0 ? R : f(R);
    D !== R && (_ = D - x);
    const j = F => -_ * Math.exp(-F / r),
        M = F => D + j(F),
        H = F => {
            const le = j(F),
                ve = M(F);
            b.done = Math.abs(le) <= p, b.value = b.done ? D : ve
        };
    let z, I;
    const W = F => {
        S(b.value) && (z = F, I = Ac({
            keyframes: [b.value, E(b.value)],
            velocity: Zw(M, F, b.value),
            damping: l,
            stiffness: c,
            restDelta: p,
            restSpeed: y
        }))
    };
    return W(0), {
        calculatedDuration: null,
        next: F => {
            let le = !1;
            return !I && z === void 0 && (le = !0, H(F), W(F)), z !== void 0 && F >= z ? I.next(F - z) : (!le && H(F), b)
        }
    }
}

function LO(e, n, i) {
    const r = [],
        l = i || Es.mix || Yw,
        c = e.length - 1;
    for (let f = 0; f < c; f++) {
        let d = l(e[f], e[f + 1]);
        if (n) {
            const m = Array.isArray(n) ? n[f] || Rn : n;
            d = Oo(m, d)
        }
        r.push(d)
    }
    return r
}

function BO(e, n, {
    clamp: i = !0,
    ease: r,
    mixer: l
} = {}) {
    const c = e.length;
    if (um(c === n.length), c === 1) return () => n[0];
    if (c === 2 && n[0] === n[1]) return () => n[1];
    const f = e[0] === e[1];
    e[0] > e[c - 1] && (e = [...e].reverse(), n = [...n].reverse());
    const d = LO(n, r, l),
        m = d.length,
        p = y => {
            if (f && y < e[0]) return n[0];
            let x = 0;
            if (m > 1)
                for (; x < e.length - 2 && !(y < e[x + 1]); x++);
            const b = vo(e[x], e[x + 1], y);
            return d[x](b)
        };
    return i ? y => p(ss(e[0], e[c - 1], y)) : p
}

function PO(e, n) {
    const i = e[e.length - 1];
    for (let r = 1; r <= n; r++) {
        const l = vo(0, n, r);
        e.push(lt(i, 1, l))
    }
}

function UO(e) {
    const n = [0];
    return PO(n, e.length - 1), n
}

function HO(e, n) {
    return e.map(i => i * n)
}

function qO(e, n) {
    return e.map(() => n || Mw).splice(0, e.length - 1)
}

function co({
    duration: e = 300,
    keyframes: n,
    times: i,
    ease: r = "easeInOut"
}) {
    const l = JN(r) ? r.map(Vx) : Vx(r),
        c = {
            done: !1,
            value: n[0]
        },
        f = HO(i && i.length === n.length ? i : UO(n), e),
        d = BO(f, n, {
            ease: Array.isArray(l) ? l : qO(n, l)
        });
    return {
        calculatedDuration: e,
        next: m => (c.value = d(m), c.done = m >= e, c)
    }
}
const FO = e => e !== null;

function xm(e, {
    repeat: n,
    repeatType: i = "loop"
}, r, l = 1) {
    const c = e.filter(FO),
        d = l < 0 || n && i !== "loop" && n % 2 === 1 ? 0 : c.length - 1;
    return !d || r === void 0 ? c[d] : r
}
const YO = {
    decay: hh,
    inertia: hh,
    tween: co,
    keyframes: co,
    spring: Ac
};

function Xw(e) {
    typeof e.type == "string" && (e.type = YO[e.type])
}
class bm {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(n => {
            this.resolve = n
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(n, i) {
        return this.finished.then(n, i)
    }
}
const GO = e => e / 100;
class wm extends bm {
    constructor(n) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: i
            } = this.options;
            i && i.updatedAt !== Zt.now() && this.tick(Zt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.())
        }, this.options = n, this.initAnimation(), this.play(), n.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: n
        } = this;
        Xw(n);
        const {
            type: i = co,
            repeat: r = 0,
            repeatDelay: l = 0,
            repeatType: c,
            velocity: f = 0
        } = n;
        let {
            keyframes: d
        } = n;
        const m = i || co;
        m !== co && typeof d[0] != "number" && (this.mixKeyframes = Oo(GO, Yw(d[0], d[1])), d = [0, 100]);
        const p = m({
            ...n,
            keyframes: d
        });
        c === "mirror" && (this.mirroredGenerator = m({
            ...n,
            keyframes: [...d].reverse(),
            velocity: -f
        })), p.calculatedDuration === null && (p.calculatedDuration = vm(p));
        const {
            calculatedDuration: y
        } = p;
        this.calculatedDuration = y, this.resolvedDuration = y + l, this.totalDuration = this.resolvedDuration * (r + 1) - l, this.generator = p
    }
    updateTime(n) {
        const i = Math.round(n - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i
    }
    tick(n, i = !1) {
        const {
            generator: r,
            totalDuration: l,
            mixKeyframes: c,
            mirroredGenerator: f,
            resolvedDuration: d,
            calculatedDuration: m
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: p = 0,
            keyframes: y,
            repeat: x,
            repeatType: b,
            repeatDelay: S,
            type: E,
            onUpdate: _,
            finalKeyframe: R
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - l / this.speed, this.startTime)), i ? this.currentTime = n : this.updateTime(n);
        const D = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
            j = this.playbackSpeed >= 0 ? D < 0 : D > l;
        this.currentTime = Math.max(D, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let M = this.currentTime,
            H = r;
        if (x) {
            const F = Math.min(this.currentTime, l) / d;
            let le = Math.floor(F),
                ve = F % 1;
            !ve && F >= 1 && (ve = 1), ve === 1 && le--, le = Math.min(le, x + 1), le % 2 && (b === "reverse" ? (ve = 1 - ve, S && (ve -= S / d)) : b === "mirror" && (H = f)), M = ss(0, 1, ve) * d
        }
        const z = j ? {
            done: !1,
            value: y[0]
        } : H.next(M);
        c && !j && (z.value = c(z.value));
        let {
            done: I
        } = z;
        !j && m !== null && (I = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const W = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
        return W && E !== hh && (z.value = xm(y, this.options, R, this.speed)), _ && _(z.value), W && this.finish(), z
    }
    then(n, i) {
        return this.finished.then(n, i)
    }
    get duration() {
        return Cn(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: n = 0
        } = this.options || {};
        return this.duration + Cn(n)
    }
    get time() {
        return Cn(this.currentTime)
    }
    set time(n) {
        n = Pn(n), this.currentTime = n, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = n, this.tick(n))
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        const i = this.playbackSpeed !== n;
        i && this.driver && this.updateTime(Zt.now()), this.playbackSpeed = n, i && this.driver && (this.time = Cn(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: n = RO,
            startTime: i
        } = this.options;
        this.driver || (this.driver = n(l => this.tick(l))), this.options.onPlay?.();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = i ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(Zt.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0, this.tick(n, !0)
    }
    attachTimeline(n) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), n.observe(this)
    }
}

function ZO(e) {
    for (let n = 1; n < e.length; n++) e[n] ?? (e[n] = e[n - 1])
}
const Hi = e => e * 180 / Math.PI,
    mh = e => {
        const n = Hi(Math.atan2(e[1], e[0]));
        return ph(n)
    },
    XO = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: mh,
        rotateZ: mh,
        skewX: e => Hi(Math.atan(e[1])),
        skewY: e => Hi(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    ph = e => (e = e % 360, e < 0 && (e += 360), e),
    qx = mh,
    Fx = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Yx = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    KO = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Fx,
        scaleY: Yx,
        scale: e => (Fx(e) + Yx(e)) / 2,
        rotateX: e => ph(Hi(Math.atan2(e[6], e[5]))),
        rotateY: e => ph(Hi(Math.atan2(-e[2], e[0]))),
        rotateZ: qx,
        rotate: qx,
        skewX: e => Hi(Math.atan(e[4])),
        skewY: e => Hi(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function yh(e) {
    return e.includes("scale") ? 1 : 0
}

function gh(e, n) {
    if (!e || e === "none") return yh(n);
    const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, l;
    if (i) r = KO, l = i;
    else {
        const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = XO, l = d
    }
    if (!l) return yh(n);
    const c = r[n],
        f = l[1].split(",").map(IO);
    return typeof c == "function" ? c(f) : f[c]
}
const QO = (e, n) => {
    const {
        transform: i = "none"
    } = getComputedStyle(e);
    return gh(i, n)
};

function IO(e) {
    return parseFloat(e.trim())
}
const tr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    nr = new Set(tr),
    Gx = e => e === er || e === ge,
    $O = new Set(["x", "y", "z"]),
    WO = tr.filter(e => !$O.has(e));

function JO(e) {
    const n = [];
    return WO.forEach(i => {
        const r = e.getValue(i);
        r !== void 0 && (n.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
    }), n
}
const ai = {
    width: ({
        x: e
    }, {
        paddingLeft: n = "0",
        paddingRight: i = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
    height: ({
        y: e
    }, {
        paddingTop: n = "0",
        paddingBottom: i = "0"
    }) => e.max - e.min - parseFloat(n) - parseFloat(i),
    top: (e, {
        top: n
    }) => parseFloat(n),
    left: (e, {
        left: n
    }) => parseFloat(n),
    bottom: ({
        y: e
    }, {
        top: n
    }) => parseFloat(n) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: n
    }) => parseFloat(n) + (e.max - e.min),
    x: (e, {
        transform: n
    }) => gh(n, "x"),
    y: (e, {
        transform: n
    }) => gh(n, "y")
};
ai.translateX = ai.x;
ai.translateY = ai.y;
const Fi = new Set;
let vh = !1,
    xh = !1,
    bh = !1;

function Kw() {
    if (xh) {
        const e = Array.from(Fi).filter(r => r.needsMeasurement),
            n = new Set(e.map(r => r.element)),
            i = new Map;
        n.forEach(r => {
            const l = JO(r);
            l.length && (i.set(r, l), r.render())
        }), e.forEach(r => r.measureInitialState()), n.forEach(r => {
            r.render();
            const l = i.get(r);
            l && l.forEach(([c, f]) => {
                r.getValue(c)?.set(f)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    xh = !1, vh = !1, Fi.forEach(e => e.complete(bh)), Fi.clear()
}

function Qw() {
    Fi.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (xh = !0)
    })
}

function ej() {
    bh = !0, Qw(), Kw(), bh = !1
}
class Sm {
    constructor(n, i, r, l, c, f = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = i, this.name = r, this.motionValue = l, this.element = c, this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Fi.add(this), vh || (vh = !0, st.read(Qw), st.resolveKeyframes(Kw))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: i,
            element: r,
            motionValue: l
        } = this;
        if (n[0] === null) {
            const c = l?.get(),
                f = n[n.length - 1];
            if (c !== void 0) n[0] = c;
            else if (r && i) {
                const d = r.readValue(i, f);
                d != null && (n[0] = d)
            }
            n[0] === void 0 && (n[0] = f), l && c === void 0 && l.set(n[0])
        }
        ZO(n)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(n = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), Fi.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Fi.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const tj = e => e.startsWith("--");

function Iw(e, n, i) {
    tj(n) ? e.style.setProperty(n, i) : e.style[n] = i
}
const nj = {};

function $w(e, n) {
    const i = Tw(e);
    return () => nj[n] ?? i()
}
const sj = $w(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    Ww = $w(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    ao = ([e, n, i, r]) => `cubic-bezier(${e}, ${n}, ${i}, ${r})`,
    Zx = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ao([0, .65, .55, 1]),
        circOut: ao([.55, 0, 1, .45]),
        backIn: ao([.31, .01, .66, -.59]),
        backOut: ao([.33, 1.53, .69, .99])
    };

function Jw(e, n) {
    if (e) return typeof e == "function" ? Ww() ? Gw(e, n) : "ease-out" : kw(e) ? ao(e) : Array.isArray(e) ? e.map(i => Jw(i, n) || Zx.easeOut) : Zx[e]
}

function ij(e, n, i, {
    delay: r = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: d = "easeOut",
    times: m
} = {}, p = void 0) {
    const y = {
        [n]: i
    };
    m && (y.offset = m);
    const x = Jw(d, l);
    Array.isArray(x) && (y.easing = x);
    const b = {
        delay: r,
        duration: l,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return p && (b.pseudoElement = p), e.animate(y, b)
}

function eS(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function aj({
    type: e,
    ...n
}) {
    return eS(e) && Ww() ? e.applyToOptions(n) : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = "easeOut"), n)
}
class tS extends bm {
    constructor(n) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !n) return;
        const {
            element: i,
            name: r,
            keyframes: l,
            pseudoElement: c,
            allowFlatten: f = !1,
            finalKeyframe: d,
            onComplete: m
        } = n;
        this.isPseudoElement = !!c, this.allowFlatten = f, this.options = n, um(typeof n.type != "string");
        const p = aj(n);
        this.animation = ij(i, r, l, p, c), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !c) {
                const y = xm(l, this.options, d, this.speed);
                this.updateMotionValue && this.updateMotionValue(y), Iw(i, r, y), this.animation.cancel()
            }
            m?.(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: n
        } = this;
        n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const n = this.options?.element;
        !this.isPseudoElement && n?.isConnected && this.animation.commitStyles?.()
    }
    get duration() {
        const n = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Cn(Number(n))
    }
    get iterationDuration() {
        const {
            delay: n = 0
        } = this.options || {};
        return this.duration + Cn(n)
    }
    get time() {
        return Cn(Number(this.animation.currentTime) || 0)
    }
    set time(n) {
        const i = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Pn(n), i && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(n) {
        n < 0 && (this.finishedTime = null), this.animation.playbackRate = n
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(n) {
        this.manualStartTime = this.animation.startTime = n
    }
    attachTimeline({
        timeline: n,
        rangeStart: i,
        rangeEnd: r,
        observe: l
    }) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, n && sj() ? (this.animation.timeline = n, i && (this.animation.rangeStart = i), r && (this.animation.rangeEnd = r), Rn) : l(this)
    }
}
const nS = {
    anticipate: Ow,
    backInOut: Nw,
    circInOut: Dw
};

function rj(e) {
    return e in nS
}

function oj(e) {
    typeof e.ease == "string" && rj(e.ease) && (e.ease = nS[e.ease])
}
const Vd = 10;
class lj extends tS {
    constructor(n) {
        oj(n), Xw(n), super(n), n.startTime !== void 0 && (this.startTime = n.startTime), this.options = n
    }
    updateMotionValue(n) {
        const {
            motionValue: i,
            onUpdate: r,
            onComplete: l,
            element: c,
            ...f
        } = this.options;
        if (!i) return;
        if (n !== void 0) {
            i.set(n);
            return
        }
        const d = new wm({
                ...f,
                autoplay: !1
            }),
            m = Math.max(Vd, Zt.now() - this.startTime),
            p = ss(0, Vd, m - Vd),
            y = d.sample(m).value,
            {
                name: x
            } = this.options;
        c && x && Iw(c, x, y), i.setWithVelocity(d.sample(Math.max(0, m - p)).value, y, p), d.stop()
    }
}
const Xx = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Un.test(e) || e === "0") && !e.startsWith("url("));

function cj(e) {
    const n = e[0];
    if (e.length === 1) return !0;
    for (let i = 0; i < e.length; i++)
        if (e[i] !== n) return !0
}

function uj(e, n, i, r) {
    const l = e[0];
    if (l === null) return !1;
    if (n === "display" || n === "visibility") return !0;
    const c = e[e.length - 1],
        f = Xx(l, n),
        d = Xx(c, n);
    return !f || !d ? !1 : cj(e) || (i === "spring" || eS(i)) && r
}

function wh(e) {
    e.duration = 0, e.type = "keyframes"
}
const fj = new Set(["opacity", "clipPath", "filter", "transform"]),
    dj = Tw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function hj(e) {
    const {
        motionValue: n,
        name: i,
        repeatDelay: r,
        repeatType: l,
        damping: c,
        type: f
    } = e;
    if (!(n?.owner?.current instanceof HTMLElement)) return !1;
    const {
        onUpdate: m,
        transformTemplate: p
    } = n.owner.getProps();
    return dj() && i && fj.has(i) && (i !== "transform" || !p) && !m && !r && l !== "mirror" && c !== 0 && f !== "inertia"
}
const mj = 40;
class pj extends bm {
    constructor({
        autoplay: n = !0,
        delay: i = 0,
        type: r = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: d,
        name: m,
        motionValue: p,
        element: y,
        ...x
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
        }, this.createdAt = Zt.now();
        const b = {
                autoplay: n,
                delay: i,
                type: r,
                repeat: l,
                repeatDelay: c,
                repeatType: f,
                name: m,
                motionValue: p,
                element: y,
                ...x
            },
            S = y?.KeyframeResolver || Sm;
        this.keyframeResolver = new S(d, (E, _, R) => this.onKeyframesResolved(E, _, b, !R), m, p, y), this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(n, i, r, l) {
        this.keyframeResolver = void 0;
        const {
            name: c,
            type: f,
            velocity: d,
            delay: m,
            isHandoff: p,
            onUpdate: y
        } = r;
        this.resolvedAt = Zt.now(), uj(n, c, f, d) || ((Es.instantAnimations || !m) && y?.(xm(n, r, i)), n[0] = n[n.length - 1], wh(r), r.repeat = 0);
        const b = {
                startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > mj ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: i,
                ...r,
                keyframes: n
            },
            S = !p && hj(b),
            E = b.motionValue?.owner?.current,
            _ = S ? new lj({
                ...b,
                element: E
            }) : new wm(b);
        _.finished.then(() => {
            this.notifyFinished()
        }).catch(Rn), this.pendingTimeline && (this.stopTimeline = _.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = _
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(n, i) {
        return this.finished.finally(n).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(), ej()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(n) {
        this.animation.time = n
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(n) {
        this.animation.speed = n
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(n) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
    }
}

function sS(e, n, i, r = 0, l = 1) {
    const c = Array.from(e).sort((p, y) => p.sortNodePosition(y)).indexOf(n),
        f = e.size,
        d = (f - 1) * r;
    return typeof i == "function" ? i(c, f) : l === 1 ? c * r : d - c * r
}
const yj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function gj(e) {
    const n = yj.exec(e);
    if (!n) return [, ];
    const [, i, r, l] = n;
    return [`--${i ?? r}`, l]
}

function iS(e, n, i = 1) {
    const [r, l] = gj(e);
    if (!r) return;
    const c = window.getComputedStyle(n).getPropertyValue(r);
    if (c) {
        const f = c.trim();
        return bw(f) ? parseFloat(f) : f
    }
    return mm(l) ? iS(l, n, i + 1) : l
}
const vj = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    xj = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    bj = {
        type: "keyframes",
        duration: .8
    },
    wj = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Sj = (e, {
        keyframes: n
    }) => n.length > 2 ? bj : nr.has(e) ? e.startsWith("scale") ? xj(n[1]) : vj : wj,
    Tj = e => e !== null;

function Aj(e, {
    repeat: n,
    repeatType: i = "loop"
}, r) {
    const l = e.filter(Tj),
        c = n && i !== "loop" && n % 2 === 1 ? 0 : l.length - 1;
    return l[c]
}

function aS(e, n) {
    if (e?.inherit && n) {
        const {
            inherit: i,
            ...r
        } = e;
        return {
            ...n,
            ...r
        }
    }
    return e
}

function Tm(e, n) {
    const i = e?.[n] ?? e?.default ?? e;
    return i !== e ? aS(i, e) : i
}

function Ej({
    when: e,
    delay: n,
    delayChildren: i,
    staggerChildren: r,
    staggerDirection: l,
    repeat: c,
    repeatType: f,
    repeatDelay: d,
    from: m,
    elapsed: p,
    ...y
}) {
    return !!Object.keys(y).length
}
const Am = (e, n, i, r = {}, l, c) => f => {
    const d = Tm(r, e) || {},
        m = d.delay || r.delay || 0;
    let {
        elapsed: p = 0
    } = r;
    p = p - Pn(m);
    const y = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: n.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: b => {
            n.set(b), d.onUpdate && d.onUpdate(b)
        },
        onComplete: () => {
            f(), d.onComplete && d.onComplete()
        },
        name: e,
        motionValue: n,
        element: c ? void 0 : l
    };
    Ej(d) || Object.assign(y, Sj(e, y)), y.duration && (y.duration = Pn(y.duration)), y.repeatDelay && (y.repeatDelay = Pn(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (wh(y), y.delay === 0 && (x = !0)), (Es.instantAnimations || Es.skipAnimations || l?.shouldSkipAnimations) && (x = !0, wh(y), y.delay = 0), y.allowFlatten = !d.type && !d.ease, x && !c && n.get() !== void 0) {
        const b = Aj(y.keyframes, d);
        if (b !== void 0) {
            st.update(() => {
                y.onUpdate(b), y.onComplete()
            });
            return
        }
    }
    return d.isSync ? new wm(y) : new pj(y)
};

function Kx(e) {
    const n = [{}, {}];
    return e?.values.forEach((i, r) => {
        n[0][r] = i.get(), n[1][r] = i.getVelocity()
    }), n
}

function Em(e, n, i, r) {
    if (typeof n == "function") {
        const [l, c] = Kx(r);
        n = n(i !== void 0 ? i : e.custom, l, c)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function") {
        const [l, c] = Kx(r);
        n = n(i !== void 0 ? i : e.custom, l, c)
    }
    return n
}

function Ya(e, n, i) {
    const r = e.getProps();
    return Em(r, n, i !== void 0 ? i : r.custom, e)
}
const rS = new Set(["width", "height", "top", "left", "right", "bottom", ...tr]),
    Qx = 30,
    _j = e => !isNaN(parseFloat(e));
class Cj {
    constructor(n, i = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            const l = Zt.now();
            if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                for (const c of this.dependents) c.dirty()
        }, this.hasAnimated = !1, this.setCurrent(n), this.owner = i.owner
    }
    setCurrent(n) {
        this.current = n, this.updatedAt = Zt.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = _j(this.current))
    }
    setPrevFrameValue(n = this.current) {
        this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, i) {
        this.events[n] || (this.events[n] = new fm);
        const r = this.events[n].add(i);
        return n === "change" ? () => {
            r(), st.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const n in this.events) this.events[n].clear()
    }
    attach(n, i) {
        this.passiveEffect = n, this.stopPassiveEffect = i
    }
    set(n) {
        this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n)
    }
    setWithVelocity(n, i, r) {
        this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(n, i = !0) {
        this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(n) {
        this.dependents || (this.dependents = new Set), this.dependents.add(n)
    }
    removeDependent(n) {
        this.dependents && this.dependents.delete(n)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = Zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > Qx) return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, Qx);
        return Aw(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(n) {
        return this.stop(), new Promise(i => {
            this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Xa(e, n) {
    return new Cj(e, n)
}
const Sh = e => Array.isArray(e);

function Rj(e, n, i) {
    e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, Xa(i))
}

function Nj(e) {
    return Sh(e) ? e[e.length - 1] || 0 : e
}

function Oj(e, n) {
    const i = Ya(e, n);
    let {
        transitionEnd: r = {},
        transition: l = {},
        ...c
    } = i || {};
    c = {
        ...c,
        ...r
    };
    for (const f in c) {
        const d = Nj(c[f]);
        Rj(e, f, d)
    }
}
const Ut = e => !!(e && e.getVelocity);

function jj(e) {
    return !!(Ut(e) && e.add)
}

function Th(e, n) {
    const i = e.getValue("willChange");
    if (jj(i)) return i.add(n);
    if (!i && Es.WillChange) {
        const r = new Es.WillChange("auto");
        e.addValue("willChange", r), r.add(n)
    }
}

function _m(e) {
    return e.replace(/([A-Z])/g, n => `-${n.toLowerCase()}`)
}
const Dj = "framerAppearId",
    oS = "data-" + _m(Dj);

function lS(e) {
    return e.props[oS]
}

function Mj({
    protectedKeys: e,
    needsAnimating: n
}, i) {
    const r = e.hasOwnProperty(i) && n[i] !== !0;
    return n[i] = !1, r
}

function cS(e, n, {
    delay: i = 0,
    transitionOverride: r,
    type: l
} = {}) {
    let {
        transition: c,
        transitionEnd: f,
        ...d
    } = n;
    const m = e.getDefaultTransition();
    c = c ? aS(c, m) : m;
    const p = c?.reduceMotion;
    r && (c = r);
    const y = [],
        x = l && e.animationState && e.animationState.getState()[l];
    for (const b in d) {
        const S = e.getValue(b, e.latestValues[b] ?? null),
            E = d[b];
        if (E === void 0 || x && Mj(x, b)) continue;
        const _ = {
                delay: i,
                ...Tm(c || {}, b)
            },
            R = S.get();
        if (R !== void 0 && !S.isAnimating && !Array.isArray(E) && E === R && !_.velocity) continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const H = lS(e);
            if (H) {
                const z = window.MotionHandoffAnimation(H, b, st);
                z !== null && (_.startTime = z, D = !0)
            }
        }
        Th(e, b);
        const j = p ?? e.shouldReduceMotion;
        S.start(Am(b, S, E, j && rS.has(b) ? {
            type: !1
        } : _, e, D));
        const M = S.animation;
        M && y.push(M)
    }
    if (f) {
        const b = () => st.update(() => {
            f && Oj(e, f)
        });
        y.length ? Promise.all(y).then(b) : b()
    }
    return y
}

function Ah(e, n, i = {}) {
    const r = Ya(e, n, i.type === "exit" ? e.presenceContext?.custom : void 0);
    let {
        transition: l = e.getDefaultTransition() || {}
    } = r || {};
    i.transitionOverride && (l = i.transitionOverride);
    const c = r ? () => Promise.all(cS(e, r, i)) : () => Promise.resolve(),
        f = e.variantChildren && e.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: p = 0,
                staggerChildren: y,
                staggerDirection: x
            } = l;
            return kj(e, n, m, p, y, x, i)
        } : () => Promise.resolve(),
        {
            when: d
        } = l;
    if (d) {
        const [m, p] = d === "beforeChildren" ? [c, f] : [f, c];
        return m().then(() => p())
    } else return Promise.all([c(), f(i.delay)])
}

function kj(e, n, i = 0, r = 0, l = 0, c = 1, f) {
    const d = [];
    for (const m of e.variantChildren) m.notify("AnimationStart", n), d.push(Ah(m, n, {
        ...f,
        delay: i + (typeof r == "function" ? 0 : r) + sS(e.variantChildren, m, r, l, c)
    }).then(() => m.notify("AnimationComplete", n)));
    return Promise.all(d)
}

function Vj(e, n, i = {}) {
    e.notify("AnimationStart", n);
    let r;
    if (Array.isArray(n)) {
        const l = n.map(c => Ah(e, c, i));
        r = Promise.all(l)
    } else if (typeof n == "string") r = Ah(e, n, i);
    else {
        const l = typeof n == "function" ? Ya(e, n, i.custom) : n;
        r = Promise.all(cS(e, l, i))
    }
    return r.then(() => {
        e.notify("AnimationComplete", n)
    })
}
const zj = {
        test: e => e === "auto",
        parse: e => e
    },
    uS = e => n => n.test(e),
    fS = [er, ge, ts, ni, dO, fO, zj],
    Ix = e => fS.find(uS(e));

function Lj(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sw(e) : !0
}
const Bj = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Pj(e) {
    const [n, i] = e.slice(0, -1).split("(");
    if (n === "drop-shadow") return e;
    const [r] = i.match(pm) || [];
    if (!r) return e;
    const l = i.replace(r, "");
    let c = Bj.has(n) ? 1 : 0;
    return r !== i && (c *= 100), n + "(" + c + l + ")"
}
const Uj = /\b([a-z-]*)\(.*?\)/gu,
    Eh = {
        ...Un,
        getAnimatableNone: e => {
            const n = e.match(Uj);
            return n ? n.map(Pj).join(" ") : e
        }
    },
    _h = {
        ...Un,
        getAnimatableNone: e => {
            const n = Un.parse(e);
            return Un.createTransformer(e)(n.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
                ...r,
                alpha: 1
            } : r))
        }
    },
    $x = {
        ...er,
        transform: Math.round
    },
    Hj = {
        rotate: ni,
        rotateX: ni,
        rotateY: ni,
        rotateZ: ni,
        scale: ec,
        scaleX: ec,
        scaleY: ec,
        scaleZ: ec,
        skew: ni,
        skewX: ni,
        skewY: ni,
        distance: ge,
        translateX: ge,
        translateY: ge,
        translateZ: ge,
        x: ge,
        y: ge,
        z: ge,
        perspective: ge,
        transformPerspective: ge,
        opacity: xo,
        originX: Lx,
        originY: Lx,
        originZ: ge
    },
    Cm = {
        borderWidth: ge,
        borderTopWidth: ge,
        borderRightWidth: ge,
        borderBottomWidth: ge,
        borderLeftWidth: ge,
        borderRadius: ge,
        borderTopLeftRadius: ge,
        borderTopRightRadius: ge,
        borderBottomRightRadius: ge,
        borderBottomLeftRadius: ge,
        width: ge,
        maxWidth: ge,
        height: ge,
        maxHeight: ge,
        top: ge,
        right: ge,
        bottom: ge,
        left: ge,
        inset: ge,
        insetBlock: ge,
        insetBlockStart: ge,
        insetBlockEnd: ge,
        insetInline: ge,
        insetInlineStart: ge,
        insetInlineEnd: ge,
        padding: ge,
        paddingTop: ge,
        paddingRight: ge,
        paddingBottom: ge,
        paddingLeft: ge,
        paddingBlock: ge,
        paddingBlockStart: ge,
        paddingBlockEnd: ge,
        paddingInline: ge,
        paddingInlineStart: ge,
        paddingInlineEnd: ge,
        margin: ge,
        marginTop: ge,
        marginRight: ge,
        marginBottom: ge,
        marginLeft: ge,
        marginBlock: ge,
        marginBlockStart: ge,
        marginBlockEnd: ge,
        marginInline: ge,
        marginInlineStart: ge,
        marginInlineEnd: ge,
        fontSize: ge,
        backgroundPositionX: ge,
        backgroundPositionY: ge,
        ...Hj,
        zIndex: $x,
        fillOpacity: xo,
        strokeOpacity: xo,
        numOctaves: $x
    },
    qj = {
        ...Cm,
        color: vt,
        backgroundColor: vt,
        outlineColor: vt,
        fill: vt,
        stroke: vt,
        borderColor: vt,
        borderTopColor: vt,
        borderRightColor: vt,
        borderBottomColor: vt,
        borderLeftColor: vt,
        filter: Eh,
        WebkitFilter: Eh,
        mask: _h,
        WebkitMask: _h
    },
    dS = e => qj[e],
    Fj = new Set([Eh, _h]);

function hS(e, n) {
    let i = dS(e);
    return Fj.has(i) || (i = Un), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
}
const Yj = new Set(["auto", "none", "0"]);

function Gj(e, n, i) {
    let r = 0,
        l;
    for (; r < e.length && !l;) {
        const c = e[r];
        typeof c == "string" && !Yj.has(c) && bo(c).values.length && (l = e[r]), r++
    }
    if (l && i)
        for (const c of n) e[c] = hS(i, l)
}
class Zj extends Sm {
    constructor(n, i, r, l, c) {
        super(n, i, r, l, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: n,
            element: i,
            name: r
        } = this;
        if (!i || !i.current) return;
        super.readKeyframes();
        for (let y = 0; y < n.length; y++) {
            let x = n[y];
            if (typeof x == "string" && (x = x.trim(), mm(x))) {
                const b = iS(x, i.current);
                b !== void 0 && (n[y] = b), y === n.length - 1 && (this.finalKeyframe = x)
            }
        }
        if (this.resolveNoneKeyframes(), !rS.has(r) || n.length !== 2) return;
        const [l, c] = n, f = Ix(l), d = Ix(c), m = zx(l), p = zx(c);
        if (m !== p && ai[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== d)
            if (Gx(f) && Gx(d))
                for (let y = 0; y < n.length; y++) {
                    const x = n[y];
                    typeof x == "string" && (n[y] = parseFloat(x))
                } else ai[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: n,
            name: i
        } = this, r = [];
        for (let l = 0; l < n.length; l++)(n[l] === null || Lj(n[l])) && r.push(l);
        r.length && Gj(n, r, i)
    }
    measureInitialState() {
        const {
            element: n,
            unresolvedKeyframes: i,
            name: r
        } = this;
        if (!n || !n.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ai[r](n.measureViewportBox(), window.getComputedStyle(n.current)), i[0] = this.measuredOrigin;
        const l = i[i.length - 1];
        l !== void 0 && n.getValue(r, l).jump(l, !1)
    }
    measureEndState() {
        const {
            element: n,
            name: i,
            unresolvedKeyframes: r
        } = this;
        if (!n || !n.current) return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = r.length - 1,
            f = r[c];
        r[c] = ai[i](n.measureViewportBox(), window.getComputedStyle(n.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([d, m]) => {
            n.getValue(d).set(m)
        }), this.resolveNoneKeyframes()
    }
}
const Xj = new Set(["opacity", "clipPath", "filter", "transform"]);

function Rm(e, n, i) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const l = document.querySelectorAll(e);
        return l ? Array.from(l) : []
    }
    return Array.from(e).filter(r => r != null)
}
const mS = (e, n) => n && typeof e == "number" ? n.transform(e) : e;

function Kj(e) {
    return ww(e) && "offsetHeight" in e
}
const {
    schedule: Nm
} = Vw(queueMicrotask, !1), Vn = {
    x: !1,
    y: !1
};

function pS() {
    return Vn.x || Vn.y
}

function Qj(e) {
    return e === "x" || e === "y" ? Vn[e] ? null : (Vn[e] = !0, () => {
        Vn[e] = !1
    }) : Vn.x || Vn.y ? null : (Vn.x = Vn.y = !0, () => {
        Vn.x = Vn.y = !1
    })
}

function yS(e, n) {
    const i = Rm(e),
        r = new AbortController,
        l = {
            passive: !0,
            ...n,
            signal: r.signal
        };
    return [i, l, () => r.abort()]
}

function Ij(e) {
    return !(e.pointerType === "touch" || pS())
}

function $j(e, n, i = {}) {
    const [r, l, c] = yS(e, i);
    return r.forEach(f => {
        let d = !1,
            m = !1,
            p;
        const y = () => {
                f.removeEventListener("pointerleave", E)
            },
            x = R => {
                p && (p(R), p = void 0), y()
            },
            b = R => {
                d = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), m && (m = !1, x(R))
            },
            S = () => {
                d = !0, window.addEventListener("pointerup", b, l), window.addEventListener("pointercancel", b, l)
            },
            E = R => {
                if (R.pointerType !== "touch") {
                    if (d) {
                        m = !0;
                        return
                    }
                    x(R)
                }
            },
            _ = R => {
                if (!Ij(R)) return;
                m = !1;
                const D = n(f, R);
                typeof D == "function" && (p = D, f.addEventListener("pointerleave", E, l))
            };
        f.addEventListener("pointerenter", _, l), f.addEventListener("pointerdown", S, l)
    }), c
}
const gS = (e, n) => n ? e === n ? !0 : gS(e, n.parentElement) : !1,
    Om = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    Wj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Jj(e) {
    return Wj.has(e.tagName) || e.isContentEditable === !0
}
const eD = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function tD(e) {
    return eD.has(e.tagName) || e.isContentEditable === !0
}
const lc = new WeakSet;

function Wx(e) {
    return n => {
        n.key === "Enter" && e(n)
    }
}

function zd(e, n) {
    e.dispatchEvent(new PointerEvent("pointer" + n, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const nD = (e, n) => {
    const i = e.currentTarget;
    if (!i) return;
    const r = Wx(() => {
        if (lc.has(i)) return;
        zd(i, "down");
        const l = Wx(() => {
                zd(i, "up")
            }),
            c = () => zd(i, "cancel");
        i.addEventListener("keyup", l, n), i.addEventListener("blur", c, n)
    });
    i.addEventListener("keydown", r, n), i.addEventListener("blur", () => i.removeEventListener("keydown", r), n)
};

function Jx(e) {
    return Om(e) && !pS()
}
const e0 = new WeakSet;

function sD(e, n, i = {}) {
    const [r, l, c] = yS(e, i), f = d => {
        const m = d.currentTarget;
        if (!Jx(d) || e0.has(d)) return;
        lc.add(m), i.stopPropagation && e0.add(d);
        const p = n(m, d),
            y = (S, E) => {
                window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", b), lc.has(m) && lc.delete(m), Jx(S) && typeof p == "function" && p(S, {
                    success: E
                })
            },
            x = S => {
                y(S, m === window || m === document || i.useGlobalTarget || gS(m, S.target))
            },
            b = S => {
                y(S, !1)
            };
        window.addEventListener("pointerup", x, l), window.addEventListener("pointercancel", b, l)
    };
    return r.forEach(d => {
        (i.useGlobalTarget ? window : d).addEventListener("pointerdown", f, l), Kj(d) && (d.addEventListener("focus", p => nD(p, l)), !Jj(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0))
    }), c
}

function jm(e) {
    return ww(e) && "ownerSVGElement" in e
}
const cc = new WeakMap;
let uc;
const vS = (e, n, i) => (r, l) => l && l[0] ? l[0][e + "Size"] : jm(r) && "getBBox" in r ? r.getBBox()[n] : r[i],
    iD = vS("inline", "width", "offsetWidth"),
    aD = vS("block", "height", "offsetHeight");

function rD({
    target: e,
    borderBoxSize: n
}) {
    cc.get(e)?.forEach(i => {
        i(e, {
            get width() {
                return iD(e, n)
            },
            get height() {
                return aD(e, n)
            }
        })
    })
}

function oD(e) {
    e.forEach(rD)
}

function lD() {
    typeof ResizeObserver > "u" || (uc = new ResizeObserver(oD))
}

function cD(e, n) {
    uc || lD();
    const i = Rm(e);
    return i.forEach(r => {
        let l = cc.get(r);
        l || (l = new Set, cc.set(r, l)), l.add(n), uc?.observe(r)
    }), () => {
        i.forEach(r => {
            const l = cc.get(r);
            l?.delete(n), l?.size || uc?.unobserve(r)
        })
    }
}
const fc = new Set;
let Pa;

function uD() {
    Pa = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        fc.forEach(n => n(e))
    }, window.addEventListener("resize", Pa)
}

function fD(e) {
    return fc.add(e), Pa || uD(), () => {
        fc.delete(e), !fc.size && typeof Pa == "function" && (window.removeEventListener("resize", Pa), Pa = void 0)
    }
}

function t0(e, n) {
    return typeof e == "function" ? fD(e) : cD(e, n)
}

function dD(e) {
    return jm(e) && e.tagName === "svg"
}
const hD = [...fS, vt, Un],
    mD = e => hD.find(uS(e)),
    n0 = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Ua = () => ({
        x: n0(),
        y: n0()
    }),
    s0 = () => ({
        min: 0,
        max: 0
    }),
    Et = () => ({
        x: s0(),
        y: s0()
    }),
    pD = new WeakMap;

function Ic(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function wo(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Dm = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Mm = ["initial", ...Dm];

function $c(e) {
    return Ic(e.animate) || Mm.some(n => wo(e[n]))
}

function xS(e) {
    return !!($c(e) || e.variants)
}

function yD(e, n, i) {
    for (const r in n) {
        const l = n[r],
            c = i[r];
        if (Ut(l)) e.addValue(r, l);
        else if (Ut(c)) e.addValue(r, Xa(l, {
            owner: e
        }));
        else if (c !== l)
            if (e.hasValue(r)) {
                const f = e.getValue(r);
                f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l)
            } else {
                const f = e.getStaticValue(r);
                e.addValue(r, Xa(f !== void 0 ? f : l, {
                    owner: e
                }))
            }
    }
    for (const r in i) n[r] === void 0 && e.removeValue(r);
    return n
}
const Ch = {
        current: null
    },
    bS = {
        current: !1
    },
    gD = typeof window < "u";

function vD() {
    if (bS.current = !0, !!gD)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                n = () => Ch.current = e.matches;
            e.addEventListener("change", n), n()
        } else Ch.current = !1
}
const i0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Ec = {};

function wS(e) {
    Ec = e
}

function xD() {
    return Ec
}
class bD {
    scrapeMotionValuesFromProps(n, i, r) {
        return {}
    }
    constructor({
        parent: n,
        props: i,
        presenceContext: r,
        reducedMotionConfig: l,
        skipAnimations: c,
        blockInitialAnimation: f,
        visualState: d
    }, m = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Sm, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const S = Zt.now();
            this.renderScheduledAt < S && (this.renderScheduledAt = S, st.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: y
        } = d;
        this.latestValues = p, this.baseTarget = {
            ...p
        }, this.initialValues = i.initial ? {
            ...p
        } : {}, this.renderState = y, this.parent = n, this.props = i, this.presenceContext = r, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = c, this.options = m, this.blockInitialAnimation = !!f, this.isControllingVariants = $c(i), this.isVariantNode = xS(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(n && n.current);
        const {
            willChange: x,
            ...b
        } = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const S in b) {
            const E = b[S];
            p[S] !== void 0 && Ut(E) && E.set(p[S])
        }
    }
    mount(n) {
        if (this.hasBeenMounted)
            for (const i in this.initialValues) this.values.get(i)?.jump(this.initialValues[i]), this.latestValues[i] = this.initialValues[i];
        this.current = n, pD.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, r) => this.bindToMotionValue(r, i)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (bS.current || vD(), this.shouldReduceMotion = Ch.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(), hi(this.notifyUpdate), hi(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const i = this.features[n];
            i && (i.unmount(), i.isMounted = !1)
        }
        this.current = null
    }
    addChild(n) {
        this.children.add(n), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(n)
    }
    removeChild(n) {
        this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n)
    }
    bindToMotionValue(n, i) {
        if (this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)(), i.accelerate && Xj.has(n) && this.current instanceof HTMLElement) {
            const {
                factory: f,
                keyframes: d,
                times: m,
                ease: p,
                duration: y
            } = i.accelerate, x = new tS({
                element: this.current,
                name: n,
                keyframes: d,
                times: m,
                ease: p,
                duration: Pn(y)
            }), b = f(x);
            this.valueSubscriptions.set(n, () => {
                b(), x.cancel()
            });
            return
        }
        const r = nr.has(n);
        r && this.onBindTransform && this.onBindTransform();
        const l = i.on("change", f => {
            this.latestValues[n] = f, this.props.onUpdate && st.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let c;
        typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, n, i)), this.valueSubscriptions.set(n, () => {
            l(), c && c(), i.owner && i.stop()
        })
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in Ec) {
            const i = Ec[n];
            if (!i) continue;
            const {
                isEnabled: r,
                Feature: l
            } = i;
            if (!this.features[n] && l && r(this.props) && (this.features[n] = new l(this)), this.features[n]) {
                const c = this.features[n];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Et()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, i) {
        this.latestValues[n] = i
    }
    update(n, i) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
        for (let r = 0; r < i0.length; r++) {
            const l = i0[r];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
            const c = "on" + l,
                f = n[c];
            f && (this.propEventSubscriptions[l] = this.on(l, f))
        }
        this.prevMotionValues = yD(this, this.scrapeMotionValuesFromProps(n, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const i = this.getClosestVariantNode();
        if (i) return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n)
    }
    addValue(n, i) {
        const r = this.values.get(n);
        i !== r && (r && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), this.latestValues[n] = i.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const i = this.valueSubscriptions.get(n);
        i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, i) {
        if (this.props.values && this.props.values[n]) return this.props.values[n];
        let r = this.values.get(n);
        return r === void 0 && i !== void 0 && (r = Xa(i === null ? void 0 : i, {
            owner: this
        }), this.addValue(n, r)), r
    }
    readValue(n, i) {
        let r = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
        return r != null && (typeof r == "string" && (bw(r) || Sw(r)) ? r = parseFloat(r) : !mD(r) && Un.test(i) && (r = hS(n, i)), this.setBaseTarget(n, Ut(r) ? r.get() : r)), Ut(r) ? r.get() : r
    }
    setBaseTarget(n, i) {
        this.baseTarget[n] = i
    }
    getBaseTarget(n) {
        const {
            initial: i
        } = this.props;
        let r;
        if (typeof i == "string" || typeof i == "object") {
            const c = Em(this.props, i, this.presenceContext?.custom);
            c && (r = c[n])
        }
        if (i && r !== void 0) return r;
        const l = this.getBaseTargetFromProps(this.props, n);
        return l !== void 0 && !Ut(l) ? l : this.initialValues[n] !== void 0 && r === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, i) {
        return this.events[n] || (this.events[n] = new fm), this.events[n].add(i)
    }
    notify(n, ...i) {
        this.events[n] && this.events[n].notify(...i)
    }
    scheduleRenderMicrotask() {
        Nm.render(this.render)
    }
}
class SS extends bD {
    constructor() {
        super(...arguments), this.KeyframeResolver = Zj
    }
    sortInstanceNodePosition(n, i) {
        return n.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, i) {
        const r = n.style;
        return r ? r[i] : void 0
    }
    removeValueFromRenderState(n, {
        vars: i,
        style: r
    }) {
        delete i[n], delete r[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: n
        } = this.props;
        Ut(n) && (this.childSubscription = n.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }))
    }
}
class vi {
    constructor(n) {
        this.isMounted = !1, this.node = n
    }
    update() {}
}

function TS({
    top: e,
    left: n,
    right: i,
    bottom: r
}) {
    return {
        x: {
            min: n,
            max: i
        },
        y: {
            min: e,
            max: r
        }
    }
}

function wD({
    x: e,
    y: n
}) {
    return {
        top: n.min,
        right: e.max,
        bottom: n.max,
        left: e.min
    }
}

function SD(e, n) {
    if (!n) return e;
    const i = n({
            x: e.left,
            y: e.top
        }),
        r = n({
            x: e.right,
            y: e.bottom
        });
    return {
        top: i.y,
        left: i.x,
        bottom: r.y,
        right: r.x
    }
}

function Ld(e) {
    return e === void 0 || e === 1
}

function Rh({
    scale: e,
    scaleX: n,
    scaleY: i
}) {
    return !Ld(e) || !Ld(n) || !Ld(i)
}

function Pi(e) {
    return Rh(e) || AS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function AS(e) {
    return a0(e.x) || a0(e.y)
}

function a0(e) {
    return e && e !== "0%"
}

function _c(e, n, i) {
    const r = e - i,
        l = n * r;
    return i + l
}

function r0(e, n, i, r, l) {
    return l !== void 0 && (e = _c(e, l, r)), _c(e, i, r) + n
}

function Nh(e, n = 0, i = 1, r, l) {
    e.min = r0(e.min, n, i, r, l), e.max = r0(e.max, n, i, r, l)
}

function ES(e, {
    x: n,
    y: i
}) {
    Nh(e.x, n.translate, n.scale, n.originPoint), Nh(e.y, i.translate, i.scale, i.originPoint)
}
const o0 = .999999999999,
    l0 = 1.0000000000001;

function TD(e, n, i, r = !1) {
    const l = i.length;
    if (!l) return;
    n.x = n.y = 1;
    let c, f;
    for (let d = 0; d < l; d++) {
        c = i[d], f = c.projectionDelta;
        const {
            visualElement: m
        } = c.options;
        m && m.props.style && m.props.style.display === "contents" || (r && c.options.layoutScroll && c.scroll && c !== c.root && qa(e, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
        }), f && (n.x *= f.x.scale, n.y *= f.y.scale, ES(e, f)), r && Pi(c.latestValues) && qa(e, c.latestValues))
    }
    n.x < l0 && n.x > o0 && (n.x = 1), n.y < l0 && n.y > o0 && (n.y = 1)
}

function Ha(e, n) {
    e.min = e.min + n, e.max = e.max + n
}

function c0(e, n, i, r, l = .5) {
    const c = lt(e.min, e.max, l);
    Nh(e, n, i, c, r)
}

function u0(e, n) {
    return typeof e == "string" ? parseFloat(e) / 100 * (n.max - n.min) : e
}

function qa(e, n) {
    c0(e.x, u0(n.x, e.x), n.scaleX, n.scale, n.originX), c0(e.y, u0(n.y, e.y), n.scaleY, n.scale, n.originY)
}

function _S(e, n) {
    return TS(SD(e.getBoundingClientRect(), n))
}

function AD(e, n, i) {
    const r = _S(e, i),
        {
            scroll: l
        } = n;
    return l && (Ha(r.x, l.offset.x), Ha(r.y, l.offset.y)), r
}
const ED = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    _D = tr.length;

function CD(e, n, i) {
    let r = "",
        l = !0;
    for (let c = 0; c < _D; c++) {
        const f = tr[c],
            d = e[f];
        if (d === void 0) continue;
        let m = !0;
        if (typeof d == "number") m = d === (f.startsWith("scale") ? 1 : 0);
        else {
            const p = parseFloat(d);
            m = f.startsWith("scale") ? p === 1 : p === 0
        }
        if (!m || i) {
            const p = mS(d, Cm[f]);
            if (!m) {
                l = !1;
                const y = ED[f] || f;
                r += `${y}(${p}) `
            }
            i && (n[f] = p)
        }
    }
    return r = r.trim(), i ? r = i(n, l ? "" : r) : l && (r = "none"), r
}

function km(e, n, i) {
    const {
        style: r,
        vars: l,
        transformOrigin: c
    } = e;
    let f = !1,
        d = !1;
    for (const m in n) {
        const p = n[m];
        if (nr.has(m)) {
            f = !0;
            continue
        } else if (Lw(m)) {
            l[m] = p;
            continue
        } else {
            const y = mS(p, Cm[m]);
            m.startsWith("origin") ? (d = !0, c[m] = y) : r[m] = y
        }
    }
    if (n.transform || (f || i ? r.transform = CD(n, e.transform, i) : r.transform && (r.transform = "none")), d) {
        const {
            originX: m = "50%",
            originY: p = "50%",
            originZ: y = 0
        } = c;
        r.transformOrigin = `${m} ${p} ${y}`
    }
}

function CS(e, {
    style: n,
    vars: i
}, r, l) {
    const c = e.style;
    let f;
    for (f in n) c[f] = n[f];
    l?.applyProjectionStyles(c, r);
    for (f in i) c.setProperty(f, i[f])
}

function f0(e, n) {
    return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const so = {
        correct: (e, n) => {
            if (!n.target) return e;
            if (typeof e == "string")
                if (ge.test(e)) e = parseFloat(e);
                else return e;
            const i = f0(e, n.target.x),
                r = f0(e, n.target.y);
            return `${i}% ${r}%`
        }
    },
    RD = {
        correct: (e, {
            treeScale: n,
            projectionDelta: i
        }) => {
            const r = e,
                l = Un.parse(e);
            if (l.length > 5) return r;
            const c = Un.createTransformer(e),
                f = typeof l[0] != "number" ? 1 : 0,
                d = i.x.scale * n.x,
                m = i.y.scale * n.y;
            l[0 + f] /= d, l[1 + f] /= m;
            const p = lt(d, m, .5);
            return typeof l[2 + f] == "number" && (l[2 + f] /= p), typeof l[3 + f] == "number" && (l[3 + f] /= p), c(l)
        }
    },
    Oh = {
        borderRadius: {
            ...so,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: so,
        borderTopRightRadius: so,
        borderBottomLeftRadius: so,
        borderBottomRightRadius: so,
        boxShadow: RD
    };

function RS(e, {
    layout: n,
    layoutId: i
}) {
    return nr.has(e) || e.startsWith("origin") || (n || i !== void 0) && (!!Oh[e] || e === "opacity")
}

function Vm(e, n, i) {
    const r = e.style,
        l = n?.style,
        c = {};
    if (!r) return c;
    for (const f in r)(Ut(r[f]) || l && Ut(l[f]) || RS(f, e) || i?.getValue(f)?.liveStyle !== void 0) && (c[f] = r[f]);
    return c
}

function ND(e) {
    return window.getComputedStyle(e)
}
class OD extends SS {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = CS
    }
    readValueFromInstance(n, i) {
        if (nr.has(i)) return this.projection?.isProjecting ? yh(i) : QO(n, i);
        {
            const r = ND(n),
                l = (Lw(i) ? r.getPropertyValue(i) : r[i]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(n, {
        transformPagePoint: i
    }) {
        return _S(n, i)
    }
    build(n, i, r) {
        km(n, i, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, i, r) {
        return Vm(n, i, r)
    }
}
const jD = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    DD = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function MD(e, n, i = 1, r = 0, l = !0) {
    e.pathLength = 1;
    const c = l ? jD : DD;
    e[c.offset] = `${-r}`, e[c.array] = `${n} ${i}`
}
const kD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function NS(e, {
    attrX: n,
    attrY: i,
    attrScale: r,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...d
}, m, p, y) {
    if (km(e, d, p), m) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: x,
        style: b
    } = e;
    x.transform && (b.transform = x.transform, delete x.transform), (b.transform || x.transformOrigin) && (b.transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), b.transform && (b.transformBox = y?.transformBox ?? "fill-box", delete x.transformBox);
    for (const S of kD) x[S] !== void 0 && (b[S] = x[S], delete x[S]);
    n !== void 0 && (x.x = n), i !== void 0 && (x.y = i), r !== void 0 && (x.scale = r), l !== void 0 && MD(x, l, c, f, !1)
}
const OS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    jS = e => typeof e == "string" && e.toLowerCase() === "svg";

function VD(e, n, i, r) {
    CS(e, n, void 0, r);
    for (const l in n.attrs) e.setAttribute(OS.has(l) ? l : _m(l), n.attrs[l])
}

function DS(e, n, i) {
    const r = Vm(e, n, i);
    for (const l in e)
        if (Ut(e[l]) || Ut(n[l])) {
            const c = tr.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            r[c] = e[l]
        } return r
}
class zD extends SS {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Et
    }
    getBaseTargetFromProps(n, i) {
        return n[i]
    }
    readValueFromInstance(n, i) {
        if (nr.has(i)) {
            const r = dS(i);
            return r && r.default || 0
        }
        return i = OS.has(i) ? i : _m(i), n.getAttribute(i)
    }
    scrapeMotionValuesFromProps(n, i, r) {
        return DS(n, i, r)
    }
    build(n, i, r) {
        NS(n, i, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(n, i, r, l) {
        VD(n, i, r, l)
    }
    mount(n) {
        this.isSVGTag = jS(n.tagName), super.mount(n)
    }
}
const LD = Mm.length;

function MS(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const i = e.parent ? MS(e.parent) || {} : {};
        return e.props.initial !== void 0 && (i.initial = e.props.initial), i
    }
    const n = {};
    for (let i = 0; i < LD; i++) {
        const r = Mm[i],
            l = e.props[r];
        (wo(l) || l === !1) && (n[r] = l)
    }
    return n
}

function kS(e, n) {
    if (!Array.isArray(n)) return !1;
    const i = n.length;
    if (i !== e.length) return !1;
    for (let r = 0; r < i; r++)
        if (n[r] !== e[r]) return !1;
    return !0
}
const BD = [...Dm].reverse(),
    PD = Dm.length;

function UD(e) {
    return n => Promise.all(n.map(({
        animation: i,
        options: r
    }) => Vj(e, i, r)))
}

function HD(e) {
    let n = UD(e),
        i = d0(),
        r = !0,
        l = !1;
    const c = p => (y, x) => {
        const b = Ya(e, x, p === "exit" ? e.presenceContext?.custom : void 0);
        if (b) {
            const {
                transition: S,
                transitionEnd: E,
                ..._
            } = b;
            y = {
                ...y,
                ..._,
                ...E
            }
        }
        return y
    };

    function f(p) {
        n = p(e)
    }

    function d(p) {
        const {
            props: y
        } = e, x = MS(e.parent) || {}, b = [], S = new Set;
        let E = {},
            _ = 1 / 0;
        for (let D = 0; D < PD; D++) {
            const j = BD[D],
                M = i[j],
                H = y[j] !== void 0 ? y[j] : x[j],
                z = wo(H),
                I = j === p ? M.isActive : null;
            I === !1 && (_ = D);
            let W = H === x[j] && H !== y[j] && z;
            if (W && (r || l) && e.manuallyAnimateOnMount && (W = !1), M.protectedKeys = {
                    ...E
                }, !M.isActive && I === null || !H && !M.prevProp || Ic(H) || typeof H == "boolean") continue;
            if (j === "exit" && M.isActive && I !== !0) {
                M.prevResolvedValues && (E = {
                    ...E,
                    ...M.prevResolvedValues
                });
                continue
            }
            const F = qD(M.prevProp, H);
            let le = F || j === p && M.isActive && !W && z || D > _ && z,
                ve = !1;
            const Re = Array.isArray(H) ? H : [H];
            let ne = Re.reduce(c(j), {});
            I === !1 && (ne = {});
            const {
                prevResolvedValues: fe = {}
            } = M, ee = {
                ...fe,
                ...ne
            }, de = K => {
                le = !0, S.has(K) && (ve = !0, S.delete(K)), M.needsAnimating[K] = !0;
                const re = e.getValue(K);
                re && (re.liveStyle = !1)
            };
            for (const K in ee) {
                const re = ne[K],
                    T = fe[K];
                if (E.hasOwnProperty(K)) continue;
                let X = !1;
                Sh(re) && Sh(T) ? X = !kS(re, T) : X = re !== T, X ? re != null ? de(K) : S.add(K) : re !== void 0 && S.has(K) ? de(K) : M.protectedKeys[K] = !0
            }
            M.prevProp = H, M.prevResolvedValues = ne, M.isActive && (E = {
                ...E,
                ...ne
            }), (r || l) && e.blockInitialAnimation && (le = !1);
            const V = W && F;
            le && (!V || ve) && b.push(...Re.map(K => {
                const re = {
                    type: j
                };
                if (typeof K == "string" && (r || l) && !V && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: T
                    } = e, X = Ya(T, K);
                    if (T.enteringChildren && X) {
                        const {
                            delayChildren: ae
                        } = X.transition || {};
                        re.delay = sS(T.enteringChildren, e, ae)
                    }
                }
                return {
                    animation: K,
                    options: re
                }
            }))
        }
        if (S.size) {
            const D = {};
            if (typeof y.initial != "boolean") {
                const j = Ya(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                j && j.transition && (D.transition = j.transition)
            }
            S.forEach(j => {
                const M = e.getBaseTarget(j),
                    H = e.getValue(j);
                H && (H.liveStyle = !0), D[j] = M ?? null
            }), b.push({
                animation: D
            })
        }
        let R = !!b.length;
        return r && (y.initial === !1 || y.initial === y.animate) && !e.manuallyAnimateOnMount && (R = !1), r = !1, l = !1, R ? n(b) : Promise.resolve()
    }

    function m(p, y) {
        if (i[p].isActive === y) return Promise.resolve();
        e.variantChildren?.forEach(b => b.animationState?.setActive(p, y)), i[p].isActive = y;
        const x = d(p);
        for (const b in i) i[b].protectedKeys = {};
        return x
    }
    return {
        animateChanges: d,
        setActive: m,
        setAnimateFunction: f,
        getState: () => i,
        reset: () => {
            i = d0(), l = !0
        }
    }
}

function qD(e, n) {
    return typeof n == "string" ? n !== e : Array.isArray(n) ? !kS(n, e) : !1
}

function Bi(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function d0() {
    return {
        animate: Bi(!0),
        whileInView: Bi(),
        whileHover: Bi(),
        whileTap: Bi(),
        whileDrag: Bi(),
        whileFocus: Bi(),
        exit: Bi()
    }
}

function h0(e, n) {
    e.min = n.min, e.max = n.max
}

function kn(e, n) {
    h0(e.x, n.x), h0(e.y, n.y)
}

function m0(e, n) {
    e.translate = n.translate, e.scale = n.scale, e.originPoint = n.originPoint, e.origin = n.origin
}
const VS = 1e-4,
    FD = 1 - VS,
    YD = 1 + VS,
    zS = .01,
    GD = 0 - zS,
    ZD = 0 + zS;

function Xt(e) {
    return e.max - e.min
}

function XD(e, n, i) {
    return Math.abs(e - n) <= i
}

function p0(e, n, i, r = .5) {
    e.origin = r, e.originPoint = lt(n.min, n.max, e.origin), e.scale = Xt(i) / Xt(n), e.translate = lt(i.min, i.max, e.origin) - e.originPoint, (e.scale >= FD && e.scale <= YD || isNaN(e.scale)) && (e.scale = 1), (e.translate >= GD && e.translate <= ZD || isNaN(e.translate)) && (e.translate = 0)
}

function uo(e, n, i, r) {
    p0(e.x, n.x, i.x, r ? r.originX : void 0), p0(e.y, n.y, i.y, r ? r.originY : void 0)
}

function y0(e, n, i) {
    e.min = i.min + n.min, e.max = e.min + Xt(n)
}

function KD(e, n, i) {
    y0(e.x, n.x, i.x), y0(e.y, n.y, i.y)
}

function g0(e, n, i) {
    e.min = n.min - i.min, e.max = e.min + Xt(n)
}

function Cc(e, n, i) {
    g0(e.x, n.x, i.x), g0(e.y, n.y, i.y)
}

function v0(e, n, i, r, l) {
    return e -= n, e = _c(e, 1 / i, r), l !== void 0 && (e = _c(e, 1 / l, r)), e
}

function QD(e, n = 0, i = 1, r = .5, l, c = e, f = e) {
    if (ts.test(n) && (n = parseFloat(n), n = lt(f.min, f.max, n / 100) - f.min), typeof n != "number") return;
    let d = lt(c.min, c.max, r);
    e === c && (d -= n), e.min = v0(e.min, n, i, d, l), e.max = v0(e.max, n, i, d, l)
}

function x0(e, n, [i, r, l], c, f) {
    QD(e, n[i], n[r], n[l], n.scale, c, f)
}
const ID = ["x", "scaleX", "originX"],
    $D = ["y", "scaleY", "originY"];

function b0(e, n, i, r) {
    x0(e.x, n, ID, i ? i.x : void 0, r ? r.x : void 0), x0(e.y, n, $D, i ? i.y : void 0, r ? r.y : void 0)
}

function w0(e) {
    return e.translate === 0 && e.scale === 1
}

function LS(e) {
    return w0(e.x) && w0(e.y)
}

function S0(e, n) {
    return e.min === n.min && e.max === n.max
}

function WD(e, n) {
    return S0(e.x, n.x) && S0(e.y, n.y)
}

function T0(e, n) {
    return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}

function BS(e, n) {
    return T0(e.x, n.x) && T0(e.y, n.y)
}

function A0(e) {
    return Xt(e.x) / Xt(e.y)
}

function E0(e, n) {
    return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}

function $n(e) {
    return [e("x"), e("y")]
}

function JD(e, n, i) {
    let r = "";
    const l = e.x.translate / n.x,
        c = e.y.translate / n.y,
        f = i?.z || 0;
    if ((l || c || f) && (r = `translate3d(${l}px, ${c}px, ${f}px) `), (n.x !== 1 || n.y !== 1) && (r += `scale(${1 / n.x}, ${1 / n.y}) `), i) {
        const {
            transformPerspective: p,
            rotate: y,
            rotateX: x,
            rotateY: b,
            skewX: S,
            skewY: E
        } = i;
        p && (r = `perspective(${p}px) ${r}`), y && (r += `rotate(${y}deg) `), x && (r += `rotateX(${x}deg) `), b && (r += `rotateY(${b}deg) `), S && (r += `skewX(${S}deg) `), E && (r += `skewY(${E}deg) `)
    }
    const d = e.x.scale * n.x,
        m = e.y.scale * n.y;
    return (d !== 1 || m !== 1) && (r += `scale(${d}, ${m})`), r || "none"
}
const PS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    eM = PS.length,
    _0 = e => typeof e == "string" ? parseFloat(e) : e,
    C0 = e => typeof e == "number" || ge.test(e);

function tM(e, n, i, r, l, c) {
    l ? (e.opacity = lt(0, i.opacity ?? 1, nM(r)), e.opacityExit = lt(n.opacity ?? 1, 0, sM(r))) : c && (e.opacity = lt(n.opacity ?? 1, i.opacity ?? 1, r));
    for (let f = 0; f < eM; f++) {
        const d = `border${PS[f]}Radius`;
        let m = R0(n, d),
            p = R0(i, d);
        if (m === void 0 && p === void 0) continue;
        m || (m = 0), p || (p = 0), m === 0 || p === 0 || C0(m) === C0(p) ? (e[d] = Math.max(lt(_0(m), _0(p), r), 0), (ts.test(p) || ts.test(m)) && (e[d] += "%")) : e[d] = p
    }(n.rotate || i.rotate) && (e.rotate = lt(n.rotate || 0, i.rotate || 0, r))
}

function R0(e, n) {
    return e[n] !== void 0 ? e[n] : e.borderRadius
}
const nM = US(0, .5, jw),
    sM = US(.5, .95, Rn);

function US(e, n, i) {
    return r => r < e ? 0 : r > n ? 1 : i(vo(e, n, r))
}

function iM(e, n, i) {
    const r = Ut(e) ? e : Xa(e);
    return r.start(Am("", r, n, i)), r.animation
}

function So(e, n, i, r = {
    passive: !0
}) {
    return e.addEventListener(n, i, r), () => e.removeEventListener(n, i)
}
const aM = (e, n) => e.depth - n.depth;
class rM {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(n) {
        cm(this.children, n), this.isDirty = !0
    }
    remove(n) {
        wc(this.children, n), this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(aM), this.isDirty = !1, this.children.forEach(n)
    }
}

function oM(e, n) {
    const i = Zt.now(),
        r = ({
            timestamp: l
        }) => {
            const c = l - i;
            c >= n && (hi(r), e(c - n))
        };
    return st.setup(r, !0), () => hi(r)
}

function dc(e) {
    return Ut(e) ? e.get() : e
}
class lM {
    constructor() {
        this.members = []
    }
    add(n) {
        cm(this.members, n);
        for (let i = this.members.length - 1; i >= 0; i--) {
            const r = this.members[i];
            if (r === n || r === this.lead || r === this.prevLead) continue;
            const l = r.instance;
            (!l || l.isConnected === !1) && !r.snapshot && (wc(this.members, r), r.unmount())
        }
        n.scheduleRender()
    }
    remove(n) {
        if (wc(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(n) {
        for (let i = this.members.indexOf(n) - 1; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1 && r.instance?.isConnected !== !1) return this.promote(r), !0
        }
        return !1
    }
    promote(n, i) {
        const r = this.lead;
        if (n !== r && (this.prevLead = r, this.lead = n, n.show(), r)) {
            r.updateSnapshot(), n.scheduleRender();
            const {
                layoutDependency: l
            } = r.options, {
                layoutDependency: c
            } = n.options;
            (l === void 0 || l !== c) && (n.resumeFrom = r, i && (r.preserveOpacity = !0), r.snapshot && (n.snapshot = r.snapshot, n.snapshot.latestValues = r.animationValues || r.latestValues), n.root?.isUpdating && (n.isLayoutDirty = !0)), n.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            n.options.onExitComplete?.(), n.resumingFrom?.options.onExitComplete?.()
        })
    }
    scheduleRender() {
        this.members.forEach(n => n.instance && n.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0)
    }
}
const hc = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    Bd = ["", "X", "Y", "Z"],
    cM = 1e3;
let uM = 0;

function Pd(e, n, i, r) {
    const {
        latestValues: l
    } = n;
    l[e] && (i[e] = l[e], n.setStaticValue(e, 0), r && (r[e] = 0))
}

function HS(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: n
    } = e.options;
    if (!n) return;
    const i = lS(n);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {
            layout: l,
            layoutId: c
        } = e.options;
        window.MotionCancelOptimisedAnimation(i, "transform", st, !(l || c))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && HS(r)
}

function qS({
    attachResizeListener: e,
    defaultParent: n,
    measureScroll: i,
    checkIsScrollRoot: r,
    resetTransform: l
}) {
    return class {
        constructor(f = {}, d = n?.()) {
            this.id = uM++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(hM), this.nodes.forEach(gM), this.nodes.forEach(vM), this.nodes.forEach(mM)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++) this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rM)
        }
        addEventListener(f, d) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new fm), this.eventHandlers.get(f).add(d)
        }
        notifyListeners(f, ...d) {
            const m = this.eventHandlers.get(f);
            m && m.notify(...d)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance) return;
            this.isSVG = jm(f) && !dD(f), this.instance = f;
            const {
                layoutId: d,
                layout: m,
                visualElement: p
            } = this.options;
            if (p && !p.current && p.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || d) && (this.isLayoutDirty = !0), e) {
                let y, x = 0;
                const b = () => this.root.updateBlockedByResize = !1;
                st.read(() => {
                    x = window.innerWidth
                }), e(f, () => {
                    const S = window.innerWidth;
                    S !== x && (x = S, this.root.updateBlockedByResize = !0, y && y(), y = oM(b, 250), hc.hasAnimatedSinceResize && (hc.hasAnimatedSinceResize = !1, this.nodes.forEach(j0)))
                })
            }
            d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && p && (d || m) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: x,
                hasRelativeLayoutChanged: b,
                layout: S
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || p.getDefaultTransition() || TM,
                    {
                        onLayoutAnimationStart: _,
                        onLayoutAnimationComplete: R
                    } = p.getProps(),
                    D = !this.targetLayout || !BS(this.targetLayout, S),
                    j = !x && b;
                if (this.options.layoutRoot || this.resumeFrom || j || x && (D || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const M = {
                        ...Tm(E, "layout"),
                        onPlay: _,
                        onComplete: R
                    };
                    (p.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0, M.type = !1), this.startAnimation(M), this.setAnimationOrigin(y, j)
                } else x || j0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = S
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), hi(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(xM), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && HS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const x = this.path[y];
                x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
            }
            const {
                layoutId: d,
                layout: m
            } = this.options;
            if (d === void 0 && !m) return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(N0);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(O0);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(yM), this.nodes.forEach(fM), this.nodes.forEach(dM)) : this.nodes.forEach(O0), this.clearAllSnapshots();
            const d = Zt.now();
            zt.delta = ss(0, 1e3 / 60, d - zt.timestamp), zt.timestamp = d, zt.isProcessing = !0, Od.update.process(zt), Od.preRender.process(zt), Od.render.process(zt), zt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Nm.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(pM), this.sharedNodes.forEach(bM)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, st.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            st.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Xt(this.snapshot.measuredBox.x) && !Xt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = Et(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: d
            } = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (d = !1), d && this.instance) {
                const m = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: m,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!l) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                d = this.projectionDelta && !LS(this.projectionDelta),
                m = this.getTransformTemplate(),
                p = m ? m(this.latestValues, "") : void 0,
                y = p !== this.prevTransformTemplateValue;
            f && this.instance && (d || Pi(this.latestValues) || y) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const d = this.measurePageBox();
            let m = this.removeElementScroll(d);
            return f && (m = this.removeTransform(m)), AM(m), {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return Et();
            const d = f.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(EM))) {
                const {
                    scroll: p
                } = this.root;
                p && (Ha(d.x, p.offset.x), Ha(d.y, p.offset.y))
            }
            return d
        }
        removeElementScroll(f) {
            const d = Et();
            if (kn(d, f), this.scroll?.wasRoot) return d;
            for (let m = 0; m < this.path.length; m++) {
                const p = this.path[m],
                    {
                        scroll: y,
                        options: x
                    } = p;
                p !== this.root && y && x.layoutScroll && (y.wasRoot && kn(d, f), Ha(d.x, y.offset.x), Ha(d.y, y.offset.y))
            }
            return d
        }
        applyTransform(f, d = !1) {
            const m = Et();
            kn(m, f);
            for (let p = 0; p < this.path.length; p++) {
                const y = this.path[p];
                !d && y.options.layoutScroll && y.scroll && y !== y.root && qa(m, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }), Pi(y.latestValues) && qa(m, y.latestValues)
            }
            return Pi(this.latestValues) && qa(m, this.latestValues), m
        }
        removeTransform(f) {
            const d = Et();
            kn(d, f);
            for (let m = 0; m < this.path.length; m++) {
                const p = this.path[m];
                if (!p.instance || !Pi(p.latestValues)) continue;
                Rh(p.latestValues) && p.updateSnapshot();
                const y = Et(),
                    x = p.measurePageBox();
                kn(y, x), b0(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, y)
            }
            return Pi(this.latestValues) && b0(d, this.latestValues), d
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== zt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            const d = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== d;
            if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: x
            } = this.options;
            if (!this.layout || !(y || x)) return;
            this.resolvedRelativeTargetAt = zt.timestamp;
            const b = this.getClosestProjectingParent();
            b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Et(), this.targetWithTransforms = Et()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), KD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : kn(this.target, this.layout.layoutBox), ES(this.target, this.targetDelta)) : kn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Rh(this.parent.latestValues) || AS(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, d, m) {
            this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Et(), this.relativeTargetOrigin = Et(), Cc(this.relativeTargetOrigin, d, m), kn(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const f = this.getLead(),
                d = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === zt.timestamp && (m = !1), m) return;
            const {
                layout: p,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || y)) return;
            kn(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x,
                b = this.treeScale.y;
            TD(this.layoutCorrected, this.treeScale, this.path, d), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Et());
            const {
                target: S
            } = f;
            if (!S) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (m0(this.prevProjectionDelta.x, this.projectionDelta.x), m0(this.prevProjectionDelta.y, this.projectionDelta.y)), uo(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== b || !E0(this.projectionDelta.x, this.prevProjectionDelta.x) || !E0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            if (this.options.visualElement?.scheduleRender(), f) {
                const d = this.getStack();
                d && d.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ua(), this.projectionDelta = Ua(), this.projectionDeltaWithTransform = Ua()
        }
        setAnimationOrigin(f, d = !1) {
            const m = this.snapshot,
                p = m ? m.latestValues : {},
                y = {
                    ...this.latestValues
                },
                x = Ua();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
            const b = Et(),
                S = m ? m.source : void 0,
                E = this.layout ? this.layout.source : void 0,
                _ = S !== E,
                R = this.getStack(),
                D = !R || R.members.length <= 1,
                j = !!(_ && !D && this.options.crossfade === !0 && !this.path.some(SM));
            this.animationProgress = 0;
            let M;
            this.mixTargetDelta = H => {
                const z = H / 1e3;
                D0(x.x, f.x, z), D0(x.y, f.y, z), this.setTargetDelta(x), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cc(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), wM(this.relativeTarget, this.relativeTargetOrigin, b, z), M && WD(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = Et()), kn(M, this.relativeTarget)), _ && (this.animationValues = y, tM(y, p, this.latestValues, z, j, D)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = z
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (hi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = st.update(() => {
                hc.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Xa(0)), this.motionValue.jump(0, !1), this.currentAnimation = iM(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d), f.onUpdate && f.onUpdate(d)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cM), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: d,
                target: m,
                layout: p,
                latestValues: y
            } = f;
            if (!(!d || !m || !p)) {
                if (this !== f && this.layout && p && FS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    m = this.target || Et();
                    const x = Xt(this.layout.layoutBox.x);
                    m.x.min = f.target.x.min, m.x.max = m.x.min + x;
                    const b = Xt(this.layout.layoutBox.y);
                    m.y.min = f.target.y.min, m.y.max = m.y.min + b
                }
                kn(d, m), qa(d, y), uo(this.projectionDeltaWithTransform, this.layoutCorrected, d, y)
            }
        }
        registerSharedNode(f, d) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new lM), this.sharedNodes.get(f).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: d,
            preserveFollowOpacity: m
        } = {}) {
            const p = this.getStack();
            p && p.promote(this, m), f && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let d = !1;
            const {
                latestValues: m
            } = f;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (d = !0), !d) return;
            const p = {};
            m.z && Pd("z", f, p, this.animationValues);
            for (let y = 0; y < Bd.length; y++) Pd(`rotate${Bd[y]}`, f, p, this.animationValues), Pd(`skew${Bd[y]}`, f, p, this.animationValues);
            f.render();
            for (const y in p) f.setStaticValue(y, p[y]), this.animationValues && (this.animationValues[y] = p[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, d) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const m = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = dc(d?.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none";
                return
            }
            const p = this.getLead();
            if (!this.projectionDelta || !this.layout || !p.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = dc(d?.pointerEvents) || ""), this.hasProjected && !Pi(this.latestValues) && (f.transform = m ? m({}, "") : "none", this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = p.animationValues || p.latestValues;
            this.applyTransformsToTarget();
            let x = JD(this.projectionDeltaWithTransform, this.treeScale, y);
            m && (x = m(y, x)), f.transform = x;
            const {
                x: b,
                y: S
            } = this.projectionDelta;
            f.transformOrigin = `${b.origin * 100}% ${S.origin * 100}% 0`, p.animationValues ? f.opacity = p === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = p === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const E in Oh) {
                if (y[E] === void 0) continue;
                const {
                    correct: _,
                    applyTo: R,
                    isCSSVariable: D
                } = Oh[E], j = x === "none" ? y[E] : _(y[E], p);
                if (R) {
                    const M = R.length;
                    for (let H = 0; H < M; H++) f[R[H]] = j
                } else D ? this.options.visualElement.renderState.vars[E] = j : f[E] = j
            }
            this.options.layoutId && (f.pointerEvents = p === this ? dc(d?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation?.stop()), this.root.nodes.forEach(N0), this.root.sharedNodes.clear()
        }
    }
}

function fM(e) {
    e.updateLayout()
}

function dM(e) {
    const n = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: r
        } = e.layout, {
            animationType: l
        } = e.options, c = n.source !== e.layout.source;
        l === "size" ? $n(y => {
            const x = c ? n.measuredBox[y] : n.layoutBox[y],
                b = Xt(x);
            x.min = i[y].min, x.max = x.min + b
        }) : FS(l, n.layoutBox, i) && $n(y => {
            const x = c ? n.measuredBox[y] : n.layoutBox[y],
                b = Xt(i[y]);
            x.max = x.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + b)
        });
        const f = Ua();
        uo(f, i, n.layoutBox);
        const d = Ua();
        c ? uo(d, e.applyTransform(r, !0), n.measuredBox) : uo(d, i, n.layoutBox);
        const m = !LS(f);
        let p = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: x,
                    layout: b
                } = y;
                if (x && b) {
                    const S = Et();
                    Cc(S, n.layoutBox, x.layoutBox);
                    const E = Et();
                    Cc(E, i, b.layoutBox), BS(S, E) || (p = !0), y.options.layoutRoot && (e.relativeTarget = E, e.relativeTargetOrigin = S, e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: d,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: p
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: i
        } = e.options;
        i && i()
    }
    e.options.transition = void 0
}

function hM(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function mM(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function pM(e) {
    e.clearSnapshot()
}

function N0(e) {
    e.clearMeasurements()
}

function O0(e) {
    e.isLayoutDirty = !1
}

function yM(e) {
    const {
        visualElement: n
    } = e.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function j0(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function gM(e) {
    e.resolveTargetDelta()
}

function vM(e) {
    e.calcProjection()
}

function xM(e) {
    e.resetSkewAndRotation()
}

function bM(e) {
    e.removeLeadSnapshot()
}

function D0(e, n, i) {
    e.translate = lt(n.translate, 0, i), e.scale = lt(n.scale, 1, i), e.origin = n.origin, e.originPoint = n.originPoint
}

function M0(e, n, i, r) {
    e.min = lt(n.min, i.min, r), e.max = lt(n.max, i.max, r)
}

function wM(e, n, i, r) {
    M0(e.x, n.x, i.x, r), M0(e.y, n.y, i.y, r)
}

function SM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const TM = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    k0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    V0 = k0("applewebkit/") && !k0("chrome/") ? Math.round : Rn;

function z0(e) {
    e.min = V0(e.min), e.max = V0(e.max)
}

function AM(e) {
    z0(e.x), z0(e.y)
}

function FS(e, n, i) {
    return e === "position" || e === "preserve-aspect" && !XD(A0(n), A0(i), .2)
}

function EM(e) {
    return e !== e.root && e.scroll?.wasRoot
}
const _M = qS({
        attachResizeListener: (e, n) => So(e, "resize", n),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    Ud = {
        current: void 0
    },
    YS = qS({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ud.current) {
                const e = new _M({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ud.current = e
            }
            return Ud.current
        },
        resetTransform: (e, n) => {
            e.style.transform = n !== void 0 ? n : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    GS = A.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });

function CM(e = !0) {
    const n = A.useContext(lm);
    if (n === null) return [!0, null];
    const {
        isPresent: i,
        onExitComplete: r,
        register: l
    } = n, c = A.useId();
    A.useEffect(() => {
        if (e) return l(c)
    }, [e]);
    const f = A.useCallback(() => e && r && r(c), [c, r, e]);
    return !i && r ? [!1, f] : [!0]
}
const ZS = A.createContext({
        strict: !1
    }),
    L0 = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let B0 = !1;

function RM() {
    if (B0) return;
    const e = {};
    for (const n in L0) e[n] = {
        isEnabled: i => L0[n].some(r => !!i[r])
    };
    wS(e), B0 = !0
}

function XS() {
    return RM(), xD()
}

function NM(e) {
    const n = XS();
    for (const i in e) n[i] = {
        ...n[i],
        ...e[i]
    };
    wS(n)
}
const OM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function Rc(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || OM.has(e)
}
let KS = e => !Rc(e);

function jM(e) {
    typeof e == "function" && (KS = n => n.startsWith("on") ? !Rc(n) : e(n))
}
try {
    jM(require("@emotion/is-prop-valid").default)
} catch {}

function DM(e, n, i) {
    const r = {};
    for (const l in e) l === "values" && typeof e.values == "object" || (KS(l) || i === !0 && Rc(l) || !n && !Rc(l) || e.draggable && l.startsWith("onDrag")) && (r[l] = e[l]);
    return r
}
const Wc = A.createContext({});

function MM(e, n) {
    if ($c(e)) {
        const {
            initial: i,
            animate: r
        } = e;
        return {
            initial: i === !1 || wo(i) ? i : void 0,
            animate: wo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}

function kM(e) {
    const {
        initial: n,
        animate: i
    } = MM(e, A.useContext(Wc));
    return A.useMemo(() => ({
        initial: n,
        animate: i
    }), [P0(n), P0(i)])
}

function P0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const zm = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function QS(e, n, i) {
    for (const r in n) !Ut(n[r]) && !RS(r, i) && (e[r] = n[r])
}

function VM({
    transformTemplate: e
}, n) {
    return A.useMemo(() => {
        const i = zm();
        return km(i, n, e), Object.assign({}, i.vars, i.style)
    }, [n])
}

function zM(e, n) {
    const i = e.style || {},
        r = {};
    return QS(r, i, e), Object.assign(r, VM(e, n)), r
}

function LM(e, n) {
    const i = {},
        r = zM(e, n);
    return e.drag && e.dragListener !== !1 && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = r, i
}
const IS = () => ({
    ...zm(),
    attrs: {}
});

function BM(e, n, i, r) {
    const l = A.useMemo(() => {
        const c = IS();
        return NS(c, n, jS(r), e.transformTemplate, e.style), {
            ...c.attrs,
            style: {
                ...c.style
            }
        }
    }, [n]);
    if (e.style) {
        const c = {};
        QS(c, e.style, e), l.style = {
            ...c,
            ...l.style
        }
    }
    return l
}
const PM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Lm(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(PM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function UM(e, n, i, {
    latestValues: r
}, l, c = !1, f) {
    const m = (f ?? Lm(e) ? BM : LM)(n, r, l, e),
        p = DM(n, typeof e == "string", c),
        y = e !== A.Fragment ? {
            ...p,
            ...m,
            ref: i
        } : {},
        {
            children: x
        } = n,
        b = A.useMemo(() => Ut(x) ? x.get() : x, [x]);
    return A.createElement(e, {
        ...y,
        children: b
    })
}

function HM({
    scrapeMotionValuesFromProps: e,
    createRenderState: n
}, i, r, l) {
    return {
        latestValues: qM(i, r, l, e),
        renderState: n()
    }
}

function qM(e, n, i, r) {
    const l = {},
        c = r(e, {});
    for (const b in c) l[b] = dc(c[b]);
    let {
        initial: f,
        animate: d
    } = e;
    const m = $c(e),
        p = xS(e);
    n && p && !m && e.inherit !== !1 && (f === void 0 && (f = n.initial), d === void 0 && (d = n.animate));
    let y = i ? i.initial === !1 : !1;
    y = y || f === !1;
    const x = y ? d : f;
    if (x && typeof x != "boolean" && !Ic(x)) {
        const b = Array.isArray(x) ? x : [x];
        for (let S = 0; S < b.length; S++) {
            const E = Em(e, b[S]);
            if (E) {
                const {
                    transitionEnd: _,
                    transition: R,
                    ...D
                } = E;
                for (const j in D) {
                    let M = D[j];
                    if (Array.isArray(M)) {
                        const H = y ? M.length - 1 : 0;
                        M = M[H]
                    }
                    M !== null && (l[j] = M)
                }
                for (const j in _) l[j] = _[j]
            }
        }
    }
    return l
}
const $S = e => (n, i) => {
        const r = A.useContext(Wc),
            l = A.useContext(lm),
            c = () => HM(e, n, r, l);
        return i ? c() : YN(c)
    },
    FM = $S({
        scrapeMotionValuesFromProps: Vm,
        createRenderState: zm
    }),
    YM = $S({
        scrapeMotionValuesFromProps: DS,
        createRenderState: IS
    }),
    GM = Symbol.for("motionComponentSymbol");

function ZM(e, n, i) {
    const r = A.useRef(i);
    A.useInsertionEffect(() => {
        r.current = i
    });
    const l = A.useRef(null);
    return A.useCallback(c => {
        c && e.onMount?.(c);
        const f = r.current;
        if (typeof f == "function")
            if (c) {
                const d = f(c);
                typeof d == "function" && (l.current = d)
            } else l.current ? (l.current(), l.current = null) : f(c);
        else f && (f.current = c);
        n && (c ? n.mount(c) : n.unmount())
    }, [n])
}
const WS = A.createContext({});

function Va(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function XM(e, n, i, r, l, c) {
    const {
        visualElement: f
    } = A.useContext(Wc), d = A.useContext(ZS), m = A.useContext(lm), p = A.useContext(GS), y = p.reducedMotion, x = p.skipAnimations, b = A.useRef(null), S = A.useRef(!1);
    r = r || d.renderer, !b.current && r && (b.current = r(e, {
        visualState: n,
        parent: f,
        props: i,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: x,
        isSVG: c
    }), S.current && b.current && (b.current.manuallyAnimateOnMount = !0));
    const E = b.current,
        _ = A.useContext(WS);
    E && !E.projection && l && (E.type === "html" || E.type === "svg") && KM(b.current, i, l, _);
    const R = A.useRef(!1);
    A.useInsertionEffect(() => {
        E && R.current && E.update(i, m)
    });
    const D = i[oS],
        j = A.useRef(!!D && typeof window < "u" && !window.MotionHandoffIsComplete?.(D) && window.MotionHasOptimisedAnimation?.(D));
    return ZN(() => {
        S.current = !0, E && (R.current = !0, window.MotionIsMounted = !0, E.updateFeatures(), E.scheduleRenderMicrotask(), j.current && E.animationState && E.animationState.animateChanges())
    }), A.useEffect(() => {
        E && (!j.current && E.animationState && E.animationState.animateChanges(), j.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(D)
        }), j.current = !1), E.enteringChildren = void 0)
    }), E
}

function KM(e, n, i, r) {
    const {
        layoutId: l,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: m,
        layoutRoot: p,
        layoutCrossfade: y
    } = n;
    e.projection = new i(e.latestValues, n["data-framer-portal-id"] ? void 0 : JS(e.parent)), e.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!f || d && Va(d),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: r,
        crossfade: y,
        layoutScroll: m,
        layoutRoot: p
    })
}

function JS(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : JS(e.parent)
}

function Hd(e, {
    forwardMotionProps: n = !1,
    type: i
} = {}, r, l) {
    r && NM(r);
    const c = i ? i === "svg" : Lm(e),
        f = c ? YM : FM;

    function d(p, y) {
        let x;
        const b = {
                ...A.useContext(GS),
                ...p,
                layoutId: QM(p)
            },
            {
                isStatic: S
            } = b,
            E = kM(p),
            _ = f(p, S);
        if (!S && typeof window < "u") {
            IM();
            const R = $M(b);
            x = R.MeasureLayout, E.visualElement = XM(e, _, b, l, R.ProjectionNode, c)
        }
        return g.jsxs(Wc.Provider, {
            value: E,
            children: [x && E.visualElement ? g.jsx(x, {
                visualElement: E.visualElement,
                ...b
            }) : null, UM(e, p, ZM(_, E.visualElement, y), _, S, n, c)]
        })
    }
    d.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const m = A.forwardRef(d);
    return m[GM] = e, m
}

function QM({
    layoutId: e
}) {
    const n = A.useContext(xw).id;
    return n && e !== void 0 ? n + "-" + e : e
}

function IM(e, n) {
    A.useContext(ZS).strict
}

function $M(e) {
    const n = XS(),
        {
            drag: i,
            layout: r
        } = n;
    if (!i && !r) return {};
    const l = {
        ...i,
        ...r
    };
    return {
        MeasureLayout: i?.isEnabled(e) || r?.isEnabled(e) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}

function WM(e, n) {
    if (typeof Proxy > "u") return Hd;
    const i = new Map,
        r = (c, f) => Hd(c, f, e, n),
        l = (c, f) => r(c, f);
    return new Proxy(l, {
        get: (c, f) => f === "create" ? r : (i.has(f) || i.set(f, Hd(f, void 0, e, n)), i.get(f))
    })
}
const JM = (e, n) => n.isSVG ?? Lm(e) ? new zD(n) : new OD(n, {
    allowProjection: e !== A.Fragment
});
class e4 extends vi {
    constructor(n) {
        super(n), n.animationState || (n.animationState = HD(n))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: n
        } = this.node.getProps();
        Ic(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: n
        } = this.node.getProps(), {
            animate: i
        } = this.node.prevProps || {};
        n !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls?.()
    }
}
let t4 = 0;
class n4 extends vi {
    constructor() {
        super(...arguments), this.id = t4++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: n,
            onExitComplete: i
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === r) return;
        const l = this.node.animationState.setActive("exit", !n);
        i && !n && l.then(() => {
            i(this.id)
        })
    }
    mount() {
        const {
            register: n,
            onExitComplete: i
        } = this.node.presenceContext || {};
        i && i(this.id), n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const s4 = {
    animation: {
        Feature: e4
    },
    exit: {
        Feature: n4
    }
};

function Mo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const i4 = e => n => Om(n) && e(n, Mo(n));

function fo(e, n, i, r) {
    return So(e, n, i4(i), r)
}
const eT = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    U0 = (e, n) => Math.abs(e - n);

function a4(e, n) {
    const i = U0(e.x, n.x),
        r = U0(e.y, n.y);
    return Math.sqrt(i ** 2 + r ** 2)
}
const H0 = new Set(["auto", "scroll"]);
class tT {
    constructor(n, i, {
        transformPagePoint: r,
        contextWindow: l = window,
        dragSnapToOrigin: c = !1,
        distanceThreshold: f = 3,
        element: d
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = S => {
                this.handleScroll(S.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const S = Fd(this.lastMoveEventInfo, this.history),
                    E = this.startEvent !== null,
                    _ = a4(S.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!E && !_) return;
                const {
                    point: R
                } = S, {
                    timestamp: D
                } = zt;
                this.history.push({
                    ...R,
                    timestamp: D
                });
                const {
                    onStart: j,
                    onMove: M
                } = this.handlers;
                E || (j && j(this.lastMoveEvent, S), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, S)
            }, this.handlePointerMove = (S, E) => {
                this.lastMoveEvent = S, this.lastMoveEventInfo = qd(E, this.transformPagePoint), st.update(this.updatePoint, !0)
            }, this.handlePointerUp = (S, E) => {
                this.end();
                const {
                    onEnd: _,
                    onSessionEnd: R,
                    resumeAnimation: D
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const j = Fd(S.type === "pointercancel" ? this.lastMoveEventInfo : qd(E, this.transformPagePoint), this.history);
                this.startEvent && _ && _(S, j), R && R(S, j)
            }, !Om(n)) return;
        this.dragSnapToOrigin = c, this.handlers = i, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = l || window;
        const m = Mo(n),
            p = qd(m, this.transformPagePoint),
            {
                point: y
            } = p,
            {
                timestamp: x
            } = zt;
        this.history = [{
            ...y,
            timestamp: x
        }];
        const {
            onSessionStart: b
        } = i;
        b && b(n, Fd(p, this.history)), this.removeListeners = Oo(fo(this.contextWindow, "pointermove", this.handlePointerMove), fo(this.contextWindow, "pointerup", this.handlePointerUp), fo(this.contextWindow, "pointercancel", this.handlePointerUp)), d && this.startScrollTracking(d)
    }
    startScrollTracking(n) {
        let i = n.parentElement;
        for (; i;) {
            const r = getComputedStyle(i);
            (H0.has(r.overflowX) || H0.has(r.overflowY)) && this.scrollPositions.set(i, {
                x: i.scrollLeft,
                y: i.scrollTop
            }), i = i.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(n) {
        const i = this.scrollPositions.get(n);
        if (!i) return;
        const r = n === window,
            l = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: n.scrollLeft,
                y: n.scrollTop
            },
            c = {
                x: l.x - i.x,
                y: l.y - i.y
            };
        c.x === 0 && c.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x, this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x, this.history[0].y -= c.y), this.scrollPositions.set(n, l), st.update(this.updatePoint, !0))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), hi(this.updatePoint)
    }
}

function qd(e, n) {
    return n ? {
        point: n(e.point)
    } : e
}

function q0(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}

function Fd({
    point: e
}, n) {
    return {
        point: e,
        delta: q0(e, nT(n)),
        offset: q0(e, r4(n)),
        velocity: o4(n, .1)
    }
}

function r4(e) {
    return e[0]
}

function nT(e) {
    return e[e.length - 1]
}

function o4(e, n) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let i = e.length - 1,
        r = null;
    const l = nT(e);
    for (; i >= 0 && (r = e[i], !(l.timestamp - r.timestamp > Pn(n)));) i--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === e[0] && e.length > 2 && l.timestamp - r.timestamp > Pn(n) * 2 && (r = e[1]);
    const c = Cn(l.timestamp - r.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (l.x - r.x) / c,
        y: (l.y - r.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function l4(e, {
    min: n,
    max: i
}, r) {
    return n !== void 0 && e < n ? e = r ? lt(n, e, r.min) : Math.max(e, n) : i !== void 0 && e > i && (e = r ? lt(i, e, r.max) : Math.min(e, i)), e
}

function F0(e, n, i) {
    return {
        min: n !== void 0 ? e.min + n : void 0,
        max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
    }
}

function c4(e, {
    top: n,
    left: i,
    bottom: r,
    right: l
}) {
    return {
        x: F0(e.x, i, l),
        y: F0(e.y, n, r)
    }
}

function Y0(e, n) {
    let i = n.min - e.min,
        r = n.max - e.max;
    return n.max - n.min < e.max - e.min && ([i, r] = [r, i]), {
        min: i,
        max: r
    }
}

function u4(e, n) {
    return {
        x: Y0(e.x, n.x),
        y: Y0(e.y, n.y)
    }
}

function f4(e, n) {
    let i = .5;
    const r = Xt(e),
        l = Xt(n);
    return l > r ? i = vo(n.min, n.max - r, e.min) : r > l && (i = vo(e.min, e.max - l, n.min)), ss(0, 1, i)
}

function d4(e, n) {
    const i = {};
    return n.min !== void 0 && (i.min = n.min - e.min), n.max !== void 0 && (i.max = n.max - e.min), i
}
const jh = .35;

function h4(e = jh) {
    return e === !1 ? e = 0 : e === !0 && (e = jh), {
        x: G0(e, "left", "right"),
        y: G0(e, "top", "bottom")
    }
}

function G0(e, n, i) {
    return {
        min: Z0(e, n),
        max: Z0(e, i)
    }
}

function Z0(e, n) {
    return typeof e == "number" ? e : e[n] || 0
}
const m4 = new WeakMap;
class p4 {
    constructor(n) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Et(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n
    }
    start(n, {
        snapToCursor: i = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: l
        } = this.visualElement;
        if (l && l.isPresent === !1) return;
        const c = x => {
                i && this.snapToCursor(Mo(x).point), this.stopAnimation()
            },
            f = (x, b) => {
                const {
                    drag: S,
                    dragPropagation: E,
                    onDragStart: _
                } = this.getProps();
                if (S && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = Qj(S), !this.openDragLock)) return;
                this.latestPointerEvent = x, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $n(D => {
                    let j = this.getAxisMotionValue(D).get() || 0;
                    if (ts.test(j)) {
                        const {
                            projection: M
                        } = this.visualElement;
                        if (M && M.layout) {
                            const H = M.layout.layoutBox[D];
                            H && (j = Xt(H) * (parseFloat(j) / 100))
                        }
                    }
                    this.originPoint[D] = j
                }), _ && st.update(() => _(x, b), !1, !0), Th(this.visualElement, "transform");
                const {
                    animationState: R
                } = this.visualElement;
                R && R.setActive("whileDrag", !0)
            },
            d = (x, b) => {
                this.latestPointerEvent = x, this.latestPanInfo = b;
                const {
                    dragPropagation: S,
                    dragDirectionLock: E,
                    onDirectionLock: _,
                    onDrag: R
                } = this.getProps();
                if (!S && !this.openDragLock) return;
                const {
                    offset: D
                } = b;
                if (E && this.currentDirection === null) {
                    this.currentDirection = g4(D), this.currentDirection !== null && _ && _(this.currentDirection);
                    return
                }
                this.updateAxis("x", b.point, D), this.updateAxis("y", b.point, D), this.visualElement.render(), R && st.update(() => R(x, b), !1, !0)
            },
            m = (x, b) => {
                this.latestPointerEvent = x, this.latestPanInfo = b, this.stop(x, b), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            p = () => {
                const {
                    dragSnapToOrigin: x
                } = this.getProps();
                (x || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: y
            } = this.getProps();
        this.panSession = new tT(n, {
            onSessionStart: c,
            onStart: f,
            onMove: d,
            onSessionEnd: m,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: r,
            contextWindow: eT(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(n, i) {
        const r = n || this.latestPointerEvent,
            l = i || this.latestPanInfo,
            c = this.isDragging;
        if (this.cancel(), !c || !l || !r) return;
        const {
            velocity: f
        } = l;
        this.startAnimation(f);
        const {
            onDragEnd: d
        } = this.getProps();
        d && st.postRender(() => d(r, l))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: n,
            animationState: i
        } = this.visualElement;
        n && (n.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(n, i, r) {
        const {
            drag: l
        } = this.getProps();
        if (!r || !tc(n, l, this.currentDirection)) return;
        const c = this.getAxisMotionValue(n);
        let f = this.originPoint[n] + r[n];
        this.constraints && this.constraints[n] && (f = l4(f, this.constraints[n], this.elastic[n])), c.set(f)
    }
    resolveConstraints() {
        const {
            dragConstraints: n,
            dragElastic: i
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
        n && Va(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && r ? this.constraints = c4(r.layoutBox, n) : this.constraints = !1, this.elastic = h4(i), l !== this.constraints && !Va(n) && r && this.constraints && !this.hasMutatedConstraints && $n(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = d4(r.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: n,
            onMeasureDragConstraints: i
        } = this.getProps();
        if (!n || !Va(n)) return !1;
        const r = n.current,
            {
                projection: l
            } = this.visualElement;
        if (!l || !l.layout) return !1;
        const c = AD(r, l.root, this.visualElement.getTransformPagePoint());
        let f = u4(l.layout.layoutBox, c);
        if (i) {
            const d = i(wD(f));
            this.hasMutatedConstraints = !!d, d && (f = TS(d))
        }
        return f
    }
    startAnimation(n) {
        const {
            drag: i,
            dragMomentum: r,
            dragElastic: l,
            dragTransition: c,
            dragSnapToOrigin: f,
            onDragTransitionEnd: d
        } = this.getProps(), m = this.constraints || {}, p = $n(y => {
            if (!tc(y, i, this.currentDirection)) return;
            let x = m && m[y] || {};
            f && (x = {
                min: 0,
                max: 0
            });
            const b = l ? 200 : 1e6,
                S = l ? 40 : 1e7,
                E = {
                    type: "inertia",
                    velocity: r ? n[y] : 0,
                    bounceStiffness: b,
                    bounceDamping: S,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...x
                };
            return this.startAxisValueAnimation(y, E)
        });
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(n, i) {
        const r = this.getAxisMotionValue(n);
        return Th(this.visualElement, n), r.start(Am(n, r, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        $n(n => this.getAxisMotionValue(n).stop())
    }
    getAxisMotionValue(n) {
        const i = `_drag${n.toUpperCase()}`,
            r = this.visualElement.getProps(),
            l = r[i];
        return l || this.visualElement.getValue(n, (r.initial ? r.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        $n(i => {
            const {
                drag: r
            } = this.getProps();
            if (!tc(i, r, this.currentDirection)) return;
            const {
                projection: l
            } = this.visualElement, c = this.getAxisMotionValue(i);
            if (l && l.layout) {
                const {
                    min: f,
                    max: d
                } = l.layout.layoutBox[i], m = c.get() || 0;
                c.set(n[i] - lt(f, d, .5) + m)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: n,
            dragConstraints: i
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Va(i) || !r || !this.constraints) return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        $n(f => {
            const d = this.getAxisMotionValue(f);
            if (d && this.constraints !== !1) {
                const m = d.get();
                l[f] = f4({
                    min: m,
                    max: m
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), $n(f => {
            if (!tc(f, n, null)) return;
            const d = this.getAxisMotionValue(f),
                {
                    min: m,
                    max: p
                } = this.constraints[f];
            d.set(lt(m, p, l[f]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        m4.set(this.visualElement, this);
        const n = this.visualElement.current,
            i = fo(n, "pointerdown", p => {
                const {
                    drag: y,
                    dragListener: x = !0
                } = this.getProps(), b = p.target, S = b !== n && tD(b);
                y && x && !S && this.start(p)
            });
        let r;
        const l = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                Va(p) && p.current && (this.constraints = this.resolveRefConstraints(), r || (r = y4(n, p.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: c
            } = this.visualElement,
            f = c.addEventListener("measure", l);
        c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), st.read(l);
        const d = So(window, "resize", () => this.scalePositionWithinConstraints()),
            m = c.addEventListener("didUpdate", (({
                delta: p,
                hasLayoutChanged: y
            }) => {
                this.isDragging && y && ($n(x => {
                    const b = this.getAxisMotionValue(x);
                    b && (this.originPoint[x] += p[x].translate, b.set(b.get() + p[x].translate))
                }), this.visualElement.render())
            }));
        return () => {
            d(), i(), f(), m && m(), r && r()
        }
    }
    getProps() {
        const n = this.visualElement.getProps(),
            {
                drag: i = !1,
                dragDirectionLock: r = !1,
                dragPropagation: l = !1,
                dragConstraints: c = !1,
                dragElastic: f = jh,
                dragMomentum: d = !0
            } = n;
        return {
            ...n,
            drag: i,
            dragDirectionLock: r,
            dragPropagation: l,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: d
        }
    }
}

function X0(e) {
    let n = !0;
    return () => {
        if (n) {
            n = !1;
            return
        }
        e()
    }
}

function y4(e, n, i) {
    const r = t0(e, X0(i)),
        l = t0(n, X0(i));
    return () => {
        r(), l()
    }
}

function tc(e, n, i) {
    return (n === !0 || n === e) && (i === null || i === e)
}

function g4(e, n = 10) {
    let i = null;
    return Math.abs(e.y) > n ? i = "y" : Math.abs(e.x) > n && (i = "x"), i
}
class v4 extends vi {
    constructor(n) {
        super(n), this.removeGroupControls = Rn, this.removeListeners = Rn, this.controls = new p4(n)
    }
    mount() {
        const {
            dragControls: n
        } = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Rn
    }
    update() {
        const {
            dragControls: n
        } = this.node.getProps(), {
            dragControls: i
        } = this.node.prevProps || {};
        n !== i && (this.removeGroupControls(), n && (this.removeGroupControls = n.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const Yd = e => (n, i) => {
    e && st.update(() => e(n, i), !1, !0)
};
class x4 extends vi {
    constructor() {
        super(...arguments), this.removePointerDownListener = Rn
    }
    onPointerDown(n) {
        this.session = new tT(n, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eT(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: n,
            onPanStart: i,
            onPan: r,
            onPanEnd: l
        } = this.node.getProps();
        return {
            onSessionStart: Yd(n),
            onStart: Yd(i),
            onMove: Yd(r),
            onEnd: (c, f) => {
                delete this.session, l && st.postRender(() => l(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = fo(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let Gd = !1;
class b4 extends A.Component {
    componentDidMount() {
        const {
            visualElement: n,
            layoutGroup: i,
            switchLayoutGroup: r,
            layoutId: l
        } = this.props, {
            projection: c
        } = n;
        c && (i.group && i.group.add(c), r && r.register && l && r.register(c), Gd && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({
            ...c.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), hc.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {
            layoutDependency: i,
            visualElement: r,
            drag: l,
            isPresent: c
        } = this.props, {
            projection: f
        } = r;
        return f && (f.isPresent = c, n.layoutDependency !== i && f.setOptions({
            ...f.options,
            layoutDependency: i
        }), Gd = !0, l || n.layoutDependency !== i || i === void 0 || n.isPresent !== c ? f.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? f.promote() : f.relegate() || st.postRender(() => {
            const d = f.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: n
        } = this.props.visualElement;
        n && (n.root.didUpdate(), Nm.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: n,
            layoutGroup: i,
            switchLayoutGroup: r
        } = this.props, {
            projection: l
        } = n;
        Gd = !0, l && (l.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(l), r && r.deregister && r.deregister(l))
    }
    safeToRemove() {
        const {
            safeToRemove: n
        } = this.props;
        n && n()
    }
    render() {
        return null
    }
}

function sT(e) {
    const [n, i] = CM(), r = A.useContext(xw);
    return g.jsx(b4, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: A.useContext(WS),
        isPresent: n,
        safeToRemove: i
    })
}
const w4 = {
    pan: {
        Feature: x4
    },
    drag: {
        Feature: v4,
        ProjectionNode: YS,
        MeasureLayout: sT
    }
};

function K0(e, n, i) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", i === "Start");
    const l = "onHover" + i,
        c = r[l];
    c && st.postRender(() => c(n, Mo(n)))
}
class S4 extends vi {
    mount() {
        const {
            current: n
        } = this.node;
        n && (this.unmount = $j(n, (i, r) => (K0(this.node, r, "Start"), l => K0(this.node, l, "End"))))
    }
    unmount() {}
}
class T4 extends vi {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }!n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Oo(So(this.node.current, "focus", () => this.onFocus()), So(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Q0(e, n, i) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", i === "Start");
    const l = "onTap" + (i === "End" ? "" : i),
        c = r[l];
    c && st.postRender(() => c(n, Mo(n)))
}
class A4 extends vi {
    mount() {
        const {
            current: n
        } = this.node;
        if (!n) return;
        const {
            globalTapTarget: i,
            propagate: r
        } = this.node.props;
        this.unmount = sD(n, (l, c) => (Q0(this.node, c, "Start"), (f, {
            success: d
        }) => Q0(this.node, f, d ? "End" : "Cancel")), {
            useGlobalTarget: i,
            stopPropagation: r?.tap === !1
        })
    }
    unmount() {}
}
const Dh = new WeakMap,
    Zd = new WeakMap,
    E4 = e => {
        const n = Dh.get(e.target);
        n && n(e)
    },
    _4 = e => {
        e.forEach(E4)
    };

function C4({
    root: e,
    ...n
}) {
    const i = e || document;
    Zd.has(i) || Zd.set(i, {});
    const r = Zd.get(i),
        l = JSON.stringify(n);
    return r[l] || (r[l] = new IntersectionObserver(_4, {
        root: e,
        ...n
    })), r[l]
}

function R4(e, n, i) {
    const r = C4(n);
    return Dh.set(e, i), r.observe(e), () => {
        Dh.delete(e), r.unobserve(e)
    }
}
const N4 = {
    some: 0,
    all: 1
};
class O4 extends vi {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: n = {}
        } = this.node.getProps(), {
            root: i,
            margin: r,
            amount: l = "some",
            once: c
        } = n, f = {
            root: i ? i.current : void 0,
            rootMargin: r,
            threshold: typeof l == "number" ? l : N4[l]
        }, d = m => {
            const {
                isIntersecting: p
            } = m;
            if (this.isInView === p || (this.isInView = p, c && !p && this.hasEnteredView)) return;
            p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {
                onViewportEnter: y,
                onViewportLeave: x
            } = this.node.getProps(), b = p ? y : x;
            b && b(m)
        };
        return R4(this.node.current, f, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: n,
            prevProps: i
        } = this.node;
        ["amount", "margin", "root"].some(j4(n, i)) && this.startObserver()
    }
    unmount() {}
}

function j4({
    viewport: e = {}
}, {
    viewport: n = {}
} = {}) {
    return i => e[i] !== n[i]
}
const D4 = {
        inView: {
            Feature: O4
        },
        tap: {
            Feature: A4
        },
        focus: {
            Feature: T4
        },
        hover: {
            Feature: S4
        }
    },
    M4 = {
        layout: {
            ProjectionNode: YS,
            MeasureLayout: sT
        }
    },
    k4 = {
        ...s4,
        ...D4,
        ...w4,
        ...M4
    },
    V4 = WM(k4, JM),
    z4 = {
        some: 0,
        all: 1
    };

function L4(e, n, {
    root: i,
    margin: r,
    amount: l = "some"
} = {}) {
    const c = Rm(e),
        f = new WeakMap,
        d = p => {
            p.forEach(y => {
                const x = f.get(y.target);
                if (y.isIntersecting !== !!x)
                    if (y.isIntersecting) {
                        const b = n(y.target, y);
                        typeof b == "function" ? f.set(y.target, b) : m.unobserve(y.target)
                    } else typeof x == "function" && (x(y), f.delete(y.target))
            })
        },
        m = new IntersectionObserver(d, {
            root: i,
            rootMargin: r,
            threshold: typeof l == "number" ? l : z4[l]
        });
    return c.forEach(p => m.observe(p)), () => m.disconnect()
}

function B4(e, {
    root: n,
    margin: i,
    amount: r,
    once: l = !1,
    initial: c = !1
} = {}) {
    const [f, d] = A.useState(c);
    return A.useEffect(() => {
        if (!e.current || l && f) return;
        const m = () => (d(!0), l ? void 0 : () => d(!1)),
            p = {
                root: n && n.current || void 0,
                margin: i,
                amount: r
            };
        return L4(e.current, m, p)
    }, [n, e, i, l, r]), f
}

function Ue({
    children: e,
    delay: n = 0,
    direction: i = "up",
    duration: r = .8,
    className: l = "",
    amount: c = .2
}) {
    const f = A.useRef(null),
        d = B4(f, {
            once: !0,
            amount: c
        }),
        m = () => {
            const p = {
                    opacity: 0
                },
                y = {
                    opacity: 1,
                    x: 0,
                    y: 0
                };
            switch (i) {
                case "up":
                    return {
                        hidden: {
                            ...p,
                            y: 40
                        }, visible: y
                    };
                case "down":
                    return {
                        hidden: {
                            ...p,
                            y: -40
                        }, visible: y
                    };
                case "left":
                    return {
                        hidden: {
                            ...p,
                            x: 40
                        }, visible: y
                    };
                case "right":
                    return {
                        hidden: {
                            ...p,
                            x: -40
                        }, visible: y
                    };
                default:
                    return {
                        hidden: p, visible: y
                    }
            }
        };
    return g.jsx(V4.div, {
        ref: f,
        variants: m(),
        initial: "hidden",
        animate: d ? "visible" : "hidden",
        transition: {
            duration: r,
            delay: n,
            ease: [.25, .25, 0, 1]
        },
        className: l,
        children: e
    })
}

function P4() {
    return g.jsxs("section", {
        id: "hero",
        className: "relative h-screen w-full flex items-center justify-center overflow-hidden",
        children: [g.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [g.jsx("img", {
                src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop",
                alt: "Luxury interior living room",
                className: "w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-1000 ease-out"
            }), g.jsx("div", {
                className: "absolute inset-0 bg-charcoal/50"
            })]
        }), g.jsxs("div", {
            className: "relative z-10 container mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center",
            children: [g.jsx(Ue, {
                delay: .2,
                direction: "up",
                children: g.jsxs("h1", {
                    className: "font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-balance",
                    children: ["Where Space ", g.jsx("br", {}), " Becomes Art."]
                })
            }), g.jsx(Ue, {
                delay: .4,
                direction: "up",
                children: g.jsx("p", {
                    className: "max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light mb-12 text-balance leading-relaxed",
                    children: "Luxury residential interiors crafted with precision, warmth, and an unwavering attention to detail."
                })
            }), g.jsxs(Ue, {
                delay: .6,
                direction: "up",
                className: "flex flex-col items-center",
                children: [g.jsx("a", {
                    href: "#contact",
                    children: g.jsx(om, {
                        size: "lg",
                        className: "mb-4",
                        children: "Begin Your Project"
                    })
                }), g.jsx("span", {
                    className: "text-sm font-medium tracking-wide text-white/60 uppercase",
                    children: "By invitation and select inquiry only."
                })]
            })]
        }), g.jsx("div", {
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce",
            children: g.jsx("div", {
                className: "w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"
            })
        })]
    })
}

function U4() {
    return g.jsx("section", {
        id: "about",
        className: "py-24 md:py-32 bg-sand",
        children: g.jsx("div", {
            className: "container mx-auto px-6 md:px-12",
            children: g.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                children: [g.jsx("div", {
                    className: "order-2 lg:order-1 relative",
                    children: g.jsxs(Ue, {
                        direction: "right",
                        children: [g.jsx("div", {
                            className: "relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl",
                            children: g.jsx("img", {
                                src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
                                alt: "Vantage Interiors detail design",
                                className: "object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                            })
                        }), g.jsx("div", {
                            className: "absolute -bottom-8 -right-8 w-32 h-32 border border-gold/40 hidden md:block"
                        })]
                    })
                }), g.jsxs("div", {
                    className: "order-1 lg:order-2",
                    children: [g.jsx(Ue, {
                        direction: "up",
                        children: g.jsxs("h2", {
                            className: "text-taupe font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight",
                            children: ["A Studio Built ", g.jsx("br", {}), " on Intention."]
                        })
                    }), g.jsxs("div", {
                        className: "space-y-6 text-charcoal/80 font-light text-lg md:text-xl leading-relaxed",
                        children: [g.jsx(Ue, {
                            direction: "up",
                            delay: .2,
                            children: g.jsx("p", {
                                children: "Vantage Interiors was founded on the belief that great design is not merely seen — it is felt. Each project begins with deep listening, a thorough understanding of how our clients live, entertain, and dream."
                            })
                        }), g.jsx(Ue, {
                            direction: "up",
                            delay: .3,
                            children: g.jsx("p", {
                                children: "Our studio brings together some of the most respected designers and artisans in the world. From bespoke furniture sourced in Italy to hand-selected materials from across four continents, every element is chosen with purpose."
                            })
                        }), g.jsx(Ue, {
                            direction: "up",
                            delay: .4,
                            children: g.jsx("p", {
                                className: "font-serif italic text-2xl text-taupe py-4 border-l-2 border-gold pl-6 my-8",
                                children: '"We do not follow trends. We anticipate them — and then transcend them."'
                            })
                        })]
                    }), g.jsx(Ue, {
                        direction: "up",
                        delay: .5,
                        className: "mt-10",
                        children: g.jsxs("a", {
                            href: "#services",
                            className: "inline-flex items-center text-gold font-medium uppercase tracking-widest text-sm hover:text-taupe transition-colors group",
                            children: ["Discover Our Approach", g.jsx("span", {
                                className: "ml-2 transform group-hover:translate-x-1 transition-transform",
                                children: "→"
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
const H4 = [{
    title: "Full Residential Design",
    description: "From concept to completion — a total interior transformation guided by our studio's singular aesthetic vision."
}, {
    title: "Space Planning",
    description: "Masterful space planning that transforms architecture into lived experience, optimizing flow, proportion, and light."
}, {
    title: "Custom Furniture",
    description: "Original furnishings crafted by our network of elite artisans — each piece a considered expression of form and function."
}, {
    title: "Project Management",
    description: "Seamless coordination of every detail, trade, and timeline, so you can focus on anticipating the result."
}];

function q4() {
    return g.jsx("section", {
        id: "services",
        className: "py-24 md:py-32 bg-offwhite",
        children: g.jsxs("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [g.jsxs("div", {
                className: "text-center mb-20",
                children: [g.jsx(Ue, {
                    direction: "up",
                    children: g.jsx("h2", {
                        className: "text-charcoal font-serif text-4xl md:text-5xl lg:text-6xl mb-6",
                        children: "What We Do"
                    })
                }), g.jsx(Ue, {
                    direction: "up",
                    delay: .2,
                    children: g.jsx("p", {
                        className: "text-taupe/80 font-light text-lg md:text-xl max-w-2xl mx-auto",
                        children: "Comprehensive design services for the most discerning residences."
                    })
                })]
            }), g.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: H4.map((e, n) => g.jsxs(Ue, {
                    direction: "up",
                    delay: .1 * (n + 1),
                    className: "bg-white p-10 border-t-2 border-transparent hover:border-gold hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl group",
                    children: [g.jsx("h3", {
                        className: "font-serif text-2xl text-taupe mb-4 group-hover:text-gold transition-colors",
                        children: e.title
                    }), g.jsx("p", {
                        className: "text-charcoal/70 font-light leading-relaxed",
                        children: e.description
                    })]
                }, n))
            })]
        })
    })
}
const F4 = [{
    name: "The Halcyon Penthouse",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
}, {
    name: "Côte d'Azur Villa",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
}, {
    name: "The Whitmore Residence",
    location: "Ikoyi, Lagos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
}, {
    name: "Azure Loft",
    location: "Banana Island, Lagos",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
}, {
    name: "The Meridian Estate",
    location: "Eko Atlantic City, Lagos",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
}];

function iT({
    standalone: e = !1
}) {
    return g.jsx("section", {
        id: "portfolio",
        className: `bg-charcoal text-offwhite ${e ? "py-12 md:py-20" : "py-24 md:py-32"}`,
        children: g.jsxs("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [!e && g.jsxs("div", {
                className: "mb-16 md:mb-24 max-w-3xl",
                children: [g.jsx(Ue, {
                    direction: "up",
                    children: g.jsx("h2", {
                        className: "font-serif text-4xl md:text-5xl lg:text-6xl mb-6",
                        children: "Selected Works"
                    })
                }), g.jsx(Ue, {
                    direction: "up",
                    delay: .2,
                    children: g.jsx("p", {
                        className: "text-white/70 font-light text-lg md:text-xl",
                        children: "A curated glimpse into our studio's most celebrated residential projects."
                    })
                })]
            }), g.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]",
                children: F4.map((n, i) => g.jsxs(Ue, {
                    direction: "up",
                    delay: .1 * i,
                    className: `relative overflow-hidden group cursor-pointer ${n.colSpan} ${n.rowSpan}`,
                    children: [g.jsx(_n, {
                        href: "/project-detail",
                        className: "absolute inset-0 z-10",
                        "aria-label": `View ${n.name}`
                    }), g.jsx("img", {
                        src: n.image,
                        alt: n.name,
                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    }), g.jsx("div", {
                        className: "absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/60 transition-colors duration-500"
                    }), g.jsxs("div", {
                        className: "absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-white text-[10px] tracking-widest uppercase",
                        children: [g.jsx(b1, {
                            size: 10,
                            className: "text-[#C19A6B]"
                        }), n.location]
                    }), g.jsxs("div", {
                        className: "absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500",
                        children: [g.jsx("h3", {
                            className: "font-serif text-2xl md:text-3xl text-white mb-1",
                            children: n.name
                        }), g.jsx("p", {
                            className: "text-[#C19A6B] tracking-widest uppercase text-xs",
                            children: "View Project →"
                        })]
                    })]
                }, i))
            })]
        })
    })
}
const Y4 = [{
    quote: "Vantage redefined what home means to me. They listened — truly listened — and created something beyond what I had imagined.",
    author: "Alexandra M.",
    location: "New York"
}, {
    quote: "The level of craft, discretion, and professionalism is unlike anything I've encountered. Our home is now a source of constant joy.",
    author: "James T.",
    location: "London"
}, {
    quote: "I gave them a blank canvas and complete trust. The result was extraordinary.",
    author: "Isabelle R.",
    location: "Paris"
}];

function G4() {
    return g.jsx("section", {
        id: "testimonials",
        className: "py-24 md:py-32 bg-sand",
        children: g.jsxs("div", {
            className: "container mx-auto px-6 md:px-12 text-center",
            children: [g.jsx(Ue, {
                direction: "up",
                children: g.jsx("h2", {
                    className: "text-taupe font-serif text-3xl md:text-4xl mb-20 tracking-widest uppercase text-sm",
                    children: "In Their Words"
                })
            }), g.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8",
                children: Y4.map((e, n) => g.jsxs(Ue, {
                    direction: "up",
                    delay: .1 * n,
                    className: "flex flex-col items-center",
                    children: [g.jsx("span", {
                        className: "text-gold text-6xl font-serif leading-none mb-6",
                        children: '"'
                    }), g.jsx("p", {
                        className: "font-serif italic text-charcoal/90 text-xl md:text-2xl leading-relaxed mb-8 px-4",
                        children: e.quote
                    }), g.jsxs("div", {
                        className: "mt-auto flex flex-col items-center",
                        children: [g.jsx("div", {
                            className: "w-8 h-[1px] bg-gold/50 mb-4"
                        }), g.jsx("span", {
                            className: "text-xs uppercase tracking-widest font-semibold text-taupe",
                            children: e.author
                        }), g.jsx("span", {
                            className: "text-xs uppercase tracking-wider text-taupe/60 mt-1",
                            children: e.location
                        })]
                    })]
                }, n))
            })]
        })
    })
}
const Z4 = ["Architectural Digest Feature 2024", "Elle Decor A-List 2023", "House Beautiful Award", "AD 100 List", "Forbes Luxury 2024", "Dezeen Award Winner"];

function X4() {
    return g.jsx("section", {
        className: "py-20 md:py-24 bg-offwhite border-t border-sand",
        children: g.jsxs("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [g.jsxs("div", {
                className: "text-center mb-16",
                children: [g.jsx(Ue, {
                    direction: "up",
                    children: g.jsx("h2", {
                        className: "text-taupe font-serif text-2xl md:text-3xl mb-4",
                        children: "Trusted by the World's Most Discerning Clients"
                    })
                }), g.jsx(Ue, {
                    direction: "up",
                    delay: .1,
                    children: g.jsx("p", {
                        className: "text-charcoal/60 font-light max-w-xl mx-auto",
                        children: "Recognized across the industry for excellence in residential design."
                    })
                })]
            }), g.jsx("div", {
                className: "flex flex-wrap justify-center gap-4 md:gap-8",
                children: Z4.map((e, n) => g.jsx(Ue, {
                    direction: "up",
                    delay: .05 * n,
                    children: g.jsx("div", {
                        className: "px-6 py-4 border border-gold/30 rounded-none bg-white shadow-sm flex items-center justify-center min-w-[200px] hover:border-gold hover:shadow-md transition-all cursor-default",
                        children: g.jsx("span", {
                            className: "font-serif text-sm md:text-base text-taupe text-center",
                            children: e
                        })
                    })
                }, n))
            })]
        })
    })
}
const mc = A.forwardRef(({
    className: e,
    type: n,
    ...i
}, r) => g.jsx("input", {
    type: n,
    className: mt("flex w-full border-b border-white/20 bg-transparent px-3 py-4 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40 focus-visible:outline-none focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: r,
    ...i
}));
mc.displayName = "Input";
const aT = A.forwardRef(({
    className: e,
    ...n
}, i) => g.jsx("textarea", {
    className: mt("flex min-h-[120px] w-full border-b border-white/20 bg-transparent px-3 py-4 text-sm shadow-none transition-colors placeholder:text-white/40 focus-visible:outline-none focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50 resize-none", e),
    ref: i,
    ...n
}));
aT.displayName = "Textarea";
var ko = e => e.type === "checkbox",
    qi = e => e instanceof Date,
    en = e => e == null;
const rT = e => typeof e == "object";
var bt = e => !en(e) && !Array.isArray(e) && rT(e) && !qi(e),
    K4 = e => bt(e) && e.target ? ko(e.target) ? e.target.checked : e.target.value : e,
    Q4 = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    I4 = (e, n) => e.has(Q4(n)),
    $4 = e => {
        const n = e.constructor && e.constructor.prototype;
        return bt(n) && n.hasOwnProperty("isPrototypeOf")
    },
    Bm = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function At(e) {
    if (e instanceof Date) return new Date(e);
    const n = typeof FileList < "u" && e instanceof FileList;
    if (Bm && (e instanceof Blob || n)) return e;
    const i = Array.isArray(e);
    if (!i && !(bt(e) && $4(e))) return e;
    const r = i ? [] : Object.create(Object.getPrototypeOf(e));
    for (const l in e) Object.prototype.hasOwnProperty.call(e, l) && (r[l] = At(e[l]));
    return r
}
var Jc = e => /^\w*$/.test(e),
    ot = e => e === void 0,
    Pm = e => Array.isArray(e) ? e.filter(Boolean) : [],
    Um = e => Pm(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    ye = (e, n, i) => {
        if (!n || !bt(e)) return i;
        const r = (Jc(n) ? [n] : Um(n)).reduce((l, c) => en(l) ? l : l[c], e);
        return ot(r) || r === e ? ot(e[n]) ? i : e[n] : r
    },
    Wn = e => typeof e == "boolean",
    Ln = e => typeof e == "function",
    et = (e, n, i) => {
        let r = -1;
        const l = Jc(n) ? [n] : Um(n),
            c = l.length,
            f = c - 1;
        for (; ++r < c;) {
            const d = l[r];
            let m = i;
            if (r !== f) {
                const p = e[d];
                m = bt(p) || Array.isArray(p) ? p : isNaN(+l[r + 1]) ? {} : []
            }
            if (d === "__proto__" || d === "constructor" || d === "prototype") return;
            e[d] = m, e = e[d]
        }
    };
const I0 = {
        BLUR: "blur",
        FOCUS_OUT: "focusout"
    },
    Bn = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    Ss = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    W4 = rt.createContext(null);
W4.displayName = "HookFormControlContext";
var J4 = (e, n, i, r = !0) => {
    const l = {
        defaultValues: n._defaultValues
    };
    for (const c in e) Object.defineProperty(l, c, {
        get: () => {
            const f = c;
            return n._proxyFormState[f] !== Bn.all && (n._proxyFormState[f] = !r || Bn.all), e[f]
        }
    });
    return l
};
const ek = typeof window < "u" ? rt.useLayoutEffect : rt.useEffect;
var fn = e => typeof e == "string",
    tk = (e, n, i, r, l) => fn(e) ? (r && n.watch.add(e), ye(i, e, l)) : Array.isArray(e) ? e.map(c => (r && n.watch.add(c), ye(i, c))) : (r && (n.watchAll = !0), i),
    Mh = e => en(e) || !rT(e);

function ii(e, n, i = new WeakSet) {
    if (Mh(e) || Mh(n)) return Object.is(e, n);
    if (qi(e) && qi(n)) return Object.is(e.getTime(), n.getTime());
    const r = Object.keys(e),
        l = Object.keys(n);
    if (r.length !== l.length) return !1;
    if (i.has(e) || i.has(n)) return !0;
    i.add(e), i.add(n);
    for (const c of r) {
        const f = e[c];
        if (!l.includes(c)) return !1;
        if (c !== "ref") {
            const d = n[c];
            if (qi(f) && qi(d) || bt(f) && bt(d) || Array.isArray(f) && Array.isArray(d) ? !ii(f, d, i) : !Object.is(f, d)) return !1
        }
    }
    return !0
}
const nk = rt.createContext(null);
nk.displayName = "HookFormContext";
var oT = (e, n, i, r, l) => n ? {
        ...i[e],
        types: {
            ...i[e] && i[e].types ? i[e].types : {},
            [r]: l || !0
        }
    } : {},
    ho = e => Array.isArray(e) ? e : [e],
    $0 = () => {
        let e = [];
        return {
            get observers() {
                return e
            },
            next: l => {
                for (const c of e) c.next && c.next(l)
            },
            subscribe: l => (e.push(l), {
                unsubscribe: () => {
                    e = e.filter(c => c !== l)
                }
            }),
            unsubscribe: () => {
                e = []
            }
        }
    };

function lT(e, n) {
    const i = {};
    for (const r in e)
        if (e.hasOwnProperty(r)) {
            const l = e[r],
                c = n[r];
            if (l && bt(l) && c) {
                const f = lT(l, c);
                bt(f) && (i[r] = f)
            } else e[r] && (i[r] = c)
        } return i
}
var Yt = e => bt(e) && !Object.keys(e).length,
    Hm = e => e.type === "file",
    Nc = e => {
        if (!Bm) return !1;
        const n = e ? e.ownerDocument : 0;
        return e instanceof(n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    },
    cT = e => e.type === "select-multiple",
    qm = e => e.type === "radio",
    sk = e => qm(e) || ko(e),
    Xd = e => Nc(e) && e.isConnected;

function ik(e, n) {
    const i = n.slice(0, -1).length;
    let r = 0;
    for (; r < i;) e = ot(e) ? r++ : e[n[r++]];
    return e
}

function ak(e) {
    for (const n in e)
        if (e.hasOwnProperty(n) && !ot(e[n])) return !1;
    return !0
}

function gt(e, n) {
    const i = Array.isArray(n) ? n : Jc(n) ? [n] : Um(n),
        r = i.length === 1 ? e : ik(e, i),
        l = i.length - 1,
        c = i[l];
    return r && delete r[c], l !== 0 && (bt(r) && Yt(r) || Array.isArray(r) && ak(r)) && gt(e, i.slice(0, -1)), e
}
var rk = e => {
    for (const n in e)
        if (Ln(e[n])) return !0;
    return !1
};

function uT(e) {
    return Array.isArray(e) || bt(e) && !rk(e)
}

function kh(e, n = {}) {
    for (const i in e) {
        const r = e[i];
        uT(r) ? (n[i] = Array.isArray(r) ? [] : {}, kh(r, n[i])) : ot(r) || (n[i] = !0)
    }
    return n
}

function za(e, n, i) {
    i || (i = kh(n));
    for (const r in e) {
        const l = e[r];
        if (uT(l)) ot(n) || Mh(i[r]) ? i[r] = kh(l, Array.isArray(l) ? [] : {}) : za(l, en(n) ? {} : n[r], i[r]);
        else {
            const c = n[r];
            i[r] = !ii(l, c)
        }
    }
    return i
}
const W0 = {
        value: !1,
        isValid: !1
    },
    J0 = {
        value: !0,
        isValid: !0
    };
var fT = e => {
        if (Array.isArray(e)) {
            if (e.length > 1) {
                const n = e.filter(i => i && i.checked && !i.disabled).map(i => i.value);
                return {
                    value: n,
                    isValid: !!n.length
                }
            }
            return e[0].checked && !e[0].disabled ? e[0].attributes && !ot(e[0].attributes.value) ? ot(e[0].value) || e[0].value === "" ? J0 : {
                value: e[0].value,
                isValid: !0
            } : J0 : W0
        }
        return W0
    },
    dT = (e, {
        valueAsNumber: n,
        valueAsDate: i,
        setValueAs: r
    }) => ot(e) ? e : n ? e === "" ? NaN : e && +e : i && fn(e) ? new Date(e) : r ? r(e) : e;
const eb = {
    isValid: !1,
    value: null
};
var hT = e => Array.isArray(e) ? e.reduce((n, i) => i && i.checked && !i.disabled ? {
    isValid: !0,
    value: i.value
} : n, eb) : eb;

function tb(e) {
    const n = e.ref;
    return Hm(n) ? n.files : qm(n) ? hT(e.refs).value : cT(n) ? [...n.selectedOptions].map(({
        value: i
    }) => i) : ko(n) ? fT(e.refs).value : dT(ot(n.value) ? e.ref.value : n.value, e)
}
var ok = (e, n, i, r) => {
        const l = {};
        for (const c of e) {
            const f = ye(n, c);
            f && et(l, c, f._f)
        }
        return {
            criteriaMode: i,
            names: [...e],
            fields: l,
            shouldUseNativeValidation: r
        }
    },
    Oc = e => e instanceof RegExp,
    io = e => ot(e) ? e : Oc(e) ? e.source : bt(e) ? Oc(e.value) ? e.value.source : e.value : e,
    nb = e => ({
        isOnSubmit: !e || e === Bn.onSubmit,
        isOnBlur: e === Bn.onBlur,
        isOnChange: e === Bn.onChange,
        isOnAll: e === Bn.all,
        isOnTouch: e === Bn.onTouched
    });
const sb = "AsyncFunction";
var lk = e => !!e && !!e.validate && !!(Ln(e.validate) && e.validate.constructor.name === sb || bt(e.validate) && Object.values(e.validate).find(n => n.constructor.name === sb)),
    ck = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate),
    ib = (e, n, i) => !i && (n.watchAll || n.watch.has(e) || [...n.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const mo = (e, n, i, r) => {
    for (const l of i || Object.keys(e)) {
        const c = ye(e, l);
        if (c) {
            const {
                _f: f,
                ...d
            } = c;
            if (f) {
                if (f.refs && f.refs[0] && n(f.refs[0], l) && !r) return !0;
                if (f.ref && n(f.ref, f.name) && !r) return !0;
                if (mo(d, n)) break
            } else if (bt(d) && mo(d, n)) break
        }
    }
};

function ab(e, n, i) {
    const r = ye(e, i);
    if (r || Jc(i)) return {
        error: r,
        name: i
    };
    const l = i.split(".");
    for (; l.length;) {
        const c = l.join("."),
            f = ye(n, c),
            d = ye(e, c);
        if (f && !Array.isArray(f) && i !== c) return {
            name: i
        };
        if (d && d.type) return {
            name: c,
            error: d
        };
        if (d && d.root && d.root.type) return {
            name: `${c}.root`,
            error: d.root
        };
        l.pop()
    }
    return {
        name: i
    }
}
var uk = (e, n, i, r) => {
        i(e);
        const {
            name: l,
            ...c
        } = e;
        return Yt(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find(f => n[f] === (!r || Bn.all))
    },
    fk = (e, n, i) => !e || !n || e === n || ho(e).some(r => r && (i ? r === n : r.startsWith(n) || n.startsWith(r))),
    dk = (e, n, i, r, l) => l.isOnAll ? !1 : !i && l.isOnTouch ? !(n || e) : (i ? r.isOnBlur : l.isOnBlur) ? !e : (i ? r.isOnChange : l.isOnChange) ? e : !0,
    hk = (e, n) => !Pm(ye(e, n)).length && gt(e, n),
    mk = (e, n, i) => {
        const r = ho(ye(e, i));
        return et(r, "root", n[i]), et(e, i, r), e
    };

function rb(e, n, i = "validate") {
    if (fn(e) || Array.isArray(e) && e.every(fn) || Wn(e) && !e) return {
        type: i,
        message: fn(e) ? e : "",
        ref: n
    }
}
var ka = e => bt(e) && !Oc(e) ? e : {
        value: e,
        message: ""
    },
    ob = async (e, n, i, r, l, c) => {
        const {
            ref: f,
            refs: d,
            required: m,
            maxLength: p,
            minLength: y,
            min: x,
            max: b,
            pattern: S,
            validate: E,
            name: _,
            valueAsNumber: R,
            mount: D
        } = e._f, j = ye(i, _);
        if (!D || n.has(_)) return {};
        const M = d ? d[0] : f,
            H = ne => {
                l && M.reportValidity && (M.setCustomValidity(Wn(ne) ? "" : ne || ""), M.reportValidity())
            },
            z = {},
            I = qm(f),
            W = ko(f),
            F = I || W,
            le = (R || Hm(f)) && ot(f.value) && ot(j) || Nc(f) && f.value === "" || j === "" || Array.isArray(j) && !j.length,
            ve = oT.bind(null, _, r, z),
            Re = (ne, fe, ee, de = Ss.maxLength, V = Ss.minLength) => {
                const Z = ne ? fe : ee;
                z[_] = {
                    type: ne ? de : V,
                    message: Z,
                    ref: f,
                    ...ve(ne ? de : V, Z)
                }
            };
        if (c ? !Array.isArray(j) || !j.length : m && (!F && (le || en(j)) || Wn(j) && !j || W && !fT(d).isValid || I && !hT(d).isValid)) {
            const {
                value: ne,
                message: fe
            } = fn(m) ? {
                value: !!m,
                message: m
            } : ka(m);
            if (ne && (z[_] = {
                    type: Ss.required,
                    message: fe,
                    ref: M,
                    ...ve(Ss.required, fe)
                }, !r)) return H(fe), z
        }
        if (!le && (!en(x) || !en(b))) {
            let ne, fe;
            const ee = ka(b),
                de = ka(x);
            if (!en(j) && !isNaN(j)) {
                const V = f.valueAsNumber || j && +j;
                en(ee.value) || (ne = V > ee.value), en(de.value) || (fe = V < de.value)
            } else {
                const V = f.valueAsDate || new Date(j),
                    Z = T => new Date(new Date().toDateString() + " " + T),
                    K = f.type == "time",
                    re = f.type == "week";
                fn(ee.value) && j && (ne = K ? Z(j) > Z(ee.value) : re ? j > ee.value : V > new Date(ee.value)), fn(de.value) && j && (fe = K ? Z(j) < Z(de.value) : re ? j < de.value : V < new Date(de.value))
            }
            if ((ne || fe) && (Re(!!ne, ee.message, de.message, Ss.max, Ss.min), !r)) return H(z[_].message), z
        }
        if ((p || y) && !le && (fn(j) || c && Array.isArray(j))) {
            const ne = ka(p),
                fe = ka(y),
                ee = !en(ne.value) && j.length > +ne.value,
                de = !en(fe.value) && j.length < +fe.value;
            if ((ee || de) && (Re(ee, ne.message, fe.message), !r)) return H(z[_].message), z
        }
        if (S && !le && fn(j)) {
            const {
                value: ne,
                message: fe
            } = ka(S);
            if (Oc(ne) && !j.match(ne) && (z[_] = {
                    type: Ss.pattern,
                    message: fe,
                    ref: f,
                    ...ve(Ss.pattern, fe)
                }, !r)) return H(fe), z
        }
        if (E) {
            if (Ln(E)) {
                const ne = await E(j, i),
                    fe = rb(ne, M);
                if (fe && (z[_] = {
                        ...fe,
                        ...ve(Ss.validate, fe.message)
                    }, !r)) return H(fe.message), z
            } else if (bt(E)) {
                let ne = {};
                for (const fe in E) {
                    if (!Yt(ne) && !r) break;
                    const ee = rb(await E[fe](j, i), M, fe);
                    ee && (ne = {
                        ...ee,
                        ...ve(fe, ee.message)
                    }, H(ee.message), r && (z[_] = ne))
                }
                if (!Yt(ne) && (z[_] = {
                        ref: M,
                        ...ne
                    }, !r)) return z
            }
        }
        return H(!0), z
    };
const pk = {
    mode: Bn.onSubmit,
    reValidateMode: Bn.onChange,
    shouldFocusError: !0
};

function yk(e = {}) {
    let n = {
            ...pk,
            ...e
        },
        i = {
            submitCount: 0,
            isDirty: !1,
            isReady: !1,
            isLoading: Ln(n.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: n.errors || {},
            disabled: n.disabled || !1
        },
        r = {},
        l = bt(n.defaultValues) || bt(n.values) ? At(n.defaultValues || n.values) || {} : {},
        c = n.shouldUnregister ? {} : At(l),
        f = {
            action: !1,
            mount: !1,
            watch: !1,
            keepIsValid: !1
        },
        d = {
            mount: new Set,
            disabled: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        m, p = 0;
    const y = {
            isDirty: !1,
            dirtyFields: !1,
            validatingFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        x = {
            ...y
        };
    let b = {
        ...x
    };
    const S = {
            array: $0(),
            state: $0()
        },
        E = n.criteriaMode === Bn.all,
        _ = N => B => {
            clearTimeout(p), p = setTimeout(N, B)
        },
        R = async N => {
            if (!f.keepIsValid && !n.disabled && (x.isValid || b.isValid || N)) {
                let B;
                n.resolver ? (B = Yt((await F()).errors), D()) : B = await ve(r, !0), B !== i.isValid && S.state.next({
                    isValid: B
                })
            }
        }, D = (N, B) => {
            !n.disabled && (x.isValidating || x.validatingFields || b.isValidating || b.validatingFields) && ((N || Array.from(d.mount)).forEach(Y => {
                Y && (B ? et(i.validatingFields, Y, B) : gt(i.validatingFields, Y))
            }), S.state.next({
                validatingFields: i.validatingFields,
                isValidating: !Yt(i.validatingFields)
            }))
        }, j = (N, B = [], Y, oe, ie = !0, J = !0) => {
            if (oe && Y && !n.disabled) {
                if (f.action = !0, J && Array.isArray(ye(r, N))) {
                    const ue = Y(ye(r, N), oe.argA, oe.argB);
                    ie && et(r, N, ue)
                }
                if (J && Array.isArray(ye(i.errors, N))) {
                    const ue = Y(ye(i.errors, N), oe.argA, oe.argB);
                    ie && et(i.errors, N, ue), hk(i.errors, N)
                }
                if ((x.touchedFields || b.touchedFields) && J && Array.isArray(ye(i.touchedFields, N))) {
                    const ue = Y(ye(i.touchedFields, N), oe.argA, oe.argB);
                    ie && et(i.touchedFields, N, ue)
                }(x.dirtyFields || b.dirtyFields) && (i.dirtyFields = za(l, c)), S.state.next({
                    name: N,
                    isDirty: ne(N, B),
                    dirtyFields: i.dirtyFields,
                    errors: i.errors,
                    isValid: i.isValid
                })
            } else et(c, N, B)
        }, M = (N, B) => {
            et(i.errors, N, B), S.state.next({
                errors: i.errors
            })
        }, H = N => {
            i.errors = N, S.state.next({
                errors: i.errors,
                isValid: !1
            })
        }, z = (N, B, Y, oe) => {
            const ie = ye(r, N);
            if (ie) {
                const J = ye(c, N, ot(Y) ? ye(l, N) : Y);
                ot(J) || oe && oe.defaultChecked || B ? et(c, N, B ? J : tb(ie._f)) : de(N, J), f.mount && !f.action && R()
            }
        }, I = (N, B, Y, oe, ie) => {
            let J = !1,
                ue = !1;
            const Ve = {
                name: N
            };
            if (!n.disabled) {
                if (!Y || oe) {
                    (x.isDirty || b.isDirty) && (ue = i.isDirty, i.isDirty = Ve.isDirty = ne(), J = ue !== Ve.isDirty);
                    const je = ii(ye(l, N), B);
                    ue = !!ye(i.dirtyFields, N), je ? gt(i.dirtyFields, N) : et(i.dirtyFields, N, !0), Ve.dirtyFields = i.dirtyFields, J = J || (x.dirtyFields || b.dirtyFields) && ue !== !je
                }
                if (Y) {
                    const je = ye(i.touchedFields, N);
                    je || (et(i.touchedFields, N, Y), Ve.touchedFields = i.touchedFields, J = J || (x.touchedFields || b.touchedFields) && je !== Y)
                }
                J && ie && S.state.next(Ve)
            }
            return J ? Ve : {}
        }, W = (N, B, Y, oe) => {
            const ie = ye(i.errors, N),
                J = (x.isValid || b.isValid) && Wn(B) && i.isValid !== B;
            if (n.delayError && Y ? (m = _(() => M(N, Y)), m(n.delayError)) : (clearTimeout(p), m = null, Y ? et(i.errors, N, Y) : gt(i.errors, N)), (Y ? !ii(ie, Y) : ie) || !Yt(oe) || J) {
                const ue = {
                    ...oe,
                    ...J && Wn(B) ? {
                        isValid: B
                    } : {},
                    errors: i.errors,
                    name: N
                };
                i = {
                    ...i,
                    ...ue
                }, S.state.next(ue)
            }
        }, F = async N => (D(N, !0), await n.resolver(c, n.context, ok(N || d.mount, r, n.criteriaMode, n.shouldUseNativeValidation))), le = async N => {
            const {
                errors: B
            } = await F(N);
            if (D(N), N)
                for (const Y of N) {
                    const oe = ye(B, Y);
                    oe ? et(i.errors, Y, oe) : gt(i.errors, Y)
                } else i.errors = B;
            return B
        }, ve = async (N, B, Y = {
            valid: !0
        }) => {
            for (const oe in N) {
                const ie = N[oe];
                if (ie) {
                    const {
                        _f: J,
                        ...ue
                    } = ie;
                    if (J) {
                        const Ve = d.array.has(J.name),
                            je = ie._f && lk(ie._f);
                        je && x.validatingFields && D([J.name], !0);
                        const jt = await ob(ie, d.disabled, c, E, n.shouldUseNativeValidation && !B, Ve);
                        if (je && x.validatingFields && D([J.name]), jt[J.name] && (Y.valid = !1, B || e.shouldUseNativeValidation)) break;
                        !B && (ye(jt, J.name) ? Ve ? mk(i.errors, jt, J.name) : et(i.errors, J.name, jt[J.name]) : gt(i.errors, J.name))
                    }!Yt(ue) && await ve(ue, B, Y)
                }
            }
            return Y.valid
        }, Re = () => {
            for (const N of d.unMount) {
                const B = ye(r, N);
                B && (B._f.refs ? B._f.refs.every(Y => !Xd(Y)) : !Xd(B._f.ref)) && He(N)
            }
            d.unMount = new Set
        }, ne = (N, B) => !n.disabled && (N && B && et(c, N, B), !ii(X(), l)), fe = (N, B, Y) => tk(N, d, {
            ...f.mount ? c : ot(B) ? l : fn(N) ? {
                [N]: B
            } : B
        }, Y, B), ee = N => Pm(ye(f.mount ? c : l, N, n.shouldUnregister ? ye(l, N, []) : [])), de = (N, B, Y = {}) => {
            const oe = ye(r, N);
            let ie = B;
            if (oe) {
                const J = oe._f;
                J && (!J.disabled && et(c, N, dT(B, J)), ie = Nc(J.ref) && en(B) ? "" : B, cT(J.ref) ? [...J.ref.options].forEach(ue => ue.selected = ie.includes(ue.value)) : J.refs ? ko(J.ref) ? J.refs.forEach(ue => {
                    (!ue.defaultChecked || !ue.disabled) && (Array.isArray(ie) ? ue.checked = !!ie.find(Ve => Ve === ue.value) : ue.checked = ie === ue.value || !!ie)
                }) : J.refs.forEach(ue => ue.checked = ue.value === ie) : Hm(J.ref) ? J.ref.value = "" : (J.ref.value = ie, J.ref.type || S.state.next({
                    name: N,
                    values: At(c)
                })))
            }(Y.shouldDirty || Y.shouldTouch) && I(N, ie, Y.shouldTouch, Y.shouldDirty, !0), Y.shouldValidate && T(N)
        }, V = (N, B, Y) => {
            for (const oe in B) {
                if (!B.hasOwnProperty(oe)) return;
                const ie = B[oe],
                    J = N + "." + oe,
                    ue = ye(r, J);
                (d.array.has(N) || bt(ie) || ue && !ue._f) && !qi(ie) ? V(J, ie, Y) : de(J, ie, Y)
            }
        }, Z = (N, B, Y = {}) => {
            const oe = ye(r, N),
                ie = d.array.has(N),
                J = At(B);
            et(c, N, J), ie ? (S.array.next({
                name: N,
                values: At(c)
            }), (x.isDirty || x.dirtyFields || b.isDirty || b.dirtyFields) && Y.shouldDirty && S.state.next({
                name: N,
                dirtyFields: za(l, c),
                isDirty: ne(N, J)
            })) : oe && !oe._f && !en(J) ? V(N, J, Y) : de(N, J, Y), ib(N, d) ? S.state.next({
                ...i,
                name: N,
                values: At(c)
            }) : S.state.next({
                name: f.mount ? N : void 0,
                values: At(c)
            })
        }, K = async N => {
            f.mount = !0;
            const B = N.target;
            let Y = B.name,
                oe = !0;
            const ie = ye(r, Y),
                J = je => {
                    oe = Number.isNaN(je) || qi(je) && isNaN(je.getTime()) || ii(je, ye(c, Y, je))
                },
                ue = nb(n.mode),
                Ve = nb(n.reValidateMode);
            if (ie) {
                let je, jt;
                const as = B.type ? tb(ie._f) : K4(N),
                    Gn = N.type === I0.BLUR || N.type === I0.FOCUS_OUT,
                    Xi = !ck(ie._f) && !n.resolver && !ye(i.errors, Y) && !ie._f.deps || dk(Gn, ye(i.touchedFields, Y), i.isSubmitted, Ve, ue),
                    Rs = ib(Y, d, Gn);
                et(c, Y, as), Gn ? (!B || !B.readOnly) && (ie._f.onBlur && ie._f.onBlur(N), m && m(0)) : ie._f.onChange && ie._f.onChange(N);
                const On = I(Y, as, Gn),
                    Ki = !Yt(On) || Rs;
                if (!Gn && S.state.next({
                        name: Y,
                        type: N.type,
                        values: At(c)
                    }), Xi) return (x.isValid || b.isValid) && (n.mode === "onBlur" ? Gn && R() : Gn || R()), Ki && S.state.next({
                    name: Y,
                    ...Rs ? {} : On
                });
                if (!Gn && Rs && S.state.next({
                        ...i
                    }), n.resolver) {
                    const {
                        errors: Ns
                    } = await F([Y]);
                    if (D([Y]), J(as), oe) {
                        const nu = ab(i.errors, r, Y),
                            ir = ab(Ns, r, nu.name || Y);
                        je = ir.error, Y = ir.name, jt = Yt(Ns)
                    }
                } else D([Y], !0), je = (await ob(ie, d.disabled, c, E, n.shouldUseNativeValidation))[Y], D([Y]), J(as), oe && (je ? jt = !1 : (x.isValid || b.isValid) && (jt = await ve(r, !0)));
                oe && (ie._f.deps && (!Array.isArray(ie._f.deps) || ie._f.deps.length > 0) && T(ie._f.deps), W(Y, jt, je, On))
            }
        }, re = (N, B) => {
            if (ye(i.errors, B) && N.focus) return N.focus(), 1
        }, T = async (N, B = {}) => {
            let Y, oe;
            const ie = ho(N);
            if (n.resolver) {
                const J = await le(ot(N) ? N : ie);
                Y = Yt(J), oe = N ? !ie.some(ue => ye(J, ue)) : Y
            } else N ? (oe = (await Promise.all(ie.map(async J => {
                const ue = ye(r, J);
                return await ve(ue && ue._f ? {
                    [J]: ue
                } : ue)
            }))).every(Boolean), !(!oe && !i.isValid) && R()) : oe = Y = await ve(r);
            return S.state.next({
                ...!fn(N) || (x.isValid || b.isValid) && Y !== i.isValid ? {} : {
                    name: N
                },
                ...n.resolver || !N ? {
                    isValid: Y
                } : {},
                errors: i.errors
            }), B.shouldFocus && !oe && mo(r, re, N ? ie : d.mount), oe
        }, X = (N, B) => {
            let Y = {
                ...f.mount ? c : l
            };
            return B && (Y = lT(B.dirtyFields ? i.dirtyFields : i.touchedFields, Y)), ot(N) ? Y : fn(N) ? ye(Y, N) : N.map(oe => ye(Y, oe))
        }, ae = (N, B) => ({
            invalid: !!ye((B || i).errors, N),
            isDirty: !!ye((B || i).dirtyFields, N),
            error: ye((B || i).errors, N),
            isValidating: !!ye(i.validatingFields, N),
            isTouched: !!ye((B || i).touchedFields, N)
        }), se = N => {
            const B = N ? ho(N) : void 0;
            B?.forEach(Y => gt(i.errors, Y)), B ? B.forEach(Y => {
                S.state.next({
                    name: Y,
                    errors: i.errors
                })
            }) : S.state.next({
                errors: {}
            })
        }, xe = (N, B, Y) => {
            const oe = (ye(r, N, {
                    _f: {}
                })._f || {}).ref,
                ie = ye(i.errors, N) || {},
                {
                    ref: J,
                    message: ue,
                    type: Ve,
                    ...je
                } = ie;
            et(i.errors, N, {
                ...je,
                ...B,
                ref: oe
            }), S.state.next({
                name: N,
                errors: i.errors,
                isValid: !1
            }), Y && Y.shouldFocus && oe && oe.focus && oe.focus()
        }, Ae = (N, B) => Ln(N) ? S.state.subscribe({
            next: Y => "values" in Y && N(fe(void 0, B), Y)
        }) : fe(N, B, !0), he = N => S.state.subscribe({
            next: B => {
                fk(N.name, B.name, N.exact) && uk(B, N.formState || x, eu, N.reRenderRoot) && N.callback({
                    values: {
                        ...c
                    },
                    ...i,
                    ...B,
                    defaultValues: l
                })
            }
        }).unsubscribe, tt = N => (f.mount = !0, b = {
            ...b,
            ...N.formState
        }, he({
            ...N,
            formState: {
                ...y,
                ...N.formState
            }
        })), He = (N, B = {}) => {
            for (const Y of N ? ho(N) : d.mount) d.mount.delete(Y), d.array.delete(Y), B.keepValue || (gt(r, Y), gt(c, Y)), !B.keepError && gt(i.errors, Y), !B.keepDirty && gt(i.dirtyFields, Y), !B.keepTouched && gt(i.touchedFields, Y), !B.keepIsValidating && gt(i.validatingFields, Y), !n.shouldUnregister && !B.keepDefaultValue && gt(l, Y);
            S.state.next({
                values: At(c)
            }), S.state.next({
                ...i,
                ...B.keepDirty ? {
                    isDirty: ne()
                } : {}
            }), !B.keepIsValid && R()
        }, Ye = ({
            disabled: N,
            name: B
        }) => {
            if (Wn(N) && f.mount || N || d.disabled.has(B)) {
                const ie = d.disabled.has(B) !== !!N;
                N ? d.disabled.add(B) : d.disabled.delete(B), ie && f.mount && !f.action && R()
            }
        }, mn = (N, B = {}) => {
            let Y = ye(r, N);
            const oe = Wn(B.disabled) || Wn(n.disabled);
            return et(r, N, {
                ...Y || {},
                _f: {
                    ...Y && Y._f ? Y._f : {
                        ref: {
                            name: N
                        }
                    },
                    name: N,
                    mount: !0,
                    ...B
                }
            }), d.mount.add(N), Y ? Ye({
                disabled: Wn(B.disabled) ? B.disabled : n.disabled,
                name: N
            }) : z(N, !0, B.value), {
                ...oe ? {
                    disabled: B.disabled || n.disabled
                } : {},
                ...n.progressive ? {
                    required: !!B.required,
                    min: io(B.min),
                    max: io(B.max),
                    minLength: io(B.minLength),
                    maxLength: io(B.maxLength),
                    pattern: io(B.pattern)
                } : {},
                name: N,
                onChange: K,
                onBlur: K,
                ref: ie => {
                    if (ie) {
                        mn(N, B), Y = ye(r, N);
                        const J = ot(ie.value) && ie.querySelectorAll && ie.querySelectorAll("input,select,textarea")[0] || ie,
                            ue = sk(J),
                            Ve = Y._f.refs || [];
                        if (ue ? Ve.find(je => je === J) : J === Y._f.ref) return;
                        et(r, N, {
                            _f: {
                                ...Y._f,
                                ...ue ? {
                                    refs: [...Ve.filter(Xd), J, ...Array.isArray(ye(l, N)) ? [{}] : []],
                                    ref: {
                                        type: J.type,
                                        name: N
                                    }
                                } : {
                                    ref: J
                                }
                            }
                        }), z(N, !1, void 0, J)
                    } else Y = ye(r, N, {}), Y._f && (Y._f.mount = !1), (n.shouldUnregister || B.shouldUnregister) && !(I4(d.array, N) && f.action) && d.unMount.add(N)
                }
            }
        }, Ht = () => n.shouldFocusError && mo(r, re, d.mount), pn = N => {
            Wn(N) && (S.state.next({
                disabled: N
            }), mo(r, (B, Y) => {
                const oe = ye(r, Y);
                oe && (B.disabled = oe._f.disabled || N, Array.isArray(oe._f.refs) && oe._f.refs.forEach(ie => {
                    ie.disabled = oe._f.disabled || N
                }))
            }, 0, !1))
        }, qt = (N, B) => async Y => {
            let oe;
            Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
            let ie = At(c);
            if (S.state.next({
                    isSubmitting: !0
                }), n.resolver) {
                const {
                    errors: J,
                    values: ue
                } = await F();
                D(), i.errors = J, ie = At(ue)
            } else await ve(r);
            if (d.disabled.size)
                for (const J of d.disabled) gt(ie, J);
            if (gt(i.errors, "root"), Yt(i.errors)) {
                S.state.next({
                    errors: {}
                });
                try {
                    await N(ie, Y)
                } catch (J) {
                    oe = J
                }
            } else B && await B({
                ...i.errors
            }, Y), Ht(), setTimeout(Ht);
            if (S.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: Yt(i.errors) && !oe,
                    submitCount: i.submitCount + 1,
                    errors: i.errors
                }), oe) throw oe
        }, Yn = (N, B = {}) => {
            ye(r, N) && (ot(B.defaultValue) ? Z(N, At(ye(l, N))) : (Z(N, B.defaultValue), et(l, N, At(B.defaultValue))), B.keepTouched || gt(i.touchedFields, N), B.keepDirty || (gt(i.dirtyFields, N), i.isDirty = B.defaultValue ? ne(N, At(ye(l, N))) : ne()), B.keepError || (gt(i.errors, N), x.isValid && R()), S.state.next({
                ...i
            }))
        }, Vo = (N, B = {}) => {
            const Y = N ? At(N) : l,
                oe = At(Y),
                ie = Yt(N),
                J = ie ? l : oe;
            if (B.keepDefaultValues || (l = Y), !B.keepValues) {
                if (B.keepDirtyValues) {
                    const ue = new Set([...d.mount, ...Object.keys(za(l, c))]);
                    for (const Ve of Array.from(ue)) {
                        const je = ye(i.dirtyFields, Ve),
                            jt = ye(c, Ve),
                            as = ye(J, Ve);
                        je && !ot(jt) ? et(J, Ve, jt) : !je && !ot(as) && Z(Ve, as)
                    }
                } else {
                    if (Bm && ot(N))
                        for (const ue of d.mount) {
                            const Ve = ye(r, ue);
                            if (Ve && Ve._f) {
                                const je = Array.isArray(Ve._f.refs) ? Ve._f.refs[0] : Ve._f.ref;
                                if (Nc(je)) {
                                    const jt = je.closest("form");
                                    if (jt) {
                                        jt.reset();
                                        break
                                    }
                                }
                            }
                        }
                    if (B.keepFieldsRef)
                        for (const ue of d.mount) Z(ue, ye(J, ue));
                    else r = {}
                }
                c = n.shouldUnregister ? B.keepDefaultValues ? At(l) : {} : At(J), S.array.next({
                    values: {
                        ...J
                    }
                }), S.state.next({
                    values: {
                        ...J
                    }
                })
            }
            d = {
                mount: B.keepDirtyValues ? d.mount : new Set,
                unMount: new Set,
                array: new Set,
                disabled: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, f.mount = !x.isValid || !!B.keepIsValid || !!B.keepDirtyValues || !n.shouldUnregister && !Yt(J), f.watch = !!n.shouldUnregister, f.keepIsValid = !!B.keepIsValid, f.action = !1, B.keepErrors || (i.errors = {}), S.state.next({
                submitCount: B.keepSubmitCount ? i.submitCount : 0,
                isDirty: ie ? !1 : B.keepDirty ? i.isDirty : !!(B.keepDefaultValues && !ii(N, l)),
                isSubmitted: B.keepIsSubmitted ? i.isSubmitted : !1,
                dirtyFields: ie ? {} : B.keepDirtyValues ? B.keepDefaultValues && c ? za(l, c) : i.dirtyFields : B.keepDefaultValues && N ? za(l, N) : B.keepDirty ? i.dirtyFields : {},
                touchedFields: B.keepTouched ? i.touchedFields : {},
                errors: B.keepErrors ? i.errors : {},
                isSubmitSuccessful: B.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
                isSubmitting: !1,
                defaultValues: l
            })
        }, zo = (N, B) => Vo(Ln(N) ? N(c) : N, {
            ...n.resetOptions,
            ...B
        }), yn = (N, B = {}) => {
            const Y = ye(r, N),
                oe = Y && Y._f;
            if (oe) {
                const ie = oe.refs ? oe.refs[0] : oe.ref;
                ie.focus && setTimeout(() => {
                    ie.focus(), B.shouldSelect && Ln(ie.select) && ie.select()
                })
            }
        }, eu = N => {
            i = {
                ...i,
                ...N
            }
        }, sr = {
            control: {
                register: mn,
                unregister: He,
                getFieldState: ae,
                handleSubmit: qt,
                setError: xe,
                _subscribe: he,
                _runSchema: F,
                _updateIsValidating: D,
                _focusError: Ht,
                _getWatch: fe,
                _getDirty: ne,
                _setValid: R,
                _setFieldArray: j,
                _setDisabledField: Ye,
                _setErrors: H,
                _getFieldArray: ee,
                _reset: Vo,
                _resetDefaultValues: () => Ln(n.defaultValues) && n.defaultValues().then(N => {
                    zo(N, n.resetOptions), S.state.next({
                        isLoading: !1
                    })
                }),
                _removeUnmounted: Re,
                _disableForm: pn,
                _subjects: S,
                _proxyFormState: x,
                get _fields() {
                    return r
                },
                get _formValues() {
                    return c
                },
                get _state() {
                    return f
                },
                set _state(N) {
                    f = N
                },
                get _defaultValues() {
                    return l
                },
                get _names() {
                    return d
                },
                set _names(N) {
                    d = N
                },
                get _formState() {
                    return i
                },
                get _options() {
                    return n
                },
                set _options(N) {
                    n = {
                        ...n,
                        ...N
                    }
                }
            },
            subscribe: tt,
            trigger: T,
            register: mn,
            handleSubmit: qt,
            watch: Ae,
            setValue: Z,
            getValues: X,
            reset: zo,
            resetField: Yn,
            clearErrors: se,
            unregister: He,
            setError: xe,
            setFocus: yn,
            getFieldState: ae
        };
    return {
        ...sr,
        formControl: sr
    }
}

function gk(e = {}) {
    const n = rt.useRef(void 0),
        i = rt.useRef(void 0),
        [r, l] = rt.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: Ln(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            isReady: !1,
            defaultValues: Ln(e.defaultValues) ? void 0 : e.defaultValues
        });
    if (!n.current)
        if (e.formControl) n.current = {
            ...e.formControl,
            formState: r
        }, e.defaultValues && !Ln(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
        else {
            const {
                formControl: f,
                ...d
            } = yk(e);
            n.current = {
                ...d,
                formState: r
            }
        } const c = n.current.control;
    return c._options = e, ek(() => {
        const f = c._subscribe({
            formState: c._proxyFormState,
            callback: () => l({
                ...c._formState
            }),
            reRenderRoot: !0
        });
        return l(d => ({
            ...d,
            isReady: !0
        })), c._formState.isReady = !0, f
    }, [c]), rt.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]), rt.useEffect(() => {
        e.mode && (c._options.mode = e.mode), e.reValidateMode && (c._options.reValidateMode = e.reValidateMode)
    }, [c, e.mode, e.reValidateMode]), rt.useEffect(() => {
        e.errors && (c._setErrors(e.errors), c._focusError())
    }, [c, e.errors]), rt.useEffect(() => {
        e.shouldUnregister && c._subjects.state.next({
            values: c._getWatch()
        })
    }, [c, e.shouldUnregister]), rt.useEffect(() => {
        if (c._proxyFormState.isDirty) {
            const f = c._getDirty();
            f !== r.isDirty && c._subjects.state.next({
                isDirty: f
            })
        }
    }, [c, r.isDirty]), rt.useEffect(() => {
        var f;
        e.values && !ii(e.values, i.current) ? (c._reset(e.values, {
            keepFieldsRef: !0,
            ...c._options.resetOptions
        }), !((f = c._options.resetOptions) === null || f === void 0) && f.keepIsValid || c._setValid(), i.current = e.values, l(d => ({
            ...d
        }))) : c._resetDefaultValues()
    }, [c, e.values]), rt.useEffect(() => {
        c._state.mount || (c._setValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({
            ...c._formState
        })), c._removeUnmounted()
    }), n.current.formState = rt.useMemo(() => J4(r, c), [c, r]), n.current
}
const lb = (e, n, i) => {
        if (e && "reportValidity" in e) {
            const r = ye(i, n);
            e.setCustomValidity(r && r.message || ""), e.reportValidity()
        }
    },
    mT = (e, n) => {
        for (const i in n.fields) {
            const r = n.fields[i];
            r && r.ref && "reportValidity" in r.ref ? lb(r.ref, i, e) : r.refs && r.refs.forEach(l => lb(l, i, e))
        }
    },
    vk = (e, n) => {
        n.shouldUseNativeValidation && mT(e, n);
        const i = {};
        for (const r in e) {
            const l = ye(n.fields, r),
                c = Object.assign(e[r] || {}, {
                    ref: l && l.ref
                });
            if (xk(n.names || Object.keys(e), r)) {
                const f = Object.assign({}, ye(i, r));
                et(f, "root", c), et(i, r, f)
            } else et(i, r, c)
        }
        return i
    },
    xk = (e, n) => e.some(i => i.startsWith(n + "."));
var bk = function(e, n) {
        for (var i = {}; e.length;) {
            var r = e[0],
                l = r.code,
                c = r.message,
                f = r.path.join(".");
            if (!i[f])
                if ("unionErrors" in r) {
                    var d = r.unionErrors[0].errors[0];
                    i[f] = {
                        message: d.message,
                        type: d.code
                    }
                } else i[f] = {
                    message: c,
                    type: l
                };
            if ("unionErrors" in r && r.unionErrors.forEach(function(y) {
                    return y.errors.forEach(function(x) {
                        return e.push(x)
                    })
                }), n) {
                var m = i[f].types,
                    p = m && m[r.code];
                i[f] = oT(f, n, i, l, p ? [].concat(p, r.message) : r.message)
            }
            e.shift()
        }
        return i
    },
    wk = function(e, n, i) {
        return i === void 0 && (i = {}),
            function(r, l, c) {
                try {
                    return Promise.resolve((function(f, d) {
                        try {
                            var m = Promise.resolve(e[i.mode === "sync" ? "parse" : "parseAsync"](r, n)).then(function(p) {
                                return c.shouldUseNativeValidation && mT({}, c), {
                                    errors: {},
                                    values: i.raw ? r : p
                                }
                            })
                        } catch (p) {
                            return d(p)
                        }
                        return m && m.then ? m.then(void 0, d) : m
                    })(0, function(f) {
                        if ((function(d) {
                                return Array.isArray(d?.errors)
                            })(f)) return {
                            values: {},
                            errors: vk(bk(f.errors, !c.shouldUseNativeValidation && c.criteriaMode === "all"), c)
                        };
                        throw f
                    }))
                } catch (f) {
                    return Promise.reject(f)
                }
            }
    },
    Ze;
(function(e) {
    e.assertEqual = l => {};

    function n(l) {}
    e.assertIs = n;

    function i(l) {
        throw new Error
    }
    e.assertNever = i, e.arrayToEnum = l => {
        const c = {};
        for (const f of l) c[f] = f;
        return c
    }, e.getValidEnumValues = l => {
        const c = e.objectKeys(l).filter(d => typeof l[l[d]] != "number"),
            f = {};
        for (const d of c) f[d] = l[d];
        return e.objectValues(f)
    }, e.objectValues = l => e.objectKeys(l).map(function(c) {
        return l[c]
    }), e.objectKeys = typeof Object.keys == "function" ? l => Object.keys(l) : l => {
        const c = [];
        for (const f in l) Object.prototype.hasOwnProperty.call(l, f) && c.push(f);
        return c
    }, e.find = (l, c) => {
        for (const f of l)
            if (c(f)) return f
    }, e.isInteger = typeof Number.isInteger == "function" ? l => Number.isInteger(l) : l => typeof l == "number" && Number.isFinite(l) && Math.floor(l) === l;

    function r(l, c = " | ") {
        return l.map(f => typeof f == "string" ? `'${f}'` : f).join(c)
    }
    e.joinValues = r, e.jsonStringifyReplacer = (l, c) => typeof c == "bigint" ? c.toString() : c
})(Ze || (Ze = {}));
var cb;
(function(e) {
    e.mergeShapes = (n, i) => ({
        ...n,
        ...i
    })
})(cb || (cb = {}));
const we = Ze.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    si = e => {
        switch (typeof e) {
            case "undefined":
                return we.undefined;
            case "string":
                return we.string;
            case "number":
                return Number.isNaN(e) ? we.nan : we.number;
            case "boolean":
                return we.boolean;
            case "function":
                return we.function;
            case "bigint":
                return we.bigint;
            case "symbol":
                return we.symbol;
            case "object":
                return Array.isArray(e) ? we.array : e === null ? we.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? we.promise : typeof Map < "u" && e instanceof Map ? we.map : typeof Set < "u" && e instanceof Set ? we.set : typeof Date < "u" && e instanceof Date ? we.date : we.object;
            default:
                return we.unknown
        }
    },
    te = Ze.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class _s extends Error {
    get errors() {
        return this.issues
    }
    constructor(n) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const i = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : this.__proto__ = i, this.name = "ZodError", this.issues = n
    }
    format(n) {
        const i = n || function(c) {
                return c.message
            },
            r = {
                _errors: []
            },
            l = c => {
                for (const f of c.issues)
                    if (f.code === "invalid_union") f.unionErrors.map(l);
                    else if (f.code === "invalid_return_type") l(f.returnTypeError);
                else if (f.code === "invalid_arguments") l(f.argumentsError);
                else if (f.path.length === 0) r._errors.push(i(f));
                else {
                    let d = r,
                        m = 0;
                    for (; m < f.path.length;) {
                        const p = f.path[m];
                        m === f.path.length - 1 ? (d[p] = d[p] || {
                            _errors: []
                        }, d[p]._errors.push(i(f))) : d[p] = d[p] || {
                            _errors: []
                        }, d = d[p], m++
                    }
                }
            };
        return l(this), r
    }
    static assert(n) {
        if (!(n instanceof _s)) throw new Error(`Not a ZodError: ${n}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Ze.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(n = i => i.message) {
        const i = {},
            r = [];
        for (const l of this.issues)
            if (l.path.length > 0) {
                const c = l.path[0];
                i[c] = i[c] || [], i[c].push(n(l))
            } else r.push(n(l));
        return {
            formErrors: r,
            fieldErrors: i
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
_s.create = e => new _s(e);
const Vh = (e, n) => {
    let i;
    switch (e.code) {
        case te.invalid_type:
            e.received === we.undefined ? i = "Required" : i = `Expected ${e.expected}, received ${e.received}`;
            break;
        case te.invalid_literal:
            i = `Invalid literal value, expected ${JSON.stringify(e.expected, Ze.jsonStringifyReplacer)}`;
            break;
        case te.unrecognized_keys:
            i = `Unrecognized key(s) in object: ${Ze.joinValues(e.keys, ", ")}`;
            break;
        case te.invalid_union:
            i = "Invalid input";
            break;
        case te.invalid_union_discriminator:
            i = `Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;
            break;
        case te.invalid_enum_value:
            i = `Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;
            break;
        case te.invalid_arguments:
            i = "Invalid function arguments";
            break;
        case te.invalid_return_type:
            i = "Invalid function return type";
            break;
        case te.invalid_date:
            i = "Invalid date";
            break;
        case te.invalid_string:
            typeof e.validation == "object" ? "includes" in e.validation ? (i = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (i = `${i} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? i = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? i = `Invalid input: must end with "${e.validation.endsWith}"` : Ze.assertNever(e.validation) : e.validation !== "regex" ? i = `Invalid ${e.validation}` : i = "Invalid";
            break;
        case te.too_small:
            e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? i = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : i = "Invalid input";
            break;
        case te.too_big:
            e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? i = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : i = "Invalid input";
            break;
        case te.custom:
            i = "Invalid input";
            break;
        case te.invalid_intersection_types:
            i = "Intersection results could not be merged";
            break;
        case te.not_multiple_of:
            i = `Number must be a multiple of ${e.multipleOf}`;
            break;
        case te.not_finite:
            i = "Number must be finite";
            break;
        default:
            i = n.defaultError, Ze.assertNever(e)
    }
    return {
        message: i
    }
};
let Sk = Vh;

function Tk() {
    return Sk
}
const Ak = e => {
    const {
        data: n,
        path: i,
        errorMaps: r,
        issueData: l
    } = e, c = [...i, ...l.path || []], f = {
        ...l,
        path: c
    };
    if (l.message !== void 0) return {
        ...l,
        path: c,
        message: l.message
    };
    let d = "";
    const m = r.filter(p => !!p).slice().reverse();
    for (const p of m) d = p(f, {
        data: n,
        defaultError: d
    }).message;
    return {
        ...l,
        path: c,
        message: d
    }
};

function ce(e, n) {
    const i = Tk(),
        r = Ak({
            issueData: n,
            data: e.data,
            path: e.path,
            errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, i, i === Vh ? void 0 : Vh].filter(l => !!l)
        });
    e.common.issues.push(r)
}
class hn {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(n, i) {
        const r = [];
        for (const l of i) {
            if (l.status === "aborted") return Ne;
            l.status === "dirty" && n.dirty(), r.push(l.value)
        }
        return {
            status: n.value,
            value: r
        }
    }
    static async mergeObjectAsync(n, i) {
        const r = [];
        for (const l of i) {
            const c = await l.key,
                f = await l.value;
            r.push({
                key: c,
                value: f
            })
        }
        return hn.mergeObjectSync(n, r)
    }
    static mergeObjectSync(n, i) {
        const r = {};
        for (const l of i) {
            const {
                key: c,
                value: f
            } = l;
            if (c.status === "aborted" || f.status === "aborted") return Ne;
            c.status === "dirty" && n.dirty(), f.status === "dirty" && n.dirty(), c.value !== "__proto__" && (typeof f.value < "u" || l.alwaysSet) && (r[c.value] = f.value)
        }
        return {
            status: n.value,
            value: r
        }
    }
}
const Ne = Object.freeze({
        status: "aborted"
    }),
    ro = e => ({
        status: "dirty",
        value: e
    }),
    Nn = e => ({
        status: "valid",
        value: e
    }),
    ub = e => e.status === "aborted",
    fb = e => e.status === "dirty",
    Ka = e => e.status === "valid",
    jc = e => typeof Promise < "u" && e instanceof Promise;
var Se;
(function(e) {
    e.errToObj = n => typeof n == "string" ? {
        message: n
    } : n || {}, e.toString = n => typeof n == "string" ? n : n?.message
})(Se || (Se = {}));
class mi {
    constructor(n, i, r, l) {
        this._cachedPath = [], this.parent = n, this.data = i, this._path = r, this._key = l
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const db = (e, n) => {
    if (Ka(n)) return {
        success: !0,
        data: n.value
    };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const i = new _s(e.common.issues);
            return this._error = i, this._error
        }
    }
};

function Le(e) {
    if (!e) return {};
    const {
        errorMap: n,
        invalid_type_error: i,
        required_error: r,
        description: l
    } = e;
    if (n && (i || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return n ? {
        errorMap: n,
        description: l
    } : {
        errorMap: (f, d) => {
            const {
                message: m
            } = e;
            return f.code === "invalid_enum_value" ? {
                message: m ?? d.defaultError
            } : typeof d.data > "u" ? {
                message: m ?? r ?? d.defaultError
            } : f.code !== "invalid_type" ? {
                message: d.defaultError
            } : {
                message: m ?? i ?? d.defaultError
            }
        },
        description: l
    }
}
class Fe {
    get description() {
        return this._def.description
    }
    _getType(n) {
        return si(n.data)
    }
    _getOrReturnCtx(n, i) {
        return i || {
            common: n.parent.common,
            data: n.data,
            parsedType: si(n.data),
            schemaErrorMap: this._def.errorMap,
            path: n.path,
            parent: n.parent
        }
    }
    _processInputParams(n) {
        return {
            status: new hn,
            ctx: {
                common: n.parent.common,
                data: n.data,
                parsedType: si(n.data),
                schemaErrorMap: this._def.errorMap,
                path: n.path,
                parent: n.parent
            }
        }
    }
    _parseSync(n) {
        const i = this._parse(n);
        if (jc(i)) throw new Error("Synchronous parse encountered promise.");
        return i
    }
    _parseAsync(n) {
        const i = this._parse(n);
        return Promise.resolve(i)
    }
    parse(n, i) {
        const r = this.safeParse(n, i);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(n, i) {
        const r = {
                common: {
                    issues: [],
                    async: i?.async ?? !1,
                    contextualErrorMap: i?.errorMap
                },
                path: i?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: n,
                parsedType: si(n)
            },
            l = this._parseSync({
                data: n,
                path: r.path,
                parent: r
            });
        return db(r, l)
    }
    "~validate"(n) {
        const i = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: si(n)
        };
        if (!this["~standard"].async) try {
            const r = this._parseSync({
                data: n,
                path: [],
                parent: i
            });
            return Ka(r) ? {
                value: r.value
            } : {
                issues: i.common.issues
            }
        } catch (r) {
            r?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), i.common = {
                issues: [],
                async: !0
            }
        }
        return this._parseAsync({
            data: n,
            path: [],
            parent: i
        }).then(r => Ka(r) ? {
            value: r.value
        } : {
            issues: i.common.issues
        })
    }
    async parseAsync(n, i) {
        const r = await this.safeParseAsync(n, i);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(n, i) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: i?.errorMap,
                    async: !0
                },
                path: i?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: n,
                parsedType: si(n)
            },
            l = this._parse({
                data: n,
                path: r.path,
                parent: r
            }),
            c = await (jc(l) ? l : Promise.resolve(l));
        return db(r, c)
    }
    refine(n, i) {
        const r = l => typeof i == "string" || typeof i > "u" ? {
            message: i
        } : typeof i == "function" ? i(l) : i;
        return this._refinement((l, c) => {
            const f = n(l),
                d = () => c.addIssue({
                    code: te.custom,
                    ...r(l)
                });
            return typeof Promise < "u" && f instanceof Promise ? f.then(m => m ? !0 : (d(), !1)) : f ? !0 : (d(), !1)
        })
    }
    refinement(n, i) {
        return this._refinement((r, l) => n(r) ? !0 : (l.addIssue(typeof i == "function" ? i(r, l) : i), !1))
    }
    _refinement(n) {
        return new Ia({
            schema: this,
            typeName: Oe.ZodEffects,
            effect: {
                type: "refinement",
                refinement: n
            }
        })
    }
    superRefine(n) {
        return this._refinement(n)
    }
    constructor(n) {
        this.spa = this.safeParseAsync, this._def = n, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: i => this["~validate"](i)
        }
    }
    optional() {
        return oi.create(this, this._def)
    }
    nullable() {
        return $a.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return ns.create(this)
    }
    promise() {
        return Vc.create(this, this._def)
    }
    or(n) {
        return Mc.create([this, n], this._def)
    }
    and(n) {
        return kc.create(this, n, this._def)
    }
    transform(n) {
        return new Ia({
            ...Le(this._def),
            schema: this,
            typeName: Oe.ZodEffects,
            effect: {
                type: "transform",
                transform: n
            }
        })
    }
    default (n) {
        const i = typeof n == "function" ? n : () => n;
        return new Lh({
            ...Le(this._def),
            innerType: this,
            defaultValue: i,
            typeName: Oe.ZodDefault
        })
    }
    brand() {
        return new Xk({
            typeName: Oe.ZodBranded,
            type: this,
            ...Le(this._def)
        })
    } catch (n) {
        const i = typeof n == "function" ? n : () => n;
        return new Bh({
            ...Le(this._def),
            innerType: this,
            catchValue: i,
            typeName: Oe.ZodCatch
        })
    }
    describe(n) {
        const i = this.constructor;
        return new i({
            ...this._def,
            description: n
        })
    }
    pipe(n) {
        return Fm.create(this, n)
    }
    readonly() {
        return Ph.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Ek = /^c[^\s-]{8,}$/i,
    _k = /^[0-9a-z]+$/,
    Ck = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    Rk = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Nk = /^[a-z0-9_-]{21}$/i,
    Ok = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    jk = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    Dk = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Mk = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Kd;
const kk = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Vk = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    zk = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    Lk = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    Bk = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    Pk = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    pT = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    Uk = new RegExp(`^${pT}$`);

function yT(e) {
    let n = "[0-5]\\d";
    e.precision ? n = `${n}\\.\\d{${e.precision}}` : e.precision == null && (n = `${n}(\\.\\d+)?`);
    const i = e.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${n})${i}`
}

function Hk(e) {
    return new RegExp(`^${yT(e)}$`)
}

function qk(e) {
    let n = `${pT}T${yT(e)}`;
    const i = [];
    return i.push(e.local ? "Z?" : "Z"), e.offset && i.push("([+-]\\d{2}:?\\d{2})"), n = `${n}(${i.join("|")})`, new RegExp(`^${n}$`)
}

function Fk(e, n) {
    return !!((n === "v4" || !n) && kk.test(e) || (n === "v6" || !n) && zk.test(e))
}

function Yk(e, n) {
    if (!Ok.test(e)) return !1;
    try {
        const [i] = e.split(".");
        if (!i) return !1;
        const r = i.replace(/-/g, "+").replace(/_/g, "/").padEnd(i.length + (4 - i.length % 4) % 4, "="),
            l = JSON.parse(atob(r));
        return !(typeof l != "object" || l === null || "typ" in l && l?.typ !== "JWT" || !l.alg || n && l.alg !== n)
    } catch {
        return !1
    }
}

function Gk(e, n) {
    return !!((n === "v4" || !n) && Vk.test(e) || (n === "v6" || !n) && Lk.test(e))
}
class ri extends Fe {
    _parse(n) {
        if (this._def.coerce && (n.data = String(n.data)), this._getType(n) !== we.string) {
            const c = this._getOrReturnCtx(n);
            return ce(c, {
                code: te.invalid_type,
                expected: we.string,
                received: c.parsedType
            }), Ne
        }
        const r = new hn;
        let l;
        for (const c of this._def.checks)
            if (c.kind === "min") n.data.length < c.value && (l = this._getOrReturnCtx(n, l), ce(l, {
                code: te.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: c.message
            }), r.dirty());
            else if (c.kind === "max") n.data.length > c.value && (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.too_big,
            maximum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message
        }), r.dirty());
        else if (c.kind === "length") {
            const f = n.data.length > c.value,
                d = n.data.length < c.value;
            (f || d) && (l = this._getOrReturnCtx(n, l), f ? ce(l, {
                code: te.too_big,
                maximum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message
            }) : d && ce(l, {
                code: te.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message
            }), r.dirty())
        } else if (c.kind === "email") Dk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "email",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "emoji") Kd || (Kd = new RegExp(Mk, "u")), Kd.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "emoji",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "uuid") Rk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "uuid",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "nanoid") Nk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "nanoid",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "cuid") Ek.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "cuid",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "cuid2") _k.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "cuid2",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "ulid") Ck.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "ulid",
            code: te.invalid_string,
            message: c.message
        }), r.dirty());
        else if (c.kind === "url") try {
            new URL(n.data)
        } catch {
            l = this._getOrReturnCtx(n, l), ce(l, {
                validation: "url",
                code: te.invalid_string,
                message: c.message
            }), r.dirty()
        } else c.kind === "regex" ? (c.regex.lastIndex = 0, c.regex.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "regex",
            code: te.invalid_string,
            message: c.message
        }), r.dirty())) : c.kind === "trim" ? n.data = n.data.trim() : c.kind === "includes" ? n.data.includes(c.value, c.position) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: {
                includes: c.value,
                position: c.position
            },
            message: c.message
        }), r.dirty()) : c.kind === "toLowerCase" ? n.data = n.data.toLowerCase() : c.kind === "toUpperCase" ? n.data = n.data.toUpperCase() : c.kind === "startsWith" ? n.data.startsWith(c.value) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: {
                startsWith: c.value
            },
            message: c.message
        }), r.dirty()) : c.kind === "endsWith" ? n.data.endsWith(c.value) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: {
                endsWith: c.value
            },
            message: c.message
        }), r.dirty()) : c.kind === "datetime" ? qk(c).test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: "datetime",
            message: c.message
        }), r.dirty()) : c.kind === "date" ? Uk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: "date",
            message: c.message
        }), r.dirty()) : c.kind === "time" ? Hk(c).test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.invalid_string,
            validation: "time",
            message: c.message
        }), r.dirty()) : c.kind === "duration" ? jk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "duration",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : c.kind === "ip" ? Fk(n.data, c.version) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "ip",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : c.kind === "jwt" ? Yk(n.data, c.alg) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "jwt",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : c.kind === "cidr" ? Gk(n.data, c.version) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "cidr",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : c.kind === "base64" ? Bk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "base64",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : c.kind === "base64url" ? Pk.test(n.data) || (l = this._getOrReturnCtx(n, l), ce(l, {
            validation: "base64url",
            code: te.invalid_string,
            message: c.message
        }), r.dirty()) : Ze.assertNever(c);
        return {
            status: r.value,
            value: n.data
        }
    }
    _regex(n, i, r) {
        return this.refinement(l => n.test(l), {
            validation: i,
            code: te.invalid_string,
            ...Se.errToObj(r)
        })
    }
    _addCheck(n) {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    email(n) {
        return this._addCheck({
            kind: "email",
            ...Se.errToObj(n)
        })
    }
    url(n) {
        return this._addCheck({
            kind: "url",
            ...Se.errToObj(n)
        })
    }
    emoji(n) {
        return this._addCheck({
            kind: "emoji",
            ...Se.errToObj(n)
        })
    }
    uuid(n) {
        return this._addCheck({
            kind: "uuid",
            ...Se.errToObj(n)
        })
    }
    nanoid(n) {
        return this._addCheck({
            kind: "nanoid",
            ...Se.errToObj(n)
        })
    }
    cuid(n) {
        return this._addCheck({
            kind: "cuid",
            ...Se.errToObj(n)
        })
    }
    cuid2(n) {
        return this._addCheck({
            kind: "cuid2",
            ...Se.errToObj(n)
        })
    }
    ulid(n) {
        return this._addCheck({
            kind: "ulid",
            ...Se.errToObj(n)
        })
    }
    base64(n) {
        return this._addCheck({
            kind: "base64",
            ...Se.errToObj(n)
        })
    }
    base64url(n) {
        return this._addCheck({
            kind: "base64url",
            ...Se.errToObj(n)
        })
    }
    jwt(n) {
        return this._addCheck({
            kind: "jwt",
            ...Se.errToObj(n)
        })
    }
    ip(n) {
        return this._addCheck({
            kind: "ip",
            ...Se.errToObj(n)
        })
    }
    cidr(n) {
        return this._addCheck({
            kind: "cidr",
            ...Se.errToObj(n)
        })
    }
    datetime(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: n
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            offset: n?.offset ?? !1,
            local: n?.local ?? !1,
            ...Se.errToObj(n?.message)
        })
    }
    date(n) {
        return this._addCheck({
            kind: "date",
            message: n
        })
    }
    time(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: n
        }) : this._addCheck({
            kind: "time",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            ...Se.errToObj(n?.message)
        })
    }
    duration(n) {
        return this._addCheck({
            kind: "duration",
            ...Se.errToObj(n)
        })
    }
    regex(n, i) {
        return this._addCheck({
            kind: "regex",
            regex: n,
            ...Se.errToObj(i)
        })
    }
    includes(n, i) {
        return this._addCheck({
            kind: "includes",
            value: n,
            position: i?.position,
            ...Se.errToObj(i?.message)
        })
    }
    startsWith(n, i) {
        return this._addCheck({
            kind: "startsWith",
            value: n,
            ...Se.errToObj(i)
        })
    }
    endsWith(n, i) {
        return this._addCheck({
            kind: "endsWith",
            value: n,
            ...Se.errToObj(i)
        })
    }
    min(n, i) {
        return this._addCheck({
            kind: "min",
            value: n,
            ...Se.errToObj(i)
        })
    }
    max(n, i) {
        return this._addCheck({
            kind: "max",
            value: n,
            ...Se.errToObj(i)
        })
    }
    length(n, i) {
        return this._addCheck({
            kind: "length",
            value: n,
            ...Se.errToObj(i)
        })
    }
    nonempty(n) {
        return this.min(1, Se.errToObj(n))
    }
    trim() {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new ri({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(n => n.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(n => n.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(n => n.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(n => n.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(n => n.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(n => n.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(n => n.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(n => n.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(n => n.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(n => n.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(n => n.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(n => n.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(n => n.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(n => n.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(n => n.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(n => n.kind === "base64url")
    }
    get minLength() {
        let n = null;
        for (const i of this._def.checks) i.kind === "min" && (n === null || i.value > n) && (n = i.value);
        return n
    }
    get maxLength() {
        let n = null;
        for (const i of this._def.checks) i.kind === "max" && (n === null || i.value < n) && (n = i.value);
        return n
    }
}
ri.create = e => new ri({
    checks: [],
    typeName: Oe.ZodString,
    coerce: e?.coerce ?? !1,
    ...Le(e)
});

function Zk(e, n) {
    const i = (e.toString().split(".")[1] || "").length,
        r = (n.toString().split(".")[1] || "").length,
        l = i > r ? i : r,
        c = Number.parseInt(e.toFixed(l).replace(".", "")),
        f = Number.parseInt(n.toFixed(l).replace(".", ""));
    return c % f / 10 ** l
}
class To extends Fe {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(n) {
        if (this._def.coerce && (n.data = Number(n.data)), this._getType(n) !== we.number) {
            const c = this._getOrReturnCtx(n);
            return ce(c, {
                code: te.invalid_type,
                expected: we.number,
                received: c.parsedType
            }), Ne
        }
        let r;
        const l = new hn;
        for (const c of this._def.checks) c.kind === "int" ? Ze.isInteger(n.data) || (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.invalid_type,
            expected: "integer",
            received: "float",
            message: c.message
        }), l.dirty()) : c.kind === "min" ? (c.inclusive ? n.data < c.value : n.data <= c.value) && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.too_small,
            minimum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message
        }), l.dirty()) : c.kind === "max" ? (c.inclusive ? n.data > c.value : n.data >= c.value) && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.too_big,
            maximum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message
        }), l.dirty()) : c.kind === "multipleOf" ? Zk(n.data, c.value) !== 0 && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.not_multiple_of,
            multipleOf: c.value,
            message: c.message
        }), l.dirty()) : c.kind === "finite" ? Number.isFinite(n.data) || (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.not_finite,
            message: c.message
        }), l.dirty()) : Ze.assertNever(c);
        return {
            status: l.value,
            value: n.data
        }
    }
    gte(n, i) {
        return this.setLimit("min", n, !0, Se.toString(i))
    }
    gt(n, i) {
        return this.setLimit("min", n, !1, Se.toString(i))
    }
    lte(n, i) {
        return this.setLimit("max", n, !0, Se.toString(i))
    }
    lt(n, i) {
        return this.setLimit("max", n, !1, Se.toString(i))
    }
    setLimit(n, i, r, l) {
        return new To({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: i,
                inclusive: r,
                message: Se.toString(l)
            }]
        })
    }
    _addCheck(n) {
        return new To({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    int(n) {
        return this._addCheck({
            kind: "int",
            message: Se.toString(n)
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: Se.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: Se.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: Se.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: Se.toString(n)
        })
    }
    multipleOf(n, i) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: Se.toString(i)
        })
    }
    finite(n) {
        return this._addCheck({
            kind: "finite",
            message: Se.toString(n)
        })
    }
    safe(n) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: Se.toString(n)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: Se.toString(n)
        })
    }
    get minValue() {
        let n = null;
        for (const i of this._def.checks) i.kind === "min" && (n === null || i.value > n) && (n = i.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const i of this._def.checks) i.kind === "max" && (n === null || i.value < n) && (n = i.value);
        return n
    }
    get isInt() {
        return !!this._def.checks.find(n => n.kind === "int" || n.kind === "multipleOf" && Ze.isInteger(n.value))
    }
    get isFinite() {
        let n = null,
            i = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (i === null || r.value > i) && (i = r.value) : r.kind === "max" && (n === null || r.value < n) && (n = r.value)
        }
        return Number.isFinite(i) && Number.isFinite(n)
    }
}
To.create = e => new To({
    checks: [],
    typeName: Oe.ZodNumber,
    coerce: e?.coerce || !1,
    ...Le(e)
});
class Ao extends Fe {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(n) {
        if (this._def.coerce) try {
            n.data = BigInt(n.data)
        } catch {
            return this._getInvalidInput(n)
        }
        if (this._getType(n) !== we.bigint) return this._getInvalidInput(n);
        let r;
        const l = new hn;
        for (const c of this._def.checks) c.kind === "min" ? (c.inclusive ? n.data < c.value : n.data <= c.value) && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.too_small,
            type: "bigint",
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message
        }), l.dirty()) : c.kind === "max" ? (c.inclusive ? n.data > c.value : n.data >= c.value) && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.too_big,
            type: "bigint",
            maximum: c.value,
            inclusive: c.inclusive,
            message: c.message
        }), l.dirty()) : c.kind === "multipleOf" ? n.data % c.value !== BigInt(0) && (r = this._getOrReturnCtx(n, r), ce(r, {
            code: te.not_multiple_of,
            multipleOf: c.value,
            message: c.message
        }), l.dirty()) : Ze.assertNever(c);
        return {
            status: l.value,
            value: n.data
        }
    }
    _getInvalidInput(n) {
        const i = this._getOrReturnCtx(n);
        return ce(i, {
            code: te.invalid_type,
            expected: we.bigint,
            received: i.parsedType
        }), Ne
    }
    gte(n, i) {
        return this.setLimit("min", n, !0, Se.toString(i))
    }
    gt(n, i) {
        return this.setLimit("min", n, !1, Se.toString(i))
    }
    lte(n, i) {
        return this.setLimit("max", n, !0, Se.toString(i))
    }
    lt(n, i) {
        return this.setLimit("max", n, !1, Se.toString(i))
    }
    setLimit(n, i, r, l) {
        return new Ao({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: i,
                inclusive: r,
                message: Se.toString(l)
            }]
        })
    }
    _addCheck(n) {
        return new Ao({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: Se.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: Se.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: Se.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: Se.toString(n)
        })
    }
    multipleOf(n, i) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: Se.toString(i)
        })
    }
    get minValue() {
        let n = null;
        for (const i of this._def.checks) i.kind === "min" && (n === null || i.value > n) && (n = i.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const i of this._def.checks) i.kind === "max" && (n === null || i.value < n) && (n = i.value);
        return n
    }
}
Ao.create = e => new Ao({
    checks: [],
    typeName: Oe.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...Le(e)
});
class hb extends Fe {
    _parse(n) {
        if (this._def.coerce && (n.data = !!n.data), this._getType(n) !== we.boolean) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.boolean,
                received: r.parsedType
            }), Ne
        }
        return Nn(n.data)
    }
}
hb.create = e => new hb({
    typeName: Oe.ZodBoolean,
    coerce: e?.coerce || !1,
    ...Le(e)
});
class Dc extends Fe {
    _parse(n) {
        if (this._def.coerce && (n.data = new Date(n.data)), this._getType(n) !== we.date) {
            const c = this._getOrReturnCtx(n);
            return ce(c, {
                code: te.invalid_type,
                expected: we.date,
                received: c.parsedType
            }), Ne
        }
        if (Number.isNaN(n.data.getTime())) {
            const c = this._getOrReturnCtx(n);
            return ce(c, {
                code: te.invalid_date
            }), Ne
        }
        const r = new hn;
        let l;
        for (const c of this._def.checks) c.kind === "min" ? n.data.getTime() < c.value && (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: "date"
        }), r.dirty()) : c.kind === "max" ? n.data.getTime() > c.value && (l = this._getOrReturnCtx(n, l), ce(l, {
            code: te.too_big,
            message: c.message,
            inclusive: !0,
            exact: !1,
            maximum: c.value,
            type: "date"
        }), r.dirty()) : Ze.assertNever(c);
        return {
            status: r.value,
            value: new Date(n.data.getTime())
        }
    }
    _addCheck(n) {
        return new Dc({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    min(n, i) {
        return this._addCheck({
            kind: "min",
            value: n.getTime(),
            message: Se.toString(i)
        })
    }
    max(n, i) {
        return this._addCheck({
            kind: "max",
            value: n.getTime(),
            message: Se.toString(i)
        })
    }
    get minDate() {
        let n = null;
        for (const i of this._def.checks) i.kind === "min" && (n === null || i.value > n) && (n = i.value);
        return n != null ? new Date(n) : null
    }
    get maxDate() {
        let n = null;
        for (const i of this._def.checks) i.kind === "max" && (n === null || i.value < n) && (n = i.value);
        return n != null ? new Date(n) : null
    }
}
Dc.create = e => new Dc({
    checks: [],
    coerce: e?.coerce || !1,
    typeName: Oe.ZodDate,
    ...Le(e)
});
class mb extends Fe {
    _parse(n) {
        if (this._getType(n) !== we.symbol) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.symbol,
                received: r.parsedType
            }), Ne
        }
        return Nn(n.data)
    }
}
mb.create = e => new mb({
    typeName: Oe.ZodSymbol,
    ...Le(e)
});
class pb extends Fe {
    _parse(n) {
        if (this._getType(n) !== we.undefined) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.undefined,
                received: r.parsedType
            }), Ne
        }
        return Nn(n.data)
    }
}
pb.create = e => new pb({
    typeName: Oe.ZodUndefined,
    ...Le(e)
});
class yb extends Fe {
    _parse(n) {
        if (this._getType(n) !== we.null) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.null,
                received: r.parsedType
            }), Ne
        }
        return Nn(n.data)
    }
}
yb.create = e => new yb({
    typeName: Oe.ZodNull,
    ...Le(e)
});
class gb extends Fe {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(n) {
        return Nn(n.data)
    }
}
gb.create = e => new gb({
    typeName: Oe.ZodAny,
    ...Le(e)
});
class vb extends Fe {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(n) {
        return Nn(n.data)
    }
}
vb.create = e => new vb({
    typeName: Oe.ZodUnknown,
    ...Le(e)
});
class pi extends Fe {
    _parse(n) {
        const i = this._getOrReturnCtx(n);
        return ce(i, {
            code: te.invalid_type,
            expected: we.never,
            received: i.parsedType
        }), Ne
    }
}
pi.create = e => new pi({
    typeName: Oe.ZodNever,
    ...Le(e)
});
class xb extends Fe {
    _parse(n) {
        if (this._getType(n) !== we.undefined) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.void,
                received: r.parsedType
            }), Ne
        }
        return Nn(n.data)
    }
}
xb.create = e => new xb({
    typeName: Oe.ZodVoid,
    ...Le(e)
});
class ns extends Fe {
    _parse(n) {
        const {
            ctx: i,
            status: r
        } = this._processInputParams(n), l = this._def;
        if (i.parsedType !== we.array) return ce(i, {
            code: te.invalid_type,
            expected: we.array,
            received: i.parsedType
        }), Ne;
        if (l.exactLength !== null) {
            const f = i.data.length > l.exactLength.value,
                d = i.data.length < l.exactLength.value;
            (f || d) && (ce(i, {
                code: f ? te.too_big : te.too_small,
                minimum: d ? l.exactLength.value : void 0,
                maximum: f ? l.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: l.exactLength.message
            }), r.dirty())
        }
        if (l.minLength !== null && i.data.length < l.minLength.value && (ce(i, {
                code: te.too_small,
                minimum: l.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: l.minLength.message
            }), r.dirty()), l.maxLength !== null && i.data.length > l.maxLength.value && (ce(i, {
                code: te.too_big,
                maximum: l.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: l.maxLength.message
            }), r.dirty()), i.common.async) return Promise.all([...i.data].map((f, d) => l.type._parseAsync(new mi(i, f, i.path, d)))).then(f => hn.mergeArray(r, f));
        const c = [...i.data].map((f, d) => l.type._parseSync(new mi(i, f, i.path, d)));
        return hn.mergeArray(r, c)
    }
    get element() {
        return this._def.type
    }
    min(n, i) {
        return new ns({
            ...this._def,
            minLength: {
                value: n,
                message: Se.toString(i)
            }
        })
    }
    max(n, i) {
        return new ns({
            ...this._def,
            maxLength: {
                value: n,
                message: Se.toString(i)
            }
        })
    }
    length(n, i) {
        return new ns({
            ...this._def,
            exactLength: {
                value: n,
                message: Se.toString(i)
            }
        })
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
ns.create = (e, n) => new ns({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Oe.ZodArray,
    ...Le(n)
});

function La(e) {
    if (e instanceof xt) {
        const n = {};
        for (const i in e.shape) {
            const r = e.shape[i];
            n[i] = oi.create(La(r))
        }
        return new xt({
            ...e._def,
            shape: () => n
        })
    } else return e instanceof ns ? new ns({
        ...e._def,
        type: La(e.element)
    }) : e instanceof oi ? oi.create(La(e.unwrap())) : e instanceof $a ? $a.create(La(e.unwrap())) : e instanceof Gi ? Gi.create(e.items.map(n => La(n))) : e
}
class xt extends Fe {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const n = this._def.shape(),
            i = Ze.objectKeys(n);
        return this._cached = {
            shape: n,
            keys: i
        }, this._cached
    }
    _parse(n) {
        if (this._getType(n) !== we.object) {
            const p = this._getOrReturnCtx(n);
            return ce(p, {
                code: te.invalid_type,
                expected: we.object,
                received: p.parsedType
            }), Ne
        }
        const {
            status: r,
            ctx: l
        } = this._processInputParams(n), {
            shape: c,
            keys: f
        } = this._getCached(), d = [];
        if (!(this._def.catchall instanceof pi && this._def.unknownKeys === "strip"))
            for (const p in l.data) f.includes(p) || d.push(p);
        const m = [];
        for (const p of f) {
            const y = c[p],
                x = l.data[p];
            m.push({
                key: {
                    status: "valid",
                    value: p
                },
                value: y._parse(new mi(l, x, l.path, p)),
                alwaysSet: p in l.data
            })
        }
        if (this._def.catchall instanceof pi) {
            const p = this._def.unknownKeys;
            if (p === "passthrough")
                for (const y of d) m.push({
                    key: {
                        status: "valid",
                        value: y
                    },
                    value: {
                        status: "valid",
                        value: l.data[y]
                    }
                });
            else if (p === "strict") d.length > 0 && (ce(l, {
                code: te.unrecognized_keys,
                keys: d
            }), r.dirty());
            else if (p !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const p = this._def.catchall;
            for (const y of d) {
                const x = l.data[y];
                m.push({
                    key: {
                        status: "valid",
                        value: y
                    },
                    value: p._parse(new mi(l, x, l.path, y)),
                    alwaysSet: y in l.data
                })
            }
        }
        return l.common.async ? Promise.resolve().then(async () => {
            const p = [];
            for (const y of m) {
                const x = await y.key,
                    b = await y.value;
                p.push({
                    key: x,
                    value: b,
                    alwaysSet: y.alwaysSet
                })
            }
            return p
        }).then(p => hn.mergeObjectSync(r, p)) : hn.mergeObjectSync(r, m)
    }
    get shape() {
        return this._def.shape()
    }
    strict(n) {
        return Se.errToObj, new xt({
            ...this._def,
            unknownKeys: "strict",
            ...n !== void 0 ? {
                errorMap: (i, r) => {
                    const l = this._def.errorMap?.(i, r).message ?? r.defaultError;
                    return i.code === "unrecognized_keys" ? {
                        message: Se.errToObj(n).message ?? l
                    } : {
                        message: l
                    }
                }
            } : {}
        })
    }
    strip() {
        return new xt({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new xt({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(n) {
        return new xt({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...n
            })
        })
    }
    merge(n) {
        return new xt({
            unknownKeys: n._def.unknownKeys,
            catchall: n._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...n._def.shape()
            }),
            typeName: Oe.ZodObject
        })
    }
    setKey(n, i) {
        return this.augment({
            [n]: i
        })
    }
    catchall(n) {
        return new xt({
            ...this._def,
            catchall: n
        })
    }
    pick(n) {
        const i = {};
        for (const r of Ze.objectKeys(n)) n[r] && this.shape[r] && (i[r] = this.shape[r]);
        return new xt({
            ...this._def,
            shape: () => i
        })
    }
    omit(n) {
        const i = {};
        for (const r of Ze.objectKeys(this.shape)) n[r] || (i[r] = this.shape[r]);
        return new xt({
            ...this._def,
            shape: () => i
        })
    }
    deepPartial() {
        return La(this)
    }
    partial(n) {
        const i = {};
        for (const r of Ze.objectKeys(this.shape)) {
            const l = this.shape[r];
            n && !n[r] ? i[r] = l : i[r] = l.optional()
        }
        return new xt({
            ...this._def,
            shape: () => i
        })
    }
    required(n) {
        const i = {};
        for (const r of Ze.objectKeys(this.shape))
            if (n && !n[r]) i[r] = this.shape[r];
            else {
                let c = this.shape[r];
                for (; c instanceof oi;) c = c._def.innerType;
                i[r] = c
            } return new xt({
            ...this._def,
            shape: () => i
        })
    }
    keyof() {
        return gT(Ze.objectKeys(this.shape))
    }
}
xt.create = (e, n) => new xt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: pi.create(),
    typeName: Oe.ZodObject,
    ...Le(n)
});
xt.strictCreate = (e, n) => new xt({
    shape: () => e,
    unknownKeys: "strict",
    catchall: pi.create(),
    typeName: Oe.ZodObject,
    ...Le(n)
});
xt.lazycreate = (e, n) => new xt({
    shape: e,
    unknownKeys: "strip",
    catchall: pi.create(),
    typeName: Oe.ZodObject,
    ...Le(n)
});
class Mc extends Fe {
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n), r = this._def.options;

        function l(c) {
            for (const d of c)
                if (d.result.status === "valid") return d.result;
            for (const d of c)
                if (d.result.status === "dirty") return i.common.issues.push(...d.ctx.common.issues), d.result;
            const f = c.map(d => new _s(d.ctx.common.issues));
            return ce(i, {
                code: te.invalid_union,
                unionErrors: f
            }), Ne
        }
        if (i.common.async) return Promise.all(r.map(async c => {
            const f = {
                ...i,
                common: {
                    ...i.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await c._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: f
                }),
                ctx: f
            }
        })).then(l);
        {
            let c;
            const f = [];
            for (const m of r) {
                const p = {
                        ...i,
                        common: {
                            ...i.common,
                            issues: []
                        },
                        parent: null
                    },
                    y = m._parseSync({
                        data: i.data,
                        path: i.path,
                        parent: p
                    });
                if (y.status === "valid") return y;
                y.status === "dirty" && !c && (c = {
                    result: y,
                    ctx: p
                }), p.common.issues.length && f.push(p.common.issues)
            }
            if (c) return i.common.issues.push(...c.ctx.common.issues), c.result;
            const d = f.map(m => new _s(m));
            return ce(i, {
                code: te.invalid_union,
                unionErrors: d
            }), Ne
        }
    }
    get options() {
        return this._def.options
    }
}
Mc.create = (e, n) => new Mc({
    options: e,
    typeName: Oe.ZodUnion,
    ...Le(n)
});

function zh(e, n) {
    const i = si(e),
        r = si(n);
    if (e === n) return {
        valid: !0,
        data: e
    };
    if (i === we.object && r === we.object) {
        const l = Ze.objectKeys(n),
            c = Ze.objectKeys(e).filter(d => l.indexOf(d) !== -1),
            f = {
                ...e,
                ...n
            };
        for (const d of c) {
            const m = zh(e[d], n[d]);
            if (!m.valid) return {
                valid: !1
            };
            f[d] = m.data
        }
        return {
            valid: !0,
            data: f
        }
    } else if (i === we.array && r === we.array) {
        if (e.length !== n.length) return {
            valid: !1
        };
        const l = [];
        for (let c = 0; c < e.length; c++) {
            const f = e[c],
                d = n[c],
                m = zh(f, d);
            if (!m.valid) return {
                valid: !1
            };
            l.push(m.data)
        }
        return {
            valid: !0,
            data: l
        }
    } else return i === we.date && r === we.date && +e == +n ? {
        valid: !0,
        data: e
    } : {
        valid: !1
    }
}
class kc extends Fe {
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n), l = (c, f) => {
            if (ub(c) || ub(f)) return Ne;
            const d = zh(c.value, f.value);
            return d.valid ? ((fb(c) || fb(f)) && i.dirty(), {
                status: i.value,
                value: d.data
            }) : (ce(r, {
                code: te.invalid_intersection_types
            }), Ne)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([c, f]) => l(c, f)) : l(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
kc.create = (e, n, i) => new kc({
    left: e,
    right: n,
    typeName: Oe.ZodIntersection,
    ...Le(i)
});
class Gi extends Fe {
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== we.array) return ce(r, {
            code: te.invalid_type,
            expected: we.array,
            received: r.parsedType
        }), Ne;
        if (r.data.length < this._def.items.length) return ce(r, {
            code: te.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), Ne;
        !this._def.rest && r.data.length > this._def.items.length && (ce(r, {
            code: te.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), i.dirty());
        const c = [...r.data].map((f, d) => {
            const m = this._def.items[d] || this._def.rest;
            return m ? m._parse(new mi(r, f, r.path, d)) : null
        }).filter(f => !!f);
        return r.common.async ? Promise.all(c).then(f => hn.mergeArray(i, f)) : hn.mergeArray(i, c)
    }
    get items() {
        return this._def.items
    }
    rest(n) {
        return new Gi({
            ...this._def,
            rest: n
        })
    }
}
Gi.create = (e, n) => {
    if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Gi({
        items: e,
        typeName: Oe.ZodTuple,
        rest: null,
        ...Le(n)
    })
};
class bb extends Fe {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== we.map) return ce(r, {
            code: te.invalid_type,
            expected: we.map,
            received: r.parsedType
        }), Ne;
        const l = this._def.keyType,
            c = this._def.valueType,
            f = [...r.data.entries()].map(([d, m], p) => ({
                key: l._parse(new mi(r, d, r.path, [p, "key"])),
                value: c._parse(new mi(r, m, r.path, [p, "value"]))
            }));
        if (r.common.async) {
            const d = new Map;
            return Promise.resolve().then(async () => {
                for (const m of f) {
                    const p = await m.key,
                        y = await m.value;
                    if (p.status === "aborted" || y.status === "aborted") return Ne;
                    (p.status === "dirty" || y.status === "dirty") && i.dirty(), d.set(p.value, y.value)
                }
                return {
                    status: i.value,
                    value: d
                }
            })
        } else {
            const d = new Map;
            for (const m of f) {
                const p = m.key,
                    y = m.value;
                if (p.status === "aborted" || y.status === "aborted") return Ne;
                (p.status === "dirty" || y.status === "dirty") && i.dirty(), d.set(p.value, y.value)
            }
            return {
                status: i.value,
                value: d
            }
        }
    }
}
bb.create = (e, n, i) => new bb({
    valueType: n,
    keyType: e,
    typeName: Oe.ZodMap,
    ...Le(i)
});
class Eo extends Fe {
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n);
        if (r.parsedType !== we.set) return ce(r, {
            code: te.invalid_type,
            expected: we.set,
            received: r.parsedType
        }), Ne;
        const l = this._def;
        l.minSize !== null && r.data.size < l.minSize.value && (ce(r, {
            code: te.too_small,
            minimum: l.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: l.minSize.message
        }), i.dirty()), l.maxSize !== null && r.data.size > l.maxSize.value && (ce(r, {
            code: te.too_big,
            maximum: l.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: l.maxSize.message
        }), i.dirty());
        const c = this._def.valueType;

        function f(m) {
            const p = new Set;
            for (const y of m) {
                if (y.status === "aborted") return Ne;
                y.status === "dirty" && i.dirty(), p.add(y.value)
            }
            return {
                status: i.value,
                value: p
            }
        }
        const d = [...r.data.values()].map((m, p) => c._parse(new mi(r, m, r.path, p)));
        return r.common.async ? Promise.all(d).then(m => f(m)) : f(d)
    }
    min(n, i) {
        return new Eo({
            ...this._def,
            minSize: {
                value: n,
                message: Se.toString(i)
            }
        })
    }
    max(n, i) {
        return new Eo({
            ...this._def,
            maxSize: {
                value: n,
                message: Se.toString(i)
            }
        })
    }
    size(n, i) {
        return this.min(n, i).max(n, i)
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
Eo.create = (e, n) => new Eo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Oe.ZodSet,
    ...Le(n)
});
class wb extends Fe {
    get schema() {
        return this._def.getter()
    }
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n);
        return this._def.getter()._parse({
            data: i.data,
            path: i.path,
            parent: i
        })
    }
}
wb.create = (e, n) => new wb({
    getter: e,
    typeName: Oe.ZodLazy,
    ...Le(n)
});
class Sb extends Fe {
    _parse(n) {
        if (n.data !== this._def.value) {
            const i = this._getOrReturnCtx(n);
            return ce(i, {
                received: i.data,
                code: te.invalid_literal,
                expected: this._def.value
            }), Ne
        }
        return {
            status: "valid",
            value: n.data
        }
    }
    get value() {
        return this._def.value
    }
}
Sb.create = (e, n) => new Sb({
    value: e,
    typeName: Oe.ZodLiteral,
    ...Le(n)
});

function gT(e, n) {
    return new Qa({
        values: e,
        typeName: Oe.ZodEnum,
        ...Le(n)
    })
}
class Qa extends Fe {
    _parse(n) {
        if (typeof n.data != "string") {
            const i = this._getOrReturnCtx(n),
                r = this._def.values;
            return ce(i, {
                expected: Ze.joinValues(r),
                received: i.parsedType,
                code: te.invalid_type
            }), Ne
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(n.data)) {
            const i = this._getOrReturnCtx(n),
                r = this._def.values;
            return ce(i, {
                received: i.data,
                code: te.invalid_enum_value,
                options: r
            }), Ne
        }
        return Nn(n.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const n = {};
        for (const i of this._def.values) n[i] = i;
        return n
    }
    get Values() {
        const n = {};
        for (const i of this._def.values) n[i] = i;
        return n
    }
    get Enum() {
        const n = {};
        for (const i of this._def.values) n[i] = i;
        return n
    }
    extract(n, i = this._def) {
        return Qa.create(n, {
            ...this._def,
            ...i
        })
    }
    exclude(n, i = this._def) {
        return Qa.create(this.options.filter(r => !n.includes(r)), {
            ...this._def,
            ...i
        })
    }
}
Qa.create = gT;
class Tb extends Fe {
    _parse(n) {
        const i = Ze.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(n);
        if (r.parsedType !== we.string && r.parsedType !== we.number) {
            const l = Ze.objectValues(i);
            return ce(r, {
                expected: Ze.joinValues(l),
                received: r.parsedType,
                code: te.invalid_type
            }), Ne
        }
        if (this._cache || (this._cache = new Set(Ze.getValidEnumValues(this._def.values))), !this._cache.has(n.data)) {
            const l = Ze.objectValues(i);
            return ce(r, {
                received: r.data,
                code: te.invalid_enum_value,
                options: l
            }), Ne
        }
        return Nn(n.data)
    }
    get enum() {
        return this._def.values
    }
}
Tb.create = (e, n) => new Tb({
    values: e,
    typeName: Oe.ZodNativeEnum,
    ...Le(n)
});
class Vc extends Fe {
    unwrap() {
        return this._def.type
    }
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n);
        if (i.parsedType !== we.promise && i.common.async === !1) return ce(i, {
            code: te.invalid_type,
            expected: we.promise,
            received: i.parsedType
        }), Ne;
        const r = i.parsedType === we.promise ? i.data : Promise.resolve(i.data);
        return Nn(r.then(l => this._def.type.parseAsync(l, {
            path: i.path,
            errorMap: i.common.contextualErrorMap
        })))
    }
}
Vc.create = (e, n) => new Vc({
    type: e,
    typeName: Oe.ZodPromise,
    ...Le(n)
});
class Ia extends Fe {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n), l = this._def.effect || null, c = {
            addIssue: f => {
                ce(r, f), f.fatal ? i.abort() : i.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (c.addIssue = c.addIssue.bind(c), l.type === "preprocess") {
            const f = l.transform(r.data, c);
            if (r.common.async) return Promise.resolve(f).then(async d => {
                if (i.value === "aborted") return Ne;
                const m = await this._def.schema._parseAsync({
                    data: d,
                    path: r.path,
                    parent: r
                });
                return m.status === "aborted" ? Ne : m.status === "dirty" || i.value === "dirty" ? ro(m.value) : m
            });
            {
                if (i.value === "aborted") return Ne;
                const d = this._def.schema._parseSync({
                    data: f,
                    path: r.path,
                    parent: r
                });
                return d.status === "aborted" ? Ne : d.status === "dirty" || i.value === "dirty" ? ro(d.value) : d
            }
        }
        if (l.type === "refinement") {
            const f = d => {
                const m = l.refinement(d, c);
                if (r.common.async) return Promise.resolve(m);
                if (m instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return d
            };
            if (r.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return d.status === "aborted" ? Ne : (d.status === "dirty" && i.dirty(), f(d.value), {
                    status: i.value,
                    value: d.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(d => d.status === "aborted" ? Ne : (d.status === "dirty" && i.dirty(), f(d.value).then(() => ({
                status: i.value,
                value: d.value
            }))))
        }
        if (l.type === "transform")
            if (r.common.async === !1) {
                const f = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Ka(f)) return Ne;
                const d = l.transform(f.value, c);
                if (d instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: i.value,
                    value: d
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(f => Ka(f) ? Promise.resolve(l.transform(f.value, c)).then(d => ({
                status: i.value,
                value: d
            })) : Ne);
        Ze.assertNever(l)
    }
}
Ia.create = (e, n, i) => new Ia({
    schema: e,
    typeName: Oe.ZodEffects,
    effect: n,
    ...Le(i)
});
Ia.createWithPreprocess = (e, n, i) => new Ia({
    schema: n,
    effect: {
        type: "preprocess",
        transform: e
    },
    typeName: Oe.ZodEffects,
    ...Le(i)
});
class oi extends Fe {
    _parse(n) {
        return this._getType(n) === we.undefined ? Nn(void 0) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
oi.create = (e, n) => new oi({
    innerType: e,
    typeName: Oe.ZodOptional,
    ...Le(n)
});
class $a extends Fe {
    _parse(n) {
        return this._getType(n) === we.null ? Nn(null) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
$a.create = (e, n) => new $a({
    innerType: e,
    typeName: Oe.ZodNullable,
    ...Le(n)
});
class Lh extends Fe {
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n);
        let r = i.data;
        return i.parsedType === we.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: i.path,
            parent: i
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Lh.create = (e, n) => new Lh({
    innerType: e,
    typeName: Oe.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Le(n)
});
class Bh extends Fe {
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n), r = {
            ...i,
            common: {
                ...i.common,
                issues: []
            }
        }, l = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return jc(l) ? l.then(c => ({
            status: "valid",
            value: c.status === "valid" ? c.value : this._def.catchValue({
                get error() {
                    return new _s(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: l.status === "valid" ? l.value : this._def.catchValue({
                get error() {
                    return new _s(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Bh.create = (e, n) => new Bh({
    innerType: e,
    typeName: Oe.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Le(n)
});
class Ab extends Fe {
    _parse(n) {
        if (this._getType(n) !== we.nan) {
            const r = this._getOrReturnCtx(n);
            return ce(r, {
                code: te.invalid_type,
                expected: we.nan,
                received: r.parsedType
            }), Ne
        }
        return {
            status: "valid",
            value: n.data
        }
    }
}
Ab.create = e => new Ab({
    typeName: Oe.ZodNaN,
    ...Le(e)
});
class Xk extends Fe {
    _parse(n) {
        const {
            ctx: i
        } = this._processInputParams(n), r = i.data;
        return this._def.type._parse({
            data: r,
            path: i.path,
            parent: i
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Fm extends Fe {
    _parse(n) {
        const {
            status: i,
            ctx: r
        } = this._processInputParams(n);
        if (r.common.async) return (async () => {
            const c = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return c.status === "aborted" ? Ne : c.status === "dirty" ? (i.dirty(), ro(c.value)) : this._def.out._parseAsync({
                data: c.value,
                path: r.path,
                parent: r
            })
        })();
        {
            const l = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return l.status === "aborted" ? Ne : l.status === "dirty" ? (i.dirty(), {
                status: "dirty",
                value: l.value
            }) : this._def.out._parseSync({
                data: l.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(n, i) {
        return new Fm({
            in: n,
            out: i,
            typeName: Oe.ZodPipeline
        })
    }
}
class Ph extends Fe {
    _parse(n) {
        const i = this._def.innerType._parse(n),
            r = l => (Ka(l) && (l.value = Object.freeze(l.value)), l);
        return jc(i) ? i.then(l => r(l)) : r(i)
    }
    unwrap() {
        return this._def.innerType
    }
}
Ph.create = (e, n) => new Ph({
    innerType: e,
    typeName: Oe.ZodReadonly,
    ...Le(n)
});
var Oe;
(function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly"
})(Oe || (Oe = {}));
const nc = ri.create;
pi.create;
ns.create;
const Kk = xt.create;
Mc.create;
kc.create;
Gi.create;
Qa.create;
Vc.create;
oi.create;
$a.create;
const Qk = Kk({
    name: nc().min(2, "Name is required"),
    email: nc().email("Valid email is required"),
    phone: nc().optional(),
    message: nc().min(10, "Please provide more details about your project")
});

function vT() {
    const {
        toast: e
    } = Yb(), {
        register: n,
        handleSubmit: i,
        reset: r,
        formState: {
            errors: l,
            isSubmitting: c
        }
    } = gk({
        resolver: wk(Qk)
    }), f = async d => {
        await new Promise(m => setTimeout(m, 1e3)), console.log(d), e({
            title: "Inquiry Received",
            description: "Thank you. Our studio will be in touch shortly.",
            className: "bg-taupe text-white border-gold"
        }), r()
    };
    return g.jsx("section", {
        id: "contact",
        className: "py-24 md:py-32 bg-taupe text-white",
        children: g.jsx("div", {
            className: "container mx-auto px-6 md:px-12",
            children: g.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24",
                children: [g.jsx("div", {
                    children: g.jsxs(Ue, {
                        direction: "right",
                        children: [g.jsxs("h2", {
                            className: "font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-offwhite",
                            children: ["Begin a ", g.jsx("br", {}), " Conversation"]
                        }), g.jsx("p", {
                            className: "text-white/80 font-light text-lg mb-12 max-w-md leading-relaxed",
                            children: "Every exceptional space begins with a single conversation. Tell us about your vision — we'll take it from there."
                        }), g.jsxs("div", {
                            className: "space-y-6",
                            children: [g.jsxs("div", {
                                children: [g.jsx("h4", {
                                    className: "text-gold text-xs tracking-widest uppercase mb-2",
                                    children: "Direct Inquiries"
                                }), g.jsx("a", {
                                    href: "mailto:studio@vantageinteriors.com",
                                    className: "font-serif text-xl hover:text-gold transition-colors block",
                                    children: "studio@vantageinteriors.com"
                                })]
                            }), g.jsxs("div", {
                                children: [g.jsx("h4", {
                                    className: "text-gold text-xs tracking-widest uppercase mb-2",
                                    children: "Telephone"
                                }), g.jsx("a", {
                                    href: "tel:+12125550190",
                                    className: "font-serif text-xl hover:text-gold transition-colors block",
                                    children: "+1 (212) 555-0190"
                                })]
                            }), g.jsxs("div", {
                                className: "pt-8 text-white/50 text-sm",
                                children: [g.jsx("p", {
                                    children: "Our studio is located in New York City."
                                }), g.jsx("p", {
                                    children: "Meetings by appointment only."
                                })]
                            })]
                        })]
                    })
                }), g.jsx("div", {
                    children: g.jsx(Ue, {
                        direction: "left",
                        delay: .2,
                        children: g.jsxs("form", {
                            onSubmit: i(f),
                            className: "space-y-8 bg-charcoal/20 p-8 md:p-12 border border-white/10",
                            children: [g.jsxs("div", {
                                children: [g.jsx(mc, {
                                    placeholder: "Full Name *",
                                    ...n("name"),
                                    className: l.name ? "border-red-400 placeholder:text-red-400/50" : ""
                                }), l.name && g.jsx("p", {
                                    className: "text-red-400 text-xs mt-2",
                                    children: l.name.message
                                })]
                            }), g.jsxs("div", {
                                children: [g.jsx(mc, {
                                    type: "email",
                                    placeholder: "Email Address *",
                                    ...n("email"),
                                    className: l.email ? "border-red-400 placeholder:text-red-400/50" : ""
                                }), l.email && g.jsx("p", {
                                    className: "text-red-400 text-xs mt-2",
                                    children: l.email.message
                                })]
                            }), g.jsx("div", {
                                children: g.jsx(mc, {
                                    type: "tel",
                                    placeholder: "Phone Number",
                                    ...n("phone")
                                })
                            }), g.jsxs("div", {
                                children: [g.jsx(aT, {
                                    placeholder: "Tell us about your project vision... *",
                                    ...n("message"),
                                    className: l.message ? "border-red-400 placeholder:text-red-400/50" : ""
                                }), l.message && g.jsx("p", {
                                    className: "text-red-400 text-xs mt-2",
                                    children: l.message.message
                                })]
                            }), g.jsxs("div", {
                                className: "pt-4 flex flex-col items-start gap-4",
                                children: [g.jsx(om, {
                                    type: "submit",
                                    disabled: c,
                                    className: "w-full sm:w-auto",
                                    children: c ? "Submitting..." : "Send Inquiry"
                                }), g.jsx("p", {
                                    className: "text-white/40 text-xs font-light",
                                    children: "We respond to all inquiries within 48 hours."
                                })]
                            })]
                        })
                    })
                })]
            })
        })
    })
}

function yi() {
    return g.jsx("footer", {
        className: "bg-taupe text-offwhite py-16 md:py-24 border-t border-white/10",
        children: g.jsxs("div", {
            className: "container mx-auto px-6 md:px-12 flex flex-col items-center",
            children: [g.jsx("h2", {
                className: "font-serif text-3xl tracking-widest mb-12",
                children: "VANTAGE INTERIORS"
            }), g.jsxs("div", {
                className: "flex flex-wrap justify-center gap-8 mb-16",
                children: [g.jsx("a", {
                    href: "#about",
                    className: "text-sm tracking-widest uppercase text-offwhite/60 hover:text-gold transition-colors",
                    children: "About"
                }), g.jsx("a", {
                    href: "#services",
                    className: "text-sm tracking-widest uppercase text-offwhite/60 hover:text-gold transition-colors",
                    children: "Services"
                }), g.jsx("a", {
                    href: "#portfolio",
                    className: "text-sm tracking-widest uppercase text-offwhite/60 hover:text-gold transition-colors",
                    children: "Portfolio"
                }), g.jsx("a", {
                    href: "#contact",
                    className: "text-sm tracking-widest uppercase text-offwhite/60 hover:text-gold transition-colors",
                    children: "Contact"
                })]
            }), g.jsx("div", {
                className: "text-offwhite/40 text-sm text-center",
                children: g.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " Vantage Interiors. All rights reserved."]
                })
            })]
        })
    })
}

function Ik() {
    return g.jsxs("main", {
        className: "min-h-screen bg-sand overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx(P4, {}), g.jsx(U4, {}), g.jsx(q4, {}), g.jsx(iT, {}), g.jsx(G4, {}), g.jsx(X4, {}), g.jsx(vT, {}), g.jsx(yi, {})]
    })
}

function $k() {
    return g.jsxs("main", {
        className: "min-h-screen bg-charcoal overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx("div", {
            className: "pt-32 pb-12 bg-charcoal text-white",
            children: g.jsx("div", {
                className: "container mx-auto px-6 md:px-12",
                children: g.jsxs(Ue, {
                    direction: "up",
                    children: [g.jsx("p", {
                        className: "text-gold text-xs tracking-[0.3em] uppercase mb-4",
                        children: "Our Work"
                    }), g.jsx("h1", {
                        className: "font-serif text-5xl md:text-7xl text-white",
                        children: "Selected Works"
                    })]
                })
            })
        }), g.jsx(iT, {
            standalone: !0
        }), g.jsx(yi, {})]
    })
}

function Wk() {
    return g.jsxs("main", {
        className: "min-h-screen bg-taupe overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx("div", {
            className: "pt-32 pb-12 bg-taupe text-white",
            children: g.jsx("div", {
                className: "container mx-auto px-6 md:px-12",
                children: g.jsxs(Ue, {
                    direction: "up",
                    children: [g.jsx("p", {
                        className: "text-gold text-xs tracking-[0.3em] uppercase mb-4",
                        children: "Get In Touch"
                    }), g.jsx("h1", {
                        className: "font-serif text-5xl md:text-7xl text-white",
                        children: "Contact Us"
                    })]
                })
            })
        }), g.jsx(vT, {}), g.jsx(yi, {})]
    })
}
const Jk = [{
        id: 1,
        type: "art",
        typeLabel: "Original Artwork",
        name: "Sanctuary — Abstract Canvas",
        description: "Original acrylic on canvas. A meditative composition in warm sand and burnished gold leaf.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦485,000",
        price: "₦320,000",
        size: "90 × 120 cm",
        edition: "Limited Edition of 12"
    }, {
        id: 2,
        type: "art",
        typeLabel: "Original Artwork",
        name: "Dusk Study No. 3",
        description: "Mixed media on linen. Warm terracotta tones with delicate gold accents and raw texture.",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦620,000",
        price: "₦410,000",
        size: "80 × 100 cm",
        edition: "Limited Edition of 8"
    }, {
        id: 3,
        type: "sculpture",
        typeLabel: "Sculpture",
        name: "Form & Void",
        description: "Cast bronze with hand-applied patina finish. A refined sculptural statement for the modern interior.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦980,000",
        price: "₦720,000",
        size: "H: 45 cm",
        edition: "Edition of 6"
    }, {
        id: 4,
        type: "sculpture",
        typeLabel: "Sculpture",
        name: "Wabi — Ceramic Series",
        description: "Hand-thrown stoneware with matte volcanic glaze. Each piece uniquely imperfect by design.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦145,000",
        price: "₦95,000",
        size: "Set of 3 · Avg H: 28 cm",
        edition: "Open Edition"
    }, {
        id: 5,
        type: "interior",
        typeLabel: "Interior Object",
        name: "Aura — Decorative Vessel",
        description: "Oversized hand-formed vessel in speckled cream stoneware. A commanding centrepiece for any room.",
        image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦220,000",
        price: "₦155,000",
        size: "H: 62 cm · Ø 30 cm",
        edition: "Limited Edition of 20"
    }, {
        id: 6,
        type: "interior",
        typeLabel: "Interior Object",
        name: "Soleil — Brass Table Lamp",
        description: "Solid brushed brass with a hand-spun linen shade. Warm, directional light for living and study spaces.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
        oldPrice: "₦310,000",
        price: "₦215,000",
        size: "H: 55 cm · Base Ø 18 cm",
        edition: "Limited Edition of 15"
    }],
    e3 = "#3B2F2F",
    t3 = "#5C4A3A",
    n3 = "#F0EDE8";

function s3({
    image: e,
    name: n
}) {
    return g.jsx("div", {
        className: "relative w-full",
        style: {
            background: e3,
            padding: "14px",
            boxShadow: `
          inset 0 0 0 2px #2a1f1f,
          4px 4px 18px rgba(0,0,0,0.35),
          -2px -2px 6px rgba(255,255,255,0.04)
        `
        },
        children: g.jsx("div", {
            style: {
                background: t3,
                padding: "6px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)"
            },
            children: g.jsx("div", {
                style: {
                    background: n3,
                    padding: "18px 18px 30px"
                },
                children: g.jsx("img", {
                    src: e,
                    alt: n,
                    className: "w-full block object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                    style: {
                        aspectRatio: "4/3"
                    }
                })
            })
        })
    })
}
const i3 = {
    art: "bg-[#C19A6B] text-white",
    sculpture: "bg-[#4B4540] text-white",
    interior: "bg-[#EDE8E1] text-[#4B4540]"
};

function a3() {
    const [e, n] = A.useState(null), i = r => {
        n(r), setTimeout(() => n(null), 1800)
    };
    return g.jsxs("main", {
        className: "min-h-screen bg-[#F7F5F2] overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx("div", {
            className: "pt-36 pb-12 bg-[#F7F5F2]",
            children: g.jsx("div", {
                className: "container mx-auto px-6 md:px-12",
                children: g.jsxs(Ue, {
                    direction: "up",
                    children: [g.jsx("p", {
                        className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-4",
                        children: "Curated Pieces"
                    }), g.jsx("h1", {
                        className: "font-serif text-5xl md:text-7xl text-[#222222]",
                        children: "The Shop"
                    }), g.jsx("p", {
                        className: "mt-4 text-[#4B4540]/70 text-lg font-light max-w-xl",
                        children: "Original artworks, sculptures, and interior objects — each piece chosen to elevate the spaces we love."
                    })]
                })
            })
        }), g.jsx("section", {
            className: "pb-24 md:pb-32",
            children: g.jsx("div", {
                className: "container mx-auto px-6 md:px-12",
                children: g.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12",
                    children: Jk.map((r, l) => g.jsx(Ue, {
                        direction: "up",
                        delay: .08 * l,
                        children: g.jsxs("div", {
                            className: "group bg-white border border-[#EDE8E1] flex flex-col",
                            children: [g.jsx("div", {
                                className: "p-4 bg-white",
                                children: r.type === "art" ? g.jsx(s3, {
                                    image: r.image,
                                    name: r.name
                                }) : g.jsx("div", {
                                    className: "relative overflow-hidden aspect-[4/3]",
                                    children: g.jsx("img", {
                                        src: r.image,
                                        alt: r.name,
                                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    })
                                })
                            }), g.jsxs("div", {
                                className: "px-6 pb-6 flex flex-col flex-1",
                                children: [g.jsxs("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [g.jsx("span", {
                                        className: `text-[9px] tracking-widest uppercase px-2.5 py-1 font-medium ${i3[r.type]}`,
                                        children: r.typeLabel
                                    }), g.jsx("span", {
                                        className: "text-[9px] tracking-widest uppercase px-2.5 py-1 bg-transparent border border-[#EDE8E1] text-[#4B4540]/60",
                                        children: r.edition
                                    })]
                                }), g.jsx("p", {
                                    className: "text-[#C19A6B] text-[10px] tracking-widest uppercase mb-1",
                                    children: r.size
                                }), g.jsx("h3", {
                                    className: "font-serif text-xl text-[#222222] mb-2",
                                    children: r.name
                                }), g.jsx("p", {
                                    className: "text-[#4B4540]/70 text-sm font-light leading-relaxed mb-5 flex-1",
                                    children: r.description
                                }), g.jsxs("div", {
                                    className: "flex items-baseline gap-3 mb-5",
                                    children: [g.jsx("span", {
                                        className: "font-serif text-2xl text-[#222222]",
                                        children: r.price
                                    }), g.jsx("span", {
                                        className: "text-[#4B4540]/40 text-sm line-through",
                                        children: r.oldPrice
                                    })]
                                }), g.jsx("button", {
                                    onClick: () => i(r.id),
                                    className: `flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-widest font-medium border transition-all duration-300 ${e === r.id ? "bg-[#4B4540] border-[#4B4540] text-white" : "bg-transparent border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white"}`,
                                    children: e === r.id ? g.jsxs(g.Fragment, {
                                        children: [g.jsx(x1, {
                                            size: 14
                                        }), " Added to Cart"]
                                    }) : g.jsxs(g.Fragment, {
                                        children: [g.jsx(ac, {
                                            size: 14
                                        }), " Add to Cart"]
                                    })
                                })]
                            })]
                        })
                    }, r.id))
                })
            })
        }), g.jsx(yi, {})]
    })
}
const r3 = [{
    id: 1,
    name: "Sanctuary — Abstract Canvas",
    size: "90 × 120 cm",
    edition: "Limited Edition of 12",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400&auto=format&fit=crop",
    price: 32e4,
    qty: 1
}, {
    id: 2,
    name: "Wabi — Ceramic Series",
    size: "Set of 3",
    edition: "Open Edition",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=400&auto=format&fit=crop",
    price: 95e3,
    qty: 1
}];

function Qd(e) {
    return "₦" + e.toLocaleString("en-NG")
}

function o3() {
    const [e, n] = A.useState(r3), i = d => n(m => m.filter(p => p.id !== d)), r = (d, m) => n(p => p.map(y => y.id === d ? {
        ...y,
        qty: Math.max(1, m)
    } : y)), l = e.reduce((d, m) => d + m.price * m.qty, 0), f = l + 0;
    return g.jsxs("main", {
        className: "min-h-screen bg-[#F7F5F2] overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx("div", {
            className: "pt-36 pb-24",
            children: g.jsxs("div", {
                className: "container mx-auto px-6 md:px-12",
                children: [g.jsxs(Ue, {
                    direction: "up",
                    children: [g.jsx("p", {
                        className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-4",
                        children: "Review Your Selection"
                    }), g.jsx("h1", {
                        className: "font-serif text-5xl md:text-6xl text-[#222222] mb-12",
                        children: "Your Cart"
                    })]
                }), e.length === 0 ? g.jsx(Ue, {
                    direction: "up",
                    children: g.jsxs("div", {
                        className: "text-center py-24",
                        children: [g.jsx("p", {
                            className: "font-serif text-2xl text-[#4B4540]/60 mb-6",
                            children: "Your cart is empty."
                        }), g.jsx(_n, {
                            href: "/shop",
                            className: "text-xs uppercase tracking-widest text-[#C19A6B] border-b border-[#C19A6B] pb-1 hover:opacity-70 transition-opacity",
                            children: "Continue Shopping"
                        })]
                    })
                }) : g.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                    children: [g.jsxs("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [e.map((d, m) => g.jsx(Ue, {
                            direction: "up",
                            delay: .1 * m,
                            children: g.jsxs("div", {
                                className: "bg-white border border-[#EDE8E1] p-5",
                                children: [g.jsxs("div", {
                                    className: "flex gap-4 mb-4",
                                    children: [g.jsx("img", {
                                        src: d.image,
                                        alt: d.name,
                                        className: "w-20 h-20 object-cover flex-shrink-0"
                                    }), g.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [g.jsx("h3", {
                                            className: "font-serif text-base text-[#222222] mb-1 leading-snug",
                                            children: d.name
                                        }), g.jsxs("p", {
                                            className: "text-[#4B4540]/60 text-xs",
                                            children: [d.size, " · ", d.edition]
                                        })]
                                    }), g.jsx("button", {
                                        onClick: () => i(d.id),
                                        className: "text-[#4B4540]/40 hover:text-red-400 transition-colors flex-shrink-0 self-start",
                                        children: g.jsx(cC, {
                                            size: 15
                                        })
                                    })]
                                }), g.jsxs("div", {
                                    className: "flex items-center justify-between border-t border-[#EDE8E1] pt-4",
                                    children: [g.jsx("p", {
                                        className: "font-serif text-lg text-[#C19A6B]",
                                        children: Qd(d.price * d.qty)
                                    }), g.jsxs("div", {
                                        className: "flex items-center border border-[#EDE8E1]",
                                        children: [g.jsx("button", {
                                            onClick: () => r(d.id, d.qty - 1),
                                            className: "px-3 py-1.5 text-[#4B4540] hover:bg-[#EDE8E1] transition-colors text-sm",
                                            children: "−"
                                        }), g.jsx("span", {
                                            className: "px-4 py-1.5 text-sm text-[#222222] border-x border-[#EDE8E1]",
                                            children: d.qty
                                        }), g.jsx("button", {
                                            onClick: () => r(d.id, d.qty + 1),
                                            className: "px-3 py-1.5 text-[#4B4540] hover:bg-[#EDE8E1] transition-colors text-sm",
                                            children: "+"
                                        })]
                                    })]
                                })]
                            })
                        }, d.id)), g.jsx("div", {
                            className: "pt-4",
                            children: g.jsx(_n, {
                                href: "/shop",
                                className: "text-xs uppercase tracking-widest text-[#4B4540]/60 hover:text-[#C19A6B] transition-colors border-b border-current pb-1",
                                children: "← Continue Shopping"
                            })
                        })]
                    }), g.jsx(Ue, {
                        direction: "left",
                        delay: .2,
                        children: g.jsxs("div", {
                            className: "bg-[#4B4540] text-white p-8 h-fit",
                            children: [g.jsx("h2", {
                                className: "font-serif text-2xl mb-8 border-b border-white/20 pb-6",
                                children: "Order Summary"
                            }), g.jsxs("div", {
                                className: "space-y-4 text-sm mb-8",
                                children: [g.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [g.jsx("span", {
                                        className: "text-white/70",
                                        children: "Subtotal"
                                    }), g.jsx("span", {
                                        children: Qd(l)
                                    })]
                                }), g.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [g.jsx("span", {
                                        className: "text-white/70",
                                        children: "Shipping"
                                    }), g.jsx("span", {
                                        className: "text-[#C19A6B]",
                                        children: "Complimentary"
                                    })]
                                }), g.jsxs("div", {
                                    className: "flex justify-between border-t border-white/20 pt-4 font-serif text-lg",
                                    children: [g.jsx("span", {
                                        children: "Total"
                                    }), g.jsx("span", {
                                        children: Qd(f)
                                    })]
                                })]
                            }), g.jsxs(_n, {
                                href: "/checkout",
                                className: "flex items-center justify-center gap-2 w-full py-4 bg-[#C19A6B] text-white text-xs uppercase tracking-widest hover:bg-[#a8845b] transition-colors",
                                children: ["Proceed to Checkout ", g.jsx(F_, {
                                    size: 14
                                })]
                            }), g.jsx("p", {
                                className: "text-white/40 text-xs text-center mt-4",
                                children: "White-glove delivery included"
                            })]
                        })
                    })]
                })]
            })
        }), g.jsx(yi, {})]
    })
}
const l3 = [{
    name: "Sanctuary — Abstract Canvas",
    size: "90 × 120 cm",
    price: "₦320,000",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=200&auto=format&fit=crop"
}, {
    name: "Wabi — Ceramic Series",
    size: "Set of 3",
    price: "₦95,000",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=200&auto=format&fit=crop"
}];

function c3() {
    const [e, n] = A.useState(!1), [i, r] = A.useState("details");
    return e ? g.jsxs("main", {
        className: "min-h-screen bg-[#F7F5F2] overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsxs("div", {
            className: "flex flex-col items-center justify-center min-h-screen px-6 text-center",
            children: [g.jsx("div", {
                className: "w-16 h-16 rounded-full bg-[#C19A6B]/20 flex items-center justify-center mb-8",
                children: g.jsx(x1, {
                    size: 28,
                    className: "text-[#C19A6B]"
                })
            }), g.jsx("p", {
                className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-4",
                children: "Order Confirmed"
            }), g.jsx("h2", {
                className: "font-serif text-4xl md:text-5xl text-[#222222] mb-4",
                children: "Thank You."
            }), g.jsx("p", {
                className: "text-[#4B4540]/70 max-w-md font-light text-lg mb-8",
                children: "Your order has been received. Our team will be in touch within 24 hours to arrange white-glove delivery."
            }), g.jsxs("p", {
                className: "text-[#4B4540]/50 text-sm",
                children: ["Order reference: ", g.jsxs("span", {
                    className: "text-[#C19A6B]",
                    children: ["#VI-", Math.floor(Math.random() * 9e4) + 1e4]
                })]
            })]
        }), g.jsx(yi, {})]
    }) : g.jsxs("main", {
        className: "min-h-screen bg-[#F7F5F2] overflow-x-hidden",
        children: [g.jsx(di, {}), g.jsx("div", {
            className: "pt-36 pb-24",
            children: g.jsxs("div", {
                className: "container mx-auto px-6 md:px-12 max-w-5xl",
                children: [g.jsxs(Ue, {
                    direction: "up",
                    children: [g.jsx("p", {
                        className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-4",
                        children: "Final Step"
                    }), g.jsx("h1", {
                        className: "font-serif text-5xl md:text-6xl text-[#222222] mb-12",
                        children: "Checkout"
                    })]
                }), g.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-5 gap-12",
                    children: [g.jsxs("div", {
                        className: "lg:col-span-3",
                        children: [g.jsx("div", {
                            className: "flex gap-0 mb-10 border border-[#EDE8E1]",
                            children: ["details", "payment"].map(l => g.jsx("button", {
                                onClick: () => r(l),
                                className: `flex-1 py-3 text-xs uppercase tracking-widest transition-all duration-300 ${i === l ? "bg-[#4B4540] text-white" : "bg-white text-[#4B4540]/60 hover:text-[#4B4540]"}`,
                                children: l === "details" ? "1. Your Details" : "2. Payment"
                            }, l))
                        }), g.jsx(Ue, {
                            direction: "up",
                            children: i === "details" ? g.jsxs("div", {
                                className: "space-y-6",
                                children: [g.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [g.jsxs("div", {
                                        children: [g.jsx("label", {
                                            className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                            children: "First Name"
                                        }), g.jsx("input", {
                                            type: "text",
                                            placeholder: "Adaeze",
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        })]
                                    }), g.jsxs("div", {
                                        children: [g.jsx("label", {
                                            className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                            children: "Last Name"
                                        }), g.jsx("input", {
                                            type: "text",
                                            placeholder: "Okonkwo",
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        })]
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Email Address"
                                    }), g.jsx("input", {
                                        type: "email",
                                        placeholder: "adaeze@example.com",
                                        className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Phone Number"
                                    }), g.jsx("input", {
                                        type: "tel",
                                        placeholder: "+234 801 234 5678",
                                        className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Delivery Address"
                                    }), g.jsx("input", {
                                        type: "text",
                                        placeholder: "1A Bourdillon Road, Ikoyi",
                                        className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors mb-3"
                                    }), g.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [g.jsx("input", {
                                            type: "text",
                                            placeholder: "City",
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        }), g.jsx("input", {
                                            type: "text",
                                            placeholder: "State",
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        })]
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Delivery Notes (optional)"
                                    }), g.jsx("textarea", {
                                        rows: 3,
                                        placeholder: "Gate code, preferred delivery window, etc.",
                                        className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors resize-none"
                                    })]
                                }), g.jsx("button", {
                                    onClick: () => r("payment"),
                                    className: "w-full py-4 bg-[#4B4540] text-white text-xs uppercase tracking-widest hover:bg-[#222222] transition-colors",
                                    children: "Continue to Payment"
                                })]
                            }) : g.jsxs("div", {
                                className: "space-y-6",
                                children: [g.jsxs("div", {
                                    className: "flex items-center gap-2 text-[#4B4540]/60 text-xs mb-4",
                                    children: [g.jsx(mx, {
                                        size: 12
                                    }), g.jsx("span", {
                                        children: "Your payment information is encrypted and secure."
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Card Number"
                                    }), g.jsxs("div", {
                                        className: "relative",
                                        children: [g.jsx("input", {
                                            type: "text",
                                            placeholder: "4242  4242  4242  4242",
                                            maxLength: 19,
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 pr-12 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        }), g.jsx(I_, {
                                            size: 16,
                                            className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#4B4540]/40"
                                        })]
                                    })]
                                }), g.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [g.jsxs("div", {
                                        children: [g.jsx("label", {
                                            className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                            children: "Expiry Date"
                                        }), g.jsx("input", {
                                            type: "text",
                                            placeholder: "MM / YY",
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        })]
                                    }), g.jsxs("div", {
                                        children: [g.jsx("label", {
                                            className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                            children: "CVV"
                                        }), g.jsx("input", {
                                            type: "text",
                                            placeholder: "• • •",
                                            maxLength: 4,
                                            className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                        })]
                                    })]
                                }), g.jsxs("div", {
                                    children: [g.jsx("label", {
                                        className: "text-[10px] uppercase tracking-widest text-[#4B4540]/60 block mb-2",
                                        children: "Name on Card"
                                    }), g.jsx("input", {
                                        type: "text",
                                        placeholder: "Adaeze Okonkwo",
                                        className: "w-full border border-[#EDE8E1] bg-white px-4 py-3 text-sm text-[#222222] focus:outline-none focus:border-[#C19A6B] transition-colors"
                                    })]
                                }), g.jsxs("button", {
                                    onClick: () => n(!0),
                                    className: "w-full py-4 bg-[#C19A6B] text-white text-xs uppercase tracking-widest hover:bg-[#a8845b] transition-colors flex items-center justify-center gap-2",
                                    children: [g.jsx(mx, {
                                        size: 13
                                    }), " Place Order — ₦415,000"]
                                }), g.jsx("button", {
                                    onClick: () => r("details"),
                                    className: "w-full text-center text-xs text-[#4B4540]/50 hover:text-[#4B4540] transition-colors",
                                    children: "← Back to details"
                                })]
                            })
                        }, i)]
                    }), g.jsx(Ue, {
                        direction: "left",
                        delay: .2,
                        className: "lg:col-span-2",
                        children: g.jsxs("div", {
                            className: "bg-[#4B4540] text-white p-8 sticky top-36",
                            children: [g.jsx("h2", {
                                className: "font-serif text-xl mb-6 border-b border-white/20 pb-5",
                                children: "Your Order"
                            }), g.jsx("div", {
                                className: "space-y-4 mb-6",
                                children: l3.map(l => g.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [g.jsx("img", {
                                        src: l.image,
                                        alt: l.name,
                                        className: "w-14 h-14 object-cover flex-shrink-0"
                                    }), g.jsxs("div", {
                                        children: [g.jsx("p", {
                                            className: "text-sm font-medium",
                                            children: l.name
                                        }), g.jsx("p", {
                                            className: "text-white/50 text-xs",
                                            children: l.size
                                        }), g.jsx("p", {
                                            className: "text-[#C19A6B] text-sm mt-1",
                                            children: l.price
                                        })]
                                    })]
                                }, l.name))
                            }), g.jsxs("div", {
                                className: "border-t border-white/20 pt-5 space-y-3 text-sm",
                                children: [g.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [g.jsx("span", {
                                        className: "text-white/60",
                                        children: "Subtotal"
                                    }), g.jsx("span", {
                                        children: "₦415,000"
                                    })]
                                }), g.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [g.jsx("span", {
                                        className: "text-white/60",
                                        children: "Shipping"
                                    }), g.jsx("span", {
                                        className: "text-[#C19A6B]",
                                        children: "Complimentary"
                                    })]
                                }), g.jsxs("div", {
                                    className: "flex justify-between font-serif text-lg pt-2 border-t border-white/20",
                                    children: [g.jsx("span", {
                                        children: "Total"
                                    }), g.jsx("span", {
                                        children: "₦415,000"
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })
        }), g.jsx(yi, {})]
    })
}
const Vt = {
    name: "The Halcyon Penthouse",
    location: "Lekki Phase 1, Lagos",
    year: "2024",
    category: "Full Residential Design",
    area: "620 sqm",
    description: "A landmark penthouse perched above Lagos Lagoon, reimagined as a sanctuary of refined calm. The brief called for an interior that felt both grand and deeply personal — a home that could host forty guests and yet feel intimate for two.",
    paragraph2: "Working closely with the client over eighteen months, our studio developed a palette rooted in warm sand, burnished bronze, and deep olive — colours drawn from the Lagos skyline at dusk. Every piece of furniture was custom-designed or sourced from our network of artisans across Italy and West Africa.",
    paragraph3: "The result is a home that belongs entirely to this city, this view, and this family.",
    slides: [{
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
        caption: "Living Room — Panoramic Lagos Lagoon View"
    }, {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
        caption: "Primary Suite — Bespoke Joinery & Soft Furnishings"
    }, {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        caption: "Kitchen & Dining — Calacatta Marble & Custom Cabinetry"
    }, {
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop",
        caption: "Study — Hand-Selected Art & Bronze Fixtures"
    }, {
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
        caption: "Entrance Hall — Terrazzo & Statement Lighting"
    }]
};

function u3() {
    const [e, n] = A.useState(0), [i, r] = A.useState(!1), l = Vt.slides.length, c = A.useCallback(() => n(d => (d - 1 + l) % l), [l]), f = A.useCallback(() => n(d => (d + 1) % l), [l]);
    return A.useEffect(() => {
        const d = m => {
            m.key === "ArrowLeft" && c(), m.key === "ArrowRight" && f(), m.key === "Escape" && r(!1)
        };
        return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d)
    }, [c, f]), g.jsxs("main", {
        className: "min-h-screen bg-[#F7F5F2] overflow-x-hidden",
        children: [g.jsx(di, {}), i && g.jsxs("div", {
            className: "fixed inset-0 z-[100] bg-black flex items-center justify-center",
            children: [g.jsx("button", {
                onClick: () => r(!1),
                className: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10",
                children: g.jsx(Qh, {
                    size: 28
                })
            }), g.jsx("button", {
                onClick: c,
                className: "absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10",
                children: g.jsx(dx, {
                    size: 40
                })
            }), g.jsx("img", {
                src: Vt.slides[e].image,
                alt: Vt.slides[e].caption,
                className: "max-h-screen max-w-full object-contain"
            }), g.jsx("button", {
                onClick: f,
                className: "absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10",
                children: g.jsx(hx, {
                    size: 40
                })
            }), g.jsxs("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-center",
                children: [g.jsx("p", {
                    className: "text-white/70 text-sm",
                    children: Vt.slides[e].caption
                }), g.jsxs("p", {
                    className: "text-white/40 text-xs mt-2",
                    children: [e + 1, " / ", l]
                })]
            })]
        }), g.jsxs("div", {
            className: "relative w-full h-[55vh] md:h-[75vh] overflow-hidden bg-[#222222] mt-[68px] md:mt-[102px]",
            children: [Vt.slides.map((d, m) => g.jsxs("div", {
                className: `absolute inset-0 transition-opacity duration-700 ${m === e ? "opacity-100" : "opacity-0"}`,
                children: [g.jsx("img", {
                    src: d.image,
                    alt: d.caption,
                    className: "w-full h-full object-cover"
                }), g.jsx("div", {
                    className: "absolute inset-0 bg-black/30"
                })]
            }, m)), g.jsx("button", {
                onClick: c,
                className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/40 text-white flex items-center justify-center hover:bg-white/20 transition-all z-10",
                children: g.jsx(dx, {
                    size: 20
                })
            }), g.jsx("button", {
                onClick: f,
                className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/40 text-white flex items-center justify-center hover:bg-white/20 transition-all z-10",
                children: g.jsx(hx, {
                    size: 20
                })
            }), g.jsxs("button", {
                onClick: () => r(!0),
                className: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest z-10",
                children: [g.jsx(nC, {
                    size: 14
                }), " Full Screen"]
            }), g.jsxs("div", {
                className: "absolute bottom-6 left-0 right-0 px-8 flex items-end justify-between z-10",
                children: [g.jsx("p", {
                    className: "text-white/80 text-sm",
                    children: Vt.slides[e].caption
                }), g.jsx("div", {
                    className: "flex gap-2",
                    children: Vt.slides.map((d, m) => g.jsx("button", {
                        onClick: () => n(m),
                        className: `w-1.5 h-1.5 rounded-full transition-all duration-300 ${m === e ? "bg-[#C19A6B] w-5" : "bg-white/40"}`
                    }, m))
                })]
            })]
        }), g.jsx("div", {
            className: "bg-[#222222] px-6 md:px-12 py-4",
            children: g.jsx("div", {
                className: "container mx-auto flex gap-3 overflow-x-auto scrollbar-none",
                children: Vt.slides.map((d, m) => g.jsx("button", {
                    onClick: () => n(m),
                    className: `flex-shrink-0 w-20 h-14 overflow-hidden border-2 transition-all duration-300 ${m === e ? "border-[#C19A6B]" : "border-transparent opacity-50 hover:opacity-80"}`,
                    children: g.jsx("img", {
                        src: d.image,
                        alt: "",
                        className: "w-full h-full object-cover"
                    })
                }, m))
            })
        }), g.jsx("div", {
            className: "py-20 md:py-28",
            children: g.jsx("div", {
                className: "container mx-auto px-6 md:px-12",
                children: g.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-16",
                    children: [g.jsx("div", {
                        className: "lg:col-span-2",
                        children: g.jsxs(Ue, {
                            direction: "up",
                            children: [g.jsx(_n, {
                                href: "/portfolio",
                                className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity",
                                children: "← Back to Portfolio"
                            }), g.jsx("p", {
                                className: "text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-3",
                                children: Vt.location
                            }), g.jsx("h1", {
                                className: "font-serif text-4xl md:text-6xl text-[#222222] mb-8",
                                children: Vt.name
                            }), g.jsx("p", {
                                className: "text-[#4B4540]/80 text-lg font-light leading-relaxed mb-6",
                                children: Vt.description
                            }), g.jsx("p", {
                                className: "text-[#4B4540]/70 font-light leading-relaxed mb-6",
                                children: Vt.paragraph2
                            }), g.jsx("p", {
                                className: "text-[#4B4540]/70 font-light leading-relaxed italic",
                                children: Vt.paragraph3
                            })]
                        })
                    }), g.jsx(Ue, {
                        direction: "left",
                        delay: .2,
                        children: g.jsxs("div", {
                            className: "bg-[#4B4540] text-white p-8 h-fit",
                            children: [g.jsx("h3", {
                                className: "font-serif text-lg mb-6 border-b border-white/20 pb-4",
                                children: "Project Details"
                            }), g.jsx("dl", {
                                className: "space-y-5 text-sm",
                                children: [{
                                    label: "Location",
                                    value: Vt.location
                                }, {
                                    label: "Year",
                                    value: Vt.year
                                }, {
                                    label: "Category",
                                    value: Vt.category
                                }, {
                                    label: "Total Area",
                                    value: Vt.area
                                }].map(({
                                    label: d,
                                    value: m
                                }) => g.jsxs("div", {
                                    children: [g.jsx("dt", {
                                        className: "text-[#C19A6B] text-[10px] uppercase tracking-widest mb-1",
                                        children: d
                                    }), g.jsx("dd", {
                                        className: "font-light",
                                        children: m
                                    })]
                                }, d))
                            }), g.jsxs("div", {
                                className: "mt-8 pt-6 border-t border-white/20",
                                children: [g.jsx("p", {
                                    className: "text-white/60 text-xs leading-relaxed mb-4",
                                    children: "Interested in a similar transformation for your home?"
                                }), g.jsx(_n, {
                                    href: "/contact",
                                    className: "block text-center py-3 border border-[#C19A6B] text-[#C19A6B] text-xs uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-all duration-300",
                                    children: "Begin a Conversation"
                                })]
                            })]
                        })
                    })]
                })
            })
        }), g.jsx(yi, {})]
    })
}
const f3 = new V2;

function d3() {
    return g.jsxs(l2, {
        children: [g.jsx(Js, {
            path: "/",
            component: Ik
        }), g.jsx(Js, {
            path: "/portfolio",
            component: $k
        }), g.jsx(Js, {
            path: "/contact",
            component: Wk
        }), g.jsx(Js, {
            path: "/shop",
            component: a3
        }), g.jsx(Js, {
            path: "/cart",
            component: o3
        }), g.jsx(Js, {
            path: "/checkout",
            component: c3
        }), g.jsx(Js, {
            path: "/project-detail",
            component: u3
        }), g.jsx(Js, {
            component: FN
        })]
    })
}

function h3() {
    return g.jsx(L2, {
        client: f3,
        children: g.jsxs(LN, {
            children: [g.jsx(zb, {
                base: "/".replace(/\/$/, ""),
                children: g.jsx(d3, {})
            }), g.jsx(sR, {})]
        })
    })
}
UE.createRoot(document.getElementById("root")).render(g.jsx(h3, {}));