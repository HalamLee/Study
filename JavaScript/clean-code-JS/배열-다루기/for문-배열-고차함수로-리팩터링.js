// 조건
// 1. 원화 표기

const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i] + '원');
  }

  return temp;
}

console.log(getWonPrice(price)); // [ '2000원', '1000원', '3000원', '5000원', '4000원' ]

// map을 사용해 리팩터링하기

function getWonPrice2(priceList) {
  return priceList.map((price) => price + '원');
}

console.log(getWonPrice2(price)); // [ '2000원', '1000원', '3000원', '5000원', '4000원' ]

// ---------------------------------------------------------------------------------------------
// 조건
// 1. 원화 표기
// 2. 1000원 초과 리스트만 출력
// 3. 가격 순 정렬

// const price = ['2000', '1000', '3000', '5000', '4000'];

const suffixWon = (price) => price + '원'; // 원화 표기
const isOverOneThousand = (price) => Number(price) > 1000; // 1000원 초과 리스트만 출력
const ascendingList = (a, b) => a - b; // 정렬

function getWonPrice3(priceList) {
  const isOverList = priceList.filter(isOverOneThousand); // 1000원 초과 리스트만 출력
  const sortList = isOverList.sort(ascendingList); // 가격 순 정렬

  return sortList.map(suffixWon);
}

const result = getWonPrice3(price);

console.log(result); // [ '2000원', '3000원', '4000원', '5000원' ]
