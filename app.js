document.addEventListener('DOMContentLoaded', function(){
    $('.header').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
    });

    $('.hovered').hover(function() {
        $(this).next().css('display', 'block');
    })

    $('.hovered').blur(function() {
        $(this).next().css('display', 'none');
    })
              
});