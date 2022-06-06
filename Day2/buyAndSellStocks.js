var maxProfit = function (prices) {
  let maxPro = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxPro = Math.max(maxPro, prices[i] - minPrice);
  }
  return maxPro;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
