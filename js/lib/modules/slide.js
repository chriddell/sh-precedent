define(['jquery'], function(){
  $('.customise__trigger--open').click(function(){
    $('.customise').animate({
      left: "+=250"
    }, 1000, function(){
      $('.customise__trigger--open').hide();
      $('.customise__trigger--close').css('display', 'table');
    });
  });
  $('.customise__trigger--close').click(function(){
    $('.customise').animate({
      left: "-=250"
    }, 1000, function(){
      $('.customise__trigger--close').hide();
      $('.customise__trigger--open').show();
    });
  });
});