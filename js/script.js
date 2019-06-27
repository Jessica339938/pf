$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})
$('.js-hook--page-down').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("about").offset().top - 200
    }, 1500);
});
$('.skills').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("skills").offset().top - 200
    }, 1500);
});