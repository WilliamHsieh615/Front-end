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
