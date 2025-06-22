document.addEventListener("DOMContentLoaded", () => {
    (() => {
        document.querySelector('.left-door').style.transform = 'translateX(-100%)';
        document.querySelector('.right-door').style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.querySelector('.intro').style.display = 'none';
        }, 3000);
    })();
});

function checkisMuggle(name) {
    return new Promise((resolve, reject) => {
        const trueOrFalse = Math.floor(Math.random() * 3);
        if (trueOrFalse === 0) {
            reject(name);
        } else if (trueOrFalse === 1) {
            resolve(
                {
                    name,
                    info: "你不是麻瓜"
                }
            );
        } else if (trueOrFalse === 2) {
            resolve(
                {
                    name,
                    info: "你是混血"
                }
            );
        }
    });
}
function sortingHat(name) {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 4) + 1;
        let house = "", message = "";
        switch (number) {
            case 1:
                house = `<span style="color: gold;">葛萊芬多</span>`;
                message = `我看見你的勇氣與決心...<p>你屬於${house}！</p>`;
                break;
            case 2:
                house = `<span style="color: gold;">赫夫帕夫</span>`;
                message = `你充滿忠誠與勤奮...<p>${house}等著你！</p>`;
                break;
            case 3:
                house = `<span style="color: gold;">雷文克勞</span>`;
                message = `你的智慧與創意閃閃發亮...<p>加入${house}吧！</p>`;
                break;
            case 4:
                house = `<span style="color: gold;">史萊哲林</span>`;
                message = `你擁有野心與領導力...<p>${house}正適合你！</p>`;
                break;
        }
        resolve({ name, house, message });
    });
}

function showLoadingWithTimer(title, htmlText, timer) {
    let timerInterval;
    return Swal.fire({
        background: '#1e1e2f',
        color: '#f8f8f8',
        title,
        html: htmlText + '<br><b></b>',
        timer,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => clearInterval(timerInterval),
    });
}

function sortingProcess() {
    Swal.fire({
        background: '#1e1e2f',
        color: '#f8f8f8',
        title: "歡迎來到霍格華茲",
        text: "孩子～來選擇你的學院吧！！",
        imageUrl: "image/sortingHat.png",
        imageWidth: 200,
        imageHeight: 280,
        allowOutsideClick: false,
        confirmButtonText: "確定",
        confirmButtonColor: '#c62828',
    }).then(() => {
        return Swal.fire({
            background: '#1e1e2f',
            color: '#f8f8f8',
            title: "請輸入你的名字",
            input: "text",
            imageUrl: "image/sortingHat.png",
            imageWidth: 200,
            imageHeight: 280,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: "開始分類",
            cancelButtonText: "我還沒準備好",
            confirmButtonColor: '#c62828',
            cancelButtonColor: '#8b0000'
        });
    }).then(result => {
        if (result.isConfirmed && result.value.trim()) {
            const name = result.value.trim();
            showLoadingWithTimer("血統分析中...", "請稍候，正在分析你的血統", 3000)
                .then(() => checkisMuggle(name))
                .then(({ name, info }) => {
                    return Swal.fire({
                        background: '#1e1e2f',
                        color: '#f8f8f8',
                        title: "血統判斷完成",
                        html: `<p>${info}！</p><p>準備接受分類帽的挑選吧～</p>`,
                        imageUrl: "image/sortingHat.png",
                        imageWidth: 200,
                        imageHeight: 280,
                        confirmButtonText: "準備好了",
                        confirmButtonColor: '#c62828',
                        allowOutsideClick: false,
                    }).then(() => name);
                })
                .then(name => {
                    return showLoadingWithTimer("分類帽思考中...", "請稍候...正在觀察你的個性", 3000).then(() => name);
                })
                .then(name => sortingHat(name))
                .then(({ name, house, message }) => {
                    return Swal.fire({
                        background: '#1e1e2f',
                        color: '#f8f8f8',
                        title: "分類完成",
                        html: `<p>${name}，${message}<p>`,
                        icon: "success",
                        confirmButtonText: "確認結果",
                        confirmButtonColor: '#c62828',
                        allowOutsideClick: false
                    }).then(() => {
                        return Swal.fire({
                            background: '#1e1e2f',
                            color: '#f8f8f8',
                            imageUrl: "image/sortingHat.png",
                            imageWidth: 200,
                            imageHeight: 280,
                            title: "分類結果",
                            html: `<p>姓名：${name}</p><p>學院：${house}</p>`,
                            confirmButtonText: "確定",
                            confirmButtonColor: '#c62828',
                            allowOutsideClick: false
                        });
                    });
                })
                .catch(error => {
                    Swal.fire({
                        background: '#1e1e2f',
                        color: '#f8f8f8',
                        title: "分類失敗",
                        html: `<p>抱歉，${error}，你是麻瓜</p><p>無法就讀霍格華茲！</p>`,
                        icon: "error",
                        confirmButtonText: "確定",
                        confirmButtonColor: '#8b0000',
                        allowOutsideClick: false
                    }).then(() => {
                        return Swal.fire({
                            background: '#1e1e2f',
                            color: '#f8f8f8',
                            imageUrl: "image/sortingHat.png",
                            imageWidth: 200,
                            imageHeight: 280,
                            html: `<p>孩子，這不是你該來的地方</p><p>快走吧～</p>`,
                            confirmButtonText: "離開",
                            confirmButtonColor: '#8b0000',
                            allowOutsideClick: false
                        });
                    });
                });

        } else if (result.isConfirmed && !result.value.trim()) {
            Swal.fire({
                background: '#1e1e2f',
                color: '#f8f8f8',
                title: "尚未分類",
                text: "孩子... 你還沒告訴我你的名字？？",
                icon: "question",
                confirmButtonText: "重新開始",
                confirmButtonColor: '#c62828',
                allowOutsideClick: false
            }).then(() => {
                sortingProcess();
            });
        } else {
            Swal.fire({
                background: '#1e1e2f',
                color: '#f8f8f8',
                title: "分類取消",
                text: "想想後再來吧！！孩子～",
                icon: "warning",
                confirmButtonText: "離開",
                confirmButtonColor: '#8b0000',
                allowOutsideClick: false
            });
        }
    });
}
sortingProcess();