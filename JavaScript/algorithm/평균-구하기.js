function solution(arr) {
  let temp = '';
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i] + '+';
  }
  temp = temp.slice(0, -1);
  return eval(temp) / arr.length;
}
