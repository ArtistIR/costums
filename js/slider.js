
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        nav:true,
        center:true,
        dots:false,
        items:5,
        checkVisible:false,
        margin:96,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

$(document).ready(function(){
    $("#slider").owlCarousel();
    });