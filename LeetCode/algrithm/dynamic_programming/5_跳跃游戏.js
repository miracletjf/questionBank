/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var marks = [0];

  if(nums.length === 1){
    return true;
  }

  for(var i=0;i<nums.length;i++){
    if(nums[i] === 0){
      marks.push(i);
    }
  }
  for(var j = 0 ; j<marks.length-1; j++ ){
    if(!reduceNums(nums,marks[j],marks[j+1]) && (nums.length - 1 !== marks[j+1])){
      return false;
    }
  }
  return true;
};

function reduceNums(nums,start,end){
  var max = 0;
  for(var i=start;i<end;i++){
    if(nums[i] + i - end > 0){
        max = max > nums[i] + i - end ? max : nums[i] + i -end;
    }
  }
  return nums[end] = max;
}

// 解题思路：
//   1. 数组是否能够达到最后一个元素，取决于是否能够 跳跃 数组中的元素 0;
//   2. 数组能否跳跃 元素0 取决于 元素0 之前的元素到达 0 的距离是否大于 元素可达到的最大距离;
//   3. 为了易于统计计算，把数组分为 若干个小段，每段以元素0结尾，
//      并且把能跳跃过元素0的数组的最大距离保存下来，替换当前段元素0的位置的值，
//      作为下一段组的开始
//   4. 若数组是以元素0结尾，则不考虑最后一元素0


// 以下是大神解法：

// 解法一：
var canJump = function(nums) {
  var n = 1;
  for(var i=nums.length-2;i>=0;i--){
    if(nums[i]>=n){
      n = 1;
    }else {
      n++;
    }
  }

  if(n>1){
    return false;
  }

  return true;
};

// 思路：
//   从后往前，如果当前元素能够达到当前最后位置，则截断数组。
//   距离通过变量 n 记录下来
//     如果截断，距离n则重置为 1
//     否则 n++

// 解法二：
var canJump = function(nums) {
  var max = 0;
  for(var i=0;i<nums.length-1;i++){
    max = max > i+nums[i] ? max : i + nums[i]; 
    if(max === i){
      return false;
    }
  }

  if(max < nums.length-1){
    return false;
  }

  return true;
};

// 思路：
//   动态规划思想： 数组当前能够达到的最大位置 = max( 当前位置之前能够达到最大的位置 , 当前位置能够达到的位置 )
//   判定条件： 
//             1. 数组当前能够达到的最大位置 > 当前位置
//             2. 数组能够达到的最大位置 >= 数组最后位置