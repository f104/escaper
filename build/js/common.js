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
        $('.js-validate').each(function () {
            var $form = $(this);
            $form.validate({
                errorPlacement: function (error, element) { }
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
        $('.menu-wrapper .level-3 .icon').click(function (e) {
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
            slide: 'div',
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
        $('.product-slider-pc').slick({
            slide: 'div',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerPadding: '0',
            asNavFor: '.pagg-slider-pc'
        });
        $('.pagg-slider-pc').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.product-slider-pc',
            focusOnSelect: true,
            infinite: false
        });
        $('.product-slider-related').slick({
            slide: 'div',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            centerPadding: '0',
            infinite: false
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
        $('.js-printable-remove').click(function (e) {
            $(this).parent().hide();
            if ($('.product-printable-remove:visible').length == 0) {
                $('.product-personalize').hide();
            }
        });
        $('.js-printable-add').click(function (e) {
            $('.product-printable-remove').show();
            $('.product-personalize').show();
        });
        $('.js-color-remove').click(function (e) {
            var $parent = $(this).parents('.product-colors');
            var $optional = $parent.find('.product-color-optional');
            $(this).parent().remove();
//            if ($optional.find('li').length == 1) {
//                $optional.hide();
//            }
            if ($optional.find('li').length < 7) {
                $parent.find('.product-color-add').show();
            }
        });
        $('.js-color-add').click(function (e) {
            var $parent = $(this).parents('.product-colors');
            var $optional = $parent.find('.product-color-optional');
//            $optional.show();
            $optional.find('li.template')
                .clone(true)
                .removeClass('template')
//                .appendTo($optional.find('ul'));
                .insertBefore($optional.find('li.template'));
            if ($optional.find('li').length == 7) {
                $parent.find('.product-color-add').hide();
            }
        });
        $('.product-design-submit').click(function (e) {
            e.preventDefault();
            $.fancybox.close();
        });
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
        if (typeof ($.cookie('escaper-region-selected')) == 'undefined') {
            setTimeout(function () {
                $("#js-region-confirm-link").trigger('click');
                $.cookie('escaper-region-selected', 1, {expires: 7, path: '/'});
            }, 2000);
        }
        $('.popup-region-confirm-change').click(function (e) {
            e.preventDefault();
            $.fancybox.close().open($('#region-select-popup'));
        });
        $('.popup-region-confirm-submit').click(function (e) {
            e.preventDefault();
            $.fancybox.close();
        });
        $('.region-select > li.active')
                .find('.region-select_city')
                .appendTo('.region-select-wrapper-two-columns')
                .addClass('js-region-select-current')
                .show();
        $('.region-select > li').mouseenter(function (e) {
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
        $('.region-select_city').each(function () {
            var letter = '';
            $(this).find('a').each(function () {
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
        $('.region-select:not(.region-select_pinned) > li > span').each(function () {
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
        if ($('.map').length == 0 || $('#' + containerId).length == 0)
            return;
        $('#' + containerId).parents().find('.points-item-time').click(function (e) {
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
        $('#' + containerId).parent().find('.points-item').each(function (i) {
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
            $this.find('.points-item-title').click(function (e) {
                new google.maps.event.trigger(marker, 'click');
            });
            markers.push(marker);
        });
        $('#tabs').bind('easytabs:after', function () {
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
        $('.checkout-login-label-wrapper label').click(function (e) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        $('.js-payment-radio li').click(function (e) {
            $('.js-payment-radio li').removeClass('active');
            $(this).addClass('active');
            $('.checkout-summary-form input[name="selected-payment"]').
                    val($(this).data('payment'));
        });
        $('.js-payment-radio li.active').click();
    }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICAkKCdzZWxlY3QsIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1udW1iZXJdJykuc3R5bGVyKCk7XHJcbiAgICAgICAgJCgnLmpzLXNjcm9sbGJhcicpLnNjcm9sbGJhcigpO1xyXG4gICAgICAgICQoJy5qcy12YWxpZGF0ZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJGZvcm0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAkZm9ybS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciAkc3VibWl0ID0gJGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9c3VibWl0XScpO1xyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLm9uKCdrZXl1cCBibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm0udmFsaWQoKSA/ICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkgOiAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3Bob25lJykuaW5wdXRtYXNrKCcrNyg5OTkpOTk5LTk5LTk5Jyk7XHJcbiAgICAgICAgJCgnI3RhYnMnKS5lYXN5dGFicygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1lbnUoKSB7XHJcbiAgICAgICAgJCgnLmhlYWRlci1jYXRhbG9nLXN3aXRjaGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soJ3JlaW5pdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51IC5mYW5jeWJveC1jbG9zZS1zbWFsbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaGlkZSBhbHBoYWJldCBvbiBob3ZlclxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0xID4gbGknKS5tb3VzZWVudGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYWxwaGFiZXQgPSBbXTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0TWVudSA9ICQoJy5tZW51IC5hbHBoYWJldCcpO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRXcmFwcGVyID0gJCgnLm1lbnUgLmFscGhhYmV0LXdyYXBwZXInKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0SXRlbXMgPSAkKCcubWVudSAuYWxwaGFiZXQtaXRlbXMnKTtcclxuICAgICAgICAvLyBjb2xsZWN0XHJcbiAgICAgICAgJCgnLm1lbnUgLmxldmVsLTIgbGlbZGF0YS1hbHBoYWJldF0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0LnB1c2goJCh0aGlzKS5kYXRhKCdhbHBoYWJldCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LmZpbHRlcihmdW5jdGlvbiAoaXRtLCBpLCBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpID09IGEuaW5kZXhPZihpdG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0LnNvcnQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuICAgICAgICAkLmVhY2goYWxwaGFiZXQsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgICQoJzxsaS8+JykudGV4dCh2KS5hcHBlbmRUbygkYWxwaGFiZXRNZW51KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJCh0aGlzKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmZpbmQoJy5hbHBoYWJldC1sZXR0ZXInKS50ZXh0KGxldHRlcik7XHJcbiAgICAgICAgICAgICRhbHBoYWJldEl0ZW1zLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXQ9JyArIGxldHRlciArICddJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9uZSgpLmFwcGVuZFRvKCRhbHBoYWJldEl0ZW1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtd3JhcHBlciAubGV2ZWwtMyAuaWNvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpY29uLW1lbnUtcGx1cycpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpY29uLW1lbnUtcGx1cycpLmFkZENsYXNzKCdpY29uLW1lbnUtbWludXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJ3VsJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpY29uLW1lbnUtbWludXMnKS5hZGRDbGFzcygnaWNvbi1tZW51LXBsdXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJ3VsJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNsaWNrU2xpZGVyKCkge1xyXG4gICAgICAgICQoXCIuaW5kZXgtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItdmVydCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGU6ICdkaXYnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBhZ2ctc2xpZGVyLXZlcnQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXItdmVydCcsXHJcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LXNsaWRlci1wYycpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGU6ICdkaXYnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBhZ2ctc2xpZGVyLXBjJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci1wYycpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zbGlkZXItcGMnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcmVsYXRlZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGU6ICdkaXYnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQ7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyIC5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY2FydCAucHJvZHVjdC1kYXRhLWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkgLyAyIC0gNTA7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmNzcygncmlnaHQnLCByaWdodCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9kdWN0KCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRlci1zdGFycy1saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1pbmZvIC50YWJzJykudGFicygnc2VsZWN0X3RhYicsICdyZXZpZXdzJyk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtY29udGVudC1zaG93LW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IGlucHV0Jykub24oXCJmb2N1cyBibHVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmQgPSAkKHRoaXMpLmhhc0NsYXNzKCdjb3VudCcpID8gJ2lucHV0JyA6ICdsYWJlbCc7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoZmluZCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAkdG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLXNob3ctYWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtc2hvdycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0LWhpZGUnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uJykuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoJ2ljb24tcHJvZHVjdC1zaXplLXNob3ctYWxsIGljb24tcHJvZHVjdC1zaXplLWhpZGUtYWxsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IHVsLmNvbG9yIGxpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjZGF0YSAudG9vbHRpcCwgLnByb2R1Y3QtaGVhZGluZyAudG9vbHRpcCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgJGhlbHAgPSAkKCc8c3Bhbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJz8nLFxyXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiAnaGVscCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaGVscC5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuaGVscCcpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy12b3RlIC5mYScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkaW5nLnRvZ2dsZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykubmV4dCgpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyLmNsb3NlZCcpLm5leHQoKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmpzLXByaW50YWJsZS1yZW1vdmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgaWYgKCQoJy5wcm9kdWN0LXByaW50YWJsZS1yZW1vdmU6dmlzaWJsZScpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1wZXJzb25hbGl6ZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wcmludGFibGUtYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtcHJpbnRhYmxlLXJlbW92ZScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtcGVyc29uYWxpemUnKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWNvbG9yLXJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1jb2xvcnMnKTtcclxuICAgICAgICAgICAgdmFyICRvcHRpb25hbCA9ICRwYXJlbnQuZmluZCgnLnByb2R1Y3QtY29sb3Itb3B0aW9uYWwnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICBpZiAoJG9wdGlvbmFsLmZpbmQoJ2xpJykubGVuZ3RoID09IDEpIHtcclxuLy8gICAgICAgICAgICAgICAgJG9wdGlvbmFsLmhpZGUoKTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkb3B0aW9uYWwuZmluZCgnbGknKS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLWFkZCcpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1jb2xvci1hZGQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtY29sb3JzJyk7XHJcbiAgICAgICAgICAgIHZhciAkb3B0aW9uYWwgPSAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLW9wdGlvbmFsJyk7XHJcbi8vICAgICAgICAgICAgJG9wdGlvbmFsLnNob3coKTtcclxuICAgICAgICAgICAgJG9wdGlvbmFsLmZpbmQoJ2xpLnRlbXBsYXRlJylcclxuICAgICAgICAgICAgICAgIC5jbG9uZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd0ZW1wbGF0ZScpXHJcbi8vICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkb3B0aW9uYWwuZmluZCgndWwnKSk7XHJcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCRvcHRpb25hbC5maW5kKCdsaS50ZW1wbGF0ZScpKTtcclxuICAgICAgICAgICAgaWYgKCRvcHRpb25hbC5maW5kKCdsaScpLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLWFkZCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRlc2lnbi1zdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci13cmFwcGVyLmNsb3NlZCcpLmZpbmQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdC1maWx0ZXItY29udGVudC5yYW5nZScpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmlsdGVyLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMTAwMCwgOTk5OV0sXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLWZyb20nKSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS10bycpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHNuYXBWYWx1ZXNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRleHRhcmVhKCkge1xyXG4gICAgICAgICQoJ3RleHRhcmVhW2RhdGEtbWF4XScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh2YWwuc3Vic3RyaW5nKDAsIG1heCkpO1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dCgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQobWF4IC0gbGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSZWdpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJykpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy1yZWdpb24tY29uZmlybS1saW5rXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnLCAxLCB7ZXhwaXJlczogNywgcGF0aDogJy8nfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tY2hhbmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCkub3BlbigkKCcjcmVnaW9uLXNlbGVjdC1wb3B1cCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaScpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLmpzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJyc7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ckxldHRlciA9ICQodGhpcykudGV4dCgpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckxldHRlciAhPSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncmVnaW9uLWxldHRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKS5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSAnJztcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdDpub3QoLnJlZ2lvbi1zZWxlY3RfcGlubmVkKSA+IGxpID4gc3BhbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0X2NpdHksIC5yZWdpb24tc2VsZWN0LXdyYXBwZXInKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcChjb250YWluZXJJZCkge1xyXG4gICAgICAgIGlmICgkKCcubWFwJykubGVuZ3RoID09IDAgfHwgJCgnIycgKyBjb250YWluZXJJZCkubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnRzKCkuZmluZCgnLnBvaW50cy1pdGVtLXRpbWUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJGxpc3QgPSAkKHRoaXMpLmZpbmQoJ2RsJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICRsaXN0LnNsaWRlRG93bigpIDogJGxpc3Quc2xpZGVVcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpY29uU21hbGwgPSAnaW1nL21hcC1sb2dvLnBuZyc7XHJcbiAgICAgICAgdmFyIGljb25CaWcgPSAnaW1nL21hcC1sb2dvLWJpZy5wbmcnO1xyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IHtsYXQ6IDU2LjMxMDMzOSwgbG5nOiA0NH0sXHJcbiAgICAgICAgICAgIHpvb206IDEyLFxyXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcucG9pbnRzLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xhdCcpKSwgbG5nOiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xuZycpKX0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uU21hbGwsXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbal0uc2V0SWNvbihpY29uU21hbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uKGljb25CaWcpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLnBvaW50cy1pdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoJHRoaXMucG9zaXRpb24oKS50b3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHRoaXMuZmluZCgnLnBvaW50cy1pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcmtlciwgJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjdGFicycpLmJpbmQoJ2Vhc3l0YWJzOmFmdGVyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVzaXplJyk7ICAgICBcclxuICAgICAgICAgICAgaW5pdE1hcChjb250YWluZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhcnQoKSB7XHJcbiAgICAgICAgJCgnLmNhcnQgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENoZWNrb3V0KCkge1xyXG4gICAgICAgICQoJy5jaGVja291dC1sb2dpbi1sYWJlbC13cmFwcGVyIGxhYmVsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5jaGVja291dC1zdW1tYXJ5LWZvcm0gaW5wdXRbbmFtZT1cInNlbGVjdGVkLXBheW1lbnRcIl0nKS5cclxuICAgICAgICAgICAgICAgICAgICB2YWwoJCh0aGlzKS5kYXRhKCdwYXltZW50JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpLmFjdGl2ZScpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
