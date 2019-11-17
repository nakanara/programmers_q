/*
소수 찾기
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
17	3
011	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
출처


*/
function solution(numbers) {
  var answer = [];

  console.log(numbers);
  console.log('split');
  console.log(numbers.split(''));
  function getPermutation(array, prefix) {
    prefix = prefix || '';
    if (!array.length) {
        return Number(prefix);
    }

    let result = array.reduce(function (result, value, idx) {

      // 복사후 현재 index 값만 제외
      let newArray = array.slice(0);
      newArray.splice(idx, 1);
      result.push(Number(prefix+value));

      let val = getPermutation(newArray, prefix+value);  
      return result.concat(val);
    }, []);
    return result;
  }


  // 데이터 중복 제거
  // Set을 이용한
  //let arrResult =  Array.from(new Set(getPermutation(numbers)));
  
  // filter
  //let arrResult = getPermutation(numbers).filter((v, idx, arr) => arr.indexOf(v) === idx)

  // reduce 
  
  let arrResult = getPermutation(numbers.split(''));

  arrResult = arrResult.reduce((unique, item)=> {
    if(!unique.includes(item))  unique.push(item) ;

    return unique;
  }, []);

  arrResult.sort((a,b)=> a-b);

  answer = arrResult.filter(v => {
    if(v == 0 || v == 1) return false;
    for(let i=2 ; i < v; i++ ) {
      if(v % i == 0) return false;
    }
    return true;
  })

  return answer.length;
}


/* solution#2 */
/*
function solution(numbers) {
    var answer = 0;
    var set = new Set();
    makeNumbers(set , '' , numbers.split(''));
    return set.size;
}

function issosu(num) {
    if( num < 2) return false;
    for (var i =2; i <= num / 2 ; i++) {
        if( num % i === 0) return false;
    }
    return true;
}

function makeNumbers(set , cur, nums) {
    if( nums.length === 0 ) return;
    var clone = nums.slice().reverse();
    nums.forEach(function(i) {
        var su = clone.pop();
        var num = Number(cur+su);
        if ( issosu(num)) {
            set.add(num);
        }

        makeNumbers(set, cur+su , clone);
        clone.unshift(su);
    }) 
}
*/


/* solution#3 */
/*
function solution(numbers) {
    var answer = 0;

    var n = numbers.split('');
    var nums = new Set()
    combi(n,'');

    function combi(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s))=== false) {
                nums.add(Number(s));
            console.log(Number(s))
                if (chkPrime(Number(s))) {

                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (var i = 0; i< a.length; i++) {
                var t = a.slice(0)
                t.splice(i,1);
                //console.log(t)
                combi(t,s + a[i]);
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}
*/

console.log( solution( '17')); // 7, 17, 71
//console.log( solution( [0, 1, 1])); // 11, 101