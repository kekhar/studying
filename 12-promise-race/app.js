'use strict';

async function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  });
}

const promise = new Promise((resolve) => setTimeout(() => resolve("Promise выполнил"), 1000));

race([promise])
  .then(result => console.log("первый - resolve:", result))
  .catch(error => console.error("первый - reject:", error));