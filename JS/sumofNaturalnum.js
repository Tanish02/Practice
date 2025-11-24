// Problem: Given n, calculate the sum 1 + 2 + ... + n and print it.

const n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum from 1 to", n, "is", sum);
