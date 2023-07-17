function meanMedian(arrayInput: number[]) {
    //code
    const sortedArray = arrayInput.slice().sort((a, b) => a - b);
    const length = sortedArray.length;
  
    //mean
    const mean = sortedArray.reduce((sum, num) => sum + num, 0) / length;
  
    //median
    let median: number;
    if (length % 2 === 0) {
      const midIndex = length / 2;
      median = (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      median = sortedArray[midIndex];
    }
  
    return `${mean} ${median}`
  }
  
  console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
  console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
  console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
  console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
  console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30
  