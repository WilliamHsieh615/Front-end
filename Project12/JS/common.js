// nav
$(document).ready(function () {
    const current = window.location.pathname.split("/").pop();
    $(".link_JS").each(function () {
        const href = $(this).attr("href");
        if (href === current || href === "") {
            $(this).addClass("active");
        }
    });
});

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


