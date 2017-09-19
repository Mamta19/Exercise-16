$(document).ready(function () {
    //part1


    $(':text').focusin(function () {
        $(':text').css('background', 'pink');

    });
    //part2

    $('#btnShow').on('click', function () {
        $('.display-basic').show();
    });

    $('#btnHide').on('click', function () {
        $('.display-basic').hide();
    });


    $('#btnToggle').on('click', function () {
        $('.display-basic').toggle();
    });

    //part4
    $('#btnFadeIn').on('click', function () {
        $('.display-fade').fadeIn('fast');
    });
    $('#btnFadeOut').on('click', function () {
        $('.display-fade').fadeOut('slow');
    });
    $('#btnFadeToggle').on('click', function () {
        $('.display-fade').fadeToggle();
    });
    //part5
    $('#btnSlideDown').on('click', function () {
        $('.display-slide').slideDown(1000);
    });


    $('#btnSlideUp').on('click', function () {
        $('.display-slide').slideUp(500);
    })


    $('#btnSlideToggle').on('click', function () {
        $('.display-slide').slideToggle();
    })

});