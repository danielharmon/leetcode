//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.


var moveZeroes = function(nums) {
  let zeroes = 0;
  let pointer = 0;
  let next = 0;
  while (next < nums.length) {
          if(nums[next]=== 0) {
              next++;
              zeroes++
              continue;
          } else {
              nums[pointer] = nums[next];
              pointer++
              next++;
          }

  }
  while(zeroes) {
      nums[nums.length - zeroes] = 0
      zeroes--
  }
};