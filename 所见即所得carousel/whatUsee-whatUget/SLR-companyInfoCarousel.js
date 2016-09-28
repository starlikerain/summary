/**
 * Created by StarLikeRain on 9/18/16.
 */
document.onready = (function () {
    (function ($, document, window, undefined) {
        var $imgContent = $('.SLR-companyImgContent');
        var $liItems = $imgContent.children();
        var curIdx = 0;
        var imgWidth = $liItems.width();
        var imgCount = $imgContent.children().length;
        if (imgCount === 1) {
            return
        }

        var isAnimate = false;
        var $carousel = $('div.carousell');
        $carousel.css('width', ((imgCount * imgWidth) + (14)));
        for (var i = 0; i < $liItems.length; i++) {
            (function () {
                $liItems.eq(i).attr('data-id', i);
            })()
        }

        $imgContent.prepend($liItems.last().clone());
        for (var i = 0; i < imgCount; i++) {
            (function () {
                $imgContent.append($liItems.first().clone());
            })()
        }
        imgRealCount = $imgContent.children().length;//imgCount + 2;
        $imgContent.css({
            left: 0 - (imgWidth + 28),
            width: imgRealCount * imgWidth + ( (28) * (imgRealCount - 1) )
        })
        autoPlay();
        function autoPlay() {
            clock = setInterval(function () {
                playNext();
            }, 1500);
        }
        function playNext(idx) {

            var idx = idx || 1;
            if (!isAnimate) {
                isAnimate = true;
                $imgContent.animate({
                    left: '-=' + ( (imgWidth * idx) + 14 )
                }, function () {
                    curIdx = (curIdx + idx) % imgCount;
                    if (curIdx === 0) {
                        $imgContent.css({
                            left: 0 - (imgWidth + 28)
                        });
                        curIdx = 0;
                    }
                    isAnimate = false;
                });
            }
        };
    })(jQuery, document, window)
})
