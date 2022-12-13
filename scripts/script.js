let productsName = prompt("Enter product name");
let price = prompt("Enter price");
let qty = prompt("Enter quantity");
console.log(productsName, price, qty);
let totalNoTax = price * qty;
console.log("total without tax= " + totalNoTax);
let tax = 1.075;
let totalWithTax = totalNoTax * tax;
console.log("total with tax= " + totalWithTax);

document.getElementById("recipt").innerHTML = `
<ul>
<li>Item= ${productsName}</li>
<li>Item quantity= ${qty}</li>
<li>Item price= $${price}</li></ul>
<h3>Subtotal:  $${totalNoTax}</h3>
<h2>Total:  $${totalWithTax}</h2>`;
