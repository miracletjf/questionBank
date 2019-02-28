/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var f = [0];
    for(var i=1;i<=amount;i++){
        f[i] = amount + 1 ;
        for(var j=0;j<coins.length;j++){
            if(i>=coins[j]){
                f[i] = f[i] > f[i-coins[j]] + 1 ? f[i-coins[j]] + 1 : f[i];
            }
        }      
    }
    return f[amount] > amount ? -1 : f[amount];
};

// 解题思路：
//     动态规划思想： 当前最少硬币数 f[i] = min(f[i],f[i-coins[0] + 1,f[i-coins[1]] + 1 ,...,f[i-coins[i-conins[coins.length-1]] + 1);
//     f[0] = 0
//     f[i] 初始值 要比amount大，所以定义为 amount + 1
//     输出时如果 f[amount] > amount 则代表不存在组合成对应金额的组合，输出 -1 