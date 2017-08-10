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
        initMap('map');
        initMap('map1');
        initCart();
        initCheckout();
        $('select, input[type=checkbox], input[type=radio], input[type=number]').styler();
        $('.js-scrollbar').scrollbar();
        $('.js-validate').each(function(){
            var $form = $(this);
            $form.validate({
                errorPlacement: function(error, element) { }
            });
            var $submit = $form.find('button[type=submit]');
            $form.find('input').on('keyup blur', function () {
                $form.valid() ? $submit.prop('disabled', false) : $submit.prop('disabled', 'disabled');
            });
        });
        $('.js-mask_phone').inputmask('+7(999)999-99-99');
        $('#tabs').easytabs();
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
        $('.menu .level-1 > li').mouseenter(function () {
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
        $('.menu-wrapper .level-3 .icon').click(function(e){
            if ($(this).hasClass('icon-menu-plus')) {
                $(this).removeClass('icon-menu-plus').addClass('icon-menu-minus')
                        .siblings('ul').slideDown();
            } else {
                $(this).removeClass('icon-menu-minus').addClass('icon-menu-plus')
                        .siblings('ul').slideUp();
            }
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
        $('.cart .product-data-list').slick({
            arrows: true,
            dots: false,
            slidesToShow: 10,
            slidesToScroll: 2,
            infinite: false,
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
    
    function initMap(containerId) {
        if ($('.map').length == 0 || $('#' + containerId).length == 0 ) return;
        $('#' + containerId).parents().find('.points-item-time').click(function(e){
            var $list = $(this).find('dl');
            $(this).toggleClass('active');
            $(this).hasClass('active') ? $list.slideDown() : $list.slideUp();
        });
        var iconSmall = 'img/map-logo.png';
        var iconBig = 'img/map-logo-big.png';
        var map = new google.maps.Map(document.getElementById(containerId), {
            center: {lat: 56.310339, lng: 44},
            zoom: 12,
            streetViewControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            panControl: false,
            zoomControl: false
        });
        var markers = [];
        $('#' + containerId).parent().find('.points-item').each(function(i){
            var $this = $(this);
            var marker = new google.maps.Marker({
                position: {lat: parseFloat($this.data('lat')), lng: parseFloat($this.data('lng'))},
                icon: iconSmall,
                map: map
            });
            marker.addListener('click', function () {
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon(iconSmall);                    
                }
                this.setIcon(iconBig);
                $('#' + containerId).parent().find('.points-item.active').removeClass('active');
                $this.addClass('active');
                $('#' + containerId).parent().find('.js-scrollbar').scrollTop($this.position().top);
            });
            $this.find('.points-item-title').click(function(e){
                new google.maps.event.trigger( marker, 'click' );
            });
            markers.push(marker);
        });
        $('#tabs').bind('easytabs:after', function() {
//            google.maps.event.trigger(map, 'resize');     
            initMap(containerId);     
         });
    }
    
    function initCart() {
        $('.cart .tooltip').each(function (i) {
            $(this).parent().tooltip({
                delay: 300,
                tooltip: $(this),
                position: 'top',
                html: true
            });
        });
    }

    function initCheckout() {
        $('.checkout-login-label-wrapper label').click(function(e) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        $('.js-payment-radio li').click(function(e){
           $('.js-payment-radio li').removeClass('active');
           $(this).addClass('active');
           $('.checkout-summary-form input[name="selected-payment"]').
                   val($(this).data('payment'));
        });
        $('.js-payment-radio li.active').click();
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICAkKCdzZWxlY3QsIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1udW1iZXJdJykuc3R5bGVyKCk7XHJcbiAgICAgICAgJCgnLmpzLXNjcm9sbGJhcicpLnNjcm9sbGJhcigpO1xyXG4gICAgICAgICQoJy5qcy12YWxpZGF0ZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgJGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciAkc3VibWl0ID0gJGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9c3VibWl0XScpO1xyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLm9uKCdrZXl1cCBibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm0udmFsaWQoKSA/ICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkgOiAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3Bob25lJykuaW5wdXRtYXNrKCcrNyg5OTkpOTk5LTk5LTk5Jyk7XHJcbiAgICAgICAgJCgnI3RhYnMnKS5lYXN5dGFicygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1lbnUoKSB7XHJcbiAgICAgICAgJCgnLmhlYWRlci1jYXRhbG9nLXN3aXRjaGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soJ3JlaW5pdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51IC5mYW5jeWJveC1jbG9zZS1zbWFsbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaGlkZSBhbHBoYWJldCBvbiBob3ZlclxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0xID4gbGknKS5tb3VzZWVudGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYWxwaGFiZXQgPSBbXTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0TWVudSA9ICQoJy5tZW51IC5hbHBoYWJldCcpO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRXcmFwcGVyID0gJCgnLm1lbnUgLmFscGhhYmV0LXdyYXBwZXInKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0SXRlbXMgPSAkKCcubWVudSAuYWxwaGFiZXQtaXRlbXMnKTtcclxuICAgICAgICAvLyBjb2xsZWN0XHJcbiAgICAgICAgJCgnLm1lbnUgLmxldmVsLTIgbGlbZGF0YS1hbHBoYWJldF0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0LnB1c2goJCh0aGlzKS5kYXRhKCdhbHBoYWJldCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LmZpbHRlcihmdW5jdGlvbiAoaXRtLCBpLCBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpID09IGEuaW5kZXhPZihpdG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0LnNvcnQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuICAgICAgICAkLmVhY2goYWxwaGFiZXQsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgICQoJzxsaS8+JykudGV4dCh2KS5hcHBlbmRUbygkYWxwaGFiZXRNZW51KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmZpbmQoJy5hbHBoYWJldC1sZXR0ZXInKS50ZXh0KGxldHRlcik7XHJcbiAgICAgICAgICAgICRhbHBoYWJldEl0ZW1zLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXQ9JyArIGxldHRlciArICddJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9uZSgpLmFwcGVuZFRvKCRhbHBoYWJldEl0ZW1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtd3JhcHBlciAubGV2ZWwtMyAuaWNvbicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaWNvbi1tZW51LXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LXBsdXMnKS5hZGRDbGFzcygnaWNvbi1tZW51LW1pbnVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LW1pbnVzJykuYWRkQ2xhc3MoJ2ljb24tbWVudS1wbHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXItdmVydCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItdmVydCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wcm9kdWN0LXNsaWRlci12ZXJ0JyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQ7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyIC5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY2FydCAucHJvZHVjdC1kYXRhLWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkgLyAyIC0gNTA7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmNzcygncmlnaHQnLCByaWdodCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9kdWN0KCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRlci1zdGFycy1saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1pbmZvIC50YWJzJykudGFicygnc2VsZWN0X3RhYicsICdyZXZpZXdzJyk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtY29udGVudC1zaG93LW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IGlucHV0Jykub24oXCJmb2N1cyBibHVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmQgPSAkKHRoaXMpLmhhc0NsYXNzKCdjb3VudCcpID8gJ2lucHV0JyA6ICdsYWJlbCc7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoZmluZCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAkdG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLXNob3ctYWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtc2hvdycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0LWhpZGUnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uJykuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoJ2ljb24tcHJvZHVjdC1zaXplLXNob3ctYWxsIGljb24tcHJvZHVjdC1zaXplLWhpZGUtYWxsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IHVsLmNvbG9yIGxpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjZGF0YSAudG9vbHRpcCwgLnByb2R1Y3QtaGVhZGluZyAudG9vbHRpcCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgJGhlbHAgPSAkKCc8c3Bhbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJz8nLFxyXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiAnaGVscCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaGVscC5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuaGVscCcpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy12b3RlIC5mYScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkaW5nLnRvZ2dsZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykubmV4dCgpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyLmNsb3NlZCcpLm5leHQoKS5zbGlkZVVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhdGFsb2coKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItd3JhcHBlci5jbG9zZWQnKS5maW5kKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLmhpZGUoKTtcclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQucmFuZ2UnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZpbHRlci1yYW5nZVwiKTtcclxuICAgICAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogWzEwMDAsIDk5OTldLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heCc6IDIwMDAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgc25hcFZhbHVlcyA9IFtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS1mcm9tJyksXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtdG8nKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwVmFsdWVzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUZXh0YXJlYSgpIHtcclxuICAgICAgICAkKCd0ZXh0YXJlYVtkYXRhLW1heF0nKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ21heCcpKTtcclxuICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuID49IG1heCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsLnN1YnN0cmluZygwLCBtYXgpKTtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgnY291bnRlcicpKS50ZXh0KG1heCAtIGxlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdFJlZ2lvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mKCQuY29va2llKCdlc2NhcGVyLXJlZ2lvbi1zZWxlY3RlZCcpKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy1yZWdpb24tY29uZmlybS1saW5rXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnLCAxLCB7IGV4cGlyZXM6IDcsIHBhdGg6ICcvJyB9KTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5wb3B1cC1yZWdpb24tY29uZmlybS1jaGFuZ2UnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpLm9wZW4oJCgnI3JlZ2lvbi1zZWxlY3QtcG9wdXAnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBvcHVwLXJlZ2lvbi1jb25maXJtLXN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKVxyXG4gICAgICAgICAgICAuZmluZCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdCA+IGxpJykubW91c2VlbnRlcihmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgJCgnLmpzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICcnO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyTGV0dGVyICE9IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlciA9IGN1ckxldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdyZWdpb24tbGV0dGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGxldHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpLnBhcmVudCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSAnJztcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdDpub3QoLnJlZ2lvbi1zZWxlY3RfcGlubmVkKSA+IGxpID4gc3BhbicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGN1ckxldHRlciA9ICQodGhpcykudGV4dCgpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY3VyTGV0dGVyICE9IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyID0gY3VyTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdyZWdpb24tbGV0dGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgLnRleHQobGV0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdF9jaXR5LCAucmVnaW9uLXNlbGVjdC13cmFwcGVyJykucGVyZmVjdFNjcm9sbGJhcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0TWFwKGNvbnRhaW5lcklkKSB7XHJcbiAgICAgICAgaWYgKCQoJy5tYXAnKS5sZW5ndGggPT0gMCB8fCAkKCcjJyArIGNvbnRhaW5lcklkKS5sZW5ndGggPT0gMCApIHJldHVybjtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnRzKCkuZmluZCgnLnBvaW50cy1pdGVtLXRpbWUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyICRsaXN0ID0gJCh0aGlzKS5maW5kKCdkbCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAkbGlzdC5zbGlkZURvd24oKSA6ICRsaXN0LnNsaWRlVXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaWNvblNtYWxsID0gJ2ltZy9tYXAtbG9nby5wbmcnO1xyXG4gICAgICAgIHZhciBpY29uQmlnID0gJ2ltZy9tYXAtbG9nby1iaWcucG5nJztcclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCksIHtcclxuICAgICAgICAgICAgY2VudGVyOiB7bGF0OiA1Ni4zMTAzMzksIGxuZzogNDR9LFxyXG4gICAgICAgICAgICB6b29tOiAxMixcclxuICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHpvb21Db250cm9sOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBtYXJrZXJzID0gW107XHJcbiAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLnBvaW50cy1pdGVtJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtsYXQ6IHBhcnNlRmxvYXQoJHRoaXMuZGF0YSgnbGF0JykpLCBsbmc6IHBhcnNlRmxvYXQoJHRoaXMuZGF0YSgnbG5nJykpfSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb25TbWFsbCxcclxuICAgICAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1tqXS5zZXRJY29uKGljb25TbWFsbCk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbihpY29uQmlnKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5wb2ludHMtaXRlbS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcuanMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKCR0aGlzLnBvc2l0aW9uKCkudG9wKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICR0aGlzLmZpbmQoJy5wb2ludHMtaXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIoIG1hcmtlciwgJ2NsaWNrJyApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3RhYnMnKS5iaW5kKCdlYXN5dGFiczphZnRlcicsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVzaXplJyk7ICAgICBcclxuICAgICAgICAgICAgaW5pdE1hcChjb250YWluZXJJZCk7ICAgICBcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRDYXJ0KCkge1xyXG4gICAgICAgICQoJy5jYXJ0IC50b29sdGlwJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGVja291dCgpIHtcclxuICAgICAgICAkKCcuY2hlY2tvdXQtbG9naW4tbGFiZWwtd3JhcHBlciBsYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGknKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAkKCcuY2hlY2tvdXQtc3VtbWFyeS1mb3JtIGlucHV0W25hbWU9XCJzZWxlY3RlZC1wYXltZW50XCJdJykuXHJcbiAgICAgICAgICAgICAgICAgICB2YWwoJCh0aGlzKS5kYXRhKCdwYXltZW50JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpLmFjdGl2ZScpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxufSk7Il0sImZpbGUiOiJjb21tb24uanMifQ==
