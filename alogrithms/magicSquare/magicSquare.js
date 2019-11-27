'use strict';
/*
마방진 경우의 수 
M = n (n ^ 2 + 1) / 2

15  = 3(3^2+1) /2 

https://min9nim.github.io/2018/09/magic-square/
*/


function solution(n) {
  let answer = Array.from(Array(n+1), () => Array(n+1).fill(0));

  console.log(answer);
  console.log(`${n}  ${n/2} ${Math.floor(n/2)+1}`)
  let x = Math.floor(n/2)+1;
  let y = 1;
  let max = n*n;

  for(let i=1; i <= max; i++ ) {

    console.log(`${x} / ${y} / ${i} / ${answer[x][y]}`)
    answer[y][x] = i;

    if(i % 5 == 0) { // 값이 5배수라면
      y += 1; // 높이를 내린다
    } 
    else {
      y-=1; // 그외 대각선으로 올라가면서 값을 입력
      x+=1; 
      
      if(y < 1) y = n;  // 1보다 작아졌다면, 아래로 보냄
      if(x > n) x = 1;  // X가 범위를 벋어났다면 제일 끝열로 보냄.

      console.log(`${x} /// ${y}`)
    }
  }

  for(let i = 1; i<answer.length;i++){        
    console.log(answer[i].slice().splice(1,n));
}    
  console.log(answer);
  
  return answer;
}

console.log( solution(5));