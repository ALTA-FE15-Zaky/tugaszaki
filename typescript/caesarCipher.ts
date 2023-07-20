function caesarCipher(offset: number, input: string): string {
    //code
    const alphabetLength = 26; // Jumlah huruf dalam alfabet
    const lowercaseA = 'a'.charCodeAt(0); // Kode Unicode huruf 'a'
  
    let cipheredString = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
  
      // Mengabaikan spasi
      if (char === ' ') {
        cipheredString += char;
        continue;
      }
  
      const charCode = char.charCodeAt(0);
      const shiftedCharCode = ((charCode - lowercaseA + offset) % alphabetLength) + lowercaseA;
      const cipheredChar = String.fromCharCode(shiftedCharCode);
  
      cipheredString += cipheredChar;
    }
  
    return cipheredString;
  }
  
  console.log(caesarCipher(3, "abc")); // def
  console.log(caesarCipher(2, "alta")); // cnvc
  console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl
  