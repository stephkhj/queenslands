$(function () {
    slider();
    
    ///show and hide video and articles
    $("#video").click(function () {
        $(".mainsectionarticle").hide();
        $(".mainsectionvideo").show();
    });
    $("#articles").click(function () {
        $(".mainsectionvideo").hide();
        $(".mainsectionarticle").show();
    });
    // active state for nav
    $("#video").addClass("active");
    $('li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    

  
    
});