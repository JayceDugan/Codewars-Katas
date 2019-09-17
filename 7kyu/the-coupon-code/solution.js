function equals(arg1, arg2) {
  return arg1 === arg2;
}

function compareDates(x, y) {
  return x <= y;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 var cd = new Date(currentDate);
 var ed = new Date(expirationDate);

 return (equals(enteredCode, correctCode)) ? compareDates(cd, ed) : false;
}
