// server file to server routes
var express = require('express');
var app = express();

var book_route = require('/routes/book.js');
var uploader_route = require('/routes/uploader.js');

app.use('/book', book_route);
app.use('/uploader', uploader_route);


app.listen(3000, function() { 
    console.log('app is listening to port 3000');
});