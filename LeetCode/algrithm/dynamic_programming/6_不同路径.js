/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var paths = [];
  for(var i=0;i<m;i++){
      paths[i] = [];
      for(var j=0;j<n;j++){
          if(i === 0 || j === 0){
              paths[i][j] = 1;
          }else {
              paths[i][j] = paths[i-1][j] + paths[i][j-1]
          }
      }
  }
  return paths[m-1][n-1];
};

// 解题思路：
//   动态规划：到达当前位置的 路径数 = 到达当前位置左边的位置的 路径数 + 到达当前位置上面位置的 路径数;
//   当路径当前位置为右下角时结束
//   当前位置在最左边 或者 最上面时, 路径数 = 1 



// // 大神思路：组合法
//   想要从左上角走到右下角一共有 (m-1 + n-1) 步
//   其中 有 m-1 步是 向下的
//   所以有：C(m-1,m+n-2) = A(m-1,m+n-2) / A(m-1)
//   A 为排序公式
//   C 为组合公式
  
//   因为数可能很大，不推荐这个做法，但是思路很好