let express = require('express');
let app = express();
require('dotenv').config();

//app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/views/index.html');
//});
//
//app.use("/public", express.static(__dirname + "/public"));

app.get('/json', function(req, res) {
    var response = 'Hello Json'
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response = response.toUpperCase();
    } 
    res.json({"message": response});

});



















 module.exports = app;
