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
  calculateTotal()
}

function calculateTotal() {
  let grandTotal = 0

  for (let loop = 0; loop <= 5; loop += 1) {
    let scoop = iceCreamFlavors[loop];
    grandTotal += scoop.price * scoop.qty
    console.log(scoop.name, scoop.price, scoop.qty);

    let totalElm = document.getElementById('total')
    totalElm.textContent = grandTotal.toFixed(2)
  }
}