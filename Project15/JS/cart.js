const items = document.querySelectorAll('.cart_main .item');

items.forEach(item => {
    let startX = 0;
    let endX = 0;

    item.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    item.addEventListener('touchend', e => {
        endX = e.changedTouches[0].clientX;
        const distance = startX - endX;

        if (distance > 50) {
            // 向左滑動
            items.forEach(i => i.classList.remove('swiped')); // 關掉其他的
            item.classList.add('swiped');
        } else if (distance < -50) {
            // 向右滑回去
            item.classList.remove('swiped');
        }
    });
});