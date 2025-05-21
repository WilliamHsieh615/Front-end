const text = document.querySelector(".text");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
const clear = document.querySelector(".clear");

let data = [];

save.addEventListener("click", function (e) {
    if (text.value == '') {
        alert("請輸入內容！");
        return;
    }
    let item = {};
    item.content = text.value;
    data.push(item);
    renderData();
    text.value = "";
})

list.addEventListener("click", function (e) {
    let number = e.target.getAttribute("data-index");
    if (e.target.getAttribute("class") == "delete") {
        let result = confirm("您確定要刪除嗎？");
        if (result) {
            data.splice(number, 1);
            renderData();
        } else return;
    }
})

clear.addEventListener("click", function (e) {
    if (data.length !== 0) {
        let result = confirm("您確定要清除所有待辦事項嗎？");
        if (result) {
            data = [];
            renderData();
        } else {
            return;
        }
    } else {
        alert("您尚未輸入內容！");
        return;
    }
})

function renderData() {
    let str = '';
    data.forEach(function (item, i) {
        str += `<li><input type="checkbox" data-index=${i} class="check" id="check"><label for="check">${item.content} <label><input class="delete" data-index=${i} type="button" for="complete" value="刪除待辦"></li>`;
    });
    const list = document.querySelector(".list");
    list.innerHTML = str;

    const checks = document.querySelectorAll(".check");
    checks.forEach(function (value) {
        value.addEventListener('click', function (e) {
            const content = e.target.closest("li").querySelector("label");
            if (e.target.checked) {
                content.setAttribute("style", "text-decoration: line-through;");
            } else if (e.target.checked == false) {
                content.setAttribute("style", "text-decoration: none;");
            }
        });
    });
}
