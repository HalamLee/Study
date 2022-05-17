const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {};
arr[{}] = [1, 2, 3];
arr['func'] = function () {
  return 'hello';
};

console.log('arr.func() :>> ', arr.func()); // hello

console.log('arr :>> ', arr);
// [
//   1,
//   2,
//   3,
//   'test',
//   property: 'string value',
//   obj: {},
//   '[object Object]': [ 1, 2, 3 ],
//   func: [Function (anonymous)]
// ]

console.log('arr.length :>> ', arr.length); // 4

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3 test => why?
}

// -------------------------------------------------------------

const obj = {
  arr: [1, 2, 3],
  3: 'test',
  property: 'string value',
  obj: {},
  '{}': [1, 2, 3],
  func: function () {
    return 'hello';
  },
};

console.log('obj.func()', obj.func()); // hello

console.log('obj :>> ', obj);
// {
//   '3': 'test',
//   arr: [ 1, 2, 3 ],
//   property: 'string value',
//   obj: {},
//   '{}': [ 1, 2, 3 ],
//   func: [Function: func]
// }

// 배열과 객체가 매우 유사하다.
const arr2 = [1, 2, 3];

const obj2 = {
  0: 1,
  1: 2,
  2: 3,
};

console.log('arr2 :>> ', arr2); // [ 1, 2, 3 ]
console.log('obj2 :>> ', obj2); // { '0': 1, '1': 2, '2': 3 }

// ---------------------------------------------------------------

const arr3 = [1, 2, 3];

// 배열인지 확인하고 싶을 때

// 안 좋은 방법 => 배열이 아니라 문자열일 때도 참으로 나옴.
if (arr3.length) {
  console.log('배열 확인');
}

if (typeof arr3 === 'object') {
  console.log('배열 확인');
}

// 좋은 방법
// Array.isArray 사용하기
console.log(Array.isArray(arr3)); // true
