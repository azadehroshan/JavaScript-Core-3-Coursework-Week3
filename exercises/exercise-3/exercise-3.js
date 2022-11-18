let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


function takeoutOrder(){
  console.log("QTY".padEnd(8)+"Item".padEnd(17)+"Total".padEnd(3));
  order.forEach(el=>{
    const {itemName,quantity,unitPrice}=el
    const total=(quantity*unitPrice).toFixed(2)
    console.log(`${quantity.toString().padEnd(8)}${itemName.padEnd(17)}${total.toString().padEnd(3)}`);
  })
}
takeoutOrder()