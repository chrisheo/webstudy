function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

add(10, 10, function(result) {
    console.log('더하기 콜백 : ', + result);
});
