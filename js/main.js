

$(window).on("load", function(){
    
    // preloader
    $(".preloader").fadeOut(600);

    // home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();

    //audio
    $(".fa-music").click(function(){
        if($(this).hasClass("pause")){
            $("#myAudio")[0].play();
        }
        else{
            $("#myAudio")[0].pause();
        }
        $(this).toggleClass("pause");
    })

})


$(document).ready(function(){

    //nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    //scrollit
    $.scrollIt({
        topOffset: -50
    });

    

    //gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })

    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
        $(".gp-counter").text((itemIndex+1) + "/" + totalGalleryItems);
    }

    //close gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    //hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })

    //gift filter
    giftFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
            giftFilter($(this).attr("data-target"))
        }
    })

    function giftFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".gift-item").hide();
        $(".gift-item[data-category='"+target+"']").fadeIn();
    }

    
    $(function() {
        $("ul > a").click(function() {
          var lang = $(this).data("lang");
          if (lang == "en")
            $('input[type="text1"]').attr('placeholder', 'Full name');
          else
            $('input[type="text1"]').attr('placeholder', 'Nama Lengkap');

            if (lang == "en")
            $('input[type="email"]').attr('placeholder', 'Email address');
          else
            $('input[type="email"]').attr('placeholder', 'Alamat email');
            
            if (lang == "en")
            $('input[type="text2"]').attr('placeholder', 'Mobile number');
          else
            $('input[type="text2"]').attr('placeholder', 'Nomor Handphone');
            
            if (lang == "en")
            $('input[type="text3"]').attr('placeholder', 'Will you attend my invitation?');
          else
            $('input[type="text3"]').attr('placeholder', 'Apakah anda akan hadir ?');

            if (lang == "en")
            $('input[type="text4"]').attr('placeholder', 'Domicile address');
          else
            $('input[type="text4"]').attr('placeholder', 'Alamat domisili');

            if (lang == "en")
            $('textarea[type="text5"]').attr('placeholder', 'Write a greeting or prayer for the bride and groom');
          else
            $('textarea[type="text5"]').attr('placeholder', 'Tulis salam atau doa untuk pengantin');
  
        })
      });

})


