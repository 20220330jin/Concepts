# Variables

## var보다 const / let
- let과 const를 쓰는 이유
    - var -> 함수 스코프
    - let/const -> 블록 단위 스코프  / Temporal Dead Zone
        - 더욱 안전하다
```javascript
// var
var name = '이름1';
var name = '이름2';
console.log(name);
// 동일한 변수명, 다른 값이어도 선언 및 할당이 된다
// 마지막 할당한 값을 가져온다
// 코드가 길어질수록 위험성이 커진다

// let
let name = '이름';
let name = '이름';
let name = '이름';
let name = '이름';
// 이미 선언되었다는 오류가뜬다.
// const와 다르게 재 할당은 가능함..

// const
const name = '이름';
const name = '이름';
const name = '이름';
const name = '이름';
// 이미 선언되었다는 오류가 뜬다.
```
- function scope vs block scope
    - var -> function scope
        - 함수 단위가 아닌 블록단위(ex) if문)에서 값을 선언하여도 전역적으로 영향이 간다
    - let -> block scope
        - 블록안에서 새로운 변수를 선언하면 지역 안에서만 영향이 있고, 전역에서 선언한 변수에는 영향이 가지 않는다
```javascript
var global = '전역'

if(global === '전역'){
    var global = '지역';

    console.log(global); // 지역
}
console.log(global); // 지역

////////////////////////////////

let global = '전역';

if(global === '전역'){
    let global = '지역';

    console.log(global); // 지역
}
console.log(globla); // 전역
// 분기문안에서 새로 변수를 선언시, 분기문 안(지역)에서만 영향이 간다.

// 분기문 안에서 새로 값을 선언하고 할당한 경우,
// 전역으로 선언한 변수도 오염된다.
```
- let보다 const?
    - const는 '재할당' 만을 금지한다
    - 객체, 배열 등 reference 값을 변경하는 것은 가능 
```javascript
// 변수의 선언과 동시에 할당
const person = {
    name: 'kim',
    age: 30
}

person = {
    name: 'jin',
    age: 40
}
// 변수를 선언과 동시에 할당할 경우 재할당 불가

// const 변수의 값을 바꾸는 방법
person.name = 'jin';
person.age = 40;
// 다음과같이 값을 넣는 것은 '재할당'의 개념이 아니라 객체 내부의 값만 바꾼 것이기 때문에 가능하다
```

## 전역공간 사용 최소화
### 전역공간
- 최상위 공간
- Global
    - NodeJS 환경
- Window
    - 브라우저 환경

### 전역변수 접근
- 전역으로 변수를 선언한 경우, 다른 JS파일에서도 접근 가능
- window에 전역변수가 저장되어있음
- 전역변수는 어디서나 접근가능하기 때문에 더럽히면 안된다

## 임시변수
- 특정 공간에서 scope를 가지고 있는 것?
- 임시변수를 제거해야 하는 이유
    - 명령형으로 가득한 로직이 나오기 때문에
    - 어디서 어떻게 잘못되었는지 디버깅이 어렵다
    - 추가적인 코드를 작성하고 싶은 유혹에 빠진다
- 함수를 하나의 역할만 하도록 해야 한다
    - 코드의 유지보수
- 함수를 나누고, 바로 return 함으로써 임시변수를 제거하자
- 고차함수 사용도 좋음
    - map, filter, reduce
```javascript
function getElements(){
    const result = {};

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
}

////////////////////////////

function getElements(){
    const result = {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
    };

    return result;
}

///////////////////////////

function getElements(){
    return {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
    };
}
```

```javascript
function getRondomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);
    
    return randomNumber;
}
// 중간에 타인에 의해 수정되면 문제가 생길 수 있다
```

```javascript
// 하나의 역할만 할 수 있는 함수로 만들자!
```

## 호이스팅
- 런타임시(동작시) 선언과 할당이 분리된 것
- 런타임시 선언이 최상단으로 끌어올려진다
    - 코드 작성시 예상치 못한 실행결과가 나온다
- var로 선언한 변수가 초기화가 제대로 되지 않았을 때, undefined

- 함수 표현식을 이용하자
```javascript
const sum = function(){
    return 1 + 2;
}
console.log(sum());
```
- 