/*
숫자 야구
문제 설명
숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다. 게임해보기

각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다. 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.

* 숫자는 맞지만, 위치가 틀렸을 때는 볼
* 숫자와 위치가 모두 맞을 때는 스트라이크
* 숫자와 위치가 모두 틀렸을 때는 아웃
예를 들어, 아래의 경우가 있으면

A : 123
B : 1스트라이크 1볼.
A : 356
B : 1스트라이크 0볼.
A : 327
B : 2스트라이크 0볼.
A : 489
B : 0스트라이크 1볼.
이때 가능한 답은 324와 328 두 가지입니다.

질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

제한사항
질문의 수는 1 이상 100 이하의 자연수입니다.
baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.
입출력 예
baseball	return
[[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]	2
입출력 예 설명
문제에 나온 예와 같습니다.
*/
function solution1(baseball) {
  var answer = 0;
  let result = [];

  // 전체 경우의 수.
  // 3자리 조합의 최소값, 최대값.
  for(let i=123; i<=987; i++ ) {
    let numToken = String(i).split('');
    
    // 중복 비교
    if( numToken == '0' || numToken[1] == '0' || numToken[2] == '0' 
        || (numToken[0] == numToken[1]) ||  (numToken[0] == numToken[2]) || (numToken[1] == numToken[2]) ) 
        continue;

    let flag = isCheck(numToken, baseball);
    if(flag) result.push(numToken);
    
  }

  function isCheck(curNum, baseball) {

    let flag = true;

    for(let pno=0; pno < baseball.length; pno++) {
      let [str_q, s_score, b_score] = baseball[pno];
      str_q = String(str_q);
      //console.log(baseball[pno]);
      // 문제와 동일하다면
      if(curNum == str_q) return false;

      let s_cnt = getStrike(str_q, curNum);
      let b_cnt = getBall(str_q, curNum);

      if(s_cnt != s_score) return false;
      if((b_cnt-s_score) != b_score) return false; // 스트라이크 포함의 경우

    }

    return flag;

  }

  function getStrike(curNum, target) {
    let s_cnt = 0;
    for(let i=0; i < curNum.length; i++) {
      if(curNum[i] == target[i]) s_cnt++;
    }
    return s_cnt;
  }

  function getBall(curNum, target) {
    let b_cnt = 0;
    for(let i=0; i < curNum.length; i++) {
      if(curNum.includes(target[i])) b_cnt++;
    }
    return b_cnt;
  }

  //console.log(result);
  return result.length;
}

function solution(baseball) {
  var answer = 0;

  // 서로 다른 3개의 수 조합. 
  for(let i=123; i<=987; i++) {
      let [x, y, z] = (i+"").split('');

      // 각 수의 범위는 1~9 
      if(x === "0" || y === "0" || z === "0") continue;
      if(x === y || x === z || y === z) continue;

      for(let j=0; j<baseball.length; j++) {
          let strike = 0;
          let ball = 0;

          const [query, query_s, query_b] = baseball[j];
          const [query_x, query_y, query_z] = (query + "").split('');
          if(query_x === "0" || query_y === "0" || query_z === "0") break;
          if(query_x === query_y || query_x === query_y || query_y === query_z) break;

          if(x === query_x) strike++;
          if(y === query_y) strike++;
          if(z === query_z) strike++;
          if(query_s != strike) break;

          if((x === query_y) || (x === query_z)) ball++;
          if((y === query_x) || (y === query_z)) ball++;
          if((z === query_x) || (z === query_y)) ball++;
          if(query_b != ball) break;

          if(j === baseball.length - 1) answer++;
      }
  }


  return answer;
}

console.log( solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]) ); //2