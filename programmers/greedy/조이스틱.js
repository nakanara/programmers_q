'use strict';
/*
https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

조이스틱
문제 설명
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.
입출력 예
name	return
JEROEN	56
JAN	23
출처

※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.
*/


function solution1(name) {
  let answer = 0;
  let size = name.length;
  let changeFlag = Array(size).fill(0);
  let [aChar, zChar] = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  let changeCnt = 0;
  let c = 'J'.charCodeAt();

  const upDownCnt = (c) => (c-aChar > zChar-c+1)? zChar-c+1 : c-aChar;


  
  let idx = 0;
  while(changeCnt !== size) {

    // 현재 위치를 A로 변환
    if(name[idx] !== 'A') {
      answer += upDownCnt(name.charCodeAt(idx));
      changeFlag[idx] = 1;
      changeCnt++;

      console.log(`1==> ${answer} idx=${idx} / ${name[idx]} => A // chagneChg = ${changeCnt}`);
    }

    // 이동 위치 파악
    if(changeCnt === size) return answer;

    for(let i=1; i < size/2+1; i++) {

      let right = (idx+i >= size)? (idx+i)-size : idx+i ;

      console.log(`2-1-1==> i=${i} ${idx} / ${right} ${name[right]} =>  ${answer}`);

      if(changeFlag[right] === 0) {
        if(name[right] === 'A') {
          changeFlag[right] = 1;
          changeCnt++;
        }else{
          idx = right;
          answer += i;
          // ABCDEFGHIJKLNMOPQRSTUVWXYZ
          
          console.log(`2-1==> ${right} ${name[right]} =>  ${answer}`);
          break;
        }
      }

      let left = (idx-i < 0)? size+(idx-i) : idx-i;

      console.log(`2-2-1==> i=${i} ${idx} /  ${left} ${name[left]} =>  ${answer}`);

      if(changeFlag[left] === 0) {
        if(name[left] === 'A') {
          changeFlag[left] = 1;
          changeCnt++;
        }else{
          idx = left;
          answer += i;

          console.log(`2-2==> ${left} ${name[left]} =>  ${answer}`);
          break;
        }
      }

      



    } 

    
  }
  
  return answer;
}


const solution = (name) => {
  let [aChar, zChar] = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  const upDownCnt = (c) => (c-aChar > zChar-c+1)? zChar-c+1 : c-aChar;

  let nName =[];
  let size = name.length;
  
  for(let s of name) {
    nName.push(upDownCnt(s.charCodeAt(0)));
  }



  const findCount = (reName, dir) => {

    let i=0;
    let answer = 0;
    while(true) {
      
      if(reName[i]  > 0) {
        answer += reName[i];
        reName[i] = 0;
      }

      // console.log(`1==> answer ${answer} cnt=${cnt} i=${i}`);

      if( 0 === Math.max(...reName)) return answer;

      // 다음 장소 찾기.
      for(let gap =1; gap < size; gap++) {

        let r = i+gap, l = i-gap;
        if(r > size-1) r = (i+gap)%size;
        if(l < 0) l = size + (i-gap);
        
        // console.log(`2==> i=${i} gap= ${gap} / r=${r}:: ${reName[r]} l=${l}:: ${reName[l]} answer=${answer}`)
        
        if(dir === false && reName[l] !== 0) { // direct flase인 경우만 선실행.
          i = l;
          answer +=gap;
          break;
        }
        else if(reName[r] !== 0) {
          i = r;
          answer += gap;
          break;
        } 
        else if(reName[l] !== 0) {
          i = l;
          answer +=gap;
          break;
        }
      }
    }
  }

  let rcnt = findCount(nName.slice(), true); // ->
  let lcnt = findCount(nName.slice(), false);

  // console.log(`rCnt = ${rcnt} lCnt = ${lcnt}`);
  return rcnt > lcnt? lcnt: rcnt;

}
// console.log( solution('JEROEN')); // 56
// console.log( solution('JAN')); // 23
// console.log( solution('BBAABB')); // 8
// console.log( solution('ABABAAAAAAABA')); // 11
// console.log( solution('ABAAAAAAABA')); // 6
// console.log('AAB=' + solution('AAB')); // 2
// console.log('AABAAAAAAABBB=' + solution('AABAAAAAAABBB')); //12
// console.log('ZZZ=' + solution('ZZZ')); //5
// console.log('BBBBAAAAAB=' + solution('BBBBAAAAAB')); //10 좌우 문제??
// console.log('BBBBAAAABA=' + solution('BBBBAAAABA')); //13
console.log( solution('XXAAAAAAAAAAAAAXX'));
