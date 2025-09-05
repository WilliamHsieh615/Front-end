const text = document.querySelector(".text");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
const clear = document.querySelector(".clear");

let data = JSON.parse(localStorage.getItem("todoList")) || [];
renderData();

save.addEventListener("click", function (e) {
    if (text.value == '') {
        alert("請輸入內容！");
        return;
    }
    let item = {
        content: text.value,
        completed: false
    };
    data.push(item);
    renderData();
    text.value = "";
});

list.addEventListener("click", function (e) {
    let number = e.target.getAttribute("data-index");

    // 刪除待辦
    if (e.target.classList.contains("delete")) {
        let result = confirm("您確定要刪除嗎？");
        if (result) {
            data.splice(number, 1);
            renderData();
        }
    }

    // 勾選完成
    if (e.target.classList.contains("check")) {
        data[number].completed = e.target.checked;
        renderData();
    }
});

clear.addEventListener("click", function (e) {
    if (data.length !== 0) {
        let result = confirm("您確定要清除所有待辦事項嗎？");
        if (result) {
            data = [];
            renderData();
        }
    } else {
        alert("您尚未輸入內容！");
    }
});

function renderData() {
    let str = '';
    data.forEach(function (item, i) {
        let checked = item.completed ? "checked" : "";
        let style = item.completed ? "text-decoration: line-through;" : "text-decoration: none;";

        str += `<li>
                    <input type="checkbox" data-index="${i}" class="check" id="check${i}" ${checked}>
                    <label for="check${i}" style="${style}">${item.content}</label>
                    <input class="delete" data-index="${i}" type="button" value="刪除待辦">
                </li>`;
    });
    list.innerHTML = str;

    // 存到 localStorage
    localStorage.setItem("todoList", JSON.stringify(data));
}

