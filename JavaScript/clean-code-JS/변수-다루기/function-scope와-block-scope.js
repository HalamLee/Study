// var는 함수 단위 스코프

var global = '전역';

if (global === '전역') {
  // if문은 함수가 아니기 때문에 전역 공간에 영향을 줌
  var global = '지역';

  console.log('global :>> ', global); // 지역
}

console.log('global :>> ', global); // 전역 공간까지 영향을 받음 => 지역 출력

// --------------------------------------------------------------------------------

// let은 블록 단위 스코프

let global2 = '전역';

if (global2 === '전역') {
  // 블록 안에서 새로운 global2 초기화
  let global2 = '지역';

  console.log('global2 :>> ', global2); // 지역
}

console.log('global2 :>> ', global2); // let은 블록 단위 스코프이기 때문에 if문 안에서 새로운 global2를 사용하고, 전역에서 global2는 영향을 받지 않음 => 전역 출력
