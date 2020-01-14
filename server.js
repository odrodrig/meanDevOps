var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res,next) {
 res.sendFile(__dirname + '/dist'+'/supply-store/index.html'); 
});app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");