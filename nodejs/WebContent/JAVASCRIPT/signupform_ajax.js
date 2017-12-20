function signup(){
	console.log("hi");
	var email = document.getElementById("email").value;
	var username = document.getElementById("usrname").value;
	var password_ = document.getElementById("psw").value;
	data = {"email":email,
			"username":username,
			"password":password_};
			
	console.log("BEFORE AJAX:"+JSON.stringify(data));
    $.ajax({
    url: "http://localhost:8080/SignUpUser",
	type: 'POST',
    headers:{ 
        'Content-Type':'application/json',
		'Access-Control-Allow-Origin':'*'
    },
    data: JSON.stringify(data),
	success: function (data) {
		//console.log("success");
			window.location = "../html/user_loginpage.html";	
	},
	error: function(data) {
		console.log("failure");
			
	}
    });
	console.log("Yes");
	return false;
}