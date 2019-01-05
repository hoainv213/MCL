function check_hover(stack) {
    var cse = 0;
    $('#page-header').find('.site-branding,.main-menu,.d-owl-carousel,.btn-control').each(function () {
        console.log($(this).attr('class'));
        if ($(this).is(':hover')) {
            cse++;
        }
        if (cse > 0) {
            stack.css('background-color', 'rgba(0, 0, 0, 0.8)');
        } else {
            stack.css('background-color', 'rgba(0,0,0,0)')
        }
    })
}

$(document).ready(function () {
    $(document).on({
        mouseenter: function () {
            $(this).find('i.fa-caret-right').css('opacity', 1);
        },
        mouseleave: function () {
            $(this).find('i.fa-caret-right').css('opacity', 0);
        }
    }, '#list-menu .sub-menu h4');

    var stack = $('#page-header').find('.site-branding,.main-menu,.d-owl-carousel,.btn-control');
    $('.main-menu,.content-slide,.site-branding').hover(
        function () {
            stack.css('background-color', 'rgba(0,0,0,.8)')
        },
        function () {
            stack.css('background-color', 'rgba(0,0,0,0)')
        }
    );
    $('.angleDown').click(function () {
        var this_eh = $(this);
        this_eh.children('.toggle-arrow').toggleClass('rotate180');
        this_eh.addClass('pointer-events-none');
        stack.css('background-color', 'rgba(0,0,0,.8)');
        $("#masthead .main-menu").toggle('slide', {direction: 'up'}, 1000, function () {

            this_eh.removeClass('pointer-events-none');
            check_hover(stack);
        });
    });
    // $('.btn-control').click(function () {
    //     var this_eh = $(this);
    //     $(this).addClass('pointer-events-none');
    //     $(".d-owl-carousel").toggle('slide', {direction: 'right'}, 1500, function () {
    //         this_eh.removeClass('pointer-events-none');
    //         check_hover(stack);
    //     });
    //     this_eh.children('.toggle-arrow').toggleClass('rotate180');
    // });
    $('.title-slide').click(function () {
        $(".mb-slide").toggle('slide', {direction: 'up'}, 1500, function () {
        });
    });
    $('button.btn-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $("div.content-category").offset().top
        }, 600)
    });

    //Function button on mobile
    $('.btn-on-mobile button').click(function () {
        $(this).toggleClass('active')
    });

    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);
    if (ie) {
        $(".image-ob-fit").each(function () {
            var $container = $(this),
                imgUrl = $container.find("img").prop("src");
            console.log(imgUrl);
            if (imgUrl) {
                $container.css("background-image", 'url(' + imgUrl + ')').addClass("custom-object-fit-ie");
            }
        });
        $('.div-select-mcl').addClass('none-arrow');
        //FIX FONT WEIGHT ON IE
        $('body').find('h1,h2,h3,h4,h5,span.font-bold-8').each(function ( ) {
            if($(this).css('font-weight') >= 600){
                $(this).css('font-weight', $(this).css('font-weight') -100 )
            }
            console.log($(this).css('font-weight'));
        })
    }

    var back_to_top = $('#back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            back_to_top.fadeIn();
        } else {
            back_to_top.fadeOut();
        }
    });
    // scroll body to 0px on click
    back_to_top.click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    if (back_to_top.is(":visible")) {
        $('#back-to-top').tooltip('show');
    }

    // select on firefox
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('select.select-mcl').css('padding', '0 30px');
    }


});
