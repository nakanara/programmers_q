'use strict';
/*
https://www.hackerrank.com/challenges/caesar-cipher-1/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
For example, the given cleartext  and the alphabet is rotated by . The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below. It should return the encrypted string.

caesarCipher has the following parameter(s):

s: a string in cleartext
k: an integer, the alphabet rotation factor
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

Constraints



 is a valid ASCII string without any spaces.

Output Format

For each test case, print the encoded string.

Sample Input

11
middle-Outz
2
Sample Output

okffng-Qwvb
Explanation

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
*/


function solution(s, k) {
  let answer = [];

  const upPatten = new RegExp('[A-Z]');
  const loPatten = new RegExp('[a-z]');
  const zChar = 'z'.charCodeAt();
  const aChar = 'a'.charCodeAt();  
  const zeroChar = zChar-aChar+1;

  answer = [...s].reduce( (t, v)=>{
    
    if(upPatten.test(v) || loPatten.test(v)) {

      let temp = v.charCodeAt();
      let upcaseFlag = false;
            
      if(upPatten.test(v)) {
        upcaseFlag = true;
        temp = v.toLowerCase();
        temp = temp.charCodeAt();

      }          
      
      // ((apabet + increment - 'a' char ) % apabet len) + 'a' char
      temp = ((temp + k - aChar) % zeroChar) + aChar;

      t.push( (upcaseFlag)? String.fromCharCode(temp).toUpperCase() : String.fromCharCode(temp) );
    } else {
      t.push(v);
    }

    return t;
  }, []);

  return answer.join('');
}

// console.log( solution('middle-Outz', 2)); // okffng-Qwvb
// console.log( solution('abcdefghijklmnopqrstuvwxyz', 2)); // cdefghijklmnopqrstuvwxyzab
console.log( solution('www.abc.xy', 87)); // fff.jkl.gh
