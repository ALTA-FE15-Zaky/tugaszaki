function makeDiamond(huruf: string): void {
    const n: number = huruf.charCodeAt(0) - 'A'.charCodeAt(0)
    const diamondSize: number = n * 2 + 1
  
    for (let i = 0; i <= n; i++) {
      const jarak: string = " ".repeat(n - i)
      const huruf1: string = i === 0 ? 'A' : String.fromCharCode('A'.charCodeAt(0) + i) + " ".repeat(i * 2 - 1) + String.fromCharCode('A'.charCodeAt(0) + i)
      const baris: string = jarak + huruf1 + jarak
      console.log(baris)
    }
  
    for (let i = n - 1; i >= 0; i--) {
      const jarak: string = " ".repeat(n - i);
      const huruf1: string = i === 0 ? 'A' : String.fromCharCode('A'.charCodeAt(0) + i) + " ".repeat(i * 2 - 1) + String.fromCharCode('A'.charCodeAt(0) + i)
      const baris: string = jarak + huruf1 + jarak
      console.log(baris)
    }
  }
  
  
  const huruf: string = 'C'
  makeDiamond(huruf)