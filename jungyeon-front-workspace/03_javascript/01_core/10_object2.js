/*
    ## Object 생성자 함수 ##
    new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환 
    빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있음 
*/






/*
  ## 생성자 함수 ##
  1. new 키워드를 통해서 객체 생성을 진행시킬 수 있는 함수
  2. 함수명의 첫글자는 대문자로 작성
  3. 화살표함수로 작성 불가
  4. 프로퍼티를 함수내에 this.프로퍼티 로 정의 
  5. 예시
      function 생성자함수(param1, param2, param3, ..) {
        this.prop1 = param1;
        this.prop2 = param2;
        this.prop3 = param3;
        ..
        this.methodProp = function() {
            메소드내용
        }
      }

      new 생성자함수(1, 2, 3);

*/
