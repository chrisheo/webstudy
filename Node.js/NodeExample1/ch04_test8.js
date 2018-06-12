//파일 읽고 쓰기
var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd) {
    if (err) {
        console.log('파일 오픈시 error occured');
        console.dir(err);
        return;
    }
    var buf = new Buffer('안녕\n나는 연우야\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if (err) {
            console.log('에러났어~~');
            console.dir(err);
            return;
        }
        
        console.log('파일 쓰기 완료');
        
        fs.close(fd, function() {
            console.log('파일 닫았어~');
        })
    });
});






