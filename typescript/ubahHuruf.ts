function ubahHuruf(sentence: string): string {
    //code
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const bobAlphabet = 'KLMNOPQRSTUVWXYZABCDEFGHIJ';
  
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toUpperCase();
      const index = alphabet.indexOf(char);
  
      if (index !== -1) {
        const encryptedChar = bobAlphabet[index];
        result += encryptedChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE"));     // COZEVCK YUO
  console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
  console.log(ubahHuruf("INDONESIA"));       // SXNYXOCSK
  console.log(ubahHuruf("GOLANG"));          // QYVKXQ
  console.log(ubahHuruf("PROGRAMMER"));      // ZBYQBKWWOB
  