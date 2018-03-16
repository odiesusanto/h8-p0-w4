function cariMedian(arr) {
  var middle = Math.floor((arr.length-1)/2);
  
  for (var i=0; i < arr.length; i++) {
    if (arr.length % 2 !== 0) {
      return arr[middle];
    } else if (arr.length % 2 === 0) {
      return (arr[middle] + arr[middle + 1]) /2;
    }
  }
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log(cariMedian([2, 2, 3, 3]));