// Object.freeze 객체를 동결한다.

const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
});

STATUS.PENDING = 'change'; // 값을 바꾸려고 시도.
console.log(STATUS); // 값이 바뀌지 않음. { PENDING: 'PENDING', SUCCESS: 'SUCCESS', FAIL: 'FAIL' }

STATUS.NEW = 'new'; // 새로운 값을 추가하려고 시도.
console.log(STATUS); // 추가되지도 않음. { PENDING: 'PENDING', SUCCESS: 'SUCCESS', FAIL: 'FAIL' }

console.log(Object.isFrozen(STATUS)); // 객체가 동결되어 있는지 확인하는 메서드 => 결과 : true

// 깊은 복사는 관여하지 못함.

const STATUS2 = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    GREEN: 'GREEN',
    RED: 'RED',
  },
});

console.log(Object.isFrozen(STATUS2)); // true
console.log(Object.isFrozen(STATUS2.PENDING)); // true
console.log(Object.isFrozen(STATUS2.OPTIONS)); // false

STATUS2.OPTIONS.GREEN = 'G'; // 값 수정
STATUS2.OPTIONS.YELLOW = 'Y'; // 값 추가
delete STATUS2.OPTIONS.RED; // 값 삭제

console.log(STATUS2); // 수정, 추가, 삭제가 가능함.
// {
//   PENDING: 'PENDING',
//   SUCCESS: 'SUCCESS',
//   FAIL: 'FAIL',
//   OPTIONS: { GREEN: 'G', YELLOW: 'Y' }
// }
