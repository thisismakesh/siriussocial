module.exports =
{
	 usersignup_db: function(response,res,callback){
		console.log("inside mongo db");
		var result = false;
		var MongoClient = require('mongodb').MongoClient;
		var url = 'mongodb://balaji:balaji@ds161136.mlab.com:61136/socsite';
		var username=response.username;
		var email=response.email;
		var password=response.password;
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var myobj = { username: username,password: password,email:email  };
		  console.log("obj"+JSON.stringify(myobj));
		  db.collection("users").insertOne(myobj, function(err, result) {
			if (err) throw err;
			console.log("res"+result);
			db.close();
			console.log("db close");
			result = true;
			callback(result, res);
			
		  });
		});
		
		
	}
}
