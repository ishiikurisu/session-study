var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/api/something', function (req, res) {
    res.send('nothing...');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
