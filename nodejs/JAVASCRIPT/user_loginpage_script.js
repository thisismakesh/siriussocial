var check = function() {
	document.getElementById("response").innerHTML="Your response has been recorded";
}
function setCookie(){
	var email=document.getElementById('email').value;
	document.cookie="email="+email;
}