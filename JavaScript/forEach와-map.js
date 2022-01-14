// forEach()
// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// The forEach() method executes a provided function once for each array element.
// forEach()는 배열 내의 모든 요소 하나하나가 주어진 (콜백)함수를 실행한다.

// map()
// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// map()은 배열 내의 모든 요소 하나하나가 주어진 (콜백)함수를 호출한 결과로 만든 새로운 배열을 반환한다.

// 공통점
// 배열에서 쓰인다는 점, 요소 하나하나마다 실행한다는 점에서 공통점을 가지고 있지만,

// 차이점
// forEach()는 (콜백)함수를 실행만 하지만,
// map()은 (콜백)함수를 통해 새로운 배열을 반환한다.

// forEach
const arr1 = [1, 2, 3];

arr1.forEach((el) => el * 2);
console.log(arr1); // [1, 2, 3]

// forEach를 이용해서 배열을 만들기 위해서는 빈 배열을 먼저 만들고 forEach에서 콜백함수를 통해 push 해야 한다.
const forEachArr = [];
arr1.forEach((el) => forEachArr.push(el * 2));
console.log(forEachArr); // [2, 4, 6]

// map
const arr2 = [1, 2, 3];
const mapArr = arr2.map((el) => el * 2);

console.log(arr2); // [1, 2, 3]
console.log(mapArr); // [2, 4, 6]

// map string
let map = Array.prototype.map;
let string = map.call('Hello World', (el) => {
  return el.toUpperCase();
});

console.log(string.join(' ')); // H E L L O   W O R L D
