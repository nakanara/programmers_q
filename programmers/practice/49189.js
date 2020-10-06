'use strict';
/*
많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항
노드의 개수 n은 2 이상 20,000 이하입니다.
간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
입출력 예
n	vertex	return
6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3
입출력 예 설명
예제의 그래프를 표현하면 아래 그림과 같고, 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.

*/

function solution(n, edge) {
  var answer = 0;
 
  
  let map = new Array(n+1);

  for(let i=0; i <= n; i++) {
    map[i] = new Array(n+1);
   // map[i].fill(NaN, 0, n+1);
  }
  map[3][6] = true;
  console.log(map);
  

  for (let i=0; i < edge.length; i++) {
    let a = Number(edge[i][0]);
    let b = Number(edge[i][1]);
  
    console.log(`${a} /// ${b}`);

    map[a][b] = map[b][a] = true;    
  }

  function Queue(){
    
    let store = [];

    function add(item) {
      store.push(item);
    }

    function get(item) {
      return store.shift();
    }

    function toString(){
      for(let v of store) {
        console.log(v);
      }
    }

    function isEmpty(){
      return store.length === 0;
    }

    return {
      add: add,
      get: get,
      toString: toString
    };
    
  }

  console.log('111');
  let nodes = new Queue();

  nodes.add(1);
  nodes.toString();



  return answer;


}


solution(6,	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
