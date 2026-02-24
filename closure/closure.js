// closure in javascript is when an inner function can access the variable of increment function even when the outer function has finished executing

function outer(count){

    function inner(){
        count++;
        console.log(count)
    }
return inner;

}



const counter = outer(); // this will return the inner function and assign it to counter variable, so we can call the inner function using counter variable and it will have access to the count variable of outer function even when the outer function has finished executing.
counter()
counter() // this will log 1 and 2 because the inner function has access to the count variable of outer function and it will increment the count variable every time it is called.
outer()() // this will not work because the outer function is not stored in a variable and it will return a new inner function every time it is called, so the count will always start from 0.

function add(x, y, z){
    function add2(){
        return x + y + z;
    }
    return add2;
}
const add3 = add(1,2,3);
add3.add2 = function() {
    return this();
}
add3.add2()

function accountBalance(initialBalance){
    let balance = initialBalance;
    return function(amount, operation){
        if(operation === "deposit"){
            balance += amount;
        } else if(operation === "withdraw"){
            balance -= amount;
        }
        return balance;
    }
}
const myAccount = accountBalance(1000);
console.log(myAccount(500, "deposit")) // 1500
console.log(myAccount(200, "withdraw")) // 1300
console.log(myAccount(0, "deposit")) // 1300 because the balance variable is not updated to 100, it is still 1300 because the inner function has access to the balance variable of outer function and it will not be affected by the change in the balance variable of outer function.

function outer() {
  let x = 10;
  
  function inner() {
    console.log(x);
  }
  
  x = 20;
  return inner;
}

const fn = outer();
fn()


//challenge:

// Write a function 'createSecretMessage' that:
// - Takes a secret string
// - Returns an object with two methods:
//   - reveal() → returns the secret
//   - update(newSecret) → changes the secret
// - The secret should NOT be directly accessible

// Example usage:

function createSecretMessage(secret){
    return {
        reveal: function() {
            return secret;
        },
        update: function(newSecret) {
            secret = newSecret;
        }
    };
}
const msg = createSecretMessage('hello');
console.log(msg.reveal());     // 'hello'
msg.update('world');
console.log(msg.reveal());     // 'world'
console.log(msg.secret);       // undefined (private!)