
AOS.init();
$(document).ready(function () {

  // ================header=========================//
  //sub-menu

  $(".menu ul li").click(function(){
    $(this).css("color","#0078AA");
    $(".menu ul li").not(this).css("color","#363636");
    $(this).find(".sub-menu").slideToggle();
    $(".menu ul li").not(this).find(".sub-menu").hide();
  });

  // pop-up
  $(".open-menu").click(function(){
    $(".menu").slideToggle();
  });

  $(".open-menu-2").click(function(){
     $(".logo").slideToggle();
    $(".hidden-menu").slideToggle();
  });

  $(".menu-2 ul li").click(function(){
    $(this).css("color","#0078AA");
    $(".menu-2 ul li").not(this).css("color","#363636");
    $(this).find(".sub-menu-2").slideToggle();
    $(".menu-2 ul li").not(this).find(".sub-menu-2").hide();
  });

  // ================section-1=========================//
  // custom-accordian
  $(".custom-accordian .text").hide();
  $(".custom-accordian .btn-6").click(function () {
    $(".text").hide();
    $(this).next(".text").slideToggle();
    $(".custom-accordian .btn-6 a").css("color", "black");
    $($(this).find("a")).css("color", "white");
    $('.custom-accordian .btn-6').css("background", "#CCE6ED");
    $(this).css("background", " #0078AA");
    $($(this).find(".icon")).hide();
    $(".custom-accordian .btn-6").find(".icon-2").css("display","none");
    $(".custom-accordian .btn-6").find(".icon").css("display","block");
    $(this).find(".icon").css("display","none");
    $($(this).find(".icon-2")).show().css("color", "white");
    
    
  });
  // ================section-3=========================//

  // slick slider
  $(".main-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    arrows: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },

        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
    ]
    

  });

  // ================section-4=========================//
  $(".custom-accordian .btn-7").click(function () {
    $(".text").hide();
    $(this).next(".text").slideToggle();
    $(".custom-accordian .btn-7 a").css("color", "black");
    $($(this).find("a")).css("color", "white");
    $('.custom-accordian .btn-7').css("background", "#CCE6ED");
    $(this).css("background", " #0078AA");
    $($(this).find(".icon")).hide();
    $(".custom-accordian .btn-7").find(".icon-2").css("display","none");
    $(".custom-accordian .btn-7").find(".icon").css("display","block");
    $(this).find(".icon").css("display","none");
    $($(this).find(".icon-2")).show().css("color", "white");
  });

  // ================section-5=========================//
  const counters = document.querySelectorAll(".number");

  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 1000;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });
  
  // ================section-7=========================//
  $(".section-7 .tab-content").hide();
  $(".section-7 #tab-1").show();

  $(".section-7 .tab-boxes .tab-box").click(function(){
    $(".tab-content").hide();
    $($(this).attr("href")).slideToggle();
    $('.section-7 .tab-boxes .tab-box').css("background", "#FFFFFF");
    $(this).css("background", " #0078AA");
    $($('.section-7 .tab-boxes .tab-box').find(".content")).css("color", " black");
    $($(this).find(".content")).css("color", " #FFFFFF");
    $($('.section-7 .tab-boxes .tab-box').find("img")).css("filter", "none");
    $($(this).find("img")).css("filter", "brightness(2)");
  });

  AOS.init();
});



