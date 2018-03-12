function angkaPrima(angka) {
  
  for(var x = 2; x < angka; x++) {
    if (angka % x === 0){
      return false;
    }
  }
  return true;
}
console.log(angkaPrima(2));
console.log(angkaPrima(3)); 
console.log(angkaPrima(7)); 
console.log(angkaPrima(6)); 
console.log(angkaPrima(23)); 
console.log(angkaPrima(33)); 