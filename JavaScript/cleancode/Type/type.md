# Type

## Type 검사
### typeof
    - 피연사자를 평가한 후 문자열로 type을 반환
```javascript
typeof '문자열' // 'string'
typeof true // 'boolean'
typeof undefined // 'undefined'
typeof 123 // 'number'
typeof Symbol() //'symbol'
```
- javascript type
    - Primitive
    - Reference
        - Array, Function, Date ...
        - typeof로 감별이 힘들다
        - js 자체가 동적으로 변하는 언어 -> 타입도 동적 -> 따라서 감별이 어려움
```javascript
function myFunction(){}
class MyClass{}
const str = new String('문자열')

typeof myFunction() // 'function'
typeof MyClass // 'function'
typeof str // 'object'
typeof null // 'object' --> 오류...인정했다고함, 수정힘들어 안한다고...ㅋㅋ
// primitive가 아닌 경우 감별이 어렵다
```

### instanceof
- 연산자
- 객체의 Prototype chain을 검사
    - 최상위에는 object가 있음..
```javascript
function Person(name, age){
    this.name = name;
    this.name = age;
}

const poco = new Person('jin', 32)

const p = {
    name: 'jin',
    age: 32
}

poco instanceof Person // true
p instanceof p // false
```

### Object Prototype 
- Object.prototype.toString.call('') // '[object String]'

## undefined & null
- 값이 없거나 정의되지 않은 것을 명시적으로 표현
- null
- undefined
    - 아무것도 지정하지 않았을 때의 무언가의 기본값
```javascript
!null // true
!!null //false

null === false // false
!null === true // true

null + 123 // 123
// 수학적으로는 0으로 취급


let varb;

varb // undefined
typeof varb // 'undefined'

/////////////////////
let varb = null // object

undefined + 10 // NaN
```
## eq( == )
- 동등연산자(Equality Operator)
- type casting
    - 문자열과 숫자의 비교가 가능해짐...
- 위험함
- 형변환 후 엄격한 동등연산자 사용

### Strict equality(===)
- 엄격한 동등연산자

```javascript
'1' == 1 // true
1 == true // true
// 동등연산자 사용시 형변환이 일어난다(type casting)
// 암묵적 형변환

'1' === 1 // false
1 === true // false
```
## 형변환
- 형변환은 명시적으로 하자
    - 예측하기 쉬운 타입 변환
```javascript
11 + '문자와 결합' // '11문자와 결합
// 암묵적 형변환

parseInt('9.9999', 10); // 10진수로 변환
// 문자열이 숫자로 자동 형변환

// 명시적 형변환
String(11 + ' 문자와 결합') // '11 문자와 결합'
```

## isNaN
- 사람: 10진수 / 컴퓨터: 2진수
    - 소수점을 다루는 데 어려워짐
    - IEEE 754: 부동소수점 표현
- JS에서 숫자를 다루는 방법
    - Number.MAX_SAFE_INTEGER
    - Number.isInteger
- isNaN
    - is Not a Number

- 느슨한 검사
    - isNaN()
- 엄격한 검사
    - Number.isNaN()
```javascript
typeof 123 // true => 숫자가 맞다
isNaN(123) // false => 숫자가 맞다 
isNaN(123 + '테스트') // true
Number.isNaN(123) // false
```