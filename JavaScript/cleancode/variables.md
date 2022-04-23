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