function nthSmallest(arr, pos) {
  let a = arr.sort((a, b) => a - b);
  return a[pos - 1];
}
