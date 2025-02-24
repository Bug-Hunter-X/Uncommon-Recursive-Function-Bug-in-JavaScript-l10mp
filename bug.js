function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return foo(a - 1, b - 1);
}
console.log(foo(5, 5)); // Output: 0
console.log(foo(5, 0)); // Output: 5
console.log(foo(0, 5)); // Output: 5