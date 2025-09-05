const el_btn_plus = document.querySelector(".btn_plus");
const el_btn_minus = document.querySelector(".btn_minus");
const el_btn_clear = document.querySelector(".btn_clear");
const el_btn_hide = document.querySelector(".btn_hide")
const el_box = document.querySelector(".box");
let count = 0;
el_btn_plus.addEventListener("click", function (e) {
    count++;
    el_box.textContent = count;
})
el_btn_minus.addEventListener("click", function (e) {
    count>0 ? count-- : count = 0;
    el_box.textContent = count;
})
el_btn_clear.addEventListener("click", function (e) {
    count = 0;
    el_box.textContent = count;
})
el_btn_hide.addEventListener("click", function (e) {
    count = count + 100;
    el_box.textContent = count;
})