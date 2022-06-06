var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (mid <= right) {
    if (nums[mid] === 1) mid++;
    else if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++; //we increment left here by +1, since we know, we values in left are all 0
      mid++;
    } else if (nums[mid] === 2) {
      [nums[right], nums[mid]] = [nums[mid], nums[right]];
      right--; //we dont increment mid here, as, mid could be possible 0, and we dont want to skip 0
    }
  }
  return nums;
};

nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
