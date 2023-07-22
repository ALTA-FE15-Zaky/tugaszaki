function cetakTablePerkalian(number: number): void {
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= number; j++) {
        const product = i * j;
        row += `${product}`;
      }
      console.log(row);
    }
  }
  
  cetakTablePerkalian(9);
  
  