/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var moneys = [0,nums[0]];
    for(var i=1;i < nums.length; i++){
        moneys.push(moneys[i] > moneys[i-1]+nums[i] ? moneys[i]: moneys[i-1] + nums[i]) 
    }
    return moneys[nums.length];
};

// 解题思路
//     动态规划思想: 最大金额 moneys[n] = Max(moneys[n-1],moneys[n-2] + nums[i]); i + 1 === n;
