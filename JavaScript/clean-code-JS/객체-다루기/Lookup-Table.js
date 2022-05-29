function getUserType(type) {
  if (type === 'ADMIN') {
    return '관리자';
  } else if (type === 'INSTRUCTOR') {
    return '강사';
  } else if (type === 'STUDENT') {
    return '수강생';
  } else {
    return '해당 없음';
  }
}
// 요구사항이 추가될 때마다 불필요한 코드들을 추가해야 함 => 별로 좋지 않은 코드.
// 많은 if문과 else if문보다는 switch ~ case문이 더 좋다. => 조건이 명확하기 때문에. 하지만 이도 좋은 방법은 아님. 더 좋은 방법은? 객체를 사용하자.

function getUserType(type) {
  switch (key) {
    case 'ADMIN':
      return '관리자';
    case 'INSTRUCTOR':
      return '강사';
    case 'STUDENT':
      return '수강생';
    default:
      return '해당 없음';
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Lookup Table 1

function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
  };

  return USER_TYPE[type] || '해당 없음';
}

console.log(getUserType('test')); // 해당 없음
console.log(getUserType('ADMIN')); // 관리자

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Lookup Table 2
// 해당 사항이 없을 때도 객체에 만들어 놓으면 사용할 수 있음
// 이 방법이 제일 좋음

function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
    UNDEFINED: '해당 없음',
  };

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}

console.log(getUserType('test')); // 해당 없음
console.log(getUserType('ADMIN')); // 관리자

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Lookup Table 3
// 함수 안에 변수로 관리하지 않고 바로 사용하는 방법도 가능

function getUserType(type) {
  return (
    {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '수강생',
    }[type] ?? '해당 없음'
  );
}

console.log(getUserType('test')); // 해당 없음
console.log(getUserType('ADMIN')); // 관리자
