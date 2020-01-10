'use strict';
/*
https://www.hackerrank.com/challenges/reduced-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print Empty String

Function Description

Complete the superReducedString function in the editor below. It should return the super reduced string or Empty String if the final string is empty.

superReducedString has the following parameter(s):

s: a string to reduce
Input Format

A single string, .

Constraints

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0

aaabccddd
Sample Output 0

abd
Explanation 0

Steve performs the following sequence of operations to get the final string:

aaabccddd → abccddd → abddd → abd
Sample Input 1

aa
Sample Output 1

Empty String
Explanation 1

aa → Empty String
Sample Input 2

baab
Sample Output 2

Empty String
Explanation 2

baab → bb → Empty Strin


*/


function solution(s) {
  let answer = '';  

  const zipWord = (word) => {
    let wLen = word.length;
    let newWord = [];
    let beChar = word[0];
    
    for(let i=1; i < wLen; i += 1){
      //console.log(`beChar=${beChar} // word=${word[i]}`)
      if(beChar ==='') {
        beChar = word[i];        
      } else if(beChar === word[i]) {
        beChar = '';        
      } else {
        newWord.push(beChar);
        beChar = word[i];        
      }
    }

    if(beChar !== '') newWord.push(beChar); // Last

    return newWord.join('');
    
  }


  answer = zipWord(s);
  let temp = ''
  while(answer !== temp ){ // loop
    temp = answer;    
    answer = zipWord(temp);
  }
  
  return (s === answer || answer === '')? 'Empty String' : answer;
}

console.log( solution('aaabccddd')); //  abd
console.log( solution('aa')); //  Empty String
console.log( solution('baab')); //  Empty String

