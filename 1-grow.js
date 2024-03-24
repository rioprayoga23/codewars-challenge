// function grow(x) {
//   let res = x[0];

//   x.forEach((item) => {
//     res = res * item;
//   });

//   return res;
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([1, 2, 3, 4]));
