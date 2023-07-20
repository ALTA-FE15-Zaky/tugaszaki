function decryptAtbash(cipherText: string): string {
    //code
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decryptedText = "";
  
    for (let i = 0; i < cipherText.length; i++) {
      const char = cipherText[i];
      const charIndex = alphabet.indexOf(char.toLowerCase());
  
      if (charIndex !== -1) {
        const decryptedChar = alphabet[alphabet.length - 1 - charIndex];
        decryptedText += decryptedChar;
      } else {
        decryptedText += char;
      }
    }
  
    return decryptedText;
  }
  
  console.log(decryptAtbash("Olivn rkhfn wloli hrg znvg")); // Loremipsumdolorsitamet
  console.log(decryptAtbash("Svool dliow! R'n ovzimrmt gbkvhxirkg!")); // HelloworldImlearningtypescript
  console.log(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")); // Thequickbrownfoxjumpsoverthelazydog
  