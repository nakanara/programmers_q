# Vue

## index
* core/index.js : 
* core/instance/index.js
* core/util/env
* core/vdom/create-functional-component
* global-api/index


## core

* index.js
> 

* emptyObject: Object.freeze({})

## fn
* isUndef: Null 확인
* isDef : 값 존재 확인
* isTrue
* isFalse
* isPrimitive: string|number|symbol|boolean
* isObject : object 여부
* toString
* toRawType: ???
* isPlaninObject : 
* isRegExp: regexp 확인 [object RegExp]
* isValidArrayIndex: array index 확인
* isFinite:?
* isPromise: 함수 체크
* toString: 출력
* toNumber: 숫자변환 perseFloat사용, isNaN (숫자 비교)
* makeMap: 문자열을 map으로 전환 생성
* isBuiltInTag: slot, component
* isReservedAttribute: key,ref,slot,slot-scope,is
* remove(arr,item): arr에 해당 아이템 제거
* hasOwnProperty: ***
* hasOwn: Object.prototype.hasOwnProperty
* cached(fn) : fn 캐시하기.
* camelizeRE: /-(\w)/g  ???
* camelize: 대문자-> 소문자 변환
* capitalize: 첫글자 대문자 + 그외
* hyphenateRE: /\B([A-Z])/g 대문자 찾기 -- todo
* hyphenate: ?? 대문자 소문자 변환 -- todo
* polyfillBind(fn, ctx): ?? -- todo 파라메터 여러개 전달
* nativeBind(fn,ctx):?? fn.bind
* bind: Function.prototype.bind -- todo?
* toArray(list, start): Array 복사 
* extend(to, _from): 배열 복사
* toObject(arr) : 배열 복사 call)extend
* noop(a,b,c):
* no(a,b,c): 항상 false
* identity(_): return _;
* getStaticKeys(modules): 모듈 정보
* looseEqual(a,b): Object 비교 -- 재귀호출
* looseIndexOf(arr, val): arr안에 동일 내용이 존재하는지
* once(fn): 한번만 호출하는 이벤트 처리
* SSR_ATTR: 'data'server'rendered'
* ASSET_TYPES: 'component', 'directive', filter' 구분
* ☆LIEFCYCLE_HOOKS: 라이프 사이클
> beforeCreate : 생성전 
> created : 생성 후
> beforeMount : 결합 전
> mounted : 결합 후
> beforeUpdate: 변경 전
> updated: 변경 후
> beforeDestory: 파괴 전
> destroyed: 파괴 전
> activated: 
> deavtivated: 
> errorCaptured:
> serverPerfetch
* config 
> optionMergeStrategies:
> silent: 침묵
> productionTip
> devtools
> performance:
> errorHandler
> warnHandler
> ignoredElements
> keyCode
> isReservedTag:no
> isReservedAttr:no
> isUnknownElement: no
> getTagNamespace: noop
> parsePlatformTagName: identity
> mastUseProp:no
> async: true
> _lifecycleHooks: LOLIFECYCLE_HOOKS
* unicodeRegExp: 유니코드
* > /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
* isReseved(str) : $ or _로 시작하는지
* def(obj,key,val,enumerable) : 프로퍼티 저장
* bailRE: RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"))
* parsePath(path): Parse Simple path
* hasProto: '__proto__' in {}

### Browser environment sniffing
* inBrowser: typeof window
* inWeex: typeof WXEnvironment
* weexPlatform:
* UA: inBrowser && window.navigator.userAgent.toLowserCase();
* isIE = UA && /mise|trident/.test(UA) : IE 여부
* isIE9 = UA && UA.indexOf('msie 9.0') > 0
* isEdge = UA && UA.indexOf('edge/') > 0
* isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
* isIOS = (UA && /iphone||ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
* isChrome = UA && /chrome\/d+/.test(UA) && !isEdge
* isPhantomJS = UA && /phantomjs/.test(UA)
* isFF = UA && UA.match(/firefox\/(\d+)/)
* nativeWatch= ({}).watch : firefox has a "watch" function
* supportsPassive: false
* _isServer: vue-server-renderer can set VUE_ENV
* isServerRendering:  서버 여부
* isNative(Ctor) : 네거티브 코드 여부
* [☆]hasSymbol: 심볼 여부. -- Set 만드는 방식 공부
  
### 
* warn:
* tip:
* generateComponentTrace=(noop)
* formatComponentName=(noop)
* hasConsole = typeof console : 콘솔 여부
* classifyRE = /(?:^|[-_])(\w)/g; 
* classify:?
* warn: log 출력
* tip: tip 출력
* formatComponentName(vm, includeFile): 컴포넌트 확인
* repeat(str, n): 문자 반복
* generateComponentTrace: 컴포넌트 오류 Trace

### Directives

* uid: UI Index
* Dep: id, subs
* Dep.addSub: 
* Dep.removeSub
* Dep.depend: 
* Dep.notify: 알림처리 subs를 sort 후 update() 호출
* Dep.target
* targetStack
* pushTarget(target): TargetStack에 넣음
* popTarget(): TargetStack에서 뺌 Dep.target 마지막 타겟을 넣어줌
  
### VNode

* VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory): 생성
  
> tag
> data
> children
> text
> elm
> context
> componentOptions
> asyncFactory
> ns
> fnContext
> fnOptions
> fnScopeId
> key = data&&data.key
> componentInstance
> parent
> raw
> isStatic
> isRootInsert
> isComment
> isCloned
> isOnce
> asyncMeta
> isAsyncPlaceholder

* prototypeAccessors = {child: {configurable:true}}
* prototypeAccessors.child.get: componentInstance
* createEmptyVNode(text): 노드 생성
* createTextVNode(val): 텍스트 노드
* cloneVNode(vnode): 노드 복사
* arrayProto: Array.prototype
* arrayMethods: Object.create(arrayProto)
* methodsToPatch: Array Methods: 대상 메소드에 대해서 알림 -> notify
> push
> pop
> shift
> unshift
> splice
> sort
> reverse
* arrayKeys
* shouldObserve
* toggleObserving

### Observer 
Observer(value) : 값에 대한 정보 기억 후 
Observer.walk: defineReactive$$1 호출
Observer.observeArray: observe Item 추가

protoAugment(target, src): target.__proto__ = src;
copyAugment(target, src, key): target에 Key 저장
observe(value, asRootData) : value에 observe 생성

### defineReactive$$1

## 참고
Object.defineProperty(obj, key, {value:1, writable:true|false}: 프로퍼티 값을 읽기모드로 제한 가능
> value: 대상 설정 값
> enumerable: 이 속성이 대상 열거시 노출이 된다면 true, 기본값 false
> writable: true|false 값 변경 가능시 true, 기본 false
> configurable: 속성이 변경 가능하며, 삭제도 가능하다면 true, 기본값 false
> get: 속성 접근자, 기본 undefined
> set: 속성 설정자, 기본 undefined
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

* Call : 하나의 인자값?
* apply : 여러개의 인자값
* void: 원시적 값 평가 undefined 를 표현하기 위해 void 0 으로 처리하는 경우도 있음
> void 0 === '2' // undefined === '2' // false
> void (2 === '2') // undefined

* hasOwnProperty: 객체가 특정 프로퍼티를 가지고 있었는지 판단