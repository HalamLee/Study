const prices = ['1000', '2000', '3000'];

const newPricesForEach = prices.forEach((price) => price + '원');
const newPricesMap = prices.map((price) => price + '원');

// -------------------------------------------------------------------
const newPricesForEach2 = prices.forEach(function (price) {
  return price + '원';
});
const newPricesMap2 = prices.map(function (price) {
  return price + '원';
});

console.log(newPricesForEach); // undefined
console.log(newPricesMap); // [ '1000원', '2000원', '3000원' ]

// -------------------------------------------------------------------------
// forEach는 새로운 배열을 return 하는 것이 아니라 주어진 함수를 배열 요소 각각에 대해 실행하는 반복문의 개념
// forEach는 undefined를 return 한다.

// map은 주어진 함수를 배열 요소 각각에 대해 실행하며 새로운 배열을 만들어 return 한다.
// 원본 배열 손상x
// ---------------------------------------------------------------------------------------------------------------

prices.forEach((price) => console.log(price + '원'));
prices.map((price) => console.log(price + '원'));

// 1000원
// 2000원
// 3000원
// 1000원
// 2000원
// 3000원

// forEach와 map 모두 잘 출력을 했지만 이 상황과 같이 단순히 함수를 실행시켜 return 할 필요가 없다면 map이 아니라 forEach를 사용해야 한다.
