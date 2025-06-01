document.addEventListener("DOMContentLoaded", () => {
    // 載入 Header
    fetch("../HTML/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // 載入 Footer
    fetch("../HTML/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    const hash = window.location.hash;
    if (hash) {
        // 小延遲確保內容載入完畢
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // 微調這個延遲時間可根據你的內容量
    }
});