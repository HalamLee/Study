// 1. 배열을 string으로 변환: join()
// join(separator?: string): string; // 구분자를 넣지 않으면 자동으로 , 가 구분자가 들어가게 됨
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result); // apple,banana,orange
}

// 2. 문자열 하나를 각 값을 구분해서 배열로 변환: split()
// split(separator: string | RegExp, limit?: number): string[]; // 1. 구분자, 2. 개수
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  const result2 = fruits.split(',', 2);
  console.log(result); // [ '🍎', ' 🥝', ' 🍌', ' 🍒' ]
  console.log(result2); // [ '🍎', ' 🥝' ]
}

// 3. 주어진 배열의 값의 순서를 거꾸로 만들기: reverse() * 원시배열 바뀜 *
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [ 5, 4, 3, 2, 1 ]
  console.log(array); // [ 5, 4, 3, 2, 1 ] => 원시배열도 바뀜
}

// 4. 배열의 일부로 새로운 배열 만들기: slice()
// slice(start?: number, end?: number): T[];
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);

  console.log(result); // [ 3, 4, 5 ]
  console.log(array); // [ 1, 2, 3, 4, 5 ]

  const result2 = array.slice(2, 5);
  console.log(result2); // [ 3, 4, 5 ]
}

// =========================================================

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// 5. 조건에 맞는 요소 찾기: find()
// find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
// 콜백함수를 통해 요소 하나 찾으면 더이상 찾지 않고 그 요소를 return
// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student { name: 'C', age: 30, enrolled: true, score: 90 }
}

// 6. 조건에 맞는 요소으로만 배열 만들기: filter()
// filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // [
  //   Student { name: 'A', age: 29, enrolled: true, score: 45 },
  //   Student { name: 'C', age: 30, enrolled: true, score: 90 },
  //   Student { name: 'E', age: 18, enrolled: true, score: 88 }
  // ]
}

// 7. 배열에서 특정 값만 모아 배열 만들기: map()
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// 콜백함수에서 가공되어진 데이터를 모아 배열로 만든다.
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result); // [ 45, 80, 90, 66, 88 ]
}

// 8. 배열 안에 원하는 조건의 값이 있는지 확인: some()
// some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

// 배열 안에 있는 모든 요소들이 조건을 충족하는지 확인: every()
// every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = !students.every((student) => student.score >= 50); // 모든 학생의 점수가 50점보다 크거나 높지 않다 => 낮은 사람이 있다
  console.log(result2); // true
}

// 9. 배열에 있는 값들 누적하기: reduce()
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
// 매개변수 => (이전 값, 현재 값)
// 콜백함수 바깥에 0을 매개변수로 설정하면 0이 이전 값으로 들어가기 때문에 맨 처음 값을 현재값으로 줄 수 있다. => 이렇게 안 하면 맨 처음 값이 이전 값으로 들어가게 됨

// reduceRight(): reduce()와 비슷하지만 거꾸로 실행함 => reduce() 에서는 앞에서부터, reduceRight()는 뒤에서부터

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); // 73.8

  // 아래 코드들 주석 풀어서 결과 확인해보기

  // const result = students.reduce((prev, curr) => {
  //   console.log('-------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  // console.log(result);

  // const result2 = students.reduceRight((prev, curr) => {
  //   console.log('-------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  // console.log(result2);
}

// 10. 배열에서 조건에 맞는 요소들을 문자열로 저장하기: map()과 join() 같이 쓰기
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result); // 45,80,90,66,88

  // 60점 이상인 점수들만 문자열로 출력하기
  const result2 = students
    .map((student) => student.score)
    .filter((score) => score >= 60)
    .join();
  console.log(result2); // 80,90,66,88
}

// 11. 오름차순으로 정렬하기: sort((a, b) => a - b)
// 배열에서 원하는 요소들로 새로운 배열 만들고 오름차순으로 정렬한 것을 문자열로 바꾸기: map() + sort() + join()

// 내림차순으로 정렬하기: sort((a, b) => b - a)

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result); // 45,66,80,88,90
}
