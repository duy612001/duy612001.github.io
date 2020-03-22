$(function () {
    // PIE CHART
        $('.chart').easyPieChart({
        });
    // PORTFOLIO
        $('.portfolio .menu p').click(function (e) { 
            e.preventDefault();
            $('.portfolio .menu p').removeClass('active1');
            $(this).addClass('active1');
    
            var ft = $(this).data('filter')
    
            $('.portfolio li').each(function (index, element) {
                // element == this
                if ($(this).hasClass(ft)) {
                    $(this).fadeIn();
                    
                } else {
                    $(this).fadeOut();
                }
            });
            
        });
    // CAROUSEL
        time = setInterval(() => {
    
            $('.reviews .carousel').removeClass('back');
    
            var slide_active = $('.active');
            if ($('.reviews li.slide:last').hasClass('active')) {
                $('.reviews li.slide:last').removeClass('active');
                $('.reviews li.slide:first').addClass('active');
                $('.reviews li.slide:last').addClass('deactive');
                $('.reviews li.slide:first').removeClass('deactive');
            } else {
                $(slide_active).removeClass('active');
                $(slide_active).next().addClass('active');
                $(slide_active).addClass('deactive');
                $(slide_active).next().removeClass('deactive');
            }
    
        }, 5000);
    
        $('.reviews .next').click(function (e) { 
            e.preventDefault();
    
            $('.reviews .carousel').removeClass('back');
    
            var slide_active = $('.active');
    
            if ($('.reviews li.slide:last').hasClass('active')) {
                $('.reviews li.slide:last').removeClass('active');
                $('.reviews li.slide:first').addClass('active');
                $('.reviews li.slide:last').addClass('deactive');
                $('.reviews li.slide:first').removeClass('deactive');
            } else {
                $(slide_active).removeClass('active');
                $(slide_active).next().addClass('active');
                $(slide_active).addClass('deactive');
                $(slide_active).next().removeClass('deactive');
            }
            clearInterval(time);
            
        });
    // PREV NÀY LẰNG NHẰNG VL =))
        $('.reviews .prev').click(function (e) { 
            e.preventDefault();
            $('.reviews .carousel').addClass('back');
    
            var slide_active = $('.active');
        
            if ($('.reviews li.slide:first').hasClass('active')) {
                $('.reviews li.slide:first').removeClass('active');
                $('.reviews li.slide:last').addClass('active');
                $('.reviews li.slide:first').addClass('deactive');
                $('.reviews li.slide:last').removeClass('deactive');
            } else {
                $(slide_active).removeClass('active');
                $(slide_active).prev().addClass('active');
                $(slide_active).addClass('deactive');
                $(slide_active).prev().removeClass('deactive');
            }
            clearInterval(time);
    
        });
    
        // CLICK VÀO CIRCLE ĐỂ CHUYỂN SLIDE
        $('.reviews li.circle').click(function (e) { 
            e.preventDefault();
            var cc = $(this); 
            var x = $('li.slide');
                y = $('.active');
                z = 0;
    
            for (var i = 1; cc.prev().length == 1; i++) {
                cc = cc.prev();                
            }
    
    // ẤN VÀO CIRCLE NHƯNG THEO HƯƠNG PREV
            for (var m = 0; m < x.length; m++) {  
                if ($(x[m]).hasClass('active')) {
                    z = m;
                    console.log(z);
                }    
            }       
            if (i <= z) {
                $('.reviews .carousel').addClass('back');
            } else {
                $('.reviews .carousel').removeClass('back');
            }
    
    // ẤN VÀO CIRCLE NHƯNG THEO HƯỚNG NEXT
            if ($(x[i-1]).hasClass('active')) {
    
            } else {
                $(x[i-1]).addClass('active');
                $(y).removeClass('active');
                $(y).addClass('deactive');
                $(x[i-1]).removeClass('deactive'); 
            }
        });
    
        $(window).scroll(function () { 
            if (window.pageYOffset >= $('.contact').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m8').addClass('active2');
    
            } else if(window.pageYOffset >= $('.reviews').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m7').addClass('active2');
            
            } else if(window.pageYOffset >= $('.pricing').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m6').addClass('active2');
            
            } else if(window.pageYOffset >= $('.portfolio').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m5').addClass('active2');
            
            } else if(window.pageYOffset >= $('.experiences').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m4').addClass('active2');
            
            } else if(window.pageYOffset >= $('.skills').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m3').addClass('active2');
            
            } else if(window.pageYOffset >= $('.about').offset().top-300) {
                $('.m').removeClass('active2');
                $('.m2').addClass('active2');
            } else {
                $('.m').removeClass('active2');
                $('.m1').addClass('active2');
            }
        });
    
        $('.m').click(function (e) { 
            e.preventDefault();
            $('.m').removeClass('active2');
            $(this).addClass('active2');
        });
    
        $(window).scroll(function () { 
            if (window.pageYOffset >= 100) {
                $('header').addClass('bs');
            } else {
                $('header').removeClass('bs');
            }
        });
    
        $('li.m1').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.home').offset().top - 300
            }, 1000);
        });
        $('li.m2').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.about').offset().top -200
            }, 1000);
        });
        $('li.m3').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.skills').offset().top 
            }, 1000);
        });
        $('li.m4').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.experiences').offset().top -200
            }, 1000);
        });
        $('li.m5').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.portfolio').offset().top 
            }, 1000);
        });
        $('li.m6').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.pricing').offset().top -200
            }, 1000);
        });
        $('li.m7').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.reviews').offset().top 
            }, 1000);
        });
        $('li.m8').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop: $('.contact').offset().top -150
            }, 1000);
        });
    
        $(window).scroll(function () { 
            if (window.pageYOffset>=200) {
                $('.back-to-top').addClass('opacity');
            } else {
                $('.back-to-top').removeClass('opacity');
            }
        });
        $('.back-to-top').click(function (e) { 
            e.preventDefault();
            $('html').animate({
                scrollTop:0
            },500);
        });
    
    
    });