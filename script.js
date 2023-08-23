$( document ).ready(function(){

    Fancybox.bind('[data-fancybox]', {
        // Custom options for all galleries
      });
    
    new Carousel(document.getElementById("myCarousel"), {
    l10n: Carousel.l10n.de,
    });


    let sliders = $('.f-carousel__slide')
    let allCount = $(sliders).length > 10 ? $(sliders).length :  `0${$(sliders).length}`;

    setTimeout(() => {
        let cur = $('.slider-item.is-selected').data("index") + 1
        cur = cur > 10 ? cur : `0${cur}`
        $('.slider-num-cur').text(cur)


        $('.f-carousel').on('mouseup', function(e){

            let cur = $('.slider-item.is-selected').data("index") + 1
            cur = cur > 10 ? cur : `0${cur}`

            $('.slider-num-cur').text(cur)

        })

      }, "10");

    $('.slider-num-all').text(allCount)

    
    //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
})






