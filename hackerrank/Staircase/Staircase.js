'use strict';
/*
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below. It should print a staircase as described above.

staircase has the following parameter(s):

n: an integer
Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
*/


function solution(n) {
  //let answer = [];
  
  const fillCh = (len, ch) => Array(len).fill(ch).join('');

  for(let i=1; i <= n; i++) {
    //answer.push( `${fillCh(n-i, '_')}${fillCh(i, '#')}`);
    console.log(`${fillCh(n-i, ' ')}${fillCh(i, '#')}`);
  }

  //console.log(answer);
  //return answer;
}

console.log( solution( 10 ));