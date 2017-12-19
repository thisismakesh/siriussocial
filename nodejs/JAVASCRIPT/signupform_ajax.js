function signup(){
	var email = document.getElementById("email").value;
	var username = document.getElementById("usrname").value;
	var password = document.getElementById("psw").value;
	data = {"email":email , "username":username , "password":password}
	//console.log(JSON.stringify(data));
    $.ajax({
    url: 'http://localhost:8081/SignUpUser',
    headers:{ 
        "Content-Type":"application/json"
    },
    data: data,
	type: 'POST',
    success: function (data) {
            // do something with the result
			
        }
    });
	//console.log("Yes");
	return false;
}