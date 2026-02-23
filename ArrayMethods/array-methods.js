/* 
// 1 map
// Creates a new array by transforming each element of the original array.
// Example: doubling numbers
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]

// 2 filter
// Creates a new array containing only the elements that pass a condition (predicate function).
// Example: get even numbers
const evens = numbers.filter(n => n % 2 === 0); // [2]

// 3 reduce
// Reduces the array to a single value (object, number, array, etc.) by accumulating results in each step.
// Example: sum of numbers
const sum = numbers.reduce((acc, n) => acc + n, 0); // 6

*/



const arr = [1, 2, 3, 4, 5,6,7,8,9,10];

const newArr = arr.map(x => x + 2 );
console.log(newArr) // [3,4,5,6,7]

// Dummy data
const orders = [
  { "orderId": 1, "userId": 101, "amount": 120, "status": "completed", "date": "2026-02-01" },
  { "orderId": 2, "userId": 102, "amount": 80, "status": "pending", "date": "2026-02-02" },
  { "orderId": 3, "userId": 103, "amount": 200, "status": "completed", "date": "2026-02-02" },
  { "orderId": 4, "userId": 104, "amount": 150, "status": "completed", "date": "2026-02-03" }
]

// filter method to filter out the orders with status completed and then map method to log the orderId of those orders.
const currentOrders = orders.filter(order => order.status === "completed");
console.log(currentOrders)
const orderIds = currentOrders.map(order => order.orderId);
console.log(orderIds) // [1,3,4]

// chaining filter and map method together to get the same result in one line of code.
const orderIds2 = orders.filter(order => order.status === "completed").map(order => order.orderId);
console.log(orderIds2) // [1,3,4] 

// find method to find the order with orderId 3 and log the orderId of that order.
const findOrder = orders.find(o => o.orderId === 3)
console.log(findOrder.orderId) // { "orderId": 3, "userId": 103, "amount": 200, "status": "completed", "date": "2026-02-02" }

// reduce method to calculate the total amount of all orders.
const totalAmount = orders.reduce((total, item)=> total + item.amount,0)
console.log(totalAmount)



// Things to focus more on: every and some method first, building logic inside reduce (chaining in reduce, conditional logic in reduce, etc.), set new set what it does?, how to remove duplicates.
//so practice reduce method with logic and conditions, practice every and some method, practice set new set to remove duplicates from an array.