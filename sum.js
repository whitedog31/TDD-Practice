function sum(a, b) {
  return a + b;
}

// 리팩토링 전
// function sumOf(numbers) {
//   let result = 0;
//   numbers.forEach((n) => {
//     result += n;
//   });
//   return result;
// }

// 리팩토링 후
function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
