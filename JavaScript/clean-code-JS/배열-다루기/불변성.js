// 불변성 (immutable)
// 불변성을 지키는 방법 2가지
// 1. 배열을 복사한다. -  spread 연산자를 이용하여 얕은 복사
// 2. 새로운 배열을 반환하는 메서드들을 활용한다. - filter(), map(), slice() ...

const originArray = ['123', '456', '789'];

const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log('originArray :>> ', originArray); // [0, '123', '456', '789', 10, 11, 12]
console.log('newArray :>> ', newArray); // [0, '123', '456', '789', 10, 11, 12]

// originArray만 변화를 주고 싶다면?
// const newArray = originArray; 가 아니라
// const newArray = [...originArray]; 를 해야 한다. =>  spread 연산자를 이용하여 얕은 복사

const originArray2 = ['123', '456', '789'];

const newArray2 = [...originArray2];

originArray2.push(10);
originArray2.push(11);
originArray2.push(12);
originArray2.unshift(0);

console.log('originArray2 :>> ', originArray2); // [0, '123', '456', '789', 10, 11, 12]
console.log('newArray2 :>> ', newArray2); // [ '123', '456', '789' ]
