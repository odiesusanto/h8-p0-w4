function hitungHuruf(kalimat) {
  var kalimatSplit = kalimat.split(' ');
  var compare = 0;
  var word = '';
  
  for (var i=0; i < kalimatSplit.length; i++) { //looping sentence
    word = kalimatSplit[i];
    var alphabet = 0;
    for (var j=0; j < kalimatSplit[i].length; j++) { //looping each word
      var tempWord = word[j];
      for (var k = 0; k < word.length; k++) { //looping alphabet to check repetition of alphabet
        if ((j !== k) && (tempWord === word[k])) {
          alphabet++; //move on to the next alphabet
          //console.log(alphabet);
        }
      }
    }
    if (alphabet > compare) {
      compare = alphabet;
      kalimatSplit = word;
    }
  }
  if (compare > 0) {
    return kalimatSplit;
  } else {
    return -1;
  }
}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('super'));