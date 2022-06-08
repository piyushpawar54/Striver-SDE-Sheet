var myPow = function (x, n) {
  let ans = 1.0;
  let pow = n;
  if (pow < 0) {
    pow = -1 * pow;
  }
  while (pow > 0) {
    if (pow % 2 == 1) {
      ans = ans * x;
      pow = pow - 1;
    } else {
      x = x * x;
      pow = pow / 2;
    }
  }
  if (n < 0) {
    ans = 1.0 / ans;
  }
  return ans;
};
