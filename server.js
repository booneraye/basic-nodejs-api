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
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

var server = app.listen(8081, function (){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})