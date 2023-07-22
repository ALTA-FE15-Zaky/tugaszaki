function fiboTopDown(number: number): number {
    //code
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fiboTopDown(number - 1) + fiboTopDown(number - 2);
    }
  }
console.log(fiboTopDown(0)) //0
console.log(fiboTopDown(1)) //1
console.log(fiboTopDown(2)) //1
console.log(fiboTopDown(3)) //2
console.log(fiboTopDown(5)) //5
console.log(fiboTopDown(6)) //8
console.log(fiboTopDown(7)) //13
console.log(fiboTopDown(9)) //13
console.log(fiboTopDown(10)) //55
