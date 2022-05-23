const price = ['2000', '1000', '3000', '5000', '4000'];

const suffixWon = (price) => price + '원'; // 원화 표기
const isOverOneThousand = (price) => Number(price) > 1000; // 1000원 초과 리스트만 출력
const ascendingList = (a, b) => a - b; // 정렬

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand); // 1000원 초과 리스트만 출력
  const sortList = isOverList.sort(ascendingList); // 가격 순 정렬

  return sortList.map(suffixWon);
}

const result = getWonPrice(price);

console.log(result); // [ '2000원', '3000원', '4000원', '5000원' ]

// --------------------------------------------------------------------------------------------

// 배열 메서드 체이닝 활용 - 앞에서부터 연결

function getWonPrice2(priceList) {
  return priceList.filter(isOverOneThousand).sort(ascendingList).map(suffixWon); // 조건에 해당하는 것만 뽑아서 정렬하고, '원'을 붙여 새로운 배열로 만든다.
}

const result2 = getWonPrice2(price);

console.log(result2); // [ '2000원', '3000원', '4000원', '5000원' ]
