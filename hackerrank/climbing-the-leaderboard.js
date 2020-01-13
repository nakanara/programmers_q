'use strict';
/*
https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of , , , and . Those players will have ranks , , , and , respectively. If Alice's scores are ,  and , her rankings after each game are ,  and .

Function Description

Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element  represents Alice's rank after the  game.

climbingLeaderboard has the following parameter(s):

scores: an array of integers that represent leaderboard scores
alice: an array of integers that represent Alice's scores
Input Format

The first line contains an integer , the number of players on the leaderboard.
The next line contains  space-separated integers , the leaderboard scores in decreasing order.
The next line contains an integer, , denoting the number games Alice plays.
The last line contains  space-separated integers , the game scores.

Constraints

 for 
 for 
The existing leaderboard, , is in descending order.
Alice's scores, , are in ascending order.
Subtask

For  of the maximum score:

Output Format

Print  integers. The  integer should indicate Alice's rank after playing the  game.

Sample Input 1

CopyDownload
Array: scores
100
100
50
40
40
20
10

 



Array: alice
5
25
50
120

 
7
100 100 50 40 40 20 10
4
5 25 50 120
Sample Output 1

6
4
2
1
Explanation 1

Alice starts playing with  players already on the leaderboard, which looks like this:

image

After Alice finishes game , her score is  and her ranking is :

image

After Alice finishes game , her score is  and her ranking is :

image

After Alice finishes game , her score is  and her ranking is tied with Caroline at :

image

After Alice finishes game , her score is  and her ranking is :

image


Sample Input 2

CopyDownload
Array: scores
100
90
90
80
75
60

 



Array: alice
50
65
77
90
102

 
6
100 90 90 80 75 60
5
50 65 77 90 102
Sample Output 2

6
5
4
2
1

*/


function solution(scores, alice) {
  let answer = [];  
  let pointScore = {};

  let alice_sort = alice.reduce((r, v, i)=> {
    r.push({i, v});
    return r;
  }, [])
  
  alice_sort.sort((a,b)=> a.v-b.v);

  console.log(alice_sort);

  let divScore = scores.reduce( (r, v)=> {
    if(!pointScore[v]) {
      r.push(v);   
      pointScore[v] = [v];   
    }
    return r;
  }, []);



  
  let avg_idx = Math.floor[divScore.length/2]
  let avg_val = divScore[avg_idx];
  let last_idx = divScore.length;

  alice_sort.reduce( (r, v) => {   

    console.log(`in > // ${r}`)
    while(r--) {

      console.log(`${r} // ${divScore[r]}`, v)

      if(divScore[r] > v.v) {
        answer.push(r+2);
        console.log(`result ${r+2} // ${divScore[r]}`, v)
        return r+1;
      }
    }
    console.log(`result22 ${r} // ${divScore[r]}`, v)
    answer.push(1);    
  return r+1;
  
    
  }, last_idx);
    
  return answer;
}

// console.log( solution([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])); // 6, 4, 2, 1
console.log( solution([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])); // 6, 4, 2, 1
// console.log( solution([295, 294, 291, 287, 287, 285, 285, 284, 283, 279, 277, 274, 274, 271, 270, 268, 268, 268, 264, 260, 259, 258, 257, 255, 252, 250, 244, 241, 240, 237, 236, 236, 231, 227, 227, 227, 226, 225, 224, 223, 216, 212, 200, 197, 196, 194, 193, 189, 188, 187, 183, 182, 178, 177, 173, 171, 169, 165, 143, 140, 137, 135, 133, 130, 130, 130, 128, 127, 122, 120, 116, 114, 113, 109, 106, 103, 99, 92, 85, 81, 69, 68, 63, 63, 63, 61, 57, 51, 47, 46, 38, 30, 28, 25, 22, 15, 14, 12, 6, 4]

// , [5, 5, 6, 14, 19, 20, 23, 25, 29, 29, 30, 30, 32, 37, 38, 38, 38, 41, 41, 44, 45, 45, 47, 59, 59, 62, 63, 65, 67, 69, 70, 72, 72, 76, 79, 82, 83, 90, 91, 92, 93, 98, 98, 100, 100, 102, 103, 105, 106, 107, 109, 112, 115, 118, 118, 121, 122, 122, 123, 125, 125, 125, 127, 128, 131, 131, 133, 134, 139, 140, 141, 143, 144, 144, 144, 144, 147, 150, 152, 155, 156, 160, 164, 164, 165, 165, 166, 168, 169, 170, 171, 172, 173, 174, 174, 180, 184, 187, 187, 188, 194, 197, 197, 197, 198, 201, 202, 202, 207, 208, 211, 212, 212, 214, 217, 219, 219, 220, 220, 223, 225, 227, 228, 229, 229, 233, 235, 235, 236, 242, 242, 245, 246, 252, 253, 253, 257, 257, 260, 261, 266, 266, 268, 269, 271, 271, 275, 276, 281, 282, 283, 284, 285, 287, 289, 289, 295, 296, 298, 300, 300, 301, 304, 306, 308, 309, 310, 316, 318, 318, 324, 326, 329, 329, 329, 330, 330, 332, 337, 337, 341, 341, 349, 351, 351, 354, 356, 357, 366, 369, 377, 379, 380, 382, 391, 391, 394, 396, 396, 400])); // 6, 4, 2, 1

