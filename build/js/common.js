jQuery(function () {
    "use strict";

    initSlickSlider();
    initbackTop();
    initProductSize();
    
    function initSlickSlider() {
        $(".index-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            fade: true,
            adaptiveHeight: true
        });
        $('.product-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerPadding: '0',
            asNavFor: '.pagg-slider'
	});
	$('.pagg-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '0',
//            centerMode: true,
            asNavFor: '.product-slider',
            focusOnSelect: true,
            infinite: false,
	});
    }
    
    function initbackTop() {
        var jQuerybackToTop = $("#back-top");
        var right = ($(window).width() - 1250)/2 - 50;
        jQuerybackToTop.css('right', right);
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 300) {
            jQuerybackToTop.addClass('active');
          } else {
            jQuerybackToTop.removeClass('active');
          }
        });
        jQuerybackToTop.on('click', function (e) {
          $("html, body").animate({scrollTop: 0}, 500);
        });
    }
    
    function initProductSize() { 
        $('.product-size-list input').on("focus blur", function() {
            var elem = $(this).parent();
            elem.toggleClass("focused");
        });
        $('.product-size-list-wrapper').each(function(i){
            var $tooltip = $(this).find('.tooltip');
            if ($tooltip.length != 0) {
                $(this).find('label').tooltip({
                    delay: 300,
                    tooltip: $tooltip,
                    position: 'top',
                    html: true
                });
            }
        });
        $('.product-size-show-all').click(function(e){
            e.preventDefault();
            if ($(this).hasClass('open')) {
                $('.product-size-list-hidden').slideUp();
            } else {
                $('.product-size-list-hidden').slideDown();
            }
            $(this).toggleClass('open');
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgaW5pdGJhY2tUb3AoKTtcclxuICAgIGluaXRQcm9kdWN0U2l6ZSgpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0U2xpY2tTbGlkZXIoKSB7XHJcbiAgICAgICAgJChcIi5pbmRleC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBhZ2ctc2xpZGVyJ1xyXG5cdH0pO1xyXG5cdCQoJy5wYWdnLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4vLyAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG5cdH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0YmFja1RvcCgpIHtcclxuICAgICAgICB2YXIgalF1ZXJ5YmFja1RvVG9wID0gJChcIiNiYWNrLXRvcFwiKTtcclxuICAgICAgICB2YXIgcmlnaHQgPSAoJCh3aW5kb3cpLndpZHRoKCkgLSAxMjUwKS8yIC0gNTA7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmNzcygncmlnaHQnLCByaWdodCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xyXG4gICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3Aub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRQcm9kdWN0U2l6ZSgpIHsgXHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1saXN0IGlucHV0Jykub24oXCJmb2N1cyBibHVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNpemUtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKS5maW5kKCcudG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAoJHRvb2x0aXAubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnbGFiZWwnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNpemUtc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1zaXplLWxpc3QtaGlkZGVuJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1saXN0LWhpZGRlbicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
