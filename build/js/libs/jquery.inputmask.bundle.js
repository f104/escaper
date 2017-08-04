/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-25
*/

!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 9);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($) {
        return $;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(11), __webpack_require__(10) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, window, document, undefined) {
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, 
            !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, 
            options.alias = alias), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, 
            this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
        }
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), 
            $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
            !1);
        }
        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = !1;
                if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, regexMask ? (mask = opts.regex, 
                mask = mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
                opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }
                var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: undefined,
                    buffer: undefined,
                    tests: {},
                    metadata: metadata,
                    maskLength: undefined
                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
                masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
                masksetDefinition;
            }
            if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                    var altMask = opts.groupmarker.start;
                    return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                        altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), 
                        msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                    }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
                }
                opts.mask = opts.mask.pop();
            }
            return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
        }
        function maskScope(actionObj, maskset, opts) {
            function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
                minimalPos = minimalPos || 0;
                var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
                do {
                    !0 === baseOnInput && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                    test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                    test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), 
                    pos++;
                } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, 
                maskTemplate;
            }
            function getMaskSet() {
                return maskset;
            }
            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
            }
            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
                closestTo === undefined && (closestTo = -1);
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                    psNdx >= closestTo && (after = psNdx));
                }
                return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;
            }
            function stripValidPositions(start, end, nocheck, strict) {
                var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;
                for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {
                    var posMatch = getMaskSet().validPositions[pos];
                    if (posMatch !== undefined && null === posMatch.match.fn) {
                        var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];
                        return prevMatch !== undefined && nextMatch !== undefined;
                    }
                    return !1;
                }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);
                for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {
                    for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;
                    if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {
                        var t = getTestTemplate(i);
                        !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), 
                        getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], 
                        i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], 
                        i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                    }
                }
                resetMaskSet(!0);
            }
            function determineTestTemplate(tests, guessNextBest) {
                for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], 
                !(testPos.match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;
                return testPos;
            }
            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }
            function getTest(pos) {
                return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
            }
            function positionCanMatchDefinition(pos, def) {
                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = !0;
                    break;
                }
                return valid;
            }
            function getTests(pos, ndxIntlzr, tstPs) {
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                            return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
                                if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                            }), firstMatch;
                        }
                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);
                            return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                                indexPos = ndxPos);
                            }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }
                        if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        if (testPos === pos && match.matches === undefined) return matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency
                        }), !0;
                        if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                    if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                    insertStop = !0, testPos = pos;
                                }
                            } else if (match.isAlternator) {
                                var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (-1 === altIndex || "string" == typeof altIndex) {
                                    var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                        !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                            var ntndx = $.inArray(match, maskToken.matches) + 1;
                                            maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), 
                                            $.each(matches, function(ndx, lmnt) {
                                                lmnt.alternation = loopNdx.length - 1;
                                            }));
                                        }
                                        maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = !1;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                    if (function(source, target) {
                                                        return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;
                                                    }(altMatch, altMatch2)) {
                                                        dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], 
                                                        altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], 
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));
                                                        break;
                                                    }
                                                    if (altMatch.match.def === altMatch2.match.def) {
                                                        dropMatch = !1;
                                                        break;
                                                    }
                                                    if (function(source, target) {
                                                        return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2) || function(source, target) {
                                                        return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\[\]]/g, ""), getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2)) {
                                                        altMatch.alternation == altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), 
                                                        -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), 
                                                        dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], 
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break;
                                                    }
                                                }
                                            }
                                            dropMatch || malternateMatches.push(altMatch);
                                        }
                                    }
                                    "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {
                                        if (isFinite(ndx)) {
                                            var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");
                                            lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;
                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", 
                                            lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), 
                                            lmnt.alternation = alternation);
                                            if (lmnt.locator[alternation] !== undefined) return lmnt;
                                        }
                                    })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, 
                                    match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                if (match) return !0;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {
                                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, 
                                    isFirstMatch(latestMatch, tokenGroup)) {
                                        if (qndx > qt.quantifier.min - 1) {
                                            insertStop = !0, testPos = pos;
                                            break;
                                        }
                                        return !0;
                                    }
                                    return !0;
                                }
                            } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                        } else testPos++;
                    }
                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                        var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) return match;
                        if (testPos > pos) break;
                    }
                }
                function filterTests(tests) {
                    if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                        if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];
                        if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];
                        if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];
                    }
                    return tests;
                }
                var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                if (pos > -1) {
                    if (ndxIntlzr === undefined) {
                        for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;
                        test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {
                            var locator = [];
                            return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? (locator = determineTestTemplate(tests.slice()).locator.slice(), 
                            0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {
                                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                            })), locator;
                        }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        if (resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos) break;
                    }
                }
                return (0 === matches.length || insertStop) && matches.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: cacheDependency
                }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), 
                filterTests(getMaskSet().tests[pos]));
            }
            function getBufferTemplate() {
                return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
                getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
                getMaskSet()._buffer;
            }
            function getBuffer(noCache) {
                return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), 
                getMaskSet().buffer;
            }
            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
                for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
                    var valResult = isValid(p, buffer[i], !0, !0);
                    !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
                }
            }
            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                  case "upper":
                    elem = elem.toUpperCase();
                    break;

                  case "lower":
                    elem = elem.toLowerCase();
                    break;

                  case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                    break;

                  default:
                    if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                    }
                }
                return elem;
            }
            function checkAlternationMatch(altArr1, altArr2, na) {
                for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                    isMatch = !0;
                    break;
                }
                return isMatch;
            }
            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
                    return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
                }
                function _isValid(position, c, strict) {
                    var rslt = !1;
                    return $.each(getTests(position), function(ndx, tst) {
                        for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                        if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                            c: getPlaceholder(position, test, !0) || test.def,
                            pos: position
                        })) {
                            var elem = rslt.c !== undefined ? rslt.c : c;
                            elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                            var validatedPos = position, possibleModifiedBuffer = getBuffer();
                            if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), 
                            $.each(rslt.remove.sort(function(a, b) {
                                return b - a;
                            }), function(ndx, lmnt) {
                                stripValidPositions(lmnt, lmnt + 1, !0);
                            })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), 
                            $.each(rslt.insert.sort(function(a, b) {
                                return a - b;
                            }), function(ndx, lmnt) {
                                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                            })), rslt.refreshFromBuffer) {
                                var refresh = rslt.refreshFromBuffer;
                                if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), 
                                rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), 
                                !1;
                                if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), 
                                !1;
                            } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, 
                            refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), 
                            !1;
                            return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), 
                            setValidPosition(validatedPos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                        }
                    }), rslt;
                }
                function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                    if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {
                        var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);
                        for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                        getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                        var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;
                        for (i = j = pos; i <= lvp; i++) {
                            var t = positionsClone[i];
                            if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {
                                if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), 
                                getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), 
                                j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, !0, !0);
                                    valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, 
                                    needsValidation = !0;
                                } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;
                                if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), 
                                valid) break;
                            }
                            if (!valid) break;
                        }
                        if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), 
                        resetMaskSet(!0), !1;
                    } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    return resetMaskSet(!0), !0;
                }
                function fillMissingNonMask(maskPos) {
                    for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;
                    var testTemplate, testsFromPos;
                    for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(), 
                    "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));
                }
                strict = !0 === strict;
                var maskPos = pos;
                pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
                var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
                if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), 
                !0 === result) {
                    if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), 
                    maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), 
                    (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
                        var currentPosValid = getMaskSet().validPositions[maskPos];
                        if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {
                                !function(originalPos, newPos) {
                                    var vp = getMaskSet().validPositions[newPos];
                                    if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
                                        var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;
                                        "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {
                                            for (var i = 0; i < tll; i++) {
                                                if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                                    var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];
                                                    targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                                    break;
                                                }
                                                equality < i && (equality = i, bestMatch = tst);
                                            }
                                        }), bestMatch = $.extend({}, bestMatch, {
                                            input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                        }), bestMatch.generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, 
                                        _isValid(newPos, vp.input, !0);
                                    }
                                }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;
                                break;
                            }
                        } else result = {
                            caret: seekNext(maskPos)
                        };
                    }
                    !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {
                        var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();
                        for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
                            if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, 
                            prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                            prevAltPos = altPos;
                        }
                        if (alternation !== undefined) {
                            decisionPos = parseInt(lastAlt);
                            var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
                            decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                            var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
                            $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {
                                altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                                for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                                    var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;
                                    if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {
                                        getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                                        var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                        for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), 
                                        null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, 
                                        !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), 
                                        staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), 
                                        getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, 
                                        i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) validPos = getMaskSet().validPositions[i], 
                                        validPos && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, 
                                        delete getMaskSet().validPositions[i];
                                        for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), 
                                        resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {
                                            var input = validInputs.shift();
                                            if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
                                        }
                                        if (isValidRslt) {
                                            getMaskSet().validPositions[decisionPos].locator = possibilities;
                                            var targetLvp = getLastValidPosition(pos) + 1;
                                            for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                                            pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                                        }
                                        if (isValidRslt) return !1;
                                        resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
                                    }
                                }
                            });
                        }
                        return isValidRslt;
                    }(maskPos, c, strict)), !0 === result && (result = {
                        pos: maskPos
                    });
                }
                if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
                    var postResult = opts.postValidation(getBuffer(!0), result, opts);
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = !0 === postResult ? result : postResult;
                }
                return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), 
                getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
            }
            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;
                if (!0 !== strict && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                }
                return !1;
            }
            function seekNext(pos, newBlock) {
                var maskL = getMaskSet().maskLength;
                if (pos >= maskL) return maskL;
                var position = pos;
                for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;
                return position;
            }
            function seekPrevious(pos, newBlock) {
                var tests, position = pos;
                if (position <= 0) return 0;
                for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && (tests = getTests(position), 
                tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
                return position;
            }
            function getBufferElement(position) {
                return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
            }
            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                            buffer = getBuffer(!0);
                        }
                        caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
                    }
                }
                input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function() {
                    caret(input, caretPos);
                }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, 
                $(input).trigger("input")));
            }
            function getPlaceholder(pos, test, returnPL) {
                if (test = test || getTest(pos).match, test.placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                if (null === test.fn) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var prevTest, tests = getTests(pos), staticAlternations = [];
                        if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                        null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                    }
                    return test.def;
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                function isTemplateMatch(ndx, charCodes) {
                    return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);
                }
                var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
                if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), 
                    initialNdx = seekNext(initialNdx));
                }
                if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, 
                $.each(inputValue, function(ndx, charCode) {
                    if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                        if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                            var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                            result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), 
                            initialNdx = pos + 1, charCodes = "";
                        } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                        if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {
                            var origResult = result;
                            if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), 
                            (result = $.extend(origResult, result)) && result.refreshFromBuffer) {
                                var refresh = result.refreshFromBuffer;
                                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), 
                                resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);
                            }
                        }
                    }
                }), writeOut) {
                    var caretPos = undefined;
                    document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), 
                    writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
                }
            }
            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) return input.value;
                    input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
                }
                var umValue = [], vps = getMaskSet().validPositions;
                for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }
            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    if (!0 !== notranslate && isRTL && "number" == typeof pos && (!opts.greedy || "" !== opts.placeholder)) {
                        pos = getBuffer().join("").length - pos;
                    }
                    return pos;
                }
                var range;
                if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, 
                end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), 
                range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
                end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
                begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), 
                end = begin + range.text.length), {
                    begin: translatePosition(begin),
                    end: translatePosition(end)
                };
                if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {
                    begin = translatePosition(begin), end = translatePosition(end), end = "number" == typeof end ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, 
                    input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                        if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
                            var textNode = document.createTextNode("");
                            input.appendChild(textNode);
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                        range.collapse(!0);
                        var sel = window.getSelection();
                        sel.removeAllRanges(), sel.addRange(range);
                    } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), 
                    range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                    renderColorMask(input, {
                        begin: begin,
                        end: end
                    });
                }
            }
            function determineLastRequiredPosition(returnDefinition) {
                var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;
                for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : undefined
                } : bl;
            }
            function clearOptionalTail(buffer) {
                for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;
                for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;
                return buffer.splice(rl), buffer;
            }
            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if ("*" === opts.repeat) return undefined;
                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                            complete = !1;
                            break;
                        }
                    }
                }
                return complete;
            }
            function handleRemove(input, k, pos, strict, fromIsValid) {
                if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), 
                isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend;
                }
                k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), 
                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, 
                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), 
                stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {
                    if (opts.keepStatic) {
                        for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
                            var altPos = getMaskSet().validPositions[lastAlt];
                            if (altPos) {
                                if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), 
                                delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
                                prevAltPos = altPos;
                            }
                        }
                        if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {
                            var keypress = new $.Event("keypress");
                            keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
                        } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
                    }
                }();
                var lvp = getLastValidPosition(pos.begin, !0);
                if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, 
                !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;
            }
            function initializeColorMask(input) {
                function findCaretPos(clientx) {
                    var caretPos, e = document.createElement("span");
                    for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
                    e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, 
                    e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", 
                    e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                    var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                            var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    return document.body.removeChild(e), caretPos;
                }
                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");
                template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, 
                colorMask = document.createElement("div"), colorMask.className = "im-colormask", 
                input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), 
                colorMask.appendChild(template), colorMask.appendChild(input), input.style.left = template.offsetLeft + "px", 
                $(input).on("click", function(e) {
                    return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);
                }), $(input).on("keydown", function(e) {
                    e.shiftKey || !1 === opts.insertMode || setTimeout(function() {
                        renderColorMask(input);
                    }, 0);
                });
            }
            function renderColorMask(input, caretPos, clear) {
                function handleStatic() {
                    isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, 
                    maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static'>");
                }
                function handleCaret(force) {
                    !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
                }
                var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;
                if (colorMask !== undefined) {
                    var buffer = getBuffer();
                    if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
                        begin: caretPos,
                        end: caretPos
                    }), !0 !== clear) {
                        var lvp = getLastValidPosition();
                        do {
                            handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), 
                            maskTemplate += getPlaceholder(pos, test))), pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);
                        -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();
                    }
                    var template = colorMask.getElementsByTagName("div")[0];
                    template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);
                }
            }
            maskset = maskset || this.maskset, opts = opts || this.opts;
            var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {
                on: function(input, eventName, eventHandler) {
                    var ev = function(e) {
                        if (this.inputmask === undefined && "FORM" !== this.nodeName) {
                            var imOpts = $.data(this, "_inputmask_opts");
                            imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                switch (e.type) {
                                  case "input":
                                    if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();
                                    break;

                                  case "keydown":
                                    skipKeyPressEvent = !1, skipInputEvent = !1;
                                    break;

                                  case "keypress":
                                    if (!0 === skipKeyPressEvent) return e.preventDefault();
                                    skipKeyPressEvent = !0;
                                    break;

                                  case "click":
                                    if (iemobile || iphone) {
                                        var that = this, args = arguments;
                                        return setTimeout(function() {
                                            eventHandler.apply(that, args);
                                        }, 0), !1;
                                    }
                                }
                                var returnVal = eventHandler.apply(this, arguments);
                                return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                            }
                            e.preventDefault();
                        }
                    };
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                    -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null != input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
                },
                off: function(input, event) {
                    if (input.inputmask && input.inputmask.events) {
                        var events;
                        event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, 
                        $.each(events, function(eventName, evArr) {
                            for (;evArr.length > 0; ) {
                                var ev = evArr.pop();
                                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null != input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                            }
                            delete input.inputmask.events[eventName];
                        });
                    }
                }
            }, EventHandlers = {
                keydownEvent: function(e) {
                    var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {
                        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
                        return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), 
                        el = null, isSupported;
                    }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), 
                    input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, 
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                    } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                    caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 
                    $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), 
                    pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                    pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), 
                    pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {
                        var caretPos = caret(input);
                        caret(input, caretPos.begin);
                    }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {
                        var caretPos = caret(input);
                        caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                    }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
                },
                keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                    var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                    if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                    setTimeout(function() {
                        $input.trigger("change");
                    }, 0)), !0;
                    if (k) {
                        46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                        var forwardPosition, pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input), c = String.fromCharCode(k);
                        getMaskSet().writeOutBuffer = !0;
                        var valResult = isValid(pos, c, strict);
                        if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), 
                        getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {
                            opts.onKeyValidation.call(input, k, valResult, opts);
                        }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), 
                            !0 !== checkval && setTimeout(function() {
                                !0 === isComplete(buffer) && $input.trigger("complete");
                            }, 0);
                        }
                        if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                        valResult;
                    }
                },
                pasteEvent: function(e) {
                    var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                    isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                    valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                    isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), 
                    window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                        if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                    }
                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                        pasteValue || (pasteValue = inputValue);
                    }
                    return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), 
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 
                    !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();
                },
                inputFallBackEvent: function(e) {
                    var input = this, inputValue = input.inputmask._valueGet();
                    if (getBuffer().join("") !== inputValue) {
                        var caretPos = caret(input);
                        if (!1 === function(input, inputValue, caretPos) {
                            if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && (inputValue = inputValue.split(""), 
                            inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), 
                            inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {
                                var keypress = new $.Event("keypress");
                                return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), 
                                !1;
                            }
                        }(input, inputValue, caretPos)) return !1;
                        if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), 
                        !1 === function(input, inputValue, caretPos) {
                            if (iemobile) {
                                var inputChar = inputValue.replace(getBuffer().join(""), "");
                                if (1 === inputChar.length) {
                                    var keypress = new $.Event("keypress");
                                    return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), 
                                    !1;
                                }
                            }
                        }(input, inputValue, caretPos)) return !1;
                        caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));
                        var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, endOffset = 0;
                        if (backPart === backBufferPart || frontPart === frontBufferPart) {
                            if (selection = {
                                begin: frontPart.length
                            }, frontPart[frontPart.length - 1] !== frontBufferPart[frontBufferPart.length - 1] && (selection.begin--, 
                            endOffset++), backPart.length > backBufferPart.length) selection.end = selection.begin; else {
                                var selectedPart = backBufferPart.replace(new RegExp(Inputmask.escapeRegex(backPart) + "$"), "");
                                selection.end = selection.begin + selectedPart.length + endOffset;
                            }
                            selection.begin !== selection.end || isMask(selection.begin) || (selection.end = caretPos.end);
                        }
                        if (selection.begin < selection.end) writeBuffer(input, getBuffer(), selection), 
                        frontPart.split("")[frontPart.length - 1] !== frontBufferPart.split("")[frontBufferPart.length - 1] ? (e.which = frontPart.charCodeAt(frontPart.length - 1), 
                        ignorable = !1, EventHandlers.keypressEvent.call(input, e)) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), 
                        e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)); else {
                            if (-1 === getLastValidPosition()) {
                                for (var bufferTemplate = getBufferTemplate().join(""); null === inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);
                                inputValue = inputValue.replace(bufferTemplate, "");
                            }
                            $.isFunction(opts.onBeforeMask) && (inputValue = opts.onBeforeMask.call(inputmask, inputValue, opts) || inputValue), 
                            checkVal(input, !0, !1, inputValue.split(""), e), function(input, frontPart, backPart) {
                                var targetPos = caret(input).begin, currentValue = input.inputmask._valueGet(), pos = currentValue.indexOf(frontPart), currentPos = targetPos;
                                if (0 === pos && targetPos !== frontPart.length) targetPos = frontPart.length; else {
                                    for (;null === currentValue.match(Inputmask.escapeRegex(backPart) + "$"); ) backPart = backPart.substr(1);
                                    var pos2 = currentValue.indexOf(backPart);
                                    -1 !== pos2 && "" !== backPart && targetPos > pos2 && pos2 > pos && (targetPos = pos2);
                                }
                                isMask(targetPos) || (targetPos = seekNext(targetPos)), currentPos !== targetPos && (caret(input, targetPos), 
                                android && setTimeout(function() {
                                    caret(input, targetPos);
                                }, 0));
                            }(input, frontPart, backPart), !0 === isComplete(getBuffer()) && $(input).trigger("complete");
                        }
                        e.preventDefault();
                    }
                },
                setValueEvent: function(e) {
                    this.inputmask.refreshValue = !1;
                    var input = this, value = input.inputmask._valueGet(!0);
                    $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                    value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), 
                    undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
                },
                focusEvent: function(e) {
                    var input = this, nptValue = input.inputmask._valueGet();
                    opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), 
                    !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), 
                    EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");
                },
                mouseleaveEvent: function(e) {
                    var input = this;
                    if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                        var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                        nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), 
                        writeBuffer(input, buffer));
                    }
                },
                clickEvent: function(e, tabbed) {
                    function doRadixFocus(clickPos) {
                        if ("" !== opts.radixPoint) {
                            var vps = getMaskSet().validPositions;
                            if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                                if (clickPos < seekNext(-1)) return !0;
                                var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                if (-1 !== radixPos) {
                                    for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                    return !0;
                                }
                            }
                        }
                        return !1;
                    }
                    var input = this;
                    setTimeout(function() {
                        if (document.activeElement === input) {
                            var selectedCaret = caret(input);
                            if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                            selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                              case "none":
                                break;

                              case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                    break;
                                }

                              default:
                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);
                                if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {
                                    var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {
                                        var newPos = seekNext(lastPosition);
                                        (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                                    }
                                    caret(input, lastPosition);
                                }
                            }
                        }
                    }, 0);
                },
                dblclickEvent: function(e) {
                    var input = this;
                    setTimeout(function() {
                        caret(input, 0, seekNext(getLastValidPosition()));
                    }, 0);
                },
                cutEvent: function(e) {
                    var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                    document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), 
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), 
                    input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
                },
                blurEvent: function(e) {
                    var $input = $(this), input = this;
                    if (input.inputmask) {
                        var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                        "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                        !1 === isComplete(buffer) && (setTimeout(function() {
                            $input.trigger("incomplete");
                        }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                        writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), 
                        $input.trigger("change"));
                    }
                },
                mouseenterEvent: function(e) {
                    var input = this;
                    mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
                },
                submitEvent: function(e) {
                    undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                    opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                    setTimeout(function() {
                        writeBuffer(el, getBuffer());
                    }, 0));
                },
                resetEvent: function(e) {
                    el.inputmask.refreshValue = !0, setTimeout(function() {
                        $el.trigger("setvalue");
                    }, 0);
                }
            };
            Inputmask.prototype.positionColorMask = function(input, template) {
                input.style.left = template.offsetLeft + "px";
            };
            var valueBuffer;
            if (actionObj !== undefined) switch (actionObj.action) {
              case "isComplete":
                return el = actionObj.el, isComplete(getBuffer());

              case "unmaskedvalue":
                return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, 
                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), 
                checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), 
                unmaskedvalue(el);

              case "mask":
                !function(elem) {
                    EventRuler.off(elem);
                    var isSupported = function(input, opts) {
                        var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
                        if (!isSupported) if ("INPUT" === input.tagName) {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                        } else isSupported = "partial";
                        return !1 !== isSupported ? function(npt) {
                            function getter() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                            }
                            function setter(value) {
                                valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                            }
                            var valueGet, valueSet;
                            if (!npt.inputmask.__valueGet) {
                                if (!0 !== opts.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
                                            return object.__proto__;
                                        } : function(object) {
                                            return object.constructor.prototype;
                                        });
                                        var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                        valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                        valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: !0
                                        })) : "INPUT" !== npt.tagName && (valueGet = function() {
                                            return this.textContent;
                                        }, valueSet = function(value) {
                                            this.textContent = value;
                                        }, Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                    valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                    npt.__defineSetter__("value", setter));
                                    npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                                }
                                npt.inputmask._valueGet = function(overruleRTL) {
                                    return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                                }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                    valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                                }, valueGet === undefined && (valueGet = function() {
                                    return this.value;
                                }, valueSet = function(value) {
                                    this.value = value;
                                }, function(type) {
                                    if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                                        var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                            return elem.value;
                                        }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                            return elem.value = value, elem;
                                        };
                                        $.valHooks[type] = {
                                            get: function(elem) {
                                                if (elem.inputmask) {
                                                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                    var result = valhookGet(elem);
                                                    return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                                }
                                                return valhookGet(elem);
                                            },
                                            set: function(elem, value) {
                                                var result, $elem = $(elem);
                                                return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), 
                                                result;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(npt.type), function(npt) {
                                    EventRuler.on(npt, "mouseenter", function(event) {
                                        var $input = $(this);
                                        this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");
                                    });
                                }(npt));
                            }
                        }(input) : input.inputmask = undefined, isSupported;
                    }(elem, opts);
                    if (!1 !== isSupported && (el = elem, $el = $(el), maxLength = el !== undefined ? el.maxLength : undefined, 
                    -1 === maxLength && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), 
                    android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), 
                    "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), 
                    el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                    EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), 
                    EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), 
                    EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), 
                    EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                    EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), 
                    EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                    EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                    android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                    EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), 
                    EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), 
                    EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                    EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                    undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);
                        "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                        var buffer = getBuffer().slice();
                        undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), 
                        opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                        writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
                    }
                }(el);
                break;

              case "format":
                return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), 
                checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {
                    value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                    metadata: maskScope.call(this, {
                        action: "getmetadata"
                    }, maskset, opts)
                } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

              case "isValid":
                actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
                for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;
                return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

              case "getemptymask":
                return getBufferTemplate().join("");

              case "remove":
                if (el && el.inputmask) {
                    $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), 
                    EventRuler.off(el);
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                        get: el.inputmask.__valueGet,
                        set: el.inputmask.__valueSet,
                        configurable: !0
                    }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                    el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;
                }
                return el;

              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                    var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                    return $.each(maskset.metadata, function(ndx, mtdt) {
                        if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                    }), maskTarget;
                }
                return maskset.metadata;
            }
        }
        var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;
        return Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function(pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: undefined,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: [ "text", "tel", "password" ],
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                isComplete: null,
                canClearPosition: $.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: undefined,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                "9": {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    cardinality: 1
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(elems) {
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    if (!0 === opts.importDataAttributes) {
                        var option, dataoptions, optionData, p, importOption = function(option, optionData) {
                            null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                            userOptions[option] = optionData);
                        }, attrOptions = npt.getAttribute(dataAttribute);
                        if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'), 
                        dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                        importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                        for (option in opts) {
                            if (dataoptions) {
                                optionData = undefined;
                                for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                            importOption(option, optionData);
                        }
                    }
                    return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), 
                    ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), 
                    opts.isRTL = !0), opts;
                }
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    maskset !== undefined && (el.inputmask !== undefined && el.inputmask.remove(), el.inputmask = new Inputmask(undefined, undefined, !0), 
                    el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                    el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                        action: "mask"
                    }));
                }), elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function(options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), 
                this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
            },
            remove: function() {
                return maskScope.call(this, {
                    action: "remove"
                });
            },
            getemptymask: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "getemptymask"
                });
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask;
            },
            isComplete: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "isComplete"
                });
            },
            getmetadata: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "getmetadata"
                });
            },
            isValid: function(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
            },
            format: function(value, metadata) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
            },
            analyseMask: function(mask, regexMask, opts) {
                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                    this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }
                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) 0 === element.indexOf("[") || escaped || "." === element ? mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element, opts.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: undefined,
                        nativeDef: element
                    }) : $.each(element.split(""), function(ndx, lmnt) {
                        prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || lmnt,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                            nativeDef: lmnt
                        });
                    }), escaped = !1; else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                                mtoken.matches.splice(position++, 0, {
                                    fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function() {
                                        this.test = validator;
                                    }() : new RegExp("."),
                                    cardinality: cardinality || 1,
                                    optionality: mtoken.isOptional,
                                    newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element
                                }), prevMatch = mtoken.matches[position - 1];
                            }
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                            nativeDef: element
                        }), escaped = !1;
                    }
                }
                function verifyGroupMarker(maskToken) {
                    maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                        regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), 
                        verifyGroupMarker(token);
                    });
                }
                function defaultCase() {
                    if (openenings.length > 0) {
                        if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                        currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], 
                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                        }
                    } else insertTestDefinition(currentToken, m);
                }
                function reverseTokens(maskToken) {
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                        }
                        maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {
                            return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), 
                            st;
                        }(maskToken.matches[match]);
                    }
                    return maskToken;
                }
                var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];
                for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                    if (m = match[0], regexMask && !0 !== escaped) switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;

                      case "+":
                      case "*":
                        m = "{" + m + "}";
                    }
                    if (escaped) defaultCase(); else switch (m.charAt(0)) {
                      case opts.escapeChar:
                        escaped = !0, regexMask && defaultCase();
                        break;

                      case opts.optionalmarker.end:
                      case opts.groupmarker.end:
                        if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {
                            if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), 
                            currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                                alternator.matches[mndx].alternatorGroup = !1;
                                openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], 
                                currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                            }
                        } else currentToken.matches.push(openingToken); else defaultCase();
                        break;

                      case opts.optionalmarker.start:
                        openenings.push(new MaskToken(!1, !0));
                        break;

                      case opts.groupmarker.start:
                        openenings.push(new MaskToken(!0));
                        break;

                      case opts.quantifiermarker.start:
                        var quantifier = new MaskToken(!1, !1, !0);
                        m = m.replace(/[{}]/g, "");
                        var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                            min: mq0,
                            max: mq1
                        }, openenings.length > 0) {
                            var matches = openenings[openenings.length - 1].matches;
                            match = matches.pop(), match.isGroup || (groupToken = new MaskToken(!0), groupToken.matches.push(match), 
                            match = groupToken), matches.push(match), matches.push(quantifier);
                        } else match = currentToken.matches.pop(), match.isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), 
                        groupToken = new MaskToken(!0), groupToken.matches.push(match), match = groupToken), 
                        currentToken.matches.push(match), currentToken.matches.push(quantifier);
                        break;

                      case opts.alternatormarker:
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                            lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();
                        } else lastMatch = currentToken.matches.pop();
                        if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                        lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                        openenings.push(alternator), lastMatch.openGroup) {
                            lastMatch.openGroup = !1;
                            var alternatorGroup = new MaskToken(!0);
                            alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                        }
                        break;

                      default:
                        defaultCase();
                    }
                }
                for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
                return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
                (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
            }
        }, Inputmask.extendDefaults = function(options) {
            $.extend(!0, Inputmask.prototype.defaults, options);
        }, Inputmask.extendDefinitions = function(definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition);
        }, Inputmask.extendAliases = function(alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias);
        }, Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        }, Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        }, Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        }, Inputmask.remove = function(elems) {
            $.each(elems, function(ndx, el) {
                el.inputmask && el.inputmask.remove();
            });
        }, Inputmask.escapeRegex = function(str) {
            var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        }, Inputmask.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, Inputmask;
    });
}, function(module, exports) {
    module.exports = jQuery;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        function isLeapYear(year) {
            return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
        }
        return Inputmask.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function(chrs, minyear, maxyear) {
                    if (isNaN(chrs)) return !1;
                    var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                    return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
                },
                determinebaseyear: function(minyear, maxyear, hint) {
                    var currentyear = new Date().getFullYear();
                    if (minyear > currentyear) return minyear;
                    if (maxyear < currentyear) {
                        for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;
                        var maxxYear = maxYearPrefix + maxYearPostfix;
                        return minyear > maxxYear ? minyear : maxxYear;
                    }
                    if (minyear <= currentyear && currentyear <= maxyear) {
                        for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;
                        var currentYearAndHint = currentYearPrefix + hint;
                        return currentYearAndHint < minyear ? minyear : currentYearAndHint;
                    }
                    return currentyear;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                },
                getFrontValue: function(mask, buffer, opts) {
                    for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
                        var definition = opts.definitions[mask.charAt(i)];
                        definition ? (start += length, length = definition.cardinality) : length++;
                    }
                    return buffer.join("").substr(start, length);
                },
                postValidation: function(buffer, currentResult, opts) {
                    var dayMonthValue, year, bufferStr = buffer.join("");
                    return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), 
                    dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
                },
                definitions: {
                    "1": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.val1.test(chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                            {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                pos: pos,
                                c: chrs.charAt(0)
                            });
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var pchrs = chrs;
                                isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
                                var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
                                if (!strict && !isValid) {
                                    if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, 
                                    maskset.buffer[++pos] = "0", {
                                        pos: pos,
                                        c: "0"
                                    };
                                    if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", 
                                    pos++, {
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 1
                        } ]
                    },
                    "2": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                            {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                pos: pos,
                                c: chrs.charAt(0)
                            });
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
                                var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                                -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                                var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                                return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    y: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        },
                        cardinality: 4,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                    if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                    {
                                        pos: pos
                                    };
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), 
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                    maskset.buffer[pos++] = yearPrefix.charAt(1), {
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 1
                        }, {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                    if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), 
                                    {
                                        pos: pos
                                    };
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), 
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), 
                                    maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), 
                                    {
                                        refreshFromBuffer: {
                                            start: pos - 3,
                                            end: pos
                                        },
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 2
                        }, {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            },
                            cardinality: 3
                        } ]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", 
                            maskset.buffer[pos] = "0", {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                c: "0"
                            };
                            var isValid = opts.regex.hrs.test(chrs);
                            if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", 
                            maskset.buffer[pos] = chrs.charAt(0), pos++, {
                                refreshFromBuffer: {
                                    start: pos - 2,
                                    end: pos
                                },
                                pos: pos,
                                c: opts.timeseparator
                            };
                            if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                                var tmp = parseInt(chrs, 10);
                                return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", 
                                maskset.buffer[pos + 6] = "m"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(), 
                                maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), 
                                maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: pos - 1,
                                        end: pos + 6
                                    },
                                    c: maskset.buffer[pos]
                                };
                            }
                            return isValid;
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.hrspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.mspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    t: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.regex.ampm.test(chrs + "m");
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                placeholder: "hh:mm:ss",
                alias: "datetime",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                placeholder: "hh:mm",
                alias: "datetime",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            },
            shamsi: {
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {
                    minyear: 1300,
                    maxyear: 1499
                },
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function(e, buffer, caretPos, opts) {}
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        return Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }), Inputmask.extendAliases({
            url: {
                definitions: {
                    i: {
                        validator: ".",
                        cardinality: 1
                    }
                },
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                            chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 
                            new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function(pastedValue, opts) {
                    return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                        cardinality: 1,
                        casing: "lower"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]",
                        cardinality: 1,
                        casing: "lower"
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        cardinality: 1,
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask, undefined) {
        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt;
        }
        return Inputmask.extendAliases({
            numeric: {
                mask: function(opts) {
                    if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), 
                    opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                    " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, 
                    opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), 
                    isFinite(opts.integerDigits))) {
                        var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;
                        opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), 
                        opts.integerDigits < 1 && (opts.integerDigits = "*");
                    }
                    opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), 
                    "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), 
                    opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", 
                    !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                    opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                    var mask = "[+]";
                    if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", 
                    opts.digits !== undefined) {
                        opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                        var dq = opts.digits.toString().split(",");
                        isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                    }
                    return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(buffer, pos, c, isSelection, opts) {
                    if ("-" === c || c == opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, 
                    "" === buffer.join("") || {
                        caret: pos,
                        dopost: !0
                    });
                    if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                        var radixPos = $.inArray(opts.radixPoint, buffer);
                        if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {
                            caret: radixPos + 1
                        };
                    }
                    return !0;
                },
                postValidation: function(buffer, currentResult, opts) {
                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                    if (currentResult.pos == undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
                    var caretPos = currentResult.caret != undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();
                    opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
                    var charAtPos = maskedValue[caretPos];
                    if (charAtPos === opts.groupSeparator && (caretPos += 1, charAtPos = maskedValue[caretPos]), 
                    caretPos == maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                    charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", 
                    opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), 
                    prefix = prefix.join(""), suffix = suffix.join("");
                    var processValue = maskedValue.join("").replace(prefix, "");
                    if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                    isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), 
                    processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" == charAtPos && (processValue = processValue.replace(/^\?/g, "")), 
                    processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), 
                    "" !== processValue) {
                        if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);
                            -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                            for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                        }
                        if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {
                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                            processValue = Inputmask(function(buffer, opts) {
                                var postMask = "";
                                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                                    var radixSplit = buffer.join("").split(opts.radixPoint);
                                    radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                                }
                                return postMask;
                            }(processValue, opts), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), 
                            processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
                        }
                    }
                    if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), 
                    processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, 
                    processValue += opts.negationSymbol.back), processValue = processValue.split(""), 
                    charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) caretPos = $.inArray("?", processValue), 
                    caretPos > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                        var newCaretPos = $.inArray(charAtPos, processValue);
                        -1 !== newCaretPos && (caretPos = newCaretPos);
                    }
                    opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
                    var rslt = {
                        caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                        buffer: processValue,
                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                    };
                    return rslt.refreshFromBuffer ? rslt : currentResult;
                },
                onBeforeWrite: function(e, buffer, caretPos, opts) {
                    if (e) switch (e.type) {
                      case "keydown":
                        return opts.postValidation(buffer, {
                            caret: caretPos,
                            dopost: !0
                        }, opts);

                      case "blur":
                      case "checkval":
                        var unmasked;
                        if (function(opts) {
                            opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                            "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                            null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                            opts.parseMinMaxOptions = "done");
                        }(opts), null !== opts.min || null !== opts.max) {
                            if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                                unmaskAsNumber: !0
                            })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, 
                            opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                                caret: caretPos,
                                dopost: !0,
                                placeholder: "0"
                            }, opts);
                            if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, 
                            opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                                caret: caretPos,
                                dopost: !0,
                                placeholder: "0"
                            }, opts);
                        }
                        return opts.postValidation(buffer, {
                            caret: caretPos,
                            placeholder: "0",
                            event: "blur"
                        }, opts);

                      case "_checkval":
                        return {
                            caret: caretPos
                        };
                    }
                },
                regex: {
                    integerPart: function(opts, emptyCheck) {
                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function(opts) {
                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function(chrs, maskset, pos, strict, opts, isSelection) {
                            var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                            if (!0 === isValid) {
                                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                                    var processValue = maskset.buffer.join("");
                                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                                    var pvRadixSplit = processValue.split(opts.radixPoint);
                                    pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), 
                                    "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), 
                                    processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                    var bufferTemplate = maskset._buffer.join("");
                                    for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);
                                    processValue = processValue.replace(bufferTemplate, ""), processValue = processValue.split(""), 
                                    isValid = processValue[pos] === undefined ? {
                                        pos: pos,
                                        remove: pos
                                    } : {
                                        pos: pos
                                    };
                                }
                            } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", 
                            isValid = {
                                pos: pos + 1
                            });
                            return isValid;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);
                            return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                                caret: pos + 1
                            }), isValid;
                        },
                        cardinality: 1,
                        placeholder: function(opts) {
                            return opts.radixPoint;
                        }
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 
                    processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                    Number(processValue)) : processValue;
                },
                isComplete: function(buffer, opts) {
                    var maskedValue = buffer.join("");
                    if (buffer.slice().join("") !== maskedValue) return !1;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 
                    isFinite(processValue);
                },
                onBeforeMask: function(initialValue, opts) {
                    if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), 
                    "" !== opts.radixPoint && isFinite(initialValue)) {
                        var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                        2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                    }
                    var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);
                    if (dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, ""), 
                    initialValue = initialValue.replace(",", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, ""), 
                    initialValue = initialValue.replace(".", opts.radixPoint)) : initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue = initialValue.replace(/,/g, "") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), 
                    "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
                        var valueParts = initialValue.split(opts.radixPoint), decPart = valueParts[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(opts.digits) < decPart.toString().length) {
                            var digitsFactor = Math.pow(10, parseInt(opts.digits));
                            initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), 
                            initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor, 
                            initialValue = initialValue.toString().replace(".", opts.radixPoint);
                        }
                    }
                    return initialValue;
                },
                canClearPosition: function(maskset, position, lvp, strict, opts) {
                    var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;
                    return !canClear || "+" != vp.match.nativeDef && "-" != vp.match.nativeDef || (opts.isNegative = !1), 
                    canClear;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                      case Inputmask.keyCode.UP:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                        break;

                      case Inputmask.keyCode.DOWN:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        function maskSort(a, b) {
            var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];
            return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
        }
        var analyseMaskBase = Inputmask.prototype.analyseMask;
        return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {
            function reduceVariations(masks, previousVariation, previousmaskGroup) {
                previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 
                "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
                for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i], 
                variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [], 
                maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
                for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
            }
            function rebuild(maskGroup) {
                var mask = "", submasks = [];
                for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
                return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, 
                mask;
            }
            var maskGroups = {};
            return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (mask = mask.substr(1, mask.length - 2), 
            reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), 
            mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
        }, Inputmask.extendAliases({
            abstractphone: {
                groupmarker: {
                    start: "<",
                    end: ">"
                },
                countrycode: "",
                phoneCodes: [],
                mask: function(opts) {
                    return opts.definitions = {
                        "#": Inputmask.prototype.definitions[9]
                    }, opts.phoneCodes.sort(maskSort);
                },
                keepStatic: !0,
                onBeforeMask: function(value, opts) {
                    var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                    processedValue;
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue.replace(/[()#-]/g, "");
                },
                inputmode: "tel"
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        return void 0 === $.fn.inputmask && ($.fn.inputmask = function(fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
              case "unmaskedvalue":
                return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

              case "remove":
                return this.each(function() {
                    this.inputmask && this.inputmask.remove();
                });

              case "getemptymask":
                return input && input.inputmask ? input.inputmask.getemptymask() : "";

              case "hasMaskedValue":
                return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

              case "isComplete":
                return !input || !input.inputmask || input.inputmask.isComplete();

              case "getmetadata":
                return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

              case "setvalue":
                $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
                break;

              case "option":
                if ("string" != typeof options) return this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(options);
                });
                if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                break;

              default:
                return options.alias = fn, nptmask = new Inputmask(options), this.each(function() {
                    nptmask.mask(this);
                });
            } else {
                if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), 
                void 0 === fn.mask && void 0 === fn.alias ? this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);
                    nptmask.mask(this);
                }) : this.each(function() {
                    nptmask.mask(this);
                });
                if (void 0 === fn) return this.each(function() {
                    nptmask = new Inputmask(options), nptmask.mask(this);
                });
            }
        }), $.fn.inputmask;
    });
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(12);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
    __webpack_require__(14)(content, {});
    content.locals && (module.exports = content.locals);
}, function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    __webpack_require__(8), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), 
    __webpack_require__(6);
    var _inputmask = __webpack_require__(1), _inputmask2 = _interopRequireDefault(_inputmask), _inputmask3 = __webpack_require__(0), _inputmask4 = _interopRequireDefault(_inputmask3), _jquery = __webpack_require__(2), _jquery2 = _interopRequireDefault(_jquery);
    _inputmask4.default === _jquery2.default && __webpack_require__(7), window.Inputmask = _inputmask2.default;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return document;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return window;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(13)(void 0), exports.push([ module.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", "" ]);
}, function(module, exports) {
    function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || "", cssMapping = item[3];
        if (!cssMapping) return content;
        if (useSourceMap && "function" == typeof btoa) {
            var sourceMapping = toComment(cssMapping), sourceURLs = cssMapping.sources.map(function(source) {
                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
            });
            return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
        }
        return [ content ].join("\n");
    }
    function toComment(sourceMap) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }
    module.exports = function(useSourceMap) {
        var list = [];
        return list.toString = function() {
            return this.map(function(item) {
                var content = cssWithMappingToString(item, useSourceMap);
                return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
            }).join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, function(module, exports, __webpack_require__) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var styleTarget = getElement(options.insertInto);
        if (!styleTarget) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : styleTarget.appendChild(styleElement) : styleTarget.insertBefore(styleElement, styleTarget.firstChild), 
        styleElementsInsertedAtTop.push(styleElement); else {
            if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            styleTarget.appendChild(styleElement);
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        return options.attrs.type = "text/css", attachTagAttrs(styleElement, options.attrs), 
        insertStyleElement(options, styleElement), styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", attachTagAttrs(linkElement, options.attrs), 
        insertStyleElement(options, linkElement), linkElement;
    }
    function attachTagAttrs(element, attrs) {
        Object.keys(attrs).forEach(function(key) {
            element.setAttribute(key, attrs[key]);
        });
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
        update = updateLink.bind(null, styleElement, options), remove = function() {
            removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
        }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            removeStyleElement(styleElement);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media;
        if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, options, obj) {
        var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
        (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    var stylesInDom = {}, isOldIE = function(fn) {
        var memo;
        return function() {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), getElement = function(fn) {
        var memo = {};
        return function(selector) {
            return void 0 === memo[selector] && (memo[selector] = fn.call(this, selector)), 
            memo[selector];
        };
    }(function(styleTarget) {
        return document.querySelector(styleTarget);
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [], fixUrls = __webpack_require__(15);
    module.exports = function(list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        options = options || {}, options.attrs = "object" == typeof options.attrs ? options.attrs : {}, 
        void 0 === options.singleton && (options.singleton = isOldIE()), void 0 === options.insertInto && (options.insertInto = "head"), 
        void 0 === options.insertAt && (options.insertAt = "bottom");
        var styles = listToStyles(list);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                domStyle.refs--, mayRemove.push(domStyle);
            }
            if (newList) {
                addStylesToDom(listToStyles(newList), options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, function(module, exports) {
    module.exports = function(css) {
        var location = "undefined" != typeof window && window.location;
        if (!location) throw new Error("fixUrls requires window.location");
        if (!css || "string" != typeof css) return css;
        var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
        return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
            var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                return $1;
            }).replace(/^'(.*)'$/, function(o, $1) {
                return $1;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
            var newUrl;
            return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(newUrl) + ")";
        });
    };
} ]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL2pxdWVyeS5pbnB1dG1hc2suYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4qIGpxdWVyeS5pbnB1dG1hc2suYnVuZGxlLmpzXHJcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxyXG4qIFZlcnNpb246IDQuMC4xLTI1XHJcbiovXHJcblxyXG4hZnVuY3Rpb24obW9kdWxlcykge1xyXG4gICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xyXG4gICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XHJcbiAgICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xyXG4gICAgICAgICAgICBpOiBtb2R1bGVJZCxcclxuICAgICAgICAgICAgbDogITEsXHJcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyksIFxyXG4gICAgICAgIG1vZHVsZS5sID0gITAsIG1vZHVsZS5leHBvcnRzO1xyXG4gICAgfVxyXG4gICAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcclxuICAgIF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXMsIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXMsIF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XHJcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgICAgICAgICBnZXQ6IGdldHRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIFwiYVwiLCBnZXR0ZXIpLCBnZXR0ZXI7XHJcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcclxuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCIsIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XHJcbn0oWyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XHJcbiAgICAhZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbIF9fd2VicGFja19yZXF1aXJlX18oMikgXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gZmFjdG9yeSwgXHJcbiAgICAgICAgdm9pZCAwICE9PSAoX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA/IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXykgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pO1xyXG4gICAgfShmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgcmV0dXJuICQ7XHJcbiAgICB9KTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fLCBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgICAhZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbIF9fd2VicGFja19yZXF1aXJlX18oMCksIF9fd2VicGFja19yZXF1aXJlX18oMTEpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSBdLCBcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSBmYWN0b3J5LCB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIElucHV0bWFzaykpIHJldHVybiBuZXcgSW5wdXRtYXNrKGFsaWFzLCBvcHRpb25zLCBpbnRlcm5hbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWQsIHRoaXMuZXZlbnRzID0ge30sIHRoaXMubWFza3NldCA9IHVuZGVmaW5lZCwgdGhpcy5yZWZyZXNoVmFsdWUgPSAhMSwgXHJcbiAgICAgICAgICAgICEwICE9PSBpbnRlcm5hbCAmJiAoJC5pc1BsYWluT2JqZWN0KGFsaWFzKSA/IG9wdGlvbnMgPSBhbGlhcyA6IChvcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgXHJcbiAgICAgICAgICAgIG9wdGlvbnMuYWxpYXMgPSBhbGlhcyksIHRoaXMub3B0cyA9ICQuZXh0ZW5kKCEwLCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyksIHRoaXMubm9NYXNrc0NhY2hlID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmluaXRpb25zICE9PSB1bmRlZmluZWQsIFxyXG4gICAgICAgICAgICB0aGlzLnVzZXJPcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgdGhpcy5pc1JUTCA9IHRoaXMub3B0cy5udW1lcmljSW5wdXQsIHJlc29sdmVBbGlhcyh0aGlzLm9wdHMuYWxpYXMsIG9wdGlvbnMsIHRoaXMub3B0cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlQWxpYXMoYWxpYXNTdHIsIG9wdGlvbnMsIG9wdHMpIHtcclxuICAgICAgICAgICAgdmFyIGFsaWFzRGVmaW5pdGlvbiA9IElucHV0bWFzay5wcm90b3R5cGUuYWxpYXNlc1thbGlhc1N0cl07XHJcbiAgICAgICAgICAgIHJldHVybiBhbGlhc0RlZmluaXRpb24gPyAoYWxpYXNEZWZpbml0aW9uLmFsaWFzICYmIHJlc29sdmVBbGlhcyhhbGlhc0RlZmluaXRpb24uYWxpYXMsIHVuZGVmaW5lZCwgb3B0cyksIFxyXG4gICAgICAgICAgICAkLmV4dGVuZCghMCwgb3B0cywgYWxpYXNEZWZpbml0aW9uKSwgJC5leHRlbmQoITAsIG9wdHMsIG9wdGlvbnMpLCAhMCkgOiAobnVsbCA9PT0gb3B0cy5tYXNrICYmIChvcHRzLm1hc2sgPSBhbGlhc1N0ciksIFxyXG4gICAgICAgICAgICAhMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFza1NldChvcHRzLCBub2NhY2hlKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFzayhtYXNrLCBtZXRhZGF0YSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4TWFzayA9ICExO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG1hc2sgJiYgXCJcIiAhPT0gbWFzayB8fCAocmVnZXhNYXNrID0gbnVsbCAhPT0gb3B0cy5yZWdleCwgcmVnZXhNYXNrID8gKG1hc2sgPSBvcHRzLnJlZ2V4LCBcclxuICAgICAgICAgICAgICAgIG1hc2sgPSBtYXNrLnJlcGxhY2UoL14oXFxeKSguKikoXFwkKSQvLCBcIiQyXCIpKSA6IChyZWdleE1hc2sgPSAhMCwgbWFzayA9IFwiLipcIikpLCAxID09PSBtYXNrLmxlbmd0aCAmJiAhMSA9PT0gb3B0cy5ncmVlZHkgJiYgMCAhPT0gb3B0cy5yZXBlYXQgJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICBvcHRzLnJlcGVhdCA+IDAgfHwgXCIqXCIgPT09IG9wdHMucmVwZWF0IHx8IFwiK1wiID09PSBvcHRzLnJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBlYXRTdGFydCA9IFwiKlwiID09PSBvcHRzLnJlcGVhdCA/IDAgOiBcIitcIiA9PT0gb3B0cy5yZXBlYXQgPyAxIDogb3B0cy5yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBtYXNrICsgb3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLnF1YW50aWZpZXJtYXJrZXIuc3RhcnQgKyByZXBlYXRTdGFydCArIFwiLFwiICsgb3B0cy5yZXBlYXQgKyBvcHRzLnF1YW50aWZpZXJtYXJrZXIuZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tzZXREZWZpbml0aW9uLCBtYXNrZGVmS2V5ID0gcmVnZXhNYXNrID8gXCJyZWdleF9cIiArIG9wdHMucmVnZXggOiBvcHRzLm51bWVyaWNJbnB1dCA/IG1hc2suc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBtYXNrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSA9PT0gdW5kZWZpbmVkIHx8ICEwID09PSBub2NhY2hlID8gKG1hc2tzZXREZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IG1hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuOiBJbnB1dG1hc2sucHJvdG90eXBlLmFuYWx5c2VNYXNrKG1hc2ssIHJlZ2V4TWFzaywgb3B0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIF9idWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0czoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tMZW5ndGg6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfSwgITAgIT09IG5vY2FjaGUgJiYgKElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSA9IG1hc2tzZXREZWZpbml0aW9uLCBcclxuICAgICAgICAgICAgICAgIG1hc2tzZXREZWZpbml0aW9uID0gJC5leHRlbmQoITAsIHt9LCBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0pKSkgOiBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKCEwLCB7fSwgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldKSwgXHJcbiAgICAgICAgICAgICAgICBtYXNrc2V0RGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMubWFzaykgJiYgKG9wdHMubWFzayA9IG9wdHMubWFzayhvcHRzKSksICQuaXNBcnJheShvcHRzLm1hc2spKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5tYXNrLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmtlZXBTdGF0aWMgPSBudWxsID09PSBvcHRzLmtlZXBTdGF0aWMgfHwgb3B0cy5rZWVwU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXNrID0gb3B0cy5ncm91cG1hcmtlci5zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG9wdHMubnVtZXJpY0lucHV0ID8gb3B0cy5tYXNrLnJldmVyc2UoKSA6IG9wdHMubWFzaywgZnVuY3Rpb24obmR4LCBtc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWFzay5sZW5ndGggPiAxICYmIChhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2subWFzayA9PT0gdW5kZWZpbmVkIHx8ICQuaXNGdW5jdGlvbihtc2subWFzaykgPyBhbHRNYXNrICs9IG1zayA6IGFsdE1hc2sgKz0gbXNrLm1hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksIGFsdE1hc2sgKz0gb3B0cy5ncm91cG1hcmtlci5lbmQsIGdlbmVyYXRlTWFzayhhbHRNYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0cy5tYXNrID0gb3B0cy5tYXNrLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRzLm1hc2sgJiYgb3B0cy5tYXNrLm1hc2sgIT09IHVuZGVmaW5lZCAmJiAhJC5pc0Z1bmN0aW9uKG9wdHMubWFzay5tYXNrKSA/IGdlbmVyYXRlTWFzayhvcHRzLm1hc2subWFzaywgb3B0cy5tYXNrLCBvcHRzKSA6IGdlbmVyYXRlTWFzayhvcHRzLm1hc2ssIG9wdHMubWFzaywgb3B0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1hc2tTY29wZShhY3Rpb25PYmosIG1hc2tzZXQsIG9wdHMpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1RlbXBsYXRlKGJhc2VPbklucHV0LCBtaW5pbWFsUG9zLCBpbmNsdWRlTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgbWluaW1hbFBvcyA9IG1pbmltYWxQb3MgfHwgMDtcclxuICAgICAgICAgICAgICAgIHZhciBuZHhJbnRsenIsIHRlc3QsIHRlc3RQb3MsIG1hc2tUZW1wbGF0ZSA9IFtdLCBwb3MgPSAwLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBiYXNlT25JbnB1dCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA/ICh0ZXN0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10sIFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgbWFza1RlbXBsYXRlLnB1c2goITAgPT09IGluY2x1ZGVNb2RlID8gdGVzdFBvcy5pbnB1dCA6ICExID09PSBpbmNsdWRlTW9kZSA/IHRlc3QubmF0aXZlRGVmIDogZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0KSkpIDogKHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUocG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IHBvcyA8IGx2cCB8fCBcIm51bWJlclwiID09IHR5cGVvZiBvcHRzLmppdE1hc2tpbmcgJiYgaXNGaW5pdGUob3B0cy5qaXRNYXNraW5nKSAmJiBvcHRzLmppdE1hc2tpbmcgPiBwb3MpICYmIG1hc2tUZW1wbGF0ZS5wdXNoKCExID09PSBpbmNsdWRlTW9kZSA/IHRlc3QubmF0aXZlRGVmIDogZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0KSkpLCBcclxuICAgICAgICAgICAgICAgICAgICBwb3MrKztcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKChtYXhMZW5ndGggPT09IHVuZGVmaW5lZCB8fCBwb3MgPCBtYXhMZW5ndGgpICYmIChudWxsICE9PSB0ZXN0LmZuIHx8IFwiXCIgIT09IHRlc3QuZGVmKSB8fCBtaW5pbWFsUG9zID4gcG9zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiID09PSBtYXNrVGVtcGxhdGVbbWFza1RlbXBsYXRlLmxlbmd0aCAtIDFdICYmIG1hc2tUZW1wbGF0ZS5wb3AoKSwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPSBwb3MgKyAxLCBcclxuICAgICAgICAgICAgICAgIG1hc2tUZW1wbGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRNYXNrU2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRNYXNrU2V0KHNvZnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXNrc2V0ID0gZ2V0TWFza1NldCgpO1xyXG4gICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXIgPSB1bmRlZmluZWQsICEwICE9PSBzb2Z0ICYmIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zID0ge30sIG1hc2tzZXQucCA9IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExhc3RWYWxpZFBvc2l0aW9uKGNsb3Nlc3RUbywgc3RyaWN0LCB2YWxpZFBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IC0xLCBhZnRlciA9IC0xLCB2YWxpZHMgPSB2YWxpZFBvc2l0aW9ucyB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjbG9zZXN0VG8gPT09IHVuZGVmaW5lZCAmJiAoY2xvc2VzdFRvID0gLTEpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcG9zTmR4IGluIHZhbGlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwc05keCA9IHBhcnNlSW50KHBvc05keCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRzW3BzTmR4XSAmJiAoc3RyaWN0IHx8ICEwICE9PSB2YWxpZHNbcHNOZHhdLmdlbmVyYXRlZElucHV0KSAmJiAocHNOZHggPD0gY2xvc2VzdFRvICYmIChiZWZvcmUgPSBwc05keCksIFxyXG4gICAgICAgICAgICAgICAgICAgIHBzTmR4ID49IGNsb3Nlc3RUbyAmJiAoYWZ0ZXIgPSBwc05keCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBiZWZvcmUgJiYgY2xvc2VzdFRvIC0gYmVmb3JlID4gMSB8fCBhZnRlciA8IGNsb3Nlc3RUbyA/IGJlZm9yZSA6IGFmdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0cmlwVmFsaWRQb3NpdGlvbnMoc3RhcnQsIGVuZCwgbm9jaGVjaywgc3RyaWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSwgc3RhcnRQb3MgPSBzdGFydCwgcG9zaXRpb25zQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyksIG5lZWRzVmFsaWRhdGlvbiA9ICExO1xyXG4gICAgICAgICAgICAgICAgZm9yIChnZXRNYXNrU2V0KCkucCA9IHN0YXJ0LCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydFBvczsgaS0tKSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0gIT09IHVuZGVmaW5lZCAmJiAoITAgIT09IG5vY2hlY2sgJiYgKCFnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0ubWF0Y2gub3B0aW9uYWxpdHkgJiYgZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc01hdGNoID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc01hdGNoICE9PSB1bmRlZmluZWQgJiYgbnVsbCA9PT0gcG9zTWF0Y2gubWF0Y2guZm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSwgbmV4dE1hdGNoID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldk1hdGNoICE9PSB1bmRlZmluZWQgJiYgbmV4dE1hdGNoICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgIH0oaSkgfHwgITEgPT09IG9wdHMuY2FuQ2xlYXJQb3NpdGlvbihnZXRNYXNrU2V0KCksIGksIGdldExhc3RWYWxpZFBvc2l0aW9uKCksIHN0cmljdCwgb3B0cykpIHx8IGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChyZXNldE1hc2tTZXQoITApLCBpID0gc3RhcnRQb3MgKyAxOyBpIDw9IGdldExhc3RWYWxpZFBvc2l0aW9uKCk7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoO2dldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tzdGFydFBvc10gIT09IHVuZGVmaW5lZDsgKSBzdGFydFBvcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgc3RhcnRQb3MgJiYgKGkgPSBzdGFydFBvcyArIDEpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0gPT09IHVuZGVmaW5lZCAmJiBpc01hc2soaSkpIGkrKzsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZ2V0VGVzdFRlbXBsYXRlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhMSA9PT0gbmVlZHNWYWxpZGF0aW9uICYmIHBvc2l0aW9uc0Nsb25lW3N0YXJ0UG9zXSAmJiBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10ubWF0Y2guZGVmID09PSB0Lm1hdGNoLmRlZiA/IChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc3RhcnRQb3NdID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3N0YXJ0UG9zXS5pbnB1dCA9IHQuaW5wdXQsIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKyspIDogcG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24oc3RhcnRQb3MsIHQubWF0Y2guZGVmKSA/ICExICE9PSBpc1ZhbGlkKHN0YXJ0UG9zLCB0LmlucHV0IHx8IGdldFBsYWNlaG9sZGVyKGkpLCAhMCkgJiYgKGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKyssIG5lZWRzVmFsaWRhdGlvbiA9ICEwKSA6IGlzTWFzayhpKSB8fCAoaSsrLCBzdGFydFBvcy0tKSwgc3RhcnRQb3MrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cywgZ3Vlc3NOZXh0QmVzdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdFBvcywgdGVzdFBvc2l0aW9ucyA9IHRlc3RzLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSB8fCBnZXRUZXN0cygwKVswXSwgbHZUZXN0QWx0QXJyID0gbHZUZXN0LmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyBsdlRlc3QubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpIDogW10sIG5keCA9IDA7IG5keCA8IHRlc3RQb3NpdGlvbnMubGVuZ3RoICYmICh0ZXN0UG9zID0gdGVzdFBvc2l0aW9uc1tuZHhdLCBcclxuICAgICAgICAgICAgICAgICEodGVzdFBvcy5tYXRjaCAmJiAob3B0cy5ncmVlZHkgJiYgITAgIT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8ICghMSA9PT0gdGVzdFBvcy5tYXRjaC5vcHRpb25hbGl0eSB8fCAhMSA9PT0gdGVzdFBvcy5tYXRjaC5uZXdCbG9ja01hcmtlcikgJiYgITAgIT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyKSAmJiAobHZUZXN0LmFsdGVybmF0aW9uID09PSB1bmRlZmluZWQgfHwgbHZUZXN0LmFsdGVybmF0aW9uICE9PSB0ZXN0UG9zLmFsdGVybmF0aW9uIHx8IHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgJiYgY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCBsdlRlc3RBbHRBcnIpKSkgfHwgITAgPT09IGd1ZXNzTmV4dEJlc3QgJiYgKG51bGwgIT09IHRlc3RQb3MubWF0Y2guZm4gfHwgL1swLTlhLWJBLVpdLy50ZXN0KHRlc3RQb3MubWF0Y2guZGVmKSkpOyBuZHgrKykgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RQb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCB0c3RQcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdIHx8IGRldGVybWluZVRlc3RUZW1wbGF0ZShnZXRUZXN0cyhwb3MsIG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogbmR4SW50bHpyLCB0c3RQcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRlc3QocG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPyBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA6IGdldFRlc3RzKHBvcylbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24ocG9zLCBkZWYpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkID0gITEsIHRlc3RzID0gZ2V0VGVzdHMocG9zKSwgdG5keCA9IDA7IHRuZHggPCB0ZXN0cy5sZW5ndGg7IHRuZHgrKykgaWYgKHRlc3RzW3RuZHhdLm1hdGNoICYmIHRlc3RzW3RuZHhdLm1hdGNoLmRlZiA9PT0gZGVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUZXN0cyhwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUZXN0RnJvbVRva2VuKG1hc2tUb2tlbiwgbmR4SW5pdGlhbGl6ZXIsIGxvb3BOZHgsIHF1YW50aWZpZXJSZWN1cnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWF0Y2gobWF0Y2gsIGxvb3BOZHgsIHF1YW50aWZpZXJSZWN1cnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSAwID09PSAkLmluQXJyYXkobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXAubWF0Y2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3RNYXRjaCB8fCAkLmVhY2godG9rZW5Hcm91cC5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBtYXRjaC5pc1F1YW50aWZpZXIgJiYgKGZpcnN0TWF0Y2ggPSBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXAubWF0Y2hlc1tuZHggLSAxXSkpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZmlyc3RNYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgsIHRhcmdldEFsdGVybmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVzdE1hdGNoLCBpbmRleFBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gJiYgdGFyZ2V0QWx0ZXJuYXRpb24gJiYgZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pIGZvciAodmFyIHZwQWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0ubG9jYXRvciwgdHBBbHRlcm5hdGlvbiA9IGdldE1hc2tTZXQoKS50ZXN0c1twb3NdWzBdLmxvY2F0b3IsIGkgPSAwOyBpIDwgdGFyZ2V0QWx0ZXJuYXRpb247IGkrKykgaWYgKHZwQWx0ZXJuYXRpb25baV0gIT09IHRwQWx0ZXJuYXRpb25baV0pIHJldHVybiB2cEFsdGVybmF0aW9uLnNsaWNlKHRhcmdldEFsdGVybmF0aW9uICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdIHx8IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdKSAmJiAkLmVhY2goZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gfHwgWyBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSBdLCBmdW5jdGlvbihuZHgsIGxtbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRpb24gPSB0YXJnZXRBbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0QWx0ZXJuYXRpb24gOiBsbW50LmFsdGVybmF0aW9uLCBuZHhQb3MgPSBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgPyBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRlcm5hdGVOZHgpIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGluZGV4UG9zID09PSB1bmRlZmluZWQgfHwgbmR4UG9zIDwgaW5kZXhQb3MpICYmIC0xICE9PSBuZHhQb3MgJiYgKGJlc3RNYXRjaCA9IGxtbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4UG9zID0gbmR4UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBiZXN0TWF0Y2ggPyBiZXN0TWF0Y2gubG9jYXRvci5zbGljZSgodGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHRhcmdldEFsdGVybmF0aW9uIDogYmVzdE1hdGNoLmFsdGVybmF0aW9uKSArIDEpIDogdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHJlc29sdmVOZHhJbml0aWFsaXplcihwb3MsIGFsdGVybmF0ZU5keCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPiAxZTQpIHRocm93IFwiSW5wdXRtYXNrOiBUaGVyZSBpcyBwcm9iYWJseSBhbiBlcnJvciBpbiB5b3VyIG1hc2sgZGVmaW5pdGlvbiBvciBpbiB0aGUgY29kZS4gQ3JlYXRlIGFuIGlzc3VlIG9uIGdpdGh1YiB3aXRoIGFuIGV4YW1wbGUgb2YgdGhlIG1hc2sgeW91IGFyZSB1c2luZy4gXCIgKyBnZXRNYXNrU2V0KCkubWFzaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPT09IHBvcyAmJiBtYXRjaC5tYXRjaGVzID09PSB1bmRlZmluZWQpIHJldHVybiBtYXRjaGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRvcjogbG9vcE5keC5yZXZlcnNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLm1hdGNoZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmlzR3JvdXAgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbJC5pbkFycmF5KG1hdGNoLCBtYXNrVG9rZW4ubWF0Y2hlcykgKyAxXSwgbG9vcE5keCkpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNPcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbFRva2VuID0gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWF0Y2gsIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhdGVzdE1hdGNoID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLm1hdGNoLCAhaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCBvcHRpb25hbFRva2VuKSkgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRTdG9wID0gITAsIHRlc3RQb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFsdE1hdGNoZXMsIGFsdGVybmF0ZVRva2VuID0gbWF0Y2gsIG1hbHRlcm5hdGVNYXRjaGVzID0gW10sIGN1cnJlbnRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCBsb29wTmR4Q250ID0gbG9vcE5keC5sZW5ndGgsIGFsdEluZGV4ID0gbmR4SW5pdGlhbGl6ZXIubGVuZ3RoID4gMCA/IG5keEluaXRpYWxpemVyLnNoaWZ0KCkgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT09IGFsdEluZGV4IHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbW5keCwgY3VycmVudFBvcyA9IHRlc3RQb3MsIG5keEluaXRpYWxpemVyQ2xvbmUgPSBuZHhJbml0aWFsaXplci5zbGljZSgpLCBhbHRJbmRleEFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYWx0SW5kZXgpIGFsdEluZGV4QXJyID0gYWx0SW5kZXguc3BsaXQoXCIsXCIpOyBlbHNlIGZvciAoYW1uZHggPSAwOyBhbW5keCA8IGFsdGVybmF0ZVRva2VuLm1hdGNoZXMubGVuZ3RoOyBhbW5keCsrKSBhbHRJbmRleEFyci5wdXNoKGFtbmR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4ID0gMDsgbmR4IDwgYWx0SW5kZXhBcnIubGVuZ3RoOyBuZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtbmR4ID0gcGFyc2VJbnQoYWx0SW5kZXhBcnJbbmR4XSksIG1hdGNoZXMgPSBbXSwgbmR4SW5pdGlhbGl6ZXIgPSByZXNvbHZlTmR4SW5pdGlhbGl6ZXIodGVzdFBvcywgYW1uZHgsIGxvb3BOZHhDbnQpIHx8IG5keEluaXRpYWxpemVyQ2xvbmUuc2xpY2UoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gKG1hdGNoID0gaGFuZGxlTWF0Y2goYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1thbW5keF0gfHwgbWFza1Rva2VuLm1hdGNoZXNbYW1uZHhdLCBbIGFtbmR4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSkgfHwgbWF0Y2gpICYmIG1hdGNoICE9PSB1bmRlZmluZWQgJiYgYWx0SW5kZXhBcnJbYWx0SW5kZXhBcnIubGVuZ3RoIC0gMV0gPCBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudG5keCA9ICQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlcy5sZW5ndGggPiBudG5keCAmJiAobWF0Y2ggPSBoYW5kbGVNYXRjaChtYXNrVG9rZW4ubWF0Y2hlc1tudG5keF0sIFsgbnRuZHggXS5jb25jYXQobG9vcE5keC5zbGljZSgxLCBsb29wTmR4Lmxlbmd0aCkpLCBxdWFudGlmaWVyUmVjdXJzZSkpICYmIChhbHRJbmRleEFyci5wdXNoKG50bmR4LnRvU3RyaW5nKCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gobWF0Y2hlcywgZnVuY3Rpb24obmR4LCBsbW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQuYWx0ZXJuYXRpb24gPSBsb29wTmR4Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKCksIHRlc3RQb3MgPSBjdXJyZW50UG9zLCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuZHgxID0gMDsgbmR4MSA8IG1hbHRNYXRjaGVzLmxlbmd0aDsgbmR4MSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdE1hdGNoID0gbWFsdE1hdGNoZXNbbmR4MV0sIGRyb3BNYXRjaCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24gfHwgbG9vcE5keENudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuZHgyID0gMDsgbmR4MiA8IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aDsgbmR4MisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaDIgPSBtYWx0ZXJuYXRlTWF0Y2hlc1tuZHgyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGFsdEluZGV4IHx8IC0xICE9PSAkLmluQXJyYXkoYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKSwgYWx0SW5kZXhBcnIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb24oc291cmNlLCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlLm1hdGNoLm5hdGl2ZURlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZiB8fCBzb3VyY2UubWF0Y2guZGVmID09PSB0YXJnZXQubWF0Y2gubmF0aXZlRGVmIHx8IHNvdXJjZS5tYXRjaC5uYXRpdmVEZWYgPT09IHRhcmdldC5tYXRjaC5kZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGFsdE1hdGNoLCBhbHRNYXRjaDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoID0gITAsIGFsdE1hdGNoLmFsdGVybmF0aW9uID09PSBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dKSAmJiAoYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXSA9IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0gKyBcIixcIiArIGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gPSBhbHRNYXRjaC5hbHRlcm5hdGlvbiksIGFsdE1hdGNoLm1hdGNoLm5hdGl2ZURlZiA9PT0gYWx0TWF0Y2gyLm1hdGNoLmRlZiAmJiAoYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWx0ZXJuYXRlTWF0Y2hlcy5zcGxpY2UobWFsdGVybmF0ZU1hdGNoZXMuaW5kZXhPZihhbHRNYXRjaDIpLCAxLCBhbHRNYXRjaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsdE1hdGNoLm1hdGNoLmRlZiA9PT0gYWx0TWF0Y2gyLm1hdGNoLmRlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT09IHNvdXJjZS5tYXRjaC5mbiAmJiBudWxsICE9PSB0YXJnZXQubWF0Y2guZm4gJiYgdGFyZ2V0Lm1hdGNoLmZuLnRlc3Qoc291cmNlLm1hdGNoLmRlZiwgZ2V0TWFza1NldCgpLCBwb3MsICExLCBvcHRzLCAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGFsdE1hdGNoLCBhbHRNYXRjaDIpIHx8IGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIT09IHNvdXJjZS5tYXRjaC5mbiAmJiBudWxsICE9PSB0YXJnZXQubWF0Y2guZm4gJiYgdGFyZ2V0Lm1hdGNoLmZuLnRlc3Qoc291cmNlLm1hdGNoLmRlZi5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlwiKSwgZ2V0TWFza1NldCgpLCBwb3MsICExLCBvcHRzLCAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGFsdE1hdGNoLCBhbHRNYXRjaDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2guYWx0ZXJuYXRpb24gPT0gYWx0TWF0Y2gyLmFsdGVybmF0aW9uICYmIC0xID09PSBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXS50b1N0cmluZygpLmluZGV4T2YoYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiXCIpWzBdKSAmJiAoYWx0TWF0Y2gubmEgPSBhbHRNYXRjaC5uYSB8fCBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXS50b1N0cmluZygpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gYWx0TWF0Y2gubmEuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiXCIpWzBdKSAmJiAoYWx0TWF0Y2gubmEgPSBhbHRNYXRjaC5uYSArIFwiLFwiICsgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWF0Y2ggPSAhMCwgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0gKyBcIixcIiArIGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWx0ZXJuYXRlTWF0Y2hlcy5zcGxpY2UobWFsdGVybmF0ZU1hdGNoZXMuaW5kZXhPZihhbHRNYXRjaDIpLCAwLCBhbHRNYXRjaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCB8fCBtYWx0ZXJuYXRlTWF0Y2hlcy5wdXNoKGFsdE1hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCAmJiAobWFsdGVybmF0ZU1hdGNoZXMgPSAkLm1hcChtYWx0ZXJuYXRlTWF0Y2hlcywgZnVuY3Rpb24obG1udCwgbmR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaW5pdGUobmR4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRlcm5hdGlvbiA9IGxtbnQuYWx0ZXJuYXRpb24sIGFsdExvY0FyciA9IGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHVuZGVmaW5lZCwgbG1udC5hbHRlcm5hdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhbG5keCA9IDA7IGFsbmR4IDwgYWx0TG9jQXJyLmxlbmd0aDsgYWxuZHgrKykgLTEgIT09ICQuaW5BcnJheShhbHRMb2NBcnJbYWxuZHhdLCBhbHRJbmRleEFycikgJiYgKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZCA/IChsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dICs9IFwiLFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dICs9IGFsdExvY0FyclthbG5keF0pIDogbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHBhcnNlSW50KGFsdExvY0FyclthbG5keF0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmFsdGVybmF0aW9uID0gYWx0ZXJuYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQpIHJldHVybiBsbW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG1hdGNoZXMgPSBjdXJyZW50TWF0Y2hlcy5jb25jYXQobWFsdGVybmF0ZU1hdGNoZXMpLCB0ZXN0UG9zID0gcG9zLCBpbnNlcnRTdG9wID0gbWF0Y2hlcy5sZW5ndGggPiAwLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGggPiAwLCBuZHhJbml0aWFsaXplciA9IG5keEluaXRpYWxpemVyQ2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbWF0Y2ggPSBoYW5kbGVNYXRjaChhbHRlcm5hdGVUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSB8fCBtYXNrVG9rZW4ubWF0Y2hlc1thbHRJbmRleF0sIFsgYWx0SW5kZXggXS5jb25jYXQobG9vcE5keCksIHF1YW50aWZpZXJSZWN1cnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNRdWFudGlmaWVyICYmIHF1YW50aWZpZXJSZWN1cnNlICE9PSBtYXNrVG9rZW4ubWF0Y2hlc1skLmluQXJyYXkobWF0Y2gsIG1hc2tUb2tlbi5tYXRjaGVzKSAtIDFdKSBmb3IgKHZhciBxdCA9IG1hdGNoLCBxbmR4ID0gbmR4SW5pdGlhbGl6ZXIubGVuZ3RoID4gMCA/IG5keEluaXRpYWxpemVyLnNoaWZ0KCkgOiAwOyBxbmR4IDwgKGlzTmFOKHF0LnF1YW50aWZpZXIubWF4KSA/IHFuZHggKyAxIDogcXQucXVhbnRpZmllci5tYXgpICYmIHRlc3RQb3MgPD0gcG9zOyBxbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5Hcm91cCA9IG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShxdCwgbWFza1Rva2VuLm1hdGNoZXMpIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoID0gaGFuZGxlTWF0Y2godG9rZW5Hcm91cCwgWyBxbmR4IF0uY29uY2F0KGxvb3BOZHgpLCB0b2tlbkdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF0ZXN0TWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ubWF0Y2gsIGxhdGVzdE1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciA9IHFuZHggPiBxdC5xdWFudGlmaWVyLm1pbiAtIDEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocW5keCA+IHF0LnF1YW50aWZpZXIubWluIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFN0b3AgPSAhMCwgdGVzdFBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaCA9IHJlc29sdmVUZXN0RnJvbVRva2VuKG1hdGNoLCBuZHhJbml0aWFsaXplciwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0ZXN0UG9zKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRuZHggPSBuZHhJbml0aWFsaXplci5sZW5ndGggPiAwID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IDA7IHRuZHggPCBtYXNrVG9rZW4ubWF0Y2hlcy5sZW5ndGg7IHRuZHgrKykgaWYgKCEwICE9PSBtYXNrVG9rZW4ubWF0Y2hlc1t0bmR4XS5pc1F1YW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbdG5keF0sIFsgdG5keCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgdGVzdFBvcyA9PT0gcG9zKSByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID4gcG9zKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaWx0ZXJUZXN0cyh0ZXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmtlZXBTdGF0aWMgJiYgcG9zID4gMCAmJiB0ZXN0cy5sZW5ndGggPiAxICsgKFwiXCIgPT09IHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKSAmJiAhMCAhPT0gdGVzdHNbMF0ubWF0Y2gub3B0aW9uYWxpdHkgJiYgITAgIT09IHRlc3RzWzBdLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiBudWxsID09PSB0ZXN0c1swXS5tYXRjaC5mbiAmJiAhL1swLTlhLWJBLVpdLy50ZXN0KHRlc3RzWzBdLm1hdGNoLmRlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWyBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0uYWx0ZXJuYXRpb24gPT09IHRlc3RzWzBdLmFsdGVybmF0aW9uKSByZXR1cm4gWyBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMpIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0pIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGxhdGVzdE1hdGNoLCBtYXNrVG9rZW5zID0gZ2V0TWFza1NldCgpLm1hc2tUb2tlbiwgdGVzdFBvcyA9IG5keEludGx6ciA/IHRzdFBzIDogMCwgbmR4SW5pdGlhbGl6ZXIgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IFsgMCBdLCBtYXRjaGVzID0gW10sIGluc2VydFN0b3AgPSAhMSwgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW50bHpyID8gbmR4SW50bHpyLmpvaW4oXCJcIikgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5keEludGx6ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRlc3QsIHByZXZpb3VzUG9zID0gcG9zIC0gMTsgKHRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcHJldmlvdXNQb3NdIHx8IGdldE1hc2tTZXQoKS50ZXN0c1twcmV2aW91c1Bvc10pID09PSB1bmRlZmluZWQgJiYgcHJldmlvdXNQb3MgPiAtMTsgKSBwcmV2aW91c1Bvcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNQb3MgPiAtMSAmJiAobmR4SW5pdGlhbGl6ZXIgPSBmdW5jdGlvbih0ZXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0b3IgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmlzQXJyYXkodGVzdHMpIHx8ICh0ZXN0cyA9IFsgdGVzdHMgXSksIHRlc3RzLmxlbmd0aCA+IDAgJiYgKHRlc3RzWzBdLmFsdGVybmF0aW9uID09PSB1bmRlZmluZWQgPyAobG9jYXRvciA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cy5zbGljZSgpKS5sb2NhdG9yLnNsaWNlKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PT0gbG9jYXRvci5sZW5ndGggJiYgKGxvY2F0b3IgPSB0ZXN0c1swXS5sb2NhdG9yLnNsaWNlKCkpKSA6ICQuZWFjaCh0ZXN0cywgZnVuY3Rpb24obmR4LCB0c3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gdHN0LmRlZikgaWYgKDAgPT09IGxvY2F0b3IubGVuZ3RoKSBsb2NhdG9yID0gdHN0LmxvY2F0b3Iuc2xpY2UoKTsgZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0b3IubGVuZ3RoOyBpKyspIHRzdC5sb2NhdG9yW2ldICYmIC0xID09PSBsb2NhdG9yW2ldLnRvU3RyaW5nKCkuaW5kZXhPZih0c3QubG9jYXRvcltpXSkgJiYgKGxvY2F0b3JbaV0gKz0gXCIsXCIgKyB0c3QubG9jYXRvcltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGxvY2F0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGVzdCksIGNhY2hlRGVwZW5kZW5jeSA9IG5keEluaXRpYWxpemVyLmpvaW4oXCJcIiksIHRlc3RQb3MgPSBwcmV2aW91c1Bvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSAmJiBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5jZCA9PT0gY2FjaGVEZXBlbmRlbmN5KSByZXR1cm4gZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG10bmR4ID0gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKTsgbXRuZHggPCBtYXNrVG9rZW5zLmxlbmd0aDsgbXRuZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZVRlc3RGcm9tVG9rZW4obWFza1Rva2Vuc1ttdG5keF0sIG5keEluaXRpYWxpemVyLCBbIG10bmR4IF0pICYmIHRlc3RQb3MgPT09IHBvcyB8fCB0ZXN0UG9zID4gcG9zKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAgPT09IG1hdGNoZXMubGVuZ3RoIHx8IGluc2VydFN0b3ApICYmIG1hdGNoZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRvcjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxyXG4gICAgICAgICAgICAgICAgfSksIG5keEludGx6ciAhPT0gdW5kZWZpbmVkICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdID8gZmlsdGVyVGVzdHMoJC5leHRlbmQoITAsIFtdLCBtYXRjaGVzKSkgOiAoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gPSAkLmV4dGVuZCghMCwgW10sIG1hdGNoZXMpLCBcclxuICAgICAgICAgICAgICAgIGZpbHRlclRlc3RzKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QnVmZmVyVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLl9idWZmZXIgPT09IHVuZGVmaW5lZCAmJiAoZ2V0TWFza1NldCgpLl9idWZmZXIgPSBnZXRNYXNrVGVtcGxhdGUoITEsIDEpLCBcclxuICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5idWZmZXIgPT09IHVuZGVmaW5lZCAmJiAoZ2V0TWFza1NldCgpLmJ1ZmZlciA9IGdldE1hc2tTZXQoKS5fYnVmZmVyLnNsaWNlKCkpKSwgXHJcbiAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkuX2J1ZmZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXIobm9DYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS5idWZmZXIgIT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gbm9DYWNoZSB8fCAoZ2V0TWFza1NldCgpLmJ1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZSghMCwgZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgITApKSwgXHJcbiAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkuYnVmZmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hGcm9tQnVmZmVyKHN0YXJ0LCBlbmQsIGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIHA7XHJcbiAgICAgICAgICAgICAgICBpZiAoITAgPT09IHN0YXJ0KSByZXNldE1hc2tTZXQoKSwgc3RhcnQgPSAwLCBlbmQgPSBidWZmZXIubGVuZ3RoOyBlbHNlIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHAgPSBzdGFydCwgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIGlmIChyZXNldE1hc2tTZXQoITApLCBidWZmZXJbaV0gIT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxSZXN1bHQgPSBpc1ZhbGlkKHAsIGJ1ZmZlcltpXSwgITAsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAhMSAhPT0gdmFsUmVzdWx0ICYmIChyZXNldE1hc2tTZXQoITApLCBwID0gdmFsUmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgPyB2YWxSZXN1bHQuY2FyZXQgOiB2YWxSZXN1bHQucG9zICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FzaW5nKGVsZW0sIHRlc3QsIHBvcykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcHRzLmNhc2luZyB8fCB0ZXN0LmNhc2luZykge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIFwidXBwZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NCZWZvcmUgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IDAgPT09IHBvcyB8fCBwb3NCZWZvcmUgJiYgcG9zQmVmb3JlLmlucHV0ID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKElucHV0bWFzay5rZXlDb2RlLlNQQUNFKSA/IGVsZW0udG9VcHBlckNhc2UoKSA6IGVsZW0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLmNhc2luZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zKSwgZWxlbSA9IG9wdHMuY2FzaW5nLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQWx0ZXJuYXRpb25NYXRjaChhbHRBcnIxLCBhbHRBcnIyLCBuYSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFOZHgsIGFsdEFyckMgPSBvcHRzLmdyZWVkeSA/IGFsdEFycjIgOiBhbHRBcnIyLnNsaWNlKDAsIDEpLCBpc01hdGNoID0gITEsIG5hQXJyID0gbmEgIT09IHVuZGVmaW5lZCA/IG5hLnNwbGl0KFwiLFwiKSA6IFtdLCBpID0gMDsgaSA8IG5hQXJyLmxlbmd0aDsgaSsrKSAtMSAhPT0gKG5hTmR4ID0gYWx0QXJyMS5pbmRleE9mKG5hQXJyW2ldKSkgJiYgYWx0QXJyMS5zcGxpY2UobmFOZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWxuZHggPSAwOyBhbG5keCA8IGFsdEFycjEubGVuZ3RoOyBhbG5keCsrKSBpZiAoLTEgIT09ICQuaW5BcnJheShhbHRBcnIxW2FsbmR4XSwgYWx0QXJyQykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNNYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkKHBvcywgYywgc3RyaWN0LCBmcm9tU2V0VmFsaWQsIGZyb21BbHRlcm5hdGUsIHZhbGlkYXRlT25seSkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNTZWxlY3Rpb24ocG9zT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IGlzUlRMID8gcG9zT2JqLmJlZ2luIC0gcG9zT2JqLmVuZCA+IDEgfHwgcG9zT2JqLmJlZ2luIC0gcG9zT2JqLmVuZCA9PSAxIDogcG9zT2JqLmVuZCAtIHBvc09iai5iZWdpbiA+IDEgfHwgcG9zT2JqLmVuZCAtIHBvc09iai5iZWdpbiA9PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgMCA9PT0gcG9zT2JqLmJlZ2luICYmIHBvc09iai5lbmQgPT09IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID8gXCJmdWxsXCIgOiBzZWxlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfaXNWYWxpZChwb3NpdGlvbiwgYywgc3RyaWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJzbHQgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKGdldFRlc3RzKHBvc2l0aW9uKSwgZnVuY3Rpb24obmR4LCB0c3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdCA9IHRzdC5tYXRjaCwgbG9vcGVuZCA9IGMgPyAxIDogMCwgY2hycyA9IFwiXCIsIGkgPSB0ZXN0LmNhcmRpbmFsaXR5OyBpID4gbG9vcGVuZDsgaS0tKSBjaHJzICs9IGdldEJ1ZmZlckVsZW1lbnQocG9zaXRpb24gLSAoaSAtIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgJiYgKGNocnMgKz0gYyksIGdldEJ1ZmZlcighMCksICExICE9PSAocnNsdCA9IG51bGwgIT0gdGVzdC5mbiA/IHRlc3QuZm4udGVzdChjaHJzLCBnZXRNYXNrU2V0KCksIHBvc2l0aW9uLCBzdHJpY3QsIG9wdHMsIGlzU2VsZWN0aW9uKHBvcykpIDogKGMgPT09IHRlc3QuZGVmIHx8IGMgPT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcikgJiYgXCJcIiAhPT0gdGVzdC5kZWYgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogZ2V0UGxhY2Vob2xkZXIocG9zaXRpb24sIHRlc3QsICEwKSB8fCB0ZXN0LmRlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gcnNsdC5jICE9PSB1bmRlZmluZWQgPyByc2x0LmMgOiBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0gPT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiBudWxsID09PSB0ZXN0LmZuID8gZ2V0UGxhY2Vob2xkZXIocG9zaXRpb24sIHRlc3QsICEwKSB8fCB0ZXN0LmRlZiA6IGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGVkUG9zID0gcG9zaXRpb24sIHBvc3NpYmxlTW9kaWZpZWRCdWZmZXIgPSBnZXRCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyc2x0LnJlbW92ZSAhPT0gdW5kZWZpbmVkICYmICgkLmlzQXJyYXkocnNsdC5yZW1vdmUpIHx8IChyc2x0LnJlbW92ZSA9IFsgcnNsdC5yZW1vdmUgXSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHJzbHQucmVtb3ZlLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmdW5jdGlvbihuZHgsIGxtbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcFZhbGlkUG9zaXRpb25zKGxtbnQsIGxtbnQgKyAxLCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIHJzbHQuaW5zZXJ0ICE9PSB1bmRlZmluZWQgJiYgKCQuaXNBcnJheShyc2x0Lmluc2VydCkgfHwgKHJzbHQuaW5zZXJ0ID0gWyByc2x0Lmluc2VydCBdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocnNsdC5pbnNlcnQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQobG1udC5wb3MsIGxtbnQuYywgITAsIGZyb21TZXRWYWxpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIHJzbHQucmVmcmVzaEZyb21CdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJzbHQucmVmcmVzaEZyb21CdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hGcm9tQnVmZmVyKCEwID09PSByZWZyZXNoID8gcmVmcmVzaCA6IHJlZnJlc2guc3RhcnQsIHJlZnJlc2guZW5kLCBwb3NzaWJsZU1vZGlmaWVkQnVmZmVyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnNsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiByc2x0LmMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHJzbHQucG9zID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcyAhPT0gdW5kZWZpbmVkID8gcnNsdC5wb3MgOiBwb3NpdGlvbikgIT09IHBvc2l0aW9uKSByZXR1cm4gcnNsdCA9ICQuZXh0ZW5kKHJzbHQsIGlzVmFsaWQodmFsaWRhdGVkUG9zLCBlbGVtLCAhMCwgZnJvbVNldFZhbGlkKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghMCAhPT0gcnNsdCAmJiByc2x0LnBvcyAhPT0gdW5kZWZpbmVkICYmIHJzbHQucG9zICE9PSBwb3NpdGlvbiAmJiAodmFsaWRhdGVkUG9zID0gcnNsdC5wb3MsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIocG9zaXRpb24sIHZhbGlkYXRlZFBvcywgZ2V0QnVmZmVyKCkuc2xpY2UoKSksIHZhbGlkYXRlZFBvcyAhPT0gcG9zaXRpb24pKSByZXR1cm4gcnNsdCA9ICQuZXh0ZW5kKHJzbHQsIGlzVmFsaWQodmFsaWRhdGVkUG9zLCBlbGVtLCAhMCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICghMCA9PT0gcnNsdCB8fCByc2x0LnBvcyAhPT0gdW5kZWZpbmVkIHx8IHJzbHQuYyAhPT0gdW5kZWZpbmVkKSAmJiAobmR4ID4gMCAmJiByZXNldE1hc2tTZXQoITApLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkUG9zaXRpb24odmFsaWRhdGVkUG9zLCAkLmV4dGVuZCh7fSwgdHN0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNhc2luZyhlbGVtLCB0ZXN0LCB2YWxpZGF0ZWRQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnJvbVNldFZhbGlkLCBpc1NlbGVjdGlvbihwb3MpKSB8fCAocnNsdCA9ICExKSwgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksIHJzbHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRWYWxpZFBvc2l0aW9uKHBvcywgdmFsaWRUZXN0LCBmcm9tU2V0VmFsaWQsIGlzU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0aW9uIHx8IG9wdHMuaW5zZXJ0TW9kZSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSAhPT0gdW5kZWZpbmVkICYmIGZyb21TZXRWYWxpZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpLCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKCEwLCB7fSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zKSwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHBvczsgaSA8PSBsdnA7IGkrKykgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHZhbGlkVGVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqLCB2YWxpZCA9ICEwLCB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMsIG5lZWRzVmFsaWRhdGlvbiA9ICExLCBpbml0aWFsTGVuZ3RoID0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGogPSBwb3M7IGkgPD0gbHZwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcG9zaXRpb25zQ2xvbmVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAhPT0gdW5kZWZpbmVkKSBmb3IgKHZhciBwb3NNYXRjaCA9IGo7IHBvc01hdGNoIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgKG51bGwgPT09IHQubWF0Y2guZm4gJiYgdnBzW2ldICYmICghMCA9PT0gdnBzW2ldLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCAhMCA9PT0gdnBzW2ldLm1hdGNoLm9wdGlvbmFsaXR5KSB8fCBudWxsICE9IHQubWF0Y2guZm4pOyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zTWF0Y2grKywgITEgPT09IG5lZWRzVmFsaWRhdGlvbiAmJiBwb3NpdGlvbnNDbG9uZVtwb3NNYXRjaF0gJiYgcG9zaXRpb25zQ2xvbmVbcG9zTWF0Y2hdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5kZWYpIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NNYXRjaF0gPSAkLmV4dGVuZCghMCwge30sIHBvc2l0aW9uc0Nsb25lW3Bvc01hdGNoXSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NNYXRjaF0uaW5wdXQgPSB0LmlucHV0LCBmaWxsTWlzc2luZ05vbk1hc2socG9zTWF0Y2gpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gcG9zTWF0Y2gsIHZhbGlkID0gITA7IGVsc2UgaWYgKHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvc01hdGNoLCB0Lm1hdGNoLmRlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlzVmFsaWQocG9zTWF0Y2gsIHQuaW5wdXQsICEwLCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gITEgIT09IHJlc3VsdCwgaiA9IHJlc3VsdC5jYXJldCB8fCByZXN1bHQuaW5zZXJ0ID8gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSA6IHBvc01hdGNoLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZHNWYWxpZGF0aW9uID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghKHZhbGlkID0gITAgPT09IHQuZ2VuZXJhdGVkSW5wdXQpICYmIHBvc01hdGNoID49IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoIC0gMSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoIDwgaW5pdGlhbExlbmd0aCAmJiAoZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPSBpbml0aWFsTGVuZ3RoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKSwgITE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID0gJC5leHRlbmQoITAsIHt9LCB2YWxpZFRlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNldE1hc2tTZXQoITApLCAhMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpbGxNaXNzaW5nTm9uTWFzayhtYXNrUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcG5keCA9IG1hc2tQb3MgLSAxOyBwbmR4ID4gLTEgJiYgIWdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twbmR4XTsgcG5keC0tKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RUZW1wbGF0ZSwgdGVzdHNGcm9tUG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAocG5keCsrOyBwbmR4IDwgbWFza1BvczsgcG5keCsrKSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG5keF0gPT09IHVuZGVmaW5lZCAmJiAoITEgPT09IG9wdHMuaml0TWFza2luZyB8fCBvcHRzLmppdE1hc2tpbmcgPiBwbmR4KSAmJiAodGVzdHNGcm9tUG9zID0gZ2V0VGVzdHMocG5keCwgZ2V0VGVzdFRlbXBsYXRlKHBuZHggLSAxKS5sb2NhdG9yLCBwbmR4IC0gMSkuc2xpY2UoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNGcm9tUG9zW3Rlc3RzRnJvbVBvcy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgJiYgdGVzdHNGcm9tUG9zLnBvcCgpLCAodGVzdFRlbXBsYXRlID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzRnJvbVBvcykpICYmICh0ZXN0VGVtcGxhdGUubWF0Y2guZGVmID09PSBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sIHx8ICFpc01hc2socG5keCwgITApIHx8ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIGdldEJ1ZmZlcigpKSA8IHBuZHggJiYgdGVzdFRlbXBsYXRlLm1hdGNoLmZuICYmIHRlc3RUZW1wbGF0ZS5tYXRjaC5mbi50ZXN0KGdldFBsYWNlaG9sZGVyKHBuZHgpLCBnZXRNYXNrU2V0KCksIHBuZHgsICExLCBvcHRzKSkgJiYgITEgIT09IChyZXN1bHQgPSBfaXNWYWxpZChwbmR4LCBnZXRQbGFjZWhvbGRlcihwbmR4LCB0ZXN0VGVtcGxhdGUubWF0Y2gsICEwKSB8fCAobnVsbCA9PSB0ZXN0VGVtcGxhdGUubWF0Y2guZm4gPyB0ZXN0VGVtcGxhdGUubWF0Y2guZGVmIDogXCJcIiAhPT0gZ2V0UGxhY2Vob2xkZXIocG5keCkgPyBnZXRQbGFjZWhvbGRlcihwbmR4KSA6IGdldEJ1ZmZlcigpW3BuZHhdKSwgITApKSAmJiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Jlc3VsdC5wb3MgfHwgcG5keF0uZ2VuZXJhdGVkSW5wdXQgPSAhMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyaWN0ID0gITAgPT09IHN0cmljdDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXNrUG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgcG9zLmJlZ2luICE9PSB1bmRlZmluZWQgJiYgKG1hc2tQb3MgPSBpc1JUTCAmJiAhaXNTZWxlY3Rpb24ocG9zKSA/IHBvcy5lbmQgOiBwb3MuYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICEwLCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKCEwLCB7fSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5wcmVWYWxpZGF0aW9uKSAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tU2V0VmFsaWQgJiYgITAgIT09IHZhbGlkYXRlT25seSAmJiAocmVzdWx0ID0gb3B0cy5wcmVWYWxpZGF0aW9uKGdldEJ1ZmZlcigpLCBtYXNrUG9zLCBjLCBpc1NlbGVjdGlvbihwb3MpLCBvcHRzKSksIFxyXG4gICAgICAgICAgICAgICAgITAgPT09IHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsTWlzc2luZ05vbk1hc2sobWFza1BvcyksIGlzU2VsZWN0aW9uKHBvcykgJiYgKGhhbmRsZVJlbW92ZSh1bmRlZmluZWQsIElucHV0bWFzay5rZXlDb2RlLkRFTEVURSwgcG9zLCAhMCwgITApLCBcclxuICAgICAgICAgICAgICAgICAgICBtYXNrUG9zID0gZ2V0TWFza1NldCgpLnApLCBtYXNrUG9zIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IG1hc2tQb3MgPCBtYXhMZW5ndGgpICYmIChyZXN1bHQgPSBfaXNWYWxpZChtYXNrUG9zLCBjLCBzdHJpY3QpLCBcclxuICAgICAgICAgICAgICAgICAgICAoIXN0cmljdCB8fCAhMCA9PT0gZnJvbVNldFZhbGlkKSAmJiAhMSA9PT0gcmVzdWx0ICYmICEwICE9PSB2YWxpZGF0ZU9ubHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UG9zVmFsaWQgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbWFza1Bvc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudFBvc1ZhbGlkIHx8IG51bGwgIT09IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5mbiB8fCBjdXJyZW50UG9zVmFsaWQubWF0Y2guZGVmICE9PSBjICYmIGMgIT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvcHRzLmluc2VydE1vZGUgfHwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3NlZWtOZXh0KG1hc2tQb3MpXSA9PT0gdW5kZWZpbmVkKSAmJiAhaXNNYXNrKG1hc2tQb3MsICEwKSkgZm9yICh2YXIgblBvcyA9IG1hc2tQb3MgKyAxLCBzblBvcyA9IHNlZWtOZXh0KG1hc2tQb3MpOyBuUG9zIDw9IHNuUG9zOyBuUG9zKyspIGlmICghMSAhPT0gKHJlc3VsdCA9IF9pc1ZhbGlkKG5Qb3MsIGMsIHN0cmljdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKG9yaWdpbmFsUG9zLCBuZXdQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZwID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW25ld1Bvc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2cCkgZm9yICh2YXIgdGFyZ2V0TG9jYXRvciA9IHZwLmxvY2F0b3IsIHRsbCA9IHRhcmdldExvY2F0b3IubGVuZ3RoLCBwcyA9IG9yaWdpbmFsUG9zOyBwcyA8IG5ld1BvczsgcHMrKykgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twc10gPT09IHVuZGVmaW5lZCAmJiAhaXNNYXNrKHBzLCAhMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IGdldFRlc3RzKHBzKS5zbGljZSgpLCBiZXN0TWF0Y2ggPSBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMsICEwKSwgZXF1YWxpdHkgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgPT09IHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiB0ZXN0cy5wb3AoKSwgJC5lYWNoKHRlc3RzLCBmdW5jdGlvbihuZHgsIHRzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGxsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRzdC5sb2NhdG9yW2ldID09PSB1bmRlZmluZWQgfHwgIWNoZWNrQWx0ZXJuYXRpb25NYXRjaCh0c3QubG9jYXRvcltpXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgdGFyZ2V0TG9jYXRvcltpXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgdHN0Lm5hKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEFJID0gdGFyZ2V0TG9jYXRvcltpXSwgYmVzdE1hdGNoQUkgPSBiZXN0TWF0Y2gubG9jYXRvcltpXSwgdHN0QUkgPSB0c3QubG9jYXRvcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFJIC0gYmVzdE1hdGNoQUkgPiBNYXRoLmFicyh0YXJnZXRBSSAtIHRzdEFJKSAmJiAoYmVzdE1hdGNoID0gdHN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsaXR5IDwgaSAmJiAoZXF1YWxpdHkgPSBpLCBiZXN0TWF0Y2ggPSB0c3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBiZXN0TWF0Y2ggPSAkLmV4dGVuZCh7fSwgYmVzdE1hdGNoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGdldFBsYWNlaG9sZGVyKHBzLCBiZXN0TWF0Y2gubWF0Y2gsICEwKSB8fCBiZXN0TWF0Y2gubWF0Y2guZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYmVzdE1hdGNoLmdlbmVyYXRlZElucHV0ID0gITAsIHNldFZhbGlkUG9zaXRpb24ocHMsIGJlc3RNYXRjaCwgITApLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbmV3UG9zXSA9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZChuZXdQb3MsIHZwLmlucHV0LCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG1hc2tQb3MsIHJlc3VsdC5wb3MgIT09IHVuZGVmaW5lZCA/IHJlc3VsdC5wb3MgOiBuUG9zKSwgbWFza1BvcyA9IG5Qb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogc2Vla05leHQobWFza1BvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IHJlc3VsdCAmJiBvcHRzLmtlZXBTdGF0aWMgJiYgIXN0cmljdCAmJiAhMCAhPT0gZnJvbUFsdGVybmF0ZSAmJiAocmVzdWx0ID0gZnVuY3Rpb24ocG9zLCBjLCBzdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RBbHQsIGFsdGVybmF0aW9uLCBhbHRQb3MsIHByZXZBbHRQb3MsIGksIHZhbGlkUG9zLCBhbHROZHhzLCBkZWNpc2lvblBvcywgdmFsaWRQc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBpc1ZhbGlkUnNsdCA9ICExLCBsQWx0UG9zID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcmV2QWx0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xBbHRQb3NdOyBsQWx0UG9zID49IDA7IGxBbHRQb3MtLSkgaWYgKChhbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbEFsdFBvc10pICYmIGFsdFBvcy5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFsdCA9IGxBbHRQb3MsIGFsdGVybmF0aW9uID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdLmFsdGVybmF0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dICE9PSBhbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBbHRQb3MgPSBhbHRQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9uUG9zID0gcGFyc2VJbnQobGFzdEFsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjaXNpb25UYWtlciA9IHByZXZBbHRQb3MubG9jYXRvcltwcmV2QWx0UG9zLmFsdGVybmF0aW9uIHx8IGFsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gcHJldkFsdFBvcy5sb2NhdG9yW3ByZXZBbHRQb3MuYWx0ZXJuYXRpb24gfHwgYWx0ZXJuYXRpb25dIDogYWx0TmR4c1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9uVGFrZXIubGVuZ3RoID4gMCAmJiAoZGVjaXNpb25UYWtlciA9IGRlY2lzaW9uVGFrZXIuc3BsaXQoXCIsXCIpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NzaWJpbGl0eVBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10sIHByZXZQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3MgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChnZXRUZXN0cyhkZWNpc2lvblBvcywgcHJldlBvcyA/IHByZXZQb3MubG9jYXRvciA6IHVuZGVmaW5lZCwgZGVjaXNpb25Qb3MgLSAxKSwgZnVuY3Rpb24obmR4LCB0ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TmR4cyA9IHRlc3QubG9jYXRvclthbHRlcm5hdGlvbl0gPyB0ZXN0LmxvY2F0b3JbYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHROZHhzLmxlbmd0aDsgbW5keCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZElucHV0cyA9IFtdLCBzdGF0aWNJbnB1dHNCZWZvcmVQb3MgPSAwLCBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgPSAwLCB2ZXJpZnlWYWxpZElucHV0ID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWNpc2lvblRha2VyIDwgYWx0TmR4c1ttbmR4XSAmJiAodGVzdC5uYSA9PT0gdW5kZWZpbmVkIHx8IC0xID09PSAkLmluQXJyYXkoYWx0TmR4c1ttbmR4XSwgdGVzdC5uYS5zcGxpdChcIixcIikpIHx8IC0xID09PSAkLmluQXJyYXkoZGVjaXNpb25UYWtlci50b1N0cmluZygpLCBhbHROZHhzKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10gPSAkLmV4dGVuZCghMCwge30sIHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmlsaXRpZXMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmxvY2F0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvclthbHRlcm5hdGlvbl0gPSBwYXJzZUludChhbHROZHhzW21uZHhdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09IHRlc3QubWF0Y2guZm4gPyAocG9zc2liaWxpdHlQb3MuaW5wdXQgIT09IHRlc3QubWF0Y2guZGVmICYmICh2ZXJpZnlWYWxpZElucHV0ID0gITAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IHBvc3NpYmlsaXR5UG9zLmdlbmVyYXRlZElucHV0ICYmIHZhbGlkSW5wdXRzLnB1c2gocG9zc2liaWxpdHlQb3MuaW5wdXQpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUrKywgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5nZW5lcmF0ZWRJbnB1dCA9ICEvWzAtOWEtYkEtWl0vLnRlc3QodGVzdC5tYXRjaC5kZWYpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10uaW5wdXQgPSB0ZXN0Lm1hdGNoLmRlZikgOiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmlucHV0ID0gcG9zc2liaWxpdHlQb3MuaW5wdXQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGRlY2lzaW9uUG9zICsgMTsgaSA8IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApICsgMTsgaSsrKSB2YWxpZFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBvcyAmJiAhMCAhPT0gdmFsaWRQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgL1swLTlhLWJBLVpdLy50ZXN0KHZhbGlkUG9zLmlucHV0KSA/IHZhbGlkSW5wdXRzLnB1c2godmFsaWRQb3MuaW5wdXQpIDogaSA8IHBvcyAmJiBzdGF0aWNJbnB1dHNCZWZvcmVQb3MrKywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2ZXJpZnlWYWxpZElucHV0ICYmIHZhbGlkSW5wdXRzWzBdID09PSB0ZXN0Lm1hdGNoLmRlZiAmJiB2YWxpZElucHV0cy5zaGlmdCgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCghMCksIGlzVmFsaWRSc2x0ID0gITA7IHZhbGlkSW5wdXRzLmxlbmd0aCA+IDA7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHZhbGlkSW5wdXRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0ICE9PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgJiYgIShpc1ZhbGlkUnNsdCA9IGlzVmFsaWQoZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCkgKyAxLCBpbnB1dCwgITEsIGZyb21TZXRWYWxpZCwgITApKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFJzbHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmxvY2F0b3IgPSBwb3NzaWJpbGl0aWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRMdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbihwb3MpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBkZWNpc2lvblBvcyArIDE7IGkgPCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICsgMTsgaSsrKSAoKHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldKSA9PT0gdW5kZWZpbmVkIHx8IG51bGwgPT0gdmFsaWRQb3MubWF0Y2guZm4pICYmIGkgPCBwb3MgKyAoc3RhdGljSW5wdXRzQmVmb3JlUG9zQWx0ZXJuYXRlIC0gc3RhdGljSW5wdXRzQmVmb3JlUG9zKSAmJiBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gc3RhdGljSW5wdXRzQmVmb3JlUG9zQWx0ZXJuYXRlIC0gc3RhdGljSW5wdXRzQmVmb3JlUG9zLCBpc1ZhbGlkUnNsdCA9IGlzVmFsaWQocG9zID4gdGFyZ2V0THZwID8gdGFyZ2V0THZwIDogcG9zLCBjLCBzdHJpY3QsIGZyb21TZXRWYWxpZCwgITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRSc2x0KSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoKSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCB2YWxpZFBzQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRSc2x0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0obWFza1BvcywgYywgc3RyaWN0KSksICEwID09PSByZXN1bHQgJiYgKHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBtYXNrUG9zXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMucG9zdFZhbGlkYXRpb24pICYmICExICE9PSByZXN1bHQgJiYgIXN0cmljdCAmJiAhMCAhPT0gZnJvbVNldFZhbGlkICYmICEwICE9PSB2YWxpZGF0ZU9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdFJlc3VsdCA9IG9wdHMucG9zdFZhbGlkYXRpb24oZ2V0QnVmZmVyKCEwKSwgcmVzdWx0LCBvcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zdFJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlciAmJiBwb3N0UmVzdWx0LmJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHBvc3RSZXN1bHQucmVmcmVzaEZyb21CdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyKCEwID09PSByZWZyZXNoID8gcmVmcmVzaCA6IHJlZnJlc2guc3RhcnQsIHJlZnJlc2guZW5kLCBwb3N0UmVzdWx0LmJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICEwID09PSBwb3N0UmVzdWx0ID8gcmVzdWx0IDogcG9zdFJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnBvcyA9PT0gdW5kZWZpbmVkICYmIChyZXN1bHQucG9zID0gbWFza1BvcyksICExICE9PSByZXN1bHQgJiYgITAgIT09IHZhbGlkYXRlT25seSB8fCAocmVzZXRNYXNrU2V0KCEwKSwgXHJcbiAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHBvc2l0aW9uc0Nsb25lKSksIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc01hc2socG9zLCBzdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gZ2V0VGVzdFRlbXBsYXRlKHBvcykubWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdGVzdC5kZWYgJiYgKHRlc3QgPSBnZXRUZXN0KHBvcykubWF0Y2gpLCBudWxsICE9IHRlc3QuZm4pIHJldHVybiB0ZXN0LmZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEwICE9PSBzdHJpY3QgJiYgcG9zID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdHMgPSBnZXRUZXN0cyhwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0cy5sZW5ndGggPiAxICsgKFwiXCIgPT09IHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZWVrTmV4dChwb3MsIG5ld0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFza0wgPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwb3MgPj0gbWFza0wpIHJldHVybiBtYXNrTDtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHBvcztcclxuICAgICAgICAgICAgICAgIGZvciAoZ2V0VGVzdHMobWFza0wgKyAxKS5sZW5ndGggPiAxICYmIChnZXRNYXNrVGVtcGxhdGUoITAsIG1hc2tMICsgMSwgITApLCBtYXNrTCA9IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoKTsgKytwb3NpdGlvbiA8IG1hc2tMICYmICghMCA9PT0gbmV3QmxvY2sgJiYgKCEwICE9PSBnZXRUZXN0KHBvc2l0aW9uKS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhaXNNYXNrKHBvc2l0aW9uKSkgfHwgITAgIT09IG5ld0Jsb2NrICYmICFpc01hc2socG9zaXRpb24pKTsgKSA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2Vla1ByZXZpb3VzKHBvcywgbmV3QmxvY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0cywgcG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKDstLXBvc2l0aW9uID4gMCAmJiAoITAgPT09IG5ld0Jsb2NrICYmICEwICE9PSBnZXRUZXN0KHBvc2l0aW9uKS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhMCAhPT0gbmV3QmxvY2sgJiYgIWlzTWFzayhwb3NpdGlvbikgJiYgKHRlc3RzID0gZ2V0VGVzdHMocG9zaXRpb24pLCBcclxuICAgICAgICAgICAgICAgIHRlc3RzLmxlbmd0aCA8IDIgfHwgMiA9PT0gdGVzdHMubGVuZ3RoICYmIFwiXCIgPT09IHRlc3RzWzFdLm1hdGNoLmRlZikpOyApIDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJFbGVtZW50KHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXSA9PT0gdW5kZWZpbmVkID8gZ2V0UGxhY2Vob2xkZXIocG9zaXRpb24pIDogZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5pbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCBjYXJldFBvcywgZXZlbnQsIHRyaWdnZXJJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVXcml0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBldmVudCwgYnVmZmVyLCBjYXJldFBvcywgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyKCEwID09PSByZWZyZXNoID8gcmVmcmVzaCA6IHJlZnJlc2guc3RhcnQsIHJlZnJlc2guZW5kLCByZXN1bHQuYnVmZmVyIHx8IGJ1ZmZlciksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gZ2V0QnVmZmVyKCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvcyAhPT0gdW5kZWZpbmVkICYmIChjYXJldFBvcyA9IHJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LmNhcmV0IDogY2FyZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVTZXQoYnVmZmVyLmpvaW4oXCJcIikpLCBjYXJldFBvcyA9PT0gdW5kZWZpbmVkIHx8IGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXCJibHVyXCIgPT09IGV2ZW50LnR5cGUgPyByZW5kZXJDb2xvck1hc2soaW5wdXQsIGNhcmV0UG9zLCAwID09PSBidWZmZXIubGVuZ3RoKSA6IGFuZHJvaWQgJiYgZXZlbnQgJiYgXCJpbnB1dFwiID09PSBldmVudC50eXBlID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgY2FyZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCkgOiBjYXJldChpbnB1dCwgY2FyZXRQb3MpLCAhMCA9PT0gdHJpZ2dlcklucHV0RXZlbnQgJiYgKHNraXBJbnB1dEV2ZW50ID0gITAsIFxyXG4gICAgICAgICAgICAgICAgJChpbnB1dCkudHJpZ2dlcihcImlucHV0XCIpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0LCByZXR1cm5QTCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlc3QgPSB0ZXN0IHx8IGdldFRlc3QocG9zKS5tYXRjaCwgdGVzdC5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkIHx8ICEwID09PSByZXR1cm5QTCkgcmV0dXJuICQuaXNGdW5jdGlvbih0ZXN0LnBsYWNlaG9sZGVyKSA/IHRlc3QucGxhY2Vob2xkZXIob3B0cykgOiB0ZXN0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IHRlc3QuZm4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gLTEgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlRlc3QsIHRlc3RzID0gZ2V0VGVzdHMocG9zKSwgc3RhdGljQWx0ZXJuYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0cy5sZW5ndGggPiAxICsgKFwiXCIgPT09IHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKSkgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykgaWYgKCEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdHNbaV0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIChudWxsID09PSB0ZXN0c1tpXS5tYXRjaC5mbiB8fCBwcmV2VGVzdCA9PT0gdW5kZWZpbmVkIHx8ICExICE9PSB0ZXN0c1tpXS5tYXRjaC5mbi50ZXN0KHByZXZUZXN0Lm1hdGNoLmRlZiwgZ2V0TWFza1NldCgpLCBwb3MsICEwLCBvcHRzKSkgJiYgKHN0YXRpY0FsdGVybmF0aW9ucy5wdXNoKHRlc3RzW2ldKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IHRlc3RzW2ldLm1hdGNoLmZuICYmIChwcmV2VGVzdCA9IHRlc3RzW2ldKSwgc3RhdGljQWx0ZXJuYXRpb25zLmxlbmd0aCA+IDEgJiYgL1swLTlhLWJBLVpdLy50ZXN0KHN0YXRpY0FsdGVybmF0aW9uc1swXS5tYXRjaC5kZWYpKSkgcmV0dXJuIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KHBvcyAlIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlc3QuZGVmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KHBvcyAlIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1ZhbChpbnB1dCwgd3JpdGVPdXQsIHN0cmljdCwgbnB0dmwsIGluaXRpYXRpbmdFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNUZW1wbGF0ZU1hdGNoKG5keCwgY2hhckNvZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLnNsaWNlKG5keCwgc2Vla05leHQobmR4KSkuam9pbihcIlwiKS5pbmRleE9mKGNoYXJDb2RlcykgJiYgIWlzTWFzayhuZHgpICYmIGdldFRlc3QobmR4KS5tYXRjaC5uYXRpdmVEZWYgPT09IGNoYXJDb2Rlcy5jaGFyQXQoY2hhckNvZGVzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBucHR2bC5zbGljZSgpLCBjaGFyQ29kZXMgPSBcIlwiLCBpbml0aWFsTmR4ID0gLTEsIHJlc3VsdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNldE1hc2tTZXQoKSwgc3RyaWN0IHx8ICEwID09PSBvcHRzLmF1dG9Vbm1hc2spIGluaXRpYWxOZHggPSBzZWVrTmV4dChpbml0aWFsTmR4KTsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRpY0lucHV0ID0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5zbGljZSgwLCBzZWVrTmV4dCgtMSkpLmpvaW4oXCJcIiksIG1hdGNoZXMgPSBpbnB1dFZhbHVlLmpvaW4oXCJcIikubWF0Y2gobmV3IFJlZ0V4cChcIl5cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChzdGF0aWNJbnB1dCksIFwiZ1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDAgJiYgKGlucHV0VmFsdWUuc3BsaWNlKDAsIG1hdGNoZXMubGVuZ3RoICogc3RhdGljSW5wdXQubGVuZ3RoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE5keCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gaW5pdGlhbE5keCA/IChnZXRNYXNrU2V0KCkucCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpLCBpbml0aWFsTmR4ID0gMCkgOiBnZXRNYXNrU2V0KCkucCA9IGluaXRpYWxOZHgsIFxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGlucHV0VmFsdWUsIGZ1bmN0aW9uKG5keCwgY2hhckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgIT09IHVuZGVmaW5lZCkgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tuZHhdID09PSB1bmRlZmluZWQgJiYgaW5wdXRWYWx1ZVtuZHhdID09PSBnZXRQbGFjZWhvbGRlcihuZHgpICYmIGlzTWFzayhuZHgsICEwKSAmJiAhMSA9PT0gaXNWYWxpZChuZHgsIGlucHV0VmFsdWVbbmR4XSwgITAsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAhMCkpIGdldE1hc2tTZXQoKS5wKys7IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcIl9jaGVja3ZhbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3Mud2hpY2ggPSBjaGFyQ29kZS5jaGFyQ29kZUF0KDApLCBjaGFyQ29kZXMgKz0gY2hhckNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKSwgbHZUZXN0ID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2x2cF0sIG5leHRUZXN0ID0gZ2V0VGVzdFRlbXBsYXRlKGx2cCArIDEsIGx2VGVzdCA/IGx2VGVzdC5sb2NhdG9yLnNsaWNlKCkgOiB1bmRlZmluZWQsIGx2cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUZW1wbGF0ZU1hdGNoKGluaXRpYWxOZHgsIGNoYXJDb2RlcykgfHwgc3RyaWN0IHx8IG9wdHMuYXV0b1VubWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHN0cmljdCA/IG5keCA6IG51bGwgPT0gbmV4dFRlc3QubWF0Y2guZm4gJiYgbmV4dFRlc3QubWF0Y2gub3B0aW9uYWxpdHkgJiYgbHZwICsgMSA8IGdldE1hc2tTZXQoKS5wID8gbHZwICsgMSA6IGdldE1hc2tTZXQoKS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsIHN0cmljdCwgcG9zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTmR4ID0gcG9zICsgMSwgY2hhckNvZGVzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICExLCAhMCwgbHZwICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gcmVzdWx0ICYmICFzdHJpY3QgJiYgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVXcml0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnUmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9IG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKGlucHV0bWFzaywga2V5cHJlc3MsIGdldEJ1ZmZlcigpLCByZXN1bHQuZm9yd2FyZFBvc2l0aW9uLCBvcHRzKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzdWx0ID0gJC5leHRlbmQob3JpZ1Jlc3VsdCwgcmVzdWx0KSkgJiYgcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnJlc2ggPSByZXN1bHQucmVmcmVzaEZyb21CdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHJlc3VsdC5idWZmZXIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCByZXN1bHQuY2FyZXQgJiYgKGdldE1hc2tTZXQoKS5wID0gcmVzdWx0LmNhcmV0LCByZXN1bHQuZm9yd2FyZFBvc2l0aW9uID0gcmVzdWx0LmNhcmV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLCB3cml0ZU91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dCAmJiByZXN1bHQgJiYgKGNhcmV0UG9zID0gb3B0cy5udW1lcmljSW5wdXQgPyBzZWVrUHJldmlvdXMocmVzdWx0LmZvcndhcmRQb3NpdGlvbikgOiByZXN1bHQuZm9yd2FyZFBvc2l0aW9uKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBjYXJldFBvcywgaW5pdGlhdGluZ0V2ZW50IHx8IG5ldyAkLkV2ZW50KFwiY2hlY2t2YWxcIiksIGluaXRpYXRpbmdFdmVudCAmJiBcImlucHV0XCIgPT09IGluaXRpYXRpbmdFdmVudC50eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1bm1hc2tlZHZhbHVlKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrID09PSB1bmRlZmluZWQpIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2sgJiYgaW5wdXQuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSAmJiBFdmVudEhhbmRsZXJzLnNldFZhbHVlRXZlbnQuY2FsbChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdW1WYWx1ZSA9IFtdLCB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwbmR4IGluIHZwcykgdnBzW3BuZHhdLm1hdGNoICYmIG51bGwgIT0gdnBzW3BuZHhdLm1hdGNoLmZuICYmIHVtVmFsdWUucHVzaCh2cHNbcG5keF0uaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVubWFza2VkVmFsdWUgPSAwID09PSB1bVZhbHVlLmxlbmd0aCA/IFwiXCIgOiAoaXNSVEwgPyB1bVZhbHVlLnJldmVyc2UoKSA6IHVtVmFsdWUpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMub25Vbk1hc2spKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlclZhbHVlID0gKGlzUlRMID8gZ2V0QnVmZmVyKCkuc2xpY2UoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXIoKSkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB1bm1hc2tlZFZhbHVlID0gb3B0cy5vblVuTWFzay5jYWxsKGlucHV0bWFzaywgYnVmZmVyVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVubWFza2VkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FyZXQoaW5wdXQsIGJlZ2luLCBlbmQsIG5vdHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0cmFuc2xhdGVQb3NpdGlvbihwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG5vdHJhbnNsYXRlICYmIGlzUlRMICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIHBvcyAmJiAoIW9wdHMuZ3JlZWR5IHx8IFwiXCIgIT09IG9wdHMucGxhY2Vob2xkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikubGVuZ3RoIC0gcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJlZ2luID09PSB1bmRlZmluZWQpIHJldHVybiBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSA/IChiZWdpbiA9IGlucHV0LnNlbGVjdGlvblN0YXJ0LCBcclxuICAgICAgICAgICAgICAgIGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZCkgOiB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gKHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCksIFxyXG4gICAgICAgICAgICAgICAgcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIucGFyZW50Tm9kZSAhPT0gaW5wdXQgJiYgcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIgIT09IGlucHV0IHx8IChiZWdpbiA9IHJhbmdlLnN0YXJ0T2Zmc2V0LCBcclxuICAgICAgICAgICAgICAgIGVuZCA9IHJhbmdlLmVuZE9mZnNldCkpIDogZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSAmJiAocmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKSwgXHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IDAgLSByYW5nZS5kdXBsaWNhdGUoKS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgLWlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpLCBcclxuICAgICAgICAgICAgICAgIGVuZCA9IGJlZ2luICsgcmFuZ2UudGV4dC5sZW5ndGgpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IHRyYW5zbGF0ZVBvc2l0aW9uKGJlZ2luKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRyYW5zbGF0ZVBvc2l0aW9uKGVuZClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoYmVnaW4uYmVnaW4gIT09IHVuZGVmaW5lZCAmJiAoZW5kID0gYmVnaW4uZW5kLCBiZWdpbiA9IGJlZ2luLmJlZ2luKSwgXCJudW1iZXJcIiA9PSB0eXBlb2YgYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbiA9IHRyYW5zbGF0ZVBvc2l0aW9uKGJlZ2luKSwgZW5kID0gdHJhbnNsYXRlUG9zaXRpb24oZW5kKSwgZW5kID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgZW5kID8gZW5kIDogYmVnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbENhbGMgPSBwYXJzZUludCgoKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlID8gKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKSA6IGlucHV0LmN1cnJlbnRTdHlsZSkuZm9udFNpemUpICogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5zY3JvbGxMZWZ0ID0gc2Nyb2xsQ2FsYyA+IGlucHV0LnNjcm9sbFdpZHRoID8gc2Nyb2xsQ2FsYyA6IDAsIG1vYmlsZSB8fCAhMSAhPT0gb3B0cy5pbnNlcnRNb2RlIHx8IGJlZ2luICE9PSBlbmQgfHwgZW5kKyssIFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKSBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGJlZ2luLCBpbnB1dC5zZWxlY3Rpb25FbmQgPSBlbmQ7IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSwgaW5wdXQuZmlyc3RDaGlsZCA9PT0gdW5kZWZpbmVkIHx8IG51bGwgPT09IGlucHV0LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KGlucHV0LmZpcnN0Q2hpbGQsIGJlZ2luIDwgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCA/IGJlZ2luIDogaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoaW5wdXQuZmlyc3RDaGlsZCwgZW5kIDwgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCA/IGVuZCA6IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UoITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCksIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlucHV0LmNyZWF0ZVRleHRSYW5nZSAmJiAocmFuZ2UgPSBpbnB1dC5jcmVhdGVUZXh0UmFuZ2UoKSwgcmFuZ2UuY29sbGFwc2UoITApLCBcclxuICAgICAgICAgICAgICAgICAgICByYW5nZS5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsIGVuZCksIHJhbmdlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCBiZWdpbiksIHJhbmdlLnNlbGVjdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJDb2xvck1hc2soaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGJlZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKHJldHVybkRlZmluaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MsIHRlc3RQb3MsIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLCBibCA9IGJ1ZmZlci5sZW5ndGgsIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKCksIHBvc2l0aW9ucyA9IHt9LCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmR4SW50bHpyID0gbHZUZXN0ICE9PSB1bmRlZmluZWQgPyBsdlRlc3QubG9jYXRvci5zbGljZSgpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9yIChwb3MgPSBsdnAgKyAxOyBwb3MgPCBidWZmZXIubGVuZ3RoOyBwb3MrKykgdGVzdFBvcyA9IGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgcG9zIC0gMSksIFxyXG4gICAgICAgICAgICAgICAgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIHBvc2l0aW9uc1twb3NdID0gJC5leHRlbmQoITAsIHt9LCB0ZXN0UG9zKTtcclxuICAgICAgICAgICAgICAgIHZhciBsdlRlc3RBbHQgPSBsdlRlc3QgJiYgbHZUZXN0LmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyBsdlRlc3QubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9yIChwb3MgPSBibCAtIDE7IHBvcyA+IGx2cCAmJiAodGVzdFBvcyA9IHBvc2l0aW9uc1twb3NdLCAodGVzdFBvcy5tYXRjaC5vcHRpb25hbGl0eSB8fCB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiB0ZXN0UG9zLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8IGx2VGVzdEFsdCAmJiAobHZUZXN0QWx0ICE9PSBwb3NpdGlvbnNbcG9zXS5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gJiYgbnVsbCAhPSB0ZXN0UG9zLm1hdGNoLmZuIHx8IG51bGwgPT09IHRlc3RQb3MubWF0Y2guZm4gJiYgdGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gJiYgY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCBsdlRlc3RBbHQudG9TdHJpbmcoKS5zcGxpdChcIixcIikpICYmIFwiXCIgIT09IGdldFRlc3RzKHBvcylbMF0uZGVmKSkgJiYgYnVmZmVyW3Bvc10gPT09IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdFBvcy5tYXRjaCkpOyBwb3MtLSkgYmwtLTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EZWZpbml0aW9uID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGw6IGJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZjogcG9zaXRpb25zW2JsXSA/IHBvc2l0aW9uc1tibF0ubWF0Y2ggOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH0gOiBibDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhck9wdGlvbmFsVGFpbChidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkUG9zLCBybCA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHYgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZ2V0TGFzdFZhbGlkUG9zaXRpb24oKV07IHJsIDwgYmwgJiYgIWlzTWFzayhybCwgITApICYmICh2YWxpZFBvcyA9IGx2ICE9PSB1bmRlZmluZWQgPyBnZXRUZXN0VGVtcGxhdGUocmwsIGx2LmxvY2F0b3Iuc2xpY2UoXCJcIiksIGx2KSA6IGdldFRlc3QocmwpKSAmJiAhMCAhPT0gdmFsaWRQb3MubWF0Y2gub3B0aW9uYWxpdHkgJiYgKCEwICE9PSB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgITAgIT09IHZhbGlkUG9zLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8IHJsICsgMSA9PT0gYmwgJiYgXCJcIiA9PT0gKGx2ICE9PSB1bmRlZmluZWQgPyBnZXRUZXN0VGVtcGxhdGUocmwgKyAxLCBsdi5sb2NhdG9yLnNsaWNlKFwiXCIpLCBsdikgOiBnZXRUZXN0KHJsICsgMSkpLm1hdGNoLmRlZik7ICkgcmwrKztcclxuICAgICAgICAgICAgICAgIGZvciAoOyh2YWxpZFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tybCAtIDFdKSAmJiB2YWxpZFBvcyAmJiB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbGl0eSAmJiB2YWxpZFBvcy5pbnB1dCA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOyApIHJsLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnNwbGljZShybCksIGJ1ZmZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc0NvbXBsZXRlKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLmlzQ29tcGxldGUpKSByZXR1cm4gb3B0cy5pc0NvbXBsZXRlKGJ1ZmZlciwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCIqXCIgPT09IG9wdHMucmVwZWF0KSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlID0gITEsIGxycCA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKCEwKSwgYW1sID0gc2Vla1ByZXZpb3VzKGxycC5sKTtcclxuICAgICAgICAgICAgICAgIGlmIChscnAuZGVmID09PSB1bmRlZmluZWQgfHwgbHJwLmRlZi5uZXdCbG9ja01hcmtlciB8fCBscnAuZGVmLm9wdGlvbmFsaXR5IHx8IGxycC5kZWYub3B0aW9uYWxRdWFudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhbWw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGdldFRlc3RUZW1wbGF0ZShpKS5tYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHRlc3QuZm4gJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgITAgIT09IHRlc3Qub3B0aW9uYWxpdHkgJiYgITAgIT09IHRlc3Qub3B0aW9uYWxRdWFudGlmaWVyIHx8IG51bGwgPT09IHRlc3QuZm4gJiYgYnVmZmVyW2ldICE9PSBnZXRQbGFjZWhvbGRlcihpLCB0ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZShpbnB1dCwgaywgcG9zLCBzdHJpY3QsIGZyb21Jc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG9wdHMubnVtZXJpY0lucHV0IHx8IGlzUlRMKSAmJiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFID8gayA9IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSA6IGsgPT09IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSAmJiAoayA9IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSksIFxyXG4gICAgICAgICAgICAgICAgaXNSVEwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlbmQgPSBwb3MuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBwb3MuYmVnaW4sIHBvcy5iZWdpbiA9IHBlbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5CQUNLU1BBQ0UgJiYgKHBvcy5lbmQgLSBwb3MuYmVnaW4gPCAxIHx8ICExID09PSBvcHRzLmluc2VydE1vZGUpID8gKHBvcy5iZWdpbiA9IHNlZWtQcmV2aW91cyhwb3MuYmVnaW4pLCBcclxuICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuYmVnaW5dICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0uaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgcG9zLmJlZ2luLS0pIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFICYmIHBvcy5iZWdpbiA9PT0gcG9zLmVuZCAmJiAocG9zLmVuZCA9IGlzTWFzayhwb3MuZW5kLCAhMCkgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5lbmRdICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuZW5kXS5pbnB1dCAhPT0gb3B0cy5yYWRpeFBvaW50ID8gcG9zLmVuZCArIDEgOiBzZWVrTmV4dChwb3MuZW5kKSArIDEsIFxyXG4gICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0gIT09IHVuZGVmaW5lZCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXS5pbnB1dCA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiBwb3MuZW5kKyspLCBcclxuICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMocG9zLmJlZ2luLCBwb3MuZW5kLCAhMSwgc3RyaWN0KSwgITAgIT09IHN0cmljdCAmJiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5rZWVwU3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkSW5wdXRzID0gW10sIGxhc3RBbHQgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigtMSwgITApLCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKCEwLCB7fSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zKSwgcHJldkFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XTsgbGFzdEFsdCA+PSAwOyBsYXN0QWx0LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWx0UG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBhbHRQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgL1swLTlhLWJBLVpdLy50ZXN0KGFsdFBvcy5pbnB1dCkgJiYgdmFsaWRJbnB1dHMucHVzaChhbHRQb3MuaW5wdXQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdLCBhbHRQb3MuYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCAmJiBhbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dICE9PSBwcmV2QWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFsdCA+IC0xKSBmb3IgKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oLTEsICEwKSk7IHZhbGlkSW5wdXRzLmxlbmd0aCA+IDA7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzLndoaWNoID0gdmFsaWRJbnB1dHMucG9wKCkuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICExLCBnZXRNYXNrU2V0KCkucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHBvc2l0aW9uc0Nsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24ocG9zLmJlZ2luLCAhMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobHZwIDwgcG9zLmJlZ2luKSBnZXRNYXNrU2V0KCkucCA9IHNlZWtOZXh0KGx2cCk7IGVsc2UgaWYgKCEwICE9PSBzdHJpY3QgJiYgKGdldE1hc2tTZXQoKS5wID0gcG9zLmJlZ2luLCBcclxuICAgICAgICAgICAgICAgICEwICE9PSBmcm9tSXNWYWxpZCkpIGZvciAoO2dldE1hc2tTZXQoKS5wIDwgbHZwICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tnZXRNYXNrU2V0KCkucF0gPT09IHVuZGVmaW5lZDsgKSBnZXRNYXNrU2V0KCkucCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVDb2xvck1hc2soaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRDYXJldFBvcyhjbGllbnR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zLCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3R5bGUgaW4gY29tcHV0ZWRTdHlsZSkgaXNOYU4oc3R5bGUpICYmIC0xICE9PSBzdHlsZS5pbmRleE9mKFwiZm9udFwiKSAmJiAoZS5zdHlsZVtzdHlsZV0gPSBjb21wdXRlZFN0eWxlW3N0eWxlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZS50ZXh0VHJhbnNmb3JtLCBlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBjb21wdXRlZFN0eWxlLmxldHRlclNwYWNpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCIsIGUuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCIsIGUuc3R5bGUud2lkdGggPSBcImF1dG9cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiwgZS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIiwgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRsLCBpbnB1dFRleHQgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksIHByZXZpb3VzV2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY2FyZXRQb3MgPSAwLCBpdGwgPSBpbnB1dFRleHQubGVuZ3RoOyBjYXJldFBvcyA8PSBpdGw7IGNhcmV0UG9zKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaW5uZXJIVE1MICs9IGlucHV0VGV4dC5jaGFyQXQoY2FyZXRQb3MpIHx8IFwiX1wiLCBlLm9mZnNldFdpZHRoID49IGNsaWVudHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQxID0gY2xpZW50eCAtIHByZXZpb3VzV2lkdGgsIG9mZnNldDIgPSBlLm9mZnNldFdpZHRoIC0gY2xpZW50eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gaW5wdXRUZXh0LmNoYXJBdChjYXJldFBvcyksIG9mZnNldDEgLT0gZS5vZmZzZXRXaWR0aCAvIDMsIGNhcmV0UG9zID0gb2Zmc2V0MSA8IG9mZnNldDIgPyBjYXJldFBvcyAtIDEgOiBjYXJldFBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzV2lkdGggPSBlLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSwgY2FyZXRQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IChpbnB1dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCwgbnVsbCksIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLnN0eWxlLndpZHRoID0gY29tcHV0ZWRTdHlsZS53aWR0aCwgdGVtcGxhdGUuc3R5bGUudGV4dEFsaWduID0gY29tcHV0ZWRTdHlsZS50ZXh0QWxpZ24sIFxyXG4gICAgICAgICAgICAgICAgY29sb3JNYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgY29sb3JNYXNrLmNsYXNzTmFtZSA9IFwiaW0tY29sb3JtYXNrXCIsIFxyXG4gICAgICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29sb3JNYXNrLCBpbnB1dCksIGlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW5wdXQpLCBcclxuICAgICAgICAgICAgICAgIGNvbG9yTWFzay5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSksIGNvbG9yTWFzay5hcHBlbmRDaGlsZChpbnB1dCksIGlucHV0LnN0eWxlLmxlZnQgPSB0ZW1wbGF0ZS5vZmZzZXRMZWZ0ICsgXCJweFwiLCBcclxuICAgICAgICAgICAgICAgICQoaW5wdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXJldChpbnB1dCwgZmluZENhcmV0UG9zKGUuY2xpZW50WCkpLCBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuY2FsbChpbnB1dCwgWyBlIF0pO1xyXG4gICAgICAgICAgICAgICAgfSksICQoaW5wdXQpLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSB8fCAhMSA9PT0gb3B0cy5pbnNlcnRNb2RlIHx8IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW5kZXJDb2xvck1hc2soaW5wdXQsIGNhcmV0UG9zLCBjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3RhdGljKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhdGljIHx8IG51bGwgIT09IHRlc3QuZm4gJiYgdGVzdFBvcy5pbnB1dCAhPT0gdW5kZWZpbmVkID8gaXNTdGF0aWMgJiYgKG51bGwgIT09IHRlc3QuZm4gJiYgdGVzdFBvcy5pbnB1dCAhPT0gdW5kZWZpbmVkIHx8IFwiXCIgPT09IHRlc3QuZGVmKSAmJiAoaXNTdGF0aWMgPSAhMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RlbXBsYXRlICs9IFwiPC9zcGFuPlwiKSA6IChpc1N0YXRpYyA9ICEwLCBtYXNrVGVtcGxhdGUgKz0gXCI8c3BhbiBjbGFzcz0naW0tc3RhdGljJz5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDYXJldChmb3JjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICEwICE9PSBmb3JjZSAmJiBwb3MgIT09IGNhcmV0UG9zLmJlZ2luIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0IHx8IChtYXNrVGVtcGxhdGUgKz0gXCI8c3BhbiBjbGFzcz0naW0tY2FyZXQnIHN0eWxlPSdib3JkZXItcmlnaHQtd2lkdGg6IDFweDtib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkOyc+PC9zcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0LCB0ZXN0UG9zLCBuZHhJbnRsenIsIG1hc2tUZW1wbGF0ZSA9IFwiXCIsIGlzU3RhdGljID0gITEsIHBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JNYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zID09PSB1bmRlZmluZWQgPyBjYXJldFBvcyA9IGNhcmV0KGlucHV0KSA6IGNhcmV0UG9zLmJlZ2luID09PSB1bmRlZmluZWQgJiYgKGNhcmV0UG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogY2FyZXRQb3NcclxuICAgICAgICAgICAgICAgICAgICB9KSwgITAgIT09IGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXJldCgpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA/ICh0ZXN0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2gsIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCBoYW5kbGVTdGF0aWMoKSwgbWFza1RlbXBsYXRlICs9IGJ1ZmZlcltwb3NdKSA6ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IHBvcyA8IGx2cCB8fCBcIm51bWJlclwiID09IHR5cGVvZiBvcHRzLmppdE1hc2tpbmcgJiYgaXNGaW5pdGUob3B0cy5qaXRNYXNraW5nKSAmJiBvcHRzLmppdE1hc2tpbmcgPiBwb3MpICYmIChoYW5kbGVTdGF0aWMoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGUgKz0gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0KSkpLCBwb3MrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IHBvcyA8IG1heExlbmd0aCkgJiYgKG51bGwgIT09IHRlc3QuZm4gfHwgXCJcIiAhPT0gdGVzdC5kZWYpIHx8IGx2cCA+IHBvcyB8fCBpc1N0YXRpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBtYXNrVGVtcGxhdGUuaW5kZXhPZihcImltLWNhcmV0XCIpICYmIGhhbmRsZUNhcmV0KCEwKSwgaXNTdGF0aWMgJiYgaGFuZGxlU3RhdGljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbG9yTWFzay5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBtYXNrVGVtcGxhdGUsIGlucHV0LmlucHV0bWFzay5wb3NpdGlvbkNvbG9yTWFzayhpbnB1dCwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hc2tzZXQgPSBtYXNrc2V0IHx8IHRoaXMubWFza3NldCwgb3B0cyA9IG9wdHMgfHwgdGhpcy5vcHRzO1xyXG4gICAgICAgICAgICB2YXIgdW5kb1ZhbHVlLCAkZWwsIG1heExlbmd0aCwgY29sb3JNYXNrLCBpbnB1dG1hc2sgPSB0aGlzLCBlbCA9IHRoaXMuZWwsIGlzUlRMID0gdGhpcy5pc1JUTCwgc2tpcEtleVByZXNzRXZlbnQgPSAhMSwgc2tpcElucHV0RXZlbnQgPSAhMSwgaWdub3JhYmxlID0gITEsIG1vdXNlRW50ZXIgPSAhMSwgRXZlbnRSdWxlciA9IHtcclxuICAgICAgICAgICAgICAgIG9uOiBmdW5jdGlvbihpbnB1dCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXYgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0bWFzayA9PT0gdW5kZWZpbmVkICYmIFwiRk9STVwiICE9PSB0aGlzLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1PcHRzID0gJC5kYXRhKHRoaXMsIFwiX2lucHV0bWFza19vcHRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1PcHRzID8gbmV3IElucHV0bWFzayhpbU9wdHMpLm1hc2sodGhpcykgOiBFdmVudFJ1bGVyLm9mZih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInNldHZhbHVlXCIgPT09IGUudHlwZSB8fCBcIkZPUk1cIiA9PT0gdGhpcy5ub2RlTmFtZSB8fCAhKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSAmJiAhKFwia2V5ZG93blwiID09PSBlLnR5cGUgJiYgZS5jdHJsS2V5ICYmIDY3ID09PSBlLmtleUNvZGUgfHwgITEgPT09IG9wdHMudGFiVGhyb3VnaCAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlRBQikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHNraXBJbnB1dEV2ZW50KSByZXR1cm4gc2tpcElucHV0RXZlbnQgPSAhMSwgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5cHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBza2lwS2V5UHJlc3NFdmVudCkgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcEtleVByZXNzRXZlbnQgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZW1vYmlsZSB8fCBpcGhvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApLCAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsID0gZXZlbnRIYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExID09PSByZXR1cm5WYWwgJiYgKGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKSksIHJldHVyblZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdID0gaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdLCBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldiksIFxyXG4gICAgICAgICAgICAgICAgICAgIC0xICE9PSAkLmluQXJyYXkoZXZlbnROYW1lLCBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdKSA/IG51bGwgIT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9uKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub24oZXZlbnROYW1lLCBldik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbihpbnB1dCwgZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPyAoZXZlbnRzID0gW10sIGV2ZW50c1tldmVudF0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50XSkgOiBldmVudHMgPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGV2ZW50cywgZnVuY3Rpb24oZXZlbnROYW1lLCBldkFycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZXZBcnIubGVuZ3RoID4gMDsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZBcnIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPSBpbnB1dC5mb3JtICYmICQoaW5wdXQuZm9ybSkub2ZmKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub2ZmKGV2ZW50TmFtZSwgZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBFdmVudEhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICAgICAga2V5ZG93bkV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLmtleUNvZGUsIHBvcyA9IGNhcmV0KGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFIHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSB8fCBpcGhvbmUgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFX1NBRkFSSSB8fCBlLmN0cmxLZXkgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuWCAmJiAhZnVuY3Rpb24oZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwgZXZOYW1lID0gXCJvblwiICsgZXZlbnROYW1lLCBpc1N1cHBvcnRlZCA9IGV2TmFtZSBpbiBlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkIHx8IChlbC5zZXRBdHRyaWJ1dGUoZXZOYW1lLCBcInJldHVybjtcIiksIGlzU3VwcG9ydGVkID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlbFtldk5hbWVdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gbnVsbCwgaXNTdXBwb3J0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfShcImN1dFwiKSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBoYW5kbGVSZW1vdmUoaW5wdXQsIGssIHBvcyksIHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoITApLCBnZXRNYXNrU2V0KCkucCwgZSwgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIikgOiAhMCA9PT0gaXNDb21wbGV0ZShnZXRCdWZmZXIoKSkgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKTsgZWxzZSBpZiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRU5EIHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLlBBR0VfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmluc2VydE1vZGUgfHwgY2FyZXRQb3MgIT09IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoIHx8IGUuc2hpZnRLZXkgfHwgY2FyZXRQb3MtLSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBlLnNoaWZ0S2V5ID8gcG9zLmJlZ2luIDogY2FyZXRQb3MsIGNhcmV0UG9zLCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkhPTUUgJiYgIWUuc2hpZnRLZXkgfHwgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUEFHRV9VUCA/IChlLnByZXZlbnREZWZhdWx0KCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBlLnNoaWZ0S2V5ID8gcG9zLmJlZ2luIDogMCwgITApKSA6IChvcHRzLnVuZG9PbkVzY2FwZSAmJiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5FU0NBUEUgfHwgOTAgPT09IGsgJiYgZS5jdHJsS2V5KSAmJiAhMCAhPT0gZS5hbHRLZXkgPyAoY2hlY2tWYWwoaW5wdXQsICEwLCAhMSwgdW5kb1ZhbHVlLnNwbGl0KFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJjbGlja1wiKSkgOiBrICE9PSBJbnB1dG1hc2sua2V5Q29kZS5JTlNFUlQgfHwgZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgPyAhMCA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLlRBQiA/ICghMCA9PT0gZS5zaGlmdEtleSA/IChudWxsID09PSBnZXRUZXN0KHBvcy5iZWdpbikubWF0Y2guZm4gJiYgKHBvcy5iZWdpbiA9IHNlZWtOZXh0KHBvcy5iZWdpbikpLCBcclxuICAgICAgICAgICAgICAgICAgICBwb3MuZW5kID0gc2Vla1ByZXZpb3VzKHBvcy5iZWdpbiwgITApLCBwb3MuYmVnaW4gPSBzZWVrUHJldmlvdXMocG9zLmVuZCwgITApKSA6IChwb3MuYmVnaW4gPSBzZWVrTmV4dChwb3MuYmVnaW4sICEwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLmVuZCA9IHNlZWtOZXh0KHBvcy5iZWdpbiwgITApLCBwb3MuZW5kIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgcG9zLmVuZC0tKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLmJlZ2luIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgKGUucHJldmVudERlZmF1bHQoKSwgY2FyZXQoaW5wdXQsIHBvcy5iZWdpbiwgcG9zLmVuZCkpKSA6IGUuc2hpZnRLZXkgfHwgITEgPT09IG9wdHMuaW5zZXJ0TW9kZSAmJiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBjYXJldFBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCkgOiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5MRUZUICYmIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQoaW5wdXQsIGlzUlRMID8gY2FyZXRQb3MuYmVnaW4gKyAxIDogY2FyZXRQb3MuYmVnaW4gLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKSkgOiAob3B0cy5pbnNlcnRNb2RlID0gIW9wdHMuaW5zZXJ0TW9kZSwgY2FyZXQoaW5wdXQsIG9wdHMuaW5zZXJ0TW9kZSB8fCBwb3MuYmVnaW4gIT09IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID8gcG9zLmJlZ2luIDogcG9zLmJlZ2luIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMub25LZXlEb3duLmNhbGwodGhpcywgZSwgZ2V0QnVmZmVyKCksIGNhcmV0KGlucHV0KS5iZWdpbiwgb3B0cyksIGlnbm9yYWJsZSA9IC0xICE9PSAkLmluQXJyYXkoaywgb3B0cy5pZ25vcmFibGVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBrZXlwcmVzc0V2ZW50OiBmdW5jdGlvbihlLCBjaGVja3ZhbCwgd3JpdGVPdXQsIHN0cmljdCwgbmR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLndoaWNoIHx8IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCEwID09PSBjaGVja3ZhbCB8fCBlLmN0cmxLZXkgJiYgZS5hbHRLZXkpICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGlnbm9yYWJsZSkpIHJldHVybiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5FTlRFUiAmJiB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgKHVuZG9WYWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApKSwgITA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDYgPT09IGsgJiYgITEgPT09IGUuc2hpZnRLZXkgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIChrID0gb3B0cy5yYWRpeFBvaW50LmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9yd2FyZFBvc2l0aW9uLCBwb3MgPSBjaGVja3ZhbCA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBuZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG5keFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogY2FyZXQoaW5wdXQpLCBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLndyaXRlT3V0QnVmZmVyID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxSZXN1bHQgPSBpc1ZhbGlkKHBvcywgYywgc3RyaWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIGZvcndhcmRQb3NpdGlvbiA9IHZhbFJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkID8gdmFsUmVzdWx0LmNhcmV0IDogY2hlY2t2YWwgPyB2YWxSZXN1bHQucG9zICsgMSA6IHNlZWtOZXh0KHZhbFJlc3VsdC5wb3MpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnAgPSBmb3J3YXJkUG9zaXRpb24pLCAhMSAhPT0gd3JpdGVPdXQgJiYgKHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLm9uS2V5VmFsaWRhdGlvbi5jYWxsKGlucHV0LCBrLCB2YWxSZXN1bHQsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKSwgZ2V0TWFza1NldCgpLndyaXRlT3V0QnVmZmVyICYmICExICE9PSB2YWxSZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCBvcHRzLm51bWVyaWNJbnB1dCAmJiB2YWxSZXN1bHQuY2FyZXQgPT09IHVuZGVmaW5lZCA/IHNlZWtQcmV2aW91cyhmb3J3YXJkUG9zaXRpb24pIDogZm9yd2FyZFBvc2l0aW9uLCBlLCAhMCAhPT0gY2hlY2t2YWwpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSBjaGVja3ZhbCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KCksIGNoZWNrdmFsKSByZXR1cm4gITEgIT09IHZhbFJlc3VsdCAmJiAodmFsUmVzdWx0LmZvcndhcmRQb3NpdGlvbiA9IGZvcndhcmRQb3NpdGlvbiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhc3RlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFZhbHVlLCBpbnB1dCA9IHRoaXMsIGV2ID0gZS5vcmlnaW5hbEV2ZW50IHx8IGUsICRpbnB1dCA9ICQoaW5wdXQpLCBpbnB1dFZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMICYmICh0ZW1wVmFsdWUgPSBjYXJldFBvcy5lbmQsIGNhcmV0UG9zLmVuZCA9IGNhcmV0UG9zLmJlZ2luLCBjYXJldFBvcy5iZWdpbiA9IHRlbXBWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQmVmb3JlQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksIHZhbHVlQWZ0ZXJDYXJldCA9IGlucHV0VmFsdWUuc3Vic3RyKGNhcmV0UG9zLmVuZCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUJlZm9yZUNhcmV0ID09PSAoaXNSVEwgPyBnZXRCdWZmZXJUZW1wbGF0ZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlclRlbXBsYXRlKCkpLnNsaWNlKDAsIGNhcmV0UG9zLmJlZ2luKS5qb2luKFwiXCIpICYmICh2YWx1ZUJlZm9yZUNhcmV0ID0gXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQWZ0ZXJDYXJldCA9PT0gKGlzUlRMID8gZ2V0QnVmZmVyVGVtcGxhdGUoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXJUZW1wbGF0ZSgpKS5zbGljZShjYXJldFBvcy5lbmQpLmpvaW4oXCJcIikgJiYgKHZhbHVlQWZ0ZXJDYXJldCA9IFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBpc1JUTCAmJiAodGVtcFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCwgdmFsdWVCZWZvcmVDYXJldCA9IHZhbHVlQWZ0ZXJDYXJldCwgdmFsdWVBZnRlckNhcmV0ID0gdGVtcFZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgaW5wdXRWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQgKyB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSArIHZhbHVlQWZ0ZXJDYXJldDsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXYuY2xpcGJvYXJkRGF0YSB8fCAhZXYuY2xpcGJvYXJkRGF0YS5nZXREYXRhKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgZXYuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKSArIHZhbHVlQWZ0ZXJDYXJldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3RlVmFsdWUgPSBpbnB1dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVBhc3RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IChwYXN0ZVZhbHVlID0gb3B0cy5vbkJlZm9yZVBhc3RlLmNhbGwoaW5wdXRtYXNrLCBpbnB1dFZhbHVlLCBvcHRzKSkpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RlVmFsdWUgfHwgKHBhc3RlVmFsdWUgPSBpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrVmFsKGlucHV0LCAhMSwgITEsIGlzUlRMID8gcGFzdGVWYWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkgOiBwYXN0ZVZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICAhMCA9PT0gaXNDb21wbGV0ZShnZXRCdWZmZXIoKSkgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKSwgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmFsbEJhY2tFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsIGlucHV0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgIT09IGlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGZ1bmN0aW9uKGlucHV0LCBpbnB1dFZhbHVlLCBjYXJldFBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiLlwiID09PSBpbnB1dFZhbHVlLmNoYXJBdChjYXJldFBvcy5iZWdpbiAtIDEpICYmIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAoaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3BsaXQoXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZVtjYXJldFBvcy5iZWdpbiAtIDFdID0gb3B0cy5yYWRpeFBvaW50LmNoYXJBdCgwKSwgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuam9pbihcIlwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS5jaGFyQXQoY2FyZXRQb3MuYmVnaW4gLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIGlucHV0VmFsdWUubGVuZ3RoID4gZ2V0QnVmZmVyKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cHJlc3Mud2hpY2ggPSBvcHRzLnJhZGl4UG9pbnQuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITAsICExLCBjYXJldFBvcy5iZWdpbiAtIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfShpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgoZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpKSArIFwiKSpcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IGZ1bmN0aW9uKGlucHV0LCBpbnB1dFZhbHVlLCBjYXJldFBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGllbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hhciA9IGlucHV0VmFsdWUucmVwbGFjZShnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PT0gaW5wdXRDaGFyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcImtleXByZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cHJlc3Mud2hpY2ggPSBpbnB1dENoYXIuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITAsICExLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbY2FyZXRQb3MuYmVnaW4gLSAxXSA/IGNhcmV0UG9zLmJlZ2luIDogY2FyZXRQb3MuYmVnaW4gLSAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfShpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zLmJlZ2luID4gaW5wdXRWYWx1ZS5sZW5ndGggJiYgKGNhcmV0KGlucHV0LCBpbnB1dFZhbHVlLmxlbmd0aCksIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIiksIGZyb250UGFydCA9IGlucHV0VmFsdWUuc3Vic3RyKDAsIGNhcmV0UG9zLmJlZ2luKSwgYmFja1BhcnQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5iZWdpbiksIGZyb250QnVmZmVyUGFydCA9IGJ1ZmZlci5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCBiYWNrQnVmZmVyUGFydCA9IGJ1ZmZlci5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLCBzZWxlY3Rpb24gPSBjYXJldFBvcywgZW5kT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tQYXJ0ID09PSBiYWNrQnVmZmVyUGFydCB8fCBmcm9udFBhcnQgPT09IGZyb250QnVmZmVyUGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogZnJvbnRQYXJ0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnJvbnRQYXJ0W2Zyb250UGFydC5sZW5ndGggLSAxXSAhPT0gZnJvbnRCdWZmZXJQYXJ0W2Zyb250QnVmZmVyUGFydC5sZW5ndGggLSAxXSAmJiAoc2VsZWN0aW9uLmJlZ2luLS0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0KyspLCBiYWNrUGFydC5sZW5ndGggPiBiYWNrQnVmZmVyUGFydC5sZW5ndGgpIHNlbGVjdGlvbi5lbmQgPSBzZWxlY3Rpb24uYmVnaW47IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFBhcnQgPSBiYWNrQnVmZmVyUGFydC5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGJhY2tQYXJ0KSArIFwiJFwiKSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHNlbGVjdGVkUGFydC5sZW5ndGggKyBlbmRPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYmVnaW4gIT09IHNlbGVjdGlvbi5lbmQgfHwgaXNNYXNrKHNlbGVjdGlvbi5iZWdpbikgfHwgKHNlbGVjdGlvbi5lbmQgPSBjYXJldFBvcy5lbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24uYmVnaW4gPCBzZWxlY3Rpb24uZW5kKSB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIHNlbGVjdGlvbiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9udFBhcnQuc3BsaXQoXCJcIilbZnJvbnRQYXJ0Lmxlbmd0aCAtIDFdICE9PSBmcm9udEJ1ZmZlclBhcnQuc3BsaXQoXCJcIilbZnJvbnRCdWZmZXJQYXJ0Lmxlbmd0aCAtIDFdID8gKGUud2hpY2ggPSBmcm9udFBhcnQuY2hhckNvZGVBdChmcm9udFBhcnQubGVuZ3RoIC0gMSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmFibGUgPSAhMSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGUpKSA6IChzZWxlY3Rpb24uYmVnaW4gPT09IHNlbGVjdGlvbi5lbmQgLSAxICYmIGNhcmV0KGlucHV0LCBzZWVrUHJldmlvdXMoc2VsZWN0aW9uLmJlZ2luICsgMSksIHNlbGVjdGlvbi5lbmQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5rZXlDb2RlID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBFdmVudEhhbmRsZXJzLmtleWRvd25FdmVudC5jYWxsKGlucHV0LCBlKSk7IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYnVmZmVyVGVtcGxhdGUgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIik7IG51bGwgPT09IGlucHV0VmFsdWUubWF0Y2goSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGJ1ZmZlclRlbXBsYXRlKSArIFwiJFwiKTsgKSBidWZmZXJUZW1wbGF0ZSA9IGJ1ZmZlclRlbXBsYXRlLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnJlcGxhY2UoYnVmZmVyVGVtcGxhdGUsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVNYXNrKSAmJiAoaW5wdXRWYWx1ZSA9IG9wdHMub25CZWZvcmVNYXNrLmNhbGwoaW5wdXRtYXNrLCBpbnB1dFZhbHVlLCBvcHRzKSB8fCBpbnB1dFZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbChpbnB1dCwgITAsICExLCBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpLCBlKSwgZnVuY3Rpb24oaW5wdXQsIGZyb250UGFydCwgYmFja1BhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0UG9zID0gY2FyZXQoaW5wdXQpLmJlZ2luLCBjdXJyZW50VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksIHBvcyA9IGN1cnJlbnRWYWx1ZS5pbmRleE9mKGZyb250UGFydCksIGN1cnJlbnRQb3MgPSB0YXJnZXRQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHBvcyAmJiB0YXJnZXRQb3MgIT09IGZyb250UGFydC5sZW5ndGgpIHRhcmdldFBvcyA9IGZyb250UGFydC5sZW5ndGg7IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtudWxsID09PSBjdXJyZW50VmFsdWUubWF0Y2goSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGJhY2tQYXJ0KSArIFwiJFwiKTsgKSBiYWNrUGFydCA9IGJhY2tQYXJ0LnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvczIgPSBjdXJyZW50VmFsdWUuaW5kZXhPZihiYWNrUGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBwb3MyICYmIFwiXCIgIT09IGJhY2tQYXJ0ICYmIHRhcmdldFBvcyA+IHBvczIgJiYgcG9zMiA+IHBvcyAmJiAodGFyZ2V0UG9zID0gcG9zMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWFzayh0YXJnZXRQb3MpIHx8ICh0YXJnZXRQb3MgPSBzZWVrTmV4dCh0YXJnZXRQb3MpKSwgY3VycmVudFBvcyAhPT0gdGFyZ2V0UG9zICYmIChjYXJldChpbnB1dCwgdGFyZ2V0UG9zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGlucHV0LCBmcm9udFBhcnQsIGJhY2tQYXJ0KSwgITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICQoaW5wdXQpLnRyaWdnZXIoXCJjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCB2YWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xyXG4gICAgICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgJiYgKHZhbHVlID0gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlLCBvcHRzKSB8fCB2YWx1ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCJcIiksIGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIGlzUlRMID8gdmFsdWUucmV2ZXJzZSgpIDogdmFsdWUpLCBcclxuICAgICAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBvcHRzLmNsZWFySW5jb21wbGV0ZSkgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgKCFvcHRzLnNob3dNYXNrT25Ib3ZlciB8fCBvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiBcIlwiID09PSBucHRWYWx1ZSkgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSA/IHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpIDogITEgPT09IG1vdXNlRW50ZXIgJiYgY2FyZXQoaW5wdXQsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPblRhYiAmJiAhMSA9PT0gbW91c2VFbnRlciAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAod3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuYXBwbHkoaW5wdXQsIFsgZSwgITAgXSkpLCB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1vdXNlbGVhdmVFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlRW50ZXIgPSAhMSwgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKSwgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wdFZhbHVlICE9PSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAoLTEgPT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgJiYgbnB0VmFsdWUgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdGFiYmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9SYWRpeEZvY3VzKGNsaWNrUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodnBzW2NsaWNrUG9zXSA9PT0gdW5kZWZpbmVkIHx8IHZwc1tjbGlja1Bvc10uaW5wdXQgPT09IGdldFBsYWNlaG9sZGVyKGNsaWNrUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1BvcyA8IHNlZWtOZXh0KC0xKSkgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIGdldEJ1ZmZlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZwIGluIHZwcykgaWYgKHJhZGl4UG9zIDwgdnAgJiYgdnBzW3ZwXS5pbnB1dCAhPT0gZ2V0UGxhY2Vob2xkZXIodnApKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkQ2FyZXQgPSBjYXJldChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiYmVkICYmIChpc1JUTCA/IHNlbGVjdGVkQ2FyZXQuZW5kID0gc2VsZWN0ZWRDYXJldC5iZWdpbiA6IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWxlY3RlZENhcmV0LmVuZCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHN3aXRjaCAob3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJhZGl4Rm9jdXNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9SYWRpeEZvY3VzKHNlbGVjdGVkQ2FyZXQuYmVnaW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikuaW5kZXhPZihvcHRzLnJhZGl4UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgb3B0cy5udW1lcmljSW5wdXQgPyBzZWVrTmV4dChyYWRpeFBvcykgOiByYWRpeFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWNrUG9zaXRpb24gPSBzZWxlY3RlZENhcmV0LmJlZ2luLCBsdmNsaWNrUG9zaXRpb24gPSBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbGlja1Bvc2l0aW9uLCAhMCksIGxhc3RQb3NpdGlvbiA9IHNlZWtOZXh0KGx2Y2xpY2tQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrUG9zaXRpb24gPCBsYXN0UG9zaXRpb24pIGNhcmV0KGlucHV0LCBpc01hc2soY2xpY2tQb3NpdGlvbiwgITApIHx8IGlzTWFzayhjbGlja1Bvc2l0aW9uIC0gMSwgITApID8gY2xpY2tQb3NpdGlvbiA6IHNlZWtOZXh0KGNsaWNrUG9zaXRpb24pKTsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsdnAgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZjbGlja1Bvc2l0aW9uXSwgdHQgPSBnZXRUZXN0VGVtcGxhdGUobGFzdFBvc2l0aW9uLCBsdnAgPyBsdnAubWF0Y2gubG9jYXRvciA6IHVuZGVmaW5lZCwgbHZwKSwgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYXN0UG9zaXRpb24sIHR0Lm1hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IHBsYWNlaG9sZGVyICYmIGdldEJ1ZmZlcigpW2xhc3RQb3NpdGlvbl0gIT09IHBsYWNlaG9sZGVyICYmICEwICE9PSB0dC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgITAgIT09IHR0Lm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFpc01hc2sobGFzdFBvc2l0aW9uLCAhMCkgJiYgdHQubWF0Y2guZGVmID09PSBwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1BvcyA9IHNlZWtOZXh0KGxhc3RQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2tQb3NpdGlvbiA+PSBuZXdQb3MgfHwgY2xpY2tQb3NpdGlvbiA9PT0gbGFzdFBvc2l0aW9uKSAmJiAobGFzdFBvc2l0aW9uID0gbmV3UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgbGFzdFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYmxjbGlja0V2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgMCwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGN1dEV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIHBvcyA9IGNhcmV0KGlucHV0KSwgZXYgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZSwgY2xpcGJvYXJkRGF0YSA9IHdpbmRvdy5jbGlwYm9hcmREYXRhIHx8IGV2LmNsaXBib2FyZERhdGEsIGNsaXBEYXRhID0gaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZShwb3MuZW5kLCBwb3MuYmVnaW4pIDogZ2V0QnVmZmVyKCkuc2xpY2UocG9zLmJlZ2luLCBwb3MuZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmREYXRhLnNldERhdGEoXCJ0ZXh0XCIsIGlzUlRMID8gY2xpcERhdGEucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBjbGlwRGF0YS5qb2luKFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQgJiYgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpLCBoYW5kbGVSZW1vdmUoaW5wdXQsIElucHV0bWFzay5rZXlDb2RlLkRFTEVURSwgcG9zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBnZXRNYXNrU2V0KCkucCwgZSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgJGlucHV0LnRyaWdnZXIoXCJjbGVhcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJsdXJFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLCBpbnB1dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmlucHV0bWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG5wdFZhbHVlICYmIChvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmICgtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSAmJiBucHRWYWx1ZSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpID8gYnVmZmVyID0gW10gOiBjbGVhck9wdGlvbmFsVGFpbChidWZmZXIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICExID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgKHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImluY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApLCBvcHRzLmNsZWFySW5jb21wbGV0ZSAmJiAocmVzZXRNYXNrU2V0KCksIGJ1ZmZlciA9IG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyBbXSA6IGdldEJ1ZmZlclRlbXBsYXRlKCkuc2xpY2UoKSkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlciwgdW5kZWZpbmVkLCBlKSksIHVuZG9WYWx1ZSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiAodW5kb1ZhbHVlID0gYnVmZmVyLmpvaW4oXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1vdXNlZW50ZXJFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlciA9ICEwLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dCAmJiBvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiAkZWwudHJpZ2dlcihcImNoYW5nZVwiKSwgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiAtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSAmJiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0ICYmIGVsLmlucHV0bWFzay5fdmFsdWVHZXQoKSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpICYmIGVsLmlucHV0bWFzay5fdmFsdWVTZXQoXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMucmVtb3ZlTWFza09uU3VibWl0ICYmIChlbC5pbnB1dG1hc2suX3ZhbHVlU2V0KGVsLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCksICEwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoZWwsIGdldEJ1ZmZlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzZXRFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMCwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgSW5wdXRtYXNrLnByb3RvdHlwZS5wb3NpdGlvbkNvbG9yTWFzayA9IGZ1bmN0aW9uKGlucHV0LCB0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc3R5bGUubGVmdCA9IHRlbXBsYXRlLm9mZnNldExlZnQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZUJ1ZmZlcjtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbk9iaiAhPT0gdW5kZWZpbmVkKSBzd2l0Y2ggKGFjdGlvbk9iai5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICBjYXNlIFwiaXNDb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsID0gYWN0aW9uT2JqLmVsLCBpc0NvbXBsZXRlKGdldEJ1ZmZlcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcInVubWFza2VkdmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbCAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZSwgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUJ1ZmZlciA9ICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlQnVmZmVyLCBvcHRzKSB8fCB2YWx1ZUJ1ZmZlciA6IHZhbHVlQnVmZmVyKS5zcGxpdChcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICBjaGVja1ZhbCh1bmRlZmluZWQsICExLCAhMSwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlciksICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlV3JpdGUpICYmIG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCBnZXRCdWZmZXIoKSwgMCwgb3B0cykpLCBcclxuICAgICAgICAgICAgICAgIHVubWFza2VkdmFsdWUoZWwpO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwibWFza1wiOlxyXG4gICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9mZihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbihpbnB1dCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFR5cGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLCBpc1N1cHBvcnRlZCA9IFwiSU5QVVRcIiA9PT0gaW5wdXQudGFnTmFtZSAmJiAtMSAhPT0gJC5pbkFycmF5KGVsZW1lbnRUeXBlLCBvcHRzLnN1cHBvcnRzSW5wdXRUeXBlKSB8fCBpbnB1dC5pc0NvbnRlbnRFZGl0YWJsZSB8fCBcIlRFWFRBUkVBXCIgPT09IGlucHV0LnRhZ05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTdXBwb3J0ZWQpIGlmIChcIklOUFVUXCIgPT09IGlucHV0LnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgZWxlbWVudFR5cGUpLCBpc1N1cHBvcnRlZCA9IFwidGV4dFwiID09PSBlbC50eXBlLCBlbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpc1N1cHBvcnRlZCA9IFwicGFydGlhbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgIT09IGlzU3VwcG9ydGVkID8gZnVuY3Rpb24obnB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXR0ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRtYXNrID8gdGhpcy5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrID8gdGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpIDogLTEgIT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgfHwgITAgIT09IG9wdHMubnVsbGFibGUgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzICYmIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyAoaXNSVEwgPyBjbGVhck9wdGlvbmFsVGFpbChnZXRCdWZmZXIoKS5zbGljZSgpKS5yZXZlcnNlKCkgOiBjbGVhck9wdGlvbmFsVGFpbChnZXRCdWZmZXIoKS5zbGljZSgpKSkuam9pbihcIlwiKSA6IHZhbHVlR2V0LmNhbGwodGhpcykgOiBcIlwiIDogdmFsdWVHZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcywgdmFsdWUpLCB0aGlzLmlucHV0bWFzayAmJiAkKHRoaXMpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZUdldCwgdmFsdWVTZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5wdC5pbnB1dG1hc2suX192YWx1ZUdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5ub1ZhbHVlUGF0Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBcIm9iamVjdFwiID09PSBfdHlwZW9mKFwidGVzdFwiLl9fcHJvdG9fXykgPyBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0Ll9fcHJvdG9fXztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcGVydHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihucHQpLCBcInZhbHVlXCIpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eSAmJiB2YWx1ZVByb3BlcnR5LmdldCAmJiB2YWx1ZVByb3BlcnR5LnNldCA/ICh2YWx1ZUdldCA9IHZhbHVlUHJvcGVydHkuZ2V0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0ID0gdmFsdWVQcm9wZXJ0eS5zZXQsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogc2V0dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSA6IFwiSU5QVVRcIiAhPT0gbnB0LnRhZ05hbWUgJiYgKHZhbHVlR2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5wdCwgXCJ2YWx1ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZG9jdW1lbnQuX19sb29rdXBHZXR0ZXJfXyAmJiBucHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpICYmICh2YWx1ZUdldCA9IG5wdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldCA9IG5wdC5fX2xvb2t1cFNldHRlcl9fKFwidmFsdWVcIiksIG5wdC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgZ2V0dGVyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgc2V0dGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5pbnB1dG1hc2suX192YWx1ZUdldCA9IHZhbHVlR2V0LCBucHQuaW5wdXRtYXNrLl9fdmFsdWVTZXQgPSB2YWx1ZVNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0LmlucHV0bWFzay5fdmFsdWVHZXQgPSBmdW5jdGlvbihvdmVycnVsZVJUTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNSVEwgJiYgITAgIT09IG92ZXJydWxlUlRMID8gdmFsdWVHZXQuY2FsbCh0aGlzLmVsKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHZhbHVlR2V0LmNhbGwodGhpcy5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnB0LmlucHV0bWFzay5fdmFsdWVTZXQgPSBmdW5jdGlvbih2YWx1ZSwgb3ZlcnJ1bGVSVEwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQuY2FsbCh0aGlzLmVsLCBudWxsID09PSB2YWx1ZSB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6ICEwICE9PSBvdmVycnVsZVJUTCAmJiBpc1JUTCA/IHZhbHVlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlR2V0ID09PSB1bmRlZmluZWQgJiYgKHZhbHVlR2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlU2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQudmFsSG9va3MgJiYgKCQudmFsSG9va3NbdHlwZV0gPT09IHVuZGVmaW5lZCB8fCAhMCAhPT0gJC52YWxIb29rc1t0eXBlXS5pbnB1dG1hc2twYXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxob29rR2V0ID0gJC52YWxIb29rc1t0eXBlXSAmJiAkLnZhbEhvb2tzW3R5cGVdLmdldCA/ICQudmFsSG9va3NbdHlwZV0uZ2V0IDogZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsaG9va1NldCA9ICQudmFsSG9va3NbdHlwZV0gJiYgJC52YWxIb29rc1t0eXBlXS5zZXQgPyAkLnZhbEhvb2tzW3R5cGVdLnNldCA6IGZ1bmN0aW9uKGVsZW0sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udmFsdWUgPSB2YWx1ZSwgZWxlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnZhbEhvb2tzW3R5cGVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pbnB1dG1hc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2spIHJldHVybiBlbGVtLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsaG9va0dldChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCB1bmRlZmluZWQsIGVsZW0uaW5wdXRtYXNrLm1hc2tzZXQudmFsaWRQb3NpdGlvbnMpIHx8ICEwICE9PSBvcHRzLm51bGxhYmxlID8gcmVzdWx0IDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaG9va0dldChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCwgJGVsZW0gPSAkKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gdmFsaG9va1NldChlbGVtLCB2YWx1ZSksIGVsZW0uaW5wdXRtYXNrICYmICRlbGVtLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFza3BhdGNoOiAhMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obnB0LnR5cGUpLCBmdW5jdGlvbihucHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihucHQsIFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG5wdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KGlucHV0KSA6IGlucHV0LmlucHV0bWFzayA9IHVuZGVmaW5lZCwgaXNTdXBwb3J0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfShlbGVtLCBvcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IGlzU3VwcG9ydGVkICYmIChlbCA9IGVsZW0sICRlbCA9ICQoZWwpLCBtYXhMZW5ndGggPSBlbCAhPT0gdW5kZWZpbmVkID8gZWwubWF4TGVuZ3RoIDogdW5kZWZpbmVkLCBcclxuICAgICAgICAgICAgICAgICAgICAtMSA9PT0gbWF4TGVuZ3RoICYmIChtYXhMZW5ndGggPSB1bmRlZmluZWQpLCAhMCA9PT0gb3B0cy5jb2xvck1hc2sgJiYgaW5pdGlhbGl6ZUNvbG9yTWFzayhlbCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZHJvaWQgJiYgKGVsLmhhc093blByb3BlcnR5KFwiaW5wdXRtb2RlXCIpICYmIChlbC5pbnB1dG1vZGUgPSBvcHRzLmlucHV0bW9kZSwgZWwuc2V0QXR0cmlidXRlKFwiaW5wdXRtb2RlXCIsIG9wdHMuaW5wdXRtb2RlKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwicnRmbVwiID09PSBvcHRzLmFuZHJvaWRIYWNrICYmICghMCAhPT0gb3B0cy5jb2xvck1hc2sgJiYgaW5pdGlhbGl6ZUNvbG9yTWFzayhlbCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPSBcInBhc3N3b3JkXCIpKSwgITAgPT09IGlzU3VwcG9ydGVkICYmIChFdmVudFJ1bGVyLm9uKGVsLCBcInN1Ym1pdFwiLCBFdmVudEhhbmRsZXJzLnN1Ym1pdEV2ZW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJyZXNldFwiLCBFdmVudEhhbmRsZXJzLnJlc2V0RXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcIm1vdXNlZW50ZXJcIiwgRXZlbnRIYW5kbGVycy5tb3VzZWVudGVyRXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImJsdXJcIiwgRXZlbnRIYW5kbGVycy5ibHVyRXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImZvY3VzXCIsIEV2ZW50SGFuZGxlcnMuZm9jdXNFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwibW91c2VsZWF2ZVwiLCBFdmVudEhhbmRsZXJzLm1vdXNlbGVhdmVFdmVudCksICEwICE9PSBvcHRzLmNvbG9yTWFzayAmJiBFdmVudFJ1bGVyLm9uKGVsLCBcImNsaWNrXCIsIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiZGJsY2xpY2tcIiwgRXZlbnRIYW5kbGVycy5kYmxjbGlja0V2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJwYXN0ZVwiLCBFdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImRyYWdkcm9wXCIsIEV2ZW50SGFuZGxlcnMucGFzdGVFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwiZHJvcFwiLCBFdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImN1dFwiLCBFdmVudEhhbmRsZXJzLmN1dEV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wbGV0ZVwiLCBvcHRzLm9uY29tcGxldGUpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImluY29tcGxldGVcIiwgb3B0cy5vbmluY29tcGxldGUpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNsZWFyZWRcIiwgb3B0cy5vbmNsZWFyZWQpLCBcclxuICAgICAgICAgICAgICAgICAgICBhbmRyb2lkIHx8ICEwID09PSBvcHRzLmlucHV0RXZlbnRPbmx5ID8gZWwucmVtb3ZlQXR0cmlidXRlKFwibWF4TGVuZ3RoXCIpIDogKEV2ZW50UnVsZXIub24oZWwsIFwia2V5ZG93blwiLCBFdmVudEhhbmRsZXJzLmtleWRvd25FdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwia2V5cHJlc3NcIiwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50KSksIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcG9zaXRpb25zdGFydFwiLCAkLm5vb3ApLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9udXBkYXRlXCIsICQubm9vcCksIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcG9zaXRpb25lbmRcIiwgJC5ub29wKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJrZXl1cFwiLCAkLm5vb3ApLCBFdmVudFJ1bGVyLm9uKGVsLCBcImlucHV0XCIsIEV2ZW50SGFuZGxlcnMuaW5wdXRGYWxsQmFja0V2ZW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJiZWZvcmVpbnB1dFwiLCAkLm5vb3ApKSwgRXZlbnRSdWxlci5vbihlbCwgXCJzZXR2YWx1ZVwiLCBFdmVudEhhbmRsZXJzLnNldFZhbHVlRXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIiksIFwiXCIgIT09IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApIHx8ICExID09PSBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbFZhbHVlID0gJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVNYXNrKSA/IG9wdHMub25CZWZvcmVNYXNrLmNhbGwoaW5wdXRtYXNrLCBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSwgb3B0cykgfHwgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkgOiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gaW5pdGlhbFZhbHVlICYmIGNoZWNrVmFsKGVsLCAhMCwgITEsIGlzUlRMID8gaW5pdGlhbFZhbHVlLnNwbGl0KFwiXCIpLnJldmVyc2UoKSA6IGluaXRpYWxWYWx1ZS5zcGxpdChcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKS5zbGljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKSwgITEgPT09IGlzQ29tcGxldGUoYnVmZmVyKSAmJiBvcHRzLmNsZWFySW5jb21wbGV0ZSAmJiByZXNldE1hc2tTZXQoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWwgJiYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpID8gYnVmZmVyID0gW10gOiBjbGVhck9wdGlvbmFsVGFpbChidWZmZXIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGVsLCBidWZmZXIpLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCAmJiBjYXJldChlbCwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0oZWwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJmb3JtYXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZUJ1ZmZlciA9ICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIGFjdGlvbk9iai52YWx1ZSwgb3B0cykgfHwgYWN0aW9uT2JqLnZhbHVlIDogYWN0aW9uT2JqLnZhbHVlKS5zcGxpdChcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICBjaGVja1ZhbCh1bmRlZmluZWQsICEwLCAhMSwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlciksIGFjdGlvbk9iai5tZXRhZGF0YSA/IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogZ2V0QnVmZmVyKCkuam9pbihcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWFza1Njb3BlLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0bWV0YWRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG1hc2tzZXQsIG9wdHMpXHJcbiAgICAgICAgICAgICAgICB9IDogaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImlzVmFsaWRcIjpcclxuICAgICAgICAgICAgICAgIGFjdGlvbk9iai52YWx1ZSA/ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZS5zcGxpdChcIlwiKSwgY2hlY2tWYWwodW5kZWZpbmVkLCAhMCwgITAsIGlzUlRMID8gdmFsdWVCdWZmZXIucmV2ZXJzZSgpIDogdmFsdWVCdWZmZXIpKSA6IGFjdGlvbk9iai52YWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKSwgcmwgPSBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbigpLCBsbWliID0gYnVmZmVyLmxlbmd0aCAtIDE7IGxtaWIgPiBybCAmJiAhaXNNYXNrKGxtaWIpOyBsbWliLS0pIDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsLCBsbWliICsgMSAtIHJsKSwgaXNDb21wbGV0ZShidWZmZXIpICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImdldGVtcHR5bWFza1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGVsICYmIGVsLmlucHV0bWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbCA9ICQoZWwpLCBlbC5pbnB1dG1hc2suX3ZhbHVlU2V0KG9wdHMuYXV0b1VubWFzayA/IHVubWFza2VkdmFsdWUoZWwpIDogZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9mZihlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihlbCksIFwidmFsdWVcIikgJiYgZWwuaW5wdXRtYXNrLl9fdmFsdWVHZXQgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCBcInZhbHVlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBlbC5pbnB1dG1hc2suX192YWx1ZVNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDogZG9jdW1lbnQuX19sb29rdXBHZXR0ZXJfXyAmJiBlbC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgZWwuaW5wdXRtYXNrLl9fdmFsdWVHZXQgJiYgKGVsLl9fZGVmaW5lR2V0dGVyX18oXCJ2YWx1ZVwiLCBlbC5pbnB1dG1hc2suX192YWx1ZUdldCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLl9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCBlbC5pbnB1dG1hc2suX192YWx1ZVNldCkpLCBlbC5pbnB1dG1hc2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJnZXRtZXRhZGF0YVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNBcnJheShtYXNrc2V0Lm1ldGFkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrVGFyZ2V0ID0gZ2V0TWFza1RlbXBsYXRlKCEwLCAwLCAhMSkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG1hc2tzZXQubWV0YWRhdGEsIGZ1bmN0aW9uKG5keCwgbXRkdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXRkdC5tYXNrID09PSBtYXNrVGFyZ2V0KSByZXR1cm4gbWFza1RhcmdldCA9IG10ZHQsICExO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLCBtYXNrVGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgbW9iaWxlID0gL21vYmlsZS9pLnRlc3QodWEpLCBpZW1vYmlsZSA9IC9pZW1vYmlsZS9pLnRlc3QodWEpLCBpcGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSkgJiYgIWllbW9iaWxlLCBhbmRyb2lkID0gL2FuZHJvaWQvaS50ZXN0KHVhKSAmJiAhaWVtb2JpbGU7XHJcbiAgICAgICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcclxuICAgICAgICAgICAgZGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiW1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJdXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwie1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJ9XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncm91cG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIihcIixcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiKVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXHJcbiAgICAgICAgICAgICAgICBlc2NhcGVDaGFyOiBcIlxcXFxcIixcclxuICAgICAgICAgICAgICAgIG1hc2s6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWdleDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9uY29tcGxldGU6ICQubm9vcCxcclxuICAgICAgICAgICAgICAgIG9uaW5jb21wbGV0ZTogJC5ub29wLFxyXG4gICAgICAgICAgICAgICAgb25jbGVhcmVkOiAkLm5vb3AsXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IDAsXHJcbiAgICAgICAgICAgICAgICBncmVlZHk6ICEwLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVNYXNrT25TdWJtaXQ6ICExLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6ICEwLFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXHJcbiAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246ICQubm9vcCxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIHBhc3RlZFZhbHVlLCBvcHRzKSA6IHBhc3RlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvblVuTWFzazogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNob3dNYXNrT25Gb2N1czogITAsXHJcbiAgICAgICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxyXG4gICAgICAgICAgICAgICAgb25LZXlWYWxpZGF0aW9uOiAkLm5vb3AsXHJcbiAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIiBcIixcclxuICAgICAgICAgICAgICAgIG51bWVyaWNJbnB1dDogITEsXHJcbiAgICAgICAgICAgICAgICByaWdodEFsaWduOiAhMSxcclxuICAgICAgICAgICAgICAgIHVuZG9PbkVzY2FwZTogITAsXHJcbiAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmFkaXhQb2ludERlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXHJcbiAgICAgICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInBhc3N3b3JkXCIgXSxcclxuICAgICAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgOCwgOSwgMTMsIDE5LCAyNywgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgNDYsIDkzLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgMTIzLCAwLCAyMjkgXSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYW5DbGVhclBvc2l0aW9uOiAkLm5vb3AsXHJcbiAgICAgICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdGF0aWNEZWZpbml0aW9uU3ltYm9sOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMSxcclxuICAgICAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgIGlucHV0RXZlbnRPbmx5OiAhMSxcclxuICAgICAgICAgICAgICAgIG5vVmFsdWVQYXRjaGluZzogITEsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcclxuICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJ2ZXJiYXRpbVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3JNYXNrOiAhMSxcclxuICAgICAgICAgICAgICAgIGFuZHJvaWRIYWNrOiAhMSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgXCI5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOV1cIixcclxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcclxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiKlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWxpYXNlczoge30sXHJcbiAgICAgICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxyXG4gICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlbGVtcykge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0QXR0cmlidXRlT3B0aW9ucyhucHQsIG9wdHMsIHVzZXJPcHRpb25zLCBkYXRhQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBvcHRzLmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24sIGRhdGFvcHRpb25zLCBvcHRpb25EYXRhLCBwLCBpbXBvcnRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24sIG9wdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IChvcHRpb25EYXRhID0gb3B0aW9uRGF0YSAhPT0gdW5kZWZpbmVkID8gb3B0aW9uRGF0YSA6IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSArIFwiLVwiICsgb3B0aW9uKSkgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG9wdGlvbkRhdGEgJiYgKDAgPT09IG9wdGlvbi5pbmRleE9mKFwib25cIikgPyBvcHRpb25EYXRhID0gd2luZG93W29wdGlvbkRhdGFdIDogXCJmYWxzZVwiID09PSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YSA9ICExIDogXCJ0cnVlXCIgPT09IG9wdGlvbkRhdGEgJiYgKG9wdGlvbkRhdGEgPSAhMCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJPcHRpb25zW29wdGlvbl0gPSBvcHRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgYXR0ck9wdGlvbnMgPSBucHQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ck9wdGlvbnMgJiYgXCJcIiAhPT0gYXR0ck9wdGlvbnMgJiYgKGF0dHJPcHRpb25zID0gYXR0ck9wdGlvbnMucmVwbGFjZShuZXcgUmVnRXhwKFwiJ1wiLCBcImdcIiksICdcIicpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YW9wdGlvbnMgPSBKU09OLnBhcnNlKFwie1wiICsgYXR0ck9wdGlvbnMgKyBcIn1cIikpLCBkYXRhb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBkYXRhb3B0aW9ucykgaWYgKFwiYWxpYXNcIiA9PT0gcC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE9wdGlvbihcImFsaWFzXCIsIG9wdGlvbkRhdGEpLCB1c2VyT3B0aW9ucy5hbGlhcyAmJiByZXNvbHZlQWxpYXModXNlck9wdGlvbnMuYWxpYXMsIHVzZXJPcHRpb25zLCBvcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChvcHRpb24gaW4gb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgaW4gZGF0YW9wdGlvbnMpIGlmIChwLnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkRhdGEgPSBkYXRhb3B0aW9uc1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKCEwLCBvcHRzLCB1c2VyT3B0aW9ucyksIChcInJ0bFwiID09PSBucHQuZGlyIHx8IG9wdHMucmlnaHRBbGlnbikgJiYgKG5wdC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAoXCJydGxcIiA9PT0gbnB0LmRpciB8fCBvcHRzLm51bWVyaWNJbnB1dCkgJiYgKG5wdC5kaXIgPSBcImx0clwiLCBucHQucmVtb3ZlQXR0cmlidXRlKFwiZGlyXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmlzUlRMID0gITApLCBvcHRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGVsZW1zICYmIChlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1zKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKSksIFxyXG4gICAgICAgICAgICAgICAgZWxlbXMgPSBlbGVtcy5ub2RlTmFtZSA/IFsgZWxlbXMgXSA6IGVsZW1zLCAkLmVhY2goZWxlbXMsIGZ1bmN0aW9uKG5keCwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NvcGVkT3B0cyA9ICQuZXh0ZW5kKCEwLCB7fSwgdGhhdC5vcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRBdHRyaWJ1dGVPcHRpb25zKGVsLCBzY29wZWRPcHRzLCAkLmV4dGVuZCghMCwge30sIHRoYXQudXNlck9wdGlvbnMpLCB0aGF0LmRhdGFBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrc2V0ID0gZ2VuZXJhdGVNYXNrU2V0KHNjb3BlZE9wdHMsIHRoYXQubm9NYXNrc0NhY2hlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrc2V0ICE9PSB1bmRlZmluZWQgJiYgKGVsLmlucHV0bWFzayAhPT0gdW5kZWZpbmVkICYmIGVsLmlucHV0bWFzay5yZW1vdmUoKSwgZWwuaW5wdXRtYXNrID0gbmV3IElucHV0bWFzayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgITApLCBcclxuICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cyA9IHNjb3BlZE9wdHMsIGVsLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0aGF0Lm5vTWFza3NDYWNoZSwgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dCwgZWwuaW5wdXRtYXNrLmVsID0gZWwsIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5tYXNrc2V0ID0gbWFza3NldCwgJC5kYXRhKGVsLCBcIl9pbnB1dG1hc2tfb3B0c1wiLCBzY29wZWRPcHRzKSwgbWFza1Njb3BlLmNhbGwoZWwuaW5wdXRtYXNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtYXNrXCJcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9KSwgZWxlbXMgJiYgZWxlbXNbMF0gPyBlbGVtc1swXS5pbnB1dG1hc2sgfHwgdGhpcyA6IHRoaXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24ob3B0aW9ucywgbm9yZW1hc2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25zID8gdGhpcy5vcHRzW29wdGlvbnNdIDogXCJvYmplY3RcIiA9PT0gKHZvaWQgMCA9PT0gb3B0aW9ucyA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9wdGlvbnMpKSA/ICgkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSBub3JlbWFzayAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxyXG4gICAgICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1bm1hc2tlZHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0ZW1wdHltYXNrXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNDb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxyXG4gICAgICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNWYWxpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8IGdlbmVyYXRlTWFza1NldCh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXHJcbiAgICAgICAgICAgICAgICBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImZvcm1hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmFseXNlTWFzazogZnVuY3Rpb24obWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXNrVG9rZW4oaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgITEsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDFcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogbXRva2VuLm1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdleE1hc2spIDAgPT09IGVsZW1lbnQuaW5kZXhPZihcIltcIikgfHwgZXNjYXBlZCB8fCBcIi5cIiA9PT0gZWxlbWVudCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKGVsZW1lbnQsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KSA6ICQuZWFjaChlbGVtZW50LnNwbGl0KFwiXCIpLCBmdW5jdGlvbihuZHgsIGxtbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXSwgbXRva2VuLm1hdGNoZXMuc3BsaWNlKHBvc2l0aW9uKyssIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogbXRva2VuLmlzT3B0aW9uYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gbG1udCAmJiBudWxsICE9PSBwcmV2TWF0Y2guZm4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBsbW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCAhPT0gdW5kZWZpbmVkID8gbG1udCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogbG1udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KSwgZXNjYXBlZCA9ICExOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tkZWYgPSAob3B0cy5kZWZpbml0aW9ucyA/IG9wdHMuZGVmaW5pdGlvbnNbZWxlbWVudF0gOiB1bmRlZmluZWQpIHx8IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZGVmICYmICFlc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmV2YWxpZGF0b3JzID0gbWFza2RlZi5wcmV2YWxpZGF0b3IsIHByZXZhbGlkYXRvcnNMID0gcHJldmFsaWRhdG9ycyA/IHByZXZhbGlkYXRvcnMubGVuZ3RoIDogMCwgaSA9IDE7IGkgPCBtYXNrZGVmLmNhcmRpbmFsaXR5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmFsaWRhdG9yID0gcHJldmFsaWRhdG9yc0wgPj0gaSA/IHByZXZhbGlkYXRvcnNbaSAtIDFdIDogW10sIHZhbGlkYXRvciA9IHByZXZhbGlkYXRvci52YWxpZGF0b3IsIGNhcmRpbmFsaXR5ID0gcHJldmFsaWRhdG9yLmNhcmRpbmFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiB2YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiB2YWxpZGF0b3IgPyBuZXcgUmVnRXhwKHZhbGlkYXRvciwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkgOiBuZXcgUmVnRXhwKFwiLlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IGNhcmRpbmFsaXR5IHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IChtYXNrZGVmLmRlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXNrZGVmLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbWFza2RlZi52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IG1hc2tkZWYudmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiBtYXNrZGVmLmNhcmRpbmFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG1hc2tkZWYuY2FzaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IG10b2tlbi5pc09wdGlvbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgbnVsbCAhPT0gcHJldk1hdGNoLmZuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGVzY2FwZWQgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgJC5lYWNoKG1hc2tUb2tlbi5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IG5leHRUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQsIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyLmVuZCkpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXNlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRPcGVuaW5nVG9rZW4sIG0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKSkgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRUb2tlbiwgbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzID0gbWFza1Rva2VuLm1hdGNoZXMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG1hdGNoIGluIG1hc2tUb2tlbi5tYXRjaGVzKSBpZiAobWFza1Rva2VuLm1hdGNoZXMuaGFzT3duUHJvcGVydHkobWF0Y2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnRNYXRjaCA9IHBhcnNlSW50KG1hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXS5pc1F1YW50aWZpZXIgJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXSAmJiBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdLmlzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdCA9IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShtYXRjaCwgMSksIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShpbnRNYXRjaCArIDEsIDAsIHF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkID8gbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0pIDogbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gZnVuY3Rpb24oc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPyBzdCA9IG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5ncm91cG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5lbmQgJiYgKHN0ID0gb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0obWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tUb2tlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCwgbSwgb3BlbmluZ1Rva2VuLCBjdXJyZW50T3BlbmluZ1Rva2VuLCBhbHRlcm5hdG9yLCBsYXN0TWF0Y2gsIGdyb3VwVG9rZW4sIHRva2VuaXplciA9IC8oPzpbPyorXXxcXHtbMC05XFwrXFwqXSsoPzosWzAtOVxcK1xcKl0qKT9cXH0pfFteLj8qK14ke1tdKCl8XFxcXF0rfC4vZywgcmVnZXhUb2tlbml6ZXIgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBlc2NhcGVkID0gITEsIGN1cnJlbnRUb2tlbiA9IG5ldyBNYXNrVG9rZW4oKSwgb3BlbmVuaW5ncyA9IFtdLCBtYXNrVG9rZW5zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHJlZ2V4TWFzayAmJiAob3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9IHVuZGVmaW5lZCwgb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPSB1bmRlZmluZWQpOyBtYXRjaCA9IHJlZ2V4TWFzayA/IHJlZ2V4VG9rZW5pemVyLmV4ZWMobWFzaykgOiB0b2tlbml6ZXIuZXhlYyhtYXNrKTsgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0gPSBtYXRjaFswXSwgcmVnZXhNYXNrICYmICEwICE9PSBlc2NhcGVkKSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gXCJ7MCwxfVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIipcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IFwie1wiICsgbSArIFwifVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNjYXBlZCkgZGVmYXVsdENhc2UoKTsgZWxzZSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuZXNjYXBlQ2hhcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9ICEwLCByZWdleE1hc2sgJiYgZGVmYXVsdENhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLmVuZDpcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5ncm91cG1hcmtlci5lbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpLCBvcGVuaW5nVG9rZW4ub3Blbkdyb3VwID0gITEsIG9wZW5pbmdUb2tlbiAhPT0gdW5kZWZpbmVkKSBpZiAob3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLmlzQWx0ZXJuYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG1uZHggPSAwOyBtbmR4IDwgYWx0ZXJuYXRvci5tYXRjaGVzLmxlbmd0aDsgbW5keCsrKSBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uaXNHcm91cCA9ICExLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uYWx0ZXJuYXRvckdyb3VwID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5sZW5ndGggPiAwID8gKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpKSA6IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG9wZW5pbmdUb2tlbik7IGVsc2UgZGVmYXVsdENhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMSwgITApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIG9wdHMucXVhbnRpZmllcm1hcmtlci5zdGFydDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHF1YW50aWZpZXIgPSBuZXcgTWFza1Rva2VuKCExLCAhMSwgITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gbS5yZXBsYWNlKC9be31dL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXEgPSBtLnNwbGl0KFwiLFwiKSwgbXEwID0gaXNOYU4obXFbMF0pID8gbXFbMF0gOiBwYXJzZUludChtcVswXSksIG1xMSA9IDEgPT09IG1xLmxlbmd0aCA/IG1xMCA6IGlzTmFOKG1xWzFdKSA/IG1xWzFdIDogcGFyc2VJbnQobXFbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIqXCIgIT09IG1xMSAmJiBcIitcIiAhPT0gbXExIHx8IChtcTAgPSBcIipcIiA9PT0gbXExID8gMCA6IDEpLCBxdWFudGlmaWVyLnF1YW50aWZpZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG1xMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbXExXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0ubWF0Y2hlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbWF0Y2hlcy5wb3AoKSwgbWF0Y2guaXNHcm91cCB8fCAoZ3JvdXBUb2tlbiA9IG5ldyBNYXNrVG9rZW4oITApLCBncm91cFRva2VuLm1hdGNoZXMucHVzaChtYXRjaCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBncm91cFRva2VuKSwgbWF0Y2hlcy5wdXNoKG1hdGNoKSwgbWF0Y2hlcy5wdXNoKHF1YW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbWF0Y2ggPSBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wb3AoKSwgbWF0Y2guaXNHcm91cCB8fCAocmVnZXhNYXNrICYmIG51bGwgPT09IG1hdGNoLmZuICYmIFwiLlwiID09PSBtYXRjaC5kZWYgJiYgKG1hdGNoLmZuID0gbmV3IFJlZ0V4cChtYXRjaC5kZWYsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFRva2VuID0gbmV3IE1hc2tUb2tlbighMCksIGdyb3VwVG9rZW4ubWF0Y2hlcy5wdXNoKG1hdGNoKSwgbWF0Y2ggPSBncm91cFRva2VuKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKHF1YW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuYWx0ZXJuYXRvcm1hcmtlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJUb2tlbiA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlc1tjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2ggPSBjdXJyZW50T3BlbmluZ1Rva2VuLm9wZW5Hcm91cCAmJiAoc3ViVG9rZW4ubWF0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8ICExID09PSBzdWJUb2tlbi5pc0dyb3VwICYmICExID09PSBzdWJUb2tlbi5pc0FsdGVybmF0b3IpID8gb3BlbmVuaW5ncy5wb3AoKSA6IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGxhc3RNYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE1hdGNoLmlzQWx0ZXJuYXRvcikgb3BlbmVuaW5ncy5wdXNoKGxhc3RNYXRjaCk7IGVsc2UgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPyAoYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2guYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYWx0ZXJuYXRvciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMSwgITApLCBhbHRlcm5hdG9yLm1hdGNoZXMucHVzaChsYXN0TWF0Y2gpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3IpLCBsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2gub3Blbkdyb3VwID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbighMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yR3JvdXAuYWx0ZXJuYXRvckdyb3VwID0gITAsIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICg7b3BlbmVuaW5ncy5sZW5ndGggPiAwOyApIG9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3MucG9wKCksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5sZW5ndGggPiAwICYmICh2ZXJpZnlHcm91cE1hcmtlcihjdXJyZW50VG9rZW4pLCBtYXNrVG9rZW5zLnB1c2goY3VycmVudFRva2VuKSksIFxyXG4gICAgICAgICAgICAgICAgKG9wdHMubnVtZXJpY0lucHV0IHx8IG9wdHMuaXNSVEwpICYmIHJldmVyc2VUb2tlbnMobWFza1Rva2Vuc1swXSksIG1hc2tUb2tlbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBJbnB1dG1hc2suZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICQuZXh0ZW5kKCEwLCBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2suZXh0ZW5kRGVmaW5pdGlvbnMgPSBmdW5jdGlvbihkZWZpbml0aW9uKSB7XHJcbiAgICAgICAgICAgICQuZXh0ZW5kKCEwLCBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zLCBkZWZpbml0aW9uKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyA9IGZ1bmN0aW9uKGFsaWFzKSB7XHJcbiAgICAgICAgICAgICQuZXh0ZW5kKCEwLCBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXMsIGFsaWFzKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2suZm9ybWF0ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykuZm9ybWF0KHZhbHVlLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSwgSW5wdXRtYXNrLnVubWFzayA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykudW5tYXNrZWR2YWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSwgSW5wdXRtYXNrLmlzVmFsaWQgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLmlzVmFsaWQodmFsdWUpO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5yZW1vdmUgPSBmdW5jdGlvbihlbGVtcykge1xyXG4gICAgICAgICAgICAkLmVhY2goZWxlbXMsIGZ1bmN0aW9uKG5keCwgZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzayAmJiBlbC5pbnB1dG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5lc2NhcGVSZWdleCA9IGZ1bmN0aW9uKHN0cikge1xyXG4gICAgICAgICAgICB2YXIgc3BlY2lhbHMgPSBbIFwiL1wiLCBcIi5cIiwgXCIqXCIsIFwiK1wiLCBcIj9cIiwgXCJ8XCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCIsIFwiXFxcXFwiLCBcIiRcIiwgXCJeXCIgXTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXFxcXFwiICsgc3BlY2lhbHMuam9pbihcInxcXFxcXCIpICsgXCIpXCIsIFwiZ2ltXCIpLCBcIlxcXFwkMVwiKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2sua2V5Q29kZSA9IHtcclxuICAgICAgICAgICAgQUxUOiAxOCxcclxuICAgICAgICAgICAgQkFDS1NQQUNFOiA4LFxyXG4gICAgICAgICAgICBCQUNLU1BBQ0VfU0FGQVJJOiAxMjcsXHJcbiAgICAgICAgICAgIENBUFNfTE9DSzogMjAsXHJcbiAgICAgICAgICAgIENPTU1BOiAxODgsXHJcbiAgICAgICAgICAgIENPTU1BTkQ6IDkxLFxyXG4gICAgICAgICAgICBDT01NQU5EX0xFRlQ6IDkxLFxyXG4gICAgICAgICAgICBDT01NQU5EX1JJR0hUOiA5MyxcclxuICAgICAgICAgICAgQ09OVFJPTDogMTcsXHJcbiAgICAgICAgICAgIERFTEVURTogNDYsXHJcbiAgICAgICAgICAgIERPV046IDQwLFxyXG4gICAgICAgICAgICBFTkQ6IDM1LFxyXG4gICAgICAgICAgICBFTlRFUjogMTMsXHJcbiAgICAgICAgICAgIEVTQ0FQRTogMjcsXHJcbiAgICAgICAgICAgIEhPTUU6IDM2LFxyXG4gICAgICAgICAgICBJTlNFUlQ6IDQ1LFxyXG4gICAgICAgICAgICBMRUZUOiAzNyxcclxuICAgICAgICAgICAgTUVOVTogOTMsXHJcbiAgICAgICAgICAgIE5VTVBBRF9BREQ6IDEwNyxcclxuICAgICAgICAgICAgTlVNUEFEX0RFQ0lNQUw6IDExMCxcclxuICAgICAgICAgICAgTlVNUEFEX0RJVklERTogMTExLFxyXG4gICAgICAgICAgICBOVU1QQURfRU5URVI6IDEwOCxcclxuICAgICAgICAgICAgTlVNUEFEX01VTFRJUExZOiAxMDYsXHJcbiAgICAgICAgICAgIE5VTVBBRF9TVUJUUkFDVDogMTA5LFxyXG4gICAgICAgICAgICBQQUdFX0RPV046IDM0LFxyXG4gICAgICAgICAgICBQQUdFX1VQOiAzMyxcclxuICAgICAgICAgICAgUEVSSU9EOiAxOTAsXHJcbiAgICAgICAgICAgIFJJR0hUOiAzOSxcclxuICAgICAgICAgICAgU0hJRlQ6IDE2LFxyXG4gICAgICAgICAgICBTUEFDRTogMzIsXHJcbiAgICAgICAgICAgIFRBQjogOSxcclxuICAgICAgICAgICAgVVA6IDM4LFxyXG4gICAgICAgICAgICBXSU5ET1dTOiA5MSxcclxuICAgICAgICAgICAgWDogODhcclxuICAgICAgICB9LCBJbnB1dG1hc2s7XHJcbiAgICB9KTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fO1xyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xyXG4gICAgIWZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gWyBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpIF0sIFxyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnksIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPyBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxuICAgIH0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc05hTih5ZWFyKSB8fCAyOSA9PT0gbmV3IERhdGUoeWVhciwgMiwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xyXG4gICAgICAgICAgICBcImRkL21tL3l5eXlcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLzIveVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAtM11cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXxbMTJdWzAtOV18M1swMV0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMDFdKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18WzEyXVswLTldKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXwxWzAxMl0pKXwoMzBcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEzLTldfDFbMDEyXSkpfCgzMVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMTM1NzhdfDFbMDJdKSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkvMDIvXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgeWVhcnJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlueWVhcjogMTkwMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXh5ZWFyOiAyMDk5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNJblllYXJSYW5nZTogZnVuY3Rpb24oY2hycywgbWlueWVhciwgbWF4eWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihjaHJzKSkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRlcmVkeWVhciA9IHBhcnNlSW50KGNocnMuY29uY2F0KG1pbnllYXIudG9TdHJpbmcoKS5zbGljZShjaHJzLmxlbmd0aCkpKSwgZW50ZXJlZHllYXIyID0gcGFyc2VJbnQoY2hycy5jb25jYXQobWF4eWVhci50b1N0cmluZygpLnNsaWNlKGNocnMubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4oZW50ZXJlZHllYXIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyICYmIGVudGVyZWR5ZWFyIDw9IG1heHllYXIpIHx8ICFpc05hTihlbnRlcmVkeWVhcjIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyMiAmJiBlbnRlcmVkeWVhcjIgPD0gbWF4eWVhcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0ZXJtaW5lYmFzZXllYXI6IGZ1bmN0aW9uKG1pbnllYXIsIG1heHllYXIsIGhpbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnllYXIgPiBjdXJyZW50eWVhcikgcmV0dXJuIG1pbnllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heHllYXIgPCBjdXJyZW50eWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXhZZWFyUHJlZml4ID0gbWF4eWVhci50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBtYXhZZWFyUG9zdGZpeCA9IG1heHllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgbWF4eWVhciA8IG1heFllYXJQcmVmaXggKyBoaW50OyApIG1heFllYXJQcmVmaXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heHhZZWFyID0gbWF4WWVhclByZWZpeCArIG1heFllYXJQb3N0Zml4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlueWVhciA+IG1heHhZZWFyID8gbWlueWVhciA6IG1heHhZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlueWVhciA8PSBjdXJyZW50eWVhciAmJiBjdXJyZW50eWVhciA8PSBtYXh5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRZZWFyUHJlZml4ID0gY3VycmVudHllYXIudG9TdHJpbmcoKS5zbGljZSgwLCAyKTsgbWF4eWVhciA8IGN1cnJlbnRZZWFyUHJlZml4ICsgaGludDsgKSBjdXJyZW50WWVhclByZWZpeC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFllYXJBbmRIaW50ID0gY3VycmVudFllYXJQcmVmaXggKyBoaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFllYXJBbmRIaW50IDwgbWlueWVhciA/IG1pbnllYXIgOiBjdXJyZW50WWVhckFuZEhpbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50eWVhcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRGcm9udFZhbHVlOiBmdW5jdGlvbihtYXNrLCBidWZmZXIsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGFydCA9IDAsIGxlbmd0aCA9IDAsIGkgPSAwOyBpIDwgbWFzay5sZW5ndGggJiYgXCIyXCIgIT09IG1hc2suY2hhckF0KGkpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBvcHRzLmRlZmluaXRpb25zW21hc2suY2hhckF0KGkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA/IChzdGFydCArPSBsZW5ndGgsIGxlbmd0aCA9IGRlZmluaXRpb24uY2FyZGluYWxpdHkpIDogbGVuZ3RoKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuam9pbihcIlwiKS5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGJ1ZmZlciwgY3VycmVudFJlc3VsdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlNb250aFZhbHVlLCB5ZWFyLCBidWZmZXJTdHIgPSBidWZmZXIuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gb3B0cy5tYXNrLmluZGV4T2YoXCJ5XCIpID8gKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyKDAsIDQpLCBkYXlNb250aFZhbHVlID0gYnVmZmVyU3RyLnN1YnN0cmluZyg0LCAxMCkpIDogKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyaW5nKDYsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5TW9udGhWYWx1ZSA9IGJ1ZmZlclN0ci5zdWJzdHIoMCwgNikpLCBjdXJyZW50UmVzdWx0ICYmIChkYXlNb250aFZhbHVlICE9PSBvcHRzLmxlYXBkYXkgfHwgaXNMZWFwWWVhcih5ZWFyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIjFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGNocnMgPSBjaHJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAocGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gMSA9PT0gcGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwxcHJlLnRlc3QocGNocnMpIDogb3B0cy5yZWdleC52YWwxLnRlc3QocGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwxLnRlc3QoY2hycyArIFwiMFwiKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBjaHJzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbKytwb3NdID0gXCIwXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb250VmFsdWUgPSBvcHRzLmdldEZyb250VmFsdWUobWFza3NldC5tYXNrLCBtYXNrc2V0LmJ1ZmZlciwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSAhPT0gZnJvbnRWYWx1ZS5pbmRleE9mKG9wdHMucGxhY2Vob2xkZXJbMF0pICYmIChmcm9udFZhbHVlID0gXCIwMVwiICsgb3B0cy5zZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIFwiMFwiICsgY2hycy5jaGFyQXQoMCkpKSA/IGlzVmFsaWQgOiAobWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBjaHJzLmNoYXJBdCgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAoY2hycyArPSBtYXNrc2V0LmJ1ZmZlcltwb3MgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb250VmFsdWUgPSBvcHRzLmdldEZyb250VmFsdWUobWFza3NldC5tYXNrLCBtYXNrc2V0LmJ1ZmZlciwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09IGZyb250VmFsdWUuaW5kZXhPZihvcHRzLnBsYWNlaG9sZGVyWzBdKSAmJiAoZnJvbnRWYWx1ZSA9IFwiMDFcIiArIG9wdHMuc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IDEgPT09IGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwycHJlKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBjaHJzKSA6IG9wdHMucmVnZXgudmFsMihvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgY2hycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8ICEoaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMihvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgXCIwXCIgKyBjaHJzKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZhbGlkYXRvcjogWyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJpY3QgJiYgIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMgKyBcIjBcIikudG9TdHJpbmcoKS5zbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycyArIFwiMFwiKS50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZSh5ZWFyUHJlZml4ICsgY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcikpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDEpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJpY3QgJiYgIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnNbMF0gKyB5ZWFyUHJlZml4WzFdICsgY2hyc1sxXSwgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcikpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzKS50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZSh5ZWFyUHJlZml4ICsgY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcikpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IHllYXJQcmVmaXguY2hhckF0KDApLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMSksIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IGNocnMuY2hhckF0KDApLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcG9zIC0gMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcclxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibW0vZGQveXl5eVwiOiB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS9kZC95eXl5XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgICAgICByZWdleDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKXwoMDJcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTJdKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxMzU3OF18MVswMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIvMjkvXCIsXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ5eXl5L21tL2RkXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwieS8xLzJcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXkvbW0vZGRcIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiLzAyLzI5XCIsXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkZC5tbS55eXl5XCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS4yLnlcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkuMDIuXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGQtbW0teXl5eVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjEtMi15XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIjI5LTAyLVwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1tLmRkLnl5eXlcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLjIueVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0uZGQueXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIwMi4yOS5cIixcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogXCIuXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtbS1kZC15eXl5XCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS0yLXlcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tLWRkLXl5eXlcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMDItMjktXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwieXl5eS5tbS5kZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcInkuMS4yXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5Lm1tLmRkXCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIi4wMi4yOVwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi5cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcInl5eXkvbW0vZGRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInl5eXktbW0tZGRcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJ5LTEtMlwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCItMDItMjlcIixcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJ5eXl5L21tL2RkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0ZXRpbWU6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS8yL3kgaDpzXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC9tbS95eXl5IGhoOm1tXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgICAgICByZWdleDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyc3ByZTogbmV3IFJlZ0V4cChcIlswMTJdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhyczI0OiBuZXcgUmVnRXhwKFwiMlswLTRdfDFbMy05XVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBocnM6IG5ldyBSZWdFeHAoXCJbMDFdWzAtOV18MlswLTRdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtcG06IG5ldyBSZWdFeHAoXCJeW2F8cHxBfFBdW218TV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbXNwcmU6IG5ldyBSZWdFeHAoXCJbMC01XVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBtczogbmV3IFJlZ0V4cChcIlswLTVdWzAtOV1cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aW1lc2VwYXJhdG9yOiBcIjpcIixcclxuICAgICAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMjRcIixcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIyNFwiID09PSBvcHRzLmhvdXJGb3JtYXQgJiYgMjQgPT09IHBhcnNlSW50KGNocnMsIDEwKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC5ocnMudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkICYmIChjaHJzLmNoYXJBdCgxKSA9PT0gb3B0cy50aW1lc2VwYXJhdG9yIHx8IC0xICE9PSBcIi0uOlwiLmluZGV4T2YoY2hycy5jaGFyQXQoMSkpKSAmJiAoaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzLnRlc3QoXCIwXCIgKyBjaHJzLmNoYXJBdCgwKSkpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gY2hycy5jaGFyQXQoMCksIHBvcysrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvcHRzLnRpbWVzZXBhcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiBcIjI0XCIgIT09IG9wdHMuaG91ckZvcm1hdCAmJiBvcHRzLnJlZ2V4LmhyczI0LnRlc3QoY2hycykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gcGFyc2VJbnQoY2hycywgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyNCA9PT0gdG1wID8gKG1hc2tzZXQuYnVmZmVyW3BvcyArIDVdID0gXCJhXCIsIG1hc2tzZXQuYnVmZmVyW3BvcyArIDZdID0gXCJtXCIpIDogKG1hc2tzZXQuYnVmZmVyW3BvcyArIDVdID0gXCJwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyArIDZdID0gXCJtXCIpLCB0bXAgLT0gMTIsIHRtcCA8IDEwID8gKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSB0bXAudG9TdHJpbmcoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSBcIjBcIikgOiAobWFza3NldC5idWZmZXJbcG9zXSA9IHRtcC50b1N0cmluZygpLmNoYXJBdCgxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSB0bXAudG9TdHJpbmcoKS5jaGFyQXQoMCkpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcG9zIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zICsgNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBtYXNrc2V0LmJ1ZmZlcltwb3NdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzcHJlLnRlc3QoY2hycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8ICEoaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzLnRlc3QoXCIwXCIgKyBjaHJzKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTVdWzAtOV1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZhbGlkYXRvcjogWyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lm1zcHJlLnRlc3QoY2hycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8ICEoaXNWYWxpZCA9IG9wdHMucmVnZXgubXMudGVzdChcIjBcIiArIGNocnMpKSA/IGlzVmFsaWQgOiAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5yZWdleC5hbXBtLnRlc3QoY2hycyArIFwibVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0ZXRpbWUxMjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLzIveSBoOnMgdFxcXFxtXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC9tbS95eXl5IGhoOm1tIHhtXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxyXG4gICAgICAgICAgICAgICAgaG91ckZvcm1hdDogXCIxMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibW0vZGQveXl5eSBoaDptbSB4bVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjEvMi95IGg6cyB0XFxcXG1cIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tL2RkL3l5eXkgaGg6bW0geG1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lMTJcIixcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pfCgwMlwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtMl0pXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEzNTc4XXwxWzAyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIwMi8yOS9cIixcclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSBJbnB1dG1hc2sua2V5Q29kZS5SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKCh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhoOm1tIHRcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJoOnMgdFxcXFxtXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbSB4bVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMTJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImg6cyB0XCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiaDpzIHRcXFxcbVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW0geG1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICBob3VyRm9ybWF0OiBcIjEyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJoaDptbTpzc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcImg6czpzXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbTpzc1wiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaGg6bW1cIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJoOnNcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibW0veXl5eVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjEveVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0veXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCJkb25vdHVzZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFtc2k6IHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxLTZdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFycmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW55ZWFyOiAxMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heHllYXI6IDE0OTlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcInkvMS8yXCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIi8xMi8zMFwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS9tbS9kZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInl5eXktbW0tZGQgaGg6bW06c3NcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJ5LTEtMiBoOnM6c1wiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS1tbS1kZCBoaDptbTpzc1wiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIi0wMi0yOVwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSl8KDAyXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0yXSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMTM1NzhdfDFbMDJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSBmYWN0b3J5LCB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaykge1xyXG4gICAgICAgIHJldHVybiBJbnB1dG1hc2suZXh0ZW5kRGVmaW5pdGlvbnMoe1xyXG4gICAgICAgICAgICBBOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcclxuICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImXCI6IHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxyXG4gICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiNcIjoge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLUZhLWZdXCIsXHJcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xyXG4gICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIihcXFxcaHR0cDovLyl8KFxcXFxodHRwXFxcXHM6Ly8pfChmdHA6Ly8pfChmdHBcXFxcczovLylpeyt9XCIsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcclxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcInVybFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlwOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcImlbaVtpXV0uaVtpW2ldXS5pW2lbaV1dLmlbaVtpXV1cIixcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zIC0gMSA+IC0xICYmIFwiLlwiICE9PSBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA/IChjaHJzID0gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gKyBjaHJzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNocnMgPSBwb3MgLSAyID4gLTEgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDJdID8gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gKyBjaHJzIDogXCIwXCIgKyBjaHJzKSA6IGNocnMgPSBcIjAwXCIgKyBjaHJzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoXCIyNVswLTVdfDJbMC00XVswLTldfFswMV1bMC05XVswLTldXCIpLnRlc3QoY2hycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIip7MSw2NH1bLip7MSw2NH1dWy4qezEsNjR9XVsuKnsxLDYzfV1ALXsxLDYzfS4tezEsNjN9Wy4tezEsNjN9XVsuLXsxLDYzfV1cIixcclxuICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXHJcbiAgICAgICAgICAgICAgICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbihwYXN0ZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXN0ZWRWYWx1ZSA9IHBhc3RlZFZhbHVlLnRvTG93ZXJDYXNlKCksIHBhc3RlZFZhbHVlLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCIqXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXohIyQlJicqKy89P15fYHt8fX4tXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16LV1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZW1haWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYWM6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiIyM6IyM6IyM6IyM6IyM6IyNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2aW46IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiVnsxM305ezR9XCIsXHJcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLUhKLU5QUi1aYS1oai1ucHItelxcXFxkXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMCxcclxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSBmYWN0b3J5LCB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaywgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gYXV0b0VzY2FwZSh0eHQsIG9wdHMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZXNjYXBlZFR4dCA9IFwiXCIsIGkgPSAwOyBpIDwgdHh0Lmxlbmd0aDsgaSsrKSBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zW3R4dC5jaGFyQXQoaSldIHx8IG9wdHMuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyLmVuZCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLnF1YW50aWZpZXJtYXJrZXIuc3RhcnQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5xdWFudGlmaWVybWFya2VyLmVuZCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuYWx0ZXJuYXRvcm1hcmtlciA9PT0gdHh0LmNoYXJBdChpKSA/IGVzY2FwZWRUeHQgKz0gXCJcXFxcXCIgKyB0eHQuY2hhckF0KGkpIDogZXNjYXBlZFR4dCArPSB0eHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlZFR4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIElucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcclxuICAgICAgICAgICAgbnVtZXJpYzoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgwICE9PSBvcHRzLnJlcGVhdCAmJiBpc05hTihvcHRzLmludGVnZXJEaWdpdHMpICYmIChvcHRzLmludGVnZXJEaWdpdHMgPSBvcHRzLnJlcGVhdCksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMucmVwZWF0ID0gMCwgb3B0cy5ncm91cFNlcGFyYXRvciA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChcIi5cIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLFwiIDogXCIsXCIgPT09IG9wdHMucmFkaXhQb2ludCA/IG9wdHMuZ3JvdXBTZXBhcmF0b3IgPSBcIi5cIiA6IG9wdHMuZ3JvdXBTZXBhcmF0b3IgPSBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgKG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHVuZGVmaW5lZCksIG9wdHMuYXV0b0dyb3VwID0gb3B0cy5hdXRvR3JvdXAgJiYgXCJcIiAhPT0gb3B0cy5ncm91cFNlcGFyYXRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hdXRvR3JvdXAgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG9wdHMuZ3JvdXBTaXplICYmIGlzRmluaXRlKG9wdHMuZ3JvdXBTaXplKSAmJiAob3B0cy5ncm91cFNpemUgPSBwYXJzZUludChvcHRzLmdyb3VwU2l6ZSkpLCBcclxuICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShvcHRzLmludGVnZXJEaWdpdHMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwcyA9IE1hdGguZmxvb3Iob3B0cy5pbnRlZ2VyRGlnaXRzIC8gb3B0cy5ncm91cFNpemUpLCBtb2QgPSBvcHRzLmludGVnZXJEaWdpdHMgJSBvcHRzLmdyb3VwU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnRlZ2VyRGlnaXRzID0gcGFyc2VJbnQob3B0cy5pbnRlZ2VyRGlnaXRzKSArICgwID09PSBtb2QgPyBzZXBzIC0gMSA6IHNlcHMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnRlZ2VyRGlnaXRzIDwgMSAmJiAob3B0cy5pbnRlZ2VyRGlnaXRzID0gXCIqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDEgJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmFkaXhGb2N1c1wiID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrICYmIFwiXCIgPT09IG9wdHMucGxhY2Vob2xkZXIgJiYgITEgPT09IG9wdHMuaW50ZWdlck9wdGlvbmFsICYmIChvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJsdnBcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbXCI7XCJdID0gb3B0cy5kZWZpbml0aW9uc1tcIn5cIl0sIG9wdHMuZGVmaW5pdGlvbnNbXCI7XCJdLmRlZmluaXRpb25TeW1ib2wgPSBcIn5cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgITAgPT09IG9wdHMubnVtZXJpY0lucHV0ICYmIChvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPyBcImx2cFwiIDogb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaywgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5kaWdpdHNPcHRpb25hbCA9ICExLCBpc05hTihvcHRzLmRpZ2l0cykgJiYgKG9wdHMuZGlnaXRzID0gMiksIG9wdHMuZGVjaW1hbFByb3RlY3QgPSAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBcIlsrXVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrICs9IGF1dG9Fc2NhcGUob3B0cy5wcmVmaXgsIG9wdHMpLCAhMCA9PT0gb3B0cy5pbnRlZ2VyT3B0aW9uYWwgPyBtYXNrICs9IFwifnsxLFwiICsgb3B0cy5pbnRlZ2VyRGlnaXRzICsgXCJ9XCIgOiBtYXNrICs9IFwifntcIiArIG9wdHMuaW50ZWdlckRpZ2l0cyArIFwifVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmRpZ2l0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgPSBvcHRzLmRlY2ltYWxQcm90ZWN0ID8gXCI6XCIgOiBvcHRzLnJhZGl4UG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcSA9IG9wdHMuZGlnaXRzLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShkcVswXSAmJiBkcVsxXSAmJiBpc0Zpbml0ZShkcVsxXSkpID8gbWFzayArPSBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sICsgXCI7e1wiICsgb3B0cy5kaWdpdHMgKyBcIn1cIiA6IChpc05hTihvcHRzLmRpZ2l0cykgfHwgcGFyc2VJbnQob3B0cy5kaWdpdHMpID4gMCkgJiYgKG9wdHMuZGlnaXRzT3B0aW9uYWwgPyBtYXNrICs9IFwiW1wiICsgb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCArIFwiO3sxLFwiICsgb3B0cy5kaWdpdHMgKyBcIn1dXCIgOiBtYXNrICs9IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgKyBcIjt7XCIgKyBvcHRzLmRpZ2l0cyArIFwifVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2sgKz0gYXV0b0VzY2FwZShvcHRzLnN1ZmZpeCwgb3B0cyksIG1hc2sgKz0gXCJbLV1cIiwgb3B0cy5ncmVlZHkgPSAhMSwgbWFzaztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHM6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxyXG4gICAgICAgICAgICAgICAgZW5mb3JjZURpZ2l0c09uQmx1cjogITEsXHJcbiAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcInJhZGl4Rm9jdXNcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogMyxcclxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0dyb3VwOiAhMSxcclxuICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICEwLFxyXG4gICAgICAgICAgICAgICAgbmVnYXRpb25TeW1ib2w6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9udDogXCItXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFjazogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGludGVnZXJEaWdpdHM6IFwiK1wiLFxyXG4gICAgICAgICAgICAgICAgaW50ZWdlck9wdGlvbmFsOiAhMCxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHJpZ2h0QWxpZ246ICEwLFxyXG4gICAgICAgICAgICAgICAgZGVjaW1hbFByb3RlY3Q6ICEwLFxyXG4gICAgICAgICAgICAgICAgbWluOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXHJcbiAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITEsXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogZnVuY3Rpb24oYnVmZmVyLCBwb3MsIGMsIGlzU2VsZWN0aW9uLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiLVwiID09PSBjIHx8IGMgPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuICEwID09PSBvcHRzLmFsbG93TWludXMgJiYgKG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMuaXNOZWdhdGl2ZSA9PT0gdW5kZWZpbmVkIHx8ICFvcHRzLmlzTmVnYXRpdmUsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCIgPT09IGJ1ZmZlci5qb2luKFwiXCIpIHx8IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gaXNTZWxlY3Rpb24gJiYgYyA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQgJiYgKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSAkLmluQXJyYXkob3B0cy5yYWRpeFBvaW50LCBidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSByZXR1cm4gITAgPT09IG9wdHMubnVtZXJpY0lucHV0ID8gcG9zID09PSByYWRpeFBvcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByYWRpeFBvcyArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIGN1cnJlbnRSZXN1bHQsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gb3B0cy5zdWZmaXguc3BsaXQoXCJcIiksIHByZWZpeCA9IG9wdHMucHJlZml4LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzdWx0LnBvcyA9PSB1bmRlZmluZWQgJiYgY3VycmVudFJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkICYmICEwICE9PSBjdXJyZW50UmVzdWx0LmRvcG9zdCkgcmV0dXJuIGN1cnJlbnRSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY3VycmVudFJlc3VsdC5jYXJldCAhPSB1bmRlZmluZWQgPyBjdXJyZW50UmVzdWx0LmNhcmV0IDogY3VycmVudFJlc3VsdC5wb3MsIG1hc2tlZFZhbHVlID0gYnVmZmVyLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5udW1lcmljSW5wdXQgJiYgKGNhcmV0UG9zID0gbWFza2VkVmFsdWUubGVuZ3RoIC0gY2FyZXRQb3MgLSAxLCBtYXNrZWRWYWx1ZSA9IG1hc2tlZFZhbHVlLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJBdFBvcyA9IG1hc2tlZFZhbHVlW2NhcmV0UG9zXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckF0UG9zID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIChjYXJldFBvcyArPSAxLCBjaGFyQXRQb3MgPSBtYXNrZWRWYWx1ZVtjYXJldFBvc10pLCBcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBvcyA9PSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBvcHRzLnN1ZmZpeC5sZW5ndGggLSAxICYmIGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50KSByZXR1cm4gY3VycmVudFJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCAmJiBjaGFyQXRQb3MgIT09IG9wdHMucmFkaXhQb2ludCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgKG1hc2tlZFZhbHVlW2NhcmV0UG9zXSA9IFwiP1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnByZWZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49ICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIGNhcmV0UG9zIDwgb3B0cy5wcmVmaXgubGVuZ3RoIC0gMSArICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApID8gcHJlZml4W2NhcmV0UG9zIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCldID0gXCI/XCIgOiBvcHRzLnN1ZmZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49IG1hc2tlZFZhbHVlLmxlbmd0aCAtIG9wdHMuc3VmZml4Lmxlbmd0aCAtICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIChzdWZmaXhbY2FyZXRQb3MgLSAobWFza2VkVmFsdWUubGVuZ3RoIC0gb3B0cy5zdWZmaXgubGVuZ3RoIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCkpXSA9IFwiP1wiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiXCIpLCBzdWZmaXggPSBzdWZmaXguam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUuam9pbihcIlwiKS5yZXBsYWNlKHByZWZpeCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKHN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOYU4ob3B0cy5wbGFjZWhvbGRlcikgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucGxhY2Vob2xkZXIpLCBcImdcIiksIFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlLmxlbmd0aCA+IDEgJiYgMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAoXCIwXCIgPT0gY2hhckF0UG9zICYmIChwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZSgvXlxcPy9nLCBcIlwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKC9eMC9nLCBcIlwiKSksIHByb2Nlc3NWYWx1ZS5jaGFyQXQoMCkgPT09IG9wdHMucmFkaXhQb2ludCAmJiBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgITAgIT09IG9wdHMubnVtZXJpY0lucHV0ICYmIChwcm9jZXNzVmFsdWUgPSBcIjBcIiArIHByb2Nlc3NWYWx1ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IHByb2Nlc3NWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCAoIW9wdHMuZGlnaXRzT3B0aW9uYWwgfHwgb3B0cy5lbmZvcmNlRGlnaXRzT25CbHVyICYmIFwiYmx1clwiID09PSBjdXJyZW50UmVzdWx0LmV2ZW50KSAmJiBpc0Zpbml0ZShvcHRzLmRpZ2l0cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvc2l0aW9uID0gJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgcHJvY2Vzc1ZhbHVlKSwgcnBiID0gJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgbWFza2VkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IHJhZGl4UG9zaXRpb24gJiYgKHByb2Nlc3NWYWx1ZS5wdXNoKG9wdHMucmFkaXhQb2ludCksIHJhZGl4UG9zaXRpb24gPSBwcm9jZXNzVmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBvcHRzLmRpZ2l0czsgaSsrKSBvcHRzLmRpZ2l0c09wdGlvbmFsICYmICghb3B0cy5lbmZvcmNlRGlnaXRzT25CbHVyIHx8IFwiYmx1clwiICE9PSBjdXJyZW50UmVzdWx0LmV2ZW50KSB8fCBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldICE9PSB1bmRlZmluZWQgJiYgcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSAhPT0gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoMCkgPyAtMSAhPT0gcnBiICYmIG1hc2tlZFZhbHVlW3JwYiArIGldICE9PSB1bmRlZmluZWQgJiYgKHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gPSBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldIHx8IG1hc2tlZFZhbHVlW3JwYiArIGldKSA6IHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gPSBjdXJyZW50UmVzdWx0LnBsYWNlaG9sZGVyIHx8IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5hdXRvR3JvdXAgfHwgXCJcIiA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciB8fCBjaGFyQXRQb3MgPT09IG9wdHMucmFkaXhQb2ludCAmJiBjdXJyZW50UmVzdWx0LnBvcyA9PT0gdW5kZWZpbmVkICYmICFjdXJyZW50UmVzdWx0LmRvcG9zdCkgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLmpvaW4oXCJcIik7IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZFJhZGl4ID0gcHJvY2Vzc1ZhbHVlW3Byb2Nlc3NWYWx1ZS5sZW5ndGggLSAxXSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIGN1cnJlbnRSZXN1bHQuYyA9PT0gb3B0cy5yYWRpeFBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gSW5wdXRtYXNrKGZ1bmN0aW9uKGJ1ZmZlciwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3N0TWFzayA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3RNYXNrICs9IFwiKFwiICsgb3B0cy5ncm91cFNlcGFyYXRvciArIFwiKntcIiArIG9wdHMuZ3JvdXBTaXplICsgXCJ9KXsqfVwiLCBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4U3BsaXQgPSBidWZmZXIuam9pbihcIlwiKS5zcGxpdChvcHRzLnJhZGl4UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpeFNwbGl0WzFdICYmIChwb3N0TWFzayArPSBvcHRzLnJhZGl4UG9pbnQgKyBcIip7XCIgKyByYWRpeFNwbGl0WzFdLm1hdGNoKC9eXFxkKlxcPz9cXGQqLylbMF0ubGVuZ3RoICsgXCJ9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHByb2Nlc3NWYWx1ZSwgb3B0cyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcmljSW5wdXQ6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGppdE1hc2tpbmc6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOT9dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZm9ybWF0KHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpKSwgYWRkUmFkaXggJiYgKHByb2Nlc3NWYWx1ZSArPSBvcHRzLnJhZGl4UG9pbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZS5jaGFyQXQoMCkgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgcHJvY2Vzc1ZhbHVlLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5pc05lZ2F0aXZlICYmIFwiYmx1clwiID09PSBjdXJyZW50UmVzdWx0LmV2ZW50ICYmIChvcHRzLmlzTmVnYXRpdmUgPSBcIjBcIiAhPT0gcHJvY2Vzc1ZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJlZml4ICsgcHJvY2Vzc1ZhbHVlLCBwcm9jZXNzVmFsdWUgKz0gc3VmZml4LCBvcHRzLmlzTmVnYXRpdmUgJiYgKHByb2Nlc3NWYWx1ZSA9IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgKyBwcm9jZXNzVmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSArPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUuc3BsaXQoXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJBdFBvcyAhPT0gdW5kZWZpbmVkKSBpZiAoY2hhckF0UG9zICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ICYmIGNoYXJBdFBvcyAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSBjYXJldFBvcyA9ICQuaW5BcnJheShcIj9cIiwgcHJvY2Vzc1ZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3MgPiAtMSA/IHByb2Nlc3NWYWx1ZVtjYXJldFBvc10gPSBjaGFyQXRQb3MgOiBjYXJldFBvcyA9IGN1cnJlbnRSZXN1bHQuY2FyZXQgfHwgMDsgZWxzZSBpZiAoY2hhckF0UG9zID09PSBvcHRzLnJhZGl4UG9pbnQgfHwgY2hhckF0UG9zID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250IHx8IGNoYXJBdFBvcyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdDYXJldFBvcyA9ICQuaW5BcnJheShjaGFyQXRQb3MsIHByb2Nlc3NWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBuZXdDYXJldFBvcyAmJiAoY2FyZXRQb3MgPSBuZXdDYXJldFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMubnVtZXJpY0lucHV0ICYmIChjYXJldFBvcyA9IHByb2Nlc3NWYWx1ZS5sZW5ndGggLSBjYXJldFBvcyAtIDEsIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByc2x0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2hhckF0UG9zID09PSB1bmRlZmluZWQgfHwgY3VycmVudFJlc3VsdC5wb3MgIT09IHVuZGVmaW5lZCA/IGNhcmV0UG9zICsgKG9wdHMubnVtZXJpY0lucHV0ID8gLTEgOiAxKSA6IGNhcmV0UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHByb2Nlc3NWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IGN1cnJlbnRSZXN1bHQuZG9wb3N0IHx8IGJ1ZmZlci5qb2luKFwiXCIpICE9PSBwcm9jZXNzVmFsdWUuam9pbihcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJzbHQucmVmcmVzaEZyb21CdWZmZXIgPyByc2x0IDogY3VycmVudFJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkJlZm9yZVdyaXRlOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHN3aXRjaCAoZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5wb3N0VmFsaWRhdGlvbihidWZmZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcG9zdDogITBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJsdXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja3ZhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5tYXNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIChudWxsICE9PSBvcHRzLm1pbiAmJiAob3B0cy5taW4gPSBvcHRzLm1pbi50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAob3B0cy5taW4gPSBvcHRzLm1pbi5yZXBsYWNlKG9wdHMucmFkaXhQb2ludCwgXCIuXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLm1pbiA9IGlzRmluaXRlKG9wdHMubWluKSA/IHBhcnNlRmxvYXQob3B0cy5taW4pIDogTmFOLCBpc05hTihvcHRzLm1pbikgJiYgKG9wdHMubWluID0gTnVtYmVyLk1JTl9WQUxVRSkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IG9wdHMubWF4ICYmIChvcHRzLm1heCA9IG9wdHMubWF4LnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1heCA9IG9wdHMubWF4LnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWF4ID0gaXNGaW5pdGUob3B0cy5tYXgpID8gcGFyc2VGbG9hdChvcHRzLm1heCkgOiBOYU4sIGlzTmFOKG9wdHMubWF4KSAmJiAob3B0cy5tYXggPSBOdW1iZXIuTUFYX1ZBTFVFKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5wYXJzZU1pbk1heE9wdGlvbnMgPSBcImRvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0ob3B0cyksIG51bGwgIT09IG9wdHMubWluIHx8IG51bGwgIT09IG9wdHMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5tYXNrZWQgPSBvcHRzLm9uVW5NYXNrKGJ1ZmZlci5qb2luKFwiXCIpLCB1bmRlZmluZWQsICQuZXh0ZW5kKHt9LCBvcHRzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG51bGwgIT09IG9wdHMubWluICYmIHVubWFza2VkIDwgb3B0cy5taW4pIHJldHVybiBvcHRzLmlzTmVnYXRpdmUgPSBvcHRzLm1pbiA8IDAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5wb3N0VmFsaWRhdGlvbihvcHRzLm1pbi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkuc3BsaXQoXCJcIiksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG9wdHMubWF4ICYmIHVubWFza2VkID4gb3B0cy5tYXgpIHJldHVybiBvcHRzLmlzTmVnYXRpdmUgPSBvcHRzLm1heCA8IDAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5wb3N0VmFsaWRhdGlvbihvcHRzLm1heC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkuc3BsaXQoXCJcIiksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnBvc3RWYWxpZGF0aW9uKGJ1ZmZlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNhcmV0UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJfY2hlY2t2YWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZWdleDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVnZXJQYXJ0OiBmdW5jdGlvbihvcHRzLCBlbXB0eUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNoZWNrID8gbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XCIpIDogbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XFxcXGQrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdlck5QYXJ0OiBmdW5jdGlvbihvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiW1xcXFxkXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvcikgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoMCkpICsgXCJdK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIn5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzLCBpc1NlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBzdHJpY3QgPyBuZXcgUmVnRXhwKFwiWzAtOVwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpICsgXCJdXCIpLnRlc3QoY2hycykgOiBuZXcgUmVnRXhwKFwiWzAtOV1cIikudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5udW1lcmljSW5wdXQgJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgXCJ+XCIgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5kZWYgJiYgIWlzU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzVmFsdWUgPSBtYXNrc2V0LmJ1ZmZlci5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdlJhZGl4U3BsaXQgPSBwcm9jZXNzVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZSYWRpeFNwbGl0Lmxlbmd0aCA+IDEgJiYgKHB2UmFkaXhTcGxpdFsxXSA9IHB2UmFkaXhTcGxpdFsxXS5yZXBsYWNlKC8wL2csIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiA9PT0gcHZSYWRpeFNwbGl0WzBdICYmIChwdlJhZGl4U3BsaXRbMF0gPSBwdlJhZGl4U3BsaXRbMF0ucmVwbGFjZSgvMC9nLCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHZSYWRpeFNwbGl0WzBdICsgb3B0cy5yYWRpeFBvaW50ICsgcHZSYWRpeFNwbGl0WzFdIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZW1wbGF0ZSA9IG1hc2tzZXQuX2J1ZmZlci5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb2Nlc3NWYWx1ZSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChwcm9jZXNzVmFsdWUgPSBidWZmZXJUZW1wbGF0ZSk7IG51bGwgPT09IHByb2Nlc3NWYWx1ZS5tYXRjaChJbnB1dG1hc2suZXNjYXBlUmVnZXgoYnVmZmVyVGVtcGxhdGUpICsgXCIkXCIpOyApIGJ1ZmZlclRlbXBsYXRlID0gYnVmZmVyVGVtcGxhdGUuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKGJ1ZmZlclRlbXBsYXRlLCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHByb2Nlc3NWYWx1ZVtwb3NdID09PSB1bmRlZmluZWQgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBzdHJpY3QgfHwgY2hycyAhPT0gb3B0cy5yYWRpeFBvaW50IHx8IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gIT09IHVuZGVmaW5lZCB8fCAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIrXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiAoXCItXCIgPT09IGNocnMgfHwgY2hycyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCI6XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4ID0gXCJbXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSArIFwiXVwiLCBpc1ZhbGlkID0gbmV3IFJlZ0V4cChyYWRpeCkudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10ubWF0Y2gucGxhY2Vob2xkZXIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAoaXNWYWxpZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogcG9zICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmFkaXhQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdW5tYXNrZWRWYWx1ZSAmJiAhMCA9PT0gb3B0cy5udWxsYWJsZSkgcmV0dXJuIHVubWFza2VkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2Uob3B0cy5wcmVmaXgsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShvcHRzLnN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnVubWFza0FzTnVtYmVyID8gKFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAtMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgb3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzVmFsdWUpKSA6IHByb2Nlc3NWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFza2VkVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLnNsaWNlKCkuam9pbihcIlwiKSAhPT0gbWFza2VkVmFsdWUpIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG9wdHMuc3VmZml4LCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShwcm9jZXNzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oaW5pdGlhbFZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSA9IHVuZGVmaW5lZCwgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuY2hhckF0KGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ID8gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA6IGluaXRpYWxWYWx1ZS50b1N0cmluZygpLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgaXNGaW5pdGUoaW5pdGlhbFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdnMgPSBpbml0aWFsVmFsdWUuc3BsaXQoXCIuXCIpLCBncm91cFNpemUgPSBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yID8gcGFyc2VJbnQob3B0cy5ncm91cFNpemUpIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMiA9PT0gdnMubGVuZ3RoICYmICh2c1swXS5sZW5ndGggPiBncm91cFNpemUgfHwgdnNbMV0ubGVuZ3RoID4gZ3JvdXBTaXplIHx8IHZzWzBdLmxlbmd0aCA8PSBncm91cFNpemUgJiYgdnNbMV0ubGVuZ3RoIDwgZ3JvdXBTaXplKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIga29tbWFNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC8sL2cpLCBkb3RNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC9cXC4vZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvdE1hdGNoZXMgJiYga29tbWFNYXRjaGVzID8gZG90TWF0Y2hlcy5sZW5ndGggPiBrb21tYU1hdGNoZXMubGVuZ3RoID8gKGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKFwiLFwiLCBvcHRzLnJhZGl4UG9pbnQpKSA6IGtvbW1hTWF0Y2hlcy5sZW5ndGggPiBkb3RNYXRjaGVzLmxlbmd0aCA/IChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpIDwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIsXCIpID8gaW5pdGlhbFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSA6IGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIDAgPT09IG9wdHMuZGlnaXRzICYmICgtMSAhPT0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpID8gaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIi5cIikpIDogLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLFwiKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIixcIikpKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBpc0Zpbml0ZShvcHRzLmRpZ2l0cykgJiYgLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUGFydHMgPSBpbml0aWFsVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KSwgZGVjUGFydCA9IHZhbHVlUGFydHNbMV0ubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxkKlwiKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChvcHRzLmRpZ2l0cykgPCBkZWNQYXJ0LnRvU3RyaW5nKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIHBhcnNlSW50KG9wdHMuZGlnaXRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChpbml0aWFsVmFsdWUpICogZGlnaXRzRmFjdG9yKSAvIGRpZ2l0c0ZhY3RvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuQ2xlYXJQb3NpdGlvbjogZnVuY3Rpb24obWFza3NldCwgcG9zaXRpb24sIGx2cCwgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZwID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbl0sIGNhbkNsZWFyID0gdnAuaW5wdXQgIT09IG9wdHMucmFkaXhQb2ludCB8fCBudWxsICE9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5tYXRjaC5mbiAmJiAhMSA9PT0gb3B0cy5kZWNpbWFsUHJvdGVjdCB8fCB2cC5pbnB1dCA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zaXRpb24gKyAxXSAmJiBudWxsID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uICsgMV0ubWF0Y2guZm4gfHwgaXNGaW5pdGUodnAuaW5wdXQpIHx8IHBvc2l0aW9uID09PSBsdnAgfHwgdnAuaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWNhbkNsZWFyIHx8IFwiK1wiICE9IHZwLm1hdGNoLm5hdGl2ZURlZiAmJiBcIi1cIiAhPSB2cC5tYXRjaC5uYXRpdmVEZWYgfHwgKG9wdHMuaXNOZWdhdGl2ZSA9ICExKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuQ2xlYXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuVVA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwocGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpICsgcGFyc2VJbnQob3B0cy5zdGVwKSksICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuRE9XTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiJCBcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIGF1dG9Hcm91cDogITAsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITEsXHJcbiAgICAgICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVjaW1hbDoge1xyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludGVnZXI6IHtcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgIGRpZ2l0czogMCxcclxuICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGVyY2VudGFnZToge1xyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxyXG4gICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcclxuICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICExXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSBmYWN0b3J5LCB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaykge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hc2tTb3J0KGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIG1hc2thID0gKGEubWFzayB8fCBhKS5yZXBsYWNlKC8jL2csIFwiOVwiKS5yZXBsYWNlKC9cXCkvLCBcIjlcIikucmVwbGFjZSgvWysoKSMtXS9nLCBcIlwiKSwgbWFza2IgPSAoYi5tYXNrIHx8IGIpLnJlcGxhY2UoLyMvZywgXCI5XCIpLnJlcGxhY2UoL1xcKS8sIFwiOVwiKS5yZXBsYWNlKC9bKygpIy1dL2csIFwiXCIpLCBtYXNrYXMgPSAoYS5tYXNrIHx8IGEpLnNwbGl0KFwiI1wiKVswXSwgbWFza2JzID0gKGIubWFzayB8fCBiKS5zcGxpdChcIiNcIilbMF07XHJcbiAgICAgICAgICAgIHJldHVybiAwID09PSBtYXNrYnMuaW5kZXhPZihtYXNrYXMpID8gLTEgOiAwID09PSBtYXNrYXMuaW5kZXhPZihtYXNrYnMpID8gMSA6IG1hc2thLmxvY2FsZUNvbXBhcmUobWFza2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5hbHlzZU1hc2tCYXNlID0gSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzaztcclxuICAgICAgICByZXR1cm4gSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzayA9IGZ1bmN0aW9uKG1hc2ssIHJlZ2V4TWFzaywgb3B0cykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWR1Y2VWYXJpYXRpb25zKG1hc2tzLCBwcmV2aW91c1ZhcmlhdGlvbiwgcHJldmlvdXNtYXNrR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFyaWF0aW9uID0gcHJldmlvdXNWYXJpYXRpb24gfHwgXCJcIiwgcHJldmlvdXNtYXNrR3JvdXAgPSBwcmV2aW91c21hc2tHcm91cCB8fCBtYXNrR3JvdXBzLCBcclxuICAgICAgICAgICAgICAgIFwiXCIgIT09IHByZXZpb3VzVmFyaWF0aW9uICYmIChwcmV2aW91c21hc2tHcm91cFtwcmV2aW91c1ZhcmlhdGlvbl0gPSB7fSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2YXJpYXRpb24gPSBcIlwiLCBtYXNrR3JvdXAgPSBwcmV2aW91c21hc2tHcm91cFtwcmV2aW91c1ZhcmlhdGlvbl0gfHwgcHJldmlvdXNtYXNrR3JvdXAsIGkgPSBtYXNrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgbWFzayA9IG1hc2tzW2ldLm1hc2sgfHwgbWFza3NbaV0sIFxyXG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uID0gbWFzay5zdWJzdHIoMCwgMSksIG1hc2tHcm91cFt2YXJpYXRpb25dID0gbWFza0dyb3VwW3ZhcmlhdGlvbl0gfHwgW10sIFxyXG4gICAgICAgICAgICAgICAgbWFza0dyb3VwW3ZhcmlhdGlvbl0udW5zaGlmdChtYXNrLnN1YnN0cigxKSksIG1hc2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCBpbiBtYXNrR3JvdXApIG1hc2tHcm91cFtuZHhdLmxlbmd0aCA+IDUwMCAmJiByZWR1Y2VWYXJpYXRpb25zKG1hc2tHcm91cFtuZHhdLnNsaWNlKCksIG5keCwgbWFza0dyb3VwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkKG1hc2tHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBcIlwiLCBzdWJtYXNrcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4IGluIG1hc2tHcm91cCkgJC5pc0FycmF5KG1hc2tHcm91cFtuZHhdKSA/IDEgPT09IG1hc2tHcm91cFtuZHhdLmxlbmd0aCA/IHN1Ym1hc2tzLnB1c2gobmR4ICsgbWFza0dyb3VwW25keF0pIDogc3VibWFza3MucHVzaChuZHggKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ICsgbWFza0dyb3VwW25keF0uam9pbihvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpICsgb3B0cy5ncm91cG1hcmtlci5lbmQpIDogc3VibWFza3MucHVzaChuZHggKyByZWJ1aWxkKG1hc2tHcm91cFtuZHhdKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSA9PT0gc3VibWFza3MubGVuZ3RoID8gbWFzayArPSBzdWJtYXNrc1swXSA6IG1hc2sgKz0gb3B0cy5ncm91cG1hcmtlci5zdGFydCArIHN1Ym1hc2tzLmpvaW4ob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kLCBcclxuICAgICAgICAgICAgICAgIG1hc2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1hc2tHcm91cHMgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdHMucGhvbmVDb2RlcyAmJiAob3B0cy5waG9uZUNvZGVzICYmIG9wdHMucGhvbmVDb2Rlcy5sZW5ndGggPiAxZTMgJiYgKG1hc2sgPSBtYXNrLnN1YnN0cigxLCBtYXNrLmxlbmd0aCAtIDIpLCBcclxuICAgICAgICAgICAgcmVkdWNlVmFyaWF0aW9ucyhtYXNrLnNwbGl0KG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCkpLCBcclxuICAgICAgICAgICAgbWFzayA9IHJlYnVpbGQobWFza0dyb3VwcykpLCBtYXNrID0gbWFzay5yZXBsYWNlKC85L2csIFwiXFxcXDlcIikpLCBhbmFseXNlTWFza0Jhc2UuY2FsbCh0aGlzLCBtYXNrLCByZWdleE1hc2ssIG9wdHMpO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcclxuICAgICAgICAgICAgYWJzdHJhY3RwaG9uZToge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBtYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCI8XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIj5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnljb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVDb2RlczogW10sXHJcbiAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuZGVmaW5pdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiOiBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zWzldXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0cy5waG9uZUNvZGVzLnNvcnQobWFza1NvcnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6ICEwLFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBmdW5jdGlvbih2YWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14wezEsMn0vLCBcIlwiKS5yZXBsYWNlKC9bXFxzXS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByb2Nlc3NlZFZhbHVlLmluZGV4T2Yob3B0cy5jb3VudHJ5Y29kZSkgPiAxIHx8IC0xID09PSBwcm9jZXNzZWRWYWx1ZS5pbmRleE9mKG9wdHMuY291bnRyeWNvZGUpKSAmJiAocHJvY2Vzc2VkVmFsdWUgPSBcIitcIiArIG9wdHMuY291bnRyeWNvZGUgKyBwcm9jZXNzZWRWYWx1ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrZWRWYWx1ZS5yZXBsYWNlKC9bKCkjLV0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcInRlbFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXywgX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gICAgIWZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gWyBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpIF0sIFxyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnksIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPyBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxuICAgIH0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gJC5mbi5pbnB1dG1hc2sgJiYgKCQuZm4uaW5wdXRtYXNrID0gZnVuY3Rpb24oZm4sIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG5wdG1hc2ssIGlucHV0ID0gdGhpc1swXTtcclxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gb3B0aW9ucyAmJiAob3B0aW9ucyA9IHt9KSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZm4pIHN3aXRjaCAoZm4pIHtcclxuICAgICAgICAgICAgICBjYXNlIFwidW5tYXNrZWR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICYmIGlucHV0LmlucHV0bWFzayA/IGlucHV0LmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAkKGlucHV0KS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzayAmJiB0aGlzLmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwiZ2V0ZW1wdHltYXNrXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldGVtcHR5bWFzaygpIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImhhc01hc2tlZFZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISghaW5wdXQgfHwgIWlucHV0LmlucHV0bWFzaykgJiYgaW5wdXQuaW5wdXRtYXNrLmhhc01hc2tlZFZhbHVlKCk7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlucHV0IHx8ICFpbnB1dC5pbnB1dG1hc2sgfHwgaW5wdXQuaW5wdXRtYXNrLmlzQ29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImdldG1ldGFkYXRhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldG1ldGFkYXRhKCkgOiB2b2lkIDA7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJzZXR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgJChpbnB1dCkudmFsKG9wdGlvbnMpLCBpbnB1dCAmJiB2b2lkIDAgPT09IGlucHV0LmlucHV0bWFzayAmJiAkKGlucHV0KS50cmlnZ2VySGFuZGxlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJvcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBvcHRpb25zKSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHRoaXMuaW5wdXRtYXNrKSByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgdm9pZCAwICE9PSBpbnB1dC5pbnB1dG1hc2spIHJldHVybiBpbnB1dC5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5hbGlhcyA9IGZuLCBucHRtYXNrID0gbmV3IElucHV0bWFzayhvcHRpb25zKSwgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5wdG1hc2subWFzayh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gKHZvaWQgMCA9PT0gZm4gPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihmbikpKSByZXR1cm4gbnB0bWFzayA9IG5ldyBJbnB1dG1hc2soZm4pLCBcclxuICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZm4ubWFzayAmJiB2b2lkIDAgPT09IGZuLmFsaWFzID8gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHRoaXMuaW5wdXRtYXNrKSByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0aW9uKGZuKTtcclxuICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KSA6IHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGZuKSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5wdG1hc2sgPSBuZXcgSW5wdXRtYXNrKG9wdGlvbnMpLCBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCAkLmZuLmlucHV0bWFzaztcclxuICAgIH0pO1xyXG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuICAgIHZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XHJcbiAgICBcInN0cmluZ1wiID09IHR5cGVvZiBjb250ZW50ICYmIChjb250ZW50ID0gWyBbIG1vZHVsZS5pLCBjb250ZW50LCBcIlwiIF0gXSk7XHJcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KShjb250ZW50LCB7fSk7XHJcbiAgICBjb250ZW50LmxvY2FscyAmJiAobW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscyk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBcclxuICAgIF9fd2VicGFja19yZXF1aXJlX18oNik7XHJcbiAgICB2YXIgX2lucHV0bWFzayA9IF9fd2VicGFja19yZXF1aXJlX18oMSksIF9pbnB1dG1hc2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5wdXRtYXNrKSwgX2lucHV0bWFzazMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfaW5wdXRtYXNrNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lucHV0bWFzazMpLCBfanF1ZXJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xyXG4gICAgX2lucHV0bWFzazQuZGVmYXVsdCA9PT0gX2pxdWVyeTIuZGVmYXVsdCAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLCB3aW5kb3cuSW5wdXRtYXNrID0gX2lucHV0bWFzazIuZGVmYXVsdDtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xyXG4gICAgfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18sIGV4cG9ydHMsIG1vZHVsZSkpICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH0uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMykodm9pZCAwKSwgZXhwb3J0cy5wdXNoKFsgbW9kdWxlLmksIFwic3Bhbi5pbS1jYXJldCB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluayB7XFxyXFxuICAgIGZyb20sIHRvIHtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gICAgZnJvbSwgdG8ge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmltLXN0YXRpYyB7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaW0tY29sb3JtYXNrIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5pbS1jb2xvcm1hc2sgPiBpbnB1dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IGNhcmV0O1xcclxcbiAgICBhcHBlYXJhbmNlOiBjYXJldDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBsZWZ0OiAwOyAvKmNhbGN1bGF0ZWQqL1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaW0tY29sb3JtYXNrID4gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaW0tY29sb3JtYXNrID4gZGl2IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgLypjYWxjdWxhdGVkKi9cXHJcXG59XCIsIFwiXCIgXSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG4gICAgZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgXCJcIiwgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgICAgICAgaWYgKCFjc3NNYXBwaW5nKSByZXR1cm4gY29udGVudDtcclxuICAgICAgICBpZiAodXNlU291cmNlTWFwICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYnRvYSkge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKSwgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgXCIgKi9cIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbIGNvbnRlbnQgXS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFsgc291cmNlTWFwcGluZyBdKS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gWyBjb250ZW50IF0uam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcclxuICAgICAgICByZXR1cm4gXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuICAgIH1cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICByZXR1cm4gbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVsyXSA/IFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiIDogY29udGVudDtcclxuICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcclxuICAgICAgICB9LCBsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG1vZHVsZXMgJiYgKG1vZHVsZXMgPSBbIFsgbnVsbCwgbW9kdWxlcywgXCJcIiBdIF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge30sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcclxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGlkICYmIChhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9ICEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgaXRlbVswXSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dIHx8IChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdID8gaXRlbVsyXSA9IG1lZGlhUXVlcnkgOiBtZWRpYVF1ZXJ5ICYmIChpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCIpLCBcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBsaXN0O1xyXG4gICAgfTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBmdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXSwgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuICAgICAgICAgICAgaWYgKGRvbVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBkb21TdHlsZS5yZWZzKys7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoO2ogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcnRzID0gW10sIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICByZWZzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzOiBwYXJ0c1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgc3R5bGVzID0gW10sIG5ld1N0eWxlcyA9IHt9LCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldLCBpZCA9IGl0ZW1bMF0sIGNzcyA9IGl0ZW1bMV0sIG1lZGlhID0gaXRlbVsyXSwgc291cmNlTWFwID0gaXRlbVszXSwgcGFydCA9IHtcclxuICAgICAgICAgICAgICAgIGNzczogY3NzLFxyXG4gICAgICAgICAgICAgICAgbWVkaWE6IG1lZGlhLFxyXG4gICAgICAgICAgICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3U3R5bGVzW2lkXSA/IG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KSA6IHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJ0czogWyBwYXJ0IF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pO1xyXG4gICAgICAgIGlmICghc3R5bGVUYXJnZXQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gICAgICAgIHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChcInRvcFwiID09PSBvcHRpb25zLmluc2VydEF0KSBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA/IGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nID8gc3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIDogc3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KSA6IHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpLCBcclxuICAgICAgICBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoXCJib3R0b21cIiAhPT0gb3B0aW9ucy5pbnNlcnRBdCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAgICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG4gICAgICAgIHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcbiAgICAgICAgaWR4ID49IDAgJiYgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIiwgYXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKSwgXHJcbiAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCksIHN0eWxlRWxlbWVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiLCBhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyksIFxyXG4gICAgICAgIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCksIGxpbmtFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuICAgICAgICAgICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSksIFxyXG4gICAgICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCAhMSksIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsICEwKTtcclxuICAgICAgICB9IGVsc2Ugb2JqLnNvdXJjZU1hcCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgQmxvYiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGJ0b2EgPyAoc3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyksIFxyXG4gICAgICAgIHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMpLCByZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCksIHN0eWxlRWxlbWVudC5ocmVmICYmIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG4gICAgICAgIH0pIDogKHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSwgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCksIFxyXG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlKG9iaiksIGZ1bmN0aW9uKG5ld09iaikge1xyXG4gICAgICAgICAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgICAgICAgICAgfSBlbHNlIHJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcbiAgICAgICAgdmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG4gICAgICAgIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpOyBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpLCBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaW5kZXhdICYmIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSksIGNoaWxkTm9kZXMubGVuZ3RoID8gc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSkgOiBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG4gICAgICAgIHZhciBjc3MgPSBvYmouY3NzLCBtZWRpYSA9IG9iai5tZWRpYTtcclxuICAgICAgICBpZiAobWVkaWEgJiYgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKSwgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKDtzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZDsgKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgICAgICAgdmFyIGNzcyA9IG9iai5jc3MsIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXAsIGF1dG9GaXhVcmxzID0gdm9pZCAwID09PSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyAmJiBzb3VyY2VNYXA7XHJcbiAgICAgICAgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSAmJiAoY3NzID0gZml4VXJscyhjc3MpKSwgc291cmNlTWFwICYmIChjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCIpO1xyXG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoWyBjc3MgXSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHQvY3NzXCJcclxuICAgICAgICB9KSwgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuICAgICAgICBsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSwgb2xkU3JjICYmIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXNJbkRvbSA9IHt9LCBpc09sZElFID0gZnVuY3Rpb24oZm4pIHtcclxuICAgICAgICB2YXIgbWVtbztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IG1lbW8gJiYgKG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSwgbWVtbztcclxuICAgICAgICB9O1xyXG4gICAgfShmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XHJcbiAgICB9KSwgZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gbWVtb1tzZWxlY3Rvcl0gJiYgKG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3RvcikpLCBcclxuICAgICAgICAgICAgbWVtb1tzZWxlY3Rvcl07XHJcbiAgICAgICAgfTtcclxuICAgIH0oZnVuY3Rpb24oc3R5bGVUYXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHlsZVRhcmdldCk7XHJcbiAgICB9KSwgc2luZ2xldG9uRWxlbWVudCA9IG51bGwsIHNpbmdsZXRvbkNvdW50ZXIgPSAwLCBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLCBmaXhVcmxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgREVCVUcgJiYgREVCVUcgJiYgXCJvYmplY3RcIiAhPSB0eXBlb2YgZG9jdW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgb3B0aW9ucy5hdHRycyA9IFwib2JqZWN0XCIgPT0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPyBvcHRpb25zLmF0dHJzIDoge30sIFxyXG4gICAgICAgIHZvaWQgMCA9PT0gb3B0aW9ucy5zaW5nbGV0b24gJiYgKG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpKSwgdm9pZCAwID09PSBvcHRpb25zLmluc2VydEludG8gJiYgKG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiKSwgXHJcbiAgICAgICAgdm9pZCAwID09PSBvcHRpb25zLmluc2VydEF0ICYmIChvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIik7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuICAgICAgICByZXR1cm4gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSwgZnVuY3Rpb24obmV3TGlzdCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtYXlSZW1vdmUgPSBbXSwgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldLCBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG4gICAgICAgICAgICAgICAgZG9tU3R5bGUucmVmcy0tLCBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFN0eWxlc1RvRG9tKGxpc3RUb1N0eWxlcyhuZXdMaXN0KSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmICgwID09PSBkb21TdHlsZS5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICB2YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdGV4dFN0b3JlID0gW107XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50LCB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNzcykge1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb247XHJcbiAgICAgICAgaWYgKCFsb2NhdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XHJcbiAgICAgICAgaWYgKCFjc3MgfHwgXCJzdHJpbmdcIiAhPSB0eXBlb2YgY3NzKSByZXR1cm4gY3NzO1xyXG4gICAgICAgIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0LCBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xyXG4gICAgICAgICAgICB2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybC50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XHJcbiAgICAgICAgICAgIH0pLnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHJldHVybiBmdWxsTWF0Y2g7XHJcbiAgICAgICAgICAgIHZhciBuZXdVcmw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdVcmwgPSAwID09PSB1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID8gdW5xdW90ZWRPcmlnVXJsIDogMCA9PT0gdW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID8gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybCA6IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpLCBcclxuICAgICAgICAgICAgXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59IF0pOyJdLCJmaWxlIjoibGlicy9qcXVlcnkuaW5wdXRtYXNrLmJ1bmRsZS5qcyJ9
