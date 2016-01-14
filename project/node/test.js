var http = require('http');

var url = require('url');

function onRequest(req,res){
	 var pathname = url.parse(req.url);

	 res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(pathname.href);
    res.end();
}

http.createServer(onRequest).listen(8888);
console.log('run');