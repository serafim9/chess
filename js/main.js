$(function(){
    var mixer = mixitup('.figurin_img');
})

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    arrows: false
                }
            },
        ]
    })

    $(".menu a, .go-top").on("click", function (event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".figurine__filter-btn a, .go-top").on("click", function (event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });

    $('.menu_btn').on('click', function(){
        // $('.menu_list').toggleClass('menu_list--activ');
        $('.head').toggleClass('head--activ');
    })
