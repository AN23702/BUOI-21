// Tìm hiểu về LocalStorage

// Gồm 2 phần
    // Key: do mình định nghĩa
    //  Value: giá trị mình cần lưu trữ và hiển thị ra, luôn lưu trữ dạng string

// Các phương thức với LocalStorage
    // Khai báo 1 LocalStorage
    // localStorage.setItem("KEY","value");

    // Để sử dụng LocalStorage
    // localStorage.getItem("KEY");

    // Xóa 1 giá trị localStorage
    // localStorage.removeItem("KEY");

    // Xóa tất cả giá trị đang có trong localStorgae
    // localStorage.clear();

//Lưu ý: Value trong localStorage luôn luôn lưu dạng string 
// Lưu thì phải ép kiểu JSON.stringify();
// Sử dụng dùng JSON.parse(); chuyển về dạng ban đầu


// Ví dụ minh họa

// Khai báo
// localStorage.setItem("NUMBERS", JSON.stringify([1,2,3]));

// // Lấy về sử dụng
// let name = JSON.parse(localStorage.getItem("NUMBERS"));

// // Xóa
// // localStorage.removeItem("NUMBERS");
// console.log(name);



// PROJECT TODO
// Khi vừa mở app
    // Hiển thị dữ liệu cũ trong localStorage
    // Đợi cho dữ liệu mới hiển thị ra

// B1: Truy cập phần tử
let formEl = document.querySelector("#form");
let inputEl = document.querySelector("#input");
let ulEl = document.querySelector("#todos");


// B2: Thiết kế db lưu trữ localStorage
// let data = [
//     {
//         name: "Ten cong viec 1",
//         completed: false
//     },
//     {
//         name: "Ten cong viec 2",
//         completed: true
//     }
// ]


// B2.1: Lưu trữ ở trong localStorage
// localStorage.setItem("TODOS",JSON.stringify(data));

// B2.2: Gọi dữ liệu trong localStorage ra
let todos = JSON.parse(localStorage.getItem("TODOS"));
// console.log(todos);



// B3: Kiểm tra xem dữ liệu mình gọi ra tồn tại hay không
    // Tồn tại -> hiển thị ra
    //  Không tồn tại -> đợi người dùng nhập vào và cùng hiện thị ra

// Hiển thị từng công việc ra ngoài UI
const showTodo = (data) => {
    let todoName = inputEl.value;  //Get value inpput 

    if(data) {
        todoName = data.name; // Tên công việc
    }

    if(todoName){
        //Tạo ra thẻ <li></li> để show công viêcj
        let liEl = document.createElement("li"); //-> tạo ra thẻ li

        // Check trạng thái của công việc -> Hiển thị ra
        if(data && data.completed == true){
            liEl.classList.add("completed")
        }

        // Click chuột trái thì thay đổi trạng thái công việc
        liEl.addEventListener("click", () => {
        liEl.classList.toggle("completed")
        })

        // Click chuột phải thì xóa công việc
        liEl.addEventListener("contextmenu", () => {
        liEl.remove();
        })

        liEl.innerHTML = todoName //Thêm nội dung cho li
        ulEl.appendChild(liEl); // Hiển thị trong ul
    }
   }



if (todos) {
    todos.forEach(value => {
        showTodo(value)
    });
}

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    showTodo();
})
