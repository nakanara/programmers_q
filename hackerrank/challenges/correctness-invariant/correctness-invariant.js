'use strict';
/*

*/


function solution(crossword, hints) {
  let answer = [];
  
  console.log(crossword, hints);

  let arrHints = hints.split(';');
  console.log(arrHints);

  // 마지막 찾기
  const findLastIdx = (v, sIdx) => {
    for(let i=sIdx; i < v.length; i++) {
      if('+' === v[i]) return {len: i-sIdx, sIdx: sIdx, eIdx: i-1};
    }
  }

  const findWord = (n, thints) => thints.filter((v) => n == v.length);

  function findPasword (tcross, thints)  {

    // 가로 찾기.
    //tcross.forEach( (v, idx) => {
    for(let k=0; k < tcross.length ; k++) {
      let v = tcross[k];

      // -- 찾기
      let findIdx = v.indexOf('--');
      

      if(findIdx > -1) {
        let wordInfo = findLastIdx(v, findIdx);
        console.log(`${findIdx} == ${v} find=`, wordInfo);
        let word = findWord(wordInfo.len, thints);

        console.log(word);

        if(word.length == 0) return; //false

        console.log(v);
        v[1] = 'A';

        // for(let i=0; i < wordInfo.len; i++) {
        //   console.log(`in~~~ ${i+wordInfo.sIdx} ${v[i+wordInfo.sIdx]} == ${word[0][i]}`);
        //   tcross[k][i+wordInfo.sIdx] = 'A';
        // }
        //tcross[k] = v;
        console.log(v);
      }

    };
  }

  findPasword(crossword, arrHints);





  return answer;
}

console.log( solution(
  ['+-++++++++'
    ,'+-++++++++'
    ,'+-++++++++'
    ,'+-----++++'
    ,'+-+++-++++'
    ,'+-+++-++++'
    ,'+++++-++++'
    ,'++------++'
    ,'+++++-++++'
    ,'+++++-++++'],
    'LONDON;DELHI;ICELAND;ANKARA'
 ));