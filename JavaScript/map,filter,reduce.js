// // map()

// // 기본적인 호출 방법
// const myArray = [1, 2, 3, 4];
// const myArrayTimesTwo = myArray.map((value, index, array) => {
//   return value * 2;
// });

// console.log(myArray); // [1, 2, 3, 4]
// console.log(myArrayTimesTwo); // [2, 4, 6, 8]

// // object의 배열을 간단하게 string의 배열로 바꾸기

// const songs = [
//   {
//     id: 1,
//     name: 'Lost on You',
//     artist: 'LP',
//   },
//   {
//     id: 2,
//     name: 'I fall',
//     artist: 'Dayon',
//   },
//   {
//     id: 3,
//     name: 'Too Good For Me',
//     artist: 'Gogang',
//   },
//   {
//     id: 4,
//     name: 'Tell me if you can',
//     artist: 'Gogang',
//   },
//   {
//     id: 5,
//     name: 'A Thousand Years',
//     artist: 'Christina Perri',
//   },
// ];

// const allSongNames = songs.map((song) => song.name);

// console.log(allSongNames); // ['Lost on You', 'I fall', 'Too Good For Me', 'Tell me if you can', 'A Thousand Years']

// // map과 유틸 함수를 이용해서 모든 song의 name을 소문자로 바꾸기

// const mySongFunc = (song) => song.name.toLowerCase();
// const lowerCaseSongs = songs.map(mySongFunc);

// console.log(lowerCaseSongs); // ['lost on you', 'i fall', 'too good for me', 'tell me if you can', 'a thousand years']

// // 주어진 배열을 변화시키고, 각각의 오브젝트의 프로퍼티를 추가/삭제하기

// const mapped = songs.map((song) => {
//   const { artist, ...rest } = song;
//   return {
//     ...rest,
//     likeCount: 0,
//     comment: "It's very nice.",
//   };
// });

// console.log(mapped);
// // [
// //   {
// //     id: 1,
// //     name: 'Lost on You',
// //     likeCount: 0,
// //     comment: "It's very nice."
// //   },
// //   { id: 2, name: 'I fall', likeCount: 0, comment: "It's very nice." },
// //   {
// //     id: 3,
// //     name: 'Too Good For Me',
// //     likeCount: 0,
// //     comment: "It's very nice."
// //   },
// //   {
// //     id: 4,
// //     name: 'Tell me if you can',
// //     likeCount: 0,
// //     comment: "It's very nice."
// //   },
// //   {
// //     id: 5,
// //     name: 'A Thousand Years',
// //     likeCount: 0,
// //     comment: "It's very nice."
// //   }
// // ]

// // filter()

// const myArray = [1, 2, 3, 4];
// const myEvenArray = myArray.filter((value, index, array) => value % 2 === 0);

// console.log(myArray); // [ 1, 2, 3, 4 ]
// console.log(myEvenArray); // [ 2, 4 ]

// const strings = ['Java', 'JavaScript', 'TypeScript', 'Python'];
// const filtered = strings.filter((lang) => lang.includes('Java'));

// console.log(filtered); // [ 'Java', 'JavaScript' ]

// const songs = [
//   { id: 1, name: 'Lost on You', artist: 'LP' },
//   { id: 2, name: 'I fall', artist: 'Dayon' },
//   { id: 3, name: 'Too Good For Me', artist: 'Gogang' },
//   { id: 4, name: 'Tell me if you can', artist: 'Gogang' },
//   { id: 5, name: 'A Thousand Years', artist: 'Christina Perri' },
// ];

// const goGangSongs = songs.filter((song) => song.artist === 'Gogang');

// console.log(goGangSongs);
// // [
// //   { id: 3, name: 'Too Good For Me', artist: 'Gogang' },
// //   { id: 4, name: 'Tell me if you can', artist: 'Gogang' }
// // ]

// reduce()

const myArray = [1, 2, 3, 4];
const sum = myArray.reduce((acc, cur, curIdx, arr) => acc + cur, 0);
const avg = sum / myArray.length;

console.log(avg); // 2.5

// 배열에서 오브젝트 만들기

const songs = [
  { id: 1, name: 'Lost on You', artist: 'LP' },
  { id: 2, name: 'I fall', artist: 'Dayon' },
  { id: 3, name: 'Too Good For Me', artist: 'Gogang' },
  { id: 4, name: 'Tell me if you can', artist: 'Gogang' },
  { id: 5, name: 'A Thousand Years', artist: 'Christina Perri' },
];

const obj = songs.reduce((acc, cur) => {
  const artist = cur.artist;
  const artistCount = acc[artist] ? acc[artist] + 1 : 1;
  console.log('acc :>> ', acc);
  // acc :>>  {}
  // acc :>>  { LP: 1 }
  // acc :>>  { LP: 1, Dayon: 1 }
  // acc :>>  { LP: 1, Dayon: 1, Gogang: 1 }
  // acc :>>  { LP: 1, Dayon: 1, Gogang: 2 }

  return {
    ...acc,
    [artist]: artistCount,
  };
}, {});

console.log(obj); // { LP: 1, Dayon: 1, Gogang: 2, 'Christina Perri': 1 }

// 배열로 된 배열을 하나의 배열로 만들기

const additionalSong = [
  songs,
  [{ id: 12, name: 'Naked', artist: 'James Arthur' }],
];
const addedSongs = additionalSong.reduce((acc, cur) => acc.concat(cur), []);

console.log(addedSongs);
// [
//   { id: 1, name: 'Lost on You', artist: 'LP' },
//   { id: 2, name: 'I fall', artist: 'Dayon' },
//   { id: 3, name: 'Too Good For Me', artist: 'Gogang' },
//   { id: 4, name: 'Tell me if you can', artist: 'Gogang' },
//   { id: 5, name: 'A Thousand Years', artist: 'Christina Perri' },
//   { id: 12, name: 'Naked', artist: 'James Arthur' }
// ]

const playlist1 = [
  { id: 1, name: 'Lost on You', artist: 'LP', duration: 248 },
  { id: 2, name: 'I fall', artist: 'Dayon', duration: 202 },
  { id: 3, name: 'Too Good For Me', artist: 'Gogang', duration: 286 },
  { id: 4, name: 'Tell me if you can', artist: 'Gogang', duration: 247 },
  { id: 5, name: 'A Thousand Years', artist: 'Christina Perri', duration: 285 },
];

const playlist2 = [
  { id: 6, name: 'Ghost', artist: 'Isac Elliot', duration: 179 },
  { id: 7, name: 'L.O.V.E', artist: 'DEZMIN', duration: 179 },
  { id: 8, name: 'At My Worst', artist: 'Pink Sweat$', duration: 171 },
  { id: 9, name: 'Rewrite The Stars', artist: 'Zac Efron', duration: 217 },
  { id: 10, name: 'Creep', artist: 'Radiohead', duration: 238 },
];

const allSongs = [playlist1, playlist2];

// const songNames = allSongs
//   .reduce((acc, cur) => acc.concat(cur), [])
//   .map((song) => {
//     return { ...song, duration: Math.floor(song.duration / 60) };
//   })
//   .filter((song) => song.duration > 3)
//   .map((song) => song.name)
//   .join(', ');

// console.log(songNames); // Lost on You, Too Good For Me, Tell me if you can, A Thousand Years

const songNames = allSongs
  .reduce((acc, cur) => acc.concat(cur), [])
  .map((song) => {
    return { ...song, duration: Math.floor(song.duration / 60) };
  })
  .filter((song) => song.duration > 3)
  .map((song) => song.name)
  .join(', ');

console.log(typeof songNames); // Lost on You, Too Good For Me, Tell me if you can, A Thousand Years
