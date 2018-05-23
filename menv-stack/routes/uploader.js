// var express = require('express');
// var router = express.Router();
// 
// router.get('/uploader', function(req, res, next) {
//     console.log('Hello');
//     next()
// }, function (req, res) {
//     res.send(
//         [{
//             title: "Hello world"
//         }]
//     );
//     res.status(200).json({ message: 'Conntect' });
// });

// module.exports = router;

module.exports = (function() {
    'use strict';
    var uploader = require('express').Router();
    
    uploader.get('/uploader', function(req, res) {
        res.send('Hello uploader');
    });
    return uploader;
})();