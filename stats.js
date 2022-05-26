// 리팩토링 전
exports.max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((n) => {
    if (n > result) {
      result = n;
    }
  });
  return result;
};

// 리팩토링 후
exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);

// 리팩토링 전 , 기능 구현만
// exports.avg = (numbers) => {
//   const sum = numbers.reduce((acc, current) => acc + current, 0);
//   return sum / numbers.length;
// };

// 리팩토링 후 , 가독성이 안조음
// exports.avg = (numbers) =>
//   numbers.reduce(
//     (acc, current, index, array) =>
//       index === array.length - 1
//         ? (acc + current) / array.length
//         : acc + current,
//     0
//   );

// 두번째 리팩토링 후 , 가독성이 업
// exports.avg = (numbers) =>
//   numbers.reduce(
//     (acc, current, index, array) => acc + current / array.length,
//     0
//   );

// 세번째 리팩토링 후 , 가독성 업, destruction
exports.avg = (numbers) =>
  numbers.reduce(
    (acc, current, index, { length }) => acc + current / length,
    0
  );

exports.sort = (numbers) => numbers.sort((a, b) => a - b);

// 리팩토링 전
// exports.median = (numbers) => {
//   const middle = Math.floor(numbers.length / 2);

//   if (numbers.length % 2) {
//     // 홀수
//     return numbers[middle];
//   }
//   return (numbers[middle - 1] + numbers[middle]) / 2;
// };

// 리팩토링 후
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

// exports.mode = (numbers) => {
//   const counts = new Map();
//   numbers.forEach((n) => {
//     const count = counts.get(n) || 0;
//     counts.set(n, count + 1);
//   });
//   const maxCount = Math.max(...counts.values());
//   const result = [...counts.keys()].find(
//     (number) => counts.get(number) === maxCount
//   );

//   return result;
// };

// 리팩토링 전
// exports.mode = (numbers) => {
//   const counts = new Map();
//   numbers.forEach((n) => {
//     const count = counts.get(n) || 0;
//     counts.set(n, count + 1);
//   });
//   const maxCount = Math.max(...counts.values());
//   const modes = [...counts.keys()].filter(
//     (number) => counts.get(number) === maxCount
//   );

//   if (modes.length === numbers.length) {
//     // 최빈값이 없음
//     return null;
//   }

//   if (modes.length > 1) {
//     // 최빈값이 여러개
//     return modes;
//   }

//   // 최빈값이 하나
//   return modes[0];
// };

// 리팩토링 후
exports.mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
