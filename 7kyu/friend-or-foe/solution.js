function friend(friends){
  var arr = [];

  friends.map((x) => {
    if(x.length == 4) {
      arr.push(x);
    }
  });

  return arr;
}
