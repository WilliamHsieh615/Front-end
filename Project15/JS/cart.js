document.querySelectorAll('.cart_main .item').forEach(item => {
    let startX = 0;

    item.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    item.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        // 左滑：顯示該項目的 trashIcon
        if (diffX > 50) {
            document.querySelectorAll('.item').forEach(el => el.classList.remove('show-trash'));
            item.classList.add('show-trash');
        }

        // 右滑：隱藏該項目的 trashIcon
        if (diffX < -30) {
            item.classList.remove('show-trash');
        }
    });
});

let items = document.querySelectorAll(".list .item");

items.forEach(function (item) {
    let count = 0;
    const plusBtn = item.querySelector(".plus");
    const minusBtn = item.querySelector(".minus");
    const numberDisplay = item.querySelector(".number");
    const priceText = item.querySelector(".price").textContent;
    const sumDisplay = item.querySelector(".sum");

    // 從 "NT$ 450" 取出數字 450
    const unitPrice = parseInt(priceText.replace(/[^\d]/g, ''));

    item.querySelector(".amount").addEventListener("click", function (e) {
        e.preventDefault(); // 防止 <a href="#"> 往上跳

        if (e.target.classList.contains("plus")) {
            count++;
        } else if (e.target.classList.contains("minus")) {
            if (count > 0) count--;
        }

        numberDisplay.textContent = count;
        sumDisplay.textContent = `NT$ ${unitPrice * count}`;
    });
});
