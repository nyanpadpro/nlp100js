var s1 = 'パトカー';
var s2 = 'タクシー';
var r = '';
var l1 = s1.length - 1;
var l2 = s2.length - 1;
var i = 0;

while (l1 >= i || l2 >= i) {
    if (l1 >= i) r += s1.charAt(i);
    if (l2 >= i) r += s2.charAt(i);
    i++;
}

console.log(r);
