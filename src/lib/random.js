// Function to generate a daily seed-based random number
export function LCG(seed) {
  return function () {
    seed = (seed * 1879 + 1013904223) % 65536;
    return seed / 65536;
  };
}

export function fisherYatesShuffle(array, randomFunc) {
  let i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(randomFunc() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
