function digitPerkalianMinimum(angka) {
    var digit = [];

    for(var i=1; i <= angka; i++) {
        var hasil = '';
        if(angka%i === 0) { //24 % 1 = 0 || 24 %2 = 0 || 24 % 3 || 24 %4
            hasil = (i).toString() + '' +(angka / i).toString();
            // 24/1 = 24
            // 24/2 = 12
            // 24/3 = 8
            // 24/4 = 6
            digit.push(hasil.length);
        }
    }
    digit.sort();
    var min = digit[0];
    for (var j=0; j < digit.length; j++) {
        if (min === digit[0]){
            return min;
        }
    }
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2