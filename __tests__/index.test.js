import { firstRecurringCharacter } from "../src/hash/hash.js";
import { test, expect } from "@jest/globals";
test("should find 2 as the duplicate character", () => {
  const input = [1, 2, 3, 4, 5, 6, 2, 8, 9, 1];

  const result = firstRecurringCharacter(input);
  expect(result).toBe(2);
});
