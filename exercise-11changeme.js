function changeMe(arr) {
  
  for (var i=0; i < arr.length; i++) {
    var obj = {};
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    if (arr[i][3]) {
      obj.age = 2018 - arr[i][3];
    } else if (arr[i][3] == undefined || arr[i][3] > 2018) {
      obj.age = "Invalid Birth Year";
    }
    console.log(obj);
  }
  if(arr.length === 0) {
    console.log('""');
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]); 