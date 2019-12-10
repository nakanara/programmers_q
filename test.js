'use strict';
/*

*/


function solution(arr) {
  let answer = [];
  
  return answer;
}

const lpad = (n, v) => {
  let t = [];
  for(let i=0; i < n-v.length; i++) {
    t.push('0');
  }
  t.push(v);
  return t.join('');
}
let r = 12;
let black = r.toString(2);



console.log(`${black} => ${lpad(8, black)}`);


let v = '11111111';
console.log(`${parseInt(v, 2)}`);