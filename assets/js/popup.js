$('button').click(function(){
    console.log("clicked")
    $('.pop-up').addClass('open');
  });
  
  $('.pop-up .close').click(function(){
    $('.pop-up').removeClass('open');
  });