const { sum, sumOf } = require("./sum");

// 테케 만들기
// test("1 + 2 = 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// it 이용
// it("1 + 2 는 잘 더해진다.", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// descritbe : 종류 묶기
describe("sum", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("calculates all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
