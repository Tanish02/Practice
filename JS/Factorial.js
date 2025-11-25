// Problem: Given a positive integer n, compute its factorial: n! = 1 × 2 × 3 × ... × n

const n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}

console.log(`Factorial of ${n} is ${fact}`);
