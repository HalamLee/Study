// 객체 구조분해할당

function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco = new Person('poco', 30, 'korea');

// 위와 같은 방식은 매개변수의 순서가 정해져 있음.
// 만약 나이 빼고 만들고 싶다면

const poco2 = new Person('poco2', undefined, 'korea'); // 이렇게 나이 순서에 undefined를 넘겨야 함.

console.log(poco); // Person { name: 'poco', age: 30, location: 'korea' }
console.log(poco2); // Person { name: 'poco2', age: undefined, location: 'korea' }

// -----------------------------------------------------------------------------------------------------

// 이를 구조분해할당을 사용한다면?

function Person2({ name, age, location }) {
  this.name = name;
  this.age = age ?? 24;
  this.location = location ?? 'korea';
}

const Lami = new Person2({ name: 'Lami', age: 24, location: 'korea' });
const Lami2 = new Person2({ age: 24, name: 'Lami', location: 'korea' });
const Lami3 = new Person2({ name: 'Lami' });
console.log(Lami); // Person2 { name: 'Lami', age: 24, location: 'korea' }
console.log(Lami2); // Person2 { name: 'Lami', age: 24, location: 'korea' } 순서를 지키지 않아도 됨
console.log(Lami3); // Person2 { name: 'Lami', age: 24, location: 'korea' } 기본값을 넣었기 때문에 매개변수를 넣지 않아도 자동으로 값이 들어감.

// ------------------------------------------------------------------------------------------------------------

// 필수와 옵션

function Person3(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

// name: 필수, age와 location은 옵션. 많은 라이브러리를 사용하다보면 이런 형식을 발견할 수 있음.
// 필수와 옵션을 명확하게 보여주는 것.

const personOptions = {
  age: 24,
  location: 'korea',
};

const Lami4 = new Person3('Lami', personOptions);
console.log(Lami4); // Person3 { name: 'Lami', age: 24, location: 'korea' }

// -------------------------------------------------------------------------------------------------------------------

// 배열을 사용한 객체 구조분해할당

const orders = ['First', 'Second', 'Third'];

// 이 방법보다는
// const [st, , rd] = orders;

// console.log(st); // First
// console.log(rd); // Third

// 이 방법이 좋음
const { 0: st2, 2: rd2 } = orders;

console.log(st2); // First
console.log(rd2); // Third
