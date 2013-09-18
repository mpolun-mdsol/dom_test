$(function(){
	
  var heading = $('h1');
	
  // not delegation
  var navigationLinks = $('#navigation a');

  // this whole thing could be the event handler
	$(navigationLinks).on('click',function(event){
	  event.preventDefault();
	  $(heading).html($(this).attr('href'))
	});
  
});