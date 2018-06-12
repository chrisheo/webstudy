//readFile은 파일을 다 읽지 않고 다음코드 readFilesync는 파일을 다 읽고 넘어감

var fs = require('fs');


fs.readFile('./package.json', 'utf8', function(err, data) {
    console.log(data);
});





