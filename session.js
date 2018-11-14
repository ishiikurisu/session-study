var Hashes = require('jshashes');
var salt = process.argv[2];
var data = process.argv[3];
var hash = new Hashes.SHA1();
var result = hash.b64(salt + data);
for (var i = 0; i < 1000; i++) {
    console.log(i + ". " + result);
    result = hash.b64(salt + result);
}
console.log('SHA1: ' + result);