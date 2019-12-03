'use strict';
/*
행열 전환.
*/


function solution(key, lock) {
  let answer = [];
  let key_size = 3;

  const printf = (arr) => {    
    arr.forEach(v => console.log(`${v}`));
  };

  const rotate = (t) => {
    let newArr = Array(key_size);
    for(let i=0; i < key_size; i++) {
      newArr[i] = Array(key_size);
    }
        
    for(let y=0; y < key_size; y++) {
      for(let x=0; x < key_size; x++) {
        let newy = ((y===0)? key_size-1 : ((y=== key_size-1)? 0 : y))

        //console.log(`from ${y}${x} => to ${x}${newy} val${t[y][x]}`)
        newArr[x][newy] = t[y][x];
      }
    }

    return newArr;
  }
  printf(key);
  printf(lock);
  // 1. lock 확장

  let gap = key_size -1;
  let lock_size = 3;
  let condLock = new Array(lock_size+gap+gap);
  for(let i=0; i < lock_size+gap+gap; i++) {
    condLock[i] = Array(lock_size+gap+gap).fill(0);
  }

  
  for(let y=gap; y < lock_size+gap; y++) {
    for(let x=gap; x < lock_size+gap; x++) {
      // console.log(`from ${y-gap}${x-gap} => to ${y}${x} val${lock[y-gap][x-gap]}`)
      condLock[y][x] = lock[y-gap][x-gap]
    }
  }

  printf(condLock);
  // 2. key 와 lock 를 비교.


  

  for(let y = 0; y < lock_size; y++) {
    for(let x = 0; x < lock_size; x++) {

      // key의 끝부분부터 비교 필요.


    }
  }


  
  return answer;
}

console.log( solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));