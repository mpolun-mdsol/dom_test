$(function(){


	var showDivLink = $('.wrapper a');
	
	var listInput = $('#listInput');
	
	var listForm = $('#listForm');
	
	var listInputText = $('#listInput .text');
	
	var wrapper = $('.wrapper');
	
	$(document).click(function() {

		// is there really a need for a display none class? 
	  $(listInput).addClass('displayNone');

	  // bonus for toggling the text
	  $(showDivLink).removeClass('hideDiv').html('Show Div');
	
	});
	
	$(showDivLink).on('click',function(event){
	  
	  event.stopPropagation();
	  event.preventDefault();

	  // our answer was to ignore clicks on the button/link
	  if($(this).hasClass('hideDiv')){
		  
		  $(this).removeClass('hideDiv').html('Show Div');

		  $(listInput).addClass('displayNone');
	  
	  } else { 

		  $(this).addClass('hideDiv').html('Hide Div');
		  
		  $(listInput).removeClass('displayNone');
	  
	  };

	});
	
	$(listInput).on('click',function(event){
	  event.stopPropagation();
	});
	
	$(listForm).on('submit',function(event){
	  event.preventDefault();

	  if($(listInputText).val() != ''){
	  	// would be better to have an empty list on the page to begin with
		  if ($("#stageList").length > 0){
		  	// jQuery object creation is neater
			 $("#stageList").append('<li>' + $(listInputText).val() + '</li>') 
		  } else {
			 $(wrapper).append('<ul id="stageList"><li>' + $(listInputText).val() + '</li></ul>') 
		  }	  
		  // not convinced about a displayNone class when you can simply hide things with jQuery
		  // a case can be made for css animation with this
		  $(listInput).addClass('displayNone');
		  $(listInputText).val('');
		  // all the toggling is a good case for a function for this
		  $(showDivLink).removeClass('hideDiv').html('Show Div');	  	  
	  }

	});
	
});