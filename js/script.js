var num = $('div.nav').offset().top;

var scrollHandler = function () {
      console.log(num, $(window).scrollTop());
      if ($(window).scrollTop() > num) {
         $('div.nav').addClass('fixed');
         //console.log(num);
      } else {
         $('div.nav').removeClass('fixed');
      }
  }

  $(window).on('scroll', scrollHandler);

 $('.canvas').on('click', 'div.menu-toggle', function(){
   if(!$(this).hasClass('menu-toggle--active')){
      $('.mobile-menu').addClass('open');
      $(this).addClass('menu-toggle--active');
  }else{
      $('.mobile-menu').removeClass('open');
      $(this).removeClass('menu-toggle--active');
  }
 });

 $('.canvas').on('click', 'a.discover' , function(){  
   $(window).off('scroll');    
   $('html, body').stop(true).animate({
      scrollTop: $($(this)[0].hash).offset().top - 75
    }, 1200, 'swing');  
    $(window).on('scroll', scrollHandler);
 });

 $('.canvas').on('click', '.mobile-nav a' , function(){
   $('html, body').animate({
      scrollTop: $($(this)[0].hash).offset().top 
    }, 1200, 'swing');
    setTimeout(function(){
      $('.mobile-menu').removeClass('open'); 
    }, 1300);
 });

 $('.about-me').on('click', 'a.read-more', function(e){
    e.preventDefault();
    $('.me .about-me p.more').css('opacity', '1');
    $('.me .about-me p.more').css('height', '165px');
 });