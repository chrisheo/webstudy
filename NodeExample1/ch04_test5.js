//파일 다루기
var fs = require('fs');

var data = fs.readFileSync('./package.json', 'utf8');

console.log(data);







