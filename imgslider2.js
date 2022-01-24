    function hello() {
            $('.prev').on('click', function () {
    
                var currentImg = $('.active');
                var prevImg = currentImg.prev('.slider-inner img');
                if (prevImg.length == 0) {
                    prevImg = $('.slider-inner img:last');
                }
                currentImg.removeClass('active');
    
                prevImg.addClass('active');
    
            });
        }
        function hello2() {
            $('.next').on('click', function () {
    
                var currentImg = $('.active');
                var nextImg = currentImg.next('.slider-inner img');
                if (nextImg.length == 0) {
                    nextImg = $('.slider-inner img:first');
                }
    
                currentImg.removeClass('active');
                nextImg.addClass('active');
    
            });
    
        }
       $(document).ready(function () {
            $('.slider-inner').mouseover(function () {
                $(this).css('opacity', '.8');

            }).mouseout(function () {
                $(this).css('opacity', '1');

            });
            $('.next').mouseenter(function () {
                $(this).css('opacity', '.3');
            }).mouseout(function () {
                $(this).css('opacity', '1');

            });

            $('.prev').mouseenter(function () {
                $(this).css('opacity', '.3');
            }).mouseout(function () {
                $(this).css('opacity', '1');

            });
        });