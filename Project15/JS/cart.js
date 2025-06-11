function bindSwipeEvents() {
    document.querySelectorAll('.cart_main .item').forEach(item => {
        let startX = 0;

        // 避免重複綁定：先移除舊的 listener
        item.ontouchstart = null;
        item.ontouchend = null;

        item.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        });

        item.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (diffX > 50) {
                document.querySelectorAll('.cart_main .item').forEach(el => {
                    el.classList.remove('show-trash');
                });
                item.classList.add('show-trash');
            }

            if (diffX < -30) {
                item.classList.remove('show-trash');
            }
        });
    });
}