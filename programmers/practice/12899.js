'use strict';
/*
124 나라의 숫자
문제 설명
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법	124 나라	10진법	124 나라
1	1	6	14
2	2	7	21
3	4	8	22
4	11	9	24
5	12	10	41
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

제한사항
n은 500,000,000이하의 자연수 입니다.
입출력 예
n	result
1	1
2	2
3	4
4	11
*/

function solution(n) {
  return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

function solution1(n) {
  let answer = [];
  let [tmp, b] = [n, 0];
  let table = [1,2,4];

  while(tmp > 0) {
    let a = Math.floor(tmp/3);
    let b = (tmp%3);

    if(b == 0) {
      a -= 1;
      b = 3;
    }

    console.log(`${n} ${tmp} // ${a} // ${b}`)
    // if( b == 0) answer.push(a);
    // else answer.push(b);

    answer.push(b);
    tmp = a;
  }

  console.log( answer.reverse().map( v => table[v-1]));
}

for(let i=1; i < 12; i++) 
  console.log( solution(i));
// console.log( solution(5));
// console.log( solution(3));
// console.log( solution(4));
// console.log( solution(5));
// console.log( solution(6));
// console.log( solution(7));
<<<<<<< HEAD
// console.log( solution(10));
=======
>>>>>>> 807d9298db3a2bae0237126e1130d6d793ea31a2
// console.log( solution(11));