'use strict';
/*
https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

큰 수 만들기
문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
입출력 예
number	k	return
1924	2	94
1231234	3	3234
4177252841	4	775841
출처

*/


function solution(number, k) {
  
  let size = number.length;
  let len = size - k; // 최대 숫자     
  let answer = '';
  let maxIdx = 0;

  if(number[0] === '0') return '0';

  for(let i=0; i < len; i++) {

    let max = '0';    
    // console.log(`i=${i} len=${len} maxIdx=${maxIdx} / ${len+i}`)
    for(let j=maxIdx; j <= k+i; j++) {
      
      if(max < (number[j])) {
        max  = (number[j]);
        maxIdx = j+1;
      }
      if(max === '9') break;
    }
    answer += max;
  }

  return answer;
  
}

/* ******************************************************/
function solution1(number, k) {
  const answer = []
  let head = 0
  let del = k

  answer.push(number[head++])
  while(answer.length < number.length - k || head < number.length) {
      if(del && answer[answer.length-1] < number[head]) {
          answer.pop()
          del--
          continue
      }
      answer.push(number[head++])
  }

  return answer.slice(0, number.length - k).join('')
}

/******************************* */
const solution = (number, k) => {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
      const item = number[i]
      // stack이 초기에 비어있으면 push 한다.
      if (stack.length === 0) {
          stack.push(item)
          continue;
      }
      // stack에 쌓인 최근 값이 들어와야할 값보다 크거나 같을때까지 꺼낸다.
      while (stack[stack.length - 1] < item) {
          stack.pop()
          count++
          // 만약 숫자를 빼야할만큼 뺐다면 완성된 값을 반환한다.
          if (count === k) return stack.join("") + number.slice(i, number.length)
          // 스택이 비어있으면 루프를 멈추고 스택에 아이템을 추가한다.
          if (stack.length === 0) break;
      }
      stack.push(item)
      // 만약 마지막 순서면 return한다.
      // if (i === number.length - 1) return stack.join("")
  }
  return stack.length === number.length - k ? 
      stack.join("") : 
      stack.join("").slice(0, number.length - k + count)
}

//  console.log( solution('1924', 2)); // 94
console.log( solution('1231234', 3)); // 3234
console.log( solution('1', 0)); // 3234
console.log( solution('4177252841', 4)); // 775841
