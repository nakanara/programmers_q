'use strict';
/*

*/

  /**
   * 최대 공약수 구하기
   * @param {} a 
   * @param {*} b 
   */
  const GCD = (a,b=null) => {

    if(b === null) return a;

    let [less, greater] = (a>b)? [a,b] : [b,a];
    let temp = greater % less;
    
    while(temp) {
      [temp, less] = [less%temp, temp];
    }

    return less;

  }

  const GCDArray = (arr)=>{
    let i=arr.length;
    let temp = null;

    while(i--) {
      console.log(`1=> ${temp} , ${arr[i]}`)
      temp = GCD(arr[i], temp);
      console.log(`2=> ${temp} , ${arr[i]}`)
    }

    return temp;
  }

  const LCM = (a, b = null) => {
    if(b === null) return a;

    return a*b/ GCD(a,b);
  }

  const LCMArray = (arr) => {
    let i=arr.length;
    let temp = null;

    while(i--) {
      console.log(`1=> ${temp} , ${arr[i]}`)
      temp = LCM(arr[i], temp);
      console.log(`2=> ${temp} , ${arr[i]}`)
    }

    return temp;
  }



function solution(a,b) {

  let answer = [];
  let i=0;


  // let gcd_value = a.reduce((t, v, i)=> {
  //   return GCD(v, t);
  // }, null);

  let gcd_value = LCM(...a);

  let min = Math.min(...b);

  // console.log(`1=> gcd_value=${gcd_value} == ${min}`);

  for(i=gcd_value; i <= min; i = gcd_value +i  ){

    // console.log(`for ==> ${i}`);
    // a 배열 확인
    let aResult = a.some((v) => {
      return i%v;
    });

    // console.log('=====result===');
    // console.dir(aResult);

    let bResult = b.some((v) => {
      return v%i;
    });
    // console.dir(bResult);

    if(!aResult && !bResult) {
      answer.push(i);
      // console.log(`3=> answer => ${i}`);
    }

  }

  return answer.length;
}

// console.log( solution([3,4], [24,48])); // 2
// console.log( solution([2,6], [24,36])); // 2
// console.log( solution([2,4], [16, 32, 96])); // 3

console.log( LCMArray([2,4,8, 12]));