/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0], positiveSubs = [];
    positiveSubs[0] = nums[0]>0? nums[0]:0;
    for(var i = 1; i<nums.length;i++){
        if(nums[i]>=0){
            positiveSubs[i] = positiveSubs[i-1] + nums[i];
            max = Math.max(max,positiveSubs[i]);
        }else {
            if(max < 0 ){
                max = Math.max(nums[i],max);
            }
            positiveSubs[i] = positiveSubs[i-1] + nums[i] >= 0 ? positiveSubs[i-1] + nums[i] : 0;
        }
    }
    
    return max;
};

// 解题思路
//     动态规划思想: 最大子序和 = Max(当前子序数和 positiveSubs[i],当前已知最大自序和 max)
//     当前子序和 positiveSubs[i] = (当 nums[i]<=0) positiveSubs[i-1] + nums[i] > 0 ? positiveSubs[i-1] + nums[i] : 0
//                               = (当 nums[i]>0) positiveSubs[i-1] + nums[i] 
//                                 因为只有nums[i]>0的时候,子序和才有可能最大，所以 max = Max(max,positiveSubs[i]);
//     以上思路忽略了一种情况：
//         当目标数组全部为负数时,最大自序和只可能是唯一的负数，很有可能不参与 positiveSubs[i] 与 max 的比较
//         所以还要在 nums[i]<0 的情况中判断 max 是否为 负数



// 以下是大神解法:
var maxSubArray = function(nums) {
    var max=nums[0], sum=0;
    for(var i = 0; i<nums.length;i++){
        if(sum>0){
            sum += nums[i]
        }else {
           sum = nums[i]
        }

        max = Math.max(sum,max);
    }
    
    return max;
};

// 思路分析：
//     动态规划思想：最大子和 = Max(当前子序和 sum, 当前已知最大子序和 max)
//         如果当前子序和 > 0 即：在当前元素前加的将会是一个 正数
//             sum = sum + nums[i];
//         如果当前子序和 <= 0 即：当前元素前加的将会是一个 负数 (所以舍弃前面的子串)
//             sum = nums[i]
//         然后比较 当前子串和 与 当前已知最大子串
//             max = max(sum,max)