// Shorthand Properties
// Concise Method
// ES2015+

const firstName = 'Lee';
const lastName = 'halam';

const person = {
  firstName: 'Lee',
  lastName: 'halam',
  // 함수가 아닌 메서드
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log('person :>> ', person);
// person :>>  {
//   firstName: 'Lee',
//   lastName: 'halam',
//   getFullName: [Function: getFullName]
// }
console.log('person.getFullName() :>> ', person.getFullName()); // Lee halam

// -------------------------------------------------------------------------------축약

const person2 = {
  firstName,
  lastName,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log('person2 :>> ', person2);
// person2 :>>  {
//   firstName: 'Lee',
//   lastName: 'halam',
//   getFullName: [Function: getFullName]
// }

console.log('person2.getFullName() :>> ', person2.getFullName()); // Lee halam
