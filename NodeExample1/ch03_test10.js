var users = [{name : '소녀시대', age:20},{name:'걸스데이',age:23}, {name:'나이수', age:244}];


for (var i = 0; i < users.length; i++) {
    console.log('배열 원소 #' + i + ':' +users[i].name);
}

users.forEach(function(elem, index) {
    console.log('배열 원소 #' +index +':' + elem.name);
});

