$(document).ready(function(){

    $('.monSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:$('.pre'),
        nextArrow: $('.suiv'),
        autoplay: true,
        dots: true
    })
});