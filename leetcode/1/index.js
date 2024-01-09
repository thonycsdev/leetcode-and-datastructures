export function twoSum(arr, target) {
  const hashmap = {};
  for (let i = 0; i <= arr.length; i++) {
    const element = arr[i];
    const diff = target - element;
    if (diff in hashmap) {
      return [hashmap[diff], i];
    }
    hashmap[element] = i;
  }
}
