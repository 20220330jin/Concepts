# JVM, JDK and JRE

## JVM(Java Virtual Machine)
- Java Byte Code를 OS에 특화된 코드로 변환
    - 인터프리터와 JIT 컴파일러
- Java Byte Code를 어떻게 실행할지에 대한 표준 스펙
- Java Byte Code
    - Complile 시 생성되는 .class 파일 안에 들어있는 코드

## JRE(Java Runtime Environment)
- Java Application을 실행할 수 있도록 구성된 배포판
    - 배포하는 최소 단위. 따라서 JVM만으로 배포하지 않음
- JVM과 Library로 구성
- 자바 컴파일러는 가지고 있지 않음 -> JDK에서 제공

## JDK(Java Development Kit)
- JRE + 개발에 필요한 툴
