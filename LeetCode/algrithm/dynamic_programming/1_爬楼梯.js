/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    var types = [1,1,2];
    
    for(var i=3;i<=n;i++){
        types[i] = types[i-1] + types[i-2]
    }
    return types[n];
};

// 解题思路：
// 1. 台阶数量为n,爬台阶的方式有 t[n] 种；
// 2. 因为每次只可以爬 1 ~ 2 阶台阶
//    所以最后 1 步可以走 2 阶 或者 1 阶
// 3. 那么 t[n] 的值为 t[n-1] + t[n-2]
// 4. 已知 t[1]=1,t[2]=2 (口算)
// 这是典型的斐波那契数列！ 