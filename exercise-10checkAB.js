function checkAB(str) {
    
    for (var i=0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'b') {
            if (str[i+4] == 'a' || str[i+4] == 'b') {
                return true;
            } else {
                return false;
            }
        }
    }
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false