// Source:
// http://www.pulletsforever.com/pulletsforever/Pullets_Forever_Blog/Entries/2009/7/12_Running_JSLint_with_Safaris_JavaScript_Core.html

// jsc.js
// 2009-07-08
/*
Copyright (c) 2002 Douglas Crockford (www.JSLint.com) JSC Edition
Copyright (c) 2009 Apple Inc. All rights reserved.
*/

// This is the JSC companion to fulljslint.js.

/*extern JSLINT */

(function (a) {
if (!a[0]) {
print('Usage: jslint.js -- "$(cat myFile.js)"');
quit(1);
}
if (!JSLINT(a[0], {bitwise: true, eqeqeq: true, immed: true,
newcap: true, nomen: true, onevar: true, plusplus: true,
regexp: true, undef: true, white: true})) {
for (var i = 0; i < JSLINT.errors.length; i += 1) {
var e = JSLINT.errors[i];
if (e) {
print('Lint at line ' + (e.line + 1) + ' character ' +
(e.character + 1) + ': ' + e.reason);
print((e.evidence || '').
replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
print('');
}
}
quit(2);
} else {
print("jslint: No problems found.");
quit();
}
}(arguments));