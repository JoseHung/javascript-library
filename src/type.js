function type(x) {
    if (x instanceof Array) {
        return 'array';
    }

    if (x instanceof Object) {
        return 'object';
    }
}

module.exports = type;