function rot13(message){
  /*
   * Alphabet Data
   */
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabet_lowercase = alphabet.split('');
  const alphabet_uppercase = alphabet_lowercase.map(e => e.toUpperCase());

  /*
   * Entry Data
   */
  const split_words = message.split(' ');
  const last_index = split_words.length - 1;
  var return_output = "";

  // Iterate through the words.
  for(var i = 0; i < split_words.length; i++) {

    // Retrieve the characters from each word.
    var characters = split_words[i].split('');

    // Loop through the characters
    for(var c = 0; c < characters.length; c++) {
      let character = characters[c];
      let character_type = typeof character;
      let letter_regex = /^[a-zA-Z]+$/;
      var isUpperCase = false;

      if( !letter_regex.test(character)) {
        // Return the character
        return_output = return_output + character;
      } else {
        let character_index = null;

        // Let's find out the index.
        if(character == character.toUpperCase()) {
          // Letter is uppercase
          character_index = alphabet_uppercase.indexOf(character);
          isUpperCase = true;
        } else {
          character_index = alphabet_lowercase.indexOf(character);
        }

        let cipher_index = character_index += 13;
        let cipher_letter = null;

        if(cipher_index >= 26) { cipher_index = cipher_index - 26 }

        if(isUpperCase) {
          cipher_letter = alphabet_uppercase[cipher_index];
        } else {
          cipher_letter = alphabet_lowercase[cipher_index];
        }

        return_output = return_output + cipher_letter;
      }
    }

    if(i !== last_index) {
      return_output = return_output + " ";
    }
  }

  return return_output;
}
