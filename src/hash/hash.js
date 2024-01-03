const map = new Map(); // store key-value pairs in inclusion order

const set = new Set(); // store only keys

function firstRecurringCharacter(arr) {
  let map = {}; // for better simplification, ill only use a object
  for (let i = 0; i <= arr.length; i++) {
    if (map[arr[i]]) return arr[i];
    map[arr[i]] = i;
  }
}

const result = firstRecurringCharacter([1, 2, 3, 4, 5, 6, 2, 8, 9, 1]);

console.log(result);
