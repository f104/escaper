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
                $tab.find('.cart-popup-slider').slick('setPosition');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIGluaXRTbGlja1NsaWRlcigpO1xyXG4gICAgICAgIGluaXRiYWNrVG9wKCk7XHJcbiAgICAgICAgaW5pdFByb2R1Y3QoKTtcclxuICAgICAgICBpbml0Q2F0YWxvZygpO1xyXG4gICAgICAgIGluaXRUZXh0YXJlYSgpO1xyXG4gICAgICAgIGluaXRSZWdpb24oKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAnKTtcclxuICAgICAgICBpbml0TWFwKCdtYXAxJyk7XHJcbiAgICAgICAgaW5pdENhcnQoKTtcclxuICAgICAgICBpbml0Q2hlY2tvdXQoKTtcclxuICAgICAgICBpbml0TG9naW4oKTtcclxuICAgICAgICBpbml0U2hhcmUoKTtcclxuICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgJCgnc2VsZWN0LCBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1maWxlXScpLnN0eWxlcigpO1xyXG4gICAgICAgICQoJy5qcy1zY3JvbGxiYXInKS5zY3JvbGxiYXIoKTtcclxuICAgICAgICAkKCcuanMtdmFsaWRhdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgJGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgJHN1Ym1pdCA9ICRmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKTtcclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS5vbigna2V5dXAgYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtLnZhbGlkKCkgPyAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpIDogJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtbWFza19waG9uZScpLmlucHV0bWFzaygnKzcoOTk5KTk5OS05OS05OScpO1xyXG4gICAgICAgICQoJy5qcy1tYXNrX3ByaWNlJykuaW5wdXRtYXNrKCc5eyt9INGA0YPQsdC70LXQuScpO1xyXG4gICAgICAgICQoJyN0YWJzJykuZWFzeXRhYnMoKTtcclxuICAgICAgICAkKCcuanMtdG9vbHRpcGVkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHRvb2x0aXAgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuZm4ucXRpcC56aW5kZXggPSAxNTAwMDA7XHJcbiAgICAgICAgJCgnLmpzLXF0aXAnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncXRpcC1lbCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICQoJCh0aGlzKS5kYXRhKCdxdGlwLWVsJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5xdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2NsYXNzZXM6ICdxdGlwLWN1c3RvbSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAnYm90dG9tIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAzMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0ZW1wb3JhcnksIG11c3QgYmUgZGVsZXRlZFxyXG4gICAgICAgICQoJy5qcy1idG4tcmVnaXN0ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHNyYzogJyNhYm91dC1wb3B1cCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBhbnRpc3BhbVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZW1haWwzXCJdLGlucHV0W25hbWU9XCJpbmZvXCJdLGlucHV0W25hbWU9XCJ0ZXh0XCJdJykuYXR0cigndmFsdWUnLCAnJykudmFsKCcnKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNZW51KCkge1xyXG4gICAgICAgICQoJy5oZWFkZXItY2F0YWxvZy1zd2l0Y2hlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKCdyZWluaXQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVudSAuZmFuY3lib3gtY2xvc2Utc21hbGwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGhpZGUgYWxwaGFiZXQgb24gaG92ZXJcclxuICAgICAgICAkKCcubWVudSAubGV2ZWwtMSA+IGxpJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRhbHBoYWJldFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcubWVudSAuYWxwaGFiZXQnKTtcclxuICAgICAgICB2YXIgJGFscGhhYmV0V3JhcHBlciA9ICQoJy5tZW51IC5hbHBoYWJldC13cmFwcGVyJyk7XHJcbiAgICAgICAgdmFyICRhbHBoYWJldEl0ZW1zID0gJCgnLm1lbnUgLmFscGhhYmV0LWl0ZW1zJyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5tZW51IC5sZXZlbC0yIGxpW2RhdGEtYWxwaGFiZXRdJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBhbHBoYWJldC5wdXNoKCQodGhpcykuZGF0YSgnYWxwaGFiZXQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC5maWx0ZXIoZnVuY3Rpb24gKGl0bSwgaSwgYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaSA9PSBhLmluZGV4T2YoaXRtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbHBoYWJldC5zb3J0KCk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhhbHBoYWJldCk7XHJcbiAgICAgICAgJC5lYWNoKGFscGhhYmV0LCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgICAgICAkKCc8bGkvPicpLnRleHQodikuYXBwZW5kVG8oJGFscGhhYmV0TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJ2xpJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRNZW51LmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRXcmFwcGVyLnNob3coKTtcclxuICAgICAgICAgICAgJGFscGhhYmV0V3JhcHBlci5maW5kKCcuYWxwaGFiZXQtbGV0dGVyJykudGV4dChsZXR0ZXIpO1xyXG4gICAgICAgICAgICAkYWxwaGFiZXRJdGVtcy5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcubWVudSAubGV2ZWwtMiBsaVtkYXRhLWFscGhhYmV0PScgKyBsZXR0ZXIgKyAnXScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvbmUoKS5hcHBlbmRUbygkYWxwaGFiZXRJdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXdyYXBwZXIgLmxldmVsLTMgLmljb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaWNvbi1tZW51LXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LXBsdXMnKS5hZGRDbGFzcygnaWNvbi1tZW51LW1pbnVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaWNvbi1tZW51LW1pbnVzJykuYWRkQ2xhc3MoJ2ljb24tbWVudS1wbHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlja1NsaWRlcigpIHtcclxuICAgICAgICAkKFwiLmluZGV4LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcucGFnZy1zbGlkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhZ2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci12ZXJ0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wYWdnLXNsaWRlci12ZXJ0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXZlcnQnLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5wYWdnLXNsaWRlci1wYydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFnZy1zbGlkZXItcGMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyLXBjJyxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLXJlbGF0ZWQnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlOiAnZGl2JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saXN0LWl0ZW0tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMCcsXHJcbi8vICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jYXJ0LXBvcHVwLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlY2FsYyBzbGlzayBzbGlkZXIgYW5kIHN0eWxlciBvbiBzaG93IHRhYlxyXG4gICAgICAgICQoJy5jYXJ0LXBvcHVwIC50YWJzJykudGFicyh7XHJcbiAgICAgICAgICAgIG9uU2hvdzogZnVuY3Rpb24gKCR0YWIpIHtcclxuICAgICAgICAgICAgICAgICR0YWIuZmluZCgnLmNhcnQtcG9wdXAtc2xpZGVyJykuc2xpY2soJ3NldFBvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGFiLmZpbmQoJ3NlbGVjdCcpLnRyaWdnZXIoJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBpbml0S2V5U2hvdFZSKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBmaXggYWxsIHRhYnMgYWN0aXZlIGluIGh1ZGRlbiBkaXZcclxuLy8gICAgICAgICQoJy5jYXJ0LXBvcHVwIC50YWJzIC50YWInKS5maXJzdCgpLmZpbmQoJ2EnKS5jbGljaygpXHJcbiAgICAgICAgJCgnLnByb2R1Y3QtbGlzdC1pdGVtJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubGlzdC1pdGVtLXNsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQ7XHJcbiAgICAgICAgJCgnLmNhdGFsb2ctc2xpZGVyIC5wcm9kdWN0LWxpc3QtaXRlbScpLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndG9wJzogb2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXQubGVmdCArIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kVG8oJHBhcmVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLnByb21vLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIjYmFjay10b3BcIik7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gKCQod2luZG93KS53aWR0aCgpIC0gMTI1MCkgLyAyIC0gNTA7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLmNzcygncmlnaHQnLCByaWdodCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnliYWNrVG9Ub3AuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5YmFja1RvVG9wLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeWJhY2tUb1RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRQcm9kdWN0KCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRlci1zdGFycy1saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1pbmZvIC50YWJzJykudGFicygnc2VsZWN0X3RhYicsICdyZXZpZXdzJyk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtY29udGVudC1zaG93LW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2luZm8nKS5vZmZzZXQoKS50b3AgLSA1MH0sIDUwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbC1yYWRpbycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2R1Y3QtZGF0YS1wZXJzb25hbCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtY29tbW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3Qtc2l6ZScpLmFkZENsYXNzKCduby1pbnB1dHMnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWRhdGEtcGVyc29uYWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLWNvbW1vbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNpemUnKS5yZW1vdmVDbGFzcygnbm8taW5wdXRzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcHJvZHVjdC1kYXRhLXBlcnNvbmFsLXJhZGlvW2NoZWNrZWRdJykuY2xpY2soKTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgaW5wdXQnKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3QnKS5maW5kKCcuZm9jdXNlZCcpLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlciwgLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXIxJyk7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdCBpbnB1dCcpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWRhdGEtbGlzdC13cmFwcGVyLCAucHJvZHVjdC1kYXRhLWxpc3Qtd3JhcHBlcjEnKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQodGhpcykuZmluZCgnLnRvb2x0aXAnKTtcclxuICAgICAgICAgICAgaWYgKCR0b29sdGlwLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmluZCA9ICQodGhpcykuaGFzQ2xhc3MoJ2NvdW50JykgPyAnaW5wdXQnIDogJ2xhYmVsJztcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChmaW5kKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICR0b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWRhdGEtc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LWRhdGEtbGlzdC1oaWRkZW4nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dC1zaG93JykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtZGF0YS1saXN0LWhpZGRlbicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQtaGlkZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmljb24nKS5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcygnaWNvbi1wcm9kdWN0LXNpemUtc2hvdy1hbGwgaWNvbi1wcm9kdWN0LXNpemUtaGlkZS1hbGwnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1kYXRhLWxpc3QgdWwuY29sb3IgbGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNkYXRhIC50b29sdGlwLCAucHJvZHVjdC1oZWFkaW5nIC50b29sdGlwJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciAkaGVscCA9ICQoJzxzcGFuLz4nLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnPycsXHJcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6ICdoZWxwJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRoZWxwLmFwcGVuZFRvKCRwYXJlbnQpO1xyXG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5oZWxwJykudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXZvdGUgLmZhJykuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtc3RhciBmYS1zdGFyLW8nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXZBbGwoJy5mYScpLnRvZ2dsZUNsYXNzKCdmYS1zdGFyIGZhLXN0YXItbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWhlYWRpbmcudG9nZ2xlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdjbG9zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucHJvZHVjdC1oZWFkaW5nLnRvZ2dsZXIuY2xvc2VkJykubmV4dCgpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKCcuanMtcHJpbnRhYmxlLXJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICBpZiAoJCgnLnByb2R1Y3QtcHJpbnRhYmxlLXJlbW92ZTp2aXNpYmxlJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXBlcnNvbmFsaXplJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXByaW50YWJsZS1hZGQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1wcmludGFibGUtcmVtb3ZlJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdC1wZXJzb25hbGl6ZScpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtY29sb3ItcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJy5wcm9kdWN0LWNvbG9ycycpO1xyXG4gICAgICAgICAgICB2YXIgJG9wdGlvbmFsID0gJHBhcmVudC5maW5kKCcucHJvZHVjdC1jb2xvci1vcHRpb25hbCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgIGlmICgkb3B0aW9uYWwuZmluZCgnbGknKS5sZW5ndGggPT0gMSkge1xyXG4vLyAgICAgICAgICAgICAgICAkb3B0aW9uYWwuaGlkZSgpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRvcHRpb25hbC5maW5kKCdsaScpLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLnByb2R1Y3QtY29sb3ItYWRkJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWNvbG9yLWFkZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCcucHJvZHVjdC1jb2xvcnMnKTtcclxuICAgICAgICAgICAgdmFyICRvcHRpb25hbCA9ICRwYXJlbnQuZmluZCgnLnByb2R1Y3QtY29sb3Itb3B0aW9uYWwnKTtcclxuLy8gICAgICAgICAgICAkb3B0aW9uYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAkb3B0aW9uYWwuZmluZCgnbGkudGVtcGxhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygndGVtcGxhdGUnKVxyXG4vLyAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJG9wdGlvbmFsLmZpbmQoJ3VsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbnNlcnRCZWZvcmUoJG9wdGlvbmFsLmZpbmQoJ2xpLnRlbXBsYXRlJykpO1xyXG4gICAgICAgICAgICBpZiAoJG9wdGlvbmFsLmZpbmQoJ2xpJykubGVuZ3RoID09IDcpIHtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLnByb2R1Y3QtY29sb3ItYWRkJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZGVzaWduLXN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDYXRhbG9nKCkge1xyXG4gICAgICAgICQoJy5wcm9kdWN0LWZpbHRlci10aXRsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdjbG9zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJCh0aGlzKS5zaWJsaW5ncygnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICA6ICQodGhpcykuc2libGluZ3MoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50Jykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnByb2R1Y3QtZmlsdGVyLXdyYXBwZXIuY2xvc2VkJykuZmluZCgnLnByb2R1Y3QtZmlsdGVyLWNvbnRlbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0LWZpbHRlci1jb250ZW50LnJhbmdlJykubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1maWx0ZXItcmFuZ2VcIik7XHJcbiAgICAgICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFsxMDAwLCA5OTk5XSxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiAyMDAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHNuYXBWYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1maWx0ZXItcmFuZ2UtZnJvbScpLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZmlsdGVyLXJhbmdlLXRvJylcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgc25hcFZhbHVlc1toYW5kbGVdLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VGV4dGFyZWEoKSB7XHJcbiAgICAgICAgJCgndGV4dGFyZWFbZGF0YS1tYXhdJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdtYXgnKSk7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGxlbiA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHZhbC5zdWJzdHJpbmcoMCwgbWF4KSk7XHJcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgnY291bnRlcicpKS50ZXh0KDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKSkudGV4dChtYXggLSBsZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFJlZ2lvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mICgkLmNvb2tpZSgnZXNjYXBlci1yZWdpb24tc2VsZWN0ZWQnKSkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2pzLXJlZ2lvbi1jb25maXJtLWxpbmtcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgICQuY29va2llKCdlc2NhcGVyLXJlZ2lvbi1zZWxlY3RlZCcsIDEsIHtleHBpcmVzOiA3LCBwYXRoOiAnLyd9KTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5wb3B1cC1yZWdpb24tY29uZmlybS1jaGFuZ2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKS5vcGVuKCQoJyNyZWdpb24tc2VsZWN0LXBvcHVwJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5wb3B1cC1yZWdpb24tY29uZmlybS1zdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdCA+IGxpLmFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJy5yZWdpb24tc2VsZWN0LXdyYXBwZXItdHdvLWNvbHVtbnMnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdCA+IGxpJykubW91c2VlbnRlcihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcuanMtcmVnaW9uLXNlbGVjdC1jdXJyZW50JylcclxuICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQoJy5yZWdpb24tc2VsZWN0ID4gbGkuYWN0aXZlJykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdqcy1yZWdpb24tc2VsZWN0LWN1cnJlbnQnKTtcclxuICAgICAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3QgPiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnJlZ2lvbi1zZWxlY3RfY2l0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCcucmVnaW9uLXNlbGVjdC13cmFwcGVyLXR3by1jb2x1bW5zJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2pzLXJlZ2lvbi1zZWxlY3QtY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucmVnaW9uLXNlbGVjdF9jaXR5JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAnJztcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyTGV0dGVyID0gJCh0aGlzKS50ZXh0KClbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyTGV0dGVyICE9IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlciA9IGN1ckxldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdyZWdpb24tbGV0dGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGxldHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKHRoaXMpLnBhcmVudCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxldHRlciA9ICcnO1xyXG4gICAgICAgICQoJy5yZWdpb24tc2VsZWN0Om5vdCgucmVnaW9uLXNlbGVjdF9waW5uZWQpID4gbGkgPiBzcGFuJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJMZXR0ZXIgPSAkKHRoaXMpLnRleHQoKVswXTtcclxuICAgICAgICAgICAgaWYgKGN1ckxldHRlciAhPSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldHRlciA9IGN1ckxldHRlcjtcclxuICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncmVnaW9uLWxldHRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGxldHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnJlZ2lvbi1zZWxlY3RfY2l0eSwgLnJlZ2lvbi1zZWxlY3Qtd3JhcHBlcicpLnBlcmZlY3RTY3JvbGxiYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TWFwKGNvbnRhaW5lcklkKSB7XHJcbiAgICAgICAgaWYgKCQoJy5tYXAnKS5sZW5ndGggPT0gMCB8fCAkKCcjJyArIGNvbnRhaW5lcklkKS5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudHMoKS5maW5kKCcucG9pbnRzLWl0ZW0tdGltZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciAkbGlzdCA9ICQodGhpcykuZmluZCgnZGwnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJGxpc3Quc2xpZGVEb3duKCkgOiAkbGlzdC5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGljb25TbWFsbCA9ICdpbWcvbWFwLWxvZ28ucG5nJztcclxuICAgICAgICB2YXIgaWNvbkJpZyA9ICdpbWcvbWFwLWxvZ28tYmlnLnBuZyc7XHJcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjoge2xhdDogNTYuMzEwMzM5LCBsbmc6IDQ0fSxcclxuICAgICAgICAgICAgem9vbTogMTIsXHJcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbWFya2VycyA9IFtdO1xyXG4gICAgICAgICQoJyMnICsgY29udGFpbmVySWQpLnBhcmVudCgpLmZpbmQoJy5wb2ludHMtaXRlbScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtsYXQ6IHBhcnNlRmxvYXQoJHRoaXMuZGF0YSgnbGF0JykpLCBsbmc6IHBhcnNlRmxvYXQoJHRoaXMuZGF0YSgnbG5nJykpfSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb25TbWFsbCxcclxuICAgICAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1tqXS5zZXRJY29uKGljb25TbWFsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEljb24oaWNvbkJpZyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcklkKS5wYXJlbnQoKS5maW5kKCcucG9pbnRzLWl0ZW0uYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBjb250YWluZXJJZCkucGFyZW50KCkuZmluZCgnLmpzLXNjcm9sbGJhcicpLnNjcm9sbFRvcCgkdGhpcy5wb3NpdGlvbigpLnRvcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkdGhpcy5maW5kKCcucG9pbnRzLWl0ZW0tdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFya2VyLCAnY2xpY2snKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyN0YWJzJykuYmluZCgnZWFzeXRhYnM6YWZ0ZXInLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXAsICdyZXNpemUnKTsgICAgIFxyXG4gICAgICAgICAgICBpbml0TWFwKGNvbnRhaW5lcklkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FydCgpIHtcclxuICAgICAgICAkKCcuY2FydCAudG9vbHRpcCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b29sdGlwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtcGVyc29uYWxfX3dyYXBwZXJfaGlkZScpLmhpZGUoKTtcclxuICAgICAgICAkKCcuanMtcGVyc29uYWxfX3Nob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmpzLXBlcnNvbmFsJykuZmluZCgnLmpzLXBlcnNvbmFsX193cmFwcGVyX3Nob3cnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmpzLXBlcnNvbmFsJykuZmluZCgnLmpzLXBlcnNvbmFsX193cmFwcGVyX2hpZGUnKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBlcnNvbmFsX19oaWRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9zaG93JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5qcy1wZXJzb25hbCcpLmZpbmQoJy5qcy1wZXJzb25hbF9fd3JhcHBlcl9oaWRlJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGVja291dCgpIHtcclxuICAgICAgICAkKCcuanMtcGF5bWVudC1yYWRpbyBsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5qcy1wYXltZW50LXJhZGlvIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmNoZWNrb3V0LXN1bW1hcnktZm9ybSBpbnB1dFtuYW1lPVwic2VsZWN0ZWQtcGF5bWVudFwiXScpLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbCgkKHRoaXMpLmRhdGEoJ3BheW1lbnQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLXBheW1lbnQtcmFkaW8gbGkuYWN0aXZlJykuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TG9naW4oKSB7XHJcbiAgICAgICAgJCgnLmxvZ2luLWxhYmVsLXdyYXBwZXIgbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuanMtYWJvdXQtYWRkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmFib3V0LXdyYXBwZXInKS5maW5kKCcuYWJvdXQtaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmpzLWFib3V0LXNwb3J0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCkucGFyZW50KCkuZmluZCgnLmFib3V0LWlubmVyJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5qcy1hYm91dC1pbmZvJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCkubmV4dCgpLnNob3coKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYWJvdXQtcm93JykuZmluZCgnLmlucHV0LXZpZXcsIC5zZWxlY3QtdmlldycpLnJlbW92ZUNsYXNzKCdpbnB1dC12aWV3IHNlbGVjdC12aWV3Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0ID0gW107XHJcbiAgICAgICAgdmFyICRhbHBoYWJldE1lbnUgPSAkKCcuYWJvdXQgLmFscGhhYmV0Jyk7XHJcbiAgICAgICAgLy8gY29sbGVjdFxyXG4gICAgICAgICQoJy5hYm91dCAuYWJvdXQtc3BvcnQtbGlzdCBsaVtkYXRhLWFscGhhYmV0XScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgYWxwaGFiZXQucHVzaCgkKHRoaXMpLmRhdGEoJ2FscGhhYmV0JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQuZmlsdGVyKGZ1bmN0aW9uIChpdG0sIGksIGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkgPT0gYS5pbmRleE9mKGl0bSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxwaGFiZXQuc29ydCgpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coYWxwaGFiZXQpO1xyXG4gICAgICAgICQuZWFjaChhbHBoYWJldCwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICAgICAgJCgnPGxpLz4nKS50ZXh0KHYpLmFwcGVuZFRvKCRhbHBoYWJldE1lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNsaWNrXHJcbiAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCdsaScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGknKS5yZW1vdmVDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgJGFscGhhYmV0TWVudS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWJvdXQgLmFib3V0LXNwb3J0LWxpc3QgbGknKS5yZW1vdmVDbGFzcygnYWJvdXQtc2hvcnQtbGlzdC1tdXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFib3V0IC5hYm91dC1zcG9ydC1saXN0IGxpW2RhdGEtYWxwaGFiZXQhPScgKyBsZXR0ZXIgKyAnXScpLmFkZENsYXNzKCdhYm91dC1zaG9ydC1saXN0LW11dGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2hhcmUoKSB7XHJcbiAgICAgICAgJCgnLmFjY29yZGlvbi1pdGVtLmNsb3NlZCcpLmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKCcuYWNjb3JkaW9uLWl0ZW0taGVhZGluZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoJy5hY2NvcmRpb24taXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgJHdyYXBwZXIgPSAkdGhpcy5wYXJlbnRzKCcuYWNjb3JkaW9uLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgaWYgKCRwYXJlbnQuaGFzQ2xhc3MoJ2Nsb3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkd3JhcHBlci5maW5kKCcuYWNjb3JkaW9uLWl0ZW0nKS5hZGRDbGFzcygnY2xvc2VkJykuZmluZCgnLmFjY29yZGlvbi1pdGVtLWlubmVyJykuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgICAgICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5hY2NvcmRpb24taXRlbS1pbm5lcicpLnNsaWRlRG93bigyMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCR3cmFwcGVyLnBhcmVudHMoJy5wb3B1cCcpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJHBhcmVudC5vZmZzZXQoKS50b3AgLSA1MH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcGFyZW50LmFkZENsYXNzKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmFjY29yZGlvbi1pdGVtLWlubmVyJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEtleVNob3RWUigpIHtcclxuICAgICAgICAkKCcuanMtM2QnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciAkdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lT2ZEaXYgPSBcIjNkX1wiICsgaTtcclxuICAgICAgICAgICAgJHQuYXR0cignaWQnLCBuYW1lT2ZEaXYpO1xyXG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9ICczZC8nICsgJHQuZGF0YSgnZm9sZGVyJyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3UG9ydFdpZHRoID0gJHQuZGF0YSgnd2lkdGgnKTtcclxuICAgICAgICAgICAgdmFyIHZpZXdQb3J0SGVpZ2h0ID0gJHQuZGF0YSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRkZGRkZcIjtcclxuICAgICAgICAgICAgdmFyIHVDb3VudCA9IDM2O1xyXG4gICAgICAgICAgICB2YXIgdkNvdW50ID0gMTtcclxuICAgICAgICAgICAgdmFyIHVXcmFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHZXcmFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB1TW91c2VTZW5zaXRpdml0eSA9IC0wLjE7XHJcbiAgICAgICAgICAgIHZhciB2TW91c2VTZW5zaXRpdml0eSA9IDE7XHJcbiAgICAgICAgICAgIHZhciB1U3RhcnRJbmRleCA9IDE4O1xyXG4gICAgICAgICAgICB2YXIgdlN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgbWluWm9vbSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBtYXhab29tID0gMjtcclxuICAgICAgICAgICAgdmFyIHJvdGF0aW9uRGFtcGluZyA9IDAuOTY7XHJcbiAgICAgICAgICAgIHZhciBkb3duU2NhbGVUb0Jyb3dzZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgYWRkRG93blNjYWxlR1VJQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBkb3dubG9hZE9uSW50ZXJhY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGltYWdlRXh0ZW5zaW9uID0gXCJqcGdcIjtcclxuICAgICAgICAgICAgdmFyIHNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGxvYWRpbmdJY29uID0gXCJcIjsgLy8gU2V0IHRvIGVtcHR5IHN0cmluZyBmb3IgZGVmYXVsdCBpY29uLlxyXG4gICAgICAgICAgICB2YXIgYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTsgLy8gRG91YmxlLWNsaWNrIGluIGRlc2t0b3AgYnJvd3NlcnMgZm9yIGZ1bGxzY3JlZW4uXHJcbiAgICAgICAgICAgIHZhciB1UmV2ZXJzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdlJldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGhvdHNwb3RzID0ge307XHJcblxyXG4gICAgICAgICAgICBuZXcga2V5c2hvdFZSKG5hbWVPZkRpdiwgZm9sZGVyTmFtZSwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQsIGJhY2tncm91bmRDb2xvciwgdUNvdW50LCB2Q291bnQsIHVXcmFwLCB2V3JhcCwgdU1vdXNlU2Vuc2l0aXZpdHksIHZNb3VzZVNlbnNpdGl2aXR5LCB1U3RhcnRJbmRleCwgdlN0YXJ0SW5kZXgsIG1pblpvb20sIG1heFpvb20sIHJvdGF0aW9uRGFtcGluZywgZG93blNjYWxlVG9Ccm93c2VyLCBhZGREb3duU2NhbGVHVUlCdXR0b24sIGRvd25sb2FkT25JbnRlcmFjdGlvbiwgaW1hZ2VFeHRlbnNpb24sIHNob3dMb2FkaW5nLCBsb2FkaW5nSWNvbiwgYWxsb3dGdWxsc2NyZWVuLCB1UmV2ZXJzZSwgdlJldmVyc2UsIGhvdHNwb3RzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pOyJdLCJmaWxlIjoiY29tbW9uLmpzIn0=
