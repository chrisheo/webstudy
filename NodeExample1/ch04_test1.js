//주소 문자열 다루기
var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=ee';

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log('query -> ' + curUrl.query);

var curStr = url.format(curUrl);
console.log('url -> ' + curStr);


var querystring = require('querystring');
var params = querystring.parse(curUrl.query);

console.log('검색어 : ' + params.query);

