//===================================================Promise==============================================

// instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
const promiseA:Promise<number> = new Promise((resolve, reject) => {
    resolve(777);
  });
  // At this point, "promiseA" is already settled.
  promiseA.then((val) => console.log("asynchronous logging has val:", val));
  console.log("immediate logging");
  

  const aThenable = {
    then(onFulfilled:Function, onRejected:Function) {
      onFulfilled({
        // The thenable is fulfilled with another thenable
        then(onFulfilled:Function, onRejected:Function) {
          onFulfilled(42);
        },
      });
    },
  };
  
  Promise.resolve(aThenable);

// Constructor
// Promise() constructor
const promise1:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  
  promise1.then((value) => {
    console.log(value);
  });
  
  console.log(promise1);

// Static methods
// Promise.all()
const promise11 = Promise.resolve(3);
const promise2 = 42;
const promise3:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise11, promise2, promise3]).then((values) => {
  console.log(values);
});

// Promise.allSettled()
const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise4, promise5];

// Promise.allSettled(promises).then((results:string | number) =>
//   results.forEach((result) => console.log(result.status)),
// );

// Promise.any()
const promise6 = Promise.reject(0);
const promise7 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise8 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promisess = [promise6, promise7, promise8];

// Promise.any(promisess).then((value:string | number) => console.log(value));

// Promise.race()
const promise9:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
  });
  
  const promise10:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two");
  });
  
  Promise.race([promise9, promise10]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });

// Promise.reject()
function resolved(result:any) {
    console.log("Resolved");
  }
  
  function rejected(result:any) {
    console.error(result);
  }
  
  Promise.reject(new Error("fail")).then(resolved, rejected);
// Promise.resolve()
const promise = Promise.resolve(123);

promise.then((value) => {
  console.log(value);
  // Expected output: 123
});
// Promise.withResolvers()
// async function* readableToAsyncIterable(stream) {
//     let { promise, resolve, reject } = Promise.withResolvers();
//     stream.on("error", (error) => reject(error));
//     stream.on("end", () => resolve());
//     stream.on("readable", () => resolve());
  
//     while (stream.readable) {
//       await promise;
//       let chunk;
//       while ((chunk = stream.read())) {
//         yield chunk;
//       }
//       ({ promise, resolve, reject } = Promise.withResolvers());
//     }
//   }
  
// Static properties
// Promise[Symbol.species]
// class MyPromise extends Promise {
//     someValue = 1;
//     static get [Symbol.species]() {
//       return Promise;
//     }
//   }
  
//   console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
  
// Instance methods
// Promise.prototype.catch()
const promise13 = new Promise((resolve, reject) => {
    throw new Error("Uh-oh!");
  });
  
  promise13.catch((error) => {
    console.error(error);
  });
// Promise.prototype.finally()
// function checkMail():Promise<string> {
//     return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//         resolve("Mail has arrived");
//       } else {
//         reject(new Error("Failed to arrive"));
//       }
//     });
//   }
  
//   checkMail()
//     .then((mail) => {
//       console.log(mail);
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       console.log("Experiment completed");
//     });
  
// Promise.prototype.then()
const promise14 = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  
  promise14.then((value) => {
    console.log(value);
    // Expected output: "Success!"
  });