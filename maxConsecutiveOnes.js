var findMaxConsecutiveOnes = function(nums) {
  let currentOnes = 0;
  let biggestOnes = 0;
  let next = 0;
  while (next <= nums.length) {
      if (nums[next] === 1) {
          currentOnes++
          next++
      } else {
          if (currentOnes > biggestOnes) { biggestOnes = currentOnes }

          next++;
          currentOnes = 0;
      }
  }
  return biggestOnes
};