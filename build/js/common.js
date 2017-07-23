jQuery(function () {
    "use strict";

    $(document).ready(function () {
        initMenu();
        initSlickSlider();
        initbackTop();
        initProduct();
        initCatalog();
        initTextarea();
        initRegion();
        $('select, input[type=checkbox], input[type=radio], input[type=number]').styler();
    });

    function initMenu() {
        $('.header-catalog-switcher').click(function (e) {
            e.preventDefault();
            $('.menu').show();
            $('.menu-slider').slick('reinit');
        });
        $('.menu .fancybox-close-small').click(function () {
            $('.menu').hide();
            $alphabetWrapper.hide();
            $alphabetMenu.find('.active').removeClass('active');
        });
        // hide alphabet on hover
        $('.menu .level-1 > li > a').mouseenter(function () {
            $alphabetWrapper.hide();
            $alphabetMenu.find('.active').removeClass('active');
        });
        var alphabet = [];
        var $alphabetMenu = $('.menu .alphabet');
        var $alphabetWrapper = $('.menu .alphabet-wrapper');
        var $alphabetItems = $('.menu .alphabet-items');
        // collect
        $('.menu .level-2 li[data-alphabet]').each(function (i) {
            alphabet.push($(this).data('alphabet'));
        });
        alphabet = alphabet.filter(function (itm, i, a) {
            return i == a.indexOf(itm);
        });
        alphabet.sort();
//        console.log(alphabet);
        $.each(alphabet, function (k, v) {
            $('<li/>').text(v).appendTo($alphabetMenu);
        });
        // click
        $alphabetMenu.find('li').click(function (e) {
            var letter = $(this).text();
            $alphabetMenu.find('.active').removeClass('active');
            $(this).addClass('active');
            $alphabetWrapper.show();
            $alphabetWrapper.find('.alphabet-letter').text(letter);
            $alphabetItems.empty();
            $('.menu .level-2 li[data-alphabet=' + letter + ']').each(function (i) {
                $(this).clone().appendTo($alphabetItems);
            });
        });
    }

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
            infinite: false
        });
        $('.product-slider-vert').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerPadding: '0',
            asNavFor: '.pagg-slider-vert'
        });
        $('.pagg-slider-vert').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '0',
            asNavFor: '.product-slider-vert',
            focusOnSelect: true,
            infinite: false,
            vertical: true,
            verticalSwiping: true
        });
        $('.menu-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: false,
            infinite: false,
            vertical: true,
            verticalSwiping: true
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
                function () {
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
                function () {
                    var offset = $(this).offset();
                    $parent = $(this).parent();
                    $(this).appendTo('body').css({
                        'position': 'absolute',
                        'top': offset.top,
                        'left': offset.left + 20
                    });
                }, function () {
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
        var right = ($(window).width() - 1250) / 2 - 50;
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
        $('.product-data-list input').on("focus blur", function () {
            var elem = $(this).parents('.product-data-list-wrapper');
            elem.toggleClass("focused");
        });
        $('.product-data-list-wrapper').each(function (i) {
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
        $('.product-data-show-all').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('open')) {
                $('.product-data-list-hidden').slideUp();
                $(this).find('span').text($(this).data('text-show'));
            } else {
                $('.product-data-list-hidden').slideDown();
                $(this).find('span').text($(this).data('text-hide'));
            }
            $(this).toggleClass('open');
            $(this).find('.icon').
                    toggleClass('icon-product-size-show-all icon-product-size-hide-all');
        });
        $('.product-data-list ul.color li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
        $('#data .tooltip, .product-heading .tooltip').each(function (i) {
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
                function () {
                    $(this).toggleClass('fa-star fa-star-o');
                    $(this).prevAll('.fa').toggleClass('fa-star fa-star-o');
                }, function () {
            $(this).toggleClass('fa-star fa-star-o');
            $(this).prevAll('.fa').toggleClass('fa-star fa-star-o');
        }
        );
        $('.product-heading.toggler').click(function (e) {
            $(this).toggleClass('closed');
            $(this).hasClass('closed')
                    ? $(this).next().slideUp()
                    : $(this).next().slideDown();
        });
        $('.product-heading.toggler.closed').next().slideUp();
    }

    function initCatalog() {
        $('.product-filter-title').click(function (e) {
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
    
    function initRegion() {
        if (typeof($.cookie('escaper-region-selected')) == 'undefined') {
            setTimeout(function() {
                $("#js-region-confirm-link").trigger('click');
                $.cookie('escaper-region-selected', 1, { expires: 7, path: '/' });
            }, 2000);
        }
        $('.popup-region-confirm-submit').click(function(e){
           e.preventDefault();
           $.fancybox.close();
        });
    }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICAkKCdzZWxlY3QsIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1udW1iZXJdJykuc3R5bGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TWVudSgpIHtcclxuICAgICAgICAkKCcuaGVhZGVyLWNhdGFsb2ctc3dpdGNoZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcubWVudS1zbGlkZXInKS5zbGljaygncmVpbml0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUgLmZhbmN5Ym94LWNsb3NlLXNtYWxsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcubWVudScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBoaWRlIGFscGhhYmV0IG9uIGhvdmVyXHJcbiAgICAgICAgJCgnLm1lbnUgLmxldmVsLTEgPiBsaSA+IGEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYWxwaGFiZXQgPSBbXTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0TWVudSA9ICQoJy5tZW51IC5hbHBoYWJldCcpO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRXcmFwcGVyID0gJCgnLm1lbnUgLmFscGhhYmV0LXdyYXBwZXInKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0SXRlbXMgPSAkKCcubWVudSAuYWxwaGFiZXQtaXRlbXMnKTtcclxuICAgICAgICAvLyBjb2xsZWN0XHJcbiAgICAgICAgJCgnLm1lbnUgLmxldmVsLTIgbGlbZGF0YS1hbHBoYWJldF0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0LnB1c2goJCh0aGlzKS5kYXRhKCdhbHBoYWJldCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LmZpbHRlcihmdW5jdGlvbiAoaXRtLCBpLCBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpID09IGEuaW5kZXhPZihpdG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0LnNvcnQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuICAgICAgICAkLmVhY2goYWxwaGFiZXQsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgICQoJzxsaS8+JykudGV4dCh2KS5hcHBlbmRUbygkYWxwaGFiZXRNZW51KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmZpbmQoJy5hbHBoYWJldC1sZXR0ZXInKS50ZXh0KGxldHRlcik7XHJcbiAgICAgICAgICAgICRhbHBoYWJldEl0ZW1zLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXQ9JyArIGxldHRlciArICddJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9uZSgpLmFwcGVuZFRvKCRhbHBoYWJldEl0ZW1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNsaWNrU2xpZGVyKCkge1xyXG4gICAgICAgICQoXCIuaW5kZXgtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItdmVydCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci12ZXJ0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci12ZXJ0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVudS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4vLyAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1saXN0LWl0ZW0nKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5saXN0LWl0ZW0tc2xpZGVyJykuc2xpY2soJ3NldFBvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcuY2F0YWxvZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgJHBhcmVudDtcclxuICAgICAgICAkKCcuY2F0YWxvZy1zbGlkZXIgLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmRUbygnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiBvZmZzZXQudG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IG9mZnNldC5sZWZ0ICsgMjBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmRUbygkcGFyZW50KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICd0b3AnOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6ICdpbml0aWFsJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcucHJvbW8tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRiYWNrVG9wKCkge1xyXG4gICAgICAgIHZhciBqUXVlcnliYWNrVG9Ub3AgPSAkKFwiI2JhY2stdG9wXCIpO1xyXG4gICAgICAgIHZhciByaWdodCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIDEyNTApIC8gMiAtIDUwO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5jc3MoJ3JpZ2h0JywgcmlnaHQpO1xyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3Aub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvZHVjdCgpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkZXItc3RhcnMtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtaW5mbyAudGFicycpLnRhYnMoJ3NlbGVjdF90YWInLCAncmV2aWV3cycpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWNvbnRlbnQtc2hvdy1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCBpbnB1dCcpLm9uKFwiZm9jdXMgYmx1clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBlbGVtLnRvZ2dsZUNsYXNzKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlcicpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKS5maW5kKCcudG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAoJHRvb2x0aXAubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5kID0gJCh0aGlzKS5oYXNDbGFzcygnY291bnQnKSA/ICdpbnB1dCcgOiAnbGFiZWwnO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKGZpbmQpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJHRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LWhpZGRlbicpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0LXNob3cnKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dC1oaWRlJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbicpLlxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKCdpY29uLXByb2R1Y3Qtc2l6ZS1zaG93LWFsbCBpY29uLXByb2R1Y3Qtc2l6ZS1oaWRlLWFsbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCB1bC5jb2xvciBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI2RhdGEgLnRvb2x0aXAsIC5wcm9kdWN0LWhlYWRpbmcgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdmFyICRoZWxwID0gJCgnPHNwYW4vPicsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICc/JyxcclxuICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogJ2hlbHAnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGhlbHAuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmhlbHAnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtdm90ZSAuZmEnKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRpbmcudG9nZ2xlci5jbG9zZWQnKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDYXRhbG9nKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci10aXRsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdjbG9zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXdyYXBwZXIuY2xvc2VkJykuZmluZCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50LnJhbmdlJykubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1maWx0ZXItcmFuZ2VcIik7XHJcbiAgICAgICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFsxMDAwLCA5OTk5XSxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiAyMDAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHNuYXBWYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtZnJvbScpLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLXRvJylcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgc25hcFZhbHVlc1toYW5kbGVdLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VGV4dGFyZWEoKSB7XHJcbiAgICAgICAgJCgndGV4dGFyZWFbZGF0YS1tYXhdJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdtYXgnKSk7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbiA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHZhbC5zdWJzdHJpbmcoMCwgbWF4KSk7XHJcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgnY291bnRlcicpKS50ZXh0KDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dChtYXggLSBsZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRSZWdpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZigkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnKSkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjanMtcmVnaW9uLWNvbmZpcm0tbGlua1wiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJywgMSwgeyBleHBpcmVzOiA3LCBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pOyJdLCJmaWxlIjoiY29tbW9uLmpzIn0=
