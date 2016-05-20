var http= require("http");

function greet(req,res)
{
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Hello World!");
  res.end();
}

var server = http.createServer(greet);
server.listen(8000);
