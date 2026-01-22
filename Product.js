/***********************
 * CÂU 1: Constructor
 ***********************/
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

/***********************
 * CÂU 2: Tạo mảng products
 ***********************/
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Electronics", true),
  new Product(2, "MacBook Air M2", 28000000, 3, "Electronics", true),
  new Product(3, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(4, "Apple Watch", 12000000, 0, "Accessories", false),
  new Product(5, "iPad Pro", 32000000, 2, "Electronics", true),
  new Product(6, "Magic Mouse", 2500000, 7, "Accessories", true)
];

/***********************
 * CÂU 3: Mảng name & price
 ***********************/
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));

/***********************
 * CÂU 4: Sản phẩm còn hàng
 ***********************/
const inStockProducts = products.filter(p => p.quantity > 0);

/***********************
 * CÂU 5: Sản phẩm giá > 30.000.000
 ***********************/
const expensiveProducts = products.filter(p => p.price > 30000000);

/***********************
 * CÂU 6: Accessories đang bán
 ***********************/
const accessoriesAvailable = products.filter(
  p => p.category === "Accessories" && p.isAvailable
);

/***********************
 * CÂU 7: Tổng giá trị kho
 ***********************/
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);

/***********************
 * CÂU 8: for...of
 ***********************/
console.log("CÂU 8:");
for (const p of products) {
  console.log(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

/***********************
 * CÂU 9: for...in
 ***********************/
console.log("CÂU 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

/***********************
 * CÂU 10: Tên SP đang bán & còn hàng
 ***********************/
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

/***********************
 * HIỂN THỊ RA HTML
 ***********************/
document.getElementById("output").innerHTML = `
<h2>Câu 3: Name & Price</h2>
<ul>
  ${nameAndPrice.map(p => `<li>${p.name} - ${p.price.toLocaleString()} VND</li>`).join("")}
</ul>

<h2>Câu 4: Sản phẩm còn hàng</h2>
<ul>
  ${inStockProducts.map(p => `<li>${p.name} (SL: ${p.quantity})</li>`).join("")}
</ul>

<h2>Câu 5: Sản phẩm giá trên 30.000.000</h2>
<ul>
  ${expensiveProducts.length > 0
    ? expensiveProducts.map(p => `<li>${p.name}</li>`).join("")
    : "<li>Không có</li>"}
</ul>

<h2>Câu 6: Accessories đang bán</h2>
<ul>
  ${accessoriesAvailable.map(p => `<li>${p.name}</li>`).join("")}
</ul>

<h2>Câu 7: Tổng giá trị kho</h2>
<p>${totalInventoryValue.toLocaleString()} VND</p>

<h2>Câu 10: Sản phẩm đang bán & còn hàng</h2>
<ul>
  ${sellingAndInStockNames.map(name => `<li>${name}</li>`).join("")}
</ul>
`;
