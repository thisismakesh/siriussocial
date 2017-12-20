function login(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("psw").value;
	data = {"email":email , "password":password}
    $.ajax({
    url: "http://localhost:8080/LogInUser",
    headers:{ 
        "Content-Type":"application/json"
    },
	type: 'POST',
    data: JSON.stringify(data),
		success: function (data) {
			window.location = "../html/homepage.html";	
		},
		error: function(data) {
			console.log("failure");
			alert("Password/Email is incorrect");
		}

	});
	return false;
}