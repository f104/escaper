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
        initLogin();
        initShare();
        initKeyShotVR();
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
        $('.js-mask_price').inputmask('9{+} рублей');
        $('#tabs').easytabs();
        $('.js-tooltiped').each(function (i) {
            var $tooltip = $(this).parent().find('.tooltip');
            if ($tooltip.length != 0) {
                $(this).tooltip({
                    delay: 300,
                    tooltip: $tooltip,
                    position: 'top',
                    html: true
                });
            }
        });
        $('.js-popup-close').click(function(e){
            $.fancybox.close();
        });
        // temporary, must be deleted
        $('.js-btn-register').click(function(e){
            e.preventDefault();
            $.fancybox.close();
            $.fancybox.open({
                src  : '#about-popup',
                type : 'inline'
            });
        });
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
        $('.js-product-data-personal-radio').on("click", function () {
            if ($(this).val() == "1") {
                $('.js-product-data-personal').show();
                $('.js-product-data-common').hide();
                $('.product-size').addClass('no-inputs');
            } else {
                $('.js-product-data-personal').hide();
                $('.js-product-data-common').show();
                $('.product-size').removeClass('no-inputs');
            }
        });
        $('.js-product-data-personal-radio[checked]').click();
        $('.product-data-list input').on("focus", function () {
            $(this).parents('.product-data-list').find('.focused').removeClass('focused');
            var elem = $(this).parents('.product-data-list-wrapper, .product-data-list-wrapper1');
            elem.addClass("focused");
        });
        $('.product-data-list input').on("change", function () {
            var elem = $(this).parents('.product-data-list-wrapper, .product-data-list-wrapper1');
            if ($(this).val() != "0" ) {
                elem.addClass("active");
            } else {
                elem.removeClass("active");
            }
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
        $('.js-payment-radio li').click(function (e) {
            $('.js-payment-radio li').removeClass('active');
            $(this).addClass('active');
            $('.checkout-summary-form input[name="selected-payment"]').
                    val($(this).data('payment'));
        });
        $('.js-payment-radio li.active').click();
    }

    function initLogin() {
        $('.login-label-wrapper label').click(function (e) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        $('.js-about-add').click(function (e) {
            $(this).parent().hide();
            $(this).parents('.about-wrapper').find('.about-inner').show();
        });
        $('.js-about-sport').click(function (e) {
            $(this).hide().parent().find('.about-inner').show();
        });
        $('.js-about-info').click(function (e) {
            $(this).hide().next().show();
            $(this).parents('.about-row').find('.input-view, .select-view').removeClass('input-view select-view');
        });
        var alphabet = [];
        var $alphabetMenu = $('.about .alphabet');
        // collect
        $('.about .about-sport-list li[data-alphabet]').each(function (i) {
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
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.about .about-sport-list li').removeClass('about-short-list-muted');
            } else {
                var letter = $(this).text();
                $alphabetMenu.find('.active').removeClass('active');
                $(this).addClass('active');
                $('.about .about-sport-list li').removeClass('about-short-list-muted');
                $('.about .about-sport-list li[data-alphabet!=' + letter + ']').addClass('about-short-list-muted');
            }
        });
    }
    
    function initShare() {
        $('.accordion-item.closed').find('.accordion-item-inner').slideUp();
        $('.accordion-item-heading').click(function(){
            var $this = $(this);
            var $parent = $this.parent('.accordion-item');
            var $wrapper = $this.parents('.accordion-wrapper');
            if ($parent.hasClass('closed')) {
                $wrapper.find('.accordion-item').addClass('closed').find('.accordion-item-inner').slideUp(200);
                $parent.removeClass('closed');
                $parent.find('.accordion-item-inner').slideDown(200);
                if ($wrapper.parents('.popup').length == 0) {
                    setTimeout(function() {
                        $("html, body").animate({scrollTop: $parent.offset().top - 50});
                    }, 500);
                }
            } else {
                $parent.addClass('closed');
                $parent.find('.accordion-item-inner').slideUp();
            }
        });
    }
    
    function initKeyShotVR() {
        $('.js-3d').each(function(i){
            var $t = $(this);
            var nameOfDiv = "3d_" + i;
            $t.attr('id', nameOfDiv);
            var folderName = '3d/' + $t.data('folder');
            var viewPortWidth = $t.data('width');
            var viewPortHeight = $t.data('height');
            var backgroundColor = "#FFFFFF";
            var uCount = 36;
            var vCount = 1;
            var uWrap = true;
            var vWrap = false;
            var uMouseSensitivity = -0.1;
            var vMouseSensitivity = 1;
            var uStartIndex = 18;
            var vStartIndex = 0;
            var minZoom = 1;
            var maxZoom = 2;
            var rotationDamping = 0.96;
            var downScaleToBrowser = true;
            var addDownScaleGUIButton = false;
            var downloadOnInteraction = false;
            var imageExtension = "jpg";
            var showLoading = true;
            var loadingIcon = ""; // Set to empty string for default icon.
            var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
            var uReverse = false;
            var vReverse = false;
            var hotspots = {};

            new keyshotVR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots);
        });    
      }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICBpbml0TG9naW4oKTtcclxuICAgICAgICBpbml0U2hhcmUoKTtcclxuICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9bnVtYmVyXScpLnN0eWxlcigpO1xyXG4gICAgICAgICQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxiYXIoKTtcclxuICAgICAgICAkKCcuanMtdmFsaWRhdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgJGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgJHN1Ym1pdCA9ICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKTtcclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS5vbigna2V5dXAgYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtLnZhbGlkKCkgPyAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpIDogJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtbWFza19waG9uZScpLmlucHV0bWFzaygnKzcoOTk5KTk5OS05OS05OScpO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3ByaWNlJykuaW5wdXRtYXNrKCc5eyt9INGA0YPQsdC70LXQuScpO1xyXG4gICAgICAgICQoJyN0YWJzJykuZWFzeXRhYnMoKTtcclxuICAgICAgICAkKCcuanMtdG9vbHRpcGVkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGVtcG9yYXJ5LCBtdXN0IGJlIGRlbGV0ZWRcclxuICAgICAgICAkKCcuanMtYnRuLXJlZ2lzdGVyJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgc3JjICA6ICcjYWJvdXQtcG9wdXAnLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6ICdpbmxpbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXRNZW51KCkge1xyXG4gICAgICAgICQoJy5oZWFkZXItY2F0YWxvZy1zd2l0Y2hlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKCdyZWluaXQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVudSAuZmFuY3lib3gtY2xvc2Utc21hbGwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGhpZGUgYWxwaGFiZXQgb24gaG92ZXJcclxuICAgICAgICAkKCcubWVudSAubGV2ZWwtMSA+IGxpJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcubWVudSAuYWxwaGFiZXQnKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0V3JhcHBlciA9ICQoJy5tZW51IC5hbHBoYWJldC13cmFwcGVyJyk7XHJcbiAgICAgICAgdmFyICRhbHBoYWJldEl0ZW1zID0gJCgnLm1lbnUgLmFscGhhYmV0LWl0ZW1zJyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXRdJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBhbHBoYWJldC5wdXNoKCQodGhpcykuZGF0YSgnYWxwaGFiZXQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC5maWx0ZXIoZnVuY3Rpb24gKGl0bSwgaSwgYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaSA9PSBhLmluZGV4T2YoaXRtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldC5zb3J0KCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhhbHBoYWJldCk7XHJcbiAgICAgICAgJC5lYWNoKGFscGhhYmV0LCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICAkKCc8bGkvPicpLnRleHQodikuYXBwZW5kVG8oJGFscGhhYmV0TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJ2xpJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLnNob3coKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5maW5kKCcuYWxwaGFiZXQtbGV0dGVyJykudGV4dChsZXR0ZXIpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRJdGVtcy5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcubWVudSAubGV2ZWwtMiBsaVtkYXRhLWFscGhhYmV0PScgKyBsZXR0ZXIgKyAnXScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvbmUoKS5hcHBlbmRUbygkYWxwaGFiZXRJdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXdyYXBwZXIgLmxldmVsLTMgLmljb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaWNvbi1tZW51LXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LXBsdXMnKS5hZGRDbGFzcygnaWNvbi1tZW51LW1pbnVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LW1pbnVzJykuYWRkQ2xhc3MoJ2ljb24tbWVudS1wbHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci12ZXJ0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci12ZXJ0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci1wYydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXBjJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXJlbGF0ZWQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saXN0LWl0ZW0tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbi8vICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5jYXRhbG9nLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciAkcGFyZW50O1xyXG4gICAgICAgICQoJy5jYXRhbG9nLXNsaWRlciAucHJvZHVjdC1saXN0LWl0ZW0nKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZFRvKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IG9mZnNldC50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0Jzogb2Zmc2V0LmxlZnQgKyAyMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFwcGVuZFRvKCRwYXJlbnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzogJ2luaXRpYWwnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5wcm9tby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmNhcnQgLnByb2R1Y3QtZGF0YS1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRiYWNrVG9wKCkge1xyXG4gICAgICAgIHZhciBqUXVlcnliYWNrVG9Ub3AgPSAkKFwiI2JhY2stdG9wXCIpO1xyXG4gICAgICAgIHZhciByaWdodCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIDEyNTApIC8gMiAtIDUwO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5jc3MoJ3JpZ2h0JywgcmlnaHQpO1xyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3Aub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvZHVjdCgpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkZXItc3RhcnMtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtaW5mbyAudGFicycpLnRhYnMoJ3NlbGVjdF90YWInLCAncmV2aWV3cycpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWNvbnRlbnQtc2hvdy1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwtcmFkaW8nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWNvbW1vbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNpemUnKS5hZGRDbGFzcygnbm8taW5wdXRzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLXBlcnNvbmFsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1jb21tb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1zaXplJykucmVtb3ZlQ2xhc3MoJ25vLWlucHV0cycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbC1yYWRpb1tjaGVja2VkXScpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IGlucHV0Jykub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtZGF0YS1saXN0JykuZmluZCgnLmZvY3VzZWQnKS5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIsIC5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyMScpO1xyXG4gICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgaW5wdXQnKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlciwgLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIxJyk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwiMFwiICkge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlcicpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKS5maW5kKCcudG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBpZiAoJHRvb2x0aXAubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5kID0gJCh0aGlzKS5oYXNDbGFzcygnY291bnQnKSA/ICdpbnB1dCcgOiAnbGFiZWwnO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKGZpbmQpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJHRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1zaG93LWFsbCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LWhpZGRlbicpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0LXNob3cnKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dC1oaWRlJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbicpLlxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKCdpY29uLXByb2R1Y3Qtc2l6ZS1zaG93LWFsbCBpY29uLXByb2R1Y3Qtc2l6ZS1oaWRlLWFsbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCB1bC5jb2xvciBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI2RhdGEgLnRvb2x0aXAsIC5wcm9kdWN0LWhlYWRpbmcgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdmFyICRoZWxwID0gJCgnPHNwYW4vPicsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICc/JyxcclxuICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogJ2hlbHAnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGhlbHAuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmhlbHAnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtdm90ZSAuZmEnKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRpbmcudG9nZ2xlci5jbG9zZWQnKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG4gICAgICAgICQoJy5qcy1wcmludGFibGUtcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdC1wcmludGFibGUtcmVtb3ZlOnZpc2libGUnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtcGVyc29uYWxpemUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJpbnRhYmxlLWFkZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LXByaW50YWJsZS1yZW1vdmUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LXBlcnNvbmFsaXplJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1jb2xvci1yZW1vdmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtY29sb3JzJyk7XHJcbiAgICAgICAgICAgIHZhciAkb3B0aW9uYWwgPSAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLW9wdGlvbmFsJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgaWYgKCRvcHRpb25hbC5maW5kKCdsaScpLmxlbmd0aCA9PSAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICRvcHRpb25hbC5oaWRlKCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJG9wdGlvbmFsLmZpbmQoJ2xpJykubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1hZGQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtY29sb3ItYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWNvbG9ycycpO1xyXG4gICAgICAgICAgICB2YXIgJG9wdGlvbmFsID0gJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1vcHRpb25hbCcpO1xyXG4vLyAgICAgICAgICAgICRvcHRpb25hbC5zaG93KCk7XHJcbiAgICAgICAgICAgICRvcHRpb25hbC5maW5kKCdsaS50ZW1wbGF0ZScpXHJcbiAgICAgICAgICAgICAgICAuY2xvbmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygndGVtcGxhdGUnKVxyXG4vLyAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJG9wdGlvbmFsLmZpbmQoJ3VsJykpO1xyXG4gICAgICAgICAgICAgICAgLmluc2VydEJlZm9yZSgkb3B0aW9uYWwuZmluZCgnbGkudGVtcGxhdGUnKSk7XHJcbiAgICAgICAgICAgIGlmICgkb3B0aW9uYWwuZmluZCgnbGknKS5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1hZGQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kZXNpZ24tc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhdGFsb2coKSB7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItd3JhcHBlci5jbG9zZWQnKS5maW5kKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLmhpZGUoKTtcclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQucmFuZ2UnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZpbHRlci1yYW5nZVwiKTtcclxuICAgICAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogWzEwMDAsIDk5OTldLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heCc6IDIwMDAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgc25hcFZhbHVlcyA9IFtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS1mcm9tJyksXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtdG8nKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwVmFsdWVzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUZXh0YXJlYSgpIHtcclxuICAgICAgICAkKCd0ZXh0YXJlYVtkYXRhLW1heF0nKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ21heCcpKTtcclxuICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuID49IG1heCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsLnN1YnN0cmluZygwLCBtYXgpKTtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgnY291bnRlcicpKS50ZXh0KG1heCAtIGxlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UmVnaW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKCQuY29va2llKCdlc2NhcGVyLXJlZ2lvbi1zZWxlY3RlZCcpKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjanMtcmVnaW9uLWNvbmZpcm0tbGlua1wiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJywgMSwge2V4cGlyZXM6IDcsIHBhdGg6ICcvJ30pO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLnBvcHVwLXJlZ2lvbi1jb25maXJtLWNoYW5nZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpLm9wZW4oJCgnI3JlZ2lvbi1zZWxlY3QtcG9wdXAnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBvcHVwLXJlZ2lvbi1jb25maXJtLXN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGkuYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCcucmVnaW9uLXNlbGVjdF9jaXR5JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2pzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5tb3VzZWVudGVyKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5qcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKSlcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2pzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpO1xyXG4gICAgICAgICAgICAkKCcucmVnaW9uLXNlbGVjdCA+IGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucmVnaW9uLXNlbGVjdF9jaXR5JylcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJy5yZWdpb24tc2VsZWN0LXdyYXBwZXItdHdvLWNvbHVtbnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0X2NpdHknKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICcnO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJMZXR0ZXIgPSAkKHRoaXMpLnRleHQoKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyID0gY3VyTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGV0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQodGhpcykucGFyZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGV0dGVyID0gJyc7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3Q6bm90KC5yZWdpb24tc2VsZWN0X3Bpbm5lZCkgPiBsaSA+IHNwYW4nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGN1ckxldHRlciA9ICQodGhpcykudGV4dCgpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY3VyTGV0dGVyICE9IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyID0gY3VyTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdyZWdpb24tbGV0dGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGV0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdF9jaXR5LCAucmVnaW9uLXNlbGVjdC13cmFwcGVyJykucGVyZmVjdFNjcm9sbGJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAoY29udGFpbmVySWQpIHtcclxuICAgICAgICBpZiAoJCgnLm1hcCcpLmxlbmd0aCA9PSAwIHx8ICQoJyMnICsgY29udGFpbmVySWQpLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50cygpLmZpbmQoJy5wb2ludHMtaXRlbS10aW1lJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyICRsaXN0ID0gJCh0aGlzKS5maW5kKCdkbCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAkbGlzdC5zbGlkZURvd24oKSA6ICRsaXN0LnNsaWRlVXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaWNvblNtYWxsID0gJ2ltZy9tYXAtbG9nby5wbmcnO1xyXG4gICAgICAgIHZhciBpY29uQmlnID0gJ2ltZy9tYXAtbG9nby1iaWcucG5nJztcclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCksIHtcclxuICAgICAgICAgICAgY2VudGVyOiB7bGF0OiA1Ni4zMTAzMzksIGxuZzogNDR9LFxyXG4gICAgICAgICAgICB6b29tOiAxMixcclxuICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHpvb21Db250cm9sOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBtYXJrZXJzID0gW107XHJcbiAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLnBvaW50cy1pdGVtJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjoge2xhdDogcGFyc2VGbG9hdCgkdGhpcy5kYXRhKCdsYXQnKSksIGxuZzogcGFyc2VGbG9hdCgkdGhpcy5kYXRhKCdsbmcnKSl9LFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvblNtYWxsLFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzW2pdLnNldEljb24oaWNvblNtYWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbihpY29uQmlnKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5wb2ludHMtaXRlbS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcuanMtc2Nyb2xsYmFyJykuc2Nyb2xsVG9wKCR0aGlzLnBvc2l0aW9uKCkudG9wKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICR0aGlzLmZpbmQoJy5wb2ludHMtaXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXJrZXIsICdjbGljaycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3RhYnMnKS5iaW5kKCdlYXN5dGFiczphZnRlcicsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcCwgJ3Jlc2l6ZScpOyAgICAgXHJcbiAgICAgICAgICAgIGluaXRNYXAoY29udGFpbmVySWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDYXJ0KCkge1xyXG4gICAgICAgICQoJy5jYXJ0IC50b29sdGlwJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGVja291dCgpIHtcclxuICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmNoZWNrb3V0LXN1bW1hcnktZm9ybSBpbnB1dFtuYW1lPVwic2VsZWN0ZWQtcGF5bWVudFwiXScpLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbCgkKHRoaXMpLmRhdGEoJ3BheW1lbnQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGkuYWN0aXZlJykuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TG9naW4oKSB7XHJcbiAgICAgICAgJCgnLmxvZ2luLWxhYmVsLXdyYXBwZXIgbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWJvdXQtYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmFib3V0LXdyYXBwZXInKS5maW5kKCcuYWJvdXQtaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWFib3V0LXNwb3J0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCkucGFyZW50KCkuZmluZCgnLmFib3V0LWlubmVyJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1hYm91dC1pbmZvJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCkubmV4dCgpLnNob3coKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYWJvdXQtcm93JykuZmluZCgnLmlucHV0LXZpZXcsIC5zZWxlY3QtdmlldycpLnJlbW92ZUNsYXNzKCdpbnB1dC12aWV3IHNlbGVjdC12aWV3Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcuYWJvdXQgLmFscGhhYmV0Jyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5hYm91dCAuYWJvdXQtc3BvcnQtbGlzdCBsaVtkYXRhLWFscGhhYmV0XScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgYWxwaGFiZXQucHVzaCgkKHRoaXMpLmRhdGEoJ2FscGhhYmV0JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQuZmlsdGVyKGZ1bmN0aW9uIChpdG0sIGksIGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkgPT0gYS5pbmRleE9mKGl0bSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQuc29ydCgpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coYWxwaGFiZXQpO1xyXG4gICAgICAgICQuZWFjaChhbHBoYWJldCwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICAgICAgJCgnPGxpLz4nKS50ZXh0KHYpLmFwcGVuZFRvKCRhbHBoYWJldE1lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNsaWNrXHJcbiAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCdsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGknKS5yZW1vdmVDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGknKS5yZW1vdmVDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpW2RhdGEtYWxwaGFiZXQhPScgKyBsZXR0ZXIgKyAnXScpLmFkZENsYXNzKCdhYm91dC1zaG9ydC1saXN0LW11dGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdFNoYXJlKCkge1xyXG4gICAgICAgICQoJy5hY2NvcmRpb24taXRlbS5jbG9zZWQnKS5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmFjY29yZGlvbi1pdGVtLWhlYWRpbmcnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICR0aGlzLnBhcmVudCgnLmFjY29yZGlvbi1pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciAkd3JhcHBlciA9ICR0aGlzLnBhcmVudHMoJy5hY2NvcmRpb24td3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZiAoJHBhcmVudC5oYXNDbGFzcygnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgICR3cmFwcGVyLmZpbmQoJy5hY2NvcmRpb24taXRlbScpLmFkZENsYXNzKCdjbG9zZWQnKS5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmFjY29yZGlvbi1pdGVtLWlubmVyJykuc2xpZGVEb3duKDIwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHdyYXBwZXIucGFyZW50cygnLnBvcHVwJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRwYXJlbnQub2Zmc2V0KCkudG9wIC0gNTB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0S2V5U2hvdFZSKCkge1xyXG4gICAgICAgICQoJy5qcy0zZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgIHZhciAkdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lT2ZEaXYgPSBcIjNkX1wiICsgaTtcclxuICAgICAgICAgICAgJHQuYXR0cignaWQnLCBuYW1lT2ZEaXYpO1xyXG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9ICczZC8nICsgJHQuZGF0YSgnZm9sZGVyJyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3UG9ydFdpZHRoID0gJHQuZGF0YSgnd2lkdGgnKTtcclxuICAgICAgICAgICAgdmFyIHZpZXdQb3J0SGVpZ2h0ID0gJHQuZGF0YSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRkZGRkZcIjtcclxuICAgICAgICAgICAgdmFyIHVDb3VudCA9IDM2O1xyXG4gICAgICAgICAgICB2YXIgdkNvdW50ID0gMTtcclxuICAgICAgICAgICAgdmFyIHVXcmFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHZXcmFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB1TW91c2VTZW5zaXRpdml0eSA9IC0wLjE7XHJcbiAgICAgICAgICAgIHZhciB2TW91c2VTZW5zaXRpdml0eSA9IDE7XHJcbiAgICAgICAgICAgIHZhciB1U3RhcnRJbmRleCA9IDE4O1xyXG4gICAgICAgICAgICB2YXIgdlN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgbWluWm9vbSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBtYXhab29tID0gMjtcclxuICAgICAgICAgICAgdmFyIHJvdGF0aW9uRGFtcGluZyA9IDAuOTY7XHJcbiAgICAgICAgICAgIHZhciBkb3duU2NhbGVUb0Jyb3dzZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgYWRkRG93blNjYWxlR1VJQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBkb3dubG9hZE9uSW50ZXJhY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGltYWdlRXh0ZW5zaW9uID0gXCJqcGdcIjtcclxuICAgICAgICAgICAgdmFyIHNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGxvYWRpbmdJY29uID0gXCJcIjsgLy8gU2V0IHRvIGVtcHR5IHN0cmluZyBmb3IgZGVmYXVsdCBpY29uLlxyXG4gICAgICAgICAgICB2YXIgYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTsgLy8gRG91YmxlLWNsaWNrIGluIGRlc2t0b3AgYnJvd3NlcnMgZm9yIGZ1bGxzY3JlZW4uXHJcbiAgICAgICAgICAgIHZhciB1UmV2ZXJzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdlJldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGhvdHNwb3RzID0ge307XHJcblxyXG4gICAgICAgICAgICBuZXcga2V5c2hvdFZSKG5hbWVPZkRpdixmb2xkZXJOYW1lLHZpZXdQb3J0V2lkdGgsdmlld1BvcnRIZWlnaHQsYmFja2dyb3VuZENvbG9yLHVDb3VudCx2Q291bnQsdVdyYXAsdldyYXAsdU1vdXNlU2Vuc2l0aXZpdHksdk1vdXNlU2Vuc2l0aXZpdHksdVN0YXJ0SW5kZXgsdlN0YXJ0SW5kZXgsbWluWm9vbSxtYXhab29tLHJvdGF0aW9uRGFtcGluZyxkb3duU2NhbGVUb0Jyb3dzZXIsYWRkRG93blNjYWxlR1VJQnV0dG9uLGRvd25sb2FkT25JbnRlcmFjdGlvbixpbWFnZUV4dGVuc2lvbixzaG93TG9hZGluZyxsb2FkaW5nSWNvbixhbGxvd0Z1bGxzY3JlZW4sdVJldmVyc2UsdlJldmVyc2UsaG90c3BvdHMpO1xyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbn0pOyJdLCJmaWxlIjoiY29tbW9uLmpzIn0=
