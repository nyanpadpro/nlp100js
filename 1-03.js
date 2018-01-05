var s = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';
s = s.replace(',', '').replace('.', '');

var arr = s.split(' ');
var r = [];

for (let i = 0; i < arr.length; i++) {
    let o = {
        "text": arr[i],
        "size": arr[i].length
    };
    r.push(o);
}

r.sort((a, b) => {
    if (a.size < b.size) {
        return 1;
    }
    else {
        return -1;
    }
});

console.log(r);
