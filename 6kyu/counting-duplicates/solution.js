function duplicateCount(text){
  let characters = text.split('');
  let character_count = {}

  characters.forEach(char => {
    if( isNaN(char) ) {
       char = char.toLowerCase();
    }

    if( char in character_count ) {
      character_count[char] = character_count[char] + 1;
    } else {
      character_count[char] = 1;
    }
  });

  let counter = 0;

  Object.entries(character_count).forEach(([key, value]) => {
    if(value >= 2) { counter++; }
  });

  return counter;
}
