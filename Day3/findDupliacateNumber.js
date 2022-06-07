//Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
//There is only one repeated number in nums, return this repeated number.

//////////////////////
//Floyd's Tortoise and Hare (Cycle Detection)
//////////////////////

var findDuplicate = function (nums) {
  // Find the intersection point of the two runners.

  let tortoise = nums[0];
  let hare = nums[0];
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise == hare) {
      break;
    }
  }

  // Find the "entrance" to the cycle.
  tortoise = nums[0];
  while (tortoise != hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  return hare;
};
