$(function(){
	
	var getInputs = getMatchingInputs();				
	var textInput = getInputs.textInput;
	var submitInput = getInputs.submitInput;
	var numberToEnable = 5;
    textInput.value = '';
	
	textInput.onkeypress = function(event){	
	  var keyEvent = event || window.event; 
	  var key = keyEvent.keyCode || keyEvent.charCode;  
	  if(key != 32){ 
	    if(key != 8){ 
		  var inputLength = this.value.length + 1;
		  enableDisableButton(inputLength);
		}	    
	  }else{
	    return false;  
	  }
	}
		
	textInput.onkeydown = function(event){
	  
	  var keyEvent = event || window.event; 
	  var key = keyEvent.keyCode || keyEvent.charCode;
	  
	  console.log(this, event)

	  if(key == 8 && (this.value.length - 1) >= 0){ 
	    var inputLength = this.value.length - 1;
	    enableDisableButton(inputLength);
	  }
	  
	  // I feel like this is a good case for using .trim()
	  // this maybe could go first
	  if(key == 32){ 
	    return false; 
	  }

  }
		
	textInput.onkeyup = function(event){  
	  var keyEvent = event || window.event; 
	  var key = keyEvent.keyCode || keyEvent.charCode;
	  
	  if(key == 8 && this.value.length  == 0){ 
	    enableDisableButton(0);
	  }

	}
		
	function enableDisableButton(lengthCount){
	  if(lengthCount >= numberToEnable){
	    submitInput.disabled = false;	
	  }else{
			submitInput.disabled = true;
	  }
	}
		
	function getMatchingInputs(){

	  var matchingTextInput;
	  var matchingSubmitInput;
	  
	  var inputElements = document.getElementsByTagName('input');

	  for (var i = 0; i < inputElements.length; i++){
			var inputTypeAttribute = inputElements[i].getAttribute('type');
			if (inputTypeAttribute == 'submit'){
			  matchingSubmitInput = inputElements[i]			  	
			}else{
			  matchingTextInput = inputElements[i];
			}
	  }
	  return {
	    textInput : matchingTextInput,
		submitInput : matchingSubmitInput
	  }
	};
});