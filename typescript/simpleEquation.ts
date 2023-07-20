function simpleEquation(a: number, b: number, c: number): void {
    //code
    let x: number;
    let y: number = 0; 
    let z: number = 0;
    let solutionFound = false;
  
    for (x = 1; x <= 10000; x++) {
      for (y = 1; y <= 10000; y++) {
        z = a - x - y;
  
        if (x * y * z === b && x * x + y * y + z * z === c) {
          solutionFound = true;
          break;
        }
      }
  
      if (solutionFound) {
        break;
      }
    }
  
    if (solutionFound) {
      console.log(`${x} ${y} ${z}`);
    } else {
      console.log("No solution");
    }
  }
  
  simpleEquation(1, 2, 3);   // No solution
  simpleEquation(6, 6, 14);  // 1 2 3
  