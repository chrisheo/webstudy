# Javascript

- Javascript 기본적 문법구조   
  + 블럭의 구분 : 중괄호{}를 이용하여 구분   
  + 구문 실행 후에는 세미콜론;을 이용하여 마침   
  + HTML 내에서 onclick=""등의 태그를 이용하여 자바스크립트 구문을 실행할 수 있음.   
  + HTML 내에서 script태그를 이용하여 자바스크립트 구문을 실행할 수 있음.   
   
- 조건문   
  + if(condition) {script}   
  + 조건 검사 후 조건이 참일 시 구문 실행    
   
- 반복문   
  + while(condition) {script} : 조건 검사 후 조건이 참일 시 구문 반복   
  + for(define; condition; operation) {script} : 기존 while에 변수 할당 및 가감연산 기능 추가   
    
- 배열    
  + arr[index] : 대괄호[] 내에 인덱스를 입력하여 배열의 요소에 접근함.   
  
- 함수   
  + function funcname(emlement) {script} : element라는 인자를 받는 funcname라는 함수를 지정함.
  + var funcname = function(element) {script}; 와 같은 방식으로 지정할 수 있음.
   
- 객체
```
객체는 함수라는 기반 위에 존재
함수와 같이 정리정돈의 도구
객체가 갖고 있는 여러 특성 중 하나 "정리 정돈의 수단"
코드가 아주 길어면, 정리하기 위해 객체를 쓴다.
함수의 이름을 지정할때 set을 붙여서 많이 쓴다.

```
  + var object = {property1 : contents1, property2 : contents2, property3 : contents3} 를 이용하여 객체를 형성함.
  + object.property1과 같은 방식으로 접근하여 해당 객체에 저장된 contents1이라는 값을 얻을 수 있다.
  + 또한 객체 내에서도 함수를 정의할 수 있으며, 이의 경우를 메소드라고 한다.
  
- js파일 분리 및 불러오기
  + <script src="path"></script>를 이용 
- 이벤트  
  - onclick 실행되었을 때
  - onchange 변했을 때
  - onkeydown 키입력시
- 데이터타입 
```
데이터를 잘 처리하기 위해 데이터를 구분하는게 필요 > 데이터 타입. 
자바스크립트에는 6개의 데이터 타입과 객체가 있음 
콘솔 창에서 바로 코드 작성할 수 있음
```
  - 문자열
    - .length - 문자열의 길이
    - .toUpperCase() - 대문자로 바꿔줌
    - .indexOf('~') - ~가 몇 번째에 있는가
    - .trim() 공백 지움
- 리팩토링  
 ```
 리팩토링이란 비효율적인 코드를 효율적으로 개선하는 것
document.queruySelector(#night_day) 라는 태그는 id="night_day" 와 의미가 같다.
해당 코드를 this 바꾸면 효율적임
변수를 활용해 중복을 크게 제거 할 수 있다

 ```
- else...
  -  Document - 태그 삭제, 자식태그추가
  - DOM - 다큐멘트보다큼
  - window - 웹페이지 자체를 제어해야할 때
  - ajax - 웹페이지를 리로드하지 않고 변경해야할 때
  - cookie - 리로드 되어도 현재 상태를 유지해야할 때
  - offline Web App - 인터넷이 끊겨도 동작해야할 때
  - WebRTC - 화상통신 
  - speech - 음신통신 
  - WebGL - 3차원그래픽 
  - WebVR - 가상현실 
