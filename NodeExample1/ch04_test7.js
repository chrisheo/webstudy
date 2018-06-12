var fs = require('fs');

fs.writeFile('./output.txt', 'Hello.m y lo ve', function(err) {
    if (err) {
        console.log('에러 띠용 : ');
        console.dir(err);
        return;
    }
    
    console.log('output.txt 파일에 데이터쓰기 completed');
});



