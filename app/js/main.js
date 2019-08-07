$(document).ready(function(){

var headerSlider =  $('.owl-carousel');
headerSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 1000,

});

    $('#headerSliderLeft').click(function() {
        console.log('Left');
       headerSlider.trigger('prev.owl.carousel');
    })
  
    $('#headerSliderRight').click(function() {
        console.log('Right');
        headerSlider.trigger('next.owl.carousel');
    })




  });