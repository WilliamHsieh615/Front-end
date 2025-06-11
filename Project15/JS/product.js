// document.addEventListener("DOMContentLoaded", () => {
//     let product = [
//         {
//             label: "新品上市",
//             name: "草莓派",
//             price: 60,
//             photo: '../image/product/product1.avif'
//         },
//         {
//             label: "新品上市",
//             name: "焦糖蘋果派",
//             price: 70,
//             photo: "../image/product/product2.avif"
//         },
//         {
//             label: "新品上市",
//             name: "水果奶酪",
//             price: 60,
//             photo: "../image/product/product3.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "草莓優格",
//             price: 60,
//             photo: "../image/product/product4.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "莓果奶酪",
//             price: 70,
//             photo: "../image/product/product5.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "草莓蛋糕",
//             price: 150,
//             photo: "../image/product/product6.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "白葡萄甜甜圈",
//             price: 60,
//             photo: "../image/product/product7.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "紅寶石蛋糕",
//             price: 150,
//             photo: "../image/product/product8.avif"
//         },
//         {
//             label: "人氣精選",
//             name: "香蕉餅乾",
//             price: 60,
//             photo: "../image/product/product9.avif"
//         },
//         {
//             label: "本日精選",
//             name: "橙香堅果芋泥",
//             price: 100,
//             photo: "../image/product/product10.avif"
//         },
//         {
//             label: "本日精選",
//             name: "檸檬派",
//             price: 60,
//             photo: "../image/product/product11.avif"
//         },
//         {
//             label: "本日精選",
//             name: "松露巧克力蛋糕",
//             price: 120,
//             photo: "../image/product/product12.avif"
//         },
//         {
//             label: "本日精選",
//             name: "七彩馬卡龍",
//             price: 150,
//             photo: "../image/product/product13.avif"
//         },
//         {
//             label: "本日精選",
//             name: "奶酪派",
//             price: 120,
//             photo: "../image/product/product14.avif"
//         },
//         {
//             label: "本日精選",
//             name: "芒果果凍棒",
//             price: 60,
//             photo: "../image/product/product15.avif"
//         },
//     ];

// const home_meals = document.querySelector(".home_main .meals");
// const home_list = document.querySelector(".home_banner .list");
// const product_meals = document.querySelector(".product_main .meals");
// const product_menu = document.querySelector(".product_main .menu");

// const all_product = document.querySelector(".product_main .menu .all");
// const select_product = document.querySelector(".product_main .menu .select");
// const referral_product = document.querySelector(".product_main .menu .referral");
// const new_product = document.querySelector(".product_main .menu .new");

// let allProductStr = "";
// let selectProductStr = "";
// let referralProductStr = "";
// let newProductStr = "";
// let selectProductArry = [];
// let referralProductArry = [];
// let newProductArry = [];
// let shoppingCart = [];
// loadCartFromLocalStorage();

// product.forEach(function (item) {
//     let productListStr =
//         `<li class="product">
//             <span class="tag">${item.label}</span>
//             <img src="${item.photo}" alt="${item.name}">
//             <ul>
//                 <li class="name">${item.name}</li>
//                 <li class="price">NT$ ${item.price}</li>
//             </ul>
//             <a href="#" class="add_to_cart">加入購物車</a>
//         </li>`;
//     allProductStr += productListStr;
//     if (item.label === "新品上市") {
//         newProductStr += productListStr;
//         newProductArry.push(item);
//     } else if (item.label === "人氣精選") {
//         referralProductStr += productListStr;
//         referralProductArry.push(item);
//     } else if (item.label === "本日精選") {
//         selectProductStr += productListStr;
//         selectProductArry.push(item);
//     }

// });

// setTimeout(() => {
//     if (product_meals) {
//         product_meals.innerHTML = allProductStr;
//     } else if (home_meals) {
//         home_meals.innerHTML = allProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
//     }
// }, 0);

// if (home_list) {
//     home_list.addEventListener("click", function (e) {
//         if (e.target.textContent === "本日精選") {
//             home_meals.innerHTML = selectProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
//         } else if (e.target.textContent === "人氣推薦") {
//             home_meals.innerHTML = referralProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
//         } else if (e.target.textContent === "新品上市") {
//             home_meals.innerHTML = newProductStr.replace(/class="product"/g, 'class="product swiper-slide"');
//         }
//     });
// }

// if (product_menu) {
//     product_menu.addEventListener("click", function (e) {
//         e.preventDefault();
//         if (e.target.classList.contains("all")) {
//             product_meals.innerHTML = allProductStr;
//         } else if (e.target.classList.contains("select")) {
//             product_meals.innerHTML = selectProductStr;
//         } else if (e.target.classList.contains("referral")) {
//             product_meals.innerHTML = referralProductStr;
//         } else if (e.target.classList.contains("new")) {
//             product_meals.innerHTML = newProductStr;
//         }
//     });
// }

// if (all_product) { all_product.textContent = `所有甜點 (${product.length})`; }
// if (select_product) { select_product.textContent = `本日精選 (${selectProductArry.length})`; }
// if (referral_product) { referral_product.textContent = `人氣精選 (${referralProductArry.length})`; }
// if (new_product) { new_product.textContent = `新品上市 (${newProductArry.length})`; }

// if (product_meals) {
//     product_meals.addEventListener("click", function (e) {
//         if (e.target.classList.contains("add_to_cart")) {
//             e.preventDefault();

//             let productItem = e.target.closest(".product");
//             let name = productItem.querySelector(".name").textContent;
//             let price = productItem.querySelector(".price").textContent.replace("NT$ ", "");
//             let photo = productItem.querySelector("img").getAttribute("src");

//             let productData = {
//                 name: name,
//                 price: Number(price),
//                 photo: photo
//             };

//             shoppingCart.push(productData);
//             saveCartToLocalStorage(); // 寫入 localStorage
//             console.log("加入購物車：", productData);
//         }
//     });
// }

// if (home_meals) {
//     home_meals.addEventListener("click", function (e) {
//         if (e.target.classList.contains("add_to_cart")) {
//             e.preventDefault();

//             let productItem = e.target.closest(".product");
//             let name = productItem.querySelector(".name").textContent;
//             let price = productItem.querySelector(".price").textContent.replace("NT$ ", "");
//             let photo = productItem.querySelector("img").getAttribute("src");

//             let productData = {
//                 name: name,
//                 price: Number(price),
//                 photo: photo
//             };

//             shoppingCart.push(productData);
//             saveCartToLocalStorage(); // 寫入 localStorage
//             console.log("加入購物車：", productData);
//         }
//     });
// }

// function saveCartToLocalStorage() {
//     localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
// }

// function loadCartFromLocalStorage() {
//     const data = localStorage.getItem("shoppingCart");
//     if (data) {
//         shoppingCart = JSON.parse(data);
//     }
// }

// console.log("目前購物車：", shoppingCart);
// console.log("目前購物車數量：", shoppingCart.length);

// // 清空購物車
// // localStorage.removeItem("shoppingCart");
// // shoppingCart = [];

// const cart_list = document.querySelector(".cart_main .cart .list");

// shoppingCart.forEach(function (item) {
//     let cartListStr =
//         `<li class="item">
//             <img src="${item.photo}" alt="${item.name}">
//             <div class="info">
//                 <div class="name">
//                     <h3>${item.name}</h3>
//                     <p class="price">NT$ ${item.price}</p>
//                 </div>
//                 <div class="amount">
//                     <a href="#" class="minus">-</a>
//                     <p class="number">1</p>
//                     <a href="#" class="plus">+</a>
//                 </div>
//             </div>
//             <p class="sum">NT$ ${item.price * 1}</p>
//             <a href="#" class="bi bi-trash3-fill trashIcon"></a>
//         </li>`;
//     cart_list.innerHTML += cartListStr;
// });

// });

document.addEventListener("DOMContentLoaded", () => {
    let product = [
        { label: "新品上市", name: "草莓派", price: 60, photo: '../image/product/product1.avif' },
        { label: "新品上市", name: "焦糖蘋果派", price: 70, photo: "../image/product/product2.avif" },
        { label: "新品上市", name: "水果奶酪", price: 60, photo: "../image/product/product3.avif" },
        { label: "人氣精選", name: "草莓優格", price: 60, photo: "../image/product/product4.avif" },
        { label: "人氣精選", name: "莓果奶酪", price: 70, photo: "../image/product/product5.avif" },
        { label: "人氣精選", name: "草莓蛋糕", price: 150, photo: "../image/product/product6.avif" },
        { label: "人氣精選", name: "白葡萄甜甜圈", price: 60, photo: "../image/product/product7.avif" },
        { label: "人氣精選", name: "紅寶石蛋糕", price: 150, photo: "../image/product/product8.avif" },
        { label: "人氣精選", name: "香蕉餅乾", price: 60, photo: "../image/product/product9.avif" },
        { label: "本日精選", name: "橙香堅果芋泥", price: 100, photo: "../image/product/product10.avif" },
        { label: "本日精選", name: "檸檬派", price: 60, photo: "../image/product/product11.avif" },
        { label: "本日精選", name: "松露巧克力蛋糕", price: 120, photo: "../image/product/product12.avif" },
        { label: "本日精選", name: "七彩馬卡龍", price: 150, photo: "../image/product/product13.avif" },
        { label: "本日精選", name: "奶酪派", price: 120, photo: "../image/product/product14.avif" },
        { label: "本日精選", name: "芒果果凍棒", price: 60, photo: "../image/product/product15.avif" },
    ];

    const home_meals = document.querySelector(".home_main .meals");
    const home_list = document.querySelector(".home_banner .list");
    const product_meals = document.querySelector(".product_main .meals");
    const product_menu = document.querySelector(".product_main .menu");

    const all_product = document.querySelector(".product_main .menu .all");
    const select_product = document.querySelector(".product_main .menu .select");
    const referral_product = document.querySelector(".product_main .menu .referral");
    const new_product = document.querySelector(".product_main .menu .new");

    let allProductStr = "";
    let selectProductStr = "";
    let referralProductStr = "";
    let newProductStr = "";
    let selectProductArry = [];
    let referralProductArry = [];
    let newProductArry = [];

    let shoppingCart = [];
    loadCartFromLocalStorage();

    product.forEach(function (item) {
        let productListStr =
            `<li class="product">
                <span class="tag">${item.label}</span>
                <img src="${item.photo}" alt="${item.name}">
                <ul>
                    <li class="name">${item.name}</li>
                    <li class="price">NT$ ${item.price}</li>
                </ul>
                <a href="#" class="add_to_cart">加入購物車</a>
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

    if (all_product) { all_product.textContent = `所有甜點 (${product.length})`; }
    if (select_product) { select_product.textContent = `本日精選 (${selectProductArry.length})`; }
    if (referral_product) { referral_product.textContent = `人氣精選 (${referralProductArry.length})`; }
    if (new_product) { new_product.textContent = `新品上市 (${newProductArry.length})`; }

    if (product_meals) {
        product_meals.addEventListener("click", function (e) {
            if (e.target.classList.contains("add_to_cart")) {
                e.preventDefault();

                let productItem = e.target.closest(".product");
                let name = productItem.querySelector(".name").textContent;
                let price = productItem.querySelector(".price").textContent.replace("NT$ ", "");
                let photo = productItem.querySelector("img").getAttribute("src");

                let productData = {
                    name: name,
                    price: Number(price),
                    photo: photo,
                    quantity: 1
                };

                addToCart(productData);
            }
        });
    }

    if (home_meals) {
        home_meals.addEventListener("click", function (e) {
            if (e.target.classList.contains("add_to_cart")) {
                e.preventDefault();

                let productItem = e.target.closest(".product");
                let name = productItem.querySelector(".name").textContent;
                let price = productItem.querySelector(".price").textContent.replace("NT$ ", "");
                let photo = productItem.querySelector("img").getAttribute("src");

                let productData = {
                    name: name,
                    price: Number(price),
                    photo: photo,
                    quantity: 1
                };

                addToCart(productData);
            }
        });
    }

    function addToCart(productData) {
        let index = shoppingCart.findIndex(item => item.name === productData.name);
        if (index > -1) {
            shoppingCart[index].quantity += 1;
        } else {
            shoppingCart.push(productData);
        }
        saveCartToLocalStorage();
        renderCart();
    }

    function saveCartToLocalStorage() {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }

    function loadCartFromLocalStorage() {
        const data = localStorage.getItem("shoppingCart");
        if (data) {
            shoppingCart = JSON.parse(data);
        }
    }

    const cart_list = document.querySelector(".cart_main .cart .list");
    if (cart_list) {
        renderCart();
    }

    function renderCart() {
        if (!cart_list) return;

        cart_list.innerHTML = "";
        if (shoppingCart.length === 0) {
            cart_list.innerHTML = "<li>購物車空空如也</li>";
            renderCheckoutSummary();
            return;
        }

        shoppingCart.forEach((item, index) => {
            let sum = item.price * item.quantity;
            const li = document.createElement("li");
            li.classList.add("item");
            li.innerHTML = `
                <img src="${item.photo}" alt="${item.name}">
                <div class="info">
                    <div class="name">
                        <h3>${item.name}</h3>
                        <p class="price">NT$ ${item.price}</p>
                    </div>
                    <div class="amount">
                        <a href="#" class="minus" data-index="${index}">-</a>
                        <p class="number">${item.quantity}</p>
                        <a href="#" class="plus" data-index="${index}">+</a>
                    </div>
                </div>
                <p class="sum">NT$ ${sum}</p>
                <a href="#" class="bi bi-trash3-fill trashIcon" data-index="${index}"></a>
            `;
            cart_list.appendChild(li);
        });

        renderCheckoutSummary();
        bindCartEvents();
    }

    function bindCartEvents() {
        const minusBtns = document.querySelectorAll(".cart_main .cart .minus");
        const plusBtns = document.querySelectorAll(".cart_main .cart .plus");
        const trashIcons = document.querySelectorAll(".cart_main .cart .trashIcon");

        minusBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const idx = e.target.dataset.index;
                if (shoppingCart[idx].quantity > 1) {
                    shoppingCart[idx].quantity--;
                } else {
                    shoppingCart.splice(idx, 1);
                }
                saveCartToLocalStorage();
                renderCart();
            });
        });

        plusBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const idx = e.target.dataset.index;
                shoppingCart[idx].quantity++;
                saveCartToLocalStorage();
                renderCart();
            });
        });

        trashIcons.forEach(icon => {
            icon.addEventListener("click", (e) => {
                e.preventDefault();
                const idx = e.target.dataset.index;
                shoppingCart.splice(idx, 1);
                saveCartToLocalStorage();
                renderCart();
            });
        });
    }

    function renderCheckoutSummary() {
        const container = document.querySelector('.transactionSummary');
        if (!container) return;

        const subtotal = shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const freight = subtotal > 0 ? 300 : 0;
        const total = subtotal + freight;

        container.querySelector('.subtotal p').textContent = `NT$ ${subtotal}`;
        container.querySelector('.freight p').textContent = `NT$ ${freight}`;
        container.querySelector('.total p').textContent = `NT$ ${total}`;
    }
});
