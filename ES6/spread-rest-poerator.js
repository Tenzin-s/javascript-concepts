// spread operator - Expands an array or object into individual elements.
const arr1 = [1, 2];
const arr2 = [0, ...arr1, 3];

console.log(arr2); // [0, 1, 2, 3]


// rest operator - Collects remaining elements or properties into a new array or object.
const [first, ...ggg] = [1, 2, 3, 4];

console.log(first); // 1
console.log(ggg);  // [2, 3, 4]


const { name, ...others } = { name: "Tenzin", age: 26, city: "Sydney" };

console.log(name);   // Tenzin
console.log(others); // { age: 26, city: "Sydney" }
