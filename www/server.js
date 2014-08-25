// server.js
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080; 		// set our port
var router = express.Router(); 				// get an instance of the express Router
app.get('/', function(req, res){
	res.send("hello");
	 // res.send('Hello World1');
	 //res.sendfile('index.html');
	// res.sendfile('index.html');
	  //res.json({ message: 'hooray! welcome to our api!' });	

});

app.get('/api', function(req, res){
	//res.sendfile('index1.html');
	 //es.send('Hello World');
	 res.json({"Artists":[
	    {"firstName":"John", "lastName":"Doe"}, 
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter", "lastName":"Jones"}
	]});	
});
app.post('/testPost', function(req, res) {
	 //res.header("Access-Control-Allow-Origin", "*"); 
	//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var name = req.body.firstName,
        color = req.body.lastName;
        console.log("name and color======"+name+"---"+color);
    // ...
});
app.listen(port);
console.log("working fine");

