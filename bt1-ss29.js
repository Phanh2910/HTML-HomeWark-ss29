let arr = [];
let choice;
do {
  choice = +prompt(`
Mời bạn chọn chức năng:
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
`);
  switch (choice) {
      case 1: {
  let id = Number(prompt("Mời bạn nhập id:"));
  let name = prompt("Mời bạn nhập tên:");
  let email = prompt("Mời bạn nhập email:");
  let phone = Number(prompt("Mời bạn nhập số điện thoại:"));
  if (!name || !email || isNaN(phone)) {
    console.log("Vui lòng nhập đầy đủ thông tin hợp lệ!");
  } else {
    let contact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    arr.push(contact);
    console.log("Đã thêm liên hệ thành công!");
  }
  break;
}
    case 2: {
      if (arr.length > 0) {
        console.log("Danh sách danh bạ:");
        console.log(arr);
      } else {
        console.log("Danh bạ hiện không có dữ liệu.");
      }
      break;
    }
    case 3: {
      let findPhone = +prompt("Mời bạn nhập số điện thoại cần tìm:");
      let contact = arr.find((contact) => contact.phone === findPhone);
      if (contact) {
        console.log("Liên hệ tìm thấy:", contact);
      } else {
        console.log("Không tìm thấy số điện thoại trong danh bạ.");
      }
      break;
    }
    case 4: {
 let findId = prompt("Mời bạn nhập ID cần sửa:");

if (!findId || isNaN(findId)) {
  console.log("ID không hợp lệ. Vui lòng nhập một số.");
} else {
  findId = +findId;
  let contactIndex = arr.findIndex((contact) => contact.id === findId);

  if (contactIndex !== -1) {
    let newName = prompt("Mời bạn nhập lại tên:").trim();
    let newEmail = prompt("Mời bạn nhập lại email:").trim();
    let newPhone = prompt("Mời bạn nhập lại số điện thoại:");

    if (!newName || !newEmail || isNaN(newPhone)) {
      console.log("Dữ liệu không hợp lệ. Cập nhật thất bại.");
    } else {
      arr[contactIndex].name = newName;
      arr[contactIndex].email = newEmail;
      arr[contactIndex].phone = +newPhone;
      console.log("Cập nhật liên hệ thành công!");
    }
  } else {
    console.log("Không tìm thấy ID trong danh bạ.");
  }
}

    }
    case 5: {
      let deleteId = +prompt("Mời bạn nhập ID cần xóa:");
      let deleteIndex = arr.findIndex((contact) => contact.id === deleteId);
      if (deleteIndex !== -1) {
        arr.splice(deleteIndex, 1);
        console.log("Đã xóa liên hệ thành công!");
      } else {
        console.log("Không tìm thấy ID trong danh bạ.");
      }
      break;
    }
    case 6:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
  }
} while (choice !== 6);
