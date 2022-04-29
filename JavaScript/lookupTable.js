// switch ~ case문을 객체로 만들어 사용하기 - lookup table

// const people = ['한결', '하람', '성제'];

// people.forEach((name) => {
//   switch (name) {
//     case '한결': {
//       console.log(`${name} 사는 곳 : 구리`);
//       break;
//     }
//     case '하람': {
//       console.log(`${name} 사는 곳 : 의정부`);
//       break;
//     }
//     case '성제': {
//       console.log(`${name} 사는 곳 : 도농`);
//       break;
//     }
//   }
// });

const people = ['한결', '하람', '성제'];
const home = ['구리', '의정부', '도농'];
const peopleObj = {};
people.forEach((person, i) => (peopleObj[person] = home[i]));

for (let person in peopleObj) {
  console.log(`${person} 사는 곳 : ${peopleObj[person]}`);
}
