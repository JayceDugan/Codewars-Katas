function positiveSum(arr) {

  var returnVals = [];
  var returnNum = 0;

  for( i = 0; i < arr.length; i++) {

    var num = arr[i];

    if(num > 0) {
      returnVals.push(num);
    }

  }

  for( i = 0; i < returnVals.length; i++) {

    returnNum += returnVals[i];

  }

  return returnNum;

}
