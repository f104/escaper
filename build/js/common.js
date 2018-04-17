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
        $('.js-active-on-click').on('click', function () {
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
        $(document).on('af_complete', function (event, response) {
            if (response.success) {
                $.fancybox.close();
            }
        });
        $(document).on('tickets_comment_save', function (event, response) {
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
        $('.product-material-slider').each(function () {
            var nav = $(this).data('nav');
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: nav
            });
        });
        $('.product-material-slider-nav').each(function () {
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
        $('.pagg-slider-pc').on('beforeChange', function () {
            $('.pagg-slider-pc-wrapper .pagg-slider-pc-text-inner').fadeOut();
        });
        $('.pagg-slider-pc').on('afterChange', function (event, slick, currentSlide) {
            var text = $(slick.$slides[currentSlide]).find('.pagg-slider-pc-slide-text');
            if (text.length) {
                text = text.html();
            } else {
                text = '';
            }
            $('.product-slider-pc-type span').removeClass('active');
            if (currentSlide === 0) {
                $('.product-slider-pc-type span:first-of-type').addClass('active');
            } else {
                $('.product-slider-pc-type span:last-of-type').addClass('active');
            }
            $('.pagg-slider-pc-wrapper .pagg-slider-pc-text-inner').html(text);
            $('.pagg-slider-pc-wrapper .pagg-slider-pc-text-inner').fadeIn();
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
        $('.list-item-slider-new').slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
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
                    $(this).find('.list-item-slider, .list-item-slider-new').slick('setPosition');
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
        $('.product-panel_content_printable-wrapper').each(function () {
            var $sel = $(this).find('select');
            var $ul = $(this).find('.product-printable');
            $sel.on('change', function () {
                $ul.show();
            });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICBpbml0TG9naW4oKTtcclxuICAgICAgICBpbml0U2hhcmUoKTtcclxuICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1maWxlXScpLnN0eWxlcigpO1xyXG4gICAgICAgICQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxiYXIoKTtcclxuICAgICAgICAkKCcuanMtdmFsaWRhdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgJGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgJHN1Ym1pdCA9ICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKTtcclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS5vbigna2V5dXAgYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtLnZhbGlkKCkgPyAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpIDogJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWN0aXZlLW9uLWNsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1hY3RpdmUtb24tY2xpY2tfX3dyYXBwZXInKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmpzLXRvZ2dsZS1uZXh0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy10b2dnbGUtbmV4dC5jbG9zZWQnKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG5cclxuICAgICAgICAkKCcuanMtbWFza19waG9uZScpLmlucHV0bWFzaygnKzcoOTk5KTk5OS05OS05OScpO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3ByaWNlJykuaW5wdXRtYXNrKCc5eyt9INGA0YPQsdC70LXQuScpO1xyXG4gICAgICAgICQoJyN0YWJzJykuZWFzeXRhYnMoKTtcclxuICAgICAgICAkKCcuanMtdG9vbHRpcGVkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuZm4ucXRpcC56aW5kZXggPSAxNTAwMDA7XHJcbiAgICAgICAgJCgnLmpzLXF0aXAnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncXRpcC1lbCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICQoJCh0aGlzKS5kYXRhKCdxdGlwLWVsJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5xdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2NsYXNzZXM6ICdxdGlwLWN1c3RvbSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAnYm90dG9tIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignYWZfY29tcGxldGUnLCBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigndGlja2V0c19jb21tZW50X3NhdmUnLCBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0ZW1wb3JhcnksIG11c3QgYmUgZGVsZXRlZFxyXG4gICAgICAgICQoJy5qcy1idG4tcmVnaXN0ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHNyYzogJyNhYm91dC1wb3B1cCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBhbnRpc3BhbVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZW1haWwzXCJdLGlucHV0W25hbWU9XCJpbmZvXCJdLGlucHV0W25hbWU9XCJ0ZXh0XCJdJykuYXR0cigndmFsdWUnLCAnJykudmFsKCcnKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNZW51KCkge1xyXG4gICAgICAgICQoJy5oZWFkZXItY2F0YWxvZy1zd2l0Y2hlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKCdyZWluaXQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVudSAuZmFuY3lib3gtY2xvc2Utc21hbGwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGhpZGUgYWxwaGFiZXQgb24gaG92ZXJcclxuICAgICAgICAkKCcubWVudSAubGV2ZWwtMSA+IGxpJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcubWVudSAuYWxwaGFiZXQnKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0V3JhcHBlciA9ICQoJy5tZW51IC5hbHBoYWJldC13cmFwcGVyJyk7XHJcbiAgICAgICAgdmFyICRhbHBoYWJldEl0ZW1zID0gJCgnLm1lbnUgLmFscGhhYmV0LWl0ZW1zJyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXRdJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBhbHBoYWJldC5wdXNoKCQodGhpcykuZGF0YSgnYWxwaGFiZXQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC5maWx0ZXIoZnVuY3Rpb24gKGl0bSwgaSwgYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaSA9PSBhLmluZGV4T2YoaXRtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldC5zb3J0KCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhhbHBoYWJldCk7XHJcbiAgICAgICAgJC5lYWNoKGFscGhhYmV0LCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICAkKCc8bGkvPicpLnRleHQodikuYXBwZW5kVG8oJGFscGhhYmV0TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJ2xpJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLnNob3coKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5maW5kKCcuYWxwaGFiZXQtbGV0dGVyJykudGV4dChsZXR0ZXIpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRJdGVtcy5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcubWVudSAubGV2ZWwtMiBsaVtkYXRhLWFscGhhYmV0PScgKyBsZXR0ZXIgKyAnXScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvbmUoKS5hcHBlbmRUbygkYWxwaGFiZXRJdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXdyYXBwZXIgLmxldmVsLTMgLmljb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaWNvbi1tZW51LXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LXBsdXMnKS5hZGRDbGFzcygnaWNvbi1tZW51LW1pbnVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LW1pbnVzJykuYWRkQ2xhc3MoJ2ljb24tbWVudS1wbHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbWF0ZXJpYWwtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpLmRhdGEoJ25hdicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbmF2XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LW1hdGVyaWFsLXNsaWRlci1uYXYnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcykuZGF0YSgnbmF2Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbmF2LFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1tYXRlcmlhbC1wcmludC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci12ZXJ0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci12ZXJ0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci1wYydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXBjJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyLXBjJykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnBhZ2ctc2xpZGVyLXBjLXdyYXBwZXIgLnBhZ2ctc2xpZGVyLXBjLXRleHQtaW5uZXInKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyLXBjJykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJChzbGljay4kc2xpZGVzW2N1cnJlbnRTbGlkZV0pLmZpbmQoJy5wYWdnLXNsaWRlci1wYy1zbGlkZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuaHRtbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LXNsaWRlci1wYy10eXBlIHNwYW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNsaWRlci1wYy10eXBlIHNwYW46Zmlyc3Qtb2YtdHlwZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNsaWRlci1wYy10eXBlIHNwYW46bGFzdC1vZi10eXBlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJy5wYWdnLXNsaWRlci1wYy13cmFwcGVyIC5wYWdnLXNsaWRlci1wYy10ZXh0LWlubmVyJykuaHRtbCh0ZXh0KTtcclxuICAgICAgICAgICAgJCgnLnBhZ2ctc2xpZGVyLXBjLXdyYXBwZXIgLnBhZ2ctc2xpZGVyLXBjLXRleHQtaW5uZXInKS5mYWRlSW4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcmVsYXRlZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGU6ICdkaXYnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lbnUtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpc3QtaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpc3QtaXRlbS1zbGlkZXItbmV3Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuLy8gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmNhcnQtcG9wdXAtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gcmVjYWxjIHNsaXNrIHNsaWRlciBhbmQgc3R5bGVyIG9uIHNob3cgdGFiXHJcbiAgICAgICAgJCgnLmNhcnQtcG9wdXAgLnRhYnMnKS50YWJzKHtcclxuICAgICAgICAgICAgb25TaG93OiBmdW5jdGlvbiAoJHRhYikge1xyXG4gICAgICAgICAgICAgICAgJHRhYi5maW5kKCcuY2FydC1wb3B1cC1zbGlkZXIsIC5zbGljay1zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0YWIuZmluZCgnc2VsZWN0JykudHJpZ2dlcigncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGluaXRLZXlTaG90VlIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGZpeCBhbGwgdGFicyBhY3RpdmUgaW4gaHVkZGVuIGRpdlxyXG4vLyAgICAgICAgJCgnLmNhcnQtcG9wdXAgLnRhYnMgLnRhYicpLmZpcnN0KCkuZmluZCgnYScpLmNsaWNrKClcclxuICAgICAgICAkKCcucHJvZHVjdC1saXN0LWl0ZW0nKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5saXN0LWl0ZW0tc2xpZGVyLCAubGlzdC1pdGVtLXNsaWRlci1uZXcnKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5jYXRhbG9nLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciAkcGFyZW50O1xyXG4gICAgICAgICQoJy5jYXRhbG9nLXNsaWRlciAucHJvZHVjdC1saXN0LWl0ZW0nKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZFRvKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IG9mZnNldC50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0Jzogb2Zmc2V0LmxlZnQgKyAyMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFwcGVuZFRvKCRwYXJlbnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzogJ2luaXRpYWwnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5wcm9tby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRiYWNrVG9wKCkge1xyXG4gICAgICAgIHZhciBqUXVlcnliYWNrVG9Ub3AgPSAkKFwiI2JhY2stdG9wXCIpO1xyXG4gICAgICAgIHZhciByaWdodCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIDEyNTApIC8gMiAtIDUwO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5jc3MoJ3JpZ2h0JywgcmlnaHQpO1xyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeWJhY2tUb1RvcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnliYWNrVG9Ub3Aub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UHJvZHVjdCgpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkZXItc3RhcnMtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3QtaW5mbyAudGFicycpLnRhYnMoJ3NlbGVjdF90YWInLCAncmV2aWV3cycpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWNvbnRlbnQtc2hvdy1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNpbmZvJykub2Zmc2V0KCkudG9wIC0gNTB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwtcmFkaW8nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWNvbW1vbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNpemUnKS5hZGRDbGFzcygnbm8taW5wdXRzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLXBlcnNvbmFsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1jb21tb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1zaXplJykucmVtb3ZlQ2xhc3MoJ25vLWlucHV0cycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbC1yYWRpb1tjaGVja2VkXScpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IGlucHV0Jykub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtZGF0YS1saXN0JykuZmluZCgnLmZvY3VzZWQnKS5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIsIC5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyMScpO1xyXG4gICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgaW5wdXQnKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlciwgLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIxJyk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmQgPSAkKHRoaXMpLmhhc0NsYXNzKCdjb3VudCcpID8gJ2lucHV0JyA6ICdsYWJlbCc7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoZmluZCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAkdG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLXNob3ctYWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QtaGlkZGVuJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtc2hvdycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0LWhpZGUnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uJykuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoJ2ljb24tcHJvZHVjdC1zaXplLXNob3ctYWxsIGljb24tcHJvZHVjdC1zaXplLWhpZGUtYWxsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0IHVsLmNvbG9yIGxpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjZGF0YSAudG9vbHRpcCwgLnByb2R1Y3QtaGVhZGluZyAudG9vbHRpcCwgLnByb2R1Y3QtbWF0ZXJpYWwtcHJpY2UgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdmFyICRoZWxwID0gJCgnPHNwYW4vPicsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICc/JyxcclxuICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogJ2hlbHAnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGhlbHAuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmhlbHAnKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtdm90ZSAuZmEnKS5ob3ZlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldkFsbCgnLmZhJykudG9nZ2xlQ2xhc3MoJ2ZhLXN0YXIgZmEtc3Rhci1vJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtaGVhZGluZy50b2dnbGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRpbmcudG9nZ2xlci5jbG9zZWQnKS5uZXh0KCkuc2xpZGVVcCgpO1xyXG4gICAgICAgICQoJy5qcy1wcmludGFibGUtcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdC1wcmludGFibGUtcmVtb3ZlOnZpc2libGUnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtcGVyc29uYWxpemUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJpbnRhYmxlLWFkZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LXByaW50YWJsZS1yZW1vdmUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0LXBlcnNvbmFsaXplJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1jb2xvci1yZW1vdmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnByb2R1Y3QtY29sb3JzJyk7XHJcbiAgICAgICAgICAgIHZhciAkb3B0aW9uYWwgPSAkcGFyZW50LmZpbmQoJy5wcm9kdWN0LWNvbG9yLW9wdGlvbmFsJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgaWYgKCRvcHRpb25hbC5maW5kKCdsaScpLmxlbmd0aCA9PSAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICRvcHRpb25hbC5oaWRlKCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJG9wdGlvbmFsLmZpbmQoJ2xpJykubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1hZGQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtY29sb3ItYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWNvbG9ycycpO1xyXG4gICAgICAgICAgICB2YXIgJG9wdGlvbmFsID0gJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1vcHRpb25hbCcpO1xyXG4vLyAgICAgICAgICAgICRvcHRpb25hbC5zaG93KCk7XHJcbiAgICAgICAgICAgICRvcHRpb25hbC5maW5kKCdsaS50ZW1wbGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd0ZW1wbGF0ZScpXHJcbi8vICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkb3B0aW9uYWwuZmluZCgndWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2VydEJlZm9yZSgkb3B0aW9uYWwuZmluZCgnbGkudGVtcGxhdGUnKSk7XHJcbiAgICAgICAgICAgIGlmICgkb3B0aW9uYWwuZmluZCgnbGknKS5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1hZGQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kZXNpZ24tc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtcGFuZWxfY29udGVudF9wcmludGFibGUtd3JhcHBlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHNlbCA9ICQodGhpcykuZmluZCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHZhciAkdWwgPSAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LXByaW50YWJsZScpO1xyXG4gICAgICAgICAgICAkc2VsLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkdWwuc2hvdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuICAgICAgICAkKCcucHJvZHVjdC1maWx0ZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnY2xvc2VkJylcclxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLnNpYmxpbmdzKCcucHJvZHVjdC1maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci13cmFwcGVyLmNsb3NlZCcpLmZpbmQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdC1maWx0ZXItY29udGVudC5yYW5nZScpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmlsdGVyLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMTAwMCwgOTk5OV0sXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogMjAwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzbmFwVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLWZyb20nKSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWZpbHRlci1yYW5nZS10bycpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIHNuYXBWYWx1ZXNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRleHRhcmVhKCkge1xyXG4gICAgICAgICQoJ3RleHRhcmVhW2RhdGEtbWF4XScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh2YWwuc3Vic3RyaW5nKDAsIG1heCkpO1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dCgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCdjb3VudGVyJykpLnRleHQobWF4IC0gbGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSZWdpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoJC5jb29raWUoJ2VzY2FwZXItcmVnaW9uLXNlbGVjdGVkJykpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNqcy1yZWdpb24tY29uZmlybS1saW5rXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnLCAxLCB7ZXhwaXJlczogNywgcGF0aDogJy8nfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tY2hhbmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCkub3BlbigkKCcjcmVnaW9uLXNlbGVjdC1wb3B1cCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucG9wdXAtcmVnaW9uLWNvbmZpcm0tc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaS5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaScpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLmpzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgICQoJy5yZWdpb24tc2VsZWN0ID4gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5yZWdpb24tc2VsZWN0X2NpdHknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygnLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlci10d28tY29sdW1ucycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJyc7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ckxldHRlciA9ICQodGhpcykudGV4dCgpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckxldHRlciAhPSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncmVnaW9uLWxldHRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKS5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSAnJztcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdDpub3QoLnJlZ2lvbi1zZWxlY3RfcGlubmVkKSA+IGxpID4gc3BhbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgIGlmIChjdXJMZXR0ZXIgIT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPSBjdXJMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JlZ2lvbi1sZXR0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0X2NpdHksIC5yZWdpb24tc2VsZWN0LXdyYXBwZXInKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcChjb250YWluZXJJZCkge1xyXG4gICAgICAgIGlmICgkKCcubWFwJykubGVuZ3RoID09IDAgfHwgJCgnIycgKyBjb250YWluZXJJZCkubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnRzKCkuZmluZCgnLnBvaW50cy1pdGVtLXRpbWUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgJGxpc3QgPSAkKHRoaXMpLmZpbmQoJ2RsJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICRsaXN0LnNsaWRlRG93bigpIDogJGxpc3Quc2xpZGVVcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpY29uU21hbGwgPSAnaW1nL21hcC1sb2dvLnBuZyc7XHJcbiAgICAgICAgdmFyIGljb25CaWcgPSAnaW1nL21hcC1sb2dvLWJpZy5wbmcnO1xyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IHtsYXQ6IDU2LjMxMDMzOSwgbG5nOiA0NH0sXHJcbiAgICAgICAgICAgIHpvb206IDEyLFxyXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcucG9pbnRzLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xhdCcpKSwgbG5nOiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ2xuZycpKX0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uU21hbGwsXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFya2Vycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbal0uc2V0SWNvbihpY29uU21hbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uKGljb25CaWcpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLnBvaW50cy1pdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxUb3AoJHRoaXMucG9zaXRpb24oKS50b3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHRoaXMuZmluZCgnLnBvaW50cy1pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcmtlciwgJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjdGFicycpLmJpbmQoJ2Vhc3l0YWJzOmFmdGVyJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVzaXplJyk7ICAgICBcclxuICAgICAgICAgICAgaW5pdE1hcChjb250YWluZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhcnQoKSB7XHJcbiAgICAgICAgJCgnLmNhcnQgLnRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBlcnNvbmFsX193cmFwcGVyX2hpZGUnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLmpzLXBlcnNvbmFsX19zaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9zaG93Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9oaWRlJykuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wZXJzb25hbF9faGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuanMtcGVyc29uYWwnKS5maW5kKCcuanMtcGVyc29uYWxfX3dyYXBwZXJfc2hvdycpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuanMtcGVyc29uYWwnKS5maW5kKCcuanMtcGVyc29uYWxfX3dyYXBwZXJfaGlkZScpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hlY2tvdXQoKSB7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5jaGVja291dC1zdW1tYXJ5LWZvcm0gaW5wdXRbbmFtZT1cInNlbGVjdGVkLXBheW1lbnRcIl0nKS5cclxuICAgICAgICAgICAgICAgICAgICB2YWwoJCh0aGlzKS5kYXRhKCdwYXltZW50JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpLmFjdGl2ZScpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdExvZ2luKCkge1xyXG4gICAgICAgICQoJy5sb2dpbi1sYWJlbC13cmFwcGVyIGxhYmVsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWFib3V0LWFkZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5hYm91dC13cmFwcGVyJykuZmluZCgnLmFib3V0LWlubmVyJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1hYm91dC1zcG9ydCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpLnBhcmVudCgpLmZpbmQoJy5hYm91dC1pbm5lcicpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWJvdXQtaW5mbycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpLm5leHQoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmFib3V0LXJvdycpLmZpbmQoJy5pbnB1dC12aWV3LCAuc2VsZWN0LXZpZXcnKS5yZW1vdmVDbGFzcygnaW5wdXQtdmlldyBzZWxlY3QtdmlldycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBhbHBoYWJldCA9IFtdO1xyXG4gICAgICAgIHZhciAkYWxwaGFiZXRNZW51ID0gJCgnLmFib3V0IC5hbHBoYWJldCcpO1xyXG4gICAgICAgIC8vIGNvbGxlY3RcclxuICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGlbZGF0YS1hbHBoYWJldF0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0LnB1c2goJCh0aGlzKS5kYXRhKCdhbHBoYWJldCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LmZpbHRlcihmdW5jdGlvbiAoaXRtLCBpLCBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpID09IGEuaW5kZXhPZihpdG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0LnNvcnQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuICAgICAgICAkLmVhY2goYWxwaGFiZXQsIGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgICAgICQoJzxsaS8+JykudGV4dCh2KS5hcHBlbmRUbygkYWxwaGFiZXRNZW51KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnbGknKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2Fib3V0LXNob3J0LWxpc3QtbXV0ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICRhbHBoYWJldE1lbnUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2Fib3V0LXNob3J0LWxpc3QtbXV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICQoJy5hYm91dCAuYWJvdXQtc3BvcnQtbGlzdCBsaVtkYXRhLWFscGhhYmV0IT0nICsgbGV0dGVyICsgJ10nKS5hZGRDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNoYXJlKCkge1xyXG4gICAgICAgICQoJy5hY2NvcmRpb24taXRlbS5jbG9zZWQnKS5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmFjY29yZGlvbi1pdGVtLWhlYWRpbmcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJHRoaXMucGFyZW50KCcuYWNjb3JkaW9uLWl0ZW0nKTtcclxuICAgICAgICAgICAgdmFyICR3cmFwcGVyID0gJHRoaXMucGFyZW50cygnLmFjY29yZGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGlmICgkcGFyZW50Lmhhc0NsYXNzKCdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuZmluZCgnLmFjY29yZGlvbi1pdGVtJykuYWRkQ2xhc3MoJ2Nsb3NlZCcpLmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuYWNjb3JkaW9uLWl0ZW0taW5uZXInKS5zbGlkZURvd24oMjAwKTtcclxuICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5wYXJlbnRzKCcucG9wdXAnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRwYXJlbnQub2Zmc2V0KCkudG9wIC0gNTB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRLZXlTaG90VlIoKSB7XHJcbiAgICAgICAgJCgnLmpzLTNkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZU9mRGl2ID0gXCIzZF9cIiArIGk7XHJcbiAgICAgICAgICAgICR0LmF0dHIoJ2lkJywgbmFtZU9mRGl2KTtcclxuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSAnM2QvJyArICR0LmRhdGEoJ2ZvbGRlcicpO1xyXG4gICAgICAgICAgICB2YXIgdmlld1BvcnRXaWR0aCA9ICR0LmRhdGEoJ3dpZHRoJyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3UG9ydEhlaWdodCA9ICR0LmRhdGEoJ2hlaWdodCcpO1xyXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gXCIjRkZGRkZGXCI7XHJcbiAgICAgICAgICAgIHZhciB1Q291bnQgPSAzNjtcclxuICAgICAgICAgICAgdmFyIHZDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHZhciB1V3JhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciB2V3JhcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdU1vdXNlU2Vuc2l0aXZpdHkgPSAtMC4xO1xyXG4gICAgICAgICAgICB2YXIgdk1vdXNlU2Vuc2l0aXZpdHkgPSAxO1xyXG4gICAgICAgICAgICB2YXIgdVN0YXJ0SW5kZXggPSAxODtcclxuICAgICAgICAgICAgdmFyIHZTdGFydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIG1pblpvb20gPSAxO1xyXG4gICAgICAgICAgICB2YXIgbWF4Wm9vbSA9IDI7XHJcbiAgICAgICAgICAgIHZhciByb3RhdGlvbkRhbXBpbmcgPSAwLjk2O1xyXG4gICAgICAgICAgICB2YXIgZG93blNjYWxlVG9Ccm93c2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGFkZERvd25TY2FsZUdVSUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZG93bmxvYWRPbkludGVyYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZUV4dGVuc2lvbiA9IFwianBnXCI7XHJcbiAgICAgICAgICAgIHZhciBzaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBsb2FkaW5nSWNvbiA9IFwiXCI7IC8vIFNldCB0byBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgaWNvbi5cclxuICAgICAgICAgICAgdmFyIGFsbG93RnVsbHNjcmVlbiA9IHRydWU7IC8vIERvdWJsZS1jbGljayBpbiBkZXNrdG9wIGJyb3dzZXJzIGZvciBmdWxsc2NyZWVuLlxyXG4gICAgICAgICAgICB2YXIgdVJldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHZSZXZlcnNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBob3RzcG90cyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgbmV3IGtleXNob3RWUihuYW1lT2ZEaXYsIGZvbGRlck5hbWUsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIHVDb3VudCwgdkNvdW50LCB1V3JhcCwgdldyYXAsIHVNb3VzZVNlbnNpdGl2aXR5LCB2TW91c2VTZW5zaXRpdml0eSwgdVN0YXJ0SW5kZXgsIHZTdGFydEluZGV4LCBtaW5ab29tLCBtYXhab29tLCByb3RhdGlvbkRhbXBpbmcsIGRvd25TY2FsZVRvQnJvd3NlciwgYWRkRG93blNjYWxlR1VJQnV0dG9uLCBkb3dubG9hZE9uSW50ZXJhY3Rpb24sIGltYWdlRXh0ZW5zaW9uLCBzaG93TG9hZGluZywgbG9hZGluZ0ljb24sIGFsbG93RnVsbHNjcmVlbiwgdVJldmVyc2UsIHZSZXZlcnNlLCBob3RzcG90cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KTsiXSwiZmlsZSI6ImNvbW1vbi5qcyJ9
