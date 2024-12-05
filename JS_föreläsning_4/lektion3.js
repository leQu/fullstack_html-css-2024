const arrayOfObjects = [
  { name: "Alice", age: 30, gender: "man" },
  { name: "Bob", age: 25, gender: "woman" },
  { name: "Charlie", age: 25, gender: "nonbinary" },
];
const ageKey = 25;

function groupByAge(arrayOfObjects, ageKey) {
  const isRightAge = [];
  const isNotRightAge = [];
  for (let i = 0; i < arrayOfObjects.length; i++) {
    switch (arrayOfObjects[i].age === ageKey) {
      case true:
        console.log("RIGHT AGE", arrayOfObjects[i]);
        break;
      case false:
        console.log("WRONG AGE", arrayOfObjects[i]);
        break;
    }
  }
  return { isRightAge, isNotRightAge };
}

groupByAge(arrayOfObjects, ageKey);
