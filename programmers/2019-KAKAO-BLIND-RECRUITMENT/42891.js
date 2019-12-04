'use strict';
/*

https://programmers.co.kr/learn/courses/30/lessons/42891?language=javascript

무지의 먹방 라이브
문제 설명
무지의 먹방 라이브
* 효율성 테스트에 부분 점수가 있는 문제입니다.

평소 식욕이 왕성한 무지는 자신의 재능을 뽐내고 싶어 졌고 고민 끝에 카카오 TV 라이브로 방송을 하기로 마음먹었다.

muji_live.png

그냥 먹방을 하면 다른 방송과 차별성이 없기 때문에 무지는 아래와 같이 독특한 방식을 생각해냈다.

회전판에 먹어야 할 N 개의 음식이 있다.
각 음식에는 1부터 N 까지 번호가 붙어있으며, 각 음식을 섭취하는데 일정 시간이 소요된다.
무지는 다음과 같은 방법으로 음식을 섭취한다.

무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.
무지가 먹방을 시작한 지 K 초 후에 네트워크 장애로 인해 방송이 잠시 중단되었다.
무지는 네트워크 정상화 후 다시 방송을 이어갈 때, 몇 번 음식부터 섭취해야 하는지를 알고자 한다.
각 음식을 모두 먹는데 필요한 시간이 담겨있는 배열 food_times, 네트워크 장애가 발생한 시간 K 초가 매개변수로 주어질 때 몇 번 음식부터 다시 섭취하면 되는지 return 하도록 solution 함수를 완성하라.

제한사항
food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
k 는 방송이 중단된 시간을 나타낸다.
만약 더 섭취해야 할 음식이 없다면 -1을 반환하면 된다.
정확성 테스트 제한 사항
food_times 의 길이는 1 이상 2,000 이하이다.
food_times 의 원소는 1 이상 1,000 이하의 자연수이다.
k는 1 이상 2,000,000 이하의 자연수이다.
효율성 테스트 제한 사항
food_times 의 길이는 1 이상 200,000 이하이다.
food_times 의 원소는 1 이상 100,000,000 이하의 자연수이다.
k는 1 이상 2 x 10^13 이하의 자연수이다.
입출력 예
food_times	k	result
[3, 1, 2]	5	1
입출력 예 설명
입출력 예 #1

0~1초 동안에 1번 음식을 섭취한다. 남은 시간은 [2,1,2] 이다.
1~2초 동안 2번 음식을 섭취한다. 남은 시간은 [2,0,2] 이다.
2~3초 동안 3번 음식을 섭취한다. 남은 시간은 [2,0,1] 이다.
3~4초 동안 1번 음식을 섭취한다. 남은 시간은 [1,0,1] 이다.
4~5초 동안 (2번 음식은 다 먹었으므로) 3번 음식을 섭취한다. 남은 시간은 [1,0,0] 이다.
5초에서 네트워크 장애가 발생했다. 1번 음식을 섭취해야 할 때 중단되었으므로, 장애 복구 후에 1번 음식부터 다시 먹기 시작하면 된다
*/


function solution1(food_times, k) {
  let answer = [];
  
  // 1. 전체 음식을 순서대로 Insert
  let foods = food_times.map( (v, i) => {
    return {time:v, idx:i+1};
  });

  food_times.sort((a,b) => a -b);

  //console.log(food_times);

  // 시간순 정렬.
  //foods.sort((a,b) => a.time - b.time);
  
  // console.log(foods);
  let isRun = true;
  while(isRun) {
    // 2. 최소값에 해당하는 음식으로 제거 
    let len = foods.length; 
    if(len === 0) return -1

    let t = food_times[0];
    let c = t * len;

    // console.log(`2 ==> time=${k} // food time ${c} ${t} ${len}`);
    
    // 여분의 시간이 충분하다면.
    if(k > c) {
      k -= c;
      food_times.shift();

      foods = foods.reduce( (r, v) => {
        if(v.time > t) {
          v.time -= t;
          r.push(v);
        }
        return r;
      }, []);

    } else if(k === c) {
      return foods[foods.length-1].idx;
    }else {
      break;
    }
  }
  
  // 3. 여분의 시간이 부족하다면.
  // 음식을 순서대로 정렬
  //foods.sort((a,b) => (a.idx - b.idx));
  // console.log(foods);
  // console.log(`${k}`)
  isRun = true;
  let idx = 0;
  
  while(isRun) {
    let size = foods.length;
    for(let i = 0; i < size; ++i) {

      let c = foods[i];
      if(c.time === 0) continue;
      else {

        // 먹을 순서.
        if(k === 0) return c.idx;

        --c.time;
        --k;
      }

      //console.log(`${k} ${i}`,  foods[i])
    }

    
    //foods = foods.filter( (v) => v.time > 0);
    
  }
  return -1;
}


function solution2(food_times, k) {
  let answer = [];
  
  // 1. 전체 음식을 순서대로 Insert
  let foods = food_times.map( (v, i) => {
    return {time:v, idx:i+1};
  }).sort((a,b) => a.time - b.time);
  
  //console.log(foods);
  let len = 0, t, c ;

  while(true) {
    // 2. 최소값에 해당하는 음식으로 제거 
    len = foods.length; 
    if(len === 0) return -1

    t = foods[0].time;
    c = t * len;

    //console.log(`2 ==> time=${k} // food time ${c}`);
    
    // 여분의 시간이 충분하다면.
    if(k >= c) {
      k -= c;
      foods.shift();

      // 각 음식 시간 빼기.
      foods.forEach( (v) => v.time -= t);
      //console.log(foods);
    }else {
      break;
    }
  }
  
  // 3. 여분의 시간이 부족하다면.
  // 음식을 순서대로 정렬
  foods.sort((a,b) => (a.idx - b.idx));
  //console.log(foods);
  let idx = 0;
  
  while(true) {
    len = foods.length;
    for(let i = 0; i < len; ++i) {

      c = foods[i];

      if(c.time === 0) continue;
      else {

        // 먹을 순서.
        if(k === 0) return c.idx;

        --c.time;
        --k;
      }

      //console.log(`${k} ${i}`,  foods[i])
    }

    foods = foods.filter( (v) => v.time > 0);
    
  }
  return -1;
}

// 참고
// https://medium.com/@vdongbin/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9-%EB%AC%B4%EC%A7%80%EC%9D%98-%EB%A8%B9%EB%B0%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C-%EC%B9%B4%EC%B9%B4%EC%98%A4-d88173317615
function solution(food_times, k) {
  let foods = food_times.map((v,i) => {
    return {time: v, idx: i+1};
  }).sort( (a,b) => a.time - b.time);

  for(let i=0; i < food_times.length; i++) {
    let len = food_times.length-i; // 남은 수
    let eattime = (foods[i].time - ((i===0)? 0: foods[i-1].time))*len;

    //console.log(`${len} ${eattime} `);
    if(k < eattime) {
      return foods.slice(i).sort((a,b) => a.idx-b.idx)[ k % len].idx;
    } 
    k -= eattime;
    
  }

  return -1;
}
console.log( solution([3, 4, 2, 5], 9)); //2
console.log( solution([3, 1,2], 6));// -1
console.log( solution([3, 1,2], 5));// 1