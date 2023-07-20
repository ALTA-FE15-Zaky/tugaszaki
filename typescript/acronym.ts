function acronym(phrase: string): string {
    //code
    const words = phrase.split(" ");
    let acronym = "";
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      acronym += word.charAt(0).toUpperCase();
    }
  
    return acronym;
  }
  
  console.log(acronym("Portable Network Graphics")); // PNG
  console.log(acronym("Correct me if I'm wrong")); // CMIIW
  console.log(acronym("Thanks god It's Friday")); // TGIF
  