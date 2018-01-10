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

var s = 'I am an NLPer';
console.log(ngram(2, s));
