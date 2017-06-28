jQuery(function () {
    "use strict";

    $(document).ready(function(){
        initSlickSlider();
        initbackTop();
        initProduct();
        initCatalog();
        $('select, input[type=checkbox]').styler();
    });
    
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
	$('.catalog-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
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
    
    function initProduct() {
        $('.product-content-show-more').click(function (e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: $('#info').offset().top - 50}, 500);
        });
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
        $('#data .tooltip').each(function(i){
            var $parent = $(this).parent();
            var $help = $('<span/>', {
                text: '?',
                "class": 'help',
            });
            $help.appendTo($parent);
                $parent.find('.help').tooltip({
                    delay: 300,
                    tooltip: $(this),
                    position: 'top',
                    html: true
                });
        });
        $('.js-vote .fa').hover(
            function() {
              $(this).toggleClass('fa-star fa-star-o');
              $(this).prevAll('.fa').toggleClass('fa-star fa-star-o');
            }, function() {
              $(this).toggleClass('fa-star fa-star-o');
              $(this).prevAll('.fa').toggleClass('fa-star fa-star-o');
            }
        );
    }
    
    function initCatalog() {
        $('.product-filter-title').click(function(e){
            $(this).parent().toggleClass('closed');
            $(this).parent().hasClass('closed') 
                ? $(this).siblings('.product-filter-content').slideUp()
                : $(this).siblings('.product-filter-content').slideDown();
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW5pdFNsaWNrU2xpZGVyKCk7XHJcbiAgICAgICAgaW5pdGJhY2tUb3AoKTtcclxuICAgICAgICBpbml0UHJvZHVjdCgpO1xyXG4gICAgICAgIGluaXRDYXRhbG9nKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XScpLnN0eWxlcigpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcblx0fSk7XHJcblx0JCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbi8vICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcblx0JCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRiYWNrVG9wKCkge1xyXG4gICAgICAgIHZhciBqUXVlcnliYWNrVG9Ub3AgPSAkKFwiI2JhY2stdG9wXCIpO1xyXG4gICAgICAgIHZhciByaWdodCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIDEyNTApLzIgLSA1MDtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3AuY3NzKCdyaWdodCcsIHJpZ2h0KTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdFByb2R1Y3QoKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtY29udGVudC1zaG93LW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1saXN0IGlucHV0Jykub24oXCJmb2N1cyBibHVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNpemUtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKS5maW5kKCcudG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAoJHRvb2x0aXAubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnbGFiZWwnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNpemUtc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1zaXplLWxpc3QtaGlkZGVuJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1saXN0LWhpZGRlbicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjZGF0YSAudG9vbHRpcCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdmFyICRoZWxwID0gJCgnPHNwYW4vPicsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICc/JyxcclxuICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogJ2hlbHAnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGhlbHAuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5oZWxwJykudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtdm90ZSAuZmEnKS5ob3ZlcihcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Nsb3NlZCcpIFxyXG4gICAgICAgICAgICAgICAgPyAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgOiAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn0pOyJdLCJmaWxlIjoiY29tbW9uLmpzIn0=
