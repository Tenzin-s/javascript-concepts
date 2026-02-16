// ES6 Concpets

// 1. Destructuring( Objects, Arrays) -> storing value to a new variable

/* Array without destructuring
const arr = [1,2,3]
const firstArray = arr[0]
const secondArray = arr[1]
const thirdarray =arr[3] */

// Array with destructuring (Assign array elements to a variable) using []
const arr = [1,2];
const [first,second,third] = arr;
console.log(first);

//swap value of 2 variables
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a) //2
console.log(b) //1



// Objects with destructuring (Extract value from Onjects) using {}
const person1 = {
    firstName: "Tenzin",
    lastName: "Sherpa",
    age: 26
}
const person2 = {
    firstName: "Rengoku",
    lastName: "Kyojuro",
    age: 30,
    role: "Flame Hashira"
}

const {firstName, lastName, age, role="not ranked"} = person1
console.log(firstName) //Tenzin
console.log(lastName) //Sherpa
console.log(role) // not ranked
console.log(age) //26


const fruits = {
    fruit1: "apple",
    fruit2: "banana"
}

const{fruit1: apple, fruit2 }= fruits
console.log(apple) //apple
console.log(fruit2) //banana

// modifying object directly by accessing the property of object (updates it to orange)
fruits.fruit1 ="orange"

console.log(fruits) // { fruit1: 'orange', fruit2: 'banana' }

// add a new property again by directly accessing the fruit object.
fruits.newfruit ="watermelon"

console.log(fruits) // { fruit1: 'orange', fruit2: 'banana', newfruit: 'watermelon' }

//updating value to new variable wm
const{newfruit: wm} = fruits

console.log(wm) // watermelon

// dletes the object property directly
delete fruits.newfruit 

console.log(fruits) //{ fruit1: 'orange', fruit2: 'banana' }


// creating a new object (recommended pattern) using spread operator to expand objects person1 and modify it
const updatedPerson1 = {
  ...person1,
  firstName: "Enzo",
  age: 28
};

console.log(updatedPerson1); // { firstName: 'Enzo', lastName: 'Sherpa', age: 28 }