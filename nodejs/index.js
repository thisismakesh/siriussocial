var signupform= require('./modules/signupform_db.js');
var loginform= require('./modules/loginform_db.js');
var ProfileSettings= require('./modules/updateSettingsDb.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('WebContent'));
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
//signup
app.get('/signUp', function(req, res) {
    res.sendFile('WebContent/html/user_signuppage.html', {
        root: __dirname
    });
});
app.post('/SignUpUser', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside signup"+JSON.stringify(req.body));
   var email = req.body.email;
   var username = req.body.username;
   var password = req.body.password;
   var response = {"username":username,"password":password,"email":email}
   signupform.usersignup_db(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
	   
   });
	
})


//welcomePage
app.get('/welcomePage', function(req, res) {
    res.sendFile('WebContent/html/main_home_page.html', {
        root: __dirname
    });
});
app.post('/userWelcomePage', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside signup"+JSON.stringify(req.body));
   var email = req.body.email;
   var username = req.body.username;
   var password = req.body.password;
   var response = {"username":username,"password":password,"email":email}
   signupform.usersignup_db(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
	   
   });
	
})

//login
app.get('/logIn', function(req, res) {
    res.sendFile('WebContent/html/user_loginpage.html', {
        root: __dirname
    });
});
app.post('/logInUser', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside login"+JSON.stringify(req.body));
   var email = req.body.email;
   var password = req.body.password;
   var response = {"email":email,"password":password}
   loginform.user_logindb(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
   });
	
})


//addpost
app.get('/addPost', function(req, res) {
    res.sendFile('WebContent/html/homepage.html', {
        root: __dirname
    });
});
app.post('/addPosts', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside addPost"+JSON.stringify(req.body));
   var userName = req.body.username;
   var imageUrl=req.body.imageUrl;
   var response = {"username":userName,"imageurl":imageUrl};
   profileSettings.(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
	   
   });
	
})

//getpost
app.get('/getPost', function(req, res) {
    res.sendFile('WebContent/html/homepage.html', {
        root: __dirname
    });
});
app.post('/getPosts', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside getPost"+JSON.stringify(req.body));
   var response = {}
   profileSettings.(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
	   
   });
	
})

//addfriends
app.get('/addFriend', function(req, res) {
    res.sendFile('WebContent/html/homepage.html', {
        root: __dirname
    });
});
app.post('/addFriends', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside addfriends"+JSON.stringify(req.body));
   var friendName=req.body.friendName; 
   var response = {"friendname":friendName}
   profileSettings.(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
	   
   });
	
})


//profilesettings
app.get('/saveSettings',function(req,res){
	res.sendFile('WebContent/html/profileSettings.html',{root: __dirname});
});
app.post('/saveProfileSettings',function(req,res){
	console.log("now at app.post");
	var response = {"email" : req.body.email,
					"name" : req.body.name,
					"gender" : req.body.gender,
					"age" : req.body.age,
					"dob" : req.body.dob,
					"city" : req.body.city,
					"country" : req.body.country };
	updateSettingsDb.doUpdateSettingsDb(response,res,function(result,response1){
		console.log("got "+result);
		if(result){
			response1.send({"status":"success"});
		}
		else {
			response1.send({"status":"failure"});
		}
	});
});

//logout
app.get('/logOut', function(req, res) {
    res.sendFile('WebContent/html/main_home_page.html', {
        root: __dirname
    });
});
app.post('/logOutUser', function (req, res) {
   //console.log("inside-----"+req);
  // console.log("inside login"+JSON.stringify(req.body));
   var response = {}
   loginform.user_logindb(response, res,function(result, response1){
	   console.log("hey"+result);
		if(result){
			response1.send({"status":"success"});
		}
		else 
			response1.send({"status":"error"});
   });
	
})
