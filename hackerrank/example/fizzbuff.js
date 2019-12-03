'use strict';
/*

*/


function solution(n) {
  for(let i=1; i <= n; i++) {
    let [a, b] = [i%3, i%5];

    if(a+b === 0) console.log('FizzBuff')
    else if(a===0) console.log('Fizz');
    else if(b===0) console.log('Buff');
    else console.log(i);
  }
}

console.log( solution(15));