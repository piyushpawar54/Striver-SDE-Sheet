/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let mergedInterval = [];
  if (intervals.length == 0) {
    return mergedInterval;
  }
  let tempInterval = intervals[0];

  for (let it of intervals) {
    if (it[0] <= tempInterval[1]) {
      tempInterval[1] = Math.max(it[1], tempInterval[1]);
    } else {
      mergedInterval.push(tempInterval);
      tempInterval = it;
    }
  }
  mergedInterval.push(tempInterval);

  return mergedInterval;
};
