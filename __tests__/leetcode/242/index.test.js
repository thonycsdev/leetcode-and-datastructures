const { describe, test, expect } = require("@jest/globals");
const { default: isValidAnagram } = require("../../../leetcode/242");

describe("Valid Anagrams", () => {
  test("Should return true for valid anagrams", () => {
    const s = "anagram";
    const t = "nagaram";
    expect(isValidAnagram(s, t)).toBeTruthy();
  });

  test("Should return false for invalid anagrams", () => {
    const s = "rat";
    const t = "car";
    expect(isValidAnagram(s, t)).toBeFalsy();
  });

  test("Should return true for empty strings", () => {
    const s = "";
    const t = "";
    expect(isValidAnagram(s, t)).toBeTruthy();
  });

  test("Should return false for different lengths", () => {
    const s = "listen";
    const t = "silentt";
    expect(isValidAnagram(s, t)).toBeFalsy();
  });

  test("Should return false for different lengths", () => {
    const s = "aacc";
    const t = "ccac";
    expect(isValidAnagram(s, t)).toBeFalsy();
  });
});
