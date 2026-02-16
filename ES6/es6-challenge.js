const customer = {
    id: 101,
    name: 'Sara',
    email: 'sara@gmail.com',
    isPremium: true
};

const cartItems = [
    { id: 1, title: 'Wedding Monogram', price: 45, qty: 2 },
    { id: 2, title: 'Custom Name Print', price: 30, qty: 1 },
    { id: 3, title: 'Quote Artwork', price: 60, qty: 1 }
];

// Challenge 1:
// Destructure name and isPremium from customer
// Destructure title and price from the first cartItem

// Challenge 2:
// Write an arrow function 'getTotal' that:
// - takes the cartItems array
// - returns the sum of (price * qty) for all items
// (hint: you can use a for loop for now, no array methods yet)

// Challenge 3:
// Write an arrow function 'buildOrderSummary' that:
// - takes a customer object and a shippingCost (default: 5)
// - returns a NEW object (don't mutate!) with:
//   { ...customer, orderId: 'ORD-101', shippingCost, total: getTotal(cartItems) + shippingCost }

// Challenge 4:
// Write a template literal that logs this exact output:
// "Order ORD-101 for Sara → Total: $XXX (Premium customer)"
// where XXX is the actual total — and "(Premium customer)" 
// only appears if isPremium is true

//Solution 1: 
const { name, isPremium } = customer;

const [{ title, price }] = cartItems;

//Solution 2:
const getTotal = (items) => {
    let total = 0;
    for (const { price, qty } of items) { total += price * qty; }
    return total
}



//Solution 3:
const buildOrderSummary = (customer, items, shippingCost = 5) => 
    ({ ...customer,
        orderId: 'ORD-101',
        shippingCost,
        total: getTotal(items) + shippingCost})
console.log(buildOrderSummary(customer, cartItems))

//Solution 4:
const order = buildOrderSummary(customer, cartItems)
console.log(`Order ${order.orderId} for ${order.name} → Total: $${order.total} ${customer.isPremium ? '(Premium Customer)': ""}`)
