// server file to server routes
var express = require('express');
var app = express();
var morgan = require('morgan');

var book_route = require('/routes/book.js');
var uploader_route = require('/routes/uploader.js');

app.use('/book', book_route);
app.use('/uploader', uploader_route);

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(3000, function() { 
});