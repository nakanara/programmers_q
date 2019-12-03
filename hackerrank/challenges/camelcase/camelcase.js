'use strict';
/*
https://www.hackerrank.com/challenges/camelcase/problem

Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , print the number of words in  on a new line.

For example, . There are  words in the string.

Function Description

Complete the camelcase function in the editor below. It must return the integer number of words in the input string.

camelcase has the following parameter(s):

s: the string to analyze
Input Format

A single line containing string .

Constraints

Output Format

Print the number of words in string .

Sample Input

saveChangesInTheEditor
Sample Output

5
Explanation

String  contains five words:

save
Changes
In
The
Editor
Thus, we print  on a new line.
*/


function solution1(s) {
  let answer = [];
  let sidx = 0, eidx = 0;
  const codeA = 'A'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);

  const findUpcaseIndexOf = (s, str) => {

    for(let i=s; i < str.length; i++) {
      let c = str.charCodeAt(i)
      if(c >= codeA && c <= codeZ) return i;
    }
    return -1;
  }

  do{
    eidx = findUpcaseIndexOf(sidx+1, s);
    if(eidx === -1) {
      answer.push(s.substr(sidx, (s.length-sidx)));
    } else {
      answer.push(s.substr(sidx, (eidx-sidx)));
    }
    sidx = eidx;
  }while(eidx !== -1)

  return answer.length;
}


function solution(s) {
  let array = s.split(/(?=[A-Z])/);
  console.log(array);
}
console.log( solution('saveChangesInTheEditor'));