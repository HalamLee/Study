const person = {
  name: 'Lami',
};

console.log(person.hasOwnProperty('name')); // true => 해당 property를 갖고 있는지 확인하는 메서드
console.log(person.hasOwnProperty('age')); // false

const foo = {
  hasOwnProperty: function () {
    return 'hasOwnProperty';
  },
  bar: 'string',
};

console.log(foo.hasOwnProperty('bar')); // hasOwnProperty
console.log(Object.prototype.hasOwnProperty.call(foo, 'bar')); // true
// => 유틸함수를 만들어 간편하게 사용하면 더 좋음

function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}

console.log(hasOwnProp(person, 'name')); // 유틸함수 사용, true
