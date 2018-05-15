function changeVocals (str) {
    var result = '';
    var vokalAfter = 'abijuvefop';

    for (var i = 0; i < str.length; i++) {
        if ('aiueo'.indexOf(str[i]) !== -1 || 'AIUEO'.indexOf(str[i]) !== -1) {
            for (var j = 0; j < vokalAfter.length; j++) {
                if (str[i] === vokalAfter[j]) {
                    result += vokalAfter[j+1];
                } 
                if ((str[i] === vokalAfter[j].toUpperCase())) {
                    result += vokalAfter[j+1].toUpperCase();
                }
            } 
        } else {
            result += str[i];
        }
    }
    return result;
  }
  
  function reverseWord (str) {
      var reverse = '';
      for (var i = str.length - 1; i >= 0; i--) {
          reverse += str[i];
      }
      return reverse;
  }

  function setLowerUpperCase (str) {
      var result = '';
      for (var i = 0; i < str.length; i++) {
          if (str[i] === str[i].toLowerCase()) {
              result += str[i].toUpperCase();
          } else {
              result += str[i].toLowerCase();
          }
      }
      return result;
  }

  function removeSpaces (str) {
      if (str.length < 5) {
          return 'Minimal karakter yang diinputkan adalah 5 karakter';
      }
      var result = '';
      for (var i = 0; i < str.length; i++) {
          if (str[i] !== ' ') {
              result += str[i];
          }
      }
      return result;
  }

  function passwordGenerator (name) {
    var vocals = changeVocals(name);
    var reverse = reverseWord(vocals);
    var bigsmall = setLowerUpperCase(reverse);
    var joined = removeSpaces(bigsmall);
    return joined;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'