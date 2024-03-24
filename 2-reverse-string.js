// const solution = (str) => {
//   let res = "";

//   for (let i = str.length; i > 0; i--) {
//     res += str[i - 1];
//   }
//   return res;
// };

const solution = (str) => str.split("").reverse().join("");

console.log(solution("world"));
