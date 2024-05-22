console.log("Before timeout");

setTimeout(() => {
  console.log("TIMEOUT");
}, 100); // sets a timeout of 0.1s = 100ms

console.log("After timeout");

function display(data, getNext) {
  setTimeout(() => {
    console.log("data", data);
    if (getNext) {
      getNext();
    }
  }, 100);
}

// //callback hell
display(1, () => {
  display(2, () => {
    display(3, () => {
      display(4);
    });
  });
});

// resolving callback hell using promise chain
console.log("getting data 1");
display(1)
  .then((res) => {
    console.log("getting data 2");
    return display(2);
  })
  .then((res) => {
    console.log("getting data 3");
    // console.log(res);
    return display(3);
  })
  .then((res) => {
    console.log("getting data 5");
    return display(5);
  })
  .then((res) => {
    console.log("getting data 6");
    return display(6);
  })
  .catch((err) => {
    console.log("error occurred", err);
    console.log("getting data 6 after");
    return display(6);
  });

// PROMISE
let np = new Promise((resolve, reject) => {
  console.log("I am a promise");
  // resolve("success");
  reject("data not fetched");
});

np.then((resolve) => {
  console.log("PROMISE RESOLVED", resolve);
});

np.catch((reject) => {
  console.log("PROMISE REJECTED", reject);
});

function display(data) {
  // without passing callback coz we will use promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === 5) {
        reject("data fetch failed");
      } else {
        console.log("data", data);
        resolve("data fetched");
      }
    }, 2000);
  });
}

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
    }, 4000);
  });
}
