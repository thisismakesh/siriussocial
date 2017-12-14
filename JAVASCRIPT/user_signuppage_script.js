var check = function() {
	var x=1;
	var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
		x=-1;
		alert('Please provide a valid email address');
		exit();
	}
	var usr=  /^[A-Za-z]\w{7,14}$/; 
	if(document.getElementById('usrname').value.match(usr))   {    
	}	
	else  
	{  
		x=-1;
		alert('UserName should be only characters, numeric digits, underscore and first character must be a letter...!')
		exit()
	}
	if(document.getElementById('usrname').value.length <10){
		x=-1;
		alert('UserName should be atleast 10 characters')
		exit()
	}
	var passw=  /^[A-Za-z]\w{7,14}$/; 
	if(document.getElementById('psw').value.length <8){
		x=-1;
		alert('Password should be atleast 8 characters')
		exit()
	}
	if(document.getElementById('psw').value.match(passw))   {    
	}  
	else  
	{   
		x=-1;
		alert('Password should be only characters, numeric digits, underscore and first character must be a letter...!')  
		exit()
	}  
	if (document.getElementById('psw').value !=
		document.getElementById('psw-repeat').value) {
		alert("Passwords do not match.");
		x=-1;
		exit()
	}
	if(x==1){
		alert("You have been successfully Signed Up!!!!")
	}
}