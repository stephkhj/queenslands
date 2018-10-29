//Slider

function slider(){

// var slides = $(".sliderContainer:visible .sbm_slide");
// var startSlide = Math.floor(Math.random() * slides.length);

$($(".sbm_slide").get(0)).show();


  $("#arrowRight").on("click", function()
  {
      var container = $(".sliderContainer:visible");
      var currentIndex = $(container).find(".sbm_slide").index($(container).find(".sbm_slide:visible"));
      var firstIndex = 0;
      var lastIndex = $(container).find(".sbm_slide").length-1;

      if (currentIndex < lastIndex){
        $(container).find(".sbm_slide:visible").hide().next().fadeIn(400);
      } else if (currentIndex === lastIndex){
        $(container).find(".sbm_slide:visible").hide();
        $($(container).find(".sbm_slide").get(firstIndex)).fadeIn(400);
      }


    });

    $("#arrowLeft").on("click", function(){

      var container = $(".sliderContainer:visible");
      var currentIndex = $(container).find(".sbm_slide").index($(container).find(".sbm_slide:visible"));
      var firstIndex = 0;
      var lastIndex = $(container).find(".sbm_slide").length-1;

      if (currentIndex > firstIndex){
        $(container).find(".sbm_slide:visible").hide().prev().fadeIn(400);
      } else if (currentIndex === firstIndex){
        $(container).find(".sbm_slide:visible").hide();
        $($(container).find(".sbm_slide").get(lastIndex)).fadeIn(400);
      }

 

    });

}