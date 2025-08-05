require('dotenv').config();

let express = require('express');
let app = express();

//app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/views/index.html');
//});

//app.use("/public", express.static(__dirname + "/public"));

//app.get('/json', (req, res) => {
//    const style = process.env.MESSAGE_STYLE;
//    const message = style && style.toLowerCase() === 'uppercase'
//      ? "HELLO JSON"
//      : "Hello json";
//  
//    res.json({ message });
//  });
  
//app.use(function(req, res, next) {
//    console.log(`${req.method} ${req.path} - ${req.ip}`);
//    next(); // para que la app no se bloquee: investigar mejor esto
//});
  
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json({ time: req.time });
});
  








 module.exports = app;
