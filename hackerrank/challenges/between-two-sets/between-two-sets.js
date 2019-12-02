'use strict';
/*

*/


function solution(a,b) {
  let answer = 0;

  const GCD = (a,b)=> {
    let [less, greater] = (a<b)? [a,b] : [b,a],
    temp = less%greater;

    while(temp) [temp, less] = [less % temp, temp];
    return less;
  }

  // 최소공약수*최대공약수 = a*b
  // a*b/ gcd(a,b)
  const LCM = (a,b=1) => {
   console.log(`params a=${a} b=${b} === ${GCD(a,b)}`)
   return a*b/GCD(a,b);
  }
  let comval= LCM(...a);

  let min = Math.min(...b);

  console.log(GCD(a[0], a[1]));
  for(let tmp=GCD(...a); tmp <= min; tmp+= comval) {
    console.log(`min ${min} / ${tmp} ${comval}`)
  
    if(b.every( v => (v % tmp ===0))){
      answer++;
    } 
  }
  
  return answer;
}

//console.log( solution([2,4], [16,32,96])); /3
//console.log( solution([2,6], [24,36]));//2
//console.log( solution([2], [20, 30, 12])); //1
console.log( solution([3,4], [24, 48]));//2