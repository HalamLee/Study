const arr = [1, 2, 3];

console.log('arr.length :>> ', arr.length); // 3

arr.length = 10;

console.log('arr.length :>> ', arr.length); // 10
console.log('arr :>> ', arr); // [ 1, 2, 3, <7 empty items> ] => 7개의 빈 공간이 생김

// --------------------------------------------------------------------------------------

const arr2 = [1, 2, 3];

arr2[3] = 4;

console.log('arr2 :>> ', arr2); // [ 1, 2, 3, 4 ]
console.log('arr2.length :>> ', arr2.length); // 4

arr2[9] = 10;

console.log('arr2 :>> ', arr2); // [ 1, 2, 3, 4, <5 empty items>, 10 ]
console.log('arr2.length :>> ', arr2.length); // 10 => 마지막 요소를 통해 length 조절
