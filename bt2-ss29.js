let stock = [];
let choice;
let menu =( `
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
==========================
Mời nhập lựa chọn: `);

while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayStock(stock);
      break;
    case 3:
      searchById();
      break;
    case 4:
      updateItem();
      break;
    case 5:
      removeItem();
      break;
    case 6:
      let filteredArr = filterPrice();
      if (Array.isArray(filteredArr) && filteredArr.length > 0) {
        console.log(`Danh sách sản phẩm đã được lọc:`);
        displayStock(filteredArr);
      } else {
        console.log(`Không có sản phẩm nào trong khoảng giá này.`);
      }
      break;
    case 7:
      alert(`Đã thoát chương trình`);
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
  }
}
function addProduct() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhập tên sản phẩm:");
  let price = +prompt("Nhập giá sản phẩm:");
  let category = prompt("Nhập loại sản phẩm:");
  let quantity = +prompt("Nhập số lượng sản phẩm");
  if (isNaN(price) || isNaN(quantity) || !name || !category) {
    alert("Vui lòng nhập đầy đủ thông tin hợp lệ.");
    return;
  }
  stock.push({ id, name, price, category, quantity });
}
function displayStock(stock) {
  if (stock.length === 0) {
    console.log("Danh sách sản phẩm trống.");
    return;
  }
  console.log(`Danh sách Sản Phẩm:`);
  stock.forEach(function (item) {
    console.log(`===ID: ${item.id}===`);
    console.log(`Name: ${item.name}`);
    console.log(`Price: ${item.price}`);
    console.log(`Category: ${item.category}`);
    console.log(`Quantity: ${item.quantity}`);
    console.log(`=========================`); 
  });
}
function searchById() {
  let search = +prompt(`Mời bạn nhập ID sản phẩm:`);
  let product = stock.find(item => item.id === search);
  if (product) {
    console.log(`===ID: ${product.id}===`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`=========================`); 
  } else {
    alert(`Không tìm thấy sản phẩm với ID ${search}`);
  }
}
function updateItem() {
  let search = +prompt(`Mời nhập ID sản phẩm muốn cập nhật:`);
  let product = stock.find(item => item.id === search);
  if (product) {
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập loại sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm");
    if (isNaN(price) || isNaN(quantity) || !name || !category) {
      alert("Vui lòng nhập đầy đủ thông tin hợp lệ.");
      return;
    }
    product.name = name;
    product.price = price;
    product.category = category;
    product.quantity = quantity;
    alert(`Cập nhật sản phẩm thành công!`);
  } else {
    alert(`Không tìm thấy sản phẩm với ID ${search}`);
  }
}
function removeItem() {
  let search = +prompt(`Mời bạn nhập ID sản phẩm muốn xóa:`);
  let index = stock.findIndex(item => item.id === search);
  if (index !== -1) {
    alert(`Xóa sản phẩm với ID ${search} thành công!`);
    stock.splice(index, 1);
  } else {
    alert(`Không tìm thấy sản phẩm với ID ${search}`);
  }
}
function filterPrice() {
  let start = +prompt(`Mời bạn nhập giá tối thiểu:`);
  let end = +prompt(`Mời bạn nhập giá tối đa:`);
  if (end <= start || isNaN(end) || isNaN(start)) {
    alert("Khoảng giá không hợp lệ");
    return [];
  }
  return stock.filter(item => item.price >= start && item.price <= end);
}
