//You are given a read only array of n integers from 1 to n.
//Each integer appears exactly once except A which appears twice and B which is missing.
//Return A and B.

let repeatedNumber = function (A) {
  let n = A.length + 1;
  let missing;
  let repeat;

  let substitute = new Array(n).fill(0);

  let ans = [];

  for (let i = 0; i < A.length; i++) {
    substitute[A[i]] += 1;
  }

  for (let i = 1; i <= A.length; i++) {
    if (substitute[i] == 0) {
      missing = i;
    }
    if (substitute[i] > 1) {
      repeat = i;
    }
  }
  ans.push(repeat);
  ans.push(missing);

  return ans;
};
