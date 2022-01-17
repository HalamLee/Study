'use strict';

// 1. 배열 생성
const arr1 = new Array();
const arr2 = [1, 2];

console.log(arr1); // []
console.log(arr2); // [1, 2]

// 2. Index 통해서 배열에 접근
const fruits = ['🍎', '🥝'];

console.log(fruits); // ['🍎', '🥝']
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[fruits.length - 1]); // 🥝

// 3. 배열에서 반복문 사용
// 3-1. for문
console.log(fruits); // [ '🍎', '🥝' ]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // 🍎, 🥝
}

// 3-2. for of
console.log(fruits); // [ '🍎', '🥝' ]

for (let fruit of fruits) {
  console.log(fruit); // 🍎, 🥝
}

// 3-3. forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
console.log(fruits); // [ '🍎', '🥝' ]

fruits.forEach((fruit, index, array) => {
  console.log(fruit); // 🍎, 🥝
  console.log(fruit, index); // 🍎 0, 🥝 1
  console.log(fruit, index, array); // 🍎 0 ['🍎', '🥝'], 🥝 1 ['🍎', '🥝']
});

// 4. 추가, 삭제, 복사
// push: 배열 맨끝에 값 추가
console.log(fruits); // [ '🍎', '🥝' ]

fruits.push('🍇', '🍑');
console.log(fruits); // ['🍎', '🥝', '🍇', '🍑']

// pop: 배열 맨끝에 있는 값 삭제
console.log(fruits); // [ '🍎', '🥝', '🍇', '🍑' ]

fruits.pop();
console.log(fruits); // ['🍎', '🥝', '🍇']

// unshift: 배열 맨앞에 값 추가
console.log(fruits); // [ '🍎', '🥝', '🍇' ]

fruits.unshift('🍓', '🍋');
console.log(fruits); // ['🍓', '🍋', '🍎', '🥝', '🍇']

// // shift: 배열 맨앞에 있는 값 삭제
console.log(fruits); // [ '🍓', '🍋', '🍎', '🥝', '🍇' ]

fruits.shift();
console.log(fruits); // ['🍋', '🍎', '🥝', '🍇']

// unshift와 shift는 push와 pop보다 실행속도가 느림
// => 뒤에 추가, 삭제하는 것은 아직 값이 배정되지 않았기 때문에 그냥 추가하면 되지만, 앞에 추가하거나 삭제할 때는 다른 요소들의 변화도 이루어지기 때문
// 그러므로 push와 pop 사용하기

fruits.push('🍌', '🍉');
console.log(fruits); // ['🍋', '🍎', '🥝', '🍇', '🍌', '🍉']

// splice: 지정한 위치에 있는 값 삭제
console.log(fruits); // ['🍋', '🍎', '🥝', '🍇', '🍌', '🍉']
fruits.splice(1, 1); // 1번째 인덱스 하나 삭제
console.log(fruits); // ['🍋', '🥝', '🍇', '🍌', '🍉']

console.log(fruits); // ['🍋', '🥝', '🍇', '🍌', '🍉']
fruits.splice(1, 1, '🍒', '🍈'); // 1번째 인덱스 삭제하고 그 자리에 값 추가
console.log(fruits); // ['🍋',  '🍒', '🍈', '🍇', '🍌', '🍉']

console.log(fruits); // ['🍋',  '🍒', '🍈', '🍇', '🍌', '🍉']
fruits.splice(1); // 1번째 인덱스부터 끝까지 삭제
console.log(fruits); // ['🍋']

// concat: 두 가지 배열 합치기
console.log(fruits); // ['🍋']

const fruits2 = ['🍉', '🍏'];
const newFruits = fruits.concat(fruits2);

console.log(newFruits); // ['🍋', '🍉', '🍏']

// 5. 검색
// indexOf(): 해당 값이 처음 나오는 게 몇 번째 인덱스인지, 만약 해당 값이 없다면 -1 return
console.log(newFruits); // ['🍋', '🍉', '🍏']

console.log(newFruits.indexOf('🍉')); // 1
console.log(newFruits.indexOf('🍓')); // -1

// lastIndexOf(): 해당 값이 마지막으로 나오는 게 몇 번째 인덱스인지, 만약 해당 값이 없다면 -1 return
console.log(newFruits); // [ '🍋', '🍉', '🍏' ]

newFruits.push('🍉');
console.log(newFruits); // ['🍋', '🍉', '🍏', '🍉]
console.log(newFruits.lastIndexOf('🍉')); // 3
console.log(newFruits.lastIndexOf('🍓')); // -1

// includes(): 배열에 해당 값이 있는지 boolean으로 return
console.log(newFruits); // ['🍋', '🍉', '🍏', '🍉]

console.log(newFruits.includes('🍓')); // false
console.log(newFruits.includes('🍋')); // true
