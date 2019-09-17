function getDivisorsCnt(n) {
  if(!n) {
    return 1;
  }

  var arr = [];

  for(var i = 0; i <= n; i++) {
    if( n % i == 0 ) {
      arr.push(n);
    }
  }

  return arr.length;
}

