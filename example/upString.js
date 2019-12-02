'use strict';
/*
대소문자 변환.
*/


function solution(str) {
  let answer = Array.from(str);

  let cnum = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  
  console.log(`${cnum} // ${'a'.charCodeAt(0)} ${'A'.charCodeAt(0)}`)
  
  const toLocase = (p) => {
    return  Array.from(p).reduce( (r, v) => {
      let c = v.charCodeAt(0);
      if('A'.charCodeAt(0) <= c && 'Z'.charCodeAt(0) >= c) r += String.fromCharCode(c+cnum);
      else r += v;

      return r;
    }, '');
  }

  const toUpcase = (p) => {
    return Array.from(p).reduce( (r, v) => {
      let c = v.charCodeAt(0);
      if('a'.charCodeAt(0) <= c && 'z'.charCodeAt(0) >= c) r += String.fromCharCode(c-cnum);
      else r += v;
  
      return r;
    }, '')
  }


  console.log(`${str} // ${toLocase(str)} // ${toUpcase(str)}`)
}

console.log( solution('QWERTYUIOPASDFGHJKLMNBVCXZ,./qwer'));