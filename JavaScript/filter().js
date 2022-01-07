// 콜백함수에서 true를 반환하는 모든 요소를 모아 새로운 배열로 반환
// 호출되는 배열을 변화시키는 것은 아니다.

// arr.filter(callback(element, index, array)[, thisArg])

// callback은 3개의 인자를 받는다.
// element : 처리할 현재 요소
// index (optional) : 처리할 현재 요소의 인덱스
// array (optional) : filter를 호출한 배열
// thisArg (optional) : 콜백함수를 실행할 때 this로 사용하는 값

const arr = [1, 2, 3, 4, 5];

// 3보다 큰 수
const newArr1 = arr.filter((el) => el > 3);
console.log(newArr1); // [4, 5]

// 짝수
function getEven(value) {
  if (value % 2 === 0) return value;
}
const newArr2 = arr.filter(getEven);
console.log(newArr2); // [2, 4];

// 원래 배열 값 확인 => 값이 변하지 않음
console.log(arr); // [1, 2, 3, 4, 5]
