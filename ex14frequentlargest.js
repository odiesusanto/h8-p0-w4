function sorting(arrNumber) {
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = j + 1; j < arrNumber.length; j++) {
            var temp = 0;
            if (arrNumber[i] === arrNumber[j]) {
                temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length === 0) {
        return '';
    }
    var max = 0;
    var countMax = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > max) {
            max = arrNumber[i];
            countMax = 1;
        } else if (max === arrNumber[i]) {
                countMax++;
        }
    }
    return 'angka paling besar adalah ' + max + ' dan jumlah kemunculan sebanyak ' + countMax + ' kali';

  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''