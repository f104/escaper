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
        $('select, input[type=checkbox], input[type=radio], input[type=number], input[type=file]').styler();
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
        $('.js-active-on-click').on('click', function() {
            if (!$(this).hasClass('active')) {
                $(this).parents('.js-active-on-click__wrapper').find('.active').removeClass('active');
                $(this).addClass('active');
            }
        });
        
        $('.js-toggle-next').click(function (e) {
            $(this).toggleClass('closed');
            $(this).hasClass('closed')
                    ? $(this).next().slideUp()
                    : $(this).next().slideDown();
        });
        $('.js-toggle-next.closed').next().slideUp();
        
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
        $.fn.qtip.zindex = 150000;
        $('.js-qtip').each(function () {
            if ($(this).data('qtip-el')) {
                var text = $($(this).data('qtip-el'));
                $(this).qtip({
                    style: {classes: 'qtip-custom'},
                    position: {
                        my: 'bottom center',
                        at: 'top center',
                    },
                    content: {
                        text: text
                    },
                    hide: {
                        fixed: true,
                        delay: 300
                    }
                });
            }
        });
        $('.js-popup-close').click(function (e) {
            $.fancybox.close();
        });
        $(document).on('af_complete', function(event, response) {
            if (response.success) {
                $.fancybox.close();
            }
        });
        $(document).on('tickets_comment_save', function(event, response) {
            if (response.success) {
                $.fancybox.close();
            }
        });
        // temporary, must be deleted
        $('.js-btn-register').click(function (e) {
            e.preventDefault();
            $.fancybox.close();
            $.fancybox.open({
                src: '#about-popup',
                type: 'inline'
            });
        });
        // antispam
        setTimeout(function () {
            $('input[name="email3"],input[name="info"],input[name="text"]').attr('value', '').val('');
        }, 5000);
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
        $('.product-material-slider').each(function(){
            var nav = $(this).data('nav');
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: nav
            });
        });
        $('.product-material-slider-nav').each(function(){
            var nav = $(this).data('nav');
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: nav,
                focusOnSelect: true,
                infinite: false
            });
        });
        $('.product-material-print-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
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
        $('.cart-popup-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            focusOnSelect: false,
            draggable: false,
            infinite: false
        });
        // recalc slisk slider and styler on show tab
        $('.cart-popup .tabs').tabs({
            onShow: function ($tab) {
                $tab.find('.cart-popup-slider, .slick-slider').slick('setPosition');
                setTimeout(function () {
                    $tab.find('select').trigger('refresh');
                }, 500);
                initKeyShotVR();
            }
        });
        // fix all tabs active in hudden div
//        $('.cart-popup .tabs .tab').first().find('a').click()
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
        $('.js-product-data-list').slick({
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
            if ($(this).val() != "0") {
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
        $('#data .tooltip, .product-heading .tooltip, .product-material-price .tooltip').each(function (i) {
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
        $('.js-personal__wrapper_hide').hide();
        $('.js-personal__show').on('click', function () {
            $(this).parents('.js-personal').find('.js-personal__wrapper_show').show();
            $(this).parents('.js-personal').find('.js-personal__wrapper_hide').hide();
        });
        $('.js-personal__hide').on('click', function () {
            $(this).parents('.js-personal').find('.js-personal__wrapper_show').hide();
            $(this).parents('.js-personal').find('.js-personal__wrapper_hide').show();
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
        $('.accordion-item-heading').click(function () {
            var $this = $(this);
            var $parent = $this.parent('.accordion-item');
            var $wrapper = $this.parents('.accordion-wrapper');
            if ($parent.hasClass('closed')) {
                $wrapper.find('.accordion-item').addClass('closed').find('.accordion-item-inner').slideUp(200);
                $parent.removeClass('closed');
                $parent.find('.accordion-item-inner').slideDown(200);
                if ($wrapper.parents('.popup').length == 0) {
                    setTimeout(function () {
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
        $('.js-3d').each(function (i) {
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

            new keyshotVR(nameOfDiv, folderName, viewPortWidth, viewPortHeight, backgroundColor, uCount, vCount, uWrap, vWrap, uMouseSensitivity, vMouseSensitivity, uStartIndex, vStartIndex, minZoom, maxZoom, rotationDamping, downScaleToBrowser, addDownScaleGUIButton, downloadOnInteraction, imageExtension, showLoading, loadingIcon, allowFullscreen, uReverse, vReverse, hotspots);
        });
    }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICBpbml0TG9naW4oKTtcclxuICAgICAgICBpbml0U2hhcmUoKTtcclxuICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1maWxlXScpLnN0eWxlcigpO1xyXG4gICAgICAgICQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxiYXIoKTtcclxuICAgICAgICAkKCcuanMtdmFsaWRhdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgJGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgJHN1Ym1pdCA9ICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKTtcclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS5vbigna2V5dXAgYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtLnZhbGlkKCkgPyAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpIDogJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWN0aXZlLW9uLWNsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmpzLWFjdGl2ZS1vbi1jbGlja19fd3JhcHBlcicpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5qcy10b2dnbGUtbmV4dCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdjbG9zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtdG9nZ2xlLW5leHQuY2xvc2VkJykubmV4dCgpLnNsaWRlVXAoKTtcclxuICAgICAgICBcclxuICAgICAgICAkKCcuanMtbWFza19waG9uZScpLmlucHV0bWFzaygnKzcoOTk5KTk5OS05OS05OScpO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3ByaWNlJykuaW5wdXRtYXNrKCc5eyt9INGA0YPQsdC70LXQuScpO1xyXG4gICAgICAgICQoJyN0YWJzJykuZWFzeXRhYnMoKTtcclxuICAgICAgICAkKCcuanMtdG9vbHRpcGVkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuZm4ucXRpcC56aW5kZXggPSAxNTAwMDA7XHJcbiAgICAgICAgJCgnLmpzLXF0aXAnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncXRpcC1lbCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICQoJCh0aGlzKS5kYXRhKCdxdGlwLWVsJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5xdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2NsYXNzZXM6ICdxdGlwLWN1c3RvbSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAnYm90dG9tIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignYWZfY29tcGxldGUnLCBmdW5jdGlvbihldmVudCwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0aWNrZXRzX2NvbW1lbnRfc2F2ZScsIGZ1bmN0aW9uKGV2ZW50LCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGVtcG9yYXJ5LCBtdXN0IGJlIGRlbGV0ZWRcclxuICAgICAgICAkKCcuanMtYnRuLXJlZ2lzdGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3gub3Blbih7XHJcbiAgICAgICAgICAgICAgICBzcmM6ICcjYWJvdXQtcG9wdXAnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2lubGluZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gYW50aXNwYW1cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cImVtYWlsM1wiXSxpbnB1dFtuYW1lPVwiaW5mb1wiXSxpbnB1dFtuYW1lPVwidGV4dFwiXScpLmF0dHIoJ3ZhbHVlJywgJycpLnZhbCgnJyk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TWVudSgpIHtcclxuICAgICAgICAkKCcuaGVhZGVyLWNhdGFsb2ctc3dpdGNoZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcubWVudS1zbGlkZXInKS5zbGljaygncmVpbml0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUgLmZhbmN5Ym94LWNsb3NlLXNtYWxsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcubWVudScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBoaWRlIGFscGhhYmV0IG9uIGhvdmVyXHJcbiAgICAgICAgJCgnLm1lbnUgLmxldmVsLTEgPiBsaScpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBhbHBoYWJldCA9IFtdO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRNZW51ID0gJCgnLm1lbnUgLmFscGhhYmV0Jyk7XHJcbiAgICAgICAgdmFyICRhbHBoYWJldFdyYXBwZXIgPSAkKCcubWVudSAuYWxwaGFiZXQtd3JhcHBlcicpO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRJdGVtcyA9ICQoJy5tZW51IC5hbHBoYWJldC1pdGVtcycpO1xyXG4gICAgICAgIC8vIGNvbGxlY3RcclxuICAgICAgICAkKCcubWVudSAubGV2ZWwtMiBsaVtkYXRhLWFscGhhYmV0XScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgYWxwaGFiZXQucHVzaCgkKHRoaXMpLmRhdGEoJ2FscGhhYmV0JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQuZmlsdGVyKGZ1bmN0aW9uIChpdG0sIGksIGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkgPT0gYS5pbmRleE9mKGl0bSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQuc29ydCgpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coYWxwaGFiZXQpO1xyXG4gICAgICAgICQuZWFjaChhbHBoYWJldCwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICAgICAgJCgnPGxpLz4nKS50ZXh0KHYpLmFwcGVuZFRvKCRhbHBoYWJldE1lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNsaWNrXHJcbiAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCdsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5zaG93KCk7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuZmluZCgnLmFscGhhYmV0LWxldHRlcicpLnRleHQobGV0dGVyKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0SXRlbXMuZW1wdHkoKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUgLmxldmVsLTIgbGlbZGF0YS1hbHBoYWJldD0nICsgbGV0dGVyICsgJ10nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb25lKCkuYXBwZW5kVG8oJGFscGhhYmV0SXRlbXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVudS13cmFwcGVyIC5sZXZlbC0zIC5pY29uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2ljb24tbWVudS1wbHVzJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ljb24tbWVudS1wbHVzJykuYWRkQ2xhc3MoJ2ljb24tbWVudS1taW51cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygndWwnKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ljb24tbWVudS1taW51cycpLmFkZENsYXNzKCdpY29uLW1lbnUtcGx1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygndWwnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2xpY2tTbGlkZXIoKSB7XHJcbiAgICAgICAgJChcIi5pbmRleC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBhZ2ctc2xpZGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wcm9kdWN0LXNsaWRlcicsXHJcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LW1hdGVyaWFsLXNsaWRlcicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcykuZGF0YSgnbmF2Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBuYXZcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbWF0ZXJpYWwtc2xpZGVyLW5hdicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcykuZGF0YSgnbmF2Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbmF2LFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1tYXRlcmlhbC1wcmludC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci12ZXJ0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci12ZXJ0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci1wYydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXBjJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXJlbGF0ZWQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saXN0LWl0ZW0tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbi8vICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jYXJ0LXBvcHVwLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlY2FsYyBzbGlzayBzbGlkZXIgYW5kIHN0eWxlciBvbiBzaG93IHRhYlxyXG4gICAgICAgICQoJy5jYXJ0LXBvcHVwIC50YWJzJykudGFicyh7XHJcbiAgICAgICAgICAgIG9uU2hvdzogZnVuY3Rpb24gKCR0YWIpIHtcclxuICAgICAgICAgICAgICAgICR0YWIuZmluZCgnLmNhcnQtcG9wdXAtc2xpZGVyLCAuc2xpY2stc2xpZGVyJykuc2xpY2soJ3NldFBvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGFiLmZpbmQoJ3NlbGVjdCcpLnRyaWdnZXIoJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBmaXggYWxsIHRhYnMgYWN0aXZlIGluIGh1ZGRlbiBkaXZcclxuLy8gICAgICAgICQoJy5jYXJ0LXBvcHVwIC50YWJzIC50YWInKS5maXJzdCgpLmZpbmQoJ2EnKS5jbGljaygpXHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQ7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyIC5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkgLyAyIC0gNTA7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmNzcygncmlnaHQnLCByaWdodCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9kdWN0KCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRlci1zdGFycy1saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1pbmZvIC50YWJzJykudGFicygnc2VsZWN0X3RhYicsICdyZXZpZXdzJyk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtY29udGVudC1zaG93LW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbC1yYWRpbycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtY29tbW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZScpLmFkZENsYXNzKCduby1pbnB1dHMnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWNvbW1vbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNpemUnKS5yZW1vdmVDbGFzcygnbm8taW5wdXRzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLXBlcnNvbmFsLXJhZGlvW2NoZWNrZWRdJykuY2xpY2soKTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgaW5wdXQnKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3QnKS5maW5kKCcuZm9jdXNlZCcpLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlciwgLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIxJyk7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCBpbnB1dCcpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyLCAucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlcjEnKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQodGhpcykuZmluZCgnLnRvb2x0aXAnKTtcclxuICAgICAgICAgICAgaWYgKCR0b29sdGlwLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmluZCA9ICQodGhpcykuaGFzQ2xhc3MoJ2NvdW50JykgPyAnaW5wdXQnIDogJ2xhYmVsJztcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChmaW5kKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dC1zaG93JykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LWhpZGRlbicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtaGlkZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmljb24nKS5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcygnaWNvbi1wcm9kdWN0LXNpemUtc2hvdy1hbGwgaWNvbi1wcm9kdWN0LXNpemUtaGlkZS1hbGwnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgdWwuY29sb3IgbGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNkYXRhIC50b29sdGlwLCAucHJvZHVjdC1oZWFkaW5nIC50b29sdGlwLCAucHJvZHVjdC1tYXRlcmlhbC1wcmljZSAudG9vbHRpcCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgJGhlbHAgPSAkKCc8c3Bhbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJz8nLFxyXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiAnaGVscCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaGVscC5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuaGVscCcpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy12b3RlIC5mYScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2QWxsKCcuZmEnKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkaW5nLnRvZ2dsZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykubmV4dCgpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyLmNsb3NlZCcpLm5leHQoKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmpzLXByaW50YWJsZS1yZW1vdmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgaWYgKCQoJy5wcm9kdWN0LXByaW50YWJsZS1yZW1vdmU6dmlzaWJsZScpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1wZXJzb25hbGl6ZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wcmludGFibGUtYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtcHJpbnRhYmxlLXJlbW92ZScpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtcGVyc29uYWxpemUnKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWNvbG9yLXJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1jb2xvcnMnKTtcclxuICAgICAgICAgICAgdmFyICRvcHRpb25hbCA9ICRwYXJlbnQuZmluZCgnLnByb2R1Y3QtY29sb3Itb3B0aW9uYWwnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICBpZiAoJG9wdGlvbmFsLmZpbmQoJ2xpJykubGVuZ3RoID09IDEpIHtcclxuLy8gICAgICAgICAgICAgICAgJG9wdGlvbmFsLmhpZGUoKTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkb3B0aW9uYWwuZmluZCgnbGknKS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLWFkZCcpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1jb2xvci1hZGQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtY29sb3JzJyk7XHJcbiAgICAgICAgICAgIHZhciAkb3B0aW9uYWwgPSAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLW9wdGlvbmFsJyk7XHJcbi8vICAgICAgICAgICAgJG9wdGlvbmFsLnNob3coKTtcclxuICAgICAgICAgICAgJG9wdGlvbmFsLmZpbmQoJ2xpLnRlbXBsYXRlJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3RlbXBsYXRlJylcclxuLy8gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCRvcHRpb25hbC5maW5kKCd1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCRvcHRpb25hbC5maW5kKCdsaS50ZW1wbGF0ZScpKTtcclxuICAgICAgICAgICAgaWYgKCRvcHRpb25hbC5maW5kKCdsaScpLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLWFkZCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRlc2lnbi1zdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci13cmFwcGVyLmNsb3NlZCcpLmZpbmQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdC1maWx0ZXItY29udGVudC5yYW5nZScpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmlsdGVyLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMTAwMCwgOTk5OV0sXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLWZyb20nKSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS10bycpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHNuYXBWYWx1ZXNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRleHRhcmVhKCkge1xyXG4gICAgICAgICQoJ3RleHRhcmVhW2RhdGEtbWF4XScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh2YWwuc3Vic3RyaW5nKDAsIG1heCkpO1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dCgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQobWF4IC0gbGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSZWdpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJykpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy1yZWdpb24tY29uZmlybS1saW5rXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnLCAxLCB7ZXhwaXJlczogNywgcGF0aDogJy8nfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tY2hhbmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCkub3BlbigkKCcjcmVnaW9uLXNlbGVjdC1wb3B1cCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaScpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLmpzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJyc7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ckxldHRlciA9ICQodGhpcykudGV4dCgpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckxldHRlciAhPSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncmVnaW9uLWxldHRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKS5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSAnJztcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdDpub3QoLnJlZ2lvbi1zZWxlY3RfcGlubmVkKSA+IGxpID4gc3BhbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0X2NpdHksIC5yZWdpb24tc2VsZWN0LXdyYXBwZXInKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcChjb250YWluZXJJZCkge1xyXG4gICAgICAgIGlmICgkKCcubWFwJykubGVuZ3RoID09IDAgfHwgJCgnIycgKyBjb250YWluZXJJZCkubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnRzKCkuZmluZCgnLnBvaW50cy1pdGVtLXRpbWUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJGxpc3QgPSAkKHRoaXMpLmZpbmQoJ2RsJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICRsaXN0LnNsaWRlRG93bigpIDogJGxpc3Quc2xpZGVVcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpY29uU21hbGwgPSAnaW1nL21hcC1sb2dvLnBuZyc7XHJcbiAgICAgICAgdmFyIGljb25CaWcgPSAnaW1nL21hcC1sb2dvLWJpZy5wbmcnO1xyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IHtsYXQ6IDU2LjMxMDMzOSwgbG5nOiA0NH0sXHJcbiAgICAgICAgICAgIHpvb206IDEyLFxyXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcucG9pbnRzLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xhdCcpKSwgbG5nOiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xuZycpKX0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uU21hbGwsXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbal0uc2V0SWNvbihpY29uU21hbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uKGljb25CaWcpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLnBvaW50cy1pdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoJHRoaXMucG9zaXRpb24oKS50b3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHRoaXMuZmluZCgnLnBvaW50cy1pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcmtlciwgJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjdGFicycpLmJpbmQoJ2Vhc3l0YWJzOmFmdGVyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVzaXplJyk7ICAgICBcclxuICAgICAgICAgICAgaW5pdE1hcChjb250YWluZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhcnQoKSB7XHJcbiAgICAgICAgJCgnLmNhcnQgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBlcnNvbmFsX193cmFwcGVyX2hpZGUnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLmpzLXBlcnNvbmFsX19zaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9zaG93Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9oaWRlJykuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wZXJzb25hbF9faGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuanMtcGVyc29uYWwnKS5maW5kKCcuanMtcGVyc29uYWxfX3dyYXBwZXJfc2hvdycpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuanMtcGVyc29uYWwnKS5maW5kKCcuanMtcGVyc29uYWxfX3dyYXBwZXJfaGlkZScpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hlY2tvdXQoKSB7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5jaGVja291dC1zdW1tYXJ5LWZvcm0gaW5wdXRbbmFtZT1cInNlbGVjdGVkLXBheW1lbnRcIl0nKS5cclxuICAgICAgICAgICAgICAgICAgICB2YWwoJCh0aGlzKS5kYXRhKCdwYXltZW50JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpLmFjdGl2ZScpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdExvZ2luKCkge1xyXG4gICAgICAgICQoJy5sb2dpbi1sYWJlbC13cmFwcGVyIGxhYmVsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWFib3V0LWFkZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5hYm91dC13cmFwcGVyJykuZmluZCgnLmFib3V0LWlubmVyJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1hYm91dC1zcG9ydCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpLnBhcmVudCgpLmZpbmQoJy5hYm91dC1pbm5lcicpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWJvdXQtaW5mbycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpLm5leHQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmFib3V0LXJvdycpLmZpbmQoJy5pbnB1dC12aWV3LCAuc2VsZWN0LXZpZXcnKS5yZW1vdmVDbGFzcygnaW5wdXQtdmlldyBzZWxlY3QtdmlldycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBhbHBoYWJldCA9IFtdO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRNZW51ID0gJCgnLmFib3V0IC5hbHBoYWJldCcpO1xyXG4gICAgICAgIC8vIGNvbGxlY3RcclxuICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGlbZGF0YS1hbHBoYWJldF0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0LnB1c2goJCh0aGlzKS5kYXRhKCdhbHBoYWJldCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LmZpbHRlcihmdW5jdGlvbiAoaXRtLCBpLCBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpID09IGEuaW5kZXhPZihpdG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0LnNvcnQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuICAgICAgICAkLmVhY2goYWxwaGFiZXQsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgICQoJzxsaS8+JykudGV4dCh2KS5hcHBlbmRUbygkYWxwaGFiZXRNZW51KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2Fib3V0LXNob3J0LWxpc3QtbXV0ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2Fib3V0LXNob3J0LWxpc3QtbXV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICQoJy5hYm91dCAuYWJvdXQtc3BvcnQtbGlzdCBsaVtkYXRhLWFscGhhYmV0IT0nICsgbGV0dGVyICsgJ10nKS5hZGRDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNoYXJlKCkge1xyXG4gICAgICAgICQoJy5hY2NvcmRpb24taXRlbS5jbG9zZWQnKS5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmFjY29yZGlvbi1pdGVtLWhlYWRpbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJHRoaXMucGFyZW50KCcuYWNjb3JkaW9uLWl0ZW0nKTtcclxuICAgICAgICAgICAgdmFyICR3cmFwcGVyID0gJHRoaXMucGFyZW50cygnLmFjY29yZGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICgkcGFyZW50Lmhhc0NsYXNzKCdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuZmluZCgnLmFjY29yZGlvbi1pdGVtJykuYWRkQ2xhc3MoJ2Nsb3NlZCcpLmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZURvd24oMjAwKTtcclxuICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5wYXJlbnRzKCcucG9wdXAnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRwYXJlbnQub2Zmc2V0KCkudG9wIC0gNTB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRLZXlTaG90VlIoKSB7XHJcbiAgICAgICAgJCgnLmpzLTNkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZU9mRGl2ID0gXCIzZF9cIiArIGk7XHJcbiAgICAgICAgICAgICR0LmF0dHIoJ2lkJywgbmFtZU9mRGl2KTtcclxuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSAnM2QvJyArICR0LmRhdGEoJ2ZvbGRlcicpO1xyXG4gICAgICAgICAgICB2YXIgdmlld1BvcnRXaWR0aCA9ICR0LmRhdGEoJ3dpZHRoJyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3UG9ydEhlaWdodCA9ICR0LmRhdGEoJ2hlaWdodCcpO1xyXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCI7XHJcbiAgICAgICAgICAgIHZhciB1Q291bnQgPSAzNjtcclxuICAgICAgICAgICAgdmFyIHZDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHZhciB1V3JhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciB2V3JhcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdU1vdXNlU2Vuc2l0aXZpdHkgPSAtMC4xO1xyXG4gICAgICAgICAgICB2YXIgdk1vdXNlU2Vuc2l0aXZpdHkgPSAxO1xyXG4gICAgICAgICAgICB2YXIgdVN0YXJ0SW5kZXggPSAxODtcclxuICAgICAgICAgICAgdmFyIHZTdGFydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIG1pblpvb20gPSAxO1xyXG4gICAgICAgICAgICB2YXIgbWF4Wm9vbSA9IDI7XHJcbiAgICAgICAgICAgIHZhciByb3RhdGlvbkRhbXBpbmcgPSAwLjk2O1xyXG4gICAgICAgICAgICB2YXIgZG93blNjYWxlVG9Ccm93c2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZERvd25TY2FsZUdVSUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZG93bmxvYWRPbkludGVyYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZUV4dGVuc2lvbiA9IFwianBnXCI7XHJcbiAgICAgICAgICAgIHZhciBzaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBsb2FkaW5nSWNvbiA9IFwiXCI7IC8vIFNldCB0byBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgaWNvbi5cclxuICAgICAgICAgICAgdmFyIGFsbG93RnVsbHNjcmVlbiA9IHRydWU7IC8vIERvdWJsZS1jbGljayBpbiBkZXNrdG9wIGJyb3dzZXJzIGZvciBmdWxsc2NyZWVuLlxyXG4gICAgICAgICAgICB2YXIgdVJldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHZSZXZlcnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBob3RzcG90cyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgbmV3IGtleXNob3RWUihuYW1lT2ZEaXYsIGZvbGRlck5hbWUsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIHVDb3VudCwgdkNvdW50LCB1V3JhcCwgdldyYXAsIHVNb3VzZVNlbnNpdGl2aXR5LCB2TW91c2VTZW5zaXRpdml0eSwgdVN0YXJ0SW5kZXgsIHZTdGFydEluZGV4LCBtaW5ab29tLCBtYXhab29tLCByb3RhdGlvbkRhbXBpbmcsIGRvd25TY2FsZVRvQnJvd3NlciwgYWRkRG93blNjYWxlR1VJQnV0dG9uLCBkb3dubG9hZE9uSW50ZXJhY3Rpb24sIGltYWdlRXh0ZW5zaW9uLCBzaG93TG9hZGluZywgbG9hZGluZ0ljb24sIGFsbG93RnVsbHNjcmVlbiwgdVJldmVyc2UsIHZSZXZlcnNlLCBob3RzcG90cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
