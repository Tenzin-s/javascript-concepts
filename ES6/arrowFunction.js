
// tradition way by writing function keyword
function x(b,a)
{
return a + b;
}
console.log(x(3,4)) //7


/* Arrow function 
No this binding methods
Arrow functions don't have:
bind
call
apply*/
const c = (a,b) => a + b;
const getUser = () => ({ name: "Tenzin" }); 

// destructuring the value of name to new name variable
const { name } = getUser();

console.log(name); // Tenzin

console.log(c(3,4)) //7
console.log(getUser().name) //Tenzin

//used in map function/method
const arr = [2,3,4,5]
const arr2 = arr.map((x) => {return x * 2 })
console.log(arr2) // [4,6,8,10]