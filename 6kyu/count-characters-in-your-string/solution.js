function count (string) {
  if(!string.length) {
    return {};
  }

  var characters = {};
  var split_string = string.split('');

  split_string.map(c => {
    if( c in characters ) {
      characters[c] = parseInt(characters[c] + 1);
    } else {
       characters[c] = 1;
    }
  });

  return characters;
}
