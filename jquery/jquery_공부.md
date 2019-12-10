##

## Sizzle

* support
* Expr
* getText
* isXML
* tokenize
* compile
* select
* outermostContext
* sortInput
* hasDuplicate

* setDocument
* document
* docElem
* documentIsHTML
* rbuggyQSA
* rbuggyMatches
* matches
* contains
* expando: "sizzle"+1 * new Data() // 리미트?
* preferredDoc : window.document
* dirruns=0
* done=0
* classCache:
* tokenCache:
* compilerCache:
* nonnativeSelectorCache:
* hasOwn = ({}).hasOwnProperty
* arr = []
* pop = arr.pop
* push_narive = arr.push
* push = arr.push
* slice = arr.slice
* booleans: "checked|selected|async|autofocus|autoplay|controls|defer|* disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
* whitespace: "[\\x20\\t\\r\\n\\f]" 공백 문자
* identifier: "(?:\\\\.|[\\w-]|[^\0-\\xa0])+" : ??
* attributes : 속성 값
* pseudos :
* rwhitespace = new RegExp( whitespace + "+", "g" )
* rtrim: new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + * whitespace + "+$", "g" ),
* rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
* rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace * + ")" + whitespace + "*" ),
* rdescend = new RegExp( whitespace + "|>" ),
* 
* rpseudo = new RegExp( pseudos ),
* ridentifier = new RegExp( "^" + identifier + "$" ),
* 
* matchExpr = {
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

* rhtml = /HTML$/i
* rinputs = /^(?:input|select|textarea|button)$/i
* rheader = /^h\d$/i
* rnative = /^[^{]+\{\s*\[native \w/
* // Easily-parseable/retrievable ID or TAG or CLASS selectors
* rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
* rsibling = /[+~]/
* rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,

### Fn
* sortOrder : 중복 검사 (hasDuplicate)
* indexOf : 동일 elem 존재여부.
* funescape:
* fcssescape:
* unloadHandler: setDocument() 

* createPositionalPseudo ( fn )
> 

* testContext( context ) 
> Context 존재 여부 확인

* isXML : 
* test() ?




### JS
#### String
String.fromCharCode(ux): Unicode를 받아 문자 생성
> ex) String.fromCharCode('65', '66', '67') => 'ABC'


## 참고
*ownerDocument : 부모 객체
*namespaceURI: 해당 노드 namepsace uri
*nodeName : Node Name
