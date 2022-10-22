
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

$(document).ready(function(){
        const slider = $("#slider_2").owlCarousel({
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
        $("#slider_2").owlCarousel();
        });


        $(document).ready(function(){
            const slider = $("#slider_3").owlCarousel({
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
            $("#slider_3").owlCarousel();
            });