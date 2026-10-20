let products = [ 
  {name: "Laptop",price: 800},
  {name:"Mouse", price: 25 },
  {name:"Keyboard", price:45}
  ];
products.forEach(function(product) {
  console.log(`Item:${product.name}- price:$${product.price}`);
});
let filteredproducts = products.filter(function(product){
   return product.price < 50;
});
 console.log(filteredproducts);
let mapproducts = products.map(function(product){
  return [product.name,product.price].join(" costs ")
});
 console.log(mapproducts);