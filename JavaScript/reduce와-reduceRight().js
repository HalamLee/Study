// reduce()

let a = [0, 1, 2, 3, 4].reduce((pre, cur, curIdx, arr) => {
  console.log('pre :>> ', pre);
  console.log('cur :>> ', cur);
  console.log('curIdx :>> ', curIdx);
  console.log('arr :>> ', arr);
  return pre + cur;
});
console.log('a :>>', a);
console.log('-'.repeat(30));

let b = [0, 1, 2, 3, 4].reduce((pre, cur, curIdx, arr) => pre + cur, 3);
console.log('b :>> ', b);
console.log('-'.repeat(30));

// reduceRight()

let c = [0, 1, 2, 3, 4].reduceRight((pre, cur, curIdx, arr) => {
  console.log('pre :>> ', pre);
  console.log('cur :>> ', cur);
  console.log('curIdx :>> ', curIdx);
  console.log('arr :>> ', arr);
  return pre + cur;
});
console.log('c :>>', c);
console.log('-'.repeat(30));

let d = [0, 1, 2, 3, 4].reduceRight((pre, cur, curIdx, arr) => pre + cur, 3);
console.log('d :>> ', d);
