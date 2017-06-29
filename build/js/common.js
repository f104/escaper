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
	$('.promo-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
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
        $('.product-filter-wrapper.closed').find('.product-filter-content').hide();
        var slider = document.getElementById("product-filter-range");
        noUiSlider.create(slider, {
         start: [1000, 9999],
         connect: true,
//         step: 1,
         range: {
           'min': 0,
           'max': 20000
         }
        });
        var snapValues = [
            document.getElementById('product-filter-range-from'),
            document.getElementById('product-filter-range-to')
        ];

        slider.noUiSlider.on('update', function (values, handle) {
            snapValues[handle].value = Math.round(values[handle]);
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW5pdFNsaWNrU2xpZGVyKCk7XHJcbiAgICAgICAgaW5pdGJhY2tUb3AoKTtcclxuICAgICAgICBpbml0UHJvZHVjdCgpO1xyXG4gICAgICAgIGluaXRDYXRhbG9nKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XScpLnN0eWxlcigpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcblx0fSk7XHJcblx0JCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbi8vICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcblx0JCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcblx0JCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuXHR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkvMiAtIDUwO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5jc3MoJ3JpZ2h0JywgcmlnaHQpO1xyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvZHVjdCgpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1jb250ZW50LXNob3ctbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcjaW5mbycpLm9mZnNldCgpLnRvcCAtIDUwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zaXplLWxpc3QgaW5wdXQnKS5vbihcImZvY3VzIGJsdXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgZWxlbS50b2dnbGVDbGFzcyhcImZvY3VzZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1saXN0LXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdsYWJlbCcpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJHRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZS1zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNpemUtbGlzdC1oaWRkZW4nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1zaXplLWxpc3QtaGlkZGVuJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNkYXRhIC50b29sdGlwJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgJGhlbHAgPSAkKCc8c3Bhbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJz8nLFxyXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiAnaGVscCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaGVscC5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmhlbHAnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy12b3RlIC5mYScpLmhvdmVyKFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRDYXRhbG9nKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY2xvc2VkJykgXHJcbiAgICAgICAgICAgICAgICA/ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICA6ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXdyYXBwZXIuY2xvc2VkJykuZmluZCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1maWx0ZXItcmFuZ2VcIik7XHJcbiAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgICAgIHN0YXJ0OiBbMTAwMCwgOTk5OV0sXHJcbiAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbi8vICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtZnJvbScpLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtdG8nKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgc25hcFZhbHVlc1toYW5kbGVdLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxufSk7Il0sImZpbGUiOiJjb21tb24uanMifQ==
