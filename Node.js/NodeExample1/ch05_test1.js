var http = require('http');

var server = http.createServer();
var host = '49.165.38.142';
var port = 3000;
server.listen(port, host, 50000, function() {
    console.log('웹서버 실행되었수 : ' + host + ':' + port);
});



