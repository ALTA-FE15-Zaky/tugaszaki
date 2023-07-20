function isArmstrongNumber(num: number): boolean {
    //code
    const numString = num.toString();
    const numNumber = numString.length;
    let sum = 0;
  
    for (let i = 0; i < numNumber; i++) {
      const digit = parseInt(numString[i]);
      sum += digit ** numNumber;
    }
  
    return num === sum;
  }
  
  console.log(isArmstrongNumber(153)); // true
  console.log(isArmstrongNumber(9)); // true
  console.log(isArmstrongNumber(10)); // false
  