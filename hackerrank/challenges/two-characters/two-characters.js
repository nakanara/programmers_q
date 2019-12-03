'use strict';
/*
https://www.hackerrank.com/challenges/two-characters/problem

In this challenge, you will be given a string. You must remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Your goal is to create the longest string possible that contains just two alternating letters.

As an example, consider the string abaacdabd. If you delete the character a, you will be left with the string bcdbd. Now, removing the character c leaves you with a valid string bdbd having a length of 4. Removing either b or d at any point would not result in a valid string.

Given a string , convert it to the longest possible string  made up only of alternating characters. Print the length of string  on a new line. If no string  can be formed, print  instead.

Function Description

Complete the alternate function in the editor below. It should return an integer that denotes the longest string that can be formed, or  if it cannot be done.

alternate has the following parameter(s):

s: a string
Input Format

The first line contains a single integer denoting the length of .
The second line contains string .

Constraints

Output Format

Print a single integer denoting the maximum length of  for the given ; if it is not possible to form string , print  instead.

Sample Input

10
beabeefeab
Sample Output

5
Explanation

The characters present in  are a, b, e, and f. This means that  must consist of two of those characters and we must delete two others. Our choices for characters to leave are [a,b], [a,e], [a, f], [b, e], [b, f] and [e, f].

If we delete e and f, the resulting string is babab. This is a valid  as there are only two distinct characters (a and b), and they are alternating within the string.

If we delete a and f, the resulting string is bebeeeb. This is not a valid string  because there are consecutive e's present. Removing them would leave consecutive b's, so this fails to produce a valid string .

Other cases are solved similarly.

babab is the longest string we can create.
*/


function solution(s) {
  let answer = 0;
  
  let alpabet = Array(26).fill(0);
  let aChar = 'a'.charCodeAt(0);

  // 단어 카운팅
  for(let i=0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    alpabet[c-aChar]++;
  }

  for(let i=0; i < alpabet.length; i++) {

    if(alpabet[i] === 0) continue;
    let c1 = aChar+ i;

    for(let j=i+1; j < alpabet.length; j++) {

      if(alpabet[j] === 0) continue;

      let c2 = aChar + j;

      let charCount = 0;  // 문자 수
      let curFlag = -1;   // 단어 중복 카운팅.

      for(let c=0; c < s.length; c++) {
        let c3 = s.charCodeAt(c);

        //console.log(`${c1} ${c2} ${c3} ${s[c]}`)
        if(c1 === c3) {

          // 중복되었다면.
          if(curFlag === 1) {
            curFlag = -1;
            break;
          }
          curFlag = 1;
          charCount++;
        }
        else if(c2 === c3) {

          if(curFlag === 2) {
            curFlag = -1;
            break;
          }
          curFlag = 2;
          charCount++;
        }
      }
      
      if(curFlag != -1 && charCount > answer) {
        answer = charCount;
      }
    }
  }
  return answer;
}

//console.log( solution('beabeefeab'));//5
console.log( solution('abaacdabd')); //4