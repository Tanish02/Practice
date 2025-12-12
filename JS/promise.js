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

// Returning a promise inside .then() (sequencing async work)
// function fetchuser(id) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ id, name: "A" }), 100)
//   );
// }

// function fetchOrders(userId) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(["order: 1", "order: 2"]), 100)
//   );
// }

// fetchuser(1)
//   .then((user) => fetchOrders(user.id)) // -> return promise
//   .then((orders) => console.log("orders:", orders));

// // .catch errors
// Promise.resolve(10)
//   .then((x) => {
//     throw new Error("Boom !!!!");
//   })
//   .then(() => console.log("this will not run"))
//   .catch((err) => console.log("caught:", err.message)); // : boom

// // ------------------------------
// // Dummy example functions
// // ------------------------------
// function dosomething() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("initial result"), 100)
//   );
// }

// function maybeFail(value) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (Math.random() > 0.5) reject("Random failure!");
//       else resolve("Success with: " + value);
//     }, 100)
//   );
// }

// const fallbackValue = "fallback-value";

// // Catching and continuing
// dosomething()
//   .then((result) => maybeFail(result))
//   .catch((err) => {
//     console.error("recovering from error :", err);
//     return fallbackValue; // continue the chain with a fallback
//   })
//   .then((val) => console.log("continues with:", val));
