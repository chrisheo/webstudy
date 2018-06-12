//스트림단위로 파일 읽고 쓰
var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'});

infile.on('data', function(data) {
    console.log('읽어들인 데이터 : ' + data);
});

infile.on('end', function() {
    console.log('읽기 끝~');
})


