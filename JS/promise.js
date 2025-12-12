// Promise chain example

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);
});

p.then((result) => {
  console.log("got:", result);
});

p.then((result) => result + 1)
  .then((x) => `value is ${x}`)
  .then((str) => console.log(str));
