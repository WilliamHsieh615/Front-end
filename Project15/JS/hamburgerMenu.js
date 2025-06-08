$(document).on('click', '.hamburgerMenu', function (e) {
    e.preventDefault();
    $('header .list').toggleClass('showMenu');
});