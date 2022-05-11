# Boundary

## min-max
- 최소값, 최대갑, 이상, 초과 등 포함여부 중요
- 포함 여부를 결정 -> 네이밍에서 표현을 잘하자

## begin-end
- 시작과 끝이 동일하지 않은 경우
- EX) 달력(체크인-아웃)
    - 체크인: begin / 체크아웃: end
```javascript
function reservationDate(beginDate, endDate){
    //~~~~~
}

reservationDate('YYYY-MM-DD', 'YYYY-MM-DD');
```


## first-last
- 포함된 양 끝을 의미
- ~부터 ~까지
- min-max와 다르게 순서가 없을 수 있다
- 양 끝이 존재하지만 그 사이 값의 연속성이 존재하지 않음
- frontend / backend

## prefix-suffix

## 매개변수의 순서