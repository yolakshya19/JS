const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
const para = document.querySelector("#fact");

const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response);
  // parse json into js object
    let data = await response.json();
    console.log(data);
  para.innerText = data[4].text;
};

btn.addEventListener("click", getFacts);
