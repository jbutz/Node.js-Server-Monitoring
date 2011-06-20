var http = require('http');

var options = {
	host: "10.0.0.3",
	port: 80,
	path: "/WOTRK/index.php"
};

var req = http.get(options, function(res)
{
	var STATUS = res.statusCode;
	console.log("STATUS: " + STATUS);
	if(STATUS == 200)
	{
		console.log("HTTP Server & Web App Up");
	}
	else
	{
		console.log("HTTP Server or Web App DOWN");
	}
});

req.end();
