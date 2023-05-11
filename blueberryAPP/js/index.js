
    $(function(){
        // 1.轮播图
        function bannerSwiper(){
            var mySwiper = new Swiper ('.swiper', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                parallax: true,
            });
        }
        
        // 2.动态获取轮播图数据
        $.ajax({
            type: 'get',
            url: 'http://iwenwiki.com/api/blueberrypai/getIndexBanner.php',
            success: function(res){
                var arr = res.banner;
                var str = '';
                for(var i = 0; i < arr.length; i++){
                    var newImg = arr[i].img.replace(/www.wwtliu.com\/sxtstu/g, 'iwenwiki.com/api');
                    str += `
                        <div class="swiper-slide">
                            <img src="${newImg}" alt="">
                            <div class="wrapper">
                                <h3>${arr[i].title}</h3>
                                <p>${arr[i].content}</p>
                            </div>
                        </div>`;
                }
                $(".banner .swiper-wrapper").html(str);
                bannerSwiper();
            }
        });

         // 3.乐章轮播图
         function movementSwiper() {
            var movementSwiper = new Swiper('.movementSwiper', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }

        movementSwiper();
    });

