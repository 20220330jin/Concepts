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
    - Native Method Stack
    - Heap
        - 객체 저장
        - 공유 자원
    - Method
        - Class 수준의 정보를 저장, 공유
        - Class 이름, 부모 클래스 이름, 메소드, 변수 등
        - 공유 자원
    - Stack
        - Thread마다 runtime 스택을 만들고, 그 안의 메소드 호출을 스택 프레임이라 부르는 블럭에 쌓는다
        - Thread 종료시 런타임 스택도 사라짐
    - PC 레지스터(Program Counter)
        - Thread마다 Thread 내 현재 실행할 스택 프레임을 가리키는 포인터가 생성
- 실행 엔진
    - 인터프리터
        - 바이트 코드를 한줄씩 실행
    - JIT 컴파일러
        - 반복적인 코드를 미리 네이티브 코드로 바꾼다
        - 인터프리터의 효율을 높임
    - GC(Garbage Collector)
        - 더이상 참조되지 않는 객체를 모아서 정리
- JNI(Java Native Interface)
- 네이티브 메서드 라이브러리

## JRE(Java Runtime Environment)
- Java Application을 실행할 수 있도록 구성된 배포판
    - 배포하는 최소 단위. 따라서 JVM만으로 배포하지 않음
- JVM과 Library로 구성
- 자바 컴파일러는 가지고 있지 않음 -> JDK에서 제공

## JDK(Java Development Kit)
- JRE + 개발에 필요한 툴

## Class Loader System
- 로딩 -> 링크 -> 초기화
### 로딩
- Bootstrap -> Extension -> Application
- Class Loader가 .class 파일을 읽고, 적절한 바이너리 데이터를 만들고 메모리 메서드영역에 저장
    - FQCN(Fully Qualified Class Name)
        - Package 이름 
    - Class, Interface, Enum
    - Method, Variable
- 로딩이 끝나면, 해당 클래스 타입의 Class 객체를 생성하여 메모리 힙영역에 저장
### 링크
- Verify -> Prepare -> Resolve
- 검증: .class 형식의 파일이 유효한지 체크
- Preparation
    -클래스 변수(static 변수)와 기본값에 필요한 메모리를 준비하는 과정
- Resolve
    - 심볼릭 reference를 실제 reference로 교체
        - 심볼릭 reference - 실제가 아닌 논리적인 reference
### 초기화
- Static 변수에 값을 할당