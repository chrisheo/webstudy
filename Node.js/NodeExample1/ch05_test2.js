//리퀘스트
var http = require('http');

var server = http.createServer();
var host = '49.165.38.142'
var port = 3262;
server.listen(port, host, 50000, function() {
    console.log('웹서버 실행되었수');
});

server.on('connection', function(socket) {
    console.log('클라이언트가 접속햇수')
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왓수');
    //console.dir(req);
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write('<h1>웹서버로부터 받은 응답이유</h1>');
    res.end();
});



