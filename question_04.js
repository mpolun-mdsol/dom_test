$(function(){
	var heading = $('h1');
	var navigationLinks = $('#navigation a');
	$(navigationLinks).on('click',function(event){
	  event.preventDefault();
	  $(heading).html($(this).attr('href'))
	});
});