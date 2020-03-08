let customerName= prompt("What is your name?");

// Use 3 prompts to ask for 3 product names and their prices.
let product1Name = prompt("What is the name of your first product?");
const product1Price = Number(prompt("what is the price of your first product?"));
let product2Name = prompt("What is the name of your second product?");
const product2Price = Number(prompt("what is the price of your second product?"));
let product3Name = prompt("What is the name of your third product?");
const product3Price = Number(prompt("what is the price of your third product?"));

// Make conditinal statement for when price is 0.

if (product1Price === 0) {
    prompt(`The price cannot be $0. Please enter a valid price for your ${product1Name}.`);
}
if (product2Price === 0) {
    prompt(`The price cannot be $0. Please enter a valid price for your ${product2Name}.`);
}
if (product3Price === 0) {
    prompt(`The price cannot be $0. Please enter a valid price for your ${product3Name}.`);
}


// Create "Subtotal" formula for adding all items together.
let subtotal = product1Price + product2Price + product3Price;
// Log the subtotal to the console
console.log(`Subtotal: $${subtotal}`);


// Create formula for Grandtotal by adding a tax of 6.25%
let grandTotal = subtotal + (subtotal *  .0625);


// Make display messsage show on the console.
let msg = `${customerName} your grand total is $${grandTotal}.`;
console.log(msg);