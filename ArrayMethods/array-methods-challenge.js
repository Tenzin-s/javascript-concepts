const apiResponse = [
  { userId: 1, name: 'Alex', transactions: [100, 200, 150], status: 'active' },
  { userId: 2, name: 'Sam', transactions: [50, 75], status: 'inactive' },
  { userId: 3, name: 'Jordan', transactions: [300, 400, 250, 100], status: 'active' },
  { userId: 4, name: 'Taylor', transactions: [25], status: 'active' }
];

// Challenge 1:
// Get an array of just the names
// Expected: ['Alex', 'Sam', 'Jordan', 'Taylor']

// Challenge 2:
// Get an array of active users only
// Expected: [{ userId: 1, ... }, { userId: 3, ... }, { userId: 4, ... }]

// Challenge 3:
// For ACTIVE users only, calculate each user's total transaction amount
// Expected: [{ name: 'Alex', total: 450 }, { name: 'Jordan', total: 1050 }, { name: 'Taylor', total: 25 }]

// Challenge 4:
// Find the user with userId 3

// Challenge 5:
// Calculate the GRAND TOTAL of all transactions from all active users
// Expected: 1525

// Challenge 6 (harder):
// Check if ANY user has a transaction over 350

// Solution 1:
const names = apiResponse.map(user => user.name);
console.log(names) // ['Alex', 'Sam', 'Jordan', 'Taylor']

// Solution 2:
const activeUsers =apiResponse.filter(u => u.status === "active")
console.log(activeUsers) // [{ userId: 1, ... }, { userId: 3, ... }, { userId: 4, ... }]

// Solution 3:
const activeUsersTotal = activeUsers.map(u => ({ name: u.name, total: u.transactions.reduce((sum, t) => sum + t, 0) }))
console.log(activeUsersTotal) // [{ name: 'Alex', total: 450 }, { name: 'Jordan', total: 1050 }, { name: 'Taylor', total: 25 }]

// Solution 4:
const user3 = apiResponse.find(u => u.userId === 3)
console.log(user3) // { userId: 3, name: 'Jordan', transactions: [300, 400, 250, 100], status: 'active' }

// Solution 5:
const grandTotal = activeUsers.reduce((total, user) => total + user.transactions.reduce((sum, t) => sum + t, 0), 0)
console.log(grandTotal) // 1525

// Solution 6:
const hasHighTransaction = apiResponse.some(u => u.transactions.some(t => t > 350))
console.log(hasHighTransaction) // true


const orders = [
  { id: 1, items: [20, 35, 10], customerId: 101, isPaid: true },
  { id: 2, items: [50], customerId: 102, isPaid: false },
  { id: 3, items: [15, 25, 30, 10], customerId: 101, isPaid: true },
  { id: 4, items: [100, 75], customerId: 103, isPaid: true }
];

// Write from scratch (no autocomplete):
// 1. Get total revenue from PAID orders only
// 2. Get array of customer IDs who have paid orders (no duplicates)
// 3. Find the order with id 3
// 4. Check if all paid orders have at least one item over 20

// Hint for #2: new Set([...]) removes duplicates from an array


const paidOrders = orders.filter(ord => ord.isPaid === true).reduc
console.log(paidOrders)