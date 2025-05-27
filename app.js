let iceCreamFlavors = [
  { name: "vanilla", price: 2, qty: 0 },
  { name: "chocolate", price: 2, qty: 0 },
  { name: "strawberry", price: 2, qty: 0 },
  { name: "cookie dough", price: 2, qty: 0 },
  { name: "mint chocolate chip", price: 2, qty: 0 },
  { name: "birthday cake", price: 2, qty: 0 }
]

function buyScoop(flavorPosition) {
  let scoop = iceCreamFlavors[flavorPosition]
  console.log("added", flavorPosition, scoop);
  scoop.qty += 1;
  console.log("added to cart", scoop);

}