'use strict';
/*

*/


function solution(s, t, a, b, apples, oranges) {
  // s : home_start
  // t : home_end
  // a : apple tree
  // b : orange tree


  // 오렌지 위치 판단

  const findFruit = (arrFruit, tree_x) => {
    return arrFruit.reduce( (cnt, v) => {
      if( s <= tree_x+v && t >= tree_x+v) cnt++;
      return cnt;
    }, 0);
  }

  console.log(findFruit(apples, a));
  console.log(findFruit(oranges, b));


}

console.log( solution(7, 11, 5, 15,
  [-2, 2, 1],
  [5, -6])); // [1,1]