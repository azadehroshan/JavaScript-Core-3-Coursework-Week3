let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//  individual print
let {itemName ,quantity,unitPrice } = order
console.log(itemName);
console.log(quantity);
console.log(unitPrice);
function printDetails(order) {
order.itemName ,order.quantity, order.unitPrice
}
printDetails(order)

// total cost
function printOutReceipt(order) {
  console.log("QTY     ITEM            TOTAL");
  for (let item of order) {
    let total = 0;
    const { quantity,itemName,unitPrice } = item;
    total += unitPrice;
    console.log(`${quantity}     ${itemName}          ${(unitPrice * quantity).toFixed(2)}`);
  };
    console.log(`Total: ${total}`);
}
printOutReceipt(order);