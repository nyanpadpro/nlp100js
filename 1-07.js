// n-gram
function ngram(n, seq) {
    let s = seq.replace(',', '').replace('.', '').replace(/\s+/g, "");
    let l = s.length;
    let r = [];

    for (let i = 0; i < l; i++) {
        if ((i + n) > l) {
            r.push(s.substr(i, (l - i)));
            i = l;
        }
        else {
            r.push(s.substr(i, n));
            i += n - 1;
        }
    }
    return r;
}

// 積集合
function seki(a1, a2) {
    return a1.filter((item) => {
        for (let i = 0; i < a2.length; i++) {
            if (item === a2[i]) {
                return true;
            }
        }
        return false;
    });
}

// 和集合
function wa(a1, a2) {
    return a1.concat(a2);
}

// 差集合
function sa(a1, a2) {
    return a1.filter((item) => {
        for (let i = 0; i < a2.length; i++) {
            if (item === a2[i]) {
                return false;
            }
        }
        return true;
    });
}

var s1 = 'paraparaparadise';
var s2 = 'paragraph';
var a1 = ngram(2, s1);
var a2 = ngram(2, s2);

console.info(a1);
console.info(a2);
console.info(seki(a1, a2));
console.info(wa(a1, a2));
console.info(sa(a1, a2));

// seが存在するか
console.info(a1.indexOf('se'));
console.info(a2.indexOf('se'));
