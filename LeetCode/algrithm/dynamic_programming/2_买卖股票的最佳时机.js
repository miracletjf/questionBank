/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = Number.POSITIVE_INFINITY;
    var max = 0;
    for(var i = 0; i < prices.length ; i++){
        minPrice = Math.min(minPrice,prices[i]);
        max = Math.max(max, prices[i] - minPrice);
    }
    
    return max;
};

// 解题思路：
// 动态规划 前i天的最大收入 = max{前 i-1 天的最大收入, 当前收入 - 前 i-1 天中的最小收入}