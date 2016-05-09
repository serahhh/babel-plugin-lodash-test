'use strict';

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = {
    foo: {
        bar: false,
        baz: true
    }
};

// works
console.log((0, _merge3.default)({}, DEFAULTS, { whatever: 'blah' }));

function mergeTest(src) {
    return merge({}, DEFAULTS, src);
}

// doesn't work :(
console.log(mergeTest({ foo: { bar: true } }));