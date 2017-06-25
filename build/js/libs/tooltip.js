(function ($) {
    $.fn.tooltip = function (options) {
      var timeout = null,
      margin = 5;

      // Defaults
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);

        // Destroy old tooltip
        if (origin.attr('data-tooltip-id')) {
          $('#' + origin.attr('data-tooltip-id')).remove();
        }

        origin.attr('data-tooltip-id', tooltipId);

        // Get attributes.
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?
              options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?
              options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ?
              options.tooltip : tooltipText;
        };
        setAttributes();

        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');

          // Create Text span
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else{
            tooltipText = $('<span></span>').text(tooltipText);
          }

          // Create tooltip
          tooltip.append(tooltipText)
            .appendTo($('body'))
            .attr('id', tooltipId);

          // Create backdrop
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();

        // Destroy previously binded events
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
        var started = false, timeoutRef;
        origin.on({'mouseenter.tooltip': function(e) {
          var showTooltip = function() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var backdropOffsetWidth = backdrop[0].offsetWidth;
            var backdropOffsetHeight = backdrop[0].offsetHeight;
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var scaleFactor = 0;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft =  origin.offset().left - tooltipWidth - margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                top: '-7px',
                right: 0,
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft = origin.offset().left + originWidth + margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                top: '-7px',
                left: 0,
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              targetTop = origin.offset().top + origin.outerHeight() + margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                top: 0,
                left: 0,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
            scaleFactor = Math.max(scaleXFactor, scaleYFactor);

            tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
            backdrop.css({ visibility: 'visible' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scaleX: scaleFactor, scaleY: scaleFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function() {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, translateY: 0, translateX: 0}, { duration: 225, queue: false});
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {
                duration:225,
                queue: false,
                complete: function(){
                  backdrop.css({ visibility: 'hidden' });
                  tooltipEl.css({ visibility: 'hidden' });
                  started = false;}
              });
            }
          },225);
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL3Rvb2x0aXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkLmZuLnRvb2x0aXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICB2YXIgdGltZW91dCA9IG51bGwsXHJcbiAgICAgIG1hcmdpbiA9IDU7XHJcblxyXG4gICAgICAvLyBEZWZhdWx0c1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVsYXk6IDM1MCxcclxuICAgICAgICB0b29sdGlwOiAnJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgaHRtbDogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0b29sdGlwIGZyb20gdGhlIGFjdGl2YXRvclxyXG4gICAgICBpZiAob3B0aW9ucyA9PT0gXCJyZW1vdmVcIikge1xyXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRvb2x0aXBJZCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcclxuICAgICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gRGVzdHJveSBvbGQgdG9vbHRpcFxyXG4gICAgICAgIGlmIChvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpIHtcclxuICAgICAgICAgICQoJyMnICsgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnLCB0b29sdGlwSWQpO1xyXG5cclxuICAgICAgICAvLyBHZXQgYXR0cmlidXRlcy5cclxuICAgICAgICB2YXIgYWxsb3dIdG1sLFxyXG4gICAgICAgICAgICB0b29sdGlwRGVsYXksXHJcbiAgICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbixcclxuICAgICAgICAgICAgdG9vbHRpcFRleHQsXHJcbiAgICAgICAgICAgIHRvb2x0aXBFbCxcclxuICAgICAgICAgICAgYmFja2Ryb3A7XHJcbiAgICAgICAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGFsbG93SHRtbCA9IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA/IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA9PT0gJ3RydWUnIDogb3B0aW9ucy5odG1sO1xyXG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gb3JpZ2luLmF0dHIoJ2RhdGEtZGVsYXknKTtcclxuICAgICAgICAgIHRvb2x0aXBEZWxheSA9ICh0b29sdGlwRGVsYXkgPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwRGVsYXkgPT09ICcnKSA/XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy5kZWxheSA6IHRvb2x0aXBEZWxheTtcclxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IG9yaWdpbi5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XHJcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb24gPSAodG9vbHRpcFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFBvc2l0aW9uID09PSAnJykgP1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMucG9zaXRpb24gOiB0b29sdGlwUG9zaXRpb247XHJcbiAgICAgICAgICB0b29sdGlwVGV4dCA9IG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAnKTtcclxuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gKHRvb2x0aXBUZXh0ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFRleHQgPT09ICcnKSA/XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy50b29sdGlwIDogdG9vbHRpcFRleHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRBdHRyaWJ1dGVzKCk7XHJcblxyXG4gICAgICAgIHZhciByZW5kZXJUb29sdGlwRWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciB0b29sdGlwID0gJCgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgVGV4dCBzcGFuXHJcbiAgICAgICAgICBpZiAoYWxsb3dIdG1sKSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLmh0bWwodG9vbHRpcFRleHQpO1xyXG4gICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB0b29sdGlwVGV4dCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS50ZXh0KHRvb2x0aXBUZXh0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgdG9vbHRpcFxyXG4gICAgICAgICAgdG9vbHRpcC5hcHBlbmQodG9vbHRpcFRleHQpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpXHJcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIHRvb2x0aXBJZCk7XHJcblxyXG4gICAgICAgICAgLy8gQ3JlYXRlIGJhY2tkcm9wXHJcbiAgICAgICAgICBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgYmFja2Ryb3AuYXBwZW5kVG8odG9vbHRpcCk7XHJcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRvb2x0aXBFbCA9IHJlbmRlclRvb2x0aXBFbCgpO1xyXG5cclxuICAgICAgICAvLyBEZXN0cm95IHByZXZpb3VzbHkgYmluZGVkIGV2ZW50c1xyXG4gICAgICAgIG9yaWdpbi5vZmYoJ21vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXAnKTtcclxuICAgICAgICAvLyBNb3VzZSBJblxyXG4gICAgICAgIHZhciBzdGFydGVkID0gZmFsc2UsIHRpbWVvdXRSZWY7XHJcbiAgICAgICAgb3JpZ2luLm9uKHsnbW91c2VlbnRlci50b29sdGlwJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgdmFyIHNob3dUb29sdGlwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSgnc3RvcCcpO1xyXG4gICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSgnc3RvcCcpO1xyXG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnLCBsZWZ0OiAnMHB4JywgdG9wOiAnMHB4JyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvb2x0aXAgcG9zaXRpb25pbmdcclxuICAgICAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhlaWdodCA9IHRvb2x0aXBFbC5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcFdpZHRoID0gdG9vbHRpcEVsLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHZhciB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldFdpZHRoID0gYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldEhlaWdodCA9IGJhY2tkcm9wWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHNjYWxlWEZhY3RvciA9IDg7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZVlGYWN0b3IgPSA4O1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVGYWN0b3IgPSAwO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0VG9wLCB0YXJnZXRMZWZ0LCBuZXdDb29yZGluYXRlcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgICAvLyBUb3AgUG9zaXRpb25cclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gdG9vbHRpcEhlaWdodCAtIG1hcmdpbjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICctMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDE0cHggMCAwJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICh0b29sdGlwV2lkdGgvMikgLSAoYmFja2Ryb3BPZmZzZXRXaWR0aC8yKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIExlZnQgUG9zaXRpb25cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gdG9vbHRpcFdpZHRoIC0gbWFyZ2luO1xyXG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnLTEwcHgnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICctN3B4JyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCAwIDAgMTRweCcsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc5NSUgNTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdG9vbHRpcFdpZHRoXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmlnaHQgUG9zaXRpb25cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0b29sdGlwSGVpZ2h0LzI7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGggKyBtYXJnaW47XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcrMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzAgMTRweCAxNHB4IDAnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNSUgNTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBCb3R0b20gUG9zaXRpb25cclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luLm91dGVySGVpZ2h0KCkgKyBtYXJnaW47XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRvb2x0aXBXaWR0aC8yO1xyXG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnKzEwcHgnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0b29wdGlwIGNzcyBwbGFjZW1lbnRcclxuICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7XHJcbiAgICAgICAgICAgICAgdG9wOiBuZXdDb29yZGluYXRlcy55LFxyXG4gICAgICAgICAgICAgIGxlZnQ6IG5ld0Nvb3JkaW5hdGVzLnhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgU2NhbGUgdG8gZmlsbFxyXG4gICAgICAgICAgICBzY2FsZVhGYWN0b3IgPSBNYXRoLlNRUlQyICogdG9vbHRpcFdpZHRoIC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgICAgIHNjYWxlWUZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwSGVpZ2h0IC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICBzY2FsZUZhY3RvciA9IE1hdGgubWF4KHNjYWxlWEZhY3Rvciwgc2NhbGVZRmFjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50LCB0cmFuc2xhdGVYOiB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50fSwgeyBkdXJhdGlvbjogMzUwLCBxdWV1ZTogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IDMwMCwgZGVsYXk6IDUwLCBxdWV1ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pXHJcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjogNTUsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2V9KVxyXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7c2NhbGVYOiBzY2FsZUZhY3Rvciwgc2NhbGVZOiBzY2FsZUZhY3Rvcn0sIHtkdXJhdGlvbjogMzAwLCBkZWxheTogMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ30pO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICB0aW1lb3V0UmVmID0gc2V0VGltZW91dChzaG93VG9vbHRpcCwgdG9vbHRpcERlbGF5KTsgLy8gRW5kIEludGVydmFsXHJcblxyXG4gICAgICAgIC8vIE1vdXNlIE91dFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ21vdXNlbGVhdmUudG9vbHRpcCc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAvLyBSZXNldCBTdGF0ZVxyXG4gICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYpO1xyXG5cclxuICAgICAgICAgIC8vIEFuaW1hdGUgYmFja1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogMCwgdHJhbnNsYXRlWDogMH0sIHsgZHVyYXRpb246IDIyNSwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoe29wYWNpdHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246MjI1LFxyXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTt9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sMjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgcmVwb3NpdGlvbldpdGhpblNjcmVlbiA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBuZXdYID0geDtcclxuICAgIHZhciBuZXdZID0geTtcclxuXHJcbiAgICBpZiAobmV3WCA8IDApIHtcclxuICAgICAgbmV3WCA9IDQ7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1ggKyB3aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgIG5ld1ggLT0gbmV3WCArIHdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1kgPCAwKSB7XHJcbiAgICAgIG5ld1kgPSA0O1xyXG4gICAgfSBlbHNlIGlmIChuZXdZICsgaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCkge1xyXG4gICAgICBuZXdZIC09IG5ld1kgKyBoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt4OiBuZXdYLCB5OiBuZXdZfTtcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICQoJy50b29sdGlwcGVkJykudG9vbHRpcCgpO1xyXG4gICB9KTtcclxufSggalF1ZXJ5ICkpOyJdLCJmaWxlIjoibGlicy90b29sdGlwLmpzIn0=
