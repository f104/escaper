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
        $('.textarea-scrollbar').scrollbar();
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
        $('.popup-region-confirm-change').click(function(e){
           e.preventDefault();
           $.fancybox.close().open($('#region-select-popup'));
        });
        $('.popup-region-confirm-submit').click(function(e){
           e.preventDefault();
           $.fancybox.close();
        });
        $('.region-select > li.active')
            .find('.region-select_city')
            .appendTo('.region-select-wrapper-two-columns')
            .addClass('js-region-select-current')
            .show();
        $('.region-select > li').mouseenter(function(e){
            $('.js-region-select-current')
                .hide()
                .appendTo($('.region-select > li.active'))
                .removeClass('js-region-select-current');
            $('.region-select > li').removeClass('active');
            $(this).addClass('active');
            $(this).find('.region-select_city')
                    .appendTo('.region-select-wrapper-two-columns')
                    .addClass('js-region-select-current')
                    .show();
        });
        $('.region-select_city').each(function(){
            var letter = '';
            $(this).find('a').each(function(){
                var curLetter = $(this).text()[0];
                if (curLetter != letter) {
                    letter = curLetter;
                    $('<div/>')
                         .addClass('region-letter')
                         .text(letter)
                         .appendTo($(this).parent());
                }
             });
        });
        var letter = '';
        $('.region-select:not(.region-select_pinned) > li > span').each(function(){
            var curLetter = $(this).text()[0];
            if (curLetter != letter) {
                letter = curLetter;
                $('<div/>')
                     .addClass('region-letter')
                     .text(letter)
                     .appendTo($(this));
            }
        });
        $('.region-select_city, .region-select-wrapper').perfectScrollbar();
    }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICAkKCdzZWxlY3QsIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1udW1iZXJdJykuc3R5bGVyKCk7XHJcbiAgICAgICAgJCgnLnRleHRhcmVhLXNjcm9sbGJhcicpLnNjcm9sbGJhcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1lbnUoKSB7XHJcbiAgICAgICAgJCgnLmhlYWRlci1jYXRhbG9nLXN3aXRjaGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soJ3JlaW5pdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51IC5mYW5jeWJveC1jbG9zZS1zbWFsbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaGlkZSBhbHBoYWJldCBvbiBob3ZlclxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0xID4gbGkgPiBhJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcubWVudSAuYWxwaGFiZXQnKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0V3JhcHBlciA9ICQoJy5tZW51IC5hbHBoYWJldC13cmFwcGVyJyk7XHJcbiAgICAgICAgdmFyICRhbHBoYWJldEl0ZW1zID0gJCgnLm1lbnUgLmFscGhhYmV0LWl0ZW1zJyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXRdJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBhbHBoYWJldC5wdXNoKCQodGhpcykuZGF0YSgnYWxwaGFiZXQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC5maWx0ZXIoZnVuY3Rpb24gKGl0bSwgaSwgYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaSA9PSBhLmluZGV4T2YoaXRtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldC5zb3J0KCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhhbHBoYWJldCk7XHJcbiAgICAgICAgJC5lYWNoKGFscGhhYmV0LCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICAkKCc8bGkvPicpLnRleHQodikuYXBwZW5kVG8oJGFscGhhYmV0TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJ2xpJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLnNob3coKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5maW5kKCcuYWxwaGFiZXQtbGV0dGVyJykudGV4dChsZXR0ZXIpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRJdGVtcy5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcubWVudSAubGV2ZWwtMiBsaVtkYXRhLWFscGhhYmV0PScgKyBsZXR0ZXIgKyAnXScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvbmUoKS5hcHBlbmRUbygkYWxwaGFiZXRJdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXItdmVydCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItdmVydCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wcm9kdWN0LXNsaWRlci12ZXJ0JyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQ7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyIC5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0YmFja1RvcCgpIHtcclxuICAgICAgICB2YXIgalF1ZXJ5YmFja1RvVG9wID0gJChcIiNiYWNrLXRvcFwiKTtcclxuICAgICAgICB2YXIgcmlnaHQgPSAoJCh3aW5kb3cpLndpZHRoKCkgLSAxMjUwKSAvIDIgLSA1MDtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3AuY3NzKCdyaWdodCcsIHJpZ2h0KTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFByb2R1Y3QoKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGVyLXN0YXJzLWxpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LWluZm8gLnRhYnMnKS50YWJzKCdzZWxlY3RfdGFiJywgJ3Jldmlld3MnKTtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcjaW5mbycpLm9mZnNldCgpLnRvcCAtIDUwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1jb250ZW50LXNob3ctbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCcjaW5mbycpLm9mZnNldCgpLnRvcCAtIDUwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgaW5wdXQnKS5vbihcImZvY3VzIGJsdXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgZWxlbS50b2dnbGVDbGFzcyhcImZvY3VzZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQodGhpcykuZmluZCgnLnRvb2x0aXAnKTtcclxuICAgICAgICAgICAgaWYgKCR0b29sdGlwLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmluZCA9ICQodGhpcykuaGFzQ2xhc3MoJ2NvdW50JykgPyAnaW5wdXQnIDogJ2xhYmVsJztcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChmaW5kKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dC1zaG93JykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LWhpZGRlbicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtaGlkZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmljb24nKS5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcygnaWNvbi1wcm9kdWN0LXNpemUtc2hvdy1hbGwgaWNvbi1wcm9kdWN0LXNpemUtaGlkZS1hbGwnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgdWwuY29sb3IgbGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNkYXRhIC50b29sdGlwLCAucHJvZHVjdC1oZWFkaW5nIC50b29sdGlwJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciAkaGVscCA9ICQoJzxzcGFuLz4nLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnPycsXHJcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6ICdoZWxwJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRoZWxwLmFwcGVuZFRvKCRwYXJlbnQpO1xyXG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5oZWxwJykudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXZvdGUgLmZhJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRpbmcudG9nZ2xlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdjbG9zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkaW5nLnRvZ2dsZXIuY2xvc2VkJykubmV4dCgpLnNsaWRlVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci13cmFwcGVyLmNsb3NlZCcpLmZpbmQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdC1maWx0ZXItY29udGVudC5yYW5nZScpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmlsdGVyLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMTAwMCwgOTk5OV0sXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLWZyb20nKSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS10bycpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHNuYXBWYWx1ZXNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRleHRhcmVhKCkge1xyXG4gICAgICAgICQoJ3RleHRhcmVhW2RhdGEtbWF4XScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh2YWwuc3Vic3RyaW5nKDAsIG1heCkpO1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dCgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQobWF4IC0gbGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0UmVnaW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YoJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJykpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2pzLXJlZ2lvbi1jb25maXJtLWxpbmtcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgICQuY29va2llKCdlc2NhcGVyLXJlZ2lvbi1zZWxlY3RlZCcsIDEsIHsgZXhwaXJlczogNywgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLnBvcHVwLXJlZ2lvbi1jb25maXJtLWNoYW5nZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCkub3BlbigkKCcjcmVnaW9uLXNlbGVjdC1wb3B1cCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpXHJcbiAgICAgICAgICAgIC5maW5kKCcucmVnaW9uLXNlbGVjdF9jaXR5JylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5tb3VzZWVudGVyKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKCcuanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKTtcclxuICAgICAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2pzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdF9jaXR5JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJyc7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJMZXR0ZXIgPSAkKHRoaXMpLnRleHQoKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyID0gY3VyTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGV0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQodGhpcykucGFyZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxldHRlciA9ICcnO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0Om5vdCgucmVnaW9uLXNlbGVjdF9waW5uZWQpID4gbGkgPiBzcGFuJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0X2NpdHksIC5yZWdpb24tc2VsZWN0LXdyYXBwZXInKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
