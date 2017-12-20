var check = function() {
	var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
		document.getElementById("emailval").innerHTML="this is invalid email";
		//exit();
	}
	else{
		document.getElementById("emailval").innerHTML="";
		//exit();
	}
}
var checkuser = function(){
	var usr=  /^[A-Za-z]\w{7,14}$/; 
	if(document.getElementById('usrname').value.match(usr)){
		document.getElementById("userval").innerHTML="";
	}	
	else 
	{  
		document.getElementById("userval").innerHTML="this is invalid name";
		//exit()
	}
	if(document.getElementById('usrname').value.length <10){
		document.getElementById("userval").innerHTML="Username be 10 characters";
		//exit()
	}
	else{
		document.getElementById("userval").innerHTML="";
		//exit()
	}
}
var checkpsw = function(){
	var passw=  /^[A-Za-z]\w{7,14}$/; 
	if(document.getElementById('psw').value.length <8){
		document.getElementById("pswval").innerHTML="Password be 10 characters";
		//exit()
	}
	else{
		document.getElementById("pswval").innerHTML="";
		//exit()
	}
	if(document.getElementById('psw').value.match(passw))   { 
		document.getElementById("pswval").innerHTML="";
		//exit()
	}  
	else  
	{   
		document.getElementById("pswval").innerHTML="Password not be only special characters and first character must be a alphabet";  
		//exit()
	}  
}
var checkpswr = function(){
	if (document.getElementById('psw').value !=
		document.getElementById('psw-repeat').value) {
		document.getElementById("psw-repeatval").innerHTML="Passwords are not matching!";
		//exit()
	}
	else{
		document.getElementById("psw-repeatval").innerHTML="";
	}
}
