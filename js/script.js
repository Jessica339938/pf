$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})
$(function(){
    // Remove the # from the hash, as different browsers may or may not include it
    var hash = location.hash.replace('#','');

    if(hash != ''){
    

        // Clear the hash in the URL
        location.hash = '';
    }
});
$(document).bind("hashchange", function(){
    // Anchor has changed.
});