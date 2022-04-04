# JVM, JDK and JRE

## JVM(Java Virtual Machine)
- Java Byte Code를 OS에 특화된 코드로 변환
    - 인터프리터와 JIT 컴파일러
- Java Byte Code를 어떻게 실행할지에 대한 표준 스펙
- Java Byte Code
    - Complile 시 생성되는 .class 파일 안에 들어있는 코드

### JVM의 구조
- 클래스 로더 시스템
    - .class 파일에서 Byte code를 읽고 메모리에 저장
    - 로딩
        - 클래스를 읽어오는 과정
    - 링크
        - 레퍼런스를 연결하는 과정
    - 초기화
        - class에 있는 static한 값들을 초기화하고 변수에 할당
        - static 변수를 선언한 경우, 다른 class에서 참조 가능
```java
static a = "gi";

static {
    a = "hi";
}
```
- 메모리
    - Stack
    - PC Registers
    - Native Method Stack
    - Heap
        - 객체 저장
        - 공유 자원
    - Method
        - Class 수준의 정보를 저장, 공유
        - Class 이름, 부모 클래스 이름, 메소드, 변수 등
        - 공유 자원
- 실행 엔진

## JRE(Java Runtime Environment)
- Java Application을 실행할 수 있도록 구성된 배포판
    - 배포하는 최소 단위. 따라서 JVM만으로 배포하지 않음
- JVM과 Library로 구성
- 자바 컴파일러는 가지고 있지 않음 -> JDK에서 제공

## JDK(Java Development Kit)
- JRE + 개발에 필요한 툴