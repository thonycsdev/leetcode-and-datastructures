const { describe, test, expect } = require("@jest/globals");
const { default: containsDuplicate } = require("../../../leetcode/271");

describe("Leetcode 271", () => {
  test("Should Pass 1", () => {
    const input = [1, 2, 3, 1];
    expect(containsDuplicate(input)).toBeTruthy();
  });
  test("Should Pass 2", () => {
    const input = [1, 2, 3, 4];
    expect(containsDuplicate(input)).toBeFalsy();
  });
  test("Should Pass 3", () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(input)).toBeTruthy();
  });
});
