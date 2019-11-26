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
  let answer = Number(1);
  

  for(let i=n; i >  0; i--) {
    console.log('i=' + i + '/ ans=' + answer);
    answer *= i;
  }
  let strnum = String(answer);
  const patten = /(\d+).(\d+)e\+(\d+)/

  let result = strnum.match(patten);
  if(!result) return strnum;
  else {
    console.log(strnum);
    return `${result[1]}${result[2]}${ Array(result[3]-result[2].length).fill('0').join('')}`

  }

}

console.log( solution(25));