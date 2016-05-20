var express = require('express');
var app = express();

app.get('/add/:num1/:num2', function (req, res) {
  var sum=parseInt(req.params.num1,10)+parseInt(req.params.num2,10);
  res.send("The addition is "+ sum);
});

app.get('/sub/:num1/:num2', function (req, res) {
  var sub=parseInt(req.params.num1,10)-parseInt(req.params.num2,10);
  res.send("The substraction is "+ sub);
});
app.get('/multi/:num1/:num2', function (req, res) {
  var sum=parseInt(req.params.num1,10)*parseInt(req.params.num2,10);
  res.send("The multiplication is "+ sum);
});

app.get('/div/:num1/:num2', function (req, res) {
  var sum=parseInt(req.params.num1,10)/parseInt(req.params.num2,10);
  res.send("The division is "+ sum);
});
app.listen(3000);
