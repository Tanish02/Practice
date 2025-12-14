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

// ----------------------------------------------
// async / await example

// function doA() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("A task completed ->  "), 100)
//   );
// }
// function doB(val) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(val + "B task completed ->  "), 100)
//   );
// }

// function doC(val) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // random success or failure
//       if (Math.random() > 0.004) resolve(val + "C task completed");
//       else reject("C task failed");
//     }, 100)
//   );
// }

// async function run() {
//   try {
//     const a = await doA();
//     const b = await doB(a);
//     const c = await doC(b);
//     console.log("All done:", c);
//   } catch (err) {
//     console.log("caught error:", err);
//   }
// }
// run();

// ----------------------------------------------

// function fetchSomething() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Initial fetch error"));
//     }, 100);
//   });
// }

// fetchSomething()
//   .catch((err) => {
//     console.log("First :", err.message);
//     throw err;
//   })
//   .then(() => console.log("will not run if rethrow"))
//   .catch((err) => console.log("final handler :", err.message));

// ----------------------------------------------
// Converting callback-style functions to Promise chains
// ----------------------------------------------

function readFileCb(path, cb) {
  /*.....*/
}
console.log("Started :", path);
setTimeout(() => {
  if (path !== "file.txt") {
  }
});

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFileCb(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise("file.txt")
  .then((text) => process(text))
  .catch((err) => console.error("Error reading file :", err));
