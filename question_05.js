$(function(){
	var showDivLink = $('.wrapper a');
	var listInput = $('#listInput');
	var listForm = $('#listForm');
	var listInputText = $('#listInput .text');
	var wrapper = $('.wrapper');
	
	$(document).click(function() {
	  $(listInput).addClass('displayNone');
	  $(showDivLink).removeClass('hideDiv').html('Show Div');
	});
	
	$(showDivLink).on('click',function(event){
	  event.stopPropagation();
	  event.preventDefault();
	  if($(this).hasClass('hideDiv')){
		  $(this).removeClass('hideDiv').html('Show Div');
		  $(listInput).addClass('displayNone');
	  }else{
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
		  if ($("#stageList").length > 0){
			 $("#stageList").append('<li>' + $(listInputText).val() + '</li>') 
		  }else{
			 $(wrapper).append('<ul id="stageList"><li>' + $(listInputText).val() + '</li></ul>') 
		  }	  
		  $(listInput).addClass('displayNone');
		  $(listInputText).val('');
		  $(showDivLink).removeClass('hideDiv').html('Show Div');	  	  
	  }
	});
	
});