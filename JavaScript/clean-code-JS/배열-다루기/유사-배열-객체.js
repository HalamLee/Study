const arrayLikeObject = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

console.log('arrayLikeObject :>> ', arrayLikeObject); // arrayLikeObject :>>  { '0': 'Hello', '1': 'World', length: 2 }
console.log('arrayLikeObject :>> ', typeof arrayLikeObject); // arrayLikeObject :>>  object
console.log(Array.isArray(arrayLikeObject)); // false

const arr = Array.from(arrayLikeObject); // 배열로 만들어주는 메서드
console.log(Array.isArray(arr)); // true
console.log('arr :>> ', arr); // arr :>>  [ 'Hello', 'World' ]
console.log('arr.length :>> ', arr.length); // 2

// ------------------------------------------------------------------------------------------------------------------------------

function generatePriceList() {
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index]; // generatePriceList에 파라미터로 받는 것이 없어서 arguments 를 통해 사용할 수 있음. arguments는 배열? ㄴㄴ 유사 배열 객체
    console.log(element);
    // 100
    // 200
    // 300
    // 400
    // 500
    // 600
  }
  console.log(Array.isArray(arguments)); //false => arguments는 배열이 아니다.

  // return arguments.map((arg) => arg + '원'); // arguments는 배열이 아니기 때문에 map으로 동작하지 않음.
  return Array.from(arguments).map((arg) => arg + '원');
}

const newArr = generatePriceList(100, 200, 300, 400, 500, 600);
console.log('newArr :>> ', newArr); // newArr :>>  [ '100원', '200원', '300원', '400원', '500원', '600원' ]
