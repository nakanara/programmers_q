'use strict';
/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format
Input Format

A single string  containing a time in -hour clock format (i.e.:  or ), where  and .

Constraints

All input times are valid
Output Format

Convert and print the given time in -hour format, where .

Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/


function solution(s) {
  let answer = [];

  const addHour = (hh, addH) => ( (Number(hh)+addH) < 10? `0${(Number(hh)+addH)}` : `${(Number(hh)+addH)}` );

  const patten = /(\d+)\:(\d+)\:(\d+)(\S+)/
  let [fulltext, hh, mm, dd, am] = s.match(patten);

  if(am === 'PM' && hh !== '12') hh = addHour(hh, 12);
  else if(am === 'AM' && hh === '12') hh = addHour(hh, -12);  // 오전의 경우 12시만

  return `${hh}:${mm}:${dd}`;
}

// 시간의 표현방식이 PM 은 12시일때 그대로이며, AM의 경우 12시일때 00 처리에서 문제가.
console.log( solution('12:45:54PM'));
console.log( solution('07:05:45PM'));
console.log( solution('12:40:22AM'));
console.log( solution('06:40:03AM'));

