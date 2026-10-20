let products  = [
  { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];
let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));
if (productName.trim()=== ""){
console.log("product name is required");
}
else if(!Number.isFinite(productPrice || productPrice <=0)){
  console.log("Enter the valid positive price")
}else{
  products.push({
    name :productName,
    price: productPrice
});
}


products.forEach (function(product){
  let category;
  if (product.price <= 50){
  category ="Budget";
  }else if 
    (product.price <= 200){
      category="Standard";
    }else{
    category="Premium"
}
  console.log(`${product.name},$${product.price},${category}`);
});

function calculate_total(){
  let total = 0;
  for (let i=0 ;i<products.length;i++){
    total = total + products[i].price 
  }
  return total;
}
console.log('Total Inventory Value:',calculate_total());
const AffordableProducts = products
    .filter(product => product.price < 200)
    .map(product => product.name);

console.log('Filtered Affordable Items:',AffordableProducts);
const ProductReport = products.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

console.log('Formatted Report List:',ProductReport);
