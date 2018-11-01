var express = require('express');
var app = express();

// TODO use the following line
// app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile("/index.html", options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
