/*!
 * javascript-library 1.0.0
 * Licensed under MIT
 */

'use strict';

const type = require('./type');

function clone(source) {
    const t = type(source);
    if (t != 'object' && t != 'array') {
        return source;
    }

    let target;

    if (t === 'object') {
        target = {};
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]);
            }
        }
    } else {
        target = [];
        for (let i = 0; i < source.length; i++) {
            target = clone(source[i]);
        }
    }

    return target;
}

module.exports = clone;
