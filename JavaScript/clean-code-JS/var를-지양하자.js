// let과 const는 ES2015버전부터 생겼음
// ES2015 이전에는 var 키워드만 사용해서 변수를 만들 수 있었음

// var : 함수 스코프
// let, const : 블록 스코프

// --------------------------------------------------------------------------------------------------

var name = '이름';
var name = '이름2'; // 같은 변수명으로 또 선언해도 에러가 발생하지 않음

console.log(name); // 호출 시 가장 마지막에 할당한 변수 호출 => 출력: 이름2

// --------------------------------------------------------------------------------------------------

console.log(Lami); // 선언이 되지 않은 변수를 호출했으나 에러가 발생하지 않고 undefined 출력됨

var Lami = '이하람';

// --------------------------------------------------------------------------------------------------

// let Hong = '홍길동';
// let Hong = '홍길동2'; // let은 같은 변수명으로 중복선언 시 에러 발생 => SyntaxError: Identifier 'Hong' has already been declared : 이미 선언했기 때문에 또 쓸 수 없다.

// --------------------------------------------------------------------------------------------------

// let과 const의 차이

// let : 선언 후 재할당 가능
let example;
example = '예시';
console.log(example); // 예시
example = '예시2';
console.log(example); // 예시2
example = '예시3';
console.log(example); // 예시3

// const : 선언 후 재할당 불가능
// const constExample; // const는 초기화하며 선언해야 함. 그렇지 않다면 에러 발생.
const constExample = 1;
console.log(constExample); // 1
constExample = 2; // const는 재할당이 불가능하기 때문에 에러 발생. => TypeError: Assignment to constant variable.
