function solution(n) {
  let answer = '';
  const temp = [];
  let strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    temp.push(strN[i]);
  }
  temp.sort((a, b) => b - a);
  for (let i = 0; i < temp.length; i++) {
    answer += temp[i];
  }
  return Number(answer);
}
