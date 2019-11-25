/*
네트워크
문제 설명
네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
입출력 예
n	computers	return
3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1
입출력 예 설명
예제 #1
아래와 같이 2개의 네트워크가 있습니다.
image0.png

예제 #2
아래와 같이 1개의 네트워크가 있습니다.
*/

function solution(n, computers) {
  var answer = 0;

  let nodes = [];  

  // 컴퓨터.
  function Node(params_id)  {    
    
    let NodeClass = {
      id: params_id, // ID
      links: [],  // links
      connected: false, // network 연결 
      connect: (otherNode) => {        
        NodeClass.links.push(otherNode);
      },
      toString: () => console.log('Debug= id='+ NodeClass.id  + '/connected=' + NodeClass.connected)

    };

    return NodeClass;

  }

  const findNetwork = (curNode) => {
        
    // 연결 정보 갱신
    if(!curNode.connected) {
      curNode.connected = true;
      answer++;
    }
    
    curNode.links.forEach( (n) => {
      
      if(!n.connected) {
        n.connected = true;
        findNetwork(n) ;
      }      
    });

  }

  // 컴퓨터 생성
  for(let i=0; i < n; i++) {
    nodes.push( new Node(i));        
  }

  // 연결 정보 입력
  for(let i=0; i < n; i++) {
    for(let j=0; j < n; j++) {
      
      if(computers[i][j] == 1) {
        nodes[i].connect(nodes[j]);
      }
    }
  }

  // 접속 판단
  for(let i=0; i < n; i++) {    
    findNetwork(nodes[i]);
  }
  
  
  return answer;
}


/* ===================================================== */
function solution(n, computers) {
  var answer = 0;
  var isVisited = [];

  for(var i =0; i <n; i++) {
      isVisited.push(false);
  }

  var DFS = function(computers, i) {
      console.log('DFS excuted');
      if(isVisited[i]) { return; }
      isVisited[i] = true;
      console.log(isVisited);

      for(var j = 0; j < computers.length; j++) {
          if(computers[i][j] === 1) {
              console.log(i + ', ' + j);
              console.log('connected');
              DFS(computers, j);
          }
      }
  }

  for(var i = 0; i < n; i++) {
      if(!isVisited[i]) {
          answer++;
          console.log(isVisited, '도입부');
          console.log(answer);
          DFS(computers, i);
      }
  }

  return answer;
}

/* ===================================================== */

function solution(n, computers) {
  let ctr = 0;
  arr = computers;
  visitArr = new Array(n).fill(false);

  for(let i in arr) {
      ctr += dfs(i);
  }

  return ctr;
}

function dfs(i) {
  if(visitArr[i] == true) return 0;
  else visitArr[i] = true;

  for(let j in arr[i]) {
      if(arr[i][j] == 1)
          dfs(j);
  }

  return 1;
}

/* ===================================================== */
function solution(n, computers) {
  var answer = 0;

  const queue = [];
  const result = [];
  const visited = {};
  let current;
  for(let i = 0; i < n; i++) {
      if(!visited[i]) {
          queue.push(i);
          visited[i] = true;
          answer++;
      }
      while(queue.length) {
      current = queue.shift();

      computers[current].forEach((value, idx) => {
          if(!visited[idx] && value === 1) {
              visited[idx] = true;
              queue.push(idx);
          }
      });
  }
  }

  return answer;
}


console.log( solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]) ); // 2
//console.log( solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]) ); // 1