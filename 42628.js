/*
이중우선순위큐
문제 설명
이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

명령어	수신 탑(높이)
I 숫자	큐에 주어진 숫자를 삽입합니다.
D 1	큐에서 최댓값을 삭제합니다.
D -1	큐에서 최솟값을 삭제합니다.
이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

제한사항
operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
operations의 원소는 큐가 수행할 연산을 나타냅니다.
원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
입출력 예
operations	return
[I 16,D 1]	[0,0]
[I 7,I 5,I -5,D -1]	[7,5]
입출력 예 설명
16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.

출처
*/
function solution(args) {
  let answer = [];
  let queue = [];
  let op, num;
  let target;

  args.forEach((argument) => {
      [op, num] = argument.split(' ');
      num = Number(num);

      if(op === 'I') {
          queue.push(num);
      } else { // D
          if(num === 1) {
              target = Math.max.apply(null, queue);
          } else { // -1
              target = Math.min.apply(null, queue);
          }

          queue.splice(queue.indexOf(target), 1);
      }
  });

  if(queue.length === 0) {
      answer = [0,0];
  } else {
      answer = [Math.max.apply(null, queue), Math.min.apply(null, queue)]
  }

  return answer;
}


function solution1(operations) {
  var answer = [];
 
  let sortQ = {
    data: [],
    put: (v) => {
      // 크기에 따른 삽입.
      for(let i=0; i < sortQ.data.length; i++) {
        if(v > sortQ.data[i]) {
          sortQ.data.splice(i,0, v);
          return sortQ.data;
        }
      }
      sortQ.data.push(v);
      return sortQ.data;
    }, 
    getmax: () => {
      let v =  sortQ.data.shift();
    },
    getmin: () => {
      let v =  sortQ.data.splice( sortQ.data.length-1, 1);
    },
    toString: () => {
      console.log("=degut=");
      console.log( sortQ.data);
    },
    getVal: () => {
      if(sortQ.data.length == 0) return [0, 0];
      return [sortQ.data[0], sortQ.data[sortQ.data.length-1]];
    }
  }

  for(let i=0; i < operations.length; i++) {
    let op = operations[i][0];
    let val = Number(operations[i].substr(2));

    switch(op){
      case 'I' : sortQ.put(val); break;
      case 'D' : {
        if(val == 1) sortQ.getmax(); 
        else sortQ.getmin();
        break;
      }
    }
    //sortQ.toString();
  }
  
  //console.log( sortQ.getVal() );

  return sortQ.getVal();
}

console.log( solution(["I 16","D 1"]) );//[0,0]
//console.log( solution(["I 7","I 5","I -5","D -1"]) );//[7,5]

