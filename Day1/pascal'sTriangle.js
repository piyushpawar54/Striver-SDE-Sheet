var generate = function (numRows) {
  let res = [];
  let pre = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        row.push(pre[j - 1] + pre[j]);
      }
    }
    pre = row;
    res.push(row);
  }
  return res;
};

console.log(generate(5));
