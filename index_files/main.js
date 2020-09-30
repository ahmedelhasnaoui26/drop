$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })   
$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
    adaptiveHeight: true
});    
   
});