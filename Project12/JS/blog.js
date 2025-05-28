// card 收合
$(document).ready(function () {
    $('.readMore_JS').click(function (e) {
        e.preventDefault();
        $(this).parent().find('.content').toggleClass('readMore');

        if ($(this).parent().find('.content').hasClass('readMore')) {
            $(this).text('收合內文');
        } else {
            $(this).text('閱讀內文');
        }
    });
});


// 搜尋框
const searchIcon = document.querySelector(".searchIcon");
const searchInput = document.querySelector(".searchInput");
const cards = document.querySelectorAll(".container_card .card");
function search() {
    cards.forEach(function (card) {
        console.log(card.style.display);
        if (card.textContent.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
    searchInput.value = "";
}
searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    search();
});
searchInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        search();
    }

});

// 頁碼
const pagination = document.querySelector(".pagination");
const leftArrow = `<a href="#" class="arrow prev"><i class="bi bi-chevron-left"></i></a>`;
const rightArrow = `<a href="#" class="arrow next"><i class="bi bi-chevron-right"></i></a>`;
const dots = `<a href="#" class="dots">...</a>`;

const totalPages = 5;
let currentPage = 1;

function pageNumber() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        let active = "";
        if (i === currentPage) {
            active = "active";
        }
        pages.push(`<a href="#" class="page ${active}">${i}</a>`);
    }
    pagination.innerHTML = `${leftArrow}${pages.join("")}${dots}${rightArrow}`;
}
pageNumber();

pagination.addEventListener("click", function (e) {
    e.preventDefault();
    const page = e.target.closest(".page");
    const prev = e.target.closest(".prev");
    const next = e.target.closest(".next");
    if (page) {
        currentPage = parseInt(page.textContent);
        pageNumber();
    }
    if (prev && currentPage > 1) {
        currentPage--;
        pageNumber();
    }
    if (next && currentPage < totalPages) {
        currentPage++;
        pageNumber();
    }
});

