function squareDigits(num) {
  let nstr = num.toString();
  let digits = nstr.split("");
  let total = '';

  for( var i = 0; i < digits.length; i++ ) {
     let dgt = parseInt(digits[i]);
     let sq = Math.pow(dgt, 2);

     total += sq.toString();
  }

  return parseInt(total);
}
