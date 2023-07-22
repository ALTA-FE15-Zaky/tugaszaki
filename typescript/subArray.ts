function findMaxSumSubArray(k: number, arr: number[]): number {
    let maxSum = 0;
    let currentSum = 0;
  
    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
    maxSum = currentSum;
  
    // Slide the window and update the currentSum and maxSum
    for (let i = k; i < arr.length; i++) {
      currentSum = currentSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Test cases
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));    // 7
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]));    // 5
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]));    // 7
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]));    // 8
  