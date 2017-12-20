module.exports =
{
		userslogin_db: function(response,res,callback){
		console.log("inside login db");
		var result = false;
		var MongoClient = require('mongodb').MongoClient;
		var url = 'mongodb://balaji:balaji@ds161136.mlab.com:61136/socsite';
		var email=response.email;
		var password=response.password;
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var myobj = { email:email,password: password };
		  console.log("obj"+JSON.stringify(myobj));
		  db.collection("users").findOne(myobj, function(err, result) {
			if (err) 
				throw err;
			db.close();
			result = false;
				
			callback(result, res);
		  });
		});
	}
}