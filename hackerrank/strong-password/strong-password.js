'use strict';
/*
https://www.hackerrank.com/challenges/strong-password/problem
Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
Input Format

The first line contains an integer  denoting the length of the string.

The second line contains a string consisting of  characters, the password typed by Louise. Each character is either a lowercase/uppercase English alphabet, a digit, or a special character.

Constraints

Output Format

Print a single line containing a single integer denoting the answer to the problem.

Sample Input 0

3
Ab1
Sample Output 0

3
Explanation 0

She can make the password strong by adding  characters, for example, $hk, turning the password into Ab1$hk which is strong.

 characters aren't enough since the length must be at least .

Sample Input 1

11
#HackerRank
Sample Output 1

1
Explanation 1

The password isn
*/


function solution(n, password) {
  
  const MIN_LEN = 6;
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let len = password.length;  
  let success = 4;
  

  const findWord = (target) => {
    let i = len;
    let result;

    while(i--) {
      result = target.indexOf(password[i]);
      if(result != -1) {
        return 1;        
      }
    }

    return 0;
  }

  success -= findWord(numbers);
  success -= findWord(lower_case);
  success -= findWord(upper_case);
  success -= findWord(special_characters);

  let gap = MIN_LEN - len;

  // console.log(`success=${success} // gap = ${gap} // len ${len} // pow = ${Math.abs(gap)} `)
  return Math.max( (MIN_LEN - len), success);
}

console.log( solution(3 , 'Ab1')); // 3
console.log( solution(3 , '#HackerRank')); // 1

