$(document).on('click', '.readList', function (e) {
    e.preventDefault();
    $('.transactionDetail').toggleClass('showList');
    if ($(this).siblings().hasClass('showList')) {
        $(this).removeClass("bi-chevron-down").addClass("bi-chevron-up");
    } else {
        $(this).removeClass("bi-chevron-up").addClass("bi-chevron-down");
    }
});
