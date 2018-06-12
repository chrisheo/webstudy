//모듈불러오기
var Calc = require('./Calc3');

var calc1 = new Calc();
calc1.emit('stop');


console.log('Calc 에 stop 이벤트 sended.');






