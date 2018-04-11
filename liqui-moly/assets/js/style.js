
$(document).ready(function(){
    var sliderImg = $('#slider ul li');
    var arrowsblink = $('.arrow');

    function blink() {
        arrowsblink.fadeOut(100).fadeIn(100);
    }
    setInterval(blink, 3000);

    sliderImg.each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $(".next").click(function(){ 
        if ($("#slider li:visible").next().length != 0)
            $("#slider li:visible").next().fadeIn().prev().hide();
        else {
            $("#slider li:visible").hide();
            $("#slider li:first").fadeIn();
        }
        return false;
    });

    $(".prev").click(function(){
        if ($("#slider li:visible").prev().length != 0)
            $("#slider li:visible").prev().fadeIn().next().hide();
        else {
            $("#slider li:visible").hide();
            $("#slider li:last").fadeIn();
        }
        return false;
    });
});