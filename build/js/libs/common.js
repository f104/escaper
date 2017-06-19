jQuery(function () {
    "use strict";

    initSlickSlider();
    initbackTop();
    
    function initSlickSlider() {
        jQuery(".js-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            fade: true,
            adaptiveHeight: true
        });
    }
    
    function initbackTop() {
        var jQuerybackToTop = $(".js-back-to-top");
        jQuerybackToTop.on('click', function (e) {
          $("html, body").animate({scrollTop: 0}, 500);
        });
    }
    
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL2NvbW1vbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgaW5pdFNsaWNrU2xpZGVyKCk7XHJcbiAgICBpbml0YmFja1RvcCgpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0U2xpY2tTbGlkZXIoKSB7XHJcbiAgICAgICAgalF1ZXJ5KFwiLmpzLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdGJhY2tUb3AoKSB7XHJcbiAgICAgICAgdmFyIGpRdWVyeWJhY2tUb1RvcCA9ICQoXCIuanMtYmFjay10by10b3BcIik7XHJcbiAgICAgICAgalF1ZXJ5YmFja1RvVG9wLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn0pOyJdLCJmaWxlIjoibGlicy9jb21tb24uanMifQ==
