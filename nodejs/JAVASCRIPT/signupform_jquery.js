var signupform= require('./signupform_db.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
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
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

/*app.get('/signup', function(req, res) {
    res.sendFile('../HTML/user_signuppage.html', {
        root: __dirname
    });
});*/
app.post('/SignUpUser', function (req, res) {
   //fetch user details
   //validate data
   //store data to DB
   //send response
   //console.log("inside signup"+req.body.email);
   var email = req.body.email;
   var username = req.body.username;
   var password = req.body.password;
   var response = {"username":username,"password":password,"email":email}
   signupform.usersignup_db(response,function(result){
	   //console.log("hey"+result);
	   if(result)
	   res.send({"status":"success"});
   else res.send({"status":"failure"});
	   
   });
   
	
})
