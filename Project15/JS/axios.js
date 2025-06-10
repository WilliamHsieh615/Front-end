document.addEventListener("DOMContentLoaded", () => {
    // 載入 header
    axios.get("../HTML/header.html")
        .then(res => {
            document.getElementById("header").innerHTML = res.data;
        })
        .catch(err => console.error("載入 header 發生錯誤：", err));

    // 載入 footer
    axios.get("../HTML/footer.html")
        .then(res => {
            document.getElementById("footer").innerHTML = res.data;
        })
        .catch(err => console.error("載入 footer 發生錯誤：", err));

    // 載入 aside
    axios.get("../HTML/aside.html")
        .then(res => {
            document.getElementById("transactionDetail").innerHTML = res.data;
        })
        .catch(err => console.error("載入 aside 發生錯誤：", err));

    // 等 hash anchor 平滑滾動
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // 延遲時間視內容載入狀況微調
    }
});