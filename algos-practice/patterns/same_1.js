// given a bnary array num, return the maximum number of consecutive 1's in the array
const findMaxConsecutiveOnes = (nums) => {
   let max = 0;
   let current = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 1) {
         current++;
         max = Math.max(max, current);
      } else {
         current = 0;
      }
   }
   return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1])); // 4 