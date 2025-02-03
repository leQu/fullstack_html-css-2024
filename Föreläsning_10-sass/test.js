fetch("https://api.example.com/data/bilar?märke=volvo&år=2004")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// fetch("https://api.example.com/submit/bilar?märke=volvo&år=2004", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "John Doe",
//     job: "Developer",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.error("Error:", error));

function doThis() {
  return "Hello World";
}

const doThat = function () {
  return "Hello World";
};

const doTheOther = () => {
  const c = "Hello World";
  return c;
};
