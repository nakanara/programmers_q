## 변수
var document = window.document; // Document
// 클래스가 아닌 프로토타입으로 설정 = 클래스와 유사
var getProto = Object.getPrototypeOf;
// Util 
var arr = [];
var slice = arr.slice;
var concat = arr.concat;
var push = arr.push;
var indexOf = arr.indexOf;
var class2type = {}; // Object 유형
> Boolean Number String Function Array Date RegExp Object Error Symbol

var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty; // 자신의 프로퍼티 존재 여부
var fnToString = hasOwn.toString; // 속성
var ObjectFunctionString = fnToString.call( Object ); // toString

var support = {};

isArrayLike (obj) // Array 여부.


## 속성 정의
var preservedScriptAttributes = { // 스크립트 속성
  type: true, // 유형
  src: true, // uri
  nonce: true, // 캐쉬
  noModule: true // 모듈 여부
};

// Function 
// 함수 여부 확인, 숫자가 아니라면.
isFunction = obj => typeof obj === "function" && typeof obj.nodeType !== "number";
isWindow = obj => obj != null && obj === obj.window; // window 여부

DOMEval = (code, node, doc) => {...}
> 스크립트 Element 생성 후 code를 해당 스크립트에 추가. 
> node 정보가 있다면 type, src, nonce, noModule 가 있다면 attribute 에 정의 
> head에 추가하고, 생성이 끝난뒤 제거 한다.
> doc.head.appendChild(script).parentNode.removeChild(script);

toType // 해당 object의 유형을 돌려준다.


## jQuery
### jQuery.fn

* pushStack = elems => {} 
> 추가 된 정보를 jQuery 에 merge한다., ret.prevObject에 이전 데이터 담기
* toArray|gep|each|map|slice|first|last|eq|end|push|sort|splice

* jQuery.extend  // 객체 복사.
* Symbol.iterator // 반복?
* fn[expando] = true;

### jQuery.extend
* expando // UUID
* guid //1 
* support 
* error // Error
* noop // 빈 Object
* isPlainObject(obj) // function 여부.
* isEmptyObject // 빈 Object라면 true
* globalEval(code, options) // 코드를 전역에 설정
* each(obj, callback) // 반복하며, callback을 호출한다. $.each(obj, fn...)
* trim(text) // 좌우 공백 제거
* makeArray(arr, result) // 객체 결합
* inArray : = 값 존재 여부 .indexOf
* merge : array 붙이기
* grep: 배열중 특정조건에 해당하는 것을 담는다.
* map: 결과물을 담아서 돌려준다.

### Sizzle !!!
* expando = "sizle" + 1 * new Date() // UUID
* hasDuplicate // 데이터 중복 여부.
* hasOwn // ({}).hasOwnProperty
* arr = []
* pop = arr.pop
* push_native = arr.push
* push = arr.push
* slice = arr.slice
* booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped" // html tags attr
* preferredDoc = window.document // 기본 윈도우
* document : window.document
* docElem = document.documentElement
* documentIsHTML ; XML 여부
* support 
*  - attributes = assert = (el) => el.getAttribute("className") // ??
*  - getElementByTagName = (el) // 해당 el에 전체 tag 수
*  - getElementByClassname // getElementsByClassName // 지원여부
*  - getById (el) // el를 docElem에 추가하여 getElementsByName 지원여부 확인
*  - qsa // querySelectorAll
* Expr
*  - find[ID] // ID를 getElementById, getAttributeNode 등 지원하는 방식으로 찾는 기능 정의
*  - find[TAG] // TAG명으로 찾기 getElemenesByTagName(tag)
> support.qsa 지원시 querySelectorAll 로 사용.
*  - find[CLASS] // getElementsByClassName로 검색
* rbuggyQSA : 지원 태그 정리
* Expr
*  - cacheLength=50 // cache 길이 
*  createPseudo





* sortOrder // 중복 비교
* createCache // 캐쉬 객체 ?? 생성방법 공부 필요.!!!
* indexOf // 데이터 확인
* funescape // 높이 가져오기?
* fcssescape  // ?
* unloadHandler -> setDocument() -- 페이지가 해제되면 unloadHandler 를 호출하여 document를 원복한다.
* setDocument(node) : node가 없다면, window.document에 unload 이벤트 등록
> window.addEventListener :IE11, Edge --- 
>   window.addEventListener('unload, unloadHandler, false)
> window.attachEvent: IE9, IE10 only
>   window.attachEvent("onunload, unlaodHandler);
* isXML // html 여부.
* matches // ?
* matchesSelector
* getText // 노드에 텍스트 명
* 

### 참고
"jQuery + (version + Math.random() ).replace(/\D/g, "") // 숫자만 남기기 UUID

### REGEXP
rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // 공백 제거 trim().

```
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace = "[\\x20\\t\\r\\n\\f]",

// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
  // Operator (capture 2)
  "*([*^$|!~]?=)" + whitespace +
  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
  "*\\]",

pseudos = ":(" + identifier + ")(?:\\((" +
  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  // 1. quoted (capture 3; capture 4 or capture 5)
  "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
  // 2. simple (capture 6)
  "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
  // 3. anything else (capture 2)
  ".*" +
  ")\\)|)",

// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace = new RegExp( whitespace + "+", "g" ),
rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
rdescend = new RegExp( whitespace + "|>" ),

rpseudo = new RegExp( pseudos ),
ridentifier = new RegExp( "^" + identifier + "$" ),

matchExpr = {
  "ID": new RegExp( "^#(" + identifier + ")" ),
  "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
  "TAG": new RegExp( "^(" + identifier + "|[*])" ),
  "ATTR": new RegExp( "^" + attributes ),
  "PSEUDO": new RegExp( "^" + pseudos ),
  "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
    "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
    "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
  "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
  // For use in libraries implementing .is()
  // We use this for POS matching in `select`
  "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
    whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
},

rhtml = /HTML$/i,
rinputs = /^(?:input|select|textarea|button)$/i,
rheader = /^h\d$/i,


* rnative = /^[^{]+\{\s*\[native \w/
> 브라우저 기본 기능의 경우 [native code] 로 시작

// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

rsibling = /[+~]/,

// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
```
