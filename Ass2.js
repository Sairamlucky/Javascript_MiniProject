
var billAmount = Number(prompt("Enter your bill amount:"));
var tipPercentage = Number(prompt("Enter tip percentage:"));

var tip = billAmount * tipPercentage / 100;

var totalAmount = billAmount;
totalAmount += tip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);

