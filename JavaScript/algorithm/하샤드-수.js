function solution(x) {
  let answer = true;
  let temp = '';
  x = String(x);
  for (let i = 0; i < x.length; i++) {
    temp += x[i] + '+';
  }
  temp = temp.slice(0, -1);
  if (Number(x) % eval(temp) !== 0) {
    answer = false;
  }
  return answer;
}
