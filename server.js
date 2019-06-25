var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUser', function (req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
		console.log(data);
		res.end(data);
	});
})


var user = {
	"user4" : {
		"name" : "boone",
		"password" : "password3",
		"profession" : "clerk",
		"id" : 4
	}
}

app.post('/addUser', function (req, res){
	fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data1){
		data1 = JSON.parse(data1);
		data1["user4"] = user["user4"];
		console.log(data1);
		res.end(JSON.stringify(data1));
	});
})

var server = app.listen(8081, function (){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})