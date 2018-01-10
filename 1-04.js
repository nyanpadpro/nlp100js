var s = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';
s = s.replace(',', '').replace('.', '');

var arr = s.split(' ');
var r = {};
var f = [1, 5, 6, 7, 8, 9, 15, 16, 19];

for (let i = 0; i < arr.length; i++) {
    if (f.find((n) => {
            if (n == (i + 1)) {
                return true;
            }
            else {
                return false;
            }
        })) {
        r[(i + 1) + ''] = arr[i].substr(0, 1);
    }
    else {
        r[(i + 1) + ''] = arr[i].substr(0, 2);
    }
}

console.log(r);
