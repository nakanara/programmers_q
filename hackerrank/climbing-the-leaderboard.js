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


function solution1(scores, alice) {
  let answer = [];  
  let scoreRank = {};
  let rank = 1;

  let divScore = scores.reduce( (r, v)=> {
    if(!r[v]) {
      r[v] = v;   
      scoreRank[v] = {'v': v, 'rank': rank};
      rank += 1;   
    }
    return r;
  }, {});

  let [MAX, MIN] = [Math.max(...scores), Math.min(...scores)];

  answer = alice.reduce( (r, v, idx) => {   

    if(v >= MAX) {
      r.push(1);
      return r;
    } 
    if(v < MIN) {
      r.push(rank);
      return r;
    }

    let curVal = v;
    let curObj = scoreRank[curVal];

    while(!curObj) {
      curVal += 1;
      curObj = scoreRank[curVal];

      if(curVal >= MAX) {
        r.push(1);
        return r;
      }
    }

    if(curVal === v) {
      r.push(curObj['rank']);
    } else {
      r.push(curObj['rank'] +1);
    }

  return r;
  
    
  }, []);
    
  return answer;
}

function solution(scores, alice) {
  let answer = [];

  console.log(scores);
  console.log(alice);

  let scores_len = scores.length;
  let alice_len = alice.length;

  let score_i = 0;
  let alice_i = alice_len-1;
  let curAliceScore;
  let curScore;
  let scoreRank = 1;
  let beforVal;
  let isRun = true;
  let beforScore = -1;

  for( ; alice_i >= 0; ) {
    curAliceScore = alice[alice_i];
    // console.log(`alice_i=${alice_i} > val ${curAliceScore}`);
    isRun = true;

    while(isRun) {

      
      if(score_i > scores_len) {
        answer.push(scoreRank);
        isRun = !isRun;
        break;
      }
      if(curAliceScore === beforVal) {
        answer.push(scoreRank);
        isRun = !isRun;
        break;
      }


      curScore = scores[score_i];

      
      console.log(`2=> curAlice=${curAliceScore} >=  curScore=${curScore} scoreRank=${scoreRank} / beforScore=${beforScore} score_i= ${score_i}`)
      if(curAliceScore >= curScore) {

        if(beforScore !== -1 && beforScore !== curScore){
          beforScore = curScore;
          scoreRank++;
        } 

        answer.push(scoreRank);
        beforVal = curAliceScore;
        beforScore = curScore;
        isRun = !isRun;
        console.log(`3==>`)
        break;
      }
      
      
      console.log(`4=> out rank=${scoreRank} // beforScore=${beforScore} curScore=${curScore}`);
      
      if(beforScore !== curScore){
        beforScore = curScore;
        scoreRank++;
      } 
      score_i+= 1;
      
    }

    // console.log(answer);

    alice_i -= 1;
  }
  
  answer.reverse();

  answer.forEach((v) => {console.log(v)})
}


const convertArr = (str) => {
  let tokens = str.split(' ');
  let result = tokens.reduce((r,v)=> {
    r.push(Number(v));
    return r;
  }, []);

  return result;
}


// console.log( solution([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])); // 6, 4, 2, 1
// console.log( solution([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])); // 6, 5, 4, 2, 1
// console.log( 
//   solution(
//     convertArr('997 981 957 933 930 927 926 920 916 896 887 874 863 863 858 847 815 809 803 794 789 785 783 778 764 755 751 740 737 730 691 677 652 650 587 585 583 568 546 541 540 538 531 527 506 493 457 435 430 427 422 422 414 404 400 394 387 384 374 371 369 369 368 365 363 337 336 328 325 316 314 306 282 277 230 227 212 199 179 173 171 168 136 125 124 95 92 88 85 70 68 61 60 59 44 43 28 23 13 12')
//   , convertArr('12 20 30 32 35 37 63 72 83 85 96 98 98 118 122 125 129 132 140 144 150 164 184 191 194 198 200 220 228 229 229 236 238 246 259 271 276 281 283 287 300 302 306 307 312 318 321 325 341 341 341 344 349 351 354 356 366 369 370 379 380 380 396 405 408 417 423 429 433 435 438 441 442 444 445 445 452 453 465 466 467 468 469 471 475 482 489 491 492 493 498 500 501 504 506 508 523 529 530 539 543 551 552 556 568 569 571 587 591 601 602 606 607 612 614 619 620 623 625 625 627 638 645 653 661 662 669 670 676 684 689 690 709 709 710 716 724 726 730 731 733 737 744 744 747 757 764 765 765 772 773 774 777 787 794 796 797 802 805 811 814 819 819 829 830 841 842 847 857 857 859 860 866 872 879 882 895 900 900 903 905 915 918 918 922 925 927 928 929 931 934 937 955 960 966 974 982 988 996 996')
//   )
// ); 
console.log( 
  solution(
    convertArr('997 981')
  , convertArr('988 996 996')
  )
); 
// console.log( solution([295, 294, 291, 287, 287, 285, 285, 284, 283, 279, 277, 274, 274, 271, 270, 268, 268, 268, 264, 260, 259, 258, 257, 255, 252, 250, 244, 241, 240, 237, 236, 236, 231, 227, 227, 227, 226, 225, 224, 223, 216, 212, 200, 197, 196, 194, 193, 189, 188, 187, 183, 182, 178, 177, 173, 171, 169, 165, 143, 140, 137, 135, 133, 130, 130, 130, 128, 127, 122, 120, 116, 114, 113, 109, 106, 103, 99, 92, 85, 81, 69, 68, 63, 63, 63, 61, 57, 51, 47, 46, 38, 30, 28, 25, 22, 15, 14, 12, 6, 4]

// , [5, 5, 6, 14, 19, 20, 23, 25, 29, 29, 30, 30, 32, 37, 38, 38, 38, 41, 41, 44, 45, 45, 47, 59, 59, 62, 63, 65, 67, 69, 70, 72, 72, 76, 79, 82, 83, 90, 91, 92, 93, 98, 98, 100, 100, 102, 103, 105, 106, 107, 109, 112, 115, 118, 118, 121, 122, 122, 123, 125, 125, 125, 127, 128, 131, 131, 133, 134, 139, 140, 141, 143, 144, 144, 144, 144, 147, 150, 152, 155, 156, 160, 164, 164, 165, 165, 166, 168, 169, 170, 171, 172, 173, 174, 174, 180, 184, 187, 187, 188, 194, 197, 197, 197, 198, 201, 202, 202, 207, 208, 211, 212, 212, 214, 217, 219, 219, 220, 220, 223, 225, 227, 228, 229, 229, 233, 235, 235, 236, 242, 242, 245, 246, 252, 253, 253, 257, 257, 260, 261, 266, 266, 268, 269, 271, 271, 275, 276, 281, 282, 283, 284, 285, 287, 289, 289, 295, 296, 298, 300, 300, 301, 304, 306, 308, 309, 310, 316, 318, 318, 324, 326, 329, 329, 329, 330, 330, 332, 337, 337, 341, 341, 349, 351, 351, 354, 356, 357, 366, 369, 377, 379, 380, 382, 391, 391, 394, 396, 396, 400])); // 6, 4, 2, 1

