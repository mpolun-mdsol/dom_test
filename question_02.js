$(function() {
	// how would you turn this simple validation into a jQuery plug-in?
	var ValidateForm = {
		validate: function(){
		  var isFirstNameValid = ValidateForm.firstNameValidation(ValidateForm.inputs.firstName);
		  var isPhoneValid = ValidateForm.phoneValidation(ValidateForm.inputs.phoneNumber);		  
		  return{
			 validFirstName :  isFirstNameValid,
			 validPhoneNumber : isPhoneValid
		  }	  
		},		
		firstNameValidation : function(firstName){
			// strict comparison
			// clearer formatting
		  if(firstName.val() != '' 
		  		&& ValidateForm.rules.textOnly.test(firstName.val()) 
		  		&& firstName.val() != ValidateForm.placeholders.firstNameHolder
		  	){
			return true; 
		  }else{
		  	// is there a way to only check one value and not need the else?
			return false;  
		  }	  
		},
		phoneValidation : function(phoneNumber){
		  if(phoneNumber.val() != '' && ValidateForm.rules.phoneNumberOnly.test(phoneNumber.val())){
			return true;  
		  }else{
			return false;  
		  }
		},
		addPlaceholder : function(){
			var firstNamePlaceholder = ValidateForm.placeholders.firstNameHolder;
			var phoneNumberPlaceholder = ValidateForm.placeholders.phoneHolder;
			
			// it's hard to read all the variable names. This could be better if the object was passed into the function.
			//	$(this) could be cached once as $this and it would be more legible
			$(ValidateForm.inputs.firstName).val(firstNamePlaceholder).addClass('placeholder');
			$(ValidateForm.inputs.phoneNumber).val(phoneNumberPlaceholder).addClass('placeholder');			
			$('input[type=text]').on('focus', function(event){
				var inputID = $(this).attr('id');
				switch(inputID){
				   case 'first-name' : 
				   		// object caching
				   		if($(this).val() == firstNamePlaceholder){
				  		  $(this).val('').removeClass('placeholder');
						}
				        break;
				   case 'phone-number' :
				   		if($(this).val() == phoneNumberPlaceholder){
				  		  $(this).val('').removeClass('placeholder');
						}
				        break;
				   default:
				        return;
				     	
				}
				
			});


			$('input[type=text]').on('blur', function(event){
				var inputID = $(this).attr('id');
				switch(inputID){
				   case 'first-name' : 
				   // object caching
				   		if($(this).val() == ''){
				  		  $(this).val(firstNamePlaceholder).addClass('placeholder');
						}
				        break;
				   case 'phone-number' :
				   		if($(this).val() == ''){
				  		  $(this).val(phoneNumberPlaceholder).addClass('placeholder');
						}
				        break;
				   default:
				        return; 	
				}
			});

		},
		inputs:{
		  firstName : $('#first-name'),
		  phoneNumber : $('#phone-number')
		},
		rules:{
	      textOnly : /^[A-Za-z]+$/,
		  phoneNumberOnly : /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
		  
		},
		errors:{
		  firstNameError : '*Please enter a first name.',
		  phoneError : '*Please enter a valid telephone number.'	
		},
		placeholders:{
		  firstNameHolder : 'First Name',
		  phoneHolder : 'Phone Number'	
		}
	}
	
	$('#sign-up').on('submit', function(event) {   
	   var validateThisForm = ValidateForm.validate();
	   $(this).find('.errorMsg').remove();	
	   $(this).find('input').removeClass('fieldError')      
	   // are there more efficient ways to write the code below?
	   if(!validateThisForm.validFirstName || !validateThisForm.validPhoneNumber){

			 if(!validateThisForm.validPhoneNumber){
			 	// this could be a utility function
				$(ValidateForm.inputs.phoneNumber).addClass('fieldError');
				$(this).prepend('<p class="errorMsg">' + ValidateForm.errors.phoneError + '</p>') 
			 }
			 if(!validateThisForm.validFirstName){
				$(ValidateForm.inputs.firstName).addClass('fieldError'); 
				$(this).prepend('<p class="errorMsg">' + ValidateForm.errors.firstNameError + '</p>')
			 }	 
	     return false;   
	   }         
    });
	
    ValidateForm.addPlaceholder();
});