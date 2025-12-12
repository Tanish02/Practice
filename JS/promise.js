// Promise example

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);
});

p.then((result) => {
  console.log("got:", result);
});
