'use strict';
/*
The factorial of the integer , written , is defined as:

Calculate and print the factorial of a given integer.

For example, if , we calculate  and get .

Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

n: an integer
Note: Factorials of  can't be stored even in a  long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

We recommend solving this challenge using BigIntegers.

Input Format

Input consists of a single integer 

Constraints


Output Format

Print the factorial of .

Sample Input


Sample Output


Explanation



*/


function solution(n) {
  let answer = [];

  const convertNum = (n) => Array.from(String(n)).reverse().map( (v)=> Number(v));
  const multiply = (a, b) => {

    let result = [];  // 결과값
    let upVal = 0;  // 상위 전달 값

    for(let i=0; i < a.length; i++) {

      let av = a[i];
      upVal = 0;  // 새로운 row

      for(let j=0; j < b.length; j++) {
        let an = b[j];

        let multiple = av*an; // 계산
        //console.log(`av${av} an${an} mltiple=${multiple} upVal=${upVal}`)

        multiple =  multiple +(result[j+i] || 0);  // 이미 저장되어 있던 값
        if(upVal > 0) multiple += upVal;  // 이전 계산에서 올라온 값


        upVal = Math.floor(multiple/10); // 다음 수
        result[j+i] = multiple%10;  // 현재 남은수

        //console.log(`multiplu ${multiple} upVal= ${upVal} answer${result[j+i]}`)
      }
      if(upVal > 0) result.push(upVal);
      //console.log(result);
    }

    return result; 

  }

  answer = convertNum(n);

  for(let i=n-1; i > 0; i--) {
    let nextVal = convertNum(i);

    answer = multiply(answer, nextVal);
    //console.log(`${n} ==> ${answer}`)
  }  
  
  console.log(answer.reverse().join(''));
}

console.log( solution(25));