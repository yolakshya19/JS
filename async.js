// async function
async function myFunc() {
  console.log("HEELLOOO!!!");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data fetched");
      resolve(200);
      reject(100);
    }, 2000);
  });
}

async function displayWeather() {
  await api();
  await api();
}

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

// now we will fetch data using await instead of promise chain
async function displayData() {
  await display(1);
  await display(2);
  await display(3);
  await display(4);
}

// converting the above function into IIFE
(async function () {
  console.log("getting data 1.....");
  await display(1);
  console.log("getting data 2.....");
  await display(2);
  console.log("getting data 3.....");
  await display(3);
  console.log("getting data 4.....");
  await display(4);
  console.log("THE END!!!");
})();
// we defined the complete function in parenthesis and then added () after it which invokes the function here itself
