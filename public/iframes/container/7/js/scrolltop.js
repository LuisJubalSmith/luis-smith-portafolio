
$(document).ready(function(){
  $('.go-top').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 200 ){
      $('.go-top').slideDown(300);
    } else {
      $('.go-top').slideUp(300);
    }
  });
 });


  /*
  $(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
      } else {
      $('.go-top').fadeOut(200);
      }
      });
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })
  });
  */

