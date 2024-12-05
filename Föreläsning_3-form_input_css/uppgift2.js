function sortByAge(arr, ageKey) {
  const younger = [],
    rightAge = [],
    older = [];
  for (person of arr) {
    console.log(
      `Nu tittar vi på: ${person.name} som är ${person.age} år gammal`
    );

    const y = ageKey - 5,
      o = ageKey + 5;

    switch (person.sex) {
      case "kvinna":
        rightAge.push(person);
        break;
      case "man":
        younger.push(person);
        break;
      case "obesamd":
        older.push(person);
        break;
      case "lax":
        older.push(person);
        break;
    }
  }

  const x = 5;
  const v = 2;
  console.log(typeof x);
  console.log(typeof v);
  console.log(typeof (x < v));

  console.log("Yngre: ", younger);
  console.log("Rätt ålder: ", rightAge);
  console.log("Äldre: ", older);
}

const persons = [
  { name: "Alice", age: 30, sex: "kvinna" },
  { name: "Bob", age: 25, sex: "kvinna" },
  { name: "Charlie", age: 25, sex: "man" },
  { name: "David", age: 35, sex: "obesamd" },
  { name: "Eve", age: 20, sex: "lax" },
];

sortByAge(persons, 25);
