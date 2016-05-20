var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

app.get('/', function (req, res) {
  res.send('<h1>Hello World!!!</h1>');
})

app.get("/greet/:name",function(req,res){
  res.send("Hello  "+req.params.name);
});

app.get("/image",function(req,res){
res.sendFile(__dirname+ "/public/index.html");
});
app.listen(3000);
