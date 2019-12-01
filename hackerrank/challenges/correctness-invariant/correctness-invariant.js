'use strict';
/*

*/


function solution(crossword, hints) {
  let answer = [];
  let arrHints = hints.split(';');
  

  console.log(crossword, hints);

  const replaceAt = (txt, position, ch) =>  txt.substr(0, position) + ch + txt.substr( (position+1));
  const replaceVertical = (x,y, arWord, curWord) => {

    let size = curWord.length;
    let tCorssword = arWord.slice();

    for(let i=0; i < size; i++) {

      if(tCorssword[y+i][x] == '-' || tCorssword[y+i][x] == curWord[i]){
        tCorssword[y+i] = replaceAt(tCorssword[y+i], x, curWord[i]);
      }else {
        return {return:false, result:tCorssword};
      }
    } 

    return {return:true, result:tCorssword};
  }
  
  const replaceHorizontal= (x,y, arWord, curWord) => {

    let size = curWord.length;
    let tCorssword = arWord.slice();

    for(let i=0; i < size; i++) {
      //console.log(`${tCorssword[y][x+i]} ${curWord[i]}`)
      if(tCorssword[y][x+i] == '-' || tCorssword[y][x+i] == curWord[i]){
        tCorssword[y] = replaceAt(tCorssword[y], x+i, curWord[i]);
        
      }else {
        return {return:false, result:tCorssword};
      }
    } 

    return {return:true, result:tCorssword};
  }


  const searchPassword = (ysize, xsize, arWord, arHints) => {

    console.log(`in ==> ${arHints}`)
    if(arHints.length ==0) return arWord;
    // 전체 단어를 순환하며 검토.
    let curWord;

    // 단어에 대한 순서?
    for(let i=0; i < arHints.length; i++) {  
      let curWord = arHints[i];
      console.log(`${curWord}`)

      // Horizotal
      for(let yidx=0; yidx < ysize; yidx++) {
        for(let xidx=0; xidx < (xsize-curWord.length); xidx++ ) {
        
          let result = replaceHorizontal(xidx, yidx, arWord, curWord);

          if(result.return) {
            arWord = result.result;
            console.log('horizont\n', arWord);
            let newHints = arHints.slice();
            newHints.splice(i, 1);
            console.log(`${newHints}`)
            return searchPassword(ysize, xsize, arWord.slice(), newHints);
          }

          result = replaceVertical(xidx, yidx, arWord, curWord);
          if(result.return) {
            arWord = result.result;
            console.log('vertical\n', arWord);
            let newHints = arHints.slice();
            newHints.splice(i, 1);
            console.log(`${newHints}`)
            return searchPassword(ysize, xsize, arWord.slice(), newHints);
          }
        }
      }
    }
  }
  let ysize = crossword.length;
  let xsize = crossword[0].length;

  for(let i=0; i < arrHints.length; i++) {
    let newHints = arrHints.slice();
    let result = searchPassword(ysize, xsize, crossword.slice(), newHints);

    if(result)
      console.log(`result====> ${result}`)
  }
  
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
