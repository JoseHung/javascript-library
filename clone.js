function type(x) {
    if (x instanceof Array) {
        return 'array';
    }

    if (x instanceof Object) {
        return 'object';
    }
}

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

let a = { c: 1 };
let b = clone(a); 
a.c = 2;
console.log(a.c);
console.log(b.c);