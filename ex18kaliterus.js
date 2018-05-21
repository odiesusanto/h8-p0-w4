function kaliTerusRekursif(angka) {
    
    if (angka < 10) {
        return angka;
    } else {
        var strAngka = String(angka);
        if (strAngka.length > 1) { 
            var count = 1;
            for (var i = 0; i < strAngka.length; i++) {
                count *= strAngka[i];
            }
            strAngka = count.toString();
            return kaliTerusRekursif(Number(strAngka));
        }
    }
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6