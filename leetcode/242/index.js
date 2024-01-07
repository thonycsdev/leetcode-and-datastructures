// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isValidAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hashmap = {};
  const hashmap2 = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    hashmap[element] = (hashmap[element] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    hashmap2[element] = (hashmap2[element] || 0) + 1;
  }
  for (const key in hashmap) {
    if (hashmap[key] !== hashmap2[key] || !(key in hashmap2)) {
      return false;
    }
  }
  return true;
};

export default isValidAnagram;
