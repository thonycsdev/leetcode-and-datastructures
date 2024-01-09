import { describe, test } from "@jest/globals";
import { twoSum } from "../../../leetcode/1/index";

describe("Leet code 1", () => {
  test("1", () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    const output = [0, 1];
    const result = twoSum(input, target);
    expect(result).toEqual(output);
  });
  test("2", () => {
    const input = [3, 2, 4];
    const target = 6;
    const output = [1, 2];
    const result = twoSum(input, target);
    expect(result).toEqual(output);
  });
  test("3", () => {
    const input = [3, 3];
    const target = 6;
    const output = [0, 1];
    const result = twoSum(input, target);
    expect(result).toEqual(output);
  });
});
