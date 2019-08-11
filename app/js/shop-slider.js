$(document).ready(function () {

    const shopSlider = $('#shopSlider');


    shopSlider.owlCarousel({
            loop: true,
            dots: false,
            margin: 2,
            smartSpeed: 500,
            responsive: {
            
                0: {
                    items: 1,
                },

                1254 : {
                    items: 3,
                }
            }
        });
   
$('#shopSliderLeft').click(function () {
    console.log('Left');
    shopSlider.trigger('prev.owl.carousel');
});

$('#shopSliderRight').click(function () {
    console.log('Right');
    shopSlider.trigger('next.owl.carousel');
});




});






// headerSlider.on('changed.owl.carousel', function(event){
// $('.slide-controls-number__active').text(event.item.index + 1);
// $('.slide-controls-number__total').text(event.item.count);
// });

// });