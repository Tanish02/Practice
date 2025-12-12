// // Promise chain example

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(42), 100);
// });

// p.then((result) => {
//   console.log("got:", result);
// });

// p.then((result) => result + 1)
//   .then((x) => `value is ${x}`)
//   .then((str) => console.log(str));

// Output after 42
// got: 42
// result = 43

function fetchuser(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: "A" }), 100)
  );
}

function fetchOrders(userId) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["order: 1", "order: 2"]), 100)
  );
}

fetchuser(1)
  .then((user) => fetchOrders(user.id)) // -> return promise
  .then((orders) => console.log("orders:", orders));
