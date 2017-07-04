jQuery(function () {
    "use strict";

    $(document).ready(function(){
        initSlickSlider();
        initbackTop();
        initProduct();
        initCatalog();
        initTextarea();
        $('select, input[type=checkbox], input[type=number]').styler();
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
            asNavFor: '.product-slider',
            focusOnSelect: true,
            infinite: false,
	});
	$('.list-item-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '0',
//            centerMode: true,
            focusOnSelect: true,
            infinite: false,
	});
        $('.product-list-item').hover(
            function() {
                $(this).find('.list-item-slider').slick('setPosition');
            }
        );
	$('.catalog-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
	});
        var $parent;
        $('.catalog-slider .product-list-item').hover(
            function() {
              var offset = $(this).offset();
              $parent = $(this).parent();
              $(this).appendTo('body').css({
                  'position': 'absolute',
                  'top': offset.top,
                  'left': offset.left + 20
              });
            }, function() {
              $(this).appendTo($parent).css({
                  'position': 'relative',
                  'top': 'initial',
                  'left': 'initial'
              });
            }
        );
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
        $('.product-header-stars-link').click(function (e) {
            e.preventDefault();
            $('.product-info .tabs').tabs('select_tab', 'reviews');
            $("html, body").animate({scrollTop: $('#info').offset().top - 50}, 500);
        });
        $('.product-content-show-more').click(function (e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: $('#info').offset().top - 50}, 500);
        });
        $('.product-data-list input').on("focus blur", function() {
            var elem = $(this).parents('.product-data-list-wrapper');
            elem.toggleClass("focused");
        });
        $('.product-data-list-wrapper').each(function(i){
            var $tooltip = $(this).find('.tooltip');
            if ($tooltip.length != 0) {
                var find = $(this).hasClass('count') ? 'input' : 'label';
                $(this).find(find).tooltip({
                    delay: 300,
                    tooltip: $tooltip,
                    position: 'top',
                    html: true
                });
            }
        });
        $('.product-data-show-all').click(function(e){
            e.preventDefault();
            if ($(this).hasClass('open')) {
                $('.product-data-list-hidden').slideUp();
            } else {
                $('.product-data-list-hidden').slideDown();
            }
            $(this).toggleClass('open');
        });
        $('.product-data-list ul.color li').click(function(){
           $(this).addClass('active').siblings().removeClass('active');
        });
        $('#data .tooltip, .product-heading .tooltip').each(function(i){
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
        if ($('.product-filter-content.range').length != 0) {
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
    }
    
    function initTextarea() {
        $('textarea[data-max]').on('keyup', function () {
            var max = parseInt($(this).data('max'));
            var val = $(this).val();
            var len = val.length;
            if (len >= max) {
                $(this).val(val.substring(0, max));
                $($(this).data('counter')).text(0);
            } else {
                $($(this).data('counter')).text(max - len);
            }
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW5pdFNsaWNrU2xpZGVyKCk7XHJcbiAgICAgICAgaW5pdGJhY2tUb3AoKTtcclxuICAgICAgICBpbml0UHJvZHVjdCgpO1xyXG4gICAgICAgIGluaXRDYXRhbG9nKCk7XHJcbiAgICAgICAgaW5pdFRleHRhcmVhKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1udW1iZXJdJykuc3R5bGVyKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdFNsaWNrU2xpZGVyKCkge1xyXG4gICAgICAgICQoXCIuaW5kZXgtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlcidcclxuXHR9KTtcclxuXHQkKCcucGFnZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcblx0JCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcblx0fSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHQkKCcuY2F0YWxvZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuXHR9KTtcclxuICAgICAgICB2YXIgJHBhcmVudDtcclxuICAgICAgICAkKCcuY2F0YWxvZy1zbGlkZXIgLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgJ3RvcCc6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblx0JCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuXHR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkvMiAtIDUwO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5jc3MoJ3JpZ2h0JywgcmlnaHQpO1xyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvZHVjdCgpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkZXItc3RhcnMtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtaW5mbyAudGFicycpLnRhYnMoJ3NlbGVjdF90YWInLCAncmV2aWV3cycpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWNvbnRlbnQtc2hvdy1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCBpbnB1dCcpLm9uKFwiZm9jdXMgYmx1clwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKS5maW5kKCcudG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAoJHRvb2x0aXAubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5kID0gJCh0aGlzKS5oYXNDbGFzcygnY291bnQnKSA/ICdpbnB1dCcgOiAnbGFiZWwnO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKGZpbmQpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJHRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCB1bC5jb2xvciBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI2RhdGEgLnRvb2x0aXAsIC5wcm9kdWN0LWhlYWRpbmcgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciAkaGVscCA9ICQoJzxzcGFuLz4nLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnPycsXHJcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6ICdoZWxwJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRoZWxwLmFwcGVuZFRvKCRwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuaGVscCcpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXZvdGUgLmZhJykuaG92ZXIoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdENhdGFsb2coKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdjbG9zZWQnKSBcclxuICAgICAgICAgICAgICAgID8gJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgIDogJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItd3JhcHBlci5jbG9zZWQnKS5maW5kKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLmhpZGUoKTtcclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQucmFuZ2UnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZpbHRlci1yYW5nZVwiKTtcclxuICAgICAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgICAgICAgICBzdGFydDogWzEwMDAsIDk5OTldLFxyXG4gICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLWZyb20nKSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS10bycpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHNuYXBWYWx1ZXNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRUZXh0YXJlYSgpIHtcclxuICAgICAgICAkKCd0ZXh0YXJlYVtkYXRhLW1heF0nKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ21heCcpKTtcclxuICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuID49IG1heCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsLnN1YnN0cmluZygwLCBtYXgpKTtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgnY291bnRlcicpKS50ZXh0KG1heCAtIGxlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
