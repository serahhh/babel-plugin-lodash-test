import { merge } from 'lodash';

const DEFAULTS = {
    foo: {
        bar: false,
        baz: true,
    },
};

// works
console.log(merge({}, DEFAULTS, { whatever: 'blah' }));

function mergeTest(src) {
    return merge({}, DEFAULTS, src);
}

// doesn't work :(
console.log(mergeTest({ foo: { bar: true } }));
