'use strict';

// 1. 배열 생성
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr1); // []
console.log(arr2); // [1, 2]

// 2. Index 통해서 배열에 접근
const fruits = ['apple', 'kiwi'];
console.log(fruits); // ['apple', 'kiwi']
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]); // kiwi

// 3. 배열에서 반복문 사용
// 3-1. for문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // apple, kiwi
}

// 3-2. for of
for (let fruit of fruits) {
  console.log(fruit); // apple, kiwi
}

// 3-3. forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach((fruit, index, array) => {
  console.log(fruit); // apple, kiwi
  console.log(fruit, index); // apple 0, kiwi 1
  console.log(fruit, index, array); // apple 0 ['apple', 'kiwi'], kiwi 1 ['apple', 'kiwi']
});
