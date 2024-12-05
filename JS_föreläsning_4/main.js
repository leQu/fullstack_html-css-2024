const string = "abc123";

const person = {
  name: "Kalle",
  age: 30,
  city: "Stockholm",
  country: "Sweden",
  email: "",
  address: {
    street: "Gatan 1",
    zip: "12345",
    city: "Stockholm",
  },
};

const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const sentence = ["Hej", "på", "dig"];

const inputArray = [1, 4, 2, 5, 7, 9, 6, 14];
inputArray[0];

const vadsomhelst = inputArray.reduce((accum, current) => {
  const newMemory = memory / 2;
  return newMemory + currentValue;
}, 0);

const result = [];
for (let index = 0; index !== inputArray.length; index++) {
  if (index % 2 === 0) {
    const currentNumber = inputArray[index];
    result.push(currentNumber);
  }
}

const onlyEvenNumbers = inputArray.filter(function isEven(number) {
  return number % 2 === 0;
});

const result2 = [];
for (let i = 0; i < onlyEvenNumbers.length; i++) {
  result2.push(onlyEvenNumbers[i] * 2);
}

onlyEvenNumbers.map(function doubleUp(number) {
  return number * 2;
});

const smallLetterWord = ["hej", "på", "dig", "och", "mig"];

const bigLetterWords = smallLetterWord.map(function capitalize(word) {
  return word.toUpperCase();
});

const findNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foundNumber = findNumberArray.find(function findNumber(number) {
  return number % 5 === 0;
});

async function workWithRealData() {
  let fetchedProducts;
  try {
    const data = await fetch("https://dummyjson.com/products?limit=10");
    fetchedProducts = await data.json();
  } catch (error) {
    console.error(error);
  }

  console.log(fetchedProducts.products[0].tags);

  const allTitles = products.products.map(function getTitle(product) {
    return product.title;
  });

  console.log(allTitles);

  const terribleProduct = products.products.find(function findTerribleProduct(
    item
  ) {
    return parseFloat(item.rating) < 3;
  });

  console.log(terribleProduct);
}

workWithRealData();

// const dirtyArray = [1, "fem", 2, "sju", 3, "nio", 4, "fjorton"];

// const cleanArray = dirtyArray.filter(function (element) {
//   return typeof element === "number";
// });

// const stringExample = "Hej på dig";

// const allStoraBokstäver = stringExample.toLowerCase();

// allStoraBokstäver = stringExample.toUpperCase();
