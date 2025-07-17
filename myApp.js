let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.send(absolutePath);
});






























 module.exports = app;
