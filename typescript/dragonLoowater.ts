function dragonOfLoowater(dragonHead: number[], knightHeight: number[]): void {
    //code
    dragonHead.sort((a, b) => a - b); // Mengurutkan diameter kepala naga secara ascending
    knightHeight.sort((a, b) => a - b); // Mengurutkan tinggi ksatria secara ascending
  
    let totalHeight = 0;
    let knightIndex = 0;
    let isPossible = true;
  
    for (let i = 0; i < dragonHead.length; i++) {
      const diameter = dragonHead[i];
  
      if (knightIndex >= knightHeight.length) {
        // Jika tidak ada ksatria yang tersisa
        isPossible = false;
        break;
      }
  
      const height = knightHeight[knightIndex];
  
      if (diameter <= height) {
        totalHeight += height;
        knightIndex++;
      } else {
        knightIndex++;
        i--;
      }
    }
  
    if (isPossible) {
      console.log(totalHeight);
    } else {
      console.log("knight fall");
    }
  }
  
  dragonOfLoowater([5, 4], [7, 8, 4]); // 11
  dragonOfLoowater([5, 10], [5]); // knight fall
  dragonOfLoowater([7, 2], [4, 3, 1, 2]); // knight fall
  dragonOfLoowater([7, 2], [2, 1, 8, 5]); // 10
  