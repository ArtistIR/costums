$('.nav_burger_btn').on('click',function(e){
    e.preventDefault;
    $(this).toggleClass('nav_burger_btn_active');
    $('.burger_nav').toggleClass('burger_nav_active');
});