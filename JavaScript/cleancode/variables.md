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