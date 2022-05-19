function clickGroupButton() {
  const confirmButton = document.getElementsByTagName('button');
  const cancleButton = document.getElementsByTagName('button');
  const resetButton = document.getElementsByTagName('button');
}

// 구조분해할당을 통해 더 직관적이고 가독성 좋게 나타낼 수 있다.

function clickGroupButton2() {
  const [confirmButton, cancleButton, resetButton] =
    document.getElementsByTagName('button');
}

// ------------------------------------------------------------------------

function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0]; // 0번째 인덱스 활용 -> 구조분해할당을 사용하자

  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

// 하나만 사용할 때도 구조분해할당을 사용하자

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split('T'); // 구조분해할당 사용

  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

// 유틸함수를 만들어서 사용하는 방법도 있다.

function head(arr) {
  return arr[0] ?? '';
}

function formatDate3(targetDate) {
  const date = head(targetDate.toISOString().split('T')); // 유틸함수 사용

  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}
