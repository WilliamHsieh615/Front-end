$(document).ready(function () {
    
    $(".up").click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.down').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });

    $('.cencel').click(function (e) { 
        e.preventDefault();
        $('.ad').remove();
    });

    


});