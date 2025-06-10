document.addEventListener("DOMContentLoaded", () => {
    let product = [
        {
            label: "新品上市",
            name: "草莓派",
            price: 60,
            photo: '../image/product/product1.avif'
        },
        {
            label: "新品上市",
            name: "焦糖蘋果派",
            price: 70,
            photo: "../image/product/product2.avif"
        },
        {
            label: "新品上市",
            name: "水果奶酪",
            price: 60,
            photo: "../image/product/product3.avif"
        },
        {
            label: "人氣精選",
            name: "草莓優格",
            price: 60,
            photo: "../image/product/product4.avif"
        },
        {
            label: "人氣精選",
            name: "莓果奶酪",
            price: 70,
            photo: "../image/product/product5.avif"
        },
        {
            label: "人氣精選",
            name: "草莓蛋糕",
            price: 150,
            photo: "../image/product/product6.avif"
        },
        {
            label: "人氣精選",
            name: "白葡萄甜甜圈",
            price: 60,
            photo: "../image/product/product7.avif"
        },
        {
            label: "人氣精選",
            name: "紅寶石蛋糕",
            price: 150,
            photo: "../image/product/product8.avif"
        },
        {
            label: "人氣精選",
            name: "香蕉餅乾",
            price: 60,
            photo: "../image/product/product9.avif"
        },
        {
            label: "本日精選",
            name: "橙香堅果芋泥",
            price: 100,
            photo: "../image/product/product10.avif"
        },
        {
            label: "本日精選",
            name: "檸檬派",
            price: 60,
            photo: "../image/product/product11.avif"
        },
        {
            label: "本日精選",
            name: "松露巧克力蛋糕",
            price: 120,
            photo: "../image/product/product12.avif"
        },
        {
            label: "本日精選",
            name: "七彩馬卡龍",
            price: 150,
            photo: "../image/product/product13.avif"
        },
        {
            label: "本日精選",
            name: "奶酪派",
            price: 120,
            photo: "../image/product/product14.avif"
        },
        {
            label: "本日精選",
            name: "芒果果凍棒",
            price: 60,
            photo: "../image/product/product15.avif"
        },
    ];

    let home_meals = document.querySelector(".home_main .meals");
    let home_list = document.querySelector(".home_banner .list");
    let product_meals = document.querySelector(".product_main .meals");
    let product_menu = document.querySelector(".product_main .menu");

    let all_product = document.querySelector(".product_main .menu .all");
    let select_product = document.querySelector(".product_main .menu .select");
    let referral_product = document.querySelector(".product_main .menu .referral");
    let new_product = document.querySelector(".product_main .menu .new");

    let allProductStr = "";
    let selectProductStr = "";
    let referralProductStr = "";
    let newProductStr = "";
    let selectProductArry = [];
    let referralProductArry = [];
    let newProductArry = [];

    product.forEach(function (item, i) {
        let productListStr =
            `<li class="product">
                <span class="tag">${item.label}</span>
                <img src="${item.photo}" alt="${item.name}">
                <ul>
                    <li class="name">${item.name}</li>
                    <li class="price">NT$ ${item.price}</li>
                </ul>
                <a href="#">加入購物車</a>
            </li>`;
        allProductStr += productListStr;
        if (item.label === "新品上市") {
            newProductStr += productListStr;
            newProductArry.push(item);
        } else if (item.label === "人氣精選") {
            referralProductStr += productListStr;
            referralProductArry.push(item);
        } else if (item.label === "本日精選") {
            selectProductStr += productListStr;
            selectProductArry.push(item);
        }
    });

    setTimeout(() => {
        if (product_meals) {
            product_meals.innerHTML = allProductStr;
        } else if (home_meals) {
            home_meals.innerHTML = allProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
        }
    }, 0);

    if (home_list) {
        home_list.addEventListener("click", function (e) {
            if (e.target.textContent === "本日精選") {
                home_meals.innerHTML = selectProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
            } else if (e.target.textContent === "人氣推薦") {
                home_meals.innerHTML = referralProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
            } else if (e.target.textContent === "新品上市") {
                home_meals.innerHTML = newProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
            }
        });
    }

    if (product_menu) {
        product_menu.addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.classList.contains("all")) {
                product_meals.innerHTML = allProductStr;
            } else if (e.target.classList.contains("select")) {
                product_meals.innerHTML = selectProductStr;
            } else if (e.target.classList.contains("referral")) {
                product_meals.innerHTML = referralProductStr;
            } else if (e.target.classList.contains("new")) {
                product_meals.innerHTML = newProductStr;
            }
        });
    }

    if (all_product) {all_product.textContent = `所有甜點 (${product.length})`;}
    if (select_product) {select_product.textContent = `本日精選 (${selectProductArry.length})`;}
    if (referral_product) {referral_product.textContent = `人氣精選 (${referralProductArry.length})`;}
    if (new_product) {new_product.textContent = `新品上市 (${newProductArry.length})`;}
});
